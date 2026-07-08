import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, ShieldCheck, Terminal, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white antialiased font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent text-[#455157] text-xs font-semibold mb-6 border border-[#b0c7cc]/60">
            <Target className="w-4 h-4 text-[#74838b]" /> Our Mission
          </div>
          <h1 className="text-4xl font-extrabold text-[#455157] tracking-tight sm:text-5xl mb-8 max-w-2xl mx-auto">
            We bridge the gap between doing it yourself and hiring a full-time team.
          </h1>
          <div className="text-base sm:text-lg text-[#74838b] max-w-2xl mx-auto leading-relaxed text-left space-y-6">
            <p>
              We believe every vision deserves thoughtful, strategic support. Our collaborative partnership is designed to help you move ideas forward through critical thinking, constructive planning, and hands-on execution. Whether you need a sounding board, a strategic partner, or an extra set of experienced hands, we're here to help you build with intention.
            </p>
            <p>
              We don't simply complete tasks we're assigned. As leaders in our respective fields, we bring our own expertise to the table by identifying opportunities for improvement, strengthening workflows, uncovering operational gaps, and offering solutions that help your business run more effectively.
            </p>
            <p>
              Whether you're launching something new or you're an established company that needs additional support on a specific initiative, we're ready to step in where we're needed most.
            </p>
            <p className="font-bold text-[#455157] text-center py-2">
              First and foremost, we're a human-led partner.
            </p>
            <p>
              If you have what we like to call a pocket-sized project, we'll build a customized plan around the support you need. From strategic brainstorming and process mapping to client onboarding, operational development, and project execution, we become an extension of your team without the overhead of hiring internally.
            </p>
            <p>
              We believe AI is an incredible tool, and we use it ourselves to enhance our work where appropriate. But we also know that some of the most valuable parts of building a business still require human insight, collaboration, creativity, and thoughtful decision-making. That's where we come in.
            </p>
            <p>
              We're a pocket-sized team with extensive experience in client management, operational strategy, and building scalable systems. Our size allows us to provide personalized, one-on-one support while delivering the strategic thinking and execution needed to help your business grow.
            </p>
          </div>
        </section>

        <section className="space-y-16">
          <div className="border-b border-[#b0c7cc]/40 pb-4 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#455157]">The Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Inny - CX & Strategic Success */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#b0c7cc]/20 border border-[#b0c7cc]/40 flex items-center justify-center text-[#455157]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#455157]">Inny Taylor</h3>
                <p className="text-xs font-extrabold text-[#74838b] uppercase tracking-wider mt-0.5">Co-Founder</p>
              </div>
              <p className="text-sm text-[#74838b] leading-relaxed">
                Specializing in building high-impact client success architectures, designing custom lifecycle resources, and optimizing core account touchpoints. I map and implement proactive engagement workflows—from onboarding to business reviews—while structuring CRM platforms to maximize retention.
              </p>
              <ul className="text-xs text-[#74838b]/80 space-y-2 pt-2 font-medium">
                <li className="flex items-center gap-2">✔ Onboarding, QBR, & Product Launch Frameworks</li>
                <li className="flex items-center gap-2">✔ High-Touch Strategic Playbooks & Client Decks</li>
                <li className="flex items-center gap-2">✔ CRM Workspace Architecture & Pipeline Tracking</li>
              </ul>
            </div>

            {/* Nicholas - Frontend & Engineering Quality */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#d6dfe1]/40 border border-[#d6dfe1]/80 flex items-center justify-center text-[#74838b]">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#455157]">Nicholas Fasulo</h3>
                <p className="text-xs font-extrabold text-[#74838b] uppercase tracking-wider mt-0.5">Co-Founder</p>
              </div>
              <p className="text-sm text-[#74838b] leading-relaxed">
                Blending modular frontend development with comprehensive technical quality operations. I engineer fast, interactive user interfaces using React and Next.js, backed by stable browser automation frameworks, integrated CI/CD staging pipelines, and structured tracking workflows.
              </p>

              <ul className="text-xs text-[#74838b]/80 space-y-2 pt-2 font-medium">
                <li className="flex items-center gap-2">✔ React, Next.js, Vite & Design Systems (Tailwind)</li>
                <li className="flex items-center gap-2">✔ Playwright Browser Automation & E2E Testing</li>
                <li className="flex items-center gap-2">✔ Technical Operations (Git, CI/CD, Jira, Zendesk)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24 p-8 rounded-2xl bg-[#455157] border border-[#74838b]/30 text-center shadow-xl shadow-[#455157]/10">
          <ShieldCheck className="w-10 h-10 text-[#9db7bf] mx-auto mb-4" />
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