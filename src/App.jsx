import React, { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [activePage, setActivePage] = useState('home-page');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [steelBrand, setSteelBrand] = useState('tata-tiscon');
  const [profileCategory, setProfileCategory] = useState('heavy-sections');
  const [plywoodBrand, setPlywoodBrand] = useState('birla-pivot');
  const [hardwareCategory, setHardwareCategory] = useState('godrej-locks');

  const [detailProduct, setDetailProduct] = useState({
    brand: '',
    size: '',
    desc: '',
    imgUrl: '',
    grade: '',
    linearWeight: '0.00',
    length: '',
    usage: '',
    material: '',
    color: '',
    availability: '',
    galleryData: null,
    bottomImg: null,
    extraAttributes: [],
  });
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const navigateToPage = (targetPageId, anchorSectionId = null) => {
    setActivePage(targetPageId);
    setMobileMenuOpen(false);
    if (anchorSectionId) {
      const targetElement = document.getElementById(anchorSectionId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
        return;
      }
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10);
  };

  const openProductDetails = (item) => {
    const extraAttributes = [];
    Object.keys(item).forEach((key) => {
      if (key.startsWith('data-extra-')) {
        const label = key
          .replace('data-extra-', '')
          .replace(/-/g, ' ')
          .toUpperCase();
        extraAttributes.push({ label, value: item[key] });
      }
    });

    if (item.gallery) {
      setCurrentGallery(JSON.parse(item.gallery));
      setCurrentSlideIndex(0);
    } else {
      setCurrentGallery([]);
    }

    setDetailProduct({
      brand: item.brand || '',
      size: item.size || '',
      desc: item.desc || '',
      imgUrl: item.img || '',
      grade: item.grade || '',
      linearWeight: item.weight || '0.00',
      length: item.length || '',
      usage: item.usage || '',
      material: item.material || '',
      color: item.color || '',
      availability: item.avail || '',
      bottomImg: item.bottomImg || null,
      extraAttributes,
    });

    const upperBrand = (item.brand || '').toUpperCase();
    const upperSize = (item.size || '').toUpperCase();
    const backBtn = document.getElementById('dynamic-back-btn');
    if (backBtn) {
      // Precise conditional routing rules matching exact catalog origin parameters
      if (
        upperBrand.includes('APOLLO') ||
        upperBrand.includes('SAIL') ||
        upperBrand.includes('JSW') ||
        upperBrand.includes('SABRANG') ||
        upperBrand.includes('AMNS') ||
        upperSize.includes('PROFILE') ||
        upperSize.includes('SHEET') ||
        upperSize.includes('PLATE')
      ) {
        backBtn.onclick = () => navigateToPage('profiles-page');
      } else if (
        upperBrand.includes('BIRLA') ||
        upperBrand.includes('CENTURY') ||
        upperBrand.includes('GREEN') ||
        upperBrand.includes('GURJAN') ||
        upperBrand.includes('PLYWOOD') ||
        upperBrand.includes('SAINIK')
      ) {
        backBtn.onclick = () => navigateToPage('plywood-page');
      } else if (
        upperBrand.includes('LOCKS') ||
        upperBrand.includes('GODREJ') ||
        upperBrand.includes('HARDWARE') ||
        upperBrand.includes('KITS') ||
        upperBrand.includes('BATHROOM') ||
        upperBrand.includes('CABIN')
      ) {
        backBtn.onclick = () => navigateToPage('hardware-page');
      } else {
        backBtn.onclick = () => navigateToPage('steel-page');
      }
    }
    navigateToPage('detail-page');
  };

  const changeSlide = (direction) => {
    if (currentGallery.length === 0) return;
    let newIndex = currentSlideIndex + direction;
    if (newIndex >= currentGallery.length) newIndex = 0;
    if (newIndex < 0) newIndex = currentGallery.length - 1;
    setCurrentSlideIndex(newIndex);
  };

  return (
    <>
      <SpeedInsights />
      {/* GLOBAL HEADER */}
      <header id="main-header">
        <div className="nav-container">
          <div className="logo" onClick={() => navigateToPage('home-page')}>
            SREE RAMA STEELS<span></span>
          </div>
          <nav className="desktop-nav">
            <ul>
              <li>
                <a onClick={() => navigateToPage('home-page', 'portfolio')}>
                  Portfolios
                </a>
              </li>
              <li>
                <a onClick={() => navigateToPage('home-page', 'alliances')}>
                  Alliances
                </a>
              </li>
              <li>
                <a onClick={() => navigateToPage('home-page', 'footer-anchor')}>
                  About Us
                </a>
              </li>
            </ul>
          </nav>
          <a
            onClick={() => navigateToPage('contact-page')}
            className="btn-premium desktop-btn"
          >
            Contact Us
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        <div
          className={`mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`}
          id="mobile-menu"
        >
          <ul className="mobile-nav-links">
            <li>
              <a onClick={() => navigateToPage('home-page', 'portfolio')}>
                Portfolios
              </a>
            </li>
            <li>
              <a onClick={() => navigateToPage('home-page', 'alliances')}>
                Alliances
              </a>
            </li>
            <li>
              <a onClick={() => navigateToPage('home-page', 'footer-anchor')}>
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateToPage('contact-page')}
                className="mobile-contact-link"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* PAGE 1: HOME PLATFORM CONTAINER */}
      <div
        id="home-page"
        className={`spa-page ${
          activePage === 'home-page' ? 'active-page' : ''
        }`}
      >
        <section className="hero">
          <div className="hero-content">
            <span className="hero-tagline">
              Architectural & Structural Metallurgy
            </span>
            <h1 className="hero-title">
              Premium Steel Solutions for Stronger Construction
            </h1>
            <p className="hero-subtitle">
              Trusted supplier of TMT Bars, Structural Steel, Roofing Sheets,
              Plywood, and Hardware Products from leading brands for
              residential, commercial, and industrial projects.
            </p>
            <button
              onClick={() => navigateToPage('home-page', 'portfolio')}
              className="btn-premium"
            >
              Explore Materials
            </button>
          </div>
        </section>

        <section className="brand-strip" id="alliances">
          <div className="marquee-track">
            {[
              'TATA TISCON 550SD',
              'JINDAL STEEL',
              'TIRUPATI TMT 550D',
              'RAJA RAM TMT 550D',
              'BIRLA PIVOT',
              'GURJAN PLYWOOD',
              'GREENPLY',
              'CENTURY PLY',
              'TATA TISCON 550SD',
              'JINDAL STEEL',
              'TIRUPATI TMT 550D',
              'RAJA RAM TMT 550D',
              'BIRLA PIVOT',
              'GURJAN PLYWOOD',
              'GREENPLY',
              'CENTURY PLY',
            ].map((b, key) => (
              <div key={key} className="brand-item">
                {b}
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio">
          <div className="section-header">
            <div className="section-header-left">
              <span>Curated Portfolios</span>
              <h2>Materials Without Compromise</h2>
            </div>
          </div>
          <div className="premium-grid">
            <div
              className="premium-card"
              onClick={() => navigateToPage('steel-page')}
            >
              <div
                className="card-visual"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/046/558/558/large_2x/rebars-bars-for-concrete-wall-construction-of-a-new-building-construction-site-iron-structure-ready-to-be-cast-with-concrete-steel-bars-construction-for-concreting-brand-new-armature-photo.JPG')",
                }}
              ></div>
              <div className="card-body">
                <h3>Structural Steel</h3>
                <p>
                  Featuring hyper-ductile Tata Tiscon 550SD formulas,
                  seismic-tested Jindal steel bars, Tirupati systems, and heavy
                  Raja Ram multi-load metrics.
                </p>
                <div className="card-link">View Structural Stock ➔</div>
              </div>
            </div>
            <div
              className="premium-card"
              onClick={() => navigateToPage('profiles-page')}
            >
              <div
                className="card-visual"
                style={{
                  backgroundImage:
                    "url('https://bmbsteel.com.vn/storage/2022/08/6189/mceu-8464491511660873738262.jpg')",
                }}
              ></div>
              <div className="card-body">
                <h3>Industrial Section Profiles</h3>
                <p>
                  High-grade structural elements including Heavy Beams, Flat
                  Iron Pipes, equal angles, and weather-resilient roofing
                  panels.
                </p>
                <div className="card-link">Explore Sections ➔</div>
              </div>
            </div>
            <div
              className="premium-card"
              onClick={() => navigateToPage('plywood-page')}
            >
              <div
                className="card-visual"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_aLA4ovOdaKqIjnYYWLEK-aPW832oQvogONbigE-AdlcXgHip_UBqCim&s=10')",
                }}
              ></div>
              <div className="card-body">
                <h3>Premium Core Plywoods</h3>
                <p>
                  Boiling-Water-Resistant (BWR) marine sheets, calibrated
                  structural wood, and luxury decorative composite panels
                  matching rigorous European design criteria.
                </p>
                <div className="card-link">Explore Collection ➔</div>
              </div>
            </div>
            <div
              className="premium-card"
              onClick={() => navigateToPage('hardware-page')}
            >
              <div
                className="card-visual"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/1200x/d6/44/ef/d644ef0e9edb00c6d0675a91d69c25f2.jpg')",
                }}
              ></div>
              <div className="card-body">
                <h3>Elite Hardware Assets</h3>
                <p>
                  Precision-milled brass hardware blocks, bespoke concealed
                  hinges, modular structural fixtures, and biometric access
                  mechanisms.
                </p>
                <div className="card-link">Explore Assets ➔</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PAGE 2: STRUCTURAL BAR NETWORKS */}
      <div
        id="steel-page"
        className={`spa-page ${
          activePage === 'steel-page' ? 'active-page' : ''
        }`}
      >
        <div className="steel-page-wrapper">
          <div className="back-nav-container">
            <button
              className="btn-back-link"
              onClick={() => navigateToPage('home-page', 'portfolio')}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          <div className="brand-tab-bar">
            <button
              className={`brand-tab ${
                steelBrand === 'tata-tiscon' ? 'active-tab' : ''
              }`}
              onClick={() => setSteelBrand('tata-tiscon')}
            >
              Tata Tiscon 550SD
            </button>
            <button
              className={`brand-tab ${
                steelBrand === 'jindal-tmt' ? 'active-tab' : ''
              }`}
              onClick={() => setSteelBrand('jindal-tmt')}
            >
              Jindal TMT 550
            </button>
            <button
              className={`brand-tab ${
                steelBrand === 'tirupati-tmt' ? 'active-tab' : ''
              }`}
              onClick={() => setSteelBrand('tirupati-tmt')}
            >
              Tirupati TMT 550
            </button>
            <button
              className={`brand-tab ${
                steelBrand === 'rajaram-tmt' ? 'active-tab' : ''
              }`}
              onClick={() => setSteelBrand('rajaram-tmt')}
            >
              Raja Ram TMT 550D
            </button>
          </div>

          <div
            id="tata-tiscon"
            className={`brand-catalog-group ${
              steelBrand === 'tata-tiscon' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://steeloncall.com/media/post/image/t/a/tata_tiscon_rod_weight_chart_for_reliable_construction.png"
                alt="Tata Tiscon Standard Chart"
              />
              <div className="steel-hero-caption">
                Master Calibration Standard
              </div>
              <div className="steel-hero-subcaption">
                Official metallurgy certified engineering specifications and
                reliable construction load metrics.
              </div>
            </div>
            <div className="variants-title">
              Tata Tiscon Configuration Matrix
            </div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'Tata Tiscon',
                  size: '6mm',
                  desc: 'Precision-drawn thin diameter high-tensile reinforcement rebar strings.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390263054/UF/YG/IB/2819014/download-1-500x500.jpg',
                  grade: 'Fe 550SD',
                  weight: '0.222',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tata Tiscon',
                  size: '8mm',
                  desc: 'Standard high ductile structural bar ideal for residential slabs and columns.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kpDHEX0XMz5T1s6pR4favH82haSt_HSY_4rVpbqr2Q&s=10',
                  grade: 'Fe 550SD',
                  weight: '0.395',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tata Tiscon',
                  size: '10mm',
                  desc: 'Optimized tensile metric load bearing bars for robust foundational matrices.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_SCzj8onyEWPC2S_Ubga5dg1Mv6FjFXnKUOjRtiMLw&s=10',
                  grade: 'Fe 550SD',
                  weight: '0.617',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tata Tiscon',
                  size: '12mm',
                  desc: 'Heavy infrastructure standard structural configuration element.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8aMUbH6W1b02o4hAYQebOpHh2lIdt2DP6m6-8kSnRw&s=10',
                  grade: 'Fe 550SD',
                  weight: '0.888',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tata Tiscon',
                  size: '16mm',
                  desc: 'High-scale structural reinforcement profiles specialized for high-rise frames.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeygNWHq8qK50qwclCD0umxw1dMZbBLCqgoHk-EjV-Cg&s=10',
                  grade: 'Fe 550SD',
                  weight: '1.580',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tata Tiscon',
                  size: '20mm',
                  desc: 'Industrial density metallurgy built for commercial foundations and bridges.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDz2o_j_7UPc6JdYD4VxA2glSBY5tomhpepJYtFJFgg&s=10',
                  grade: 'Fe 550SD',
                  weight: '2.470',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tata Tiscon',
                  size: '25mm',
                  desc: 'Maximum diameter solid structural support bars for critical load metrics.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLDW6R5BlK95DurXWbAoNmN9HYEIY1h675sJwuKNsmQ&s=10',
                  grade: 'Fe 550SD',
                  weight: '3.850',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
              ].map((item, key) => (
                <div
                  key={key}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.size}
                      />
                    </div>
                    <div className="steel-info-title">
                      Tata Tiscon 550SD{' '}
                      <span className="diameter-badge">{item.size}</span>
                    </div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">
                    Analyze Material ➔
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="jindal-tmt"
            className={`brand-catalog-group ${
              steelBrand === 'jindal-tmt' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIJ-x0uGTXDSKfzsmZUOiiY4hCtERhKOb9A&s"
                alt="Jindal TMT Standard Banner"
              />
              <div className="steel-hero-caption">
                Jindal Master Calibration Standard
              </div>
              <div className="steel-hero-subcaption">
                Official metallurgy certified structural specifications and
                industrial thermo-mechanical test parameters.
              </div>
            </div>
            <div className="variants-title">Jindal TMT 550 Matrix</div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'Jindal TMT',
                  size: '6mm',
                  desc: 'Precision core rebar grids re-engineered with premium structural load boundaries.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2025/4/500625635/YY/VX/UW/242817111/jindal-6mm-tmt-bars-500x500.jpg',
                  grade: 'Fe 550D',
                  weight: '0.222',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Jindal TMT',
                  size: '8mm',
                  desc: 'High yield seismic-resistant core formulation for premium reinforcement grids.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/351449077/ZF/GU/ZK/25285473/tmt-bar-8mm-500x500.jpg',
                  grade: 'Fe 550D',
                  weight: '0.395',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Jindal TMT',
                  size: '10mm',
                  desc: 'Premium commercial grade engineering bars targeting dynamic load absorption.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/7/434988368/PI/NP/UM/88395558/tmt-steel-rod-500x500.jpg',
                  grade: 'Fe 550D',
                  weight: '0.617',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Jindal TMT',
                  size: '12mm',
                  desc: 'Elite specification layout profiles built for institutional architectural projects.',
                  img: 'https://tiimg.tistatic.com/fp/1/008/272/12-meter-long-hot-rolled-round-iron-jindal-tmt-bars-665.jpg',
                  grade: 'Fe 550D',
                  weight: '0.888',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Jindal TMT',
                  size: '16mm',
                  desc: 'Heavy duty standard profiles for maximum stability execution across spans.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/10/459618886/HG/WR/WT/65454603/jindal-550d-tmt.jpeg',
                  grade: 'Fe 550D',
                  weight: '1.580',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Jindal TMT',
                  size: '20mm',
                  desc: 'Industrial density metallurgy optimized for high load span foundational tasks.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2026/1/575505165/SQ/XU/JN/117755733/20mm-jindal-tmt-bars.jpeg',
                  grade: 'Fe 550D',
                  weight: '2.470',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Jindal TMT',
                  size: '25mm',
                  desc: 'Maximum thickness high stability rebar structures for ultimate framework support.',
                  img: 'https://images.jdmagicbox.com/quickquotes/images_main/jindal-tmt-bars-25mm-grade-fe550d-2220079297-zwdto1f2.jpg',
                  grade: 'Fe 550D',
                  weight: '3.850',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
              ].map((item, key) => (
                <div
                  key={key}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.size}
                      />
                    </div>
                    <div className="steel-info-title">
                      Jindal TMT 550D{' '}
                      <span className="diameter-badge">{item.size}</span>
                    </div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">
                    Analyze Material ➔
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="tirupati-tmt"
            className={`brand-catalog-group ${
              steelBrand === 'tirupati-tmt' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26ul49bj9-5txZ1lCowK77HHiCtkRS0RJAkdvJWDUvQ&s=10"
                alt="Tirupati Dynamic Setup Asset"
              />
              <div className="steel-hero-caption">
                Tirupati Master Calibration Standard
              </div>
              <div className="steel-hero-subcaption">
                Official structural deployment load metrics and robust
                architectural composite parameters.
              </div>
            </div>
            <div className="variants-title">
              Tirupati TMT 550 Configuration Matrix
            </div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'Tirupati TMT',
                  size: '6mm',
                  desc: 'Precision core thin reinforcement lines designed for standard light load framing structures.',
                  img: 'https://builders9.com/wp-content/uploads/2020/12/b9-tmt-steel-1-315x315.jpg',
                  grade: 'Fe 550D',
                  weight: '0.222',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tirupati TMT',
                  size: '8mm',
                  desc: 'High ductility structural elements ideal for standard home slabs and residential columns.',
                  img: 'https://5.imimg.com/data5/ANDROID/Default/2023/12/372202359/ZT/FF/LK/4623060/product-jpeg.jpg',
                  grade: 'Fe 550D',
                  weight: '0.395',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tirupati TMT',
                  size: '10mm',
                  desc: 'Optimized tensile metric engineering bars built for custom foundational grid systems.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2023/11/363778161/VC/FR/PA/128698711/safeimagekit-resized-img-40-500x500.png',
                  grade: 'Fe 550D',
                  weight: '0.617',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tirupati TMT',
                  size: '12mm',
                  desc: 'Heavy corporate infrastructure standard structural reinforcement rebar elements.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/11/467783746/UW/NC/RC/232660919/tirupati-tmt-550-12mm-500x500.jpg',
                  grade: 'Fe 550D',
                  weight: '0.888',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tirupati TMT',
                  size: '16mm',
                  desc: 'High capacity load distribution segments built for premium heavy load columns.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNXixaWTUZG4gOhm_QM0sAXrZu-UYah9XeA&s',
                  grade: 'Fe 550D',
                  weight: '1.580',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tirupati TMT',
                  size: '20mm',
                  desc: 'Industrial density metallurgy built for commercial complexes and wide bridge designs.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2023/11/363778161/VC/FR/PA/128698711/safeimagekit-resized-img-40.png',
                  grade: 'Fe 550D',
                  weight: '2.470',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
                {
                  brand: 'Tirupati TMT',
                  size: '25mm',
                  desc: 'Maximum thickness elite composition segments for multi-tier critical frameworks.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/11/467783104/VP/PI/VI/232660919/tirupati-tmt-550-25mm.jpg',
                  grade: 'Fe 550D',
                  weight: '3.850',
                  length: '12 meter',
                  usage: 'Building Construction',
                  material: 'Mild Steel',
                  color: 'Black',
                  avail: 'In Stock',
                },
              ].map((item, key) => (
                <div
                  key={key}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.size}
                      />
                    </div>
                    <div className="steel-info-title">
                      Tirupati TMT 550{' '}
                      <span className="diameter-badge">{item.size}</span>
                    </div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">
                    Analyze Material ➔
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="rajaram-tmt"
            className={`brand-catalog-group ${
              steelBrand === 'rajaram-tmt' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://5.imimg.com/data5/SELLER/Default/2023/7/322375128/UC/FM/QA/34225028/rajaram-tmt-bars.jpeg"
                alt="Raja Ram TMT"
              />
              <div className="steel-hero-caption">
                Raja Ram Master Calibration Standard
              </div>
              <div className="steel-hero-subcaption">
                Official structural deployment load metrics and robust
                architectural composite parameters.
              </div>
            </div>
            <div className="variants-title">Raja Ram TMT 550D Matrix</div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'Raja Ram',
                  size: '6mm',
                  desc: 'Precision core thin reinforcement lines designed for standard light load framing structures.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkbBQrmpwDiPyZ239fseMs5cD7fm2VOqKCg&s',
                  grade: 'Fe 550D',
                  weight: '0.222',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
                {
                  brand: 'Raja Ram',
                  size: '8mm',
                  desc: 'High ductility structural elements ideal for standard home slabs and residential columns.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2023/12/368161630/JU/JC/XE/128698711/rajaram-tmt-550-8mm-1000x1000.jpg',
                  grade: 'Fe 550D',
                  weight: '0.395',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
                {
                  brand: 'Raja Ram',
                  size: '10mm',
                  desc: 'Optimized tensile metric engineering bars built for custom foundational grid systems.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2025/3/495620524/RK/KO/JF/195803700/vizag-steel-tmt-bar-250x250.jpg',
                  grade: 'Fe 550D',
                  weight: '0.617',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
                {
                  brand: 'Raja Ram',
                  size: '12mm',
                  desc: 'Heavy corporate infrastructure standard structural reinforcement rebar elements.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476249879/KD/XQ/AS/195803700/12mm-tmt-bars-500x500.jpg',
                  grade: 'Fe 550D',
                  weight: '0.888',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
                {
                  brand: 'Raja Ram',
                  size: '16mm',
                  desc: 'High capacity load distribution segments built for premium heavy load columns.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2025/1/484066090/WT/LB/UC/133839256/vizag-steel-tmt-bar-250x250.jpg',
                  grade: 'Fe 550D',
                  weight: '1.580',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
                {
                  brand: 'Raja Ram',
                  size: '20mm',
                  desc: 'Industrial density metallurgy built for commercial complexes and wide bridge designs.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/1/376869806/RU/GU/IH/137229102/20mm-tirupati-tmt-bars-250x250.jpg',
                  grade: 'Fe 550D',
                  weight: '2.470',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
                {
                  brand: 'Raja Ram',
                  size: '25mm',
                  desc: 'Maximum thickness elite composition segments for multi-tier critical frameworks.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/11/467324038/ZO/DU/RF/236066952/25mm-mild-steel-tmt-bars-250x250.jpg',
                  grade: 'Fe 550D',
                  weight: '3.850',
                  length: '12 meter',
                  usage: 'Building Construction',
                  avail: 'In Stock',
                },
              ].map((item, key) => (
                <div
                  key={key}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.size}
                      />
                    </div>
                    <div className="steel-info-title">
                      Raja Ram TMT 550D{' '}
                      <span className="diameter-badge">{item.size}</span>
                    </div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">
                    Analyze Material ➔
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 3: SECTIONS CORES & ROOF PIPES */}
      <div
        id="profiles-page"
        className={`spa-page ${
          activePage === 'profiles-page' ? 'active-page' : ''
        }`}
      >
        <div className="steel-page-wrapper">
          <div className="back-nav-container">
            <button
              className="btn-back-link"
              onClick={() => navigateToPage('home-page', 'portfolio')}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          <div className="brand-tab-bar">
            <button
              className={`brand-tab ${
                profileCategory === 'heavy-sections' ? 'active-tab' : ''
              }`}
              onClick={() => setProfileCategory('heavy-sections')}
            >
              Beams & Channels
            </button>
            <button
              className={`brand-tab ${
                profileCategory === 'roofing-sheets' ? 'active-tab' : ''
              }`}
              onClick={() => setProfileCategory('roofing-sheets')}
            >
              Roofing & Panel Sheets
            </button>
          </div>

          <div
            id="heavy-sections"
            className={`brand-catalog-group ${
              profileCategory === 'heavy-sections' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://tiimg.tistatic.com/fp/1/007/021/mild-steel-i-beam-470.jpg"
                alt="Industrial Profile Standard"
              />
              <div className="steel-hero-caption">
                Master Profile Calibration Standard
              </div>
              <div className="steel-hero-subcaption">
                Official architectural deployment load metrics and structural
                parameters for industrial profile sections.
              </div>
            </div>
            <div className="variants-title">
              Industrial Section Configuration Matrix
            </div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'Industrial Profiles',
                  size: 'Rectangular Profile',
                  desc: 'Precision rectangular pipes ranging from 40x20mm up to 300x200mm load-bearing building structures.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2024/6/428094550/FX/ZO/BE/10340442/apl-apollo-gi-pipes.jpg',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: '6 Meter',
                  usage: 'Construction',
                  material: 'Iron',
                  color: 'Metallic',
                  avail: 'In Stock',
                  'data-extra-size-40x20mm':
                    'Wall: 1.2mm - 3.0mm (Gates, grills, light furniture)',
                  'data-extra-size-50x25mm':
                    'Wall: 1.2mm - 5.0mm (Purlins, railings, structural supports)',
                  'data-extra-size-80x40mm':
                    'Wall: 2.0mm - 5.0mm (Fencing, heavy-duty fabrication)',
                  'data-extra-size-100x50mm':
                    'Wall: 2.5mm - 6.0mm (Roof sheds, industrial framing)',
                  'data-extra-size-150x75mm':
                    'Wall: 3.0mm - 6.0mm (Heavy frameworks, agricultural equipment)',
                  'data-extra-size-300x200mm':
                    'Wall: 4.0mm - 10.0mm (Load-bearing building structures)',
                },
                {
                  brand: 'Industrial Profiles',
                  size: 'Square Profile',
                  desc: 'Comprehensive square pipes classified from light-duty decorative to heavy-duty industrial framing.',
                  img: 'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/rectangle-black-ms-square-pipe-20260123145235191.webp',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: '6 m',
                  usage: 'Structural Framing',
                  material: 'Galvanized Iron',
                  color: 'Black/Metallic',
                  avail: 'In Stock',
                  'data-extra-light-duty':
                    '12x12mm to 25x25mm | Wall: 0.8mm - 1.6mm (Furniture, decorative)',
                  'data-extra-medium-duty':
                    '32x32mm to 60x60mm | Wall: 1.6mm - 3.0mm (Building supports, gates)',
                  'data-extra-heavy-duty':
                    '80x80mm to 250x250mm | Wall: 3.6mm - 8.0mm (Industrial sheds, warehouse framing)',
                },
                {
                  brand: 'Industrial Profiles',
                  size: 'L Angle Profile',
                  desc: 'Polished mild steel L angles engineered from small structural braces up to heavy-duty 150x150x20mm.',
                  img: 'https://tiimg.tistatic.com/fp/2/009/801/iron-angle-493.jpg',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: '12 Meter',
                  usage: 'Construction',
                  material: 'Mild Steel',
                  color: 'Metallic',
                  avail: 'In Stock',
                  'data-extra-small-sizes': '20x20x3mm to 25x25x3mm',
                  'data-extra-medium-sizes': '40x40x5mm to 50x50x6mm',
                  'data-extra-large-sizes': '75x75x6mm to 100x100x10mm',
                  'data-extra-heavy-duty-sizes': 'Up to 150x150x20mm',
                },
                {
                  brand: 'Industrial Profiles',
                  size: 'C Channel Profile',
                  desc: 'Hot rolled industrial ISMC channels for foundational support framing.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFaYCwteKmFN0JjyvXCDO0y7qZHanXYa6FC4rsJPrQg&s=10',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: '6 Meter',
                  usage: 'Industrial',
                  material: 'Iron',
                  color: 'Metallic',
                  avail: 'In Stock',
                  'data-extra-light-channels':
                    'ISMC 75 (7.1 kg/m) to ISMC 100 (9.6 kg/m)',
                  'data-extra-medium-channels':
                    'ISMC 150 (16.8 kg/m) to ISMC 200 (22.3 kg/m)',
                  'data-extra-heavy-channels':
                    'ISMC 250 to ISMC 400 (Up to 50.1 kg/m)',
                  'data-extra-reference-chart':
                    'Refer to ISMC Standard Weight Chart for specific dimensional tolerances',
                },
                {
                  brand: 'SAIL',
                  size: 'I-Beam Profile',
                  desc: 'SAIL manufactured I-beams structured from 100x50mm light roofs up to 600x210mm heavy duty spans.',
                  img: 'https://tiimg.tistatic.com/fp/1/009/603/iron-beams-044.jpg',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: 'Standard',
                  usage: 'Construction',
                  material: 'Mild Steel',
                  color: 'Metallic',
                  avail: 'In Stock',
                  'data-extra-small-beams':
                    '100x50mm (~8 kg/m) | Roofing / Light Support',
                  'data-extra-medium-beams':
                    '150x75mm (~15 kg/m) | Mezzanine / Columns',
                  'data-extra-large-beams':
                    '250x125mm (~37 kg/m) | Residential / Industrial',
                  'data-extra-heavy-duty-beams':
                    '600x210mm (~123 kg/m) | Major Infrastructure',
                },
                {
                  brand: 'Industrial Profiles',
                  size: 'H-Beam Profile',
                  desc: 'Heavy-duty H-beams spanning from 100x100mm up to 600x600mm for high-stress industrial applications.',
                  img: 'https://cpimg.tistatic.com/06925372/b/4/Iron-Steel-H-Beam.jpg',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: 'Customized',
                  usage: 'Construction',
                  material: 'Steel',
                  color: 'Metallic',
                  avail: 'In Stock',
                  'data-extra-100x100mm':
                    '17.2 kg/m | Light frames, mezzanines, platforms',
                  'data-extra-150x150mm':
                    '31.1 kg/m | Modular construction, machinery supports',
                  'data-extra-200x200mm':
                    '49.9 kg/m | Commercial frames, secondary members',
                  'data-extra-250x250mm':
                    '72.4 kg/m | Mid-rise buildings, equipment platforms',
                  'data-extra-300x300mm':
                    '94.5 kg/m | Heavy industrial buildings, storage yards',
                  'data-extra-400x400mm':
                    '172.0 kg/m | Heavy frameworks, bridges, shipbuilding',
                  'data-extra-500x500mm':
                    '244.0 kg/m | Major load-bearing columns',
                  'data-extra-600x600mm':
                    '291.0 kg/m | High-stress industrial columns',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.size}
                      />
                    </div>
                    <div className="steel-info-title">{item.size}</div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">Analyze Profile ➔</div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="roofing-sheets"
            className={`brand-catalog-group ${
              profileCategory === 'roofing-sheets' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://5.imimg.com/data5/SELLER/Default/2025/8/533702368/QR/BF/BE/42460873/tata-metal-roofing-sheet-250x250.png"
                alt="Tata Bluescope"
              />
              <div className="steel-hero-caption">
                Roofing & Tensile Panel Standard
              </div>
              <div className="steel-hero-subcaption">
                Official high-grade color coated weather resilient parameters
                and premium architectural metal surfaces.
              </div>
            </div>
            <div className="variants-title">Premium Sheet & Coating Matrix</div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'TATA Prisma Bluescope',
                  size: '0.60mm Roofing Sheet',
                  desc: 'High Strength (550 MPa) roofing sheet with superior Al-Zn corrosion resistance and thermal efficiency.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2025/8/533702368/QR/BF/BE/42460873/tata-metal-roofing-sheet-250x250.png',
                  gallery:
                    '[{"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IoHhSwp4qKdCx7usDY3OyKabVhs-nBGOF7QnQEP-yRDfAfGSiLLXRwQ&s=10", "color":"Cloud White"}, {"src":"https://5.imimg.com/data5/SELLER/Default/2026/3/591891807/YD/YP/JU/35635770/tata-bluescope-prisma-roofing-sheet-1000x1000.png", "color":"Brick Red"}, {"src":"https://www.arcslot.in/s/658553f810fa5ae45f2191a2/692c67fa07a9c7ab9abf47ba/49a400c0-f6fd-426a-8c20-a7fcc1498a63-640x640.png", "color":"Leaf Green"}, {"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0l3D1RlLGrezlt_1Q-LHDUw6K3n7AzjUf9GDMK3JdA&s=10", "color":"Mist Green"}, {"src":"https://5.imimg.com/data5/SELLER/Default/2025/6/516120819/JP/YA/OV/245164157/0-50mm-tata-blue-scope-roofing-sheet-250x250.png", "color":"Light Blue"}, {"src":"https://www.arcslot.in/s/658553f810fa5ae45f2191a2/692c64148dffbcb73fbf99aa/295fb453-a5f4-4893-bfec-8767c545d7c7.png", "color":"Royal Blue"}, {"src":"https://5.imimg.com/data5/SELLER/Default/2026/2/584642322/PG/PT/UJ/2210198/az-150-tata-prisma-roofing-sheets-500x500.jpg", "color":"Graphite Gray"}]',
                  grade: 'AZ150',
                  weight: '0.00',
                  length: '10 Ft',
                  usage: 'Roofing',
                  material: 'Al-Zn Alloy Coated Steel',
                  color: 'Multiple Options',
                  avail: 'In Stock',
                  'data-extra-series': 'Bluescope',
                  'data-extra-model': 'Prisma',
                  'data-extra-features':
                    'High Strength (550 MPa), Corrosion Resistance, Thermal Efficiency',
                },
                {
                  brand: 'JSW',
                  size: '0.50 mm Panel Sheet',
                  desc: 'High-quality, Zinc alloy coated, pre-painted roofing sheet with anti-corrosion technology offering the strength of steel and protection against all weather.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2025/12/565825498/KZ/BS/YQ/14392898/jsw-pragati-roofing-sheets-500x500.png',
                  gallery:
                    '[{"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFw_u-8PRvtXDUAivzDJGcCDv0JTNZwdLATVTktojxuv09XGmLBufaomr1&s=10", "color":"Light Blue"}, {"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCt-Wj_wMuAQ-QvPJ1sY4nUtYsUMjcMQHfH57zs_MVLjtME3v_PWq_Zek&s=10", "color":"Off White"}, {"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41JTU1fdyCzHOOXF6s-Dgb2TaLg301ImgOAMaKxIUkKWgkAi1KqqxUouq&s=10", "color":"Brick Red"}, {"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVsP9afPkHIdEWPQEb_YiyOSAQPz2SHbcht47-CW7dEq2xIfdheAocF_x&s=10", "color":"Green"}]',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: '8 Ft',
                  usage: 'For roofing',
                  material: 'Aluminium',
                  color: 'Multiple Options',
                  avail: 'In Stock',
                  'data-extra-model': 'Pragati Plus',
                  'data-extra-finish': 'Zinc Coated',
                },
                {
                  brand: 'JSW Colouron',
                  size: '0.50 mm Sheet',
                  desc: 'High stability color-coated elite architectural assets targeting custom span builds.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2026/4/597490038/WX/WI/NR/2094803/jsw-colour-coated-sheet-az-70-0-80-mm-thickness.jpeg',
                  bottomImg:
                    'https://5.imimg.com/data5/SELLER/Default/2023/10/356794833/FW/UW/LQ/64822997/jsw-colouron-plus-colour-coating-sheet-500x500.jpg',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: 'Variable',
                  usage: 'Roofing',
                  material: 'AZ',
                  color: 'All Available Colors',
                  avail: 'In Stock',
                  'data-extra-surface-treatment': 'Galvanised',
                  'data-extra-dimensions': 'Any Sizes',
                  'data-extra-coating-thickness': '0.5mm',
                },
                {
                  brand: 'JSW Indhradhanush',
                  size: '0.45 mm Sheet',
                  desc: 'Premium PPGL color-coated trapezoidal profiles designed for reliable longevity panels.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2025/11/564136980/BB/JE/TW/184710678/jsw-indradhanush-az-70-ppgl-color-coated-coil.jpg',
                  grade: 'AZ150',
                  weight: '0.00',
                  length: 'Variable',
                  usage:
                    'Cold Storage, Residential, Warehouse, Factory Shed, Commercial, Institutional, Industrial',
                  material: 'PPGL Coated Steel',
                  color: 'Blue',
                  avail: 'In Stock',
                  'data-extra-sheet-width': '1060 mm',
                  'data-extra-profile-type': 'Trapezoidal',
                  'data-extra-coating-type': 'PPGL',
                  'data-extra-country-of-origin': 'India',
                },
                {
                  brand: 'Jindal Sabrang',
                  size: '0.16 mm - 1.0 mm Sheet',
                  desc: 'ISI marked color-coated wavy sheets offering exceptional weather proofing and corrosion resistance.',
                  img: 'https://5.imimg.com/data5/LA/SU/NE/SELLER-85044603/jindal-sabrang-isi-roofing-sheet.jpg',
                  gallery:
                    '[{"src":"https://cpimg.tistatic.com/12249947/b/4/jindal-sabrang-max-roofing-sheet.png", "color":"Jindal Grey"}, {"src":"https://www.arcslot.in/s/658553f810fa5ae45f2191a2/697b2c766d3167e10463d209/jindal-cooling-ppgl-colour-coated-sheets-4coat-640x640.webp", "color":"Sky Blue"}, {"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRJHDqegMvIlFjML7BCo30iUqxb4f9uF8pFKlkfFqjQ9uJLEnWkcU_gA&s=10", "color":"Off White"}, {"src":"https://www.arcslot.in/s/658553f810fa5ae45f2191a2/665370ad751fd454992229e1/jindal-off-white-color-coated-roofing-sheet-640x640.webp", "color":"Brick Red"}, {"src":"https://images.jdmagicbox.com/quickquotes/images_main/jindal-sabrang-colour-coated-roofing-sheet-red-2220123027-f6mt8k1p.jpg", "color":"Orange"}, {"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Wd1ZP2TkgD1Nf1FbW7eLg0i2L9M8DG0jT_ZDuRDy7nUlycmzpWQVDAs&s=10", "color":"Green"}]',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: '12 ft',
                  usage: 'Roofing',
                  material: 'Aluminium',
                  color: 'Multiple Options',
                  avail: 'In Stock',
                  'data-extra-surface-treatment': 'Color Coated',
                  'data-extra-coating': 'Poly Vinyldene Fluoride (PVDF)',
                  'data-extra-width': '750 mm to 1450 mm',
                  'data-extra-back-coat': '5-10 micron',
                  'data-extra-top-coat': '5-25 micron',
                  'data-extra-features': 'Weather Proof, Corrosion Resistance',
                  'data-extra-shape': 'Rectangular Wavy',
                  'data-extra-isi-marked': 'Yes',
                  'data-extra-rust-resistant': 'Yes',
                },
                {
                  brand: 'AMNS INDIA',
                  size: '0.50 mm Sheet',
                  desc: 'Bespoke high-tensile multi-alloy decorative and defensive profile layers.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/352948111/BO/PA/FO/159984074/color-profile-sheet-amns-india.jpeg',
                  bottomImg:
                    'https://5.imimg.com/data5/SELLER/PDFImage/2024/7/437130688/YE/FO/SM/96671982/am-ns-india-color-coated-roofing-sheet-500x500.png',
                  grade: 'A-Z GSM',
                  weight: '0.00',
                  length: '8, 10, 12, 14, 16, 18, 20, 22 ft',
                  usage: 'Residential & Commercial',
                  material: 'Galvanized Steel',
                  color: 'All Available Colors',
                  avail: 'In Stock',
                  'data-extra-coating-type': 'PPGI',
                  'data-extra-profile-type': 'Trapezoidal',
                  'data-extra-width': '3.5 ft',
                  'data-extra-top-coat-thickness': '18 microns',
                  'data-extra-manufacturing-technique': 'Hot Rolled',
                  'data-extra-surface-treatment': 'Color Coated',
                  'data-extra-available-colors':
                    'Blue, Green, Red, Terracotta, Grey, White',
                },
                {
                  brand: 'CR Sheets',
                  size: '0.5 - 5 mm Sheet',
                  desc: 'Precision core flat structural metal layers with high surface finish metrics.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6wmyYUyHe56-1o66YybUQin6qk3T7wdQhA&s',
                  grade: 'CRCA',
                  weight: '0.00',
                  length: 'Custom',
                  usage: 'Construction',
                  material: 'Steel',
                  color: 'Metallic',
                  avail: 'In Stock',
                  'data-extra-width': '1220 mm (4 ft)',
                  'data-extra-form': 'Sheet',
                },
                {
                  brand: 'HR Sheets',
                  size: 'Variable Plate',
                  desc: 'Heavy duty structural steel infrastructure plates built for extreme frame loading.',
                  img: 'https://trivenisteel.com/wp-content/uploads/2023/05/HRHot-Rolledplates2.png',
                  grade: 'Structural Grade',
                  weight: '0.00',
                  length: 'Custom',
                  usage: 'Industrial',
                  material: 'Mild Steel',
                  color: 'Metallic',
                  avail: 'In Stock',
                  'data-extra-surface-treatment': 'Coated',
                  'data-extra-condition': 'New Only',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.brand}
                      />
                    </div>
                    <div className="steel-info-title">
                      {item.brand}{' '}
                      <span className="diameter-badge">
                        {item.size.split(' ')[0]}
                      </span>
                    </div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">Analyze Colors ➔</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 4: PLYWOOD NETWORKS */}
      <div
        id="plywood-page"
        className={`spa-page ${
          activePage === 'plywood-page' ? 'active-page' : ''
        }`}
      >
        <div className="steel-page-wrapper">
          <div className="back-nav-container">
            <button
              className="btn-back-link"
              onClick={() => navigateToPage('home-page', 'portfolio')}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          <div className="brand-tab-bar">
            <button
              className={`brand-tab ${
                plywoodBrand === 'birla-pivot' ? 'active-tab' : ''
              }`}
              onClick={() => setPlywoodBrand('birla-pivot')}
            >
              Birla Pivot
            </button>
            <button
              className={`brand-tab ${
                plywoodBrand === 'century-ply' ? 'active-tab' : ''
              }`}
              onClick={() => setPlywoodBrand('century-ply')}
            >
              Century Ply
            </button>
            <button
              className={`brand-tab ${
                plywoodBrand === 'green-ply' ? 'active-tab' : ''
              }`}
              onClick={() => setPlywoodBrand('green-ply')}
            >
              Greenply
            </button>
            <button
              className={`brand-tab ${
                plywoodBrand === 'gurjan-ply' ? 'active-tab' : ''
              }`}
              onClick={() => setPlywoodBrand('gurjan-ply')}
            >
              Gurjan Plywood
            </button>
          </div>

          <div
            id="birla-pivot"
            className={`brand-catalog-group ${
              plywoodBrand === 'birla-pivot' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://5.imimg.com/data5/SELLER/Default/2023/12/371189682/SW/OD/DP/26934187/birla-pivot-gold-303-mr-grade-plywood.jpg"
                alt="Birla Pivot Panel Matrix"
              />
              <div className="steel-hero-caption">
                Premium Wood & Calibration Standard
              </div>
              <div className="steel-hero-subcaption">
                Elite Boiling-Water-Proof (BWP) marine sheets, Gurjan core
                structural multi-plywood blocks, and refined wood panels
                matching rigorous architectural criteria.
              </div>
            </div>
            <div className="variants-title">
              Birla Pivot Configuration Matrix
            </div>
            <div className="steel-gallery-grid">
              <div
                className="steel-product-item"
                onClick={() =>
                  openProductDetails({
                    brand: 'Birla Pivot',
                    size: '8x4 ft',
                    desc: 'Premium BWP Grade Gurjan core plywood with Eucalyptus wood type, offering 21 years of warranty for high-end furniture applications.',
                    img: 'https://5.imimg.com/data5/SELLER/Default/2023/12/371189682/SW/OD/DP/26934187/birla-pivot-gold-303-mr-grade-plywood.jpg',
                    grade: 'BWP Grade',
                    weight: '0.00',
                    length: '8 ft',
                    usage: 'Furniture',
                    material: 'Gurjan Core / Eucalyptus Wood',
                    color: 'Natural Wood',
                    avail: 'In Stock',
                    'data-extra-warranty': '21 Years',
                    'data-extra-wood-type': 'Eucalyptus',
                    'data-extra-core-material': 'Gurjan',
                    'data-extra-country-of-origin': 'Made in India',
                    'data-extra-official-catalog':
                      "<a href='https://5.imimg.com/data5/SELLER/Doc/2024/1/377413613/SG/QP/EV/26934187/birla-pivot-gold-303-mr-grade-plywood.pdf' target='_blank' rel='noopener noreferrer' style='color: var(--accent-bronze); text-decoration: none; font-weight: 700; border-bottom: 1px solid var(--accent-bronze); padding-bottom: 2px;'>Download PDF Catalog</a>",
                  })
                }
              >
                <div>
                  <div className="steel-img-wrapper">
                    <img
                      className="steel-img-frame"
                      src="https://5.imimg.com/data5/SELLER/Default/2023/12/371189682/SW/OD/DP/26934187/birla-pivot-gold-303-mr-grade-plywood.jpg"
                      alt="Birla Pivot Gold Plywood"
                    />
                  </div>
                  <div className="steel-info-title">
                    Birla Pivot Gold <span className="diameter-badge">BWP</span>
                  </div>
                  <p className="steel-info-desc">
                    Premium BWP Grade Gurjan core plywood with Eucalyptus wood
                    type, offering 21 years of warranty.
                  </p>
                </div>
                <div className="card-action-indicator">Analyze Material ➔</div>
              </div>
            </div>
          </div>

          <div
            id="century-ply"
            className={`brand-catalog-group ${
              plywoodBrand === 'century-ply' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9jjNCAUvT3vlfBRrv9L0_Ao3nD2W5Wf9s2EjLq49xw&s"
                alt="Century Ply Calibration Standard"
              />
              <div className="steel-hero-caption">
                Century Ply Structural Asset Portfolio
              </div>
              <div className="steel-hero-subcaption">
                Next-generation Boiling Water Proof (BWP) systems, structural
                safety-first laminations, and premium interior panels enriched
                with ViroKill and Firewall technologies.
              </div>
            </div>
            <div className="variants-title">
              Century Ply Configuration Matrix
            </div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'Century Ply',
                  size: 'Thickness: 4mm - 25mm',
                  desc: 'Premium BWP marine-grade plywood passing 25 stringent BIS tests. Features Firewall Technology for fire protection and ViroKill Technology that eliminates 99.9% of viruses. 65% stronger Glue Shear Strength ensures superior longevity. Regional uniform One India One Price framework applies.',
                  img: 'https://www.centuryply.com/uploads/Club_Prime_Plywood_72_mm_200224_26a1f84bff.jpg',
                  grade: 'BWP Marine Grade (Premium)',
                  weight: '0.00',
                  length: 'Standard Grid Sizes',
                  usage: 'Safe & Premium Architectural Spaces',
                  material: 'Premium Dynamic Timber Strata',
                  color: 'Virokill Protected Timber',
                  avail: 'In Stock',
                  'data-extra-warranty': '30 Years Warranty',
                  'data-extra-technology': 'Firewall & ViroKill Integration',
                  'data-extra-price-index':
                    '₹171 / Unit (Incl. GST) *for 19mm thickness (Unit = 929 sq.cm. approx)',
                  'data-extra-thickness-range':
                    '4 mm, 6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm',
                  name: 'Club Prime',
                  badge: 'Premium BWP',
                },
                {
                  brand: 'Century Ply',
                  size: 'Thickness: 4mm - 25mm',
                  desc: 'Safety-first layout composite engineered to guard against fire, moisture, and micro-organisms. Imbued with advanced Aqua Armour, GLP anti-borer protection, and certified fire-retardant performance tailored for demanding institutional and commercial interior spaces.',
                  img: 'https://www.centuryply.com/uploads/21year_new_47d62f77c9.webp',
                  grade: 'BWP Grade (Premium Economy)',
                  weight: '0.00',
                  length: 'Standard Grid Sizes',
                  usage: 'Commercial & Premium Interior Framing',
                  material: 'Aqua Armour Balanced Core',
                  color: 'Shield Coated Core Wood',
                  avail: 'In Stock',
                  'data-extra-warranty': '21 Years Warranty',
                  'data-extra-protection-index':
                    'GLP Protection & Virokill Shields',
                  'data-extra-thickness-range':
                    '4 mm, 6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm',
                  name: 'Century Bond Shield',
                  badge: 'BWP Shield',
                },
                {
                  brand: 'Century Ply',
                  size: 'Thickness: 4mm - 25mm',
                  desc: 'The definitive uniform price solution delivering high-tier compliance under IS 303 BWP rules. Features high bend resistance making it the highest quality architectural resource at an affordable price, making budgeting transparent across regions.',
                  img: 'https://www.centuryply.com/uploads/Sainik_710_Plywood_Facelift_72_mm_280325_f2a82393a1.jpg',
                  grade: 'IS 303 BWP (Affordable Grade)',
                  weight: '0.00',
                  length: 'Standard Grid Sizes',
                  usage: 'Residential & Commercial General Frameworks',
                  material: 'Asli Waterproof Engineered Core',
                  color: 'Natural Calibrated Timber',
                  avail: 'In Stock',
                  'data-extra-warranty': '10 Years Warranty',
                  'data-extra-price-index':
                    '₹122 / Unit (Incl. GST) *for 19mm thickness (Unit = 929 sq.cm. approx)',
                  'data-extra-compliance':
                    'Genuine Boiling Water Proof (IS 303 BWP General Purpose)',
                  'data-extra-thickness-range':
                    '4 mm, 6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm',
                  name: 'Sainik 710',
                  badge: 'Asli BWP',
                },
                {
                  brand: 'Century Ply',
                  size: 'Thickness: 4mm - 18mm',
                  desc: 'Highly stable, swell-proof, and weather-resistant moisture shield ply from the house of CenturyPly. Provides comprehensive borer and termite defense profiles at a highly cost-effective budget layout.',
                  img: 'https://www.centuryply.com/uploads/Sainik_MR_Plywood_Facelift_16_09_21_c916adba77.jpg',
                  grade: 'MR Moisture Resistant (Affordable)',
                  weight: '0.00',
                  length: 'Standard Grid Sizes',
                  usage: 'Moisture-Exposed Interior Structural Accents',
                  material: 'Borer & Termite Proof Shield Strata',
                  color: 'Moisture Protected Core',
                  avail: 'In Stock',
                  'data-extra-warranty': '5 Years Warranty',
                  'data-extra-structural-metric':
                    'Bend-Resistant & Dimensionally Stable Swell-Proof',
                  'data-extra-thickness-range':
                    '4 mm, 6 mm, 8 mm, 12 mm, 15 mm, 16 mm, 18 mm',
                  name: 'Sainik MR',
                  badge: 'Water Resistant',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div className="steel-info-title">
                      {item.name}{' '}
                      <span className="diameter-badge">{item.badge}</span>
                    </div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">
                    Analyze Material ➔
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="green-ply"
            className={`brand-catalog-group ${
              plywoodBrand === 'green-ply' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeVln0k6kxQ0IhFsChR_dosbZ4OX_nGZm6TDN2BvnlA&s"
                alt="Greenply Standard Portfolio"
              />
              <div className="steel-hero-caption">
                Greenply Premium Material Standard
              </div>
              <div className="steel-hero-subcaption">
                Architectural grade hardwood composites, certified eco-friendly
                formulations, low-emission adhesive resins, and advanced termite
                defense cores engineered by Greenply.
              </div>
            </div>
            <div className="variants-title">Greenply Configuration Matrix</div>
            <div className="steel-gallery-grid">
              {[
                {
                  brand: 'Greenply',
                  size: '8x4 ft',
                  desc: 'Premium structural asset built from high-density Gurjan hardwood layers. Calibrated A-Grade formulation designed to resist tough structural loads in heavy kitchen environments and doors.',
                  img: 'https://5.imimg.com/data5/SELLER/Default/2023/5/309280672/UK/FQ/WM/3771233/greenply-gurjan-green-gold-710-bwp-plywoods-1000x1000.jpg',
                  grade: 'A Grade BWP',
                  weight: '0.00',
                  length: '8 ft',
                  usage: 'Kitchen & Door Assembly',
                  material: '100% Gurjan Hardwood Core',
                  color: 'Brown',
                  avail: 'In Stock',
                  'data-extra-thickness-variants':
                    '6 mm, 9 mm, 12 mm, 16 mm, 19 mm',
                  name: 'Green Gold 710',
                  badge: 'Gurjan BWP',
                },
                {
                  brand: 'Greenply',
                  size: '2440x1220mm (8x4 ft)',
                  desc: 'Top tier architectural asset built under rigorous IS:5509 metrics. Formulated with a 100% composed dense hardwood core providing extreme borer-proof, fire-retardant, and termite resistant parameters.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7GTpW4b9Y140jAP0KXTvuskyM_-5tWpkreffnh1ysg&s=10',
                  grade: 'BWP Marine (IS:5509)',
                  weight: '0.00',
                  length: '8 ft',
                  usage: 'High-Stress Structural Fitting & Marine Layouts',
                  material: '100% Composed Hardwood Core',
                  color: 'BWP Treated Dark Timber',
                  avail: 'In Stock',
                  'data-extra-thickness': '19 mm',
                  'data-extra-safety-features':
                    'Certified Fire Retardant, Borer Proof, Anti-Termite',
                  name: 'Green Platinum',
                  badge: 'IS:5509 Marine',
                },
                {
                  brand: 'Greenply',
                  size: 'Thickness: 4mm - 25mm',
                  desc: 'Premium BWP multi-layer composite engineered with selected Eucalyptus core fibers. Interlocked with premium Melamine adhesive matrix for structural applications.',
                  img: 'https://5.imimg.com/data5/ANDROID/Default/2021/3/GI/UP/ZU/49265913/product-jpeg-1000x1000.jpg',
                  grade: 'BWP Grade',
                  weight: '0.00',
                  length: 'Standard Matrix',
                  usage: 'Premium Corporate Furniture',
                  material: 'Eucalyptus Core / Softwood Blends',
                  color: 'Brown',
                  avail: 'In Stock',
                  'data-extra-resin-bond': 'Melamine Matrix Resin',
                  'data-extra-thickness-range':
                    '4 mm, 6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm',
                  name: 'Club 500',
                  badge: 'BWP Grade',
                },
                {
                  brand: 'Greenply',
                  size: 'Thickness: 4mm - 19mm',
                  desc: 'High grade Boiling Water Proof sheet meeting JSW / IS:710 metrics. Crafted using 100% composed core hardwood veneers bound with Phenol Formaldehyde (PF) resin. Engineered to withstand weather variations without risk of delamination.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSllrBuRctuOQawJ7TJpKVC9u7IqkI3qm7DGmR3U7yw&s=10',
                  grade: 'BWP Grade (IS:710)',
                  weight: '0.00',
                  length: '8x4 ft / 7x4 ft',
                  usage: 'Exterior Fitting & Weather Exposed Framing',
                  material: 'Hardwood Veneer / PF Resin',
                  color: 'Deep Walnut Wood',
                  avail: 'In Stock',
                  'data-extra-environmental-compliance':
                    'Low Emission Adhesives (E-1 European Standard)',
                  'data-extra-pest-control':
                    '100% Borer & Termite Proof Shield',
                  'data-extra-thickness-range':
                    '4 mm, 6 mm, 9 mm, 12 mm, 16 mm, 19 mm',
                  name: 'Ecotec BWP',
                  badge: 'IS:710 Standard',
                },
                {
                  brand: 'Greenply',
                  size: '8x4 ft',
                  desc: 'Moisture Resistant asset calibrated under IS 303 rules. Formulated with dynamic hardwood and Eucalyptus components. Features explicit Melamine adhesive bonding for water resistance and furniture stability.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhEZSdpWiXg1IoggeF0yti6Bxl8hY6bHnfE2EblaQeA&s=10',
                  grade: 'MR Grade (IS 303)',
                  weight: '0.00',
                  length: '8 ft',
                  usage: 'Internal Furniture & Wardrobes',
                  material: 'Eucalyptus Hardwood Blend',
                  color: 'Brown',
                  avail: 'In Stock',
                  'data-extra-resin-bond': 'Melamine Bonding Agent',
                  'data-extra-compliance': 'Official ISI Marked Asset',
                  'data-extra-thickness-variants':
                    '6 mm, 9 mm, 12 mm, 16 mm, 19 mm',
                  name: 'Greenply MR 303',
                  badge: 'ISI MR',
                },
                {
                  brand: 'Greenply',
                  size: 'Thickness: 6mm - 19mm',
                  desc: 'Moisture Resistant grade engineered from selected hardwood and poplar species as per IS 303. Built with an eco-friendly low-emission formulation to sustain excellent indoor air quality. Features anti-termite and borer-proof shielding.',
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTi9lBUTB52SlKwWzzK4330wJ8Rg-8_hEft2730uXhg&s=10',
                  grade: 'MR Grade (IS 303)',
                  weight: '0.00',
                  length: '8x4 ft / 7x4 ft',
                  usage: 'Modular Interiors & Modular Cabinetry',
                  material: 'Hardwood / Poplar Species',
                  color: 'Light Natural Timber',
                  avail: 'In Stock',
                  'data-extra-warranty': '5 Years Manufacturer Warranty',
                  'data-extra-pest-treatment':
                    'Borer-Proof & Preservative-Treated',
                  'data-extra-special-variant':
                    '16mm Ecotec Select optimized for interiors',
                  name: 'Ecotec MR',
                  badge: 'Eco-MR',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="steel-product-item"
                  onClick={() => openProductDetails(item)}
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div className="steel-info-title">
                      {item.name}{' '}
                      <span className="diameter-badge">{item.badge}</span>
                    </div>
                    <p className="steel-info-desc">{item.desc}</p>
                  </div>
                  <div className="card-action-indicator">
                    Analyze Material ➔
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="gurjan-ply"
            className={`brand-catalog-group ${
              plywoodBrand === 'gurjan-ply' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapfd6LfvqUBt5ZpvTp3PJliyhGMeAjbDfSWw2ytagVQ&s"
                alt="Gurjan Premium Plywood Banner"
              />
              <div className="steel-hero-caption">
                Gurjan Ultimate Wood Matrix
              </div>
              <div className="steel-hero-subcaption">
                Bespoke 100% uniform solid logging core profiles composed solely
                from authentic Gurjan trees, offering high structural load
                metrics for critical multi-tier architectural bracing.
              </div>
            </div>
            <div className="variants-title">Gurjan Configuration Matrix</div>
            <div className="steel-gallery-grid">
              <div
                className="steel-product-item"
                onClick={() =>
                  openProductDetails({
                    brand: 'Gurjan Plywood',
                    size: 'Industry Standard (8x4 ft)',
                    desc: 'Bespoke high-density interlocking plywood panel constructed via layered solid logging from premium Gurjan wood. Highly favored for master construction frameworks, load-bearing floor platforms, and luxury internal/external cabinetry layouts requiring unyielding structural resistance.',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapfd6LfvqUBt5ZpvTp3PJliyhGMeAjbDfSWw2ytagVQ&s',
                    grade: 'Elite A-Class Core',
                    weight: '0.00',
                    length: '8 ft',
                    usage:
                      'Master Cabinetry, Heavy Frameworks, Structural Building Lines',
                    material: '100% Authentic Gurjan Timber Strata',
                    color: 'Deep Natural Timber Brown',
                    avail: 'In Stock',
                    'data-extra-dimensional-variations':
                      '8 ft × 4 ft (Standard), 7 ft × 4 ft, 8 ft × 3 ft, 6 ft × 4 ft, 6 ft × 3 ft',
                    'data-extra-calibrated-thickness':
                      '4 mm, 6 mm, 9 mm, 12 mm, 16 mm, 18 mm, 19 mm, 20 mm, 25 mm',
                    'data-extra-blueprint-specification':
                      "<a href='https://5.imimg.com/data5/SELLER/Doc/2025/1/478433962/HI/AK/NE/103016177/19mm-gurjan-plywood.pdf' target='_blank' rel='noopener noreferrer' style='color: var(--accent-bronze); text-decoration: none; font-weight: 700; border-bottom: 1px solid var(--accent-bronze); padding-bottom: 2px;'>Download PDF Blueprint Catalog</a>",
                  })
                }
              >
                <div>
                  <div className="steel-img-wrapper">
                    <img
                      className="steel-img-frame"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapfd6LfvqUBt5ZpvTp3PJliyhGMeAjbDfSWw2ytagVQ&s"
                      alt="Gurjan Premium Plywood Asset"
                    />
                  </div>
                  <div className="steel-info-title">
                    Gurjan Premium{' '}
                    <span className="diameter-badge">100% Gurjan</span>
                  </div>
                  <p className="steel-info-desc">
                    Pure imported logging core plywood sheets available from 4mm
                    to 25mm structural configurations.
                  </p>
                </div>
                <div className="card-action-indicator">Analyze Material ➔</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 5: HARDWARE SHOWROOM INFRASTRUCTURE CATALOG */}
      <div
        id="hardware-page"
        className={`spa-page ${
          activePage === 'hardware-page' ? 'active-page' : ''
        }`}
      >
        <div className="steel-page-wrapper">
          <div className="back-nav-container">
            <button
              className="btn-back-link"
              onClick={() => navigateToPage('home-page', 'portfolio')}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          <div className="brand-tab-bar">
            <button
              className={`brand-tab ${
                hardwareCategory === 'godrej-locks' ? 'active-tab' : ''
              }`}
              onClick={() => setHardwareCategory('godrej-locks')}
            >
              Locks & Core Assets
            </button>
            <button
              className={`brand-tab ${
                hardwareCategory === 'kitchen-fittings' ? 'active-tab' : ''
              }`}
              onClick={() => setHardwareCategory('kitchen-fittings')}
            >
              Kitchen Architecture Fittings
            </button>
            <button
              className={`brand-tab ${
                hardwareCategory === 'door-kits' ? 'active-tab' : ''
              }`}
              onClick={() => setHardwareCategory('door-kits')}
            >
              Premium Door Kits
            </button>
            <button
              className={`brand-tab ${
                hardwareCategory === 'bathroom-fixtures' ? 'active-tab' : ''
              }`}
              onClick={() => setHardwareCategory('bathroom-fixtures')}
            >
              SS Bathroom Suites
            </button>
          </div>

          <div
            id="godrej-locks"
            className={`brand-catalog-group ${
              hardwareCategory === 'godrej-locks' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <img
                className="steel-master-img"
                src="https://companylogos.org/wp-content/uploads/2024/10/Godrej-2013-300x300.png"
                alt="Godrej Secure Locking Assets"
                style={{
                  border: 'none',
                  boxShadow: 'none',
                  height: '200px',
                  width: '200px',
                }}
              />
              <img
                className="steel-master-img"
                src="https://mccoymart.com/post/wp-content/webp-express/webp-images/uploads/Europa.jpg.webp"
                alt="Europa Locking Assets"
                style={{
                  border: 'none',
                  boxShadow: 'none',
                  height: '200px',
                  width: '200px',
                }}
              />
              <div className="steel-hero-caption">
                Godrej and Europa Locks Collection
              </div>
              <div className="steel-hero-subcaption">
                Showroom inventory catalog comprising premium architectural door
                handles, high-security rim systems, and cylindrical knob sets.
              </div>
            </div>

            <div className="variants-title">Door Handle Locks</div>
            <div
              className="steel-gallery-grid"
              style={{ marginBottom: '7rem' }}
            >
              {[
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1513//6326%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1518//3537%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1587//9567%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1588//9537%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1589//9543%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1514//3541%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1510//7297%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1509//3253%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1502//7353%201.webp',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Godrej Locks',
                      img,
                      size: `Handle Set Mod-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Door Handle Lock"
                      />
                    </div>
                    <div className="steel-info-title">
                      Handle Lock Asset{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>

            <div className="variants-title">Main Door Rim Locks</div>
            <div
              className="steel-gallery-grid"
              style={{ marginBottom: '7rem' }}
            >
              {[
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1558//9145%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1580//6363%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1552//4454%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1583//6089%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//83/img/product/57/1424//3348%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1529//2554%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1532//4457%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1536//4456%201.webp',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Godrej Locks',
                      img,
                      size: `Rim System Rim-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Main Door Rim Lock"
                      />
                    </div>
                    <div className="steel-info-title">
                      Main Door Rim Asset{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>

            <div className="variants-title">Door Knob Locks</div>
            <div className="steel-gallery-grid">
              {[
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/59/1367//5837%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/58/1372//5808%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/58/1366//5328%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/58/1365//5809%20(1).webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/58/1527//5835%201.webp',
                'https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/58/1364//5806%20(1).webp',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Godrej Locks',
                      img,
                      size: `Cylindrical Knob-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Door Knob Lock"
                      />
                    </div>
                    <div className="steel-info-title">
                      Door Knob Asset{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="kitchen-fittings"
            className={`brand-catalog-group ${
              hardwareCategory === 'kitchen-fittings' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <div className="steel-hero-caption">
                Kitchen Cabinetry Handles & Profiles
              </div>
              <div className="steel-hero-subcaption">
                Refined modular layout pulling components including designer
                knobs and integrated continuous profile frameworks.
              </div>
            </div>
            <div className="variants-title">Kitchen Cabinet Pull Knobs</div>
            <div
              className="steel-gallery-grid"
              style={{ marginBottom: '7rem' }}
            >
              {[
                'https://liquid-blush-scxx3ctq.edgeone.app/Screenshot%202026-06-12%20091510.png',
                'https://reliable-plum-xvnxrbio.edgeone.app/Screenshot%202026-06-12%20091522.png',
                'https://local-amethyst-mdmuhmsk.edgeone.app/Screenshot%202026-06-12%20091535.png',
                'https://unexpected-magenta-hu5wlkuq.edgeone.app/Screenshot%202026-06-12%20091546.png',
                'https://novel-crimson-6xultuiy.edgeone.app/Screenshot%202026-06-12%20091644.png',
                'https://unique-teal-lc5dwsgx.edgeone.app/Screenshot%202026-06-12%20091627.png',
                'https://public-amber-at7frvui.edgeone.app/Screenshot%202026-06-12%20091614.png',
                'https://comfortable-brown-s7mvs4ba.edgeone.app/Screenshot%202026-06-12%20091601.png',
                'https://nice-harlequin-2jvfh9dm.edgeone.app/Screenshot%202026-06-12%20091655.png',
                'https://flat-gray-v1bgrges.edgeone.app/Screenshot%202026-06-12%20091708.png',
                'https://empty-silver-2vzyi8jm.edgeone.app/Screenshot%202026-06-12%20091721.png',
                'https://depressed-lime-nkljiaos.edgeone.app/Screenshot%202026-06-12%20091733.png',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Cabinet Hardware',
                      img,
                      size: `Hardware Pull KNB-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Cupboard Knob"
                      />
                    </div>
                    <div className="steel-info-title">
                      Cupboard Knob{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>

            <div className="variants-title">J-Pull & Profile Handles</div>
            <div className="steel-gallery-grid">
              {[
                'https://vocal-gold-cpmva23s.edgeone.app/ChatGPT%20Image%20May%2029,%202026,%2007_47_17%20PM.png',
                'https://steep-sapphire-55m1xatb.edgeone.app/ChatGPT%20Image%20May%2029,%202026,%2007_49_03%20PM.png',
                'https://horrible-azure-qf6uxgju.edgeone.app/ChatGPT%20Image%20May%2029,%202026,%2008_01_09%20PM.png',
                'https://insufficient-azure-yjyo34as.edgeone.app/ChatGPT%20Image%20May%2029,%202026,%2008_04_49%20PM.png',
                'https://nutritious-green-npozmmbh.edgeone.app/ChatGPT%20Image%20May%2029,%202026,%2008_03_06%20PM.png',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Profile Hardware',
                      img,
                      size: `Continuous J-Pull PRF-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="J-Pull Handle"
                      />
                    </div>
                    <div className="steel-info-title">
                      Profile Profile{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="door-kits"
            className={`brand-catalog-group ${
              hardwareCategory === 'door-kits' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <div className="steel-hero-caption">
                Premium Architecture Door Kit Sets
              </div>
              <div className="steel-hero-subcaption">
                Complete matching security door accessory setups composed of
                handle strips, tower bolts, and Aldrop indicators.
              </div>
            </div>
            <div className="variants-title">Door Hardware Kit Set Arrays</div>
            <div className="steel-gallery-grid">
              {[
                'https://images.meesho.com/images/products/524365178/0hic0_512.webp?width=512',
                'https://thoughtful-rose-zxsuhlnb.edgeone.app/ChatGPT%20Image%20May%2029,%202026,%2007_50_33%20PM.png',
                'https://cute-beige-rbmwuykj.edgeone.app/ChatGPT%20Image%20May%2029,%202026,%2007_52_27%20PM.png',
                'https://m.media-amazon.com/images/I/81YaaO9JHTL.jpg',
                'https://images.meesho.com/images/products/496185424/dmgxx_512.jpg',
                'https://m.media-amazon.com/images/I/91QeZXGr7oL._AC_UF350,350_QL80_.jpg',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Door Kits',
                      img,
                      size: `Hardware Config Kit-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Hardware Kit Set"
                      />
                    </div>
                    <div className="steel-info-title">
                      {i === 0 ? 'Antique Brass Set' : 'Hardware Kit Array'}{' '}
                      <span className="diameter-badge">
                        {i === 0 ? 'Main' : `Img {i + 1}`}
                      </span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="bathroom-fixtures"
            className={`brand-catalog-group ${
              hardwareCategory === 'bathroom-fixtures' ? 'active-group' : ''
            }`}
          >
            <div className="steel-hero-section">
              <div className="steel-hero-caption">
                Stainless Steel Bathroom Fixtures Suite
              </div>
              <div className="steel-hero-subcaption">
                Authorized non-corrosive luxury bathroom organization
                accessories built from high-grade polished steel configurations.
              </div>
            </div>
            <div className="variants-title">Stainless Steel Towel Racks</div>
            <div
              className="steel-gallery-grid"
              style={{ marginBottom: '7rem' }}
            >
              {[
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8Gcf5SuaVW3Vl15jv1PYRk6kHCDdLF8tx_Yf8oVhZg&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmp1PRLAlC1VCvUc500zEtCaiCVYfO-vT0HYpTgIMQ&s=10',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdyHjm4o6wEbcVUGjDZ3rWsIgR5QGceCD1hultAwOrg&s=10',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Bathroom Hardware',
                      img,
                      size: `SS Towel Rack TR-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Towel Rack"
                      />
                    </div>
                    <div className="steel-info-title">
                      Multi-Tier Towel Rack{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>

            <div className="variants-title">Towel Rods</div>
            <div
              className="steel-gallery-grid"
              style={{ marginBottom: '7rem' }}
            >
              {[
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdWf-QLvbW-Qt0M932egEhWQCvuwywtvau3qwcqPcrA&s=10',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_STUkETBjG5pDrd2qcc4q2QN31KMhEmzioGDxLRo2fw&s=10',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MlBJmsAnd3JWqnAkV66yV_DscWobTCKOtKqZiwKLcw&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouuPkkl_sB1n8RToIx3-5EDz5o9dCTBUT7xE9qEwNFQ&s',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Bathroom Hardware',
                      img,
                      size: `SS Towel Rod RD-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Towel Rod"
                      />
                    </div>
                    <div className="steel-info-title">
                      Linear Towel Rod{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>

            <div className="variants-title">Towel Rings</div>
            <div
              className="steel-gallery-grid"
              style={{ marginBottom: '7rem' }}
            >
              {[
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdudBdi2zc22MJfI93e23eMI4hsdGyqB2Rcm2M0KEFA&s=10',
                'https://www.cera-india.com/sites/default/files/F5001105-1.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLpWDmDvcXpCH7aUJ9dZdPVezqSdHSYiDlm5ONGQAl-GKlX-LVrzJThsq&s=10',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Bathroom Hardware',
                      img,
                      size: `Polished Towel Ring RNG-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Bathroom Towel Ring"
                      />
                    </div>
                    <div className="steel-info-title">
                      Bathroom Towel Ring{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>

            <div className="variants-title">Tumbler Holders</div>
            <div
              className="steel-gallery-grid"
              style={{ marginBottom: '7rem' }}
            >
              {[
                'https://lipkahome.com/cdn/shop/files/1_918aae73-ccd3-49bb-be4f-d4daa73e14f2.jpg?v=1707571903',
                'https://5.imimg.com/data5/SELLER/Default/2025/5/513288521/LC/PL/XB/53945508/tumbler-holder-fiamma-copy-250x250.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoao5oJLVWI1mnRmsRecV4HSJFsMVnQmm_mIeAt94HQ&s=10',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Bathroom Hardware',
                      img,
                      size: `Refined Tumbler Mount TMB-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Tumbler Holder"
                      />
                    </div>
                    <div className="steel-info-title">
                      Tumbler Holder{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>

            <div className="variants-title">Soap Dishes</div>
            <div className="steel-gallery-grid">
              {[
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7nqLgkvezxXYYYQGElN0mHbDbbwsx5FskQx1a0x27A&s=10',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6LIQPkpDlr0u5ZEck7Cm9XYOWJx3qbZT3Zf9TJw_eg&s=10',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMMqKl164B_wt77E7wz-QKrP3qnmzB0pNsKG2op6AaA&s=10',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhoytZT7xJD9hLKM_zBbW1lnugnP4j_3OS4jPXN9VnQ&s=10',
              ].map((img, i) => (
                <div
                  key={i}
                  className="steel-product-item"
                  onClick={() =>
                    openProductDetails({
                      brand: 'Bathroom Hardware',
                      img,
                      size: `Wall Mount Soap Dish DISH-${i + 1}`,
                    })
                  }
                >
                  <div>
                    <div className="steel-img-wrapper">
                      <img
                        className="steel-img-frame"
                        src={img}
                        alt="Soap Dish"
                      />
                    </div>
                    <div className="steel-info-title">
                      Wall Mount Soap Dish{' '}
                      <span className="diameter-badge">Img {i + 1}</span>
                    </div>
                  </div>
                  <div className="card-action-indicator">Inspect Asset ➔</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED MATERIAL SPECIFICATION PLATFORM */}
      <div
        id="detail-page"
        className={`spa-page ${
          activePage === 'detail-page' ? 'active-page' : ''
        }`}
      >
        <div className="steel-page-wrapper">
          <div className="back-nav-container">
            <button
              className="btn-back-link"
              id="dynamic-back-btn"
              title="Go Back"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          <div className="detail-grid-layout">
            <div className="detail-header-block">
              <span className="detail-brand-badge">{detailProduct.brand}</span>
              <h2>
                {detailProduct.brand}{' '}
                {detailProduct.size ? `— ${detailProduct.size}` : ''}
              </h2>
              <p className="detail-extended-desc">{detailProduct.desc}</p>
            </div>
            <div className="detail-gallery-hub">
              <div className="carousel-container">
                <button
                  className="carousel-btn prev"
                  onClick={() => changeSlide(-1)}
                  style={{ display: currentGallery.length ? 'flex' : 'none' }}
                >
                  ❮
                </button>
                <img
                  className="detail-main-render"
                  src={
                    currentGallery.length
                      ? currentGallery[currentSlideIndex].src
                      : detailProduct.imgUrl
                  }
                  alt="Matrix Projection Renderer"
                />
                <div
                  className="carousel-caption"
                  style={{ display: currentGallery.length ? 'block' : 'none' }}
                >
                  {currentGallery[currentSlideIndex]?.color}
                </div>
                <button
                  className="carousel-btn next"
                  onClick={() => changeSlide(1)}
                  style={{ display: currentGallery.length ? 'flex' : 'none' }}
                >
                  ❯
                </button>
              </div>
            </div>
            <div className="detail-info-hub">
              <h4
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  fontWeight: 600,
                }}
              >
                Metallurgical Blueprint Details
              </h4>
              <table className="spec-matrix-table">
                <tbody>
                  {detailProduct.brand && (
                    <tr>
                      <td className="label-cell">Brand</td>
                      <td className="value-cell">{detailProduct.brand}</td>
                    </tr>
                  )}
                  {detailProduct.grade && (
                    <tr>
                      <td className="label-cell">Grade / Formulation</td>
                      <td className="value-cell">{detailProduct.grade}</td>
                    </tr>
                  )}
                  {detailProduct.size && (
                    <tr>
                      <td className="label-cell">Diameter / Dimensions</td>
                      <td className="value-cell">{detailProduct.size}</td>
                    </tr>
                  )}
                  {detailProduct.linearWeight !== '0.00' && (
                    <tr>
                      <td className="label-cell">Linear Mass Metric</td>
                      <td className="value-cell">
                        {detailProduct.linearWeight} Kg/m
                      </td>
                    </tr>
                  )}
                  {detailProduct.length && (
                    <tr>
                      <td className="label-cell">Single Piece Length</td>
                      <td className="value-cell">{detailProduct.length}</td>
                    </tr>
                  )}
                  {detailProduct.usage && (
                    <tr>
                      <td className="label-cell">Usage / Application</td>
                      <td className="value-cell">{detailProduct.usage}</td>
                    </tr>
                  )}
                  {detailProduct.material && (
                    <tr>
                      <td className="label-cell">Material Composition</td>
                      <td className="value-cell">{detailProduct.material}</td>
                    </tr>
                  )}
                  {detailProduct.color && (
                    <tr>
                      <td className="label-cell">Color Index</td>
                      <td className="value-cell">{detailProduct.color}</td>
                    </tr>
                  )}
                  {detailProduct.availability && (
                    <tr>
                      <td className="label-cell">Stock Status</td>
                      <td className="value-cell">
                        {detailProduct.availability}
                      </td>
                    </tr>
                  )}
                  {detailProduct.extraAttributes.map((attr, key) => (
                    <tr key={key}>
                      <td className="label-cell">{attr.label}</td>
                      <td
                        className="value-cell"
                        dangerouslySetInnerHTML={{ __html: attr.value }}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="procurement-panel">
                <h4 className="procure-title">
                  Corporate Orders & Logistics Matrices
                </h4>
                <p className="procure-subtitle">
                  Connect instantly with our executive desk to establish
                  procurement agreements, commercial quotes, and fleet delivery
                  timelines.
                </p>
                <a href="tel:9849353559" className="btn-procure-call">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="phone-anim-icon"
                    style={{ marginRight: '10px' }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.61 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.18a2 2 0 0 1 2.11-.45c.84.28 1.71.49 2.6.61a2 2 0 0 1 1.66 2.01v3z" />
                  </svg>
                  Contact Us
                </a>
              </div>
              <img
                className="bottom-spec-img"
                src={detailProduct.bottomImg || ''}
                alt="All Colors Master List"
                style={{ display: detailProduct.bottomImg ? 'block' : 'none' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 6: CONTACT PORT CONTAINER */}
      <div
        id="contact-page"
        className={`spa-page ${
          activePage === 'contact-page' ? 'active-page' : ''
        }`}
      >
        <div className="steel-page-wrapper">
          <div className="back-nav-container">
            <button
              className="btn-back-link"
              onClick={() => navigateToPage('home-page')}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          <div className="contact-layout">
            <div className="contact-header-simple">
              <h2>Get in Touch</h2>
              <p>
                Send us a message and our team will get back to you promptly.
              </p>
            </div>
            <form
              action="https://formspree.io/f/xqevkzrq"
              method="POST"
              className="contact-form-ui"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="Last Name" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="Message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit-red">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER TERMINAL CONTAINER */}
      <footer id="footer-anchor">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              SREE RAMA STEELS<span>.</span>
            </div>
            <p className="footer-desc">
              Premium architectural supply solutions and corporate structural
              raw distribution networks.
            </p>
          </div>
          <div className="footer-col">
            <h4>Alliances</h4>
            <ul>
              <li>
                <a onClick={() => navigateToPage('home-page', 'alliances')}>
                  Tata Steel Systems
                </a>
              </li>
              <li>
                <a onClick={() => navigateToPage('home-page', 'alliances')}>
                  Jindal Infrastructure
                </a>
              </li>
              <li>
                <a style={{ cursor: 'default' }}>Calibrated Plywood Lab</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Corporate Details</h4>
            <ul>
              <li>
                <a style={{ cursor: 'default' }}>Technical Specifications</a>
              </li>
              <li>
                <a style={{ cursor: 'default' }}>Distribution Framework</a>
              </li>
              <li>
                <a style={{ cursor: 'default' }}>Structural Compliance</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>HQ Terminal</h4>
            <p>
              📍 Teachers Colony, Lakshmi Nagar, Auto Nagar, Kottapalle, Andhra
              Pradesh 516360
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              📞{' '}
              <a
                href="tel:9849353559"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                9849353559
              </a>
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Mail : sreeramasteels.pdtr@gmail.com
            </p>
            <a
              href="https://www.google.com/maps/place/Sree+Rama+Profiles,+Teachers+Colony,+Lakshmi+Nagar,+Auto+Nagar,+Kottapalle,+Andhra+Pradesh+516360/data=!4m2!3m1!1s0x3bb380aeeeee65b5:0x780cef97c90d69ab!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIyLjQYACCenQoqiwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc10GMsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwNzkyNTY4QgJJTg%3D%3D&skid=4d06efc7-9a4d-4dd4-a744-ce4082912579&g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-btn"
            >
              <img
                src="https://minor-sapphire-fz8hyhgd.edgeone.app/Screenshot%202026-06-12%20134731.png"
                width="200"
                height="200"
                alt="HQ Location Map Screenshot"
              />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 SREE RAMA STEELS Premium Structural Supplies. All rights
            reserved.
          </p>
          <p style={{ color: 'var(--accent-bronze)', fontWeight: 700 }}>
            DESIGN PROTOCOL: ARCHITECTURAL GALLERY 6.0
          </p>
          <p style={{ color: 'white', fontWeight: 700 }}>
            DESIGNED BY : Nikhilesh & Nirmal Kumar Reddy from Nxtwave of
            Innovation and Advanced Technologies
          </p>
        </div>
      </footer>

      {/* FLOAT LAYER FIXED OVERLAY SYSTEM */}
      <div className="floating-contact">
        <a
          href="https://api.whatsapp.com/send?phone=919849353559&text=Hello%20Sree%20Rama%20Steels,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.28-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.46-8.42zm-8.47 18.33h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.97 1-3.64-.24-.38a9.87 9.87 0 0 1-1.52-5.24c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.44 9.89-9.88 9.89zm5.42-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.66-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.24 5.13 4.54.72.31 1.29.5 1.73.64.73.23 1.39.2 1.92.12.59-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </a>
        <a
          href="tel:+919849353559"
          className="floating-btn call-btn"
          title="Call Now"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.61 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.18a2 2 0 0 1 2.11-.45c.84.28 1.71.49 2.6.61a2 2 0 0 1 1.66 2.01v3z" />
          </svg>
        </a>
      </div>
    </>
  );
}
