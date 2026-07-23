import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, ShieldCheck, Terminal, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white antialiased font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#455157] text-xs font-semibold mb-6 border border-[#267EC5]/40">
              <Target className="w-4 h-4 text-[#267EC5]" /> Our Mission
            </div>
            <h1 className="text-4xl font-extrabold text-black tracking-tight sm:text-5xl max-w-2xl mx-auto leading-tight">
              First and foremost, we're a human-led partner.
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-[#455157] text-base sm:text-lg leading-relaxed space-y-12">
            <p className="text-lg sm:text-xl text-[#455157] font-medium leading-relaxed text-left">
              If you have what we like to call a pocket-sized project, we'll build a customized plan around the support you need. From strategic brainstorming and process mapping to client onboarding, operational development, and project execution, we become an extension of your team without the overhead of hiring internally.
            </p>

            <div className="pt-8 border-t border-[#b0c7cc]/30 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black md:pt-1">
                  Our Approach
                </h3>
              </div>
              <div className="md:col-span-2 space-y-4 text-left">
                <p>
                  We don't simply complete tasks we're assigned. As leaders in our respective fields, we bring our own expertise to the table by identifying opportunities for improvement, strengthening workflows, uncovering operational gaps, and offering solutions that help your business run more effectively.
                </p>
                <p>
                  Whether you're launching something new or you're an established company that needs additional support on a specific initiative, we're ready to step in where we're needed most.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#b0c7cc]/30 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black md:pt-1">
                  The Human Element
                </h3>
              </div>
              <div className="md:col-span-2 space-y-4 text-left">
                <p>
                  We believe AI is an incredible tool, and we use it ourselves to enhance our work where appropriate. But we also know that some of the most valuable parts of building a business still require human insight, collaboration, creativity, and thoughtful decision-making. That's where we come in.
                </p>
                <p>
                  We're a pocket-sized team with extensive experience in client management, operational strategy, and building scalable systems. Our size allows us to provide personalized, one-on-one support while delivering the strategic thinking and execution needed to help your business grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-16">
          <div className="border-b border-[#b0c7cc]/40 pb-4 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold text-black">The Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch">
            
            <div className="h-full flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#267EC5] flex items-center justify-center text-white flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Inny Taylor</h3>
                  <p className="text-xs font-extrabold text-[#455157] uppercase tracking-wider mt-0.5">Co-Founder</p>
                </div>
              </div>
              <p className="text-sm text-[#455157] leading-relaxed">
                Specializing in building high-impact client success architectures, designing custom lifecycle resources, and optimizing core account touchpoints. I map and implement proactive engagement workflows—from onboarding to business reviews—while structuring CRM platforms to maximize retention.
              </p>
              <ul className="text-xs text-[#455157] space-y-2 pt-4 font-medium mt-auto">
                <li className="flex items-center gap-2"><span className="text-[#267EC5]">✔</span> Onboarding, QBR, & Product Launch Frameworks</li>
                <li className="flex items-center gap-2"><span className="text-[#267EC5]">✔</span> High-Touch Strategic Playbooks & Client Decks</li>
                <li className="flex items-center gap-2"><span className="text-[#267EC5]">✔</span> CRM Workspace Architecture & Pipeline Tracking</li>
              </ul>
            </div>

            <div className="h-full flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#267EC5] flex items-center justify-center text-white flex-shrink-0">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Nicholas Fasulo</h3>
                  <p className="text-xs font-extrabold text-[#455157] uppercase tracking-wider mt-0.5">Co-Founder</p>
                </div>
              </div>
              <p className="text-sm text-[#455157] leading-relaxed">
                Blending modular frontend development with comprehensive technical quality operations. I engineer fast, interactive user interfaces using React and Next.js, backed by stable browser automation frameworks, integrated CI/CD staging pipelines, and structured tracking workflows.
              </p>
              <ul className="text-xs text-[#455157] space-y-2 pt-4 font-medium mt-auto">
                <li className="flex items-center gap-2"><span className="text-[#267EC5]">✔</span> React, Next.js, Vite & Design Systems (Tailwind)</li>
                <li className="flex items-center gap-2"><span className="text-[#267EC5]">✔</span> Playwright Browser Automation & E2E Testing</li>
                <li className="flex items-center gap-2"><span className="text-[#267EC5]">✔</span> Technical Operations (Git, CI/CD, Jira, Zendesk)</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="mt-24 p-8 rounded-2xl bg-[#0F172A] border border-[#74838b]/30 text-center shadow-sm">
          <ShieldCheck className="w-10 h-10 text-[#267EC5] mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Why PocketSized?</h3>
          <p className="text-sm text-[#d6dfe1] max-w-xl mx-auto leading-relaxed">
            Most agencies only focus on one side of the coin: either fixing bugs or managing user complaints. We combine technical QA engineering directly with strategic client experience, resolving product issues completely before your clients ever run into them.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}