/**
 * App Component
 * 
 * Root application component that sets up routing and global providers.
 * Theme defaults to system preference (light or dark based on OS settings).
 */
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

/**
 * Router Component
 * 
 * Defines application routes:
 * - / : Main resume page
 * - /404 : Not found page
 * - * : Fallback to not found
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      {/* Fallback route for unknown paths */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * App Component
 * 
 * Sets up the application with:
 * - ErrorBoundary for graceful error handling
 * - ThemeProvider (defaults to system preference)
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
