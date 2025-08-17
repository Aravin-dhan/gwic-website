'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Dynamic Island Interaction
    const dynamicIsland = document.querySelector('.dynamic-island') as HTMLElement;
    if (!dynamicIsland) return;

    const searchInputHTML = '<input type="text" placeholder="Search..." style="width: 100%; border: none; background: transparent; outline: none; color: var(--primary-blue); font-family: \'Poppins\', sans-serif;"/>';
    
    const handleIslandClick = () => {
      if (dynamicIsland.classList.contains('expanded')) return;
      dynamicIsland.classList.add('expanded');
      dynamicIsland.style.width = '300px';
      dynamicIsland.innerHTML = searchInputHTML;
      const input = dynamicIsland.querySelector('input');
      if (input) {
        input.focus();
      }
    };

    const closeIsland = () => {
      dynamicIsland.classList.remove('expanded');
      dynamicIsland.style.width = ''; // Revert to original width
      dynamicIsland.innerHTML = '';
    };

    dynamicIsland.addEventListener('click', handleIslandClick);

    const handleOutsideClick = (e: MouseEvent) => {
      if (!dynamicIsland.contains(e.target as Node)) {
        closeIsland();
      }
    };
    
    document.addEventListener('click', handleOutsideClick);

    // Cleanup on component unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
      dynamicIsland.removeEventListener('click', handleIslandClick);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link href="/">
              <Image src="/GNLU_GWIC_Logo-removebg-preview.png" alt="GWIC Logo" width={150} height={50} />
            </Link>
          </div>
          <div className="dynamic-island">
            {/* Content is managed by useEffect */}
          </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#team">Team</a></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--text-light)', textAlign: 'center', padding: '80px 20px' }}>
          <h1 style={{ color: 'var(--sunny-yellow)', fontSize: '3.5rem', marginBottom: '10px' }}>Welcome to GWIC</h1>
          <p style={{ fontSize: '1.2rem' }}>Your space for wellness and growth. Let's thrive together!</p>
        </section>

        <section id="about">
          <h2>About GWIC</h2>
          <p>GWIC was established with the vision to create a sustainable and holistic culture of overall wellness for the students at GNLU. We use a community-based approach to cultivating a nurturing and inclusive community that involves every student as a stakeholder and ensures that adequate resources are present to ensure a state of well-being, this is done by maintaining an open dialogue and continuously adapting to evolving mental health needs.</p>
        </section>

        <section id="events" style={{ backgroundColor: 'var(--leaf-green)', color: 'var(--text-light)' }}>
          <h2 style={{ color: 'var(--text-light)' }}>Our Events</h2>
          <p>From unwind sessions to workshops, we host a variety of events to support your well-being. Join us and connect with the community!</p>
          <button>See Upcoming Events</button>
        </section>

        <section id="resources">
          <h2>Mental Health Resources</h2>
          <p>We provide access to a range of on-campus and off-campus resources to support your mental health journey. You are not alone.</p>
          <Link href="/laws" className="read-more">Explore Resources</Link>
        </section>

        <section id="team">
          <h2>Meet the Team</h2>
          <p>Our dedicated team is here to support you. Get to know the passionate individuals behind GWIC.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 GWIC - GNLU Wellness Initiative Cell</p>
      </footer>
    </>
  );
}