export default function ContactPage() {
  const FORMSPREE_URL = "https://formspree.io/f/myzrpobr";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">
          Contact / お問い合わせ
        </h1>
        <p className="text-xl text-gray-600">
          Usiniへのライブ出演依頼、イベント出演、その他のお問い合わせはこちらへ。
        </p>
      </header>

      <main className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-8 space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
            お問い合わせフォーム
          </h2>

          <form
            action={FORMSPREE_URL}
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                お名前 (Name) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="お名前"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                メールアドレス (Email) <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                お問い合わせ内容 (Message) <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="ライブ出演依頼、イベント出演、その他のお問い合わせ内容をご記入ください。"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 transform hover:scale-[1.005]"
            >
              送信する
            </button>

            <p className="text-center text-sm text-gray-500 pt-2">
              ※送信後、外部サービス（Formspree）の確認画面に移動します。
            </p>
          </form>
        </section>

        <section className="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-indigo-800 mb-3">
            Usini
          </h2>
          <p className="text-gray-700 text-lg">
            群馬県桐生市を拠点に活動しています。
            ライブ出演依頼やイベント出演のご相談など、お気軽にご連絡ください。
          </p>
        </section>
      </main>
    </div>
  );
}