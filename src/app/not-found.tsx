cat > src/app/not-found.tsx <<'EOF'
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 520, width: "100%" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Page not found</h1>
        <p style={{ opacity: 0.8, marginBottom: 16 }}>
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.15)",
              textDecoration: "none",
            }}
          >
            Go to Dashboard
          </Link>
          <Link
            href="/(full-width-pages)/signin"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.15)",
              textDecoration: "none",
            }}
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
EOF
