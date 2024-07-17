import { Link } from "react-router-dom";
import LOGO from "/Logo.png";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto">
      <div>
        <Link to="/">
          <img
            src={LOGO}
            alt="logo"
            className="max-w-[10rem] w-[100px] md:w-[10rem]"
          />
        </Link>
      </div>

      <nav>
        <ul className="flex gap-2 text-sm md:gap-4">
          <li className="transition-all hover:text-orange-300">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-all hover:text-orange-300">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="transition-all hover:text-orange-300">
            <Link to="/about">About</Link>
          </li>
          <li className="transition-all hover:text-orange-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
