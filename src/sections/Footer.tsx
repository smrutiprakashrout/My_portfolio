import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

const footerlist = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "Github",
    href: "#",
  },
  {
    title: "Linkdin",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative  -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/60 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col gap-8 items-center md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <div>
            <nav className="flex flex-col items-center gap-8 md:flex-row ">
              {footerlist.map((list) => (
                <a
                  key={list.title}
                  href={list.href}
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{list.title}</span>
                  <ArrowUpIcon />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
