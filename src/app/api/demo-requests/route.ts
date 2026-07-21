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
    const adminApiUrl = process.env.ADMIN_API_URL || process.env.NEXT_PUBLIC_ADMIN_SITE_URL || "http://localhost:3001";

    const adminResponse = await fetch(`${adminApiUrl}/api/demo-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!adminResponse.ok) {
      const errorText = await adminResponse.text();
      console.error(`Admin API demo ingestion failed (${adminResponse.status}):`, errorText);
      throw new Error(`Admin service returned status ${adminResponse.status}`);
    }

    const adminResult = await adminResponse.json();

    return NextResponse.json(
      {
        success: true,
        message: "Enterprise demo booking request received successfully. A solutions architect will contact you to confirm the meeting slot.",
        id: adminResult.id,
        status: adminResult.status,
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

