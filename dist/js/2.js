(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{20:function(t,n,e){t.exports=e.p+"29d58229bf09bec9ccb275cfba83fa1e.svg"},21:function(t,n,e){var r=e(22);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(27)(r,i);r.locals&&(t.exports=r.locals)},22:function(t,n,e){(n=t.exports=e(23)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap);",""]);var r=e(24),i=r(e(25)),a=r(e(26));n.push([t.i,"* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\ttext-decoration: none;\r\n}\r\n.btn--project {\r\n\tcolor: white;\r\n}\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\nbody {\r\n\tcolor: white;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n.navbar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 2;\r\n}\r\n.navbar .logo-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.hamburguer {\r\n\twidth: 70px;\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 70px;\r\n\ttransition: .4s;\r\n}\r\n.hamburguer:hover {\r\n\tcursor: pointer;\r\n}\r\n.name h1 {\r\n\tmargin-left: 1.3em;\r\n\tfont-size: .8rem;\r\n\tfont-weight: 400;\r\n\tletter-spacing: .24rem;\r\n\tcolor: rgb(189, 189, 189);\r\n}\r\n\r\n/* button */\r\n.btn {\r\n\tpadding: .8em;\r\n\tbackground: transparent;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.btn--project {\r\n\tz-index: 3;\r\n}\r\n\r\n.btn--project::before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 108%;\r\n\tz-index: -1;\r\n\theight: 130%;\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n\tbackground: rgba(34, 34, 34, 0.11);\r\n}\r\n.btn--about::after,\r\n.btn--project::after,\r\n.btn--activate::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\twidth: 101%;\r\n\theight: 100%;\r\n\tborder: .7px solid rgba(255, 255, 255, 0.959);\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n}\r\n.btn:hover {\r\n\tcursor: pointer;\r\n}\r\n.btn--project:hover::after {\r\n\twidth: 115%;\r\n\theight: 153%;\r\n\tborder: .1px solid rgba(241, 240, 240, 0.836);\r\n}\r\n.btn--project:hover::before {\r\n\tbackground: rgba(34, 34, 34, 0.226);\r\n}\r\n.btn--about {\r\n\tmargin-right: 1em;\r\n\tfont-size: .9rem;\r\n\tfont-weight: bold;\r\n\tposition: relative;\r\n}\r\n\r\n.btn--about::before {\r\n\tcontent: '';\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n\tleft: 0;\r\n\twidth: 0;\r\n\theight: 100%;\r\n\ttransition: .5s;\r\n}\r\n\r\n.btn--about:hover::before {\r\n\twidth: 100%;\r\n}\r\n\r\n.btn--activate {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, 0);\r\n\tz-index: 20;\r\n\tcolor: white;\r\n}\r\n.btn--project {\r\n\tmargin-top: 3rem;\r\n\tpadding: 1.3rem 3.4em;\r\n}\r\n\r\n/* Main section */\r\n.main {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr 1fr;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\r\n\theight: 100%;\r\n}\r\n.bg-section {\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tfilter: brightness(.85);\r\n\ttransition: height .7s linear;\r\n\twill-change: height;\r\n\t/* bottom: 0; */\r\n\tposition: fixed;\r\n\tz-index: -1;\r\n}\r\n.bg-section img {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n/* Description */\r\n.desc-section {\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tbackground-image: url("+i+");\r\n\ttransition: .4s;\r\n\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tbackground-blend-mode: multiply;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.desc-section .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n.desc-section .container h1 {\r\n\tfont-size: 3rem;\r\n\tposition: relative;\r\n\tletter-spacing: .17rem;\r\n\ttext-align: center;\r\n\tpadding: .7rem;\r\n}\r\n.desc-section .container span {\r\n\tfont-size: .8rem;\r\n}\r\n\r\n/* desc animation control */\r\n.container h1 {\r\n\ttransition: 1.1s;\r\n\ttransition-delay: .3s;\r\n\tposition: relative;\r\n}\r\n.container hr {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .8s;\r\n\ttransition-delay: .7s;\r\n\r\n\tposition: relative;\r\n}\r\n.container .description {\r\n\ttransition: .9s;\r\n\ttransition-delay: .8s;\r\n\tposition: relative;\r\n}\r\n.container .skills {\r\n\ttransition: .6s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n.container .btn {\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .7s;\r\n\tposition: relative;\r\n\r\n\ttransition-delay: 1.2s;\r\n}\r\n/*  */\r\nhr {\r\n\twidth: 60px;\r\n\tmargin: 0 0 .8rem;\r\n\tborder: none;\r\n\tbackground: white;\r\n\theight: 2.5px;\r\n}\r\n\r\n/* slides control */\r\n.img-slider {\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n.infoSlider {\r\n\tposition: relative;\r\n\ttransition: transform .7 linear;\r\n\twill-change: transform;\r\n}\r\n\r\n/* DOTS */\r\n\r\n.dot-colection {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 45%;\r\n}\r\n.dot-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tfont-size: .8rem;\r\n\t/* font-weight: bold; */\r\n}\r\n.dot-container p {\r\n\ttransition: .4s cubic-bezier(.51, .51, .65, 1.02);\r\n}\r\n.dot {\r\n\tborder-radius: 50%;\r\n\twidth: 6px;\r\n\tmargin: 10px;\r\n\theight: 6px;\r\n\tdisplay: inline-block;\r\n\tbackground: rgb(202, 202, 202);\r\n\tz-index: 30;\r\n\ttransition: cubic-bezier(.51, .51, .63, 1.32) .3s;\r\n}\r\n#selected {\r\n\ttransform: scale(2.3);\r\n}\r\n\r\nbody {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n}\r\n\r\n/* WAITING PAGE */\r\n#waiting-page {\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: relative;\r\n}\r\n\r\n.waiting-page {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 100;\r\n\tposition: relative;\r\n\ttransition: .6s;\r\n}\r\n.waiting-page::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tright: 0;\r\n\tz-index: -1;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: auto auto;\r\n\tbackground-position: center;\r\n\ttop: 0;\r\n}\r\n.waiting-page::before {\r\n\ttransition: .5s;\r\n\ttransition-delay: .5s;\r\n\tleft: 0;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbackground-position: center;\r\n\twidth: 100%;\r\n\theight: 50vh;\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-color: #222;\r\n\tbackground-image: url("+a+");\r\n\tbackground-attachment: fixed;\r\n\tbottom: 0;\r\n}\r\n#start::after {\r\n\twidth: 0vw;\r\n}\r\n#start::before {\r\n\twidth: 0vw;\r\n}\r\n#start {\r\n\twidth: 95%;\r\n\r\n\theight: 95%;\r\n}\r\n#start h1 {\r\n\topacity: 0;\r\n}\r\n\r\n/* \r\n\r\n\r\n*/\r\n.waiting-page h1 {\r\n\tfont-size: 1.15rem;\r\n\tfont-weight: 400;\r\n\tcolor: #50c72b;\r\n\tbackground-image: -webkit-linear-gradient(92deg, #1fbd1f, #27509c);\r\n\t-webkit-background-clip: text;\r\n\t-webkit-animation: hue 2s infinite linear;\r\n\ttransition: .3s;\r\n\ttransition-delay: .5s;\r\n}\r\n@-webkit-keyframes hue {\r\n\tfrom {\r\n\t\t-webkit-filter: hue-rotate(0deg);\r\n\t}\r\n\tto {\r\n\t\t-webkit-filter: hue-rotate(-360deg);\r\n\t}\r\n}\r\n\r\n/* responsive */\r\n@media screen and (max-width: 1000px) {\r\n\thtml {\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n@media screen and (max-width: 700px) {\r\n\thtml {\r\n\t\tfont-size: 9px;\r\n\t}\r\n\t.btn--activate {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.bg-section img {\r\n\t\theight: 100vh;\r\n\t}\r\n\t.desc-section {\r\n\t\theight: 50vh;\r\n\t\tmargin-top: 50vh;\r\n\t}\r\n\t.btn--activate {\r\n\t\tz-index: 30;\r\n\t}\r\n\t.main {\r\n\t\tgrid-template: 1fr/1fr;\r\n\t}\r\n}\r\n",""])},25:function(t,n,e){t.exports=e.p+"320d8963b60140a98a59f6575b333232.png"},26:function(t,n,e){t.exports=e.p+"d2b4ba52312bfdba4b1295af05c34209.jpg"},29:function(t,n,e){t.exports=e.p+"a4e455c304fd1d2509533f3b88fc2a4d.jpg"},30:function(t,n,e){t.exports=e.p+"02dcbc428d1e2705cf584b32aade6407.jpg"},31:function(t,n,e){t.exports=e.p+"5fc4e802515186beb415703eb72b27a8.jpg"},32:function(t,n,e){t.exports=e.p+"0d70b5e2e316c9eaf82a7b49b40621ac.jpg"},33:function(t,n,e){t.exports=e.p+"08f284310de37f9aa0c1ce8fbd939535.svg"},35:function(t,n,e){t.exports=e(1)(8)},37:function(t,n,e){"use strict";e.r(n);var r=e(8),i=e.n(r),a=e(9),s=e.n(a),o=e(10),c=e.n(o),l=e(11),d=e.n(l),h=e(14),p=e.n(h),m=e(15),b=e.n(m),u=e(0),g=e.n(u),f=e(7),v=e.n(f),w=e(20),y=e.n(w),x=(e(21),function(t){var n=Object(u.useState)("white"),e=v()(n,2),r=e[0],i=e[1];return g.a.createElement("div",{className:"navbar"},g.a.createElement("div",{className:"logo-container"},g.a.createElement("a",{href:"#",className:"hamburguer",style:{background:t.mainColor}},g.a.createElement("img",{src:y.a,width:"35px",alt:"ham"})),g.a.createElement("div",{className:"name"},g.a.createElement("h1",null,"MAURICIO FOW"))),g.a.createElement("div",{className:"btn btn--about",onMouseOver:function(){i(t.mainColor)},onMouseLeave:function(){i("white")},style:{color:r}},g.a.createElement("span",null,"about me")))});function k(t){return g.a.createElement("div",{className:"img-slider"},t.slide.map(function(t){return g.a.createElement("div",{className:"bg-section",style:t.active?{height:"100%"}:{height:"0"},id:t.identifier},g.a.createElement("img",{src:t.imgPath,alt:"fist"}))}))}function E(t){var n="".concat(-(t.show-1)*document.body.offsetHeight,"px");return g.a.createElement("div",{className:"infoSlider",style:{transform:"translateY(".concat(n,")")}},t.slide.map(function(n,e){return g.a.createElement("div",{className:"desc-section",style:{backgroundColor:t.mainColor},id:"info".concat(n.identifier)},g.a.createElement("div",{className:"container"},g.a.createElement("span",{className:"skills",style:t.show-1===e?{opacity:1,bottom:0}:{opacity:0,bottom:"-10px"}},"UI|Front-end"),g.a.createElement("h1",{style:t.show-1===e?{opacity:1,letterSpacing:".17rem"}:{opacity:0,letterSpacing:"-1.2rem\t"}},n.title),g.a.createElement("hr",{style:t.show-1===e?{opacity:1}:{opacity:0,width:0}}),g.a.createElement("span",{className:"description",style:t.show-1===e?{opacity:1,left:0}:{opacity:0,left:"-20px"}},n.description),g.a.createElement("a",{href:n.path,target:"_blank",style:t.show-1===e?{opacity:1,bottom:0}:{opacity:0,bottom:"-30px"},className:"btn btn--project"},"view project")))}))}function j(t){return g.a.createElement("section",{className:"main"},g.a.createElement(k,{slide:t.slide,show:t.show}),g.a.createElement(E,{slide:t.slide,show:t.show,mainColor:t.mainColor}))}var C=e(29),z=e.n(C),O=e(30),S=e.n(O),N=e(31),P=e.n(N),F=e(32),I=e.n(F);function M(t){var n=Object(u.useState)("flex"),e=v()(n,2),r=e[0],i=e[1];return setTimeout(function(){i("none")},3100),g.a.createElement("div",{className:"waiting-page",style:{display:r},id:t.start?"start":null},g.a.createElement("h1",null,"PROJECTS PORTFOLIO"))}var T=e(33),B=e.n(T),D=e(34),L=e(2),Y=e.n(L);function A(t){return Y.a.createPortal(t.children,document.getElementById("waiting-page"))}function G(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function J(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?G(e,!0).forEach(function(n){i()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):G(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}e.d(n,"default",function(){return R});var R=function(t){function n(){var t;return s()(this,n),(t=d()(this,p()(n).call(this))).handleClickBajar=function(){switch(t.state.show){case 1:t.setState({mainColor:"rgb(35, 48, 65)",show:2,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!0}),J({},t.state.slides[2],{active:!0}),J({},t.state.slides[3],{active:!1})]});break;case 2:t.setState({mainColor:"rgb(0,107,71)",show:3,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!0}),J({},t.state.slides[2],{active:!1}),J({},t.state.slides[3],{active:!1})]});break;case 3:t.setState({mainColor:"#b03049",show:4,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!1}),J({},t.state.slides[2],{active:!1}),J({},t.state.slides[3],{active:!1})]});break;case 4:t.setState({mainColor:"rgb(142, 42, 42)",show:1,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!0}),J({},t.state.slides[2],{active:!0}),J({},t.state.slides[3],{active:!0})]})}},t.handleClickSubir=function(){switch(t.state.show){case 1:t.setState({mainColor:"#b03049",show:4,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!1}),J({},t.state.slides[2],{active:!1}),J({},t.state.slides[3],{active:!1})]});break;case 2:t.setState({mainColor:"rgb(147, 62, 62)",show:1,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!0}),J({},t.state.slides[2],{active:!0}),J({},t.state.slides[3],{active:!0})]});break;case 3:t.setState({mainColor:"rgb(35, 48, 65)",show:2,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!0}),J({},t.state.slides[2],{active:!0}),J({},t.state.slides[3],{active:!1})]});break;case 4:t.setState({mainColor:"rgb(0,107,71)",show:3,slides:[J({},t.state.slides[0],{active:!0}),J({},t.state.slides[1],{active:!0}),J({},t.state.slides[2],{active:!1}),J({},t.state.slides[3],{active:!1})]})}},t.state={slides:[{title:"Farmkart",description:"Farm website example",identifier:"slide1",imgPath:z.a,active:!0,path:"http://mauriciofow.me/sassie"},{title:"The Bakery",description:"Bakery website example",identifier:"slide2",imgPath:S.a,active:!0,path:"http://mauriciofow.me/the-bakery"},{title:"YGO Cards",description:"Yugioh cards searcher",identifier:"slide3",imgPath:P.a,active:!0,path:"http://mauriciofow.me/yugioh-deckbuilder"},{title:"Chankillo Farmers",description:"Farm website example",identifier:"slide3",imgPath:I.a,active:!0,path:"http://mauriciofow.me/ChankilloFarmers"}],start:!1,show:1,mainColor:"rgb(142, 42, 42)"},t}return b()(n,t),c()(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var t,n=this;setTimeout(function(){!n.state.start&&n.setState({start:!0})},2e3),document.addEventListener("mousewheel",Object(D.throttle)(function(t){t.deltaY<0&&n.handleClickSubir(),t.deltaY>0&&n.handleClickBajar()},700,{trailing:!1})),window.addEventListener("touchstart",function(n){t=n.touches[0].clientY}),window.addEventListener("touchend",function(e){var r=e.changedTouches[0].clientY;r>t+15&&n.handleClickSubir(),r<t-15&&n.handleClickBajar()})}},{key:"render",value:function(){var t=this;return g.a.createElement("div",null,g.a.createElement(x,{mainColor:this.state.mainColor}),g.a.createElement("span",{className:"btn btn--activate",onClick:this.handleClickBajar},g.a.createElement("img",{src:B.a,width:"40px",alt:""})),g.a.createElement(j,{slide:this.state.slides,show:this.state.show,mainColor:this.state.mainColor}),g.a.createElement("div",{className:"dot-colection"},this.state.slides.map(function(n,e){return g.a.createElement("div",{className:"dot-container"},g.a.createElement("div",{className:"dot",id:e===t.state.show-1?"selected":null})," ",g.a.createElement("p",{style:e===t.state.show-1?{opacity:1,marginLeft:"0px"}:{opacity:0,marginLeft:"30px"}},n.title))})),g.a.createElement(A,{style:{display:"none"}},g.a.createElement(M,{start:this.state.start})))}}]),n}(u.Component)}}]);