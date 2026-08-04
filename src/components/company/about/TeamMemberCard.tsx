"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/config/team";
import { X, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.03 2.03 0 1 0 4.75 7.06 2.03 2.03 0 0 0 4.75 3ZM21 13.69c0-3.84-2.05-5.63-4.78-5.63a4.13 4.13 0 0 0-3.75 2.06V8.25H9V21h3.47v-6.31c0-1.66.31-3.28 2.38-3.28 2.04 0 2.07 1.91 2.07 3.39V21H21v-7.31Z" />
    </svg>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Compact Interactive Team Member Card with Round Avatar */}
      <article 
        onClick={() => setIsOpen(true)}
        className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xs shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-glow-primary hover:-translate-y-1.5 cursor-pointer text-center"
      >
        {/* Top Header & Round Avatar */}
        <div className="relative pt-6 pb-2 px-4 flex flex-col items-center justify-center">
          {/* Order Badge */}
          <span className="absolute top-3 left-3 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-md bg-muted/80 border border-border/50 text-muted-foreground">
            #{member.displayOrder < 10 ? `0${member.displayOrder}` : member.displayOrder}
          </span>

          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${member.name}'s LinkedIn profile`}
              className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-lg bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-xs"
            >
              <LinkedInIcon className="size-3.5" />
            </a>
          )}

          {/* Round Fitted Avatar Container */}
          <div className="relative size-24 sm:size-28 rounded-full p-1 bg-gradient-to-tr from-primary/40 via-primary/10 to-secondary/30 border border-primary/30 group-hover:border-primary group-hover:shadow-glow-primary transition-all duration-300 shadow-md">
            <div className="relative size-full rounded-full overflow-hidden bg-muted/80">
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Card Body Details */}
        <div className="flex flex-1 flex-col p-4 pt-2 justify-between">
          <div>
            <h4 className="text-base font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {member.name}
            </h4>
            <p className="text-xs font-mono font-semibold text-primary mt-0.5 line-clamp-1">
              {member.role}
            </p>

            <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {member.summary}
            </p>
          </div>

          {/* Compact Expertise Tags */}
          <div className="mt-4 pt-3 border-t border-border/30">
            <div className="flex flex-wrap justify-center gap-1">
              {member.expertise.slice(0, 3).map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="text-[9.5px] font-mono font-semibold px-2 py-0.5 rounded bg-muted/60 border border-border/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors truncate max-w-[120px]"
                >
                  {item}
                </span>
              ))}
              {member.expertise.length > 3 && (
                <span className="text-[9.5px] font-mono font-bold text-primary px-1 py-0.5">
                  +{member.expertise.length - 3}
                </span>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-muted-foreground/70">
              <span className="group-hover:text-primary font-bold transition-colors">CLICK FOR FULL BIO</span>
              <Sparkles size={10} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </article>

      {/* Interactive Detail Modal / Dialog */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl space-y-6 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-xl bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-border/40 pb-5">
              <div className="relative size-16 rounded-full overflow-hidden border-2 border-primary/40 shrink-0 bg-muted shadow-glow-primary">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                  {member.group.toUpperCase().replace("-", " ")}
                </span>
                <h3 className="text-xl font-extrabold text-foreground mt-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-primary">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground block">
                Professional Overview:
              </span>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {member.summary}
              </p>
            </div>

            {/* Complete Expertise Tags */}
            <div className="space-y-2.5 pt-2 border-t border-border/30">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground block">
                Core Domains of Expertise:
              </span>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((exp) => (
                  <span key={exp} className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-lg bg-card-opaque border border-border text-foreground">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>{exp}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between">
              {member.linkedinUrl ? (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-glow-primary"
                >
                  <LinkedInIcon className="size-3.5" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-[10px] font-mono text-muted-foreground">VERIFIED BRAINZON SPECIALIST</span>
              )}
              
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
