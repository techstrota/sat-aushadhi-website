import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Droplets,
  Clock,
  Calendar,
  BookOpen,
  Search,
  Leaf,
  ChevronRight,
  X,
  Share2,
  CheckCircle2,
} from "lucide-react";
import "./Blog.css";

const blogCategories = [
  "All Articles",
  "Pain Relief & Mobility",
  "Herbal Science & Formulation",
  "Bone & Joint Health",
  "Respiratory & Headache",
  "Ayurvedic Lifestyle",
];

const blogArticles = [
  {
    id: "science-of-sneha-dravya-joint-penetration",
    title:
      "The Science of Sneha Dravya: How Herbal Oils Penetrate Deep into Aching Joints",
    category: "Pain Relief & Mobility",
    readTime: "6 min read",
    date: "October 24, 2026",
    author: "Sat Aushadhi Research Team",
    image: "/ingredient2.png",
    featured: true,
    excerpt:
      "Modern pharmacology often focuses on superficial symptom masking, but ancient Ayurvedic masters used lipid-soluble herb carriers (Sneha Dravya) to deliver botanical anti-inflammatories directly through the dermal barriers.",
    tags: [
      "Sneha Dravya",
      "Joint Pain",
      "Charaka Samhita",
      "Nagod",
      "Ashwagandha",
    ],
    relatedProduct: {
      name: "Sat Aushadhi Pain Relief Oil",
      size: "100 ml",
      price: "₹368",
      image: "/product-oil-100ml.png",
      link: "/products#pain-relief-oil",
    },
    sections: [
      {
        heading: "The Lipid Vehicle (Sneha Dravya) Advantage",
        content: `In classical texts such as Charaka Samhita, oil (Taila) is regarded as the ultimate Vatahara substance. Unlike water-based preparations that evaporate on the skin surface, natural oils like Sarson (Mustard), Til (Sesame), and Erand (Castor) have micro-molecular structures that mimic human sebum. This unique biological compatibility allows them to carry therapeutic botanical extracts directly through the stratum corneum into underlying muscle fibers, bursae, and joint capsules.`,
      },
      {
        heading: "Active Botanical Kwath Synergies",
        content: `When Nagod (Vitex negundo), Ashwagandha (Withania somnifera), and Rasna (Vanda roxburghii) are simmered in these lipid bases through traditional Sneha Paka methods, their phytochemicals—including flavonoids, withanolides, and natural sesquiterpenes—become bioavailability-enhanced. They inhibit local inflammatory cascades without irritating the stomach lining or causing systemic toxicity common with oral NSAIDs.`,
      },
      {
        heading: "Clinical Application Tips for Maximum Relief",
        content: `For optimal deep-tissue relief from osteoarthritis, sciatica, or frozen shoulder:
1. Warm a small amount of Sat Aushadhi Pain Relief Oil between your palms.
2. Massage gently in clockwise circular motions over joints, and along muscle fiber lines.
3. Follow with gentle fomentation (hot fomentation or warm dry towel) after 15 minutes to dilate micro-capillaries and drive the active compounds deeper.`,
      },
    ],
    takeaways: [
      "Natural lipid carriers allow active herbs to bypass superficial barriers.",
      "Traditional Sneha Paka ensures bioactive phytochemical preservation.",
      "Gentle warming and massage accelerates transdermal absorption.",
    ],
  },
  {
    id: "natural-sinus-migraine-headache-relief",
    title:
      "Instant Soothing: Why Botanical Menthol, Camphor & Thymol Calm Severe Headaches",
    category: "Respiratory & Headache",
    readTime: "5 min read",
    date: "October 18, 2026",
    author: "Ayurvedic Clinical Advisory",
    image: "/ingredient4.png",
    featured: false,
    excerpt:
      "Discover the neuro-sensory mechanism behind aromatic Ayurvedic balms. Learn how crystalline camphor, menthol, and Nilgiri oil interrupt tension headache reflexes and clear clogged nasal passages.",
    tags: ["Headache Relief", "Sinusitis", "Menthol", "Camphor", "Nilgiri"],
    relatedProduct: {
      name: "Sat Aushadhi Pain Relief Balm",
      size: "25 ml",
      price: "₹120",
      image: "/product-balm-25ml.png",
      link: "/products#pain-relief-balm",
    },
    sections: [
      {
        heading: "The Neuro-Sensory Reflex of Counter-Irritation",
        content: `Tension headaches and sinus pressure often trigger constriction in cranial and cervical blood vessels. The ancient formulation of camphor (Karpura), menthol crystals, and thymol operates through selective stimulation of cold and temperature receptors (TRPM8). This generates an immediate cooling sensation that overrides pain signals traveling along the trigeminal nerve pathways.`,
      },
      {
        heading: "Clearing Respiratory Airflow Naturally",
        content: `Nilgiri Oil (Eucalyptus globulus) contains high levels of cineole, a natural monoterpene celebrated for its mucolytic and bronchodilatory effects. When inhaled as vapor from a topical chest or temple application, it loosens trapped mucus in maxillary and frontal sinuses, relieving pressure behind the eyes and forehead.`,
      },
      {
        heading: "Suggested Usage Regimen",
        content: `Apply a tiny pea-sized amount across temples, the bridge of the nose, and behind the neck. Inhale deeply through the nose with eyes closed to enjoy the natural botanical steam vapors.`,
      },
    ],
    takeaways: [
      "Counter-irritant botanicals block acute pain feedback loops naturally.",
      "Cineole in eucalyptus vaporizes gently to clear clogged sinuses.",
      "Non-drowsy, zero-chemical alternative to common painkiller tablets.",
    ],
  },
  {
    id: "understanding-asthi-dhatu-bone-nutrition",
    title:
      "Ayurvedic Bone Mineralization: Understanding Asthi Dhatu & Botanical Calcium",
    category: "Bone & Joint Health",
    readTime: "7 min read",
    date: "October 11, 2026",
    author: "Dr. Darshan Herbs Panel",
    image: "/ingredient6.png",
    featured: false,
    excerpt:
      "Why do synthetic calcium carbonate pills often cause kidney stones and indigestion? Explore how bio-absorbable plant minerals from Baval Beej, Moringa, and Ashwagandha nourish bone tissue without side effects.",
    tags: ["Asthi Dhatu", "Calcimax", "Bone Density", "Baval Beej", "Moringa"],
    relatedProduct: {
      name: "Sat Aushadhi Calcimax Tablet",
      size: "60 Tablets",
      price: "₹268",
      image: "/product-calcimax-60tablets.png",
      link: "/products#calcimax-tablet",
    },
    sections: [
      {
        heading: "The Concept of Asthi Dhatu in Dhatuposhana",
        content: `In Ayurveda, bone tissue (Asthi Dhatu) is nurtured sequentially through the digestion and transformation of earlier tissue layers (Meda Dhatu / healthy lipids). If the metabolic fire (Agni) is impaired, synthetic limestone chalk (calcium carbonate) cannot be assimilated and is deposited in arteries or kidneys instead of bones.`,
      },
      {
        heading: "Botanical Minerals from Baval Beej & Saragavo",
        content: `Seeds of Baval (Acacia arabica) and Saragavo (Moringa oleifera) provide organically bound calcium, phosphorus, magnesium, and bio-available silica. Because these minerals are chelated with plant enzymes and amino acids, the intestinal villi absorb them smoothly without causing gastric distress or constipation.`,
      },
      {
        heading: "Strengthening Flexibility and Longevity",
        content: `Combining botanical calcium with adaptogenic herbs like Ashwagandha promotes collagen cross-linking and prevents age-related bone thinning and osteoporosis, helping seniors and active adults stay agile and active.`,
      },
    ],
    takeaways: [
      "Plant-based calcium offers superior bioavailability and zero heavy-metal residue.",
      "Moringa and Baval provide complementary mineral co-factors.",
      "Supports connective tissue and synovial fluid replenishment.",
    ],
  },
  {
    id: "cervical-spondylosis-tech-neck-guide",
    title:
      "Relieving Desk Strain & Tech Neck: An Ayurvedic Roadmap for Neck & Spine Health",
    category: "Pain Relief & Mobility",
    readTime: "5 min read",
    date: "October 03, 2026",
    author: "Sat Aushadhi Wellness Team",
    image: "/about.png",
    featured: false,
    excerpt:
      "Prolonged smartphone posture and sedentary desk hours lead to severe cervical stiffness, trapped nerves, and radiating arm pain. Here is how ancient spinal therapies soothe modern tech neck.",
    tags: [
      "Tech Neck",
      "Cervical Spine",
      "Desk Ergonomics",
      "Sciatica",
      "Posture",
    ],
    relatedProduct: {
      name: "Sat Aushadhi Pain Relief Oil",
      size: "100 ml",
      price: "₹368",
      image: "/product-oil-100ml.png",
      link: "/products#pain-relief-oil",
    },
    sections: [
      {
        heading: "The Biomechanics of Forward Head Posture",
        content: `Tilting your head forward at a 45-degree angle places approximately 49 pounds of continuous gravitational load onto the cervical vertebrae (C1-C7). Over months, this dries out the intervertebral discs (Manyastambha in Ayurveda), leading to muscle spasms, headaches, and numbness in the fingers.`,
      },
      {
        heading: "Soothing Vata Imbalances in the Spine",
        content: `Vata dosha governs movement, nerves, and spinal impulses. Chronic stillness and air conditioning aggravate Vata, causing dryness and stiffness. A daily 5-minute warm oil massage along the trapezius muscles and back of the neck restores elasticity to dehydrated tendons and calms irritated nerve roots.`,
      },
      {
        heading: "Ergonomic & Routine Recommendations",
        content: `Keep your monitor at eye level, stand up every 45 minutes, practice gentle neck rolls, and apply Sat Aushadhi Pain Relief Oil before sleep to support tissue rejuvenation overnight.`,
      },
    ],
    takeaways: [
      "Forward neck tilt multiplies cervical strain by up to 400%.",
      "Nightly herbal oil application softens deep paraspinal muscle contractures.",
      "Ergonomic alignment prevents progression to chronic disc compression.",
    ],
  },
  {
    id: "charaka-samhita-wisdom-in-modern-living",
    title:
      "From Ancient Scrolls to Modern Homes: The Enduring Wisdom of Charaka Samhita",
    category: "Herbal Science & Formulation",
    readTime: "8 min read",
    date: "September 25, 2026",
    author: "Acharya Research Cell",
    image: "/ingredient1.png",
    featured: false,
    excerpt:
      "Explore how ancient Ayurvedic encyclopedias like Charaka Samhita and Aryabhishek mapped out holistic human physiology millennia ahead of contemporary medicine.",
    tags: [
      "Charaka Samhita",
      "Aryabhishek",
      "Herbal Heritage",
      "Ayurvedic Purity",
    ],
    relatedProduct: {
      name: "Sat Aushadhi Product Collection",
      size: "Complete Range",
      image: "/hero1.png",
      link: "/products",
    },
    sections: [
      {
        heading: "A 3,000-Year-Old Medical Blueprint",
        content: `Charaka Samhita is one of the most foundational treatises of internal medicine in human history. Written by Sage Charaka, it systematically catalogued hundreds of medicinal plants, categorized their taste (Rasa), post-digestive effect (Vipaka), and potency (Virya), and defined how poly-herbal combinations create synergistic healing.`,
      },
      {
        heading: "Aryabhishek: Hindustan no Khajano",
        content: `In western India, the revered Gujarati treatise 'Aryabhishek' preserved home remedies, botanical extraction techniques, and folk therapies for everyday households. Sat Aushadhi was founded directly upon the authentic formulas recorded in these classical treasures, verifying every batch against modern analytical quality and safety benchmarks.`,
      },
      {
        heading: "Purity Without Compromise",
        content: `Unlike factory-produced cosmetics with synthetic fragrances and petroleum paraffin bases, authentic Ayurvedic medicines rely solely on whole-plant extracts, natural unadulterated cold-pressed oils, and certified botanical powders.`,
      },
    ],
    takeaways: [
      "Classical Ayurvedic wisdom addresses root etiologies, not mere symptom suppression.",
      "Sat Aushadhi formulations preserve authentic classical formulas.",
      "Rigorous quality control bridges ancient tradition with modern laboratory standards.",
    ],
  },
  {
    id: "daily-ritucharya-winter-joint-care",
    title:
      "Daily Ritucharya: Essential Ayurvedic Routines to Prevent Morning Joint Stiffness",
    category: "Ayurvedic Lifestyle",
    readTime: "5 min read",
    date: "September 15, 2026",
    author: "Ayurvedic Lifestyle Consultant",
    image: "/ingredient8.png",
    featured: false,
    excerpt:
      "As temperatures drop, joint fluids thicken and morning mobility feels sluggish. Follow these time-tested seasonal habits (Ritucharya) to keep joints supple, warm, and pain-free.",
    tags: [
      "Ritucharya",
      "Winter Care",
      "Abhyanga",
      "Joint Mobility",
      "Vata Care",
    ],
    relatedProduct: {
      name: "Sat Aushadhi Pain Relief Oil (100 ml)",
      size: "100 ml",
      image: "/product-oil-100ml.png",
      link: "/products#pain-relief-oil",
    },
    sections: [
      {
        heading: "Why Cold Weather Aggravates Joint Pain",
        content: `Cold, windy, and dry weather inherently increases the dry and cold qualities of Vata dosha. Synovial fluid inside knees and hips becomes denser, micro-circulation drops, and nerve endings become hyper-sensitive to barometric pressure shifts.`,
      },
      {
        heading: "The Power of Morning Abhyanga",
        content: `Spending just 5 to 10 minutes performing Abhyanga (warm self-massage) with Sat Aushadhi Pain Relief Oil before a warm shower lubricates joint surfaces, flushes cellular metabolic waste (Ama), and protects the muscular system from stiffness throughout the day.`,
      },
      {
        heading: "Warm Dietary Habits for Agile Movement",
        content: `Drink warm water infused with a pinch of dry ginger (Sunthi) and cumin. Avoid cold salads, refrigerated drinks, and excessive raw foods during colder mornings to keep digestive fire (Jatharagni) active and prevent toxic residue buildup in joint cavities.`,
      },
    ],
    takeaways: [
      "Cold seasons naturally elevate joint stiffness through Vata aggravation.",
      "Pre-bath self-massage (Abhyanga) stimulates deep capillary circulation.",
      "Warm botanical hydration keeps synovial joint fluids supple.",
    ],
  },
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticleModal, setActiveArticleModal] = useState(null);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Filter articles based on category and search query
  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Articles" ||
      article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeArticleModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticleModal]);

  // Handle sharing / copy link
  const handleShare = (article) => {
    const url = window.location.href.split("#")[0];
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${url}#${article.id}`);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2200);
    }
  };

  const featuredArticle =
    blogArticles.find((a) => a.featured) || blogArticles[0];

  return (
    <div className="inner-page blog-page-wrapper">
      {/* Page Hero Banner */}
      <section className="page-banner blog-banner" aria-label="Ayurveda Blog">
        <div className="blog-banner-img-box">
          <img
            src="/blog-hero.png"
            alt="Ayurvedic herbs and wellness background"
            className="blog-banner-bg-img"
          />
        </div>
        <div className="banner-bg-overlay" />
        <div className="blog-banner-glow" />
        <div className="page-container blog-banner-content">
          <span className="eyebrow">KNOWLEDGE & WELLNESS JOURNAL</span>
          <h1>Ayurvedic Wisdom & Health Insights</h1>
          <div className="blog-banner-tagline-badge">
            <Droplets size={14} className="banner-tagline-icon" />
            <span>प्रत्येक बूंद में आयुर्वेद की शक्ति</span>
            <Sparkles size={13} className="banner-tagline-sparkle" />
          </div>
          <p>
            Explore evidence-based Ayurvedic research, time-honored remedies
            from Charaka Samhita, and practical natural therapies for everyday
            family vitality.
          </p>
        </div>
      </section>

      {/* Main Blog Container */}
      <div className="page-container blog-main-container">
        {/* Search & Category Filter Navigation */}
        <section className="blog-controls-section" aria-label="Blog filters">
          <div className="blog-search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles by topic, herb, or condition (e.g. Sciatica, Menthol, Calcium)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search blog articles"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="blog-categories-pills" role="tablist">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${
                  selectedCategory === cat ? "is-active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Article Spotlight (shown when on "All Articles" and no search query) */}
        {selectedCategory === "All Articles" &&
          !searchQuery &&
          featuredArticle && (
            <section
              className="featured-article-card"
              aria-label="Featured Article"
            >
              <div className="featured-img-box">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  loading="lazy"
                />
                <span className="featured-ribbon">
                  <Sparkles size={13} /> Featured Insight
                </span>
              </div>

              <div className="featured-content-box">
                <div className="article-meta-row">
                  <span className="article-category-badge">
                    {featuredArticle.category}
                  </span>
                  <span className="meta-sep">•</span>
                  <span className="article-read-time">
                    <Clock size={13} /> {featuredArticle.readTime}
                  </span>
                  <span className="meta-sep">•</span>
                  <span className="article-date">
                    <Calendar size={13} /> {featuredArticle.date}
                  </span>
                </div>

                <h2 className="featured-title">{featuredArticle.title}</h2>
                <p className="featured-excerpt">{featuredArticle.excerpt}</p>

                <div className="featured-tags-row">
                  {featuredArticle.tags.map((tag) => (
                    <span className="article-tag" key={tag}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="featured-action-row">
                  <button
                    type="button"
                    className="primary-button read-article-btn"
                    onClick={() => setActiveArticleModal(featuredArticle)}
                  >
                    <BookOpen size={16} /> Read Full Article
                  </button>

                  <Link
                    to={featuredArticle.relatedProduct.link}
                    className="related-product-pill-link"
                  >
                    <span>Related Product:</span>
                    <strong>{featuredArticle.relatedProduct.name}</strong>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>
          )}

        {/* Blog Cards Grid */}
        <section className="blog-grid-section" aria-label="Articles list">
          <div className="blog-section-header">
            <h3>
              {selectedCategory === "All Articles"
                ? "Latest Articles & Natural Guides"
                : `${selectedCategory} (${filteredArticles.length})`}
            </h3>
            {searchQuery && (
              <span className="search-results-count">
                Found {filteredArticles.length} matching{" "}
                {filteredArticles.length === 1 ? "article" : "articles"}
              </span>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="no-articles-found">
              <Leaf size={42} className="no-articles-icon" />
              <h4>No articles found</h4>
              <p>
                We couldn't find any articles matching your search query. Try
                searching for another herb or condition.
              </p>
              <button
                type="button"
                className="light-button"
                onClick={() => {
                  setSelectedCategory("All Articles");
                  setSearchQuery("");
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredArticles.map((article) => (
                <article className="blog-card" key={article.id}>
                  <div className="blog-card-media">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                    />
                    <span className="card-category-tag">
                      {article.category}
                    </span>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>
                        <Clock size={12} /> {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h4 className="blog-card-title">{article.title}</h4>

                    <p className="blog-card-excerpt">{article.excerpt}</p>

                    <div className="blog-card-tags">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="card-mini-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="blog-card-footer">
                      <button
                        type="button"
                        className="blog-card-read-link"
                        onClick={() => setActiveArticleModal(article)}
                      >
                        Read Article <ChevronRight size={15} />
                      </button>

                      {article.relatedProduct && (
                        <Link
                          to={article.relatedProduct.link}
                          className="card-product-shortcut"
                          title={`View ${article.relatedProduct.name}`}
                        >
                          <Leaf size={13} />
                          <span>View Product</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter & Health Digest Banner */}
        <section className="blog-cta-banner">
          <div className="blog-cta-inner">
            <div className="blog-cta-text">
              <span className="eyebrow">STAY INFORMED</span>
              <h2>Pure Botanical Knowledge in Every Edition</h2>
              <p>
                Subscribe to receive seasonal health tips, Ayurvedic dietary
                ritucharya, and exclusive product updates directly from our
                herbal experts.
              </p>
            </div>

            <div className="blog-cta-actions">
              <Link to="/contact" className="primary-button">
                Consult Our Ayurvedic Team <ArrowRight size={17} />
              </Link>
              <Link to="/products" className="light-button">
                Explore All Products
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticleModal && (
        <div
          className="article-modal-backdrop"
          onClick={() => setActiveArticleModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <article
            className="article-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="article-modal-close"
              onClick={() => setActiveArticleModal(null)}
              aria-label="Close article"
            >
              <X size={22} />
            </button>

            <div className="article-modal-header">
              <div className="modal-meta-row">
                <span className="article-category-badge">
                  {activeArticleModal.category}
                </span>
                <span className="meta-sep">•</span>
                <span className="article-read-time">
                  <Clock size={13} /> {activeArticleModal.readTime}
                </span>
                <span className="meta-sep">•</span>
                <span className="article-date">
                  <Calendar size={13} /> {activeArticleModal.date}
                </span>
              </div>

              <h2 className="modal-article-title">
                {activeArticleModal.title}
              </h2>

              <div className="modal-author-row">
                <div className="author-avatar">
                  <Leaf size={16} />
                </div>
                <div>
                  <strong>{activeArticleModal.author}</strong>
                  <span>Sat Aushadhi Botanical Medicine Division</span>
                </div>
              </div>
            </div>

            <div className="article-modal-body">
              <div className="modal-banner-image">
                <img
                  src={activeArticleModal.image}
                  alt={activeArticleModal.title}
                />
              </div>

              <div className="modal-lead-box">
                <p className="modal-lead-text">{activeArticleModal.excerpt}</p>
              </div>

              {/* Sections Content */}
              <div className="modal-sections-content">
                {activeArticleModal.sections.map((sec, idx) => (
                  <div key={idx} className="article-content-block">
                    <h3>{sec.heading}</h3>
                    <p>{sec.content}</p>
                  </div>
                ))}
              </div>

              {/* Key Takeaways Card */}
              {activeArticleModal.takeaways && (
                <div className="article-takeaways-card">
                  <h4>
                    <CheckCircle2 size={18} /> Key Takeaways
                  </h4>
                  <ul>
                    {activeArticleModal.takeaways.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Product Showcase Banner inside Modal */}
              {activeArticleModal.relatedProduct && (
                <div className="modal-related-product-card">
                  <div className="related-prod-thumb">
                    <img
                      src={activeArticleModal.relatedProduct.image}
                      alt={activeArticleModal.relatedProduct.name}
                    />
                  </div>
                  <div className="related-prod-info">
                    <span className="related-prod-eyebrow">
                      RECOMMENDED FORMULATION
                    </span>
                    <h4>{activeArticleModal.relatedProduct.name}</h4>
                    <span className="related-prod-size">
                      Pack: {activeArticleModal.relatedProduct.size}
                    </span>
                    <p>
                      Crafted from certified botanical ingredients matching the
                      healing principles described in this article.
                    </p>
                    <Link
                      to={activeArticleModal.relatedProduct.link}
                      onClick={() => setActiveArticleModal(null)}
                      className="related-prod-btn"
                    >
                      View Product & Enquire <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="article-modal-footer">
              <button
                type="button"
                className="article-share-btn"
                onClick={() => handleShare(activeArticleModal)}
              >
                <Share2 size={16} />
                <span>
                  {copiedNotification ? "Link Copied!" : "Share Article"}
                </span>
              </button>

              <button
                type="button"
                className="primary-button modal-done-btn"
                onClick={() => setActiveArticleModal(null)}
              >
                Done Reading
              </button>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}

export default Blog;
