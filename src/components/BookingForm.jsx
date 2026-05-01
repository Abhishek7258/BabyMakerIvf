import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import './BookingForm.css'

// ── CONFIG: replace with your real WhatsApp number (no + sign) ──
const WA_NUMBER = '971505468001'

const SERVICES = [
  { label: 'Family Balancing', sub: 'Gender Selection', value: 'Family Balancing (Gender Selection)' },
  { label: 'CCS', sub: 'All 24 chromosomes', value: 'Comprehensive Chromosomal Screening (CCS)' },
  { label: 'PGD', sub: 'Hereditary disease', value: 'Pre-Implantation Genetic Diagnosis (PGD)' },
  { label: 'HLA Matching', sub: 'Saviour sibling', value: 'HLA Matching' },
  { label: 'Exome Screening', sub: 'Next-gen sequencing', value: 'Exome Screening (NGS)' },
  { label: 'Premarital Screen', sub: 'Carrier check', value: 'Premarital / Preconception Screening' },
  { label: 'NIPD', sub: 'During pregnancy', value: 'Non-Invasive Prenatal Diagnosis (NIPD)' },
  { label: 'Not sure yet', sub: 'Need guidance', value: 'Not sure — need guidance' },
]

const TIME_SLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM']

const COUNTRIES = [
  'United Arab Emirates', 'United Kingdom', 'United States', 'India',
  'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Egypt',
  'Nigeria', 'Kenya', 'South Africa', 'Australia', 'Canada',
  'Germany', 'France', 'Singapore', 'Other',
]

function getUpcomingDates(count = 8) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const results = []
  const now = new Date()
  for (let i = 1; i <= count; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    results.push({
      day: days[d.getDay()],
      num: d.getDate(),
      label: d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    })
  }
  return results
}

const DATES = getUpcomingDates()

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ fname: '', lname: '', phone: '', email: '', age: '', country: '' })
  const [service, setService] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [errors, setErrors] = useState({})
  const [animDir, setAnimDir] = useState('forward')
  const panelRef = useRef(null)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = (s) => {
    const e = {}
    if (s === 1) {
      if (!form.fname.trim()) e.fname = 'First name is required'
      if (!form.lname.trim()) e.lname = 'Last name is required'
      if (!form.phone.trim()) e.phone = 'WhatsApp number is required'
      else if (!/^\+?[\d\s\-()\\.]{7,}$/.test(form.phone)) e.phone = 'Enter a valid number with country code'
      if (!form.country) e.country = 'Please select your country'
    }
    if (s === 2) {
      if (!service) e.service = 'Please select a service'
    }
    if (s === 3) {
      if (!selectedDate) e.date = 'Please select a date'
      if (!selectedTime) e.time = 'Please select a time'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goStep = (n) => {
    if (n > step && !validate(step)) return
    setAnimDir(n > step ? 'forward' : 'back')
    setStep(n)
  }

  const sendToWhatsApp = () => {
    if (!validate(3)) return
    const msg =
      `Hi BabyMakers IVF! 👋\n\n` +
      `I would like to book a Genetic Testing consultation.\n\n` +
      `*Name:* ${form.fname} ${form.lname}\n` +
      `*Phone:* ${form.phone}\n` +
      (form.email ? `*Email:* ${form.email}\n` : '') +
      (form.age ? `*Age:* ${form.age}\n` : '') +
      `*Country:* ${form.country}\n` +
      `*Service:* ${service}\n` +
      `*Preferred Date:* ${selectedDate}\n` +
      `*Preferred Time:* ${selectedTime}\n` +
      (notes ? `\n*Notes:* ${notes}` : '') +
      `\n\nPlease confirm my appointment. Thank you!`

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const progress = (step / 3) * 100

  const summaryRows = [
    ['Name', `${form.fname} ${form.lname}`.trim() || '—'],
    ['Phone', form.phone || '—'],
    ['Country', form.country || '—'],
    ['Service', service || '—'],
    ['Date', selectedDate || '—'],
    ['Time', selectedTime || '—'],
  ]

  return (
    <div className="bf-page">
      <div className="bf-wrap">
        <div className="bf-card">

          {/* Header */}
          <div className="bf-header">
            <div className="bf-header__particles">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="bf-particle" style={{
                  '--x': `${Math.random() * 100}%`,
                  '--d': `${4 + Math.random() * 5}s`,
                  '--delay': `${Math.random() * 5}s`,
                  '--size': `${4 + Math.random() * 5}px`,
                }} />
              ))}
            </div>
            <div className="bf-header__badge">
              <span className="bf-badge-dot" /> Book a Consultation
            </div>
            <h1 className="bf-header__title">Genetic Testing <em>Appointment</em></h1>
            <p className="bf-header__sub">3 quick steps — your details open directly in WhatsApp</p>
          </div>

          {/* Progress bar */}
          <div className="bf-progress">
            <div className="bf-progress__fill" style={{ width: `${progress}%` }} />
          </div>

          {/* Steps bar */}
          <div className="bf-steps">
            {[['Your Details', 1], ['Select Service', 2], ['Schedule & Send', 3]].map(([label, n]) => (
              <React.Fragment key={n}>
                {n > 1 && <div className="bf-steps__connector" />}
                <div className="bf-steps__item">
                  <div className={`bf-steps__num ${step === n ? 'active' : step > n ? 'done' : ''}`}>
                    {step > n ? '✓' : n}
                  </div>
                  <span className={`bf-steps__label ${step === n ? 'active' : ''}`}>{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Form panels */}
          <div className="bf-body">

            {/* ─── STEP 1 ─── */}
            {step === 1 && (
              <div className={`bf-panel bf-panel--${animDir}`} key="step1">
                <div className="bf-row">
                  <div className="bf-field">
                    <label className="bf-label">First Name *</label>
                    <input className={`bf-input ${errors.fname ? 'bf-input--error' : ''}`} type="text" placeholder="Sarah" value={form.fname} onChange={e => set('fname', e.target.value)} />
                    {errors.fname && <span className="bf-error">{errors.fname}</span>}
                  </div>
                  <div className="bf-field">
                    <label className="bf-label">Last Name *</label>
                    <input className={`bf-input ${errors.lname ? 'bf-input--error' : ''}`} type="text" placeholder="Johnson" value={form.lname} onChange={e => set('lname', e.target.value)} />
                    {errors.lname && <span className="bf-error">{errors.lname}</span>}
                  </div>
                </div>

                <div className="bf-row">
                  <div className="bf-field">
                    <label className="bf-label">WhatsApp Number *</label>
                    <input className={`bf-input ${errors.phone ? 'bf-input--error' : ''}`} type="tel" placeholder="+971 50 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                    {errors.phone ? <span className="bf-error">{errors.phone}</span> : <span className="bf-hint">Include country code</span>}
                  </div>
                  <div className="bf-field">
                    <label className="bf-label">Email <span className="bf-optional">(optional)</span></label>
                    <input className="bf-input" type="email" placeholder="sarah@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                  </div>
                </div>

                <div className="bf-row">
                  <div className="bf-field">
                    <label className="bf-label">Age <span className="bf-optional">(optional)</span></label>
                    <input className="bf-input" type="number" placeholder="32" min="18" max="65" value={form.age} onChange={e => set('age', e.target.value)} />
                  </div>
                  <div className="bf-field">
                    <label className="bf-label">Country *</label>
                    <select className={`bf-input bf-select ${errors.country ? 'bf-input--error' : ''}`} value={form.country} onChange={e => set('country', e.target.value)}>
                      <option value="">Select country...</option>
                      {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                    {errors.country && <span className="bf-error">{errors.country}</span>}
                  </div>
                </div>

                <div className="bf-nav">
                  <span />
                  <button className="bf-btn-next" onClick={() => goStep(2)}>
                    Next: Select Service <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 2 ─── */}
            {step === 2 && (
              <div className={`bf-panel bf-panel--${animDir}`} key="step2">
                <div className="bf-field bf-field--full">
                  <label className="bf-label">Test / Service of Interest *</label>
                  <div className="bf-radio-grid">
                    {SERVICES.map((s) => (
                      <label
                        key={s.value}
                        className={`bf-radio-card ${service === s.value ? 'bf-radio-card--selected' : ''}`}
                        onClick={() => { setService(s.value); setErrors(e => ({ ...e, service: '' })) }}
                      >
                        <div className={`bf-radio-dot ${service === s.value ? 'bf-radio-dot--selected' : ''}`}>
                          {service === s.value && <span className="bf-radio-dot__inner" />}
                        </div>
                        <div className="bf-radio-text">
                          {s.label}
                          <span>{s.sub}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.service && <span className="bf-error">{errors.service}</span>}
                </div>

                <div className="bf-field bf-field--full" style={{ marginTop: '1.25rem' }}>
                  <label className="bf-label">Additional Notes <span className="bf-optional">(optional)</span></label>
                  <textarea
                    className="bf-input bf-textarea"
                    placeholder="Tell us about your situation, previous treatments, or any questions..."
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="bf-nav">
                  <button className="bf-btn-back" onClick={() => goStep(1)}>← Back</button>
                  <button className="bf-btn-next" onClick={() => goStep(3)}>
                    Next: Schedule <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 3 ─── */}
            {step === 3 && (
              <div className={`bf-panel bf-panel--${animDir}`} key="step3">
                <div className="bf-field bf-field--full">
                  <label className="bf-label">Preferred Date *</label>
                  <div className="bf-dates">
                    {DATES.map((d) => (
                      <div
                        key={d.label}
                        className={`bf-date-slot ${selectedDate === d.label ? 'bf-date-slot--selected' : ''}`}
                        onClick={() => { setSelectedDate(d.label); setErrors(e => ({ ...e, date: '' })) }}
                      >
                        <span className="bf-date-slot__day">{d.day}</span>
                        <span className="bf-date-slot__num">{d.num}</span>
                      </div>
                    ))}
                  </div>
                  {errors.date && <span className="bf-error">{errors.date}</span>}
                </div>

                <div className="bf-field bf-field--full" style={{ marginTop: '1.25rem' }}>
                  <label className="bf-label">Preferred Time *</label>
                  <div className="bf-times">
                    {TIME_SLOTS.map((t) => (
                      <div
                        key={t}
                        className={`bf-time-pill ${selectedTime === t ? 'bf-time-pill--selected' : ''}`}
                        onClick={() => { setSelectedTime(t); setErrors(e => ({ ...e, time: '' })) }}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                  {errors.time && <span className="bf-error">{errors.time}</span>}
                </div>

                {/* Summary */}
                <div className="bf-summary">
                  <div className="bf-summary__title">Booking Summary</div>
                  <div className="bf-summary__box">
                    {summaryRows.map(([k, v]) => (
                      <div className="bf-summary__row" key={k}>
                        <span className="bf-summary__key">{k}</span>
                        <span className="bf-summary__val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button className="bf-btn-wa" onClick={sendToWhatsApp}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Confirm &amp; Open WhatsApp
                </button>

                <p className="bf-confirm-note">
                  Your details open pre-filled in WhatsApp — just tap Send. We respond within 1 hour.
                </p>

                <div className="bf-nav" style={{ marginTop: '1rem' }}>
                  <button className="bf-btn-back" onClick={() => goStep(2)}>← Back</button>
                  <span className="bf-step-counter">Step 3 of 3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
