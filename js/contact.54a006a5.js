(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"159b":function(t,e,n){var c=n("da84"),a=n("fdbc"),r=n("785a"),o=n("17c2"),s=n("9112"),i=function(t){if(t&&t.forEach!==o)try{s(t,"forEach",o)}catch(e){t.forEach=o}};for(var l in a)a[l]&&i(c[l]&&c[l].prototype);i(r)},"17c2":function(t,e,n){"use strict";var c=n("b727").forEach,a=n("a640"),r=a("forEach");t.exports=r?[].forEach:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var c=n("d039"),a=n("b622"),r=n("2d00"),o=a("species");t.exports=function(t){return r>=51||!c((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3bfd":function(t,e,n){},"4de4":function(t,e,n){"use strict";var c=n("23e7"),a=n("b727").filter,r=n("1dde"),o=r("filter");c({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"535b":function(t,e,n){"use strict";n("db1c")},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},7912:function(t,e,n){},a449:function(t,e,n){},a640:function(t,e,n){"use strict";var c=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&c((function(){n.call(null,e||function(){throw 1},1)}))}},b412:function(t,e,n){"use strict";n("3bfd")},b64b:function(t,e,n){var c=n("23e7"),a=n("7b0b"),r=n("df75"),o=n("d039"),s=o((function(){r(1)}));c({target:"Object",stat:!0,forced:s},{keys:function(t){return r(a(t))}})},b8fa:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact page container-body"},[n("div",{staticClass:"columns"},[n("contact-form"),n("contact-info",{attrs:{number:t.phone}})],1)])},a=[],r=n("5530"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-form column is-5"},[n("h2",{staticClass:"title"},[t._v("Contact Us")]),n("div",{staticClass:"is-mobile"},[n("contact-number",{attrs:{number:"1-500-445",center:""}}),n("p",{staticClass:"fill-form"},[t._v("Or kindly fill out this form, we'll get back to you as quickly as possible")])],1),t._m(0),n("button",{staticClass:"button-send button is-primary is-fullwidth"},[t._v("Send")])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Name")]),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"text"}})])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("E-mail")]),n("div",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:"email"}})])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Message")]),n("div",{staticClass:"control"},[n("textarea",{staticClass:"textarea"})])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-number",style:{justifyContent:t.center?"center":"initial"}},[n("div",{staticClass:"contact-icon"},[n("font-awesome-icon",{attrs:{icon:"comments"}})],1),n("div",{staticClass:"contact-phone"},[n("b",[t._v(t._s(t.number))])])])},l=[],u={name:"ContactNumber",props:{number:{type:String,default:""},center:{type:Boolean,default:!1}}},f=u,b=(n("bde0"),n("2877")),p=Object(b["a"])(f,i,l,!1,null,null,null),d=p.exports,m={name:"ContactForm",components:{ContactNumber:d}},v=m,C=(n("b412"),Object(b["a"])(v,o,s,!1,null,null,null)),h=C.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-info column is-7"},[n("customer-support",{attrs:{number:t.number}}),n("contact-social")],1)},O=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-social"},[n("h2",{staticClass:"title"},[t._v("Social Media")]),n("p",[t._v("Feel free to contact us at one of our social media outlets below")]),n("div",{staticClass:"socials"},[n("social-media",{attrs:{size:"30px",margin:"1.5rem"}})],1)])},g=[],j=n("48c3"),w={name:"ContactSocial",components:{SocialMedia:j["a"]}},E=w,x=(n("f397"),Object(b["a"])(E,_,g,!1,null,null,null)),S=x.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer-support"},[n("h2",{staticClass:"title"},[t._v("Customer Support")]),n("contact-number",{attrs:{number:t.number}}),t._m(0)],1)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"contact-description"},[t._v(" Contact our customer support or email us at "),n("a",{staticClass:"email",attrs:{href:"mailto:help@dana.id"}},[n("b",[t._v("help@dana.id")])]),t._v(" if you need help ")])}],k={name:"CustomerSupport",components:{ContactNumber:d},props:{number:{type:String,default:""}}},D=k,N=(n("d627"),Object(b["a"])(D,P,$,!1,null,null,null)),F=N.exports,M={name:"ContactInfo",components:{CustomerSupport:F,ContactSocial:S},props:{number:{type:String,default:""}}},B=M,I=(n("535b"),Object(b["a"])(B,y,O,!1,null,null,null)),J=I.exports,q=n("2f62"),z={name:"Contact",components:{ContactForm:h,ContactInfo:J},computed:Object(r["a"])({},Object(q["b"])(["phone"]))},A=z,U=Object(b["a"])(A,c,a,!1,null,null,null);e["default"]=U.exports},bde0:function(t,e,n){"use strict";n("c950")},c950:function(t,e,n){},d627:function(t,e,n){"use strict";n("7912")},db1c:function(t,e,n){},dbb4:function(t,e,n){var c=n("23e7"),a=n("83ab"),r=n("56ef"),o=n("fc6a"),s=n("06cf"),i=n("8418");c({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,c=o(t),a=s.f,l=r(c),u={},f=0;while(l.length>f)n=a(c,e=l[f++]),void 0!==n&&i(u,e,n);return u}})},e439:function(t,e,n){var c=n("23e7"),a=n("d039"),r=n("fc6a"),o=n("06cf").f,s=n("83ab"),i=a((function(){o(1)})),l=!s||i;c({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(r(t),e)}})},f397:function(t,e,n){"use strict";n("a449")}}]);
//# sourceMappingURL=contact.54a006a5.js.map