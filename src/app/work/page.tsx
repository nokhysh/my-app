import Link from "next/link";

const Work = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-10 bg-red-100 gap-5 text-black">
      <div className="text-5xl underline underline-offset-[12px]">My Work</div>
      
      <div className="w-1/2 flex items-center justify-between border-2 border-solid border-red-500 p-3 rounded-lg">
        <div className="flex text-xl">技術スタック</div>
        <div className="text-xl gap-5">
          <div>
            <div className="text-xl">C,C++</div>
            <p>組み込みエンジニアとしてスタート</p>
          </div>
          <div>
            <div className="text-xl">■Python</div>
            <p>副業で通信ソフトウェアの開発</p>
          </div>
        </div>
      </div>

      <Link href="/">Homeへ</Link>
    </div>
  );
};

export default Work;