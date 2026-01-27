/**
 * NotFound Page (404)
 * 
 * Displays a terminal-themed 404 error page when users navigate to
 * a non-existent route. Matches the green terminal aesthetic of the site.
 */
import { Terminal, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center px-4">
        {/* Terminal icon */}
        <div className="flex justify-center mb-6">
          <Terminal className="h-16 w-16 text-green-400 glow" />
        </div>
        
        {/* Error code */}
        <h1 className="text-6xl md:text-8xl font-bold text-green-400 mb-4 glow font-mono">
          404
        </h1>
        
        {/* Error message */}
        <h2 className="text-xl md:text-2xl font-semibold text-green-300 mb-4 font-mono">
          &gt; PAGE_NOT_FOUND
        </h2>
        
        {/* Description */}
        <p className="text-green-400/80 mb-8 leading-relaxed max-w-md mx-auto">
          The requested resource could not be located on this server.
          <br />
          It may have been moved or deleted.
        </p>
        
        {/* Home button */}
        <button
          onClick={handleGoHome}
          className="inline-flex items-center gap-2 px-6 py-3 border border-green-400 text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
        >
          <Home className="w-4 h-4" />
          RETURN_HOME
        </button>
      </div>
    </div>
  );
}
