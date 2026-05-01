import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Booking from './components/BookingForm'
import International from './pages/International'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import FloatingContactButtons from './components/Floatingcontactbuttons'
import ScrollToTop from './components/ScrollToTop'
import GeneticTestingAtFakihIVF from "./pages/GeneticTesting"
import GeneticTesting from './pages/GeneticTesting'
import BookingForm from './components/BookingForm'

export const ALL_THEMES = ['light', 'dark', 'rose', 'ocean', 'forest', 'sunset']

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('bm-theme') || 'light')

  useEffect(() => {
    ALL_THEMES.forEach(t => document.body.classList.remove(t))
    document.body.classList.add(theme)
    localStorage.setItem('bm-theme', theme)
  }, [theme])

  const dark = theme === 'dark'
  const setDark = (val) => setTheme(typeof val === 'function' ? (val(dark) ? 'dark' : 'light') : (val ? 'dark' : 'light'))

  return (
    <>
      <Navbar dark={dark} setDark={setDark} theme={theme} setTheme={setTheme} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
        <Route path="/international" element={<International />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/genetic" element={<GeneticTesting />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
      <Chatbot />
      <FloatingContactButtons/>
    </>
  )
}
