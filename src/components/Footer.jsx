export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5 text-center">
      <p className="text-xs text-text-muted/40 font-mono">
        Designed & Built by <span className="text-neon-cyan/50">Abhiram Varma</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
