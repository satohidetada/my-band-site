const songs = [
  { 
    title: 'ドキドキ・レモン・フィーバー', 
    lyrics: 'きらめく光とハジける泡の中で、君と踊る。恋はいつも突然のフィーバー。', 
    year: 2024 
  },
  { 
    title: '雨上がりと憂鬱', 
    lyrics: 'グレーな空の下、ギターを抱きしめる。憂鬱な気持ちも、いつかメロディになる。', 
    year: 2023 
  },
  { 
    title: '真夜中のスクランブル', 
    lyrics: '最終列車が行き過ぎた後、世界は静かになる。僕らの秘密のスクランブル交差点。', 
    year: 2022 
  },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">
          🎼 Music & Lyrics
        </h1>
        <p className="text-xl text-gray-600">
          「佐藤秀忠」の楽曲一覧です。
        </p>
      </header>

      <main className="w-full max-w-5xl space-y-10">
        {songs.map((song, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-xl p-6 transition duration-300 hover:shadow-xl hover:scale-[1.01]"
          >
            <h2 className="text-3xl font-bold text-indigo-800 mb-2 border-b pb-1">
              {song.title} <span className="text-lg font-light text-gray-500 ml-3">({song.year})</span>
            </h2>
            <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                歌詞の抜粋
              </h3>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed italic">
                {song.lyrics}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
