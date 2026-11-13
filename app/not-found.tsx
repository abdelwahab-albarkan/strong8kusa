import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found (404) | Strong 8K USA",
  description: "The requested page could not be found. Explore our 8K streaming subscription plans and supported devices.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <Container>
        <div style={{ textAlign: "center", maxWidth: 520, marginInline: "auto" }}>
          <span className="eyebrow eyebrow--chip">Error 404</span>
          <h1 style={{ marginTop: "var(--space-4)" }}>
            This page <span className="accent">could not be found</span>
          </h1>
          <p className="lead" style={{ marginTop: "var(--space-4)", marginInline: "auto" }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
            <Button href="/" size="lg">Back to home</Button>
            <Button href={PRIMARY_CTA.href} size="lg" variant="secondary">{PRIMARY_CTA.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
