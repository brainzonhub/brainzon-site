import { NextResponse } from "next/server";
import { z } from "zod";

const enterpriseDemoBookingSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  businessEmail: z
    .string()
    .email("Please enter a valid business email address"),
  companyName: z
    .string()
    .min(1, "Company name is required")
    .max(150, "Company name must be under 150 characters"),
  phone: z.string().optional(),
  country: z.string().optional(),
  companySize: z.string().optional(),
  solutions: z.array(z.string()).optional(),
  currentSystem: z.string().optional(),
  businessChallenge: z.string().optional(),
  preferredMeetingTime: z
    .string()
    .datetime({ message: "Preferred meeting time must be a valid ISO date string" })
    .optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = enterpriseDemoBookingSchema.safeParse(body);

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

    // 1. SIMULATED CRM & SALES LOGGING
    console.log("==================================================");
    console.log("ENTERPRISE DEMO BOOKING RECEIVED (SIMULATED)");
    console.log("Timestamp:", timestamp);
    console.log("--------------------------------------------------");
    console.log(`Full Name:   ${data.fullName}`);
    console.log(`Email:       ${data.businessEmail}`);
    console.log(`Company:     ${data.companyName}`);
    console.log(`Phone:       ${data.phone || "N/A"}`);
    console.log(`Country:     ${data.country || "N/A"}`);
    console.log(`Company Size: ${data.companySize || "N/A"}`);
    console.log(`Solutions:   ${data.solutions?.join(", ") || "None selected"}`);
    console.log(`Current Sys: ${data.currentSystem || "N/A"}`);
    console.log(`Challenge:   ${data.businessChallenge || "N/A"}`);
    console.log(`Meeting Time: ${data.preferredMeetingTime || "N/A"}`);
    console.log("==================================================");

    // 2. SIMULATED DATA PERSISTENCE & CRM INTEGRATION
    // TODO: Salesforce / HubSpot API lead capture
    // TODO: Microsoft Exchange / Google Calendar slot reservation

    return NextResponse.json(
      {
        success: true,
        message: "Enterprise demo booking request received successfully. A solutions architect will contact you to confirm the meeting slot.",
        booking: {
          ...data,
          receivedAt: timestamp,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Demo Requests API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please ensure the payload is valid JSON.",
      },
      { status: 500 }
    );
  }
}
