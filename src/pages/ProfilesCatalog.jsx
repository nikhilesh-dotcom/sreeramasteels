import React, { useState } from 'react';

export default function ProfilesCatalog({ setCurrentPage, handleSelectProduct }) {
  const [category, setCategory] = useState('heavy-sections');

  const profileData = {
    'heavy-sections': {
      banner: "https://tiimg.tistatic.com/fp/1/007/021/mild-steel-i-beam-470.jpg",
      title: "Industrial Section Configuration Matrix",
      items: [
        { brand: "Industrial Profiles", size: "Rectangular Profile", desc: "Premium galvanized rectangle flat iron pipe for structural frameworks. Built for heavy foundational grids.", img: "https://5.imimg.com/data5/SELLER/Default/2024/6/428094550/FX/ZO/BE/10340442/apl-apollo-gi-pipes.jpg", grade: "Structural Grade", weight: "0.00", length: "6 Meter", usage: "Construction", material: "Iron", color: "Metallic", avail: "In Stock", "data-extra-size-40x20mm": "Wall: 1.2mm - 3.0mm", "data-extra-size-300x200mm": "Wall: 4.0mm - 10.0mm" },
        { brand: "Industrial Profiles", size: "Square Profile", desc: "Mill finished galvanized square iron pipe for rigid structural applications. Ensures consistent stability.", img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/rectangle-black-ms-square-pipe-20260123145235191.webp", grade: "Structural Grade", weight: "0.00", length: "6 m", usage: "Structural Framing", material: "Galvanized Iron", color: "Black/Metallic", avail: "In Stock", "data-extra-heavy-duty": "80x80mm to 250x250mm" },
        { brand: "Industrial Profiles", size: "L Angle Profile", desc: "Polished mild steel L angles for edge protection and framework reinforcement. Calibrated to handle edge stresses.", img: "https://tiimg.tistatic.com/fp/2/009/801/iron-angle-493.jpg", grade: "Structural Grade", weight: "0.00", length: "12 Meter", usage: "Construction", material: "Mild Steel", color: "Metallic", avail: "In Stock" },
        { brand: "Industrial Profiles", size: "C Channel Profile", desc: "Hot rolled industrial C channels for foundational support framing. Non-corrosion resistant core.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFaYCwteKmFN0JjyvXCDO0y7qZHanXYa6FC4rsJPrQg&s=10", grade: "Structural Grade", weight: "0.00", length: "6 Meter", usage: "Industrial", material: "Iron", color: "Metallic", avail: "In Stock" },
        { brand: "SAIL", size: "I-Beam Profile", desc: "SAIL manufactured mild steel I-beams for optimal load-bearing capabilities. Built for structural integrity.", img: "https://tiimg.tistatic.com/fp/1/009/603/iron-beams-044.jpg", grade: "Structural Grade", weight: "0.00", length: "Standard", usage: "Construction", material: "Mild Steel", color: "Metallic", avail: "In Stock" },
        { brand: "Industrial Profiles", size: "H-Beam Profile", desc: "Heavy-duty custom steel H-beams for major structural architecture. Versatile usage across foundational lines.", img: "https://cpimg.tistatic.com/06925372/b/4/Iron-Steel-H-Beam.jpg", grade: "Structural Grade", weight: "0.00", length: "Customized", usage: "Construction", material: "Steel", color: "Metallic", avail: "In Stock" }
      ]
    },
    'roofing-sheets': {
      banner: "https://5.imimg.com/data5/SELLER/Default/2025/8/533702368/QR/BF/BE/42460873/tata-metal-roofing-sheet-250x250.png",
      title: "Premium Sheet & Coating Matrix",
      items: [
        { brand: "TATA Prisma Bluescope", size: "0.60mm", desc: "High Strength (550 MPa) roofing sheet with superior Al-Zn corrosion resistance and thermal efficiency.", img: "https://5.imimg.com/data5/SELLER/Default/2025/8/533702368/QR/BF/BE/42460873/tata-metal-roofing-sheet-250x250.png", gallery: '[{"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IoHhSwp4qKdCx7usDY3OyKabVhs-nBGOF7QnQEP-yRDfAfGSiLLXRwQ&s=10", "color":"Cloud White"}, {"src":"https://5.imimg.com/data5/SELLER/Default/2026/3/591891807/YD/YP/JU/35635770/tata-bluescope-prisma-roofing-sheet-1000x1000.png", "color":"Brick Red"}]', grade: "AZ150", weight: "0.00", length: "10 Ft", usage: "Roofing", material: "Al-Zn Alloy Coated Steel", color: "Multiple Options", avail: "In Stock" },
        { brand: "JSW", size: "0.50 mm", desc: "High-quality, Zinc alloy coated, pre-painted roofing sheet with anti-corrosion technology.", img: "https://5.imimg.com/data5/SELLER/Default/2025/12/565825498/KZ/BS/YQ/14392898/jsw-pragati-roofing-sheets-500x500.png", grade: "Structural Grade", weight: "0.00", length: "8 Ft", usage: "For roofing", material: "Aluminium", color: "Multiple Options", avail: "In Stock" },
        { brand: "JSW Colouron", size: "0.50 mm", desc: "High stability color-coated elite architectural assets targeting custom span builds.", img: "https://5.imimg.com/data5/SELLER/Default/2026/4/597490038/WX/WI/NR/2094803/jsw-colour-coated-sheet-az-70-0-80-mm-thickness.jpeg", bottomImg: "https://5.imimg.com/data5/SELLER/Default/2023/10/356794833/FW/UW/LQ/64822997/jsw-colouron-plus-colour-coating-sheet-500x500.jpg", grade: "Structural Grade", weight: "0.00", length: "Variable", usage: "Roofing", material: "AZ", color: "All Available Colors", avail: "In Stock" },
        { brand: "JSW Indhradhanush", size: "0.45 mm", desc: "Premium PPGL color-coated trapezoidal profiles designed for reliable longevity panels.", img: "https://5.imimg.com/data5/SELLER/Default/2025/11/564136980/BB/JE/TW/184710678/jsw-indradhanush-az-70-ppgl-color-coated-coil.jpg", grade: "AZ150", weight: "0.00", length: "Variable", usage: "Industrial", material: "PPGL Coated Steel", color: "Blue", avail: "In Stock" },
        { brand: "Jindal Sabrang", size: "0.16 mm - 1.0 mm", desc: "ISI marked color-coated wavy sheets offering exceptional weather proofing and corrosion resistance.", img: "https://5.imimg.com/data5/LA/SU/NE/SELLER-85044603/jindal-sabrang-isi-roofing-sheet.jpg", grade: "Structural Grade", weight: "0.00", length: "12 ft", usage: "Roofing", material: "Aluminium", color: "Multiple Options", avail: "In Stock" },
        { brand: "AMNS INDIA", size: "0.50 mm", desc: "Bespoke high-tensile multi-alloy decorative and defensive profile layers.", img: "https://5.imimg.com/data5/SELLER/Default/2023/10/352948111/BO/PA/FO/159984074/color-profile-sheet-amns-india.jpeg", grade: "A-Z GSM", weight: "0.00", length: "8, 10, 12 ft", usage: "Residential & Commercial", material: "Galvanized Steel", color: "All Available Colors", avail: "In Stock" },
        { brand: "CR Sheets", size: "0.5 - 5 mm", desc: "Precision core flat structural metal layers with high surface finish metrics.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6wmyYUyHe56-1o66YybUQin6qk3T7wdQhA&s", grade: "CRCA", weight: "0.00", length: "Custom", usage: "Construction", material: "Steel", color: "Metallic", avail: "In Stock" },
        { brand: "HR Sheets", size: "Variable", desc: "Heavy duty structural steel infrastructure plates built for extreme frame loading.", img: "https://trivenisteel.com/wp-content/uploads/2023/05/HRHot-Rolledplates2.png", grade: "Structural Grade", weight: "0.00", length: "Custom", usage: "Industrial", material: "Mild Steel", color: "Metallic", avail: "In Stock" }
      ]
    }
  };

  const currentCategory = profileData[category];

  return (
    <div className="steel-page-wrapper" style={{ maxWidth: '1560px', margin: '5rem auto 12rem', padding: '0 3rem' }}>
      <div className="back-nav-container" style={{ marginBottom: '5rem' }}>
        <button className="btn-back-link" onClick={() => setCurrentPage({ id: 'home-page', anchor: 'portfolio' })}>←</button>
      </div>

      <div className="brand-tab-bar" style={{ position: 'sticky', top: '86px', zIndex: 150, background: 'rgba(250,249,245,0.95)', display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--border-crisp)' }}>
        <button className={`brand-tab ${category === 'heavy-sections' ? 'active-tab' : ''}`} onClick={() => setCategory('heavy-sections')}>Beams & Channels</button>
        <button className={`brand-tab ${category === 'roofing-sheets' ? 'active-tab' : ''}`} onClick={() => setCategory('roofing-sheets')}>Roofing & Panel Sheets</button>
      </div>

      <div className="brand-catalog-group active-group" style={{ animation: 'galleryEntrance 0.6s ease forwards' }}>
        <div className="steel-hero-section" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '6rem 4rem', textAlign: 'center', marginBottom: '7rem' }}>
          <img className="steel-master-img" src={currentCategory.banner} alt="Profile Master" style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }} />
          <div className="steel-hero-caption" style={{ marginTop: '3.5rem', fontSize: '2rem', textTransform: 'uppercase' }}>Master Profile Calibration Standard</div>
          <div className="steel-hero-subcaption" style={{ color: 'var(--text-slate)', marginTop: '1rem' }}>Official architectural metrics parameters.</div>
        </div>

        <div className="variants-title" style={{ fontSize: '2rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>{currentCategory.title}</div>

        <div className="steel-gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
          {currentCategory.items.map((item, index) => (
            <div key={index} className="steel-product-item" onClick={() => handleSelectProduct(item, 'profiles-page')} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
              <div>
                <div className="steel-img-wrapper" style={{ height: '260px', overflow: 'hidden', marginBottom: '2rem' }}>
                  <img className="steel-img-frame" src={item.img} alt={item.size} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="steel-info-title" style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{item.size}</div>
                <p className="steel-info-desc" style={{ color: 'var(--text-slate)', fontSize: '0.9rem', marginTop: '1rem' }}>{item.desc}</p>
              </div>
              <div className="card-action-indicator" style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>Analyze Profile →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}