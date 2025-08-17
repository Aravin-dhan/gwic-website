export default function TeamPage() {
  const teams = [
    { batch: '2021-26', members: ['Aman Nigam', 'Bhawini', 'Daksh', 'Dwija Vasavada', 'Harsh Tiwari', 'Manas', 'Pragya Chainta', 'Prakhar', 'Rishav Anand', 'Smruti', 'Subham', 'Supriya', 'Tanishq'] },
    { batch: '2022-27', members: ['Abhishek Joshi', 'Akshita Choudhary', 'Jonita Louisa', 'Shikher', 'Sloka', 'Vipra Gupta'] },
    { batch: '2023-28', members: ['Cheenar Shah', 'Deeya', 'Khushboo Kanoujiya', 'Kimaya Arlekar', 'Shlok Shah', 'Vatsal'] },
    { batch: '2024-29', members: ['Dipshikha Kanjilal', 'Ishita Mishra', 'Janya Shrivastava', 'Matreyi Mudgal', 'Muskan', 'Nidhi Nirmal', 'Pallavi Kumari', 'Rishi Kumar', 'Ritambhra Sharma'] },
    { batch: '2025-30', members: ['Aakshi', 'Akanksha Kamal', 'Aniket Kumar Singh', 'Ashmit Singh Jattan', 'Divyanshi Sharma', 'Drishti Jaiswal', 'Gauri', 'Kashvi Agrawal', 'Keerti', 'Khushboo Bishnoi', 'Mahi Holani', 'Paramjeet', 'Pushkar Bapatla', 'Raj Patidar', 'Rifat Zahra', 'Rini Mehta', 'Ronak', 'Saumya Palshetkar', 'Shraddha Priya', 'Sneha Yadav', 'Supriya', 'Vidhi Yadav', 'Yogya Soni'] }
  ];

  return (
    <div className="container">
      <section style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--primary-dark)' }}>
          Our Team
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '4rem', color: 'var(--secondary-blue)' }}>
          <strong>Faculty Convener:</strong> Ms. Harsha Rajwanshi
        </p>
        
        {teams.map(team => (
          <div key={team.batch} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', borderBottom: '2px solid var(--accent-grey)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              Batch of {team.batch}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {team.members.map(member => (
                <div key={member} style={{ background: 'var(--text-light)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  {member}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}