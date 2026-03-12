import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Anchor, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Shipping Solutions", path: "/services/shipping-solutions" },
      { label: "Fleet & Containers", path: "/services/fleet-containers" },
      { label: "Inland Transportation", path: "/services/inland-transportation" },
      { label: "Air Cargo Solutions", path: "/services/air-cargo" },
      { label: "Trade Finance Solutions", path: "/services/trade-finance" },
    ],
  },
  { label: "Industries", path: "/industries" },
  { label: "Contact", path: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91 22 4581 5315</span>
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +91 22 4581 5315</span>
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> info@doleship.com</span>
          </div>
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Mumbai, India</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card/95 backdrop-blur-md sticky top-0 z-50 border-b shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Anchor className="h-8 w-8 text-primary" />
            <div className="leading-tight">
              <span className="font-display text-lg font-bold text-primary block leading-none">DOLE SHIPPING</span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Corporation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className={`px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 transition-colors hover:bg-secondary ${location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"}`}>
                    {link.label} <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-card border rounded-lg shadow-lg py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.path} to={link.path} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary ${location.pathname === link.path ? "text-primary bg-secondary" : "text-foreground"}`}>
                  {link.label}
                </Link>
              )
            )}
            <Button asChild size="sm" className="ml-4">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-card pb-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left px-6 py-3 text-sm font-medium flex justify-between items-center">
                    {link.label} <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && link.children.map((child) => (
                    <Link key={child.path} to={child.path} onClick={() => setMobileOpen(false)} className="block px-10 py-2 text-sm text-muted-foreground hover:text-foreground">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-sm font-medium hover:bg-secondary">
                  {link.label}
                </Link>
              )
            )}
            <div className="px-6 pt-2">
              <Button asChild className="w-full" size="sm"><Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Quote</Link></Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="h-7 w-7" />
                <span className="font-display text-lg font-bold">DOLE SHIPPING</span>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">A technology-enabled logistics company focused on global trade efficiency, providing end-to-end shipping and trade finance solutions.</p>
            </div>
            <div>
              <h4 className="font-display text-base font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link to="/services/shipping-solutions" className="block hover:opacity-100">Shipping Solutions</Link>
                <Link to="/services/fleet-containers" className="block hover:opacity-100">Fleet & Containers</Link>
                <Link to="/services/inland-transportation" className="block hover:opacity-100">Inland Transportation</Link>
                <Link to="/services/air-cargo" className="block hover:opacity-100">Air Cargo Solutions</Link>
                <Link to="/services/trade-finance" className="block hover:opacity-100">Trade Finance Solutions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display text-base font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link to="/about" className="block hover:opacity-100">About Us</Link>
                <Link to="/industries" className="block hover:opacity-100">Industries</Link>
                <Link to="/contact" className="block hover:opacity-100">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display text-base font-semibold mb-4">Head Office</h4>
              <p className="text-sm opacity-80 leading-relaxed">Office No. 6, 7th Floor,<br />World Trade Centre-1,<br />Cuffe Parade, Mumbai,<br />Maharashtra, India</p>
<p className="text-sm opacity-80 mt-3">+91 22 4581 5315</p>
              <p className="text-sm opacity-80">info@doleship.com</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
            <p>© {new Date().getFullYear()} Dole Shipping Corporation. All rights reserved.</p>
            <p>www.doleship.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
