"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { contactFormSchema, sendContactEmail } from "@/app/actions";
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

export default function ContactSection() {
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
    const result = await sendContactEmail(data);
    setIsSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background border-t">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Context & Reassurance */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="font-semibold text-accent mb-2">KONTAKT</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Gotowi do Działania, Gotowi do Pomocy
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                Wypełnij formularz, a nasz zespół odpowie w ciągu 2 godzin
                roboczych. W sytuacjach krytycznych, skorzystaj z naszego
                telefonu alarmowego 24/7.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">
                    Telefon Alarmowy (24/7)
                  </h3>
                  <a
                    href="tel:+48123456789"
                    className="text-muted-foreground hover:text-accent"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">
                    Zapytania Ogólne
                  </h3>
                  <a
                    href="mailto:office@jg-marine.com"
                    className="text-muted-foreground hover:text-accent"
                  >
                    office@jg-marine.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">
                    Główna Siedziba
                  </h3>
                  <p className="text-muted-foreground">Gdynia, Polska</p>
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
            className="bg-muted/30 p-8 rounded-lg border"
          >
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
                        <FormLabel>Imię i Nazwisko</FormLabel>
                        <FormControl>
                          <Input placeholder="Jan Kowalski" {...field} />
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
                        <FormLabel>Adres Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jan.kowalski@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firma (opcjonalnie)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Baltic Shipping Line"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (opcjonalnie)</FormLabel>
                        <FormControl>
                          <Input placeholder="+48..." {...field} />
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
                      <FormLabel>Rodzaj Usługi</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
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
                      <FormLabel>Wiadomość</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Opisz krótko swoją sprawę..."
                          className="min-h-[120px]"
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
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Wysyłanie...
                    </>
                  ) : (
                    "Wyślij Zapytanie"
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
