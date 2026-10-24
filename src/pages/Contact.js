import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import "./Contact.css";

function Contact() {
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Product Enquiry",
    product: location.state?.enquiryProduct || "",
    message: "",
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this form to your email service or backend API
    // before using it to receive real customer enquiries.
    window.alert(
      "The form is ready for integration. Connect an email service or backend API to send enquiries.",
    );
  };

  return (
    <div className="inner-page contact-page-wrapper">
      <section className="page-banner contact-banner">
        <div className="page-container banner-content">
          <span className="eyebrow">WE ARE HERE TO HELP</span>
          <h1>Contact Us</h1>
          <p>
            Have a product question or a retail enquiry? Get in touch with the Sat
            Aushadhi team.
          </p>
        </div>
      </section>

      <section className="content-section page-container">
        <div className="contact-grid">
          <div className="contact-details">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Let's Connect</h2>

            <p className="contact-intro">
              Send us your enquiry about our products, pack sizes or retail and
              distribution opportunities.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-info-text">
                  <strong>Business Address</strong>
                  <p>
                    Darshan Herbs<br />
                    B-303, Hazelwood Apartment,<br />
                    Iskcon Temple Road, Opposite Mothers School,<br />
                    Gotri, Vadodara - 390021.
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-info-text">
                  <strong>Phone</strong>
                  <p>Please add the verified business phone number.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-info-text">
                  <strong>Email</strong>
                  <p>Please add the verified business email address.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MessageCircle size={20} />
                </div>
                <div className="contact-info-text">
                  <strong>Retail and Distributor Enquiries</strong>
                  <p>Select this option in the enquiry form.</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send an Enquiry</h2>

            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={updateField}
              placeholder="Enter your phone number"
              autoComplete="tel"
            />

            <label htmlFor="enquiryType">Enquiry Type *</label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={form.enquiryType}
              onChange={updateField}
              required
            >
              <option>Product Enquiry</option>
              <option>Retailer Enquiry</option>
              <option>Distributor Enquiry</option>
              <option>General Enquiry</option>
            </select>

            <label htmlFor="product">Product (Optional)</label>
            <input
              id="product"
              name="product"
              value={form.product}
              onChange={updateField}
              placeholder="Which product interests you?"
            />

            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Write your enquiry here"
              required
            />

            <button type="submit" className="primary-button">
              Submit Enquiry
            </button>

            <p className="form-disclaimer">
              This form currently demonstrates the interface only. Connect an
              email service or backend API to receive submissions.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
