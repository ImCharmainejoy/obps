(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1038:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},1041:function(t,e,l){"use strict";l(885);var r=l(899);e.a=Object(r.a)("flex")},1146:function(t,e,l){"use strict";l.r(e);var r=l(1041),o=(l(558),l(880)),n=l(883),f={props:{customForm:Object,customData:Object,isMapDisabled:{type:Boolean,default:!1}},data:function(){return{options:{clickCoordinate:[],zoom:14.8,center:[125.59569,7.064905],rotation:0,geolocPosition:[],extent:[124.5884557833878,9.079063122945769,124.82109499828717,9.259461868809709]}}},mixins:[o.a],watch:{"options.clickCoordinate":{handler:function(t){var e={lng:this.options.clickCoordinate[0],lat:this.options.clickCoordinate[1]};this.isMapDisabled||this.$emit("customData",e)},deep:!0},customForm:{handler:function(t){if(t.barangay_name){var e={lng:Number(t.barangay_name.long),lat:Number(t.barangay_name.lat)};this.isMapDisabled||this.$emit("customData",e),this.options.clickCoordinate[0]=t.barangay_name?Number(t.barangay_name.long):125.59569,this.options.clickCoordinate[1]=t.barangay_name?Number(t.barangay_name.lat):7.064905,this.options.center=[Number(t.barangay_name.long),Number(t.barangay_name.lat)],this.setClickCoordinates()}},deep:!0}},computed:{hasCoordinates:function(){return Object(n.isEmpty)(this.options.clickCoordinate)?this.options.center:this.options.clickCoordinate}},methods:{setCenter:function(t){return[t.long,t.lat]},setClickCoordinates:function(){Object(n.isUndefined)(this.customForm.id)||(this.options.clickCoordinate=this.setCenter(this.customForm))},mounted:function(){this.setClickCoordinates()}}},x=l(226),component=Object(x.a)(f,(function(){var t=this,e=t._self._c;return e(r.a,[e("div",{staticStyle:{border:"1px solid #999999"}},[e("vl-map",{staticStyle:{height:"250px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"},on:{click:function(e){!t.isMapDisabled&&(t.options.clickCoordinate=e.coordinate)}}},[e("vl-view",{attrs:{zoom:t.options.zoom,center:t.customForm.id?t.setCenter(t.customForm):t.options.center,rotation:t.options.rotation},on:{"update:zoom":function(e){return t.$set(t.options,"zoom",e)},"update:center":function(e){t.$set(t.customForm.id?t.setCenter(t.customForm):t.options,"center",e)},"update:rotation":function(e){return t.$set(t.options,"rotation",e)}}}),t._v(" "),e("vl-geoloc",{on:{"update:position":function(e){!t.isMapDisabled&&(t.options.geolocPosition=e)}},scopedSlots:t._u([{key:"default",fn:function(l){return[l.position?e("vl-feature",{attrs:{id:"position-feature"}},[e("vl-geom-point",{attrs:{coordinates:t.hasCoordinates}}),t._v(" "),e("vl-style",[e("vl-style-icon",{attrs:{src:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png",anchor:[.49,.9],scale:.1}})],1)],1):t._e(),t._v(" "),e("vl-feature",[e("vl-geom-point",{attrs:{coordinates:t.hasCoordinates}}),t._v(" "),e("vl-style",[e("vl-style-icon",{attrs:{src:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png",anchor:[.49,.9],scale:.1}})],1)],1)]}}])}),t._v(" "),e("vl-layer-tile",{attrs:{id:"osm"}},[e("vl-source-osm")],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},880:function(t,e,l){"use strict";l(103),l(88),l(87),l(40),l(127),l(92),l(128);var r,o=l(42),n=(l(111),l(558),l(89),l(228),l(179),l(141),l(225),l(168),l(916),l(149),l(296),l(165),l(180)),f=l(883),x=l(90);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{isMounted:!1}},computed:d(d({},Object(n.c)("user",["user","client_id","app_no"])),{},(r={hasUser:function(){return!Object(f.isEmpty)(this.user)&&this.isToken},userClientId:function(){if(this.user){if(this.user.client)return this.user.client.id;if(this.user.user){if(this.user.user.client)return this.user.user.client.id;var t=JSON.parse(localStorage.vuex).user.user.client;return t?t.id:this.client_id}var e=JSON.parse(localStorage.vuex).user.user.client;return e?e.id:this.client_id}var l=JSON.parse(localStorage.vuex).user.user.client;return l?l.id:this.client_id},userClientContact:function(){if(this.user){if(this.user.client)return this.user.client.contact;if(this.user.user){if(this.user.user.client)return this.user.user.client.contact;var t=JSON.parse(localStorage.vuex).user.user.client;return t?t.contact:""}var e=JSON.parse(localStorage.vuex).user.user.client;return e?e.contact:""}var l=JSON.parse(localStorage.vuex).user.user.client;return l?l.contact:""},isToken:function(){return!!localStorage.getItem("token")},routeName:function(){return this.$nuxt._route.name},roleId:function(){return Number(JSON.parse(localStorage.vuex).user.user.user.role_id)},appNo:function(){return JSON.parse(localStorage.vuex).user.app_no},hasTHeader:function(){return!this.xsMobile},evaluatorRole:function(){return 10===this.roleId?"geodetic":11===this.roleId?"architect":12===this.roleId?"civil":13===this.roleId?"sanitary_plumbing":14===this.roleId?"electrical":15===this.roleId?"electronics":16===this.roleId?"mechanical":""},evaluatorRoleName:function(){return 10===this.roleId?"Geodetic Engr.":11===this.roleId?"Architect":12===this.roleId?"Civil / Structural Engr.":13===this.roleId?"Sanitary Engr.":14===this.roleId?"Electrical Engr.":15===this.roleId?"Electronics Engr.":16===this.roleId?"Mechanical Engr.":""},UserEvaluator:function(){return 10===this.roleId?"LINE and GRADE Evaluation":11===this.roleId?"ARCHITECTURAL/ACCESSIBILITY Evaluation":12===this.roleId?"CIVIL/STRUCTURAL Evaluation":13===this.roleId?"PLUMBING/SANITARY Evaluation":14===this.roleId?"ELECTRICAL Evaluation":15===this.roleId?"ELECTRONICS Evaluation":16===this.roleId?"MECHANICAL Evaluation":18===this.roleId?"FIRE MARSHALL":"BUILDING OFFICIAL Evaluation"},roleName:function(){return Object(f.isUndefined)(this.user)||Object(f.isUndefined)(this.user.user)?"":Object(f.trim)(this.user.role.role)},adminRole:function(){return!Object(f.isUndefined)(this.user)&&(!Object(f.isUndefined)(this.user.user)&&1===Number(this.user.user.role_id))},isBldgDisabled:function(){return!JSON.parse(localStorage.vuex).user.user.client},appName:function(){return this.$nuxt._route.params.name.split("/")[0]},clientId:function(){return 3===this.roleId?this.userClientId:this.client_id}},Object(o.a)(r,"routeName",(function(){return this.$nuxt._route.name.split("-")[2]})),Object(o.a)(r,"paramName",(function(){return Object(f.capitalize)(this.$nuxt._route.params.name)})),Object(o.a)(r,"mobile",(function(){return this.isMounted&&["xs","sm"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(r,"xsMobile",(function(){return this.isMounted&&["xs"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(r,"xlDevice",(function(){return this.isMounted&&["xl"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(r,"lgDevice",(function(){return this.isMounted&&["lg"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(r,"tabDevice",(function(){return this.isMounted&&["sm","md"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(r,"mdAndUpDevices",(function(){return this.isMounted&&["md","lg","xl"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(r,"smAndUpDevices",(function(){return this.isMounted&&["sm","md","lg","xl"].includes(this.$vuetify.breakpoint.name)})),Object(o.a)(r,"breakpoint",(function(){return this.isMounted?this.$vuetify.breakpoint:{smAndUp:!0,xsOnly:void 0}})),r)),methods:d(d(d({},Object(n.d)("events",["RESET_EVENT_STATE"])),Object(n.d)("user",["RESET_USER_STATE"])),{},{textIncludes:function(t,text){return Object(f.includes)(text,t)},getActive:function(t,e){return{active:Number(t)===Number(e),"white--text":Number(t)===Number(e),menu:Number(t)===Number(e)}},formatDateTime:function(t){return Object(x.format)(new Date(t),"MMMM D, YYYY")},sortSkipped:function(t,e,l){return Object(f.isEqual)(t,0)?t:t*e-l},newLink:function(t){window.open(t,"_blank")},setFile:function(t){return t?"".concat("https://ocbostaging.poolreno.com/","storage/").concat(t):""},getTopPage:function(){window.scrollTo(0,0)},getBottomPage:function(){window.scrollTo(0,document.body.scrollHeight)},getIndex:function(t,e){return{active:t===e,"primary-text-color":t===e}},getEvalIndex:function(t,e){return{active:t===e,tabEvalColor:t!==e}},getColor:function(t){return"mdi-check"===t?"green":"mdi-clipboard-clock-outline"===t?"orange":"mdi-file-alert"===t?"#EE7302":"mdi-close"},goTo:function(t){this.$router.push({name:t})},Logout:function(){this.RESET_USER_STATE(),this.RESET_EVENT_STATE(),setTimeout((function(){window.localStorage.clear()}),1e3)},wordCount:function(t){return Object(f.isEmpty)(t)&&Object(f.isUndefined)(t)?0:t.toLowerCase().split(" ").length},lastTwoWords:function(t){if(Object(f.isEmpty)(t)&&Object(f.isUndefined)(t))return"";var e=t.replaceAll("_"," ").split(" "),l=e[e.length-1]?this.textCapitalize(e[e.length-1]):"",r=e[e.length-2]?this.textCapitalize(e[e.length-2]):"";return"".concat(r," ").concat(l)},textCapitalize:function(t){if(!t)return"";for(var e=(t=Object(f.capitalize)(t)).split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].slice(1);return e.join(" ")},initialLetter:function(t){if(Object(f.isNull)(t)||Object(f.isUndefined)(t))return"";var e=t.split(" ").map((function(t){return t?t[0].toUpperCase():t})),l=e.join("");if(Object(f.isUndefined)(l)){var r=e.join(" ").replaceAll(" ","");return"".concat(r)}return"".concat(l)}}),mounted:function(){this.isMounted=!0}}},885:function(t,e,l){var content=l(940);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(129).default)("46488fec",content,!0,{sourceMap:!1})},899:function(t,e,l){"use strict";l.d(e,"a",(function(){return o}));l(430),l(141),l(87),l(40),l(103),l(229),l(296);var r=l(10);function o(t){return r.default.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,l){var r=l.props,data=l.data,o=l.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var n=data.attrs;if(n){data.attrs={};var f=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));f.length&&(data.staticClass+=" ".concat(f.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,o)}})}},916:function(t,e,l){l(944)},940:function(t,e,l){var r=l(110)(!1);r.push([t.i,".container.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.fill-height{align-items:center;display:flex;flex-wrap:wrap}.container.fill-height>.row{flex:1 1 100%;max-width:calc(100% + 24px)}.container.fill-height>.layout{height:100%;flex:1 1 auto}.container.fill-height>.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs *:not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs *:not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm *:not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm *:not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md *:not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md *:not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg *:not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg *:not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl *:not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl *:not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:flex;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.reverse{flex-direction:row-reverse}.layout.column{flex-direction:column}.layout.column.reverse{flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}.layout.grow-shrink-0{flex-grow:0;flex-shrink:0}@media all and (min-width: 0){.flex.xs12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xs12{order:12}.flex.xs11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xs11{order:11}.flex.xs10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xs10{order:10}.flex.xs9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xs9{order:9}.flex.xs8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xs8{order:8}.flex.xs7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xs7{order:7}.flex.xs6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xs6{order:6}.flex.xs5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xs5{order:5}.flex.xs4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xs4{order:4}.flex.xs3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xs3{order:3}.flex.xs2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xs2{order:2}.flex.xs1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xs1{order:1}.v-application--is-ltr .flex.offset-xs12{margin-left:100%}.v-application--is-rtl .flex.offset-xs12{margin-right:100%}.v-application--is-ltr .flex.offset-xs11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xs11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xs10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xs10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xs9{margin-left:75%}.v-application--is-rtl .flex.offset-xs9{margin-right:75%}.v-application--is-ltr .flex.offset-xs8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xs8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xs7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xs7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xs6{margin-left:50%}.v-application--is-rtl .flex.offset-xs6{margin-right:50%}.v-application--is-ltr .flex.offset-xs5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xs5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xs4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xs4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xs3{margin-left:25%}.v-application--is-rtl .flex.offset-xs3{margin-right:25%}.v-application--is-ltr .flex.offset-xs2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xs2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xs1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xs1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xs0{margin-left:0%}.v-application--is-rtl .flex.offset-xs0{margin-right:0%}}@media all and (min-width: 600px){.flex.sm12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-sm12{order:12}.flex.sm11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-sm11{order:11}.flex.sm10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-sm10{order:10}.flex.sm9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-sm9{order:9}.flex.sm8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-sm8{order:8}.flex.sm7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-sm7{order:7}.flex.sm6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-sm6{order:6}.flex.sm5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-sm5{order:5}.flex.sm4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-sm4{order:4}.flex.sm3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-sm3{order:3}.flex.sm2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-sm2{order:2}.flex.sm1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-sm1{order:1}.v-application--is-ltr .flex.offset-sm12{margin-left:100%}.v-application--is-rtl .flex.offset-sm12{margin-right:100%}.v-application--is-ltr .flex.offset-sm11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-sm11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-sm10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-sm10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-sm9{margin-left:75%}.v-application--is-rtl .flex.offset-sm9{margin-right:75%}.v-application--is-ltr .flex.offset-sm8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-sm8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-sm7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-sm7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-sm6{margin-left:50%}.v-application--is-rtl .flex.offset-sm6{margin-right:50%}.v-application--is-ltr .flex.offset-sm5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-sm5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-sm4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-sm4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-sm3{margin-left:25%}.v-application--is-rtl .flex.offset-sm3{margin-right:25%}.v-application--is-ltr .flex.offset-sm2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-sm2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-sm1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-sm1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-sm0{margin-left:0%}.v-application--is-rtl .flex.offset-sm0{margin-right:0%}}@media all and (min-width: 960px){.flex.md12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-md12{order:12}.flex.md11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-md11{order:11}.flex.md10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-md10{order:10}.flex.md9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-md9{order:9}.flex.md8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-md8{order:8}.flex.md7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-md7{order:7}.flex.md6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-md6{order:6}.flex.md5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-md5{order:5}.flex.md4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-md4{order:4}.flex.md3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-md3{order:3}.flex.md2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-md2{order:2}.flex.md1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-md1{order:1}.v-application--is-ltr .flex.offset-md12{margin-left:100%}.v-application--is-rtl .flex.offset-md12{margin-right:100%}.v-application--is-ltr .flex.offset-md11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-md11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-md10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-md10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-md9{margin-left:75%}.v-application--is-rtl .flex.offset-md9{margin-right:75%}.v-application--is-ltr .flex.offset-md8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-md8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-md7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-md7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-md6{margin-left:50%}.v-application--is-rtl .flex.offset-md6{margin-right:50%}.v-application--is-ltr .flex.offset-md5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-md5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-md4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-md4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-md3{margin-left:25%}.v-application--is-rtl .flex.offset-md3{margin-right:25%}.v-application--is-ltr .flex.offset-md2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-md2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-md1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-md1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-md0{margin-left:0%}.v-application--is-rtl .flex.offset-md0{margin-right:0%}}@media all and (min-width: 1264px){.flex.lg12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-lg12{order:12}.flex.lg11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-lg11{order:11}.flex.lg10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-lg10{order:10}.flex.lg9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-lg9{order:9}.flex.lg8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-lg8{order:8}.flex.lg7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-lg7{order:7}.flex.lg6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-lg6{order:6}.flex.lg5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-lg5{order:5}.flex.lg4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-lg4{order:4}.flex.lg3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-lg3{order:3}.flex.lg2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-lg2{order:2}.flex.lg1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-lg1{order:1}.v-application--is-ltr .flex.offset-lg12{margin-left:100%}.v-application--is-rtl .flex.offset-lg12{margin-right:100%}.v-application--is-ltr .flex.offset-lg11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-lg11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-lg10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-lg10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-lg9{margin-left:75%}.v-application--is-rtl .flex.offset-lg9{margin-right:75%}.v-application--is-ltr .flex.offset-lg8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-lg8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-lg7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-lg7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-lg6{margin-left:50%}.v-application--is-rtl .flex.offset-lg6{margin-right:50%}.v-application--is-ltr .flex.offset-lg5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-lg5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-lg4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-lg4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-lg3{margin-left:25%}.v-application--is-rtl .flex.offset-lg3{margin-right:25%}.v-application--is-ltr .flex.offset-lg2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-lg2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-lg1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-lg1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-lg0{margin-left:0%}.v-application--is-rtl .flex.offset-lg0{margin-right:0%}}@media all and (min-width: 1904px){.flex.xl12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xl12{order:12}.flex.xl11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order-xl11{order:11}.flex.xl10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order-xl10{order:10}.flex.xl9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xl9{order:9}.flex.xl8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order-xl8{order:8}.flex.xl7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order-xl7{order:7}.flex.xl6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xl6{order:6}.flex.xl5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order-xl5{order:5}.flex.xl4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order-xl4{order:4}.flex.xl3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xl3{order:3}.flex.xl2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order-xl2{order:2}.flex.xl1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order-xl1{order:1}.v-application--is-ltr .flex.offset-xl12{margin-left:100%}.v-application--is-rtl .flex.offset-xl12{margin-right:100%}.v-application--is-ltr .flex.offset-xl11{margin-left:91.6666666667%}.v-application--is-rtl .flex.offset-xl11{margin-right:91.6666666667%}.v-application--is-ltr .flex.offset-xl10{margin-left:83.3333333333%}.v-application--is-rtl .flex.offset-xl10{margin-right:83.3333333333%}.v-application--is-ltr .flex.offset-xl9{margin-left:75%}.v-application--is-rtl .flex.offset-xl9{margin-right:75%}.v-application--is-ltr .flex.offset-xl8{margin-left:66.6666666667%}.v-application--is-rtl .flex.offset-xl8{margin-right:66.6666666667%}.v-application--is-ltr .flex.offset-xl7{margin-left:58.3333333333%}.v-application--is-rtl .flex.offset-xl7{margin-right:58.3333333333%}.v-application--is-ltr .flex.offset-xl6{margin-left:50%}.v-application--is-rtl .flex.offset-xl6{margin-right:50%}.v-application--is-ltr .flex.offset-xl5{margin-left:41.6666666667%}.v-application--is-rtl .flex.offset-xl5{margin-right:41.6666666667%}.v-application--is-ltr .flex.offset-xl4{margin-left:33.3333333333%}.v-application--is-rtl .flex.offset-xl4{margin-right:33.3333333333%}.v-application--is-ltr .flex.offset-xl3{margin-left:25%}.v-application--is-rtl .flex.offset-xl3{margin-right:25%}.v-application--is-ltr .flex.offset-xl2{margin-left:16.6666666667%}.v-application--is-rtl .flex.offset-xl2{margin-right:16.6666666667%}.v-application--is-ltr .flex.offset-xl1{margin-left:8.3333333333%}.v-application--is-rtl .flex.offset-xl1{margin-right:8.3333333333%}.v-application--is-ltr .flex.offset-xl0{margin-left:0%}.v-application--is-rtl .flex.offset-xl0{margin-right:0%}}.flex,.child-flex>*{flex:1 1 auto;max-width:100%}.flex.grow-shrink-0,.child-flex>*.grow-shrink-0{flex-grow:0;flex-shrink:0}.spacer{flex-grow:1 !important}.grow{flex-grow:1 !important;flex-shrink:0 !important}.shrink{flex-grow:0 !important;flex-shrink:1 !important}.fill-height{height:100%}",""]),t.exports=r},944:function(t,e,l){"use strict";var r=l(32),o=l(58),n=l(35),f=l(118),x=l(48),c=l(182),d=l(365),m=l(73),h=l(205),v=l(431),w=l(563),y=l(49),O=l(119),E=y("replace"),j=TypeError,C=n("".indexOf),k=n("".replace),I=n("".slice),S=Math.max,_=function(t,e,l){return l>t.length?-1:""===e?l:C(t,e,l)};r({target:"String",proto:!0},{replaceAll:function(t,e){var l,r,n,y,N,T,M,A,D,U=f(this),P=0,R=0,L="";if(!c(t)){if((l=d(t))&&(r=m(f(v(t))),!~C(r,"g")))throw j("`.replaceAll` does not allow non-global regexes");if(n=h(t,E))return o(n,t,U,e);if(O&&l)return k(m(U),t,e)}for(y=m(U),N=m(t),(T=x(e))||(e=m(e)),M=N.length,A=S(1,M),P=_(y,N,0);-1!==P;)D=T?m(e(N,P,y)):w(N,y,P,[],void 0,e),L+=I(y,R,P)+D,R=P+M,P=_(y,N,P+A);return R<y.length&&(L+=I(y,R)),L}})}}]);