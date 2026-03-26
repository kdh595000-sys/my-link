import { Code2, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans overflow-hidden selection:bg-purple-300 selection:text-purple-900">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none flex justify-center items-center">
        <div className="absolute w-96 h-96 bg-purple-400/40 dark:bg-purple-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob top-1/4 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-pink-400/40 dark:bg-pink-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob2 animation-delay-2000 top-1/3 right-1/4"></div>
        <div className="absolute w-96 h-96 bg-indigo-400/40 dark:bg-indigo-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob3 animation-delay-4000 bottom-1/4 left-1/3"></div>
      </div>

      {/* Main Glassmorphism Card */}
      <main className="relative z-10 flex flex-col items-center bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl p-10 max-w-lg w-full mx-4 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
        
        {/* Avatar Section */}
        <div className="relative group mb-6">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            {/* If there is an actual avatar image, we'd use Next Image here. For now, a placeholder */}
            <span className="text-5xl">👨‍💻</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 drop-shadow-sm">
            김도현
          </h1>
          <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
            바이브 코딩을 배우고 있는 대학생
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
            비전공자이지만 프로그래밍에 관심이 많으며, 가장 트렌디하고 예쁜 결과물을 만들어내는 것을 좋아합니다. 항상 새로운 기술에 도전하고 있습니다.
          </p>
        </div>

        {/* Skills/Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 w-full">
          {["React", "Next.js", "Tailwind CSS", "Vibe Coding"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100/50 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800/50 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex w-full gap-4">
          <button className="flex-1 group relative flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 active:scale-95">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
          
          <button className="flex-1 group relative flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 font-semibold border border-zinc-200 dark:border-zinc-700 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/10 active:scale-95">
            <Code2 className="w-4 h-4" />
            <span>Projects</span>
          </button>
        </div>

      </main>
    </div>
  );
}
