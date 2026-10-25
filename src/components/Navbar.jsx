import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'skills', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 docked full-width top-0 sticky z-50 transition-colors duration-200">
      <div className="flex justify-between items-center w-full px-margin py-space-lg max-w-screen-2xl mx-auto">
        {/* Brand / Identity */}
        <a className="flex flex-col group transition-all duration-200 ease-out active:scale-95" href="#">
          <span className="font-title-sm text-title-sm tracking-tight text-primary font-medium group-hover:text-primary-fixed transition-colors">
            Vishal Devarasetty
          </span>
          <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant font-normal">
            Full Stack &amp; AI Engineer
          </span>
        </a>

        {/* Center Toggle Navigation Pill */}
        <nav className="hidden sm:flex items-center p-1 rounded-full bg-surface-container-low border border-outline-variant/20 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-on-primary font-medium shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Trailing Links */}
        <div className="flex items-center gap-space-lg font-label-md text-label-md">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
            href="https://github.com/nanivishu2008"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>GitHub</span>
            <span className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
            href="https://linkedin.com/in/devarasetty-vishal-346620394"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>LinkedIn</span>
            <span className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
          <a
            className="px-3.5 py-1.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all duration-200 flex items-center gap-1 group shadow-sm"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">
              ↓
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
