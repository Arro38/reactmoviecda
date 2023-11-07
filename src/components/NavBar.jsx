import React from "react";
import { Link } from "react-router-dom";

function NavBar({ title }) {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-center gap-6 bg-black text-white h-8">
          <li className="hover:opacity-80">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/like">Like</Link>
          </li>
        </ul>
      </nav>
      <h1 className=" text-lg text-center mt-2 tracking-wider">
        React Movie - {title}
      </h1>
    </header>
  );
}

export default NavBar;
