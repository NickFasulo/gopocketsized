import { Users, Code2, Terminal, Layers, ShieldCheck, MessageSquareHeart } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Customer Success",
    category: "CX",
    desc: "Designing comprehensive post-sale customer lifecycles, high-touch onboarding decks, and quarterly business review (QBR) frameworks that defend and expand revenue."
  },
  {
    icon: <MessageSquareHeart className="w-5 h-5" />,
    title: "Touchpoint Optimization",
    category: "CX",
    desc: "Mapping targeted client engagement strategies including structured product walkthroughs, check-in intervals, and intentional product launch or closing workflows."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "CRM Management",
    category: "CX",
    desc: "Structuring clean customer relationship management workspaces, establishing strict data input models, and ensuring predictable account communication channels."
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Frontend Development",
    category: "DEV",
    desc: "Building highly modular, accessible, and reactive user interfaces using React, Next.js, and Vite, tightly styled via Tailwind CSS or Material-UI design systems."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "QA Engineering",
    category: "DEV",
    desc: "Implementing clean software testing protocols, structured bug tracking, and automated CI/CD pipeline runs using GitHub Actions, Jira, ClickUp, and Zendesk."
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Browser Automation",
    category: "DEV",
    desc: "Engineering highly stable end-to-end (E2E) UI and feature workflows using TypeScript, state management systems (Redux), and robust automated test code scripts."
  }
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t border-[#b0c7cc]/40">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-black mb-3">We bridge the gap between doing it yourself <br className="hidden sm:inline" /> and hiring a full-time team.</h2>
        <p className="text-[#455157] max-w-xl mx-auto text-sm sm:text-base">
          We believe every vision deserves thoughtful, strategic support. Our collaborative partnership is designed to help you move ideas forward through critical thinking, constructive planning, and hands-on execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group p-6 rounded-2xl bg-white border border-[#b0c7cc]/50 hover:border-[#267EC5] transition-colors duration-200 ease-out flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#b0c7cc]/20 group-hover:bg-[#267EC5] text-[#455157] group-hover:text-white flex items-center justify-center transition-colors duration-200 ease-out">
                  {service.icon}
                </div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded border bg-[#b0c7cc]/20 text-[#455157] border-[#b0c7cc]/40">
                  {service.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{service.title}</h3>
              <p className="text-sm text-[#455157] leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}