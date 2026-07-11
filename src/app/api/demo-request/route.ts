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

    // TODO: CRM integration (e.g. Salesforce/HubSpot) — push lead data
    // TODO: Email notification to sales team — send formatted alert
    // TODO: Database storage — persist demo request for tracking
    // TODO: Calendar booking integration — create calendar event for demo slot

    return NextResponse.json(
      {
        success: true,
        message: "Demo request received successfully",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
