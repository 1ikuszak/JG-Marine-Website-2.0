import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validate incoming data - Fixed deprecation warnings
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().min(8, "Phone must be at least 8 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate data
    const validatedData = contactSchema.parse(body);

    // Send email to your team
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "lukasz.glica07@gmail.com",
      subject: `New Survey Request from ${validatedData.name}`,
      replyTo: validatedData.email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 4px; border-left: 4px solid #3b82f6; }
              .footer { text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 14px; }
              .cta { background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Survey Request</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">JG Marine Contact Form</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">Contact Information</div>
                  <div class="value">
                    <strong>${validatedData.name}</strong><br>
                    ${validatedData.company ? `${validatedData.company}<br>` : ""}
                    📧 <a href="mailto:${validatedData.email}">${validatedData.email}</a><br>
                    📞 <a href="tel:${validatedData.phone}">${validatedData.phone}</a>
                  </div>
                </div>

                <div class="field">
                  <div class="label">Service Requested</div>
                  <div class="value">${validatedData.service.replace(/-/g, " ").toUpperCase()}</div>
                </div>

                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${validatedData.message.replace(/\n/g, "<br>")}</div>
                </div>

                <a href="mailto:${validatedData.email}" class="cta">Reply to ${validatedData.name}</a>
              </div>

              <div class="footer">
                <p>This email was sent from the JG Marine contact form</p>
                <p>Please respond within 24-48 hours per company standards</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: validatedData.email,
      subject: "Your Survey Request Has Been Received - JG Marine",
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1e3a8a;">Thank You for Your Request, ${validatedData.name}</h2>
              <p>We've received your survey request and our team will respond within <strong>24-48 hours</strong>.</p>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Your Request Details:</h3>
                <ul>
                  <li><strong>Service:</strong> ${validatedData.service}</li>
                  <li><strong>Company:</strong> ${validatedData.company || "Not provided"}</li>
                </ul>
              </div>

              <p>If you need immediate assistance, please don't hesitate to contact us:</p>
              <ul>
                <li>📞 Emergency Hotline (24/7): +48 XXX XXX XXX</li>
                <li>📧 Email: info@jg-marine.com</li>
              </ul>

              <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                Best regards,<br>
                <strong>JG Marine Team</strong><br>
                64 Years of Maritime Excellence
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues }, // Changed from error.errors to error.issues
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
