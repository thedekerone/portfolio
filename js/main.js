!function(t){function n(n){for(var r,o,s=n[0],c=n[1],l=n[2],p=0,h=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(d&&d(n);h.length;)h.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,s=1;s<e.length;s++){var c=e[s];0!==i[c]&&(r=!1)}r&&(a.splice(n--,1),t=o(o.s=e[0]))}return t}var r={},i={0:0},a=[];function o(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=c;a.push([33,1]),e()}([function(t,n,e){t.exports=e(3)(0)},function(t,n,e){t.exports=e(3)(4)},,function(t,n){t.exports=modules},,,,,,,function(t,n,e){t.exports=e.p+"29d58229bf09bec9ccb275cfba83fa1e.svg"},function(t,n,e){t.exports=e.p+"168962cbfb0232ab2868d62388858c49.jpg"},function(t,n,e){t.exports=e.p+"6ef88e0cf44cb90fba27f3b0a43ec4dc.jpg"},function(t,n,e){t.exports=e.p+"c73d1a242f193f1838934ca73c2394ec.jpg"},function(t,n,e){t.exports=e.p+"339f7853c44996a5729c0e8bedda147e.jpg"},function(t,n,e){t.exports=e.p+"08f284310de37f9aa0c1ce8fbd939535.svg"},,,,,,,,function(t,n,e){var r=e(24);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(29)(r,i);r.locals&&(t.exports=r.locals)},function(t,n,e){(n=t.exports=e(25)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap);",""]);var r=e(26),i=r(e(27)),a=r(e(28));n.push([t.i,"* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttext-decoration: none;\r\n}\r\n.btn--project {\r\n\tcolor: white;\r\n}\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\nbody {\r\n\tcolor: white;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n.navbar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 2;\r\n}\r\n.navbar .logo-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.hamburguer {\r\n\twidth: 70px;\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 70px;\r\n\ttransition: .4s;\r\n}\r\n.hamburguer:hover {\r\n\tcursor: pointer;\r\n}\r\n.name h1 {\r\n\tmargin-left: 1.3em;\r\n\tfont-size: .8rem;\r\n\tfont-weight: 400;\r\n\tletter-spacing: .24rem;\r\n\tcolor: rgb(189, 189, 189);\r\n}\r\n\r\n/* button */\r\n.btn {\r\n\tpadding: .8em;\r\n\tbackground: transparent;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.btn--project {\r\n\tz-index: 3;\r\n}\r\n\r\n.btn--project::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 108%;\r\n\tz-index: -1;\r\n\theight: 130%;\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n\tbackground: rgba(34, 34, 34, 0.11);\r\n}\r\n.btn--about::after,\r\n.btn--project::after,\r\n.btn--activate::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 101%;\r\n\theight: 100%;\r\n\tborder: .7px solid rgba(255, 255, 255, 0.959);\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n}\r\n.btn:hover {\r\n\tcursor: pointer;\r\n}\r\n.btn--project:hover::after {\r\n\twidth: 115%;\r\n\theight: 153%;\r\n\tborder: .1px solid rgba(241, 240, 240, 0.836);\r\n}\r\n.btn--project:hover::before {\r\n\tbackground: rgba(34, 34, 34, 0.226);\r\n}\r\n.btn--about {\r\n\tmargin-right: 1em;\r\n\tfont-size: .9rem;\r\n\tfont-weight: bold;\r\n\tposition: relative;\r\n}\r\n\r\n.btn--about::before {\r\n\tcontent: '';\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n\tleft: 0;\r\n\twidth: 0;\r\n\theight: 100%;\r\n\ttransition: .5s;\r\n}\r\n\r\n.btn--about:hover::before {\r\n\twidth: 100%;\r\n}\r\n\r\n.btn--activate {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, 0);\r\n\tz-index: 20;\r\n\tcolor: white;\r\n}\r\n.btn--project {\r\n\tmargin-top: 3rem;\r\n\tpadding: 1.3rem 3.4em;\r\n}\r\n\r\n/* Main section */\r\n.main {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr 1fr;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\r\n\theight: 100%;\r\n}\r\n.bg-section {\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tfilter: brightness(.85);\r\n\ttransition: .6s;\r\n\t/* bottom: 0; */\r\n\tposition: fixed;\r\n\tz-index: -1;\r\n}\r\n.bg-section img {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n/* Description */\r\n.desc-section {\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tbackground-image: url("+i+");\r\n\ttransition: .4s;\r\n\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tbackground-blend-mode: multiply;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.desc-section .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n.desc-section .container h1 {\r\n\tfont-size: 3rem;\r\n\tposition: relative;\r\n\tletter-spacing: .17rem;\r\n\ttext-align: center;\r\n\tpadding: .7rem;\r\n}\r\n.desc-section .container span {\r\n\tfont-size: .8rem;\r\n}\r\n\r\n/* desc animation control */\r\n.container h1 {\r\n\ttransition: 1.1s;\r\n\ttransition-delay: .3s;\r\n\tposition: relative;\r\n}\r\n.container hr {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .8s;\r\n\ttransition-delay: .7s;\r\n\r\n\tposition: relative;\r\n}\r\n.container .description {\r\n\ttransition: .9s;\r\n\ttransition-delay: .8s;\r\n\tposition: relative;\r\n}\r\n.container .skills {\r\n\ttransition: .6s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n.container .btn {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .7s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n/*  */\r\nhr {\r\n\twidth: 60px;\r\n\tmargin: 0 0 .8rem;\r\n\tborder: none;\r\n\tbackground: white;\r\n\theight: 2.5px;\r\n}\r\n\r\n/* slides control */\r\n.img-slider {\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n.infoSlider {\r\n\tposition: relative;\r\n\ttransition: transform 420ms linear;\r\n\twill-change: transform;\r\n}\r\n\r\n/* DOTS */\r\n\r\n.dot-colection {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 45%;\r\n}\r\n.dot-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: .8rem;\r\n\t/* font-weight: bold; */\r\n}\r\n.dot-container p {\r\n\ttransition: .4s cubic-bezier(.51, .51, .65, 1.02);\r\n}\r\n.dot {\r\n\tborder-radius: 50%;\r\n\twidth: 6px;\r\n\tmargin: 10px;\r\n\theight: 6px;\r\n\tdisplay: inline-block;\r\n\tbackground: rgb(202, 202, 202);\r\n\tz-index: 30;\r\n\ttransition: cubic-bezier(.51, .51, .63, 1.32) .3s;\r\n}\r\n#selected {\r\n\ttransform: scale(2.3);\r\n}\r\n\r\nbody {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n}\r\n\r\n/* WAITING PAGE */\r\n#waiting-page {\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: relative;\r\n}\r\n\r\n.waiting-page {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 100;\r\n\tposition: relative;\r\n\ttransition: .6s;\r\n}\r\n.waiting-page::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tright: 0;\r\n\tz-index: -1;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\ttop: 0;\r\n}\r\n.waiting-page::before {\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\tleft: 0;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbackground-position: center;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbottom: 0;\r\n}\r\n#start::after {\r\n\twidth: 0vw;\r\n}\r\n#start::before {\r\n\twidth: 0vw;\r\n}\r\n#start {\r\n\twidth: 95%;\r\n\r\n\theight: 95%;\r\n}\r\n#start h1 {\r\n\topacity: 0;\r\n}\r\n\r\n/* \r\n\r\n\r\n*/\r\n.waiting-page h1 {\r\n\tfont-size: 1.15rem;\r\n\tfont-weight: 400;\r\n\tcolor: #50c72b;\r\n\tbackground-image: -webkit-linear-gradient(92deg, #1fbd1f, #27509c);\r\n\t-webkit-background-clip: text;\r\n\t-webkit-animation: hue 2s infinite linear;\r\n\ttransition: .3s;\r\n\ttransition-delay: .5s;\r\n}\r\n@-webkit-keyframes hue {\r\n\tfrom {\r\n\t\t-webkit-filter: hue-rotate(0deg);\r\n\t}\r\n\tto {\r\n\t\t-webkit-filter: hue-rotate(-360deg);\r\n\t}\r\n}\r\n\r\n/* responsive */\r\n@media screen and (max-width: 1000px) {\r\n\thtml {\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n@media screen and (max-width: 700px) {\r\n\thtml {\r\n\t\tfont-size: 9px;\r\n\t}\r\n\t.btn--activate {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.bg-section img {\r\n\t\theight: 100vh;\r\n\t}\r\n\t.desc-section {\r\n\t\theight: 50vh;\r\n\t\tmargin-top: 50vh;\r\n\t}\r\n\t.btn--activate {\r\n\t\tz-index: 30;\r\n\t}\r\n\t.main {\r\n\t\tgrid-template: 1fr/1fr;\r\n\t}\r\n}\r\n",""])},,,function(t,n,e){t.exports=e.p+"320d8963b60140a98a59f6575b333232.png"},function(t,n,e){t.exports=e.p+"d2b4ba52312bfdba4b1295af05c34209.jpg"},,,function(t,n,e){t.exports=e(3)(8)},,function(t,n,e){"use strict";e.r(n);var r=e(1),i=e.n(r),a=e(4),o=e.n(a),s=e(5),c=e.n(s),l=e(6),d=e.n(l),p=e(7),h=e.n(p),u=e(8),m=e.n(u),f=e(9),b=e.n(f),g=e(0),v=e.n(g),w=e(2),y=e.n(w),x=e(10),k=e.n(x),j=(e(23),function(t){var n=Object(g.useState)("white"),e=y()(n,2),r=e[0],i=e[1];return v.a.createElement("div",{className:"navbar"},v.a.createElement("div",{className:"logo-container"},v.a.createElement("a",{href:"#",className:"hamburguer",style:{background:t.mainColor}},v.a.createElement("img",{src:k.a,width:"35px",alt:"ham"})),v.a.createElement("div",{className:"name"},v.a.createElement("h1",null,"MAURICIO FOW"))),v.a.createElement("div",{className:"btn btn--about",onMouseOver:function(){i(t.mainColor)},onMouseLeave:function(){i("white")},style:{color:r}},v.a.createElement("span",null,"about me")))});function E(t){return v.a.createElement("div",{className:"img-slider"},t.slide.map(function(t){return v.a.createElement("div",{className:"bg-section",style:t.active?{height:"100%"}:{height:"0"},id:t.identifier},v.a.createElement("img",{src:t.imgPath,alt:"fist"}))}))}function O(t){var n="".concat(-(t.show-1)*document.body.offsetHeight,"px");return v.a.createElement("div",{className:"infoSlider",style:{transform:"translateY(".concat(n,")")}},t.slide.map(function(n,e){return v.a.createElement("div",{className:"desc-section",style:{backgroundColor:t.mainColor},id:"info".concat(n.identifier)},v.a.createElement("div",{className:"container"},v.a.createElement("span",{className:"skills",style:t.show-1===e?{opacity:1,bottom:0}:{opacity:0,bottom:"-10px"}},"UI|Front-end"),v.a.createElement("h1",{style:t.show-1===e?{opacity:1,letterSpacing:".17rem"}:{opacity:0,letterSpacing:"-1.2rem\t"}},n.title),v.a.createElement("hr",{style:t.show-1===e?{opacity:1}:{opacity:0,width:0}}),v.a.createElement("span",{className:"description",style:t.show-1===e?{opacity:1,left:0}:{opacity:0,left:"-20px"}},n.description),v.a.createElement("a",{href:n.path,target:"_blank",style:t.show-1===e?{opacity:1,bottom:0}:{opacity:0,bottom:"-30px"},className:"btn btn--project"},"view project")))}))}function C(t){return v.a.createElement("section",{className:"main"},v.a.createElement(E,{slide:t.slide,show:t.show}),v.a.createElement(O,{slide:t.slide,show:t.show,mainColor:t.mainColor}))}var z=e(11),S=e.n(z),P=e(12),N=e.n(P),M=e(13),T=e.n(M),I=e(14),B=e.n(I);function F(t){var n=Object(g.useState)("flex"),e=y()(n,2),r=e[0],i=e[1];return setTimeout(function(){i("none")},3100),v.a.createElement("div",{className:"waiting-page",style:{display:r},id:t.start?"start":null},v.a.createElement("h1",null,"PROJECTS PORTFOLIO"))}var D=e(15),L=e.n(D),Y=e(16);function _(t){return i.a.createPortal(t.children,document.getElementById("waiting-page"))}function A(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function G(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(e,!0).forEach(function(n){o()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var J=function(t){function n(){var t;return c()(this,n),(t=h()(this,m()(n).call(this))).handleClickBajar=function(){switch(t.state.show){case 1:t.setState({mainColor:"rgb(35, 48, 65)",show:2,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!0}),G({},t.state.slides[2],{active:!0}),G({},t.state.slides[3],{active:!1})]});break;case 2:t.setState({mainColor:"rgb(0,107,71)",show:3,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!0}),G({},t.state.slides[2],{active:!1}),G({},t.state.slides[3],{active:!1})]});break;case 3:t.setState({mainColor:"#b03049",show:4,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!1}),G({},t.state.slides[2],{active:!1}),G({},t.state.slides[3],{active:!1})]});break;case 4:t.setState({mainColor:"rgb(142, 42, 42)",show:1,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!0}),G({},t.state.slides[2],{active:!0}),G({},t.state.slides[3],{active:!0})]})}},t.handleClickSubir=function(){switch(t.state.show){case 1:t.setState({mainColor:"#b03049",show:4,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!1}),G({},t.state.slides[2],{active:!1}),G({},t.state.slides[3],{active:!1})]});break;case 2:t.setState({mainColor:"rgb(147, 62, 62)",show:1,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!0}),G({},t.state.slides[2],{active:!0}),G({},t.state.slides[3],{active:!0})]});break;case 3:t.setState({mainColor:"rgb(35, 48, 65)",show:2,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!0}),G({},t.state.slides[2],{active:!0}),G({},t.state.slides[3],{active:!1})]});break;case 4:t.setState({mainColor:"rgb(0,107,71)",show:3,slides:[G({},t.state.slides[0],{active:!0}),G({},t.state.slides[1],{active:!0}),G({},t.state.slides[2],{active:!1}),G({},t.state.slides[3],{active:!1})]})}},t.state={slides:[{title:"Farmkart",description:"Farm website example",identifier:"slide1",imgPath:S.a,active:!0,path:"http://mauriciofow.me/sassie"},{title:"The Bakery",description:"Bakery website example",identifier:"slide2",imgPath:N.a,active:!0,path:"http://mauriciofow.me/the-bakery"},{title:"YGO Cards",description:"Yugioh cards searcher",identifier:"slide3",imgPath:T.a,active:!0,path:"http://mauriciofow.me/yugioh-deckbuilder"},{title:"Chankillo Farmers",description:"Farm website example",identifier:"slide3",imgPath:B.a,active:!0,path:"http://mauriciofow.me/ChankilloFarmers"}],start:!1,show:1,mainColor:"rgb(142, 42, 42)"},t}return b()(n,t),d()(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var t,n=this;setTimeout(function(){!n.state.start&&n.setState({start:!0})},2e3),document.addEventListener("mousewheel",Object(Y.throttle)(function(t){t.deltaY<0&&n.handleClickSubir(),t.deltaY>0&&n.handleClickBajar()},700,{trailing:!1})),window.addEventListener("touchstart",function(n){t=n.touches[0].clientY}),window.addEventListener("touchend",function(e){var r=e.changedTouches[0].clientY;r>t+15&&n.handleClickSubir(),r<t-15&&n.handleClickBajar()})}},{key:"render",value:function(){var t=this;return v.a.createElement("div",null,v.a.createElement(j,{mainColor:this.state.mainColor}),v.a.createElement("span",{className:"btn btn--activate",onClick:this.handleClickBajar},v.a.createElement("img",{src:L.a,width:"40px",alt:""})),v.a.createElement(C,{slide:this.state.slides,show:this.state.show,mainColor:this.state.mainColor}),v.a.createElement("div",{className:"dot-colection"},this.state.slides.map(function(n,e){return v.a.createElement("div",{className:"dot-container"},v.a.createElement("div",{className:"dot",id:e===t.state.show-1?"selected":null})," ",v.a.createElement("p",{style:e===t.state.show-1?{opacity:1,marginLeft:"0px"}:{opacity:0,marginLeft:"30px"}},n.title))})),v.a.createElement(_,{style:{display:"none"}},v.a.createElement(F,{start:this.state.start})))}}]),n}(g.Component);i.a.render(v.a.createElement(J,null),document.getElementById("root"))}]);