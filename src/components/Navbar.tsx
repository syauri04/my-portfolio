// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItemClass = (path: string) => `px-4 py-2 rounded-lg transition ${pathname === path ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"}`;

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          A little about me.
        </Link>
        <div className="space-x-4">
          <Link href="/" className={navItemClass("/")}>
            Home
          </Link>
          <Link href="/about" className={navItemClass("/about")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
