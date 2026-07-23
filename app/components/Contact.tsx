"use client";
import { useState } from 'react';
import { Mail, CheckCircle, XCircle } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [status, setStatus] = useState<'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    if ((form.elements.namedItem('user_system_validation') as HTMLInputElement)?.value.length > 0) return;

    const formData = Object.fromEntries(new FormData(form));

    const result = contactSchema.safeParse({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    });

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('PENDING');

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
    <section id="contact" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] max-w-3xl mx-auto shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#267EC5]/15 text-[#267EC5] border border-[#267EC5]/30 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6" />
        </div>
        
        <h2 className="text-3xl font-extrabold text-white text-center mb-3 tracking-tight">We would love to work with you.</h2>
        <p className="text-slate-400 text-sm sm:text-base text-center max-w-md mx-auto mb-10">
          Have a project, an idea, or a question? <br />
          Let's connect.
        </p>

        {status === 'SUCCESS' && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-start gap-3 text-emerald-200 text-sm">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
            <div>
              <strong className="font-bold block text-emerald-100 mb-0.5">Inquiry Received.</strong>
              Your info has been sent. We will review the details and get back to you within 24 business hours.
            </div>
          </div>
        )}

        {status === 'ERROR' && (
          <div className="mb-8 p-4 rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-start gap-3 text-rose-200 text-sm">
            <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
            <div>
              <strong className="font-bold block text-rose-100 mb-0.5">Submission Failed.</strong>
              Something went wrong. Please try again or reach out to us directly.
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
          <div className="absolute opacity-0 pointer-events-none -z-10 w-0 h-0 overflow-hidden" aria-hidden="true">
            <input type="text" name="user_system_validation" autoComplete="one-time-code" tabIndex={-1} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-xs font-bold text-slate-300 uppercase tracking-wider">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="e.g. Alex" 
                className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#267EC5] focus:ring-1 focus:ring-[#267EC5] text-sm transition-all duration-200 ${
                  errors.firstName ? 'border-rose-500/80 bg-rose-950/20' : 'border-slate-800'
                }`} 
              />
              {errors.firstName && <span className="text-xs text-rose-400 font-medium pl-1">{errors.firstName}</span>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xs font-bold text-slate-300 uppercase tracking-wider">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder="e.g. Morgan" 
                className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#267EC5] focus:ring-1 focus:ring-[#267EC5] text-sm transition-all duration-200 ${
                  errors.lastName ? 'border-rose-500/80 bg-rose-950/20' : 'border-slate-800'
                }`} 
              />
              {errors.lastName && <span className="text-xs text-rose-400 font-medium pl-1">{errors.lastName}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="you@example.com" 
              className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#267EC5] focus:ring-1 focus:ring-[#267EC5] text-sm transition-all duration-200 ${
                errors.email ? 'border-rose-500/80 bg-rose-950/20' : 'border-slate-800'
              }`} 
            />
            {errors.email && <span className="text-xs text-rose-400 font-medium pl-1">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">Project Details / Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              placeholder="Tell us about your project..." 
              className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#267EC5] focus:ring-1 focus:ring-[#267EC5] text-sm transition-all duration-200 resize-none ${
                errors.message ? 'border-rose-500/80 bg-rose-950/20' : 'border-slate-800'
              }`} 
            />
            {errors.message && <span className="text-xs text-rose-400 font-medium pl-1">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            disabled={status === 'PENDING'} 
            className="w-full px-6 py-3.5 rounded-xl bg-[#267EC5] hover:bg-[#1A5A90] text-white font-bold cursor-pointer disabled:bg-[#267EC5]/50 disabled:cursor-not-allowed transition-colors duration-200 text-center text-sm"
          >
            {status === 'PENDING' ? 'Transmitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}