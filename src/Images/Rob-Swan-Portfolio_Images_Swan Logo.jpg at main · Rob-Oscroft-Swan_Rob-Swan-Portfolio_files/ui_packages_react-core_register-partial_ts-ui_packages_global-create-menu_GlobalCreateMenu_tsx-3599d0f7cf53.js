"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_register-partial_ts-ui_packages_global-create-menu_GlobalCreateMenu_tsx"],{79697:(e,t,r)=>{let n;r.d(t,{YT:()=>m,qP:()=>_,yM:()=>p});var a=r(88149),s=r(64307),o=r(56363),i=r(43786);let{getItem:l}=(0,o.Z)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,a.n)("octolytics");delete e.baseContext,n=new s.R(e)}catch(e){}function u(e){let t=(0,a.n)("octolytics").baseContext||{};if(t)for(let[e,r]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=r,delete t[e]);let r=document.querySelector("meta[name=visitor-payload]");for(let[e,n]of(r&&Object.assign(t,JSON.parse(atob(r.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,i.B)().toString(),Object.assign(t,e)}function m(e){n?.sendPageView(u(e))}function _(e,t={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,a=r?{service:r}:{};for(let[e,r]of Object.entries(t))null!=r&&(a[e]=`${r}`);n&&(u(a),n.sendEvent(e||"unknown",u(a)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},83206:(e,t,r)=>{r.d(t,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new n),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let n=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},48968:(e,t,r)=>{r.d(t,{Ac:()=>s,Z_:()=>o,ev:()=>a});var n=r(58081);function a(e){return((0,n.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function s(e){let t=(0,n.useRef)(e.__wrapperElement.anchor||null),[r,a]=(0,n.useState)(!1),s=(0,n.useCallback)(()=>{a(!r)},[r,a]);return(0,n.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),o(e,s),{ref:t,open:r,setOpen:a}}function o(e,t){let r=(0,n.useRef)(e.__wrapperElement.anchor);(0,n.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},74898:(e,t,r)=>{r.d(t,{t:()=>c});let n=new(r(83206)).e;var a=r(48055),s=r(76006),o=r(60302),i=r(49395);let l=class ReactPartialElement extends o.S{async getReactNode(e){var t;let{Component:r}=await (t=this.name,n.getRegistration(t)),s=this.closest("react-partial-anchor");return(0,a.jsx)(i.S,{partialName:this.name,embeddedData:e,Component:r,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:s})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function c(e,t){n.register(e,t)}l=function(e,t,r,n){var a,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(s<3?a(o):s>3?a(t,r,o):a(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}([s.Ih],l)},82914:(e,t,r)=>{r.d(t,{Z:()=>i});let{getItem:n,setItem:a,removeItem:s}=(0,r(56363).Z)("localStorage"),o="REACT_PROFILING_ENABLED",i={enable:()=>a(o,"true"),disable:()=>s(o),isEnabled:()=>!!n(o)}},59434:(e,t,r)=>{r.d(t,{w:()=>i,z:()=>o});var n=r(58081),a=r(79697),s=r(15470);function o(){let e=(0,n.useContext)(s.f);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:r,metadata:o}=e;return{sendAnalyticsEvent:(0,n.useCallback)((e,n,s={})=>{let i={react:!0,app_name:t,category:r,...o};(0,a.qP)(e,{...i,...s,target:n})},[t,r,o])}}function i(){let{sendAnalyticsEvent:e}=o();return{sendClickAnalyticsEvent:(0,n.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},1226:(e,t,r)=>{r.d(t,{G:()=>j,t:()=>x});var n=r(48055),a=r(59434),s=r(52972),o=r(74121),i=r(35732),l=r(51081),c=r(85529),d=r(58081),u=r(48968);let m=(0,d.lazy)(()=>Promise.all([r.e("react-lib"),r.e("vendors-node_modules_dompurify_dist_purify_js"),r.e("vendors-node_modules_primer_react_lib-esm_TextInput_TextInput_js"),r.e("vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js"),r.e("vendors-node_modules_react-router-dom_dist_index_js"),r.e("vendors-node_modules_primer_react_lib-esm_SelectPanel_SelectPanel_js"),r.e("vendors-node_modules_primer_react_lib-esm_ConfirmationDialog_ConfirmationDialog_js"),r.e("vendors-node_modules_react-relay_index_js"),r.e("vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-fd5530"),r.e("vendors-node_modules_date-fns_format_mjs"),r.e("vendors-node_modules_date-fns_addWeeks_mjs-node_modules_date-fns_addYears_mjs-node_modules_da-827f4f"),r.e("vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-864296"),r.e("vendors-node_modules_primer_react_lib-esm_Popover_Popover_js-node_modules_date-fns_difference-a582b2"),r.e("vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_markdown-toolbar-e-820fc0"),r.e("vendors-node_modules_primer_react_lib-esm_Button_LinkButton_js-node_modules_primer_react_lib--a52ff3"),r.e("vendors-node_modules_react-relay_hooks_js-node_modules_github_paste-markdown_dist_index_js-no-4de7cc"),r.e("ui_packages_paths_index_ts"),r.e("ui_packages_relay-environment_relay-environment_ts"),r.e("ui_packages_item-picker_components_RepositoryPicker_tsx"),r.e("ui_packages_date-picker_date-picker_ts"),r.e("ui_packages_issue-create_dialog_CreateIssueDialogEntry_tsx"),r.e("node_modules_primer_react_lib-esm_hooks_useResponsiveValue_js-ui_packages_aria-live_aria-live-ff1be0")]).then(r.bind(r,2263)));function _({label:e,analyticsLabel:t}){return{category:"SiteHeaderComponent",action:"add_dropdown",label:t||e.toLowerCase()}}function p({label:e,href:t,LeadingVisual:r,analyticsLabel:o}){let{sendClickAnalyticsEvent:i}=(0,a.w)(),l=(0,d.useCallback)(()=>{i(_({label:e,analyticsLabel:o}))},[e,o,i]);return(0,n.jsxs)(s.S.LinkItem,{href:t,onClick:l,children:[(0,n.jsx)(s.S.LeadingVisual,{children:(0,n.jsx)(r,{})}),e]})}function h({label:e,onClick:t,LeadingVisual:r,analyticsLabel:o}){let{sendClickAnalyticsEvent:i}=(0,a.w)(),l=(0,d.useCallback)(()=>{i(_({label:e,analyticsLabel:o})),t()},[e,o,i,t]);return(0,n.jsxs)(s.S.Item,{onClick:l,children:[(0,n.jsx)(s.S.LeadingVisual,{children:(0,n.jsx)(r,{})}),e]})}function f(){return(0,n.jsx)(o.Z,{size:"small"})}function g({side:e="outside-bottom",createRepo:t,importRepo:r,createOrg:a,createProject:o,createProjectUrl:l,createLegacyProject:u,createIssue:_,codespaces:g,gist:b,org:y,owner:j,repo:x,isOpen:v=!1,setIsOpen:R=()=>{},environment:w}){let[S,E]=(0,d.useState)(!1),[C,N]=(0,d.useState)(!1),[P,k]=(0,d.useState)(v);(0,d.useEffect)(()=>{v&&k(!0)},[v]);let I=S&&!C;return(0,n.jsxs)(n.Fragment,{children:[_&&P&&(0,n.jsx)(d.Suspense,{children:(0,n.jsx)(m,{isVisible:S,setIsVisible:E,setIsLoaded:N,setIsParentMenuOpen:R,owner:j,repo:x,environment:w})}),(0,n.jsx)(i.P.Overlay,{side:e,children:(0,n.jsxs)(s.S,{children:[_&&(0,n.jsx)(h,{label:"New issue",onClick:()=>(E(!0),!1),LeadingVisual:I?f:c.IssueOpenedIcon}),!1!==t&&(0,n.jsx)(p,{label:"New repository",href:"/new",LeadingVisual:c.RepoIcon}),r&&(0,n.jsx)(p,{label:"Import repository",href:"/new/import",LeadingVisual:c.RepoPushIcon}),(g||b)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.S.Divider,{}),g&&(0,n.jsx)(p,{label:"New codespace",href:"/codespaces/new",LeadingVisual:c.CodespacesIcon}),b&&(0,n.jsx)(p,{label:"New gist",href:"/gist",LeadingVisual:c.CodeIcon})]}),(a||o||u)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.S.Divider,{}),a&&(0,n.jsx)(p,{label:"New organization",href:"/account/organizations/new",LeadingVisual:c.OrganizationIcon}),o&&(0,n.jsx)(p,{label:"New project",analyticsLabel:"new project",href:l,LeadingVisual:c.ProjectIcon}),!o&&u&&(0,n.jsx)(p,{label:"New project",analyticsLabel:"new legacy project",href:"/new/project",LeadingVisual:c.ProjectIcon})]}),y?.canAdmin&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.S.Divider,{}),(0,n.jsx)(p,{label:`${y.addWord} someone to ${y.login}`,analyticsLabel:"invite someone",href:`/orgs/${y.login}/people#invite-member`,LeadingVisual:c.PersonAddIcon}),(0,n.jsx)(p,{label:`New team in ${y.login}`,analyticsLabel:"new team",href:`/orgs/${y.login}/new-team`,LeadingVisual:c.PeopleIcon}),(0,n.jsx)(p,{label:`New repository in ${y.login}`,analyticsLabel:"organization - new repository",href:`/organizations/${y.login}/repositories/new`,LeadingVisual:c.RepoIcon})]})]})})]})}function b(e){let{ref:t,open:r,setOpen:a}=(0,u.Ac)(e.reactPartialAnchor);return(0,n.jsx)(i.P,{anchorRef:t,open:r,onOpenChange:a,children:(0,n.jsx)(g,{...e,isOpen:r,setIsOpen:a})})}function y(e){let t=`global-create-menu-tooltip-${(0,d.useId)()}`,[r,a]=(0,d.useState)(!1);return(0,n.jsxs)(i.P,{open:r,onOpenChange:a,children:[(0,n.jsx)(l.u,{text:"Create New...",type:"label",id:t,children:(0,n.jsx)(i.P.Button,{leadingVisual:c.PlusIcon,children:""})}),(0,n.jsx)(g,{...e,isOpen:r,setIsOpen:a})]})}function j(e){return e.reactPartialAnchor?(0,n.jsx)(b,{...e,reactPartialAnchor:e.reactPartialAnchor}):(0,n.jsx)(y,{...e})}function x(e){let[t,r]=(0,d.useState)(!1);return(0,n.jsxs)(i.P,{open:t,onOpenChange:r,children:[(0,n.jsx)(i.P.Anchor,{children:(0,n.jsxs)(s.S.Item,{children:[(0,n.jsx)(s.S.LeadingVisual,{children:(0,n.jsx)(c.PlusIcon,{})}),"Create new"]})}),(0,n.jsx)(g,{...e,isOpen:t,setIsOpen:r,side:"outside-top"})]})}try{m.displayName||(m.displayName="LazyCreateIssueDialog")}catch{}try{p.displayName||(p.displayName="CreateMenuLinkItem")}catch{}try{h.displayName||(h.displayName="CreateMenuItem")}catch{}try{f.displayName||(f.displayName="MenuItemSpinner")}catch{}try{g.displayName||(g.displayName="GlobalCreateMenuOverlay")}catch{}try{b.displayName||(b.displayName="ExternallyAnchoredGlobalCreateMenu")}catch{}try{y.displayName||(y.displayName="GlobalCreateMenuWithAnchor")}catch{}try{j.displayName||(j.displayName="GlobalCreateMenu")}catch{}try{x.displayName||(x.displayName="GlobalCreateMenuItem")}catch{}},49395:(e,t,r)=>{r.d(t,{S:()=>p});var n=r(48055),a=r(58081),s=r(53167),o=r(12599),i=r(73216),l=r(89250),c=r(22877);function d({children:e,history:t}){let[r,s]=(0,a.useState)({location:t.location});return(0,c.g)(()=>t.listen(s),[t]),(0,n.jsx)(l.F0,{location:r.location,navigator:t,children:e})}try{d.displayName||(d.displayName="PartialRouter")}catch{}var u=r(80491),m=r(7533),_=r(48968);function p({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:c,anchorElement:p}){let h=a.useRef(),f=globalThis.window;h.current||(h.current=f?(0,m.l)({window:f}):(0,o.PP)({initialEntries:[{pathname:"/"}]}));let g=h.current,b=(0,_.ev)(p);return(0,n.jsx)(s.R,{appName:e,wasServerRendered:l,children:(0,n.jsx)(i.i,{history:g,routes:[],children:(0,n.jsxs)(d,{history:g,children:[(0,n.jsx)(r,{...t.props,...b}),(0,n.jsx)(u.P,{ssrError:c})]})})})}try{p.displayName||(p.displayName="PartialEntry")}catch{}},60302:(e,t,r)=>{r.d(t,{S:()=>ReactBaseElement});var n=r(48055),a=r(76006),s=r(27876),o=r(58081),i=r(82914),l=r(18448),c=r(43786);function d(e,t,r,n){var a,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(s<3?a(o):s>3?a(t,r,o):a(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}let u=RegExp("Minified React error #(?<invariant>\\d+)");let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:s.s,hydrateRoot:s.a};i.Z.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,a=await this.getReactNode(t),l=(0,n.jsx)(o.StrictMode,{children:a});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:e=>{if(!(e instanceof Error))return;let t=u.exec(e.message),r=String(t?.groups?.invariant);(0,c.b)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:r}})}}),t&&requestIdleCallback(()=>{t.parentElement?.removeChild(t)})}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,19547,19))}logSSRError(e){if(l.t[e])return console.error("SSR failed with an expected error:",l.t[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:n,lineno:a,colno:s}=e,o=`${t} at ${r} (${n}:${a}:${s})`;return t=" ",o}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};d([a.fA],ReactBaseElement.prototype,"embeddedData",void 0),d([a.fA],ReactBaseElement.prototype,"ssrError",void 0),d([a.fA],ReactBaseElement.prototype,"reactRoot",void 0);try{u.displayName||(u.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_register-partial_ts-ui_packages_global-create-menu_GlobalCreateMenu_tsx-d6ed1be3c59f.js.map