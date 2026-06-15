import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <div className="w-[min(560px,80vw)]">
            <div className="mb-4 flex items-center justify-between font-display text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
            <div className="h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-[#D6FF3D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
