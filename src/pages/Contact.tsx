import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg opacity-85 leading-relaxed">Ready to streamline your logistics? Reach out to our team for a customized shipping or trade finance solution.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Head Office", lines: ["Office no. 12, 17th floor,", "World Trade Centre-1,", "Cuffe Parade, Mumbai,", "Maharashtra, India"] },
                { icon: Phone, title: "Phone", lines: ["+91 22 4581 5315"] },
                { icon: Mail, title: "Email", lines: ["info@doleship.com"] },
                { icon: Clock, title: "Business Hours", lines: ["Mon – Fri: 9:00 AM – 6:00 PM IST", "Sat: 9:00 AM – 1:00 PM IST"] },
              ].map((info) => (
                <Card key={info.title} className="border-0 shadow-sm">
                  <CardContent className="p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{info.title}</h3>
                      {info.lines.map((l) => (
                        <p key={l} className="text-muted-foreground text-sm">{l}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="you@company.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+91 XXXX XXXXXX" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <select id="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Select a service</option>
                        <option>Shipping Solutions</option>
                        <option>Inland Transportation</option>
                        <option>Air Cargo Solutions</option>
                        <option>Trade Finance Solutions</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" required rows={5} placeholder="Tell us about your logistics requirements..." />
                    </div>
                    <Button type="submit" size="lg" disabled={submitting} className="w-full md:w-auto">
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-secondary/50">
        <div className="container py-10">
          <div className="rounded-lg overflow-hidden h-[350px] bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground font-medium">Office no. 12, 17th floor, World Trade Centre-1, Cuffe Parade, Mumbai</p>
              <p className="text-muted-foreground text-sm mt-1">Google Maps integration available on production</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Prefer to Call?</h2>
          <p className="text-lg opacity-90 mb-4">Our logistics experts are available to discuss your requirements.</p>
<p className="text-2xl font-bold">+91 22 4581 5315</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
