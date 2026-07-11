import { z } from "zod";

export const demoFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(150, "Company name must be under 150 characters"),
  email: z
    .string()
    .email("Please enter a valid business email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  companySize: z.string().optional(),
  solutions: z
    .array(z.string())
    .min(1, "Please select at least one solution"),
  currentSystem: z.string().optional(),
  challenge: z.string().max(2000, "Message must be under 2000 characters").optional(),
  meetingTime: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;
