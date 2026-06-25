import React from 'react';

export default function Footer({ setCurrentPage, handleAnchorLink }) {
  return (
    <footer id="footer-anchor" style={{ background: 'var(--text-charcoal)', marginTop: '6rem', padding: '5rem 3rem 4rem', color: '#ffffff' }}>
      <div className="footer-grid" style={{ maxWidth: '1560px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '7rem', paddingBottom: '7rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div>
          <div className="footer-logo" style={{ fontSize: '2rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '2rem' }}>SREE RAMA STEELS<span style={{ color: 'var(--accent-bronze)' }}>.</span></div>
          <p style={{ color: 'var(--text-low)', maxWidth: '360px', lineHeight: 1.7 }}>Premium architectural supply solutions and corporate structural raw distribution networks.</p>
        </div>
        <div className="footer-col">
          <h4 style={{ color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '2.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Alliances</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '1.5rem' }}><a onClick={() => handleAnchorLink('home-page', 'alliances')} style={{ color: 'var(--text-low)', textDecoration: 'none', cursor: 'pointer' }}>Tata Steel Systems</a></li>
            <li style={{ marginBottom: '1.5rem' }}><a onClick={() => handleAnchorLink('home-page', 'alliances')} style={{ color: 'var(--text-low)', textDecoration: 'none', cursor: 'pointer' }}>Jindal Infrastructure</a></li>
            <li style={{ marginBottom: '1.5rem' }}><a style={{ color: 'var(--text-low)', textDecoration: 'none', cursor: 'default' }}>Calibrated Plywood Lab</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '2.5rem', fontSize: '0.8rem', fontWeight: 700 }}>Corporate Details</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '1.5rem' }}><a style={{ color: 'var(--text-low)', textDecoration: 'none', cursor: 'default' }}>Technical Specifications</a></li>
            <li style={{ marginBottom: '1.5rem' }}><a style={{ color: 'var(--text-low)', textDecoration: 'none', cursor: 'default' }}>Distribution Framework</a></li>
            <li style={{ marginBottom: '1.5rem' }}><a style={{ color: 'var(--text-low)', textDecoration: 'none', cursor: 'default' }}>Structural Compliance</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: 'var(--accent-bronze)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '2.5rem', fontSize: '0.8rem', fontWeight: 700 }}>HQ Terminal</h4>
          <p>📍 Teachers Colony, Lakshmi Nagar, Auto Nagar, Kottapalle, Andhra Pradesh 516360</p>
          <p style={{ marginTop: '0.75rem' }}>📞 <a href="tel:9849353559" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>9849353559</a></p>
          <p style={{ marginTop: '0.75rem' }}>Mail : sreeramasteels.pdtr@gmail.com</p>
          <a href="https://www.google.com/maps/place/Sree+Rama+Profiles,+Teachers+Colony,+Lakshmi+Nagar,+Auto+Nagar,+Kottapalle,+Andhra+Pradesh+516360/data=!4m2!3m1!1s0x3bb380aeeeee65b5:0x780cef97c90d69ab!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjIyLjQYACCenQoqiwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc10GMsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwNzkyNTY4QgJJTg%3D%3D&skid=4d06efc7-9a4d-4dd4-a744-ce4082912579&g_st=ac" target="_blank" rel="noopener noreferrer" className="map-link-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff', textDecoration: 'none', marginTop: '2rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '2px solid var(--accent-bronze)', paddingBottom: '6px' }}>
            <img src="https://minor-sapphire-fz8hyhgd.edgeone.app/Screenshot%202026-06-12%20134731.png" width="200" height="200" alt="HQ Location Map Map" />
          </a>
        </div>
      </div>
      <div className="footer-bottom" style={{ maxWidth: '1560px', margin: '4rem auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.8rem', letterSpacing: '1px' }}>
        <p>© 2026 SREE RAMA STEELS Premium Structural Supplies. All rights reserved.</p>
        <p style={{ color: 'var(--accent-bronze)', fontWeight: 700 }}>DESIGN PROTOCOL: ARCHITECTURAL GALLERY 6.0</p>
        <p style={{ color: 'white', fontWeight: 700 }}>DESIGNED BY : Nikhilesh & Nirmal Kumar Reddy from Nxtwave of Innovation and Advanced Technologies</p>
      </div>
    </footer>
  );
}