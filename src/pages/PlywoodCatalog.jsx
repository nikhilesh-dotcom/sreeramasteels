import React, { useState } from 'react';

export default function PlywoodCatalog({ setCurrentPage, handleSelectProduct }) {
  const [activeBrand, setActiveBrand] = useState('birla-pivot');

  const plywoods = {
    'birla-pivot': {
      banner: "https://5.imimg.com/data5/SELLER/Default/2023/12/371189682/SW/OD/DP/26934187/birla-pivot-gold-303-mr-grade-plywood.jpg",
      title: "Birla Pivot Configuration Matrix",
      items: [
        { brand: "Birla Pivot", size: "8x4 ft", desc: "Premium BWP Grade Gurjan core plywood with Eucalyptus wood type, offering 21 years of warranty for high-end furniture applications.", img: "https://5.imimg.com/data5/SELLER/Default/2023/12/371189682/SW/OD/DP/26934187/birla-pivot-gold-303-mr-grade-plywood.jpg", grade: "BWP Grade", weight: "0.00", length: "8 ft", usage: "Furniture", material: "Gurjan Core / Eucalyptus Wood", color: "Natural Wood", avail: "In Stock", "data-extra-warranty": "21 Years" }
      ]
    },
    'century-ply': {
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9jjNCAUvT3vlfBRrv9L0_Ao3nD2W5Wf9s2EjLq49xw&s",
      title: "Century Ply Configuration Matrix",
      items: [
        { brand: "Century Ply", size: "Thickness: 4mm - 25mm", desc: "Premium BWP marine-grade plywood passing 25 stringent BIS tests. Features Firewall & ViroKill Technology.", img: "https://www.centuryply.com/uploads/Club_Prime_Plywood_72_mm_200224_26a1f84bff.jpg", grade: "BWP Marine Grade (Premium)", weight: "0.00", length: "Standard Grid Sizes", usage: "Safe Architectural Spaces", material: "Premium Dynamic Timber Strata", color: "Virokill Protected Timber", avail: "In Stock", "data-extra-warranty": "30 Years Warranty" },
        { brand: "Century Ply", size: "Thickness: 4mm - 25mm", desc: "Safety-first layout composite engineered to guard against fire, moisture, and micro-organisms.", img: "https://www.centuryply.com/uploads/21year_new_47d62f77c9.webp", grade: "BWP Grade (Premium Economy)", weight: "0.00", length: "Standard Grid Sizes", usage: "Commercial Interiors", material: "Aqua Armour Balanced Core", color: "Shield Coated Core Wood", avail: "In Stock" },
        { brand: "Century Ply", size: "Thickness: 4mm - 25mm", desc: "The definitive uniform price solution delivering high-tier compliance under IS 303 BWP rules.", img: "https://www.centuryply.com/uploads/Sainik_710_Plywood_Facelift_72_mm_280325_f2a82393a1.jpg", grade: "IS 303 BWP (Affordable Grade)", weight: "0.00", length: "Standard Grid Sizes", usage: "General Frameworks", material: "Asli Waterproof Engineered Core", color: "Natural Calibrated Timber", avail: "In Stock" },
        { brand: "Century Ply", size: "Thickness: 4mm - 18mm", desc: "Highly stable, swell-proof, and weather-resistant moisture shield ply from the house of CenturyPly.", img: "https://www.centuryply.com/uploads/Sainik_MR_Plywood_Facelift_16_09_21_c916adba77.jpg", grade: "MR Moisture Resistant (Affordable)", weight: "0.00", length: "Standard Grid Sizes", usage: "Interior Accents", material: "Borer & Termite Proof Shield Strata", color: "Moisture Protected Core", avail: "In Stock" }
      ]
    },
    'green-ply': {
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeVln0k6kxQ0IhFsChR_dosbZ4OX_nGZm6TDN2BvnlA&s",
      title: "Greenply Configuration Matrix",
      items: [
        { brand: "Greenply", size: "8x4 ft", desc: "Premium structural asset built from high-density Gurjan hardwood layers. Calibrated A-Grade formulation.", img: "https://5.imimg.com/data5/SELLER/Default/2023/5/309280672/UK/FQ/WM/3771233/greenply-gurjan-green-gold-710-bwp-plywoods-1000x1000.jpg", grade: "A Grade BWP", weight: "0.00", length: "8 ft", usage: "Kitchen & Door Assembly", material: "100% Gurjan Hardwood Core", color: "Brown", avail: "In Stock" },
        { brand: "Greenply", size: "2440x1220mm (8x4 ft)", desc: "Top tier architectural asset built under rigorous IS:5509 metrics. Formulated with a 100% composed dense hardwood core.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7GTpW4b9Y140jAP0KXTvuskyM_-5tWpkreffnh1ysg&s=10", grade: "BWP Marine (IS:5509)", weight: "0.00", length: "8 ft", usage: "High-Stress Layouts", material: "100% Composed Hardwood Core", color: "BWP Treated Dark Timber", avail: "In Stock" }
      ]
    },
    'gurjan-ply': {
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapfd6LfvqUBt5ZpvTp3PJliyhGMeAjbDfSWw2ytagVQ&s",
      title: "Gurjan Configuration Matrix",
      items: [
        { brand: "Gurjan Plywood", size: "Industry Standard (8x4 ft)", desc: "Bespoke high-density interlocking plywood panel constructed via layered solid logging from premium Gurjan wood.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapfd6LfvqUBt5ZpvTp3PJliyhGMeAjbDfSWw2ytagVQ&s", grade: "Elite A-Class Core", weight: "0.00", length: "8 ft", usage: "Heavy Frameworks", material: "100% Authentic Gurjan Timber Strata", color: "Deep Natural Timber Brown", avail: "In Stock" }
      ]
    }
  };

  const selectedGroup = plywoods[activeBrand];

  return (
    <div className="steel-page-wrapper" style={{ maxWidth: '1560px', margin: '5rem auto 12rem', padding: '0 3rem' }}>
      <div className="back-nav-container" style={{ marginBottom: '5rem' }}>
        <button className="btn-back-link" onClick={() => setCurrentPage({ id: 'home-page', anchor: 'portfolio' })}>←</button>
      </div>

      <div className="brand-tab-bar" style={{ position: 'sticky', top: '86px', zIndex: 150, background: 'rgba(250,249,245,0.95)', display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--border-crisp)' }}>
        <button className={`brand-tab ${activeBrand === 'birla-pivot' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('birla-pivot')}>Birla Pivot</button>
        <button className={`brand-tab ${activeBrand === 'century-ply' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('century-ply')}>Century Ply</button>
        <button className={`brand-tab ${activeBrand === 'green-ply' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('green-ply')}>Greenply</button>
        <button className={`brand-tab ${activeBrand === 'gurjan-ply' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('gurjan-ply')}>Gurjan Plywood</button>
      </div>

      <div className="brand-catalog-group active-group" style={{ animation: 'galleryEntrance 0.6s ease forwards' }}>
        <div className="steel-hero-section" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '6rem 4rem', textAlign: 'center', marginBottom: '7rem' }}>
          <img className="steel-master-img" src={selectedGroup.banner} alt="Plywood Standard" style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }} />
          <div className="steel-hero-caption" style={{ marginTop: '3.5rem', fontSize: '2rem', textTransform: 'uppercase' }}>Premium Wood Calibration Standard</div>
          <div className="steel-hero-subcaption" style={{ color: 'var(--text-slate)', marginTop: '1rem' }}>Boiling Water Proof dynamic architectures.</div>
        </div>

        <div className="variants-title" style={{ fontSize: '2rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>{selectedGroup.title}</div>

        <div className="steel-gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
          {selectedGroup.items.map((item, index) => (
            <div key={index} className="steel-product-item" onClick={() => handleSelectProduct(item, 'plywood-page')} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
              <div>
                <div className="steel-img-wrapper" style={{ height: '260px', overflow: 'hidden', marginBottom: '2rem' }}>
                  <img className="steel-img-frame" src={item.img} alt={item.size} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="steel-info-title" style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.brand} <span className="diameter-badge" style={{ fontSize: '0.7rem', background: 'var(--bg-structural)', padding: '6px 16px' }}>{item.grade.split(' ')[0]}</span>
                </div>
                <p className="steel-info-desc" style={{ color: 'var(--text-slate)', fontSize: '0.9rem', marginTop: '1rem' }}>{item.desc}</p>
              </div>
              <div className="card-action-indicator" style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>Analyze Wood →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}