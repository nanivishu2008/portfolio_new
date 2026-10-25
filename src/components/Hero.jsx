export default function Hero() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-margin pt-14 pb-20 flex flex-col items-center">
      {/* Mockup Browser Container */}
      <div className="w-full bg-[#141416] hairline-border rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-500">
        {/* Mockup Window Bar */}
        <div className="w-full px-6 py-4 flex items-center justify-between border-b border-white/[0.06] bg-[#111113]/80 backdrop-blur-sm">
          {/* macOS Traffic Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]/40 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]/40 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]/40 inline-block"></span>
          </div>

          {/* Monospaced URL Pill */}
          <div className="px-5 py-1 rounded-full bg-[#1c1c1f] border border-white/[0.08] text-[11px] font-mono text-[#8A8A8E] tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse"></span>
            <span>vishaldevarasetty.dev</span>
          </div>

          {/* Minimal Actions */}
          <div className="flex items-center gap-3 text-white/30 text-xs">
            <span className="material-symbols-outlined text-[16px] hover:text-white/70 cursor-default transition-colors">terminal</span>
            <span className="material-symbols-outlined text-[16px] hover:text-white/70 cursor-default transition-colors">smart_toy</span>
          </div>
        </div>

        {/* Hero Interior Canvas */}
        <div className="px-8 py-16 md:px-20 md:py-24 relative flex flex-col justify-between min-h-[460px]">
          {/* Subtle luminous gradient spotlight */}
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>

          {/* Big Typographic Headline */}
          <div className="relative z-10 max-w-5xl">
            <p className="font-mono text-xs text-[#8A8A8E] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>AI &amp; ML Specialist · Full Stack Developer</span>
            </p>
            <h1 className="font-headline-lg text-headline-lg md:text-[64px] md:leading-[1.15] text-primary font-normal tracking-tight">
              I build intelligent systems, full-stack platforms &amp;{' '}
              <span className="font-headline-lg italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-white to-neutral-400 underline decoration-white/20 underline-offset-8">
                agentic workflows.
              </span>
            </h1>
          </div>

          {/* Bottom Sub-details Split Right */}
          <div className="relative z-10 mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant">
                Available for software engineering &amp; AI opportunities
              </span>
            </div>
            <div className="text-left md:text-right">
              <p className="font-body-lg text-body-lg text-primary font-medium">
                B.Tech in CSE (AI &amp; ML) · Takshashila University (9.48 CGPA)
              </p>
              <p className="font-body-md text-body-md text-[#8A8A8E] mt-0.5">
                Based in Tirupati &amp; Chennai, India · 120+ LeetCode Solved (Rating: 1510)
              </p>
            </div>
          </div>

          {/* Gradient Mask at bottom to melt into background */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#141416] via-[#141416]/40 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Scroll Indicator Floating Arrow */}
      <a
        className="mt-12 flex flex-col items-center gap-2 group transition-opacity hover:opacity-100 opacity-60"
        href="#work"
      >
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E] group-hover:text-white transition-colors">
          Explore Projects
        </span>
        <div className="animate-float-bounce flex items-center justify-center p-2 rounded-full border border-white/[0.08] bg-[#141416]/60 backdrop-blur-sm">
          <span className="material-symbols-outlined text-[18px] text-white">keyboard_arrow_down</span>
        </div>
      </a>
    </section>
  );
}
