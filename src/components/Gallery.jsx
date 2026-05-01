import { useState, useEffect, useCallback, useRef } from "react";

const ITEMS = [
  { id:1,  src:"./images/a.png" },
  { id:2,  src:"./images/b.png" },
  { id:3,  src:"./images/c.png" },
  { id:4,  src:"./images/d.png" },
  { id:5,  src:"./images/e.png" },
  { id:6,  src:"./images/f.jpeg" },
  { id:7,  src:"./images/g.jpeg" },
  { id:8,  src:"./images/h.jpeg" },
  { id:9,  src:"./images/i.jpeg" },
  
  
  { id:12, src:"./images/j.jpeg" },
  { id:13, src:"./images/k.jpeg" },
  
];



const CAT_COLORS = {
  retreats:"#7c5cbf", sessions:"#5a9060",
  couples:"#c04060",  family:"#c8803a", healing:"#9b7ec8",
};

/* ── breakpoint ── */
const useBreakpoint = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return { isMobile: w < 640, isTablet: w >= 640 && w < 1024 };
};

/* ══════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════ */
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const { isMobile } = useBreakpoint();
  const touchStart = useRef(null);
  const item = items[index];

  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   onPrev();
      if (e.key === "ArrowRight")  onNext();
    };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchStart.current === null) return;
        const d = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(d) > 50) d > 0 ? onNext() : onPrev();
        touchStart.current = null;
      }}
      style={{
        position:"fixed", inset:0, zIndex:9999,
        background:"rgba(5,2,14,.95)",
        display:"flex", alignItems:"center", justifyContent:"center",
        padding: isMobile ? "16px 12px" : "24px 20px",
        animation:"lbin .2s ease",
      }}
    >
      {/* Close */}
      <button
        onClick={e => { e.stopPropagation(); onClose(); }}
        style={{ position:"absolute", top:14, right:14, width:38, height:38, borderRadius:"50%", background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.18)", color:"#fff", fontSize:16, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}
      >✕</button>

      {/* Arrows — desktop only */}
      {!isMobile && (
        <>
          <button onClick={e => { e.stopPropagation(); onPrev(); }}
            style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", width:42, height:42, borderRadius:"50%", background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", color:"#fff", fontSize:22, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>‹</button>
          <button onClick={e => { e.stopPropagation(); onNext(); }}
            style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", width:42, height:42, borderRadius:"50%", background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", color:"#fff", fontSize:22, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>›</button>
        </>
      )}

      {/* Content */}
      <div onClick={e => e.stopPropagation()} style={{ maxWidth:860, width:"100%", animation:"lbslide .25s ease" }}>
        <img src={item.src} alt={item.caption} style={{ width:"100%", maxHeight: isMobile ? "56vh" : "68vh", objectFit:"contain", borderRadius:12, display:"block" }} />

        {/* Caption */}
        <div style={{ padding:"12px 4px 0", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12 }}>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize: isMobile ? 14 : 16, fontWeight:600, color:"#fff", marginBottom:4 }}>{item.caption}</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,.45)", display:"flex", alignItems:"center", gap:4 }}>📍 {item.location}</div>
          </div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,.3)", whiteSpace:"nowrap" }}>{index+1} / {items.length}</div>
        </div>

        {/* Dots */}
        <div style={{ display:"flex", justifyContent:"center", gap:5, marginTop:12, flexWrap:"wrap" }}>
          {items.map((_,i) => (
            <div key={i} style={{ height:5, width: i===index ? 18:5, borderRadius:5, background: i===index ? "linear-gradient(90deg,#9b7ec8,#c8a84b)" : "rgba(255,255,255,.22)", transition:"all .25s", cursor:"pointer" }} />
          ))}
        </div>

        {/* Swipe hint */}
        {isMobile && <p style={{ textAlign:"center", fontSize:11, color:"rgba(255,255,255,.22)", marginTop:8 }}>← swipe to navigate →</p>}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   CARD
══════════════════════════════════════ */
function Card({ item, index, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:"relative", aspectRatio:"1/1",
        borderRadius:12, overflow:"hidden", cursor:"pointer",
        background:"#e8e0f5",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        boxShadow: hovered ? "0 12px 36px rgba(124,92,191,.2)" : "0 2px 10px rgba(0,0,0,.07)",
        transition:"transform .32s cubic-bezier(.34,1.2,.64,1), box-shadow .32s",
        animation:`cardIn .4s ease ${Math.min(index*0.04,.36)}s both`,
      }}
    >
      {/* Skeleton */}
      {!loaded && (
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,rgba(184,169,217,.12) 25%,rgba(184,169,217,.22) 50%,rgba(184,169,217,.12) 75%)", backgroundSize:"200% 100%", animation:"sk 1.4s linear infinite" }} />
      )}

      {/* Image */}
      <img
        src={item.src} alt={item.caption} loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity: loaded ? 1 : 0, transition:"opacity .35s, transform .35s", transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />

      {/* Overlay */}
      <div style={{ position:"absolute", inset:0, background: hovered ? "linear-gradient(to top,rgba(10,5,20,.82) 0%,rgba(10,5,20,.1) 55%,transparent 100%)" : "linear-gradient(to top,rgba(10,5,20,.6) 0%,transparent 55%)", transition:"background .28s" }} />

      {/* Category pill */}
      <div style={{ position:"absolute", top:8, left:8, padding:"3px 9px", borderRadius:50, fontSize:10, fontWeight:500, color:"#fff", background:`${CAT_COLORS[item.cat]||"#7c5cbf"}cc`, backdropFilter:"blur(6px)", border:"1px solid rgba(255,255,255,.18)", opacity: hovered ? 1 : .8, transition:"opacity .22s" }}>
        {item.cat}
      </div>

      {/* Expand icon */}
      <div style={{ position:"absolute", top:8, right:8, width:26, height:26, borderRadius:"50%", background:"rgba(255,255,255,.14)", backdropFilter:"blur(6px)", border:"1px solid rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, color:"#fff", opacity: hovered ? 1 : 0, transform: hovered ? "scale(1)" : "scale(.65)", transition:"all .25s" }}>⤢</div>

      {/* Caption */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"10px 10px 8px", transform: hovered ? "translateY(0)" : "translateY(5px)", opacity: hovered ? 1 : .75, transition:"all .28s" }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:12, fontWeight:600, color:"#fff", lineHeight:1.3, marginBottom:3, overflow:"hidden", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", textShadow:"0 1px 4px rgba(0,0,0,.5)" }}>{item.caption}</div>
        <div style={{ fontSize:10, color:"rgba(255,255,255,.6)", display:"flex", alignItems:"center", gap:3 }}>
          <span style={{ fontSize:8 }}>📍</span>{item.location}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN GALLERY
══════════════════════════════════════ */
export function GallerySection({ T }) {
  const { isMobile, isTablet } = useBreakpoint();
  const PAGE = isMobile ? 6 : 9;

  const [activeCat, setActiveCat]   = useState("all");
  const [visible, setVisible]       = useState(PAGE);
  const [lbIndex, setLbIndex]       = useState(null);

  const filtered = activeCat === "all" ? ITEMS : ITEMS.filter(i => i.cat === activeCat);
  const shown    = filtered.slice(0, visible);
  const hasMore  = visible < filtered.length;

  useEffect(() => { setVisible(PAGE); }, [activeCat]);

  const cols = isMobile ? 1 : isTablet ? 3 : 3;

  const accent   = T?.accent   || "#7c5cbf";
  const gold     = T?.gold     || "#c8a84b";
  const textDark = T?.textDark || "#2d2040";
  const textMuted= T?.textMuted|| "#8a7a9a";
  const bgPage   = T?.bgBody   || "#fdf8f0";
  const bgHero   = T?.bgHero   || "linear-gradient(160deg,#ede0ff 0%,#e8f5e4 100%)";
  const bgSect   = T?.bgSection1 || "linear-gradient(160deg,#f5eeff 0%,#fdf8f0 100%)";
  const glass    = T?.bgGlass  || "rgba(255,255,255,.6)";
  const border   = T?.glassBorder || "rgba(184,169,217,.3)";

  return (
    <>
      <style>{`
        @keyframes cardIn  { from{opacity:0;transform:scale(.9) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes sk      { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes lbin    { from{opacity:0} to{opacity:1} }
        @keyframes lbslide { from{opacity:0;transform:scale(.95)} to{opacity:1;transform:scale(1)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Hero */}
      <section style={{ padding: isMobile ? "56px 20px 44px" : "72px 40px 60px", background: bgHero, textAlign:"center", transition:"background .5s" }}>
        <div style={{ maxWidth:520, margin:"0 auto", animation:"fadeUp .5s ease" }}>
          <span style={{ display:"inline-block", fontSize:11, fontWeight:600, letterSpacing:".18em", textTransform:"uppercase", color: gold, marginBottom:10 }}>✦ Sacred Moments ✦</span>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize: isMobile ? "clamp(28px,8vw,38px)" : "clamp(34px,4vw,48px)", fontWeight:700, lineHeight:1.18, color: textDark, marginBottom:12 }}>
            A Window Into{" "}
            <em style={{ fontStyle:"italic", background:`linear-gradient(135deg,${accent},${gold})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Our World</em>
          </h1>
          <p style={{ fontSize: isMobile ? 14 : 16, lineHeight:1.8, color: textMuted, fontWeight:300 }}>
            Glimpses of retreats, healing sessions, and sacred transformations — in nature, in circles, in hearts.
          </p>
        </div>
      </section>

      {/* Gallery body */}
      <section style={{ padding: isMobile ? "28px 14px 52px" : "40px 32px 64px", background: bgSect, transition:"background .5s" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>

          {/* Filters — scrollable on mobile */}
          

          {/* Count */}
          <p style={{ textAlign:"center", fontSize:12, color: textMuted, marginBottom:16 }}>
            Showing <strong style={{ color: accent }}>{shown.length}</strong> of <strong style={{ color: accent }}>{filtered.length}</strong> moments
          </p>

          {/* Grid */}
          {shown.length === 0 ? (
            <div style={{ textAlign:"center", padding:"48px 20px" }}>
              <div style={{ fontSize:36, opacity:.3, marginBottom:12 }}>🌿</div>
              <p style={{ fontFamily:"'Playfair Display',serif", fontSize:18, color: textDark, marginBottom:6 }}>No moments here yet</p>
              <p style={{ fontSize:13, color: textMuted }}>Try a different category</p>
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap: isMobile ? 8 : 12 }}>
              {shown.map((item, idx) => (
                <Card key={`${item.id}-${activeCat}`} item={item} index={idx} onClick={i => setLbIndex(i)} />
              ))}
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div style={{ textAlign:"center", marginTop: isMobile ? 24 : 32 }}>
              <button
                onClick={() => setVisible(v => v + (isMobile ? 4 : 6))}
                style={{ padding: isMobile ? "10px 26px" : "11px 30px", borderRadius:50, fontSize:13, fontWeight:500, background:"transparent", border:`1.5px solid ${accent}`, color: accent, cursor:"pointer", fontFamily:"inherit", transition:"all .2s", display:"inline-flex", alignItems:"center", gap:8 }}
                onMouseEnter={e => { e.currentTarget.style.background=accent; e.currentTarget.style.color="#fff"; e.currentTarget.style.transform="translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=accent; e.currentTarget.style.transform=""; }}
              >
                ✦ Load more <span style={{ opacity:.6, fontSize:12 }}>({filtered.length - visible} more)</span>
              </button>
            </div>
          )}

          {/* Stats */}
          <div style={{ marginTop: isMobile ? 36 : 48, display:"grid", gridTemplateColumns:"repeat(2,1fr)", background: glass, backdropFilter:"blur(16px)", border:`1px solid ${border}`, borderRadius:16, overflow:"hidden" }}>
            {[["📸","200+","Photos"],["🌿","18+","Years"],["📍","15+","Locations"],["💜","100%","Real"]].map(([icon,val,lbl],i) => (
              <div key={i} style={{ padding: isMobile ? "18px 12px" : "22px 16px", textAlign:"center", borderRight: i%2===0 ? `1px solid ${border}` : "none", borderBottom: i<2 ? `1px solid ${border}` : "none" }}>
                <div style={{ fontSize:20, marginBottom:5 }}>{icon}</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize: isMobile ? 22 : 28, fontWeight:700, background:`linear-gradient(135deg,${accent},${gold})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{val}</div>
                <div style={{ fontSize:11, color: textMuted, marginTop:2 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Sunrise Sadhana */}
      {/* Lightbox */}
      {lbIndex !== null && (
        <Lightbox
          items={shown}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onPrev={() => setLbIndex(i => (i - 1 + shown.length) % shown.length)}
          onNext={() => setLbIndex(i => (i + 1) % shown.length)}
        />
      )}
    </>
  );
}

/* Page wrapper */
export function GalleryPage({ T }) {
  const { isMobile } = useBreakpoint();
  return (
    <div style={{ paddingTop: isMobile ? 60 : 68, background: T?.bgBody || "#fdf8f0", transition:"background .5s" }}>
      <GallerySection T={T} />
    </div>
  );
}