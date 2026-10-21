const DEF={name:"نبض المستقبل",tagline:"أخبار تنبض بالمستقبل",primary:"#0b5fff",accent:"#ff3d57",bg:"#f5f7fb",dark:"#0f172a",font:"Cairo",heroTitle:"آخر الأخبار",menu:[{t:"الرئيسية",c:""},{t:"تقنية",c:"تقنية"},{t:"اقتصاد",c:"اقتصاد"},{t:"رياضة",c:"رياضة"}],footer:"© نبض المستقبل - جميع الحقوق محفوظة",ns:"nabd-almustaqbal-x7k",css:"",adminHash:"2435da3725c6d499c5afc665a13fefd452922020cbad06f69a4a69278c826eb5"};
async function load(f,d){try{const r=await fetch('data/'+f+'?'+Date.now());if(r.ok)return await r.json()}catch(e){}return d}
const VIEW='https://abacus.jasoncameron.dev';
async function views(ns,id,hit){try{const r=await fetch(VIEW+(hit?'/hit/':'/get/')+ns+'/'+id);return(await r.json()).value||0}catch(e){return 0}}
const esc=t=>String(t||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function theme(s){const r=document.documentElement.style;r.setProperty('--p',s.primary);r.setProperty('--a',s.accent);r.setProperty('--bg',s.bg);r.setProperty('--d',s.dark);r.setProperty('--f',s.font);
const l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family='+encodeURIComponent(s.font)+':wght@400;700;800&display=swap';document.head.append(l);
const c=document.createElement('style');c.textContent=s.css||'';document.head.append(c)}
