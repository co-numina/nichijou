"use client";
import { useState, useEffect, useRef, useCallback } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="ml-2 px-3 py-1 border-2 border-black bg-white text-black text-xs font-bold hover:bg-black hover:text-white transition-colors cursor-pointer"
    >
      {copied ? "COPIED!" : "COPY"}
    </button>
  );
}

// Panel that reveals on scroll + flashes on click
function Panel({
  children,
  className = "",
  bg = "bg-white",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleClick = useCallback(() => {
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
  }, []);

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`border-2 border-black ${bg} p-5 flex flex-col justify-end relative overflow-hidden cursor-pointer select-none ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ${delay}ms, transform 0.5s ${delay}ms`,
      }}
    >
      {/* Impact flash */}
      {flash && (
        <div className="absolute inset-0 bg-white z-50 pointer-events-none" style={{ animation: "impactFlash 0.15s ease-out forwards" }} />
      )}
      {children}
    </div>
  );
}

const QUOTES = [
  "I have no idea what just happened, but I know it was amazing.",
  "The animation budget for this scene could fund three movies.",
  "Nano, your key is showing again.",
  "Sakamoto-san demands you address him properly.",
  "Yuuko's homework excuse today: a time-traveling pigeon ate it.",
  "The principal just suplexed a deer. I repeat: a deer.",
  "Helvetica Standard: a man enters. A man leaves. Art.",
  "Mio will destroy everything you love if you touch her notebook.",
  "This is just an ordinary day. Nothing to see here.",
  "KyoAni really said 'let's give this sausage scene movie-tier animation.'",
  "The Professor added a rocket launcher to Nano. For safety.",
  "Yuuko's test score: 1. Out of 100. She celebrated.",
  "Mai put a Buddha statue inside a jack-in-the-box. Why? Mai.",
  "Every frame of this show costs more than your rent.",
  "Nichijou means 'everyday life.' This is the least everyday show ever made.",
  "The go-soccer club has one member and no understanding of either sport.",
];

export default function Home() {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [quoteKey, setQuoteKey] = useState(0);

  const randomQuote = useCallback(() => {
    const next = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(next);
    setQuoteKey((k) => k + 1);
  }, []);

  // Auto-cycle quotes
  useEffect(() => {
    const iv = setInterval(randomQuote, 6000);
    return () => clearInterval(iv);
  }, [randomQuote]);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* NAV */}
      <nav className="border-b-4 border-black px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto">
        <h1 className="text-2xl font-black tracking-tighter">$NICHIJOU</h1>
        <div className="flex items-center bg-gray-100 border-2 border-black px-3 py-2">
          <span className="text-xs font-mono tracking-tight select-all">PASTE_CA_HERE</span>
          <CopyButton text="PASTE_CA_HERE" />
        </div>
        <div className="flex gap-4 text-sm font-bold">
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:underline">Telegram</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-4 py-14 text-center">
        <p className="text-sm font-bold tracking-widest text-pink-500 mb-3">MY ORDINARY LIFE — ON CHAIN</p>
        <h2 className="text-6xl sm:text-8xl font-black leading-none mb-5">
          日常<span className="text-sky-400">.</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-600 mb-8">
          The most chaotic everyday moments, tokenized. Nothing extraordinary here. Just a principal suplexing a deer.
        </p>

        {/* Random quote ticker */}
        <div
          className="inline-block border-2 border-black px-6 py-3 cursor-pointer hover:bg-black hover:text-white transition-colors max-w-lg"
          onClick={randomQuote}
        >
          <p key={quoteKey} className="text-sm font-bold italic" style={{ animation: "fadeIn 0.4s ease-out" }}>
            &ldquo;{quote}&rdquo;
          </p>
          <p className="text-[10px] text-gray-400 mt-1 tracking-widest uppercase">click for another moment</p>
        </div>
      </header>

      {/* MANGA GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-4 grid-rows-[auto] gap-0 border-4 border-black">

          <Panel className="col-span-2 row-span-2 min-h-[280px]" bg="bg-pink-50" delay={0}>
            <div className="speed-lines absolute inset-0 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-bold text-pink-500 mb-1">CHAPTER 01</p>
              <h3 className="text-2xl font-black mb-2">PRINCIPAL vs DEER</h3>
              <p className="text-sm text-gray-700">
                The principal encounters a deer on school grounds. A normal person would shoo it away. He suplexes it. Full german suplex. No hesitation. This is Nichijou.
              </p>
            </div>
          </Panel>

          <Panel bg="bg-sky-50" delay={100} className="min-h-[140px]">
            <p className="text-xs font-bold text-sky-500 mb-1">HELVETICA STANDARD</p>
            <p className="text-sm text-gray-700">
              A short skit with no context. A man walks into a room. He leaves. Nothing happened. Everything happened.
            </p>
          </Panel>

          <Panel bg="bg-yellow-50" delay={200} className="min-h-[140px] panel-shake">
            <p className="text-xs font-bold text-yellow-600 mb-1">MIO SNAPS</p>
            <p className="text-sm text-gray-700">
              Yuuko sees Mio&apos;s notebook. Mio destroys the classroom. Desks airborne. This is friendship.
            </p>
          </Panel>

          <Panel delay={150} className="min-h-[140px]">
            <p className="text-xs font-bold text-gray-400 mb-1">NANO&apos;S SECRET</p>
            <p className="text-sm text-gray-700">
              She just wants to be a normal girl. But there&apos;s a giant wind-up key on her back. The Professor won&apos;t remove it. It&apos;s cute, she says.
            </p>
          </Panel>

          <Panel bg="bg-pink-100" delay={250} className="min-h-[140px]">
            <p className="text-xs font-bold text-pink-500 mb-1">SAKAMOTO</p>
            <p className="text-sm text-gray-700">
              A cat that talks. Demands respect. Gets picked up by a child. Dignity: zero.
            </p>
          </Panel>

          <Panel bg="bg-sky-50" delay={300} className="col-span-2 min-h-[160px]">
            <p className="text-xs font-bold text-sky-500 mb-1">THE HALLWAY SCENE</p>
            <h3 className="text-xl font-black mb-2">Yuuko vs Mio — Rock Paper Scissors</h3>
            <p className="text-sm text-gray-700">
              They play rock paper scissors for the last sausage. The animation budget for this scene could fund a feature film. This is what KyoAni does to everyday moments.
            </p>
          </Panel>

          <Panel bg="bg-yellow-50" delay={350} className="min-h-[160px]">
            <p className="text-xs font-bold text-yellow-600 mb-1">EVERYDAY LIFE</p>
            <p className="text-sm text-gray-700">
              Yuuko forgot her homework. Again. The excuse this time involves a crow, a river, and divine intervention.
            </p>
          </Panel>

          <Panel delay={400} className="min-h-[160px]">
            <p className="text-xs font-bold text-gray-400 mb-1">MAI&apos;S TROLLING</p>
            <p className="text-sm text-gray-700">
              Mai placed a Buddha statue inside a jack-in-the-box. She put salmon on Yuuko&apos;s head during a nap. Her deadpan is a weapon.
            </p>
          </Panel>

          {/* Row 4 — new panels for density */}
          <Panel bg="bg-pink-50" delay={450} className="col-span-1 min-h-[160px]">
            <p className="text-xs font-bold text-pink-500 mb-1">THE PROFESSOR</p>
            <p className="text-sm text-gray-700">
              She&apos;s 8 years old. She built a sentient robot. She added a rocket launcher &ldquo;for safety.&rdquo; She only eats snacks. She is the smartest and dumbest character simultaneously.
            </p>
          </Panel>

          <Panel bg="bg-sky-50" delay={500} className="col-span-2 min-h-[160px]">
            <p className="text-xs font-bold text-sky-500 mb-1">GO-SOCCER CLUB</p>
            <h3 className="text-lg font-black mb-2">One Member. Zero Understanding.</h3>
            <p className="text-sm text-gray-700">
              A club dedicated to combining Go and soccer. Nobody knows the rules. The sole member recruits with desperate enthusiasm. The most Nichijou club imaginable.
            </p>
          </Panel>

          <Panel bg="bg-yellow-50" delay={550} className="col-span-1 min-h-[160px]">
            <p className="text-xs font-bold text-yellow-600 mb-1">TEST SCORES</p>
            <p className="text-sm text-gray-700">
              Yuuko scored 1 out of 100. She celebrated. &ldquo;At least it&apos;s not zero!&rdquo; This is the energy we&apos;re tokenizing.
            </p>
          </Panel>

        </div>
      </section>

      {/* ORIGIN / ATTRIBUTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="border-4 border-black p-8">
          <p className="text-xs font-bold tracking-widest text-pink-500 mb-3">ORIGIN</p>
          <h3 className="text-2xl font-black mb-4">Created by Keiichi Arawi. Animated by Kyoto Animation.</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            <em>Nichijou: My Ordinary Life</em> is a manga by <strong>Keiichi Arawi</strong>, serialized 2006–2015 in Kadokawa&apos;s Monthly Shonen Ace.
            The anime adaptation by <strong>Kyoto Animation</strong> (2011) turned everyday school life into the most absurdly over-animated
            show in history. KyoAni gave cafeteria scenes the budget of mecha battles. The result: a cult classic that keeps growing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="border-2 border-black p-3 text-center">
              <p className="text-xl font-black">26</p>
              <p className="text-xs text-gray-500">Episodes</p>
            </div>
            <div className="border-2 border-black p-3 text-center bg-pink-50">
              <p className="text-xl font-black">2006</p>
              <p className="text-xs text-gray-500">Manga Start</p>
            </div>
            <div className="border-2 border-black p-3 text-center bg-sky-50">
              <p className="text-xl font-black">2011</p>
              <p className="text-xs text-gray-500">Anime Air</p>
            </div>
            <div className="border-2 border-black p-3 text-center">
              <p className="text-xl font-black">∞</p>
              <p className="text-xs text-gray-500">Rewatches</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Not affiliated with Keiichi Arawi, Kyoto Animation, or Kadokawa. A community tribute —
            a love letter to the greatest slice-of-life anime ever made.
          </p>
          <p className="text-sm font-bold text-gray-900">
            This is not a utility token. No staking. No governance. No roadmap. Just vibes, chaos, and an unwavering belief
            that a principal suplexing a deer is the peak of human artistic achievement.
          </p>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="border-4 border-black p-8 text-center">
          <h3 className="text-3xl font-black mb-6">TOKENOMICS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border-2 border-black p-4">
              <p className="text-3xl font-black">1B</p>
              <p className="text-sm text-gray-600">Total Supply</p>
            </div>
            <div className="border-2 border-black p-4 bg-pink-50">
              <p className="text-3xl font-black">0%</p>
              <p className="text-sm text-gray-600">Tax</p>
            </div>
            <div className="border-2 border-black p-4 bg-sky-50">
              <p className="text-3xl font-black">100%</p>
              <p className="text-sm text-gray-600">Chaos</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-black py-6 text-center text-sm text-gray-500 max-w-6xl mx-auto px-4">
        <p>$NICHIJOU is a memecoin with no intrinsic value or expectation of financial return.</p>
        <p className="mt-1 font-bold text-black">My Ordinary Life. Nothing more. Nothing less.</p>
      </footer>

      <style jsx>{`
        .speed-lines::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 8px,
            rgba(236, 72, 153, 0.08) 8px,
            rgba(236, 72, 153, 0.08) 10px
          );
          animation: speedMove 0.8s linear infinite;
        }
        @keyframes speedMove {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(0px); }
        }
        .panel-shake:hover {
          animation: shake 0.3s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px) rotate(-1deg); }
          75% { transform: translateX(3px) rotate(1deg); }
        }
        @keyframes impactFlash {
          0% { opacity: 0.9; }
          100% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
