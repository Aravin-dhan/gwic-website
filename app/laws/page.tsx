import Image from 'next/image';
import Link from 'next/link';
import './laws.css';

export default function LawsPage() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link href="/"><Image src="/GNLU_GWIC_Logo-removebg-preview.png" alt="GWIC Logo" width={150} height={50} /></Link>
          </div>
          <ul>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#events">Events</Link></li>
            <li><Link href="/#resources">Resources</Link></li>
            <li><Link href="/#team">Team</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/newsletter">Newsletter</Link></li>
            <li><Link href="/laws">Mental Health Laws</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="laws-hero">
          <h1>Mental Health Laws</h1>
          <p>Understanding the legal landscape of mental health.</p>
        </section>

        <section id="laws-content">
          <h2>Key Legislation and Policies</h2>
          <p>This section will provide information about important mental health laws and policies in India, such as the Mental Healthcare Act, 2017. We will break down the key provisions and explain their implications for students and the general public.</p>
          
          <h3>The Mental Healthcare Act, 2017</h3>
          <p>The Mental Healthcare Act, 2017 is a landmark piece of legislation that aims to protect, promote and fulfill the rights of persons with mental illness. The Act decriminalizes suicide and provides for the right to access mental healthcare and treatment from mental health services run or funded by the appropriate Government.</p>

          <h3>Rights of Persons with Mental Illness</h3>
          <p>This section will detail the rights of individuals with mental illness as outlined in the Act, including the right to confidentiality, the right to be protected from cruel, inhuman or degrading treatment, and the right to live with dignity.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 GWIC - GNLU Wellness Initiative Cell</p>
      </footer>
    </>
  );
}