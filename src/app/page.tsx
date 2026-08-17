import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111010] flex flex-col items-center py-12 px-4">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-[#dc854b] mb-2">
          Usini
        </h1>
        <p className="text-xl text-[#8f8b83]">
          群馬県桐生市を拠点に活動するロックバンドです。
        </p>
      </header>

      <div className="w-full max-w-4xl mb-10">
        <Image
          src="/top.jpg"
          alt="Usini"
          width={945}
          height={703}
          priority
          className="w-full h-auto rounded-lg border border-[#3b3630] shadow-xl"
        />
      </div>

      <main className="w-full max-w-4xl bg-[#1f1d1b] border border-[#3b3630] shadow-xl rounded-lg p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#9b9660] mb-4 border-b border-[#3b3630] pb-2">
            バンドについて
          </h2>
          <p className="text-[#d6d3cd] text-lg leading-relaxed">
            Usiniは、群馬県桐生市を拠点に活動する4人組ロックバンドです。
            ローファイでオルタナティブなインディーロックを軸に、
            オリジナル曲「May」「ナショナル」「図鑑」などを制作しています。
            現在、第38回FM GUNMAアマチュア音楽祭「ROCKERS2026」に出場中です。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-[#9b9660] mb-4 border-b border-[#3b3630] pb-2">
            活動状況
          </h2>
          <ul className="list-disc list-inside text-[#d6d3cd] text-lg space-y-2 marker:text-[#dc854b]">
            <li>結成：2026年1月</li>
            <li>活動地域：群馬県桐生市</li>
            <li>メンバー：Vo/Gt 岩田、Gt そらくん、Ba まさかず、Dr たかとも</li>
            <li>第38回FM GUNMAアマチュア音楽祭「ROCKERS2026」に出場中</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-[#111010] border border-[#878048] rounded-md">
          <h2 className="text-3xl font-semibold text-[#dc854b] mb-4">
            ROCKERS2026
          </h2>
          <p className="text-[#d6d3cd] text-lg leading-relaxed">
            現在、第38回FM GUNMAアマチュア音楽祭「ROCKERS2026」に出場中です。
          </p>
          <p className="text-[#d6d3cd] text-lg leading-relaxed mt-4">
            決勝大会は2026年11月21日（土）、美喜仁桐生文化会館 小ホールにて開催されます。
            入場無料ですので、ぜひお越しください。
          </p>
        </section>

        <section className="text-center p-6 bg-[#111010] border border-[#3b3630] rounded-md">
          <h3 className="text-2xl font-bold text-[#9b9660] mb-3">
            Contact
          </h3>
          <p className="text-[#d6d3cd] text-lg">
            ライブ出演依頼・お問い合わせは Contact ページからご連絡ください。
          </p>
        </section>
      </main>
    </div>
  );
}