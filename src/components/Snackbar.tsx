"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  message: string;
  variant?: "success" | "error";
  onClose: () => void;
  autoHideMs?: number;
};

export default function Snackbar({ open, message, variant = "success", onClose, autoHideMs = 3000 }: Props) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, autoHideMs);
    return () => clearTimeout(t);
  }, [open, autoHideMs, onClose]);

  const colors = variant === "success"
    ? "bg-emerald-500/90 border-emerald-300"
    : "bg-rose-500/90 border-rose-300";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed left-0 right-0 bottom-6 z-[100] flex justify-center px-4"
        >
          <div className={`text-white text-sm font-semibold px-4 py-2 rounded-lg border shadow-xl ${colors} backdrop-blur-md`}> 
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


