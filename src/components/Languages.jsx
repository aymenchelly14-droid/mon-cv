
import { languages } from "../data/cvData";

export default function Languages() {
  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">Langues</h2>
        <p className="text-cyan-400 mb-12">Languages</p>

        <div className="grid md:grid-cols-2 gap-8">
          {languages.map((l) => (
            <div key={l.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-200 font-medium">{l.name}</span>
                <span className={`text-sm font-bold ${
                  l.level === "Excellent" ? "text-cyan-400" : "text-slate-400"
                }`}>
                  {l.level}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    l.level === "Excellent" 
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500" 
                      : "bg-slate-500"
                  }`} 
                  style={{ width: `${l.pct}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
