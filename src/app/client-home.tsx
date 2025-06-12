"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "@/lib/projects";

export default function ClientHome() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <section className="max-w-5xl mx-auto text-center">
        <motion.div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Image src="/images/rifan.png" alt="Foto Profil" width={128} height={128} className="object-cover w-full h-full" />
        </motion.div>

        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Hello, I&#39;m Rifan Ahmad Syauri
        </motion.h1>
        <motion.h1 className="text-2xl md:text-2xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Welcome to my portfolio — a showcase of my work, skills, and passion for building modern, interactive, and user-centered web experiences.
        </motion.h1>
        <motion.p className="text-lg text-gray-300" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Full Stack Web Developer focused on modern digital solutions.{" "}
        </motion.p>
      </section>

      <section className="mt-20 max-w-5xl mx-auto">
        <motion.h2 className="text-2xl font-semibold mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Latest Work
        </motion.h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden relative cursor-pointer ${project.size === "large" ? "md:col-span-2" : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelected(project)}
            >
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative w-full h-80 md:h-96">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </motion.div>
              {/* <div className="relative w-full h-80 md:h-96">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <span className="text-sm uppercase text-white/80 tracking-wide mb-1">{project.category}</span>
                <h2 className="text-lg font-semibold leading-snug">{project.title}</h2>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
      <motion.div className="text-center text-gray-400 mt-10 text-lg" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        And many more projects have been created.
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div
              className="bg-white text-black max-w-6xl w-full rounded-xl overflow-hidden shadow-lg max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-60">
                <Image src={selected.image} alt={selected.title} fill className="object-cover rounded-t-xl" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                <p className="whitespace-pre-line text-gray-700 mb-4">{selected.description}</p>
                <a href={selected.link} target="_blank" className="text-blue-600 hover:underline">
                  Visit Project Site
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400 mb-4">Interested in working together? Send a message to please:</p>
        <a href="mailto:kamu@email.com" className="text-blue-400 underline text-lg">
          syauri04@gmail.com
        </a>
      </section>
    </main>
  );
}
