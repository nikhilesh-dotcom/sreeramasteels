import React from 'react';

export default function BrandStrip() {
  const brands = [
    "TATA TISCON 550SD", "JINDAL STEEL", "TIRUPATI TMT 550D", "RAJA RAM TMT 550D",
    "BIRLA PIVOT", "GURJAN PLYWOOD", "GREENPLY", "CENTURY PLY"
  ];
  const duplicateBrands = [...brands, ...brands];

  return (
    <section className="brand-strip" id="alliances" style={{
      background: 'var(--bg-card)', padding: '3.5rem 0', margin: '3rem 0 5rem 0', borderTop: '1px solid var(--border-crisp)', borderBottom: '1px solid var(--border-crisp)', overflow: 'hidden', position: 'relative'
    }}>
      <div className="marquee-track" style={{ display: 'flex', width: 'max-content', animation: 'marquee 35s linear infinite' }}>
        {duplicateBrands.map((brand, index) => (
          <div key={index} className="brand-item" style={{
            fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-low)', margin: '0 4rem', whiteSpace: 'nowrap'
          }}>{brand}</div>
        ))}
      </div>
    </section>
  );
}