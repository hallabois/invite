function y(){}const O=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function Q(){return Object.create(null)}function x(t){t.forEach(K)}function D(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Mt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ft(t){return Object.keys(t).length===0}function Ot(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function Dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,u){if(r){const c=W(e,n,i,u);t.p(c,r)}}function Bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window!="undefined";let V=U?()=>window.performance.now():()=>Date.now(),T=U?t=>requestAnimationFrame(t):y;const b=new Set;function X(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&T(X)}function Y(t){let e;return b.size===0&&T(X),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let A=!1;function at(){A=!0}function _t(){A=!1}function dt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:dt(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[a]+1;const f=a+1;n[f]=s,r=Math.max(f,r)}const u=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<u.length&&c[s].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(c[s],a)}}function mt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=tt("style");return yt(Z(t),e),e}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(A){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){A&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function Ft(){return B(" ")}function Ht(){return B("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){$t(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function wt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Jt(t,e,n){return wt(t,e,n,tt)}function vt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Kt(t){return vt(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Wt(t,e){t.value=e==null?"":e}function Et(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function Ut(t,e=document.body){return Array.from(e.querySelectorAll(t))}const L=new Set;let C=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function nt(t,e,n,i,r,u,c,o=0){const s=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=s){const k=e+(n-e)*u(m);l+=m*100+`%{${c(k,1-k)}}
`}const a=l+`100% {${c(n,1-n)}}
}`,f=`__svelte_${kt(a)}_${o}`,_=Z(t);L.add(_);const d=_.__svelte_stylesheet||(_.__svelte_stylesheet=pt(t).sheet),h=_.__svelte_rules||(_.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,C+=1,f}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),C-=r,C||St())}function St(){T(()=>{C||(L.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),L.clear())})}let N;function j(t){N=t}function F(){if(!N)throw new Error("Function called outside component initialization");return N}function Vt(t){F().$$.on_mount.push(t)}function Xt(t){F().$$.after_update.push(t)}function Yt(t,e){F().$$.context.set(t,e)}const w=[],it=[],q=[],rt=[],At=Promise.resolve();let H=!1;function Ct(){H||(H=!0,At.then(st))}function v(t){q.push(t)}let I=!1;const G=new Set;function st(){if(!I){I=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];j(e),Nt(e.$$)}for(j(null),w.length=0;it.length;)it.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];G.has(e)||(G.add(e),e())}q.length=0}while(w.length);for(;rt.length;)rt.pop()();H=!1,I=!1,G.clear()}}function Nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}let E;function ct(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function R(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const z=new Set;let g;function Zt(){g={r:0,c:[],p:g}}function te(){g.r||x(g.c),g=g.p}function jt(t,e){t&&t.i&&(z.delete(t),t.i(e))}function ee(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),g.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const lt={duration:0};function ne(t,e,n){let i=e(t,n),r=!1,u,c,o=0;function s(){u&&P(t,u)}function l(){const{delay:f=0,duration:_=300,easing:d=O,tick:h=y,css:p}=i||lt;p&&(u=nt(t,0,1,_,f,d,p,o++)),h(0,1);const m=V()+f,k=m+_;c&&c.abort(),r=!0,v(()=>R(t,!0,"start")),c=Y(M=>{if(r){if(M>=k)return h(1,0),R(t,!0,"end"),s(),r=!1;if(M>=m){const J=d((M-m)/_);h(J,1-J)}}return r})}let a=!1;return{start(){a||(a=!0,P(t),D(i)?(i=i(),ct().then(l)):l())},invalidate(){a=!1},end(){r&&(s(),r=!1)}}}function ie(t,e,n){let i=e(t,n),r=!0,u;const c=g;c.r+=1;function o(){const{delay:s=0,duration:l=300,easing:a=O,tick:f=y,css:_}=i||lt;_&&(u=nt(t,1,0,l,s,a,_));const d=V()+s,h=d+l;v(()=>R(t,!1,"start")),Y(p=>{if(r){if(p>=h)return f(0,1),R(t,!1,"end"),--c.r||x(c.c),!1;if(p>=d){const m=a((p-d)/l);f(1-m,m)}}return r})}return D(i)?ct().then(()=>{i=i(),o()}):o(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&P(t,u),r=!1)}}}function re(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=e[u];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[u]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function se(t){return typeof t=="object"&&t!==null?t:{}}function ce(t){t&&t.c()}function le(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(e,n),i||v(()=>{const s=u.map(K).filter(D);c?c.push(...s):x(s),t.$$.on_mount=[]}),o.forEach(v)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(w.push(t),Ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,r,u,c,o=[-1]){const s=N;j(t);const l=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),a&&zt(t,f)),_}):[],l.update(),a=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){at();const f=bt(e.target);l.fragment&&l.fragment.l(f),f.forEach(xt)}else l.fragment&&l.fragment.c();e.intro&&jt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),_t(),st()}j(s)}class ue{$destroy(){Rt(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function fe(t,e=y){let n;const i=new Set;function r(o){if(ut(t,o)&&(t=o,n)){const s=!$.length;for(const l of i)l[1](),$.push(l,t);if(s){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function u(o){r(o(t))}function c(o,s=y){const l=[o,s];return i.add(l),i.size===1&&(n=e(r)||y),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:c}}function ae(t,{delay:e=0,duration:n=400,easing:i=O}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*r}`}}export{Vt as A,ot as B,fe as C,Ot as D,Tt as E,Bt as F,Dt as G,gt as H,y as I,Wt as J,It as K,v as L,ie as M,Pt as N,D as O,Ut as P,Mt as Q,ne as R,ue as S,ae as T,bt as a,Gt as b,Jt as c,xt as d,tt as e,Lt as f,vt as g,Qt as h,oe as i,ce as j,Ft as k,Ht as l,le as m,Kt as n,qt as o,re as p,se as q,Zt as r,ut as s,B as t,ee as u,Rt as v,te as w,jt as x,Yt as y,Xt as z};
