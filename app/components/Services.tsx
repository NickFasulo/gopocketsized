import { Users, LineChart, Terminal, Layers, ShieldCheck, Headphones } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Customer Success Architecture",
    category: "Customer Experience",
    desc: "Designing post-sale customer lifecycles, proactive health-scoring frameworks, and custom account management playbooks that defend and expand revenue."
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "CX Strategy & Onboarding",
    category: "Customer Experience",
    desc: "Mapping and streamlining user onboarding journeys to collapse time-to-value, reduce churn, and turn active users into brand advocates."
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Account Management Systems",
    category: "Customer Experience",
    desc: "Setting up modern CRM workflows, establishing strategic renewal cycles, and scaling cross-functional client communication strategies."
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "End-to-End QA Automation",
    category: "Engineering Quality",
    desc: "Building highly stable, automated UI and API test frameworks from the ground up using TypeScript and modern web automation tools."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Regression & Quality Assurance",
    category: "Engineering Quality",
    desc: "Formulating bulletproof test strategies, smoke suites, and comprehensive bug tracking to catch business-critical regressions before they reach production."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Technical Operations",
    category: "Engineering Quality",
    desc: "Integrating test automation directly into your CI/CD deployment pipelines, managing staging environment stability, and optimizing developer feedback loops."
  }
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t border-[#b0c7cc]/40">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-[#455157] mb-3">Two Disciplines. One Flawless Execution.</h2>
        <p className="text-[#74838b] max-w-xl mx-auto text-sm sm:text-base">
          We optimize the two most critical levers of your product ecosystem: user experience and code reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 rounded-2xl bg-white border border-[#b0c7cc]/50 hover:border-[#74838b] transition-colors duration-200 ease-out flex flex-col justify-between shadow-sm shadow-[#74838b]/5">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#b0c7cc]/20 flex items-center justify-center text-[#74838b]">
                  {service.icon}
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded border ${
                  service.category === 'Customer Experience' 
                    ? 'bg-[#b0c7cc]/20 text-[#455157] border-[#b0c7cc]/40' 
                    : 'bg-[#d6dfe1]/40 text-[#74838b] border-[#d6dfe1]/80'
                }`}>
                  {service.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#455157] mb-2">{service.title}</h3>
              <p className="text-sm text-[#74838b] leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}