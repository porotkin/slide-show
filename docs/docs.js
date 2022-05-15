/* slide-show 
   1.1.0
   By Stephen Band
   Built 2022-05-15 03:01 */

var ht=Object.getOwnPropertySymbols;var Rt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable;var mt=(t,e)=>{var n={};for(var o in t)Rt.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&ht)for(var o of ht(t))e.indexOf(o)<0&&Kt.call(t,o)&&(n[o]=t[o]);return n};function P(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Wt=Array.prototype;function $t(t,e){return typeof t=="function"?t.apply(null,e):t}function dt(t,e,n){n=n||t.length;var o=n===1?e?t:P(t):P(function(r){return dt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):$t(o(i),Wt.slice.call(arguments,1))}}var u=dt;function R(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var Ve=u(R,!0);function K(t){return document.getElementById(t)||void 0}function E(t){return t.tagName&&t.tagName.toLowerCase()}function Zt(t,e){return e.matches?e.matches(t):e.matchesSelector?e.matchesSelector(t):e.webkitMatchesSelector?e.webkitMatchesSelector(t):e.mozMatchesSelector?e.mozMatchesSelector(t):e.msMatchesSelector?e.msMatchesSelector(t):e.oMatchesSelector?e.oMatchesSelector(t):E(e)===t}var h=u(Zt,!0);function gt(t,e){var n=arguments[2];if(!(!e||e===document||e===n||e.nodeType===11))return e=e.correspondingUseElement||e,h(t,e)?e:gt(t,e.parentNode,n)}var yt=u(gt,!0);function W(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function wt(t){return t.nodeType===1}function Vt(t){return(/^\//.test(t)?"":"/")+t}function k(t){var e=window.location;return(!t.hostname||e.hostname===t.hostname)&&e.pathname===Vt(t.pathname)}function $(t){return t}function p(){}var Jt=Object.freeze;function vt(){return this}var v=Jt({shift:p,push:p,forEach:p,join:function(){return""},map:vt,filter:vt,reduce:function(t,e){return e},length:0,each:p,pipe:$,start:p,stop:p,done:p,valueOf:function(){return null}});function Z(t){return t&&t[Symbol.iterator]}var Qt=Object.assign;function Xt(t){return t.stop?t.stop():t()}function Yt(t){t.forEach(Xt),t.length=0}function b(){}Qt(b.prototype,{stop:function(){return this.stopables&&Yt(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var te=Object.assign;function O(t){b.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,O(n)}function a(){}te(a.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return O(this[0]),this}});var l=Object.assign,m=Object.create;function S(t,e){e!==void 0&&t[0].push(e)}function ee(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];O(e)}else t.stop()}function s(t){this.input=t}l(s.prototype,b.prototype,{push:function(t){S(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new bt(this,t)},filter:function(t){return new xt(this,t)},chunk:function(t){return new kt(this,t)},flatMap:function(t){return new Et(this,t)},take:function(t){return new St(this,t)},each:function(t){return new Bt(this,t)},reduce:function(t,e){return new Ct(this,t,e)},scan:function(t,e){return new At(this,t,e)},stop:function(){return ee(this.input,this),this}});function bt(t,e){this.input=t,this.fn=e}bt.prototype=l(m(s.prototype),{push:function(e){let n=this.fn;S(this,n(e))}});function xt(t,e){this.input=t,this.fn=e}xt.prototype=l(m(s.prototype),{push:function(e){this.fn(e)&&S(this,e)}});function Et(t,e){this.input=t,this.fn=e}Et.prototype=l(m(s.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(Z(o))for(let r of o)S(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function kt(t,e){this.input=t,this.chunk=[],typeof e=="number"?this.n=e:typeof e=="function"&&(this.fn=e)}kt.prototype=l(m(s.prototype),{fn:function(t){return t.length===this.n},push:function(e){let n=this.chunk;n.push(e),this.fn(n)&&(S(this,n),this.chunk=[])}});function St(t,e){this.input=t,this.count=e}St.prototype=l(m(s.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function Ct(t,e,n){this.input=t,this.fn=e,this.value=n,t.pipe(this)}Ct.prototype=l(m(s.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t)}});function At(t,e,n){this.input=t,this.fn=e,this.value=n}At.prototype=l(m(s.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function Bt(t,e){this.input=t,this.push=e,t.pipe(this)}Bt.prototype=l(m(s.prototype),{each:null,reduce:null,pipe:null});var ne=Array.prototype,oe=Object.assign,re=Object.create;function C(t){this.buffer=t||[]}C.prototype=oe(re(s.prototype),a.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(ne.shift.apply(this.buffer));return this.buffer=this[0],t}});var ie=Object.assign,se=Object.create;function A(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(v)}A.prototype=ie(se(s.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var ue=Object.assign;function T(t){this.promise=t}ue(T.prototype,a.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){a.prototype.stop.apply(this,arguments),this[0]=v}});var Pt=Object.assign,Ot=Object.keys;function Dt(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=Ot(o).length===r.length))&&i.push(Pt({},o))}function j(t){this.inputs=t,this.active=!1}Pt(j.prototype,a.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=Ot(e),this[0]=t;for(let n in e){let o=e[n];o.pipe?t.done(o.each(r=>Dt(this,n,r))):o.then?o.then(r=>Dt(this,n,r)):console.log("Todo: combine() raw values ?")}}});var ae=Object.assign;function L(t){this.inputs=t}ae(L.prototype,a.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.pipe)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop&&n.stop();return a.prototype.stop.apply(this,arguments)}});var J=Array.prototype,ce=Object.assign;function fe(t){return t.length>0}function pe(t,e,n){return t[n]=e.shift(),t}function le(t){return[]}function V(t,e,n,o){n.push(o),e.every(fe)&&t.push(e.reduce(pe,{}))}function M(t){this.inputs=t,this.buffers=J.map.call(t,le)}ce(M.prototype,a.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,J.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(c=>V(t,n,i,c))):o.then?o.then(c=>V(t,n,i,c)):J.forEach.call(o,c=>V(t,n,i,c))})},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop();return a.prototype.stop.apply(this,arguments)}});var he=Array.prototype,Tt=Object.assign;function me(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var jt=Tt(s,{of:function(){return new C(he.slice.apply(arguments))},from:function(t){return t.pipe?new s(t):t.then?new s(new T(t)):typeof t.length=="number"?new C(t):me(t)},broadcast:function(e){return new A(v,e)},combine:function(e){return new s(new j(e))},merge:function(){return new s(new L(arguments))},zip:function(){return new s(new M(arguments))}});Tt(s.prototype,{broadcast:function(t){return new A(this,t)}});var de=Object.assign,ge=/\s+/;function N(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var Lt=0;window.addEventListener("click",t=>Lt=t.timeStamp);function ye(t,e){return t.node.addEventListener(e,t,t.options),t}function we(t,e){return t.node.removeEventListener(e,t),t}function Mt(t,e,n){this.types=t.split(ge),this.options=e,this.node=n,this.select=e&&e.select}de(Mt.prototype,a.prototype,{pipe:function(t){this[0]=t,this.types.reduce(ye,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=Lt)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(we,this),a.prototype.stop.apply(this,arguments)}});function f(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new jt(new Mt(t,n,e))}function ve(t,e){return e[t]}var d=u(ve,!0);function Q(t){return!!t||t!=null&&!Number.isNaN(t)}function X(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var U=d("classList"),y=U;function be(t,e){U(e).add(t)}function xe(t,e){U(e).remove(t)}function Ee(t,e){(function n(o){return t--?requestAnimationFrame(n):e(o)})()}function ke(t,e){var n=U(e);n.add(t),Ee(2,()=>n.remove(t))}var to=u(be,!0),eo=u(xe,!0),no=u(ke,!0);function Y(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let c=r.closest(e[i]);if(c)return t[e[i]](c,...arguments)}}}var Se=Object.assign,B={bubbles:!0,cancelable:!0};function Ce(t,e){var _;let n=B,o,r,i,c,H,z;return typeof t=="object"?(_=t,{type:t,detail:r,bubbles:i,cancelable:c,composed:H}=_,o=mt(_,["type","detail","bubbles","cancelable","composed"]),z=Se(new CustomEvent(t,{detail:r,bubbles:i||B.bubbles,cancelable:c||B.cancelable,composed:H||B.composed}),o)):z=new CustomEvent(t,B),e.dispatchEvent(z)}var F=u(Ce,!0);function tt(t){if(t.toArray)return t.toArray();var e=[],n=t.length,o;if(typeof t.length!="number")return e;for(e.length=n,o=0;o<n;o++)e[o]=t[o];return e}function Ae(t,e){return tt(e.querySelectorAll(t))}var x=u(Ae,!0);var Be=!1,et=Be?function(e,...n){window.console&&window.console.log&&window.console.log("%cbolt %c"+e+"%c","color: #888888; font-weight: 400;","color: #3a8ab0; font-weight: 600;","color: inherit; font-weight: 400;",...n)}:p;var De=Array.prototype,Pe=window.location,G=Pe.hash,Nt=new WeakMap,Ut=u(function(e,n){return n(e)}),g={activeClass:"active",onClass:"on",cache:!0},ot=[],Oe=[];function It(t){return x('[href$="#'+t+'"]',document.body).filter(X(E,{a:k,default:function(){return!0}})).concat(x('[data-href="#'+t+'"]',document))}function Te(t){let e=Nt.get(t);return e||(e={},Nt.set(t,e)),e}function D(t){var e=Te(t),n=t.id;return e.node||(e.node=t),e.buttons||(e.buttons=g.cache&&n&&It(n)),e}function qt(t){return g.cache&&t.buttons||t.node.id&&It(t.node.id)}function je(t){if(t.type==="mousedown"){let e=f("click",t.currentTarget).each(function(o){e.stop(),o.preventDefault()})}}function Le(t){if(t.defaultPrevented||!N(t)||(t.type==="keydown"||t.type==="keyup")&&t.keyCode!==13)return!0}function Me(t){return(Q(t.hash)?t.hash:t.getAttribute("href")).substring(1)}function Ne(t,e){return t+!!e}function Ft(t,e){if(!F({type:"dom-activate",relatedTarget:e},t))return;let o=D(t);o.active=!0,y(o.node).add(g.activeClass);let r=qt(o);r&&r.forEach(function(c){y(c).add(g.onClass)});let i=t.querySelector(".active-focus");i&&requestAnimationFrame(()=>requestAnimationFrame(()=>i.focus()))}function rt(t,e){if(!F({type:"dom-deactivate",relatedTarget:e},t))return;let o=D(t);y(o.node).remove(g.activeClass);let r=qt(o);r&&r.forEach(function(i){y(i).remove(g.onClass)}),o.active=!1}f("click",document).each(Y({"a[href]":function(t,e){if(!Le(e)&&!(t.hostname&&!k(t))){var n=Me(t);if(!!n){var o=document.getElementById(n);if(!!o){if(o.classList.contains("active")){e.preventDefault();return}var r=Oe.map(Ut(o)).reduce(Ne,0);if(r){e.preventDefault();return}if(!!ot.find(Ut(o))){var i=D(o);i.active||(e.preventDefault(),e.type==="mousedown"&&je(e),Ft(o,t))}}}}},'[name="activate"]':function(t,e){let n=t.value,o=n.replace(/^#/,""),r=document.getElementById(o);if(!r)throw new Error('Button action name="activate" target "'+n+'" not found');var i=D(r);i.active||(e.preventDefault(),Ft(r,t))},'[name="deactivate"]':function(t,e){let n=t.value,o=n.replace(/^#/,""),r=document.getElementById(o);if(!r)throw new Error('Button action name="deactivate" target "'+n+'" not found');var i=D(r);!i.active||(e.preventDefault(),rt(r,t))}}));var nt=F("dom-activate"),Ht=new WeakSet;function zt(t){Ht.add(t)}function Gt(t){return!Ht.has(t)}function Ue(t,e){let n=(window.location.hash?window.location.hash+", ":"")+("."+g.activeClass),o=x(n,e).filter(Gt);return e.matches(n)&&Gt(e)&&o.push(e),o.length&&(t.push.apply(t,o),o.forEach(zt)),t}function Fe(t,e){return De.filter.call(e.addedNodes,wt).reduce(Ue,t)}f("DOMContentLoaded",document).each(function(){let t=x("."+g.activeClass,document);t.length&&(et("dom-activate",t.length+" elements – #"+t.map(d("id")).join(", #")),t.forEach(nt)),new MutationObserver((n,o)=>{if(n[0].type!=="childList")throw new Error("Not childList",n);let r=n.reduce(Fe,[]);r.length&&(et("dom-activate",r.length+" elements – #"+r.map(d("id")).join(", #")),r.forEach(nt),r.forEach(zt))}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})});f("load",window).each(function(){if(!(!G||!/^#\S+$/.test(G)))try{x(G,document).forEach(nt)}catch(t){console.warn("dom: Cannot activate "+G,t.message)}});var it=h("[data-toggleable]");ot.push(it);var st=[];function Ge(t){return(t.hash?t.hash:t.getAttribute("href")).substring(1)}f("click",document.documentElement).each(t=>{if(!t.defaultPrevented&&!!N(t)){var e=yt("a[href]",t.target);if(!!e&&!(e.hostname&&!k(e))){var n=Ge(e);!n||st.indexOf(n)!==-1&&(rt(K(n),e),t.preventDefault())}}});f("dom-activate",document).each(t=>{var e=t.target;!it(e)||st.push(W(e))});f("dom-deactivate",document).each(t=>{var e=t.target;!it(e)||R(st,e.id)});var w={simulatedEventDelay:.08,keyClass:"key-device",mouseClass:"mouse-device",touchClass:"touch-device",keyType:"key",mouseType:"mouse",touchType:"touch"},at={type:"mouse"},_t=y(document.documentElement),ut,I;function ct(t){ut!==t&&(_t.remove(ut),_t.add(t),ut=t)}function Ie(t){t.timeStamp<I+w.simulatedEventDelay*1e3||(I=void 0,ct(w.mouseClass),at.type=w.mouseType)}function qe(t){["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Space","Escape","Tab"].indexOf(t.code)!==-1&&(ct(w.keyClass),at.type=w.keyType,I=t.timeStamp)}function He(t){I=t.timeStamp,ct(w.touchClass),at.type=w.touchType}document.addEventListener("mousedown",Ie);document.addEventListener("keydown",qe);document.addEventListener("touchend",He);function ft(t){return function(n,...o){var r=t[n]||t.default;return r&&r.apply(this,o)}}function pt(t){if(typeof t.length=="number")return t[t.length-1]}function q(t){return t===void 0?void 0:parseInt(t,10)}function lt(t){return t.replace(/-(\w)?/g,function(e,n){return n?n.toUpperCase():""})}function ze(t){return t.offsetParent!==null}f("dom-activate",document.body).map(d("target")).filter(h(".toggle-block")).each(function(t){if(!ze(t)||h(".loading .toggle-block")){t.style.maxHeight="";return}let e=t.getBoundingClientRect(),n=getComputedStyle(t),o=pt(t.children),r=o&&o.getBoundingClientRect().bottom,i=q(n.paddingBottom)+q(n.borderBottomWidth)+r-e.top;t.style.maxHeight=i+"px";let c=f("transitionend",t).each(function(H){c.stop(),t.style.maxHeight=""})});var _e=ft({maxHeight:t=>t.clientHeight+"px",default:(t,e,n)=>e[n]});f("dom-deactivate",document.body).map(d("target")).filter(h(".toggle-block")).each(function(t){let e=t.getAttribute("style"),n=getComputedStyle(t),o=n["transition-property"].split(/\s*,\s*/).map(lt);t.style.transition="none",o.forEach(r=>t.style[r]=_e(r,t,n,r)),requestAnimationFrame(function(){e?t.setAttribute("style",e):t.removeAttribute("style")})});
