import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-800/60 to-slate-950 border border-slate-800 max-w-3xl mx-auto">
        <Mail className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Let's talk specs.</h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8">
          Have an engineering roadblock, an automation suite to scope, or a project requiring field-tested execution? Let's connect.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-sm mx-auto">
          <a 
            href="mailto:your-email@example.com" 
            className="w-full px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition text-center flex items-center justify-center gap-2"
          >
            Email Directly
          </a>
        </div>
      </div>
    </section>
  );
}