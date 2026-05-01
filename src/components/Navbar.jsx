import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const THEMES = [
   { id: 'teal',   label: 'Teal',   icon: '🩵',  swatch: '#2F6F73' },
  // { id: 'light',  label: 'Light',  icon: '☀️',  swatch: '#FAF8F5' },
  // { id: 'dark',   label: 'Dark',   icon: '🌙',  swatch: '#080C18' },
  // { id: 'rose',   label: 'Rose',   icon: '🌸',  swatch: '#D4608A' },
  // { id: 'ocean',  label: 'Ocean',  icon: '🌊',  swatch: '#2A9DC8' },
  // { id: 'forest', label: 'Forest', icon: '🌿',  swatch: '#2A9460' },
  // { id: 'sunset', label: 'Sunset', icon: '🌅',  swatch: '#E8820A' },
  
]

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/international', label: 'International' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
  { to: '/genetic', label: 'Genetic IVF' },
]

export default function Navbar({ dark, setDark, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const themeRef = useRef(null)
  const location = useLocation()
  const currentTheme = THEMES.find(t => t.id === theme) || THEMES[0]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  useEffect(() => {
    const close = (e) => { if (themeRef.current && !themeRef.current.contains(e.target)) setThemeOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(o => {
      document.body.style.overflow = !o ? 'hidden' : ''
      return !o
    })
  }

  const handleTheme = (id) => {
    setTheme(id)
    setThemeOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <Link to="/" className="navbar__logo">
          <img src="./images/logo.png" alt="" className='w-[90px] lg:w-[120px] rounded-[6px]'/>
        </Link>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          {/* Theme Switcher */}
          <div className="theme-switcher hidden" ref={themeRef}>
            <button className="theme-switcher__trigger" onClick={() => setThemeOpen(o => !o)} title="Switch theme">
              <span className="theme-switcher__icon">{currentTheme.icon}</span>
              <span className="theme-switcher__label">{currentTheme.label}</span>
              <span className={`theme-switcher__caret ${themeOpen ? 'open' : ''}`}>▾</span>
            </button>

            {themeOpen && (
              <div className="theme-switcher__dropdown">
                <p className="theme-switcher__heading">Choose Theme</p>
                <div className="theme-switcher__grid">
                  {THEMES.map(t => (
                    <button key={t.id} className={`theme-option ${theme === t.id ? 'theme-option--active' : ''}`} onClick={() => handleTheme(t.id)}>
                      <span className="theme-option__swatch" style={{ background: t.swatch }} />
                      <span className="theme-option__icon">{t.icon}</span>
                      <span className="theme-option__name">{t.label}</span>
                      {theme === t.id && <span className="theme-option__check">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/booking" className="navbar__cta">Book Consultation</Link>
        </div>

        <button className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__header">
          <div className="navbar__logo">
            <div className="navbar__logo-mark">B</div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-brand">Babymakers</span>
              <span className="navbar__logo-suffix"> IVF</span>
            </div>
          </div>
          <button className="mobile-drawer__close" onClick={toggleMenu}>✕</button>
        </div>
        <nav className="mobile-drawer__nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`mobile-drawer__link ${location.pathname === l.to ? 'mobile-drawer__link--active' : ''}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/booking" className="mobile-drawer__cta">Book Consultation ✦</Link>

          <div className="mobile-drawer__themes">
            <p className="mobile-drawer__theme-heading">Theme</p>
            <div className="mobile-drawer__theme-grid">
              {THEMES.map(t => (
                <button key={t.id} className={`mobile-theme-btn ${theme === t.id ? 'mobile-theme-btn--active' : ''}`} onClick={() => { setTheme(t.id); toggleMenu() }}>
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
      {menuOpen && <div className="mobile-drawer__backdrop" onClick={toggleMenu} />}
    </>
  )
}
