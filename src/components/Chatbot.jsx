import React, { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

const RESPONSES = {
  ivf: "IVF (In Vitro Fertilisation) involves stimulating your ovaries, retrieving eggs, fertilising them with sperm in our laboratory, and transferring the resulting embryo into the uterus. Our clinical success rate is 94% for women under 35. 🧬",
  icsi: "ICSI (Intracytoplasmic Sperm Injection) is a precise technique where a single healthy sperm is injected directly into each egg. It is the recommended treatment for male factor infertility, including low sperm count or poor motility. 🔬",
  success: "Our IVF success rate is 94% for women under 35 — among the highest in the region. Success rates vary with age and individual health factors. A personalised consultation gives you an accurate picture for your situation. 📊",
  cost: "Our consultation fee is ₹2,999 (approx. $36 USD) for a 45-minute session with a senior fertility specialist. Full IVF treatment packages start from ₹1,20,000, all-inclusive with no hidden charges. 💰",
  gender: "Yes. We offer family balancing through gender selection using PGS/PGD technology, which is 99.9% accurate. This service is available where legally permitted and is carried out under strict medical and ethical guidelines. 💙",
  international: "We welcome patients from 48+ countries. Our international programme includes airport transfers, accommodation assistance, medical visa support letters, multilingual coordinators, and remote monitoring from your home country. 🌍",
  freeze: "Our vitrification technology achieves over 98% egg and embryo survival rates. Egg and embryo freezing is an excellent option for fertility preservation, whether for medical reasons or personal family planning. ❄️",
  pgt: "PGT-A screens embryos for chromosomal abnormalities before transfer. This helps identify the healthiest embryos, improving success rates and reducing the risk of miscarriage. It is especially recommended for women over 35. 🧪",
  book: "You can book a consultation using the 'Book Consultation' button in the navigation bar. A session with a senior fertility specialist costs ₹2,999 and lasts 45 minutes. Video consultations are also available for international patients. ✨",
  default: "Hello! I am Aria, your fertility care assistant at Babymakers IVF. I can help you understand our treatments — IVF, ICSI, egg freezing, genetic testing, gender selection, and international patient services. How can I assist you today? 🌸",
}

function getResponse(msg) {
  const t = msg.toLowerCase()
  if (t.match(/ivf|in vitro/)) return RESPONSES.ivf
  if (t.match(/icsi|sperm injection/)) return RESPONSES.icsi
  if (t.match(/success|rate|percentage/)) return RESPONSES.success
  if (t.match(/cost|price|fee|money|rupee|\$/)) return RESPONSES.cost
  if (t.match(/gender|boy|girl|sex selection/)) return RESPONSES.gender
  if (t.match(/international|travel|visa|abroad|foreign/)) return RESPONSES.international
  if (t.match(/freeze|freez|vitrif|cryo/)) return RESPONSES.freeze
  if (t.match(/pgt|genetic|chromosome/)) return RESPONSES.pgt
  if (t.match(/book|appointment|consult|schedule/)) return RESPONSES.book
  return RESPONSES.default
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am Aria 🌸 Your fertility care assistant at Babymakers IVF. You can ask me about IVF, ICSI, success rates, treatment costs, egg freezing, or how to book a consultation.' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = () => {
    const msg = input.trim()
    if (!msg) return
    setMessages(m => [...m, { from: 'user', text: msg }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(m => [...m, { from: 'bot', text: getResponse(msg) }])
    }, 900)
  }

  const handleKey = e => { if (e.key === 'Enter') send() }

  return (
    <>
      <button className="chatbot__toggle" onClick={() => setOpen(o => !o)} title="Chat with Aria">
        {open ? '✕' : <img src='./images/bot.jpeg' className='rounded-full'/>}
        {!open && <span className="chatbot__badge">1</span>}
      </button>

      <div className={`chatbot__window ${open ? 'chatbot__window--open' : ''}`}>
        <div className="chatbot__header">
          <div className="chatbot__avatar">🤱</div>
          <div>
            <div className="chatbot__name">Aria — Fertility Care Assistant</div>
            <div className="chatbot__status">
              <span className="chatbot__dot" />
              Online • Ask me anything
            </div>
          </div>
          <button className="chatbot__header-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="chatbot__messages">
          {messages.map((m, i) => (
            <div key={i} className={`chatbot__msg chatbot__msg--${m.from}`}>{m.text}</div>
          ))}
          {typing && (
            <div className="chatbot__msg chatbot__msg--bot chatbot__typing">
              <span /><span /><span />
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="chatbot__suggestions">
          {['What is IVF?', 'Treatment costs?', 'Book a consultation'].map(s => (
            <button key={s} className="chatbot__chip" onClick={() => { setInput(s); }}>
              {s}
            </button>
          ))}
        </div>

        <div className="chatbot__input-row">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKey}
            placeholder="Ask about IVF, costs, treatments..."
            className="chatbot__input"
          />
          <button className="chatbot__send" onClick={send}>➤</button>
        </div>
      </div>
    </>
  )
}
