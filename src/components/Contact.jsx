export default function Contact() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-margin py-24 border-t border-white/[0.08]" id="contact">
      <div className="bg-[#141416] hairline-border rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#8A8A8E] block mb-2">Initiate Collaboration</span>
          <h3 className="font-headline-md text-headline-md text-primary font-normal">
            Have an innovative project, internship, or role in mind? Let's connect.
          </h3>
          <p className="text-[#8A8A8E] font-body-md mt-4">
            Available for software engineering roles, AI consulting, and select development opportunities.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
            <a href="tel:+917997021315" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm text-emerald-400">call</span>
              <span>+91 7997021315</span>
            </a>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-400">location_on</span>
              <span>Tirupati / Chennai, India</span>
            </span>
          </div>
        </div>

        {/* Luminous Direct Action Link */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <a
            className="group flex items-center gap-2 font-headline-md text-[22px] md:text-[30px] text-white hover:text-white transition-all duration-300"
            href="mailto:vishal.devarasetty.d@gmail.com"
          >
            <span className="underline decoration-white/30 decoration-1 underline-offset-8 group-hover:decoration-white">
              vishal.devarasetty.d@gmail.com
            </span>
            <span className="material-symbols-outlined text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              north_east
            </span>
          </a>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors flex items-center gap-1"
            >
              <span>Download Resume (PDF)</span>
              <span>↓</span>
            </a>
            <span className="font-mono text-xs text-[#8A8A8E]">Response time &lt; 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
