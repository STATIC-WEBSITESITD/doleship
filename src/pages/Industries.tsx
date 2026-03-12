import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Package, Factory, ShoppingCart, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const industries = [
  {
    icon: Package,
    title: "Logistics & Supply Chain",
    content: "Dole Shipping Corporation serves logistics and supply chain companies with integrated solutions that optimize cargo movement across global trade routes. Our technology-driven approach enables supply chain managers to gain complete visibility over their shipments, from origin to destination. We provide multi-modal transport coordination, warehouse management integration, and real-time analytics that help logistics businesses reduce operational costs and improve delivery performance. Our specialized licenses and government liaison capabilities allow us to navigate complex regulatory environments, ensuring compliance and minimizing delays for our logistics partners.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    content: "For the manufacturing sector, we deliver precision logistics that keep production lines running smoothly. Our just-in-time delivery capabilities ensure raw materials and components arrive exactly when needed, minimizing inventory carrying costs and preventing production downtime. We handle everything from bulk raw material imports to finished goods distribution, offering specialized transport for heavy machinery, hazardous chemicals, and temperature-sensitive materials. Our end-to-end visibility platform integrates with manufacturing ERP systems, providing procurement teams with real-time shipment status and predictive delivery estimates.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    content: "In the fast-paced retail and e-commerce sector, speed and reliability are non-negotiable. Dole Shipping Corporation provides agile logistics solutions that support omnichannel fulfillment strategies, seasonal demand surges, and cross-border e-commerce operations. Our air cargo express services ensure time-sensitive fashion, electronics, and consumer goods reach markets within the tightest windows. We offer inventory positioning services, returns management, and last-mile delivery coordination that help retailers maintain customer satisfaction while controlling logistics costs across their distribution networks.",
  },
  {
    icon: Globe,
    title: "Import-Export Businesses",
    content: "Import-export businesses form the backbone of our client portfolio. We provide comprehensive trade facilitation services that simplify international commerce — from customs brokerage and documentation management to trade finance and compliance advisory. Our MLETR-compliant digital documentation platform accelerates trade processing, enabling importers and exporters to access faster financing and reduce paperwork. With expertise in navigating tariff structures, free trade agreements, and country-specific regulations, we help trading businesses maximize their competitive advantage in global markets.",
  },
  {
    icon: Building2,
    title: "SMEs & Enterprises",
    content: "Whether you're a growing SME entering international markets for the first time or a large enterprise managing complex global supply chains, Dole Shipping Corporation scales its services to match your needs. For SMEs, we offer simplified onboarding, competitive consolidated shipping rates, and expert guidance on international trade procedures. For enterprises, we provide dedicated account management, customized logistics solutions, SLA-backed service levels, and advanced analytics dashboards. Our trade finance platform is designed to be equally accessible to small businesses seeking working capital and large corporations optimizing their financial supply chains.",
  },
];

const Industries = () => (
  <>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">Sectors We Serve</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-lg opacity-85 leading-relaxed">Tailored logistics and trade finance solutions for diverse industries — from manufacturing and retail to import-export businesses of every scale.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-5xl space-y-8">
        {industries.map((ind, i) => (
          <motion.div key={ind.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}>
            <Card className="border-0 shadow-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ind.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">{ind.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{ind.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Don't See Your Industry?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Our versatile logistics solutions adapt to any sector. Contact us to discuss your specific requirements.</p>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Industries;
