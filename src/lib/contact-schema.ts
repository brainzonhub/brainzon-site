import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(150, "Company name must be under 150 characters"),
  email: z
    .string()
    .email("Please enter a valid business email address")
    .refine((val) => {
      // Enforce business email by blocking common personal email providers
      const personalDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com"];
      const parts = val.split("@");
      if (parts.length === 2 && parts[1]) {
        const domain = parts[1].toLowerCase();
        return !personalDomains.includes(domain);
      }
      return true;
    }, "Please enter a valid business email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  website: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      try {
        const urlStr = val.includes("://") ? val : `http://${val}`;
        new URL(urlStr);
        return true;
      } catch {
        return false;
      }
    }, "Please enter a valid website URL"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  companySize: z.string().min(1, "Please select your company size"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
