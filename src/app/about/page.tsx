"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#284b63] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <motion.div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Image src="/images/rifan.png" alt="Foto Profil" width={128} height={128} className="object-cover w-full h-full" />
        </motion.div>

        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          A little about me.
        </motion.h1>

        <motion.p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          I am a Full-Stack Web Developer with over 10 years of experience building modern, scalable, and user-friendly websites and web applications. I’ve worked with technologies like Laravel, CodeIgniter, Node.js, React.js, Next.js, and
          WordPress, combined with Tailwind CSS and Bootstrap to create clean and responsive interfaces. I specialize in both frontend and backend development, delivering projects such as landing pages, company profiles, e-commerce
          platforms, and CMS-based solutions. I also have experience integrating payment gateways for secure and seamless online transactions. I focus on writing clean, maintainable code and building digital products that are fast,
          functional, and aligned with client goals.
        </motion.p>

        <a href="/images/CV.Rifan.2025.pdf" download className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition">
          Download CV
        </a>
      </section>

      <section className="max-w-4xl mx-auto mt-16">
        <motion.h2 className="text-2xl font-semibold mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          Skillset & Tools
        </motion.h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300 text-sm">
          {["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MySQL", "Laravel", "Codeigniter", "HTML", "PHP", "Git"].map((tool, index) => (
            <motion.li key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              {tool}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* <section className="max-w-4xl mx-auto mt-16">
        <motion.h2 className="text-2xl font-semibold mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          Pengalaman
        </motion.h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold">Full Stack Developer — Freelance (2014 - Sekarang)</h3>
            <p>Menangani berbagai proyek klien dari dalam dan luar negeri dalam pengembangan website dan aplikasi berbasis web.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Web Developer — Startup XYZ (2018 - 2021)</h3>
            <p>Membangun sistem e-commerce dan dashboard manajemen internal menggunakan React dan Laravel.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Kontributor Open Source — Berbagai Proyek (2020 - Sekarang)</h3>
            <p>Berkontribusi pada proyek komunitas dalam pengembangan UI dan integrasi API.</p>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
