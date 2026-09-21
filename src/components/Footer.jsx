import profile from '../data/profile.json';

export default function Footer() {
  return (
    <footer className="py-8 px-5 border-t border-line relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-2 text-xs font-mono text-muted/60">
        <span>{profile.name} · Data Scientist @ UArizona</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
