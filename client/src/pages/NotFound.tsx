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
    <div 
      className="min-h-screen w-full flex items-center justify-center"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="text-center px-4">
        {/* Terminal icon */}
        <div className="flex justify-center mb-6">
          <Terminal 
            className="h-16 w-16 glow"
            style={{ color: 'var(--primary)' }}
          />
        </div>
        
        {/* Error code */}
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4 glow font-mono"
          style={{ color: 'var(--primary)' }}
        >
          404
        </h1>
        
        {/* Error message */}
        <h2 
          className="text-xl md:text-2xl font-semibold mb-4 font-mono"
          style={{ color: 'var(--primary-muted)' }}
        >
          &gt; PAGE_NOT_FOUND
        </h2>
        
        {/* Description */}
        <p 
          className="mb-8 leading-relaxed max-w-md mx-auto"
          style={{ color: 'var(--foreground)', opacity: 0.8 }}
        >
          The requested resource could not be located on this server.
          <br />
          It may have been moved or deleted.
        </p>
        
        {/* Home button */}
        <button
          onClick={handleGoHome}
          className="inline-flex items-center gap-2 px-6 py-3 border font-mono transition-all duration-300"
          style={{
            borderColor: 'var(--primary)',
            color: 'var(--primary)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary)';
            e.currentTarget.style.color = 'var(--primary-foreground)';
            e.currentTarget.style.boxShadow = '0 0 20px var(--glow-color)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--primary)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Home className="w-4 h-4" />
          RETURN_HOME
        </button>
      </div>
    </div>
  );
}
