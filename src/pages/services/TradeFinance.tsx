import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const faqs = [
  { q: "What is MLETR and how does it benefit my trade operations?", a: "The Model Law on Electronic Transferable Records (MLETR) is a UNCITRAL framework that enables the legal recognition of electronic transferable records, including bills of lading and promissory notes. By adopting MLETR-compliant platforms, businesses can digitize their trade documents, reducing processing times from weeks to hours, eliminating paper-based errors, and enabling faster access to trade finance." },
  { q: "How does Dole Shipping's trade finance platform work?", a: "Our platform digitizes your trade documentation — including bills of lading, invoices, and certificates — into electronic transferable records. These digital documents can be verified, transferred, and used as collateral for post-shipment financing through our banking partners, enabling faster access to working capital." },
  { q: "What types of trade financing options are available?", a: "We facilitate post-shipment financing, invoice discounting, supply chain financing, and letters of credit processing through our partner financial institutions. Our digital platform accelerates the approval process by providing verified documentation and shipment data directly to lenders." },
  { q: "Is the digital documentation platform secure?", a: "Yes, our platform employs enterprise-grade encryption, blockchain-based verification, and multi-factor authentication to ensure document integrity and prevent fraud. All electronic records comply with international standards for digital signatures and document authenticity." },
  { q: "How does digital trade documentation reduce costs?", a: "By eliminating physical document courier costs, reducing manual data entry errors, shortening document processing times, and enabling faster financing approvals, businesses typically see a 30-50% reduction in trade documentation costs. The platform also minimizes the risk of document loss or tampering." },
  { q: "Can small businesses benefit from your trade finance solutions?", a: "Absolutely. Our platform is designed to be accessible to SMEs, providing them with the same digital trade documentation capabilities and financing access that larger corporations enjoy. We offer flexible pricing tiers and dedicated support to help smaller businesses streamline their international trade operations." },
];

const TradeFinance = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-accent" />
              <p className="text-accent font-medium tracking-wide uppercase text-sm">Our Services</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Trade Finance & MLETR Digital Documentation</h1>
            <p className="text-lg opacity-85 leading-relaxed">Comprehensive trade finance solutions with MLETR-compliant digital documentation, enabling faster financing, reduced paperwork, and enhanced transparency in global trade.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold mb-6">Digital Trade Finance for the Modern Enterprise</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>Dole Shipping Corporation goes beyond transportation to support your business with comprehensive trade finance solutions that address one of international trade's most persistent challenges: slow, paper-intensive documentation processes that delay payments and increase costs.</p>
              <p>Leveraging advancements in digital trade documentation and full compliance with the Model Law on Electronic Transferable Records (MLETR), we provide a transformative platform that digitizes the entire trade documentation lifecycle. From bills of lading and certificates of origin to invoices and letters of credit, every document is created, verified, and transferred electronically.</p>
              <p>Our post-shipment financing options, facilitated through partnerships with leading financial institutions, ensure faster and more efficient access to working capital. By providing verified digital documentation directly to lenders, we significantly reduce the time between shipment and financing approval — from weeks to days.</p>
              <p>The platform employs blockchain-based verification to ensure document authenticity and integrity, making it virtually impossible to tamper with or duplicate trade records. This level of security and transparency builds confidence among all parties in the trade chain — exporters, importers, banks, and regulatory authorities.</p>
              <p>For businesses navigating complex international regulations, our compliance team provides expert guidance on documentary requirements, trade sanctions, and country-specific import/export regulations. We ensure every transaction is fully compliant, reducing the risk of delays, penalties, or rejected shipments.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Benefits of Our Trade Finance Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["MLETR-compliant electronic transferable records", "30-50% reduction in trade documentation costs", "Faster post-shipment financing through digital verification", "Blockchain-secured document authenticity and integrity", "Flexible payment terms optimizing cash flow", "Expert trade compliance and regulatory guidance"].map((b, i) => (
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
          <h2 className="font-display text-3xl font-bold mb-6">How Our Trade Finance Platform Works</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Document Digitization", desc: "Upload your trade documents to our secure platform, where they are converted into MLETR-compliant electronic transferable records with digital signatures." },
              { step: "02", title: "Verification & Compliance", desc: "Our system validates document authenticity using blockchain verification, checks trade compliance requirements, and flags any discrepancies for resolution." },
              { step: "03", title: "Financing Facilitation", desc: "Verified digital documents are securely shared with partner financial institutions for post-shipment financing, invoice discounting, or supply chain finance applications." },
              { step: "04", title: "Settlement & Archival", desc: "Once financing is disbursed and trade settled, all records are securely archived with full audit trails for regulatory compliance and future reference." },
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
          <h2 className="font-display text-3xl font-bold mb-4">Accelerate Your Trade Finance</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Digitize your trade documentation and unlock faster financing with our MLETR-compliant platform.</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Explore Trade Finance <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default TradeFinance;
