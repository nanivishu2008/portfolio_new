export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "AI Research & Document Intelligence Agent",
      category: "AI & Agentic Systems · Python",
      description: "Autonomous multi-agent AI system decomposing complex research queries into retrieval, analytical calculation, and fact verification tasks. Features ChromaDB vector search across dense document corpora with FastAPI validation.",
      tags: ["LangGraph", "LangChain", "FastAPI", "ChromaDB", "PostgreSQL"],
      githubUrl: "https://github.com/nanivishu2008",
      fileName: "multi_agent_graph.py",
      tagline: "LangGraph · RAG",
      statusText: "Status: Production Ready",
      codeLines: [
        { type: "keyword", text: "class ResearchOrchestrator(StateGraph):" },
        { type: "indent1", text: "async def execute_pipeline(query: str):" },
        { type: "indent2", text: "docs = await ChromaDB.similarity_search(query)" },
        { type: "indent2", text: "subtasks = decompose_query(query, docs)" },
        { type: "indent2", text: "return await synthesize_verified_report(subtasks)" },
      ],
      dotColor: "bg-emerald-400",
      statusColor: "text-emerald-400"
    },
    {
      id: "02",
      title: "NewsTrack — Supply Chain & Distribution Tracking",
      category: "Full Stack · Logistics · 2024",
      description: "Full-stack operations platform for newspaper production, inventory dispatch, and live route management. Engineered with FastAPI, SQLAlchemy, Alembic, JWT role-based security, and WebSockets for real-time tracking.",
      tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "WebSockets"],
      githubUrl: "https://github.com/nanivishu2008",
      fileName: "newstrack_dispatch.ts",
      tagline: "WebSocket · Real-Time",
      statusText: "Live Telemetry Active",
      codeLines: [
        { type: "keyword", text: "interface DispatchRoute {" },
        { type: "indent1", text: "routeId: string; stockLedger: InventoryMap;" },
        { type: "indent1", text: "liveTelemetry: WebSocketStream<Coordinates>;" },
        { type: "indent1", text: "escalationTrigger: async (incident) => void;" },
        { type: "keyword", text: "}" },
      ],
      dotColor: "bg-cyan-400",
      statusColor: "text-cyan-400"
    }
  ];

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-margin py-16 scroll-mt-24" id="work">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E]">Featured Engineering Projects</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono tracking-tight bg-white/[0.06] text-white/70 border border-white/[0.08]">(03)</span>
        </div>
        <p className="hidden md:block font-body-md text-body-md text-[#8A8A8E]">End-to-End AI Agents, Full-Stack Architectures &amp; Distributed Systems</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative bg-[#141416] project-card-glow rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-[#0e0e0f] relative code-preview-bg flex items-center justify-center p-6 border-b border-white/[0.06] group-hover:border-blue-500/30 transition-colors duration-500">
              <div className="w-full h-full rounded-xl bg-[#131315]/90 border border-white/[0.08] p-5 flex flex-col justify-between font-mono text-xs text-white/80 overflow-hidden relative shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.dotColor}`}></span>
                    <span className="text-[11px] text-neutral-300 font-medium">{project.fileName}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">{project.tagline}</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-[#A0A0A5] py-2 overflow-hidden">
                  {project.codeLines.map((line, idx) => (
                    <p key={idx} className={line.type === 'indent1' ? 'pl-4' : line.type === 'indent2' ? 'pl-8' : ''}>
                      {line.text}
                    </p>
                  ))}
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-neutral-400">
                  <span>FastAPI + Storage</span>
                  <span className={`${project.statusColor} font-mono`}>{project.statusText}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B0B0C]/80 backdrop-blur-md border border-white/[0.1] text-xs font-mono text-white/90">
                {project.id} / 03
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-title-sm text-title-sm text-primary font-medium group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="material-symbols-outlined text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-lg"
                  >
                    arrow_outward
                  </a>
                </div>
                <p className="font-body-md text-body-md text-[#8A8A8E] leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-neutral-300 border border-white/[0.06] group-hover:border-blue-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between group-hover:border-blue-500/20 transition-colors">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#8A8A8E]">
                  {project.category}
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-medium group-hover:text-cyan-400 group-hover:underline transition-colors"
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Card 3: TalentHub Spanning Both Columns */}
        <article className="group relative bg-[#141416] project-card-glow rounded-2xl overflow-hidden flex flex-col justify-between md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 w-full bg-[#0e0e0f] code-preview-bg flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/[0.06] group-hover:border-blue-500/30 transition-colors duration-500">
              <div className="w-full h-full rounded-xl bg-[#131315]/90 border border-white/[0.08] p-5 flex flex-col justify-between font-mono text-xs text-white/80 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] text-neutral-300 font-medium">talenthub_ats.controller.js</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">Express · JWT · ATS</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-[#A0A0A5] py-4">
                  <p>const handleApplicationStageUpdate =</p>
                  <p className="pl-4">async (req, res) =&gt; &#123;</p>
                  <p className="pl-8">const &#123; candidateId, stage, feedback &#125; = req.body;</p>
                  <p className="pl-8">await ATS_Service.notifyCandidate(&#123; candidateId, stage &#125;);</p>
                  <p className="pl-8">return res.status(200).json(&#123; success: true &#125;);</p>
                  <p className="pl-4">&#125;;</p>
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-neutral-400">
                  <span>Role-Based Auth &amp; Filtering</span>
                  <span className="text-emerald-400 font-mono">PostgreSQL Schema</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-title-sm text-title-sm text-primary font-medium group-hover:text-white transition-colors">
                    TalentHub — Job Application &amp; Recruitment Management System
                  </h3>
                  <a
                    href="https://github.com/nanivishu2008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="material-symbols-outlined text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-lg"
                  >
                    arrow_outward
                  </a>
                </div>
                <p className="font-body-md text-body-md text-[#8A8A8E] leading-relaxed">
                  A comprehensive full-stack job board and applicant tracking system (ATS) with segregated candidate and recruiter portals. Features candidate profile management, resume upload parsing, real-time application tracking, job posting controls, and interview scheduling workflows.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-neutral-300 border border-white/[0.06] group-hover:border-blue-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between group-hover:border-blue-500/20 transition-colors">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#8A8A8E]">
                  Enterprise Web Platform · Full Stack
                </span>
                <a
                  href="https://github.com/nanivishu2008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-medium group-hover:text-cyan-400 group-hover:underline transition-colors"
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
