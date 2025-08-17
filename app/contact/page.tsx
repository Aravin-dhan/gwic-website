'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Contact Us
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1100px', margin: '0 auto', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>Get in Touch</h2>
            <p style={{ lineHeight: '1.7', color: 'var(--secondary-blue)' }}>
              Have a question, a suggestion, or need to talk? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </p>
            <p style={{ marginTop: '2rem' }}><strong>Email:</strong> wellness@gnlu.ac.in</p>
          </div>
          <form onSubmit={handleSubmit} style={{ background: 'var(--text-light)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--accent-grey)', fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--accent-grey)', fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--accent-grey)', fontSize: '1rem', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" style={{ width: '100%', padding: '1rem', background: 'var(--primary-dark)', color: 'var(--text-light)', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: '600' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}