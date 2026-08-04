const fs = require('fs');
const path = require('path');

const members = [
  { id: "member-01-ceo", name: "Ahasan Habib", role: "CEO", color1: "#0284c7", color2: "#0369a1", initials: "AH" },
  { id: "member-02-cto", name: "David Chen", role: "CTO", color1: "#0d9488", color2: "#0f766e", initials: "DC" },
  { id: "member-03-cmo", name: "Sophia Martinez", role: "CMO", color1: "#7c3aed", color2: "#6d28d9", initials: "SM" },
  { id: "member-04-architect", name: "Marcus Vance", role: "Architect", color1: "#2563eb", color2: "#1d4ed8", initials: "MV" },
  { id: "member-05-analyst", name: "Elena Rostova", role: "Analyst", color1: "#059669", color2: "#047857", initials: "ER" },
  { id: "member-06-erp", name: "Priya Patel", role: "ERP Lead", color1: "#d97706", color2: "#b45309", initials: "PP" },
  { id: "member-07-developer", name: "James Wilson", role: "Lead Dev", color1: "#0891b2", color2: "#0e7490", initials: "JW" },
  { id: "member-08-devops", name: "Viktor Novak", role: "DevOps", color1: "#4f46e5", color2: "#4338ca", initials: "VN" },
  { id: "member-09-qa", name: "Sarah Jenkins", role: "QA Lead", color1: "#e11d48", color2: "#be123c", initials: "SJ" },
  { id: "member-10-uiux", name: "Lucas Vance", role: "UI/UX", color1: "#c026d3", color2: "#a21caf", initials: "LV" },
  { id: "member-11-ai", name: "Dr. Aris Thorne", role: "AI Lead", color1: "#9333ea", color2: "#7e22ce", initials: "AT" },
  { id: "member-12-sales", name: "Michael Thorne", role: "Sales Dir", color1: "#ea580c", color2: "#c2410c", initials: "MT" },
  { id: "member-13-service", name: "Amanda Foster", role: "Customer Success", color1: "#16a34a", color2: "#15803d", initials: "AF" },
];

const teamDir = path.join(__dirname, '..', 'public', 'images', 'team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

members.forEach((m) => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${m.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${m.color1}" />
      <stop offset="100%" stop-color="${m.color2}" />
    </linearGradient>
    <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
    </linearGradient>
  </defs>

  <!-- Background Card Base -->
  <rect width="400" height="500" rx="0" fill="url(#bg-${m.id})" />

  <!-- Subtle Geometric Tech Grid Overlay -->
  <g opacity="0.12" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="100" x2="400" y2="100" />
    <line x1="0" y1="200" x2="400" y2="200" />
    <line x1="0" y1="300" x2="400" y2="300" />
    <line x1="0" y1="400" x2="400" y2="400" />
    <line x1="100" y1="0" x2="100" y2="500" />
    <line x1="200" y1="0" x2="200" y2="500" />
    <line x1="300" y1="0" x2="300" y2="500" />
  </g>

  <!-- Glowing Radial Backdrop -->
  <circle cx="200" cy="200" r="140" fill="#ffffff" opacity="0.08" />

  <!-- Head Silhouette -->
  <circle cx="200" cy="180" r="64" fill="url(#avatar-grad)" stroke="#ffffff" stroke-width="2" opacity="0.9" />
  
  <!-- Shoulder Silhouette -->
  <path d="M 90 400 C 90 290, 310 290, 310 400 Z" fill="url(#avatar-grad)" stroke="#ffffff" stroke-width="2" opacity="0.9" />

  <!-- Initials Badge Circle -->
  <circle cx="200" cy="180" r="42" fill="#0f172a" opacity="0.75" />
  <text x="200" y="191" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="30" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">${m.initials}</text>

  <!-- Bottom Glassmorphic Label Strip -->
  <rect x="20" y="425" width="360" height="55" rx="14" fill="#0f172a" opacity="0.82" stroke="#ffffff" stroke-width="1" stroke-opacity="0.2" />
  <text x="200" y="450" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">${m.name}</text>
  <text x="200" y="468" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="10" font-weight="600" fill="${m.color1}" text-anchor="middle" letter-spacing="1">${m.role.toUpperCase()}</text>
</svg>`;

  fs.writeFileSync(path.join(teamDir, `${m.id}.svg`), svgContent, 'utf8');
  console.log(`Created ${m.id}.svg`);
});
