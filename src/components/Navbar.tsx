"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-[#284b63] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#90e0ef]">
          A little about me.
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group px-2 py-1 text-lg font-medium transition-colors duration-300
                  ${isActive ? "text-[#90e0ef]" : "text-gray-300 hover:text-white"}
                `}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#90e0ef] transition-all duration-300 ease-in-out
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
