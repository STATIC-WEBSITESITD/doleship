import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const faqs = [
  { q: "What types of global shipping solutions does Dole Shipping Corporation offer?", a: "We provide a comprehensive range of shipping solutions including full container load (FCL), less-than-container load (LCL), bulk shipping, breakbulk cargo, and project cargo services. Our solutions cover all major global trade routes, connecting businesses to markets across Asia, Europe, the Americas, Africa, and the Middle East." },
  { q: "How does Dole Shipping ensure timely delivery of shipments?", a: "We leverage advanced route optimization technology, real-time tracking systems, and strategic partnerships with leading shipping lines to ensure your cargo arrives on schedule. Our operations team monitors every shipment 24/7, proactively addressing any delays or disruptions in the supply chain." },
  { q: "Can you handle specialized or oversized cargo shipments?", a: "Yes, we specialize in handling project cargo, out-of-gauge (OOG) shipments, and hazardous materials. Our experienced team coordinates specialized equipment, permits, and routing to ensure safe and compliant transportation of unique cargo requirements." },
  { q: "What documentation support do you provide for international shipping?", a: "Our documentation team handles bills of lading, certificates of origin, customs declarations, letters of credit documentation, and all trade compliance paperwork. We also offer MLETR-compliant digital documentation for faster processing and reduced errors." },
  { q: "How do your shipping solutions benefit import-export businesses?", a: "We offer competitive freight rates, consolidated shipping options, door-to-port and port-to-port services, customs clearance support, and trade finance solutions — creating a single-window solution that simplifies international trade for importers and exporters." },
];

const ShippingSolutions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Ship className="h-8 w-8 text-accent" />
              <p className="text-accent font-medium tracking-wide uppercase text-sm">Our Services</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Global Shipping Solutions</h1>
            <p className="text-lg opacity-85 leading-relaxed">Comprehensive ocean freight and container shipping services connecting your business to markets worldwide with reliability, efficiency, and complete supply chain visibility.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold mb-6">End-to-End Ocean Freight & Container Shipping</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>Dole Shipping Corporation offers comprehensive shipping solutions designed to meet the diverse needs of businesses across industries. Whether your cargo requires full container loads, less-than-container loads, or specialized project shipping, our end-to-end services ensure your goods reach their destination securely and on time.</p>
              <p>From container shipping and freight forwarding to last-mile delivery, we tailor our solutions to match the scale and urgency of your requirements. Our global network spans over 50 countries, covering major trade lanes across the Asia-Pacific, Europe, North and South America, Africa, and the Middle East.</p>
              <p>Leveraging advanced technology and a global network of trusted partners, we optimize every step of the logistics process — from booking and documentation to customs clearance and final delivery. Our proprietary tracking platform provides real-time shipment visibility, giving you complete control and transparency over your supply chain.</p>
              <p>Our experienced operations team works around the clock to coordinate vessel bookings, manage port operations, and handle regulatory compliance. We maintain strong relationships with leading shipping lines, ensuring competitive rates and priority space allocation even during peak seasons.</p>
              <p>For businesses dealing with oversized, hazardous, or temperature-sensitive cargo, we offer specialized shipping solutions with dedicated equipment and handling protocols. Our project cargo division manages everything from route surveys and engineering studies to customs permits and on-site delivery coordination.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Benefits of Our Shipping Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Competitive freight rates with volume-based pricing", "Real-time tracking and 24/7 shipment monitoring", "Expert customs clearance and trade compliance", "Flexible scheduling with multiple sailing options", "Specialized handling for hazardous and project cargo", "Integrated trade finance and documentation support"].map((b, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardContent className="p-5 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">{b}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-6">Our Shipping Process</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Consultation & Planning", desc: "We begin by understanding your shipping requirements, cargo specifications, and delivery timelines to design the optimal logistics strategy." },
              { step: "02", title: "Booking & Documentation", desc: "Our team handles vessel booking, prepares all shipping documentation, and ensures compliance with international trade regulations." },
              { step: "03", title: "Cargo Handling & Transit", desc: "From pickup to port operations, we manage every touchpoint with rigorous quality controls and real-time monitoring." },
              { step: "04", title: "Customs & Last-Mile Delivery", desc: "We handle customs clearance at destination and coordinate final delivery to your warehouse, factory, or retail location." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <span className="text-3xl font-display font-bold text-accent/30">{s.step}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ship With Confidence</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Get a customized shipping solution tailored to your cargo needs and trade routes.</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ShippingSolutions;
