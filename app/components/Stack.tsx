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
    <section id="solutions" className="bg-[#267EC5] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-4">Our Operational Footprint</h2>
        <p className="text-[#d6dfe1] text-sm max-w-md mx-auto mb-8">
          The methodologies, frameworks, and core competencies we bring to your organization.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {coreCapabilities.map((capability) => (
            <span 
              key={capability} 
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors duration-200 text-xs font-semibold text-white flex items-center gap-2 text-left h-full shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
              <span className="break-words">{capability}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}