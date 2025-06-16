"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import type { LenisOptions } from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const options: LenisOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    const lenis = new Lenis(options);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
