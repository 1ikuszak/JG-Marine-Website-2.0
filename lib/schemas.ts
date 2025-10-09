import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Imię jest wymagane."),
  email: z.string().email("Nieprawidłowy adres email."),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Wybór usługi jest wymagany."),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków."),
});
