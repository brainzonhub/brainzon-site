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
    const adminApiUrl = process.env.ADMIN_API_URL || process.env.NEXT_PUBLIC_ADMIN_SITE_URL || "http://localhost:3001";

    const adminResponse = await fetch(`${adminApiUrl}/api/contact-messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!adminResponse.ok) {
      const errorText = await adminResponse.text();
      console.error(`Admin API ingestion failed (${adminResponse.status}):`, errorText);
      throw new Error(`Admin service returned status ${adminResponse.status}`);
    }

    const adminResult = await adminResponse.json();

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. Our solutions team will be in touch shortly.",
        id: adminResult.id,
        status: adminResult.status,
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

