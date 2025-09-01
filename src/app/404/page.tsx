// src/app/404/page.tsx
export default function NotFound() {
  return (
    <div style={{ padding: "5rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem" }}>404 - Page Not Found</h1>
      <p style={{ marginTop: "1rem" }}>
        The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          display: "inline-block",
          color: "#0070f3",
          textDecoration: "underline",
        }}
      >
        Go back home
      </a>
    </div>
  );
}
