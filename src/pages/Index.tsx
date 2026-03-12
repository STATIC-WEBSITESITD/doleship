import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, Plane, Truck, FileText, Globe, Shield, Clock, Users, ArrowRight, CheckCircle, Anchor, Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const services = [
  { icon: Ship, title: "Shipping Solutions", desc: "Comprehensive container shipping, freight forwarding, and last-mile delivery across global trade routes.", path: "/services/shipping-solutions" },
  { icon: Plane, title: "Air Cargo Solutions", desc: "Speed, reliability, and global reach for your time-sensitive shipments with real-time tracking.", path: "/services/air-cargo" },
  { icon: Truck, title: "Inland Transportation", desc: "Extensive road and rail network ensuring safe, timely delivery across cities and regions.", path: "/services/inland-transportation" },
  { icon: FileText, title: "Trade Finance Solutions", desc: "MLETR-compliant digital documentation and post-shipment financing for seamless global trade.", path: "/services/trade-finance" },
];

const differentiators = [
  { icon: Globe, title: "End-to-End Solutions", desc: "Single-point solution covering inland transport, freight forwarding, customs clearance, and trade financing." },
  { icon: Shield, title: "Ease of Doing Business", desc: "Simplified logistics processes, seamless customs clearance, and regulatory compliance management." },
  { icon: Users, title: "Growth Partners", desc: "Long-term partnerships ensuring strategic market positioning and assured market share." },
  { icon: Clock, title: "Financial Solutions", desc: "MLETR-compliant digital platform with flexible payment terms and optimized cash flow." },
];

const industries = ["Logistics & Supply Chain", "Manufacturing", "Retail & E-Commerce", "Import-Export", "SMEs & Enterprises"];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy opacity-90" />
        <div className="container relative z-10 py-24 md:py-36">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">Global Logistics Excellence</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              Seamless Shipping &<br />Trade Solutions Worldwide
            </h1>
            <p className="text-lg md:text-xl opacity-85 leading-relaxed mb-8 max-w-2xl">
              Dole Shipping Corporation delivers end-to-end logistics, freight forwarding, and trade finance solutions — powered by technology, driven by trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-background text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Overview */}
      <section className="py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Redefining Global Logistics</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Dole Shipping Corporation, we combine strategic innovation, operational efficiency, and personalized service to consistently exceed customer expectations. Whether by air, land, or sea, our versatile logistics services handle all types of cargo to destinations worldwide.
            </p>
            <Button asChild variant="link" className="mt-6 text-primary">
              <Link to="/about">Read Our Full Story <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Comprehensive Logistics Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow group border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                    <Link to={s.path} className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Key Differentiators</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((d, i) => (
              <motion.div key={d.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">Industries We Serve</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Trusted Across Sectors</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span key={ind} className="px-6 py-3 rounded-full border border-primary-foreground/20 text-sm font-medium hover:bg-primary-foreground/10 transition-colors">{ind}</span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="secondary" size="lg">
              <Link to="/industries">Explore Industries <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">Global Reach</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Connecting Businesses Across Borders</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With an extensive global network spanning major trade routes, ports, and inland corridors, Dole Shipping Corporation ensures your cargo moves seamlessly from origin to destination — anywhere in the world.
              </p>
              <ul className="space-y-3">
                {["Coverage across all major global trade routes", "Strategic partnerships with port authorities", "Specialized licenses for complex regulatory landscapes", "Real-time tracking and visibility"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm"><CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {item}</li>
                ))}
              </ul>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[{ num: "50+", label: "Countries Served" }, { num: "1000+", label: "Clients Worldwide" }, { num: "24/7", label: "Support Available" }, { num: "99%", label: "On-Time Delivery" }].map((stat) => (
                <Card key={stat.label} className="text-center border-0 shadow-sm">
                  <CardContent className="p-6">
                    <p className="font-display text-3xl font-bold text-primary">{stat.num}</p>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Vessels */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">Our Fleet</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Owned & Operated Vessels</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">A hybrid fleet of owned and chartered vessels delivering operational reliability and flexible container capacity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Container, title: "Dry Containers", desc: "General cargo, industrial products, machinery, and packaged materials." },
              { icon: Ship, title: "Reefer Containers", desc: "Temperature-controlled for perishable goods and pharmaceuticals." },
              { icon: Anchor, title: "ISO Tank Containers", desc: "Specialized transport for liquids, chemicals, and gases." },
            ].map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="text-center border-0 shadow-sm h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <c.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-base font-semibold mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm">{c.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <Link to="/services/fleet-containers">Explore Our Fleet <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Logistics?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with Dole Shipping Corporation for reliable, technology-driven shipping and trade finance solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 bg-background text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services/shipping-solutions">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
