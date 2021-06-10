var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function m(t,e,n){t.classList[n?"add":"remove"](e)}let b;function $(t){b=t}function y(){if(!b)throw new Error("Function called outside component initialization");return b}function T(){const t=y();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach((e=>{e.call(t,o)}))}}}const x=[],k=[],w=[],_=[],E=Promise.resolve();let L=!1;function C(t){w.push(t)}let S=!1;const O=new Set;function j(){if(!S){S=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];$(e),z(e.$$)}for($(null),x.length=0;k.length;)k.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];O.has(e)||(O.add(e),e())}w.length=0}while(x.length);for(;_.length;)_.pop()();L=!1,S=!1,O.clear()}}function z(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const H=new Set;let M;function N(){M={r:0,c:[],p:M}}function R(){M.r||s(M.c),M=M.p}function U(t,e){t&&t.i&&(H.delete(t),t.i(e))}function A(t,e,n,s){if(t&&t.o){if(H.has(t))return;H.add(t),M.c.push((()=>{H.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function P(t){t&&t.c()}function I(t,n,l,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:u}=t.$$;a&&a.m(n,l),r||C((()=>{const n=c.map(e).filter(o);i?i.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(C)}function B(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(x.push(t),L||(L=!0,E.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,o,l,r,a,i,u=[-1]){const d=b;$(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=l?l(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&J(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!r&&r(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&U(e.$$.fragment),I(e,o.target,o.anchor,o.customElement),j()}$(d)}class q{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(e){let n,s,o,l;return{c(){n=i("div"),s=i("div"),s.innerHTML='<span class="bar bar-1 svelte-152ckxk"></span> \n\t\t<span class="bar bar-2 svelte-152ckxk"></span> \t\t\t \t\n        <span class="bar bar-3 svelte-152ckxk"></span>',h(s,"class","btn play svelte-152ckxk"),m(s,"play",!e[0]),m(s,"pause",e[0]),h(n,"class","container noselect svelte-152ckxk")},m(t,c){a(t,n,c),r(n,s),o||(l=f(s,"click",e[1]),o=!0)},p(t,[e]){1&e&&m(s,"play",!t[0]),1&e&&m(s,"pause",t[0])},i:t,o:t,d(t){t&&c(n),o=!1,l()}}}function F(t,e,n){let{audioURL:s}=e,o=!1;var l=new Audio(s);return l.addEventListener("ended",(()=>{n(0,o=!1)})),t.$$set=t=>{"audioURL"in t&&n(2,s=t.audioURL)},[o,function(){n(0,o=!o),o?l.play():l.pause()},s]}class G extends q{constructor(t){super(),X(this,t,F,D,l,{audioURL:2})}}function W(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="typing svelte-pvwstz"><div class="dot svelte-pvwstz"></div> \n      <div class="dot svelte-pvwstz"></div> \n      <div class="dot svelte-pvwstz"></div></div>',h(n,"class","chat-bubble svelte-pvwstz")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class K extends q{constructor(t){super(),X(this,t,null,W,l,{})}}function Q(e){let n,s;return{c(){n=i("p"),s=u(e[0])},m(t,e){a(t,n,e),r(n,s)},p(t,[e]){1&e&&g(s,t[0])},i:t,o:t,d(t){t&&c(n)}}}function V(t,e,n){const s=T();let{textToTranslate:o}=e;var l="";if("!"===o[0]){const t=o;l=t,setTimeout((()=>s("translated",{translated:t})),1e3)}else!async function(t){console.log("translating text "+t),fetch("https://translate.kaustubh.app/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({TEXT:t})}).then((t=>t.json())).then((t=>{const e=t.translated;console.log(e),n(0,l=e),s("translated",{translated:e})})).catch((t=>{console.log(t)}))}(o);return t.$$set=t=>{"textToTranslate"in t&&n(1,o=t.textToTranslate)},[l,o]}class Y extends q{constructor(t){super(),X(this,t,V,Q,l,{textToTranslate:1})}}function Z(t){let e,n;return e=new G({props:{audioURL:t[2]}}),{c(){P(e.$$.fragment)},m(t,s){I(e,t,s),n=!0},p(t,n){const s={};4&n&&(s.audioURL=t[2]),e.$set(s)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function tt(e){let n,s;return n=new K({}),{c(){P(n.$$.fragment)},m(t,e){I(n,t,e),s=!0},p:t,i(t){s||(U(n.$$.fragment,t),s=!0)},o(t){A(n.$$.fragment,t),s=!1},d(t){B(n,t)}}}function et(t){let e,n,s,o,l,u,f,p;const g=[tt,Z],v=[];function m(t,e){return t[1]?0:1}return s=m(t),o=v[s]=g[s](t),f=new Y({props:{textToTranslate:t[0]}}),f.$on("translated",t[3]),{c(){e=i("div"),n=i("div"),o.c(),l=d(),u=i("div"),P(f.$$.fragment),h(n,"class","odia-audio"),h(u,"class","odia-text svelte-lsbkk1"),h(e,"class","scaffold svelte-lsbkk1")},m(t,o){a(t,e,o),r(e,n),v[s].m(n,null),r(e,l),r(e,u),I(f,u,null),p=!0},p(t,[e]){let l=s;s=m(t),s===l?v[s].p(t,e):(N(),A(v[l],1,1,(()=>{v[l]=null})),R(),o=v[s],o?o.p(t,e):(o=v[s]=g[s](t),o.c()),U(o,1),o.m(n,null));const r={};1&e&&(r.textToTranslate=t[0]),f.$set(r)},i(t){p||(U(o),U(f.$$.fragment,t),p=!0)},o(t){A(o),A(f.$$.fragment,t),p=!1},d(t){t&&c(e),v[s].d(),B(f)}}}function nt(t,e,n){const s=T();let{textToTranslate:o}=e,l=!0,r="";return t.$$set=t=>{"textToTranslate"in t&&n(0,o=t.textToTranslate)},[o,l,r,function(t){const e=t.detail.translated;console.log("fetching speech for "+e),fetch("https://translate.kaustubh.app/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({TEXT:e})}).then((t=>t.json())).then((t=>{n(2,r="http://ai4language.in/"+t.audio),n(1,l=!1),s("processed"),console.log(r)})).catch((t=>{console.log(t)}))}]}class st extends q{constructor(t){super(),X(this,t,nt,et,l,{textToTranslate:0})}}function ot(e){let n,o,l;return{c(){n=i("button"),n.innerHTML='<img class="paper-plane svelte-30l5pj" src="./assets/plane.svg" alt="Send"/>',h(n,"class","bubbly-button noselect svelte-30l5pj"),m(n,"animate",e[0])},m(t,s){a(t,n,s),o||(l=[f(n,"click",p(e[1])),f(n,"animationend",e[2])],o=!0)},p(t,[e]){1&e&&m(n,"animate",t[0])},i:t,o:t,d(t){t&&c(n),o=!1,s(l)}}}function lt(t,e,n){const s=T();let o=!1;return[o,function(){1==o&&n(0,o=!1),n(0,o=!0),s("send")},function(){n(0,o=!1)}]}class rt extends q{constructor(t){super(),X(this,t,lt,ot,l,{})}}function at(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="header svelte-1x1y5ws"><h1>Odia Text to Speech</h1> \n        <h2>The first natural sounding TTS for Odia language</h2></div> \n    \n    <div class="tos svelte-1x1y5ws"><p>This demo is for evaluation purposes only. <a href="mailto:info@odialanguage.com">Pricing Support.</a></p></div>',h(n,"class","wrapper noselect svelte-1x1y5ws")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class ct extends q{constructor(t){super(),X(this,t,null,at,l,{})}}const it=[];const ut=function(e,n=t){let s;const o=[];function r(t){if(l(e,t)&&(e=t,s)){const t=!it.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),it.push(n,e)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(l,a=t){const c=[l,a];return o.push(c),1===o.length&&(s=n(r)||t),l(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}([]);function dt(t,e,n){const s=t.slice();return s[13]=e[n],s}function ft(t){let e;return{c(){e=i("p"),h(e,"id","three-dots"),h(e,"class","svelte-12ybt4b")},m(t,n){a(t,e,n)},d(t){t&&c(e)}}}function pt(e){let n,s,o,l,f,p=e[13][1]+"";return{c(){n=i("div"),s=i("div"),o=i("p"),l=u(p),f=d(),h(s,"class","message-user svelte-12ybt4b"),h(n,"class","message-user-scaffold svelte-12ybt4b")},m(t,e){a(t,n,e),r(n,s),r(s,o),r(o,l),r(n,f)},p(t,e){1&e&&p!==(p=t[13][1]+"")&&g(l,p)},i:t,o:t,d(t){t&&c(n)}}}function ht(t){let e,n,s,o,l;return s=new st({props:{textToTranslate:t[3]}}),s.$on("processed",t[7]),{c(){e=i("div"),n=i("div"),P(s.$$.fragment),o=d(),h(n,"class","message-reply svelte-12ybt4b"),h(e,"class","message-reply-scaffold svelte-12ybt4b")},m(t,c){a(t,e,c),r(e,n),I(s,n,null),r(e,o),l=!0},p(t,e){const n={};8&e&&(n.textToTranslate=t[3]),s.$set(n)},i(t){l||(U(s.$$.fragment,t),l=!0)},o(t){A(s.$$.fragment,t),l=!1},d(t){t&&c(e),B(s)}}}function gt(t){let e,n,s,o;const l=[ht,pt],r=[];function i(t,e){return"reply"===t[13][0]?0:1}return e=i(t),n=r[e]=l[e](t),{c(){n.c(),s=u("")},m(t,n){r[e].m(t,n),a(t,s,n),o=!0},p(t,o){let a=e;e=i(t),e===a?r[e].p(t,o):(N(),A(r[a],1,1,(()=>{r[a]=null})),R(),n=r[e],n?n.p(t,o):(n=r[e]=l[e](t),n.c()),U(n,1),n.m(s.parentNode,s))},i(t){o||(U(n),o=!0)},o(t){A(n),o=!1},d(t){r[e].d(t),t&&c(s)}}}function vt(t){let e,n,o,l,b,$,y,T,x,k,w,_,E,L,C,S,O,j,z,H,M,J,X,q,D,F,G,W,K,Q,V,Y;o=new ct({});let Z="Initializing"==t[4]&&ft(),tt=t[0],et=[];for(let e=0;e<tt.length;e+=1)et[e]=gt(dt(t,tt,e));const nt=t=>A(et[t],1,1,(()=>{et[t]=null}));return D=new rt({}),D.$on("send",t[6]),{c(){e=i("div"),n=i("div"),P(o.$$.fragment),l=d(),b=i("div"),$=i("div"),$.innerHTML='<h1 id="center-title" class="svelte-12ybt4b">Odia Text to Speech</h1>',y=d(),T=i("div"),x=i("div"),k=i("div"),w=i("div"),_=i("span"),E=d(),L=i("p"),C=u(t[4]),S=d(),Z&&Z.c(),O=d(),j=i("div"),z=i("div"),z.innerHTML='<div class="message-reply svelte-12ybt4b"><p>Type anything.. We&#39;ll convert it to Odia Speech!</p></div>',H=d();for(let t=0;t<et.length;t+=1)et[t].c();M=d(),J=i("form"),X=i("input"),q=d(),P(D.$$.fragment),F=d(),G=i("div"),G.innerHTML='<p id="center-tos" class="svelte-12ybt4b">This demo is for evaluation purposes only. <a href="mailto:info@odialanguage.com">Pricing Support.</a></p>',W=d(),K=i("div"),h(n,"class","left-div svelte-12ybt4b"),h($,"class","center-header noselect svelte-12ybt4b"),h(_,"class","dot svelte-12ybt4b"),h(w,"class","api-status svelte-12ybt4b"),m(w,"api-status-fade","Connected"===t[4]),h(k,"class","header svelte-12ybt4b"),h(z,"class","message-reply-scaffold svelte-12ybt4b"),h(j,"class","messages svelte-12ybt4b"),h(X,"id","type-message"),h(X,"type","text"),h(X,"name",Math.random()),h(X,"maxlength","60"),h(X,"placeholder","type in any language"),h(X,"class","svelte-12ybt4b"),h(J,"class","input-box svelte-12ybt4b"),h(x,"class","chatbox svelte-12ybt4b"),h(T,"class","scaffold svelte-12ybt4b"),h(G,"class","center-footer noselect svelte-12ybt4b"),h(b,"class","center-div svelte-12ybt4b"),h(K,"class","right-div svelte-12ybt4b"),h(e,"class","flex-div svelte-12ybt4b")},m(s,c){a(s,e,c),r(e,n),I(o,n,null),r(e,l),r(e,b),r(b,$),r(b,y),r(b,T),r(T,x),r(x,k),r(k,w),r(w,_),t[8](_),r(w,E),r(w,L),r(L,C),r(w,S),Z&&Z.m(w,null),r(x,O),r(x,j),r(j,z),r(j,H);for(let t=0;t<et.length;t+=1)et[t].m(j,null);t[9](j),r(x,M),r(x,J),r(J,X),v(X,t[1]),r(J,q),I(D,J,null),r(b,F),r(b,G),r(e,W),r(e,K),Q=!0,V||(Y=[f(X,"input",t[10]),f(J,"submit",p(t[6]))],V=!0)},p(t,[e]){if((!Q||16&e)&&g(C,t[4]),"Initializing"==t[4]?Z||(Z=ft(),Z.c(),Z.m(w,null)):Z&&(Z.d(1),Z=null),16&e&&m(w,"api-status-fade","Connected"===t[4]),137&e){let n;for(tt=t[0],n=0;n<tt.length;n+=1){const s=dt(t,tt,n);et[n]?(et[n].p(s,e),U(et[n],1)):(et[n]=gt(s),et[n].c(),U(et[n],1),et[n].m(j,null))}for(N(),n=tt.length;n<et.length;n+=1)nt(n);R()}2&e&&X.value!==t[1]&&v(X,t[1])},i(t){if(!Q){U(o.$$.fragment,t);for(let t=0;t<tt.length;t+=1)U(et[t]);U(D.$$.fragment,t),Q=!0}},o(t){A(o.$$.fragment,t),et=et.filter(Boolean);for(let t=0;t<et.length;t+=1)A(et[t]);A(D.$$.fragment,t),Q=!1},d(n){n&&c(e),B(o),t[8](null),Z&&Z.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(et,n),t[9](null),B(D),V=!1,s(Y)}}}function mt(t,e,n){let s=[];ut.subscribe((t=>{n(0,s=t)}));let o,l,r,a="";var c=!1;let i,u="Initializing";var d;return d=()=>{n(5,i.style.backgroundColor="#ff8f00",i),fetch("https://translate.kaustubh.app",{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{t.active&&(n(5,i.style.backgroundColor="lightgreen",i),n(4,u="Connected"))})).catch((t=>{console.log(t),n(5,i.style.backgroundColor="#ff4633",i),n(4,u="Server Error")}))},y().$$.on_mount.push(d),function(t){y().$$.before_update.push(t)}((()=>{l=o&&o.offsetHeight+o.scrollTop>o.scrollHeight-20})),function(t){y().$$.after_update.push(t)}((()=>{l&&o.scrollTo({top:o.scrollHeight,left:0,behavior:"smooth"})})),[s,a,o,r,u,i,function(){n(1,a=a.trim()),c?console.log("server busy!"):""!==a&&a.length<=60&&(n(3,r=a),ut.update((t=>[...t,["user",a],["reply",a]])),c=!0),n(1,a="")},function(){c=!1,"Server Error"==u&&(n(5,i.style.backgroundColor="lightgreen",i),n(4,u="Connected"))},function(t){k[t?"unshift":"push"]((()=>{i=t,n(5,i)}))},function(t){k[t?"unshift":"push"]((()=>{o=t,n(2,o)}))},function(){a=this.value,n(1,a)}]}return new class extends q{constructor(t){super(),X(this,t,mt,vt,l,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map