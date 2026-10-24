import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  Award,
} from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-glow" />

      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Sat Aushadhi Logo" />
            </Link>

            <p>
              Sat Aushadhi brings together centuries-old Ayurvedic wisdom and
              modern standards to create natural, pure, and trusted care for
              every household.
            </p>

            <div className="footer-badges">
              <span className="footer-badge-item">
                <Leaf size={14} /> 100% Herbal
              </span>
              <span className="footer-badge-item">
                <ShieldCheck size={14} /> ISO Standardized
              </span>
              <span className="footer-badge-item">
                <Award size={14} /> Certified Quality
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  <ChevronRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <ChevronRight size={14} /> Our Products
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <ChevronRight size={14} /> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={14} /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="footer-col">
            <h3>Our Products</h3>
            <ul className="footer-links">
              <li>
                <Link to="/products">
                  <ChevronRight size={14} /> Pain Relief Oil (100 ml)
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <ChevronRight size={14} /> Pain Relief Oil (30 ml)
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <ChevronRight size={14} /> Calcimax Tablets (60 Tab)
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <ChevronRight size={14} /> Pain Relief Balm (25 ml)
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <ChevronRight size={14} /> Pain Relief Balm (10 ml)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Manufacturer */}
          <div className="footer-col">
            <h3>Get In Touch</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-contact-icon" />
                <div>
                  <strong>Darshan Herbs</strong>
                  <br />
                  B-303, Hazelwood Apartment, Iskcon Temple Road, Gotri,
                  Vadodara - 390021
                </div>
              </li>
              <li>
                <Phone size={18} className="footer-contact-icon" />
                <div>
                  <strong>Enquiry Phone</strong>
                  <br />
                  Verified Business Support
                </div>
              </li>
              <li>
                <Mail size={18} className="footer-contact-icon" />
                <div>
                  <strong>Email Us</strong>
                  <br />
                  info@sataushadhi.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Sat Aushadhi. Manufactured by Darshan
            Herbs. All Rights Reserved.
          </div>

          <div className="footer-bottom-links">
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
