import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const faqs = [
  { q: "What international air freight services does Dole Shipping provide?", a: "We offer express air freight, consolidated air cargo, charter services, door-to-door air logistics, and specialized handling for perishables, pharmaceuticals, and high-value goods. Our partnerships with major airlines ensure access to capacity on all key international routes." },
  { q: "How do you ensure the safety of air cargo shipments?", a: "All shipments undergo rigorous screening per IATA and national security regulations. We use tamper-evident packaging, temperature-controlled containers for sensitive goods, and maintain chain-of-custody documentation. Our facilities are certified to handle regulated and dangerous goods." },
  { q: "What is the typical transit time for international air cargo?", a: "Standard international air freight typically takes 3-7 days door-to-door, depending on origin, destination, and customs clearance requirements. Our express services can deliver within 1-3 days for time-critical shipments, with priority customs processing at both ends." },
  { q: "Can Dole Shipping handle e-commerce air cargo fulfillment?", a: "Yes, we provide dedicated e-commerce air logistics solutions including batch processing, cross-border compliance management, returns handling, and integration with major e-commerce platforms. Our solutions are designed for both B2B and B2C fulfillment models." },
  { q: "Do you provide real-time tracking for air cargo shipments?", a: "Absolutely. Our advanced tracking system provides real-time milestone updates from pickup through delivery. You'll receive automated notifications at key checkpoints including departure, arrival, customs clearance, and final delivery confirmation." },
];

const AirCargo = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Plane className="h-8 w-8 text-accent" />
              <p className="text-accent font-medium tracking-wide uppercase text-sm">Our Services</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">International Air Freight Services</h1>
            <p className="text-lg opacity-85 leading-relaxed">Speed, reliability, and global reach for your time-sensitive shipments — with advanced tracking systems providing real-time updates and complete peace of mind.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold mb-6">Fast, Reliable Air Cargo Logistics</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>When time is of the essence, Dole Shipping Corporation's air cargo solutions deliver unmatched speed and reliability. Our international air freight services are designed to move your time-sensitive shipments across continents with precision, ensuring your goods reach their destination within the tightest deadlines.</p>
              <p>From small parcels and e-commerce consignments to large-scale industrial freight, our tailored air cargo services cater to diverse industries and requirements. We handle pharmaceuticals requiring cold-chain compliance, high-value electronics needing secure transport, perishable goods demanding speed, and industrial components with strict delivery schedules.</p>
              <p>Our strategic partnerships with leading international and regional airlines provide access to extensive route networks and guaranteed capacity allocation. Whether you need direct flights for urgent shipments or consolidated services for cost-effective transport, our logistics experts design the optimal solution for your specific needs.</p>
              <p>Every air cargo shipment is managed through our advanced digital platform, providing real-time tracking, automated milestone notifications, and complete documentation management. From the moment your cargo is picked up to its final delivery, you have full visibility and control over the entire journey.</p>
              <p>Our compliance team ensures all shipments meet IATA regulations, customs requirements, and destination country import standards. We handle all documentation including airway bills, customs declarations, certificates of origin, and any specialized permits required for regulated commodities.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Benefits of Our Air Cargo Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Express delivery within 1-3 days for urgent shipments", "Real-time tracking with automated milestone updates", "Cold-chain compliant solutions for perishables & pharma", "Competitive rates through airline partnership agreements", "Full customs brokerage and trade compliance support", "Charter services for oversized and project cargo"].map((b, i) => (
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
          <h2 className="font-display text-3xl font-bold mb-6">Our Air Freight Process</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Cargo Assessment & Booking", desc: "We evaluate your shipment dimensions, weight, commodity type, and urgency to select the optimal airline, routing, and service level." },
              { step: "02", title: "Pickup & Packaging", desc: "Our team collects your cargo, ensures compliant packaging and labeling, and prepares all export documentation and customs filings." },
              { step: "03", title: "Airport Operations & Flight", desc: "We manage warehouse handling, security screening, and airline handover. Real-time tracking begins from this point with automated updates." },
              { step: "04", title: "Customs Clearance & Delivery", desc: "At destination, we handle import clearance, duty assessment, and coordinate last-mile delivery to your specified address." },
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
          <h2 className="font-display text-3xl font-bold mb-4">Need Speed? Ship by Air.</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Get competitive air freight rates and express delivery options for your time-critical cargo.</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Request Air Cargo Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AirCargo;
