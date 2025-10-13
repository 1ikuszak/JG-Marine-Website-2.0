"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Anchor, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO - Full Screen Vintage Photo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* TODO: Replace with authentic 1920s-1940s maritime photo - grayscale, vintage, emotional */}
        <div className="absolute inset-0">
          <Image
            src="/about/hero-vintage-1920s.jpg"
            alt="JG Marine heritage - Baltic maritime"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        {/* Centered Text */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-sm tracking-[0.3em] text-primary/60 mb-8 uppercase font-medium">
              Since 1968
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-primary leading-none mb-6">
              Three Generations
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-2xl mx-auto">
              Master Mariners
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      {/* STORY - Editorial with More Text */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-16"
          >
            {/* Headline */}
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-semibold text-primary leading-tight mb-8">
                Born from the sea,
                <br />
                built on trust
              </h2>
              <div className="w-16 h-px bg-primary/20 mb-8" />
            </div>

            {/* Body Text */}
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7 space-y-6 text-lg text-primary/80 leading-relaxed">
                <p>
                  In 1968, when maritime surveying was still an emerging
                  profession in Poland, the first generation of JG Marine Master
                  Mariners made a decisive choice: leave the bridge of
                  commercial vessels to build something more enduring.
                </p>
                <p>
                  They understood that the industry needed more than
                  inspectors—it needed allies who spoke the language of the sea,
                  who had felt the weight of command, who knew that every survey
                  report could mean the difference between a resolved claim and
                  a devastating loss.
                </p>
                <p>
                  What began as a small surveying firm focused on Baltic
                  maritime transport has evolved into a recognized authority
                  across hull & machinery, P&I matters, heavy lift projects, and
                  comprehensive loss adjusting. Yet we've never forgotten where
                  we came from.
                </p>
                <p>
                  Today, the company operates in 11+ countries, conducts 120+
                  projects annually, and maintains the same commitment to
                  independence and precision that defined us from day one. Three
                  generations of maritime expertise, one unwavering mission.
                </p>
              </div>

              {/* Side Stats */}
              <div className="md:col-span-5 space-y-8">
                <div className="border-l-2 border-primary/10 pl-6">
                  <p className="text-xs tracking-wider text-primary/50 mb-2 uppercase font-medium">
                    Founded
                  </p>
                  <p className="text-4xl font-semibold text-primary">1968</p>
                  <p className="text-sm text-primary/60 mt-2">Gdańsk, Poland</p>
                </div>
                <div className="border-l-2 border-primary/10 pl-6">
                  <p className="text-xs tracking-wider text-primary/50 mb-2 uppercase font-medium">
                    Generations
                  </p>
                  <p className="text-4xl font-semibold text-primary">Three</p>
                  <p className="text-sm text-primary/60 mt-2">
                    Master Mariners
                  </p>
                </div>
                <div className="border-l-2 border-primary/10 pl-6">
                  <p className="text-xs tracking-wider text-primary/50 mb-2 uppercase font-medium">
                    Coverage
                  </p>
                  <p className="text-4xl font-semibold text-primary">11+</p>
                  <p className="text-sm text-primary/60 mt-2">
                    European Countries
                  </p>
                </div>
                <div className="border-l-2 border-primary/10 pl-6">
                  <p className="text-xs tracking-wider text-primary/50 mb-2 uppercase font-medium">
                    Experience
                  </p>
                  <p className="text-4xl font-semibold text-primary">120+</p>
                  <p className="text-sm text-primary/60 mt-2">
                    Projects Annually
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO - Large Vintage Image */}
      <section className="py-0">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[16/9] overflow-hidden"
          >
            {/* TODO: Replace with authentic founding generation photo */}
            <Image
              src="/about/founding-generation-1968.jpg"
              alt="JG Marine founding generation, Gdańsk 1968"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-8">
              <p className="text-sm text-primary/60">
                The founding generation, Gdańsk 1968
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE - Magazine Spread */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-4">
              56 Years of Evolution
            </h2>
            <div className="w-16 h-px bg-primary/20 mb-6" />
            <p className="text-lg text-primary/70 leading-relaxed">
              From local Baltic expertise to international recognition—the
              milestones that shaped who we are today.
            </p>
          </div>

          <div className="space-y-32">
            {/* 1968 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/1968-operations.jpg"
                    alt="1968 - The Beginning"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <div className="text-8xl md:text-9xl font-semibold text-primary/10 leading-none">
                  1968
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-primary">
                  The Beginning
                </h3>
                <div className="w-12 h-px bg-primary/20" />
                <p className="text-lg text-primary/70 leading-relaxed">
                  First generation of Master Mariners establish JG Marine in
                  Gdańsk, focusing on maritime transport, hull & machinery
                  surveys, and P&I matters. The foundation is laid in the heart
                  of Poland's maritime industry, with deep roots in Baltic
                  shipping operations.
                </p>
              </div>
            </motion.div>

            {/* 1985 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <div className="text-8xl md:text-9xl font-semibold text-primary/10 leading-none">
                  1985
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-primary">
                  Expansion & Expertise
                </h3>
                <div className="w-12 h-px bg-primary/20" />
                <p className="text-lg text-primary/70 leading-relaxed">
                  Broadening from pure maritime into cargo CMR surveys and
                  diverse warranty work. Building reputation as Baltic heavy
                  lift specialists. Second generation begins learning the craft,
                  bringing fresh perspectives while maintaining traditional
                  values and expertise.
                </p>
              </div>

              <div>
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/1980s-expansion.jpg"
                    alt="1980s - Expansion Era"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>
            </motion.div>

            {/* 2004 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/2004-eu-integration.jpg"
                    alt="2004 - European Integration"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <div className="text-8xl md:text-9xl font-semibold text-primary/10 leading-none">
                  2004
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-primary">
                  European Integration
                </h3>
                <div className="w-12 h-px bg-primary/20" />
                <p className="text-lg text-primary/70 leading-relaxed">
                  Poland joins the EU, opening new markets across Europe. We
                  earn international certifications including DNV, expand
                  operations to 11+ countries, and become recognized partners
                  for major P&I Clubs and international insurers. Global
                  standards meet regional expertise.
                </p>
              </div>
            </motion.div>

            {/* 2024 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <div className="text-8xl md:text-9xl font-semibold text-primary/10 leading-none">
                  2024
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-primary">
                  Three Generations
                </h3>
                <div className="w-12 h-px bg-primary/20" />
                <p className="text-lg text-primary/70 leading-relaxed">
                  Today, the third generation continues the legacy with
                  cutting-edge technology, DNV certifications, and expanded
                  expertise in offshore wind projects—while preserving the
                  independence, integrity, and commitment to excellence that
                  defined us from the beginning.
                </p>
              </div>

              <div>
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/2024-modern.jpg"
                    alt="2024 - Modern Operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION - Clean Statement */}
      <section className="py-32 md:py-40 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <p className="text-xs tracking-wider text-primary/50 uppercase font-medium">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary leading-relaxed max-w-3xl mx-auto">
              "To deliver independent, precise, and trustworthy marine and cargo
              surveys, protecting our clients' interests and ensuring the safe,
              efficient movement of goods worldwide through three generations of
              maritime expertise."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* INDEPENDENCE - Dark Statement */}
      <section className="py-32 md:py-40 bg-primary text-white">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-12 gap-16 items-center"
          >
            <div className="md:col-span-7 space-y-8">
              <div>
                <Shield className="h-12 w-12 mb-8 text-white/80" />
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                  Independence guaranteed by family ownership
                </h2>
                <div className="w-16 h-px bg-white/30 mb-6" />
              </div>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  In an industry where conflicts of interest can compromise
                  objectivity, our family ownership structure is a fundamental
                  guarantee of independence.
                </p>
                <p>
                  We are not tied to insurers. Not beholden to P&I Clubs. Not
                  pressured by shipowner groups. We answer only to the facts we
                  observe and the clients who trust us.
                </p>
                <p>
                  This is not marketing language—this is structural reality.
                  Three generations have protected this independence because
                  they understood: the moment you compromise objectivity, you
                  lose everything that makes surveying valuable.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                <h3 className="text-xl font-semibold mb-3">
                  No Conflicts of Interest
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  We report only what we observe. No external shareholders
                  demanding different conclusions, no corporate mandates to
                  soften findings.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                <h3 className="text-xl font-semibold mb-3">
                  Objective Reporting
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Our reputation is built on accuracy. When our report says
                  something happened, arbitrators believe it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - What We Do */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-4">
              What We Do Today
            </h2>
            <div className="w-16 h-px bg-primary/20 mb-6" />
            <p className="text-xl text-primary/70 leading-relaxed max-w-3xl">
              While our roots remain in maritime transport, hull & machinery,
              and P&I matters, we've grown into comprehensive marine and cargo
              surveying specialists serving the Baltic region and Central
              Europe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Anchor,
                title: "Maritime Foundation",
                desc: "Hull & machinery surveys, P&I matters, on/off-hire inspections, pre-purchase surveys, and condition assessments. The core services that built our reputation over 56 years remain central to everything we do.",
              },
              {
                icon: Globe,
                title: "Heavy Lift & Project Cargo",
                desc: "Recognized Baltic leaders in heavy lift projects, loadout manuals, marine warranty surveys, and complex transport operations. Specialized expertise for offshore wind farms and large-scale installations.",
              },
              {
                icon: Shield,
                title: "Loss Adjusting & Claims",
                desc: "Comprehensive cargo surveys, CMR transport matters, P&I and H&M claims handling, and expert loss adjusting that resolves disputes. Reports accepted by major insurers and arbitration courts.",
              },
              {
                icon: Clock,
                title: "Technical Audits",
                desc: "ISO/ISM/ISPS/MLC audits and compliance inspections. Flag State authorizations. Risk assessments and vetting services. Ensuring vessels and operations meet international standards.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-primary/10 pl-8 py-4"
              >
                <service.icon className="h-8 w-8 text-primary/60 mb-6" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-primary/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC PRESENCE */}
      <section className="py-32 md:py-40 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-4">
                Local Presence,
                <br />
                Global Reach
              </h2>
              <div className="w-16 h-px bg-primary/20 mb-8" />
              <p className="text-lg text-primary/70 leading-relaxed mb-8">
                Strategic locations in key Baltic ports combined with
                operational presence across 11+ European countries. Our regional
                expertise and local knowledge, backed by international
                certifications and global network partnerships.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary/60 rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-primary mb-1">Sopot HQ</p>
                    <p className="text-sm text-primary/60">
                      Heart of our Baltic operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary/60 rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-primary mb-1">
                      Szczecin Office
                    </p>
                    <p className="text-sm text-primary/60">
                      Western Baltic coverage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary/60 rounded-full mt-2" />
                  <div>
                    <p className="font-semibold text-primary mb-1">
                      Warsaw Office
                    </p>
                    <p className="text-sm text-primary/60">
                      Central European hub
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border border-primary/10 p-10">
                <p className="text-xs tracking-wider text-primary/50 uppercase font-medium mb-6">
                  Operational in 11+ Countries
                </p>
                <div className="grid grid-cols-2 gap-4 text-base text-primary/70">
                  <p>🇵🇱 Poland</p>
                  <p>🇩🇪 Germany</p>
                  <p>🇸🇪 Sweden</p>
                  <p>🇩🇰 Denmark</p>
                  <p>🇳🇴 Norway</p>
                  <p>🇫🇮 Finland</p>
                  <p>🇱🇹 Lithuania</p>
                  <p>🇱🇻 Latvia</p>
                  <p>🇪🇪 Estonia</p>
                  <p>🇳🇱 Netherlands</p>
                  <p>🇧🇪 Belgium</p>
                  <p className="col-span-2 text-primary font-medium">
                    + Partner network globally
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary/60">
                      Baltic Response
                    </span>
                    <span className="text-xl font-semibold text-primary">
                      &lt;24h
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary/60">
                      Central Europe
                    </span>
                    <span className="text-xl font-semibold text-primary">
                      &lt;48h
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary/60">
                      Emergency Dispatch
                    </span>
                    <span className="text-xl font-semibold text-primary">
                      24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-4">
              Recognized Excellence
            </h2>
            <div className="w-16 h-px bg-primary/20 mx-auto mb-6" />
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              Our credentials and memberships reflect decades of trust earned,
              not just certifications purchased
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border-2 border-primary/10 p-10 hover:border-primary/30 transition-colors">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Claims Survey Agent
              </h3>
              <div className="space-y-4 text-base text-primary/70">
                <p className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-primary">
                      Allianz Global & Specialty
                    </strong>{" "}
                    – Authorized claims survey agent
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-primary">CESAM Paris</strong> –
                    Appointed average agents
                  </span>
                </p>
              </div>
            </div>

            <div className="border-2 border-primary/10 p-10 hover:border-primary/30 transition-colors">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Global Networks
              </h3>
              <div className="space-y-4 text-base text-primary/70">
                <p className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-primary">W.E. Cox</strong> – Loss
                    adjusting network member
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-primary">W.K. Webster</strong> –
                    Global network partnership
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "DNV Certified", desc: "International standards" },
              { title: "ITIC Member", desc: "Full PI coverage" },
              { title: "IIMS Fellow", desc: "Marine surveying" },
              { title: "CESAM Member", desc: "European cargo" },
            ].map((cert, i) => (
              <div key={i} className="border border-primary/10 p-6">
                <p className="font-semibold text-primary mb-2">{cert.title}</p>
                <p className="text-sm text-primary/60">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 border-t border-primary/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold text-primary leading-tight mb-6">
                Ready to work together?
              </h2>
              <div className="w-16 h-px bg-primary/20 mx-auto mb-8" />
              <p className="text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed">
                Whether you need emergency response or routine surveying, our
                team of Master Mariners is ready to protect your interests
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-base font-semibold"
                asChild
              >
                <a href="/contact">Request Survey</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold border-2"
                asChild
              >
                <a href="tel:+48XXXXXXXXX">Emergency: +48 XXX XXX XXX</a>
              </Button>
            </div>

            <p className="text-sm text-primary/50">
              Response within 2 hours • Surveyor on-site &lt;24h Baltic region
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
