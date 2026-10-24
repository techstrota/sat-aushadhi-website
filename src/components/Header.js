import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Close mobile menu whenever the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <img src="/logo1.png" alt="Sat Aushadhi Logo" />
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {menuOpen && (
          <button
            className="mobile-menu-backdrop"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            tabIndex={-1}
          />
        )}

        <nav
          id="main-navigation"
          className={`header-nav ${menuOpen ? "nav-open" : ""}`}
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Our Products
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
