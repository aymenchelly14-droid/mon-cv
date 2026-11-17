
import { skills } from "../data/cvData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#1e1e24]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#4ade80] text-sm font-bold tracking-widest uppercase mb-2">Expertise</p>
        <h2 className="text-4xl font-bold text-white mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.category} className="bg-[#1e1e24] p-8 rounded-2xl border border-[#27272a] hover:border-[#4ade80]/30 transition-colors">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-white font-semibold text-lg">{s.category}</h3>
                <span className="text-[#4ade80] font-mono text-sm">{s.level}%</span>
              </div>
              <div className="w-full bg-[#27272a] rounded-full h-1.5 mb-6">
                <div className="bg-[#4ade80] h-1.5 rounded-full" style={{ width: `${s.level}%` }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-[#27272a] text-slate-300 rounded-md text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
