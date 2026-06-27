import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChinaHome from "./pages/ChinaHome";
import GermanyHome from "./pages/GermanyHome";
import JapanHome from "./pages/JapanHome";
import Presidents from "./pages/Presidents";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/china"} component={ChinaHome} />
      <Route path={"/germany"} component={GermanyHome} />
      <Route path={"/japan"} component={JapanHome} />
      <Route path={"/presidents"} component={Presidents} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
