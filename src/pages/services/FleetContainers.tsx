import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, Anchor, Container, Thermometer, Droplets, CheckCircle, ArrowRight, Users, Handshake, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const faqs = [
  { q: "What is the difference between owned and operated vessels?", a: "Owned vessels are ships directly owned by DSC, providing full operational control and dedicated container capacity. Operated vessels are strategically chartered ships that allow us to expand capacity and offer flexible container slot availability based on market demand." },
  { q: "What types of containers does DSC offer?", a: "We offer dry containers for general cargo, reefer containers for temperature-sensitive goods like food and pharmaceuticals, and ISO tank containers for liquids, chemicals, and gases — all meeting international safety and compliance standards." },
  { q: "How does the partnership model work?", a: "Our partnerships are structured around reliable cargo commitments through vessel charter agreements, container slot charters, long-term cargo commitments, and short-term capacity arrangements. This ensures efficient vessel utilization and dependable capacity for partners." },
  { q: "Who are DSC's ideal partners?", a: "We collaborate with shipping lines, shipping agents, NVOCC companies, freight forwarders, exporters, importers, trading companies, industrial manufacturers, and large corporations capable of committing cargo volume." },
  { q: "Can DSC handle temperature-sensitive cargo?", a: "Yes. Our reefer containers are temperature-controlled and designed for perishable goods, food products, and pharmaceuticals requiring regulated environments throughout the shipping journey." },
];

const FleetContainers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="h-8 w-8 text-accent" />
              <p className="text-accent font-medium tracking-wide uppercase text-sm">Our Fleet</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Owned Vessels & Operated Vessels</h1>
            <p className="text-lg opacity-85 leading-relaxed">DSC manages shipping capacity through a strategic combination of owned and operated vessels, delivering operational reliability and flexible container solutions for global trade.</p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Our Hybrid Fleet Structure</h2>
            <p className="text-muted-foreground text-lg text-center mb-12 max-w-3xl mx-auto">
              This hybrid fleet structure allows us to maintain operational reliability while accommodating varying cargo volumes across global trade routes.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Ship className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">Owned Vessels</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ships directly owned by DSC, providing controlled operations and dedicated container capacity. Our owned fleet ensures consistent service quality, predictable scheduling, and full operational oversight across major trade lanes.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {["Full operational control", "Dedicated container capacity", "Consistent service quality", "Predictable scheduling"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Anchor className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">Operated Vessels</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategically chartered vessels that allow DSC to expand capacity and offer flexible container slot availability to clients. This approach enables rapid scaling to meet peak demand and new market opportunities.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {["Flexible capacity expansion", "Container slot availability", "Rapid scaling capability", "Market-responsive operations"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Container Types */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-4">Container Types We Accommodate</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">DSC supports a wide range of cargo requirements through multiple container formats.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Container,
                title: "Dry Containers",
                desc: "Used for transporting general cargo such as consumer goods, industrial products, machinery, and packaged materials. Our dry containers meet international standards and are available in 20ft and 40ft configurations.",
              },
              {
                icon: Thermometer,
                title: "Reefer Containers",
                desc: "Temperature-controlled containers designed for transporting perishable goods, food products, and pharmaceuticals requiring regulated environments. Precise temperature management from -30°C to +30°C.",
              },
              {
                icon: Droplets,
                title: "ISO Tank Containers",
                desc: "Specialized containers designed for transporting liquids, chemicals, and gases while maintaining international safety standards and compliance. Built to IMDG, ADR, and UN specifications.",
              },
            ].map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <c.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-accent" />
                <p className="text-accent font-medium tracking-wide uppercase text-sm">Our Target Clients</p>
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">Who We Work With</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                DSC collaborates with organizations capable of committing cargo volume through long-term or short-term shipping agreements. Our ideal partners include businesses involved in large-scale international cargo movement.
              </p>
              <h3 className="font-display text-lg font-semibold mb-4">Key Industry Partners</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Shipping Lines", "Shipping Agents", "NVOCC Companies", "Freight Forwarders", "Exporters & Importers", "Trading Companies", "Industrial Manufacturers", "Large Corporations"].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="h-6 w-6 text-accent" />
                <p className="text-accent font-medium tracking-wide uppercase text-sm">Partnership Model</p>
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">How We Partner</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our partnerships are structured around reliable cargo commitments and long-term collaboration. This model ensures efficient vessel utilization while providing partners with dependable container capacity.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Vessel Charter Agreements", desc: "Full vessel charters for large-volume cargo requirements." },
                  { title: "Container Slot Charter Agreements", desc: "Flexible slot allocation on scheduled vessel routes." },
                  { title: "Long-Term Cargo Commitments", desc: "Sustained partnerships with guaranteed capacity." },
                  { title: "Short-Term Capacity Arrangements", desc: "On-demand capacity for seasonal or project-based needs." },
                ].map((item) => (
                  <div key={item.title} className="border rounded-lg p-4 bg-card">
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg bg-card">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-5 py-4 flex justify-between items-center">
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Partner With DSC</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Explore vessel charter agreements, container slot options, and flexible shipping capacity tailored to your business.</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default FleetContainers;
