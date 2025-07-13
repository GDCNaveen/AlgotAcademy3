import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import Chapter2Sets from "./pages/Chapter2Sets";
import Chapter3Polynomials from "./pages/Chapter3Polynomials";
import Chapter4Algebra from "./pages/Chapter4Algebra";
import Chapter5Mensuration from "./pages/Chapter5Mensuration";
import NotFound from "./pages/NotFound";
import AppWrapper from "./components/AppWrapper";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AppWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Index />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/chapter-2-sets" element={<Chapter2Sets />} />
            <Route path="/chapter-3-polynomials" element={<Chapter3Polynomials />} />
            <Route path="/chapter-4-algebra" element={<Chapter4Algebra />} />
            <Route path="/chapter-5-mensuration" element={<Chapter5Mensuration />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
