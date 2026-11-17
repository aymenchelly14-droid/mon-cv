
import { projects } from "../data/cvData";

export default function Projects() {
  return (
    <section className="py-24 px-6 border-t border-[#1e1e24]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-[#4ade80] text-sm font-bold tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400">Survolez pour l'effet 3D — cliquez pour voir les détails.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group perspective-1000 h-64 cursor-pointer">
              <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Face avant */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl bg-[#1e1e24] border border-[#27272a] flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm">Survolez pour voir</p>
                </div>

                {/* Face arrière */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#1e1e24] border border-[#4ade80] flex flex-col items-center justify-center p-6">
                  <p className="text-slate-300 text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-[#4ade80]/10 text-[#4ade80] rounded text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
