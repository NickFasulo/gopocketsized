export default function Footer() {
  return (
    <footer className="text-black text-xs py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} PocketSized. All rights reserved.</p>
        <div className="flex gap-6 font-medium">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#1A5A90] transition-colors duration-200 ease-out">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#1A5A90] transition-colors duration-200 ease-out">GitHub</a>
        </div>
      </div>
    </footer>
  );
}