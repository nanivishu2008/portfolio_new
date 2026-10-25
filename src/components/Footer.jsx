export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 docked full-width bottom">
      <div className="w-full px-margin py-space-xl max-w-screen-2xl mx-auto flex flex-col justify-between gap-space-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-headline-md text-headline-md text-on-surface tracking-tight">Vishal Devarasetty</span>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Full Stack Development · Agentic AI · Scalable Systems.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 font-body-md text-body-md">
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="https://github.com/nanivishu2008" rel="noopener noreferrer" target="_blank">
              GitHub ↗
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="https://linkedin.com/in/devarasetty-vishal-346620394" rel="noopener noreferrer" target="_blank">
              LinkedIn ↗
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="mailto:vishal.devarasetty.d@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-white/[0.04]">
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © 2025 Vishal Devarasetty. Crafted with precision &amp; intent. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-[#8A8A8E]">
            <span>Tirupati &amp; Chennai, India</span>
            <span>·</span>
            <span>React 18 + Vite + 60fps Canvas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
