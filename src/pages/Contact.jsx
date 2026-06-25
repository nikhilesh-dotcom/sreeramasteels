import React from 'react';

export default function Contact({ setCurrentPage }) {
  return (
    <div className="spa-page active-page">
      <div className="steel-page-wrapper" style={{ maxWidth: '1560px', margin: '5rem auto 12rem', padding: '0 3rem' }}>
        <div className="back-nav-container" style={{ marginBottom: '5rem' }}>
          <button className="btn-back-link" onClick={() => setCurrentPage({ id: 'home-page' })} title="Go Back">←</button>
        </div>

        <div className="contact-layout" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', background: 'var(--bg-card)', border: '1px solid var(--border-crisp)', boxShadow: '0 20px 60px rgba(17, 20, 26, 0.03)' }}>
          <div className="contact-header-simple" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-charcoal)', marginBottom: '0.5rem' }}>Get in Touch</h2>
            <p style={{ color: 'var(--text-slate)', fontSize: '1rem' }}>Send us a message and our team will get back to you promptly.</p>
          </div>

          <form action="https://formspree.io/f/xqevkzrq" method="POST" className="contact-form-ui" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-row" style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '0.5rem' }}>
                <label htmlFor="firstName" style={{ fontSize: '0.9rem', color: 'var(--text-charcoal)' }}>First Name</label>
                <input type="text" id="firstName" name="First Name" required style={{ padding: '1rem', border: '1px solid var(--text-charcoal)', background: 'transparent' }} />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '0.5rem' }}>
                <label htmlFor="lastName" style={{ fontSize: '0.9rem', color: 'var(--text-charcoal)' }}>Last Name</label>
                <input type="text" id="lastName" name="Last Name" required style={{ padding: '1rem', border: '1px solid var(--text-charcoal)', background: 'transparent' }} />
              </div>
            </div>

            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-charcoal)' }}>Email *</label>
              <input type="email" id="email" name="Email" required style={{ padding: '1rem', border: '1px solid var(--text-charcoal)', background: 'transparent' }} />
            </div>

            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-charcoal)' }}>Message</label>
              <textarea id="message" name="Message" rows="6" required style={{ padding: '1rem', border: '1px solid var(--text-charcoal)', background: 'transparent', fontFamily: 'inherit' }}></textarea>
            </div>

            <button type="submit" className="btn-submit-red" style={{ background: '#e83e2c', color: '#ffffff', border: 'none', padding: '1.2rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', marginTop: '1rem' }}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}