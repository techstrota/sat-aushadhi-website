import React from "react";
import {
  ArrowRight,
  Leaf,
  FlaskConical,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import "./Home.css";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    subtitle: "Ingredients",
  },
  {
    icon: FlaskConical,
    title: "Ayurvedic",
    subtitle: "Formulation",
  },
  {
    icon: ShieldCheck,
    title: "Safe &",
    subtitle: "Trusted",
  },
  {
    icon: UsersRound,
    title: "Care for",
    subtitle: "Every Family",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay" />
        <img
          src="/leaves-left.png"
          alt=""
          className="hero-left-leaves"
          aria-hidden="true"
        />

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-copy">
              <span className="hero-label">THE GOODNESS OF AYURVEDA</span>

              <h1>
                Pure Ayurveda
                <br />
                <span>for a Healthier</span>
                <br />
                Tomorrow
              </h1>

              <p className="hero-description">
               <b> Pratyek boond ki Ayurved ki shakti</b>
              </p>

              <a href="/products" className="hero-button">
                Explore Our Products
                <ArrowRight size={19} />
              </a>
            </div>

            <div className="hero-benefits">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div className="benefit-item" key={index}>
                    <div className="benefit-icon">
                      <Icon size={31} strokeWidth={1.7} />
                    </div>

                    <p>
                      {benefit.title}
                      <br />
                      {benefit.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-frame">
              <img
                src="/hero1.png"
                aria-hidden="true"
                alt="Sat Aushadhi Ayurvedic product collection"
              />
            </div>
          </div>
        </div>

        <div className="hero-bottom-text">
          Inspired by Nature. Made for Everyday Wellness.
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section page-container">
        <div className="welcome-visual arch-shape">
          <img src="/home-about.png" alt="Sat Aushadhi product range" />
        </div>

        <div className="welcome-copy">
          <span className="eyebrow">OUR STORY</span>
          <h2>
            Welcome to <span>Sat Aushadhi</span>
          </h2>
          <p>
            Discover an Ayurvedic product range developed traditional
            botanical formulations and everyday wellness. Explore our pain
            relief oil, balm and Calcimax tablet range.
          </p>
          <p>Our products and ingredients takens from ancient Books like Charaka Samhita, Aryabhishek-Hindustan no khajano etc.</p>
          <Link to="/about" className="primary-button">
            Discover Our Story <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="products-section">
        <div className="page-container">
          <div className="section-heading">
            <span className="eyebrow">OUR COLLECTION</span>
            <h2>Our Products</h2>
            <p>Explore the Sat Aushadhi product portfolio.</p>
          </div>

          <div className="product-grid home-product-grid">
            {[
              {
                name: "Sat Aushadhi Pain Relief Oil",
                size: "100 ml / 30 ml",
                image: "/new-product1.jpeg",
                description:
                  "Formulated to help provide relief from joint and muscle discomfort, soothe stiffness, and support mobility.",
              },
              {
                name: "Sat Aushadhi Pain Relief Balm",
                size: "25 ml / 10 ml",
                image: "/new-product2.jpeg",
                description:
                  "Provides soothing comfort and fast relief from headache, sinus discomfort, and cough.",
              },
              {
                name: "Sat Aushadhi Calcimax Tablet",
                size: "60 Tablets",
                image: "/new-product3.jpeg",
                description:
                  "Sat Aushadhi Calcimax Tablets are formulated to support bone and joint health and promote an active lifestyle.",
              },
            ].map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="product-size">{product.size}</span>
                  <p>{product.description}</p>
                  <Link to="/products" className="product-link">
                    View Details <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-action">
            <Link to="/products" className="primary-button">
              Explore All Products <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Sat Aushadhi */}
      <section className="why-choose-wrapper">
        <div className="why-choose-banner">
          <img
            src="/left-leaf.png"
            alt=""
            className="why-leaf why-leaf-left"
            aria-hidden="true"
          />

          <img
            src="/right-leaf.png"
            alt=""
            className="why-leaf why-leaf-right"
            aria-hidden="true"
          />

          <div className="why-choose-inner">
            <div className="why-choose-heading">
              <Leaf size={22} className="heading-leaf" />
              <h2>Why Choose Sat Aushadhi?</h2>
            </div>

            <div className="why-choose-items">
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Leaf size={31} />
                </div>
                <p>
                  Natural Herbal
                  <br />
                  Ingredients
                </p>
              </div>

              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <FlaskConical size={30} />
                </div>
                <p>
                  Ayurvedic
                  <br />
                  Formulation
                </p>
              </div>

              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <ShieldCheck size={30} />
                </div>
                <p>
                  Safe for
                  <br />
                  Daily Use
                </p>
              </div>

              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <UsersRound size={31} />
                </div>
                <p>
                  Trusted by
                  <br />
                  Families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <img
          src="/leaves-right.png"
          alt=""
          className="why-bg-leaves-right"
          aria-hidden="true"
        />
        <div className="page-container">
          <div className="section-heading">
            <span className="eyebrow">THE SAT AUSHADHI APPROACH</span>
            <h2>Tradition Meets Modern Standards</h2>
          </div>

          <div className="value-grid">
            <article>
              <Leaf size={30} />
              <h3>Botanical Formulations</h3>
              <p>A product portfolio built around Ayurvedic ingredients.</p>
            </article>

            <article>
              <ShieldCheck size={30} />
              <h3>Product Consistency</h3>
              <p>Focus on formulation consistency and product information.</p>
            </article>

            <article>
              <FlaskConical size={30} />
              <h3>Ingredient Transparency</h3>
              <p>Explore product ingredients and available formulations.</p>
            </article>

            <article>
              <UsersRound size={30} />
              <h3>Retail Opportunities</h3>
              <p>Enquire about the range for retail and distribution.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Dealer Enquiry Banner */}
      <section className="dealer-banner">
        <div className="page-container dealer-content">
          <div>
            <span className="eyebrow">GROW WITH SAT AUSHADHI</span>
            <h2>Interested in Our Product Range?</h2>
            <p>Contact us for product and retailer or distributor enquiries.</p>
          </div>

          <Link to="/contact" className="light-button">
            Make an Enquiry <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
