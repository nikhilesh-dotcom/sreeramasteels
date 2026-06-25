import React, { useState, useEffect } from 'react';

export default function ProductDetail({ product, previousPage, setCurrentPage }) {
  const [gallery, setGallery] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (product?.gallery) {
      try {
        setGallery(JSON.parse(product.gallery));
      } catch (e) {
        setGallery([]);
      }
    } else {
      setGallery([]);
    }
  }, [product]);

  if (!product) return null;

  const handleNextSlide = (direction) => {
    let nextIndex = slideIndex + direction;
    if (nextIndex >= gallery.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = gallery.length - 1;
    setSlideIndex(nextIndex);
  };

  const specs = [
    { label: 'Brand', val: product.brand },
    { label: 'Grade / Formulation', val: product.grade },
    { label: 'Diameter / Dimensions', val: product.size },
    { label: 'Linear Mass Metric', val: product.weight && product.weight !== '0.00' ? `${product.weight} Kg/m` : '' },
    { label: 'Single Piece Length', val: product.length },
    { label: 'Usage / Application', val: product.usage },
    { label: 'Material Composition', val: product.material },
    { label: 'Color Index', val: product.color },
    { label: 'Stock Status', val: product.avail }
  ];

  return (
    <div className="steel-page-wrapper" style={{ maxWidth: '1560px', margin: '5rem auto 12rem', padding: '0 3rem' }}>
      <div className="back-nav-container" style={{ marginBottom: '5rem' }}>
        <button className="btn-back-link" onClick={() => setCurrentPage({ id: previousPage })} title="Go Back">←</button>
      </div>

      <div className="detail-grid-layout" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="detail-header-block" style={{ textAlign: 'center' }}>
          <span className="detail-brand-badge" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-bronze)', fontWeight: 700, display: 'inline-block', marginBottom: '1rem' }}>{product.brand}</span>
          <h2 style={{ fontSize: '4rem', lineHeight: 1.1, color: 'var(--text-charcoal)', marginBottom: '1.5rem' }}>{product.brand} — {product.size}</h2>
          <p className="detail-extended-desc" style={{ fontSize: '1.15rem', color: 'var(--text-slate)', maxWidth: '800px', margin: '0 auto 3rem', fontWeight: 300 }}>{product.desc}</p>
        </div>

        <div className="detail-gallery-hub" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', padding: '2.5rem', boxShadow: '0 20px 60px rgba(17,20,26,0.03)' }}>
          <div className="carousel-container" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-structural)', minHeight: '400px' }}>
            {gallery.length > 0 && <button className="carousel-btn prev" onClick={() => handleNextSlide(-1)}>❮</button>}
            <img id="detail-render-target" src={gallery.length > 0 ? gallery[slideIndex].src : product.img} alt={product.size} style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'contain' }} />
            {gallery.length > 0 && <div className="carousel-caption" style={{ display: 'block', position: 'absolute', bottom: '2rem', background: 'rgba(17,17,17,0.9)', color: '#fff', padding: '0.8rem 2rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '3px' }}>{gallery[slideIndex].color}</div>}
            {gallery.length > 0 && <button className="carousel-btn next" onClick={() => handleNextSlide(1)}>❯</button>}
          </div>
        </div>

        <div className="detail-info-hub" style={{ marginTop: '2rem' }}>
          <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Metallurgical Blueprint Details</h4>
          <table className="spec-matrix-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '4rem' }}>
            <tbody>
              {specs.map((spec, i) => spec.val && spec.val !== '' && (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-crisp)' }}>
                  <td className="label-cell" style={{ padding: '1.25rem 0', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-charcoal)', width: '45%' }}>{spec.label}</td>
                  <td className="value-cell" style={{ padding: '1.25rem 0', color: 'var(--text-slate)', textAlign: 'right' }}>{spec.val}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="procurement-panel" style={{ background: 'var(--text-charcoal)', padding: '3.5rem', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 className="procure-title" style={{ fontSize: '1.75rem' }}>Corporate Orders & Logistics Matrices</h4>
            <p className="procure-subtitle" style={{ color: 'var(--text-low)', fontSize: '0.9rem' }}>Connect instantly with our executive desk to establish procurement agreements, commercial quotes, and fleet delivery timelines.</p>
            <a href="tel:9849353559" className="btn-procure-call" style={{ background: '#27ae60', color: '#ffffff', padding: '1.25rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>Contact Us Desk</a>
          </div>
          
          {product.bottomImg && <img className="bottom-spec-img" src={product.bottomImg} alt="Spec Map" style={{ display: 'block', width: '100%', marginTop: '4rem' }} />}
        </div>
      </div>
    </div>
  );
}