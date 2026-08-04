import { Container } from "@/components/layout/Container";
import { teamMembers, type TeamGroup, type TeamMember } from "@/config/team";
import { TeamMemberCard } from "./TeamMemberCard";
import { TeamAnchorScroll } from "./TeamAnchorScroll";

const groupLabels: Record<TeamGroup, string> = {
  executive: "Executive Leadership",
  "architecture-analysis": "Architecture & System Analysis",
  "engineering-qa": "Engineering, AI & Quality Assurance",
  "sales-service": "Global Sales & Customer Success",
};

const groupOrder: TeamGroup[] = [
  "executive",
  "architecture-analysis",
  "engineering-qa",
  "sales-service",
];

interface TeamSectionProps {
  members?: TeamMember[];
}

export function TeamSection({ members = teamMembers }: TeamSectionProps) {
  const sortedMembers = [...members].sort((a, b) => {
    const groupDifference = groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group);
    return groupDifference || a.displayOrder - b.displayOrder;
  });

  if (sortedMembers.length === 0) return null;

  const populatedGroups = groupOrder.filter((group) =>
    sortedMembers.some((member) => member.group === group),
  );
  const showGroupHeadings = populatedGroups.length > 1;
  const containsPlaceholders = sortedMembers.some((member) =>
    member.id.startsWith("replace-team-member-"),
  );

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="scroll-mt-24 border-b border-border/40 bg-surface/20 py-24 transition-colors duration-300"
    >
      <TeamAnchorScroll />
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-4">
          <span className="badge-primary">
            13 Core Multidisciplinary Specialists
          </span>
          <h2 id="team-heading" className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Meet the People Behind Brainzon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our multidisciplinary team combines executive leadership, software architecture, enterprise ERP consulting, cloud engineering, AI research, and customer success to deliver high-impact global technology platforms.
          </p>
        </div>

        {containsPlaceholders ? (
          <p className="mx-auto mb-10 max-w-3xl rounded-xl border border-accent/40 bg-accent/10 px-5 py-4 text-center text-sm font-medium text-foreground" role="note">
            Editorial preview: these profiles are placeholders and must be replaced with verified team information before publication.
          </p>
        ) : null}

        <div className="space-y-16">
          {populatedGroups.map((group) => {
            const groupMembers = sortedMembers.filter((member) => member.group === group);

            return (
              <div key={group} className="space-y-6">
                {showGroupHeadings ? (
                  <div className="flex items-center gap-3 border-b border-border/40 pb-3">
                    <span className="size-2 rounded-full bg-primary" />
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                      {groupLabels[group]}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground font-bold px-2 py-0.5 rounded-full bg-muted border border-border/60">
                      {groupMembers.length} MEMBERS
                    </span>
                  </div>
                ) : null}
                
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                  {groupMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
