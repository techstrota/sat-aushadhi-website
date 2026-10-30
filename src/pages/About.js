import React, { useState } from "react";
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
  Quote,
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import "./About.css";

const customerStories = [
  {
    id: "story-1",
    storyNumber: "Story 01",
    category: "balm",
    categoryLabel: "Sinus & Headache Relief",
    productName: "Sat Aushadhi Pain Relief Balm",
    productLink: "/products#pain-relief-balm",
    productImage: "/new-product2.jpeg",
    title: "Twenty Years of Sinus, Finally at Ease",
    highlightQuote:
      "After twenty years, I finally saw my father's face without the pain.",
    quoteAuthor: "Son (Doctor) on his father's transformation",
    tagline: "Clear head. Light heart.",
    paragraphs: [
      "For almost twenty years, sinus pain was an unwelcome companion in one man's life. The heaviness in his head, the throbbing pressure behind his eyes and forehead, the sleepless nights - it had become part of his daily routine.",
      "Like many people, he relied on painkillers. Whenever the pain grew unbearable, he would reach for a tablet, and on bad days, he needed it twice. The relief never lasted, and the worry about taking tablets again and again never left his mind.",
      "His son is a doctor, and he knew very well that depending on painkillers for years is not a lasting answer. He searched for a gentler option and introduced his father to Sat Aushadhi Pain Relief Balm.",
      "His father began applying the balm on his forehead and around the sinus area, using it twice a day. Slowly, something changed. The heaviness lifted. The pressure eased. Breathing felt lighter and the head felt clear.",
      "Today, he feels a remarkable difference in his sinus and head. The painkillers that were once a daily need are no longer part of his routine.",
    ],
  },
  {
    id: "story-2",
    storyNumber: "Story 02",
    category: "oil",
    categoryLabel: "Spine & Mobility Care",
    productName: "Sat Aushadhi Pain Relief Oil",
    productLink: "/products#pain-relief-oil",
    productImage: "/new-product1.jpeg",
    title: "Walking Again With Confidence",
    highlightQuote:
      "I thought my walking days were over. Today, I walk again - on my own feet.",
    quoteAuthor: "Recovered from severe L4 & L5 spine pain",
    tagline: "Because every step matters.",
    paragraphs: [
      "She was a woman who loved her independence, her morning walks, and her busy household. Then one day, a severe pain in her lower back changed everything.",
      "After tests and scans, the doctors told her it was a problem in the L4 and L5 vertebrae of her spine. The pain was severe. Standing was difficult, sitting was uncomfortable, and even a short walk felt impossible. Surgery was talked about as the only way forward, and the thought of it filled her with fear.",
      "Before taking such a big step, she decided to try something natural. She began massaging her lower back gently with Sat Aushadhi Pain Relief Oil, regularly and with patience.",
      "Day by day, the stiffness started to loosen. The sharp pain became milder. The strength to stand came back, and then the confidence to walk.",
      "Today, she did not need to go through the operation. She walks fully, comfortably, and freely - something she could not do before.",
    ],
  },
  {
    id: "story-3",
    storyNumber: "Story 03",
    category: "oil",
    categoryLabel: "Knee & Joint Freedom",
    productName: "Sat Aushadhi Pain Relief Oil",
    productLink: "/products#pain-relief-oil",
    productImage: "/new-product1.jpeg",
    title: "Sitting on the Floor Again",
    highlightQuote:
      "The oil gave me back my knees, and my place in the family circle.",
    quoteAuthor: "Elderly Grandmother on reclaiming daily life",
    tagline: "Move freely, live fully.",
    paragraphs: [
      "In many Indian homes, sitting on the floor is part of life - for prayers, for family meals, for festivals, for playing with grandchildren. For one elderly lady, this simple joy was taken away by knee pain.",
      "The pain became so severe that she could not sit on the floor at all. Every movement was a struggle. After examination, she was advised to undergo knee surgery. At her age, the very thought worried her and her family.",
      "Then she decided to try Sat Aushadhi Pain Relief Oil. She massaged her knees with it every day, without skipping, as a part of her routine.",
      "Slowly, the stiffness reduced. The pain that once shot through her knees became softer, and then it faded. Her movement became easier, and her confidence returned.",
      "Today, she sits comfortably on the floor again. And the surgery that seemed unavoidable is no longer needed.",
    ],
  },
];

function About() {
  const [activeStoryFilter, setActiveStoryFilter] = useState("all");

  const filteredStories =
    activeStoryFilter === "all"
      ? customerStories
      : customerStories.filter((s) => s.category === activeStoryFilter);
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
              Our products and ingredients takens from ancient Books like
              Charaka Samhita, Aryabhishek-Hindustan no khajano etc.
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
                  Instant Soothing Relief
                </div>
                <p>
                  Accelerates topical herbal absorption to deliver immediate
                  relief with a refreshing, tranquil calming effect that calms
                  irritation.
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
                  Fast-Acting Pain Soother
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

      {/* Customer Stories Section - Real Relief. Real Stories. */}
      <section className="customer-stories-section content-section">
        <div className="page-container">
          <div className="section-heading text-center">
            <span className="eyebrow">
              <HeartHandshake
                size={15}
                style={{ display: "inline", marginRight: "6px" }}
              />
              REAL RELIEF. REAL STORIES.
            </span>
            <h2>Introductory Customer Stories</h2>
            <p>
              Real experiences from everyday people who rediscovered comfort,
              mobility, and peace of mind with Sat Aushadhi Ayurvedic remedies.
            </p>

            {/* Filter Tabs */}
            <div
              className="stories-filter-bar"
              role="tablist"
              aria-label="Story Categories"
            >
              <button
                type="button"
                className={`story-filter-btn ${
                  activeStoryFilter === "all" ? "is-active" : ""
                }`}
                onClick={() => setActiveStoryFilter("all")}
              >
                All Stories ({customerStories.length})
              </button>
              <button
                type="button"
                className={`story-filter-btn ${
                  activeStoryFilter === "balm" ? "is-active" : ""
                }`}
                onClick={() => setActiveStoryFilter("balm")}
              >
                <Sparkles size={13} /> Pain Relief Balm (1)
              </button>
              <button
                type="button"
                className={`story-filter-btn ${
                  activeStoryFilter === "oil" ? "is-active" : ""
                }`}
                onClick={() => setActiveStoryFilter("oil")}
              >
                <Droplets size={13} /> Pain Relief Oil (2)
              </button>
            </div>
          </div>

          {/* Stories Editorial Cards List */}
          <div className="stories-cards-container">
            {filteredStories.map((story) => (
              <article className="story-editorial-card" key={story.id}>
                <div className="story-card-inner">
                  {/* Left Column: Visual, Pull Quote, Product Link */}
                  <div className="story-sidebar-col">
                    <div className="story-product-badge">
                      <div className="story-product-thumb">
                        <img src={story.productImage} alt={story.productName} />
                      </div>
                      <div className="story-product-meta">
                        <span className="story-product-used">Remedy Used</span>
                        <span className="story-product-name">
                          {story.productName}
                        </span>
                      </div>
                    </div>

                    <div className="story-quote-card">
                      <div className="story-quote-icon-box">
                        <Quote size={20} className="story-quote-icon" />
                      </div>
                      <blockquote className="story-quote-text">
                        &ldquo;{story.highlightQuote}&rdquo;
                      </blockquote>
                      <span className="story-quote-author">
                        &mdash; {story.quoteAuthor}
                      </span>
                    </div>

                    <div className="story-motto-ribbon">
                      <Sparkles size={14} className="story-motto-sparkle" />
                      <span className="story-motto-text">
                        {story.productName} &mdash; <em>{story.tagline}</em>
                      </span>
                    </div>

                    <Link to={story.productLink} className="story-product-cta">
                      Explore Remedy <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Right Column: Story Header & Full Narrative */}
                  <div className="story-narrative-col">
                    <div className="story-header-meta">
                      <span className="story-number-badge">
                        {story.storyNumber}
                      </span>
                      <span className="story-category-tag">
                        {story.categoryLabel}
                      </span>
                    </div>

                    <h3 className="story-main-title">{story.title}</h3>

                    <div className="story-paragraphs-flow">
                      {story.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="story-paragraph">
                          {para}
                        </p>
                      ))}
                    </div>

                    <div className="story-footer-summary">
                      <div className="story-outcome-pill">
                        <CheckCircle2
                          size={15}
                          className="outcome-check-icon"
                        />
                        <span>
                          Real Results With Gentle, Natural Consistency
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Medical Disclaimer Banner */}
          <div className="stories-disclaimer-card">
            <div className="disclaimer-icon-wrap">
              <AlertCircle size={20} />
            </div>
            <div className="disclaimer-text-wrap">
              <strong>Medical Transparency & Customer Note:</strong>
              <p>
                These stories describe individual customer experiences. Results
                may vary from person to person. Sat Aushadhi products are not a
                substitute for medical advice; please consult a doctor for
                serious conditions.
              </p>
            </div>
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
