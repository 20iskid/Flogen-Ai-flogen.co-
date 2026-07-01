"use client";

import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

type HubStatStripProps = {
  stats: Stat[];
  dark?: boolean;
};

export default function HubStatStrip({ stats, dark = false }: HubStatStripProps) {
  return (
    <div
      className={`border-y-2 ${
        dark ? "border-[#FDFAFA]/10 bg-[#0B172A]" : "border-[#0B172A]/10 bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x-2 md:grid-cols-4 md:divide-x-2 lg:px-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`px-4 py-10 text-center md:px-6 ${
              dark ? "divide-[#FDFAFA]/10" : "divide-[#0B172A]/10"
            }`}
          >
            <p className="text-3xl font-black tracking-tighter text-[#991B1B] md:text-4xl lg:text-5xl">
              {stat.value}
            </p>
            <p
              className={`mt-2 text-xs font-black uppercase tracking-[0.2em] ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
