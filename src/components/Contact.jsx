
import { personalInfo } from "../data/cvData";
import { Mail, Phone, Send } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = encodeURIComponent(`Contact Portfolio - ${form.name.value}`);
    const body = encodeURIComponent(`Nom: ${form.name.value}\nEmail: ${form.email.value}\n\nMessage:\n${form.message.value}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#1e1e24]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#4ade80] text-sm font-bold tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400">Ouvert aux stages, freelance et collaborations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input type="text" name="name" placeholder="Votre nom" required className="w-full bg-[#1e1e24] border border-[#27272a] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4ade80] transition-colors" />
            <input type="email" name="email" placeholder="Votre email" required className="w-full bg-[#1e1e24] border border-[#27272a] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4ade80] transition-colors" />
            <textarea name="message" placeholder="Votre message" required rows="5" className="w-full bg-[#1e1e24] border border-[#27272a] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4ade80] transition-colors resize-none"></textarea>
            
            <button type="submit" className="w-full bg-[#4ade80] hover:bg-[#3bce6f] text-black font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Send size={18} /> Envoyer le message
            </button>
          </form>

          <div className="flex flex-col gap-4 w-full">
            <a href={`mailto:${personalInfo.email}`} className="bg-[#1e1e24] p-5 rounded-xl flex items-center gap-4 border border-[#27272a] hover:border-[#4ade80]/50 transition-colors group">
              <div className="p-3 bg-[#27272a] rounded-lg group-hover:bg-[#4ade80]/10 transition-colors">
                <Mail className="text-[#4ade80]" size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-400 text-xs mb-1">Email</p>
                <p className="text-white text-sm font-medium truncate">{personalInfo.email}</p>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="bg-[#1e1e24] p-5 rounded-xl flex items-center gap-4 border border-[#27272a] hover:border-[#4ade80]/50 transition-colors group">
              <div className="p-3 bg-[#27272a] rounded-lg group-hover:bg-[#4ade80]/10 transition-colors">
                <Phone className="text-[#4ade80]" size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-1">Téléphone</p>
                <p className="text-white text-sm font-medium">{personalInfo.phone}</p>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="bg-[#1e1e24] p-5 rounded-xl flex items-center gap-4 border border-[#27272a] hover:border-[#4ade80]/50 transition-colors group">
              <div className="p-3 bg-[#27272a] rounded-lg group-hover:bg-[#4ade80]/10 transition-colors">
                <GithubIcon size={20} className="text-[#4ade80]" />
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-1">GitHub</p>
                <p className="text-white text-sm font-medium">Voir mon profil</p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[["3+", "Ans d'études"], ["10+", "Technologies"], ["4", "Stages"]].map(([n, l]) => (
            <div key={l} className="bg-[#1e1e24] p-8 rounded-2xl border border-[#27272a] text-center">
              <p className="text-4xl font-bold text-[#4ade80] mb-2">{n}</p>
              <p className="text-slate-400 text-sm">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
