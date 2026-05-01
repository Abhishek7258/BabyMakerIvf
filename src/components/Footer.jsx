import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          {/* <div className="footer__logo">
            <div className="footer__logo-mark">B</div>
            <div>
              <span className="footer__logo-brand">Babymakers</span>
              <span className="footer__logo-suffix"> IVF</span>
            </div>
          </div> */}
           <img src="./images/logo.png" alt=""  className='w-[90px] lg:w-[120px] rounded-[6px]'/> <br />
          <p className="footer__tagline">
            World-class fertility care for families across the globe.
            Where science meets compassion, and hope becomes reality.
          </p>
          <div className="footer__socials">
           <Link to={"https://www.instagram.com/babymakersivf/"}><img src='./images/insta.png' className="w-7 h-7 inline-block mr-3 cursor-pointer" /></Link>
            <Link to={"https://www.facebook.com/share/1bZfi1j9Cp/"}><img src='./images/face.png' className="w-7 h-7 inline-block mr-3 cursor-pointer" /></Link>
           
            
          </div>
        </div>

        <div className="footer__col">
          <h4>Treatments</h4>
          <Link to="/services">IVF Treatment</Link>
          <Link to="/services">ICSI</Link>
          <Link to="/services">Egg Freezing</Link>
          <Link to="/services">PGT-A Testing</Link>
          <Link to="/services">Gender Selection</Link>
          
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/about">Our Team</Link>
          <Link to="/blog">Blog & Journal</Link>
          <Link to="/international">International Patients</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Get Started</h4>
          <Link to="/contact">Book Consultation</Link>
          <a href="tel:+971505468001">+971505468001</a>
          <a href="mailto:contact@babymakersivf.com">contact@babymakersivf.com</a>
          <a href="https://wa.me/971505468001" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Babymakers IVF. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
