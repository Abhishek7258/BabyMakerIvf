import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import './Blog.css'

const POSTS = [
  { icon: '🧬', tag: 'IVF Science', title: 'How AI Is Revolutionising Embryo Selection in 2025', excerpt: 'Time-lapse imaging combined with machine learning algorithms is dramatically improving the accuracy of embryo selection, boosting IVF success rates by up to 15%.', author: 'Dr. Priya Nair', date: 'March 2025', read: '8 min read', bg: 'linear-gradient(135deg,#E8E4F3,#C5BAE0)' },
  { icon: '❄️', tag: 'Fertility Preservation', title: 'The Science Behind Egg Freezing: Everything You Need to Know', excerpt: 'Vitrification technology has transformed egg freezing from experimental to highly effective — with 98%+ egg survival rates giving women more reproductive control than ever before.', author: 'Dr. Arjun Mehta', date: 'February 2025', read: '6 min read', bg: 'linear-gradient(135deg,#E8F3F3,#B0D4D4)' },
  { icon: '💊', tag: 'Nutrition & Wellness', title: 'The Fertility Diet: Foods That Support IVF Success', excerpt: 'Research shows that a Mediterranean-style diet rich in antioxidants, healthy fats, and plant proteins can meaningfully improve fertility outcomes and egg quality.', author: 'Dr. Zara Singh', date: 'January 2025', read: '5 min read', bg: 'linear-gradient(135deg,#E8F0E8,#B0D4B0)' },
  { icon: '👨‍👩‍👧', tag: 'Patient Stories', title: 'From Kenya to India: Our IVF Journey with Babymakers', excerpt: 'Amara and David share their deeply personal journey — three rounds of IVF across two continents and the incredible team that never gave up on their dream.', author: 'Patient Story', date: 'December 2024', read: '10 min read', bg: 'linear-gradient(135deg,#F7E8E8,#D4A5A5)' },
  { icon: '🔬', tag: 'Genetics', title: 'PGT-A Testing: Is Genetic Screening Right for You?', excerpt: 'Pre-implantation genetic testing for aneuploidies can significantly reduce miscarriage risk and improve live birth rates — but it\'s not right for everyone.', author: 'Dr. Priya Nair', date: 'November 2024', read: '7 min read', bg: 'linear-gradient(135deg,#F3F0E8,#D4CCB0)' },
  { icon: '🌸', tag: 'Mental Wellbeing', title: 'Managing the Emotional Rollercoaster of IVF Treatment', excerpt: 'IVF is as much an emotional journey as a physical one. Our fertility counsellor shares evidence-based strategies for maintaining mental wellbeing throughout treatment.', author: 'Dr. Zara Singh', date: 'October 2024', read: '6 min read', bg: 'linear-gradient(135deg,#F0E8F3,#C5B0D4)' },
]

const CATEGORIES = ['All', 'IVF Science', 'Fertility Preservation', 'Nutrition & Wellness', 'Patient Stories', 'Genetics', 'Mental Wellbeing']

export default function Blog() {
  const [active, setActive] = React.useState('All')

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [active])

  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.tag === active)

  return (
    <div className="blog">
      <div className="blog__hero">
        <div className="section-label" style={{ color: 'var(--gold)', textAlign: 'center' }}>Insights & Education</div>
        <h1 className="serif blog__hero-title">The Babymakers <em>Journal</em></h1>
        <p className="blog__hero-sub">Expert-written articles on fertility, reproductive medicine, and the science of parenthood.</p>
      </div>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="blog__categories">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`blog__cat-btn ${active === c ? 'blog__cat-btn--active' : ''}`}
                onClick={() => setActive(c)}
              >{c}</button>
            ))}
          </div>

          <div className="blog__grid">
            {filtered.map((p, i) => (
              <article key={i} className="blog__card fade-in">
                <div className="blog__card-img" style={{ background: p.bg }}>
                  <span>{p.icon}</span>
                </div>
                <div className="blog__card-body">
                  <div className="blog__card-tag">{p.tag}</div>
                  <h3 className="blog__card-title">{p.title}</h3>
                  <p className="blog__card-excerpt">{p.excerpt}</p>
                  <div className="blog__card-meta">
                    <span>{p.author}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.read}</span>
                  </div>
                  <button className="blog__read-btn">Read Article →</button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="blog__empty">No articles in this category yet. Check back soon!</div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="blog__newsletter-section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ color: 'var(--gold)' }}>Stay Informed</div>
          <h2 className="section-title serif">Get Fertility Insights Delivered to Your Inbox</h2>
          <p className="section-sub" style={{ margin: '0 auto 2rem' }}>Join 12,000+ readers receiving our monthly fertility newsletter — expert articles, success stories, and the latest research.</p>
          <div className="blog__newsletter-form">
            <input type="email" placeholder="Enter your email address" className="form-input blog__newsletter-input" />
            <button className="btn-primary">Subscribe</button>
          </div>
          <p className="blog__newsletter-note">No spam, ever. Unsubscribe anytime. Read by patients in 48+ countries.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
