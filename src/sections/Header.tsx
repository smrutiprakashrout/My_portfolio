export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed z-50 w-full top-3">
      <nav className="flex gap-1 py-1 px-1.5 border border-white/15 rounded-md bg-white/10 backdrop-blur">
        <a href="" className="nav-item bg-white/80 text-gray-900 hover:bg-white/60 hover:text-gray-900">
          Home
        </a>
        <a href="" className="nav-item">
          About
        </a>
        <a href="" className="nav-item">
          Blog
        </a>
        <a href="" className="nav-item ">
          Contact
        </a>
      </nav>
    </div>
  );
};
