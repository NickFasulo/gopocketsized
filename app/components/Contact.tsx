"use client";
import { useState } from 'react';
import { Mail, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (form.user_system_validation.value.length > 0) return;

    setStatus('PENDING');

    const data = Object.fromEntries(new FormData(form));
    
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY,
      from_name: "PocketSized Consulting",
      subject: "New PocketSized Project Inquiry",
      ...data
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-800/60 to-slate-950 border border-slate-800 max-w-3xl mx-auto">
        <Mail className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-white text-center mb-4 tracking-tight">Let's talk specs.</h2>
        <p className="text-slate-400 text-sm sm:text-base text-center max-w-md mx-auto mb-10">
          Have an engineering roadblock, an automation suite to scope, or a project requiring field-tested execution? Let's connect.
        </p>

        {status === 'SUCCESS' && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3 text-emerald-400 text-sm">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block text-white mb-0.5">Inquiry Received.</strong>
              Your info has been sent. We'll review your scope and get back to you within 24 business hours.
            </div>
          </div>
        )}

        {status === 'ERROR' && (
          <div className="mb-8 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-start gap-3 text-rose-400 text-sm">
            <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block text-white mb-0.5">Transmission Failed.</strong>
              Something went wrong. Please try again or reach out to us directly.
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="absolute opacity-0 pointer-events-none -z-10 w-0 h-0 overflow-hidden" aria-hidden="true">
            <input type="text" name="user_system_validation" tabIndex={-1} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">First Name</label>
              <input type="text" id="firstName" name="firstName" required placeholder="John" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Last Name</label>
              <input type="text" id="lastName" name="lastName" required placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Project Details / Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell us about your technical roadmap..." className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition resize-none" />
          </div>

          <button type="submit" disabled={status === 'PENDING'} className="w-full px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed transition text-center text-sm shadow-lg shadow-emerald-500/10">
            {status === 'PENDING' ? 'Transmitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}