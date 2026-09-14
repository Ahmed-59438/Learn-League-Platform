import Link from "next/link";
import { Home, Search } from "lucide-react";

/**
 * Custom 404 page for the Next.js App Router.
 * Rendered whenever a user navigates to a route that doesn't exist.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background,#020617)] p-6">
      <div className="text-center space-y-6">
        {/* Large 404 number */}
        <div className="relative">
          <p
            className="text-[10rem] font-black leading-none select-none"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(15,23,42,0.8)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Search className="w-9 h-9" style={{ color: "rgba(148,163,184,0.6)" }} />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Page not found</h1>
          <p className="text-sm" style={{ color: "rgba(148,163,184,0.8)" }}>
            The page you&apos;re looking for doesn&apos;t exist or was moved.
          </p>
        </div>

        {/* Action */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          style={{ background: "white", color: "#020617" }}
        >
          <Home className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
