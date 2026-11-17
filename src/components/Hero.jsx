
import { Mail, Phone, MapPin } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { personalInfo } from "../data/cvData";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        
        {/* 👇 L'IMAGE EST ICI */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-[#4ade80] mb-8 shadow-lg shadow-[#4ade80]/20">
          <img 
            src="/cv1.png" 
            alt="Aymen Achour Chelly" 
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {personalInfo.name}
        </h1>
        <h2 className="text-lg md:text-xl text-[#4ade80] font-medium mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10 text-slate-400 text-sm">
          <span className="flex items-center gap-2"><MapPin size={16} /> {personalInfo.location}</span>
          <span className="flex items-center gap-2"><Phone size={16} /> {personalInfo.phone}</span>
          <span className="flex items-center gap-2"><Mail size={16} /> {personalInfo.email}</span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="px-8 py-3 bg-[#4ade80] hover:bg-[#3bce6f] text-black rounded-lg font-bold transition-colors">
            Me contacter
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="px-8 py-3 border border-[#27272a] hover:border-[#4ade80] text-white rounded-lg font-medium flex items-center gap-2 transition-colors bg-[#1e1e24]">
            <GithubIcon size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
