
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Serenade from "./pages/Serenade";
import Address from "./pages/Address";
import AmbassadoriIsland from "./pages/AmbassadoriIsland";
import GrandTowers from "./pages/GrandTowers";
import Ikon from "./pages/Ikon";
import Intourist from "./pages/Intourist";
import Parkline from "./pages/Parkline";
import PiazzaBatumi from "./pages/PiazzaBatumi";
import QueensResidence from "./pages/QueensResidence";
import ShekvetiliForestBeach from "./pages/ShekvetiliForestBeach";
import Summer365 from "./pages/Summer365";
import SunrisePalace from "./pages/SunrisePalace";
import BatumiVillas from "./pages/BatumiVillas";
import BuknariResort from "./pages/BuknariResort";
import GonioYachtsMarina from "./pages/GonioYachtsMarina";
import Nite from "./pages/Nite";
import PetraSeaResort from "./pages/PetraSeaResort";
import Solana from "./pages/Solana";
import SoloResidence from "./pages/SoloResidence";
import TbilisiWaterfront from "./pages/TbilisiWaterfront";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/serenade" element={<Serenade />} />
          <Route path="/address" element={<Address />} />
          <Route path="/ambassadori-island" element={<AmbassadoriIsland />} />
          <Route path="/grand-towers" element={<GrandTowers />} />
          <Route path="/ikon" element={<Ikon />} />
          <Route path="/intourist" element={<Intourist />} />
          <Route path="/parkline" element={<Parkline />} />
          <Route path="/piazza-batumi" element={<PiazzaBatumi />} />
          <Route path="/queens-residence" element={<QueensResidence />} />
          <Route path="/shekvetili-forest-beach" element={<ShekvetiliForestBeach />} />
          <Route path="/summer-365" element={<Summer365 />} />
          <Route path="/sunrise-palace" element={<SunrisePalace />} />
          <Route path="/batumi-villas" element={<BatumiVillas />} />
          <Route path="/buknari-resort" element={<BuknariResort />} />
          <Route path="/gonio-yachts-marina" element={<GonioYachtsMarina />} />
          <Route path="/nite" element={<Nite />} />
          <Route path="/petra-sea-resort" element={<PetraSeaResort />} />
          <Route path="/solana" element={<Solana />} />
          <Route path="/solo-residence" element={<SoloResidence />} />
          <Route path="/tbilisi-waterfront" element={<TbilisiWaterfront />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;