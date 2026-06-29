import { CheckCircle2 } from 'lucide-react';

const coreCapabilities = [
  'Customer Success Playbooks',
  'Churn Mitigation Strategy',
  'Account Management Workflows',
  'Onboarding Optimization',
  'TypeScript & Playwright E2E',
  'CI/CD Pipeline Integration',
  'Regression Test Engineering',
  'GitHub Actions & Vercel'
];

export default function Stack() {
  return (
    <section id="solutions" className="bg-slate-950 py-16 border-t border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Our Operational Footprint</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
          The methodologies, frameworks, and core competencies we bring to your organization.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {coreCapabilities.map((capability) => (
            <span key={capability} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}