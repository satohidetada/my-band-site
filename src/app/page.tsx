export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">
          どきどきハッピーれもんず
        </h1>
        <p className="text-xl text-gray-600">「どきどきハッピーれもんず」のホームページ</p>
      </header>

      <main className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4 border-b pb-2">
            バンドコンセプト
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            栃木県を中心に活動するロックバンドです。日常に潜む葛藤や感情を、和風のメロディと激しいビートで表現しています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4 border-b pb-2">
            活動状況
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>結成: 2022年12月15日</li>
            <li>活動地域: 栃木県南エリア（下野市、小山市、宇都宮市など）</li>
            <li>現在のメンバー: ギターボーカル、ベース</li>
          </ul>
        </section>

        <section className="text-center p-6 bg-indigo-50 border border-indigo-200 rounded-md">
          <h3 className="text-2xl font-bold text-indigo-700 mb-3">
            🚨 緊急募集！
          </h3>
          <p className="text-gray-800 text-xl font-medium">
            現在、ギターとドラムを緊急で募集しています！<br />
            興味のある方は、お気軽に Contact ページからご連絡ください。
          </p>
        </section>
      </main>
    </div>
  );
}