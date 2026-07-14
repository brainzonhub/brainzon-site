import { NextResponse } from "next/server";
import { z } from "zod";

const contactMessageSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  companyName: z
    .string()
    .min(1, "Company name is required")
    .max(150, "Company name must be under 150 characters"),
  businessEmail: z
    .string()
    .email("Please enter a valid business email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  companyWebsite: z.string().optional(),
  inquiryType: z.string().min(1, "Inquiry type is required"),
  companySize: z.string().min(1, "Company size is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactMessageSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const timestamp = new Date().toISOString();

    // 1. SIMULATED EMAIL NOTIFICATION & CRM INGESTION LOGS
    console.log("==================================================");
    console.log("CONTACT MESSAGE RECEIVED (SIMULATED)");
    console.log("Timestamp:", timestamp);
    console.log("--------------------------------------------------");
    console.log(`Inquiry Type: ${data.inquiryType}`);
    console.log(`Full Name:    ${data.fullName}`);
    console.log(`Email:        ${data.businessEmail}`);
    console.log(`Company:      ${data.companyName} (${data.companySize})`);
    console.log(`Phone:        ${data.phone || "N/A"}`);
    console.log(`Country:      ${data.country || "N/A"}`);
    console.log(`Website:      ${data.companyWebsite || "N/A"}`);
    console.log("Message:");
    console.log(data.message);
    console.log("==================================================");

    // 2. SIMULATED CRM & DATABASE PERSISTENCE
    // TODO: HubSpot/Salesforce leads sync
    // TODO: Slack notification webhook trigger

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. Our solutions team will be in touch shortly.",
        messageDetails: {
          ...data,
          receivedAt: timestamp,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Messages API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please ensure the payload is valid JSON.",
      },
      { status: 500 }
    );
  }
}
