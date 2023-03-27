/* slide-show 
   1.2.3
   By Stephen Band
   Built 2023-03-27 04:06 */

var nn=Object.defineProperty;var Kt=Object.getOwnPropertySymbols;var on=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable;var Qt=(t,e)=>{var o={};for(var r in t)on.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&Kt)for(var r of Kt(t))e.indexOf(r)<0&&rn.call(t,r)&&(o[r]=t[r]);return o};var q=(t,e)=>{for(var o in e)nn(t,o,{get:e[o],enumerable:!0})};function G(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var i=t(r);return e.set(r,i),i}}var sn=Array.prototype;function cn(t,e){return typeof t=="function"?t.apply(null,e):t}function Jt(t,e,o){o=o||t.length;var r=o===1?e?t:G(t):G(function(i){return Jt(function(){var s=[i];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function i(s){return arguments.length===0?i:arguments.length===1?r(s):arguments.length>=o?t.apply(null,arguments):cn(r(s),sn.slice.call(arguments,1))}}var E=Jt;function un(t,e){return 1-Math.pow(1-e,t)}var Zt=E(un);function S(){}function bt(t,e){return e(t)}function T(t){return t}var an=Array.prototype;function xt(){let t=arguments;return t.length?e=>an.reduce.call(t,bt,e):T}function Et(t,e,o){return o*(e-t)+t}var ln=window.performance,te=window.requestAnimationFrame,pn=window.cancelAnimationFrame;function St(t,e,o){var r=ln.now();function i(c){var p=(c-r)/(t*1e3);p<1?(p>0&&e(p),s=te(i)):(e(1),o&&o())}var s=te(i);return function(){pn(s)}}function et(t,e,o,r,i,s){let c=r[o];return St(t,xt(e,p=>Et(c,i,p),p=>r[o]=p),s)}function fn(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function k(t){return t===window?fn():t.getClientRects()[0]||t.getBoundingClientRect()}var R={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:Zt(3)},ee=S;function dn(t,e){if(e.behavior==="smooth"){let o=t.style.getPropertyValue("scroll-snap-type"),r=()=>{let i=t.scrollLeft,s=t.scrollTop;t.style.setProperty("scroll-snap-type",o),t.scrollLeft=i,t.scrollTop=s};if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let i=t===document.body?window.innerWidth:k(t).width,s=R.scrollDuration+R.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/i;ee=et(s,R.scrollTransform,"scrollLeft",t,e.left,r)}else{let i=t===document.body?window.innerHeight:k(t).height,s=R.scrollDuration+R.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/i;ee=et(s,R.scrollTransform,"scrollTop",t,e.top,r)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){window.console&&console.log("Polyfilling Element.scrollTo(options)");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(o){typeof o=="object"?dn(this,o):e.apply(this,arguments)}}function b(t,e){return function(){let r=t.apply(this,arguments),i=e[r]||e.default;if(!i)throw new Error('overload() no handler for "'+r+'"');return i.apply(this,arguments)}}var mn=b(T,{is:S,tag:S,data:function(t,e,o){Object.assign(e.dataset,o)},html:function(t,e,o){e.innerHTML=o},text:function(t,e,o){e.textContent=o},children:function(t,e,o){e.innerHTML="",e.append.apply(e,o)},points:C,cx:C,cy:C,r:C,transform:C,preserveAspectRatio:C,viewBox:C,default:function(t,e,o){t in e?e[t]=o:e.setAttribute(t,o)}});function C(t,e,o){e.setAttribute(t,o)}function hn(t,e){for(var o=Object.keys(e),r=o.length;r--;)mn(o[r],t,e[o[r]]);return t}var nt=E(hn,!0);var Lt="http://www.w3.org/2000/svg",ne=document.createElement("template"),Tt=(t,e)=>e&&typeof e;function oe(t,e){let o=document.createRange();return o.selectNode(t),o.createContextualFragment(e)}var O=b(Tt,{string:function(t,e){let o=document.createElementNS(Lt,t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElementNS(Lt,t);return typeof e.length=="number"?o.append.apply(o,e):nt(o,e),o},default:t=>document.createElementNS(Lt,t)}),gn=b(Tt,{string:function(t,e){let o=document.createElement(t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElement(t);return typeof e.length=="number"?o.append.apply(o,e):nt(o,e),o},default:t=>document.createElement(t)}),wn=b(T,{comment:function(t,e){return document.createComment(e||"")},fragment:b(Tt,{string:function(t,e,o){return o?oe(o,e):(ne.innerHTML=e,ne.content.cloneNode(!0))},object:function(t,e,o){let r=o?oe(o):document.createDocumentFragment();return typeof e.length=="number"?r.append.apply(r,e):nt(r,e),r},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:O,ellipse:O,g:O,glyph:O,image:O,line:O,rect:O,use:O,path:O,pattern:O,polygon:O,polyline:O,svg:O,default:gn}),v=wn;function kt(t,e,o){let r;typeof o!="string"&&o.input!==void 0&&o.index!==void 0&&(r=o,o=r.input.slice(o.index+o[0].length+(o.consumed||0)));let i=t.exec(o);if(!i)return;let s=e(i);return r&&(r.consumed=(r.consumed||0)+i.index+i[0].length+(i.consumed||0)),s}var jr=E(kt,!0);function vn(t,e,o){throw o.input!==void 0&&o.index!==void 0&&(o=o.input),new Error('Cannot parse string "'+(o.length>128?o.length.slice(0,128)+"…":o)+'"')}function yn(t,e,o){let r=-1;for(;++r<o.length;)e=o[r]!==void 0&&t[r]?t[r](e,o):e;return t.done?t.done(e,o):t.close?t.close(e,o):e}function bn(t,e,o,r){let i=kt(t,s=>yn(e,o,s),r);return i===void 0?e.catch?e.catch(o,r):vn(t,e,r):i}var re=E(bn,!0);var F=Symbol("internals"),H=Symbol("shadow"),ie=Object.defineProperties,xn={a:HTMLAnchorElement,article:HTMLElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,section:HTMLElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},En={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[F].form}},labels:{get:function(){return this[F].labels}},validity:{get:function(){return this[F].validity}},validationMessage:{get:function(){return this[F].validationMessage}},willValidate:{get:function(){return this[F].willValidate}},checkValidity:{value:function(){return this[F].checkValidity()}},reportValidity:{value:function(){return this[F].reportValidity()}}},Sn={},se={once:!0},ce=0,ue=!1;function Ln(t){return xn[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var Tn=re(/^\s*<?([a-z][\w]*-[\w-]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is[=\s]*["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function kn(t,e){if(t.hasOwnProperty(e)){let o=t[e];delete t[e],t[e]=o}return t}function ae(t,e,o){t._initialLoad=!0;let r=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(o){let i=v("link",{rel:"stylesheet",href:o});r.append(i)}return t[H]=r,r}function On(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=v("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(o){this.input.value=o},e}function Fn(t){return!!t.attribute}function Mn(t){return t.set||t.get||t.hasOwnProperty("value")}function Pn(t,e){return Fn(e[1])&&(t.attributes[e[0]]=e[1].attribute),Mn(e[1])&&(t.properties[e[0]]=e[1]),t}function Ot(t,e,o,r,i=""){let{name:s,tag:c}=Tn(t),p=typeof c=="string"?Ln(c):HTMLElement,{attributes:d,properties:f}=o?Object.entries(o).reduce(Pn,{attributes:{},properties:{}}):Sn;function g(){let m=Reflect.construct(p,arguments,g),y=e.construct&&e.construct.length>ce?ae(m,e,r||e.stylesheet):void 0,l=g.formAssociated?On(m):{};return c&&(ue=!0),e.construct&&e.construct.call(m,y,l),f&&Object.keys(f).reduce(kn,m),m}return g.prototype=Object.create(p.prototype,f),f.value&&(g.formAssociated=!0,ie(g.prototype,En),(e.enable||e.disable)&&(g.prototype.formDisabledCallback=function(m){return m?e.disable&&e.disable.call(this,this[H],this[F]):e.enable&&e.enable.call(this,this[H],this[F])}),e.reset&&(g.prototype.formResetCallback=function(){return e.reset.call(this,this[H],this[F])}),e.restore&&(g.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[H],this[F])})),d&&(g.observedAttributes=Object.keys(d),g.prototype.attributeChangedCallback=function(m,y,l){return d[m].call(this,l)}),g.prototype.connectedCallback=function(){let m=this,y=m[H],l=m[F];if(m._initialLoad){let a=y.querySelectorAll('link[rel="stylesheet"]');if(a.length){let z=0,yt=a.length,_t=function(Qo){++z>=a.length&&(delete m._initialLoad,e.load&&e.load.call(m,y))},tn=_t;for(;yt--;)a[yt].addEventListener("load",_t,se),a[yt].addEventListener("error",tn,se)}else e.load&&Promise.resolve(1).then(()=>e.load.call(this,y,l))}e.connect&&e.connect.call(this,y,l)},e.disconnect&&(g.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[H],this[F])}),window.console&&window.console.log("%c<"+(c?c+" is="+s:s)+">%c "+i,"color: #3a8ab0; font-weight: 600;","color: #888888; font-weight: 400;"),window.customElements.define(s,g,c&&{extends:c}),c&&!ue&&document.querySelectorAll('[is="'+s+'"]').forEach(m=>{f&&ie(m,f);let y=e.construct&&e.construct.length>ce?ae(m,e,r||e.stylesheet):void 0;e.construct&&e.construct.call(m,y);let l;for(l in d){let a=m.attributes[l];a&&d[l].call(m,a.value)}e.connect&&e.connect.apply(m)}),g}function le(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let o=Object.keys(t),r=Object.keys(e),i=o.length;for(;i--;){if(t[o[i]]===void 0){if(e[o[i]]!==void 0)return!1}else if(!e.hasOwnProperty(o[i])||!le(t[o[i]],e[o[i]]))return!1;let s=r.indexOf(o[i]);s>-1&&r.splice(s,1)}for(i=r.length;i--;)if(e[r[i]]===void 0){if(t[r[i]]!==void 0)return!1}else return!1;return!0}var pe=E(le,!0);function In(t,e){return e[t]}var U=E(In,!0);function Ft(t){return function(){return arguments[t]}}function M(){return this}var jn=Object.create,Cn=Object.freeze;function Hn(){return!0}function fe(){return-1}var P=Cn(jn({shift:S,push:S,forEach:S,join:function(){return""},every:Hn,filter:M,find:S,findIndex:fe,flat:M,flatMap:M,includes:function(){return!1},indexOf:fe,map:M,reduce:Ft(1),sort:M,each:M,pipe:T,start:M,stop:M,done:M,valueOf:function(){return null}},{length:{value:0}}));function V(t,e){t.remove&&t.remove(e);let o;for(;(o=t.indexOf(e))!==-1;)t.splice(o,1);return t}var Jr=E(V,!0);function Mt(t){return t&&t[Symbol.iterator]}var An=Object.assign;function Bn(t){return t.stop?t.stop():t()}function $(){}An($.prototype,{stop:function(){let t=this.stopables;return this.stopables=void 0,t&&t.forEach(Bn),this},done:function(t){return(this.stopables||(this.stopables=[])).push(t),this}});var I=Object.assign,j=Object.create;function N(t,e){t[0]=e,e.done(t)}function de(t,e){let o=t[e].stopables;o&&V(o,t),t[e]=void 0}function w(t,e){t&&t.push(e)}function L(t){$.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,o.stop()}function me(t){return u.prototype.isPrototypeOf(t)}function u(t){this.input=t}I(u.prototype,$.prototype,{push:function(t){w(this[0],t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with .broadcast().");return this[0]=t,t.done(this),this.input.pipe(this),t},map:function(t){return new he(this,t)},filter:function(t){return new ge(this,t)},split:function(t){return new ve(this,t)},flatMap:function(t){return new we(this,t)},slice:function(t,e){return new Pt(this,t,e)},take:function(t){return console.warn(".take(a) superseded by .slice(0, a)"),new Pt(this,0,t)},each:function(t){return this.pipe(new xe(t))},reduce:function(t,e){return this.pipe(new ye(t,e)).value},scan:function(t,e){return new be(this,t,e)},stop:function(){return L(this),this}});function he(t,e){this.input=t,this.fn=e}he.prototype=I(j(u.prototype),{push:function(e){let r=this.fn(e);r!==void 0&&w(this[0],r)}});function ge(t,e){this.input=t,this.fn=e}ge.prototype=I(j(u.prototype),{push:function(e){this.fn(e)&&w(this[0],e)}});function we(t,e){this.input=t,this.fn=e}we.prototype=I(j(u.prototype),{push:function(e){let r=this.fn(e);if(r!==void 0)if(Mt(r))for(let i of r)w(this[0],i);else r.pipe&&this.done(r.each(i=>w(this[0],i)))}});function ve(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}ve.prototype=I(j(u.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(w(this[0],o),this.chunk=[]):o.push(e)}});function Pt(t,e,o=1/0){this.input=t,this.index=-e,this.indexEnd=e+o}Pt.prototype=I(j(u.prototype),{push:function(e){++this.index>0&&this[0].push(e),this.index===this.indexEnd&&this.stop()}});function ye(t,e){this.fn=t,this.value=e,this.i=0}ye.prototype=I(j(u.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function be(t,e,o){this.input=t,this.fn=e,this.value=o}be.prototype=I(j(u.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function xe(t){this.push=t}xe.prototype=I(j(u.prototype),{each:null,reduce:null,pipe:null});var Dn=Object.assign,zn=Object.create;function Gn(t,e){if(t[1]){let o=-1;for(;t[++o]&&t[o]!==e;);for(;t[o++];)t[o-1]=t[o]}else t.stop()}function X(t,e){u.apply(this,arguments),this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(P)}X.prototype=Dn(zn(u.prototype),{push:function(t){if(t===void 0)return;this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)},pipe:function(t){let e=-1;for(;this[++e];);return this.memory&&e===0&&this.input.pipe(this),this[e]=t,t.done(()=>Gn(this,t)),this.value!==void 0&&t.push(this.value),!this.memory&&e===0&&this.input.pipe(this),t}});var Rn=Array.prototype,Un=Object.assign,Wn=Object.create;function qn(t){return t!==void 0}function Y(t){this.buffer=t?t.filter?t.filter(qn):t:[]}Y.prototype=Un(Wn(u.prototype),{push:function(t){t!==void 0&&w(this.buffer,t)},pipe:function(t){for(t.done(this),this[0]=t;this.buffer.length;)w(this[0],Rn.shift.apply(this.buffer));return this.buffer=t,t},stop:function(){return this.buffer=void 0,L(this),this}});var Ee=Object.assign,Vn=Object.create,$n=Promise.resolve(),Nn={schedule:function(){$n.then(this.fire)},unschedule:S},Xn={schedule:function(){this.timer=requestAnimationFrame(this.fire)},unschedule:function(){cancelAnimationFrame(this.timer),this.timer=void 0}},Yn={schedule:function(){this.timer=setTimeout(this.fire,this.duration*1e3)},unschedule:function(){clearTimeout(this.timer),this.timer=void 0}};function W(t,e){u.apply(this,arguments),this.duration=e,this.timer=void 0,this.fire=()=>{this.timer=void 0,this.output.stop()},Ee(this,e==="tick"?Nn:e==="frame"?Xn:Yn)}W.prototype=Ee(Vn(u.prototype),{push:function(t){this.timer?(this.unschedule(),this.schedule(),this.output.push(t)):(this.output=u.of(t),this[0].push(this.output),this.schedule())},stop:function(){return this.timer&&this.fire(),u.prototype.stop.apply(this,arguments)}});var It=Object.assign,_n=Object.create;function Kn(t){return!!t.active}function Qn(t){return!!t.stopped}function jt(t,e,o,r,i,s){this.stream=t,this.values=e,this.pipes=o,this.name=r,this.input=i,this.mutable=s,this.active=!1,this.stopped=!1}It(jt.prototype,{push:function(t){let e=this.stream,o=this.values,r=this.name;if(o[r]=t,this.active=!0,e.active||(e.active=this.pipes.every(Kn)))if(this.mutable)w(e[0],o);else{let i=new this.values.constructor;w(e[0],It(i,o))}},stop:function(){this.stopped=!0,this.pipes.every(Qn)&&L(this.stream)},done:function(t){this.stream.done(t)}});var Jn={};function ot(t,e=Jn){this.inputs=t,this.mutable=!!e.mutable,this.active=!1}ot.prototype=It(_n(u.prototype),{push:null,pipe:function(t){let e=this.inputs,o=[];this[0]=t,t.done(this);let r;for(r in e){let i=e[r];if(i.pipe){let s=new jt(this,e,o,r,i,this.mutable);o.push(s),i.pipe(s)}else if(i.then){let s=new jt(this,e,o,r,i,this.mutable);o.push(s),i.then(c=>s.push(c)),i.finally(()=>s.stop())}}return t}});var Zn=Object.assign,to=Object.create;function rt(t){this.fn=t}rt.prototype=Zn(to(u.prototype),{pipe:function(t){return t.done(this),this[0]=t,this.fn(e=>this.push(e),e=>this.stop(e)),t}});var Se=Object.assign,eo=Object.create;function Le(t){this.stream=t}Se(Le.prototype,{push:function(t){w(this.stream[0],t)},stop:function(){--this.stream.count===0&&L(this.stream)},done:function(t){this.stream.done(t)}});function it(t){this.inputs=t}it.prototype=Se(eo(u.prototype),{push:null,pipe:function(t){let e=this.inputs;this.count=e.length,this[0]=t,t.done(this);let o=new Le(this),r=-1,i;for(;i=e[++r];)if(i.pipe)i.pipe(o);else if(i.then)i.then(s=>o.push(s)),i.finally(()=>o.stop());else{let s=-1;for(;++s<i.length;)o.push(i[s]);o.stop()}return t}});var no=Object.assign,oo=Object.create;function st(t){this.promise=t}st.prototype=no(oo(u.prototype),{push:null,pipe:function(t){let e=this.promise;return this[0]=t,t.done(this),e.then(o=>w(this,o)),e.finally(()=>L(this)),t}});var ro=Array.prototype,Te=Object.assign;function io(t){throw new TypeError("Stream cannot be created from "+typeof object)}Te(u,{isStream:me,of:function(){return new Y(ro.slice.apply(arguments))},from:function(t){return t.pipe?new u(t):t.then?new st(t):typeof t.length=="number"?typeof t=="function"?new rt(t):new Y(t):io(t)},batch:t=>new W(P,t),broadcast:t=>new X(P,t),combine:(t,e)=>new ot(t,e),merge:function(){return new it(arguments)},writeable:function(t){let e=new u(P);return t(e),e}});Te(u.prototype,{log:M,batch:function(t){return new W(this,t)},burst:function(t){return console.warn("stream.burst() is now stream.batch()"),new W(this,t)},broadcast:function(t){return new X(this,t)}});var so=Object.assign,co=/\s+/,ct={fullscreenchange:G(()=>"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"mozFullScreenElement"in document?"mozfullscreenchange":"msFullscreenElement"in document?"MSFullscreenChange":"fullscreenchange")},ke=0;window.addEventListener("click",t=>ke=t.timeStamp);function uo(t,e){return t.node.addEventListener(ct[e]?ct[e]():e,t,t.options),t}function ao(t,e){return t.node.removeEventListener(ct[e]?ct[e]():e,t),t}function Oe(t,e,o){this.types=t.split(co),this.options=e,this.node=o,this.select=e&&e.select}so(Oe.prototype,{pipe:function(t){N(this,t),this.types.reduce(uo,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=ke)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}w(this[0],t)}},stop:function(){this.types.reduce(ao,this),L(this[0])}});function x(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new u(new Oe(t,o,e))}function Ct(t){return typeof t}var lo=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function _(t){return function(o){if(typeof o=="number")return o;var r=lo.exec(o);if(!r||!t[r[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+o+'" (accepted units '+Object.keys(t).join(", ")+")");return r?t.catch(parseFloat(r[1]),r[2]):t.catch(parseFloat(o))}return t[r[2]||""](parseFloat(r[1]))}}var po=/px$/,Fe={"transform:translateX":function(t){var e=K("transform",t);if(!e||e==="none")return 0;var o=ut(e);return parseFloat(o[4])},"transform:translateY":function(t){var e=K("transform",t);if(!e||e==="none")return 0;var o=ut(e);return parseFloat(o[5])},"transform:scale":function(t){var e=K("transform",t);if(!e||e==="none")return 0;var o=ut(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.sqrt(r*r+i*i)},"transform:rotate":function(t){var e=K("transform",t);if(!e||e==="none")return 0;var o=ut(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.atan2(i,r)}};function ut(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function K(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function at(t,e){if(Fe[t])return Fe[t](e);var o=K(t,e);return typeof o=="string"&&po.test(o)?parseFloat(o):o}var lt,pt;function fo(){if(!lt){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",lt=at("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return lt}function mo(){return pt||(pt=at("font-size",document.documentElement)),pt}window.addEventListener("resize",()=>{lt=void 0,pt=void 0});var A=b(Ct,{number:T,string:_({px:T,em:t=>fo()*t,rem:t=>mo()*t,vw:t=>window.innerWidth*t/100,vh:t=>window.innerHeight*t/100,vmin:t=>window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100,vmax:t=>window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100})}),Me=A;function Ht(t){t.stopPropagation(),t.preventDefault()}var ho=Array.prototype,Bt=Object.assign,At="webkitUserSelect"in document.body.style?"webkitUserSelect":"userSelect",ft={},dt={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function go(t,e,o){return e*e+o*o>=t*t}function Pe(t,e,o){if(this.stream=t,this.events=[e],this.options=o,this.pointerId=e.pointerId,typeof o.threshold=="function")this.checkThreshold=o.threshold;else{let r=Me(o.threshold);this.checkThreshold=(i,s,c)=>go(r,i,s,c)}document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this)}Bt(Pe.prototype,{handleEvent:b(U("type"),{pointermove:function(t){if(this.pointerId===t.pointerId){if(this.pointerId in ft&&this!==ft[this.pointerId]){this.stop();return}if(this.events.push(t),!this.isGesture){let e=this.events[0],o=t.clientX-e.clientX,r=t.clientY-e.clientY,i=(t.timeStamp-e.timeStamp)/1e3;this.checkThreshold(o,r,i)&&this.createGesture()}}},pointerup:function(t){this.pointerId===t.pointerId&&(this.events.push(t),this.stop(),this.isGesture&&document.addEventListener("click",Ht,{capture:!0,once:!0}))},default:function(t){this.pointerId===t.pointerId&&(this.events.push(t),this.stop())}}),createGesture:function(){this.isGesture=!0,this.userSelectState=document.body.style[At],document.body.style[At]="none",ft[this.pointerId]=this,this.stream.push(new u(this))},pipe:function(t){for(N(this,t);this.events.length;)w(this[0],ho.shift.apply(this.events));this.events=t},stop:function(){if(document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this),this.isGesture&&(document.body.style[At]=this.userSelectState,delete ft[this.pointerId]),this[0]){let t=this[0];de(this,0),L(t)}}});function wo(t){var e=t.target.tagName;return e&&(!!dt.ignoreTags[e.toLowerCase()]||t.target.draggable)}function Ie(t,e){this.node=t,this.options=e}Bt(Ie.prototype,{pipe:function(t){return this[0]=t,this.node.addEventListener("pointerdown",this),t},handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!wo(t)&&!(this.options.select&&!t.target.closest(this.options.select))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new Pe(this[0],e,this.options)}},stop:function(){return this[0]&&(this.node.removeEventListener("pointerdown",this),L(this[0])),this}});function Dt(t,e){return t=e&&t?Bt({},dt,t):dt,e=e||t,new u(new Ie(e,t))}function zt(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var vo=Object.assign,Q={bubbles:!0,cancelable:!0};function Gt(t,e){var f;let o=Q,r,i,s,c,p,d;return typeof t=="object"?(f=t,{type:t,detail:i,bubbles:s,cancelable:c,composed:p}=f,r=Qt(f,["type","detail","bubbles","cancelable","composed"]),d=vo(new CustomEvent(t,{detail:i,bubbles:s||Q.bubbles,cancelable:c||Q.cancelable,composed:p||Q.composed}),r)):d=new CustomEvent(t,Q),e.dispatchEvent(d)}var ss=E(Gt,!0);var h=Symbol("data"),J={minScrollInterval:.0375,maxScrollInterval:.18},je=J.maxScrollInterval;function Ce(t){let e=t.length,o=0;for(;--e;){let r=t[e]-t[e-1];o=r>o?r:o}o=o<J.minScrollInterval?J.minScrollInterval:o,je=1.4*o>J.maxScrollInterval?J.maxScrollInterval:1.4*o}function mt(){return je}var Rt="MozAppearance"in document.documentElement.style;var He=!1;Rt&&document.addEventListener("DOMContentLoaded",t=>He=!0);function Ae(t){let e=k(t),o=window.getComputedStyle(t,null),r=A(o.getPropertyValue("padding-left")),i=A(o.getPropertyValue("padding-right"));return e.leftPadding=e.left+r,e.rightPadding=e.left+e.width-i,e.centrePadding=e.leftPadding+(e.width-r-i)/2,e}function Be(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function De(t,e,o){let r=Ae(t),i=k(e),s=Be(e),c={top:t.scrollTop,left:t.scrollLeft+(s==="left"?i.left-r.leftPadding:s==="right"?i.right-r.rightPadding:i.left+i.width/2-r.centrePadding),behavior:o};t.scrollTo(c),Rt&&!He&&document.addEventListener("DOMContentLoaded",()=>t.scrollTo(c))}function ze(t,e){return De(t,e,"smooth"),e}function B(t,e){return t.style.setProperty("scroll-behavior","auto","important"),De(t,e,"auto"),t.style.setProperty("scroll-behavior",""),e}function Ge(t,e){let{leftPadding:o,rightPadding:r,centrePadding:i}=Ae(t),s=e.length,c;for(;c=e[--s];){let p=k(c);if(!p)continue;let d=Be(c),f=p.width/2+(d==="left"?o:d==="right"?r:i);if((d==="left"?p.left:d==="right"?p.right:p.left+p.width/2)<=f)break}return c}function Re(t){return!!t.dataset.slideIndex}function Ue(t){let{scroller:e,elements:o,children:r}=t,i=Ge(e,o);return Re(i)?r[i.dataset.slideIndex]:i}function We(t){let{scroller:e,children:o,elements:r}=t,i=Ge(e,r),s;!i||(Re(i)?(s=o[i.dataset.slideIndex],B(e,s)):s=i,t.activations.push(s))}function ht(t,e,o){let r=e[o];!r||(t.active=r)}function qe(t,e,o){let r=e.indexOf(o)+1;ht(t,e,r)}function Ve(t,e,o){let r=e.indexOf(o)-1;ht(t,e,r)}function yo(t,e){t.style.setProperty("scroll-snap-type",""),e.stop()}var $e=b((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let o=e.clientX,r=e.clientY;if(!t.gesturing){if(Math.abs(o-t.x0)<Math.abs(r-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let i=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-i,t},default:function(t,e){let o=t.scroller;t.clickSuppressTime=e.timeStamp;let r=o.scrollLeft;o.style.setProperty("scroll-snap-type","");let i=o.scrollLeft;if(r===i)o.style.setProperty("scroll-behavior","");else{let s=Ue(t);t.activations.push(s),o.style.setProperty("scroll-snap-type","none","important"),o.scrollLeft=r,o.style.setProperty("scroll-behavior",""),o.scrollTo({top:o.scrollTop,left:i,behavior:"smooth"}),x({type:"scroll",passive:!0},o).reduce((c,p,d,f)=>(clearTimeout(c),setTimeout(yo,mt()*1e3,o,f)))}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var bo=Object.assign;function Z(){}bo(Z.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return this[0]&&u(this[0]),this}});var xo=Object.assign,Eo={capture:!0,passive:!0};function So(t,e){t.timer=void 0,t.stream.push(e);let o=t.times;o.length>1&&Ce(o),o.length=0}function Ne(t){this.element=t,this.times=[]}xo(Ne.prototype,Z.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,Eo)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(So,mt()*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),Z.prototype.stop.apply(this,arguments)}});function Ut(t){return new u(new Ne(t))}function Lo(t,e,o){let r=o.length,i=-1/0;for(;r--;){let f=k(o[r]),g=f.x+f.width;i=g>i?g:i}let s=k(e),c=getComputedStyle(t),p=A(c.paddingLeft||0),d=A(c.paddingRight||0);return p+d+i-s.x}function To(t,e,o){let r=Lo(t,e,o);t.style.setProperty("--scroll-width",r+"px")}function ko(t){return!t.dataset.slideIndex}var Xe={mode:"open",construct:function(t){let e=v("slot",{part:"slides"}),o=v("div",{class:"scroller",children:[e]}),r=v("nav",{part:"controls",children:[v("slot",{name:"controls"})]});t.append(o,r);let i=u.broadcast(),s=u.broadcast(),c=u.combine({host:s,elements:x("slotchange",e).map(a=>l.elements=e.assignedElements())}).broadcast({memory:!0}),p=c.map(a=>{let z=a.elements.filter(ko);return pe(l.children,z)?void 0:l.children=z}).broadcast({memory:!0,hot:!0}),d=u.of(),f=u.of(),g=f.map(a=>a.dataset.slideIndex?l.children[a.dataset.slideIndex]:a).filter(a=>l.active!==a&&Gt("slide-active",a)).map(a=>l.active=a).broadcast({memory:!0,hot:!0}),m=x("click",t).filter(zt).broadcast(),y=Ut(o).filter(a=>l.connected&&!l.gesturing).broadcast(),l=this[h]={clickSuppressTime:-1/0,connected:!1,host:this,style:window.getComputedStyle(this),elements:P,children:P,device:void 0,shadow:t,scroller:o,slides:e,controls:r,connects:i,load:s,views:d,activations:f,actives:g,slotchanges:c,mutations:p,clicks:m,scrolls:y};u.merge(c,x("resize",window)).filter(a=>e.offsetWidth&&e.offsetHeight).each(a=>To(o,e,l.elements)),u.combine({slotchanges:c,connects:i}).map(a=>l.elements.includes(l.active)?l.active:l.children[0]).map(a=>l.connected?B(o,a):a).pipe(f),u.combine({host:s,child:d}).map(a=>l.elements.includes(a.child)&&l.active!==a.child?a.child:void 0).map(a=>l.connected?l.active?ze(o,a):B(o,a):a).pipe(f),y.each(a=>We(l)),Dt({threshold:"0.25rem",device:"mouse"},t).filter(()=>l.children.length>1).each(a=>{l.pointers=a,a.reduce($e,l)}),m.each(a=>{a.timeStamp-l.clickSuppressTime<120&&(a.preventDefault(),a.stopPropagation())}),x("fullscreenchange",window).filter(a=>l.active&&e.offsetWidth&&e.offsetHeight).each(a=>{(a.target===this||a.target.contains(this))&&B(o,l.active)}),u.merge(x("pointerdown",this),x("keydown",this)).each(a=>l.device=a.type==="keydown"?"keyboard":a.pointerType),x("focusin",this).filter(a=>l.device==="keyboard").map(a=>l.children.indexOf(a.target)!==-1?a.target:l.children.find(z=>z.contains(a.target))).pipe(d),x("keydown",this).filter(()=>document.activeElement===this||this.contains(document.activeElement)).map(b(U("keyCode"),{37:a=>(a.preventDefault(),l.elements[l.elements.indexOf(l.active)-1]),39:a=>(a.preventDefault(),l.elements[l.elements.indexOf(l.active)+1]),default:S})).pipe(d)},load:function(t){this[h].load.push(this)},connect:function(t){let e=this[h];e.connected=!0,e.connects.push(!0)},disconnect:function(t){let e=this[h];e.connected=!1}};function gt(t){function e(o,r){if(t.getState(o)!==r)return t[r?"enable":"disable"](o)}return{attribute:function(o){return e(this,o!==null)},set:function(o){return e(this,!!o)},get:function(){return t.getState(this)},enumerable:!0}}var Oo=Object.assign;function tt(t,e){this.element=t,this.definitions=e,this.tokens=[]}Oo(tt.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)||(this.tokens.push(e),this.supports(e)&&this.definitions[e].enable(this.element))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(V(this.tokens,e),this.supports(e)&&this.definitions[e].disable(this.element))}},supports:function(t){return!!this.definitions&&!!this.definitions[t]}});var Fo=Array.prototype;function Wt(t,e){let o=t.tokens.slice(),r=Fo.slice.apply(e),i=o.length;for(;i--;)r.includes(o[i])&&o.splice(i,1);t.remove.apply(t,o),t.add.apply(t,r)}function qt(t){let e=Symbol("TokenList");function o(r,i){let s=r[e]||(r[e]=new tt(r,t));Wt(s,i.trim().split(/\s+/))}return{attribute:function(r){o(this,r||"")},set:function(r){o(this,r+"")},get:function(){return this[e]||(this[e]=new tt(this,t))},enumerable:!0}}var Vt={};q(Vt,{disable:()=>Co,enable:()=>jo,getState:()=>Ho});var Mo=_({s:T,ms:t=>t/1e3});function Po(t){let{active:e,children:o,elements:r,host:i}=t,s=r.indexOf(e),c=r[s+1]||o[0];t.autoplay.timer=null,!!c&&(i.active=c)}function Io(t){let{active:e,style:o}=t,r=Mo(window.getComputedStyle(e).getPropertyValue("--slide-duration")||o.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(Po,r*1e3,t)}function Ye(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function jo(t){let e=t[h],{actives:o}=e,r=e.autoplay={},i=u.merge([!1],x("pointerenter pointerleave",t).map(c=>c.type==="pointerenter")),s=u.merge([t.contains(document.activeElement)],x("focusin focusout",t).map(b(U("type"),{focusin:c=>!0,focusout:c=>t.contains(c.relatedTarget)}))).map((c=>p=>c===p?void 0:c=p)());r.updates=u.combine({active:o,hover:i,focus:s}).each(c=>c.hover||c.focus?Ye(e):Io(e))}function Co(t){let e=t[h];Ye(e),e.autoplay.updates.stop(),e.autoplay=void 0}function Ho(t){return!!t[h].autoplay}var $t={};q($t,{disable:()=>Do,enable:()=>Bo,getState:()=>zo});function _e(t,e){let o=t.cloneNode(!0);return o.dataset.slideIndex=e,o.removeAttribute("id"),o.setAttribute("aria-hidden","true"),o.tabIndex="-1",o}function Ao(t){let{active:e,children:o,host:r,scroller:i}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(y=>y.remove()),t.loop.appends.forEach(y=>y.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),o.length<2){t.elements=t.slides.assignedElements();return}let s=r.clientWidth,c=o.map(k),p=c[1].left,d=c[c.length-2].right,f=1;for(;c[++f]&&c[f].left<p+s;);let g=o.slice(0,f).map(_e);for(f=c.length-2;c[--f]&&c[f].right>d-s;);let m=o.slice(++f).map((y,l)=>_e(y,f+l));r.prepend.apply(r,m),r.append.apply(r,g),t.loop.prepends=m,t.loop.appends=g,t.elements=t.slides.assignedElements(),B(i,e||o[0])}function Bo(t){let e=t[h],{mutations:o}=e,r=e.loop={};r.renders=o.each(i=>Ao(e))}function Do(t){let e=t[h];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(o=>o.remove()),e.loop.appends&&e.loop.appends.forEach(o=>o.remove()),e.loop.renders.stop(),e.loop=void 0)}function zo(t){return!!t[h].loop}var Nt={};q(Nt,{disable:()=>Uo,enable:()=>Ro,getState:()=>Wo});function D(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");return function(o){let r=o.target,i;for(i in t){let s=r.closest(i);if(s)return t[i](s,...arguments)}}}function Go(t,e,o,r,i){i===0||t.scrollLeft===0?e.hidden=!0:e.hidden=!1,i===r.length-1||t.scrollLeft>=t.scrollWidth-t.clientWidth?o.hidden=!0:o.hidden=!1}function Ro(t){let e=t[h],{actives:o,clicks:r,slotchanges:i,scroller:s,scrolls:c}=e,p=e.navigation={prev:v("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",children:[v("slot",{name:"prev-button",html:`
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M19,9 L9,20 L19,31"></path>
                    </svg>
                    Previous
                `})]}),next:v("button",{part:"next-button",type:"button",name:"navigation",value:"1",children:[v("slot",{name:"next-button",html:`
                    <svg viewBox="0 0 30 40" aria-hidden="true">
                        <path d="M11,9 L21,20 L11,31"></path>
                    </svg>
                    Next
                `})]})};e.controls.prepend(p.prev,p.next),p.updates=u.combine({active:o,changes:i,scroll:c}).each(d=>Go(s,p.prev,p.next,d.changes.elements,d.changes.elements.indexOf(d.active))),p.clicks=r.each(D({'[slot="prev-button"]':(d,f)=>{Ve(t,e.elements,e.active)},'[slot="next-button"]':(d,f)=>{qe(t,e.elements,e.active)},'[name="navigation"]':(d,f)=>{let g=e.elements.indexOf(e.active)+parseFloat(d.value);ht(t,e.elements,g)}}))}function Uo(t){let e=t[h];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function Wo(t){return!!t[h].navigation}var Xt={};q(Xt,{disable:()=>$o,enable:()=>Vo,getState:()=>No});function Ke(t,e,o){let{active:r,buttons:i,index:s}=t;if(r===o)return;s>-1&&(t.activeSpan.remove(),i.children[s].part.remove("page-button-active"));let c=e.indexOf(o);c!==-1&&(i.children[c].part.add("page-button-active"),i.children[c].append(t.activeSpan),t.index=c,t.active=o)}function qo(t,e,o,r){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),r.length<2||(e.buttons=v("div",{part:"pagination",children:r.map((i,s)=>v("button",{part:"page-button",type:"button",name:"pagination",value:s}))}),t.append(e.buttons)),r.length}function Vo(t){let e=t[h],{shadow:o,actives:r,clicks:i,mutations:s}=e,c=e.pagination={activeSpan:v("span",{class:"invisible",text:"(Current slide)"})};c.mutations=s.each(()=>qo(e.controls,c,o,e.children)),c.updates=u.combine({active:r,children:s}).filter(p=>p.children.length>1).each(p=>Ke(c,e.children,e.active)),c.clicks=i.each(D({'[name="pagination"]':function(p,d){let{host:f}=e,g=e.children,m=g[p.value];!m||(f.active=m,Ke(c,g,m))}}))}function $o(t){let e=t[h];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function No(t){return!!t[h].pagination}var Yt={};q(Yt,{disable:()=>Yo,enable:()=>Xo,getState:()=>_o});var Qe=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function wt(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function Je(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function vt(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function Xo(t){let e=t[h];if(!Qe)return;let o=e.fullscreen={button:v("button",{part:"fullscreen-button",type:"button",name:"fullscreen",children:[v("slot",{name:"fullscreen-button",html:`
                    <svg viewBox="0 0 40 40" aria-hidden="true">
                        <path class="fullscreen-hidden" d="M9,9 L17,17 M9,15 L9,9 L15,9 M9,31 L17,23 M9,25 L9,31 L15,31 M31,31 L23,23 M25,31 L31,31 L31,25 M31,9 L23,17 M25,9 L31,9 L31,15"></path>
                        <path class="fullscreen-shown"  d="M9,9 L31,31 M9,31 L31,9"></path>
                    </svg>
                    <span class="fullscreen-hidden">Open in fullscreen</span>
                    <span class="fullscreen-shown">Close fullscreen</span>
                `})]})};e.controls.append(o.button),o.changes=x("fullscreenchange",t).filter(r=>wt()===t).each(r=>{document.activeElement!==t&&(o.tabIndex=t.tabIndex,t.tabIndex<0&&(t.tabIndex=0),t.focus());let i=x("fullscreenchange",t).each(s=>{t.tabIndex=o.tabIndex,o.tabIndex=void 0,i.stop()})}),o.clicks=e.clicks.each(D({'[slot="fullscreen-button"], [name="fullscreen"]':(r,i)=>{let s=wt();if(s===t){vt();return}s&&vt(),Je(t)}}))}function Yo(t){let e=t[h];wt()===t&&vt(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen.changes.stop(),e.fullscreen=void 0}function _o(t){return!!t[h].fullscreen}var Ze={active:{attribute:function(t){this.active=t},set:function(t){let e=this[h],o=typeof t=="object"?t:/^\d/.test(t+"")?this.querySelector("#\\3"+(t+"")[0]+" "+(t+"").slice(1)):/^\#/.test(t+"")?this.querySelector(t):this.querySelector("#"+t);e.views.push(o)},get:function(){return this[h].active}},activateNext:{value:function(){let{elements:t,views:e,active:o}=this[h];return e.push(t[t.indexOf(o)+1]),this}},activatePrevious:{value:function(){let{elements:t,views:e,active:o}=this[h];return e.push(t[t.indexOf(o)-1]),this}},autoplay:gt(Vt,"autoplay"),controls:qt({navigation:Nt,pagination:Xt,fullscreen:Yt}),loop:gt($t,"loop")};var Ko=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),Pc=Ot('<ul is="slide-show-ul">',Xe,Ze,Ko);export{Pc as default};
