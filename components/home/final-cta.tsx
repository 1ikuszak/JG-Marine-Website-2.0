"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { contactFormSchema } from "@/lib/schemas"; // Poprawiony import
// import { sendContactEmail } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";

type ContactFormValues = z.infer<typeof contactFormSchema>;

// The blueprint SVG for a consistent, premium background
const BlueprintSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    className="text-white/5"
  >
    <defs>
      <pattern
        id="grid-cta"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-cta)" opacity="0.5" />
  </svg>
);

export default function FinalCtaWithForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    // const result = await sendContactEmail(data);
    setIsSubmitting(false);

    // if (result.success) {
    //   toast.success(result.message);
    //   form.reset();
    // } else {
    //   toast.error(result.message);
    // }
  }

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-0">
        <BlueprintSvg />
      </div>

      <div className="container relative z-10 mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: The "Why" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Chroń Swoje Aktywa Morskie Przed Stratami Milionowymi
              </h2>
              <p className="mt-4 text-xl text-white/80">
                Certyfikowani surveyorzy DNV dostępni 24/7. Wypełnij formularz,
                a my zajmiemy się resztą.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/20">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-white">
                    Telefon Alarmowy (24/7)
                  </h3>
                  <a
                    href="tel:+48123456789"
                    className="text-white/70 hover:text-accent"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-white">Zapytania Ogólne</h3>
                  <a
                    href="mailto:office@jg-marine.com"
                    className="text-white/70 hover:text-accent"
                  >
                    office@jg-marine.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-white">Główna Siedziba</h3>
                  <p className="text-white/70">Gdynia, Polska</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Wyślij Zapytanie
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">
                          Imię i Nazwisko
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jan Kowalski"
                            {...field}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">
                          Adres Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jan.kowalski@example.com"
                            {...field}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">
                        Rodzaj Usługi
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/20 text-white">
                            <SelectValue placeholder="Wybierz interesującą Cię usługę..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Marine Warranty & Heavy Lift">
                            Marine Warranty & Heavy Lift
                          </SelectItem>
                          <SelectItem value="Ekspertyzy Kadłubów i Maszyn">
                            Ekspertyzy Kadłubów i Maszyn
                          </SelectItem>
                          <SelectItem value="Ekspertyzy Ładunków i Transportu">
                            Ekspertyzy Ładunków i Transportu
                          </SelectItem>
                          <SelectItem value="Likwidacja Szkód i Audyty">
                            Likwidacja Szkód i Audyty
                          </SelectItem>
                          <SelectItem value="Inne">Inne Zapytanie</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Wiadomość</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Opisz krótko swoją sprawę..."
                          className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white text-md py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Wysyłanie...
                    </>
                  ) : (
                    "Wyślij Bezpieczne Zapytanie"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
