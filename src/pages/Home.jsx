import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './Home.css'
import { GallerySection } from '../components/Gallery'

const SERVICES = [
  { icon: '🧬', name: 'IVF Treatment', desc: 'World-class In Vitro Fertilisation with personalised protocols and exceptional success rates.' },
  { icon: '🔬', name: 'ICSI', desc: 'Intracytoplasmic Sperm Injection — precision treatment for male factor infertility.' },
  { icon: '❄️', name: 'Egg & Embryo Freezing', desc: 'Preserve your future fertility with our state-of-the-art vitrification technology.' },
  { icon: '🧪', name: 'PGT-A Genetic Testing', desc: 'Pre-implantation genetic testing to identify chromosomally healthy embryos.' },
  { icon: '💙', name: 'Gender Selection', desc: 'Medically guided gender selection through PGS/PGD for family balancing.' },
  { icon: '🩺', name: 'Donor Programs', desc: 'Comprehensive egg and sperm donor programs with full legal and medical support.' },
]

const WHY = [
  { icon: '🏆', title: 'High Success Rate', desc: 'Among the highest IVF success rates globally, backed by clinical data.' },
  { icon: '🌍', title: 'Global Patients', desc: 'Welcoming patients from 48+ countries with multilingual coordination.' },
  { icon: '🔬', title: 'Advanced Labs', desc: 'ISO-certified embryology labs with the latest AI-assisted technology.' },
  { icon: '👨‍⚕️', title: 'Expert Specialists', desc: 'Board-certified reproductive endocrinologists with 20+ years experience.' },
  { icon: '🌸', title: 'Holistic Care', desc: 'Emotional support, nutritional guidance, and wellness throughout your cycle.' },
  { icon: '💳', title: 'Transparent Pricing', desc: 'Clear, all-inclusive packages with no hidden costs — ever.' },
]

const TESTIMONIALS = [
  { initials: 'AM', name: 'Amelia & Marcus', loc: 'London, UK', text: 'After years of heartbreak, Babymakers gave us our daughter. The care, precision, and warmth is unmatched anywhere in the world.' },
  { initials: 'RK', name: 'Ranya & Khalid', loc: 'Dubai, UAE', text: 'Three failed cycles elsewhere. One successful cycle at Babymakers. They identified issues others missed. We now have twin boys.' },
  { initials: 'SJ', name: 'Sofia & James', loc: 'Sydney, Australia', text: 'As international patients, we were nervous. Their coordination team handled everything — travel, accommodation, all medical needs. Truly 5-star.' },
  { initials: 'CN', name: 'Chidi & Ngozi', loc: 'Lagos, Nigeria', text: 'From the first video call to bringing our baby home, every step was handled with grace. Babymakers changed our lives forever.' },
]

const FAQS = [
  { q: 'What is the average success rate of IVF at Babymakers?', a: 'Our clinical success rate for IVF in women under 35 is High, significantly above the global average. Rates vary by age and individual factors, which we assess during your personalised consultation.' },
  { q: 'How long does an IVF cycle take?', a: 'A typical IVF cycle takes 4–6 weeks from initial consultation to embryo transfer. International patients typically stay 10–14 days for the active phases of treatment.' },
  { q: 'Do you offer gender selection?', a: 'Yes. We offer medically-guided gender selection through PGS for family balancing purposes, where legally permitted. Our genetics counsellors will guide you through all options.' },
  { q: 'What support is available for international patients?', a: 'We provide comprehensive international support including airport transfers, luxury accommodation partnerships, visa assistance letters, multilingual coordinators, and remote monitoring.' },
  { q: 'What is the consultation fee?', a: 'Our initial consultation fee is ₹2,999 (approx. $36 USD). This covers a 45-minute session with a senior fertility specialist and a comprehensive fertility assessment plan.' },
]

function useFadeIn() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function useCounters() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-target]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = '1'
          const target = parseInt(e.target.dataset.target)
          let start = 0
          const step = target / 80
          const tick = () => {
            start = Math.min(start + step, target)
            e.target.textContent = Math.floor(start).toLocaleString()
            if (start < target) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.5 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function Home() {
  useFadeIn()
  useCounters()
  const [openFaq, setOpenFaq] = React.useState(null)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__particles">
          <div className="hero__particle hero__particle--1" />
          <div className="hero__particle hero__particle--2" />
          <div className="hero__particle hero__particle--3" />
        </div>
        <div className="hero__content">
          <div className="hero__left">
            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              <span style={{ width: 6, height: 6, background: '#C9A96E', borderRadius: '50%', animation: 'pulse-dot 2s infinite' }} />
              World-Class Fertility Care
            </div>
            <h1 className="hero__title serif">
              We <em>turn</em> dreams <em>into</em> Heartbeats
            </h1>
            <p className="hero__sub">
              At Babymakers IVF, we combine cutting-edge reproductive technology with compassionate care — helping families across the globe complete their journey to parenthood.
            </p>
            <div className="hero__btns">
              <Link to="/booking" className="btn-primary">Start Your Journey ✦</Link>
              <Link to="/services" className="btn-outline">Explore Treatments</Link>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-num serif" ><p>High</p></div>
                <div className="hero__stat-lbl">Success Rate %</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-num serif" data-target="12000">0</div>
                <div className="hero__stat-lbl">Babies Born</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-num serif" data-target="48">0</div>
                <div className="hero__stat-lbl">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="hero__right">
            <div><img src="./images/banner.jpeg" alt="" className='rounded-lg border-amber-300 border-2'/></div> <br />

          <div className="">
            <div className="hero__card">
              <div className="hero__card-header">
                <div className="hero__card-avatar">🤱</div>
                <div>
                  <p className="hero__card-title">IVF Journey Tracker</p>
                  <span className="hero__card-sub">Patient: Sarah M.</span>
                </div>
              </div>
              {[
                { label: 'Ovarian Stimulation', pct: 100, done: true },
                { label: 'Egg Retrieval', pct: 100, done: true },
                { label: 'Fertilisation (ICSI)', pct: 65, active: true },
                { label: 'Embryo Transfer', pct: 8, pending: true },
              ].map((s, i) => (
                <div key={i} className="hero__progress">
                  <div className="hero__progress-label">
                    <span>{s.label}</span>
                    <span style={{ color: s.done ? '#C9A96E' : s.active ? '#7B68B5' : 'rgba(255,255,255,0.25)', fontSize: 12 }}>
                      {s.done ? '✓ Done' : s.active ? 'In Progress' : 'Upcoming'}
                    </span>
                  </div>
                  <div className="hero__progress-bar">
                    <div className="hero__progress-fill" style={{ width: `${s.pct}%`, animation: s.active ? 'progressPulse 2s infinite alternate' : 'none' }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="hero__float hero__float--top">
              <div className="hero__float-icon">🧬</div>
              <div><p className="hero__float-title ">PGT-A Tested</p><span className="hero__float-sub">Chromosomally Normal</span></div>
            </div>
            <div className="hero__float hero__float--bot">
              <div className="hero__float-icon">⭐</div>
              <div><p className="hero__float-title">High Success Rate</p><span className="hero__float-sub">2026 Clinical Data</span></div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Our Treatments</div>
          <h2 className="section-title serif">Advanced Fertility Treatments,<br className="hide-mobile" /> Tailored for You</h2>
          <p className="section-sub">Every family's journey is unique. We offer a comprehensive range of treatments using the latest reproductive technologies.</p>
          <div className="home__svc-grid">
            {SERVICES.map((s, i) => (
              <Link key={i} to="/services" className="home__svc-card fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="home__svc-icon">{s.icon}</div>
                <div className="home__svc-name">{s.name}</div>
                <div className="home__svc-desc">{s.desc}</div>
                <div className="home__svc-link">Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div className="section-label">Why Babymakers IVF</div>
          <h2 className="section-title serif">Excellence in Every Step</h2>
          <div className="home__why-grid">
            {WHY.map((w, i) => (
              <div key={i} className="home__why-card fade-in">
                <div className="home__why-icon">{w.icon}</div>
                <div className="home__why-title">{w.title}</div>
                <div className="home__why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="home__testi-section">
        <div className="section-inner">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Patient Stories</div>
          <h2 className="section-title serif" style={{ color: 'var(--white)' }}>Families We've Helped <em>Complete</em></h2>
          <div className="home__testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="home__testi-card fade-in">
                <div className="home__testi-stars">★★★★★</div>
                <p className="home__testi-text serif">"{t.text}"</p>
                <div className="home__testi-author">
                  <div className="home__testi-avatar">{t.initials}</div>
                  <div>
                    <div className="home__testi-name">{t.name}</div>
                    <div className="home__testi-loc">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* gallery testimonial  */}
       <GallerySection/>
      {/* STATS */}
      <section className="home__stats-section">
        <div className="home__stats-inner">
  {[['12000', 'Babies Born'], ['High', 'Success Rate %'], ['48', 'Countries Served'], ['22', 'Years of Excellence']].map(([n, l], i) => (
    <div key={i} className="home__stat-item">
      
      {i !== 1 ? (
        <div className="home__stat-num serif" data-target={n}>
          {i == 1 ? "High" : 0}
        </div>
      ) : (
        <div className="home__stat-num serif" >
          High
        </div>
      )}

      <div className="home__stat-lbl">{l}</div>
    </div>
  ))}
</div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="home__cta-box">
            <div className="section-label" style={{ color: 'var(--gold)', textAlign: 'center' }}>Begin Today</div>
            <h2 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', marginBottom: '0.75rem' }}>
              Your Family's Story<br />Starts Here
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: '2rem', fontWeight: 300 }}>
              Book a confidential consultation with our specialists and take the first step toward becoming parents.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 15, padding: '1rem 2.5rem' }}>
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label">Common Questions</div>
          <h2 className="section-title serif">Frequently Asked Questions</h2>
          <div className="home__faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className="home__faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="home__faq-q">
                  <span>{f.q}</span>
                  <span className={`home__faq-chevron ${openFaq === i ? 'home__faq-chevron--open' : ''}`}>⌄</span>
                </div>
                <div className={`home__faq-a ${openFaq === i ? 'home__faq-a--open' : ''}`}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
