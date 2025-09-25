import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Collections from "./pages/Collections";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header language={language} onLanguageChange={setLanguage} />
            <main>
              <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/productos" element={<Products language={language} />} />
                <Route path="/colecciones" element={<Collections language={language} />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer language={language} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
