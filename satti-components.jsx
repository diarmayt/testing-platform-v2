/* shared React components for СӘТТІ platform */
const { useState, useEffect, useRef, createContext, useContext } = React;

/* ── i18n context ────────────────────────────────── */
const LangCtx = createContext({ lang: 'ru', setLang: () => {}, t: (r,k) => r });

function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('satti-lang') || 'ru');
  useEffect(() => { localStorage.setItem('satti-lang', lang); document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru'; }, [lang]);
  const t = (ru, kz) => lang === 'kz' ? (kz || ru) : ru;
  return React.createElement(LangCtx.Provider, { value: { lang, setLang, t } }, children);
}

function useLang() { return useContext(LangCtx); }

/* ── SVG Icons (inline, no deps) ────────────────── */
const Icons = {
  eye: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z'}),React.createElement('circle',{cx:12,cy:12,r:3})),
  eyeOff: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'}),React.createElement('line',{x1:1,y1:1,x2:23,y2:23})),
  chevronRight: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('polyline',{points:'9 18 15 12 9 6'})),
  chevronLeft: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('polyline',{points:'15 18 9 12 15 6'})),
  check: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('polyline',{points:'20 6 9 17 4 12'})),
  clock: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('circle',{cx:12,cy:12,r:10}),React.createElement('polyline',{points:'12 6 12 12 16 14'})),
  list: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('line',{x1:8,y1:6,x2:21,y2:6}),React.createElement('line',{x1:8,y1:12,x2:21,y2:12}),React.createElement('line',{x1:8,y1:18,x2:21,y2:18}),React.createElement('line',{x1:3,y1:6,x2:3.01,y2:6}),React.createElement('line',{x1:3,y1:12,x2:3.01,y2:12}),React.createElement('line',{x1:3,y1:18,x2:3.01,y2:18})),
  star: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('polygon',{points:'12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'})),
  upload: React.createElement('svg',{width:24,height:24,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'}),React.createElement('polyline',{points:'17 8 12 3 7 8'}),React.createElement('line',{x1:12,y1:3,x2:12,y2:15})),
  download: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'}),React.createElement('polyline',{points:'7 10 12 15 17 10'}),React.createElement('line',{x1:12,y1:15,x2:12,y2:3})),
  search: React.createElement('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('circle',{cx:11,cy:11,r:8}),React.createElement('line',{x1:21,y1:21,x2:16.65,y2:16.65})),
  bell: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'}),React.createElement('path',{d:'M13.73 21a2 2 0 0 1-3.46 0'})),
  help: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('circle',{cx:12,cy:12,r:10}),React.createElement('path',{d:'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'}),React.createElement('line',{x1:12,y1:17,x2:12.01,y2:17})),
  settings: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('circle',{cx:12,cy:12,r:3}),React.createElement('path',{d:'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'})),
  user: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'}),React.createElement('circle',{cx:12,cy:7,r:4})),
  users: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'}),React.createElement('circle',{cx:9,cy:7,r:4}),React.createElement('path',{d:'M23 21v-2a4 4 0 0 0-3-3.87'}),React.createElement('path',{d:'M16 3.13a4 4 0 0 1 0 7.75'})),
  grid: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('rect',{x:3,y:3,width:7,height:7}),React.createElement('rect',{x:14,y:3,width:7,height:7}),React.createElement('rect',{x:14,y:14,width:7,height:7}),React.createElement('rect',{x:3,y:14,width:7,height:7})),
  fileText: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'}),React.createElement('polyline',{points:'14 2 14 8 20 8'}),React.createElement('line',{x1:16,y1:13,x2:8,y2:13}),React.createElement('line',{x1:16,y1:17,x2:8,y2:17}),React.createElement('polyline',{points:'10 9 9 9 8 9'})),
  barChart: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('line',{x1:12,y1:20,x2:12,y2:10}),React.createElement('line',{x1:18,y1:20,x2:18,y2:4}),React.createElement('line',{x1:6,y1:20,x2:6,y2:16})),
  clipboard: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'}),React.createElement('rect',{x:8,y:2,width:8,height:4,rx:1,ry:1})),
  logOut: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'}),React.createElement('polyline',{points:'16 17 21 12 16 7'}),React.createElement('line',{x1:21,y1:12,x2:9,y2:12})),
  plus: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('line',{x1:12,y1:5,x2:12,y2:19}),React.createElement('line',{x1:5,y1:12,x2:19,y2:12})),
  trash: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('polyline',{points:'3 6 5 6 21 6'}),React.createElement('path',{d:'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'})),
  edit: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'}),React.createElement('path',{d:'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'})),
  externalLink: React.createElement('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'}),React.createElement('polyline',{points:'15 3 21 3 21 9'}),React.createElement('line',{x1:10,y1:14,x2:21,y2:3})),
  calendar: React.createElement('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('rect',{x:3,y:4,width:18,height:18,rx:2,ry:2}),React.createElement('line',{x1:16,y1:2,x2:16,y2:6}),React.createElement('line',{x1:8,y1:2,x2:8,y2:6}),React.createElement('line',{x1:3,y1:10,x2:21,y2:10})),
  arrowRight: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('line',{x1:5,y1:12,x2:19,y2:12}),React.createElement('polyline',{points:'12 5 19 12 12 19'})),
  arrowLeft: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('line',{x1:19,y1:12,x2:5,y2:12}),React.createElement('polyline',{points:'12 19 5 12 12 5'})),
  shield: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'})),
  play: React.createElement('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'currentColor',stroke:'none'},React.createElement('polygon',{points:'5 3 19 12 5 21 5 3'})),
  info: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('circle',{cx:12,cy:12,r:10}),React.createElement('line',{x1:12,y1:16,x2:12,y2:12}),React.createElement('line',{x1:12,y1:8,x2:12.01,y2:8})),
  checkCircle: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M22 11.08V12a10 10 0 1 1-5.93-9.14'}),React.createElement('polyline',{points:'22 4 12 14.01 9 11.01'})),
  xCircle: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('circle',{cx:12,cy:12,r:10}),React.createElement('line',{x1:15,y1:9,x2:9,y2:15}),React.createElement('line',{x1:9,y1:9,x2:15,y2:15})),
  filter: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('polygon',{points:'22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'})),
  mail: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'}),React.createElement('polyline',{points:'22,6 12,13 2,6'})),
  image: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('rect',{x:3,y:3,width:18,height:18,rx:2,ry:2}),React.createElement('circle',{cx:8.5,cy:8.5,r:1.5}),React.createElement('polyline',{points:'21 15 16 10 5 21'})),
  video: React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('rect',{x:2,y:2,width:20,height:20,rx:2.18,ry:2.18}),React.createElement('line',{x1:7,y1:2,x2:7,y2:22}),React.createElement('line',{x1:17,y1:2,x2:17,y2:22}),React.createElement('line',{x1:2,y1:12,x2:22,y2:12}),React.createElement('line',{x1:2,y1:7,x2:7,y2:7}),React.createElement('line',{x1:2,y1:17,x2:7,y2:17}),React.createElement('line',{x1:17,y1:7,x2:22,y2:7}),React.createElement('line',{x1:17,y1:17,x2:22,y2:17})),
  eye2: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z'}),React.createElement('circle',{cx:12,cy:12,r:3})),
  share: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('circle',{cx:18,cy:5,r:3}),React.createElement('circle',{cx:6,cy:12,r:3}),React.createElement('circle',{cx:18,cy:19,r:3}),React.createElement('line',{x1:8.59,y1:13.51,x2:15.42,y2:17.49}),React.createElement('line',{x1:15.41,y1:6.51,x2:8.59,y2:10.49})),
  save: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z'}),React.createElement('polyline',{points:'17 21 17 13 7 13 7 21'}),React.createElement('polyline',{points:'7 3 7 8 15 8'})),
  file: React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'},React.createElement('path',{d:'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'}),React.createElement('polyline',{points:'13 2 13 9 20 9'})),
};

/* ── Header ──────────────────────────────────────── */
function SattiHeader({ variant = 'simple', userName, userRole, avatarInitials, onNavigate }) {
  const { lang, setLang, t } = useLang();
  const headerStyles = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '12px 24px', borderBottom: '1px solid var(--border)',
    background: 'var(--bg)', position: 'sticky', top: 0, zIndex: 100,
  };
  const logoStyles = {
    fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700,
    color: 'var(--primary)', textDecoration: 'none', letterSpacing: '-0.01em', cursor: 'pointer',
  };
  const switcherStyles = { display: 'flex', alignItems: 'center', gap: 0, border: '1px solid var(--border)', borderRadius: 999, overflow: 'hidden', background: 'var(--surface)' };
  const langBtnBase = { fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, padding: '8px 16px', border: 'none', cursor: 'pointer', lineHeight: 1, transition: 'all 0.2s' };

  return React.createElement('header', { style: headerStyles },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
      React.createElement('a', { style: logoStyles, href: 'index.html' }, 'СӘТТІ'),
      React.createElement('a', { href: 'index.html', style: { display: 'inline-flex', alignItems: 'center', gap: 5, height: 30, padding: '0 10px', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, fontWeight: 600, color: 'var(--muted)', textDecoration: 'none', background: 'var(--surface)', transition: 'all 0.15s', flexShrink: 0 }, onMouseOver: e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }, onMouseOut: e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; } },
        React.createElement('svg', { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
          React.createElement('rect', { x: 3, y: 3, width: 7, height: 7 }), React.createElement('rect', { x: 14, y: 3, width: 7, height: 7 }), React.createElement('rect', { x: 14, y: 14, width: 7, height: 7 }), React.createElement('rect', { x: 3, y: 14, width: 7, height: 7 })),
        t('Все экраны', 'Барлық экрандар')
      ),
      variant === 'admin' && React.createElement('span', { style: { fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', borderLeft: '1px solid var(--border)', paddingLeft: 10 } }, t('ЦЕНТР СЕРТИФИКАЦИИ', 'СЕРТИФИКАТТАУ ОРТАЛЫҒЫ'))
    ),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
      React.createElement('div', { style: switcherStyles },
        React.createElement('button', { style: { ...langBtnBase, background: lang === 'ru' ? 'var(--primary)' : 'transparent', color: lang === 'ru' ? '#fff' : 'var(--muted)' }, onClick: () => setLang('ru') }, 'Рус'),
        React.createElement('button', { style: { ...langBtnBase, background: lang === 'kz' ? 'var(--primary)' : 'transparent', color: lang === 'kz' ? '#fff' : 'var(--muted)' }, onClick: () => setLang('kz') }, 'Қаз'),
      ),
      variant !== 'simple' && React.createElement('button', { style: { width: 36, height: 36, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, Icons.bell),
      variant !== 'simple' && React.createElement('button', { style: { width: 36, height: 36, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, Icons.help),
      variant !== 'simple' && avatarInitials && React.createElement(Avatar, { initials: avatarInitials, size: 36 }),
    )
  );
}

/* ── Footer ──────────────────────────────────────── */
function SattiFooter({ variant = 'full' }) {
  const { t } = useLang();
  const st = { borderTop: '1px solid var(--border)', padding: '24px 24px 20px', background: variant === 'dark' ? 'var(--ink)' : 'var(--bg)' };
  const inner = { maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 };
  const linkSt = { fontSize: 14, color: variant === 'dark' ? 'rgba(255,255,255,0.6)' : 'var(--muted)', textDecoration: 'none' };
  const copySt = { fontSize: 14, color: variant === 'dark' ? 'rgba(255,255,255,0.4)' : 'var(--muted)', marginTop: 4 };

  return React.createElement('footer', { style: st },
    React.createElement('div', { style: inner },
      React.createElement('div', null,
        React.createElement('div', { style: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: variant === 'dark' ? '#fff' : 'var(--primary)', marginBottom: 4 } }, 'СӘТТІ'),
        React.createElement('p', { style: copySt }, t('© 2026 ТОО «Центр сертификации ІТ-специалистов «СӘТТІ»»', '© 2026 «СӘТТІ» ІТ мамандарды сертификаттау орталығы» ЖШС')),
      ),
      React.createElement('div', { style: { display: 'flex', gap: 24, flexWrap: 'wrap' } },
        React.createElement('a', { href: '#', style: linkSt }, t('Конфиденциальность', 'Құпиялылық')),
        React.createElement('a', { href: '#', style: linkSt }, t('Условия использования', 'Пайдалану шарттары')),
        React.createElement('a', { href: '#', style: linkSt }, t('Служба поддержки', 'Қолдау қызметі')),
        React.createElement('a', { href: '#', style: { ...linkSt, color: 'var(--primary)', fontWeight: 600 } }, 'Enbek.kz'),
      )
    )
  );
}

/* ── Avatar ───────────────────────────────────────── */
function Avatar({ initials, size = 40, color }) {
  const bg = color || 'var(--primary-light)';
  const textColor = color ? '#fff' : 'var(--primary)';
  return React.createElement('div', {
    style: { width: size, height: size, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.38, fontWeight: 700, color: textColor, flexShrink: 0, letterSpacing: '0.02em' }
  }, initials);
}

/* ── Button ──────────────────────────────────────── */
function Btn({ children, variant = 'primary', icon, iconRight, onClick, disabled, fullWidth, size = 'md', style: extraStyle }) {
  const base = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 600, borderRadius: 10, border: 'none', cursor: disabled ? 'default' : 'pointer', transition: 'all 0.2s', textDecoration: 'none', whiteSpace: 'nowrap', opacity: disabled ? 0.5 : 1 };
  const sizes = { sm: { height: 36, padding: '0 16px', fontSize: 14 }, md: { height: 44, padding: '0 24px', fontSize: 16 }, lg: { height: 52, padding: '0 32px', fontSize: 16 } };
  const variants = {
    primary: { background: 'var(--primary)', color: '#fff' },
    secondary: { background: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--border)' },
    ghost: { background: 'transparent', color: 'var(--primary)', border: 'none' },
    danger: { background: 'var(--danger)', color: '#fff' },
    accent: { background: 'var(--accent)', color: '#fff' },
  };
  const st = { ...base, ...sizes[size], ...variants[variant], ...(fullWidth ? { width: '100%' } : {}), ...extraStyle };
  return React.createElement('button', { style: st, onClick, disabled },
    icon, React.createElement('span', null, children), iconRight
  );
}

/* ── Card ────────────────────────────────────────── */
function Card({ children, style: extraStyle, padding = 24, onClick }) {
  const [hovered, setHovered] = useState(false);
  const st = { background: 'var(--surface)', borderRadius: 16, boxShadow: onClick && hovered ? 'var(--shadow-hover)' : 'var(--shadow-card)', padding, transition: 'box-shadow 0.2s', cursor: onClick ? 'pointer' : 'default', ...extraStyle };
  return React.createElement('div', { style: st, onClick, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) }, children);
}

/* ── StatusPill ──────────────────────────────────── */
function StatusPill({ status, label }) {
  const map = {
    passed: { bg: 'var(--success-light)', color: 'var(--success)' },
    admitted: { bg: 'var(--success-light)', color: 'var(--success)' },
    failed: { bg: 'var(--danger-light)', color: 'var(--danger)' },
    review: { bg: 'rgba(94,110,107,0.1)', color: 'var(--muted)' },
    draft: { bg: 'rgba(94,110,107,0.1)', color: 'var(--muted)' },
    not_started: { bg: 'rgba(94,110,107,0.1)', color: 'var(--muted)' },
    enbek: { bg: 'var(--accent-light)', color: 'var(--accent)' },
    active: { bg: 'var(--success-light)', color: 'var(--success)' },
    invited: { bg: 'rgba(94,110,107,0.1)', color: 'var(--muted)' },
    theory_passed: { bg: 'var(--success-light)', color: 'var(--success)' },
    urgent: { bg: 'var(--danger-light)', color: 'var(--danger)' },
  };
  const colors = map[status] || map.draft;
  return React.createElement('span', {
    style: { display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', background: colors.bg, color: colors.color, whiteSpace: 'nowrap' }
  }, label);
}

/* ── FormInput ───────────────────────────────────── */
function FormInput({ label, linkLabel, linkHref, type = 'text', placeholder, value, onChange, error, disabled, readOnly, icon }) {
  const [showPw, setShowPw] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPw ? 'text' : 'password') : type;
  const inputSt = { width: '100%', height: 44, padding: '0 16px', paddingRight: isPassword || icon ? 44 : 16, fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink)', background: disabled ? '#f5f4f1' : 'var(--surface)', border: `1px solid ${error ? 'var(--danger)' : 'var(--border)'}`, borderRadius: 10, outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' };

  return React.createElement('div', { style: { marginBottom: 20 } },
    (label || linkLabel) && React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 } },
      label && React.createElement('label', { style: { fontSize: 14, fontWeight: 600, color: 'var(--ink)' } }, label),
      linkLabel && React.createElement('a', { href: linkHref || '#', style: { fontSize: 14, color: 'var(--primary)', fontWeight: 500 } }, linkLabel),
    ),
    React.createElement('div', { style: { position: 'relative' } },
      React.createElement('input', {
        type: inputType, placeholder, value, onChange: e => onChange && onChange(e.target.value),
        disabled, readOnly, style: inputSt,
        onFocus: e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(15,118,110,0.1)'; },
        onBlur: e => { e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border)'; e.target.style.boxShadow = 'none'; },
      }),
      isPassword && React.createElement('button', {
        type: 'button', onClick: () => setShowPw(!showPw),
        style: { position: 'absolute', right: 0, top: 0, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }
      }, showPw ? Icons.eyeOff : Icons.eye),
    ),
    error && React.createElement('p', { style: { fontSize: 14, color: 'var(--danger)', marginTop: 6 } }, error),
  );
}

/* ── FormSelect ──────────────────────────────────── */
function FormSelect({ label, value, onChange, options, placeholder }) {
  const st = { width: '100%', height: 44, padding: '0 40px 0 16px', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, outline: 'none', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235E6E6B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' };
  return React.createElement('div', { style: { marginBottom: 20 } },
    label && React.createElement('label', { style: { display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 } }, label),
    React.createElement('select', { value, onChange: e => onChange && onChange(e.target.value), style: st },
      placeholder && React.createElement('option', { value: '' }, placeholder),
      options && options.map(o => React.createElement('option', { key: o.value || o, value: o.value || o }, o.label || o))
    )
  );
}

/* ── FormTextarea ────────────────────────────────── */
function FormTextarea({ label, placeholder, value, onChange, rows = 5 }) {
  const st = { width: '100%', padding: 16, fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, outline: 'none', resize: 'vertical', lineHeight: 1.5, transition: 'border-color 0.2s, box-shadow 0.2s' };
  return React.createElement('div', { style: { marginBottom: 20 } },
    label && React.createElement('label', { style: { display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 } }, label),
    React.createElement('textarea', {
      placeholder, value, rows, onChange: e => onChange && onChange(e.target.value), style: st,
      onFocus: e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(15,118,110,0.1)'; },
      onBlur: e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; },
    })
  );
}

/* ── Toggle ──────────────────────────────────────── */
function Toggle({ checked, onChange, label }) {
  const trackSt = { width: 44, height: 24, borderRadius: 12, background: checked ? 'var(--primary)' : 'var(--border)', position: 'relative', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0 };
  const thumbSt = { width: 20, height: 20, borderRadius: '50%', background: '#fff', position: 'absolute', top: 2, left: checked ? 22 : 2, transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' };
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 } },
    label && React.createElement('span', { style: { fontSize: 16, color: 'var(--ink)' } }, label),
    React.createElement('div', { style: trackSt, onClick: () => onChange && onChange(!checked) },
      React.createElement('div', { style: thumbSt })
    )
  );
}

/* ── Checkbox ────────────────────────────────────── */
function Checkbox({ checked, onChange, children }) {
  const boxSt = { width: 20, height: 20, borderRadius: 4, border: `2px solid ${checked ? 'var(--primary)' : 'var(--border)'}`, background: checked ? 'var(--primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.15s', flexShrink: 0, marginTop: 2 };
  return React.createElement('label', { style: { display: 'flex', gap: 12, cursor: 'pointer', fontSize: 16, lineHeight: 1.5 }, onClick: () => onChange && onChange(!checked) },
    React.createElement('div', { style: boxSt }, checked && React.createElement('svg', { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('polyline', { points: '20 6 9 17 4 12' }))),
    React.createElement('span', null, children)
  );
}

/* ── Sidebar ─────────────────────────────────────── */
function Sidebar({ items, active, onNavigate, userBlock, bottomItems }) {
  const st = { width: 220, minHeight: '100%', background: 'var(--bg)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', padding: '16px 0', flexShrink: 0 };
  const itemSt = (isActive) => ({ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', fontSize: 15, fontWeight: isActive ? 600 : 400, color: isActive ? 'var(--primary)' : 'var(--ink)', background: isActive ? 'var(--primary-light)' : 'transparent', borderRight: isActive ? '3px solid var(--primary)' : '3px solid transparent', cursor: 'pointer', transition: 'all 0.15s', textDecoration: 'none' });

  return React.createElement('nav', { style: st },
    userBlock && React.createElement('div', { style: { padding: '8px 20px 20px', borderBottom: '1px solid var(--border)', marginBottom: 8 } }, userBlock),
    React.createElement('div', { style: { flex: 1 } },
      items.map(item => React.createElement('a', { key: item.id, style: itemSt(active === item.id), onClick: () => onNavigate && onNavigate(item.id) },
        item.icon && React.createElement('span', { style: { display: 'flex', opacity: active === item.id ? 1 : 0.6 } }, item.icon),
        React.createElement('span', null, item.label),
      ))
    ),
    bottomItems && React.createElement('div', { style: { borderTop: '1px solid var(--border)', paddingTop: 8, marginTop: 8 } },
      bottomItems.map(item => React.createElement('a', { key: item.id, style: { ...itemSt(false), color: item.danger ? 'var(--danger)' : 'var(--muted)', fontSize: 14 }, onClick: () => onNavigate && onNavigate(item.id) },
        item.icon && React.createElement('span', { style: { display: 'flex', opacity: 0.6 } }, item.icon),
        React.createElement('span', null, item.label),
      ))
    ),
  );
}

/* ── Breadcrumb ──────────────────────────────────── */
function Breadcrumb({ items }) {
  return React.createElement('nav', { style: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--muted)', marginBottom: 8 } },
    items.map((item, i) => React.createElement(React.Fragment, { key: i },
      i > 0 && React.createElement('span', { style: { opacity: 0.5 } }, '›'),
      i < items.length - 1
        ? React.createElement('a', { href: '#', style: { color: 'var(--muted)', textDecoration: 'none' }, onMouseOver: e => e.target.style.color = 'var(--primary)', onMouseOut: e => e.target.style.color = 'var(--muted)' }, item)
        : React.createElement('span', { style: { color: 'var(--ink)', fontWeight: 600 } }, item)
    ))
  );
}

/* ── ProgressRing (SVG donut) ────────────────────── */
function ProgressRing({ percent, size = 200, stroke = 12, color = 'var(--primary)' }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return React.createElement('svg', { width: size, height: size, style: { transform: 'rotate(-90deg)' } },
    React.createElement('circle', { cx: size/2, cy: size/2, r, fill: 'none', stroke: 'var(--border)', strokeWidth: stroke }),
    React.createElement('circle', { cx: size/2, cy: size/2, r, fill: 'none', stroke: color, strokeWidth: stroke, strokeDasharray: circ, strokeDashoffset: offset, strokeLinecap: 'round', style: { transition: 'stroke-dashoffset 1s ease' } }),
  );
}

/* ── Pagination ──────────────────────────────────── */
function Pagination({ current, total, onChange }) {
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) pages.push(i);
    else if (pages[pages.length - 1] !== '...') pages.push('...');
  }
  const btnSt = (active) => ({ width: 36, height: 36, borderRadius: 10, border: active ? 'none' : '1px solid var(--border)', background: active ? 'var(--primary)' : 'var(--surface)', color: active ? '#fff' : 'var(--ink)', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' });
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6 } },
    React.createElement('button', { style: { ...btnSt(false), opacity: current === 1 ? 0.4 : 1 }, onClick: () => current > 1 && onChange(current - 1), disabled: current === 1 }, Icons.chevronLeft),
    pages.map((p, i) => p === '...'
      ? React.createElement('span', { key: i, style: { padding: '0 4px', color: 'var(--muted)' } }, '…')
      : React.createElement('button', { key: i, style: btnSt(p === current), onClick: () => onChange(p) }, p)
    ),
    React.createElement('button', { style: { ...btnSt(false), opacity: current === total ? 0.4 : 1 }, onClick: () => current < total && onChange(current + 1), disabled: current === total }, Icons.chevronRight),
  );
}

/* ── DataTable ───────────────────────────────────── */
function DataTable({ columns, rows, onRowClick }) {
  const thSt = { padding: '12px 16px', fontSize: 12, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'left', borderBottom: '2px solid var(--border)', whiteSpace: 'nowrap' };
  const tdSt = { padding: '14px 16px', fontSize: 15, borderBottom: '1px solid var(--border)', verticalAlign: 'middle' };
  return React.createElement('div', { style: { overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--surface)' } },
    React.createElement('table', { style: { width: '100%', borderCollapse: 'collapse' } },
      React.createElement('thead', null,
        React.createElement('tr', null, columns.map(c => React.createElement('th', { key: c.key, style: thSt }, c.label)))
      ),
      React.createElement('tbody', null,
        rows.map((row, ri) => React.createElement('tr', {
          key: ri, style: { cursor: onRowClick ? 'pointer' : 'default', transition: 'background 0.1s' },
          onMouseOver: e => e.currentTarget.style.background = 'var(--primary-lighter)',
          onMouseOut: e => e.currentTarget.style.background = 'transparent',
          onClick: () => onRowClick && onRowClick(row),
        }, columns.map(c => React.createElement('td', { key: c.key, style: tdSt }, c.render ? c.render(row) : row[c.key]))))
      )
    )
  );
}

/* ── MetricCard ──────────────────────────────────── */
function MetricCard({ label, value, change, icon, accent }) {
  return React.createElement(Card, { padding: 20, style: { flex: '1 1 0', minWidth: 180 } },
    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 } },
      React.createElement('span', { style: { fontSize: 12, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' } }, label),
      icon && React.createElement('div', { style: { width: 36, height: 36, borderRadius: 10, background: accent || 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent ? '#fff' : 'var(--primary)' } }, icon),
    ),
    React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 8 } },
      React.createElement('span', { style: { fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 600, color: 'var(--primary)' } }, value),
      change && React.createElement('span', { style: { fontSize: 13, fontWeight: 600, color: change.startsWith('+') || change.startsWith('↑') ? 'var(--success)' : 'var(--danger)' } }, change),
    )
  );
}

/* ── Layout Shells ───────────────────────────────── */
function AuthLayout({ children }) {
  return React.createElement('div', { style: { minHeight: '100dvh', display: 'flex', flexDirection: 'column' } },
    React.createElement(SattiHeader, { variant: 'simple' }),
    React.createElement('main', { style: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px' } }, children),
    React.createElement(SattiFooter, { variant: 'simple' })
  );
}

function AppLayout({ children, sidebar }) {
  return React.createElement('div', { style: { minHeight: '100dvh', display: 'flex', flexDirection: 'column' } },
    React.createElement('div', { style: { flex: 1, display: 'flex' } },
      sidebar,
      React.createElement('main', { style: { flex: 1, minWidth: 0 } }, children)
    ),
    React.createElement(SattiFooter, null)
  );
}

function PageContent({ children, maxWidth = 1200 }) {
  return React.createElement('div', { style: { maxWidth, margin: '0 auto', padding: '32px 24px' } }, children);
}

function PageTitle({ title, subtitle, action }) {
  return React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 24, flexWrap: 'wrap' } },
    React.createElement('div', null,
      React.createElement('h1', { style: { fontFamily: 'var(--font-heading)', fontSize: 'var(--h1)', fontWeight: 600, lineHeight: 1.25, marginBottom: subtitle ? 8 : 0 } }, title),
      subtitle && React.createElement('p', { style: { fontSize: 16, color: 'var(--muted)', lineHeight: 1.5 } }, subtitle),
    ),
    action
  );
}

/* Export all to window */
Object.assign(window, {
  LangProvider, LangCtx, useLang,
  Icons,
  SattiHeader, SattiFooter, Avatar, Btn, Card, StatusPill,
  FormInput, FormSelect, FormTextarea, Toggle, Checkbox,
  Sidebar, Breadcrumb, ProgressRing, Pagination, DataTable, MetricCard,
  AuthLayout, AppLayout, PageContent, PageTitle,
});
