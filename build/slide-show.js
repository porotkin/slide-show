/* slide-show 
   1.1.0
   By Stephen Band
   Built 2022-05-15 01:53 */

var _e=Object.defineProperty;var Dt=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var It=(t,e)=>{var n={};for(var o in t)Re.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Dt)for(var o of Dt(t))e.indexOf(o)<0&&qe.call(t,o)&&(n[o]=t[o]);return n};var _=(t,e)=>{for(var n in e)_e(t,n,{get:e[n],enumerable:!0})};function X(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Ve=Array.prototype;function Ue(t,e){return typeof t=="function"?t.apply(null,e):t}function zt(t,e,n){n=n||t.length;var o=n===1?e?t:X(t):X(function(r){return zt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):Ue(o(i),Ve.slice.call(arguments,1))}}var y=zt;function We(t,e){return 1-Math.pow(1-e,t)}var Gt=y(We);function b(){}function pt(t,e){return e(t)}function S(t){return t}var $e=Array.prototype;function ft(){let t=arguments;return t.length?e=>$e.reduce.call(t,pt,e):S}function dt(t,e,n){return n*(e-t)+t}var Ne=window.performance,_t=window.requestAnimationFrame,Xe=window.cancelAnimationFrame;function mt(t,e,n){var o=Ne.now();function r(s){var c=(s-o)/(t*1e3);c<1?(c>0&&e(c),i=_t(r)):(e(1),n&&n())}var i=_t(r);return function(){Xe(i)}}function Y(t,e,n,o,r,i){let s=o[n];return mt(t,ft(e,c=>dt(s,r,c),c=>o[n]=c),i)}function Ye(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function T(t){return t===window?Ye():t.getClientRects()[0]||t.getBoundingClientRect()}var D={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Gt(3)},Rt=b;function Ke(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>t.style.setProperty("scroll-snap-type",n);if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:T(t).width,i=D.scrollDuration+D.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;Rt=Y(i,D.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:T(t).height,i=D.scrollDuration+D.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;Rt=Y(i,D.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){console.log("Polyfilling Element.scrollTo(options).");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?Ke(this,n):e.apply(this,arguments)}}function E(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var Ze=E(S,{is:b,tag:b,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:I,cx:I,cy:I,r:I,preserveAspectRatio:I,viewBox:I,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function I(t,e,n){e.setAttribute(t,n)}function Qe(t,e){for(var n=Object.keys(e),o=n.length;o--;)Ze(n[o],t,e[n[o]]);return t}var ht=y(Qe,!0);var Je="http://www.w3.org/2000/svg",qt=document.createElement("div");var Vt=(t,e)=>e&&typeof e;function Ut(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function L(t,e){var n=document.createElementNS(Je,t);return e&&(n.innerHTML=e),n}var tn=E(S,{comment:function(t,e){return document.createComment(e||"")},fragment:E(Vt,{string:function(t,e,n){if(n)return Ut(n,e);let o=document.createDocumentFragment();qt.innerHTML=e;let r=qt.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?Ut(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):ht(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:L,ellipse:L,g:L,glyph:L,image:L,line:L,rect:L,use:L,path:L,pattern:L,polygon:L,polyline:L,svg:L,default:E(Vt,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):ht(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),x=tn;function gt(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var ur=y(gt,!0);function en(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function nn(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function on(t,e,n,o){let r=gt(t,i=>nn(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):en(t,e,o):r}var Wt=y(on,!0);var wt=b;var P=Symbol("internals"),j=Symbol("shadow"),$t=Object.defineProperties,rn={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},sn={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[P].form}},labels:{get:function(){return this[P].labels}},validity:{get:function(){return this[P].validity}},validationMessage:{get:function(){return this[P].validationMessage}},willValidate:{get:function(){return this[P].willValidate}},checkValidity:{value:function(){return this[P].checkValidity()}},reportValidity:{value:function(){return this[P].reportValidity()}}},cn={},Nt={once:!0},un=0,Xt=!1;function ln(t){return rn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var an=Wt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function pn(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function fn(t,e,n){t._initialLoad=!0;let o=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(n){let r=x("link",{rel:"stylesheet",href:n});o.append(r)}return t[j]=o,o}function dn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=x("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function mn(t){t._initialAttributes={},t._n=0}function hn(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function Yt(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function gn(t){return!!t.attribute}function wn(t){return t.set||t.get||t.hasOwnProperty("value")}function Kt(t,e){return gn(e[1])&&(t.attributes[e[0]]=e[1].attribute),wn(e[1])&&(t.properties[e[0]]=e[1]),t}function vt(t,e,n,o){let{name:r,tag:i}=an(t),s=typeof i=="string"?ln(i):HTMLElement,{attributes:c,properties:p}=n?Object.entries(n).reduce(Kt,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(Kt,{attributes:{},properties:{}}):cn;function u(){let l=Reflect.construct(s,arguments,u),m=e.construct&&e.construct.length>un?fn(l,e,o||e.stylesheet):void 0,v=u.formAssociated&&dn(l);return i&&(Xt=!0),e.construct&&e.construct.call(l,m,v),c&&(mn(l),Promise.resolve(1).then(function(){Yt(l,u.observedAttributes,c)})),p&&Object.keys(p).reduce(pn,l),l}return u.prototype=Object.create(s.prototype,p),p&&p.value&&(u.formAssociated=!0,$t(u.prototype,sn),(e.enable||e.disable)&&(u.prototype.formDisabledCallback=function(l){return l?e.disable&&e.disable.call(this,this[j],this[P]):e.enable&&e.enable.call(this,this[j],this[P])}),e.reset&&(u.prototype.formResetCallback=function(){return e.reset.call(this,this[j],this[P])}),e.restore&&(u.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[j],this[P])})),c&&(u.observedAttributes=Object.keys(c),u.prototype.attributeChangedCallback=function(l,m,v){if(!this._initialAttributes)return c[l].call(this,v);this._initialAttributes[l]=v,hn(this,u.observedAttributes,c)}),u.prototype.connectedCallback=function(){let l=this,m=l[j],v=l[P];if(l._initialAttributes&&Yt(l,u.observedAttributes,c),l._initialLoad){let F=m.querySelectorAll('link[rel="stylesheet"]');if(F.length){let at=0,h=F.length,a=function(ze){++at>=F.length&&(delete l._initialLoad,e.load&&(wt("element()","loaded",Array.from(F).map(Ge=>Ge.href).join(`
`)),e.load.call(l,m)))},B=a;for(;h--;)F[h].addEventListener("load",a,Nt),F[h].addEventListener("error",B,Nt);e.connect&&e.connect.call(this,m,v)}else e.connect&&e.connect.call(this,m,v),e.load&&e.load.call(this,m,v)}else e.connect&&e.connect.call(this,m,v)},e.disconnect&&(u.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[j],this[P])}),wt("element()","<"+(i?i+" is="+r:r)+">"),window.customElements.define(r,u,i&&{extends:i}),i&&!Xt&&document.querySelectorAll('[is="'+r+'"]').forEach(l=>{$t(l,p),e.construct&&e.construct.apply(l);let m;for(m in c){let v=l.attributes[m];v&&c[m].call(l,v.value)}e.connect&&e.connect.apply(l)}),u}function Zt(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Zt(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Qt=y(Zt,!0);var vn=Object.freeze;function Jt(){return this}var A=vn({shift:b,push:b,forEach:b,join:function(){return""},map:Jt,filter:Jt,reduce:function(t,e){return e},length:0,each:b,pipe:S,start:b,stop:b,done:b,valueOf:function(){return null}});function yt(t){return t&&t[Symbol.iterator]}var yn=Object.assign;function bn(t){return t.stop?t.stop():t()}function xn(t){t.forEach(bn),t.length=0}function z(){}yn(z.prototype,{stop:function(){return this.stopables&&xn(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var En=Object.assign;function K(t){z.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,K(n)}function d(){}En(d.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return K(this[0]),this}});var O=Object.assign,C=Object.create;function R(t,e){e!==void 0&&t[0].push(e)}function Sn(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];K(e)}else t.stop()}function g(t){this.input=t}O(g.prototype,z.prototype,{push:function(t){R(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new te(this,t)},filter:function(t){return new ee(this,t)},chunk:function(t){return new oe(this,t)},flatMap:function(t){return new ne(this,t)},take:function(t){return new re(this,t)},each:function(t){return new ce(this,t)},reduce:function(t,e){return new ie(this,t,e)},scan:function(t,e){return new se(this,t,e)},stop:function(){return Sn(this.input,this),this}});function te(t,e){this.input=t,this.fn=e}te.prototype=O(C(g.prototype),{push:function(e){let n=this.fn;R(this,n(e))}});function ee(t,e){this.input=t,this.fn=e}ee.prototype=O(C(g.prototype),{push:function(e){this.fn(e)&&R(this,e)}});function ne(t,e){this.input=t,this.fn=e}ne.prototype=O(C(g.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(yt(o))for(let r of o)R(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function oe(t,e){this.input=t,this.chunk=[],typeof e=="number"?this.n=e:typeof e=="function"&&(this.fn=e)}oe.prototype=O(C(g.prototype),{fn:function(t){return t.length===this.n},push:function(e){let n=this.chunk;n.push(e),this.fn(n)&&(R(this,n),this.chunk=[])}});function re(t,e){this.input=t,this.count=e}re.prototype=O(C(g.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function ie(t,e,n){this.input=t,this.fn=e,this.value=n,t.pipe(this)}ie.prototype=O(C(g.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t)}});function se(t,e,n){this.input=t,this.fn=e,this.value=n}se.prototype=O(C(g.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function ce(t,e){this.input=t,this.push=e,t.pipe(this)}ce.prototype=O(C(g.prototype),{each:null,reduce:null,pipe:null});var Tn=Array.prototype,Ln=Object.assign,Pn=Object.create;function q(t){this.buffer=t||[]}q.prototype=Ln(Pn(g.prototype),d.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(Tn.shift.apply(this.buffer));return this.buffer=this[0],t}});var kn=Object.assign,Fn=Object.create;function V(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(A)}V.prototype=kn(Fn(g.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var An=Object.assign;function Z(t){this.promise=t}An(Z.prototype,d.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){d.prototype.stop.apply(this,arguments),this[0]=A}});var le=Object.assign,ae=Object.keys;function ue(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=ae(o).length===r.length))&&i.push(le({},o))}function Q(t){this.inputs=t,this.active=!1}le(Q.prototype,d.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=ae(e),this[0]=t;for(let n in e){let o=e[n];o.pipe?t.done(o.each(r=>ue(this,n,r))):o.then?o.then(r=>ue(this,n,r)):console.log("Todo: combine() raw values ?")}}});var On=Object.assign;function J(t){this.inputs=t}On(J.prototype,d.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.pipe)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop&&n.stop();return d.prototype.stop.apply(this,arguments)}});var xt=Array.prototype,Cn=Object.assign;function jn(t){return t.length>0}function Hn(t,e,n){return t[n]=e.shift(),t}function Mn(t){return[]}function bt(t,e,n,o){n.push(o),e.every(jn)&&t.push(e.reduce(Hn,{}))}function tt(t){this.inputs=t,this.buffers=xt.map.call(t,Mn)}Cn(tt.prototype,d.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,xt.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(s=>bt(t,n,i,s))):o.then?o.then(s=>bt(t,n,i,s)):xt.forEach.call(o,s=>bt(t,n,i,s))})},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop();return d.prototype.stop.apply(this,arguments)}});var Bn=Array.prototype,pe=Object.assign;function Dn(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var w=pe(g,{of:function(){return new q(Bn.slice.apply(arguments))},from:function(t){return t.pipe?new g(t):t.then?new g(new Z(t)):typeof t.length=="number"?new q(t):Dn(t)},broadcast:function(e){return new V(A,e)},combine:function(e){return new g(new Q(e))},merge:function(){return new g(new J(arguments))},zip:function(){return new g(new tt(arguments))}});pe(g.prototype,{broadcast:function(t){return new V(this,t)}});var In=Object.assign,zn=/\s+/;function fe(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var de=0;window.addEventListener("click",t=>de=t.timeStamp);function Gn(t,e){return t.node.addEventListener(e,t,t.options),t}function _n(t,e){return t.node.removeEventListener(e,t),t}function me(t,e,n){this.types=t.split(zn),this.options=e,this.node=n,this.select=e&&e.select}In(me.prototype,d.prototype,{pipe:function(t){this[0]=t,this.types.reduce(Gn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=de)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(_n,this),d.prototype.stop.apply(this,arguments)}});function k(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new w(new me(t,n,e))}function Rn(t,e){return e[t]}var et=y(Rn,!0);function Et(t){return typeof t}var qn=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function Vn(t,e){if(typeof e=="number")return e;var n=qn.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var nt=y(Vn);var Un=/px$/,he={"transform:translateX":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=ot(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=ot(e);return parseFloat(n[5])},"transform:scale":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=ot(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=U("transform",t);if(!e||e==="none")return 0;var n=ot(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function ot(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function U(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function rt(t,e){if(he[t])return he[t](e);var n=U(t,e);return typeof n=="string"&&Un.test(n)?parseFloat(n):n}var it,st;function Wn(){if(!it){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",it=rt("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return it}function $n(){return st||(st=rt("font-size",document.documentElement)),st}window.addEventListener("resize",()=>{it=void 0,st=void 0});var H=E(Et,{number:S,string:nt({em:function(t){return Wn()*t},px:function(t){return t},rem:function(t){return $n()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),ge=H;var St=Object.assign,ct={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function Nn(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function we(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=ge(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}St(we.prototype,{handleEvent:E(et("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&Nn(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.events=w.from(this.events),this.stream.push(this.events)},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function Xn(t){var e=t.target.tagName;return e&&(!!ct.ignoreTags[e.toLowerCase()]||t.target.draggable)}function ve(t,e){this.node=t,this.options=e,this.node.addEventListener("pointerdown",this)}St(ve.prototype,d.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!Xn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new we(this[0],[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this),d.prototype.stop.apply(this,arguments)}});function Tt(t,e){return t=e&&t?St({},ct,t):ct,e=e||t,new w(new ve(e,t))}var Yn=Object.assign,W={bubbles:!0,cancelable:!0};function Lt(t,e){var u;let n=W,o,r,i,s,c,p;return typeof t=="object"?(u=t,{type:t,detail:r,bubbles:i,cancelable:s,composed:c}=u,o=It(u,["type","detail","bubbles","cancelable","composed"]),p=Yn(new CustomEvent(t,{detail:r,bubbles:i||W.bubbles,cancelable:s||W.cancelable,composed:c||W.composed}),o)):p=new CustomEvent(t,W),e.dispatchEvent(p)}var Ti=y(Lt,!0);var f=Symbol("data");function ye(t){let e=T(t),n=window.getComputedStyle(t,null),o=H(n.getPropertyValue("padding-left")),r=H(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function be(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function xe(t,e,n){let o=ye(t),r=T(e),i=be(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(i==="left"?r.left-o.leftPadding:i==="right"?r.right-o.rightPadding:r.left+r.width/2-o.centrePadding),behavior:n})}function Pt(t,e){return xe(t,e,"smooth"),e}function G(t,e){return t.style.setProperty("scroll-behavior","auto","important"),xe(t,e,"auto"),t.style.setProperty("scroll-behavior",""),e}function Ee(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=ye(t),i=e.length,s;for(;s=e[--i];){let c=T(s);if(!c)continue;let p=be(s),u=c.width/2+(p==="left"?n:p==="right"?o:r);if((p==="left"?c.left:p==="right"?c.right:c.left+c.width/2)<=u)break}return s}function Se(t){return!!t.dataset.slideIndex}function Te(t){let{scroller:e,elements:n,children:o}=t,r=Ee(e,n);return Se(r)?o[r.dataset.slideIndex]:r}function Le(t){let{scroller:e,children:n,elements:o}=t,r=Ee(e,o),i;!r||(Se(r)?(i=n[r.dataset.slideIndex],G(e,i)):i=r,t.aaa.push(i))}var Pe=E((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{let i=Te(t);t.aaa.push(i),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"});let s,c=k({type:"scroll",passive:!0},n).each(()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>s=requestAnimationFrame(()=>{n.style.setProperty("scroll-snap-type",""),c.stop()}))})}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var Kn=Object.assign,Zn={capture:!0,passive:!0},$={minScrollEventInterval:.0375,maxScrollEventInterval:.18},ke=$.maxScrollEventInterval;function Qn(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<$.minScrollEventInterval?$.minScrollEventInterval:n,ke=1.4*n>$.maxScrollEventInterval?$.maxScrollEventInterval:1.4*n}function Jn(t,e){t.timer=void 0,t.stream.push(e);let n=t.times;n.length>1&&Qn(n),n.length=0}function Fe(t){this.element=t,this.times=[]}Kn(Fe.prototype,d.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,Zn)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(Jn,ke*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),d.prototype.stop.apply(this,arguments)}});function kt(t){return new w(new Fe(t))}function to(t,e,n){let o=n.length,r=-1/0;for(;o--;){let u=T(n[o]),l=u.x+u.width;r=l>r?l:r}let i=T(e),s=getComputedStyle(t),c=H(s.paddingLeft||0),p=H(s.paddingRight||0);return c+p+r-i.x}function eo(t,e,n){let o=to(t,e,n);t.style.setProperty("--scroll-width",o+"px")}function no(t){return!t.dataset.slideIndex}var Ae={construct:function(t){let e=x("slot",{part:"slides"}),n=x("div",{class:"scroller",children:[e]}),o=x("nav",{part:"controls"});t.append(n,o);let r=w.of(),i=w.combine({host:r,elements:k("slotchange",e).map(a=>h.elements=e.assignedElements())}).broadcast({memory:!0}),s=i.map(a=>{let B=a.elements.filter(no);return Qt(h.children,B)?void 0:h.children=B}).broadcast({memory:!0}),c=w.of(null),p=w.of(),u=p.filter(a=>h.active!==a&&Lt("slide-active",a)).map(a=>h.active=a).broadcast({memory:!0}),l=k("focusin",this),m=k("resize",window),v=k("fullscreenchange",window),F=k("click",t).filter(fe).broadcast(),at=Tt({threshold:"0.25rem",device:"mouse"},t).filter(()=>h.children.length>1),h=this[f]={clickSuppressTime:-1/0,host:this,style:window.getComputedStyle(this),elements:A,children:A,shadow:t,scroller:n,slides:e,controls:o,load:r,activates:c,aaa:p,actives:u,slotchanges:i,mutations:s,clicks:F};w.merge(i,m).each(a=>eo(n,e,h.elements)),w.combine({children:s,child:c}).map(a=>!h.active||h.active===a.child?G(n,a.children.includes(a.child)?a.child:a.children[0]):(Pt(n,a.child),a.child.dataset.slideIndex?a.children[a.child.dataset.slideIndex]:a.child)).pipe(p),kt(n).filter(()=>!h.gesturing).each(a=>Le(h)),F.each(a=>{a.timeStamp-h.clickSuppressTime<120&&(a.preventDefault(),a.stopPropagation())}),at.each(a=>{h.pointers=a,a.reduce(Pe,h)}),v.each(a=>{(a.target===this||a.target.contains(this))&&G(n,h.active)}),l.map(a=>h.children.indexOf(a.target)!==-1?a.target:h.children.find(B=>B.contains(a.target))).each(a=>Pt(h.scroller,a))},load:function(t){let e=this[f];e.load.push(this),e.loaded=!0}};function ut(t,e){function n(o,r){if(t.getState(o)!==r)return t[r?"enable":"disable"](o)}return{attribute:function(o){return n(this,o!==null)},set:function(o){return n(this,!!o)},get:function(){return t.getState(this)}}}function Ft(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var Ji=y(Ft,!0);var oo=Object.assign;function N(t,e){this.element=t,this.definitions=e,this.tokens=[]}oo(N.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),Ft(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});var ro=Array.prototype;function io(t,e){let n=t.tokens.slice(),o=ro.slice.apply(e),r=n.length;for(;r--;)o.includes(n[r])&&n.splice(r,1);t.remove.apply(t,n),t.add.apply(t,o)}function At(t){let e=Symbol("TokenList");function n(o,r){let i=o[e]||(o[e]=new N(o,t));io(i,r.trim().split(/\s+/))}return{attribute:function(o){n(this,o||"")},set:function(o){n(this,o+"")},get:function(){return this[e]||(this[e]=new N(this,t))}}}var Ot={};_(Ot,{disable:()=>ao,enable:()=>lo,getState:()=>po});var so=nt({s:S,ms:t=>t/1e3});function co(t){let{active:e,children:n,elements:o,host:r}=t,i=o.indexOf(e),s=o[i+1]||n[0];t.autoplay.timer=null,!!s&&(r.active=s)}function uo(t){let{active:e,style:n}=t,o=so(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(co,o*1e3,t)}function Oe(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function lo(t){let e=t[f],{actives:n}=e,o=e.autoplay={},r=w.merge([!1],k("pointerenter pointerleave",t).map(s=>s.type==="pointerenter")),i=w.merge([t.contains(document.activeElement)],k("focusin focusout",t).map(E(et("type"),{focusin:s=>!0,focusout:s=>t.contains(s.relatedTarget)}))).map((s=>c=>s===c?void 0:s=c)());o.updates=w.combine({active:n,hover:r,focus:i}).each(s=>s.hover||s.focus?Oe(e):uo(e))}function ao(t){let e=t[f];Oe(e),e.autoplay.updates.stop(),e.autoplay=void 0}function po(t){return!!t[f].autoplay}var Ct={};_(Ct,{disable:()=>ho,enable:()=>mo,getState:()=>go});function Ce(t,e){let n=t.cloneNode(!0);return n.dataset.slideIndex=e,n.removeAttribute("id"),n.setAttribute("aria-hidden","true"),n.tabIndex="-1",n}function fo(t){let{active:e,children:n,host:o,scroller:r}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(v=>v.remove()),t.loop.appends.forEach(v=>v.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),n.length<2){t.elements=t.slides.assignedElements();return}let i=o.clientWidth,s=n.map(T),c=s[1].left,p=s[s.length-2].right,u=1;for(;s[++u]&&s[u].left<c+i;);let l=n.slice(0,u).map(Ce);for(u=s.length-2;s[--u]&&s[u].right>p-i;);let m=n.slice(++u).map((v,F)=>Ce(v,u+F));o.prepend.apply(o,m),o.append.apply(o,l),t.loop.prepends=m,t.loop.appends=l,t.elements=t.slides.assignedElements(),G(r,e||n[0])}function mo(t){let e=t[f],{mutations:n}=e,o=e.loop={};o.renders=n.each(r=>fo(e))}function ho(t){let e=t[f];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(n=>n.remove()),e.loop.appends&&e.loop.appends.forEach(n=>n.remove()),e.loop.renders.stop(),e.loop=void 0)}function go(t){return!!t[f].loop}var jt={};_(jt,{disable:()=>vo,enable:()=>wo,getState:()=>yo});function M(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function je(t,e,n,o){o===0?t.hidden=!0:t.hidden=!1,o===n.length-1?e.hidden=!0:e.hidden=!1}function wo(t){let e=t[f],{actives:n,clicks:o,slotchanges:r}=e,i=e.navigation={prev:x("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),next:x("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"})};e.controls.prepend(i.prev,i.next),i.updates=w.combine({active:n,changes:r}).each(s=>je(i.prev,i.next,s.changes.elements,s.changes.elements.indexOf(s.active))),i.clicks=o.each(M({'[name="navigation"]':function(s,c){let p=parseFloat(s.value),u=e.elements.indexOf(e.active)+p,l=e.elements[u];!l||(t.active=l,je(i.prev,i.next,e.elements,u))}}))}function vo(t){let e=t[f];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function yo(t){return!!t[f].navigation}var Ht={};_(Ht,{disable:()=>Eo,enable:()=>xo,getState:()=>So});function He(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&(t.activeSpan.remove(),r.children[i].part.remove("page-button-active"));let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),r.children[s].append(t.activeSpan),t.index=s,t.active=n)}function bo(t,e,n,o){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),o.length<2||(e.buttons=x("div",{part:"pagination",children:o.map((r,i)=>x("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons)),o.length}function xo(t){let e=t[f],{shadow:n,actives:o,clicks:r,mutations:i}=e,s=e.pagination={activeSpan:x("span",{class:"invisible",text:"(Current slide)"})};s.mutations=i.each(()=>bo(e.controls,s,n,e.children)),s.updates=w.combine({active:o,children:i}).filter(c=>c.children.length>1).each(c=>He(s,e.children,e.active)),s.clicks=r.each(M({'[name="pagination"]':function(c,p){let{host:u}=e,l=e.children,m=l[c.value];!m||(u.active=m,He(s,l,m))}}))}function Eo(t){let e=t[f];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function So(t){return!!t[f].pagination}var Bt={};_(Bt,{disable:()=>Lo,enable:()=>To,getState:()=>Po});var Me=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function Mt(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function Be(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function lt(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function To(t){let e=t[f];if(!Me)return;let n=e.fullscreen={button:x("button",{part:"fullscreen-button",type:"button",name:"fullscreen",html:"Open in fullscreen"})};e.controls.append(n.button),n.clicks=e.clicks.each(M({'[name="fullscreen"]':(o,r)=>{let i=Mt();if(i===t){lt(),n.button.part.remove("fullscreen-button-active"),n.button.innerHTML="Open in fullscreen";return}i&&lt(),Be(t),n.button.part.add("fullscreen-button-active"),n.button.innerHTML="Close fullscreen"}}))}function Lo(t){let e=t[f];Mt()===t&&lt(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen=void 0}function Po(t){return!!t[f].fullscreen}var De={active:{attribute:function(t){this.active=t},set:function(t){let e=this[f],n=typeof t=="object"?t:/^\d/.test(t+"")?this.querySelector("#\\3"+(t+"")[0]+" "+(t+"").slice(1)):/^\#/.test(t+"")?this.querySelector(t):this.querySelector("#"+t);if(!n)throw new Error("Cannot set active – not a child of slide-show");e.activates.push(n)},get:function(){return this[f].active}},autoplay:ut(Ot,"autoplay"),controls:At({navigation:jt,pagination:Ht,fullscreen:Bt}),loop:ut(Ct,"loop")};var ko=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),Rs=vt("slide-show",Ae,De,ko);window.console&&window.console.log("%c<slide-show>%c registered (documentation at %chttps://stephen.band/slide-show/%c)","color: #3a8ab0; font-weight: 600;","color: #888888; font-weight: 400;","color: inherit; font-weight: 400;","color: #888888; font-weight: 400;");export{Rs as default};
