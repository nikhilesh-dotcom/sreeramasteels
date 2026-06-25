import React, { useState } from 'react';

export default function Header({ setCurrentPage, handleAnchorLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNav = (page, sectionId) => {
    setIsMenuOpen(false);
    if (sectionId) {
      handleAnchorLink(page, sectionId);
    } else {
      setCurrentPage({ id: page });
    }
  };

  return (
    <header id="main-header" style={{
      background: 'rgba(250, 249, 245, 0.85)',
      backdropFilter: 'blur(25px)',
      WebkitBackdropFilter: 'blur(25px)',
      borderBottom: '1px solid var(--border-crisp)',
      position: 'sticky',
      top: 0,
      zIndex: 200
    }}>
      <div className="nav-container" style={{
        maxWidth: '1560px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 3rem'
      }}>
        <div className="logo" onClick={() => setCurrentPage({ id: 'home-page' })} style={{
          fontSize: '1.4rem', fontWeight: 700, letterSpacing: '1px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.15rem'
        }}>
          SREE RAMA STEELS<span style={{ color: 'var(--accent-bronze)' }}></span>
        </div>
        
        <nav className="desktop-nav" style={{ display: 'flex' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '5rem' }}>
            <li><a onClick={() => handleNav('home-page', 'portfolio')} style={{ cursor: 'pointer', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600, color: 'var(--text-slate)' }}>Portfolios</a></li>
            <li><a onClick={() => handleNav('home-page', 'alliances')} style={{ cursor: 'pointer', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600, color: 'var(--text-slate)' }}>Alliances</a></li>
            <li><a onClick={() => handleNav('home-page', 'footer-anchor')} style={{ cursor: 'pointer', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600, color: 'var(--text-slate)' }}>About Us</a></li>
          </ul>
        </nav>

        <a onClick={() => setCurrentPage({ id: 'contact-page' })} className="btn-premium desktop-btn" style={{
          background: 'var(--text-charcoal)', color: '#ffffff', padding: '1rem 2.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem', fontWeight: 700, textDecoration: 'none', cursor: 'pointer'
        }}>Contact Us</a>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu} style={{ background: 'transparent', border: 'none', color: 'var(--text-charcoal)', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className={`mobile-dropdown ${isMenuOpen ? 'open' : ''}`} style={{
        position: 'absolute', top: '100%', left: 0, width: '100%', background: 'rgba(250, 249, 245, 0.98)', backdropFilter: 'blur(15px)', borderBottom: '1px solid var(--border-crisp)', maxHeight: isMenuOpen ? '350px' : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <ul className="mobile-nav-links" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', padding: '2rem 2.5rem 2rem 0', alignItems: 'flex-end', gap: '1.5rem' }}>
          <li><a onClick={() => handleNav('home-page', 'portfolio')}>Portfolios</a></li>
          <li><a onClick={() => handleNav('home-page', 'alliances')}>Alliances</a></li>
          <li><a onClick={() => handleNav('home-page', 'footer-anchor')}>About Us</a></li>
          <li><a onClick={() => handleNav('contact-page')} className="mobile-contact-link" style={{ color: 'var(--accent-bronze)', borderBottom: '2px solid var(--accent-bronze)' }}>Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
}