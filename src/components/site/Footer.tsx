import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
              Got a project?
            </p>
            <h3 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Let's create something <span className="text-[#D6FF3D]">remarkable</span> together.
            </h3>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D6FF3D] px-6 py-3 font-display text-sm font-medium text-black transition-transform hover:scale-105"
            >
              Start a project <span>↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Pages</p>
              <ul className="mt-4 space-y-2 font-display text-sm">
                <li><Link to="/" className="text-white/80 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-white">About</Link></li>
                <li><Link to="/projects" className="text-white/80 hover:text-white">Projects</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
                <li><Link to="/blog" className="text-white/80 hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Services</p>
              <ul className="mt-4 space-y-2 font-display text-sm">
                <li><Link to="/services/$slug" params={{ slug: "website-development" }} className="text-white/80 hover:text-white">Web Development</Link></li>
                <li><Link to="/services/$slug" params={{ slug: "branding" }} className="text-white/80 hover:text-white">Branding</Link></li>
                <li><Link to="/services/$slug" params={{ slug: "graphic-design" }} className="text-white/80 hover:text-white">Graphic Design</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
              <ul className="mt-4 space-y-2 font-display text-sm">
                <li>
                  <a href="mailto:abrahamolufowobi.web@gmail.com" className="text-white/80 hover:text-white break-all">
                    abrahamolufowobi.web@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+447823765197" className="text-white/80 hover:text-white">+44 7823 765197</a>
                </li>
                <li>
                  <a href="https://wa.me/447823765197" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <h2
            className="text-center font-display font-medium leading-[0.85] tracking-tighter text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
          >
            <span className="block">ABRAHAM</span>
            <span className="block">OLUWOFOBI</span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 md:flex-row">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
            © 2026 Abraham Oluwofobi. All rights reserved.
          </p>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
            Designed & built in London
          </p>
        </div>
      </div>
    </footer>
  );
}
