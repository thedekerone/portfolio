!function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],p=0,u=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(d&&d(e);u.length;)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={0:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;a.push([27,1]),n()}([function(t,e,n){t.exports=n(1)(0)},function(t,e){t.exports=modules},,function(t,e,n){t.exports=n(1)(4)},,,,,,function(t,e,n){t.exports=n.p+"29d58229bf09bec9ccb275cfba83fa1e.svg"},function(t,e,n){t.exports=n.p+"dcbfabb8850bfd520dd51d230df905f1.jpg"},function(t,e,n){t.exports=n.p+"7e72bcb120dd752ade0ac24e326c45fc.jpg"},function(t,e,n){t.exports=n.p+"e4b18a7dfb2d3566ffcf944a11e0b654.jpg"},function(t,e,n){t.exports=n.p+"a421326393182a2d109f592ffdeb92ea.jpg"},,,,,function(t,e,n){var r=n(19);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(e=t.exports=n(20)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap);",""]);var r=n(21)(n(22));e.push([t.i,'* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\nbody {\r\n\tcolor: white;\r\n\tfont-family: \'Montserrat\', sans-serif;\r\n}\r\n.navbar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 2;\r\n}\r\n.navbar .logo-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.hamburguer {\r\n\twidth: 70px;\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 70px;\r\n\ttransition: .7s;\r\n}\r\n.name h1 {\r\n\tmargin-left: 1.3em;\r\n\tfont-size: .8rem;\r\n\tfont-weight: 400;\r\n\tletter-spacing: .24rem;\r\n\tcolor: rgb(189, 189, 189);\r\n}\r\n\r\n/* button */\r\n.btn {\r\n\tpadding: .8em;\r\n\tbackground: transparent;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.btn--project {\r\n\tz-index: 3;\r\n}\r\n\r\n.btn--project::before {\r\n\tcontent: "";\r\n\tposition: absolute;\r\n\twidth: 108%;\r\n\tz-index: -1;\r\n\theight: 130%;\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n\tbackground: rgba(34, 34, 34, 0.11);\r\n}\r\n.btn--about::after,\r\n.btn--project::after,\r\n.btn--activate::after {\r\n\tcontent: "";\r\n\tposition: absolute;\r\n\twidth: 101%;\r\n\theight: 100%;\r\n\tborder: .7px solid rgba(255, 255, 255, 0.959);\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n}\r\n.btn:hover {\r\n\tcursor: pointer;\r\n}\r\n.btn--project:hover::after {\r\n\twidth: 115%;\r\n\theight: 153%;\r\n\tborder: .1px solid rgba(241, 240, 240, 0.836);\r\n}\r\n.btn--project:hover::before {\r\n\tbackground: rgba(34, 34, 34, 0.226);\r\n}\r\n.btn--about {\r\n\tmargin-right: 1em;\r\n\tfont-size: .8rem;\r\n}\r\n.btn--activate {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tleft: 35%;\r\n}\r\n.btn__subir {\r\n\tleft: 60%;\r\n}\r\n\r\n/* Main section */\r\n.main {\r\n\tdisplay: grid;\r\n\tgrid-template: 1fr/1fr 1fr;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\r\n\theight: 100%;\r\n}\r\n.bg-section {\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tfilter: brightness(.7);\r\n\ttransition: .7s;\r\n\tposition: fixed;\r\n\tz-index: -1;\r\n}\r\n.bg-section img {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n.desc-section {\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tbackground-image: url('+r+");\r\n\ttransition: .9s;\r\n\r\n\tbackground-color: rgb(0, 164, 101);\r\n\tbackground-blend-mode: multiply;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.desc-section .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n.desc-section .container h1 {\r\n\tfont-size: 3rem;\r\n\ttext-align: center;\r\n\tpadding: .7rem;\r\n}\r\n.desc-section .container span {\r\n\tfont-size: .8rem;\r\n}\r\n.btn--project {\r\n\tmargin-top: 3rem;\r\n\tpadding: 1.3rem 3.4em;\r\n}\r\nhr {\r\n\twidth: 60px;\r\n\tmargin: 0 0 .8rem;\r\n\tborder: none;\r\n\tbackground: white;\r\n\theight: 2.5px;\r\n}\r\n\r\n/* slides control */\r\n.img-slider {\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-start;\r\n}\r\n.infoSlider {\r\n\tposition: relative;\r\n\ttransition: .9s;\r\n}\r\n\r\n/* responsive */\r\n\r\n@media screen and (max-width: 700px) {\r\n\t.desc-section {\r\n\t\theight: 50vh;\r\n\t\tmargin-top: 50vh;\r\n\t}\r\n\t.btn--activate {\r\n\t\tz-index: 30;\r\n\t}\r\n\t.main {\r\n\t\tgrid-template: 1fr/1fr;\r\n\t}\r\n}\r\n\r\n/* DOTS */\r\n\r\n.dot-colection {\r\n\tposition: absolute;\r\n\tleft: 10px;\r\n\ttop: 45%;\r\n}\r\n.dot {\r\n\tborder-radius: 50%;\r\n\twidth: 10px;\r\n\tmargin: 10px;\r\n\theight: 10px;\r\n\tbackground: white;\r\n\tz-index: 30;\r\n\ttransition: cubic-bezier(0.63, -2, 0.3, 2) .3s;\r\n}\r\n#selected {\r\n\ttransform: scale(1.5);\r\n}\r\n",""])},,,function(t,e,n){t.exports=n.p+"320d8963b60140a98a59f6575b333232.png"},,,function(t,e,n){t.exports=n(1)(8)},,function(t,e,n){"use strict";n.r(e);var r=n(3),i=n.n(r),a=n(4),s=n.n(a),o=n(5),c=n.n(o),l=n(6),d=n.n(l),p=n(2),u=n.n(p),m=n(7),b=n.n(m),f=n(8),h=n.n(f),g=n(0),v=n.n(g),w=n(9),y=n.n(w),x=(n(18),function(t){return v.a.createElement("div",{className:"navbar"},v.a.createElement("div",{className:"logo-container"},v.a.createElement("div",{className:"hamburguer",style:{background:t.mainColor}},v.a.createElement("img",{src:y.a,width:"35px",alt:"ham"})),v.a.createElement("div",{className:"name"},v.a.createElement("h1",null,"MAURICIO FOW"))),v.a.createElement("div",{className:"btn btn--about"},v.a.createElement("span",null,"about me")))});function j(t){return v.a.createElement("div",{className:"img-slider"},t.slide.map(function(t){return v.a.createElement("div",{className:"bg-section",style:t.active?{height:"100%"}:{height:"0"},id:t.identifier},v.a.createElement("img",{src:t.imgPath,alt:"fist"}))}))}function k(t){var e="".concat(-(t.show-1)*window.innerHeight,"px");return v.a.createElement("div",{className:"infoSlider",style:{top:e}},t.slide.map(function(e){return v.a.createElement("div",{className:"desc-section",style:{backgroundColor:t.mainColor},id:"info".concat(e.identifier)},v.a.createElement("div",{className:"container"},v.a.createElement("span",null,"UI|Front-end"),v.a.createElement("h1",null,e.title),v.a.createElement("hr",null),v.a.createElement("span",null,e.description),v.a.createElement("div",{className:"btn btn--project"},"view project")))}))}function E(t){return v.a.createElement("section",{className:"main"},v.a.createElement(j,{slide:t.slide,show:t.show}),v.a.createElement(k,{slide:t.slide,show:t.show,mainColor:t.mainColor}))}var O=n(10),C=n.n(O),S=n(11),P=n.n(S),N=n(12),z=n.n(N),_=n(13),M=n.n(_),D=n(14);function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(n,!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var I=function(t){function e(){var t,n,r;c()(this,e);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return u()(r,(n=r=u()(this,(t=b()(e)).call.apply(t,[this].concat(a))),r.state={slides:[{title:"Farmkart",description:"Farm website example",identifier:"slide1",imgPath:C.a,active:!0},{title:"The Bakery",description:"Bakery website example",identifier:"slide2",imgPath:P.a,active:!0},{title:"Yu-Gi-Oh Cards",description:"Yugioh cards searcher",identifier:"slide3",imgPath:z.a,active:!0},{title:"Chankillo Farmers",description:"Farm website example",identifier:"slide3",imgPath:M.a,active:!0}],show:1,mainColor:"rgb(161, 164, 0)"},r.handleClickBajar=function(){switch(r.state.show){case 1:r.setState({mainColor:"rgb(164, 74, 0)",show:2,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!0}),F({},r.state.slides[2],{active:!0}),F({},r.state.slides[3],{active:!1})]});break;case 2:r.setState({mainColor:"rgb(0, 164, 101)",show:3,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!0}),F({},r.state.slides[2],{active:!1}),F({},r.state.slides[3],{active:!1})]});break;case 3:r.setState({mainColor:"rgb(164, 0, 69)",show:4,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!1}),F({},r.state.slides[2],{active:!1}),F({},r.state.slides[3],{active:!1})]});break;case 4:r.setState({mainColor:"rgb(161, 164, 0)",show:1,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!0}),F({},r.state.slides[2],{active:!0}),F({},r.state.slides[3],{active:!0})]})}},r.handleClickSubir=function(){switch(r.state.show){case 1:r.setState({mainColor:"rgb(164, 0, 69)",show:4,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!1}),F({},r.state.slides[2],{active:!1}),F({},r.state.slides[3],{active:!1})]});break;case 2:r.setState({mainColor:"rgb(0, 164, 101)",show:1,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!0}),F({},r.state.slides[2],{active:!0}),F({},r.state.slides[3],{active:!0})]});break;case 3:r.setState({mainColor:"rgb(164, 74, 0)",show:2,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!0}),F({},r.state.slides[2],{active:!0}),F({},r.state.slides[3],{active:!1})]});break;case 4:r.setState({mainColor:"rgb(161, 164, 0)",show:3,slides:[F({},r.state.slides[0],{active:!0}),F({},r.state.slides[1],{active:!0}),F({},r.state.slides[2],{active:!1}),F({},r.state.slides[3],{active:!1})]})}},n))}return h()(e,t),d()(e,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("wheel",Object(D.throttle)(function(e){e.deltaY<0&&t.handleClickSubir(),e.deltaY>0&&t.handleClickBajar()},700,{trailing:!1}))}},{key:"render",value:function(){var t=this;return v.a.createElement("div",null,v.a.createElement(x,{mainColor:this.state.mainColor}),v.a.createElement(E,{slide:this.state.slides,show:this.state.show,mainColor:this.state.mainColor}),v.a.createElement("span",{onClick:this.handleClickBajar,className:"btn btn--activate",id:"action-button"},"DO bajar"),v.a.createElement("span",{onClick:this.handleClickSubir,className:"btn btn--activate btn__subir",id:"action-button"},"DO subir"),v.a.createElement("div",{className:"dot-colection"},this.state.slides.map(function(e,n){return v.a.createElement("div",{className:"dot",id:n===t.state.show-1?"selected":null})})))}}]),e}(g.Component);i.a.render(v.a.createElement(I,null),document.getElementById("root"))}]);