(()=>{var t={9662:(t,r,e)=>{var n=e(7854),o=e(614),i=e(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},9483:(t,r,e)=>{var n=e(7854),o=e(4411),i=e(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a constructor")}},6077:(t,r,e)=>{var n=e(7854),o=e(614),i=n.String,a=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw a("Can't set "+i(t)+" as a prototype")}},5787:(t,r,e)=>{var n=e(7854),o=e(7976),i=n.TypeError;t.exports=function(t,r){if(o(r,t))return t;throw i("Incorrect invocation")}},9670:(t,r,e)=>{var n=e(7854),o=e(111),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1318:(t,r,e)=>{var n=e(5656),o=e(1400),i=e(6244),a=function(t){return function(r,e,a){var c,u=n(r),s=i(u),f=o(a,s);if(t&&e!=e){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},206:(t,r,e)=>{var n=e(1702);t.exports=n([].slice)},7072:(t,r,e)=>{var n=e(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:(t,r,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,r,e)=>{var n=e(7854),o=e(1694),i=e(614),a=e(4326),c=e(5112)("toStringTag"),u=n.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=u(t),c))?e:s?a(r):"Object"==(n=a(r))&&i(r.callee)?"Arguments":n}},9920:(t,r,e)=>{var n=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,r,e){for(var c=o(r),u=a.f,s=i.f,f=0;f<c.length;f++){var p=c[f];n(t,p)||e&&n(e,p)||u(t,p,s(r,p))}}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},7871:t=>{t.exports="object"==typeof window&&"object"!=typeof Deno},1528:(t,r,e)=>{var n=e(8113),o=e(7854);t.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==o.Pebble},6833:(t,r,e)=>{var n=e(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},5268:(t,r,e)=>{var n=e(4326),o=e(7854);t.exports="process"==n(o.process)},1036:(t,r,e)=>{var n=e(8113);t.exports=/web0s(?!.*chrome)/i.test(n)},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),a=e(8113),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(1320),c=e(3505),u=e(9920),s=e(4705);t.exports=function(t,r){var e,f,p,l,v,h=t.target,y=t.global,d=t.stat;if(e=y?n:d?n[h]||c(h,{}):(n[h]||{}).prototype)for(f in r){if(l=r[f],p=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(y?f:h+(d?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;u(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(e,f,l,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:(t,r,e)=>{var n=e(1702),o=e(9662),i=e(4374),a=n(n.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?a(t,r):function(){return t.apply(r,arguments)}}},4374:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,r,e)=>{var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,r,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},1702:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.bind,a=o.call,c=n&&i.bind(a,a);t.exports=n?function(t){return t&&c(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},1246:(t,r,e)=>{var n=e(648),o=e(8173),i=e(7497),a=e(5112)("iterator");t.exports=function(t){if(null!=t)return o(t,a)||o(t,"@@iterator")||i[n(t)]}},8554:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(9662),a=e(9670),c=e(6330),u=e(1246),s=n.TypeError;t.exports=function(t,r){var e=arguments.length<2?u(t):r;if(i(e))return a(o(e,t));throw s(c(t)+" is not iterable")}},8173:(t,r,e)=>{var n=e(9662);t.exports=function(t,r){var e=t[r];return null==e?void 0:n(e)}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(t,r,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:t=>{t.exports={}},842:(t,r,e)=>{var n=e(7854);t.exports=function(t,r){var e=n.console;e&&e.error&&(1==arguments.length?e.error(t):e.error(t,r))}},490:(t,r,e)=>{var n=e(5005);t.exports=n("document","documentElement")},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(7854),o=e(1702),i=e(7293),a=e(4326),c=n.Object,u=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):c(t)}:c},2788:(t,r,e)=>{var n=e(1702),o=e(614),i=e(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,r,e)=>{var n,o,i,a=e(8536),c=e(7854),u=e(1702),s=e(111),f=e(8880),p=e(2597),l=e(5465),v=e(6200),h=e(3501),y="Object already initialized",d=c.TypeError,m=c.WeakMap;if(a||l.state){var g=l.state||(l.state=new m),x=u(g.get),b=u(g.has),w=u(g.set);n=function(t,r){if(b(g,t))throw new d(y);return r.facade=t,w(g,t,r),r},o=function(t){return x(g,t)||{}},i=function(t){return b(g,t)}}else{var j=v("state");h[j]=!0,n=function(t,r){if(p(t,j))throw new d(y);return r.facade=t,f(t,j,r),r},o=function(t){return p(t,j)?t[j]:{}},i=function(t){return p(t,j)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!s(r)||(e=o(r)).type!==t)throw d("Incompatible receiver, "+t+" required");return e}}}},7659:(t,r,e)=>{var n=e(5112),o=e(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(614),a=e(648),c=e(5005),u=e(2788),s=function(){},f=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),h=!l.exec(s),y=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},d=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return h||!!v(l,u(t))}catch(t){return!0}};d.sham=!0,t.exports=!p||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?d:y},4705:(t,r,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,r){var e=u[c(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:(t,r,e)=>{var n=e(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(7854),o=e(5005),i=e(614),a=e(7976),c=e(3307),u=n.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&a(r.prototype,u(t))}},408:(t,r,e)=>{var n=e(7854),o=e(9974),i=e(6916),a=e(9670),c=e(6330),u=e(7659),s=e(6244),f=e(7976),p=e(8554),l=e(1246),v=e(9212),h=n.TypeError,y=function(t,r){this.stopped=t,this.result=r},d=y.prototype;t.exports=function(t,r,e){var n,m,g,x,b,w,j,O=e&&e.that,S=!(!e||!e.AS_ENTRIES),E=!(!e||!e.IS_ITERATOR),T=!(!e||!e.INTERRUPTED),P=o(r,O),_=function(t){return n&&v(n,"normal",t),new y(!0,t)},L=function(t){return S?(a(t),T?P(t[0],t[1],_):P(t[0],t[1])):T?P(t,_):P(t)};if(E)n=t;else{if(!(m=l(t)))throw h(c(t)+" is not iterable");if(u(m)){for(g=0,x=s(t);x>g;g++)if((b=L(t[g]))&&f(d,b))return b;return new y(!1)}n=p(t,m)}for(w=n.next;!(j=i(w,n)).done;){try{b=L(j.value)}catch(t){v(n,"throw",t)}if("object"==typeof b&&b&&f(d,b))return b}return new y(!1)}},9212:(t,r,e)=>{var n=e(6916),o=e(9670),i=e(8173);t.exports=function(t,r,e){var a,c;o(t);try{if(!(a=i(t,"return"))){if("throw"===r)throw e;return e}a=n(a,t)}catch(t){c=!0,a=t}if("throw"===r)throw e;if(c)throw a;return o(a),e}},7497:t=>{t.exports={}},6244:(t,r,e)=>{var n=e(7466);t.exports=function(t){return n(t.length)}},5948:(t,r,e)=>{var n,o,i,a,c,u,s,f,p=e(7854),l=e(9974),v=e(1236).f,h=e(261).set,y=e(6833),d=e(1528),m=e(1036),g=e(5268),x=p.MutationObserver||p.WebKitMutationObserver,b=p.document,w=p.process,j=p.Promise,O=v(p,"queueMicrotask"),S=O&&O.value;S||(n=function(){var t,r;for(g&&(t=w.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},y||g||m||!x||!b?!d&&j&&j.resolve?((s=j.resolve(void 0)).constructor=j,f=l(s.then,s),a=function(){f(n)}):g?a=function(){w.nextTick(n)}:(h=l(h,p),a=function(){h(n)}):(c=!0,u=b.createTextNode(""),new x(n).observe(u,{characterData:!0}),a=function(){u.data=c=!c})),t.exports=S||function(t){var r={fn:t,next:void 0};i&&(i.next=r),o||(o=r,a()),i=r}},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(614),i=e(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},8523:(t,r,e)=>{"use strict";var n=e(9662),o=function(t){var r,e;this.promise=new t((function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n})),this.resolve=n(r),this.reject=n(e)};t.exports.f=function(t){return new o(t)}},3070:(t,r,e)=>{var n=e(7854),o=e(9781),i=e(4664),a=e(3353),c=e(9670),u=e(4948),s=n.TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor;r.f=o?a?function(t,r,e){if(c(t),r=u(r),c(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=p(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return f(t,r,e)}:f:function(t,r,e){if(c(t),r=u(r),c(e),i)try{return f(t,r,e)}catch(t){}if("get"in e||"set"in e)throw s("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(6916),i=e(5296),a=e(9114),c=e(5656),u=e(4948),s=e(2597),f=e(4664),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=c(t),r=u(r),f)try{return p(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},7976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},6324:(t,r,e)=>{var n=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,c=e(3501),u=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(c,e)&&o(n,e)&&u(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||u(f,e));return f}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},7674:(t,r,e)=>{var n=e(1702),o=e(9670),i=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},288:(t,r,e)=>{"use strict";var n=e(1694),o=e(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(614),a=e(111),c=n.TypeError;t.exports=function(t,r){var e,n;if("string"===r&&i(e=t.toString)&&!a(n=o(e,t)))return n;if(i(e=t.valueOf)&&!a(n=o(e,t)))return n;if("string"!==r&&i(e=t.toString)&&!a(n=o(e,t)))return n;throw c("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(1702),i=e(8006),a=e(5181),c=e(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(c(t)),e=a.f;return e?u(r,e(t)):r}},2534:t=>{t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},3702:(t,r,e)=>{var n=e(7854),o=e(2492),i=e(614),a=e(4705),c=e(2788),u=e(5112),s=e(7871),f=e(1913),p=e(7392),l=o&&o.prototype,v=u("species"),h=!1,y=i(n.PromiseRejectionEvent),d=a("Promise",(function(){var t=c(o),r=t!==String(o);if(!r&&66===p)return!0;if(f&&(!l.catch||!l.finally))return!0;if(p>=51&&/native code/.test(t))return!1;var e=new o((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[v]=n,!(h=e.then((function(){}))instanceof n)||!r&&s&&!y}));t.exports={CONSTRUCTOR:d,REJECTION_EVENT:y,SUBCLASSING:h}},2492:(t,r,e)=>{var n=e(7854);t.exports=n.Promise},9478:(t,r,e)=>{var n=e(9670),o=e(111),i=e(8523);t.exports=function(t,r){if(n(t),o(r)&&r.constructor===t)return r;var e=i.f(t);return(0,e.resolve)(r),e.promise}},612:(t,r,e)=>{var n=e(2492),o=e(7072),i=e(3702).CONSTRUCTOR;t.exports=i||!o((function(t){n.all(t).then(void 0,(function(){}))}))},8572:t=>{var r=function(){this.head=null,this.tail=null};r.prototype={add:function(t){var r={item:t,next:null};this.head?this.tail.next=r:this.head=r,this.tail=r},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=r},2248:(t,r,e)=>{var n=e(1320);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},1320:(t,r,e)=>{var n=e(7854),o=e(614),i=e(2597),a=e(8880),c=e(3505),u=e(2788),s=e(9909),f=e(6530).CONFIGURABLE,p=s.get,l=s.enforce,v=String(String).split("String");(t.exports=function(t,r,e,u){var s,p=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,y=!!u&&!!u.noTargetGet,d=u&&void 0!==u.name?u.name:r;o(e)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==d)&&a(e,"name",d),(s=l(e)).source||(s.source=v.join("string"==typeof d?d:""))),t!==n?(p?!y&&t[r]&&(h=!0):delete t[r],h?t[r]=e:a(t,r,e)):h?t[r]=e:c(r,e)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||u(this)}))},4488:(t,r,e)=>{var n=e(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},7152:(t,r,e)=>{var n=e(7854),o=e(2104),i=e(614),a=e(8113),c=e(206),u=e(8053),s=/MSIE .\./.test(a),f=n.Function,p=function(t){return s?function(r,e){var n=u(arguments.length,1)>2,a=i(r)?r:f(r),s=n?c(arguments,2):void 0;return t(n?function(){o(a,this,s)}:a,e)}:t};t.exports={setTimeout:p(n.setTimeout),setInterval:p(n.setInterval)}},3505:(t,r,e)=>{var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},6340:(t,r,e)=>{"use strict";var n=e(5005),o=e(3070),i=e(5112),a=e(9781),c=i("species");t.exports=function(t){var r=n(t),e=o.f;a&&r&&!r[c]&&e(r,c,{configurable:!0,get:function(){return this}})}},8003:(t,r,e)=>{var n=e(3070).f,o=e(2597),i=e(5112)("toStringTag");t.exports=function(t,r,e){t&&!e&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:r})}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.22.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:(t,r,e)=>{var n=e(9670),o=e(9483),i=e(5112)("species");t.exports=function(t,r){var e,a=n(t).constructor;return void 0===a||null==(e=n(a)[i])?r:o(e)}},261:(t,r,e)=>{var n,o,i,a,c=e(7854),u=e(2104),s=e(9974),f=e(614),p=e(2597),l=e(7293),v=e(490),h=e(206),y=e(317),d=e(8053),m=e(6833),g=e(5268),x=c.setImmediate,b=c.clearImmediate,w=c.process,j=c.Dispatch,O=c.Function,S=c.MessageChannel,E=c.String,T=0,P={};try{n=c.location}catch(t){}var _=function(t){if(p(P,t)){var r=P[t];delete P[t],r()}},L=function(t){return function(){_(t)}},C=function(t){_(t.data)},R=function(t){c.postMessage(E(t),n.protocol+"//"+n.host)};x&&b||(x=function(t){d(arguments.length,1);var r=f(t)?t:O(t),e=h(arguments,1);return P[++T]=function(){u(r,void 0,e)},o(T),T},b=function(t){delete P[t]},g?o=function(t){w.nextTick(L(t))}:j&&j.now?o=function(t){j.now(L(t))}:S&&!m?(a=(i=new S).port2,i.port1.onmessage=C,o=s(a.postMessage,a)):c.addEventListener&&f(c.postMessage)&&!c.importScripts&&n&&"file:"!==n.protocol&&!l(R)?(o=R,c.addEventListener("message",C,!1)):o="onreadystatechange"in y("script")?function(t){v.appendChild(y("script")).onreadystatechange=function(){v.removeChild(this),_(t)}}:function(t){setTimeout(L(t),0)}),t.exports={set:x,clear:b}},1400:(t,r,e)=>{var n=e(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?e:r)(n)}},7466:(t,r,e)=>{var n=e(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(7854),o=e(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(111),a=e(2190),c=e(8173),u=e(2140),s=e(5112),f=n.TypeError,p=s("toPrimitive");t.exports=function(t,r){if(!i(t)||a(t))return t;var e,n=c(t,p);if(n){if(void 0===r&&(r="default"),e=o(n,t,r),!i(e)||a(e))return e;throw f("Can't convert object to primitive value")}return void 0===r&&(r="number"),u(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:(t,r,e)=>{var n=e(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:(t,r,e)=>{var n=e(7854).TypeError;t.exports=function(t,r){if(t<r)throw n("Not enough arguments");return t}},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(2597),a=e(9711),c=e(133),u=e(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var r="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=u&&p?p(r):l(r)}return s[t]}},3710:(t,r,e)=>{var n=e(1702),o=e(1320),i=Date.prototype,a="Invalid Date",c=n(i.toString),u=n(i.getTime);String(new Date(NaN))!=a&&o(i,"toString",(function(){var t=u(this);return t==t?c(this):a}))},1539:(t,r,e)=>{var n=e(1694),o=e(1320),i=e(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},821:(t,r,e)=>{"use strict";var n=e(2109),o=e(6916),i=e(9662),a=e(8523),c=e(2534),u=e(408);n({target:"Promise",stat:!0,forced:e(612)},{all:function(t){var r=this,e=a.f(r),n=e.resolve,s=e.reject,f=c((function(){var e=i(r.resolve),a=[],c=0,f=1;u(t,(function(t){var i=c++,u=!1;f++,o(e,r,t).then((function(t){u||(u=!0,a[i]=t,--f||n(a))}),s)})),--f||n(a)}));return f.error&&s(f.value),e.promise}})},4164:(t,r,e)=>{"use strict";var n=e(2109),o=e(1913),i=e(3702).CONSTRUCTOR,a=e(2492),c=e(5005),u=e(614),s=e(1320),f=a&&a.prototype;if(n({target:"Promise",proto:!0,forced:i,real:!0},{catch:function(t){return this.then(void 0,t)}}),!o&&u(a)){var p=c("Promise").prototype.catch;f.catch!==p&&s(f,"catch",p,{unsafe:!0})}},3401:(t,r,e)=>{"use strict";var n,o,i,a=e(2109),c=e(1913),u=e(5268),s=e(7854),f=e(6916),p=e(1320),l=e(2248),v=e(7674),h=e(8003),y=e(6340),d=e(9662),m=e(614),g=e(111),x=e(5787),b=e(6707),w=e(261).set,j=e(5948),O=e(842),S=e(2534),E=e(8572),T=e(9909),P=e(2492),_=e(3702),L=e(8523),C="Promise",R=_.CONSTRUCTOR,N=_.REJECTION_EVENT,I=_.SUBCLASSING,k=T.getterFor(C),F=T.set,M=P&&P.prototype,A=P,D=M,G=s.TypeError,U=s.document,q=s.process,z=L.f,B=z,V=!!(U&&U.createEvent&&s.dispatchEvent),W="unhandledrejection",Y=function(t){var r;return!(!g(t)||!m(r=t.then))&&r},H=function(t,r){var e,n,o,i=r.value,a=1==r.state,c=a?t.ok:t.fail,u=t.resolve,s=t.reject,p=t.domain;try{c?(a||(2===r.rejection&&Q(r),r.rejection=1),!0===c?e=i:(p&&p.enter(),e=c(i),p&&(p.exit(),o=!0)),e===t.promise?s(G("Promise-chain cycle")):(n=Y(e))?f(n,e,u,s):u(e)):s(i)}catch(t){p&&!o&&p.exit(),s(t)}},J=function(t,r){t.notified||(t.notified=!0,j((function(){for(var e,n=t.reactions;e=n.get();)H(e,t);t.notified=!1,r&&!t.rejection&&X(t)})))},K=function(t,r,e){var n,o;V?((n=U.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),s.dispatchEvent(n)):n={promise:r,reason:e},!N&&(o=s["on"+t])?o(n):t===W&&O("Unhandled promise rejection",e)},X=function(t){f(w,s,(function(){var r,e=t.facade,n=t.value;if($(t)&&(r=S((function(){u?q.emit("unhandledRejection",n,e):K(W,e,n)})),t.rejection=u||$(t)?2:1,r.error))throw r.value}))},$=function(t){return 1!==t.rejection&&!t.parent},Q=function(t){f(w,s,(function(){var r=t.facade;u?q.emit("rejectionHandled",r):K("rejectionhandled",r,t.value)}))},Z=function(t,r,e){return function(n){t(r,n,e)}},tt=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,J(t,!0))},rt=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw G("Promise can't be resolved itself");var n=Y(r);n?j((function(){var e={done:!1};try{f(n,r,Z(rt,e,t),Z(tt,e,t))}catch(r){tt(e,r,t)}})):(t.value=r,t.state=1,J(t,!1))}catch(r){tt({done:!1},r,t)}}};if(R&&(D=(A=function(t){x(this,D),d(t),f(n,this);var r=k(this);try{t(Z(rt,r),Z(tt,r))}catch(t){tt(r,t)}}).prototype,(n=function(t){F(this,{type:C,done:!1,notified:!1,parent:!1,reactions:new E,rejection:!1,state:0,value:void 0})}).prototype=l(D,{then:function(t,r){var e=k(this),n=z(b(this,A));return e.parent=!0,n.ok=!m(t)||t,n.fail=m(r)&&r,n.domain=u?q.domain:void 0,0==e.state?e.reactions.add(n):j((function(){H(n,e)})),n.promise}}),o=function(){var t=new n,r=k(t);this.promise=t,this.resolve=Z(rt,r),this.reject=Z(tt,r)},L.f=z=function(t){return t===A||void 0===t?new o(t):B(t)},!c&&m(P)&&M!==Object.prototype)){i=M.then,I||p(M,"then",(function(t,r){var e=this;return new A((function(t,r){f(i,e,t,r)})).then(t,r)}),{unsafe:!0});try{delete M.constructor}catch(t){}v&&v(M,D)}a({global:!0,wrap:!0,forced:R},{Promise:A}),h(A,C,!1,!0),y(C)},8674:(t,r,e)=>{e(3401),e(821),e(4164),e(6027),e(683),e(6294)},6027:(t,r,e)=>{"use strict";var n=e(2109),o=e(6916),i=e(9662),a=e(8523),c=e(2534),u=e(408);n({target:"Promise",stat:!0,forced:e(612)},{race:function(t){var r=this,e=a.f(r),n=e.reject,s=c((function(){var a=i(r.resolve);u(t,(function(t){o(a,r,t).then(e.resolve,n)}))}));return s.error&&n(s.value),e.promise}})},683:(t,r,e)=>{"use strict";var n=e(2109),o=e(6916),i=e(8523);n({target:"Promise",stat:!0,forced:e(3702).CONSTRUCTOR},{reject:function(t){var r=i.f(this);return o(r.reject,void 0,t),r.promise}})},6294:(t,r,e)=>{"use strict";var n=e(2109),o=e(5005),i=e(1913),a=e(2492),c=e(3702).CONSTRUCTOR,u=e(9478),s=o("Promise"),f=i&&!c;n({target:"Promise",stat:!0,forced:i||c},{resolve:function(t){return u(f&&this===s?a:this,t)}})},6815:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152).setInterval;n({global:!0,bind:!0,forced:o.setInterval!==i},{setInterval:i})},8417:(t,r,e)=>{var n=e(2109),o=e(7854),i=e(7152).setTimeout;n({global:!0,bind:!0,forced:o.setTimeout!==i},{setTimeout:i})},2564:(t,r,e)=>{e(6815),e(8417)},5666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n=p;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return C()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===p)throw n=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=v;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?h:l,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=h,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",l="suspendedYield",v="executing",h="completed",y={};function d(){}function m(){}function g(){}var x={};u(x,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(L([])));w&&w!==e&&n.call(w,i)&&(x=w);var j=g.prototype=d.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:r,done:!0}}return m.prototype=g,u(j,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new S(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(j),u(j,c,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";e(3710),e(2564);function t(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function r(r){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=r.apply(e,n);function c(r){t(a,o,i,c,u,"next",r)}function u(r){t(a,o,i,c,u,"throw",r)}c(void 0)}))}}e(5666),e(1539),e(8674);window.addEventListener("DOMContentLoaded",(function(){(function(){var t=document.querySelector(".date__hours div"),r=document.querySelector(".date__minutes div"),e=document.querySelector(".date__seconds div ");function n(t){return t<10?"0".concat(t):t}setInterval((function(){var o=new Date;t.textContent=n(o.getHours()),r.textContent=n(o.getMinutes()),e.textContent=n(o.getSeconds())}),1e3)})(),function(){var t=document.querySelector(".quote__statement"),e=document.querySelector(".quote__author"),n=document.querySelector(".quote__button");function o(){return(o=r(regeneratorRuntime.mark((function t(){var r,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://type.fit/api/quotes");case 2:return r=t.sent,t.next=5,r.json();case 5:e=t.sent,i(e),n.addEventListener("click",(function(){i(e)}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var i=function(r){var n=Math.floor(Math.random()*r.length);t.textContent=r[n].text,e.textContent=r[n].author};!function(){o.apply(this,arguments)}()}()}))})()})();
//# sourceMappingURL=bundle.js.map