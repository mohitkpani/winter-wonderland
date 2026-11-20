
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "The Village", link: "/village" },
        { name: "Make a Wish", link: "/make-a-wish" },
        { name: "Christmas Tree", link: "/christmas-tree" },
        { name: "Santa's Story", link: "/story" }
    ];

    return (
        <nav className="navbar">

            <NavLink
                to="/"
                className="navbar-brand"
                onClick={() => setMenuOpen(false)}
            >
                <img
                    src="/icons/christmas-tree.svg"
                    alt="Christmas tree"
                    className="navbar-tree-icon"
                />

                <span>WINTER WONDERLAND</span>
            </NavLink>

            <button
                className="navbar-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

            <div className={`navbar-links ${menuOpen ? "show" : ""}`}>

                {navLinks.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.link}
                        end={item.link === "/"}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.name}
                    </NavLink>
                ))}

            </div>

        </nav>
    );
}

export default Navbar;
