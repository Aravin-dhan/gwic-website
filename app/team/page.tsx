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
      <section style={{ padding: '40px 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>Our Team</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '40px' }}><strong>Faculty Convener:</strong> Ms. Harsha Rajwanshi</p>
        
        {teams.map(team => (
          <div key={team.batch} style={{ marginBottom: '40px' }}>
            <h2 style={{ borderBottom: '2px solid var(--primary-dark)', paddingBottom: '10px', marginBottom: '20px' }}>Batch of {team.batch}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
              {team.members.map(member => (
                <div key={member} style={{ background: 'var(--background-grey)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
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