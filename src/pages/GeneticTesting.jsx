import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import './GeneticTesting.css'

const TESTS = [
  {
    icon: '⚖️',
    name: 'Family Balancing (Gender Selection)',
    short: 'Gender & Chromosomal Screen',
    desc: 'Screen your embryos to identify the gender and simultaneously check for chromosomal abnormalities such as Down Syndrome, ensuring a healthy and planned family.',
    tags: ['Gender ID', 'Chromosomal Check', 'Down Syndrome', 'Pre-Transfer'],
    color: 'linear-gradient(135deg, #2F6F73 0%, #4F9FA3 100%)',
  },
  {
    icon: '🧬',
    name: 'Comprehensive Chromosomal Screening (CCS)',
    short: 'All 24 Chromosomes',
    desc: 'Screen all 24 chromosomes for gender as well as any abnormalities caused by missing or additional chromosomes — including Trisomy 13 (Patau\'s), Trisomy 18 (Edward\'s) and Trisomy 21 (Down Syndrome). Chromosomal abnormalities are the leading cause of miscarriage.',
    tags: ['Trisomy 13', 'Trisomy 18', 'Down Syndrome', 'Miscarriage Prevention'],
    color: 'linear-gradient(135deg, #255A5D 0%, #2F6F73 100%)',
  },
  {
    icon: '🔬',
    name: 'Pre-Implantation Genetic Diagnosis (PGD)',
    short: 'Hereditary & Single Gene',
    desc: 'Assess embryos for hereditary diseases, allowing parents with a known genetic disease to ensure their children do not inherit that condition. Covers single gene disorders and complex hereditary conditions.',
    tags: ['Single Gene', 'Hereditary Disease', 'PGD', 'Carrier Screening'],
    color: 'linear-gradient(135deg, #163538 0%, #255A5D 100%)',
  },
  {
    icon: '💎',
    name: 'HLA Matching – Curing a Family Member',
    short: 'Saviour Sibling Matching',
    desc: 'Cure a family member suffering from a hereditary disease curable by bone marrow transplant by identifying an HLA Match during IVF. A compassionate, scientifically advanced pathway to healing.',
    tags: ['HLA Match', 'Bone Marrow', 'Saviour Sibling', 'Hereditary Cure'],
    color: 'linear-gradient(135deg, #0D2426 0%, #163538 100%)',
  },
]

const SCREENING = [
  {
    icon: '🧪',
    name: 'Mutation Screening',
    subtitle: 'Sanger Sequencing',
    desc: 'Recommended when the genetic disease has been previously identified or there is a known family history. Used to detect diseases caused by a limited number of mutations or for detecting mutations in small genes.',
  },
  {
    icon: '⚡',
    name: 'Exome Screening',
    subtitle: 'Next Generation Sequencing',
    desc: 'Used for unidentified or polygenic diseases. Analyses important regions of tens of thousands of genes simultaneously — bringing DNA sequencing to unprecedented speed and accuracy.',
  },
  {
    icon: '💑',
    name: 'Premarital / Preconception',
    subtitle: 'Carrier Screening',
    desc: 'For couples wanting to ensure their children won\'t inherit a genetic disease — whether there is a known family history, an unidentified hereditary risk, or as an extra precaution before starting a family.',
  },
]

const PREGNANCY = [
  {
    icon: '🩸',
    name: 'NIPD',
    full: 'Non-Invasive Prenatal Diagnosis',
    desc: 'Screen for Trisomy 13, 18 or 21 (Down Syndrome) and identify the gender of your fetus through a non-invasive blood test as early as 10 weeks. An earlier, safer alternative to conventional screening.',
    badge: 'From 10 Weeks',
  },
  {
    icon: '🌸',
    name: 'POC',
    full: 'Products of Conception',
    desc: 'Chromosomal analysis on products of conception can help identify the cause of pregnancy loss. Occurring in 25–30% of recognised pregnancies, fetal loss is the most common pregnancy complication. POC analysis improves management of future pregnancies.',
    badge: 'Post-Loss Support',
  },
]

const WHATSAPP_NUMBER = '919876543210' // replace with real number

export default function GeneticTesting() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', test: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Intersection observer for fade-ins
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('gt-visible') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.gt-fade').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleWhatsApp = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = encodeURIComponent(
      `Hi BabyMakers IVF 👋\n\n` +
      `I'd like to book a Genetic Testing consultation.\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email || 'Not provided'}\n` +
      `*Test of Interest:* ${form.test || 'To be discussed'}\n` +
      `*Message:* ${form.message || 'Please contact me to schedule a consultation.'}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="gt-page">

      {/* ── HERO ── */}
      <section className="gt-hero">
        <div className="gt-hero__particles" ref={particlesRef}>
          {[...Array(22)].map((_, i) => (
            <span key={i} className="gt-particle" style={{
              '--d': `${Math.random() * 6 + 4}s`,
              '--x': `${Math.random() * 100}%`,
              '--size': `${Math.random() * 6 + 3}px`,
              '--delay': `${Math.random() * 6}s`,
            }} />
          ))}
        </div>
        <div className="gt-hero__dna">
          <div className="gt-dna-helix">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="gt-dna-pair" style={{ '--i': i }}>
                <span className="gt-dna-dot gt-dna-dot--l" />
                <span className="gt-dna-bar" />
                <span className="gt-dna-dot gt-dna-dot--r" />
              </div>
            ))}
          </div>
        </div>
        <div className="gt-hero__content">
          <div className="gt-hero__badge">🧬 Genetics Laboratory</div>
          <h1 className="gt-hero__title">
            Advanced Genetic Testing
            <br />
            <em>for Every Embryo</em>
          </h1>
          <p className="gt-hero__sub">
            Our full-service in-house Genetics Laboratory combines next-generation sequencing,
            PGD, CCS, and HLA matching — giving your family the healthiest possible start.
          </p>
          <div className="gt-hero__stats">
            {[['24', 'Chromosomes Screened'], ['99.9%', 'Accuracy Rate'], ['1st', 'In UAE for Genetics'], ['15+', 'Tests Available']].map(([n, l]) => (
              <div key={l} className="gt-hero__stat">
                <span className="gt-hero__stat-num">{n}</span>
                <span className="gt-hero__stat-lbl">{l}</span>
              </div>
            ))}
          </div>
          <a href="#gt-booking" className="gt-hero__cta">Book Genetic Consultation →</a>
        </div>
      </section>

      {/* ── DURING IVF ── */}
      <section className="gt-section gt-section--cream">
        <div className="gt-inner">
          <div className="gt-section-label gt-fade">Genetic Testing During IVF</div>
          <h2 className="gt-section-title gt-fade">Before Transfer — <em>Know Every Embryo</em></h2>
          <p className="gt-section-sub gt-fade">
            Completing genetic testing during an IVF-ICSI cycle provides a wealth of information
            about each embryo before transferring to the uterus. Results are released before
            Embryo Transfer — and the overall treatment duration is not extended.
          </p>

          <div className="gt-process gt-fade">
            {['Egg Retrieval (OPU)', 'ICSI Fertilisation', 'Embryo Culture', 'Cell Biopsy', 'Genetics Lab', 'Results Released', 'Embryo Transfer'].map((step, i) => (
              <React.Fragment key={step}>
                <div className="gt-process__step">
                  <div className="gt-process__num">{i + 1}</div>
                  <div className="gt-process__label">{step}</div>
                </div>
                {i < 6 && <div className="gt-process__arrow">→</div>}
              </React.Fragment>
            ))}
          </div>

          <div className="gt-cards">
            {TESTS.map((t, i) => (
              <div
                key={i}
                className={`gt-card gt-fade ${activeCard === i ? 'gt-card--open' : ''}`}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
              >
                <div className="gt-card__icon-wrap" style={{ background: t.color }}>
                  <span className="gt-card__icon">{t.icon}</span>
                  <div className="gt-card__icon-glow" style={{ background: t.color }} />
                </div>
                <div className="gt-card__body">
                  <div className="gt-card__short">{t.short}</div>
                  <h3 className="gt-card__name">{t.name}</h3>
                  <p className="gt-card__desc">{t.desc}</p>
                  <div className="gt-card__tags">
                    {t.tags.map(tag => (
                      <span key={tag} className="gt-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="gt-card__expand">
                  <span>{activeCard === i ? '▴' : '▾'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEREDITARY DISEASE ── */}
      <section className="gt-section gt-section--dark">
        <div className="gt-inner">
          <div className="gt-section-label gt-section-label--light gt-fade">Identify & Prevent</div>
          <h2 className="gt-section-title gt-section-title--light gt-fade">
            Protecting Future <em>Generations</em>
          </h2>
          <p className="gt-section-sub gt-section-sub--light gt-fade">
            Based on individual needs, our genetic counsellor recommends one of three methods.
            If a mutation is found, PGD during an IVF cycle is used to avoid passing on the disease.
          </p>

          <div className="gt-screening-grid">
            {SCREENING.map((s, i) => (
              <div key={i} className="gt-screening-card gt-fade">
                <div className="gt-screening-card__icon">{s.icon}</div>
                <div className="gt-screening-card__subtitle">{s.subtitle}</div>
                <h3 className="gt-screening-card__name">{s.name}</h3>
                <p className="gt-screening-card__desc">{s.desc}</p>
                <div className="gt-screening-card__line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREGNANCY ── */}
      <section className="gt-section gt-section--cream">
        <div className="gt-inner">
          <div className="gt-section-label gt-fade">Genetic Testing During Pregnancy</div>
          <h2 className="gt-section-title gt-fade">Testing Beyond <em>IVF</em></h2>

          <div className="gt-pregnancy-grid">
            {PREGNANCY.map((p, i) => (
              <div key={i} className="gt-preg-card gt-fade">
                <div className="gt-preg-card__header">
                  <span className="gt-preg-card__icon">{p.icon}</span>
                  <span className="gt-preg-card__badge">{p.badge}</span>
                </div>
                <div className="gt-preg-card__abbr">{p.name}</div>
                <h3 className="gt-preg-card__full">{p.full}</h3>
                <p className="gt-preg-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP BOOKING FORM ── */}
      <section className="gt-section gt-section--booking" id="gt-booking">
        <div className="gt-inner gt-inner--narrow">
          <div className="gt-booking">
            <div className="gt-booking__left">
              <div className="gt-section-label gt-section-label--light gt-fade">Quick Booking</div>
              <h2 className="gt-booking__title gt-fade">
                Book Your <em>Genetic Consultation</em>
              </h2>
              <p className="gt-booking__sub gt-fade">
                Fill in the form and we'll connect instantly on WhatsApp to confirm your appointment.
                Our genetic counsellors are available 7 days a week.
              </p>

              <div className="gt-booking__trust gt-fade">
                {['🔒 100% Confidential', '📞 Response within 1 hour', '🩺 Expert Counsellors', '🌍 UAE & International'].map(t => (
                  <span key={t} className="gt-trust-badge">{t}</span>
                ))}
              </div>

              <div className="gt-booking__wa-icon gt-fade">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book via WhatsApp
              </div>
            </div>

            <div className="gt-booking__right gt-fade">
              {!submitted ? (
                <form className="gt-form" onSubmit={handleWhatsApp}>
                  <div className="gt-form__group">
                    <label className="gt-form__label">Full Name *</label>
                    <input
                      className="gt-form__input"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="gt-form__group">
                    <label className="gt-form__label">WhatsApp Number *</label>
                    <input
                      className="gt-form__input"
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div className="gt-form__group">
                    <label className="gt-form__label">Email Address</label>
                    <input
                      className="gt-form__input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                    />
                  </div>

                  <div className="gt-form__group">
                    <label className="gt-form__label">Test of Interest</label>
                    <select
                      className="gt-form__input gt-form__select"
                      value={form.test}
                      onChange={e => set('test', e.target.value)}
                    >
                      <option value="">Select a test...</option>
                      <option>Family Balancing / Gender Selection</option>
                      <option>Comprehensive Chromosomal Screening (CCS)</option>
                      <option>Pre-Implantation Genetic Diagnosis (PGD)</option>
                      <option>HLA Matching</option>
                      <option>Mutation Screening (Sanger)</option>
                      <option>Exome Screening (NGS)</option>
                      <option>Premarital / Preconception Screening</option>
                      <option>Non-Invasive Prenatal Diagnosis (NIPD)</option>
                      <option>Products of Conception (POC)</option>
                      <option>Not sure – need guidance</option>
                    </select>
                  </div>

                  <div className="gt-form__group">
                    <label className="gt-form__label">Message / Questions</label>
                    <textarea
                      className="gt-form__input gt-form__textarea"
                      placeholder="Tell us about your situation or any specific questions..."
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <button type="submit" className="gt-form__submit">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Send via WhatsApp
                  </button>

                  <p className="gt-form__note">
                    Tapping the button will open WhatsApp with your details pre-filled.
                    Our team responds within 1 hour during business hours.
                  </p>
                </form>
              ) : (
                <div className="gt-form__success">
                  <div className="gt-form__success-icon">✅</div>
                  <h3>WhatsApp Opened!</h3>
                  <p>Your message is ready in WhatsApp. Just hit send and our team will be in touch shortly.</p>
                  <button className="gt-form__again" onClick={() => setSubmitted(false)}>
                    Book Another Consultation
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
