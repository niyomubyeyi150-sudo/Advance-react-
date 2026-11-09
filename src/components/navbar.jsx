function Navbar() {
  return (
    <nav className="bg-[#293B2B] text-white px-6 py-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nadine.dev</h1>

        <div className="flex gap-5 text-sm font-medium">
          <a href="#home" className="hover:text-[#D99A42] transition">
            Home
          </a>

          <a href="#skills" className="hover:text-[#D99A42] transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-[#D99A42] transition">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
