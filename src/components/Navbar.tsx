import Link from 'next/link';
import React from 'react';

// ナビゲーションリンクの定義
const navLinks = [
  { name: 'Home', href: '/' },
//  { name: 'About', href: '/about' },
  { name: 'Music & Lyrics', href: '/music' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    // sticky top-0 は残し、固定ヘッダーを維持
    <nav className="bg-indigo-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインのコンテナ: リンクとロゴを並べる */}
        <div className="flex justify-between items-center h-16">
          {/* ロゴ/バンド名 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold tracking-wider hover:text-indigo-200 transition duration-150 whitespace-nowrap">
              佐藤秀忠
            </Link>
          </div>
          
          {/* ナビゲーションリンク (修正箇所) */}
          <div className="flex items-center space-x-4 sm:ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // モバイルでも常に表示されるように hidden sm:flex を削除
                className="inline-flex items-center px-1 pt-1 text-base font-medium text-white hover:text-indigo-200 border-b-2 border-transparent hover:border-indigo-400 transition duration-150 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
