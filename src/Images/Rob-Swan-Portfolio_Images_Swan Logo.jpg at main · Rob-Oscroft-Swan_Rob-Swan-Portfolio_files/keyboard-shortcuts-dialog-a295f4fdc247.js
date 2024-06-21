"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["keyboard-shortcuts-dialog"],{51505:(e,t,r)=>{r.d(t,{eE:()=>a});var n=r(71207);let i={Android:"Android",iOS:"iOS",macOS:"macOS",Windows:"Windows",Linux:"Linux",Unknown:"Unknown"};function a(){return function(){let e=i.Unknown,t=!1;if(n.iG){let r=n.iG.navigator,a=r.userAgent,s=r?.userAgentData?.platform||r.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K","macOS"].indexOf(s)?e=i.macOS:-1!==["iPhone","iPad","iPod"].indexOf(s)?e=i.iOS:-1!==["Win32","Win64","Windows","WinCE"].indexOf(s)?e=i.Windows:/Android/.test(a)?e=i.Android:/Linux/.test(s)&&(e=i.Linux),t=r?.userAgentData?.mobile??(e===i.Android||e===i.iOS)}return{os:e,isAndroid:e===i.Android,isIOS:e===i.iOS,isMacOS:e===i.macOS,isWindows:e===i.Windows,isLinux:e===i.Linux,isDesktop:e===i.macOS||e===i.Windows||e===i.Linux,isMobile:t}}().isMacOS}},71483:(e,t,r)=>{r.d(t,{DV:()=>a,D_:()=>n.D_,EL:()=>n.EL,N9:()=>n.N9,Tz:()=>n.Tz,k0:()=>n.k0});var n=r(11793);let i=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function a(e){return Array.from(e.matchAll(i)).map(([,e])=>e)}},85772:(e,t,r)=>{r.d(t,{Ty:()=>a,YE:()=>s,Zf:()=>l});var n=r(18515),i=r(71483);let a=()=>{let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},s=e=>/Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),o=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),l=e=>{let t=(0,i.EL)(e),r=function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),r=e.getAttribute("type")?.toLowerCase()??"text",n="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!o.has(r)||e.isContentEditable)&&!n}(e.target)&&(0,n.cr)("no_character_key_shortcuts_in_inputs"),l=a()&&!r;return s(t)||l}},10743:(e,t,r)=>{var n=r(74898),i=r(48055),a=r(58081),s=r(37570),o=r(44067),l=r(42483),d=r(74121),c=r(88216),u=r(59148),m=r(96567);function p({group:{service:{name:e},commands:t}}){let r=(0,a.useId)();return(0,i.jsxs)(l.Z,{sx:{borderRadius:2,border:"1px solid",borderColor:"border.default",overflow:"hidden"},children:[(0,i.jsx)(l.Z,{as:"h3",id:r,sx:{bg:"canvas.subtle",fontWeight:"bold",py:2,px:3,fontSize:1},children:e}),(0,i.jsx)(l.Z,{as:"ul",role:"list","aria-labelledby":r,sx:{listStyleType:"none"},children:t.map(({id:e,name:t,keybinding:r})=>(0,i.jsxs)(l.Z,{as:"li",sx:{borderTop:"1px solid",borderColor:"border.default",py:2,px:3,display:"flex",gap:2,justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)(l.Z,{children:t}),(0,i.jsx)(l.Z,{sx:{textAlign:"right"},children:(Array.isArray(r)?r:[r]).map((e,t)=>(0,i.jsxs)(a.Fragment,{children:[t>0&&" or ",(0,i.jsx)(m.u,{keys:e})]},e))})]},e))})]})}try{p.displayName||(p.displayName="ShortcutsGroupList")}catch{}let f={keyboardShortcuts:"Keyboard shortcuts",siteWideShortcuts:"Site-wide shortcuts",loading:"Loading"};var h=r(5202);r(38586);var g=r(87623),v=r(71483);let b=()=>(0,i.jsxs)(l.Z,{role:"status",sx:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(d.Z,{size:"large"}),(0,i.jsx)(o.T,{children:f.loading})]}),y=e=>Array.isArray(e)?e.map(e=>(0,v.D_)(e)):(0,v.D_)(e??""),w=({children:e})=>(0,i.jsx)(l.Z,{sx:{display:"flex",flexDirection:"row",gap:2,flexWrap:"wrap"},children:e}),x=({children:e})=>(0,i.jsx)(l.Z,{sx:{flex:"250px",display:"flex",flexDirection:"column",gap:2},children:e}),E=({visible:e,onVisibleChange:t,docsUrl:r})=>{let[n,s]=(0,a.useState)({service:{id:"global",name:"Global"},commands:[]}),[o,l]=(0,a.useState)([]),[d,m]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{let t=(0,h.e)(),r=async()=>{m(!0);let e=document.querySelector("meta[name=github-keyboard-shortcuts]");if(!e)throw Error('The "github-keyboard-shortcuts" meta tag must be present');let r={contexts:e.content},n=`/site/keyboard_shortcuts?${new URLSearchParams(r).toString()}`,i=await (0,g.v)(n,{method:"GET"});if(i.ok){let{global:e,...r}=(await i.json()).commands;s({service:{id:"global",name:f.siteWideShortcuts},commands:[...e.commands,...t.find(e=>"global"===e.service.id)?.commands??[]].map(e=>({...e,keybinding:y(e.keybinding)}))}),l([...Object.values(r),...t].map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:y(e.keybinding)}))})))}else l(t.map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:y(e.keybinding)}))})));m(!1)};e&&r()},[e]),e)?(0,i.jsx)(u.V,{title:f.keyboardShortcuts,"aria-modal":"true",width:"xlarge",height:"large",onClose:()=>t(!1),sx:{color:"fg.default"},children:d?(0,i.jsx)(b,{}):(0,i.jsxs)(w,{children:[(0,i.jsx)(x,{children:o.map(e=>(0,i.jsx)(p,{group:e},e.service.id))}),(0,i.jsxs)(x,{children:[(0,i.jsx)(p,{group:n},n.service.id),(0,i.jsx)(c.r,{as:"a",href:r,sx:{width:"100%"},children:"View all keyboard shortcuts"})]})]})}):null};try{b.displayName||(b.displayName="LoadingState")}catch{}try{w.displayName||(w.displayName="Columns")}catch{}try{x.displayName||(x.displayName="Column")}catch{}try{E.displayName||(E.displayName="ShortcutsDialog")}catch{}var k=r(18515);function _({docsUrl:e}){let[t,r]=(0,a.useState)(!1);return(0,k.cr)("react_keyboard_shortcuts_dialog")?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.xN,{commands:{"keyboard-shortcuts-dialog:show-dialog":()=>r(!0)}}),(0,i.jsx)(E,{visible:t,onVisibleChange:r,docsUrl:e})]}):(0,i.jsx)(i.Fragment,{})}try{_.displayName||(_.displayName="KeyboardShortcutsDialog")}catch{}(0,n.t)("keyboard-shortcuts-dialog",{Component:_})},83206:(e,t,r)=>{r.d(t,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new n),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let n=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},48968:(e,t,r)=>{r.d(t,{Ac:()=>a,Z_:()=>s,ev:()=>i});var n=r(58081);function i(e){return((0,n.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function a(e){let t=(0,n.useRef)(e.__wrapperElement.anchor||null),[r,i]=(0,n.useState)(!1),a=(0,n.useCallback)(()=>{i(!r)},[r,i]);return(0,n.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),s(e,a),{ref:t,open:r,setOpen:i}}function s(e,t){let r=(0,n.useRef)(e.__wrapperElement.anchor);(0,n.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},74898:(e,t,r)=>{r.d(t,{t:()=>d});let n=new(r(83206)).e;var i=r(48055),a=r(76006),s=r(60302),o=r(49395);let l=class ReactPartialElement extends s.S{async getReactNode(e){var t;let{Component:r}=await (t=this.name,n.getRegistration(t)),a=this.closest("react-partial-anchor");return(0,i.jsx)(o.S,{partialName:this.name,embeddedData:e,Component:r,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:a})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function d(e,t){n.register(e,t)}l=function(e,t,r,n){var i,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}([a.Ih],l)},82914:(e,t,r)=>{r.d(t,{Z:()=>o});let{getItem:n,setItem:i,removeItem:a}=(0,r(56363).Z)("localStorage"),s="REACT_PROFILING_ENABLED",o={enable:()=>i(s,"true"),disable:()=>a(s),isEnabled:()=>!!n(s)}},82347:(e,t,r)=>{r.d(t,{M:()=>CommandEvent,c:()=>i});var n=r(38586);let CommandEvent=class CommandEvent{constructor(e){this.commandId=e}};let i={entries:e=>Object.entries(e).filter(e=>n.mm.is(e[0])&&void 0!==e[1]),keys:e=>Object.keys(e).filter(n.mm.is)}},70450:(e,t,r)=>{r.d(t,{V:()=>s,q:()=>o});var n=r(58081),i=r(1649);let a=(0,n.createContext)({triggerCommand:i.N}),s=a.Provider,o=()=>(0,n.useContext)(a)},5202:(e,t,r)=>{r.d(t,{V:()=>l,e:()=>o});var n=r(58081),i=r(82347),a=r(38586);let s=new Map;function o(){let e=new Map;for(let t of new Set(Array.from(s.values()).flat())){let r=a.mm.getServiceId(t);if(!e.has(r)){let t=(0,a.C6)(r);e.set(r,{service:{id:t.id,name:t.name},commands:[]})}let n=(0,a.gm)(t);n&&n.defaultBinding&&e.get(r)?.commands.push({id:t,name:n.name,description:n.description,keybinding:n.defaultBinding})}return Array.from(e.values())}let l=e=>{let t=(0,n.useId)();(0,n.useEffect)(()=>(s.set(t,i.c.keys(e)),()=>{s.delete(t)}),[e,t])}},38586:(e,t,r)=>{r.d(t,{C6:()=>c,gF:()=>u,g_:()=>m,gm:()=>d,mm:()=>l});var n=r(71483),i=r(18515);let{commands:a,services:s}=r(61394),o=new Set(Object.keys(a)),l={is:e=>o.has(e),getServiceId:e=>e.split(":")[0]},d=e=>{let t=a[e];return!t.featureFlag||(0,i.cr)(t.featureFlag.toUpperCase())?t:void 0},c=e=>s[e],u=e=>{let t=d(e);return t?.defaultBinding?(0,n.D_)(t.defaultBinding):void 0},m=e=>new Map(e.map(e=>[e,u(e)]).filter(e=>void 0!==e[1]))},72525:(e,t,r)=>{r(96567),r(38586)},57667:(e,t,r)=>{r.d(t,{_:()=>o});var n=r(64307),i=r(38586);let a=new n.R({collectorUrl:"https://collector.githubapp.com/ui-commands/collect"}),s={TYPE:"command.trigger",send(e){a.sendEvent(s.TYPE,e)}};function o(e,t){s.send({command_id:e.commandId,trigger_type:t instanceof KeyboardEvent?"keybinding":"click",target_element_html:t.target instanceof HTMLElement?function(e){let t=e.tagName.toLowerCase(),r=Array.from(e.attributes).map(e=>`${e.name}="${e.value.replaceAll('"','\\"')}"`).join(" ");return`<${t}${r?` ${r}`:""}>`}(t.target):void 0,keybinding:(0,i.gF)(e.commandId)})}},37570:(e,t,r)=>{r.d(t,{EE:()=>o.E,FU:()=>n.F,Mn:()=>a.M,hj:()=>s.h,xN:()=>i.x}),r(38586);var n=r(67890),i=r(1649),a=r(74165);r(85301);var s=r(23625),o=r(38365);r(72525)},3761:(e,t,r)=>{r.d(t,{K:()=>l});var n=r(82347),i=r(38586),a=r(58081),s=r(76136);let o=new Map;function l(e,t){let r=(0,a.useMemo)(()=>new Map,[]),l="global"===e?o:r;(0,a.useEffect)(()=>{for(let[e,r]of(0,i.g_)(n.c.keys(t))){let t=l.get(r)??[];t.length&&console.warn(`The keybinding (${r}) for the "${e}" command conflicts with the keybinding for the already-registered command(s) "${t.join(", ")}". This may result in unpredictable behavior.`),l.set(r,t.concat(e))}return()=>{for(let[e,r]of(0,i.g_)(n.c.keys(t))){let t=(0,s.u)(l.get(r)??[],e);t?.length?l.set(r,t):l.delete(r)}}},[t,l])}},53209:(e,t,r)=>{r.d(t,{V:()=>o});var n=r(71483),i=r(85772),a=r(58081),s=r(38586);function o(e,t){let r=(0,a.useMemo)(()=>new n.k0,[]),o=(0,a.useMemo)(()=>{let t=new Map;for(let r of e){let e=(0,s.gF)(r);e&&t.set(e,r)}return t},[e]),l=(0,a.useRef)(null);return(0,a.useCallback)(e=>{let a="nativeEvent"in e?e.nativeEvent:e;if(l.current===a)return;if(l.current=a,!(0,i.Zf)(a)){r.reset();return}r.registerKeypress(a);let s=o.get(r.sequence)??o.get((0,n.EL)(a));s&&(r.reset(),e.preventDefault(),e.stopPropagation(),t(s,a))},[o,r,t])}},76136:(e,t,r)=>{r.d(t,{u:()=>n});function n(e,t){let r=!1;return e.filter(e=>e!==t||!!r||(r=!0,!1))}},61511:(e,t,r)=>{r.d(t,{u:()=>s});var n=r(51505),i=r(58081);let a=new Set(["enter","tab"]),s=e=>{let t=(0,i.useRef)(!1),r=(0,i.useRef)(!1),s=(0,i.useCallback)(e=>{"compositionstart"===e.type&&(t.current=!0,r.current=!1),"compositionend"===e.type&&(t.current=!1,r.current=!0)},[]),o=(0,i.useCallback)(i=>{if(!a.has(i.key.toLowerCase())||!t.current){if((0,n.eE)()&&229===i.keyCode&&r.current){r.current=!1;return}e(i)}},[e]);return(0,i.useMemo)(()=>({onCompositionStart:s,onCompositionEnd:s,onKeyDown:o}),[s,o])}},63451:(e,t,r)=>{r.d(t,{b:()=>a});var n=r(71207),i=r(58081);let a=void 0!==n.iG?.document?.createElement?i.useLayoutEffect:i.useEffect},8504:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(63451),i=r(58081);function a(e){let t=(0,i.useRef)(e);return(0,n.b)(()=>{t.current=e},[e]),t}},87623:(e,t,r)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function i(e,t){let r={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},i=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:i,headers:r})}r.d(t,{Q:()=>n,v:()=>i})},96567:(e,t,r)=>{r.d(t,{u:()=>x});var n=r(48055),i=r(97011),a=r(26786),s=r(58081),o=r(44067),l=r(51505);let d={alt:(0,l.eE)()?"\u2325":"Alt",control:"\u2303",shift:"\u21E7",meta:(0,l.eE)()?"\u2318":"Win",mod:(0,l.eE)()?"\u2318":"\u2303",pageup:"PgUp",pagedown:"PgDn",arrowup:"\u2191",arrowdown:"\u2193",arrowleft:"\u2190",arrowright:"\u2192",plus:"+",backspace:"\u232B",delete:"Del",space:"\u2423",tab:"\u21E5",enter:"\u23CE",escape:"Esc",function:"Fn",capslock:"CapsLock",insert:"Ins",printscreen:"PrtScn"},c={alt:(0,l.eE)()?"Option":"Alt",mod:(0,l.eE)()?"Command":"Control","+":"Plus",pageup:"Page Up",pagedown:"Page Down",arrowup:"Up Arrow",arrowdown:"Down Arrow",arrowleft:"Left Arrow",arrowright:"Right Arrow",capslock:"Caps Lock",printscreen:"Print Screen"},u={alt:(0,l.eE)()?"option":"alt",meta:(0,l.eE)()?"command":"Windows",mod:(0,l.eE)()?"command":"control",pageup:"page up",pagedown:"page down",arrowup:"up arrow",arrowdown:"down arrow",arrowleft:"left arrow",arrowright:"right arrow",capslock:"caps lock",printscreen:"print screen","`":"backtick","~":"tilde","!":"exclamation point","@":"at","#":"hash",$:"dollar sign","%":"percent","^":"caret","&":"ampersand","*":"asterisk","(":"left parenthesis",")":"right parenthesis",_:"underscore","-":"dash","+":"plus","=":"equals","[":"left bracket","{":"left curly brace","]":"right bracket","}":"right curly brace","\\":"backslash","|":"pipe",";":"semicolon",":":"colon","'":"single quote",'"':"double quote",",":"comma","<":"left angle bracket",".":"period",">":"right angle bracket","/":"forward slash","?":"question mark"," ":"space"},m={control:1,meta:2,alt:3,option:4,shift:5,function:6,DEFAULT:7};function p(e){return e in m?m[e]:m.DEFAULT}let f=({children:e})=>(0,n.jsx)(i.Z,{as:"kbd",sx:{color:"inherit",fontFamily:"inherit",fontSize:"inherit",border:"none",background:"none",boxShadow:"none",p:0,lineHeight:"unset",position:"relative",overflow:"visible",verticalAlign:"baseline"},children:e}),h=e=>u[e]||e,g=({name:e,format:t})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.T,{children:h(e)}),(0,n.jsx)("span",{"aria-hidden":!0,children:("condensed"===t?d[e]:c[e])??(0,a.Z)(e)})]}),v=e=>e.split("+").map(e=>e.toLowerCase()).sort(b),b=(e,t)=>p(e)-p(t),y=({keys:e,format:t="condensed",variant:r="normal"})=>(0,n.jsx)(i.Z,{sx:{display:"inline-flex",bg:"onEmphasis"===r?"transparent":"canvas.default",color:"onEmphasis"===r?"fg.onEmphasis":"fg.muted",border:"1px solid",borderColor:"border.default",borderRadius:2,fontWeight:"normal",fontFamily:"normal",fontSize:0,p:1,gap:"0.5ch",boxShadow:"none",verticalAlign:"baseline",overflow:"hidden",lineHeight:"10px"},children:v(e).map((e,r)=>(0,n.jsxs)(s.Fragment,{children:[r>0&&"full"===t?(0,n.jsx)("span",{"aria-hidden":!0,children:" + "}):" ",(0,n.jsx)(g,{name:e,format:t})]},r))}),w=e=>e.split(" "),x=(0,s.memo)(({keys:e,format:t="condensed",variant:r})=>(0,n.jsx)(f,{children:w(e).map((e,i)=>(0,n.jsxs)(s.Fragment,{children:[i>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.T,{children:", then"})," "]}),(0,n.jsx)(y,{keys:e,format:t,variant:r})]},i))}));x.displayName="KeyboardKey";try{f.displayName||(f.displayName="Kbd")}catch{}try{y.displayName||(y.displayName="Chord")}catch{}},49395:(e,t,r)=>{r.d(t,{S:()=>f});var n=r(48055),i=r(58081),a=r(53167),s=r(12599),o=r(73216),l=r(89250),d=r(22877);function c({children:e,history:t}){let[r,a]=(0,i.useState)({location:t.location});return(0,d.g)(()=>t.listen(a),[t]),(0,n.jsx)(l.F0,{location:r.location,navigator:t,children:e})}try{c.displayName||(c.displayName="PartialRouter")}catch{}var u=r(80491),m=r(7533),p=r(48968);function f({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:d,anchorElement:f}){let h=i.useRef(),g=globalThis.window;h.current||(h.current=g?(0,m.l)({window:g}):(0,s.PP)({initialEntries:[{pathname:"/"}]}));let v=h.current,b=(0,p.ev)(f);return(0,n.jsx)(a.R,{appName:e,wasServerRendered:l,children:(0,n.jsx)(o.i,{history:v,routes:[],children:(0,n.jsxs)(c,{history:v,children:[(0,n.jsx)(r,{...t.props,...b}),(0,n.jsx)(u.P,{ssrError:d})]})})})}try{f.displayName||(f.displayName="PartialEntry")}catch{}},60302:(e,t,r)=>{r.d(t,{S:()=>ReactBaseElement});var n=r(48055),i=r(76006),a=r(27876),s=r(58081),o=r(82914),l=r(18448),d=r(43786);function c(e,t,r,n){var i,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}let u=RegExp("Minified React error #(?<invariant>\\d+)");let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:a.s,hydrateRoot:a.a};o.Z.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,i=await this.getReactNode(t),l=(0,n.jsx)(s.StrictMode,{children:i});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:e=>{if(!(e instanceof Error))return;let t=u.exec(e.message),r=String(t?.groups?.invariant);(0,d.b)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:r}})}}),t&&requestIdleCallback(()=>{t.parentElement?.removeChild(t)})}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,19547,19))}logSSRError(e){if(l.t[e])return console.error("SSR failed with an expected error:",l.t[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:n,lineno:i,colno:a}=e,s=`${t} at ${r} (${n}:${i}:${a})`;return t=" ",s}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};c([i.fA],ReactBaseElement.prototype,"embeddedData",void 0),c([i.fA],ReactBaseElement.prototype,"ssrError",void 0),c([i.fA],ReactBaseElement.prototype,"reactRoot",void 0);try{u.displayName||(u.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}},23625:(e,t,r)=>{r.d(t,{h:()=>d});var n=r(48055),i=r(52972),a=r(58081),s=r(38586),o=r(70450),l=r(38365);let d=(0,a.forwardRef)(({commandId:e,children:t,description:r,leadingVisual:a,trailingVisual:d,...c},u)=>{let m=(0,s.gm)(e),{triggerCommand:p}=(0,o.q)();return m?(0,n.jsxs)(i.S.Item,{...c,onSelect:t=>p(e,t.nativeEvent),ref:u,children:[t??m.name,r&&(0,n.jsx)(i.S.Description,{children:r}),a&&(0,n.jsx)(i.S.LeadingVisual,{children:a}),null!==d&&(0,n.jsx)(i.S.TrailingVisual,{children:d??(0,n.jsx)(l.E,{commandId:e,format:"condensed"})})]}):null});d.displayName="ActionList.CommandItem"},74165:(e,t,r)=>{r.d(t,{M:()=>u});var n,i=r(48055),a=r(88216),s=r(38586),o=r(70450),l=r(38365),d=r(58081),c=r(44067);let u=(0,d.forwardRef)(({commandId:e,children:t,trailingVisual:r,showKeybindingHint:n=!1,...d},u)=>{let m=(0,s.gm)(e),{triggerCommand:p}=(0,o.q)();return m?(0,i.jsx)(a.r,{...d,onClick:t=>p(e,t.nativeEvent),trailingVisual:r??n?()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.T,{children:"("}),(0,i.jsx)(l.E,{commandId:e,format:"condensed"}),(0,i.jsx)(c.T,{children:")"})]}):void 0,ref:u,children:t??m.name}):null});u.displayName="CommandButton";try{(n=HintVisual).displayName||(n.displayName="HintVisual")}catch{}},85301:(e,t,r)=>{var n=r(48055),i=r(50919),a=r(58081),s=r(38586),o=r(70450);(0,a.forwardRef)(({commandId:e,"aria-label":t,...r},a)=>{let l=(0,s.gm)(e),{triggerCommand:d}=(0,o.q)();return l?(0,n.jsx)(i.h,{...r,"aria-label":t??l.name,onClick:t=>d(e,t.nativeEvent),ref:a}):null}).displayName="CommandIconButton"},38365:(e,t,r)=>{r.d(t,{E:()=>s});var n=r(48055),i=r(96567),a=r(38586);let s=({commandId:e,...t})=>{let r=(0,a.gF)(e);return r?(0,n.jsx)(i.u,{keys:r,...t}):null};try{s.displayName||(s.displayName="CommandKeybindingHint")}catch{}},1649:(e,t,r)=>{r.d(t,{N:()=>u,x:()=>m});var n=r(58081),i=r(82347),a=r(38586),s=r(57667),o=r(3761),l=r(53209),d=r(5202);let c="ui-command-trigger";function u(e,t){document.dispatchEvent(new CustomEvent(c,{detail:{commandId:e,domEvent:t}}))}let m=({commands:e})=>{let t=(0,n.useCallback)((t,r)=>{let n=e[t];if(n){let e=new i.M(t);try{n(e)}finally{(0,s._)(e,r)}}},[e]),r=(0,l.V)(i.c.keys(e),t);return(0,o.K)("global",e),(0,d.V)(e),(0,n.useEffect)(()=>{let e=e=>{let r="detail"in e&&"object"==typeof e.detail?e.detail:void 0;if(!r)return;let n="commandId"in r&&"string"==typeof r.commandId&&a.mm.is(r.commandId)?r.commandId:void 0,i="domEvent"in r&&(r.domEvent instanceof KeyboardEvent||r.domEvent instanceof MouseEvent)?r.domEvent:void 0;n&&i&&t(n,i)};return document.addEventListener("keydown",r),document.addEventListener(c,e),()=>{document.removeEventListener("keydown",r),document.removeEventListener(c,e)}},[r,t]),null};try{m.displayName||(m.displayName="GlobalCommands")}catch{}},67890:(e,t,r)=>{r.d(t,{F:()=>f});var n=r(48055),i=r(61511),a=r(58081),s=r(82347),o=r(70450),l=r(57667),d=r(3761),c=r(53209),u=r(5202),m=r(8504),p=r(31171);let f=(0,a.forwardRef)(({commands:e,as:t="div",...r},f)=>{let h=(0,m.Z)(e),g=(0,o.q)(),v=(0,a.useCallback)((e,t)=>{let r=h.current[e];if(r){let n=new s.M(e);try{r(n)}finally{(0,l._)(n,t)}}else g.triggerCommand(e,t)},[h,g]);(0,d.K)("scoped",e),(0,u.V)(e);let b=(0,a.useMemo)(()=>({triggerCommand:v}),[v]),y=(0,c.V)(s.c.keys(e),v),w=(0,i.u)(y),x=(0,a.useRef)(null);return(0,p.z)(f,x),(0,a.useEffect)(()=>{let e=x.current,t=w.onKeyDown;if(e)return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}),(0,n.jsx)(o.V,{value:b,children:(0,n.jsx)(t,{style:"div"!==t?void 0:{display:"contents"},...r,...w,ref:x})})});f.displayName="ScopedCommands"},44067:(e,t,r)=>{r.d(t,{T:()=>n});let n=r(71893).ZP.span.withConfig({displayName:"VisuallyHidden",componentId:"sc-d280cbd7-0"})(["border:0;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;"])},61394:e=>{e.exports=JSON.parse('{"services":{"commit-diff-view":{"id":"commit-diff-view","name":"Commits diff view","commandIds":["commit-diff-view:open-find","commit-diff-view:create-permalink"]},"github":{"id":"github","name":"GitHub (site-wide)","commandIds":["github:submit-form","github:open-context-menu"]},"issue-viewer":{"id":"issue-viewer","name":"Issue viewer","commandIds":["issue-viewer:edit-parent"]},"item-pickers":{"id":"item-pickers","name":"Item Pickers","commandIds":["item-pickers:open-assignees","item-pickers:open-development","item-pickers:open-labels","item-pickers:open-milestone","item-pickers:open-projects"]},"keyboard-shortcuts-dialog":{"id":"keyboard-shortcuts-dialog","name":"Keyboard Shortcuts Dialog","commandIds":["keyboard-shortcuts-dialog:show-dialog"]},"list-views":{"id":"list-views","name":"List views including lists of issues, pull requests, discussions, and notifications.","commandIds":["list-views:open-manage-item-dialog"]},"pull-requests-diff-file-tree":{"id":"pull-requests-diff-file-tree","name":"Pull requests - diff file tree","commandIds":["pull-requests-diff-file-tree:focus-file-tree"]},"pull-requests-diff-view":{"id":"pull-requests-diff-view","name":"Pull requests - \'Files changed\' view","commandIds":["pull-requests-diff-view:copy-code","pull-requests-diff-view:expand-all-hunks","pull-requests-diff-view:expand-hunk-up","pull-requests-diff-view:expand-hunk-down","pull-requests-diff-view:copy-anchor-link","pull-requests-diff-view:start-conversation-current","pull-requests-diff-view:jump-to-next-result","pull-requests-diff-view:jump-to-next-result-alternate","pull-requests-diff-view:jump-to-previous-result","pull-requests-diff-view:jump-to-previous-result-alternate","pull-requests-diff-view:open-find","pull-requests-diff-view:close-find"]},"react-sandbox":{"id":"react-sandbox","name":"React Sandbox","commandIds":["react-sandbox:example-command"]},"sub-issues":{"id":"sub-issues","name":"sub-issues","commandIds":["sub-issues:create-sub-issue","sub-issues:add-existing-issue"]}},"commands":{"commit-diff-view:create-permalink":{"name":"Create permalink","description":"Hotkey to expand the current url to a full permalink.","defaultBinding":"y"},"commit-diff-view:open-find":{"name":"Open up find and search on selection","description":"Hotkey to open up the custom find and search on selection.","defaultBinding":"Mod+e"},"github:open-context-menu":{"name":"Open context menu","description":"Open a context menu if one is available","defaultBinding":"Alt+Shift+C"},"github:submit-form":{"name":"Submit form","description":"Submit the current form","defaultBinding":"Mod+Enter"},"issue-viewer:edit-parent":{"name":"Edit parent","description":"Edit parent for current issue","defaultBinding":"Alt+Shift+P"},"item-pickers:open-assignees":{"name":"Open assignees panel","description":"Open panel to select assignees","defaultBinding":"a"},"item-pickers:open-development":{"name":"Open development panel","description":"Open panel to create or link a pull request","defaultBinding":"d"},"item-pickers:open-labels":{"name":"Open labels panel","description":"Open panel to select labels","defaultBinding":"l"},"item-pickers:open-milestone":{"name":"Open milestone panel","description":"Open panel to select milestone","defaultBinding":"m"},"item-pickers:open-projects":{"name":"Open projects panel","description":"Open panel to select projects","defaultBinding":"p"},"keyboard-shortcuts-dialog:show-dialog":{"name":"Show Keyboard Shortcuts Dialog","description":"Display the keyboard shortcuts help dialog","defaultBinding":"Shift+?"},"list-views:open-manage-item-dialog":{"name":"Open \'manage item\' dialog","defaultBinding":"Mod+Shift+U","description":"Open a dialog to manage the currently focused item."},"pull-requests-diff-file-tree:focus-file-tree":{"name":"Focus file tree","description":"Move focus to the file tree","defaultBinding":"Mod+F6","featureFlag":"prx"},"pull-requests-diff-view:close-find":{"name":"Close Find","description":"Close the find window","defaultBinding":"Escape"},"pull-requests-diff-view:copy-anchor-link":{"name":"Copy anchor link","description":"Copy link to the current line","defaultBinding":"Mod+Alt+y","featureFlag":"prx"},"pull-requests-diff-view:copy-code":{"name":"Copy code","description":"Copy the code for the current line(s)","defaultBinding":"Mod+c","featureFlag":"prx"},"pull-requests-diff-view:expand-all-hunks":{"name":"Expand all","description":"Expand all hunks in the current file","defaultBinding":"Mod+Shift+ArrowLeft","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-down":{"name":"Expand below","description":"Expand the current hunk downward","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-up":{"name":"Expand above","description":"Expand the current hunk upward","featureFlag":"prx"},"pull-requests-diff-view:jump-to-next-result":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Enter"},"pull-requests-diff-view:jump-to-next-result-alternate":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Mod+g"},"pull-requests-diff-view:jump-to-previous-result":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Shift+Enter"},"pull-requests-diff-view:jump-to-previous-result-alternate":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Mod+Shift+G"},"pull-requests-diff-view:open-find":{"name":"Open up find","description":"Hotkey to open up the custom find.","defaultBinding":"Mod+f"},"pull-requests-diff-view:start-conversation-current":{"name":"Start conversation on line","description":"Start a conversation on the current line","featureFlag":"prx"},"react-sandbox:example-command":{"name":"React Sandbox Example Command","description":"Do something.","defaultBinding":"Mod+Shift+Enter"},"sub-issues:add-existing-issue":{"name":"Add existing issue","description":"Add an existing issue as a sub-issue","defaultBinding":"Alt+Shift+A"},"sub-issues:create-sub-issue":{"name":"Create sub-issue","description":"Create a new sub-issue","defaultBinding":"Alt+Shift+C"}}}')}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-541a38","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_FeatureFlags_FeatureFlags_js-node_modules_github_ca-9009bd","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_mjs","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_Button_IconButton_js-node_modules_primer_react_lib--1cd808","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c"],()=>t(10743)),e.O()}]);
//# sourceMappingURL=keyboard-shortcuts-dialog-26adfc6aee4b.js.map