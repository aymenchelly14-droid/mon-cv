
import { experience, education } from "../data/cvData";

export default function Experience() {
  const allCareer = [
    ...experience.map(e => ({ ...e, isEdu: false })),
    ...education.map(e => ({ ...e, isEdu: true, company: e.school, role: e.degree }))
  ];

  return (
    <section id="experience" className="py-24 px-6 border-t border-[#1e1e24]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#4ade80] text-sm font-bold tracking-widest uppercase mb-2">Career</p>
        <h2 className="text-4xl font-bold text-white mb-12">Experience & Education</h2>

        <div className="relative border-l border-[#27272a] ml-3 space-y-12">
          {allCareer.map((item, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-[#4ade80] rounded-full" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <span className="text-sm text-[#4ade80] font-mono">{item.period}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.type}</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{item.company}</h3>
              <p className="text-slate-300 font-medium mb-3">{item.role}</p>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-1 marker:text-[#4ade80]">
                {item.tasks.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
