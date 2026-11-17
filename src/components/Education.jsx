
import { education } from "../data/cvData";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">Formation</h2>
        <p className="text-cyan-400 mb-12">Education</p>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <div key={e.degree} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
              <p className="text-cyan-400 text-sm mb-2">{e.period}</p>
              <h3 className="text-lg font-semibold text-white">{e.degree}</h3>
              <p className="text-slate-400">{e.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
