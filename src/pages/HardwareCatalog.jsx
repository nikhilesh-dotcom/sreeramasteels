import React, { useState } from 'react';

export default function HardwareCatalog({ setCurrentPage, handleSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('godrej-locks');

  const categories = {
    'godrej-locks': {
      title: "Door Handle Locks",
      items: [
        { brand: "Godrej Locks", size: "Universal Fit", desc: "Premium architectural secure handle lock system asset layer.", img: "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/56/1513//6326%20(1).webp", grade: "Premium Security", avail: "In Stock" },
        { brand: "Godrej Locks", size: "Rim Set Variant", desc: "High-security structural multi-alignment lock setup layout.", img: "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//112/img/product/57/1558//9145%201.webp", grade: "Heavy Security", avail: "In Stock" }
      ]
    },
    'kitchen-fittings': {
      title: "Kitchen Cabinet Pull Knobs",
      items: [
        { brand: "Cabinet Hardware", size: "Standard Profile", desc: "Refined modular layout luxury pull knobs matching high cabinet metrics.", img: "https://liquid-blush-scxx3ctq.edgeone.app/Screenshot%202026-06-12%20091510.png", grade: "Stainless Steel", avail: "In Stock" }
      ]
    },
    'door-kits': {
      title: "Door Hardware Kit Set Arrays",
      items: [
        { brand: "Door Kits", size: "Antique Set", desc: "Complete architectural matching security door accessories sets.", img: "https://images.meesho.com/images/products/524365178/0hic0_512.webp?width=512", grade: "Antique Brass", avail: "In Stock" }
      ]
    },
    'bathroom-fixtures': {
      title: "Stainless Steel Towel Racks",
      items: [
        { brand: "Bathroom Hardware", size: "Multi-Tier", desc: "Authorized non-corrosive luxury bathroom organization accessories structures.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8Gcf5SuaVW3Vl15jv1PYRk6kHCDdLF8tx_Yf8oVhZg&s", grade: "SS 304 Polished", avail: "In Stock" }
      ]
    }
  };

  const activeGroup = categories[activeCategory];

  return (
    <div className="steel-page-wrapper" style={{ maxWidth: '1560px', margin: '5rem auto 12rem', padding: '0 3rem' }}>
      <div className="back-nav-container" style={{ marginBottom: '5rem' }}>
        <button className="btn-back-link" onClick={() => setCurrentPage({ id: 'home-page', anchor: 'portfolio' })}>←</button>
      </div>

      <div className="brand-tab-bar" style={{ position: 'sticky', top: '86px', zIndex: 150, background: 'rgba(250,249,245,0.95)', display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--border-crisp)' }}>
        <button className={`brand-tab ${activeCategory === 'godrej-locks' ? 'active-tab' : ''}`} onClick={() => setActiveCategory('godrej-locks')}>Locks & Core Assets</button>
        <button className={`brand-tab ${activeCategory === 'kitchen-fittings' ? 'active-tab' : ''}`} onClick={() => setActiveCategory('kitchen-fittings')}>Kitchen Architecture</button>
        <button className={`brand-tab ${activeCategory === 'door-kits' ? 'active-tab' : ''}`} onClick={() => setActiveCategory('door-kits')}>Premium Door Kits</button>
        <button className={`brand-tab ${activeCategory === 'bathroom-fixtures' ? 'active-tab' : ''}`} onClick={() => setActiveCategory('bathroom-fixtures')}>SS Bathroom Suites</button>
      </div>

      <div className="brand-catalog-group active-group" style={{ animation: 'galleryEntrance 0.6s ease forwards' }}>
        <div className="variants-title" style={{ fontSize: '2rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>{activeGroup.title}</div>

        <div className="steel-gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
          {activeGroup.items.map((item, index) => (
            <div key={index} className="steel-product-item" onClick={() => handleSelectProduct(item, 'hardware-page')} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
              <div>
                <div className="steel-img-wrapper" style={{ height: '260px', overflow: 'hidden', marginBottom: '2rem' }}>
                  <img className="steel-img-frame" src={item.img} alt={item.size} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="steel-info-title" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{item.brand}</div>
                <p className="steel-info-desc" style={{ color: 'var(--text-slate)', fontSize: '0.9rem', marginTop: '1rem' }}>{item.desc}</p>
              </div>
              <div className="card-action-indicator" style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>Inspect Asset →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}