import React, { useState } from 'react'
import Footer from '../components/Footer'
import './Booking.css'

const SERVICES = [
  'IVF Treatment',
  'ICSI',
  'Egg & Embryo Freezing',
  'PGT-A Genetic Testing',
  'Gender Selection',
  'Donor Program',
  'General Fertility Assessment',
]

const TIMES = ['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM']

const COUNTRIES = [
  'United Kingdom','United Arab Emirates','United States','Australia','Canada',
  'Singapore','India','Nigeria','Kenya','South Africa','Germany','France',
  'Netherlands','Sweden','Japan','Brazil','Saudi Arabia','Qatar','Other',
]

const today = new Date().toISOString().split('T')[0]

function generateId() {
  return 'BM-' + Math.random().toString(36).substr(2,8).toUpperCase()
}

function generatePayId() {
  return 'pay_' + Math.random().toString(36).substr(2,16).toUpperCase()
}

export default function Booking() {
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', phone: '',
    country: '', age: '', service: '',
    date: '', time: '09:00 AM', notes: '',
  })
  const [errors, setErrors] = useState({})
  const [modal, setModal] = useState(null) // null | 'processing' | 'checkout' | 'success' | 'failure'
  const [payId, setPayId] = useState('')
  const [bookingRef, setBookingRef] = useState('')

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.fname.trim()) e.fname = 'First name is required'
    if (!form.lname.trim()) e.lname = 'Last name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.country) e.country = 'Please select your country'
    if (!form.service) e.service = 'Please select a service'
    if (!form.date) e.date = 'Please select a date'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const initiatePayment = () => {
    if (!validate()) return
    setModal('processing')

    // Simulate Razorpay order creation delay
    setTimeout(() => {
      setModal('checkout')
    }, 1500)
  }

  const simulateSuccess = () => {
    setPayId(generatePayId())
    setBookingRef(generateId())
    setModal('success')
  }

  const simulateFailure = () => {
    setModal('failure')
  }

  const closeModal = () => {
    setModal(null)
  }

  const formatDate = (d) => {
    if (!d) return '—'
    return new Date(d).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <div className="booking">
      <div className="booking__hero">
        <div className="section-label" style={{ color: 'var(--gold)', textAlign: 'center' }}>Get Started</div>
        <h1 className="serif booking__hero-title">Book Your Consultation</h1>
        <p className="booking__hero-sub">Secure your confidential session with a senior fertility specialist</p>
        <div className="booking__trust-row">
          <span>🔒 100% Confidential</span>
          <span>💊 Expert Specialists</span>
          <span>🌍 International Patients Welcome</span>
          <span>↩ Refundable if cancelled 48h prior</span>
        </div>
      </div>

      <div className="booking__layout">
        {/* FORM */}
        <div className="booking__form-card card">
          <div className="booking__form-section">Personal Information</div>
          <div className="booking__row">
            <div className="form-group">
              <label className="form-label">First Name *</label>
              <input className={`form-input ${errors.fname ? 'error' : ''}`} value={form.fname} onChange={e => set('fname', e.target.value)} placeholder="Sarah" />
              {errors.fname && <span className="error-msg">{errors.fname}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Last Name *</label>
              <input className={`form-input ${errors.lname ? 'error' : ''}`} value={form.lname} onChange={e => set('lname', e.target.value)} placeholder="Johnson" />
              {errors.lname && <span className="error-msg">{errors.lname}</span>}
            </div>
          </div>
          <div className="booking__row">
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input type="email" className={`form-input ${errors.email ? 'error' : ''}`} value={form.email} onChange={e => set('email', e.target.value)} placeholder="sarah@example.com" />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input type="tel" className={`form-input ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+44 7700 123456" />
              {errors.phone && <span className="error-msg">{errors.phone}</span>}
            </div>
          </div>
          <div className="booking__row">
            <div className="form-group">
              <label className="form-label">Country of Residence *</label>
              <select className={`form-select ${errors.country ? 'error' : ''}`} value={form.country} onChange={e => set('country', e.target.value)}>
                <option value="">Select Country</option>
                {COUNTRIES.map(c => <option key={c}>{c}</option>)}
              </select>
              {errors.country && <span className="error-msg">{errors.country}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Age</label>
              <input type="number" className="form-input" value={form.age} onChange={e => set('age', e.target.value)} placeholder="32" min="18" max="60" />
            </div>
          </div>

          <div className="booking__form-section" style={{ marginTop: '1.5rem' }}>Treatment & Scheduling</div>

          <div className="form-group">
            <label className="form-label">Service of Interest *</label>
            <select className={`form-select ${errors.service ? 'error' : ''}`} value={form.service} onChange={e => set('service', e.target.value)}>
              <option value="">Select Treatment</option>
              {SERVICES.map(s => <option key={s}>{s}</option>)}
            </select>
            {errors.service && <span className="error-msg">{errors.service}</span>}
          </div>

          <div className="booking__row">
            <div className="form-group">
              <label className="form-label">Preferred Date *</label>
              <input type="date" className={`form-input ${errors.date ? 'error' : ''}`} value={form.date} min={today} onChange={e => set('date', e.target.value)} />
              {errors.date && <span className="error-msg">{errors.date}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Preferred Time</label>
              <select className="form-select" value={form.time} onChange={e => set('time', e.target.value)}>
                {TIMES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Additional Notes</label>
            <textarea
              className="form-textarea"
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              rows={3}
              placeholder="Share any relevant medical history or specific questions you have for the specialist..."
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className="booking__privacy">
            🔒 Your information is fully confidential and protected under our privacy policy. We will never share your data with third parties.
          </div>
        </div>

        {/* SUMMARY SIDEBAR */}
        <div className="booking__sidebar">
          <div className="booking__summary">
            <h3 className="serif booking__summary-title">Booking Summary</h3>
            <div className="booking__summary-rows">
              {[
                ['Consultation Type', form.service || '—'],
                ['Date', formatDate(form.date)],
                ['Time', form.time],
                ['Duration', '45 minutes'],
                ['Format', 'Video / In-Person'],
                ['Specialist', 'Senior Fertility Doctor'],
              ].map(([k, v]) => (
                <div key={k} className="booking__summary-row">
                  <span className="booking__summary-key">{k}</span>
                  <span className="booking__summary-val">{v}</span>
                </div>
              ))}
            </div>
            <div className="booking__price-box">
              <div className="booking__price-label">Consultation Fee</div>
              <div className="booking__price-amount serif">₹2,999</div>
              <div className="booking__price-note">≈ $36 USD · Refundable if cancelled 48h prior</div>
            </div>
            <button className="booking__pay-btn" onClick={initiatePayment}>
              💳 Pay &amp; Confirm Booking
            </button>
            <div className="booking__razorpay-badge">
              🔒 Secured by <strong>Razorpay</strong>
            </div>
            <div className="booking__payment-methods">
              UPI · Debit/Credit Cards · Net Banking · Wallets
            </div>
          </div>

          <div className="booking__assurance">
            <div className="booking__assurance-item"><span>✅</span><span>Board-certified specialist</span></div>
            <div className="booking__assurance-item"><span>✅</span><span>Confidential &amp; secure</span></div>
            <div className="booking__assurance-item"><span>✅</span><span>Full refund if cancelled 48h before</span></div>
            <div className="booking__assurance-item"><span>✅</span><span>Confirmation email instantly</span></div>
          </div>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      {modal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget && modal === 'success') closeModal() }}>
          <div className="modal-box">
            {modal === 'processing' && (
              <>
                <div className="booking__modal-icon">⏳</div>
                <h2 className="serif booking__modal-title">Connecting to Razorpay</h2>
                <p className="booking__modal-msg">Creating your secure payment session...</p>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
                  <div className="spinner" style={{ width: 36, height: 36, borderWidth: 3 }} />
                </div>
              </>
            )}

            {modal === 'checkout' && (
              <>
                <div className="booking__modal-icon">💳</div>
                <h2 className="serif booking__modal-title">Complete Payment</h2>
                <p className="booking__modal-msg">
                  In production, the <strong>Razorpay Checkout</strong> modal opens here. <br />
                  Amount: <strong>₹2,999</strong> · Patient: <strong>{form.fname} {form.lname}</strong>
                </p>
                <div className="booking__order-id">
                  Order ID: {generateId()} · Amount: ₹2,999
                </div>
                <div className="booking__payment-icons">
                  <span>💳 Cards</span>
                  <span>📱 UPI</span>
                  <span>🏦 Net Banking</span>
                  <span>👛 Wallets</span>
                </div>
                <button className="booking__pay-btn" style={{ marginTop: '1rem' }} onClick={simulateSuccess}>
                  ✦ Simulate Successful Payment
                </button>
                <button className="booking__fail-btn" onClick={simulateFailure}>
                  Simulate Failed Payment
                </button>
                <button className="booking__cancel-btn" onClick={closeModal}>Cancel</button>
              </>
            )}

            {modal === 'success' && (
              <>
                <div className="booking__modal-icon booking__modal-icon--success">✅</div>
                <h2 className="serif booking__modal-title" style={{ color: '#15803D' }}>Booking Confirmed!</h2>
                <p className="booking__modal-msg">
                  Congratulations, <strong>{form.fname}</strong>! Your consultation for <strong>{form.service}</strong> has been confirmed
                  {form.date ? ` for ${formatDate(form.date)}` : ''}. A confirmation email has been sent to <strong>{form.email}</strong>.
                </p>
                <div className="booking__order-id">
                  Payment ID: {payId}<br />
                  Booking Ref: {bookingRef}
                </div>
                <p className="booking__modal-msg" style={{ fontSize: 13, marginTop: '0.5rem' }}>
                  Our care coordinator will contact you within 2 hours to confirm your appointment and send pre-consultation instructions.
                </p>
                <button className="booking__pay-btn" style={{ background: 'linear-gradient(135deg,#15803D,#166534)', marginTop: '1rem' }} onClick={closeModal}>
                  Done 🏠
                </button>
                <div className="booking__razorpay-badge" style={{ marginTop: '1rem' }}>
                  ✅ Payment recorded securely · No further action needed
                </div>
              </>
            )}

            {modal === 'failure' && (
              <>
                <div className="booking__modal-icon booking__modal-icon--fail">❌</div>
                <h2 className="serif booking__modal-title" style={{ color: '#DC2626' }}>Payment Failed</h2>
                <p className="booking__modal-msg">
                  Unfortunately, the payment could not be processed. This may be due to insufficient funds, an incorrect card number, or a bank decline. Please try a different payment method.
                </p>
                <div className="booking__order-id" style={{ borderColor: '#FCA5A5', color: '#DC2626' }}>
                  Error: PAYMENT_DECLINED · Code: ERR_402
                </div>
                <button className="booking__pay-btn" style={{ marginTop: '1rem' }} onClick={() => setModal('checkout')}>
                  Try Again
                </button>
                <button className="booking__cancel-btn" onClick={closeModal}>Cancel</button>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
