import React, { useState } from 'react';

export default function SteelCatalog({ setCurrentPage, handleSelectProduct }) {
  const [activeBrand, setActiveBrand] = useState('tata-tiscon');

  const products = {
    'tata-tiscon': {
      banner: "https://steeloncall.com/media/post/image/t/a/tata_tiscon_rod_weight_chart_for_reliable_construction.png",
      title: "Tata Tiscon Configuration Matrix",
      items: [
        { brand: "Tata Tiscon", size: "6 mm", desc: "India's first GreenPro-certified high-tensile reinforcement rebar with superior load limits.", img: "https://5.imimg.com/data5/SELLER/Default/2024/2/390263054/UF/YG/IB/2819014/download-1-500x500.jpg", grade: "Fe 550SD", weight: "0.222", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tata Tiscon", size: "8 mm", desc: "Standard high ductile structural bar ideal for residential slabs and columns.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kpDHEX0XMz5T1s6pR4favH82haSt_HSY_4rVpbqr2Q&s=10", grade: "Fe 550SD", weight: "0.395", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tata Tiscon", size: "10 mm", desc: "Optimized tensile metric load bearing bars for robust foundational matrices.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_SCzj8onyEWPC2S_Ubga5dg1Mv6FjFXnKUOjRtiMLw&s=10", grade: "Fe 550SD", weight: "0.617", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tata Tiscon", size: "12 mm", desc: "Heavy infrastructure standard structural configuration element.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8aMUbH6W1b02o4hAYQebOpHh2lIdt2DP6m6-8kSnRw&s=10", grade: "Fe 550SD", weight: "0.888", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tata Tiscon", size: "16 mm", desc: "High-scale structural reinforcement profiles specialized for high-rise frames.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeygNWHq8qK50qwclCD0umxw1dMZbBLCqgoHk-EjV-Cg&s=10", grade: "Fe 550SD", weight: "1.580", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tata Tiscon", size: "20 mm", desc: "Industrial density metallurgy built for commercial foundations and bridges.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDz2o_j_7UPc6JdYD4VxA2glSBY5tomhpepJYtFJFgg&s=10", grade: "Fe 550SD", weight: "2.470", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tata Tiscon", size: "25 mm", desc: "Maximum diameter solid structural support bars for critical load metrics.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLDW6R5BlK95DurXWbAoNmN9HYEIY1h675sJwuKNsmQ&s=10", grade: "Fe 550SD", weight: "3.850", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" }
      ]
    },
    'jindal-tmt': {
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIJ-x0uGTXDSKfzsmZUOiiY4hCtERhKOb9A&s",
      title: "Jindal TMT 550 Matrix",
      items: [
        { brand: "Jindal TMT", size: "6 mm", desc: "Precision core rebar grids re-engineered with premium structural load boundaries.", img: "https://5.imimg.com/data5/SELLER/Default/2025/4/500625635/YY/VX/UW/242817111/jindal-6mm-tmt-bars-500x500.jpg", grade: "Fe 550D", weight: "0.222", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Jindal TMT", size: "8 mm", desc: "High yield seismic-resistant core formulation for premium reinforcement grids.", img: "https://5.imimg.com/data5/SELLER/Default/2023/10/351449077/ZF/GU/ZK/25285473/tmt-bar-8mm-500x500.jpg", grade: "Fe 550D", weight: "0.395", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Jindal TMT", size: "10 mm", desc: "Premium commercial grade engineering bars targeting dynamic load absorption.", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/434988368/PI/NP/UM/88395558/tmt-steel-rod-500x500.jpg", grade: "Fe 550D", weight: "0.617", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Jindal TMT", size: "12 mm", desc: "Elite specification layout profiles built for institutional architectural projects.", img: "https://tiimg.tistatic.com/fp/1/008/272/12-meter-long-hot-rolled-round-iron-jindal-tmt-bars-665.jpg", grade: "Fe 550D", weight: "0.888", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Jindal TMT", size: "16 mm", desc: "Heavy duty standard profiles for maximum stability execution across spans.", img: "https://5.imimg.com/data5/SELLER/Default/2024/10/459618886/HG/WR/WT/65454603/jindal-550d-tmt.jpeg", grade: "Fe 550D", weight: "1.580", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Jindal TMT", size: "20 mm", desc: "Industrial density metallurgy optimized for high load span foundational tasks.", img: "https://5.imimg.com/data5/SELLER/Default/2026/1/575505165/SQ/XU/JN/117755733/20mm-jindal-tmt-bars.jpeg", grade: "Fe 550D", weight: "2.470", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Jindal TMT", size: "25 mm", desc: "Maximum thickness high stability rebar structures for ultimate framework support.", img: "https://images.jdmagicbox.com/quickquotes/images_main/jindal-tmt-bars-25mm-grade-fe550d-2220079297-zwdto1f2.jpg", grade: "Fe 550D", weight: "3.850", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" }
      ]
    },
    'tirupati-tmt': {
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26ul49bj9-5txZ1lCowK77HHiCtkRS0RJAkdvJWDUvQ&s=10",
      title: "Tirupati TMT 550 Configuration Matrix",
      items: [
        { brand: "Tirupati TMT", size: "6 mm", desc: "Precision core thin reinforcement lines designed for standard light load framing structures.", img: "https://builders9.com/wp-content/uploads/2020/12/b9-tmt-steel-1-315x315.jpg", grade: "Fe 550D", weight: "0.222", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tirupati TMT", size: "8 mm", desc: "High ductility structural elements ideal for standard home slabs and residential columns.", img: "https://5.imimg.com/data5/ANDROID/Default/2023/12/372202359/ZT/FF/LK/4623060/product-jpeg.jpg", grade: "Fe 550D", weight: "0.395", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tirupati TMT", size: "10 mm", desc: "Optimized tensile metric engineering bars built for custom foundational grid systems.", img: "https://5.imimg.com/data5/SELLER/Default/2023/11/363778161/VC/FR/PA/128698711/safeimagekit-resized-img-40-500x500.png", grade: "Fe 550D", weight: "0.617", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tirupati TMT", size: "12 mm", desc: "Heavy corporate infrastructure standard structural reinforcement rebar elements.", img: "https://5.imimg.com/data5/SELLER/Default/2024/11/467783746/UW/NC/RC/232660919/tirupati-tmt-550-12mm-500x500.jpg", grade: "Fe 550D", weight: "0.888", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tirupati TMT", size: "16 mm", desc: "High capacity load distribution segments built for premium heavy load columns.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNXixaWTUZG4gOhm_QM0sAXrZu-UYah9XeA&s", grade: "Fe 550D", weight: "1.580", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tirupati TMT", size: "20 mm", desc: "Industrial density metallurgy built for commercial complexes and wide bridge designs.", img: "https://5.imimg.com/data5/SELLER/Default/2023/11/363778161/VC/FR/PA/128698711/safeimagekit-resized-img-40.png", grade: "Fe 550D", weight: "2.470", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Tirupati TMT", size: "25 mm", desc: "Maximum thickness elite composition segments for multi-tier critical frameworks.", img: "https://5.imimg.com/data5/SELLER/Default/2024/11/467783104/VP/PI/VI/232660919/tirupati-tmt-550-25mm.jpg", grade: "Fe 550D", weight: "3.850", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" }
      ]
    },
    'rajaram-tmt': {
      banner: "https://5.imimg.com/data5/SELLER/Default/2023/7/322375128/UC/FM/QA/34225028/rajaram-tmt-bars.jpeg",
      title: "Raja Ram TMT 550D Matrix",
      items: [
        { brand: "Raja Ram", size: "6 mm", desc: "Precision core thin reinforcement lines designed for standard light load framing structures.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkbBQrmpwDiPyZ239fseMs5cD7fm2VOqKCg&s", grade: "Fe 550D", weight: "0.222", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Raja Ram", size: "8 mm", desc: "High ductility structural elements ideal for standard home slabs and residential columns.", img: "https://5.imimg.com/data5/SELLER/Default/2023/12/368161630/JU/JC/XE/128698711/rajaram-tmt-550-8mm-1000x1000.jpg", grade: "Fe 550D", weight: "0.395", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Raja Ram", size: "10 mm", desc: "Optimized tensile metric engineering bars built for custom foundational grid systems.", img: "https://5.imimg.com/data5/SELLER/Default/2025/3/495620524/RK/KO/JF/195803700/vizag-steel-tmt-bar-250x250.jpg", grade: "Fe 550D", weight: "0.617", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Raja Ram", size: "12 mm", desc: "Heavy corporate infrastructure standard structural reinforcement rebar elements.", img: "https://5.imimg.com/data5/SELLER/Default/2024/12/476249879/KD/XQ/AS/195803700/12mm-tmt-bars-500x500.jpg", grade: "Fe 550D", weight: "0.888", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Raja Ram", size: "16 mm", desc: "High capacity load distribution segments built for premium heavy load columns.", img: "https://5.imimg.com/data5/SELLER/Default/2025/1/484066090/WT/LB/UC/133839256/vizag-steel-tmt-bar-250x250.jpg", grade: "Fe 550D", weight: "1.580", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Raja Ram", size: "20 mm", desc: "Industrial density metallurgy built for commercial complexes and wide bridge designs.", img: "https://5.imimg.com/data5/SELLER/Default/2024/1/376869806/RU/GU/IH/137229102/20mm-tirupati-tmt-bars-250x250.jpg", grade: "Fe 550D", weight: "2.470", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" },
        { brand: "Raja Ram", size: "25 mm", desc: "Maximum thickness elite composition segments for multi-tier critical frameworks.", img: "https://5.imimg.com/data5/SELLER/Default/2024/11/467324038/ZO/DU/RF/236066952/25mm-mild-steel-tmt-bars-250x250.jpg", grade: "Fe 550D", weight: "3.850", length: "12 meter", usage: "Building Construction", material: "Mild Steel", color: "Black", avail: "In Stock" }
      ]
    }
  };

  const selectedGroup = products[activeBrand];

  return (
    <div className="steel-page-wrapper" style={{ maxWidth: '1560px', margin: '5rem auto 12rem', padding: '0 3rem' }}>
      <div className="back-nav-container" style={{ marginBottom: '5rem' }}>
        <button className="btn-back-link" onClick={() => setCurrentPage({ id: 'home-page', anchor: 'portfolio' })}>←</button>
      </div>

      <div className="brand-tab-bar" style={{ position: 'sticky', top: '86px', zIndex: 150, background: 'rgba(250,249,245,0.95)', display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--border-crisp)' }}>
        <button className={`brand-tab ${activeBrand === 'tata-tiscon' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('tata-tiscon')}>Tata Tiscon 550SD</button>
        <button className={`brand-tab ${activeBrand === 'jindal-tmt' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('jindal-tmt')}>Jindal TMT 550</button>
        <button className={`brand-tab ${activeBrand === 'tirupati-tmt' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('tirupati-tmt')}>Tirupati TMT 550</button>
        <button className={`brand-tab ${activeBrand === 'rajaram-tmt' ? 'active-tab' : ''}`} onClick={() => setActiveBrand('rajaram-tmt')}>Raja Ram TMT 550D</button>
      </div>

      <div className="brand-catalog-group active-group" style={{ animation: 'galleryEntrance 0.6s ease forwards' }}>
        <div className="steel-hero-section" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '6rem 4rem', textAlign: 'center', marginBottom: '7rem' }}>
          <img className="steel-master-img" src={selectedGroup.banner} alt="Reference Standard" style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }} />
          <div className="steel-hero-caption" style={{ marginTop: '3.5rem', fontSize: '2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Master Calibration Standard</div>
          <div className="steel-hero-subcaption" style={{ color: 'var(--text-slate)', marginTop: '1rem' }}>Official engineering specifications and metrics.</div>
        </div>

        <div className="variants-title" style={{ fontSize: '2rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>{selectedGroup.title}</div>
        
        <div className="steel-gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
          {selectedGroup.items.map((item, index) => (
            <div key={index} className="steel-product-item" onClick={() => handleSelectProduct(item, 'steel-page')} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
              <div>
                <div className="steel-img-wrapper" style={{ height: '260px', overflow: 'hidden', marginBottom: '2rem' }}>
                  <img className="steel-img-frame" src={item.img} alt={item.size} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="steel-info-title" style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.brand} <span className="diameter-badge" style={{ fontSize: '0.7rem', background: 'var(--bg-structural)', padding: '6px 16px' }}>{item.size}</span>
                </div>
                <p className="steel-info-desc" style={{ color: 'var(--text-slate)', fontSize: '0.9rem', marginTop: '1rem' }}>{item.desc}</p>
              </div>
              <div className="card-action-indicator" style={{ color: 'var(--accent-bronze)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>Analyze Material →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}