export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-500 text-xs py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} PocketSized. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}