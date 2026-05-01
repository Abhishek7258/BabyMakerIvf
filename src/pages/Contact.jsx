import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    setSending(true);

    const whatsappNumber = '971505468001';

    const text = `Hello Baby Makers IVF,
Name: ${form.name}
Email: ${form.email}
Country: ${form.country || 'Not provided'}
Phone: ${form.phone || 'Not provided'}

Message:
${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <div className="contact bg-white">
      {/* Hero section */}
      <div className="contact__hero px-6 py-12 md:py-20 text-center">
        <div
          className="section-label text-lg md:text-xl font-medium"
          style={{ color: 'var(--gold)', textAlign: 'center' }}
        >
          Reach Us
        </div>
        <h1 className="serif text-2xl sm:text-3xl md:text-4xl mt-2">
          Let's <em>Talk</em> About Your Journey
        </h1>
        <p className="contact__hero-sub mt-3 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Our care team is available 7 days a week to answer your questions with compassion and expertise.
        </p>
      </div>

      {/* Contact form + info section */}
      <section
        className="section"
        style={{ background: 'var(--cream)' }}
      >
        <div className="section-inner px-6 py-10 max-w-6xl mx-auto">
          <div className="contact__grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact form card */}
            <div className="contact__form-card card bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h3 className="contact__form-title text-xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h3>

              {sent ? (
                <div className="contact__success text-center">
                  <div className="contact__success-icon text-4xl">✅</div>
                  <h3 className="text-lg font-medium mt-2">Redirected to WhatsApp!</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Thank you,{' '}
                    <strong className="text-gray-800">{form.name}</strong>! A WhatsApp chat has been opened for{' '}
                    <strong className="text-gray-800">{form.email}</strong>.
                  </p>
                  <button
                    className="btn-navy mt-4 px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition font-medium"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', country: '', phone: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div
                    className="booking__row"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}
                  >
                    <div className="form-group">
                      <label className="form-label block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Sarah Johnson"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="sarah@example.com"
                      />
                    </div>
                  </div>

                  <div
                    className="booking__row"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}
                  >
                    <div className="form-group">
                      <label className="form-label block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={form.country}
                        onChange={(e) => set('country', e.target.value)}
                        placeholder="United Kingdom"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label block text-sm font-medium text-gray-700 mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="+44 7700 123456"
                      />
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      className="form-textarea w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      rows={5}
                      placeholder="Tell us about your fertility journey and how we can help. There's no question too big or too small..."
                    />
                  </div>

                  <button
                    className="btn-primary contact__submit-btn w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-lg font-medium flex items-center justify-center gap-2"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <span className="spinner w-4 h-4 border-2 border-white border-t-transparent border-r-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message on WhatsApp ✦'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info + map */}
            <div className="contact__info space-y-6">
              {/* Phone & WhatsApp */}
              <div className="contact__info-card card bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <h4 className="contact__info-title text-lg font-medium text-gray-800 mb-2">
                  📞 Phone & WhatsApp
                </h4>
                <a href="tel:+971505468001" className="contact__info-link block text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                  +971 50 546 8001
                </a>
                <a
                  href="https://wa.me/971505468001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__whatsapp-btn mt-2 inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg transition"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="contact__info-card card bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <h4 className="contact__info-title text-lg font-medium text-gray-800 mb-2">
                  ✉️ Email
                </h4>
                <a
                  href="mailto:care@babymakersivf.com"
                  className="contact__info-link block text-blue-600 hover:text-blue-700 text-sm sm:text-base"
                >
                  care@babymakersivf.com
                </a>
                <p className="contact__info-note mt-1 text-xs sm:text-sm text-gray-500">
                  Response within 2–4 hours
                </p>
              </div>

              {/* Clinic location + map */}
              <div className="contact__info-card card bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <h4 className="contact__info-title text-lg font-medium text-gray-800 mb-2">
                  📍 Our Clinic
                </h4>
                <p className="contact__info-text text-sm sm:text-base text-gray-600 leading-relaxed">
                  Al Bataeh, Sharjah, UAE
                </p>

                <div className="contact__map-container mt-4">
                  <div className="w-full h-48 sm:h-64 md:h-96 lg:h-[300px] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d138425.33611714555!2d55.63576317778273!3d25.21552680814989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5934fa33e6601%3A0x5f60888b6a52d327!2sAl%20Bataeh%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1777433506683!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Baby Makers IVF clinic location in Sharjah, UAE"
                    ></iframe>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center">
                    Google Maps — Al Bataeh, Sharjah, UAE
                  </p>
                </div>
              </div>

              {/* Clinic hours */}
              <div className="contact__info-card card bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <h4 className="contact__info-title text-lg font-medium text-gray-800 mb-3">
                  🕐 Clinic Hours
                </h4>
                <div className="contact__hours flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday – Saturday</span>
                    <span className="text-gray-600">8:00 AM – 8:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">10:00 AM – 4:00 PM IST</span>
                  </div>
                </div>
                <p className="contact__emergency mt-2 text-xs sm:text-sm text-red-600 font-medium">
                  🚨 Emergency line available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}