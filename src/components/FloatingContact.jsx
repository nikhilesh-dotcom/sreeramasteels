import React from 'react';

export default function FloatingContact() {
  return (
    <div className="floating-contact" style={{ position: 'fixed', right: '25px', bottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 9999 }}>
      <a href="https://api.whatsapp.com/send?phone=919849353559&text=Hello%20Sree%20Rama%20Steels,%20I%20would%20like%20to%20know%20more%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-btn" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', background: '#25D366', color: '#fff', boxShadow: '0 8px 25px rgba(0,0,0,0.25)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: '30px', height: '30px', margin: 'auto' }}>
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.16 1.6 5.98L0 24l6.28-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.46-8.42zm-8.47 18.33h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.97 1-3.64-.24-.38a9.87 9.87 0 0 1-1.52-5.24c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.44 9.89-9.88 9.89zm5.42-7.42c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.66-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.24 5.13 4.54.72.31 1.29.5 1.73.64.73.23 1.39.2 1.92.12.59-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>
      <a href="tel:+919849353559" className="floating-btn call-btn" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', background: '#007bff', color: '#fff', boxShadow: '0 8px 25px rgba(0,0,0,0.25)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '30px', height: '30px', margin: 'auto' }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.61 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.18a2 2 0 0 1 2.11-.45c.84.28 1.71.49 2.6.61a2 2 0 0 1 1.66 2.01v3z" />
        </svg>
      </a>
    </div>
  );
}