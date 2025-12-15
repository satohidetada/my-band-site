import Link from 'next/link';

// ナビゲーションリンクの定義
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Music & Lyrics', href: '/music' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-indigo-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ/バンド名 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold tracking-wider hover:text-indigo-200 transition duration-150">
              佐藤秀忠
            </Link>
          </div>
          
          {/* ナビゲーションリンク */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex items-center px-1 pt-1 text-lg font-medium text-white hover:text-indigo-200 border-b-2 border-transparent hover:border-indigo-400 transition duration-150"
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
