export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center text-center gap-6 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            김도현
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
          </p>
        </div>
        
        <div className="w-16 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
        
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-colors dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
            Contact
          </button>
          <button className="px-6 py-2 rounded-full border border-zinc-200 hover:bg-zinc-100 transition-colors dark:border-zinc-800 dark:hover:bg-zinc-900">
            Projects
          </button>
        </div>
      </main>
    </div>
  );
}
