"use client";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="ml-2 px-3 py-1 border-2 border-black bg-white text-black text-xs font-bold hover:bg-black hover:text-white transition-colors"
    >
      {copied ? "COPIED!" : "COPY"}
    </button>
  );
}

export default function Home() {
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
      <header className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-sm font-bold tracking-widest text-pink-500 mb-2">MY ORDINARY LIFE — ON CHAIN</p>
        <h2 className="text-5xl sm:text-7xl font-black leading-none mb-4">
          日常<span className="text-sky-400">.</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-600">
          The most chaotic everyday moments, tokenized. Nothing extraordinary here. Just a principal suplexing a deer.
        </p>
      </header>

      {/* MANGA GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-4 grid-rows-[auto] gap-0 border-4 border-black">

          {/* Panel 1 — large, speed lines */}
          <div className="col-span-2 row-span-2 border-2 border-black bg-pink-50 p-6 relative overflow-hidden min-h-[280px] flex flex-col justify-end">
            <div className="speed-lines absolute inset-0 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-bold text-pink-500 mb-1">CHAPTER 01</p>
              <h3 className="text-2xl font-black mb-2">PRINCIPAL vs DEER</h3>
              <p className="text-sm text-gray-700">
                The principal encounters a deer on school grounds. A normal person would shoo it away. He suplexes it. Full german suplex. No hesitation. This is Nichijou.
              </p>
            </div>
          </div>

          {/* Panel 2 — small top right */}
          <div className="col-span-1 border-2 border-black bg-sky-50 p-4 flex flex-col justify-center min-h-[140px]">
            <p className="text-xs font-bold text-sky-500 mb-1">HELVETICA STANDARD</p>
            <p className="text-sm text-gray-700">
              A short skit with no context. A man walks into a room. He leaves. Nothing happened. Everything happened.
            </p>
          </div>

          {/* Panel 3 — small, shake on hover */}
          <div className="col-span-1 border-2 border-black bg-yellow-50 p-4 flex flex-col justify-center min-h-[140px] hover:animate-shake transition-transform cursor-pointer panel-shake">
            <p className="text-xs font-bold text-yellow-600 mb-1">MIO SNAPS</p>
            <p className="text-sm text-gray-700">
              Yuuko sees Mio&apos;s notebook. Mio destroys the classroom. Desks airborne. This is friendship.
            </p>
          </div>

          {/* Panel 4 — medium */}
          <div className="col-span-1 border-2 border-black bg-white p-4 flex flex-col justify-center min-h-[140px]">
            <p className="text-xs font-bold text-gray-400 mb-1">NANO&apos;S SECRET</p>
            <p className="text-sm text-gray-700">
              She just wants to be a normal girl. But there&apos;s a giant wind-up key on her back. The Professor won&apos;t remove it. It&apos;s cute, she says.
            </p>
          </div>

          {/* Panel 5 — medium */}
          <div className="col-span-1 border-2 border-black bg-pink-100 p-4 flex flex-col justify-center min-h-[140px]">
            <p className="text-xs font-bold text-pink-500 mb-1">SAKAMOTO</p>
            <p className="text-sm text-gray-700">
              A cat that talks. Demands respect. Gets picked up by a child. Dignity: zero.
            </p>
          </div>

          {/* Panel 6 — wide bottom */}
          <div className="col-span-2 border-2 border-black bg-sky-50 p-6 flex flex-col justify-center min-h-[160px]">
            <p className="text-xs font-bold text-sky-500 mb-1">THE HALLWAY SCENE</p>
            <h3 className="text-xl font-black mb-2">Yuuko vs Mio — Rock Paper Scissors</h3>
            <p className="text-sm text-gray-700">
              They play rock paper scissors for the last sausage. The animation budget for this scene could fund a feature film. This is what KyoAni does to everyday moments.
            </p>
          </div>

          {/* Panel 7 */}
          <div className="col-span-1 border-2 border-black bg-yellow-50 p-4 flex flex-col justify-center min-h-[160px]">
            <p className="text-xs font-bold text-yellow-600 mb-1">EVERYDAY LIFE</p>
            <p className="text-sm text-gray-700">
              Yuuko forgot her homework. Again. The excuse this time involves a crow, a river, and divine intervention.
            </p>
          </div>

          {/* Panel 8 */}
          <div className="col-span-1 border-2 border-black bg-white p-4 flex flex-col justify-center min-h-[160px]">
            <p className="text-xs font-bold text-gray-400 mb-1">WIND-UP KEY</p>
            <p className="text-sm text-gray-700">
              $NICHIJOU on Solana. My ordinary life, but the ordinary is extraordinary and the blockchain is absurd. Just like everything else.
            </p>
          </div>

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
      <footer className="border-t-4 border-black py-6 text-center text-sm text-gray-500 max-w-6xl mx-auto">
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
      `}</style>
    </div>
  );
}
