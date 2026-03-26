import { Code2, Mail, ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-300 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-sans p-4 md:p-8 lg:p-12 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* Header / Nav */}
      <header className="flex justify-between items-center mb-8 md:mb-12 border-4 border-black dark:border-white bg-white dark:bg-black p-4 md:px-8 shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]">
        <span className="text-xl md:text-3xl font-black uppercase tracking-tighter">PORTFOLIO</span>
        <span className="text-sm md:text-xl font-bold uppercase border-2 border-black dark:border-white px-3 py-1 bg-cyan-300 dark:bg-cyan-800 text-black dark:text-white transform -rotate-2 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]">
          VIBE CODING
        </span>
      </header>

      {/* Main Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-min">
        
        {/* Big Hero Section - Spans 2 cols on Desktop */}
        <section className="col-span-1 md:col-span-2 lg:col-span-2 border-4 border-black dark:border-white bg-pink-400 dark:bg-pink-700 p-6 md:p-10 lg:p-12 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] md:dark:shadow-[8px_8px_0_0_#fff] flex flex-col justify-center transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_0_#000] dark:hover:shadow-[10px_10px_0_0_#fff] duration-200">
          <div className="inline-block w-fit mb-6 px-4 py-2 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white text-sm md:text-base font-bold uppercase transform -rotate-1 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]">
            Student & Developer
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.05] tracking-tighter mb-6 break-keep">
            HELLO,<br/>
            I AM <span className="text-white dark:text-yellow-400">김도현</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-bold border-l-8 border-black dark:border-white pl-4 max-w-2xl bg-white/20 dark:bg-black/20 p-3 leading-relaxed">
            비전공자이지만 프로그래밍에 관심이 많으며, 강렬한 색채와 볼드한 타이포그래피를 활용한 네오브루탈리즘(Neobrutalism) 스타일 랜딩 페이지를 만들고 있습니다.
          </p>
        </section>

        {/* Contact Module */}
        <section className="col-span-1 lg:col-span-1 border-4 border-black dark:border-white bg-cyan-400 dark:bg-cyan-800 p-6 md:p-8 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] md:dark:shadow-[8px_8px_0_0_#fff] flex flex-col justify-between transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_0_#000] dark:hover:shadow-[10px_10px_0_0_#fff] duration-200">
          <div className="mb-6 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4 border-b-4 border-black dark:border-white pb-2 flex items-center justify-between">
              CONTACT <ArrowRight className="w-8 h-8 md:w-10 md:h-10"/>
            </h2>
            <p className="text-base sm:text-lg font-bold">프로젝트 제안이나 협업 문의를 언제든 환영합니다.</p>
          </div>
          
          <button className="flex items-center justify-center gap-3 w-full border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white p-4 text-lg md:text-xl font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors active:translate-y-1 active:translate-x-1 active:shadow-none shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:shadow-[6px_6px_0_0_#000] dark:hover:shadow-[6px_6px_0_0_#fff]">
            <Mail className="w-6 h-6" />
            Send Email
          </button>
        </section>

        {/* Skills Tag Section */}
        <section className="col-span-1 md:col-span-1 lg:col-span-1 border-4 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] md:dark:shadow-[8px_8px_0_0_#fff]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-6 flex items-center gap-3">
            <Code2 className="w-8 h-8 md:w-10 md:h-10 text-pink-500"/> SKILLS
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {["React", "Next.js", "Tailwind CSS", "TypeScript", "UI/UX Design"].map((skill, index) => (
              <span key={skill} className={`border-2 border-black dark:border-white px-2 py-1 md:px-3 md:py-1.5 font-bold text-sm md:text-lg ${
                  index % 3 === 0 ? 'bg-yellow-300 dark:bg-yellow-600 text-black dark:text-white' : 
                  index % 3 === 1 ? 'bg-cyan-300 dark:bg-cyan-600 text-black dark:text-white' : 
                  'bg-pink-300 dark:bg-pink-600 text-black dark:text-white'
                } hover:rotate-3 transition-transform duration-100 cursor-default shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]`}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Project Links Section - Spans remaining columns */}
        <section className="col-span-1 md:col-span-1 lg:col-span-2 border-4 border-black dark:border-white bg-green-400 dark:bg-green-700 p-6 md:p-8 shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff] md:dark:shadow-[8px_8px_0_0_#fff]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6 drop-shadow-[2px_2px_0_#000] dark:drop-shadow-[2px_2px_0_#fff]">
            FEATURED PROJECTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[1, 2].map((num) => (
              <div key={num} className="h-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 md:p-6 group hover:-translate-y-2 hover:-translate-x-2 transition-transform shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:shadow-[10px_10px_0_0_#000] dark:hover:shadow-[10px_10px_0_0_#fff] cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-black uppercase underline decoration-4 underline-offset-4">PROJECT {num}</h3>
                  <ExternalLink className="w-5 h-5 md:w-6 md:h-6 group-hover:text-green-500 transition-colors" />
                </div>
                <p className="font-bold text-sm md:text-base text-zinc-700 dark:text-zinc-300 break-keep">
                  이 프로젝트는 직관적이고 볼드한 디자인으로 사용자의 이목을 완벽하게 사로잡는 웹 애플리케이션입니다.
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      
      {/* Footer marquee or solid block */}
      <footer className="mt-12 md:mt-20 border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black py-4 overflow-hidden relative shadow-[8px_8px_0_0_#fff] dark:shadow-[8px_8px_0_0_#000] transform -rotate-1">
        <div className="whitespace-nowrap font-black uppercase text-2xl sm:text-3xl md:text-4xl tracking-widest text-center">
          ⚡ NEXT.JS NEOBRUTALISM UI ⚡
        </div>
      </footer>

    </div>
  );
}
