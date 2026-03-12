import { motion } from "framer-motion";
import { Target, Eye, Award, Lightbulb, Handshake, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue the highest standards in every operation, ensuring precision and quality." },
  { icon: Lightbulb, title: "Innovation", desc: "Leveraging cutting-edge technology to optimize logistics and drive efficiency." },
  { icon: ShieldCheck, title: "Integrity", desc: "Upholding ethical practices and transparency in all business relationships." },
  { icon: Handshake, title: "Partnership", desc: "Building lasting relationships through trust, reliability, and mutual growth." },
];

const leaders = [
  { name: "Sukant Murlidhar Dole", role: "Director" },
  { name: "Sushil Kumar Agrawal", role: "Director" },
  { name: "Gopala Ramaratnam", role: "Director" },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Company Profile</h1>
          <p className="text-lg opacity-85 leading-relaxed">A technology-enabled logistics company focused on global trade efficiency, providing end-to-end shipping and trade finance solutions.</p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"><Eye className="h-6 w-6 text-accent" /></div>
            <h2 className="font-display text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">At Dole Shipping Corporation, our vision is to redefine the future of logistics by delivering seamless, efficient, and innovative solutions on a global scale. We aspire to be a trusted leader in the industry, bridging the gap between businesses and their markets through cutting-edge technology and customer-centric services.</p>
          <p className="text-muted-foreground leading-relaxed">Rooted in excellence and driven by sustainability, we aim to empower global trade, create value for our partners, and set new benchmarks in logistics. With a focus on reliability, adaptability, and commitment to excellence, we envision a world where logistics is not just a service but a catalyst for growth and success.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><Target className="h-6 w-6 text-primary" /></div>
            <h2 className="font-display text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Our mission is to provide world-class logistics solutions that empower businesses to thrive in a connected world. We are dedicated to delivering excellence through innovative strategies, efficient operations, and a customer-first approach.</p>
          <p className="text-muted-foreground leading-relaxed">By leveraging advanced technology and sustainable practices, we aim to streamline supply chains, optimize global trade, and ensure timely and reliable deliveries. Our goal is to build lasting partnerships, exceed client expectations, and contribute to the growth and success of businesses worldwide while upholding the highest standards of integrity and professionalism.</p>
        </motion.div>
      </div>
    </section>

    {/* Expertise */}
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3 text-center">Our Strength</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">Our Expertise</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>As a global shipping company, we pride ourselves on offering tailored solutions that cater to the diverse needs of our clients. Our unique ability to seamlessly liaise with government bodies and bureaucrats to obtain specialized licenses sets us apart in the logistics industry, enabling us to meet any client requirement.</p>
            <p>Leveraging our extensive network, expertise, and specialized licenses, we help businesses navigate complex regulatory landscapes efficiently, ensuring faster deliveries and reliable transit timelines.</p>
            <p>Whether by air, land, or sea, our versatile logistics services are designed to handle all types of cargo and deliver to destinations worldwide.</p>
            <p>At Dole Shipping Corporation, we combine strategic innovation, operational efficiency, and personalized service to consistently exceed customer expectations.</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">Our Foundation</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Company Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Card className="h-full border-0 shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Management Team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {leaders.map((l) => (
            <div key={l.name} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold">
                {l.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-display text-lg font-semibold">{l.name}</h3>
              <p className="text-sm opacity-70">{l.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
