(function(A){function a(a){for(var s,n,r=a[0],o=a[1],c=a[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(A[s]=o[s]);l&&l(a);while(p.length)p.shift()();return e.push.apply(e,c||[]),t()}function t(){for(var A,a=0;a<e.length;a++){for(var t=e[a],s=!0,r=1;r<t.length;r++){var o=t[r];0!==i[o]&&(s=!1)}s&&(e.splice(a--,1),A=n(n.s=t[0]))}return A}var s={},i={app:0},e=[];function n(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return A[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=A,n.c=s,n.d=function(A,a,t){n.o(A,a)||Object.defineProperty(A,a,{enumerable:!0,get:t})},n.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},n.t=function(A,a){if(1&a&&(A=n(A)),8&a)return A;if(4&a&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&a&&"string"!=typeof A)for(var s in A)n.d(t,s,function(a){return A[a]}.bind(null,s));return t},n.n=function(A){var a=A&&A.__esModule?function(){return A["default"]}:function(){return A};return n.d(a,"a",a),a},n.o=function(A,a){return Object.prototype.hasOwnProperty.call(A,a)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var l=o;e.push([0,"chunk-vendors"]),t()})({0:function(A,a,t){A.exports=t("56d7")},5033:function(A){A.exports=JSON.parse('{"prices":[14,13,15,19,23,21,19,17],"dates":["1 am","3 am","6 am","10 am","12 am","15 pm","19 pm","10 pm"]}')},"56d7":function(A,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),i=function(){var A=this,a=A.$createElement,t=A._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"header"},[A._m(0),t("div",{staticClass:"header-searchbar"},[t("input",{attrs:{type:"text",placeholder:"Search Your City"}}),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-magnifying-glass"}})],1)]),t("div",{staticClass:"tile-one"},[t("div",{staticClass:"tile-one-temp"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-sun",size:"3x",beat:""}}),t("h1",[A._v("21°")]),t("h2",[A._v("Mumbai, India")])],1),A._m(1)]),t("div",{staticClass:"section-wrapper"},[A._m(2),t("div",{staticClass:"section-wrapper-right"},[t("div",{staticClass:"right-tile"},[t("h4",[A._v("Today, 5 February")]),t("div",{staticClass:"chart-wrapper"},[t("Chart")],1),t("div",{staticClass:"days-wrapper"},[t("div",{staticClass:"day-indicator-wrapper"},[t("span",{staticClass:"day"},[A._v("MON")]),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-sun",size:"xl"}}),t("span",{staticClass:"degrees"},[A._v("19°")])],1),t("span",{staticClass:"divider"}),t("div",{staticClass:"day-indicator-wrapper"},[t("span",{staticClass:"day"},[A._v("TUE")]),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-cloud",size:"xl"}}),t("span",{staticClass:"degrees"},[A._v("19°")])],1),t("span",{staticClass:"divider"}),t("div",{staticClass:"day-indicator-wrapper"},[t("span",{staticClass:"day"},[A._v("WED")]),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-cloud-rain",size:"xl"}}),t("span",{staticClass:"degrees"},[A._v("19°")])],1),t("span",{staticClass:"divider"}),t("div",{staticClass:"day-indicator-wrapper"},[t("span",{staticClass:"day"},[A._v("THU")]),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-cloud-sun",size:"xl"}}),t("span",{staticClass:"degrees"},[A._v("19°")])],1),t("span",{staticClass:"divider"}),t("div",{staticClass:"day-indicator-wrapper"},[t("span",{staticClass:"day"},[A._v("FRI")]),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-wind",size:"xl"}}),t("span",{staticClass:"degrees"},[A._v("19°")])],1),t("span",{staticClass:"divider"}),t("div",{staticClass:"day-indicator-wrapper"},[t("span",{staticClass:"day"},[A._v("SAT")]),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-sun",size:"xl"}}),t("span",{staticClass:"degrees"},[A._v("19°")])],1),t("span",{staticClass:"divider"}),t("div",{staticClass:"day-indicator-wrapper"},[t("span",{staticClass:"day"},[A._v("SUN")]),t("font-awesome-icon",{attrs:{id:"search-icon",icon:"fa-solid fa-cloud-sun",size:"xl"}}),t("span",{staticClass:"degrees"},[A._v("19°")])],1)])])])])])},e=[function(){var A=this,a=A.$createElement,t=A._self._c||a;return t("div",{staticClass:"header-title"},[t("h2",[A._v("Weather App")])])},function(){var A=this,a=A.$createElement,t=A._self._c||a;return t("div",{staticClass:"tile-one-hour"},[t("h1",[A._v("03:11 PM")]),t("h2",[A._v("Monday")])])},function(){var A=this,a=A.$createElement,s=A._self._c||a;return s("div",{staticClass:"section-wrapper-left"},[s("div",{staticClass:"left-tile indicators"},[s("div",{staticClass:"indicators-wrapper"},[s("div",{staticClass:"indicators-item"},[s("img",{attrs:{src:t("647a"),alt:"humidity"}}),s("span",[A._v(" Humidity "),s("strong",[A._v("56%")])])]),s("div",{staticClass:"indicators-item"},[s("img",{attrs:{src:t("dd1b"),alt:"wind"}}),s("span",[A._v(" Air Quality "),s("strong",[A._v("151")])])])]),s("div",{staticClass:"divider"}),s("div",{staticClass:"indicators-wrapper"},[s("div",{staticClass:"indicators-item"},[s("img",{attrs:{src:t("5fce"),alt:"sunrise"}}),s("span",[A._v(" Sunrise "),s("strong",[A._v("6:45 AM")])])]),s("div",{staticClass:"indicators-item"},[s("img",{attrs:{src:t("de1a"),alt:"sea"}}),s("span",[A._v(" Sunset "),s("strong",[A._v("6:15 PM")])])])])]),s("div",{staticClass:"left-tile bg-primary rain"},[s("div",{staticClass:"rain-item"},[s("span",{staticClass:"rain-indicator"},[A._v(" Monthly Rainfall "),s("strong",[A._v("22mm")])])]),s("div",{staticClass:"rain-item"},[s("span",{staticClass:"rain-indicator"},[A._v(" This year "),s("strong",{staticClass:"primary"},[A._v("+2%")])])])])])}],n=function(){var A=this,a=A.$createElement,t=A._self._c||a;return t("div",[t("apexchart",{attrs:{type:"area",height:"350",options:A.data.chartOptions,series:A.data.series}})],1)},r=[],o=t("5033"),c={data:function(){return{data:{series:[{name:"weather",data:o.prices}],chartOptions:{chart:{type:"area",height:200,zoom:{enabled:!1}},colors:["#FFBF3B"],dataLabels:{enabled:!0,formatter:function(A){return A+"°"},offsetX:0,offsetY:-5,background:{enabled:!1}},tooltip:{y:{show:!0,formatter:function(A){return A+"°"}}},stroke:{curve:"smooth"},labels:o.dates,xaxis:{type:"time"},yaxis:{show:!1},legend:{horizontalAlign:"bottom"}}}}}},l=c,d=t("2877"),p=Object(d["a"])(l,n,r,!1,null,null,null),f=p.exports,u={name:"App",components:{Chart:f}},h=u,v=(t("5c0b"),Object(d["a"])(h,i,e,!1,null,null,null)),g=v.exports,y=t("ecee"),C=t("c074"),m=t("b702"),b=t("ad3d"),w=t("1321"),G=t.n(w);y["c"].add(C["a"],m["a"]),s["a"].config.productionTip=!1,s["a"].component("font-awesome-icon",b["a"]),s["a"].component("apexchart",G.a),new s["a"]({render:function(A){return A(g)}}).$mount("#app")},"5c0b":function(A,a,t){"use strict";t("9c0c")},"5fce":function(A,a,t){A.exports=t.p+"img/sunrise.29b7e9e7.png"},"647a":function(A,a,t){A.exports=t.p+"img/humidity.3eccf851.png"},"9c0c":function(A,a,t){},dd1b:function(A,a){A.exports="data:image/png;base64,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"},de1a:function(A,a,t){A.exports=t.p+"img/sea.b28f04d1.png"}});
//# sourceMappingURL=app.b3fcae25.js.map