(this.webpackJsonpeickmorty=this.webpackJsonpeickmorty||[]).push([[0],{18:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(14),r=a.n(s),i=a(2),l=a(8),o=(a(36),a(0));function u(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{alt:"Logo",src:"https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABddiw4GEUq76B3fmiI7r6NF-GrWeEf99MjwKrfixFKM4B4o1uuitcgbuBNa3n04L5GSamUi2vex4adduBV-S2XGERxn29-ffvoRv.png?r=a6e"})}),Object(o.jsx)("h1",{className:"title",children:"\xa1Discover one of the most interesting series today!"}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsxs)("div",{className:"containerBtn",children:[Object(o.jsx)("h4",{className:"subtitle",children:"Locations "}),Object(o.jsx)(l.b,{to:"/locations",className:"locations",children:Object(o.jsx)("img",{className:"portal",alt:"portal",src:"https://i.pinimg.com/originals/6b/81/a1/6b81a1049b32cfa0fe2038fbc0a6d097.png"})})]}),Object(o.jsxs)("div",{className:"containerBtn",children:[Object(o.jsx)("h4",{className:"subtitle",children:" Characters "}),Object(o.jsx)(l.b,{to:"/characters",className:"characters",children:Object(o.jsx)("img",{className:"portal",alt:"portal",src:"https://i.pinimg.com/originals/6b/81/a1/6b81a1049b32cfa0fe2038fbc0a6d097.png"})})]}),Object(o.jsxs)("div",{className:"containerBtn",children:[Object(o.jsx)("h4",{className:"subtitle",children:" Episodes "}),Object(o.jsx)(l.b,{to:"/episodes",className:"episodes",children:Object(o.jsx)("img",{className:"portal",alt:"portal",src:"https://i.pinimg.com/originals/6b/81/a1/6b81a1049b32cfa0fe2038fbc0a6d097.png"})})]})]})]})}var j=a(5),d=a(9),b=a(4),p=a.n(b),h=a(10),m=a(11),O=a.n(m);function f(e){return function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://rickandmortyapi.com/api/location?page=".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"GET_LOCATIONS",payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function x(e,t){return function(){var a=Object(h.a)(p.a.mark((function a(n){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.get("https://rickandmortyapi.com/api/location?page=".concat(e,"&dimension=").concat(t));case 2:return c=a.sent,a.abrupt("return",n({type:"GET_LOCATIONS_BY_DIMENSION",payload:c.data}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function v(e){return function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://rickandmortyapi.com/api/location?name=".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"GET_LOCATIONS_BY_NAME",payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function N(e){return function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://rickandmortyapi.com/api/episode?page=".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"GET_EPISODES",payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://rickandmortyapi.com/api/character/?page=".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"GET_CHARACTERS",payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function E(e,t){return function(){var a=Object(h.a)(p.a.mark((function a(n){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.get("https://rickandmortyapi.com/api/character?name=".concat(e,"&page=").concat(t));case 2:return c=a.sent,a.abrupt("return",n({type:"GET_CHARACTER_BY_NAME",payload:c.data}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function C(e,t){return function(){var a=Object(h.a)(p.a.mark((function a(n){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.get("https://rickandmortyapi.com/api/character/?page=".concat(t,"&status=").concat(e));case 2:return c=a.sent,a.abrupt("return",n({type:"GET_CHARACTERS_BY_STATUS",payload:c.data}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function y(e,t){return function(){var a=Object(h.a)(p.a.mark((function a(n){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.get("https://rickandmortyapi.com/api/character/?page=".concat(t,"&gender=").concat(e));case 2:return c=a.sent,a.abrupt("return",n({type:"GET_CHARACTERS_BY_GENDER",payload:c.data}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}a(28);function S(e){var t=e.name,a=e.type,n=e.dimension;return Object(o.jsxs)("div",{className:"cardContainer",children:[Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("span",{className:"title",children:"Name : "}),Object(o.jsx)("span",{className:"sub-title",children:t})]}),Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("span",{className:"title",children:"Dimension : "}),Object(o.jsx)("span",{className:"sub-title",children:n})]}),Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("span",{className:"title",children:"Type : "}),Object(o.jsx)("span",{className:"sub-title",children:a})]})]})}a(18);function _(){var e,t=Object(d.b)(),a=Object(n.useState)(1),c=Object(j.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),u=Object(j.a)(i,2),b=u[0],p=u[1],h=Object(n.useState)(""),m=Object(j.a)(h,2),O=m[0],N=m[1];Object(n.useEffect)((function(){t(f(s))}),[]);var g=Object(d.c)((function(e){return e.allLocations}));return Object(o.jsxs)("div",{className:"con",children:[Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsx)("label",{className:"label",children:"Name"}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Example: Abadango",onChange:function(e){return function(e){e.preventDefault(),p(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"btn-Search",onClick:function(e){return function(e){e.preventDefault();var a=new RegExp(" ","g"),n=b.replace(a,"&");t(v(n)),p(n),N(""),r(1)}(e)},children:"Search"})]}),Object(o.jsx)("div",{className:"inputContainer",children:Object(o.jsx)("button",{className:"btn-reload",onClick:function(e){return function(e){e.preventDefault(),p(""),N(""),r(1),t(f(1))}(e)},children:"Reload locations"})}),Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsx)("label",{className:"label",children:"Dimension"}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Example: Unknown",onChange:function(e){return function(e){e.preventDefault(),N(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"btn-Search",onClick:function(e){return function(e){e.preventDefault();var a=new RegExp(" ","g"),n=O.replace(a,"&");t(x(s,n)),N(n),p(""),r(1)}(e)},children:"Search"})]})]}),Object(o.jsx)("div",{className:"cardsContainer",children:g?null===(e=g.results)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("div",{className:"card",children:Object(o.jsx)(S,{name:e.name,type:e.type,dimension:e.dimension})},e.id)})):Object(o.jsx)(o.Fragment,{})}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footerContainer",children:[Object(o.jsx)("button",{className:"btn-page",onClick:function(e){!function(e){e.preventDefault(),console.log(O),g.info.prev?(window.scrollTo({top:0,left:0,behavior:"smooth"}),O.length>0?(console.log("dime"),t(x(O,s-1))):b.length>0?(console.log("Name"),t(v(b))):(console.log("None"),t(f(s-1)))):alert("First page!")}(e)},children:"Previous Page"}),Object(o.jsx)(l.b,{className:"btnBack",to:"/",children:"Back to home"}),Object(o.jsx)("button",{className:"btn-page",onClick:function(e){!function(e){e.preventDefault(),console.log(O),g.info.next?(window.scrollTo({top:0,left:0,behavior:"smooth"}),r(s+1),O.length>0?t(x(O,s+1)):b.length>0?t(v(b)):t(f(s+1))):alert("last page!")}(e)},children:"Next Page"})]})})]})}a(63);function k(e){var t=e.name,a=e.status,n=e.species,c=e.gender,s=e.image;return Object(o.jsxs)("div",{className:"cardCon",children:[Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)("span",{className:"titles",children:"Name : "}),Object(o.jsx)("span",{className:"sub-titles",children:t})]}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)("span",{className:"titles",children:"Status : "}),Object(o.jsx)("span",{className:"sub-titles",children:a})]}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)("span",{className:"titles",children:"Specie : "}),Object(o.jsx)("span",{className:"sub-titles",children:n})]}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)("span",{className:"titles",children:"Gender : "}),Object(o.jsx)("span",{className:"sub-titles",children:c})]}),Object(o.jsx)("div",{className:"sections",children:Object(o.jsx)("img",{className:"img",alt:"img",src:s})})]})}function T(){var e,t=Object(d.b)(),a=Object(n.useState)(1),c=Object(j.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),u=Object(j.a)(i,2),b=u[0],p=u[1],h=Object(n.useState)(""),m=Object(j.a)(h,2),O=m[0],f=m[1],x=Object(n.useState)(""),v=Object(j.a)(x,2),N=v[0],S=v[1];Object(n.useEffect)((function(){t(g(s))}),[]);var _=Object(d.c)((function(e){return e.allCharacters}));return Object(o.jsxs)("div",{className:"con",children:[Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsx)("label",{className:"label",children:"Name"}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Example: Rick Sanchez",onChange:function(e){return function(e){e.preventDefault(),S(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"btn-Search",onClick:function(e){return function(e){e.preventDefault();var a=new RegExp(" ","g"),n=N.replace(a,"&");t(E(n)),r(1),p(""),f("")}(e)},children:"Search"})]}),Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsx)("label",{className:"label",children:"Status"}),Object(o.jsxs)("select",{className:"select",onChange:function(e){return function(e){e.preventDefault(),p(e.target.value),t(C(e.target.value,1)),r(1),S(""),f("")}(e)},children:[Object(o.jsx)("option",{value:"",children:"All"}),Object(o.jsx)("option",{value:"alive",children:"Alive"}),Object(o.jsx)("option",{value:"dead",children:"Dead"}),Object(o.jsx)("option",{value:"unknown",children:"Unknown"})]})]}),Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsx)("label",{className:"label",children:"Genre"}),Object(o.jsxs)("select",{className:"select",onChange:function(e){return function(e){e.preventDefault(),f(e.target.value),t(y(e.target.value,s)),r(1),p(""),S("")}(e)},children:[Object(o.jsx)("option",{value:"",children:"All"}),Object(o.jsx)("option",{value:"female",children:"Female"}),Object(o.jsx)("option",{value:"male",children:"Male"}),Object(o.jsx)("option",{value:"genderless",children:"Genderless"}),Object(o.jsx)("option",{value:"unknown",children:"Unknown"})]})]}),Object(o.jsx)("div",{className:"inputContainer",children:Object(o.jsx)("button",{className:"btn-reload",onClick:function(e){return function(e){e.preventDefault(),t(g(1)),r(1),p(""),S(""),f("")}(e)},children:"Reload Characters"})})]}),Object(o.jsx)("div",{className:"charactersContainer",children:null===_||void 0===_||null===(e=_.results)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("div",{className:"characters",children:Object(o.jsx)(k,{name:e.name,status:e.status,species:e.species,gender:e.gender,image:e.image})},e.id)}))}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footerContainer",children:[Object(o.jsx)("button",{className:"btn-page",onClick:function(e){!function(e){e.preventDefault(),_.info.prev?(r(s-1),window.scrollTo({top:0,left:0,behavior:"smooth"}),b.length>0?t(C(b,s-1)):O.length>0?t(y(O,s-1)):N.length>0?t(E(N,s-1)):t(g(s-1))):alert("First page!")}(e)},children:"Previous Page"}),Object(o.jsx)(l.b,{className:"btnBack",to:"/",children:"Back to home"}),Object(o.jsx)("button",{className:"btn-page",onClick:function(e){!function(e){e.preventDefault(),_.info.next?(window.scrollTo({top:0,left:0,behavior:"smooth"}),r(s+1),b.length>0?t(C(b,s+1)):O.length>0?t(y(O,s+1)):N.length>0?t(E(N,s+1)):t(g(s+1))):alert("last page!")}(e)},children:"Next Page"})]})})]})}function w(e){var t=e.name,a=e.episode,n=e.air_date;return Object(o.jsxs)("div",{className:"cardContainer",children:[Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("span",{className:"title",children:"Name : "}),Object(o.jsx)("span",{className:"sub-title",children:t})]}),Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("span",{className:"title",children:"Episode : "}),Object(o.jsx)("span",{className:"sub-title",children:a})]}),Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("span",{className:"title",children:"Air date : "}),Object(o.jsx)("span",{className:"sub-title",children:n})]})]})}function A(){var e,t=Object(d.b)(),a=Object(n.useState)(1),c=Object(j.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),u=Object(j.a)(i,2),b=u[0],m=u[1],f=Object(n.useState)(""),x=Object(j.a)(f,2),v=x[0],g=x[1];Object(n.useEffect)((function(){t(N(s))}),[s]);var E=Object(d.c)((function(e){return e.allEpisodes}));function C(e){e.preventDefault(),m(e.target.value),e.target.value<52?t(function(e){return function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://rickandmortyapi.com/api/episode/".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"GET_EPISODES_BY_NUMBER",payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e.target.value)):alert("Invalid Number")}function y(e){e.preventDefault(),t(function(e){return function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://rickandmortyapi.com/api/episode?name=".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"GET_EPISODES_BY_NAME",payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(v))}return Object(o.jsxs)("div",{className:"con",children:[Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsx)("label",{className:"label",children:"Number"}),Object(o.jsx)("input",{className:"input",type:"number",placeholder:"Example: 1",onChange:function(e){return C(e)}})]}),Object(o.jsx)("div",{className:"inputContainer",children:Object(o.jsx)("button",{className:"btn-reload",onClick:function(e){return function(e){e.preventDefault(),t(N()),r(1),g("")}(e)},children:"Reload episodes"})}),Object(o.jsxs)("div",{className:"inputContainer",children:[Object(o.jsx)("label",{className:"label",children:"Name"}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Example: Pilot",onChange:function(e){return function(e){e.preventDefault(),g(e.target.value)}(e)}}),Object(o.jsx)("button",{className:"btn-Search",onClick:function(e){return y(e)},children:"Search"})]})]}),Object(o.jsxs)("div",{className:"cardsContainer",children:[E?null===(e=E.results)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("div",{className:"card",children:Object(o.jsx)(w,{name:e.name,episode:e.episode,air_date:e.air_date})},e.id)})):Object(o.jsx)(o.Fragment,{}),b>0?Object(o.jsx)("div",{className:"card",children:Object(o.jsx)(w,{name:E.name,episode:E.episode,air_date:E.air_date})},E.id):Object(o.jsx)(o.Fragment,{})]}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footerContainer",children:[Object(o.jsx)("button",{className:"btn-page",onClick:function(e){!function(e){e.preventDefault(),1===s?alert("First page!"):(r(s-1),window.scrollTo({top:0,left:0,behavior:"smooth"}))}(e)},children:"Previous Page"}),Object(o.jsx)(l.b,{className:"btnBack",to:"/",children:"Back to home"}),Object(o.jsx)("button",{className:"btn-page",onClick:function(e){!function(e){e.preventDefault(),s<E.info.pages?(window.scrollTo({top:0,left:0,behavior:"smooth"}),r(s+1)):alert("last page!")}(e)},children:"Next Page"})]})})]})}a(64);var D=function(){return Object(o.jsx)(l.a,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",element:Object(o.jsx)(u,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/locations",element:Object(o.jsx)(_,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/characters",element:Object(o.jsx)(T,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/episodes",element:Object(o.jsx)(A,{})})]})})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},G=a(15),R=a(31),I=a(3),P={allCharacters:[],characters:[],allLocations:[],allEpisodes:[]};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOCATIONS":case"GET_LOCATIONS_BY_NAME":case"GET_LOCATIONS_BY_DIMENSION":return Object(I.a)(Object(I.a)({},e),{},{allLocations:t.payload});case"GET_EPISODES":case"GET_EPISODES_BY_NAME":case"GET_EPISODES_BY_NUMBER":return Object(I.a)(Object(I.a)({},e),{},{allEpisodes:t.payload});case"GET_CHARACTERS":case"GET_CHARACTER_BY_NAME":case"GET_CHARACTERS_BY_STATUS":case"GET_CHARACTERS_BY_GENDER":return Object(I.a)(Object(I.a)({},e),{},{allCharacters:t.payload});default:return e}},M=a(30),Y=Object(G.createStore)(L,Object(M.composeWithDevTools)(Object(G.applyMiddleware)(R.a)));r.a.render(Object(o.jsx)(d.a,{store:Y,children:Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(D,{})})}),document.getElementById("root")),B()}},[[65,1,2]]]);
//# sourceMappingURL=main.a8dbba1f.chunk.js.map