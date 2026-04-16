import { motion } from "motion/react";
import { 
  Download, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  BrainCircuit, 
  Gauge,
  ChevronDown,
  Check,
  Monitor,
  HardDrive,
  Cpu as GpuIcon,
  Box,
  Plug,
  MessageSquare,
  Github
} from "lucide-react";
import NeuralNetwork from "./components/NeuralNetwork";
import SynapseLogo from "./components/SynapseLogo";

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-2xl bg-brand-charcoal/50 border border-white/5 flex flex-col items-start"
  >
    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6">
      <Icon className="w-5 h-5 text-brand-orange" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-sm text-text-dim leading-relaxed">{description}</p>
  </motion.div>
);

const Step = ({ number, icon: Icon, title, description }: any) => (
  <div className="flex flex-col items-center text-center max-w-[280px] relative">
    <div className="w-12 h-12 rounded-full border border-brand-orange/30 flex items-center justify-center text-brand-orange font-bold mb-6 bg-black z-10">
      {number}
    </div>
    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-brand-orange" />
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-sm text-text-dim leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black selection:bg-brand-orange/30 selection:text-white">
      <NeuralNetwork />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SynapseLogo className="w-8 h-8" />
            <span className="text-xl font-black tracking-tighter uppercase italic">Synapse</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-text-dim">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/synapsecore777/synapse-desktop/releases/tag/v1.0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 text-text-dim hover:text-white hover:bg-white/5 transition-all"
              title="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1IDJp7yxmXfBKs6Bjq0iavL_DHQBntWv0"
              className="px-6 py-2.5 rounded-lg bg-brand-orange text-white font-bold text-sm hover:bg-orange-600 transition-all flex items-center gap-2 shadow-lg shadow-brand-orange/20"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-orange/5 border border-brand-orange/20 rounded-full text-[11px] font-bold text-brand-orange mb-8 tracking-wider uppercase"
            >
              <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
              V1.0 — NOW AVAILABLE FOR WINDOWS
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-8"
            >
              Your Persistent<br />
              <span className="text-brand-orange">AI</span> Companion
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-text-dim max-w-lg mb-10 leading-relaxed"
            >
              Your local, private AI companion powered by your own hardware. 
              No cloud. No subscriptions. Just pure, persistent intelligence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-12 text-sm font-semibold text-text-dim"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                100% Private
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                Works Offline
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                GPU Accelerated
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://github.com/synapsecore777/synapse-desktop/releases/tag/v1.0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <button className="px-8 py-4 rounded-xl border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2">
                Learn More
                <ChevronDown className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <SynapseLogo className="w-full max-w-[500px] aspect-square" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Everything you need.</h2>
            <h2 className="text-5xl md:text-6xl font-black text-text-dim">Nothing in the cloud.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FeatureCard 
              icon={BrainCircuit}
              title="Smart Memory"
              description="Remembers your conversations, preferences, and context across every session. Like a colleague who never forgets."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Full Privacy"
              description="Zero data leaves your device. Your conversations are yours, forever. No telemetry, no tracking."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Cpu}
              title="Runs Locally"
              description="No internet required. Your AI lives entirely on your machine — always available, always instant."
            />
            <FeatureCard 
              icon={Zap}
              title="Fast & Responsive"
              description="Lightning-fast inference powered by your CPU or GPU. No waiting, no throttling."
            />
            <FeatureCard 
              icon={Gauge}
              title="Lightweight & Optimized"
              description="Built lean. Synapse delivers powerful AI without bloating your system or demanding constant resources."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-[11px] font-bold text-brand-orange tracking-[0.3em] uppercase mb-6">Get Started</div>
          <h2 className="text-5xl md:text-6xl font-black mb-24">Up and running in minutes.</h2>
          
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1/2 h-px bg-brand-orange/20 hidden md:block" />
            <Step 
              number="01"
              icon={Box}
              title="Install Synapse"
              description="Download the .exe and run the installer. Up and running in under 2 minutes."
            />
            <Step 
              number="02"
              icon={MessageSquare}
              title="Start Chatting"
              description="Open Synapse and start your first conversation. Your private AI is ready instantly."
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-[11px] font-bold text-brand-orange tracking-[0.3em] uppercase mb-8">Download</div>
          <h2 className="text-6xl md:text-8xl font-black mb-8">Take AI offline,<br /><span className="text-brand-orange">for good.</span></h2>
          <p className="text-xl text-text-dim mb-12 max-w-2xl mx-auto leading-relaxed">
            Free forever. No account needed. No subscription. Just download and run.
          </p>
          
          <p className="text-xs text-zinc-600 mb-20">Windows 10 / 11 · 64-bit · 20GB</p>

          <div className="p-10 rounded-3xl bg-brand-charcoal/30 border border-white/5 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-brand-orange font-bold text-xs tracking-widest uppercase mb-8">
              <Monitor className="w-4 h-4" />
              System Requirements
            </div>
            <ul className="space-y-4 font-mono text-sm text-text-dim mb-10">
              <li className="flex items-start gap-4">
                <span className="text-brand-orange">&gt;</span>
                <span>OS: Windows 10 / 11 (64-bit)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange">&gt;</span>
                <span>RAM: 8 GB minimum — 16 GB recommended</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange">&gt;</span>
                <span>GPU: Optional — Nvidia 6 GB+ VRAM ideal</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange">&gt;</span>
                <span>Storage: 20GB</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-orange">&gt;</span>
                <span>Network: Works 100% offline</span>
              </li>
            </ul>

            <div className="p-6 rounded-2xl bg-brand-orange/5 border border-brand-orange/20 flex items-start gap-4">
              <Zap className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <div className="text-brand-orange font-bold text-xs tracking-wider uppercase mb-1">Performance Caution</div>
                <p className="text-xs text-text-dim leading-relaxed">
                  Users with low-end specifications are strongly recommended to use <span className="text-white font-bold">Fast Mode</span> within the application for the best experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-10 flex justify-end">
        <div className="text-zinc-600 text-xs uppercase tracking-widest">
          © 2026 Synapse AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
