// components/contact/contact-form-section.tsx
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
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
import { CheckCircle, Loader2, Send } from "lucide-react";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  phone: z.string().min(8, "Phone required"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Please describe your situation (min 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

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
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitSuccess(true);
      toast.success("Request Sent Successfully!", {
        description: "We'll respond within 24-48 hours.",
      });

      setTimeout(() => {
        form.reset();
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to Send Request", {
        description: "Please try again or call our emergency hotline.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-lg p-8 md:p-10"
    >
      {/* Form Header - GP: Cut "Fill out" redundancy */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Request Survey
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Complete the form below. We respond within 2 hours during business
          hours. For emergencies, call our 24/7 hotline.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name & Email Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Full Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Smith"
                      {...field}
                      className="h-12"
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
                  <FormLabel className="text-foreground">
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Company & Phone Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Baltic Shipping Ltd"
                      {...field}
                      className="h-12"
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
                  <FormLabel className="text-foreground">
                    Phone Number *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+48 XXX XXX XXX"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Service Select */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">
                  Service Type *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select the service you need..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="marine-surveys">
                      Marine Surveys
                    </SelectItem>
                    <SelectItem value="cargo-inland">
                      Cargo & Inland Services
                    </SelectItem>
                    <SelectItem value="technical-consulting">
                      Technical Consulting & Engineering
                    </SelectItem>
                    <SelectItem value="claims-insurance">
                      Claims, Legal & Insurance Services
                    </SelectItem>
                    <SelectItem value="casualty-response">
                      Casualty Response & Investigation
                    </SelectItem>
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">
                  Describe Your Situation *
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide details about your vessel, cargo, or situation..."
                    className="min-h-[140px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button - REMOVED "Secure" */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg h-14"
            disabled={isSubmitting || submitSuccess}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Request...
              </>
            ) : submitSuccess ? (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                Request Sent!
              </>
            ) : (
              <>
                Submit Request
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/10 border border-green-500/30 rounded text-center"
            >
              <p className="text-green-600 dark:text-green-400 font-semibold">
                ✓ Your request has been received!
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Check your email for confirmation.
              </p>
            </motion.div>
          )}

          {/* Trust Message - NO SECURITY THEATER */}
          <div className="text-center text-sm text-muted-foreground pt-4">
            Response within 2 hours during business hours (Monday-Friday
            08:00-17:00 CET)
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
