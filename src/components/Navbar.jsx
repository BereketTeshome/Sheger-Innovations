import { Link } from "react-router-dom";
import LOGO from "/Logo.png";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
