import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Strong 8K USA brand logo.
 * Features a modern 8K Ultra HD display icon with high-contrast gradient,
 * paired with "STRONG 8K" wordmark and "USA" pill badge.
 */
export default function Logo({
  className,
  tone = "dark",
  mono = false,
  size = 40,
}: {
  className?: string;
  tone?: "dark" | "light";
  mono?: boolean;
  size?: number;
}) {
  const gid = "s8k-tv-grad";
  const textColor = tone === "light" ? "#ffffff" : "var(--text)";

  return (
    <Link
      href="/"
      className={className}
      aria-label={`${SITE.name} — Home`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        color: mono ? "currentColor" : undefined,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
        style={{ flex: "0 0 auto", display: "block" }}
      >
        {!mono && (
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff781f" />
              <stop offset="50%" stopColor="#ff5500" />
              <stop offset="100%" stopColor="#e04600" />
            </linearGradient>
          </defs>
        )}

        {mono ? (
          <>
            <rect x="5" y="9" width="38" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M19 17 L19 27 L28 22 Z" fill="currentColor" />
            <line x1="16" y1="39" x2="32" y2="39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="35" x2="24" y2="39" stroke="currentColor" strokeWidth="2.5" />
          </>
        ) : (
          <>
            {/* Base Screen */}
            <rect x="5" y="9" width="38" height="26" rx="6" fill={`url(#${gid})`} />
            {/* Gloss Highlight */}
            <path
              d="M11 9 H37 A6 6 0 0 1 43 15 V16 H5 V15 A6 6 0 0 1 11 9 Z"
              fill="#ffffff"
              opacity="0.22"
            />
            {/* Play Symbol */}
            <path d="M21 16.5 L21 27.5 L30.5 22 Z" fill="#ffffff" />
            {/* Stand Base */}
            <line x1="16" y1="40" x2="32" y2="40" stroke="#ff781f" strokeWidth="3" strokeLinecap="round" />
            <line x1="24" y1="35" x2="24" y2="40" stroke="#ff5500" strokeWidth="3" />
          </>
        )}
      </svg>

      <span
        style={{
          fontWeight: 900,
          fontSize: "1.25rem",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          whiteSpace: "nowrap",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          color: mono ? "currentColor" : textColor,
        }}
      >
        <span>STRONG</span>
        <span style={{ color: "var(--accent, #ff6600)" }}>8K</span>
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            background: "linear-gradient(135deg, #ff781f, #ff5200)",
            color: "#ffffff",
            padding: "2px 7px",
            borderRadius: "4px",
            verticalAlign: "middle",
            textTransform: "uppercase",
            boxShadow: "0 2px 8px rgba(255, 102, 0, 0.35)",
          }}
        >
          USA
        </span>
      </span>

    </Link>
  );
}
