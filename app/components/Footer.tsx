export default function Footer() {
  return (
    <footer className="bg-[#267EC5] text-[#d6dfe1]/70 text-xs py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} PocketSized. All rights reserved.</p>
        <div className="flex gap-6 font-medium">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#d6dfe1]/70 hover:text-white transition-colors duration-200 ease-out">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#d6dfe1]/70 hover:text-white transition-colors duration-200 ease-out">GitHub</a>
        </div>
      </div>
    </footer>
  );
}