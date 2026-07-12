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
    const timestamp = new Date().toISOString();

    // 1. SIMULATED EMAIL NOTIFICATION
    // In production, you would integrate Resend, SendGrid, or AWS SES here.
    // Example using Resend:
    // await resend.emails.send({
    //   from: 'Brainzon Inquiries <inquiries@brainzon.com>',
    //   to: ['sales@brainzon.com', 'info@brainzon.com'],
    //   subject: `New Contact Inquiry - Brainzon [${data.inquiryType}]`,
    //   html: EmailHtmlTemplate(data, timestamp)
    // });
    console.log("==================================================");
    console.log("EMAIL NOTIFICATION SENT (SIMULATED)");
    console.log("Subject: New Contact Inquiry - Brainzon");
    console.log("Timestamp:", timestamp);
    console.log("--------------------------------------------------");
    console.log(`Inquiry Type: ${data.inquiryType}`);
    console.log(`Contact Name: ${data.name}`);
    console.log(`Company:      ${data.company} (${data.companySize})`);
    console.log(`Email:        ${data.email}`);
    console.log(`Phone:        ${data.phone || "N/A"}`);
    console.log(`Country:      ${data.country || "N/A"}`);
    console.log(`Website:      ${data.website || "N/A"}`);
    console.log("Message:");
    console.log(data.message);
    console.log("==================================================");

    // 2. SIMULATED CRM & DATABASE STORAGE
    // TODO: Salesforce / HubSpot API integration:
    // await hubspot.contacts.createOrUpdate({ email: data.email, properties: { firstname: data.name, company: data.company, ... } })
    //
    // TODO: Database persist (e.g. Prisma / Postgres):
    // await prisma.contactInquiry.create({ data: { ... } })

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. Our solutions team will be in touch shortly.",
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
