(window.webpackJsonp=window.webpackJsonp||[]).push([[100,6],{1e3:function(t,e,r){var n=r(110)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(0.25, 0.8, 0.5, 1);flex:1 0 0px}",""]),t.exports=n},1002:function(t,e,r){"use strict";var n=r(93),o=(r(558),r(296),r(566),r(229),r(225),r(997),r(963)),c=(r(999),r(924)),l=r(428),d=r(82),h=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(d.r)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),f=r(429),v=r(886),m=r(140),x="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(h,f.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!x||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(d.r)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:x?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},1022:function(t,e,r){t.exports=r.p+"img/building.37f4ec1.png"},1023:function(t,e,r){t.exports=r.p+"img/electronics.23f7f1c.png"},1024:function(t,e,r){t.exports=r.p+"img/mechanical.64d5058.png"},1025:function(t,e,r){t.exports=r.p+"img/movingbuilding.60db47f.gif"},1026:function(t,e,r){t.exports=r.p+"img/movingbuilding.1fe8bad.png"},1027:function(t,e,r){t.exports=r.p+"img/occupancy.a4fe129.png"},1028:function(t,e,r){t.exports=r.p+"img/sign.105a17c.png"},1029:function(t,e,r){t.exports=r.p+"img/infosoft-logo.c99b2fd.png"},1030:function(t,e,r){t.exports=r.p+"img/davaolifeishere.fd139a8.png"},1031:function(t,e,r){t.exports=r.p+"img/davao.af1ea93.png"},1032:function(t,e,r){t.exports=r.p+"img/no-bg-logo.740efaf.png"},1034:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(929),o=r(428);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o.a)(Object(n.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},1038:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},1100:function(t,e,r){"use strict";r.r(e);var n=r(1041),o=r(1002),c={mixins:[r(962).a],props:{fontStyle:String},computed:{heightClass:function(){return this.$vuetify.breakpoint.lgAndUp?"150px":"100px"},titleClass:function(){return this.$vuetify.breakpoint.lgAndUp?"title":"subtitle-1"}}},l=r(226),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{xs12:""}},[e(o.a,{attrs:{width:"100%",height:t.heightClass,contain:"",alt:"OCBO",src:t.no_bg_logo}}),t._v(" "),e("p",{staticClass:"mb-12 mt-3 font-weight-medium text-center",class:t.titleClass,style:t.fontStyle},[t._v("Office of the City Building Official")])],1)}),[],!1,null,null,null);e.default=component.exports},1141:function(t,e,r){var content=r(1142);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(129).default)("e44ee292",content,!0,{sourceMap:!1})},1142:function(t,e,r){var n=r(110)(!1);n.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:24px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto !important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.v-footer:not([data-booted=true]){transition:none !important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0px}",""]),t.exports=n},1145:function(t,e,r){"use strict";r.r(e);var n=r(1041),o=(r(103),r(88),r(87),r(40),r(127),r(92),r(128),r(42)),c=(r(558),r(968),r(1141),r(934)),l=r(1034),d=r(971),h=r(428),f=r(82);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=Object(h.a)(c.a,Object(l.a)("footer",["height","inset"]),d.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return m(m({},c.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return m(m({},c.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(f.h)(t),left:Object(f.h)(this.computedLeft),right:Object(f.h)(this.computedRight),bottom:Object(f.h)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var data=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,data,this.$slots.default)}}),_=r(1002),y=r(1042),O=r(880),S=r(962),j={mixins:[O.a,S.a],props:{colspan:String},methods:{newLink:function(t){window.open(t,"_blank")}}},w=r(226),component=Object(w.a)(j,(function(){var t=this,e=t._self._c;return e(x,{attrs:{absolute:""}},[e(y.a,{staticClass:"text-center",class:t.mobile?"caption":"",attrs:{wrap:"","justify-center":"","align-center":""}},[e(_.a,{staticClass:"ml-2",staticStyle:{"max-width":"30px","max-height":"50px"},attrs:{src:t.citc_logo}}),t._v(" "),e(_.a,{staticClass:"mx-0 px-0",staticStyle:{"max-width":"80px","max-height":"100px"},attrs:{src:t.davaolifeishere_logo}}),t._v(" "),e(n.a,{attrs:{xs12:""}},[t._v("\n      ©  "+t._s((new Date).getFullYear())+"-"+t._s((new Date).getFullYear()+1)+" — "),e("strong",[t._v("Online Infrastructure Permit System")])]),t._v(" "),e("li",{staticClass:"caption"},[t._v("Developed by")]),t._v(" "),e(_.a,{staticClass:"mx-2 pointer",staticStyle:{"max-width":"80px","max-height":"100px"},attrs:{src:t.infosoft_logo},on:{click:function(e){return t.newLink("https://infosoftstudio.com/")}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},1148:function(t,e,r){"use strict";r.r(e);var n=r(1041),o=r(1002),c=r(880),l=r(962),d={mixins:[c.a,l.a],computed:{imgStyle:function(){return this.$vuetify.breakpoint.lgAndUp?"margin-top: 200px":""},isOffline:function(){return this.$nuxt.isOffline},isOnline:function(){return this.$nuxt.isOnline}}},h=r(226),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{xs12:""}},[t.isOnline?e(o.a,{staticStyle:{"background-color":"transparent"},style:t.imgStyle,attrs:{width:"100%",height:"100%",contain:"",alt:"OCBO",src:t.movingbuilding_bg}}):t._e(),t._v(" "),t.isOffline?e(o.a,{staticStyle:{"background-color":"transparent"},style:t.imgStyle,attrs:{width:"100%",height:"100%",contain:"",alt:"OCBO",src:t.movingbuilding_png}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},1150:function(t,e,r){"use strict";r.r(e);var n=r(1101),o=r(1041),c=r(1042),l=r(226),component=Object(l.a)({},(function(){var t=this._self._c;return t(n.a,{staticClass:"primary-bg-color",attrs:{fluid:"","fill-height":""}},[t(c.a,{attrs:{wrap:"","justify-center":"","align-center":""}},[t(o.a,{attrs:{xs12:""}},[t("shared-logo",{attrs:{fontStyle:"color: white"}}),this._v(" "),t("shared-building-logo")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SharedLogo:r(1100).default,SharedBuildingLogo:r(1148).default})},1241:function(t,e,r){"use strict";r.r(e);var n=r(1005),o=r(891),c=r(877),l=r(1101),d=r(1041),h=r(1042),f=r(996),v=(r(103),r(88),r(87),r(40),r(127),r(92),r(128),r(42)),m=r(880),x=r(180),_=r(883);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={mixins:[m.a],data:function(){return{}},computed:O(O({},Object(x.c)("user",["user"])),{},{titleClass:function(){return this.$vuetify.breakpoint.lgAndUp?"subtitle-1 ml-5":"subtitle-2"}}),beforeRouteEnter:function(t,e,r){r((function(t){var e=null;Object(_.isEmpty)(localStorage.vuex)||(e=JSON.parse(localStorage.vuex).user.user),Object(_.isEmpty)(e)?(localStorage.clear(),t.goTo("index")):t.goTo("index-validate")}))}},j=r(226),component=Object(j.a)(S,(function(){var t=this,e=t._self._c;return e("client-only",[e(h.a,{attrs:{wrap:""}},[e(d.a,{attrs:{xs12:"",sm7:"",md8:"",lg9:""}},[e(l.a,{attrs:{fluid:"","fill-height":""}},[e(h.a,{attrs:{wrap:"","justify-center":"","align-center":""}},[t.mobile?e(d.a,{attrs:{xs12:""}},[e("shared-logo")],1):t._e(),t._v(" "),e(d.a,{attrs:{xs12:"",md8:""}},[e(o.a,{staticClass:"px-5",staticStyle:{border:"1px solid #E5E4E4"},attrs:{flat:"",color:"#F0F2F5"}},[e(c.c,[t._v("Email Validation")]),t._v(" "),e(c.b,{staticClass:"mb-12 text-justify",class:t.titleClass},[t._v("We have sent a verification email to "),e("span",{staticClass:"font-weight-bold secondary-text-color"},[t._v(t._s(t.user.email))]),t._v(". Please check your email.")]),t._v(" "),e(c.a,[e(f.a),t._v(" "),e(n.a,{staticClass:"mb-2 px-5 primary-bg-color white--text",attrs:{large:""},on:{click:function(e){return t.goTo("index")}}},[t._v("Continue")])],1)],1)],1),t._v(" "),e(d.a,{attrs:{xs12:""}},[e("shared-footer",{attrs:{colspan:t.mobile?"12":"8"}})],1)],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(d.a,{attrs:{xs12:"",sm5:"",md4:"",lg3:""}},[e("shared-building-logo-card")],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SharedLogo:r(1100).default,SharedFooter:r(1145).default,SharedBuildingLogoCard:r(1150).default})},877:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(891),o=r(82),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),h=Object(o.i)("v-card__title");n.a},880:function(t,e,r){"use strict";r(103),r(88),r(87),r(40),r(127),r(92),r(128);var n,o=r(42),c=(r(111),r(558),r(89),r(228),r(179),r(141),r(225),r(168),r(916),r(149),r(296),r(165),r(180)),l=r(883),d=r(90);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{isMounted:!1}},computed:f(f({},Object(c.c)("user",["user","client_id","app_no"])),{},(n={hasUser:function(){return!Object(l.isEmpty)(this.user)&&this.isToken},userClientId:function(){if(this.user){if(this.user.client)return this.user.client.id;if(this.user.user){if(this.user.user.client)return this.user.user.client.id;var t=JSON.parse(localStorage.vuex).user.user.client;return t?t.id:this.client_id}var e=JSON.parse(localStorage.vuex).user.user.client;return e?e.id:this.client_id}var r=JSON.parse(localStorage.vuex).user.user.client;return r?r.id:this.client_id},userClientContact:function(){if(this.user){if(this.user.client)return this.user.client.contact;if(this.user.user){if(this.user.user.client)return this.user.user.client.contact;var t=JSON.parse(localStorage.vuex).user.user.client;return t?t.contact:""}var e=JSON.parse(localStorage.vuex).user.user.client;return e?e.contact:""}var r=JSON.parse(localStorage.vuex).user.user.client;return r?r.contact:""},isToken:function(){return!!localStorage.getItem("token")},routeName:function(){return this.$nuxt._route.name},roleId:function(){return Number(JSON.parse(localStorage.vuex).user.user.user.role_id)},appNo:function(){return JSON.parse(localStorage.vuex).user.app_no},hasTHeader:function(){return!this.xsMobile},evaluatorRole:function(){return 10===this.roleId?"geodetic":11===this.roleId?"architect":12===this.roleId?"civil":13===this.roleId?"sanitary_plumbing":14===this.roleId?"electrical":15===this.roleId?"electronics":16===this.roleId?"mechanical":""},evaluatorRoleName:function(){return 10===this.roleId?"Geodetic Engr.":11===this.roleId?"Architect":12===this.roleId?"Civil / Structural Engr.":13===this.roleId?"Sanitary Engr.":14===this.roleId?"Electrical Engr.":15===this.roleId?"Electronics Engr.":16===this.roleId?"Mechanical Engr.":""},UserEvaluator:function(){return 10===this.roleId?"LINE and GRADE Evaluation":11===this.roleId?"ARCHITECTURAL/ACCESSIBILITY Evaluation":12===this.roleId?"CIVIL/STRUCTURAL Evaluation":13===this.roleId?"PLUMBING/SANITARY Evaluation":14===this.roleId?"ELECTRICAL Evaluation":15===this.roleId?"ELECTRONICS Evaluation":16===this.roleId?"MECHANICAL Evaluation":18===this.roleId?"FIRE MARSHALL":"BUILDING OFFICIAL Evaluation"},roleName:function(){return Object(l.isUndefined)(this.user)||Object(l.isUndefined)(this.user.user)?"":Object(l.trim)(this.user.role.role)},adminRole:function(){return!Object(l.isUndefined)(this.user)&&(!Object(l.isUndefined)(this.user.user)&&1===Number(this.user.user.role_id))},isBldgDisabled:function(){return!JSON.parse(localStorage.vuex).user.user.client},appName:function(){return this.$nuxt._route.params.name.split("/")[0]},clientId:function(){return 3===this.roleId?this.userClientId:this.client_id}},Object(o.a)(n,"routeName",(function(){return this.$nuxt._route.name.split("-")[2]})),Object(o.a)(n,"paramName",(function(){return Object(l.capitalize)(this.$nuxt._route.params.name)})),Object(o.a)(n,"mobile",(function(){return this.isMounted&&["xs","sm"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(n,"xsMobile",(function(){return this.isMounted&&["xs"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(n,"xlDevice",(function(){return this.isMounted&&["xl"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(n,"lgDevice",(function(){return this.isMounted&&["lg"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(n,"tabDevice",(function(){return this.isMounted&&["sm","md"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(n,"mdAndUpDevices",(function(){return this.isMounted&&["md","lg","xl"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(n,"smAndUpDevices",(function(){return this.isMounted&&["sm","md","lg","xl"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(n,"breakpoint",(function(){return this.isMounted?this.$vuetify.breakpoint:{smAndUp:!0,xsOnly:void 0}})),n)),methods:f(f(f({},Object(c.d)("events",["RESET_EVENT_STATE"])),Object(c.d)("user",["RESET_USER_STATE"])),{},{textIncludes:function(t,text){return Object(l.includes)(text,t)},getActive:function(t,e){return{active:Number(t)===Number(e),"white--text":Number(t)===Number(e),menu:Number(t)===Number(e)}},formatDateTime:function(t){return Object(d.format)(new Date(t),"MMMM D, YYYY")},sortSkipped:function(t,e,r){return Object(l.isEqual)(t,0)?t:t*e-r},newLink:function(t){window.open(t,"_blank")},setFile:function(t){return t?"".concat("https://ocbostaging.poolreno.com/","storage/").concat(t):""},getTopPage:function(){window.scrollTo(0,0)},getBottomPage:function(){window.scrollTo(0,document.body.scrollHeight)},getIndex:function(t,e){return{active:t===e,"primary-text-color":t===e}},getEvalIndex:function(t,e){return{active:t===e,tabEvalColor:t!==e}},getColor:function(t){return"mdi-check"===t?"green":"mdi-clipboard-clock-outline"===t?"orange":"mdi-file-alert"===t?"#EE7302":"mdi-close"},goTo:function(t){this.$router.push({name:t})},Logout:function(){this.RESET_USER_STATE(),this.RESET_EVENT_STATE(),setTimeout((function(){window.localStorage.clear()}),1e3)},wordCount:function(t){return Object(l.isEmpty)(t)&&Object(l.isUndefined)(t)?0:t.toLowerCase().split(" ").length},lastTwoWords:function(t){if(Object(l.isEmpty)(t)&&Object(l.isUndefined)(t))return"";var e=t.replaceAll("_"," ").split(" "),r=e[e.length-1]?this.textCapitalize(e[e.length-1]):"",n=e[e.length-2]?this.textCapitalize(e[e.length-2]):"";return"".concat(n," ").concat(r)},textCapitalize:function(t){if(!t)return"";for(var e=(t=Object(l.capitalize)(t)).split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].slice(1);return e.join(" ")},initialLetter:function(t){if(Object(l.isNull)(t)||Object(l.isUndefined)(t))return"";var e=t.split(" ").map((function(t){return t?t[0].toUpperCase():t})),r=e.join("");if(Object(l.isUndefined)(r)){var n=e.join(" ").replaceAll(" ","");return"".concat(n)}return"".concat(r)}}),mounted:function(){this.isMounted=!0}}},888:function(t,e,r){"use strict";var n=r(32),o=r(957),c=r(130),l=r(150),d=r(206),h=r(366);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e),n=h(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:d(t)),n}})},889:function(t,e,r){r(297)("flat")},891:function(t,e,r){"use strict";r(103),r(88),r(87),r(40),r(127),r(92),r(128);var n=r(42),o=(r(558),r(888),r(889),r(908),r(972)),c=r(912),l=r(898),d=r(428);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},908:function(t,e,r){var content=r(909);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(129).default)("60df2c82",content,!0,{sourceMap:!1})},909:function(t,e,r){var n=r(110)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__text,.theme--light.v-card>.v-card__subtitle{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__text,.theme--dark.v-card>.v-card__subtitle{color:rgba(255,255,255,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>*:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>.v-card__progress+*:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>*:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0px 0px 0px 0px rgba(0,0,0,.2),0px 0px 0px 0px rgba(0,0,0,.14),0px 0px 0px 0px rgba(0,0,0,.12) !important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(0.25, 0.8, 0.25, 1)}.v-sheet.v-card--hover:hover,.v-sheet.v-card--hover:focus{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}.v-card--link{cursor:pointer}.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.2s opacity}.v-card--disabled{pointer-events:none;user-select:none}.v-card--disabled>*:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0px 5px 5px -3px rgba(0,0,0,.2),0px 8px 10px 1px rgba(0,0,0,.14),0px 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},916:function(t,e,r){r(944)},918:function(t,e,r){"use strict";var n=r(32),o=r(561);n({target:"String",proto:!0,forced:r(562)("link")},{link:function(t){return o(this,"a","href",t)}})},936:function(t,e,r){"use strict";var n=r(32),o=r(561);n({target:"String",proto:!0,forced:r(562)("small")},{small:function(){return o(this,"small","","")}})},944:function(t,e,r){"use strict";var n=r(32),o=r(58),c=r(35),l=r(118),d=r(48),h=r(182),f=r(365),v=r(73),m=r(205),x=r(431),_=r(563),y=r(49),O=r(119),S=y("replace"),j=TypeError,w=c("".indexOf),E=c("".replace),k=c("".slice),C=Math.max,I=function(t,e,r){return r>t.length?-1:""===e?r:w(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,c,y,P,A,N,$,z,L=l(this),R=0,T=0,U="";if(!h(t)){if((r=f(t))&&(n=v(l(x(t))),!~w(n,"g")))throw j("`.replaceAll` does not allow non-global regexes");if(c=m(t,S))return o(c,t,L,e);if(O&&r)return E(v(L),t,e)}for(y=v(L),P=v(t),(A=d(e))||(e=v(e)),N=P.length,$=C(1,N),R=I(y,P,0);-1!==R;)z=A?v(e(P,R,y)):_(P,y,R,[],void 0,e),U+=k(y,T,R)+z,T=R+N,R=I(y,P,R+$);return T<y.length&&(U+=k(y,T)),U}})},957:function(t,e,r){"use strict";var n=r(262),o=r(150),c=r(432),l=r(230),d=function(t,e,source,r,h,f,v,m){for(var element,x,_=h,y=0,O=!!v&&l(v,m);y<r;)y in source&&(element=O?O(source[y],y,e):source[y],f>0&&n(element)?(x=o(element),_=d(t,e,element,x,_,f-1)-1):(c(_+1),t[_]=element),_++),y++;return _};t.exports=d},962:function(t,e,r){"use strict";e.a={data:function(){return{landing_bg:r(567),building_icon:r(1022),electronics_icon:r(1023),mechanical_icon:r(1024),movingbuilding_bg:r(1025),movingbuilding_png:r(1026),occupancy_icon:r(1027),sign_icon:r(1028),infosoft_logo:r(1029),davaolifeishere_logo:r(1030),citc_logo:r(1031),no_bg_logo:r(1032)}}}},968:function(t,e,r){"use strict";var n=r(32),o=r(561);n({target:"String",proto:!0,forced:r(562)("fixed")},{fixed:function(){return o(this,"tt","","")}})},971:function(t,e,r){"use strict";var n=r(10);e.a=n.default.extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},996:function(t,e,r){"use strict";r(885);var n=r(82);e.a=Object(n.i)("spacer","div","v-spacer")},997:function(t,e,r){var content=r(998);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(129).default)("7393b465",content,!0,{sourceMap:!1})},998:function(t,e,r){var n=r(110)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},999:function(t,e,r){var content=r(1e3);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(129).default)("40d03d44",content,!0,{sourceMap:!1})}}]);