import { useEffect } from "react";

// ── Configure these ────────────────────────────────────────────────
const PHONE_NUMBER = "971505468001"; // no leading +
const WHATSAPP_MSG = "Hello! I'd like to get in touch.";
// ──────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap');

  .fcb-root * { box-sizing: border-box; font-family: 'Sora', sans-serif; }

  .fcb-action-btn {
    display: flex; align-items: center; gap: 10px;
    border: none; cursor: pointer; outline: none;
    padding: 11px 20px 11px 14px; border-radius: 100px;
    font-size: 13.5px; font-weight: 500; color: #fff;
    white-space: nowrap; letter-spacing: .02em;
    transition: transform .18s ease, box-shadow .18s ease;
  }

  .fcb-action-btn:hover  { transform: translateY(-3px) scale(1.04); }
  .fcb-action-btn:active { transform: scale(.95); }

  .fcb-wa   { background: #25D366; box-shadow: 0 4px 18px rgba(37,211,102,.38); }
  .fcb-call { background: #1a73e8; box-shadow: 0 4px 18px rgba(26,115,232,.38); }
`;

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const WAIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
  </svg>
);

export default function FloatingContactButtons() {

  const handleWA = () => {
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };

  return (
    <div className="fcb-root">
      <style>{css}</style>

      <div style={{
        position: "fixed",
        bottom: "80px",
        right: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 999
      }}>

        {/* WhatsApp */}
        <button className="fcb-action-btn fcb-wa" onClick={handleWA}>
          <WAIcon /> WhatsApp
        </button>

        {/* Call */}
        <button className="fcb-action-btn fcb-call" onClick={handleCall}>
          <PhoneIcon /> Call Now
        </button>

      </div>
    </div>
  );
}