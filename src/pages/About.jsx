import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './About.css'

const TEAM = [
  { emoji: '👨‍⚕️', name: 'Dr. Arjun Mehta', role: 'Chief Reproductive Endocrinologist', bio: 'MBBS, MD, FRCOG. 22 years in IVF. Former faculty at Oxford\'s Nuffield Dept. of Women\'s Health. Specialist in complex cases and repeated implantation failure.', bg: 'linear-gradient(135deg, #E8E4F3, #C5BAE0)' },
  { emoji: '👩‍⚕️', name: 'Dr. Priya Nair', role: 'Senior Embryologist & Genetics Lead', bio: 'PhD Embryology, Edinburgh. Pioneer in AI-assisted embryo selection. Published researcher in PGT-A with 60+ peer-reviewed papers.', bg: 'linear-gradient(135deg, #F7E8E8, #D4A5A5)' },
  { emoji: '👨‍⚕️', name: 'Dr. Ravi Krishnamurthy', role: 'Andrology & Male Fertility Specialist', bio: 'Trained at Johns Hopkins. Leading expert in surgical sperm retrieval, micro-TESE, and male factor infertility treatment strategies.', bg: 'linear-gradient(135deg, #E8F0F7, #B5C8E0)' },
  { emoji: '👩‍⚕️', name: 'Dr. Zara Singh', role: 'Fertility Counsellor & Wellness Director', bio: 'MSc Psychology. Mindfulness-based fertility support specialist ensuring psychological wellbeing throughout each patient\'s journey.', bg: 'linear-gradient(135deg, #E8F3E8, #B0D4B0)' },
]

const VALUES = [
  { icon: '🏥', title: 'Est. 2003', desc: 'Over two decades of pioneering fertility care' },
  { icon: '🌍', title: 'Global Reach', desc: 'Patients from 48+ countries worldwide' },
  { icon: '🔬', title: 'ISO Certified', desc: 'Internationally accredited embryology labs' },
  { icon: '💚', title: 'Patient-First', desc: 'Holistic, compassionate care always' },
  { icon: '🏆', title: '12,000+ Babies', desc: 'Happy families across the globe' },
  { icon: '🎓', title: 'Research-Led', desc: '200+ published clinical papers' },
]

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="about">
      <div className="about__hero">
        <div className="section-label" style={{ color: 'var(--gold)', textAlign: 'center' }}>Our Story</div>
        <h1 className="serif about__hero-title">Science, Compassion, <em>Family</em></h1>
        <p className="about__hero-sub"> Babymakers IVF has been at the forefront of reproductive medicine, combining breakthrough science with deeply human care — touching lives in 48 countries.</p>
      </div>

      {/* MISSION */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="about__mission-grid">
            <div className="fade-in">
              <div className="section-label">Our Mission</div>
              <h2 className="section-title serif">To Give Every Family a Fighting Chance</h2>
              <p className="about__body-text">We believe parenthood is a fundamental human experience. Our mission is to make world-class fertility care accessible to families everywhere, regardless of geography or the complexity of their journey.</p>
              <p className="about__body-text" style={{ marginTop: '0.75rem' }}>Our vision is a world where no couple gives up on their dream of having a child. With cutting-edge science, empathy-led care, and global reach, we are making that vision reality — one family at a time.</p>
              <Link to="/booking" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Begin Your Journey ✦
              </Link>
            </div>
            <div className="about__values-grid">
              {VALUES.map((v, i) => (
                <div key={i} className="about__value-card fade-in">
                  <div className="about__value-icon">{v.icon}</div>
                  <div className="about__value-title">{v.title}</div>
                  <div className="about__value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label">Our Specialists</div>
            <h2 className="section-title serif">Meet Our Expert Team</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Board-certified specialists with decades of experience in reproductive medicine, genetics, and wellness.</p>
          </div>
          <div className="about__team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="about__team-card fade-in card">
                <div className="about__team-img" style={{ background: m.bg }}>
                  <span>{m.emoji}</span>
                </div>
                <div className="about__team-info">
                  <div className="about__team-name">{m.name}</div>
                  <div className="about__team-role">{m.role}</div>
                  <p className="about__team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL */}
      <section className="about__global-section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Global Presence</div>
          <h2 className="section-title serif" style={{ color: 'white' }}>Trusted by Families in 48+ Countries</h2>
          <div className="about__countries">
            {['🇬🇧 UK','🇦🇪 UAE','🇺🇸 USA','🇦🇺 Australia','🇳🇬 Nigeria','🇰🇪 Kenya','🇿🇦 South Africa','🇸🇬 Singapore','🇩🇪 Germany','🇨🇦 Canada','🇫🇷 France','🇮🇳 India','🇯🇵 Japan','🇧🇷 Brazil','+ 34 More'].map((c, i) => (
              <span key={i} className="about__country-tag">{c}</span>
            ))}
          </div>
          <Link to="/international" className="btn-primary" style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
            International Patient Info
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
