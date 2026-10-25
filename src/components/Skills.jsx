export default function Skills() {
  const categories = [
    {
      title: "AI & Automation",
      icon: "psychology",
      color: "text-emerald-400",
      skills: [
        { name: "LangChain & LangGraph", badge: "Core" },
        { name: "RAG Architectures", badge: "Agentic" },
        { name: "LLMs & Groq", badge: "Inference" },
        { name: "Google AI Studio", badge: "API" },
        { name: "n8n Workflows", badge: "Automation" },
      ]
    },
    {
      title: "Frontend & Backend",
      icon: "layers",
      color: "text-blue-400",
      skills: [
        { name: "FastAPI", badge: "Python" },
        { name: "React.js & TypeScript", badge: "UI" },
        { name: "Node.js & Express.js", badge: "Server" },
        { name: "Tailwind CSS", badge: "Styling" },
        { name: "WebSockets & REST", badge: "Real-Time" },
      ]
    },
    {
      title: "Databases & Storage",
      icon: "database",
      color: "text-purple-400",
      skills: [
        { name: "PostgreSQL", badge: "Relational" },
        { name: "ChromaDB", badge: "Vector" },
        { name: "MongoDB", badge: "NoSQL" },
        { name: "SQLite", badge: "Embedded" },
        { name: "SQLAlchemy & Alembic", badge: "ORM" },
      ]
    },
    {
      title: "Languages & Core",
      icon: "code",
      color: "text-amber-400",
      skills: [
        { name: "Python", badge: "Primary" },
        { name: "C++", badge: "DSA" },
        { name: "JavaScript / TypeScript", badge: "Full-Stack" },
        { name: "LeetCode (120+ Solved)", badge: "1510 Rating" },
        { name: "Git & GitHub", badge: "VCS" },
      ]
    }
  ];

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-margin py-20 scroll-mt-24 border-t border-white/[0.08]" id="skills">
      <div className="mb-12">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E] block mb-2">Technical Matrix</span>
        <h2 className="font-headline-lg text-headline-lg text-primary font-normal">Core Capabilities &amp; Architecture Stack</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-[#141416] skill-card-glow rounded-xl p-6 flex flex-col justify-between cursor-default"
          >
            <div>
              <div className={`flex items-center gap-2 mb-4 ${cat.color}`}>
                <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-medium">{cat.title}</h4>
              </div>
              <ul className="space-y-2 text-sm text-[#A0A0A5]">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <span className="text-xs font-mono text-white/50">{skill.badge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
