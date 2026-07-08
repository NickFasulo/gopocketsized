import { Users, Code2, Terminal, Layers, ShieldCheck, Headphones } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Success Architecture & Decks",
    category: "Customer Experience",
    desc: "Designing comprehensive post-sale customer lifecycles, high-touch onboarding decks, and quarterly business review (QBR) frameworks that defend and expand revenue."
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "Touchpoint Optimization",
    category: "Customer Experience",
    desc: "Mapping targeted client engagement strategies including structured product walkthroughs, check-in intervals, and intentional product launch or closing workflows."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "CRM Lifecycle Management",
    category: "Customer Experience",
    desc: "Structuring clean customer relationship management workspaces, establishing strict data input models, and ensuring predictable account communication channels."
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Modern Frontend Development",
    category: "Engineering Quality",
    desc: "Building highly modular, accessible, and reactive user interfaces using React, Next.js, and Vite, tightly styled via Tailwind CSS or Material-UI design systems."
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Playwright Browser Automation",
    category: "Engineering Quality",
    desc: "Engineering highly stable end-to-end (E2E) UI and feature workflows using TypeScript, state management systems (Redux), and robust automated test code scripts."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Technical Operations & QA",
    category: "Engineering Quality",
    desc: "Implementing clean software testing protocols, structured bug tracking, and automated CI/CD pipeline runs using GitHub Actions, Jira, ClickUp, and Zendesk."
  }
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t border-[#b0c7cc]/40">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-[#455157] mb-3">We bridge the gap between doing it yourself <br className="hidden sm:inline" /> and hiring a full-time team.</h2>
        <p className="text-[#74838b] max-w-xl mx-auto text-sm sm:text-base">
          We believe every vision deserves thoughtful, strategic support. Our collaborative partnership is designed to help you move ideas forward through critical thinking, constructive planning, and hands-on execution. Whether you need a sounding board, a strategic partner, or an extra set of experienced hands, we're here to help you build with intention.
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