/**
 * ErrorBoundary Component
 * 
 * A React error boundary that catches JavaScript errors anywhere in the
 * child component tree and displays a fallback UI instead of crashing.
 * Styled to match the green terminal aesthetic of the site.
 */
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div 
          className="flex items-center justify-center min-h-screen p-8"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            {/* Error icon */}
            <AlertTriangle
              size={48}
              className="text-red-500 mb-6 flex-shrink-0"
            />
            
            {/* Error title */}
            <h2 
              className="text-xl mb-4 font-mono"
              style={{ color: 'var(--primary)' }}
            >
              &gt; RUNTIME_ERROR
            </h2>
            
            {/* Error stack trace */}
            <div 
              className="p-4 w-full rounded border overflow-auto mb-6"
              style={{ 
                borderColor: 'var(--border-muted)',
                backgroundColor: 'var(--background)',
              }}
            >
              <pre 
                className="text-sm whitespace-break-spaces font-mono"
                style={{ color: 'var(--foreground)', opacity: 0.8 }}
              >
                {this.state.error?.stack}
              </pre>
            </div>
            
            {/* Reload button */}
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 border font-mono transition-all duration-300"
              style={{
                borderColor: 'var(--primary)',
                color: 'var(--primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              <RotateCcw size={16} />
              RELOAD_PAGE
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
