// components/FadeInWhenVisible.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeInWhenVisible({ children, delay = 0, y = 30, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}
