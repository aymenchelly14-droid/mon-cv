
import { personalInfo } from "../data/cvData";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-[#1e1e24]">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
      </p>
    </footer>
  );
}
