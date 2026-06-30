import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, ShieldCheck, Terminal, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6 border border-emerald-500/20">
            <Target className="w-4 h-4" /> Our Mission
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl mb-6">
            Bridging the gap between software reliability and user retention.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            PocketSized was founded on a simple premise: a product is only as good as its execution. We partner with fast-growing tech companies to secure their infrastructure through automated engineering quality while engineering pristine client onboarding and lifecycle operations.
          </p>
        </section>
        <section className="space-y-16">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white">The Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Inny Taylor</h3>
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mt-0.5">Co-Founder & CX Principal</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Specializing in building high-impact client success ecosystems, scaling retention strategies, and optimizing customer onboarding pipelines. She designs predictable, numbers-driven client operations frameworks that secure MRR, collapse time-to-value, and build robust post-sale communication infrastructures.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-2">
                <li className="flex items-center gap-2">✔ Enterprise Account Management Systems</li>
                <li className="flex items-center gap-2">✔ Proactive Churn-Mitigation Modeling</li>
                <li className="flex items-center gap-2">✔ User Onboarding Engineering & CRM Strategy</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Nicholas Fasulo</h3>
                <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">Co-Founder & QA Automation Principal</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Bringing a deep software engineering background focused strictly on technical operations, reliability, and automated QA architecture. He designs resilient, end-to-end continuous integration regression testing pipelines, saving engineering hours and trapping regressions before they impact the production environment.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 pt-2">
                <li className="flex items-center gap-2">✔ TypeScript & Playwright Framework Design</li>
                <li className="flex items-center gap-2">✔ CI/CD Deployment Integration (GitHub Actions)</li>
                <li className="flex items-center gap-2">✔ Technical Operations & Staging Stability</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-24 p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Why PocketSized?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Most agencies only focus on one side of the coin: either fixing bugs or managing user complaints. We combine technical QA engineering directly with strategic client experience, resolving product issues completely before your clients ever run into them.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}