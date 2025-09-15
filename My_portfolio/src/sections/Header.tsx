"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "https://kernelhub-smrutiprakashrout.vercel.app/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed z-50 w-full top-3">
      <nav className="flex gap-1 py-1 px-1.5 border border-white/15 rounded-md bg-white/10 backdrop-blur">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.name === "Home" && pathname === "/");

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item ${isActive
                ? "bg-white/80 text-gray-900"
                : "text-white hover:bg-white/60 hover:text-gray-900"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

