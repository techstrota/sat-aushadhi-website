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
  Activity,
  AlertCircle,
  Shield,
  Zap,
  Wind,
  RefreshCw,
} from "lucide-react";
import "./Product.css";

// Helper for Category Icons
const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case "spine":
      return <Activity size={14} />;
    case "joint":
      return <Shield size={14} />;
    case "strain":
      return <Zap size={14} />;
    case "recovery":
      return <RefreshCw size={14} />;
    case "headache":
      return <Zap size={14} />;
    case "respiratory":
      return <Wind size={14} />;
    default:
      return <Sparkles size={14} />;
  }
};

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
        if (
          trimmed.startsWith("-") ||
          trimmed.startsWith("•") ||
          trimmed.startsWith("*")
        ) {
          const itemText = trimmed.replace(/^[-•*]\s*/, "");
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
    name: "Sat Aushadhi Pain Relief Oil",
    navSubtitle: "100 ml / 30 ml",
    category: "Topical Ayurvedic Herbal Oil",
    image: "/new-product1.jpeg",
    variants: ["100 ml", "30 ml"],
    description:
      "Sat Aushadhi Pain Relief Oil is formulated to help provide relief from joint and muscle discomfort, soothe stiffness, and support comfortable joint movement.",
    tags: [
      { text: "Frozen Shoulder", className: "orbit-tag-top-left" },
      { text: "Joint Pain Relief", className: "orbit-tag-bottom-left" },
      { text: "Swelling Relief", className: "orbit-tag-right" },
    ],
    keyConditions: [
      "Spondylosis & Sciatica",
      "Slipped Disc & Tech Neck",
      "Osteoarthritis (Knee, Hip, Hands)",
      "Frozen Shoulder",
      "Trigger Finger & Wrist Sprains",
      "Ankle Sprains & Ligament Strains",
      "Muscle Spasms, Cramps & Charley Horses",
      "Post-Viral Joint Pain (Dengue/Flu)",
      "Post-Cast & Post-Surgical Stiffness",
      "Age-Related Muscle Aches",
    ],
    categorizedConditions: [
      {
        category: "Spine & Back",
        icon: "spine",
        items: [
          "Spondylosis & Sciatica",
          "Slipped Disc & Nerve Relief",
          "Postural Back Strain (Tech Neck)",
        ],
      },
      {
        category: "Major Joints",
        icon: "joint",
        items: [
          "Osteoarthritis (Knee, Hip, Hands)",
          "Frozen Shoulder (Adhesive Capsulitis)",
          "Joint Stiffness & Swelling",
        ],
      },
      {
        category: "Strains & Spasms",
        icon: "strain",
        items: [
          "Ankle & Wrist Ligament Sprains",
          "Muscle Cramps & Spasms",
          "Trigger Finger & Tendon Strain",
        ],
      },
      {
        category: "Rehab & Recovery",
        icon: "recovery",
        items: [
          "Post-Viral Arthralgia (Dengue/Flu)",
          "Post-Cast Joint Stiffness",
          "Post-Surgical Rehab Stiffness",
        ],
      },
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
- Sarson Oil (Brassica campestris)
- Til Oil (Sesamum indicum)
- Erand Oil (Ricinus communis)

Kwath Dravya (Herbal Ingredients)
- Nagod (Vitex negundo)
- Ashwagandha (Withania somnifera)
- Dhamaso (Fagonia arabica)
- Rasna (Vanda roxburghii)
- Sunthi (Zingiber officinale)
- Lavang (Syzygium aromaticum)
- Taj (Cinnamomum zeylanicum)
- Methi (Trigonella foenum-graecum)
- Guggulu (Commiphora mukul)
- Camphor (Cinnamomum camphora)
- Akada Pan (Calotropis procera)`,
      conditions: `1. Joint Conditions & Diseases
- Spondylosis (Cervical & Lumbar Spondylosis)
- Slipped Disc & Sciatica Nerve Discomfort
- Postural Upper / Lower Back Pain (Tech Neck, Desk Worker Strain)
- Lupus & Autoimmune-related joint aches

2. Major Joint Conditions
- Osteoarthritis (Knee, Hip, Hands, Ankle)
- Frozen Shoulder (Adhesive Capsulitis)

3. Upper Extremity Conditions (Shoulder, Arm, Hand)
- Trigger Finger / Trigger Thumb
- Wrist Sprains & Strains

4. Lower Extremity Conditions (Leg, Ankle, Foot)
- Ankle Sprains & Ligament Strains
- Band Syndrome
- Muscle Spasms, Cramps & Charley Horses

5. Muscle & Soft Tissue Conditions
- Muscular stiffness, soreness & tension
- Fibromyalgia & localized muscular aches

6. Systemic, Inflammatory & Post-Traumatic Conditions
- Post-Viral Arthralgia (Joint Pain After Dengue, Chikungunya, or Flu)
- Post-Fracture / Post-Cast Joint Stiffness
- Post-Surgical Rehabilitation Stiffness (e.g., Post-Knee Replacement)
- Age-Related Muscle Atrophy Stiffness (Sarcopenic Aches)

7. Spine & Structural Conditions
- Chronic spinal stiffness, postural imbalance & disc strain`,
      indications: `- Traditionally indicated for Sandhishool (joint pain).
- Traditionally indicated for Amavat.
- Helps soothe muscle and joint discomfort.
- Has Vatahara (Vata-balancing) properties.
- Has Shothahara (anti-inflammatory) properties.
- Helps provide comfort in associated symptoms.`,
      howToUse: `- Apply oil to the affected area.
- Apply twice daily.
- Use hot pack or ice pack as suggested for good result.
- Or use as advised by a physician.`,
      safetyGuidelines: `Important Safety Guidelines
Pain relief oils provide symptomatic relief by reducing local inflammation, relaxing tense muscles, and improving localized blood circulation.
- Avoid Active Wounds: Never apply pain relief oil on open cuts, broken skin, or acute skin infections.
- Acute Injuries (First 48 Hours): Avoid deep massage or heavy heating oils on freshly swollen, red, or warm injuries (apply ice instead during the first 48 hours).
- Patch Test: Perform a patch test on a small area of skin before full application to ensure you do not have an allergic reaction to essential or herbal oils.
- Medical Consultation: Pain relief oils manage symptoms but do not reverse structural bone changes, severe cartilage loss, or underlying autoimmune conditions. Consult a physician for proper diagnosis and medical treatment.`,
      packaging: `- Packaging: 100 ml & 30 ml bottle.
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
    name: "Sat Aushadhi Pain Relief Balm",
    navSubtitle: "25 ml / 10 ml",
    category: "Topical Fast-Acting Balm",
    image: "/new-product2.jpeg",
    variants: ["25 ml", "10 ml"],
    description:
      "Sat Aushadhi Balm helps provide fast relief from headache, sinus-related discomfort, and cough.",
    tags: [
      { text: "Headache Relief", className: "orbit-tag-top-left" },
      { text: "Sinus Relief", className: "orbit-tag-bottom-left" },
      { text: "Asthma Relief", className: "orbit-tag-right" },
    ],
    keyConditions: [
      "Tension Headaches & Migraines",
      "Sinusitis & Rhinosinusitis",
      "Cold, Flu & Congestion",
      "Sciatica & Back Pain",
      "Osteoarthritis & Stiff Joints",
      "Sprains, Strains & Tendonitis",
      "Muscle Soreness (DOMS) & Fibromyalgia",
    ],
    categorizedConditions: [
      {
        category: "Headaches & Nerve Pain",
        icon: "headache",
        items: [
          "Tension Headaches & Migraines",
          "Temple & Neck Muscular Strain",
          "Sciatica & Back Pain Counter-Action",
        ],
      },
      {
        category: "Respiratory & Sinus",
        icon: "respiratory",
        items: [
          "Sinusitis & Rhinosinusitis Pressure",
          "Cold, Flu & Nasal Congestion",
          "Throat & Chest Respiratory Relief",
        ],
      },
      {
        category: "Joints & Inflammation",
        icon: "joint",
        items: [
          "Osteoarthritis & Stiff Aching Joints",
          "Sprains, Strains & Tendonitis",
          "Localized Inflammation & Swelling",
        ],
      },
      {
        category: "Muscle Soreness",
        icon: "strain",
        items: [
          "Muscle Soreness (DOMS)",
          "Fibromyalgia Deep Aches",
          "Muscle Spasms & Tightness",
        ],
      },
    ],
    goodToKnow: [
      "Helps provide relief from headache discomfort.",
      "Helps ease sinus-related discomfort.",
      "Provides soothing comfort during cough and cold.",
      "Supports respiratory comfort.",
    ],
    fullDetails: {
      ingredients: `- Menthol Crystal (Mentha piperata)
- Thymol Crystal (Trachyspermum ammi)
- Camphor (Cinnamomum camphora)
- Nilgiri Oil (Eucalyptus globulus)`,
      conditions: `1. Headaches & Neurological Pain
- Tension Headaches & Migraines / Sinusitis: Massaged onto temples or neck to ease blood flow and muscle strain.
- Sciatica & Back Pain: Provides counter-irritant soothing action to block pain signals.
- Sinusitis & Rhinosinusitis facial pressure and headache discomfort.

2. Respiratory Conditions
- Colds, Flu, & Sinusitis: Applied to the chest or throat (vapor balm) to clear congestion, relieve coughs, and open nasal passages.

3. Joint & Inflammatory Conditions
- Osteoarthritis & Rheumatoid Arthritis: Soothes stiff, aching joints.
- Sprains, Strains, & Tendonitis: Reduces localized swelling, pain, and inflammation.

4. Muscle Soreness & Spasms
- Muscle Soreness (DOMS) & Fibromyalgia: Relieves muscle spasms and deep tissue soreness.`,
      indications: `- Traditionally indicated for Amavat.
- Traditionally indicated for Shirashool.
- Helps soothe headache discomfort.
- Provides a refreshing, soothing effect when applied externally.`,
      howToUse: `- Apply balm to the affected part of the body.
- Massage gently until absorbed.
- Apply twice daily or as advised by a physician.
- For external use only.`,
      safetyGuidelines: `Important Safety Guidelines & Notes
- Temporary Symptom Relief: Balms provide temporary symptom relief and are not a replacement for medical treatment for serious underlying diseases.
- Avoid Broken Skin: Avoid applying medicated balms to open wounds, broken skin, or sensitive areas (eyes, nose, mucous membranes).
- External Use Only: Keep out of reach of children. Store in a cool, dry place away from direct sunlight.`,
      packaging: `- Packaging: 25 ml & 10 ml jar.
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
    name: "Sat Aushadhi Calcimax Tablet",
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
      ingredients: `- Baval Beej Powder
- Saragavo Powder
- Ashwagandha Powder`,
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
  const [activeInfoTabs, setActiveInfoTabs] = useState({
    "pain-relief-oil": "conditions",
    "pain-relief-balm": "conditions",
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
        <div className="product-banner-img-box">
          <img
            src="/product-hero.png"
            alt="Sat Aushadhi Products"
            className="product-banner-bg-img"
          />
        </div>
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

                {/* If product has categorized conditions (Oil & Balm): show segmented panel */}
                {product.categorizedConditions ? (
                  <div className="product-intel-panel">
                    <div className="product-info-tabs-nav" role="tablist">
                      <button
                        type="button"
                        className={`info-tab-btn ${
                          (activeInfoTabs[product.id] || "conditions") ===
                          "conditions"
                            ? "is-active"
                            : ""
                        }`}
                        onClick={() =>
                          setActiveInfoTabs((prev) => ({
                            ...prev,
                            [product.id]: "conditions",
                          }))
                        }
                        role="tab"
                        aria-selected={
                          (activeInfoTabs[product.id] || "conditions") ===
                          "conditions"
                        }
                      >
                        <Activity size={15} />
                        <span>Conditions Relieved</span>
                        <span className="tab-count-badge">
                          {product.keyConditions.length}
                        </span>
                      </button>

                      <button
                        type="button"
                        className={`info-tab-btn ${
                          activeInfoTabs[product.id] === "goodToKnow"
                            ? "is-active"
                            : ""
                        }`}
                        onClick={() =>
                          setActiveInfoTabs((prev) => ({
                            ...prev,
                            [product.id]: "goodToKnow",
                          }))
                        }
                        role="tab"
                        aria-selected={
                          activeInfoTabs[product.id] === "goodToKnow"
                        }
                      >
                        <TeardropLeafIcon />
                        <span>Good to Know</span>
                        <span className="tab-count-badge">
                          {product.goodToKnow.length}
                        </span>
                      </button>
                    </div>

                    {/* Tab 1: Categorized Bento Grid */}
                    {(activeInfoTabs[product.id] || "conditions") ===
                      "conditions" && (
                      <div className="bento-conditions-grid">
                        {product.categorizedConditions.map((cat, cIdx) => (
                          <div key={cIdx} className="bento-condition-card">
                            <div className="bento-card-header">
                              <span className="bento-card-icon">
                                {getCategoryIcon(cat.icon)}
                              </span>
                              <h4 className="bento-card-title">
                                {cat.category}
                              </h4>
                            </div>
                            <ul className="bento-card-items">
                              {cat.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="bento-item-bullet">
                                  <span className="bento-dot" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tab 2: Good to Know */}
                    {activeInfoTabs[product.id] === "goodToKnow" && (
                      <div className="good-to-know-tab-grid">
                        {product.goodToKnow.map((item, itemIdx) => (
                          <div className="good-to-know-tab-card" key={itemIdx}>
                            <TeardropLeafIcon />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Otherwise (Calcimax Tablet): keep normal Good to know layout as before */
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
                )}

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

                {activeModalProduct.fullDetails.conditions && (
                  <div className="modal-info-block modal-conditions-block">
                    <h4>
                      <Activity size={16} /> Conditions & Diseases Relieved
                    </h4>
                    {renderModalDetails(
                      activeModalProduct.fullDetails.conditions,
                    )}
                  </div>
                )}

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

                {activeModalProduct.fullDetails.safetyGuidelines && (
                  <div className="modal-info-block modal-safety-block">
                    <h4>
                      <AlertCircle size={16} /> Important Safety Guidelines
                    </h4>
                    {renderModalDetails(
                      activeModalProduct.fullDetails.safetyGuidelines,
                    )}
                  </div>
                )}

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
