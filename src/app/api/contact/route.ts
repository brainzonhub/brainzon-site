import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

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

    // Map form fields to admin schema (contactMessageInputSchema)
    const adminPayload = {
      fullName: data.name,
      companyName: data.company,
      businessEmail: data.email,
      phone: data.phone || undefined,
      country: data.country || undefined,
      companyWebsite: data.website || undefined,
      inquiryType: data.inquiryType,
      companySize: data.companySize,
      message: data.message,
    };

    // Forward to brainzon-admin endpoint
    const adminResponse = await fetch(`${adminApiUrl}/api/contact-messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminPayload),
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
        message: "Inquiry received successfully. Our solutions team will be in touch shortly.",
        id: adminResult.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}

