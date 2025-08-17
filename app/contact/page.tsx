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
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your message!');
  };

  return (
    <div className="container">
      <section style={{ padding: '40px 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>Contact Us</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <h2>Get in Touch</h2>
            <p>Have a question or a suggestion? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.</p>
            <p><strong>Email:</strong> wellness@gnlu.ac.in</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
            </div>
            <button type="submit" style={{ padding: '10px 20px', background: 'var(--primary-dark)', color: 'var(--text-light)', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}