(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),s=n(25),a=n.n(s),r=n(6),o=n(7),l=n(8),h=n(9),j=n(17),u=n(5),b=function(t){var e=getComputedStyle(document.querySelector(":root")).getPropertyValue(t).replace(/[%,]/g,"").split(" ").filter((function(t){return t.length>0})).map((function(t){return parseInt(t)})),n=Object(u.a)(e,3),i=n[0],c=n[1],s=n[2];s/=100;var a=c*Math.min(s,1-s)/100,r=function(t){var e=(t+i/30)%12,n=s-a*Math.max(Math.min(e-3,9-e,1),-1);return Math.round(255*n).toString(16).padStart(2,"0")};return"".concat(r(0)).concat(r(8)).concat(r(4))},d=n(2),m=function(t){var e=Object(i.useState)("light"),n=Object(u.a)(e,2),c=n[0],s=n[1];Object(i.useEffect)((function(){document.documentElement.setAttribute("color-scheme",c)}),[c]);var a="https://img.icons8.com/ios/50/".concat(b("--text-"+c),"/sun--v1.png"),r="https://img.icons8.com/ios/50/".concat(b("--text-"+c),"/moon-symbol.png");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"theme-switch",onClick:function(){var e="light"===c?"dark":"light";s(e),t.changeTheme(e)},children:[Object(d.jsx)("img",{src:"light"===c?r:a,alt:"Theme icon","aria-label":"Switch color theme",width:"20"}),Object(d.jsx)("span",{children:"".concat("light"===c?"Dark":"Light"," Theme")})]}),Object(d.jsx)("div",{className:"float-break"})]})},p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={linksVisible:!1,iconsColor:b("--text-".concat(i.props.theme))},i.iconSize=60,i}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t){t.theme!==this.props.theme&&this.setState({iconsColor:b("--text-".concat(this.props.theme))})}},{key:"togglePanel",value:function(){var t=this;document.querySelectorAll(".link-container").forEach((function(e,n){setTimeout((function(){return e.className="link-container".concat(t.state.linksVisible?" above":" invisible")}),50*n)})),this.setState({linksVisible:!this.state.linksVisible})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"contact-component",children:[Object(d.jsxs)("div",{className:"contact-displayer",children:[Object(d.jsx)("p",{className:this.state.linksVisible?"invisible":"",children:Object(d.jsx)("strong",{children:"Contact Me"})}),Object(d.jsx)("div",{className:"down-button",onClick:this.togglePanel.bind(this),children:Object(d.jsx)("div",{className:"arrow ".concat(this.state.linksVisible?"down":"up")})})]}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)("div",{className:"link-container invisible",children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/fernando-vald%C3%A9s-garc%C3%ADa-a46142221/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/linkedin.svg"),alt:"LinkedIn Icon"})})}),Object(d.jsx)("div",{className:"link-container invisible",children:Object(d.jsx)("a",{href:"https://twitter.com/CyberNet_inc01",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/twitter.svg"),alt:"Twitter Icon"})})}),Object(d.jsx)("div",{className:"link-container invisible",children:Object(d.jsx)("a",{href:"https://github.com/fvaldes0109/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/github.svg"),alt:"Github Icon"})})}),Object(d.jsx)("div",{className:"link-container invisible",children:Object(d.jsx)("a",{href:"mailto:fvaldes0109@gmail.com",children:Object(d.jsx)("img",{src:"https://img.icons8.com/windows/".concat(this.iconSize,"/").concat(this.state.iconsColor,"/gmail.svg"),alt:"Mail Icon"})})})]})]})}}]),n}(c.a.Component),O=(n(31),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;Object(r.a)(this,n),(i=e.call(this,t)).height=parseInt(window.innerHeight/15),i.width=parseInt(window.innerWidth/15);var c=i.createGol(),s=Object(u.a)(c,2),a=s[0],o=s[1];return i.state={grid:a,elementGrid:o},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){return t.tick()}),4e3)}},{key:"createGol",value:function(){for(var t=this,e=Array.from(Array(this.height),(function(){return new Array(t.width).fill(!1)})),n=[],i=0;i<this.height;i++){for(var c=[],s=0;s<this.width;s++){var a=Object(d.jsx)("div",{className:"gol-cell"},"cell-".concat(i,"-").concat(s));Math.random()>.8&&(e[i][s]=!0,a=Object(d.jsx)("div",{className:"gol-cell alive"},"cell-".concat(i,"-").concat(s))),c.push(a)}n.push(Object(d.jsx)("div",{className:"gol-row",children:c},"row-".concat(i)))}return[e,n]}},{key:"tick",value:function(){for(var t=this,e=Array.from(Array(this.height),(function(){return new Array(t.width).fill(!1)})),n=this.state.grid,i=document.querySelector(".gol-grid"),c=0;c<this.height;c++)for(var s=0;s<this.width;s++){var a=this.countNeighbours(c,s);(3===a||2===a&&n[c][s])&&(e[c][s]=!0),e[c][s]!==n[c][s]&&(i.children[c].children[s].className="gol-cell".concat(e[c][s]?" alive":""))}this.setState({grid:e})}},{key:"countNeighbours",value:function(t,e){for(var n=this.state.grid,i=[-1,0,1],c=[-1,0,1],s=0,a=0;a<i.length;a++)for(var r=0;r<c.length;r++)if(0!==i[a]||0!==c[r]){var o=t+i[a],l=e+c[r];o<0||o>=this.height||l<0||l>=this.width||n[o][l]&&s++}return s}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"gol-grid",children:this.state.elementGrid})}}]),n}(c.a.Component)),g=(n(32),n(3));var v=function(t){var e=t.position,n=t.routes,c=t.theme,s=Object(g.k)(),a=Object(g.m)(),r=Object(i.useState)(),o=Object(u.a)(r,2),l=o[0],h=o[1],j=function(){var e="left"===t.position?-1:1,i=Array.from(n.keys()),c=i.indexOf(s.pathname);return i[(c+e+i.length)%i.length]}();return Object(i.useEffect)((function(){h(n.get(j))}),[n,j]),Object(d.jsxs)("div",{className:"nav-button-area ".concat(e,"-button"),children:[Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:l})}),Object(d.jsx)("div",{className:"side-button",onClick:function(){return a(j)},children:Object(d.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fill:"#".concat(b("--text-"+c)),"clip-rule":"evenodd",children:Object(d.jsx)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})})})]})},f=n(13),x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(f.motion.div,{className:"home-page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(d.jsxs)("div",{className:"presentation",children:[Object(d.jsx)("h1",{children:"Hi! I'm Fernando. Nice to see you here!"}),Object(d.jsx)("p",{children:"I'm a Cuban programmer currently studying Computer Science \ud83d\udda5\ufe0f. My strongest area is Frontend Development but it's not the only one."})]})})}}]),n}(c.a.Component),y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(f.motion.div,{className:"about-page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(d.jsx)("h1",{children:"About Me Page"}),Object(d.jsx)("p",{children:"Under Construction"})]})}}]),n}(c.a.Component),k=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(f.motion.div,{className:"projects-page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(d.jsx)("h1",{children:"Projects Page"}),Object(d.jsx)("p",{children:"Under Construction"})]})}}]),n}(c.a.Component);var w=function(){return Object(d.jsx)(f.AnimatePresence,{children:Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{className:"main-component",path:"/",element:Object(d.jsx)(x,{})}),Object(d.jsx)(g.a,{className:"main-component",path:"/about",element:Object(d.jsx)(y,{})}),Object(d.jsx)(g.a,{className:"main-component",path:"/projects",element:Object(d.jsx)(k,{})})]})})},N=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={theme:"light"},i.routes=new Map,i.routes.set("/portfolio","Home"),i.routes.set("/portfolio/about","About Me"),i.routes.set("/portfolio/projects","My Projects"),i}return Object(o.a)(n,[{key:"changeTheme",value:function(t){this.setState({theme:t})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(m,{changeTheme:this.changeTheme.bind(this)}),Object(d.jsx)("main",{children:Object(d.jsx)(w,{})}),Object(d.jsx)(v,{routes:this.routes,theme:this.state.theme,position:"left"}),Object(d.jsx)(v,{routes:this.routes,theme:this.state.theme,position:"right"}),Object(d.jsxs)("footer",{children:[Object(d.jsx)(p,{theme:this.state.theme}),Object(d.jsx)("small",{className:"copyright",children:"\xa9 Copyright 2023 Fernando Vald\xe9s Garc\xeda"})]})]})})}}]),n}(c.a.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.3f0e9778.chunk.js.map