"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1182:(O,_,a)=>{a.d(_,{c:()=>i});var f=a(6953),r=a(2966),h=a(8077);const i=(l,n)=>{let t,e;const o=(c,p,y)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,p);E&&n(E)?E!==t&&(d(),s(E,y)):d()},s=(c,p)=>{t=c,e||(e=t);const y=t;(0,f.w)(()=>y.classList.add("ion-activated")),p()},d=(c=!1)=>{if(!t)return;const p=t;(0,f.w)(()=>p.classList.remove("ion-activated")),c&&e!==t&&t.click(),t=void 0};return(0,h.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>o(c.currentX,c.currentY,r.a),onMove:c=>o(c.currentX,c.currentY,r.b),onEnd:()=>{d(!0),(0,r.h)(),e=void 0}})}},278:(O,_,a)=>{a.d(_,{g:()=>f});const f=(n,t,e,o,s)=>h(n[1],t[1],e[1],o[1],s).map(d=>r(n[0],t[0],e[0],o[0],d)),r=(n,t,e,o,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*e*s+3*e+o*s))-n*Math.pow(s-1,3),h=(n,t,e,o,s)=>l((o-=s)-3*(e-=s)+3*(t-=s)-(n-=s),3*e-6*t+3*n,3*t-3*n,n).filter(c=>c>=0&&c<=1),l=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const s=(3*(e/=n)-(t/=n)*t)/3,d=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===s)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-s),-Math.sqrt(-s)];const c=Math.pow(d/2,2)+Math.pow(s/3,3);if(0===c)return[Math.pow(d/2,.5)-t/3];if(c>0)return[Math.pow(-d/2+Math.sqrt(c),1/3)-Math.pow(d/2+Math.sqrt(c),1/3)-t/3];const p=Math.sqrt(Math.pow(-s/3,3)),y=Math.acos(-d/(2*Math.sqrt(Math.pow(-s/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(y/3)-t/3,E*Math.cos((y+2*Math.PI)/3)-t/3,E*Math.cos((y+4*Math.PI)/3)-t/3]}},1776:(O,_,a)=>{a.d(_,{i:()=>f});const f=r=>r&&""!==r.dir?"rtl"===r.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3433:(O,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>i});const f="ion-focused",h=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=l=>{let n=[],t=!0;const e=l?l.shadowRoot:document,o=l||document.body,s=v=>{n.forEach(g=>g.classList.remove(f)),v.forEach(g=>g.classList.add(f)),n=v},d=()=>{t=!1,s([])},c=v=>{t=h.includes(v.key),t||s([])},p=v=>{if(t&&void 0!==v.composedPath){const g=v.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));s(g)}},y=()=>{e.activeElement===o&&s([])};return e.addEventListener("keydown",c),e.addEventListener("focusin",p),e.addEventListener("focusout",y),e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("mousedown",d),{destroy:()=>{e.removeEventListener("keydown",c),e.removeEventListener("focusin",p),e.removeEventListener("focusout",y),e.removeEventListener("touchstart",d),e.removeEventListener("mousedown",d)},setFocus:s}}},2587:(O,_,a)=>{a.d(_,{c:()=>r});var f=a(544);const r=n=>{const t=n;let e;return{hasLegacyControl:()=>{if(void 0===e){const s=void 0!==t.label||h(t),d=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,c=(0,f.h)(t);e=!0===t.legacy||!s&&!d&&null!==c}return e}}},h=n=>null!==n.shadowRoot&&!!(i.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||l.includes(n.tagName)&&""!==n.textContent),i=["ION-RANGE"],l=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2966:(O,_,a)=>{a.d(_,{a:()=>i,b:()=>l,c:()=>h,d:()=>t,h:()=>n});const f={getEngine(){var e;const o=window;return o.TapticEngine||(null===(e=o.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&o.Capacitor.Plugins.Haptics},available(){var e;const o=window;return!!this.getEngine()&&("web"!==(null===(e=o.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const o=this.getEngine();if(!o)return;const s=this.isCapacitor()?e.style.toUpperCase():e.style;o.impact({style:s})},notification(e){const o=this.getEngine();if(!o)return;const s=this.isCapacitor()?e.style.toUpperCase():e.style;o.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>f.available(),h=()=>{r()&&f.selection()},i=()=>{r()&&f.selectionStart()},l=()=>{r()&&f.selectionChanged()},n=()=>{r()&&f.selectionEnd()},t=e=>{r()&&f.impact(e)}},9993:(O,_,a)=>{a.d(_,{a:()=>f,b:()=>p,c:()=>t,d:()=>y,e:()=>b,f:()=>n,g:()=>E,h:()=>h,i:()=>r,j:()=>M,k:()=>u,l:()=>e,m:()=>d,n:()=>v,o:()=>s,p:()=>l,q:()=>i,r:()=>m,s:()=>C,t:()=>c,u:()=>g,v:()=>w,w:()=>o});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(O,_,a)=>{a.d(_,{I:()=>n,a:()=>s,b:()=>l,c:()=>p,d:()=>E,f:()=>d,g:()=>o,i:()=>e,p:()=>y,r:()=>v,s:()=>c});var f=a(5861),r=a(544),h=a(7690);const l="ion-content",n=".ion-content-scroll-host",t=`${l}, ${n}`,e=g=>"ION-CONTENT"===g.tagName,o=function(){var g=(0,f.Z)(function*(w){return e(w)?(yield new Promise(m=>(0,r.c)(w,m)),w.getScrollElement()):w});return function(m){return g.apply(this,arguments)}}(),s=g=>g.querySelector(n)||g.querySelector(t),d=g=>g.closest(t),c=(g,w)=>e(g)?g.scrollToTop(w):Promise.resolve(g.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),p=(g,w,m,M)=>e(g)?g.scrollByPoint(w,m,M):Promise.resolve(g.scrollBy({top:m,left:w,behavior:M>0?"smooth":"auto"})),y=g=>(0,h.b)(g,l),E=g=>{if(e(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},v=(g,w)=>{e(g)?g.scrollY=w:g.style.removeProperty("overflow")}},1685:(O,_,a)=>{a.d(_,{c:()=>i,g:()=>l});var f=a(7643),r=a(544),h=a(7690);const i=(t,e,o)=>{let s,d;void 0!==f.w&&"MutationObserver"in f.w&&(s=new MutationObserver(E=>{for(const v of E)for(const g of v.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&g.slot===e)return o(),void(0,r.r)(()=>c(g))}),s.observe(t,{childList:!0}));const c=E=>{var v;d&&(d.disconnect(),d=void 0),d=new MutationObserver(g=>{o();for(const w of g)for(const m of w.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===e&&y()}),d.observe(null!==(v=E.parentElement)&&void 0!==v?v:E,{subtree:!0,childList:!0})},y=()=>{d&&(d.disconnect(),d=void 0)};return{destroy:()=>{s&&(s.disconnect(),s=void 0),y()}}},l=(t,e,o)=>{const s=null==t?0:t.toString().length,d=n(s,e);if(void 0===o)return d;try{return o(s,e)}catch(c){return(0,h.a)("Exception in provided `counterFormatter`.",c),d}},n=(t,e)=>`${t} / ${e}`},6884:(O,_,a)=>{a.d(_,{K:()=>h,a:()=>r});var f=a(7643),r=(()=>((r=r||{}).Body="body",r.Ionic="ionic",r.Native="native",r.None="none",r))();const h={getEngine(){var i;return(null===(i=null==f.w?void 0:f.w.Capacitor)||void 0===i?void 0:i.isPluginAvailable("Keyboard"))&&(null==f.w?void 0:f.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const i=this.getEngine();return null!=i&&i.getResizeMode?i.getResizeMode().catch(l=>{if("UNIMPLEMENTED"!==l.code)throw l}):Promise.resolve(void 0)}}},2624:(O,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>i,KEYBOARD_DID_OPEN:()=>h,copyVisualViewport:()=>M,keyboardDidClose:()=>v,keyboardDidOpen:()=>y,keyboardDidResize:()=>E,resetKeyboardAssist:()=>o,setKeyboardClose:()=>p,setKeyboardOpen:()=>c,startKeyboardAssist:()=>s,trackViewportChanges:()=>m});var f=a(6884);a(7643);const h="ionKeyboardDidShow",i="ionKeyboardDidHide";let n={},t={},e=!1;const o=()=>{n={},t={},e=!1},s=u=>{if(f.K.getEngine())d(u);else{if(!u.visualViewport)return;t=M(u.visualViewport),u.visualViewport.onresize=()=>{m(u),y()||E(u)?c(u):v(u)&&p(u)}}},d=u=>{u.addEventListener("keyboardDidShow",C=>c(u,C)),u.addEventListener("keyboardDidHide",()=>p(u))},c=(u,C)=>{g(u,C),e=!0},p=u=>{w(u),e=!1},y=()=>!e&&n.width===t.width&&(n.height-t.height)*t.scale>150,E=u=>e&&!v(u),v=u=>e&&t.height===u.innerHeight,g=(u,C)=>{const D=new CustomEvent(h,{detail:{keyboardHeight:C?C.keyboardHeight:u.innerHeight-t.height}});u.dispatchEvent(D)},w=u=>{const C=new CustomEvent(i);u.dispatchEvent(C)},m=u=>{n=Object.assign({},t),t=M(u.visualViewport)},M=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},218:(O,_,a)=>{a.d(_,{c:()=>n});var f=a(5861),r=a(7643),h=a(6884);const i=t=>{if(void 0===r.d||t===h.a.None||void 0===t)return null;const e=r.d.querySelector("ion-app");return null!=e?e:r.d.body},l=t=>{const e=i(t);return null===e?0:e.clientHeight},n=function(){var t=(0,f.Z)(function*(e){let o,s,d,c;const p=function(){var w=(0,f.Z)(function*(){const m=yield h.K.getResizeMode(),M=void 0===m?void 0:m.mode;o=()=>{void 0===c&&(c=l(M)),d=!0,y(d,M)},s=()=>{d=!1,y(d,M)},null==r.w||r.w.addEventListener("keyboardWillShow",o),null==r.w||r.w.addEventListener("keyboardWillHide",s)});return function(){return w.apply(this,arguments)}}(),y=(w,m)=>{e&&e(w,E(m))},E=w=>{if(0===c||c===l(w))return;const m=i(w);return null!==m?new Promise(M=>{const C=new ResizeObserver(()=>{m.clientHeight===c&&(C.disconnect(),M())});C.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",o),null==r.w||r.w.removeEventListener("keyboardWillHide",s),o=s=void 0},isKeyboardVisible:()=>d}});return function(o){return t.apply(this,arguments)}}()},9718:(O,_,a)=>{a.d(_,{c:()=>h});var f=a(7643),r=a(544);const h=(i,l,n)=>{let t;const e=()=>!(void 0===l()||void 0!==i.label||null===n()),s=()=>{const c=l();if(void 0===c)return;if(!e())return void c.style.removeProperty("width");const p=n().scrollWidth;if(0===p&&null===c.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==t)return;const y=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(s(),y.disconnect(),t=void 0)},{threshold:.01,root:i});y.observe(c)}else c.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,r.r)(()=>{s()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},1173:(O,_,a)=>{a.d(_,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(h,i,l)=>{const n=h*i/l-h+"ms",t=2*Math.PI*i/l;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(h,i,l)=>{const n=i/l,t=h*n-h+"ms",e=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(h,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(h,i,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*i+(i<l/2?180:-180)}deg)`,"animation-delay":h*i/l-h+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(h,i,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*i+(i<l/2?180:-180)}deg)`,"animation-delay":h*i/l-h+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(h,i,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":h*i/l-h+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(h,i,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":h*i/l-h+"ms"}})}}},4666:(O,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>l});var f=a(544),r=a(1776),h=a(8077);a(4587);const l=(n,t,e,o,s)=>{const d=n.ownerDocument.defaultView;let c=(0,r.i)(n);const y=m=>c?-m.deltaX:m.deltaX;return(0,h.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m=>(c=(0,r.i)(n),(m=>{const{startX:u}=m;return c?u>=d.innerWidth-50:u<=50})(m)&&t()),onStart:e,onMove:m=>{const u=y(m)/d.innerWidth;o(u)},onEnd:m=>{const M=y(m),u=d.innerWidth,C=M/u,b=(m=>c?-m.velocityX:m.velocityX)(m),L=b>=0&&(b>.2||M>u/2),x=(L?1-C:C)*u;let k=0;if(x>5){const A=x/Math.abs(b);k=Math.min(A,540)}s(L,C<=0?.01:(0,f.l)(0,C,.9999),k)}})}},8639:(O,_,a)=>{a.d(_,{w:()=>f});const f=(i,l,n)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{n(r(e,l))});return t.observe(i,{childList:!0,subtree:!0}),t},r=(i,l)=>{let n;return i.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)n=h(t.addedNodes[e],l)||n}),n},h=(i,l)=>1!==i.nodeType?void 0:(i.tagName===l.toUpperCase()?[i]:Array.from(i.querySelectorAll(l))).find(t=>t.value===i.value)},1555:(O,_,a)=>{a.d(_,{e:()=>l});var f=a(9862),r=a(6689),h=a(6814);let i=(()=>{class n{constructor(e,o){this.document=e,this.platformId=o,this.documentIsAccessible=(0,h.NF)(this.platformId)}static getCookieRegExp(e){const o=e.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+o+"|;\\s*"+o+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return!!this.documentIsAccessible&&(e=encodeURIComponent(e),n.getCookieRegExp(e).test(this.document.cookie))}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);const s=n.getCookieRegExp(e).exec(this.document.cookie);return s[1]?n.safeDecodeURIComponent(s[1]):""}return""}getAll(){if(!this.documentIsAccessible)return{};const e={},o=this.document;return o.cookie&&""!==o.cookie&&o.cookie.split(";").forEach(s=>{const[d,c]=s.split("=");e[n.safeDecodeURIComponent(d.replace(/^ /,""))]=n.safeDecodeURIComponent(c)}),e}set(e,o,s,d,c,p,y){if(!this.documentIsAccessible)return;if("number"==typeof s||s instanceof Date||d||c||p||y)return void this.set(e,o,{expires:s,path:d,domain:c,secure:p,sameSite:y||"Lax"});let E=encodeURIComponent(e)+"="+encodeURIComponent(o)+";";const v=s||{};v.expires&&(E+="number"==typeof v.expires?"expires="+new Date((new Date).getTime()+1e3*v.expires*60*60*24).toUTCString()+";":"expires="+v.expires.toUTCString()+";"),v.path&&(E+="path="+v.path+";"),v.domain&&(E+="domain="+v.domain+";"),!1===v.secure&&"None"===v.sameSite&&(v.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),v.secure&&(E+="secure;"),v.sameSite||(v.sameSite="Lax"),E+="sameSite="+v.sameSite+";",this.document.cookie=E}delete(e,o,s,d,c="Lax"){this.documentIsAccessible&&this.set(e,"",{expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT"),path:o,domain:s,secure:d,sameSite:c})}deleteAll(e,o,s,d="Lax"){if(!this.documentIsAccessible)return;const c=this.getAll();for(const p in c)c.hasOwnProperty(p)&&this.delete(p,e,o,s,d)}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(h.K0),r.LFG(r.Lbi))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),l=(()=>{class n{constructor(e,o){this.http=e,this.cookieService=o,this.apiUrl="http://localhost:3000",this.token=""}setToken(e){this.token=e}login(e,o){return this.http.post(`${this.apiUrl}/login`,{correo:e,contrase\u00f1a:o})}register(e){return this.http.post(`${this.apiUrl}/register.php`,e)}getUserDetails(){const o={headers:new f.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.token}`})};return this.http.get(`${this.apiUrl}/getUserByToken`,o)}mostrarPacientes(){return this.http.get(`${this.apiUrl}/mostrarPacientes`)}logout(){localStorage.removeItem("token")}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(f.eN),r.LFG(i))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);