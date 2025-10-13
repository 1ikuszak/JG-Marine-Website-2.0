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
import {
  Phone,
  Mail,
  Clock,
  Shield,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";

// Form Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  phone: z.string().min(8, "Phone required"),
  service: z.string().min(1, "Please select a service"),
  urgency: z.enum(["emergency", "urgent", "standard"]),
  message: z
    .string()
    .min(10, "Please describe your situation (min 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function PremiumCtaSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [urgencyLevel, setUrgencyLevel] = React.useState<string>("standard");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      urgency: "standard",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    // TODO: Implement actual form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    console.log(data);
  }

  return (
    <section className="relative py-24 md:py-32 bg-[#04080F] overflow-hidden">
      {/* Premium Ocean Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-teal-500/8 rounded-full blur-[160px]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Two-Path Strategy: Emergency vs Planned */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: Emergency Path - Urgent Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Headline - Emotional Hook */}
            <div>
              <p className="font-mono text-xs font-bold text-cyan-400 tracking-[0.3em] uppercase mb-6">
                PROTECT YOUR ASSETS
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Don't Let Delays Cost You Millions
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                DNV-certified surveyors on-site in 24 hours. Every minute counts
                when your vessel is at risk.
              </p>
            </div>

            {/* Emergency CTA - Red Theme */}
            <div className="relative bg-gradient-to-br from-red-500/10 via-red-600/5 to-transparent border-2 border-red-500/30 p-8">
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/50">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono font-bold text-red-400 tracking-wider">
                    LIVE 24/7
                  </span>
                </div>
              </div>

              <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Emergency Response
              </h3>
              <p className="text-white/70 mb-6">
                Vessel casualty, cargo damage, or critical breakdown? Get
                immediate assistance.
              </p>

              <div className="space-y-4">
                <a href="tel:+48XXXXXXXXX" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg h-14 group"
                  >
                    <Phone className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                    Call Emergency Hotline
                  </Button>
                </a>

                <p className="text-xs text-white/50 text-center">
                  <Clock className="h-3 w-3 inline mr-1" />
                  Surveyor assigned within 2 hours
                </p>
              </div>
            </div>

            {/* Trust Signals - Compact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm font-bold text-white">
                    DNV Certified
                  </span>
                </div>
                <p className="text-xs text-white/60">International standards</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm font-bold text-white">64 Years</span>
                </div>
                <p className="text-xs text-white/60">Maritime heritage</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <p className="text-xs font-mono text-white/50 tracking-wider uppercase">
                Other Contacts
              </p>
              <a
                href="mailto:office@jg-marine.com"
                className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm group-hover:underline">
                  office@jg-marine.com
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Form - Planned Inquiry */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Form Container */}
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border-2 border-white/20 p-8 md:p-10">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Request Survey Quote
                </h3>
                <p className="text-white/70">
                  Fill out the form below and we'll respond within 2 hours
                  during business hours.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Urgency Selector - Visual */}
                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-semibold mb-3 block">
                          How urgent is this?
                        </FormLabel>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            {
                              value: "emergency",
                              label: "Emergency",
                              color: "red",
                              desc: "<24h",
                            },
                            {
                              value: "urgent",
                              label: "Urgent",
                              color: "orange",
                              desc: "<72h",
                            },
                            {
                              value: "standard",
                              label: "Standard",
                              color: "blue",
                              desc: "Planning",
                            },
                          ].map((option) => (
                            <label
                              key={option.value}
                              className={`
                                relative cursor-pointer border-2 p-4 transition-all duration-300
                                ${
                                  field.value === option.value
                                    ? `border-${option.color}-500 bg-${option.color}-500/10`
                                    : "border-white/20 bg-white/5 hover:border-white/40"
                                }
                              `}
                            >
                              <input
                                type="radio"
                                {...field}
                                value={option.value}
                                onChange={(e) => {
                                  field.onChange(e);
                                  setUrgencyLevel(e.target.value);
                                }}
                                className="sr-only"
                              />
                              <div className="text-center">
                                <p className="text-sm font-bold text-white mb-1">
                                  {option.label}
                                </p>
                                <p className="text-xs text-white/60">
                                  {option.desc}
                                </p>
                              </div>
                              {field.value === option.value && (
                                <div className="absolute top-2 right-2">
                                  <CheckCircle
                                    className={`h-4 w-4 text-${option.color}-400`}
                                  />
                                </div>
                              )}
                            </label>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/90">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Smith"
                              {...field}
                              className="bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-cyan-400 h-12"
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
                          <FormLabel className="text-white/90">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@company.com"
                              {...field}
                              className="bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-cyan-400 h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/90">
                            Company
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Baltic Shipping Ltd"
                              {...field}
                              className="bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-cyan-400 h-12"
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
                          <FormLabel className="text-white/90">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+48 XXX XXX XXX"
                              {...field}
                              className="bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-cyan-400 h-12"
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
                        <FormLabel className="text-white/90">
                          Service Type *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/30 text-white h-12">
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
                              Technical Consulting
                            </SelectItem>
                            <SelectItem value="claims-insurance">
                              Claims & Insurance
                            </SelectItem>
                            <SelectItem value="casualty-response">
                              Casualty Response
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
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
                        <FormLabel className="text-white/90">
                          Describe Your Situation *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide details about your vessel, cargo, or situation..."
                            className="min-h-[120px] bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-cyan-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg h-14"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Secure Request
                        <CheckCircle className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* Trust Message */}
                  <p className="text-xs text-center text-white/50">
                    <Shield className="h-3 w-3 inline mr-1" />
                    Your information is encrypted and never shared. Response
                    within 2 hours.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-cyan-400 mb-1">24/7</p>
              <p className="text-xs text-white/60">Emergency Response</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400 mb-1">2h</p>
              <p className="text-xs text-white/60">Response Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400 mb-1">120+</p>
              <p className="text-xs text-white/60">Annual Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400 mb-1">64</p>
              <p className="text-xs text-white/60">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
