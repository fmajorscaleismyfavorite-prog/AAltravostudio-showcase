import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-mist"
          aria-hidden
        >
          <div className="text-center">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="mx-auto block size-10 rounded-full border-2 border-border border-t-brand"
            />
            <p className="mt-5 font-display text-sm font-bold tracking-[0.24em] text-ink uppercase">
              Altravo<span className="text-brand">Studio</span>
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
