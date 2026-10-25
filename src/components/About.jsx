export default function About() {
  const milestones = [
    {
      title: "Takshashila University (NIAT)",
      subtitle: "B.Tech in Computer Science and Engineering (AI & ML) · 9.48 CGPA",
      date: "2025 — 2029 (Exp)"
    },
    {
      title: "LeetCode Problem Solving",
      subtitle: "120+ Algorithmic Challenges Solved · Contest Rating: 1510",
      date: "Active"
    },
    {
      title: "Smart India Hackathon (SIH)",
      subtitle: "National Participant · AI & Software Solutions Innovation",
      date: "Participant"
    },
    {
      title: "Advanced Technical Workshops",
      subtitle: "Gesture Tech, Hack the Human Signal, Autonomous Vehicles, Breaking into IoT",
      date: "Completed"
    }
  ];

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-margin py-24 scroll-mt-24 border-t border-white/[0.08]" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait & Identity Details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative group rounded-2xl overflow-hidden hairline-border bg-[#141416] shadow-2xl">
            {/* User Portrait Photo */}
            <img
              alt="Vishal Devarasetty portrait photograph"
              className="w-full aspect-[4/5] object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.02]"
              src="/profile.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-85"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="font-title-sm text-title-sm text-white font-medium">Vishal Devarasetty</p>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E]">Tirupati &amp; Chennai, India</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active</span>
              </div>
            </div>
          </div>

          {/* Academic Highlights Pill */}
          <div className="mt-8 flex flex-col gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E]">Academic Distinction</span>
            <div className="p-4 rounded-xl bg-[#141416] hairline-border space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-white text-sm">Takshashila University (NIAT)</span>
                <span className="font-mono text-xs text-emerald-400">9.48 / 10.0 CGPA</span>
              </div>
              <p className="text-xs text-[#8A8A8E]">B.Tech in Computer Science and Engineering (AI &amp; ML) · Expected 2029</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Prose & Timeline (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E] block mb-4">Philosophy &amp; Focus</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-normal leading-tight mb-8">
              Building reliable software by coupling rigorous computer science fundamentals with modern autonomous AI.
            </h2>
            <div className="space-y-6 text-[#A0A0A5] font-body-lg text-body-lg leading-relaxed">
              <p>
                I am a Computer Science &amp; Engineering student specializing in Artificial Intelligence and Machine Learning with an exceptional academic record of <strong className="text-white">9.48 CGPA</strong>. My development ethos centers on solving tangible problems through clean architectural patterns, robust data structures, and highly responsive user interfaces.
              </p>
              <p>
                From crafting resilient full-stack systems using FastAPI, Node.js, and React to orchestrating multi-agent knowledge graphs with LangChain, LangGraph, and ChromaDB, I build tools that transform raw information into verified, actionable execution.
              </p>
              <p>
                I actively refine my algorithmic problem-solving skills on LeetCode with over 120+ challenges conquered and a competitive rating of 1510, while engaging in national engineering platforms like the Smart India Hackathon (SIH).
              </p>
            </div>
          </div>

          {/* Experience & Milestones Timeline */}
          <div className="mt-14 pt-8 border-t border-white/[0.08]">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E] block mb-6">Milestones &amp; Track Record</span>
            <div className="space-y-6">
              {milestones.map((item, idx) => (
                <div
                  key={item.title}
                  className={`flex items-baseline justify-between py-2 ${
                    idx !== milestones.length - 1 ? 'border-b border-white/[0.04]' : ''
                  }`}
                >
                  <div>
                    <h4 className="font-body-lg text-body-lg text-primary font-medium">{item.title}</h4>
                    <p className="font-body-md text-body-md text-[#8A8A8E]">{item.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-[#8A8A8E]">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
