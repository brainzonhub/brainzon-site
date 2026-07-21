import { NextResponse } from "next/server";
import { demoFormSchema } from "@/lib/demo-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = demoFormSchema.safeParse(body);

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

    const adminPayload = {
      fullName: data.name,
      businessEmail: data.email,
      companyName: data.company,
      phone: data.phone || undefined,
      country: data.country || undefined,
      companySize: data.companySize || undefined,
      solutions: data.solutions,
      currentSystem: data.currentSystem || undefined,
      businessChallenge: data.challenge || undefined,
      preferredMeetingTime: data.meetingTime || undefined,
    };

    const adminResponse = await fetch(`${adminApiUrl}/api/demo-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminPayload),
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
        message: "Demo request received successfully",
        id: adminResult.id,
        status: adminResult.status,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Demo Request API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}

