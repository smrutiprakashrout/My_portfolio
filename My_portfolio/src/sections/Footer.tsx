import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerlist = [
  {
    title: "Youtube",
    href: "https://youtube.com/@smrutionlinux",
  },
  {
    title: "Github",
    href: "https://github.com/smrutiofficial",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/smrutiprakashrout/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/smruti_on_linux/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background with negative z-index */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/60 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      
      {/* Content with positive z-index */}
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col gap-8 items-center md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <div>
            <nav className="flex flex-col items-center gap-8 md:flex-row">
              {footerlist.map((list) => (
                <Link
                  key={list.title}
                  href={list.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 cursor-pointer hover:text-emerald-300 transition-colors duration-200 relative z-20"
                >
                  <span className="font-semibold">{list.title}</span>
                  <ArrowUpIcon className="w-4 h-4" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};