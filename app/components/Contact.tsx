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

    const formData = Object.fromEntries(new FormData(form));

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      <div className="p-8 sm:p-12 rounded-3xl bg-[#455157] border border-[#74838b]/30 max-w-3xl mx-auto shadow-xl shadow-[#455157]/10">
        <Mail className="w-12 h-12 text-[#9db7bf] mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-white text-center mb-4 tracking-tight">Let's talk specs.</h2>
        <p className="text-[#d6dfe1] text-sm sm:text-base text-center max-w-md mx-auto mb-10">
          Have an engineering roadblock, an automation suite to scope, or a project requiring field-tested execution? Let's connect.
        </p>

        {status === 'SUCCESS' && (
          <div className="mb-8 p-4 rounded-xl bg-[#b0c7cc]/20 border border-[#b0c7cc]/40 flex items-start gap-3 text-[#d6dfe1] text-sm">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-white" />
            <div>
              <strong className="font-bold block text-white mb-0.5">Inquiry Received.</strong>
              Your info has been sent. We'll review the details and get back to you within 24 business hours.
            </div>
          </div>
        )}

        {status === 'ERROR' && (
          <div className="mb-8 p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-start gap-3 text-rose-200 text-sm">
            <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-300" />
            <div>
              <strong className="font-bold block text-white mb-0.5">Submission Failed.</strong>
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
              <label htmlFor="firstName" className="text-xs font-bold text-[#b0c7cc] uppercase tracking-wider">First Name</label>
              <input type="text" id="firstName" name="firstName" required placeholder="John" className="w-full px-4 py-3 rounded-xl bg-[#74838b]/30 border border-[#b0c7cc]/30 text-white placeholder-[#b0c7cc]/50 focus:outline-none focus:border-[#9db7bf] text-sm transition-colors duration-200" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xs font-bold text-[#b0c7cc] uppercase tracking-wider">Last Name</label>
              <input type="text" id="lastName" name="lastName" required placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-[#74838b]/30 border border-[#b0c7cc]/30 text-white placeholder-[#b0c7cc]/50 focus:outline-none focus:border-[#9db7bf] text-sm transition-colors duration-200" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold text-[#b0c7cc] uppercase tracking-wider">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-[#74838b]/30 border border-[#b0c7cc]/30 text-white placeholder-[#b0c7cc]/50 focus:outline-none focus:border-[#9db7bf] text-sm transition-colors duration-200" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold text-[#b0c7cc] uppercase tracking-wider">Project Details / Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell us about your technical roadmap..." className="w-full px-4 py-3 rounded-xl bg-[#74838b]/30 border border-[#b0c7cc]/30 text-white placeholder-[#b0c7cc]/50 focus:outline-none focus:border-[#9db7bf] text-sm transition-colors duration-200 resize-none" />
          </div>

          <button type="submit" disabled={status === 'PENDING'} className="w-full px-6 py-3.5 rounded-xl bg-[#74838b] text-white font-bold border border-[#b0c7cc]/30 cursor-pointer hover:bg-[#9db7bf] disabled:bg-[#74838b]/40 disabled:text-[#b0c7cc]/60 disabled:cursor-not-allowed transition-colors duration-200 text-center text-sm shadow-md shadow-[#455157]/20">
            {status === 'PENDING' ? 'Transmitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}