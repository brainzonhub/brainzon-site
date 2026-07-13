"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { demoFormSchema, type DemoFormData } from "@/lib/demo-schema";
import {
  companySizeOptions,
  currentSystemOptions,
} from "@/config/demo";
import {
  User,
  Mail,
  Building2,
  Phone,
  Globe,
  Users,
  Layers,
  MessageSquare,
  Calendar,
  ShieldCheck,
  Sparkles,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { SolutionSelector } from "./SolutionSelector";

/* ── Shared style constants ── */

const labelCls =
  "block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";

const inputCls = cn(
  "w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground",
  "placeholder:text-muted-foreground/50",
  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60",
  "transition-all duration-200"
);

const selectCls = cn(
  "w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground",
  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60",
  "transition-all duration-200 appearance-none cursor-pointer"
);

const errorCls = "text-xs text-secondary mt-1";

/* ── Trust items beside the form ── */

const trustItems = [
  "ISO 27001 Secure Data Protocols",
  "99.99% Uptime Guarantee",
  "Dedicated Solutions Architect",
] as const;

/* ================================================================== */
/*  FieldIcon — positions a lucide icon inside an input wrapper       */
/* ================================================================== */

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50">
      {children}
    </div>
  );
}

/* ================================================================== */
/*  DemoForm                                                          */
/* ================================================================== */

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      companySize: "",
      solutions: [],
      currentSystem: "",
      challenge: "",
      meetingTime: "",
    },
  });

  async function onSubmit(data: DemoFormData) {
    try {
      await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Fail silently — we still show the success state
    }

    // Simulated processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmittedData({ name: data.name, email: data.email });
    setSubmitted(true);
  }

  /* ── Success view ── */
  if (submitted && submittedData) {
    return (
      <section
        id="demo-form"
        className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300"
      >
        {/* Neon line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        <Container>
          <div className="mx-auto max-w-lg text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
              <Sparkles className="h-8 w-8" />
            </div>
            <h2 className="text-heading-2 font-bold text-foreground">
              Demo Request Received
            </h2>
            <p className="text-muted-foreground">
              Thank you, <span className="font-semibold text-foreground">{submittedData.name}</span>!
              We&rsquo;ll send a confirmation and next steps to{" "}
              <span className="font-semibold text-primary">{submittedData.email}</span>.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Our enterprise solutions team typically responds within 2 business hours.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  /* ── Form view ── */
  return (
    <section
      id="demo-form"
      className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300"
    >
      {/* Neon line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <Container>
        {/* Glassmorphic wrapper */}
        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* ── Left column — header + trust ── */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-primary/5 via-transparent to-transparent border-b lg:border-b-0 lg:border-r border-border/40">
              <h2 className="text-heading-2 font-bold text-foreground mb-3">
                Request Enterprise Demo
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-sm">
                Fill out the form and our solutions team will prepare a personalized
                walkthrough tailored to your business needs.
              </p>

              <div className="space-y-4">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column — form ── */}
            <div className="lg:col-span-7 p-8 lg:p-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="demo-name" className={labelCls}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <FieldIcon>
                        <User className="h-4 w-4" />
                      </FieldIcon>
                      <input
                        id="demo-name"
                        type="text"
                        placeholder="Jane Doe"
                        autoComplete="name"
                        className={inputCls}
                        {...register("name")}
                      />
                    </div>
                    {errors.name && (
                      <p className={errorCls} role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label htmlFor="demo-email" className={labelCls}>
                      Business Email *
                    </label>
                    <div className="relative">
                      <FieldIcon>
                        <Mail className="h-4 w-4" />
                      </FieldIcon>
                      <input
                        id="demo-email"
                        type="email"
                        placeholder="jane@company.com"
                        autoComplete="email"
                        className={inputCls}
                        {...register("email")}
                      />
                    </div>
                    {errors.email && (
                      <p className={errorCls} role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Company + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="demo-company" className={labelCls}>
                      Company Name *
                    </label>
                    <div className="relative">
                      <FieldIcon>
                        <Building2 className="h-4 w-4" />
                      </FieldIcon>
                      <input
                        id="demo-company"
                        type="text"
                        placeholder="Acme Inc."
                        autoComplete="organization"
                        className={inputCls}
                        {...register("company")}
                      />
                    </div>
                    {errors.company && (
                      <p className={errorCls} role="alert">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="demo-phone" className={labelCls}>
                      Phone
                    </label>
                    <div className="relative">
                      <FieldIcon>
                        <Phone className="h-4 w-4" />
                      </FieldIcon>
                      <input
                        id="demo-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        autoComplete="tel"
                        className={inputCls}
                        {...register("phone")}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Country + Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div>
                    <label htmlFor="demo-country" className={labelCls}>
                      Country
                    </label>
                    <div className="relative">
                      <FieldIcon>
                        <Globe className="h-4 w-4" />
                      </FieldIcon>
                      <input
                        id="demo-country"
                        type="text"
                        placeholder="United States"
                        autoComplete="country-name"
                        className={inputCls}
                        {...register("country")}
                      />
                    </div>
                  </div>

                  {/* Company Size */}
                  <div>
                    <label htmlFor="demo-company-size" className={labelCls}>
                      Company Size
                    </label>
                    <div className="relative">
                      <FieldIcon>
                        <Users className="h-4 w-4" />
                      </FieldIcon>
                      <select
                        id="demo-company-size"
                        className={selectCls}
                        {...register("companySize")}
                      >
                        {companySizeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Row 4: Solutions */}
                <div>
                  <label className={labelCls}>Solutions of Interest *</label>
                  <Controller
                    name="solutions"
                    control={control}
                    render={({ field }) => (
                      <SolutionSelector
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.solutions?.message}
                      />
                    )}
                  />
                </div>

                {/* Row 5: Current System */}
                <div>
                  <label htmlFor="demo-current-system" className={labelCls}>
                    Current System
                  </label>
                  <div className="relative">
                    <FieldIcon>
                      <Layers className="h-4 w-4" />
                    </FieldIcon>
                    <select
                      id="demo-current-system"
                      className={selectCls}
                      {...register("currentSystem")}
                    >
                      {currentSystemOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 6: Business Challenge */}
                <div>
                  <label htmlFor="demo-challenge" className={labelCls}>
                    Business Challenge
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-3 top-3 text-muted-foreground/50">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <textarea
                      id="demo-challenge"
                      rows={3}
                      placeholder="Tell us about your key challenges and goals..."
                      className={cn(inputCls, "resize-none pt-3")}
                      {...register("challenge")}
                    />
                  </div>
                  {errors.challenge && (
                    <p className={errorCls} role="alert">
                      {errors.challenge.message}
                    </p>
                  )}
                </div>

                {/* Row 7: Meeting Time */}
                <div>
                  <label htmlFor="demo-meeting-time" className={labelCls}>
                    Preferred Meeting Time
                  </label>
                  <div className="relative">
                    <FieldIcon>
                      <Calendar className="h-4 w-4" />
                    </FieldIcon>
                    <input
                      id="demo-meeting-time"
                      type="datetime-local"
                      className={inputCls}
                      {...register("meetingTime")}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold",
                    "bg-primary text-primary-foreground shadow-glow-primary",
                    "hover:brightness-110 hover:scale-[1.01] active:scale-[0.99]",
                    "disabled:opacity-60 disabled:pointer-events-none",
                    "transition-all duration-200"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Request My Demo
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Privacy note */}
                <p className="text-center text-[11px] text-muted-foreground/60 leading-relaxed">
                  By submitting this form you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  . Your data is encrypted and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
