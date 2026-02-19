export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Conrad Preston</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Conrady82"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:conrad@conradpreston.dev"
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
