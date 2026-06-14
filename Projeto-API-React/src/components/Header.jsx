export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#A8DADC] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#1e202e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              BrasilAPI<span className="text-[#FFEE8C]"> SPA</span>
            </h1>
            <p className="text-xs text-[#A8DADC] uppercase tracking-widest font-data">
              Data Intelligence
            </p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D8F3DC]/30 bg-[#D8F3DC]/10">
          <span className="w-2 h-2 rounded-full bg-[#D8F3DC] animate-pulse"></span>
          <span className="text-xs font-semibold text-[#D8F3DC] uppercase tracking-wide">
            Sistemas Online
          </span>
        </div>
      </div>
    </header>
  );
}