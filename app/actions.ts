"use server";

import { Resend } from "resend";
import { z } from "zod";
import { render } from "@react-email/render"; // Import the render function
import { ContactNotificationEmail } from "./emails/ContactNotificationEmail";
import { ContactConfirmationEmail } from "./emails/ContactConfirmationEmail";
import { contactFormSchema } from "../lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.CONTACT_FORM_EMAIL_TO;

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(
  data: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(data);
  if (!validatedFields.success) {
    return { success: false, message: "Błąd walidacji danych." };
  }

  const { name, email, company, phone, service, message } =
    validatedFields.data;

  if (!emailTo) {
    console.error("Missing CONTACT_FORM_EMAIL_TO environment variable");
    return { success: false, message: "Błąd konfiguracji serwera." };
  }

  try {
    // Render the React components to HTML strings first
    const notificationHtml = render(
      ContactNotificationEmail({
        name,
        email,
        company,
        phone,
        service,
        message,
      })
    );
    const confirmationHtml = render(ContactConfirmationEmail({ name }));

    // Send the emails using the 'html' property instead of 'react'
    await Promise.all([
      resend.emails.send({
        from: "JG Marine Website <no-reply@twojadomena.com>",
        to: emailTo,
        subject: `Nowe zapytanie od ${name}`,
        reply_to: email,
        html: notificationHtml, // Use the rendered HTML
      }),
      resend.emails.send({
        from: "JG Marine <no-reply@twojadomena.com>",
        to: email,
        subject: "Potwierdzenie otrzymania zapytania - JG Marine",
        html: confirmationHtml, // Use the rendered HTML
      }),
    ]);

    return { success: true, message: "Wiadomość została wysłana!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Nie udało się wysłać wiadomości." };
  }
}
