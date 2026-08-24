export default function ContactPage() {
  const FORMSPREE_URL = "https://formspree.io/f/myzrpobr";

  return (
    <div className="min-h-screen bg-[#111010] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#dc854b] mb-2">
          📞 Contact / お問い合わせ
        </h1>
        <p className="text-xl text-[#8f8b83]">
          Usiniへのライブ出演依頼、その他のお問い合わせはこちらへ。
        </p>
      </header>

      <main className="w-full max-w-3xl bg-[#1f1d1b] border border-[#3b3630] shadow-2xl rounded-xl p-8 space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-[#9b9660] mb-8 text-center">
            お問い合わせフォーム
          </h2>
          
          <form 
            action={FORMSPREE_URL} 
            method="POST" 
            className="space-y-6"
          >
            {/* 名前 (Name) */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#d6d3cd] mb-2">
                お名前 (Name) <span className="text-[#dc854b]">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Usini"
                className="w-full px-4 py-3 bg-[#111010] border border-[#544e44] rounded-lg shadow-sm focus:ring-[#878048] focus:border-[#878048] transition duration-200 text-[#e7e5e4]"
              />
            </div>

            {/* メールアドレス (Email) */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#d6d3cd] mb-2">
                メールアドレス (Email) <span className="text-[#dc854b]">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 bg-[#111010] border border-[#544e44] rounded-lg shadow-sm focus:ring-[#878048] focus:border-[#878048] transition duration-200 text-[#e7e5e4]"
              />
            </div>

            {/* お問い合わせ内容 (Message) */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-[#d6d3cd] mb-2">
                お問い合わせ内容 (Message) <span className="text-[#dc854b]">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="ライブの出演依頼やお問い合わせ内容をご記入ください。"
                className="w-full px-4 py-3 bg-[#111010] border border-[#544e44] rounded-lg shadow-sm focus:ring-[#878048] focus:border-[#878048] transition duration-200 text-[#e7e5e4]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-xl font-semibold text-[#111010] bg-[#dc854b] hover:bg-[#f8a165] focus:bg-[#f8a165] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1f1d1b] focus:ring-[#dc854b] transition duration-200 transform hover:scale-[1.005]"
            >
              送信する
            </button>
            
            {/* Formspreeの注意書き */}
            <p className="text-center text-sm text-[#8f8b83] pt-2">
              ※送信後、外部サービス（Formspree）の確認画面に移動します。
            </p>
          </form>
        </section>
        
        {/* ライブ情報の案内 */}
        <section className="mt-8 p-6 bg-[#111010] border border-[#878048] rounded-lg text-center">
          <h2 className="text-2xl font-bold text-[#dc854b] mb-3">
            🎤 ライブ出演依頼 受付中
          </h2>
          <p className="text-[#d6d3cd] text-lg">
            ライブ・イベントへの出演依頼は、上記フォームからお気軽にご連絡ください。
          </p>
        </section>
      </main>
    
      <a href="https://www.instagram.com/ultrchnvr" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-lime-400 hover:text-orange-400 underline transition duration-150">Instagram</a>
    </div>
  );
}