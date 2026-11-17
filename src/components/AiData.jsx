
import { aiData } from "../data/cvData";

export default function AiData() {
  return (
    <section id="ai-data" className="py-24 px-6 border-t border-[#1e1e24]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#4ade80] text-sm font-bold tracking-widest uppercase mb-2">AI / Data</p>
        <h2 className="text-4xl font-bold text-white mb-4">Data Science & ML</h2>
        <p className="text-slate-400 mb-12 max-w-2xl">From raw data ingestion to deployed models — full pipeline expertise.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {aiData.map((d) => (
            <div key={d.title} className="bg-[#1e1e24] p-8 rounded-2xl border border-[#27272a] hover:border-[#4ade80]/50 transition-colors text-center flex flex-col items-center">
              <span className="text-4xl mb-4">{d.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{d.desc}</p>
              
              <div className="w-full bg-[#27272a] rounded-full h-1.5 mt-auto">
                <div className="bg-[#4ade80] h-1.5 rounded-full" style={{ width: `${d.level}%` }} />
              </div>
              <p className="text-[#4ade80] text-xs font-mono mt-2">{d.level}% proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
