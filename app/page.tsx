import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Image src="/GNLU_GWIC_Logo-removebg-preview.png" alt="GWIC Logo" width={150} height={50} />
          </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#team">Team</a></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/newsletter">Newsletter</Link></li>
            <li><Link href="/laws">Mental Health Laws</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>GNLU Wellness Initiative Cell (GWIC)</h1>
          <p>A community-based approach to cultivating a nurturing and inclusive community.</p>
        </section>

        <section id="about">
          <h2>About GWIC</h2>
          <p>GWIC was established with the vision to create a sustainable and holistic culture of overall wellness for the students at GNLU. We use a community-based approach to cultivating a nurturing and inclusive community that involves every student as a stakeholder and ensures that adequate resources are present to ensure a state of well-being, this is done by maintaining an open dialogue and continuously adapting to evolving mental health needs.</p>
          <h3>Vision</h3>
          <p>Mental health, more than just the absence of mental illness, encompasses a person's overall well-being, emotional resilience, and cognitive functioning. For law students, it's vital as it impacts their academic success, stress management, interpersonal relationships, ethical decision-making, and long-term career prospects. Maintaining positive mental health equips students to excel academically, navigate the pressures of law school, build strong professional relationships, uphold ethical standards, and establish a solid foundation for a successful legal career.</p>
          <h3>Core Value</h3>
          <p>To be committed to cultivating a nurturing and inclusive community that involves every student as a stakeholder and ensures that adequate resources are present to ensure a state of well-being, this is done by maintaining an open dialogue and continuously adapting to evolving mental health needs, as reflected in the Needs Assessment Survey and subsequent feedback mechanisms.</p>
          <p>GNLU Wellness Initiative Cell will offer such a community-driven approach to offer the following advantages:</p>
          <ul>
            <li><strong>Tailored Solutions:</strong> The unique needs and challenges faced by diverse sections of the student population will be addressed to ensure the intervention is relevant, meaningful, and effective.</li>
            <li><strong>Feedback mechanism and Student agency:</strong> By implementing a regular feedback mechanism and allowing each individual to have a say in designing and implementing initiatives, the students will feel a stronger sense of agency and responsibility towards their and the communities well-being. This will lead to greater engagement, active participation, and a higher likelihood of sustained commitment to the mental health plan.</li>
            <li><strong>Supportive Environment and Reduced Stigma:</strong> When students and staff are exposed to a campus environment that is bustling with wellness activities and openly discusses mental health, they are far more likely to feel comfortable seeking help. Research conducted by the National Alliance on Mental Illness (NAMI) indicates that peer-led support groups and initiatives effectively reduce stigma, increase access to mental health resources, and provide a sense of community. Once mental health and well-being is established among students as a shared value, it will create a positive ripple effect throughout the university and create a sense of responsibility for the long-term success of the plan and subsequent improvements as the initiatives will continue to be passed on and sustained.</li>
            <li><strong>Increased productivity:</strong> A study published by John Hopkins University’s Journal of College Student Development found that active student engagement in campus activities leads to higher levels of overall well-being, life satisfaction, better social integration, and reduced stress levels which boosts productivity significantly.</li>
          </ul>
        </section>

        <section id="events">
          <h2>Events (July-November 2023)</h2>
          <ul>
            <li><strong>Weekly Unwind Sessions:</strong> Conducted multiple weekly unwind sessions throughout the semester with the aim of helping the students hit that pause button and unwind, reflect, and simply enjoying the college journey. These activities included, but were not limited to Meditation, Mandala Painting, writing letter to future self, musical chair, pass the pillow, etc. External facilitators were also called in for Expressive Arts Therapy, Special Military Drill and Pottery Workshops to assist students in learning new skills.</li>
            <li><strong>Mental Health Day:</strong> Conducted multiple activities like writing a heartfelt message for someone, jam session, games galore, etc. on World Mental Health Day (10 October), to raise awareness around mental health.</li>
            <li><strong>Outlive Sensitization Workshop:</strong> We partnered with Outlive (Centre for Mental Health Law and Policy) for a sensitization program on Suicide Prevention to educate students on how to identify signs of suicide, appropriate interventions for someone experiencing suicidal ideation and provided resources for the student community. The workshop was led by experienced facilitators namely Ms. Sanjana Jain and Ms. Ankita Lalwani from Centre for Mental Health Law and Policy, Pune. We also ensured representations from all committees and Centres so we have enough people who can adequately support people who are experiencing distress and need to be redirected to the right resource.</li>
          </ul>
        </section>

        <section id="resources">
          <h2>Mental Health Resources</h2>
          <h3>On Campus Resources</h3>
          <ul>
            <li><strong>Counsellor:</strong> Dr. Pragna Desai, Clinical Psychologist and Psychotherapist with Mindery Services.</li>
          </ul>
          <h3>Off-campus resources</h3>
          <ul>
            <li><strong>Clinical Psychologist:</strong> Dr. Gowrishri S. She holds a Master of Philosophy in Clinical Psychology from the prestigious National Institute of Mental Health and Neurosciences (NIMHANS), which is known for its rigorous training and exceptional standards in mental health care. Her comprehensive training at NIMHANS has equipped her with the skills to handle a wide range of psychological issues, ensuring that you receive the highest quality of care.</li>
            <li><strong>Hopequre:</strong> We subscribed to an online teletherapy platform namely ‘HopeQure’ with an aim to provide convenient access to professional mental health support at the comfort of student’s own space which employs complete confidentiality and consent-based mechanisms. We also conducted an orientation programme to introduce this platform.</li>
          </ul>
        </section>

        <section id="team">
          <h2>Our Team</h2>
          <p><strong>Faculty Convener:</strong> Ms. Harsha Rajwanshi</p>
          <h3>GWIC Members 2025-2026</h3>
          <h4>Batch of 2021-26</h4>
          <ul>
            <li>Aman Nigam</li>
            <li>Bhawini</li>
            <li>Daksh</li>
            <li>Dwija Vasavada</li>
            <li>Harsh Tiwari</li>
            <li>Manas</li>
            <li>Pragya Chainta</li>
            <li>Prakhar</li>
            <li>Rishav Anand</li>
            <li>Smruti</li>
            <li>Subham</li>
            <li>Supriya</li>
            <li>Tanishq</li>
          </ul>
          <h4>Batch of 2022-27</h4>
          <ul>
            <li>Abhishek Joshi</li>
            <li>Akshita Choudhary</li>
            <li>Jonita Louisa</li>
            <li>Shikher</li>
            <li>Sloka</li>
            <li>Vipra Gupta</li>
          </ul>
          <h4>Batch of 2023-28</h4>
          <ul>
            <li>Cheenar Shah</li>
            <li>Deeya</li>
            <li>Khushboo Kanoujiya</li>
            <li>Kimaya Arlekar</li>
            <li>Shlok Shah</li>
            <li>Vatsal</li>
          </ul>
          <h4>Batch of 2024-29</h4>
          <ul>
            <li>Dipshikha Kanjilal</li>
            <li>Ishita Mishra</li>
            <li>Janya Shrivastava</li>
            <li>Matreyi Mudgal</li>
            <li>Muskan</li>
            <li>Nidhi Nirmal</li>
            <li>Pallavi Kumari</li>
            <li>Rishi Kumar</li>
            <li>Ritambhra Sharma</li>
          </ul>
          <h4>Batch of 2025-30</h4>
          <ul>
            <li>Aakshi</li>
            <li>Akanksha Kamal</li>
            <li>Aniket Kumar Singh</li>
            <li>Ashmit Singh Jattan</li>
            <li>Divyanshi Sharma</li>
            <li>Drishti Jaiswal</li>
            <li>Gauri</li>
            <li>Kashvi Agrawal</li>
            <li>Keerti</li>
            <li>Khushboo Bishnoi</li>
            <li>Mahi Holani</li>
            <li>Paramjeet</li>
            <li>Pushkar Bapatla</li>
            <li>Raj Patidar</li>
            <li>Rifat Zahra</li>
            <li>Rini Mehta</li>
            <li>Ronak</li>
            <li>Saumya Palshetkar</li>
            <li>Shraddha Priya</li>
            <li>Sneha Yadav</li>
            <li>Supriya</li>
            <li>Vidhi Yadav</li>
            <li>Yogya Soni</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 GWIC - GNLU Wellness Initiative Cell</p>
      </footer>

      <Script src="/static/js/script.js" />
    </>
  );
}