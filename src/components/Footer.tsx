export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t text-center"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Lexcellence Group LLC
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--border-bright)" }}>
          lexcellencegroupllc.com
        </span>
      </div>
    </footer>
  );
}
