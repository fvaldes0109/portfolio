(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"default":{"description":"","link":""},"movie":{"description":"A mobile game made with Unity where you have to guess the movie from a screenshot. It has a lot of levels and a lot of movies to guess.","link":"https://play.google.com/store/apps/details?id=com.Studios3WE.MovieQuiz"},"interportal":{"description":"A minigame made with Unity consisting of matching a wave to some points the best you can. It makes use of interpolation techniques.","link":"https://github.com/InterfaSus/Interpolation-DJ/releases/latest"},"moogle":{"description":"A search engine made with C#. It uses an information retrieval algorithm to find the most relevant documents for a given query. It can operators, suggestions, and more.","link":"https://github.com/fvaldes0109/moogle-2021"},"countries":{"description":"A page made with React that shows the flags and info of every country. You can use a filter by region and search by name. Also, you can click a country to see even more information about it.","link":"https://fvaldes0109.github.io/rest-countries-api"},"countdown":{"description":"A simple page that displays a countdown timer with a smooth animation","link":"https://fvaldes0109.github.io/FM-launch-countdown-timer/"},"todo":{"description":"A TODO web app where you can set tasks as pending/completed, delete them and filter them by status.","link":"https://fvaldes0109.github.io/todo-app/"},"ip":{"description":"A page that tells your IP and approximated location. You can also input an IP or domain and get its info.","link":"https://fvaldes0109.github.io/FM-ip-address-tracker/"}}')},26:function(e,t,n){},33:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),o=n(27),r=n.n(o),a=n(6),s=n(7),l=n(8),h=n(9),d=n(18),u=n(5),j=function(e){var t=getComputedStyle(document.querySelector(":root")).getPropertyValue(e).replace(/[%,]/g,"").split(" ").filter((function(e){return e.length>0})).map((function(e){return parseInt(e)})),n=Object(u.a)(t,3),i=n[0],c=n[1],o=n[2];o/=100;var r=c*Math.min(o,1-o)/100,a=function(e){var t=(e+i/30)%12,n=o-r*Math.max(Math.min(t-3,9-t,1),-1);return Math.round(255*n).toString(16).padStart(2,"0")};return"".concat(a(0)).concat(a(8)).concat(a(4))},m=n(1),b=function(e){var t=Object(i.useState)("light"),n=Object(u.a)(t,2),c=n[0],o=n[1];Object(i.useEffect)((function(){document.documentElement.setAttribute("color-scheme",c)}),[c]);var r="https://img.icons8.com/ios/50/".concat(j("--text-"+c),"/sun--v1.png"),a="https://img.icons8.com/ios/50/".concat(j("--text-"+c),"/moon-symbol.png");return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"theme-switch",onClick:function(){var t="light"===c?"dark":"light";o(t),e.changeTheme(t)},children:[Object(m.jsx)("img",{src:"light"===c?a:r,alt:"Theme icon","aria-label":"Switch color theme",width:"20"}),Object(m.jsx)("span",{children:"".concat("light"===c?"Dark":"Light"," Theme")})]}),Object(m.jsx)("div",{className:"float-break"})]})},p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={linksVisible:!1,iconsColor:j("--text-".concat(i.props.theme))},i.iconSize=60,i}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e.theme!==this.props.theme&&this.setState({iconsColor:j("--text-".concat(this.props.theme))})}},{key:"togglePanel",value:function(){var e=this;document.querySelectorAll(".link-container").forEach((function(t,n){setTimeout((function(){return t.className="link-container".concat(e.state.linksVisible?" above":" invisible")}),50*n)})),this.setState({linksVisible:!this.state.linksVisible})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"contact-component",children:[Object(m.jsxs)("div",{className:"contact-displayer",children:[Object(m.jsx)("p",{className:this.state.linksVisible?"invisible":"",children:Object(m.jsx)("strong",{children:"Contact Me"})}),Object(m.jsx)("div",{className:"down-button",onClick:this.togglePanel.bind(this),children:Object(m.jsx)("div",{className:"arrow ".concat(this.state.linksVisible?"down":"up")})})]}),Object(m.jsxs)("div",{className:"links",children:[Object(m.jsx)("div",{className:"link-container invisible",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/fernando-vald%C3%A9s-garc%C3%ADa-a46142221/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/linkedin.svg"),alt:"LinkedIn Icon"})})}),Object(m.jsx)("div",{className:"link-container invisible",children:Object(m.jsx)("a",{href:"https://twitter.com/CyberNet_inc01",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/twitter.svg"),alt:"Twitter Icon"})})}),Object(m.jsx)("div",{className:"link-container invisible",children:Object(m.jsx)("a",{href:"https://github.com/fvaldes0109/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/github.svg"),alt:"Github Icon"})})}),Object(m.jsx)("div",{className:"link-container invisible",children:Object(m.jsx)("a",{href:"mailto:fvaldes0109@gmail.com",children:Object(m.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/gmail.svg"),alt:"Mail Icon"})})})]})]})}}]),n}(c.a.Component),g=(n(33),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var i;Object(a.a)(this,n);var c=(i=t.call(this,e)).createGol(),o=c.width,r=c.height,s=c.grid,l=c.elementGrid;return i.state={grid:s,elementGrid:l,width:o,height:r},i.resizeTimeout=function(){clearTimeout(i.resizeTimer),i.resizeTimer=setTimeout((function(){i.handleResize()}),250)},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.resizeTimeout),setInterval((function(){return e.tick()}),4e3)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeTimeout)}},{key:"handleResize",value:function(){var e=this.createGol(),t=e.width,n=e.height,i=e.grid,c=e.elementGrid;this.setState({width:t,height:n,grid:i,elementGrid:c})}},{key:"createGol",value:function(){for(var e=parseInt(window.innerWidth/15),t=parseInt(window.innerHeight/15),n=Array.from(Array(t),(function(){return new Array(e).fill(!1)})),i=[],c=0;c<t;c++){for(var o=[],r=0;r<e;r++){var a=Object(m.jsx)("div",{className:"gol-cell"},"cell-".concat(c,"-").concat(r));Math.random()>.8&&(n[c][r]=!0,a=Object(m.jsx)("div",{className:"gol-cell alive"},"cell-".concat(c,"-").concat(r))),o.push(a)}i.push(Object(m.jsx)("div",{className:"gol-row",children:o},"row-".concat(c)))}return{width:e,height:t,grid:n,elementGrid:i}}},{key:"tick",value:function(){for(var e=this.state,t=e.width,n=e.height,i=e.grid,c=Array.from(Array(n),(function(){return new Array(t).fill(!1)})),o=document.querySelector(".gol-grid"),r=0;r<n;r++)for(var a=0;a<t;a++){var s=this.countNeighbours(r,a);(3===s||2===s&&i[r][a])&&(c[r][a]=!0),c[r][a]!==i[r][a]&&(o.children[r].children[a].className="gol-cell".concat(c[r][a]?" alive":""))}this.setState({grid:c})}},{key:"countNeighbours",value:function(e,t){for(var n=this.state,i=n.width,c=n.height,o=n.grid,r=[-1,0,1],a=[-1,0,1],s=0,l=0;l<r.length;l++)for(var h=0;h<a.length;h++)if(0!==r[l]||0!==a[h]){var d=e+r[l],u=t+a[h];d<0||d>=c||u<0||u>=i||o[d][u]&&s++}return s}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"gol-grid",children:this.state.elementGrid})}}]),n}(c.a.Component)),v=n(3);var f=function(e){var t=e.position,n=e.routes,c=e.theme,o=Object(v.k)(),r=Object(v.m)(),a=Object(i.useState)(),s=Object(u.a)(a,2),l=s[0],h=s[1],d=function(){var t="left"===e.position?-1:1,i=Array.from(n.keys()),c=i.indexOf(o.pathname);return i[(c+t+i.length)%i.length]}();return Object(i.useEffect)((function(){h(n.get(d))}),[n,d]),Object(m.jsxs)("div",{className:"nav-button-area ".concat(t,"-button"),children:[Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:l})}),Object(m.jsx)("div",{className:"side-button",onClick:function(){return r(d)},children:Object(m.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fill:"#".concat(j("--text-"+c)),clipRule:"evenodd",children:Object(m.jsx)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})})})]})},O=n(14),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)(O.motion.div,{className:"home-page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(m.jsxs)("div",{className:"presentation",children:[Object(m.jsx)("h1",{children:"Hi! I'm Fernando. Nice to see you here!"}),Object(m.jsx)("p",{children:"I'm a Cuban programmer currently studying Computer Science \ud83d\udda5\ufe0f. My strongest area is Frontend Development but it's not the only one."})]})})}}]),n}(c.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(O.motion.div,{className:"about-page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(m.jsx)("h1",{children:"About Me Page"}),Object(m.jsx)("p",{children:"Under Construction"})]})}}]),n}(c.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("li",{onClick:function(){return e.props.projectTrigger(e.props.id)},children:this.props.children})}}]),n}(c.a.Component),k=(n(26),n(44),n(12)),N=function(e){var t=e.text,n=Object(i.useRef)(null),c=Object(i.useRef)(0);return Object(i.useEffect)((function(){n.current.clientHeight;var e=n.current.getBoundingClientRect().bottom,t=n.current.parentElement.getBoundingClientRect().top;if(console.log(e,t),e!==t){var i=e-t;c.current+=i,n.current.style.transform="translateX(-50%) translateY(-".concat(c.current,"px)")}}),[t]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{ref:n,className:"text-balloon",children:[t,Object(m.jsx)("div",{className:"triangle"})]})})},C=function(e){var t=Object(i.useState)("movie"),n=Object(u.a)(t,2),c=n[0],o=n[1];return Object(m.jsx)(O.motion.div,{className:"projects-page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(m.jsxs)("div",{className:"projects-container",children:[Object(m.jsxs)("ul",{children:[Object(m.jsx)(w,{projectTrigger:o,data:k.movie,id:"movie",children:"Movie Quiz App"}),Object(m.jsx)(w,{projectTrigger:o,data:k.interportal,id:"interportal",children:"Interportal"}),Object(m.jsx)(w,{projectTrigger:o,data:k.countries,id:"countries",children:"Countries Data"}),Object(m.jsx)(w,{projectTrigger:o,data:k.countdown,id:"countdown",children:"Countdown Page"}),Object(m.jsx)(w,{projectTrigger:o,data:k.todo,id:"todo",children:"TODO App"}),Object(m.jsx)(w,{projectTrigger:o,data:k.ip,id:"ip",children:"IP Finder"}),Object(m.jsx)(w,{projectTrigger:o,data:k.moogle,id:"moogle",children:"Moogle Engine"})]}),Object(m.jsxs)("div",{className:"side",children:[Object(m.jsx)("a",{href:k[c].link,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:"./images/".concat(c,".png"),width:700,alt:"Project screenshot"})}),Object(m.jsx)(N,{text:k[c].description})]})]})})};var T=function(){return Object(m.jsx)(O.AnimatePresence,{children:Object(m.jsxs)(v.c,{children:[Object(m.jsx)(v.a,{className:"main-component",path:"/",element:Object(m.jsx)(x,{})}),Object(m.jsx)(v.a,{className:"main-component",path:"/about",element:Object(m.jsx)(y,{})}),Object(m.jsx)(v.a,{className:"main-component",path:"/projects",element:Object(m.jsx)(C,{})})]})})},S=(n(45),n(46),n.p+"static/media/logo.4603a5b6.png"),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={theme:"light"},i.routes=new Map,i.routes.set("/","Home"),i.routes.set("/projects","My Projects"),i.routes.set("/about","About Me"),i}return Object(s.a)(n,[{key:"changeTheme",value:function(e){this.setState({theme:e})}},{key:"render",value:function(){var e=(new Date).getFullYear();return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(d.a,{basename:"/portfolio",children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"cv-outline",children:Object(m.jsx)("a",{className:"cv-button",href:"/portfolio/fernando-valdes-CV.pdf",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("h1",{children:"Check my CV"})})}),Object(m.jsx)("div",{className:"logo-container",children:Object(m.jsx)("img",{alt:"logo",src:S,className:"logo",width:100})}),Object(m.jsx)(b,{changeTheme:this.changeTheme.bind(this)}),Object(m.jsx)("main",{children:Object(m.jsx)(T,{})}),Object(m.jsx)(f,{routes:this.routes,theme:this.state.theme,position:"left"}),Object(m.jsx)(f,{routes:this.routes,theme:this.state.theme,position:"right"}),Object(m.jsxs)("footer",{children:[Object(m.jsx)(p,{theme:this.state.theme}),Object(m.jsx)("small",{className:"copyright",children:"\xa9 Copyright ".concat(e," Fernando Vald\xe9s Garc\xeda")})]})]})})}}]),n}(c.a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),I()}},[[47,1,2]]]);
//# sourceMappingURL=main.a9fc74ef.chunk.js.map