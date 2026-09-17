import { Link } from "react-router";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <header className="bg-secondaryBg sticky top-0 z-20 py-2">
      <div className="mx-auto flex h-16 max-w-375 items-center justify-between px-4">
        <Link to="/" className="text-3xl font-bold flex items-center">
          <img src={Logo} width={48} alt="" />
          <span>
            move<span className="text-baseColor">Verse</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link to="/" className="text-slate-300 hover:text-white">
            Home
          </Link>

          <Link to="/movies" className="text-slate-300 hover:text-white">
            Movies
          </Link>

          <Link to="/tv-shows" className="text-slate-300 hover:text-white">
            TV Shows
          </Link>

          <Link to="/about" className="text-slate-300 hover:text-white">
            About
          </Link>
        </nav>

        {/* Button */}
        <Link to="/movies" className="btnPrimary">
          Explore Movies
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
