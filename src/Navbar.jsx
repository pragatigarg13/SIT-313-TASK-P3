function Navbar() {
  return (
    <nav className="flex flex-wrap gap-4 md:gap-10 p-4 bg-cyan-700 shadow">
      <a href="#about" className="sm:text-sm md:text-xl lg:text-2xl">
        About
      </a>

      <a href="#work" className="sm:text-sm md:text-xl lg:text-2xl">
        Work
      </a>

      <a href="#subscribe" className="sm:text-sm md:text-xl lg:text-2xl">
        Subscribe
      </a>

      <a href="#contact" className="sm:text-sm md:text-xl lg:text-2xl">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;