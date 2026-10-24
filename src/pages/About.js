import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  FlaskConical,
  Award,
  Sparkles,
  Droplets,
  Wind,
  Flower2,
} from "lucide-react";
import "./About.css";

function About() {
  return (
    <div className="inner-page modern-about about-page-wrapper">
      {/* Hero Banner with Dynamic Backdrop */}
      <section className="page-banner about-banner">
        <img
          src="/about-hero.png"
          alt=""
          className="about-banner-bg-img"
          aria-hidden="true"
        />
        <div className="banner-bg-overlay" />
        <div className="banner-glow" />
        <div className="page-container banner-content">
          <span className="eyebrow">
            <Sparkles
              size={14}
              style={{ display: "inline", marginRight: "6px" }}
            />
            OUR STORY
          </span>
          <h1>Rooted in Ayurveda, Crafted for Tomorrow</h1>
          <p>
            Bridging centuries-old botanical wisdom with contemporary wellness
            standards to bring pure, trusted care to every household.
          </p>
        </div>
      </section>

      {/* Main Story Split Section */}
      <section className="content-section page-container">
        <div className="about-grid-modern">
          <div className="about-text-wrapper">
            <span className="eyebrow">ABOUT SAT AUSHADHI</span>
            <h2>Bridging Tradition and Clinical Precision</h2>
            <p className="lead-text">
              Darshan Herbs engineers holistic pain management solutions that
              honor traditional Ayurvedic formulations while meeting the
              stringent consistency demands of modern pharmacy.
            </p>

            {/* Core Pillars */}
            <div className="about-pillars-list">
              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div className="pillar-content">
                  <h4>Authenticity</h4>
                  <p>
                    Formulations rooted strictly in recognized Ayurvedic
                    pharmacology (&quot;Ayurvedic Proprietary Medicine&quot;).
                  </p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Leaf size={20} />
                </div>
                <div className="pillar-content">
                  <h4>Purity</h4>
                  <p>
                    Utilizing potent Kwaths (decoctions) and essential crystal
                    extracts without unnecessary synthetic fillers.
                  </p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-box">
                  <Sparkles size={20} />
                </div>
                <div className="pillar-content">
                  <h4>Comprehensive Efficacy</h4>
                  <p>
                    Designing products not as isolated treatments, but as a
                    cohesive ecosystem targeting structural support, chronic
                    maintenance, and acute relief.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/products" className="primary-button glowing-btn">
              Explore Our Products <ArrowRight size={17} />
            </Link>
          </div>

          <div className="about-visual-container">
            <div className="about-image-card">
              <div className="about-image-glow" />
              <div className="about-image-frame">
                <img
                  className="about-image-modern"
                  src="/about.png"
                  alt="Ayurvedic Heritage & Botanical Formulations"
                />
              </div>
              <div className="about-floating-badge">
                <div className="floating-badge-icon">
                  <Leaf size={18} />
                </div>
                <div className="floating-badge-text">
                  <span className="badge-title">Pure Ayurveda</span>
                  <span className="badge-subtitle">
                    Traditional Formulations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Ingredients Section */}
      <section className="content-section ingredients-section">
        {/* Botanical leaf decorations */}
        <img
          src="/left.png"
          alt=""
          className="ingredients-bg-leaf ingredients-leaf-left"
          aria-hidden="true"
        />
        <img
          src="/right.png"
          alt=""
          className="ingredients-bg-leaf ingredients-leaf-right"
          aria-hidden="true"
        />

        <div className="page-container ingredients-container">
          <div className="section-heading">
            <span className="eyebrow">
              <Sparkles
                size={14}
                style={{ display: "inline", marginRight: "6px" }}
              />
              NATURAL BOTANICALS
            </span>
            <h2>Our Key Ingredients</h2>
            <p>
              Carefully selected Ayurvedic herbs and base oils, combined in
              optimal therapeutic proportions to ensure deep, lasting relief.
            </p>
          </div>

          {/* 4 Ingredient Cards Grid */}
          <div className="ingredients-cards-grid">
            {/* 1. Sesame & Mustard Oil */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient1.png"
                  alt="Sesame & Mustard Oil"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <FlaskConical size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Sesame & Mustard Oil</h3>
                <div className="ingredient-tagline">
                  Deep Dermal Penetration
                </div>
                <p>
                  A nutrient-rich foundational base oil that absorbs deeply into
                  dermal tissues, delivering active herbal nutrients straight to
                  affected joints and muscles.
                </p>
              </div>
            </article>

            {/* 2. Nirgundi */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient2.png"
                  alt="Nirgundi (4%)"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <Leaf size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Nirgundi (4%)</h3>
                <div className="ingredient-tagline">
                  Pain & Swelling Reducer
                </div>
                <p>
                  Celebrated in classical Ayurveda as the premier herb for
                  reducing chronic joint swelling, easing stiffness, and
                  alleviating acute muscular discomfort.
                </p>
              </div>
            </article>

            {/* 3. Ashwagandha */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient3.png"
                  alt="Ashwagandha (2%)"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <ShieldCheck size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Ashwagandha (2%)</h3>
                <div className="ingredient-tagline">
                  Strength & Muscle Vitality
                </div>
                <p>
                  A powerhouse adaptogen that restores cellular strength to
                  tired ligaments, eases tension, and promotes enduring muscle
                  comfort and relaxation.
                </p>
              </div>
            </article>

            {/* 4. Camphor & Tagar */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient4.png"
                  alt="Camphor & Tagar"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <Sparkles size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Camphor & Tagar</h3>
                <div className="ingredient-tagline">
                  Instant Cooling Sensation
                </div>
                <p>
                  Accelerates topical herbal absorption to deliver immediate
                  relief with a refreshing, tranquil cooling sensation that
                  calms irritation.
                </p>
              </div>
            </article>

            {/* 5. Eranda & Bilva */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient5.png"
                  alt="Baval Beej Powder"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <Droplets size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Baval Beej Powder</h3>
                <div className="ingredient-tagline">
                  Nerve & Joint Stiffness Relief
                </div>
                <p>
                  Revered in Ayurveda for subduing aggravated Vata, promoting
                  joint lubrication, and easing deep tendon rigidity and nerve
                  irritation.
                </p>
              </div>
            </article>

            {/* 6. Shigru (Moringa) */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient6.png"
                  alt="Shigru (Moringa)"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <Leaf size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Shigru (Moringa)</h3>
                <div className="ingredient-tagline">
                  Anti-Inflammatory & Flexibility
                </div>
                <p>
                  Packed with natural phytonutrients that soothe localized joint
                  inflammation, boost tissue micro-circulation, and revive
                  supple muscular mobility.
                </p>
              </div>
            </article>

            {/* 7. Pudina Satva */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient7.png"
                  alt="Menthol"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <Wind size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Menthol</h3>
                <div className="ingredient-tagline">
                  Fast-Acting Cooling Soother
                </div>
                <p>
                  Crystalline mint extract delivering an instant soothing
                  counter-irritant effect that swiftly calms pain pathways and
                  eases intense soreness.
                </p>
              </div>
            </article>

            {/* 8. Nilgiri Oil (Eucalyptus) */}
            <article className="ingredient-detail-card">
              <div className="ingredient-img-wrapper">
                <img
                  src="/ingredient8.png"
                  alt="Nilgiri Oil"
                  className="ingredient-card-img"
                  loading="lazy"
                />
                <div className="ingredient-icon-bubble">
                  <Flower2 size={18} />
                </div>
              </div>
              <div className="ingredient-card-body">
                <h3>Nilgiri Oil</h3>
                <div className="ingredient-tagline">
                  Deep Tissue Warming Comfort
                </div>
                <p>
                  A deeply penetrating aromatic essential oil that invigorates
                  blood circulation, releases muscle tightness, and spreads
                  restorative soothing warmth.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Feature/Approach Grid with Bento Style */}
      <section className="content-section tinted-bg approach-section">
        <img
          src="/about-back1.png"
          alt=""
          className="approach-bg-leaf approach-leaf-left"
          aria-hidden="true"
        />
        <img
          src="/about-back1.png"
          alt=""
          className="approach-bg-leaf approach-leaf-right"
          aria-hidden="true"
        />
        <div className="page-container approach-container">
          <div className="section-heading">
            <span className="eyebrow">OUR APPROACH</span>
            <h2>What Guides Our Brand</h2>
            <p>
              The core pillars that dictate how we formulate and deliver health.
            </p>
          </div>

          <div className="modern-feature-list">
            <article className="modern-feature-card">
              <div className="feature-icon-wrapper">
                <Leaf size={26} />
              </div>
              <h3>Ayurvedic Heritage</h3>
              <p>
                Formulations carefully derived from classic botanical scripts
                adapted for modern physical requirements.
              </p>
            </article>

            <article className="modern-feature-card">
              <div className="feature-icon-wrapper">
                <FlaskConical size={26} />
              </div>
              <h3>Formulation Focus</h3>
              <p>
                Total transparency in composition, precise ingredient blending,
                and targeted relief mechanisms.
              </p>
            </article>

            <article className="modern-feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={26} />
              </div>
              <h3>Quality & Consistency</h3>
              <p>
                Uncompromising manufacturing benchmarks guaranteeing identical
                safety and efficacy in every bottle.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Manufacturer Section */}
      <section className="content-section page-container">
        <div className="manufacturer-card-modern">
          <div className="manufacturer-badge">
            <Award size={20} /> Certified Operations
          </div>
          <h2>Manufactured by Darshan Herbs</h2>
          <p className="address-text">
            B-303, Hazelwood Apartment, Iskcon Temple Road, Opposite Mothers
            School, Gotri, Vadodara - 390021.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
