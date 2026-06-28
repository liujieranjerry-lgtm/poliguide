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

// 原生 Hash 路由：读取 window.location.hash 决定渲染哪个页面
// URL 格式：/#/  /#/china  /#/germany  /#/japan  /#/presidents
function getHashPath(): string {
  const hash = window.location.hash; // e.g. "#/china" or ""
  if (!hash || hash === "#" || hash === "#/") return "/";
  return hash.slice(1); // 去掉开头的 "#"，得到 "/china"
}

function Router() {
  const [path, setPath] = useState(getHashPath);

  useEffect(() => {
    const onHashChange = () => setPath(getHashPath());
    window.addEventListener("hashchange", onHashChange);
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
