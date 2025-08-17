document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const fadeInScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionTop < screenPosition) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', fadeInScroll);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to team members
    const teamMembers = document.querySelectorAll('#team ul li');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateX(10px)';
            member.style.transition = 'transform 0.3s ease-in-out';
        });
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateX(0px)';
        });
    });

    // Set initial opacity to 0 for fade-in effect
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Trigger fadeInScroll on load
    fadeInScroll();
});