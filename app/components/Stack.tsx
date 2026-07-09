import { CheckCircle2 } from 'lucide-react';

const coreCapabilities = [
  'Customer Success Playbooks',
  'Churn Mitigation Strategies',
  'Brainstorming Sessions',
  'Account Management Workflows',
  'Onboarding Optimization',
  'Frontend Development',
  'CI/CD Pipeline Integration',
  'QA Automated Testing',
];

export default function Stack() {
  return (
    <section id="solutions" className="bg-[#455157] py-16 border-t border-b border-[#74838b]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-4">Our Operational Footprint</h2>
        <p className="text-[#d6dfe1] text-sm max-w-md mx-auto mb-8">
          The methodologies, frameworks, and core competencies we bring to your organization.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {coreCapabilities.map((capability) => (
            <span 
              key={capability} 
              className="p-3 rounded-xl bg-[#74838b]/20 border border-[#b0c7cc]/20 text-xs font-semibold text-white flex items-center gap-2 text-left h-full"
            >
              <CheckCircle2 className="w-4 h-4 text-[#9db7bf] flex-shrink-0" />
              <span className="break-words">{capability}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}