import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './International.css'

const STEPS = [
  { num: '01', title: 'Virtual Consultation', desc: 'Video call with your dedicated fertility specialist. Share your history, ask questions, get a personalised treatment plan — from the comfort of your home.' },
  { num: '02', title: 'Travel & Visa Assistance', desc: 'Our international team issues medical visa support letters and coordinates with our partner travel agency for flights, accommodation, and transfers.' },
  { num: '03', title: 'Arrival & Warm Welcome', desc: 'Private airport pickup in our luxury vehicles. Check-in to your partnered accommodation — specially selected with patient wellness in mind.' },
  { num: '04', title: 'Active Treatment Cycle', desc: 'Begin your IVF/ICSI cycle with daily monitoring, lab visits, and round-the-clock nurse support. Typically 10–14 days on-site.' },
  { num: '05', title: 'Embryo Transfer & Rest', desc: 'Embryo transfer day, followed by a recommended 2–3 days of gentle rest at your luxury accommodation before returning home.' },
  { num: '06', title: 'Remote Monitoring & Support', desc: 'After returning home, our team coordinates with your local clinic for monitoring and provides ongoing support until your pregnancy test and beyond.' },
]

const INCLUSIONS = [
  { icon: '✈️', title: 'Travel Coordination', desc: 'Medical visa letters, airport transfers, and private car service to/from the clinic daily.' },
  { icon: '🏨', title: 'Luxury Accommodation', desc: '5-star hotel partnerships with fertility-friendly menus, spa access, and dedicated patient concierge.' },
  { icon: '🌐', title: 'Multilingual Support', desc: 'Coordinators available in English, Arabic, French, Swahili, Hindi, Mandarin, and more.' },
  { icon: '📱', title: 'Remote Monitoring', desc: 'Blood tests and ultrasounds coordinated with your home clinic before and after your on-site visit.' },
  { icon: '💊', title: 'Medication Management', desc: 'All medications prescribed and couriered to your home country before your arrival.' },
  { icon: '📋', title: 'Legal Support', desc: 'Full legal guidance on fertility tourism, donor programs, and surrogacy where applicable.' },
]

const COUNTRIES = [
  '🇬🇧 United Kingdom','🇦🇪 UAE','🇺🇸 United States','🇦🇺 Australia','🇳🇬 Nigeria',
  '🇰🇪 Kenya','🇿🇦 South Africa','🇸🇬 Singapore','🇩🇪 Germany','🇨🇦 Canada',
  '🇫🇷 France','🇮🇳 India','🇯🇵 Japan','🇧🇷 Brazil','🇸🇦 Saudi Arabia',
  '🇶🇦 Qatar','🇳🇱 Netherlands','🇸🇪 Sweden','🇦🇹 Austria','+ 29 more',
]

export default function International() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="intl">
      <div className="intl__hero">
        <div className="section-label" style={{ color: 'var(--gold)', textAlign: 'center' }}>Global Patients</div>
        <h1 className="serif intl__hero-title">Your Journey, <em>Beautifully</em> Supported</h1>
        <p className="intl__hero-sub">We've perfected the international patient experience — from your very first enquiry to your joyful return home.</p>
      </div>

      {/* TIMELINE + INCLUSIONS */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="intl__main-grid">
            {/* Timeline */}
            <div>
              <div className="section-label">Your Step-by-Step Journey</div>
              <h2 className="section-title serif">Every Step, We're <em>With</em> You</h2>
              <div className="intl__timeline">
                {STEPS.map((s, i) => (
                  <div key={i} className="intl__timeline-item fade-in">
                    <div className="intl__timeline-dot" />
                    <div className="intl__timeline-content">
                      <div className="intl__timeline-num">Step {s.num}</div>
                      <div className="intl__timeline-title">{s.title}</div>
                      <div className="intl__timeline-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div>
              <div className="section-label">What's Included</div>
              <h2 className="section-title serif">The <em>Premium</em> Package</h2>
              <div className="intl__inclusions">
                {INCLUSIONS.map((inc, i) => (
                  <div key={i} className="intl__inclusion-card card fade-in">
                    <div className="intl__inclusion-icon">{inc.icon}</div>
                    <div>
                      <h4 className="intl__inclusion-title">{inc.title}</h4>
                      <p className="intl__inclusion-desc">{inc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="intl__countries-section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Worldwide Trust</div>
          <h2 className="section-title serif" style={{ color: 'white' }}>Serving Patients From 48+ Countries</h2>
          <div className="intl__countries-grid">
            {COUNTRIES.map((c, i) => (
              <span key={i} className="intl__country-tag">{c}</span>
            ))}
          </div>
          <Link to="/booking" className="btn-primary" style={{ marginTop: '2.5rem', display: 'inline-flex', fontSize: 15, padding: '1rem 2.5rem' }}>
            Start Your International Journey ✦
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="intl__stats-section">
        <div className="intl__stats-inner">
          {[
            ['48+', 'Countries'],
            ['10-14', 'Days on-site'],
            ['24/7', 'Support'],
            ['5★', 'Patient Rating'],
          ].map(([n, l], i) => (
            <div key={i} className="intl__stat">
              <div className="intl__stat-num serif">{n}</div>
              <div className="intl__stat-lbl">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
