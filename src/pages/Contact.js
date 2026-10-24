import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.css";

// SVG path and transform data for animated leaves
const LEAF_PATH = "M0 0C18-24 52-24 68 0 52 24 18 24 0 0Z M0 0H68";
const LEAVES_DATA = [
  [147, 420, -30, 1],
  [147, 420, -150, 1],
  [158, 340, -35, 0.9],
  [158, 340, -145, 0.9],
  [148, 260, -40, 0.8],
  [148, 260, -140, 0.8],
  [133, 190, -45, 0.7],
  [133, 190, -135, 0.7],
  [138, 120, -50, 0.55],
  [138, 120, -130, 0.55],
  [160, 22, -90, 0.5],
];

const MAP_QUERY =
  "Hazelwood Apartment, Iskcon Temple Road, Gotri, Vadodara 390021";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY,
)}&output=embed`;
const MAP_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAP_QUERY,
)}`;

function Contact() {
  const location = useLocation();
  const leftRef = useRef(null);
  const cardRef = useRef(null);
  const nameInputRef = useRef(null);
  const toastTimerRef = useRef(null);

  // Form State
  const [enquiryType, setEnquiryType] = useState("Product question");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    location.state?.enquiryProduct
      ? `I would like to enquire about ${location.state.enquiryProduct}.`
      : "",
  );
  const [enquiryProduct, setEnquiryProduct] = useState(
    location.state?.enquiryProduct || "",
  );

  // Validation & UI State
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  // Dynamic glow tracking on left hero panel
  const handleLeftMouseMove = (e) => {
    if (!leftRef.current) return;
    const rect = leftRef.current.getBoundingClientRect();
    leftRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    leftRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  // Toast notification helper
  const showToast = (text) => {
    setToastMessage(text);
    setToastVisible(true);
    clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 2200);
  };

  // Copy contact details to clipboard
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`Copied: ${text}`);
    } catch (err) {
      showToast(`Copied: ${text}`);
    }
  };

  // Shortcut from "Want to stock" band to open Distributor enquiry
  const handleDistributorShortcut = () => {
    setEnquiryType("Distributor enquiry");
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus({ preventScroll: true });
      }
    }, 450);
  };

  // Form validation
  const validate = () => {
    const errs = {};
    if (fullName.trim().length < 2) {
      errs.fullName = true;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      errs.email = true;
    }
    if (message.trim().length < 4) {
      errs.message = true;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Submission handler (mailto integration + Thank you view)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const productLine = enquiryProduct ? `Product: ${enquiryProduct}\n` : "";
    const subject = `Website enquiry: ${enquiryType}${
      enquiryProduct ? ` - ${enquiryProduct}` : ""
    }`;
    const body = `Enquiry type: ${enquiryType}\n${productLine}Name: ${fullName.trim()}\nEmail: ${email.trim()}\nPhone: ${
      phone.trim() || "-"
    }\n\nMessage:\n${message.trim()}`;

    // Trigger user's mail client with filled details
    window.location.href = `mailto:darshanherbs25@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  // Reset form to send another enquiry
  const handleSendAnother = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setEnquiryProduct("");
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <main className="contact-main">
      {/* Split Hero Section */}
      <section className="split">
        {/* Left Side: Glowing Brand Panel with Animated Letters & Plant Branch */}
        <div
          className="left"
          id="left"
          ref={leftRef}
          onMouseMove={handleLeftMouseMove}
        >
          <div className="glow" />

          {/* Animated Botanical Branch with Leaves */}
          <svg className="branch" viewBox="0 0 300 500" aria-hidden="true">
            <path
              className="d"
              pathLength="1"
              d="M150 490C140 400 170 330 150 250S120 120 160 20"
            />
            <g id="lv">
              {LEAVES_DATA.map(([x, y, a, s], i) => (
                <path
                  key={i}
                  d={LEAF_PATH}
                  className="d"
                  pathLength="1"
                  transform={`translate(${x} ${y}) rotate(${a}) scale(${s})`}
                  style={{ "--k": 3 + i * 0.5 }}
                />
              ))}
            </g>
          </svg>

          <p className="eyebrow">We are here to help</p>

          <h1 id="t" aria-label="Contact Us">
            <span className="w">
              {"Contact".split("").map((ch, i) => (
                <span key={i} className="c" style={{ "--i": i }}>
                  {ch}
                </span>
              ))}
            </span>
            <span className="w">
              {"Us".split("").map((ch, i) => (
                <span key={i} className="c" style={{ "--i": i + 8 }}>
                  {ch}
                </span>
              ))}
            </span>
          </h1>

          <p className="lead">
            Have a product question or a retail enquiry? Get in touch with the
            Sat Aushadhi team.
          </p>

          {/* Contact Details Rows */}
          <div className="rows">
            {/* Address */}
            <div className="row" style={{ "--k": 0 }}>
              <span className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              </span>
              <div>
                <small>Business address</small>
                <a
                  className="v"
                  id="dir"
                  href={MAP_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b style={{ fontWeight: 600 }}>Darshan Herbs</b>
                  <br />
                  B-303, Hazelwood Apartment,
                  <br />
                  Iskcon Temple Road, Opposite Mothers School,
                  <br />
                  Gotri, Vadodara - 390021
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="row" style={{ "--k": 1 }}>
              <span className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <div>
                <small>Phone</small>
                <a className="v" href="tel:+917096008301">
                  +91 70960 08301
                </a>
              </div>
              <button
                type="button"
                className="cp"
                onClick={() => handleCopy("+91 70960 08301")}
                aria-label="Copy phone number"
              >
                Copy
              </button>
            </div>

            {/* Email */}
            <div className="row" style={{ "--k": 2 }}>
              <span className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <small>Email</small>
                <a className="v" href="mailto:darshanherbs25@gmail.com">
                  darshanherbs25@gmail.com
                </a>
              </div>
              <button
                type="button"
                className="cp"
                onClick={() => handleCopy("darshanherbs25@gmail.com")}
                aria-label="Copy email address"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Enquiry Form Card */}
        <div className="right">
          <div className="card" id="card" ref={cardRef}>
            {!isSubmitted ? (
              <form id="s2" onSubmit={handleSubmit} noValidate>
                <span className="tag">Enquiry form</span>
                <h2>Send an Enquiry</h2>
                <p className="sub">
                  Fill in the details below and our team will get back to you.
                </p>

                {/* Enquiry Type Selector */}
                <fieldset className="types">
                  <legend>I am enquiring about</legend>
                  <div className="opts">
                    {[
                      { value: "Product question", label: "Product question" },
                      { value: "Pack sizes", label: "Pack sizes" },
                      { value: "Retail enquiry", label: "Retail" },
                      {
                        value: "Distributor enquiry",
                        label: "Distributor",
                      },
                    ].map((opt) => (
                      <label key={opt.value}>
                        <input
                          type="radio"
                          name="type"
                          value={opt.value}
                          checked={enquiryType === opt.value}
                          onChange={(e) => setEnquiryType(e.target.value)}
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Pre-selected Product Pill if navigated from product page */}
                {enquiryProduct && (
                  <div className="chosen-product-chip">
                    <span>
                      Enquiring for: <strong>{enquiryProduct}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setEnquiryProduct("")}
                      aria-label="Clear selected product"
                    >
                      &times;
                    </button>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="two">
                  <div className={`fl ${errors.fullName ? "bad" : ""}`}>
                    <input
                      id="n"
                      ref={nameInputRef}
                      placeholder=" "
                      autoComplete="name"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) {
                          setErrors((prev) => ({ ...prev, fullName: false }));
                        }
                      }}
                    />
                    <label htmlFor="n">Full name *</label>
                    <em>Please enter your name.</em>
                  </div>

                  <div className="fl">
                    <input
                      id="ph"
                      type="tel"
                      placeholder=" "
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="ph">Phone number</label>
                  </div>
                </div>

                {/* Email */}
                <div className={`fl ${errors.email ? "bad" : ""}`}>
                  <input
                    id="em"
                    type="email"
                    placeholder=" "
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) {
                        setErrors((prev) => ({ ...prev, email: false }));
                      }
                    }}
                  />
                  <label htmlFor="em">Email address *</label>
                  <em>Please enter a valid email.</em>
                </div>

                {/* Message */}
                <div className={`fl ${errors.message ? "bad" : ""}`}>
                  <textarea
                    id="m"
                    placeholder=" "
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) {
                        setErrors((prev) => ({ ...prev, message: false }));
                      }
                    }}
                  />
                  <label htmlFor="m">Your message *</label>
                  <em>Please write your enquiry.</em>
                </div>

                {/* Submit Action */}
                <button
                  className="go"
                  id="send"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit Enquiry{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

                <span className="note">
                  We use your details only to reply to your enquiry.
                </span>
              </form>
            ) : (
              /* Success / Thank You State */
              <div className="ok show" id="ok" role="status">
                <svg
                  viewBox="0 0 52 52"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="26" cy="26" r="22" />
                  <path d="m16 27 7 7 14-15" />
                </svg>
                <h2>Thank you!</h2>
                <p id="okt">
                  Your email client should now open with your enquiry formatted.
                  Please click send there to deliver your message directly to
                  the Sat Aushadhi team.
                </p>
                <button
                  className="go"
                  id="again"
                  type="button"
                  onClick={handleSendAnother}
                >
                  Send another enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Distributor Band with Animated Trio of Products */}
      <section className="band">
        <div className="trio" aria-hidden="true">
          <div>
            <img src="/new-product1.jpeg" alt="Sat Aushadhi Pain Relief Oil" />
          </div>
          <div>
            <img src="/new-product2.jpeg" alt="Sat Aushadhi Balm" />
          </div>
          <div>
            <img src="/new-product3.jpeg" alt="Sat Aushadhi Calcimax Tablet" />
          </div>
        </div>

        <div>
          <h2>Want to stock Sat Aushadhi?</h2>
          <p>
            Tell us about your store or distribution network and our team will
            get in touch.
          </p>
          <button
            className="go"
            id="dist"
            type="button"
            onClick={handleDistributorShortcut}
          >
            Retail and distributor enquiry{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Map & Pin Section */}
      <section className="map">
        <iframe
          id="map"
          title="Map of Darshan Herbs, Gotri, Vadodara"
          loading="lazy"
          src={MAP_EMBED_URL}
        />
        <div className="pin">
          <h3>Visit us</h3>
          <p>
            B-303, Hazelwood Apartment, Iskcon Temple Road, Opposite Mothers
            School, Gotri, Vadodara - 390021
          </p>
          <a
            className="go"
            id="dir2"
            href={MAP_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Toast Notification */}
      <div
        className={`contact-toast ${toastVisible ? "show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </main>
  );
}

export default Contact;
