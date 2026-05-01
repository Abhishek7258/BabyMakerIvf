import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './Services.css'

const SERVICES = [
  {
    icon: '🔬', name: 'Lab Technology & Techniques',
    desc: 'Modern technology and medical advancements give couples facing infertility a greater chance of success. Our highly skilled embryologists use the newest technology including EmbryoScope, Assisted Hatching, and Blastocyst Transfer.',
    steps: ['EmbryoScope', 'Assisted Hatching', 'Blastocyst Transfer'],
    detail: 'At Babymakers IVF, we invest in the latest medical advancements with centers in Dubai and Abu Dhabi. Our embryologists are equipped with cutting-edge tools to provide quality health care service throughout the UAE and abroad. [web:1][page:1]',
    bg: 'linear-gradient(135deg, #E8E4F3, #C5BAE0)',
  },
  {
    icon: '❄️', name: 'Preserving Fertility',
    desc: 'Egg and Sperm Freezing is an effective way to preserve fertility for women and men delaying parenthood or undergoing medical treatment. Babymakers IVF offers Egg and Sperm Freezing in Abu Dhabi and Dubai.',
    steps: ['Assessment', 'Freezing', 'Storage', 'Future Use'],
    detail: 'Protect your fertility from negative side effects of medication. Our centers in Dubai and Abu Dhabi provide this service to help preserve your options for future family planning. [page:1]',
    bg: 'linear-gradient(135deg, #E8F0F7, #B5C8E0)',
  },
  {
    icon: '🌱', name: 'Natural Cycle IVF',
    desc: 'Natural Cycle IVF is ideal for women who don\'t respond to fertility medication or have poor ovarian reserve. We retrieve the single natural egg, inject with sperm, and transfer the embryo without stimulation drugs.',
    steps: ['Natural Egg Growth', 'Retrieval', 'ICSI', 'Embryo Transfer'],
    detail: 'No stimulation medication is used. Available at our Dubai and Abu Dhabi centers and partners in Al Ain. Other options include IVF-ICSI, Mini IVF, IUI, and more. [page:1]',
    bg: 'linear-gradient(135deg, #E8F3F3, #B0D4D4)',
  },
  {
    icon: '♂️', name: 'Male Infertility',
    desc: 'Babymakers IVF treats male infertility caused by factors affecting sperm quantity and quality. High success rates in assisted reproduction treatments for couples throughout the UAE.',
    steps: ['Diagnosis', 'Treatment Planning', 'Sperm Analysis', 'Advanced Techniques'],
    detail: 'Centers in Abu Dhabi, Dubai, and partners in Al Ain. Treatments include IVF-ICSI, PGD, and more. Contact a specialist if your specific cause isn\'t listed. [page:1][web:2]',
    bg: 'linear-gradient(135deg, #F3F0E8, #D4CCB0)',
  },
  {
    icon: '💉', name: 'IUI—Artificial Insemination',
    desc: 'Intrauterine Insemination (IUI) for couples with patent fallopian tubes and adequate sperm count. Lower success per cycle than IVF but high overall rates at Babymakers IVF.',
    steps: ['Ovulation Monitoring', 'Sperm Preparation', 'Insemination'],
    detail: 'Available throughout UAE via Dubai, Abu Dhabi centers and Al Ain partners. Complements other treatments like IVF-ICSI and Gender Selection. [page:1]',
    bg: 'linear-gradient(135deg, #E8EEF7, #B5C0D4)',
  },
  {
    icon: '🧬', name: 'Genetic Testing',
    desc: 'Full-service in-house Genetics Laboratory — the only one in UAE for embryo genetic testing. Services during IVF, carrier screening, pregnancy testing, and Geneus® risk assessment.',
    steps: ['Embryo Biopsy', 'Analysis', 'Results', 'Informed Transfer'],
    detail: 'Equipped with newest technologies for healthy babies. Locations in Dubai, Abu Dhabi, partners in Al Ain. Many medical firsts worldwide. [page:1]',
    bg: 'linear-gradient(135deg, #F0E8F3, #C5B0D4)',
  },
  {
    icon: '👨‍👩‍👧‍👦', name: 'Family Balancing',
    desc: 'Identify embryo gender via IVF and CCS/PGD with nearly 100% accuracy. Only IVF center in Middle East with in-house Genetics Lab for CCS.',
    steps: ['IVF Cycle', 'Biopsy', 'CCS Screening', 'Gender Selection'],
    detail: 'Offered in Dubai and Abu Dhabi for family balancing. Email international advisor for couples abroad. [page:1]',
    bg: 'linear-gradient(135deg, #E8F3F8, #B8D8E8)',
  },
  {
    icon: '🧪', name: 'IVF-ICSI',
    desc: 'IVF collects eggs and sperm, fertilizing in lab. ICSI injects single sperm into each egg for higher success. Available across UAE.',
    steps: ['Egg Retrieval', 'Sperm Collection', 'ICSI Injection', 'Embryo Culture', 'Transfer'],
    detail: 'Centers in Dubai, Abu Dhabi, partners in Al Ain. Includes options like Mini IVF, Natural Cycle, IUI, Gender Selection. [page:1][web:1]',
    bg: 'linear-gradient(135deg, #F3E8E8, #D4B0B0)',
  },
]

export default function Services() {
  const [openIdx, setOpenIdx] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="services">
      <div className="services__hero">
        <div className="section-label" style={{ color: 'var(--gold)', textAlign: 'center' }}>What We Offer</div>
        <h1 className="serif services__hero-title">Babymakers IVF <em>Treatments</em></h1>
        <p className="services__hero-sub">Comprehensive fertility solutions with centers in Dubai, Abu Dhabi, and partners across UAE. [web:2]</p>
      </div>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="services__grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="services__card fade-in card">
                <div className="services__card-top">
                  <div className="services__card-icon" style={{ background: s.bg }}>{s.icon}</div>
                  <div>
                    <h3 className="services__card-name">{s.name}</h3>
                    <p className="services__card-desc">{s.desc}</p>
                  </div>
                </div>
                <div className="services__card-steps">
                  {s.steps.map((step, j) => (
                    <span key={j} className="services__step">{step}</span>
                  ))}
                </div>
                <button
                  className="services__toggle"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  {openIdx === i ? '▴ Hide details' : '▾ View detailed protocol'}
                </button>
                <div className={`services__detail ${openIdx === i ? 'services__detail--open' : ''}`}>
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)', textAlign: 'center' }}>
        <div className="section-inner">
          <div className="services__cta-box" style={{ background: 'linear-gradient(135deg, var(--gold), #D4A017)' }}>
            <h2 className="serif" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: 'white', marginBottom: '0.75rem' }}>
              Ready to start your journey?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontWeight: 300 }}>
              Call Babymakers (+971505468001) or book a consultation at our Sharjah, UAE centers.
            </p>
            <Link to="/booking" className="btn-primary" style={{ fontSize: 15, padding: '1rem 2.5rem' }}>
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}