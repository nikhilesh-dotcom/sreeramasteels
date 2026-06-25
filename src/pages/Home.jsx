import React from 'react';
import BrandStrip from '../components/BrandStrip';

export default function Home({ setCurrentPage }) {
  const portfolios = [
    { id: 'steel-page', title: "Structural Steel", text: "Featuring hyper-ductile Tata Tiscon 550SD formulas, seismic-tested Jindal steel bars, Tirupati systems, and heavy Raja Ram multi-load metrics.", link: "View Structural Stock", img: "https://static.vecteezy.com/system/resources/previews/046/558/558/large_2x/rebars-bars-for-concrete-wall-construction-of-a-new-building-construction-site-iron-structure-ready-to-be-cast-with-concrete-steel-bars-construction-for-concreting-brand-new-armature-photo.JPG" },
    { id: 'profiles-page', title: "Industrial Section Profiles", text: "High-grade structural elements including Heavy Beams, Flat Iron Pipes, equal angles, and weather-resilient roofing panels.", link: "Explore Sections", img: "https://bmbsteel.com.vn/storage/2022/08/6189/mceu-8464491511660873738262.jpg" },
    { id: 'plywood-page', title: "Premium Core Plywoods", text: "Boiling-Water-Resistant (BWR) marine sheets, calibrated structural wood, and luxury decorative composite panels matching rigorous European design criteria.", link: "Explore Collection", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_aLA4ovOdaKqIjnYYWLEK-aPW832oQvogONbigE-AdlcXgHip_UBqCim&s=10" },
    { id: 'hardware-page', title: "Elite Hardware Assets", text: "Precision-milled brass hardware blocks, bespoke concealed hinges, modular structural fixtures, and biometric access mechanisms.", link: "Explore Assets", img: "https://i.pinimg.com/1200x/d6/44/ef/d644ef0e9edb00c6d0675a91d69c25f2.jpg" }
  ];

  return (
    <div className="spa-page active-page">
      <section className="hero" style={{
        position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '4rem 3rem',
        background: `linear-gradient(to right, #faf9f5 50%, rgba(250, 249, 245, 0.8) 65%, rgba(250, 249, 245, 0) 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600') no-repeat center right/cover`,
        borderBottom: '1px solid var(--border-crisp)'
      }}>
        <div className="hero-content" style={{ animation: 'heroEntrance 1s ease forwards' }}>
          <span className="hero-tagline" style={{ color: 'var(--accent-bronze-dark)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700, marginBottom: '1.5rem', display: 'inline-block', background: 'rgba(158, 123, 59, 0.1)', padding: '8px 24px', borderRadius: '50px', border: '1px solid rgba(158, 123, 59, 0.2)' }}>Architectural & Structural Metallurgy</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--text-charcoal)' }}>Premium Steel Solutions for Stronger Construction</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-slate)', maxWidth: '680px', marginBottom: '2.5rem' }}>Trusted supplier of TMT Bars, Structural Steel, Roofing Sheets, Plywood, and Hardware Products from leading brands for residential, commercial, and industrial projects.</p>
          <button onClick={() => { document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }) }} className="btn-premium" style={{ background: 'var(--text-charcoal)', color: '#fff', padding: '1rem 2.5rem', textTransform: 'uppercase', border: 'none', fontWeight: 700, letterSpacing: '2px', fontSize: '0.7rem', cursor: 'pointer' }}>Explore Materials</button>
        </div>
      </section>

      <BrandStrip />

      <section id="portfolio">
        <div className="section-header" style={{ maxWidth: '1560px', margin: '4rem auto 3rem', padding: '0 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="section-header-left">
            <span style={{ color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>Curated Portfolios</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 400, color: 'var(--text-charcoal)' }}>Materials Without Compromise</h2>
          </div>
        </div>
        <div className="premium-grid" style={{ maxWidth: '1560px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', padding: '0 3rem' }}>
          {portfolios.map((p) => (
            <div key={p.id} className="premium-card" onClick={() => setCurrentPage({ id: p.id })} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.5s ease' }}>
              <div className="card-visual" style={{ height: '360px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${p.img})` }}></div>
              <div className="card-body" style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 400, marginBottom: '1.25rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-slate)', fontSize: '0.95rem', marginBottom: '3rem', flexGrow: 1 }}>{p.text}</p>
                <div className="card-link" style={{ color: 'var(--text-charcoal)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>{p.link} →</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}