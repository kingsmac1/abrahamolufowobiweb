import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/abraham-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10 md:py-6">
          <Link to="/" className="flex items-center gap-2 font-display">
            <img src={logo} alt="Abraham Oluwofobi" className="h-7 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 lg:flex">
            {NAV.map((n) => {
              const active =
                n.to === "/" ? location.pathname === "/" : location.pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`rounded-full px-5 py-2 font-display text-sm tracking-wide transition-colors ${
                    active ? "bg-white text-black" : "text-white/80 hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#D6FF3D] px-5 py-2.5 font-display text-sm font-medium text-black transition-transform hover:scale-105"
            >
              Let's Talk
              <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full border border-white/15 p-2.5 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="Abraham Oluwofobi" className="h-7 w-auto" />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-white/15 p-2.5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <Link
                    to={n.to}
                    className="block font-display text-5xl font-medium tracking-tight text-white sm:text-6xl"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="px-6 pb-10"
            >
              <Link
                to="/contact"
                className="flex w-full items-center justify-between rounded-full bg-[#D6FF3D] px-7 py-5 font-display text-lg font-medium text-black"
              >
                Contact Me
                <span>↗</span>
              </Link>
              <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.3em] text-white/40">
                Abraham Oluwofobi · 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
