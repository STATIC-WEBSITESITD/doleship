import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const faqs = [
  { q: "What road and rail logistics services does Dole Shipping offer?", a: "We provide full truckload (FTL), less-than-truckload (LTL), dedicated fleet services, rail freight, multi-modal transport, and specialized cargo transport. Our network covers all major industrial corridors, ports, ICDs, SEZs, and land borders across India." },
  { q: "How do you optimize inland transit times?", a: "We use advanced route optimization algorithms, GPS-enabled fleet tracking, and predictive analytics to identify the most efficient routes. Our operations center monitors traffic, weather, and road conditions in real-time to dynamically adjust routing and minimize delays." },
  { q: "Can you handle temperature-sensitive or hazardous inland cargo?", a: "Yes, we operate a fleet of refrigerated trucks and specialized vehicles for hazardous materials transport. All our vehicles are equipped with temperature monitoring systems, and our drivers are trained in handling sensitive and dangerous goods per regulatory requirements." },
  { q: "Do you provide warehousing and distribution services along inland routes?", a: "We offer strategic warehousing solutions at key logistics hubs, providing inventory management, cross-docking, order fulfillment, and distribution services. Our warehouse management system integrates with your supply chain for complete visibility." },
  { q: "What are the benefits of using Dole Shipping for first-mile and last-mile logistics?", a: "We provide seamless connectivity between your facility and the nearest port, ICD, or airport. Our first-mile/last-mile services include pickup scheduling, cargo consolidation, documentation support, and real-time tracking — eliminating gaps in your supply chain." },
];

const InlandTransportation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-8 w-8 text-accent" />
              <p className="text-accent font-medium tracking-wide uppercase text-sm">Our Services</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Road & Rail Logistics Services</h1>
            <p className="text-lg opacity-85 leading-relaxed">Reliable inland transportation solutions connecting ports, ICDs, airports, and SEZs to your doorstep with advanced route optimization and real-time tracking.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold mb-6">Seamless Inland Cargo Movement</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>Dole Shipping Corporation's inland transportation division bridges the critical gap between ports, airports, and your business premises. With an extensive network of road and rail services spanning every major industrial corridor in India, we ensure safe and timely delivery across cities, states, and regions.</p>
              <p>Our team leverages advanced route optimization technology and deep industry expertise to streamline operations, reduce transit times, and enhance cost efficiency. Whether it's full truckload shipments for high-volume cargo, less-than-truckload services for cost-effective smaller consignments, or specialized vehicles for oversized and sensitive goods, we customize our services to meet your unique requirements.</p>
              <p>Our fleet management system employs GPS tracking, electronic logging devices, and predictive maintenance algorithms to ensure maximum uptime and reliability. Every vehicle in our network undergoes rigorous safety inspections, and our drivers are professionally trained in cargo handling, defensive driving, and regulatory compliance.</p>
              <p>For businesses requiring rail freight solutions, we provide dedicated rake bookings, container train operations, and multi-modal transport coordination. Our rail logistics services are particularly advantageous for bulk commodities, heavy machinery, and long-distance cargo movement, offering significant cost savings compared to road-only transport.</p>
              <p>At Dole Shipping Corporation, we understand that inland transportation is the backbone of any supply chain. That's why we've invested in building a robust, technology-driven network that ensures your cargo moves smoothly from the first mile to the last mile — on time, every time.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Benefits of Our Inland Transport Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["GPS-enabled real-time fleet tracking and monitoring", "Advanced route optimization reducing transit times by up to 25%", "Full truckload, LTL, and dedicated fleet options", "Multi-modal road-rail integration for cost savings", "Temperature-controlled and hazardous cargo capability", "First-mile and last-mile connectivity to all major ports"].map((b, i) => (
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
          <h2 className="font-display text-3xl font-bold mb-6">How Our Inland Logistics Works</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Route Assessment & Planning", desc: "We analyze your cargo profile, pickup/delivery locations, and timelines to design the optimal route and transport mode." },
              { step: "02", title: "Vehicle Allocation & Loading", desc: "The right vehicle type is assigned, and our team manages loading with proper securing and documentation." },
              { step: "03", title: "In-Transit Monitoring", desc: "Real-time GPS tracking, driver communication, and checkpoint updates ensure full visibility throughout transit." },
              { step: "04", title: "Delivery & Confirmation", desc: "Proof of delivery, condition reports, and digital documentation complete the process with full traceability." },
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
          <h2 className="font-display text-3xl font-bold mb-4">Move Your Cargo Inland With Confidence</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Get reliable road and rail logistics services with real-time tracking and competitive pricing.</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Get a Transport Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default InlandTransportation;
