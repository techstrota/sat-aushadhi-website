import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Product.css";

const products = [
  {
    name: "Pain Relief Oil",
    size: "100 ml / 30 ml",
    category: "Topical Oil",
    image: "/product2.jpeg",
    description:
      "A topical oil intended for massage and broad-area application.",
    ingredients:
      "The supplied product material lists Sarson Oil, Tal Oil and botanical extracts.",
    variants: "100 ml, 30 ml",
  },
  {
    name: "Pain Relief Balm",
    size: "25 ml / 10 ml",
    category: "Topical Balm",
    image: "/product1.jpeg",
    description: "A topical balm designed for localized application.",
    ingredients:
      "The supplied material lists menthol, camphor, thymol and essential oils.",
    variants: "25 ml, 10 ml",
  },
  {
    name: "Calcimax Tablet",
    size: "60 Tablets",
    category: "Ayurvedic Proprietary Medicine",
    image: "/product3.jpg",
    description:
      "A tablet product positioned in the supplied portfolio for structural support.",
    ingredients:
      "The supplied material lists Hawaal Mool, Shuddha Guggulu and Ashwagandha.",
    variants: "60 tablets",
  },
];

function Product() {
  return (
    <div className="inner-page product-page-wrapper">
      <section className="page-banner product-banner">
        <img
          src="/product-hero.png"
          alt=""
          className="product-banner-bg-img"
          aria-hidden="true"
        />
        <div className="banner-bg-overlay" />
        <div className="banner-content">
          <span className="eyebrow">THE SAT AUSHADHI COLLECTION</span>
          <h1>Our Products</h1>
          <p>Explore our range of Ayurvedic oil, balm and tablet products.</p>
        </div>
      </section>

      <section className="content-section page-container">
        <div className="catalog-grid">
          {products.map((product) => (
            <article
              className="catalog-card"
              key={`${product.name}-${product.size}`}
            >
              <img
                src={product.image}
                alt={`${product.name} ${product.size}`}
                loading="lazy"
              />

              <div className="catalog-card-content">
                <span className="eyebrow">{product.category}</span>
                <h2>{product.name}</h2>
                <h3>Pack Size: {product.size}</h3>
                <p>{product.description}</p>

                <p>
                  <strong>Key ingredients:</strong> {product.ingredients}
                </p>

                <Link
                  to="/contact"
                  className="primary-button"
                  state={{
                    enquiryProduct: `${product.name} - ${product.size}`,
                  }}
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Product;
