"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Users, Building2, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function GlobalImpact() {
  return (
    <section className="relative py-24 bg-background border-b border-border/40 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-45 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Left Column: World Map Visual */}
          <motion.div 
            className="lg:col-span-7 flex justify-center relative w-full h-[320px] rounded-3xl border border-border bg-card/20 backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Tech grid backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

            {/* SVG Network Map */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 500 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <style>{`
                @keyframes map-dash {
                  to {
                    stroke-dashoffset: -20;
                  }
                }
                .delivery-line {
                  stroke-dasharray: 4 6;
                  animation: map-dash 2s linear infinite;
                }
              `}</style>

              {/* Dotted Abstract Map Shapes (Mock continents) */}
              {/* North America */}
              <circle cx="90" cy="90" r="25" fill="currentColor" className="text-border/10" />
              {/* Europe */}
              <circle cx="230" cy="80" r="20" fill="currentColor" className="text-border/10" />
              {/* Asia */}
              <circle cx="370" cy="100" r="30" fill="currentColor" className="text-border/10" />
              {/* South America */}
              <circle cx="150" cy="210" r="18" fill="currentColor" className="text-border/10" />
              {/* Australia */}
              <circle cx="420" cy="230" r="15" fill="currentColor" className="text-border/10" />

              {/* Connection Lines from Dhaka HQ (360, 130) to hubs */}
              {/* Dhaka to New York (95, 100) */}
              <path d="M 360 130 C 260 90, 180 80, 95 100" stroke="currentColor" className="text-border/40" strokeWidth="1" />
              <path d="M 360 130 C 260 90, 180 80, 95 100" stroke="var(--primary)" className="delivery-line opacity-60" strokeWidth="1" />

              {/* Dhaka to London (230, 90) */}
              <path d="M 360 130 C 310 100, 270 90, 230 90" stroke="currentColor" className="text-border/40" strokeWidth="1" />
              <path d="M 360 130 C 310 100, 270 90, 230 90" stroke="var(--primary)" className="delivery-line opacity-60" strokeWidth="1" />

              {/* Dhaka to Sydney (420, 230) */}
              <path d="M 360 130 C 390 160, 400 200, 420 230" stroke="currentColor" className="text-border/40" strokeWidth="1" />
              <path d="M 360 130 C 390 160, 400 200, 420 230" stroke="var(--secondary)" className="delivery-line opacity-60" strokeWidth="1" />

              {/* Delivery Node Markers */}
              {/* North America Hub */}
              <circle cx="95" cy="100" r="3" fill="var(--primary)" className="animate-ping" />
              <circle cx="95" cy="100" r="2" fill="var(--primary)" />

              {/* Europe Hub */}
              <circle cx="230" cy="90" r="3" fill="var(--primary)" className="animate-ping" />
              <circle cx="230" cy="90" r="2" fill="var(--primary)" />

              {/* Sydney Hub */}
              <circle cx="420" cy="230" r="3" fill="var(--secondary)" className="animate-ping" />
              <circle cx="420" cy="230" r="2" fill="var(--secondary)" />

              {/* Dhaka HQ */}
              <circle cx="360" cy="130" r="5" fill="var(--primary)" className="animate-[ping_3s_infinite]" />
              <circle cx="360" cy="130" r="3.5" fill="var(--primary)" />
            </svg>

            {/* Float Markers */}
            <div className="absolute left-[20%] top-[30%] flex items-center gap-1 bg-background/80 border border-border/20 rounded-md p-1 px-1.5 shadow-sm text-[8px] font-mono font-bold text-foreground">
              <MapPin className="size-2 text-primary" />
              <span>North America</span>
            </div>
            <div className="absolute left-[45%] top-[25%] flex items-center gap-1 bg-background/80 border border-border/20 rounded-md p-1 px-1.5 shadow-sm text-[8px] font-mono font-bold text-foreground">
              <MapPin className="size-2 text-primary" />
              <span>Europe Hub</span>
            </div>
            <div className="absolute right-[22%] top-[40%] flex items-center gap-1 bg-background/80 border border-border/20 rounded-md p-1 px-1.5 shadow-sm text-[8px] font-mono font-bold text-foreground">
              <MapPin className="size-2 text-primary" />
              <span>Dhaka HQ</span>
            </div>
            <div className="absolute right-[12%] bottom-[20%] flex items-center gap-1 bg-background/80 border border-border/20 rounded-md p-1 px-1.5 shadow-sm text-[8px] font-mono font-bold text-foreground">
              <MapPin className="size-2 text-secondary" />
              <span>APAC Hub</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Metrics */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
              GLOBAL FOOTPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              Trusted By Businesses Around The World
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              With client operations in North America, Europe, and Asia-Pacific, Brainzon coordinates legacy modernization, secure SaaS systems integration, and AI transformation across border boundaries.
            </p>

            {/* Metrics List */}
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-4 border-b border-border/10 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">100+ Businesses Supported</h4>
                  <p className="text-[11px] text-muted-foreground">Successfully delivering scalable platforms and ERP setups.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-border/10 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <Building2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Multiple Industries Covered</h4>
                  <p className="text-[11px] text-muted-foreground">Expert solutions for Retail, Manufacturing, Logistics, and Health.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Globe2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Global Technology Delivery</h4>
                  <p className="text-[11px] text-muted-foreground">Proactive developers and consultants scaling across timezones.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
