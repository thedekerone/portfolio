(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{25:function(t,n,e){var r=e(26);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(10)(r,i);r.locals&&(t.exports=r.locals)},26:function(t,n,e){(n=t.exports=e(9)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap);",""]);var r=e(27),i=r(e(28)),a=r(e(29));n.push([t.i,"* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttext-decoration: none;\r\n\tbox-sizing: border-box;\r\n}\r\nbutton:focus {\r\n\toutline: none !important;\r\n}\r\n.btn--project {\r\n\tcolor: white;\r\n}\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\nbody {\r\n\tcolor: white;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n.navbar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 2;\r\n}\r\n.navbar .logo-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.hamburger {\r\n\twidth: 70px;\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tdisplay: flex !important;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttransition: background-color .3s;\r\n\theight: 70px;\r\n\tz-index: 100;\r\n\ttransition: .4s;\r\n}\r\n.hamburguer:hover {\r\n\tcursor: pointer;\r\n}\r\n.name h1 {\r\n\tmargin-left: 1.3em;\r\n\tfont-size: .8rem;\r\n\tfont-weight: 400;\r\n\tletter-spacing: .24rem;\r\n\tcolor: white;\r\n}\r\n\r\n/* button */\r\n.btn {\r\n\tpadding: .8em;\r\n\tbackground: transparent;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.btn--project {\r\n\tz-index: 3;\r\n}\r\n\r\n.btn--project::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 108%;\r\n\tz-index: -1;\r\n\theight: 130%;\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n\tbackground: rgba(34, 34, 34, 0.11);\r\n}\r\n.btn--about::after,\r\n.btn--project::after,\r\n.btn--activate::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 101%;\r\n\theight: 100%;\r\n\tborder: .7px solid rgba(255, 255, 255, 0.959);\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n}\r\n.btn:hover {\r\n\tcursor: pointer;\r\n}\r\n.btn--project:hover::after {\r\n\twidth: 115%;\r\n\theight: 153%;\r\n\tborder: .1px solid rgba(241, 240, 240, 0.836);\r\n}\r\n.btn--project:hover::before {\r\n\tbackground: rgba(34, 34, 34, 0.226);\r\n}\r\n.btn--about {\r\n\tmargin-right: 1em;\r\n\tfont-size: .9rem;\r\n\tfont-weight: bold;\r\n\tposition: relative;\r\n}\r\n\r\n.btn--about::before {\r\n\tcontent: '';\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n\tleft: 0;\r\n\twidth: 0;\r\n\theight: 100%;\r\n\ttransition: .5s;\r\n}\r\n\r\n.btn--about:hover::before {\r\n\twidth: 100%;\r\n}\r\n\r\n.btn--activate {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, 0);\r\n\tz-index: 20;\r\n\tcolor: white;\r\n}\r\n.btn--project {\r\n\tmargin-top: 3rem;\r\n\tpadding: 1.3rem 3.4em;\r\n}\r\n\r\n/* Main section */\r\n.main {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr 1fr;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\r\n\theight: 100%;\r\n}\r\n.bg-section {\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tfilter: brightness(.75);\r\n\ttransition: z-index 0s;\r\n\t/* transition: height 500ms, z-index 0s;\r\n\t\r\n\ttransition-timing-function: linear;\r\n\twill-change: height; */\r\n\ttransform-origin: top center;\r\n\t/* bottom: 0; */\r\n\tposition: fixed;\r\n\tz-index: -1;\r\n}\r\n.bg-section img {\r\n\tz-index: 1;\r\n}\r\n\r\n/* Description */\r\n\r\n.desc-section {\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tbackground-image: url("+i+");\r\n\tbackground-blend-mode: multiply;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.desc-section .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n.desc-section .container h1 {\r\n\tfont-size: 3rem;\r\n\tposition: relative;\r\n\tletter-spacing: .17rem;\r\n\ttext-align: center;\r\n\r\n\tpadding: .7rem;\r\n}\r\n.desc-section .container span {\r\n\tfont-size: .8rem;\r\n}\r\n\r\n/* desc animation control */\r\n.container h1 {\r\n\ttransition: 1.1s;\r\n\ttransition-delay: .3s;\r\n\tposition: relative;\r\n}\r\n.container hr {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .8s;\r\n\ttransition-delay: .7s;\r\n\r\n\tposition: relative;\r\n}\r\n.container .description {\r\n\ttransition: .9s;\r\n\ttransition-delay: .8s;\r\n\tposition: relative;\r\n}\r\n.container .skills {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .4s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n.container .btn {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .7s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n/*  */\r\nhr {\r\n\twidth: 60px;\r\n\tmargin: 0 0 .8rem;\r\n\tborder: none;\r\n\tbackground: white;\r\n\theight: 2.5px;\r\n}\r\n\r\n/* slides control */\r\n.img-slider {\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n.infoSlider {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n}\r\n\r\n/* DOTS */\r\n\r\n.dot-colection {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\tz-index: 2;\r\n\ttop: 45%;\r\n}\r\n.dot-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: .8rem;\r\n\t/* font-weight: bold; */\r\n}\r\n.dot-container p {\r\n\ttransition: .4s cubic-bezier(.51, .51, .65, 1.02);\r\n}\r\n.dot {\r\n\tborder-radius: 50%;\r\n\twidth: 6px;\r\n\tmargin: 10px;\r\n\theight: 6px;\r\n\tdisplay: inline-block;\r\n\tbackground: rgb(202, 202, 202);\r\n\tz-index: 30;\r\n\ttransition: cubic-bezier(.51, .51, .63, 1.32) .3s;\r\n}\r\n#selected {\r\n\ttransform: scale(2.3);\r\n}\r\n\r\nbody {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n}\r\n\r\n/* WAITING PAGE */\r\n#waiting-page {\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: relative;\r\n}\r\n\r\n.waiting-page {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 100;\r\n\tposition: relative;\r\n\ttransition: .6s;\r\n}\r\n.waiting-page::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tright: 0;\r\n\tz-index: -1;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: left top;\r\n\ttop: 0;\r\n}\r\n.waiting-page::before {\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\tleft: 0;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbackground-position: left bottom;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbottom: 0;\r\n}\r\n#start::after {\r\n\twidth: 0vw;\r\n}\r\n#start::before {\r\n\twidth: 0vw;\r\n}\r\n#start {\r\n\twidth: 95%;\r\n\r\n\theight: 95%;\r\n}\r\n#start h1 {\r\n\topacity: 0;\r\n}\r\n\r\n/* \r\n\r\n\r\n*/\r\n.waiting-page h1 {\r\n\tfont-size: 1.15rem;\r\n\tfont-weight: 400;\r\n\tcolor: #50c72b;\r\n\tbackground-image: -webkit-linear-gradient(92deg, #1fbd1f, #27509c);\r\n\t-webkit-background-clip: text;\r\n\t-webkit-animation: hue 2s infinite linear;\r\n\ttransition: .3s;\r\n\ttransition-delay: .5s;\r\n}\r\n@-webkit-keyframes hue {\r\n\tfrom {\r\n\t\t-webkit-filter: hue-rotate(0deg);\r\n\t}\r\n\tto {\r\n\t\t-webkit-filter: hue-rotate(-360deg);\r\n\t}\r\n}\r\n\r\n/* responsive */\r\n@media screen and (max-width: 1000px) {\r\n\thtml {\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n@media screen and (max-width: 700px) {\r\n\thtml {\r\n\t\tfont-size: 9px;\r\n\t}\r\n\t.btn--activate {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.waiting-page::after {\r\n\t\tbackground-attachment: scroll;\r\n\t\tbackground-size: auto 100vh;\r\n\t}\r\n\t.waiting-page::before {\r\n\t\tbackground-size: auto 100vh;\r\n\t\tbackground-attachment: scroll;\r\n\t}\r\n\t.bg-section img {\r\n\t\theight: 100vh;\r\n\t}\r\n\t.desc-section {\r\n\t\theight: 50vh;\r\n\t\tmargin-top: 50vh;\r\n\t}\r\n\t.btn--activate {\r\n\t\tz-index: 30;\r\n\t}\r\n\t.main {\r\n\t\tgrid-template: 1fr/1fr;\r\n\t}\r\n\t.dot-colection {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n",""])},28:function(t,n,e){t.exports=e.p+"320d8963b60140a98a59f6575b333232.png"},29:function(t,n,e){t.exports=e.p+"d2b4ba52312bfdba4b1295af05c34209.jpg"},31:function(t,n,e){var r=e(32);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(10)(r,i);r.locals&&(t.exports=r.locals)},32:function(t,n,e){(t.exports=e(9)(!1)).push([t.i,".colorful {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tz-index: 31;\r\n\ttransition-duration: .3s;\r\n\toverflow: hidden;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttransition-property: height, width;\r\n}\r\n.menu-container {\r\n\tposition: relative;\r\n\tz-index: -1;\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\toverflow: hidden;\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n}\r\n.menu-item {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tpadding: .8rem;\r\n\tcolor: white;\r\n\tfont-size: 1.3rem;\r\n\ttransition-property: opacity, background-color;\r\n\tfont-weight: bold;\r\n\ttransition-duration: .3s;\r\n}\r\n.menu-item:hover {\r\n\tbackground-color: rgba(1, 1, 1, 0.219);\r\n}\r\n",""])},33:function(t,n,e){var r=e(34);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(10)(r,i);r.locals&&(t.exports=r.locals)},34:function(t,n,e){(t.exports=e(9)(!1)).push([t.i,'/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n\tpadding: 15px 15px;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\ttransition-property: opacity, filter;\n\ttransition-duration: 0.15s;\n\ttransition-timing-function: linear;\n\tfont: inherit;\n\tcolor: inherit;\n\ttext-transform: none;\n\tbackground-color: transparent;\n\tborder: 0;\n\tmargin: 0;\n\toverflow: visible;\n}\n.hamburger:hover {\n\topacity: 0.7;\n}\n.hamburger.is-active:hover {\n\topacity: 0.7;\n}\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n\tbackground-color: #fff;\n}\n\n.hamburger-box {\n\twidth: 40px;\n\theight: 24px;\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n.hamburger-inner {\n\tdisplay: block;\n\ttop: 50%;\n\tmargin-top: -2px;\n}\n.hamburger-inner,\n.hamburger-inner::before,\n.hamburger-inner::after {\n\twidth: 40px;\n\theight: 4px;\n\tbackground-color: #fff;\n\tborder-radius: 4px;\n\tposition: absolute;\n\ttransition-property: transform;\n\ttransition-duration: 0.15s;\n\ttransition-timing-function: ease;\n}\n.hamburger-inner::before,\n.hamburger-inner::after {\n\tcontent: "";\n\tdisplay: block;\n}\n.hamburger-inner::before {\n\ttop: -10px;\n}\n.hamburger-inner::after {\n\tbottom: -10px;\n}\n\n/*\n   * Spin\n   */\n.hamburger--spin .hamburger-inner {\n\ttransition-duration: 0.22s;\n\ttransition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin .hamburger-inner::before {\n\ttransition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\n.hamburger--spin .hamburger-inner::after {\n\ttransition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n\n.hamburger--spin.is-active .hamburger-inner {\n\ttransform: rotate(225deg);\n\ttransition-delay: 0.12s;\n\ttransition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spin.is-active .hamburger-inner::before {\n\ttop: 0;\n\topacity: 0;\n\ttransition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\n.hamburger--spin.is-active .hamburger-inner::after {\n\tbottom: 0;\n\ttransform: rotate(-90deg);\n\ttransition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n',""])},35:function(t,n,e){t.exports=e.p+"02dcbc428d1e2705cf584b32aade6407.jpg"},36:function(t,n,e){t.exports=e.p+"a4e455c304fd1d2509533f3b88fc2a4d.jpg"},37:function(t,n,e){t.exports=e.p+"5fc4e802515186beb415703eb72b27a8.jpg"},38:function(t,n,e){t.exports=e.p+"0d70b5e2e316c9eaf82a7b49b40621ac.jpg"},39:function(t,n,e){t.exports=e.p+"08f284310de37f9aa0c1ce8fbd939535.svg"},41:function(t,n,e){t.exports=e(3)(8)},43:function(t,n,e){"use strict";e.r(n);var r=e(13),i=e.n(r),a=e(14),o=e.n(a),s=e(15),c=e.n(s),l=e(16),d=e.n(l),m=e(19),b=e.n(m),u=e(20),h=e.n(u),p=e(0),g=e.n(p),f=e(11),v=e.n(f),x=(e(25),e(31),e(33),function(t){var n=Object(p.useState)("white"),e=v()(n,2),r=e[0],i=e[1],a=Object(p.useState)(!1),o=v()(a,2),s=o[0],c=o[1];return g.a.createElement("div",{className:"navbar",style:{zIndex:32}},g.a.createElement("div",{className:"colorful",style:{width:s?"100vw":"0vw",height:s?"100vh":"70px",backgroundColor:t.mainColor,transitionDelay:s?".5s,0s":"0s , .5s"}},g.a.createElement("div",{className:"menu-container"},t.slide.map(function(t){return g.a.createElement("h1",null,"Projects"),g.a.createElement("a",{href:t.path,target:"_blank",className:"menu-item",style:{transitionDelay:s?".5s ,0s":"0s, 0s",transitionDuration:".2\ts",opacity:s?1:0}},t.title)}))),g.a.createElement("div",{className:"logo-container"},g.a.createElement("button",{type:"button",onClick:function(){return c(!s)},className:"hamburger hamburger--spin ".concat(s?"is-active":null),style:{backgroundColor:t.mainColor}},g.a.createElement("span",{class:"hamburger-box"},g.a.createElement("span",{class:"hamburger-inner"}))),g.a.createElement("div",{className:"name"},g.a.createElement("h1",null,"MAURICIO FOW"))),g.a.createElement("div",{className:"btn btn--about",onMouseOver:function(){i(t.mainColor)},onMouseLeave:function(){i("white")},style:{color:r}},g.a.createElement("span",null,"about me")))}),w=e(12);function y(t){return g.a.createElement("div",{className:"img-slider"},t.slide.map(function(t){var n=Object(w.b)({h:t.active?100:0,config:{duration:500}}).h;return g.a.createElement(w.a.div,{className:"bg-section",style:{zIndex:"".concat(t.index),height:n.interpolate(function(t){return"".concat(t,"vh")})},id:t.identifier},g.a.createElement("img",{src:t.imgPath,alt:"fist"}))}))}function k(t){var n=t.slide.slice().reverse(),e=Object(w.b)({bg:t.mainColor,config:{duration:300}}).bg;return g.a.createElement(w.a.div,{className:"infoSlider",style:t.movimiento?{backgroundColor:e.interpolate(function(t){return"".concat(t)})}:null},n.map(function(n,r){var i=Object(w.b)({y:t.show-1===r?0:n.active?100:-100,config:{duration:500},immediate:!n.active}).y,a=Object(w.b)({y2:t.show-1===r?0:n.active?100:-100,config:{duration:500},immediate:t.show-1!==r&&!!n.active}).y2;return g.a.createElement(w.a.div,{className:"desc-section",style:"subiendo"==t.movimiento?{backgroundColor:e.interpolate(function(t){return"".concat(t)}),bottom:0,transform:i.interpolate(function(t){return"translateY(".concat(t,"vh)")})}:{backgroundColor:e.interpolate(function(t){return"".concat(t)}),bottom:0,transform:a.interpolate(function(t){return"translateY(".concat(t,"vh)")})},id:"info".concat(n.identifier)},g.a.createElement("div",{className:"container"},g.a.createElement("span",{className:"skills",style:t.show-1===r?{opacity:1,bottom:0}:{opacity:0,bottom:"-10px",transitionDelay:0}},"UI|Front-end"),g.a.createElement("h1",{style:t.show-1===r?{opacity:1,letterSpacing:".17rem"}:{opacity:0,letterSpacing:"-1.2rem",transitionDelay:0}},n.title),g.a.createElement("hr",{style:t.show-1===r?{opacity:1}:{opacity:0,width:0,transitionDelay:0}}),g.a.createElement("span",{className:"description",style:t.show-1===r?{opacity:1,left:0}:{opacity:0,left:"-20px",transitionDelay:0}},n.description),g.a.createElement("a",{href:n.path,target:"_blank",style:t.show-1===r?{opacity:1,bottom:0}:{opacity:0,bottom:"-30px",transitionDelay:0},className:"btn btn--project"},"view project")))}))}function j(t){return g.a.createElement("section",{className:"main"},g.a.createElement(y,{slide:t.slide,show:t.show}),g.a.createElement(k,{slide:t.slide,show:t.show,movimiento:t.movimiento,mainColor:t.mainColor}))}var E=e(35),z=e.n(E),C=e(36),O=e.n(C),S=e(37),N=e.n(S),P=e(38),D=e.n(P);function I(t){var n=Object(p.useState)("flex"),e=v()(n,2),r=e[0],i=e[1];return setTimeout(function(){i("none")},3600),g.a.createElement("div",{className:"waiting-page",style:{display:r},id:t.start?"start":null},g.a.createElement("h1",null,"PROJECTS PORTFOLIO"))}e(39);var T=e(40),F=e(4),Y=e.n(F);function L(t){return Y.a.createPortal(t.children,document.getElementById("waiting-page"))}function M(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function B(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?M(e,!0).forEach(function(n){i()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):M(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}e.d(n,"default",function(){return J});var J=function(t){function n(){var t;return o()(this,n),(t=d()(this,b()(n).call(this))).handleClickBajar=function(){switch(t.state.show){case 1:t.setState({mainColor:"rgb(35, 48, 65)",movimiento:"bajando",show:2,slides:[B({},t.state.slides[0],{active:!1,index:-1}),B({},t.state.slides[1],{active:!0,index:-1}),B({},t.state.slides[2],{active:!0,index:1}),B({},t.state.slides[3],{active:!1,index:1})]});break;case 2:t.setState({mainColor:"#b03049",movimiento:"bajando",show:3,slides:[B({},t.state.slides[0],{active:!0,index:-1}),B({},t.state.slides[1],{active:!0,index:1}),B({},t.state.slides[2],{active:!1,index:1}),B({},t.state.slides[3],{active:!1,index:1})]});break;case 3:t.setState({mainColor:"rgb(0,107,71)",movimiento:"bajando",show:4,slides:[B({},t.state.slides[0],{active:!0,index:1}),B({},t.state.slides[1],{active:!1,index:1}),B({},t.state.slides[2],{active:!1,index:-1}),B({},t.state.slides[3],{active:!0,index:-1})]});break;case 4:t.setState({mainColor:"rgb(142, 42, 42)",movimiento:"bajando",show:1,slides:[B({},t.state.slides[0],{active:!1,index:1}),B({},t.state.slides[1],{active:!1,index:-1}),B({},t.state.slides[2],{active:!0,index:-1}),B({},t.state.slides[3],{active:!0,index:-1})]})}},t.handleClickSubir=function(){switch(t.state.show){case 1:t.setState({mainColor:"rgb(0,107,71)",movimiento:"subiendo",show:4,slides:[B({},t.state.slides[0],{active:!0,index:1}),B({},t.state.slides[1],{active:!1,index:1}),B({},t.state.slides[2],{active:!1,index:-1}),B({},t.state.slides[3],{active:!0,index:-1})]});break;case 2:t.setState({mainColor:"rgb(142, 42, 42)",movimiento:"subiendo",show:1,slides:[B({},t.state.slides[0],{active:!1,index:-1}),B({},t.state.slides[1],{active:!1,index:-1}),B({},t.state.slides[2],{active:!0,index:-1}),B({},t.state.slides[3],{active:!0,index:1})]});break;case 3:t.setState({mainColor:"rgb(35, 48, 65)",movimiento:"subiendo",show:2,slides:[B({},t.state.slides[0],{active:!1,index:-1}),B({},t.state.slides[1],{active:!0,index:-1}),B({},t.state.slides[2],{active:!0,index:1}),B({},t.state.slides[3],{active:!1,index:1})]});break;case 4:t.setState({mainColor:"#b03049",movimiento:"subiendo",show:3,slides:[B({},t.state.slides[0],{active:!0,index:1}),B({},t.state.slides[1],{active:!0,index:1}),B({},t.state.slides[2],{active:!1,index:1}),B({},t.state.slides[3],{active:!1,index:-1})]})}},t.state={slides:[{title:"Chankillo Farmers",description:"Farm website example",identifier:"slide4",imgPath:z.a,active:!1,path:"http://mauriciofow.me/ChankilloFarmers",index:-1},{title:"The Bakery",description:"Bakery website example",identifier:"slide2",imgPath:O.a,active:!1,path:"http://mauriciofow.me/the-bakery",index:-1},{title:"YGO Cards",description:"Yugioh cards searcher",identifier:"slide3",imgPath:N.a,active:!0,path:"http://mauriciofow.me/yugioh-deckbuilder",index:-1},{title:"Farmkart",description:"Farm website example",identifier:"slide1",imgPath:D.a,active:!0,path:"http://mauriciofow.me/sassie",index:-1}],start:!1,show:1,mainColor:"rgb(142, 42, 42)",movimiento:"subiendo"},t}return h()(n,t),c()(n,[{key:"componentWillMount",value:function(){var t,n=this;setTimeout(function(){!n.state.start&&n.setState({start:!0})},2500),document.addEventListener("mousewheel",Object(T.throttle)(function(t){t.deltaY<0&&n.handleClickSubir(),t.deltaY>0&&n.handleClickBajar()},530,{trailing:!1})),window.addEventListener("touchstart",function(n){t=n.touches[0].clientY}),window.addEventListener("touchend",function(e){var r=e.changedTouches[0].clientY;r>t+15&&n.handleClickSubir(),r<t-15&&n.handleClickBajar()})}},{key:"render",value:function(){var t=this;return g.a.createElement("div",null,g.a.createElement(x,{mainColor:this.state.mainColor,slide:this.state.slides}),g.a.createElement(j,{slide:this.state.slides,show:this.state.show,movimiento:this.state.movimiento,mainColor:this.state.mainColor}),g.a.createElement("div",{className:"dot-colection"},this.state.slides.slice().reverse().map(function(n,e){return g.a.createElement("div",{className:"dot-container"},g.a.createElement("div",{className:"dot",id:e===t.state.show-1?"selected":null})," ",g.a.createElement("p",{style:e===t.state.show-1?{opacity:1,marginLeft:"0px"}:{opacity:0,marginLeft:"30px"}},n.title))})),g.a.createElement(L,{style:{display:"none"}},g.a.createElement(I,{start:this.state.start})))}}]),n}(p.Component)}}]);