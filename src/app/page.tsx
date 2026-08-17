export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">
          USINI
        </h1>
        <p className="text-xl text-gray-600">
          群馬県桐生市を拠点に活動するロックバンドです。
        </p>
      </header>

      <main className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4 border-b pb-2">
            バンドについて
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            USINIは、群馬県桐生市を拠点に活動する4人組ロックバンドです。
            ローファイでオルタナティブなインディーロックを軸に、
            オリジナル曲「May」「ナショナル」「図鑑」などを制作しています。
            現在、第38回FM GUNMAアマチュア音楽祭「ROCKERS2026」に出場中です。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4 border-b pb-2">
            活動状況
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>結成：2026年1月</li>
            <li>活動地域：群馬県桐生市</li>
            <li>メンバー：Vo/Gt 岩田、Gt そらくん、Ba まさかず、Dr たかとも</li>
            <li>第38回FM GUNMAアマチュア音楽祭「ROCKERS2026」に出場中</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-indigo-50 border border-indigo-200 rounded-md">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            ROCKERS2026
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            現在、第38回FM GUNMAアマチュア音楽祭「ROCKERS2026」に出場中です。
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mt-4">
            決勝大会は2026年11月21日（土）、美喜仁桐生文化会館 小ホールにて開催されます。
            入場無料ですので、ぜひお越しください。
          </p>
        </section>

        <section className="text-center p-6 bg-gray-100 border border-gray-200 rounded-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Contact
          </h3>
          <p className="text-gray-700 text-lg">
            ライブ出演依頼・お問い合わせは Contact ページからご連絡ください。
          </p>
        </section>
      </main>
    </div>
  );
}