import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import ShippingSolutions from "./pages/services/ShippingSolutions";
import InlandTransportation from "./pages/services/InlandTransportation";
import AirCargo from "./pages/services/AirCargo";
import TradeFinance from "./pages/services/TradeFinance";
import FleetContainers from "./pages/services/FleetContainers";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/shipping-solutions" element={<ShippingSolutions />} />
            <Route path="/services/fleet-containers" element={<FleetContainers />} />
            <Route path="/services/inland-transportation" element={<InlandTransportation />} />
            <Route path="/services/air-cargo" element={<AirCargo />} />
            <Route path="/services/trade-finance" element={<TradeFinance />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
