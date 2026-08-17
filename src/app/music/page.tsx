import React from "react";

interface Track {
  title: string;
  lyrics: string;
  audioUrl: string;
}

const tracks: Track[] = [
  {
    title: "May",
    lyrics: `訪れる終わりに満たされて
暗闇の中輪郭は浮かんで いる いきものが
まともになった頭で 空を泳いでいた
石段を登りきったとこで
鍵をなくした
すべてが容易になって、可能になるような夢をみた`,
    audioUrl: "/music/250705_May.mp3",
  },
  {
    title: "ナショナル",
    lyrics: `拘束された幻覚の途中で
歌の無い約束を交わしたね
予想されたため息の今です
早口になる その名前を教えて
光を飾り過ぎた地平で生み出した
思い出した
驚いた瞳で顔を合わせた 送るよ
飛び込んだなら鮮明な映像が
なんてことのない声になってたや`,
    audioUrl: "/music/251013_National.mp3",
  },
  {
    title: "図鑑",
    lyrics: `テーブルにしがみついていたい衝動
ステゴザウルスは
踏み出したまま
映画の向こうまで
時代に鳴ってた音楽と
街頭のないところで
頭は化石になり
誰も触れられない
底で鳴っていた
見ていた
終わる日まで
とらえたような顔して漂っている
まだ透明だな
未だ透明だったんだぜ`,
    audioUrl: "/music/250714_Zukan.mp3",
  },
];

const TrackItem = ({ track }: { track: Track }) => {
  const lines = track.lyrics.split("\n");

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 mb-10 border border-indigo-100">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b pb-2">
        🎵 {track.title}
      </h2>

      <div className="mb-6">
        <audio controls className="w-full">
          <source src={track.audioUrl} type="audio/mpeg" />
          <p className="text-red-500">
            お使いのブラウザは音声再生に対応していません。
          </p>
        </audio>
      </div>

      <div className="text-lg text-gray-800 whitespace-pre-wrap leading-relaxed">
        {lines.map((line: string, index: number) => (
          <p key={index} className="mb-1">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">
            Music & Lyrics
          </h1>
          <p className="text-xl text-gray-600">
            Usiniの楽曲と歌詞
          </p>
        </header>

        <main className="space-y-10">
          {tracks.map((track) => (
            <TrackItem key={track.title} track={track} />
          ))}
        </main>
      </div>
    </div>
  );
}