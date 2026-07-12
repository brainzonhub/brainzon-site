"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/contact-schema";
import { inquiryTypes, companySizes, companyContactInfo } from "@/config/contact";
import { Container } from "@/components/layout/Container";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Award,
  Globe2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      website: "",
      inquiryType: "",
      companySize: "",
      message: "",
    },
  });

  // Listen for the custom event to set the inquiry type
  useEffect(() => {
    const handleSetInquiryType = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setValue("inquiryType", customEvent.detail);
      }
    };

    window.addEventListener("set-inquiry-type", handleSetInquiryType);
    return () => {
      window.removeEventListener("set-inquiry-type", handleSetInquiryType);
    };
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setGlobalError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        reset();
      } else {
        setGlobalError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setGlobalError("Failed to submit inquiry. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="relative overflow-hidden py-16 md:py-24 border-b border-border/40 bg-background transition-colors duration-300">
      {/* Visual background elements */}
      <div className="absolute top-[40%] right-[-10%] -z-10 h-[50%] w-[50%] rounded-full bg-radial-gradient from-accent/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-10 rounded-3xl border border-border bg-card/40 backdrop-blur-md shadow-elevated">
              {submitSuccess ? (
                <div className="text-center py-12 px-4 animate-in fade-in zoom-in duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 shadow-glow-primary">
                      <CheckCircle2 size={36} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message Sent Successfully!</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                    Thank you for contacting Brainzon. Your inquiry has been forwarded to our technology specialists. We will review your details and get back to you within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 px-6 py-2.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-glow-primary cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground">Initiate a Conversation</h2>
                    <p className="text-xs text-muted-foreground mt-2">
                      Please fill out the form below. Required fields are marked with an asterisk (<span className="text-secondary">*</span>).
                    </p>
                  </div>

                  {globalError && (
                    <div className="mb-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary flex items-start gap-3 text-xs animate-in fade-in duration-300">
                      <AlertCircle className="shrink-0" size={16} />
                      <div>
                        <span className="font-bold">Submission Error:</span> {globalError}
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-2">
                          Full Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                            errors.name ? "border-secondary/60 focus:ring-secondary" : "border-border"
                          )}
                          placeholder="John Doe"
                          disabled={isSubmitting}
                          {...register("name")}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-[11px] text-secondary flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-foreground mb-2">
                          Company Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          autoComplete="organization"
                          aria-invalid={errors.company ? "true" : "false"}
                          aria-describedby={errors.company ? "company-error" : undefined}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                            errors.company ? "border-secondary/60 focus:ring-secondary" : "border-border"
                          )}
                          placeholder="Acme Corp"
                          disabled={isSubmitting}
                          {...register("company")}
                        />
                        {errors.company && (
                          <p id="company-error" className="mt-1.5 text-[11px] text-secondary flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-2">
                          Business Email <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                            errors.email ? "border-secondary/60 focus:ring-secondary" : "border-border"
                          )}
                          placeholder="john@company.com"
                          disabled={isSubmitting}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-[11px] text-secondary flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+1 (555) 000-0000"
                          disabled={isSubmitting}
                          {...register("phone")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Country */}
                      <div>
                        <label htmlFor="country" className="block text-xs font-semibold text-foreground mb-2">
                          Country
                        </label>
                        <input
                          id="country"
                          type="text"
                          autoComplete="country-name"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="United States"
                          disabled={isSubmitting}
                          {...register("country")}
                        />
                      </div>

                      {/* Website */}
                      <div>
                        <label htmlFor="website" className="block text-xs font-semibold text-foreground mb-2">
                          Company Website
                        </label>
                        <input
                          id="website"
                          type="text"
                          aria-invalid={errors.website ? "true" : "false"}
                          aria-describedby={errors.website ? "website-error" : undefined}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                            errors.website ? "border-secondary/60 focus:ring-secondary" : "border-border"
                          )}
                          placeholder="www.company.com"
                          disabled={isSubmitting}
                          {...register("website")}
                        />
                        {errors.website && (
                          <p id="website-error" className="mt-1.5 text-[11px] text-secondary flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.website.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Inquiry Type */}
                      <div>
                        <label htmlFor="inquiryType" className="block text-xs font-semibold text-foreground mb-2">
                          Inquiry Type <span className="text-secondary">*</span>
                        </label>
                        <select
                          id="inquiryType"
                          aria-invalid={errors.inquiryType ? "true" : "false"}
                          aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none",
                            errors.inquiryType ? "border-secondary/60 focus:ring-secondary" : "border-border"
                          )}
                          disabled={isSubmitting}
                          {...register("inquiryType")}
                        >
                          <option value="">Select an option</option>
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.inquiryType && (
                          <p id="inquiryType-error" className="mt-1.5 text-[11px] text-secondary flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.inquiryType.message}
                          </p>
                        )}
                      </div>

                      {/* Company Size */}
                      <div>
                        <label htmlFor="companySize" className="block text-xs font-semibold text-foreground mb-2">
                          Company Size <span className="text-secondary">*</span>
                        </label>
                        <select
                          id="companySize"
                          aria-invalid={errors.companySize ? "true" : "false"}
                          aria-describedby={errors.companySize ? "companySize-error" : undefined}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none",
                            errors.companySize ? "border-secondary/60 focus:ring-secondary" : "border-border"
                          )}
                          disabled={isSubmitting}
                          {...register("companySize")}
                        >
                          <option value="">Select company size</option>
                          {companySizes.map((size) => (
                            <option key={size.value} value={size.value}>
                              {size.label}
                            </option>
                          ))}
                        </select>
                        {errors.companySize && (
                          <p id="companySize-error" className="mt-1.5 text-[11px] text-secondary flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.companySize.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-2">
                        Message <span className="text-secondary">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-surface/50 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y",
                          errors.message ? "border-secondary/60 focus:ring-secondary" : "border-border"
                        )}
                        placeholder="Tell us about your digital transformation challenges..."
                        disabled={isSubmitting}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-[11px] text-secondary flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold rounded-lg text-primary-foreground bg-primary hover:bg-primary/95 transition-all shadow-glow-primary hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Contact info & Trust Elements */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Info Card */}
            <div className="p-8 rounded-3xl border border-border bg-card/40 backdrop-blur-md shadow-card space-y-6">
              <h3 className="text-lg font-bold text-foreground">Direct Contact Channels</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/10">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">General Info</span>
                    <a href={`mailto:${companyContactInfo.emails.general}`} className="text-xs text-foreground font-semibold hover:text-primary transition-colors">
                      {companyContactInfo.emails.general}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/10">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">Sales Inquiries</span>
                    <a href={`mailto:${companyContactInfo.emails.sales}`} className="text-xs text-foreground font-semibold hover:text-primary transition-colors">
                      {companyContactInfo.emails.sales}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/10">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">Global Office Line</span>
                    <a href={`tel:${companyContactInfo.phone}`} className="text-xs text-foreground font-semibold hover:text-primary transition-colors">
                      {companyContactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/10">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">Business Hours</span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {companyContactInfo.businessHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Trust Card */}
            <div className="p-8 rounded-3xl border border-border bg-card/20 backdrop-blur-sm space-y-6">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest font-mono text-primary">Enterprise Trust</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground">ISO 27001 Certified Security</h4>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                      All communications, files, and customer data logs are stored securely, adhering strictly to global SOC2 and ISO compliance frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Award size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground">Guaranteed 99.99% Core Service SLA</h4>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                      Our custom enterprise solutions carry strict service level agreements to keep your essential databases and automations running smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Globe2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground">Global Delivery Network</h4>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                      With active engineering hubs in America and Europe, we provide seamless 24/7/365 follow-the-sun modernization support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
