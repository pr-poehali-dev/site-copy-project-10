
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;