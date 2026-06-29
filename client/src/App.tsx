import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChinaHome from "./pages/ChinaHome";
import GermanyHome from "./pages/GermanyHome";
import JapanHome from "./pages/JapanHome";
import Presidents from "./pages/Presidents";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { getCurrentPath } from "./lib/hashNav";

function Router() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const onHashChange = () => setPath(getCurrentPath());
    window.addEventListener("hashchange", onHashChange);
    // 初始化时如果 hash 为空，设置为 #/
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (path === "/") return <Home />;
  if (path === "/china") return <ChinaHome />;
  if (path === "/germany") return <GermanyHome />;
  if (path === "/japan") return <JapanHome />;
  if (path === "/presidents") return <Presidents />;
  return <NotFound />;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
