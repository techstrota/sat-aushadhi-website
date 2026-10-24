import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  X,
  ShieldCheck,
  Leaf,
  Sparkles,
  Check,
  MessageSquare,
  Package,
} from "lucide-react";
import "./Product.css";

// Teardrop leaf icon matching Image 1
const TeardropLeafIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="good-to-know-leaf"
    aria-hidden="true"
  >
    <path
      d="M10 2.2C6.2 2.2 3.2 6.1 3.2 10.6C3.2 15 6.6 18 10 18C13.4 18 16.8 15 16.8 10.6C16.8 6.1 13.8 2.2 10 2.2Z"
      fill="#6ea34e"
    />
    <path
      d="M10 4.2V15.8M10 9L13.2 7M10 12.2L6.8 10.2"
      stroke="#ffffff"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Big Orbit Leaf graphic matching user's uploaded image
const BigOrbitLeaf = ({ className, style }) => (
  <svg
    className={`floating-orbit-leaf ${className || ""}`}
    style={style}
    width="38"
    height="38"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Smooth leaf blade */}
    <path
      d="M31.5 4.5C31.5 4.5 19.5 5 11.5 13C3.5 21 4.5 31.5 4.5 31.5C4.5 31.5 15 32.5 23 24.5C31 16.5 31.5 4.5 31.5 4.5Z"
      fill="#6eb43d"
    />
    {/* Central primary vein */}
    <path
      d="M4.5 31.5C11 25 18.5 17.5 31 5"
      stroke="#3d7820"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Subtle side veins */}
    <path
      d="M13.5 22.5L17 24.5M18.5 17.5L23 20M23.5 12.5L27.5 14.5"
      stroke="#5ca02f"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Formatter for modal details to render subheadings and bullet lists cleanly
const renderModalDetails = (text) => {
  if (!text) return null;
  const lines = text.split("\n");
  return (
    <div className="modal-info-list">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="modal-info-gap" />;
        }
        if (trimmed.startsWith("-") || trimmed.startsWith("•")) {
          const itemText = trimmed.replace(/^[-•]\s*/, "");
          return (
            <div key={idx} className="modal-info-bullet-item">
              <span className="modal-bullet-icon">•</span>
              <span className="modal-bullet-text">{itemText}</span>
            </div>
          );
        }
        return (
          <div key={idx} className="modal-info-subheading">
            {trimmed}
          </div>
        );
      })}
    </div>
  );
};

const productsData = [
  {
    id: "pain-relief-oil",
    number: "1 / 3",
    name: "Pain Relief Oil",
    navSubtitle: "100 ml",
    category: "Topical Ayurvedic Herbal Oil",
    image: "/new-product1.jpeg",
    variants: ["100 ml"],
    description:
      "Sat Aushadhi Pain Relief Oil is formulated to help provide relief from joint and muscle discomfort, soothe stiffness, and support comfortable joint movement.",
    tags: [
      { text: "Easy Movement", className: "orbit-tag-top-left" },
      { text: "Joint Pain Relief", className: "orbit-tag-bottom-left" },
      { text: "Swelling Relief", className: "orbit-tag-right" },
    ],
    goodToKnow: [
      "Helps provide relief from joint and muscle discomfort.",
      "Supports relief from joint stiffness.",
      "Helps soothe muscular discomfort.",
      "Supports comfortable joint movement.",
      "Helps reduce inflammation-related discomfort.",
    ],
    fullDetails: {
      ingredients: `Sneha Dravya (Base Oils)
- Sarson Oil (Brassica campestris): 62% v/v
- Til Oil (Sesamum indicum): 19% v/v
- Erand Oil (Ricinus communis): 19% v/v

Kwath Dravya (Herbal Ingredients)
- Nagod (Vitex negundo): 4.05%
- Ashwagandha (Withania somnifera): 2.02%
- Dhamaso (Fagonia arabica): 2.02%
- Rasna (Vanda roxburghii): 2.02%
- Sunthi (Zingiber officinale): 2.02%
- Lavang (Syzygium aromaticum): 1.8%
- Taj (Cinnamomum zeylanicum): 1.8%
- Methi (Trigonella foenum-graecum): 1.8%
- Guggulu (Commiphora mukul): 2.02%
- Kapoor (Cinnamomum camphora): 2.02%
- Akada Pan (Calotropis procera): 2.02%`,
      indications: `- Traditionally indicated for Sandhishool (joint pain).
- Traditionally indicated for Amavat.
- Helps soothe muscle and joint discomfort.
- Has Vatahara (Vata-balancing) properties.
- Has Shothahara (anti-inflammatory) properties.
- Helps provide comfort in associated symptoms.`,
      howToUse: `- Apply oil to the affected area.
- Massage gently until absorbed.
- Apply twice daily.
- Or use as advised by a physician.`,
      packaging: `- Packaging: 100 ml bottle.
- Store in a cool, dry place.
- Keep away from direct sunlight.
- Keep the lid tightly closed after opening.
- For external use only.
- Use under medical supervision.`,
      manufacturer: "Manufactured under certified Ayurvedic standards.",
    },
  },
  {
    id: "pain-relief-balm",
    number: "2 / 3",
    name: "Pain Relief Balm",
    navSubtitle: "25 ml",
    category: "Topical Fast-Acting Balm",
    image: "/new-product2.jpeg",
    variants: ["25 ml"],
    description:
      "Sat Aushadhi Balm provides a soothing cooling sensation and helps provide fast relief from headache, sinus-related discomfort, and cough.",
    tags: [
      { text: "Headache Relief", className: "orbit-tag-top-left" },
      { text: "Sinus Relief", className: "orbit-tag-bottom-left" },
      { text: "Asthma Relief", className: "orbit-tag-right" },
    ],
    goodToKnow: [
      "Provides a soothing cooling sensation.",
      "Helps provide relief from headache discomfort.",
      "Helps ease sinus-related discomfort.",
      "Provides soothing comfort during cough and cold.",
      "Supports respiratory comfort.",
    ],
    fullDetails: {
      ingredients: `- Menthol Crystal (Mentha piperata): 10% w/w
- Thymol Crystal (Trachyspermum ammi): 10% w/w
- Kapur Crystal (Cinnamomum camphora): 10% w/w
- Nilgiri Oil (Eucalyptus globulus): 10% w/w`,
      indications: `- Traditionally indicated for Amavat.
- Traditionally indicated for Shirashool.
- Helps soothe headache discomfort.
- Provides a refreshing sensation when applied externally.`,
      howToUse: `- Apply balm to the affected part of the body.
- Massage gently until absorbed.
- Apply twice daily or as advised by a physician.
- For external use only.`,
      packaging: `- Packaging: 25 ml jar.
- Store in a cool, dry place.
- Keep away from direct sunlight.
- Keep the lid tightly closed after opening.
- Use under medical supervision only.`,
      manufacturer: "Manufactured under certified Ayurvedic standards.",
    },
  },
  {
    id: "calcimax-tablet",
    number: "3 / 3",
    name: "Calcimax Tablet",
    navSubtitle: "60 Tablets",
    category: "Ayurvedic Proprietary Medicine",
    image: "/new-product3.jpeg",
    variants: ["60 Tablets"],
    description:
      "Sat Aushadhi Calcimax Tablets are formulated to support bone and joint health and promote an active lifestyle.",
    tags: [
      { text: "Bone Strength", className: "orbit-tag-top-left" },
      { text: "Bone & joint care", className: "orbit-tag-bottom-left" },
      { text: "Easy Movement", className: "orbit-tag-right" },
    ],
    goodToKnow: [
      "Supports stronger bones and joints.",
      "Helps maintain bone strength.",
      "Supports joint nourishment.",
      "Promotes comfortable movement and flexibility.",
      "Supports an active lifestyle.",
    ],
    fullDetails: {
      ingredients: `- Baval Beej Powder – 250 mg
- Saragavo Powder – 150 mg
- Ashwagandha Powder – 100 mg`,
      indications: `- Helps support bone strength.
- Traditionally used for joint and bone health.
- Supports nourishment of bones and joints.
- Helps support comfortable movement and an active lifestyle.`,
      howToUse: `- Take 1–2 tablets twice daily.
- Or as advised by your physician.`,
      packaging: `- Packaging: 60 Tablets per bottle.
- Store in a cool, dry place.
- Keep away from direct sunlight.`,
      manufacturer: "Manufactured under certified Ayurvedic standards.",
    },
  },
];

function Product() {
  const [activeNavId, setActiveNavId] = useState("pain-relief-oil");
  const [selectedVariants, setSelectedVariants] = useState({
    "pain-relief-oil": "100 ml",
    "pain-relief-balm": "25 ml",
    "calcimax-tablet": "60 Tablets",
  });
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Variant click handler
  const handleVariantSelect = (productId, variant) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variant,
    }));
  };

  // Scroll to selected product smoothly
  const scrollToProduct = (id) => {
    setActiveNavId(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 95;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  // Synchronize active nav pill with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = productsData.length - 1; i >= 0; i--) {
        const el = document.getElementById(productsData[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNavId(productsData[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProduct]);

  return (
    <div className="inner-page product-page-wrapper">
      {/* Top Page Hero Banner */}
      <section className="page-banner product-banner" aria-label="Our Products">
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

      {/* Top Product Selector Bar (Image 2) */}
      <section className="product-quick-nav-bar" aria-label="Product selector">
        <div className="product-quick-nav-container">
          {productsData.map((prod) => {
            const isActive = activeNavId === prod.id;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => scrollToProduct(prod.id)}
                className={`product-nav-card ${isActive ? "is-active" : ""}`}
                aria-pressed={isActive}
              >
                <div className="product-nav-card-thumb">
                  <img src={prod.image} alt={prod.name} />
                </div>
                <div className="product-nav-card-info">
                  <h3 className="product-nav-card-title">{prod.name}</h3>
                  <span className="product-nav-card-sub">
                    {prod.navSubtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Product Showcase Sections (Alternating Left/Right/Left Layout) */}
      <div className="products-showcase-container">
        {productsData.map((product, index) => {
          // Index 0: Visual Left, Content Right
          // Index 1: Visual Right, Content Left (isReversed)
          // Index 2: Visual Left, Content Right
          const isReversed = index % 2 === 1;
          const currentVariant =
            selectedVariants[product.id] || product.variants[0];

          return (
            <section
              key={product.id}
              id={product.id}
              className={`product-showcase-row ${
                isReversed ? "is-reversed" : ""
              }`}
            >
              {/* Visual Side (Arch + Concentric Dotted Rings + Orbit Tags) */}
              <div className="product-visual-col">
                <div className="product-orbit-stage">
                  {/* Concentric dashed orbit rings */}
                  <div className="orbit-ring orbit-ring-outer" />
                  <div className="orbit-ring orbit-ring-inner" />

                  {/* 7 Floating Big Leaf Accents matching user's image */}
                  <BigOrbitLeaf className="leaf-pos-1" />
                  <BigOrbitLeaf className="leaf-pos-2" />
                  <BigOrbitLeaf className="leaf-pos-3" />
                  <BigOrbitLeaf className="leaf-pos-4" />
                  <BigOrbitLeaf className="leaf-pos-5" />
                  <BigOrbitLeaf className="leaf-pos-6" />
                  <BigOrbitLeaf className="leaf-pos-7" />

                  {/* Floating pill tags */}
                  {product.tags.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className={`orbit-badge-pill ${tag.className}`}
                    >
                      <span className="orbit-badge-dot" />
                      <span className="orbit-badge-text">{tag.text}</span>
                    </div>
                  ))}

                  {/* Center Deep Green ROUND Disc with Arched Product Photo */}
                  <div className="product-round-disc">
                    <div className="product-arch-frame">
                      <img
                        src={product.image}
                        alt={`${product.name} presentation`}
                        className="product-arch-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="product-content-col">
                <div className="product-eyebrow-line">
                  <span className="product-counter-badge">
                    {product.number}
                  </span>
                  <span className="product-counter-sep" />
                  <span className="product-brand-subtitle">Sat Aushadhi</span>
                </div>

                <h2 className="product-showcase-title">{product.name}</h2>

                {/* Variant size buttons */}
                <div
                  className="product-variant-pills"
                  role="group"
                  aria-label="Available pack sizes"
                >
                  {product.variants.map((variant) => {
                    const isSelected = currentVariant === variant;
                    return (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => handleVariantSelect(product.id, variant)}
                        className={`variant-pill ${
                          isSelected ? "is-selected" : ""
                        }`}
                        aria-pressed={isSelected}
                      >
                        {variant}
                      </button>
                    );
                  })}
                </div>

                <p className="product-showcase-description">
                  {product.description}
                </p>

                {/* Good to know section */}
                <div className="product-good-to-know-box">
                  <h3 className="good-to-know-heading">Good to know</h3>
                  <div className="good-to-know-grid">
                    {product.goodToKnow.map((item, itemIdx) => (
                      <div className="good-to-know-item" key={itemIdx}>
                        <TeardropLeafIcon />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="product-cta-group">
                  <button
                    type="button"
                    className="btn-showcase-details"
                    onClick={() => setActiveModalProduct(product)}
                  >
                    View full details <ArrowRight size={17} />
                  </button>

                  <Link
                    to="/contact"
                    state={{
                      enquiryProduct: `${product.name} (${currentVariant})`,
                    }}
                    className="btn-showcase-enquire"
                  >
                    <MessageSquare size={16} />
                    <span>Enquire about this</span>
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Full Details Modal */}
      {activeModalProduct && (
        <div
          className="product-modal-backdrop"
          onClick={() => setActiveModalProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="product-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="product-modal-close"
              onClick={() => setActiveModalProduct(null)}
              aria-label="Close details"
            >
              <X size={22} />
            </button>

            <div className="product-modal-header">
              <span className="modal-category">
                {activeModalProduct.category}
              </span>
              <h2>{activeModalProduct.name}</h2>
              <div className="modal-variant-tags">
                {activeModalProduct.variants.map((v) => (
                  <span key={v} className="modal-tag">
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div className="product-modal-body">
              <div className="modal-img-col">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                />
                <div className="modal-guarantee-badge">
                  <Leaf size={16} /> 100% Herbal Formula
                </div>
                <div className="modal-guarantee-badge">
                  <ShieldCheck size={16} /> GMP & ISO Standards
                </div>
              </div>

              <div className="modal-info-col">
                <div className="modal-info-block">
                  <h4>
                    <Sparkles size={16} /> Key Ingredients
                  </h4>
                  {renderModalDetails(
                    activeModalProduct.fullDetails.ingredients,
                  )}
                </div>

                <div className="modal-info-block">
                  <h4>
                    <Check size={16} /> Indications & Benefits
                  </h4>
                  {renderModalDetails(
                    activeModalProduct.fullDetails.indications,
                  )}
                </div>

                <div className="modal-info-block">
                  <h4>
                    <Check size={16} /> How to Use
                  </h4>
                  {renderModalDetails(activeModalProduct.fullDetails.howToUse)}
                </div>

                <div className="modal-info-block">
                  <h4>
                    <Package size={16} /> Packaging & Storage
                  </h4>
                  {renderModalDetails(activeModalProduct.fullDetails.packaging)}
                </div>

                <div className="modal-action-row">
                  <Link
                    to="/contact"
                    state={{
                      enquiryProduct: `${activeModalProduct.name} (${
                        selectedVariants[activeModalProduct.id] ||
                        activeModalProduct.variants[0]
                      })`,
                    }}
                    className="modal-enquire-btn"
                  >
                    Enquire for this product <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
