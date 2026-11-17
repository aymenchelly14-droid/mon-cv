
export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0d0d12] pointer-events-none">
      
      {/* Grille discrète en arrière-plan */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Lueur verte animée en haut à gauche */}
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#4ade80]/10 blur-[120px] animate-blob" />
      
      {/* Lueur verte animée en bas à droite */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#4ade80]/10 blur-[120px] animate-blob animation-delay-2000" />
      
      {/* Lueur bleue centrale pour donner de la profondeur */}
      <div className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[100px] animate-blob animation-delay-4000" />

      {/* 
        Les animations personnalisées sont gérées via Tailwind. 
        Si elles ne s'appliquent pas, elles sont définies dans index.css 
      */}
    </div>
  );
}
