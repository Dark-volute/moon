(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(t,e,s){"use strict";var r=s(3),a=s(12),n=s(16),o=s(65),c=s(63),i=s(6),u=s(89).f,l=s(88).f,m=s(8).f,p=s(165).trim,f=r.Number,g=f,v=f.prototype,_="Number"==n(s(64)(v)),d="trim"in String.prototype,h=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var s,r,a,n=(e=d?e.trim():p(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(s=e.charCodeAt(2))||120===s)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,i=e.slice(2),u=0,l=i.length;u<l;u++)if((o=i.charCodeAt(u))<48||o>a)return NaN;return parseInt(i,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof f&&(_?i(function(){v.valueOf.call(s)}):"Number"!=n(s))?o(new g(h(e)),s,f):h(e)};for(var b,N=s(7)?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;N.length>y;y++)a(g,b=N[y])&&!a(f,b)&&m(f,b,l(g,b));f.prototype=v,v.constructor=f,s(10)(r,"Number",f)}},165:function(t,e,s){var r=s(9),a=s(17),n=s(6),o=s(166),c="["+o+"]",i=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),l=function(t,e,s){var a={},c=n(function(){return!!o[t]()||"​"!="​"[t]()}),i=a[t]=c?e(m):o[t];s&&(a[s]=i),r(r.P+r.F*c,"String",a)},m=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(i,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},166:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},167:function(t,e,s){},172:function(t,e,s){"use strict";var r=s(167);s.n(r).a},180:function(t,e,s){"use strict";s.r(e);s(161);var r={name:"mRow",componentName:"mRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-".concat(this.gutter/2,"px"),t.marginRight=t.marginLeft),t}},render:function(t){return t(this.tag,{class:["m-row","start"!==this.justify?"is-justify-".concat(this.justify):"","top"!==this.align?"is-align-".concat(this.align):"",{"m-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)}},a=(s(19),s(22),s(83)),n=(s(14),{name:"layout-demo",components:{mRow:r,mCol:{name:"mCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},offset:Number,pull:Number,push:Number,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object]},computed:{gutter:function(){for(var t=this.$parent;t&&"mRow"!==t.$options.componentName;)t=t.$parent;return t?t.gutter:0}},render:function(t){var e=this,s=[],r={};return this.gutter&&(r.paddingLeft=this.gutter/2+"px",r.paddingRight=r.paddingLeft),["span","offset","pull","push"].forEach(function(t){(e[t]||0===e[t])&&s.push("span"!==t?"m-col-".concat(t,"-").concat(e[t]):"m-col-".concat(e[t]))}),["xs","sm","md","lg","xl"].forEach(function(t){if("number"==typeof e[t])s.push("m-col-".concat(t,"-").concat(e[t]));else if("object"===Object(a.a)(e[t])){var r=e[t];Object.keys(r).forEach(function(e){s.push("span"!==e?"m-col-".concat(t,"-").concat(e,"-").concat(r[e]):"m-col-".concat(t,"-").concat(r[e]))})}}),t(this.tag,{class:["m-col",s],style:r},this.$slots.default)}}}}),o=(s(172),s(0)),c=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("m-row",[s("m-col",{attrs:{span:6}},[t._v("1")]),t._v(" "),s("m-col",{attrs:{span:6}},[t._v("2")]),t._v(" "),s("m-col",{attrs:{span:6}},[t._v("3")]),t._v(" "),s("m-col",{attrs:{span:6}},[t._v("4")])],1),t._v(" "),s("m-row",{attrs:{type:"flex"}},[s("m-col",{attrs:{span:4}},[t._v("1")]),t._v(" "),s("m-col",{attrs:{span:20}},[t._v("2")])],1),t._v(" "),s("m-row",{attrs:{type:"flex",justify:"center"}},[s("m-col",{attrs:{span:4}},[t._v("1")]),t._v(" "),s("m-col",{attrs:{span:4}},[t._v("2")])],1),t._v(" "),s("m-row",{staticClass:"gutter",attrs:{gutter:16}},[s("m-col",{attrs:{span:6}},[s("div",{staticClass:"gutter-bg"},[t._v("1")])]),t._v(" "),s("m-col",{attrs:{span:6}},[s("div",{staticClass:"gutter-bg"},[t._v("2")])]),t._v(" "),s("m-col",{attrs:{span:6}},[s("div",{staticClass:"gutter-bg"},[t._v("3")])]),t._v(" "),s("m-col",{attrs:{span:6}},[s("div",{staticClass:"gutter-bg"},[t._v("4")])])],1),t._v(" "),s("m-row",[s("m-col",{attrs:{span:6}},[t._v("1")]),t._v(" "),s("m-col",{attrs:{span:6,offset:12}},[t._v("2")])],1),t._v(" "),s("m-row",{staticClass:"gutter",attrs:{gutter:10}},[s("m-col",{attrs:{xs:8,sm:6,md:4,lg:3,xl:1}},[s("div",{staticClass:"gutter-bg"},[t._v("1")])]),t._v(" "),s("m-col",{attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[s("div",{staticClass:"gutter-bg"},[t._v("2")])]),t._v(" "),s("m-col",{attrs:{xs:4,sm:6,md:8,lg:9,xl:11}},[s("div",{staticClass:"gutter-bg"},[t._v("3")])]),t._v(" "),s("m-col",{attrs:{xs:8,sm:6,md:4,lg:3,xl:1}},[s("div",{staticClass:"gutter-bg"},[t._v("4")])])],1)],1)},[],!1,null,null,null);c.options.__file="layout-demo.vue";e.default=c.exports}}]);