(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{25:function(t,n,e){t.exports=e.p+"29d58229bf09bec9ccb275cfba83fa1e.svg"},26:function(t,n,e){var r=e(27);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(11)(r,i);r.locals&&(t.exports=r.locals)},27:function(t,n,e){(n=t.exports=e(10)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap);",""]);var r=e(28),i=r(e(29)),a=r(e(30));n.push([t.i,"* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttext-decoration: none;\r\n\tbox-sizing: border-box;\r\n}\r\n.btn--project {\r\n\tcolor: white;\r\n}\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\nbody {\r\n\tcolor: white;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n.navbar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 2;\r\n}\r\n.navbar .logo-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.hamburguer {\r\n\twidth: 70px;\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 70px;\r\n\tz-index: 100;\r\n\ttransition: .4s;\r\n}\r\n.hamburguer:hover {\r\n\tcursor: pointer;\r\n}\r\n.name h1 {\r\n\tmargin-left: 1.3em;\r\n\tfont-size: .8rem;\r\n\tfont-weight: 400;\r\n\tletter-spacing: .24rem;\r\n\tcolor: rgb(189, 189, 189);\r\n}\r\n\r\n/* button */\r\n.btn {\r\n\tpadding: .8em;\r\n\tbackground: transparent;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.btn--project {\r\n\tz-index: 3;\r\n}\r\n\r\n.btn--project::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 108%;\r\n\tz-index: -1;\r\n\theight: 130%;\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n\tbackground: rgba(34, 34, 34, 0.11);\r\n}\r\n.btn--about::after,\r\n.btn--project::after,\r\n.btn--activate::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 101%;\r\n\theight: 100%;\r\n\tborder: .7px solid rgba(255, 255, 255, 0.959);\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n}\r\n.btn:hover {\r\n\tcursor: pointer;\r\n}\r\n.btn--project:hover::after {\r\n\twidth: 115%;\r\n\theight: 153%;\r\n\tborder: .1px solid rgba(241, 240, 240, 0.836);\r\n}\r\n.btn--project:hover::before {\r\n\tbackground: rgba(34, 34, 34, 0.226);\r\n}\r\n.btn--about {\r\n\tmargin-right: 1em;\r\n\tfont-size: .9rem;\r\n\tfont-weight: bold;\r\n\tposition: relative;\r\n}\r\n\r\n.btn--about::before {\r\n\tcontent: '';\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n\tleft: 0;\r\n\twidth: 0;\r\n\theight: 100%;\r\n\ttransition: .5s;\r\n}\r\n\r\n.btn--about:hover::before {\r\n\twidth: 100%;\r\n}\r\n\r\n.btn--activate {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, 0);\r\n\tz-index: 20;\r\n\tcolor: white;\r\n}\r\n.btn--project {\r\n\tmargin-top: 3rem;\r\n\tpadding: 1.3rem 3.4em;\r\n}\r\n\r\n/* Main section */\r\n.main {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr 1fr;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\r\n\theight: 100%;\r\n}\r\n.bg-section {\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tfilter: brightness(.85);\r\n\ttransition: z-index 0s;\r\n\t/* transition: height 500ms, z-index 0s;\r\n\t\r\n\ttransition-timing-function: linear;\r\n\twill-change: height; */\r\n\ttransform-origin: top center;\r\n\t/* bottom: 0; */\r\n\tposition: fixed;\r\n\tz-index: -1;\r\n}\r\n.bg-section img {\r\n\tz-index: 1;\r\n}\r\n\r\n/* Description */\r\n\r\n.desc-section {\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tbackground-image: url("+i+");\r\n\tbackground-blend-mode: multiply;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.desc-section .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n.desc-section .container h1 {\r\n\tfont-size: 3rem;\r\n\tposition: relative;\r\n\tletter-spacing: .17rem;\r\n\ttext-align: center;\r\n\r\n\tpadding: .7rem;\r\n}\r\n.desc-section .container span {\r\n\tfont-size: .8rem;\r\n}\r\n\r\n/* desc animation control */\r\n.container h1 {\r\n\ttransition: 1.1s;\r\n\ttransition-delay: .3s;\r\n\tposition: relative;\r\n}\r\n.container hr {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .8s;\r\n\ttransition-delay: .7s;\r\n\r\n\tposition: relative;\r\n}\r\n.container .description {\r\n\ttransition: .9s;\r\n\ttransition-delay: .8s;\r\n\tposition: relative;\r\n}\r\n.container .skills {\r\n\ttransition: .6s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n.container .btn {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .7s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n/*  */\r\nhr {\r\n\twidth: 60px;\r\n\tmargin: 0 0 .8rem;\r\n\tborder: none;\r\n\tbackground: white;\r\n\theight: 2.5px;\r\n}\r\n\r\n/* slides control */\r\n.img-slider {\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n.infoSlider {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n}\r\n\r\n/* DOTS */\r\n\r\n.dot-colection {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 45%;\r\n}\r\n.dot-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: .8rem;\r\n\t/* font-weight: bold; */\r\n}\r\n.dot-container p {\r\n\ttransition: .4s cubic-bezier(.51, .51, .65, 1.02);\r\n}\r\n.dot {\r\n\tborder-radius: 50%;\r\n\twidth: 6px;\r\n\tmargin: 10px;\r\n\theight: 6px;\r\n\tdisplay: inline-block;\r\n\tbackground: rgb(202, 202, 202);\r\n\tz-index: 30;\r\n\ttransition: cubic-bezier(.51, .51, .63, 1.32) .3s;\r\n}\r\n#selected {\r\n\ttransform: scale(2.3);\r\n}\r\n\r\nbody {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n}\r\n\r\n/* WAITING PAGE */\r\n#waiting-page {\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: relative;\r\n}\r\n\r\n.waiting-page {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 100;\r\n\tposition: relative;\r\n\ttransition: .6s;\r\n}\r\n.waiting-page::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tright: 0;\r\n\tz-index: -1;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: left top;\r\n\ttop: 0;\r\n}\r\n.waiting-page::before {\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\tleft: 0;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbackground-position: left bottom;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbottom: 0;\r\n}\r\n#start::after {\r\n\twidth: 0vw;\r\n}\r\n#start::before {\r\n\twidth: 0vw;\r\n}\r\n#start {\r\n\twidth: 95%;\r\n\r\n\theight: 95%;\r\n}\r\n#start h1 {\r\n\topacity: 0;\r\n}\r\n\r\n/* \r\n\r\n\r\n*/\r\n.waiting-page h1 {\r\n\tfont-size: 1.15rem;\r\n\tfont-weight: 400;\r\n\tcolor: #50c72b;\r\n\tbackground-image: -webkit-linear-gradient(92deg, #1fbd1f, #27509c);\r\n\t-webkit-background-clip: text;\r\n\t-webkit-animation: hue 2s infinite linear;\r\n\ttransition: .3s;\r\n\ttransition-delay: .5s;\r\n}\r\n@-webkit-keyframes hue {\r\n\tfrom {\r\n\t\t-webkit-filter: hue-rotate(0deg);\r\n\t}\r\n\tto {\r\n\t\t-webkit-filter: hue-rotate(-360deg);\r\n\t}\r\n}\r\n\r\n/* responsive */\r\n@media screen and (max-width: 1000px) {\r\n\thtml {\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n@media screen and (max-width: 700px) {\r\n\thtml {\r\n\t\tfont-size: 9px;\r\n\t}\r\n\t.btn--activate {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.waiting-page::after {\r\n\t\tbackground-attachment: scroll;\r\n\t\tbackground-size: auto 100vh;\r\n\t}\r\n\t.waiting-page::before {\r\n\t\tbackground-size: auto 100vh;\r\n\t\tbackground-attachment: scroll;\r\n\t}\r\n\t.bg-section img {\r\n\t\theight: 100vh;\r\n\t}\r\n\t.desc-section {\r\n\t\theight: 50vh;\r\n\t\tmargin-top: 50vh;\r\n\t}\r\n\t.btn--activate {\r\n\t\tz-index: 30;\r\n\t}\r\n\t.main {\r\n\t\tgrid-template: 1fr/1fr;\r\n\t}\r\n\t.dot-colection {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n",""])},29:function(t,n,e){t.exports=e.p+"320d8963b60140a98a59f6575b333232.png"},30:function(t,n,e){t.exports=e.p+"d2b4ba52312bfdba4b1295af05c34209.jpg"},32:function(t,n,e){var r=e(33);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(11)(r,i);r.locals&&(t.exports=r.locals)},33:function(t,n,e){(t.exports=e(10)(!1)).push([t.i,".colorful {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tz-index: 31;\r\n\ttransition-duration: .3s;\r\n\toverflow: hidden;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttransition-property: height, width;\r\n}\r\n.menu-container {\r\n\tposition: relative;\r\n\tz-index: -1;\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\toverflow: hidden;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n}\r\n.menu-item {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tpadding: .8rem;\r\n\tcolor: white;\r\n\tfont-size: 1.3rem;\r\n\ttransition-property: opacity, background-color;\r\n\tfont-weight: bold;\r\n\ttransition-duration: .3s;\r\n}\r\n.menu-item:hover {\r\n\tbackground-color: rgba(1, 1, 1, 0.219);\r\n}\r\n",""])},34:function(t,n,e){t.exports=e.p+"02dcbc428d1e2705cf584b32aade6407.jpg"},35:function(t,n,e){t.exports=e.p+"a4e455c304fd1d2509533f3b88fc2a4d.jpg"},36:function(t,n,e){t.exports=e.p+"5fc4e802515186beb415703eb72b27a8.jpg"},37:function(t,n,e){t.exports=e.p+"0d70b5e2e316c9eaf82a7b49b40621ac.jpg"},38:function(t,n,e){t.exports=e.p+"08f284310de37f9aa0c1ce8fbd939535.svg"},40:function(t,n,e){t.exports=e(3)(8)},42:function(t,n,e){"use strict";e.r(n);var r=e(13),i=e.n(r),a=e(14),o=e.n(a),s=e(15),c=e.n(s),l=e(16),d=e.n(l),m=e(19),h=e.n(m),p=e(20),b=e.n(p),u=e(0),f=e.n(u),g=e(9),v=e.n(g),x=e(25),w=e.n(x),y=(e(26),e(32),function(t){var n=Object(u.useState)("white"),e=v()(n,2),r=e[0],i=e[1],a=Object(u.useState)(!1),o=v()(a,2),s=o[0],c=o[1];return f.a.createElement("div",{className:"navbar",style:{zIndex:32}},f.a.createElement("div",{className:"colorful",style:{width:s?"100vw":"0vw",height:s?"100vh":"70px",backgroundColor:t.mainColor,transitionDelay:s?".5s,0s":"0s , .5s"}},f.a.createElement("div",{className:"menu-container"},t.slide.map(function(t){return f.a.createElement("h1",null,"Projects"),f.a.createElement("a",{href:"#",className:"menu-item",style:{transitionDelay:s?".7s ,0s":"0s, 0s",transitionDuration:".4s",opacity:s?1:0}},t.title)}))),f.a.createElement("div",{className:"logo-container"},f.a.createElement("span",{onClick:function(){return c(!s)},className:"hamburguer",style:{background:t.mainColor}},f.a.createElement("img",{src:w.a,width:"35px",alt:"ham"})),f.a.createElement("div",{className:"name"},f.a.createElement("h1",null,"MAURICIO FOW"))),f.a.createElement("div",{className:"btn btn--about",onMouseOver:function(){i(t.mainColor)},onMouseLeave:function(){i("white")},style:{color:r}},f.a.createElement("span",null,"about me")))}),k=e(12);function j(t){return f.a.createElement("div",{className:"img-slider"},t.slide.map(function(t){var n=Object(k.b)({h:t.active?100:0,config:{duration:500}}).h;return f.a.createElement(k.a.div,{className:"bg-section",style:{zIndex:"".concat(t.index),height:n.interpolate(function(t){return"".concat(t,"vh")})},id:t.identifier},f.a.createElement("img",{src:t.imgPath,alt:"fist"}))}))}function E(t){var n=t.slide.slice().reverse(),e=Object(k.b)({bg:t.mainColor,config:{duration:300}}).bg;return f.a.createElement(k.a.div,{className:"infoSlider",style:t.movimiento?{backgroundColor:e.interpolate(function(t){return"".concat(t)})}:null},n.map(function(n,r){var i=Object(k.b)({y:t.show-1===r?0:n.active?100:-100,config:{duration:500},immediate:!n.active}).y,a=Object(k.b)({y2:t.show-1===r?0:n.active?100:-100,config:{duration:500},immediate:t.show-1!==r&&!!n.active}).y2;return f.a.createElement(k.a.div,{className:"desc-section",style:"subiendo"==t.movimiento?{backgroundColor:e.interpolate(function(t){return"".concat(t)}),bottom:0,transform:i.interpolate(function(t){return"translateY(".concat(t,"vh)")})}:{backgroundColor:e.interpolate(function(t){return"".concat(t)}),bottom:0,transform:a.interpolate(function(t){return"translateY(".concat(t,"vh)")})},id:"info".concat(n.identifier)},f.a.createElement("div",{className:"container"},f.a.createElement("span",{className:"skills",style:t.show-1===r?{opacity:1,bottom:0}:{opacity:0,bottom:"-10px",transitionDelay:0}},"UI|Front-end"),f.a.createElement("h1",{style:t.show-1===r?{opacity:1,letterSpacing:".17rem"}:{opacity:0,letterSpacing:"-1.2rem",transitionDelay:0}},n.title),f.a.createElement("hr",{style:t.show-1===r?{opacity:1}:{opacity:0,width:0,transitionDelay:0}}),f.a.createElement("span",{className:"description",style:t.show-1===r?{opacity:1,left:0}:{opacity:0,left:"-20px",transitionDelay:0}},n.description),f.a.createElement("a",{href:n.path,target:"_blank",style:t.show-1===r?{opacity:1,bottom:0}:{opacity:0,bottom:"-30px",transitionDelay:0},className:"btn btn--project"},"view project")))}))}function z(t){return f.a.createElement("section",{className:"main"},f.a.createElement(j,{slide:t.slide,show:t.show}),f.a.createElement(E,{slide:t.slide,show:t.show,movimiento:t.movimiento,mainColor:t.mainColor}))}var C=e(34),O=e.n(C),S=e(35),N=e.n(S),P=e(36),D=e.n(P),I=e(37),F=e.n(I);function T(t){var n=Object(u.useState)("flex"),e=v()(n,2),r=e[0],i=e[1];return setTimeout(function(){i("none")},3600),f.a.createElement("div",{className:"waiting-page",style:{display:r},id:t.start?"start":null},f.a.createElement("h1",null,"PROJECTS PORTFOLIO"))}e(38);var Y=e(39),L=e(4),M=e.n(L);function B(t){return M.a.createPortal(t.children,document.getElementById("waiting-page"))}function A(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function G(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(e,!0).forEach(function(n){i()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}e.d(n,"default",function(){return J});var J=function(t){function n(){var t;return o()(this,n),(t=d()(this,h()(n).call(this))).handleClickBajar=function(){switch(t.state.show){case 1:t.setState({mainColor:"rgb(35, 48, 65)",movimiento:"bajando",show:2,slides:[G({},t.state.slides[0],{active:!1,index:-1}),G({},t.state.slides[1],{active:!0,index:-1}),G({},t.state.slides[2],{active:!0,index:1}),G({},t.state.slides[3],{active:!1,index:1})]});break;case 2:t.setState({mainColor:"#b03049",movimiento:"bajando",show:3,slides:[G({},t.state.slides[0],{active:!0,index:-1}),G({},t.state.slides[1],{active:!0,index:1}),G({},t.state.slides[2],{active:!1,index:1}),G({},t.state.slides[3],{active:!1,index:1})]});break;case 3:t.setState({mainColor:"rgb(0,107,71)",movimiento:"bajando",show:4,slides:[G({},t.state.slides[0],{active:!0,index:1}),G({},t.state.slides[1],{active:!1,index:1}),G({},t.state.slides[2],{active:!1,index:-1}),G({},t.state.slides[3],{active:!0,index:-1})]});break;case 4:t.setState({mainColor:"rgb(142, 42, 42)",movimiento:"bajando",show:1,slides:[G({},t.state.slides[0],{active:!1,index:1}),G({},t.state.slides[1],{active:!1,index:-1}),G({},t.state.slides[2],{active:!0,index:-1}),G({},t.state.slides[3],{active:!0,index:-1})]})}},t.handleClickSubir=function(){switch(t.state.show){case 1:t.setState({mainColor:"rgb(0,107,71)",movimiento:"subiendo",show:4,slides:[G({},t.state.slides[0],{active:!0,index:1}),G({},t.state.slides[1],{active:!1,index:1}),G({},t.state.slides[2],{active:!1,index:-1}),G({},t.state.slides[3],{active:!0,index:-1})]});break;case 2:t.setState({mainColor:"rgb(147, 62, 62)",movimiento:"subiendo",show:1,slides:[G({},t.state.slides[0],{active:!1,index:-1}),G({},t.state.slides[1],{active:!1,index:-1}),G({},t.state.slides[2],{active:!0,index:-1}),G({},t.state.slides[3],{active:!0,index:1})]});break;case 3:t.setState({mainColor:"rgb(35, 48, 65)",movimiento:"subiendo",show:2,slides:[G({},t.state.slides[0],{active:!1,index:-1}),G({},t.state.slides[1],{active:!0,index:-1}),G({},t.state.slides[2],{active:!0,index:1}),G({},t.state.slides[3],{active:!1,index:1})]});break;case 4:t.setState({mainColor:"#b03049",movimiento:"subiendo",show:3,slides:[G({},t.state.slides[0],{active:!0,index:1}),G({},t.state.slides[1],{active:!0,index:1}),G({},t.state.slides[2],{active:!1,index:1}),G({},t.state.slides[3],{active:!1,index:-1})]})}},t.state={slides:[{title:"Farmkart",description:"Farm website example",identifier:"slide1",imgPath:O.a,active:!1,path:"http://mauriciofow.me/sassie",index:-1},{title:"The Bakery",description:"Bakery website example",identifier:"slide2",imgPath:N.a,active:!1,path:"http://mauriciofow.me/the-bakery",index:-1},{title:"YGO Cards",description:"Yugioh cards searcher",identifier:"slide3",imgPath:D.a,active:!0,path:"http://mauriciofow.me/yugioh-deckbuilder",index:-1},{title:"Chankillo Farmers",description:"Farm website example",identifier:"slide4",imgPath:F.a,active:!0,path:"http://mauriciofow.me/ChankilloFarmers",index:-1}],start:!1,show:1,mainColor:"rgb(142, 42, 42)",movimiento:"subiendo"},t}return b()(n,t),c()(n,[{key:"componentWillMount",value:function(){var t,n=this;setTimeout(function(){!n.state.start&&n.setState({start:!0})},2500),document.addEventListener("mousewheel",Object(Y.throttle)(function(t){t.deltaY<0&&n.handleClickSubir(),t.deltaY>0&&n.handleClickBajar()},530,{trailing:!1})),window.addEventListener("touchstart",function(n){t=n.touches[0].clientY}),window.addEventListener("touchend",function(e){var r=e.changedTouches[0].clientY;r>t+15&&n.handleClickSubir(),r<t-15&&n.handleClickBajar()})}},{key:"render",value:function(){var t=this;return f.a.createElement("div",null,f.a.createElement(y,{mainColor:this.state.mainColor,slide:this.state.slides}),f.a.createElement(z,{slide:this.state.slides,show:this.state.show,movimiento:this.state.movimiento,mainColor:this.state.mainColor}),f.a.createElement("div",{className:"dot-colection"},this.state.slides.map(function(n,e){return f.a.createElement("div",{className:"dot-container"},f.a.createElement("div",{className:"dot",id:e===t.state.show-1?"selected":null})," ",f.a.createElement("p",{style:e===t.state.show-1?{opacity:1,marginLeft:"0px"}:{opacity:0,marginLeft:"30px"}},n.title))})),f.a.createElement(B,{style:{display:"none"}},f.a.createElement(T,{start:this.state.start})))}}]),n}(u.Component)}}]);