export function SkillsCard({ icon, title, text }) {
  return (
    <div className="w-full max-w-[300px] h-[300px] flex flex-col items-center justify-center gap-5 text-center p-6 bg-indigo-800 bg-opacity-30 rounded-md backdrop-blur-md animate-appear hover:bg-primary hover:bg-opacity-30 shadow-md transition-all">
      {icon}
      <span className="text-xl text-white font-bold animate-show">{title}</span>
      <p className="text-md font-medium text-gray-300 animate-show">{text}</p>
    </div>
  );
}
