function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t){let e;return a(t,(t=>e=t))(),e}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}function u(t,e,n,o){if(t){const r=p(t,e,n,o);return t[0](r)}}function p(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e,n,o,r,i,s){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(a){const r=p(e,n,o,s);t.p(r,a)}}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function w(){return $("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e,n){t.classList[n?"add":"remove"](e)}let k;function j(t){k=t}function O(){if(!k)throw new Error("Function called outside component initialization");return k}function E(t,e){O().$$.context.set(t,e)}function L(t){return O().$$.context.get(t)}const I=[],S=[],R=[],T=[],F=Promise.resolve();let N=!1;function A(){N||(N=!0,F.then(U))}function M(){return A(),F}function C(t){R.push(t)}let q=!1;const B=new Set;function U(){if(!q){q=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];j(e),D(e.$$)}for(j(null),I.length=0;S.length;)S.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];B.has(e)||(B.add(e),e())}R.length=0}while(I.length);for(;T.length;)T.pop()();N=!1,q=!1,B.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const H=new Set;let K;function z(){K={r:0,c:[],p:K}}function J(){K.r||r(K.c),K=K.p}function W(t,e){t&&t.i&&(H.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),K.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function Q(t,e){t.d(1),e.delete(t.key)}function V(t,e){G(t,1,1,(()=>{e.delete(t.key)}))}function Z(t,e,n,o,r,i,s,a,c,l,u,p){let f=t.length,d=i.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=d;h--;){const t=p(r,i,h),a=n(t);let c=s.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,g[h]=c),a in m&&$.set(a,Math.abs(h-m[a]))}const b=new Set,w=new Set;function _(t){W(t,1),t.m(a,u),s.set(t.key,t),u=t.first,d--}for(;f&&d;){const e=g[d-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,d--):y.has(r)?!s.has(o)||b.has(o)?_(e):w.has(r)?f--:$.get(o)>$.get(r)?(w.add(o),_(e)):(b.add(r),f--):(c(n,s),f--)}for(;f--;){const e=t[f];y.has(e.key)||c(e,s)}for(;d;)_(g[d-1]);return g}function X(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],a=e[i];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[i]=a}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function et(t,e,o){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=t.$$;s&&s.m(e,o),C((()=>{const e=a.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(C)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,n,i,s,a,c,l=[-1]){const u=k;j(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let f=!1;if(p.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),f&&function(t,e){-1===t.$$.dirty[0]&&(I.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),f=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&W(e.$$.fragment),et(e,n.target,n.anchor),U()}j(u)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var it={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce(((t,[e,n])=>(t[e]=n,t)),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const st=RegExp(/\:([^/()]+)/g);function at(t){if(navigator.userAgent.includes("jsdom"))return!1;ct(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}function ct(t){t&&t.scrollTo&&"scroll-lock"!==t.dataset.routify&&"lock"!==t.dataset["routify-scroll"]&&(t.style["scroll-behavior"]="auto",t.scrollTo({top:0,behavior:"auto"}),t.style["scroll-behavior"]="",ct(t.parentElement))}const lt=t=>{const e=[];let n;for(;n=st.exec(t);)e.push(n[1]);return e};function ut(t,e){ut._console=ut._console||{log:console.log,warn:console.warn};const{_console:n}=ut,o=t.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,t.component.shortPath.split("/").pop()).replace(/^./,(t=>t.toUpperCase())).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const t of["log","warn"])console[t]=(...e)=>{r.includes(e[0])||n[t](...e)},e().then((()=>{console[t]=n[t]}))}function pt(){let t=window.location.pathname+window.location.search+window.location.hash;it.useHash&&(t=t.replace(/.*#(.+)/,"$1"));const{url:e,options:n}=function(t){const[e,n]=t.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:e,options:o}}(t);return{...ft(e),options:n}}function ft(t){const e=t.startsWith("/")?window.location.origin:void 0,n=new URL(t,e);return{url:n,fullpath:n.pathname+n.search+n.hash}}function dt(t,e,n){const o=it.useHash?"#":"";let r;return r=function(t,e,n){const o=Object.assign({},n,e),r=function(t,e){if(!it.queryHandler)return"";const n=lt(t),o={};e&&Object.entries(e).forEach((([t,e])=>{n.includes(t)||(o[t]=e)}));return it.queryHandler.stringify(o).replace(/\?$/,"")}(t,e);for(const[e,n]of Object.entries(o))t=t.replace(`:${e}`,n);return`${t}${r}`}(t,e,n),r=it.urlTransform.apply(r),r=o+r,r}function ht(t){let e;const n=t[1].default,o=u(n,t,t[0],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[e]){o&&o.p&&1&e&&f(o,n,t,t[0],e,null,null)},i(t){e||(W(o,t),e=!0)},o(t){G(o,t),e=!1},d(t){o&&o.d(t)}}}function mt(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class gt extends rt{constructor(t){super(),ot(this,t,mt,ht,s,{})}}const yt=[];function $t(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!yt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),yt.push(n,e)}if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,a=t){const c=[s,a];return r.push(c),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function bt(e,n,o){const s=!Array.isArray(e),c=s?[e]:e,l=n.length<2;return{subscribe:$t(o,(e=>{let o=!1;const u=[];let p=0,f=t;const d=()=>{if(p)return;f();const o=n(s?u[0]:u,e);l?e(o):f=i(o)?o:t},h=c.map(((t,e)=>a(t,(t=>{u[e]=t,p&=~(1<<e),o&&d()}),(()=>{p|=1<<e}))));return o=!0,d(),function(){r(h),f()}})).subscribe}}window.routify=window.routify||{};const wt=$t(null),_t=$t([]);_t.subscribe((t=>window.routify.routes=t));let xt=$t({component:{params:{}}});const vt=$t(null),Pt=$t(!0);function kt(t,e=!1){t=it.urlTransform.remove(t);let{pathname:n,search:o}=ft(t).url;const r=c(_t),i=r.find((t=>n===t.meta.name))||r.find((t=>n.match(t.regex)));if(!i)throw new Error(`Route could not be found for "${n}".`);const s=e?Object.create(i):i,{route:a,redirectPath:l,rewritePath:u}=jt(s,r);return u&&(({pathname:n,search:o}=ft(dt(u,a.params)).url),l&&(a.redirectTo=dt(l,a.params||{}))),it.queryHandler&&(a.params=Object.assign({},a.params,it.queryHandler.parse(o))),function(t,e){if(t.paramKeys){const n=function(t){const e=[];return t.forEach((t=>{e[t.path.split("/").filter(Boolean).length-1]=t})),e}(t.layouts),o=e.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map((t=>t.match(/\:(.+)/))).map((t=>t&&t[1]))})(t.path).forEach(((e,r)=>{e&&(t.params[e]=o[r],n[r]?n[r].param={[e]:o[r]}:t.param={[e]:o[r]})}))}}(a,n),a.leftover=t.replace(new RegExp(a.regex),""),a}function jt(t,e,n,o){const{redirect:r,rewrite:i}=t.meta;if(r||i){n=r?r.path||r:n,o=i?i.path||i:n;const s=r&&r.params,a=i&&i.params,c=e.find((t=>t.path===o));return c===t&&console.error(`${o} is redirecting to itself`),c||console.error(`${t.path} is redirecting to non-existent path: ${o}`),(s||a)&&(c.params=Object.assign({},c.params,s,a)),jt(c,e,n,o)}return{route:t,redirectPath:n,rewritePath:o}}function Ot(t,e,n){const o=t.slice();return o[1]=e[n],o}function Et(t,e){let n,o;return{key:t,first:null,c(){n=y("iframe"),n.src!==(o=e[1].url)&&x(n,"src",o),x(n,"frameborder","0"),x(n,"title","routify prefetcher"),this.first=n},m(t,e){h(t,n,e)},p(t,r){e=t,1&r&&n.src!==(o=e[1].url)&&x(n,"src",o)},d(t){t&&m(n)}}}function Lt(e){let n,o=[],r=new Map,i=e[0];const s=t=>t[1].options.prefetch;for(let t=0;t<i.length;t+=1){let n=Ot(e,i,t),a=s(n);r.set(a,o[t]=Et(a,n))}return{c(){n=y("div");for(let t=0;t<o.length;t+=1)o[t].c();var t,e,r;x(n,"id","__routify_iframes"),t="display",e="none",n.style.setProperty(t,e,r?"important":"")},m(t,e){h(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){1&e&&(i=t[0],o=Z(o,e,s,1,t,i,r,n,Q,Et,null,Ot))},i:t,o:t,d(t){t&&m(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const It=$t([]),St=bt(It,(t=>t.slice(0,2)));function Rt(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=c(It).find((t=>t&&t.options.prefetch==e));if(n){const{gracePeriod:t}=n.options,o=new Promise((e=>setTimeout(e,t))),r=new Promise((e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)}));Promise.all([o,r]).then((()=>{It.update((t=>t.filter((t=>t.options.prefetch!=e))))}))}}function Tt(t,e,n){let o;return l(t,St,(t=>n(0,o=t))),[o]}St.subscribe((t=>t.forEach((({options:t})=>{setTimeout((()=>Rt(t.prefetch)),t.timeout)})))),addEventListener("message",Rt,!1);class Ft extends rt{constructor(t){super(),ot(this,t,Tt,Lt,s,{})}}function Nt(){return L("routify")||xt}const At={subscribe:t=>bt(Nt(),(t=>t.layout.api)).subscribe(t)},Mt={_hooks:[t=>Pt.set(!1)],subscribe:qt},Ct={_hooks:[],subscribe:qt};function qt(t){const e=this._hooks,n=e.length;return t((t=>{e[n]=t})),()=>delete e[n]}const Bt={subscribe:t=>bt([Nt(),wt,_t],(t=>function(t,e,n){return function(o,r={},i){const{component:s}=t,a=Object.assign({},e.params,s.params);let c=o&&o.nodeType&&o;c&&(o=o.getAttribute("href")),o=o?p(o):s.shortPath;const l=n.find((t=>[t.shortPath||"/",t.path].includes(o)));if(l&&"proximity"===l.meta.preload&&window.requestIdleCallback){const t=routify.appLoaded?0:1500;setTimeout((()=>{window.requestIdleCallback((()=>l.api.preload()))}),t)}i&&!1!==i.strict||(o=o.replace(/index$/,""));let u=dt(o,r,a);return c?(c.href=u,{update(t){c.href=dt(o,t,a)}}):u;function p(t){if(t.match(/^\.\.?\//)){let[,e,n]=t.match(/^([\.\/]+)(.*)/),o=s.path.replace(/\/$/,"");const r=e.match(/\.\.\//g)||[];s.isPage&&r.push(null),r.forEach((()=>o=o.replace(/\/[^\/]+\/?$/,""))),t=(t=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(t.match(/^\//));else{const e=n.find((e=>e.meta.name===t));e&&(t=e.shortPath)}return t}}}(...t))).subscribe(t)};const Ut={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(Ut.getLongest(Ut.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){Ut.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){Ut.writeMeta(`og:${t}`,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=c(wt).path;return n[Object.keys(t[e]).filter((t=>o.includes(t))).sort(((t,e)=>e.length-t.length))[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:s}=Dt.services[r]||Dt.services.plain,a=document.querySelector(`meta[${i}='${t}']`);a&&a.remove();const c=document.createElement("meta");c.setAttribute(i,t),c.setAttribute(s,e),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(t,e){Ut.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=Ut.getOrigin();Ut.templates[t]=Ut.templates[t]||{},Ut.templates[t][n]=e},update(){Object.keys(Ut.props).forEach((t=>{let e=Ut.getLongest(Ut.props,t);Ut.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))}))},batchedUpdate(){Ut._pendingUpdate||(Ut._pendingUpdate=!0,setTimeout((()=>{Ut._pendingUpdate=!1,this.update()})))},_updateQueued:!1,getOrigin(){const t=Nt();return t&&c(t).path||"/"},_pendingUpdate:!1},Dt=new Proxy(Ut,{set(t,e,n,o){const{props:r,getOrigin:i}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][i()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});function Ht(t,e,n){const o=t.slice();return o[18]=e[n].component,o[19]=e[n].componentFile,o[2]=e[n].decorator,o[1]=e[n].nodes,o}function Kt(t){let e,n,o=[],r=new Map,i=[t[4]];const s=t=>function({meta:t,path:e,param:n,params:o}){return JSON.stringify({path:e,param:(t["param-is-page"]||t["slug-is-page"])&&n,queryParams:t["query-params-is-page"]&&o})}(t[18]);for(let e=0;e<1;e+=1){let n=Ht(t,i,e),a=s(n);r.set(a,o[e]=Gt(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=w()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);h(t,e,r),n=!0},p(t,n){4194365&n&&(i=[t[4]],z(),o=Z(o,n,s,1,t,i,r,e.parentNode,V,Gt,e,Ht),J())},i(t){if(!n){for(let t=0;t<1;t+=1)W(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)G(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&m(e)}}}function zt(t){let e,n;return e=new Zt({props:{decorator:t[2],nodes:[...t[1]],scoped:{...t[0],...t[22]}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.decorator=t[2]),16&n&&(o.nodes=[...t[1]]),4194305&n&&(o.scoped={...t[0],...t[22]}),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Jt(t){let e,n,o=t[18]&&t[1].length&&zt(t);return{c(){o&&o.c(),e=w()},m(t,r){o&&o.m(t,r),h(t,e,r),n=!0},p(t,n){t[18]&&t[1].length?o?(o.p(t,n),16&n&&W(o,1)):(o=zt(t),o.c(),W(o,1),o.m(e.parentNode,e)):o&&(z(),G(o,1,1,(()=>{o=null})),J())},i(t){n||(W(o),n=!0)},o(t){G(o),n=!1},d(t){o&&o.d(t),t&&m(e)}}}function Wt(t){let n,o,r;const i=[{scoped:t[0]},{scopedSync:t[5]},t[3].param||{}];var s=t[19];function a(t){let n={$$slots:{default:[Jt,({scoped:t,decorator:e})=>({22:t,2:e}),({scoped:t,decorator:e})=>(t?4194304:0)|(e?4:0)]},$$scope:{ctx:t}};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return s&&(n=new s(a(t))),{c(){n&&tt(n.$$.fragment),o=b()},m(t,e){n&&et(n,t,e),h(t,o,e),r=!0},p(t,e){const r=41&e?X(i,[1&e&&{scoped:t[0]},32&e&&{scopedSync:t[5]},8&e&&Y(t[3].param||{})]):{};if(12582933&e&&(r.$$scope={dirty:e,ctx:t}),s!==(s=t[19])){if(n){z();const t=n;G(t.$$.fragment,1,0,(()=>{nt(t,1)})),J()}s?(n=new s(a(t)),tt(n.$$.fragment),W(n.$$.fragment,1),et(n,o.parentNode,o)):n=null}else s&&n.$set(r)},i(t){r||(n&&W(n.$$.fragment,t),r=!0)},o(t){n&&G(n.$$.fragment,t),r=!1},d(t){n&&nt(n,t),t&&m(o)}}}function Gt(t,e){let n,o,r,i;var s=e[2];function a(t){return{props:{scoped:t[0],$$slots:{default:[Wt]},$$scope:{ctx:t}}}}return s&&(o=new s(a(e))),{key:t,first:null,c(){n=w(),o&&tt(o.$$.fragment),r=w(),this.first=n},m(t,e){h(t,n,e),o&&et(o,t,e),h(t,r,e),i=!0},p(t,n){e=t;const i={};if(1&n&&(i.scoped=e[0]),8388669&n&&(i.$$scope={dirty:n,ctx:e}),s!==(s=e[2])){if(o){z();const t=o;G(t.$$.fragment,1,0,(()=>{nt(t,1)})),J()}s?(o=new s(a(e)),tt(o.$$.fragment),W(o.$$.fragment,1),et(o,r.parentNode,r)):o=null}else s&&o.$set(i)},i(t){i||(o&&W(o.$$.fragment,t),i=!0)},o(t){o&&G(o.$$.fragment,t),i=!1},d(t){t&&m(n),t&&m(r),o&&nt(o,t)}}}function Qt(e){let n,o,r,s,a,c=e[4]&&Kt(e);return{c(){c&&c.c(),n=b(),o=y("span")},m(l,u){var p;c&&c.m(l,u),h(l,n,u),h(l,o,u),r=!0,s||(p=e[8].call(null,o),a=p&&i(p.destroy)?p.destroy:t,s=!0)},p(t,[e]){t[4]?c?(c.p(t,e),16&e&&W(c,1)):(c=Kt(t),c.c(),W(c,1),c.m(n.parentNode,n)):c&&(z(),G(c,1,1,(()=>{c=null})),J())},i(t){r||(W(c),r=!0)},o(t){G(c),r=!1},d(t){c&&c.d(t),t&&m(n),t&&m(o),s=!1,a()}}}function Vt(t,e,n){let o,r,i,s;l(t,wt,(t=>n(14,i=t)));let a,{nodes:c=[]}=e,{scoped:u={}}=e,{isRoot:p=!1}=e,{decorator:f}=e,d=null,h=null,m={};const g=$t(null);l(t,g,(t=>n(4,s=t)));const y=L("routify");l(t,y,(t=>n(10,r=t)));function $(t){n(5,m={...u}),0===h.length&&async function(){await M(),at(a);const t=s.component.path===i.path;!window.routify.stopAutoReady&&t&&async function({page:t,metatags:e,afterPageLoad:n}){const{path:o}=t,{options:r}=pt(),i=r.prefetch;for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:o,prefetchId:i},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:s.component,metatags:Dt,afterPageLoad:Mt})}();const e={nodes:h,decorator:f||gt,layout:d.isLayout?d:o&&o.layout,component:d,route:i,componentFile:t,parentNode:a||o&&o.parentNode};g.set(e),p&&xt.set(e)}return E("routify",g),t.$$set=t=>{"nodes"in t&&n(1,c=t.nodes),"scoped"in t&&n(0,u=t.scoped),"isRoot"in t&&n(9,p=t.isRoot),"decorator"in t&&n(2,f=t.decorator)},t.$$.update=()=>{1024&t.$$.dirty&&(o=r),2&t.$$.dirty&&n(3,[d,...h]=c,d),8&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then($):$(e)}(d),16&t.$$.dirty&&s&&ut(s,M)},[u,c,f,d,s,m,g,y,t=>a=t.parentNode,p,r]}class Zt extends rt{constructor(t){super(),ot(this,t,Vt,Qt,s,{nodes:1,scoped:0,isRoot:9,decorator:2})}}function Xt(t,e){let n=!1;function o(o,r){const i=kt(o||pt().fullpath);i.redirectTo&&(history.replaceStateNative({},null,i.redirectTo),delete i.redirectTo);const s=[...(r&&kt(pt().fullpath,t)||i).layouts,i];n&&delete n.last,i.last=n,n=i,o||vt.set(i),wt.set(i),i.api.preload().then((()=>{Pt.set(!0),e(s)}))}const r=function(t){["pushState","replaceState"].forEach((t=>{history[t+"Native"]=history[t],history[t]=async function(e={},n,o){if(o===location.pathname+location.search+location.hash)return!1;const{id:r,path:i,params:s}=c(wt);e={id:r,path:i,params:s,...e};const a=new Event(t.toLowerCase());Object.assign(a,{state:e,title:n,url:o});return await te(a,o)?(history[t+"Native"].apply(this,[e,n,o]),dispatchEvent(a)):void 0}}));let e=!1;const n={click:Yt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await te(n,pt().fullpath)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach((t=>addEventListener(...t)));return()=>{Object.entries(n).forEach((t=>removeEventListener(...t)))}}(o);return{updatePage:o,destroy:r}}function Yt(t){const e=t.target.closest("a"),n=e&&e.href;if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented)return;if(!n||e.target||e.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;t.preventDefault(),history.pushState({},"",r)}async function te(t,e){const n=kt(e).api;for(const o of Ct._hooks.filter(Boolean)){if(!await o(t,n,{url:e}))return!1}return!0}function ee(t){let e,n;return e=new Zt({props:{nodes:t[0],isRoot:!0}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.nodes=t[0]),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function ne(t){let e,n,o,r=t[0]&&null!==t[1]&&ee(t);return n=new Ft({}),{c(){r&&r.c(),e=b(),tt(n.$$.fragment)},m(t,i){r&&r.m(t,i),h(t,e,i),et(n,t,i),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&W(r,1)):(r=ee(t),r.c(),W(r,1),r.m(e.parentNode,e)):r&&(z(),G(r,1,1,(()=>{r=null})),J())},i(t){o||(W(r),W(n.$$.fragment,t),o=!0)},o(t){G(r),G(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&m(e),nt(n,t)}}}function oe(t,e,n){let o;l(t,wt,(t=>n(1,o=t)));let r,i,{routes:s}=e,{config:a={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(it,a);E("routifyupdatepage",((...t)=>i&&i.updatePage(...t)));const c=t=>n(0,r=t),u=()=>{i&&(i.destroy(),i=null)};let p=null;var f;return f=u,O().$$.on_destroy.push(f),t.$$set=t=>{"routes"in t&&n(2,s=t.routes),"config"in t&&n(3,a=t.config)},t.$$.update=()=>{4&t.$$.dirty&&s&&(clearTimeout(p),p=setTimeout((()=>{u(),i=Xt(s,c),_t.set(s),i.updatePage()})))},[r,o,s,a]}class re extends rt{constructor(t){super(),ot(this,t,oe,ne,s,{routes:2,config:3})}}function ie(t){const e=async function(e){return await se(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return ae(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}async function se(t,e){const n=await t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=await Promise.all(o.children.map((async n=>se(t,{state:e.state,scope:ce(e.scope||{}),parent:e.file,file:await n}))));o.children=n.filter(Boolean)}return o}function ae(t,e){const n=t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=o.children.map((n=>ae(t,{state:e.state,scope:ce(e.scope||{}),parent:e.file,file:n})));o.children=n.filter(Boolean)}return o}function ce(t){return JSON.parse(JSON.stringify(t))}const le=ie((({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return`^${t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(st,"([^/]+)")+n}`})(t.path,t.isFallback))})),ue=ie((({file:t})=>{t.paramKeys=lt(t.path)})),pe=ie((({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path})),fe=ie((({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map((t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C")).join(""))(t)})),de=ie((({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map((t=>({isMeta:!0,...t,meta:t})))))})),he=ie((t=>{const{file:e}=t,{isFallback:n,meta:o}=e,r=e.path.match("/:"),i=e.path.endsWith("/index"),s=o.index||0===o.index,a=!1===o.index;e.isIndexable=s||!n&&!r&&!i&&!a,e.isNonIndexable=!e.isIndexable})),me=ie((({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>ye(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>ye(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>ge(e)})}));function ge(t,e=[]){return t&&(e.unshift(t),ge(t.parent,e)),e}function ye(t,e){if(!t.root){const n=t.parent.children.filter((t=>t.isIndexable)),o=n.indexOf(t);return n[o+e]}}const $e=ie((({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})})),be=ie((({file:t,scope:e})=>{function n(t){const{parent:e}=t,o=e&&e.component&&e,r=o&&o.isReset,i=e&&!r&&n(e)||[];return o&&i.push(o),i}Object.defineProperty(t,"layouts",{get:()=>n(t)})})),we=ie((({file:t})=>{const e=t.root?function(){}:t.children?(t.isPage,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)}));var _e=Object.freeze({__proto__:null,setRegex:le,setParamKeys:ue,setShortPath:pe,setRank:fe,addMetaChildren:de,setIsIndexable:he,assignRelations:me,assignIndex:$e,assignLayout:be,createFlatList:t=>{ie((t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)})).sync(t),t.routes.sort(((t,e)=>t.ranking>=e.ranking?-1:1))},setPrototype:we});const xe={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function ve(t){return Object.entries(xe).forEach((([e,n])=>{void 0===t[e]&&(t[e]=n)})),t.children&&(t.children=t.children.map(ve)),t}const Pe=ie((({file:t})=>{t.api=new ke(t)}));class ke{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter((t=>!t.isNonIndexable)).sort(((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})))).map((({api:t})=>t))}get next(){return je(this,1)}get prev(){return je(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file].map((t=>t.component()));await Promise.all(t)}get component(){return this.__file.component?this.__file.component():!!this.__file.index&&this.__file.index.component()}}function je(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const Oe={..._e,restoreDefaults:({tree:t})=>ve(t),assignAPI:Pe};const Ee={root:!0,ownMeta:{preload:"proximity"},children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/_fallback",component:()=>import("./_fallback-08ee0fe0.js").then((t=>t.default))},{isDir:!0,children:[{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/blog/index",id:"_blog_index",component:()=>import("./index-a6f54730.js").then((t=>t.default))},{ext:"svx",isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/blog/jekyll-tutorial",id:"_blog_jekyllTutorial",component:()=>import("./jekyll-tutorial-3558abfb.js").then((t=>t.default))},{ext:"svx",isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/blog/test",id:"_blog_test",component:()=>import("./test-d0acd978.js").then((t=>t.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/blog",id:"_blog__layout",component:()=>import("./_layout-75762dc7.js").then((t=>t.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/index",id:"_index",component:()=>import("./index-300a029e.js").then((t=>t.default))}],isLayout:!0,meta:{preload:"proximity",recursive:!0,prerender:!0},path:"/",id:"__layout",component:()=>import("./_layout-d432c0af.js").then((t=>t.default))},{tree:Le,routes:Ie}=function(t){const e=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(Oe[t].sync||Oe[t])(n)}return n}(Ee);function Se(e){let n,o;return n=new re({props:{routes:Ie}}),{c(){tt(n.$$.fragment)},m(t,e){et(n,t,e),o=!0},p:t,i(t){o||(W(n.$$.fragment,t),o=!0)},o(t){G(n.$$.fragment,t),o=!1},d(t){nt(n,t)}}}!function(t,e={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),i=document.createElement("div");function s(){r&&r.remove(),i.style.visibility=null,i.setAttribute("id",n)}i.style.visibility="hidden",e.target.appendChild(i),r?addEventListener(o,s):s(),new t({...e,target:i})}(class extends rt{constructor(t){super(),ot(this,t,null,Se,s,{})}},{target:document.body},"routify-app");export{Dt as A,P as B,_ as C,r as D,rt as S,b as a,x as b,h as c,d,y as e,m as f,l as g,w as h,ot as i,g as j,e as k,At as l,tt as m,t as n,et as o,X as p,W as q,G as r,s,$ as t,Bt as u,nt as v,Y as w,u as x,v as y,f as z};
//# sourceMappingURL=main.js.map
