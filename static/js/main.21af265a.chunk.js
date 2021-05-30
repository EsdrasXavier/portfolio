(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{483:function(e,n,t){},751:function(e,n,t){"use strict";t.r(n);t(272);var i,r=t(3),c=t.n(r),o=t(130),a=t.n(o),s=(t(483),t(25)),l=t(42),d=t(50),b=Object(l.b)(i||(i=Object(d.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  background: ",";\n  color: ",";\n  font-size: ","};\n}\n\nh1, h2, h3, h4, h5, h6, strong {\n  font-weight: 700;\n}\n\nbutton {\n  cursor: pointer;\n}\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.fontSizes.small})),h=t(181),j={title:"dark",colors:{primary:"#04c2c9",secundary:"#555",background:"#333",text:"#fff",header:"#1b242f"}},u={title:"light",colors:{primary:"#04c2c9",secundary:"#777",background:"#fff",text:"#333",header:"#1b242f"}},m={fontSizes:{small:"16px",medium:"18px",large:"20px",extraLarge:"35px"}};function x(e){return Object(h.a)(Object(h.a)({},m),e)}var f,g,p,v,O,y,k=t(7),z=r.createContext({theme:x(j),toogleTheme:function(){return null}}),w=function(e){var n=e.children,t=r.useState(x(j)),i=Object(s.a)(t,2),c=i[0],o=i[1];return Object(k.jsx)(z.Provider,{value:{theme:c,toogleTheme:function(){o("light"===c.title?x(j):x(u))}},children:Object(k.jsxs)(l.a,{theme:c,children:[Object(k.jsx)(b,{}),n]})})},S=t(271),C=t(269),T=t.n(C),F=l.c.div(f||(f=Object(d.a)(["\n  background: ",";\n  color: #fdfdfd;\n  font-size: 1.2rem;\n  padding: 1rem 1.5rem;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.header})),P=l.c.div(g||(g=Object(d.a)(["\n  display: flex;\n  margin-right: 1vh;\n\n  div {\n    margin-left: 1vh;\n    margin-right: 1vh;\n    cursor: pointer;\n  }\n"]))),_=function(){var e=c.a.useContext(z),n=e.toogleTheme,t=e.theme;return Object(k.jsxs)(F,{children:[Object(k.jsxs)(P,{children:[Object(k.jsx)("div",{children:"Home"}),Object(k.jsx)("div",{children:"About"}),Object(k.jsx)("div",{children:"Contact"})]}),Object(k.jsx)(T.a,{checked:"light"!==t.title,onChange:n})]})},I=t(131),L=t(132),B=t.n(L),E=l.c.div(p||(p=Object(d.a)(["\n  height: 100vh;\n  padding-top: 10vh;\n"]))),H=function(){return Object(k.jsx)(I.Parallax,{children:Object(k.jsx)(E,{children:Object(k.jsx)("div",{style:{height:500},children:Object(k.jsxs)(B.a,{speed:20,children:[Object(k.jsx)("div",{children:"Hi, welcome to my website! My name is Esdras Xavier and I'm a full stack developer."}),Object(k.jsx)("div",{children:"One of my 2021 goals is to become expert in Java with Spring Boot and microservices."})]})})})})},J=t(270),M=t.n(J),X=function(){return Object(k.jsx)(M.a,{width:"100%",height:"100vh",params:{fps_limit:28,particles:{collisions:{enable:!1},number:{value:120,density:{enable:!1,value_area:2}},line_linked:{enable:!0,distance:30,opacity:.4},move:{speed:.2},opacity:{anim:{enable:!0,opacity_min:.05,speed:1,sync:!1},value:.4}},polygon:{enable:!0,scale:.8,type:"inline",move:{radius:15},url:"/assets/img/small-deer.svg",inline:{arrangement:"equidistant"},draw:{enable:!0,stroke:{color:"rgba(255, 255, 255, .2)"}}},retina_detect:!1,interactivity:{events:{onhover:{enable:!0,mode:"bubble"}},modes:{bubble:{size:6,distance:40}}}}})},q=l.c.div(v||(v=Object(d.a)(["\n  position: absolute;\n  top:0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 100px;\n  text-align: center;\n  font-size: ","};\n"])),(function(e){return e.theme.fontSizes.extraLarge})),A=l.c.span(O||(O=Object(d.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),D=l.c.div(y||(y=Object(d.a)(["\n  height: 100vh;\n"]))),G=t(175),K=function(){var e=Object(r.useState)(!1),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(G.useTransition)(t,{from:{opacity:0},enter:{opacity:.4},leave:{opacity:0},reverse:t,delay:100});return Object(k.jsxs)(I.Parallax,{children:[c((function(e,n){return n&&Object(k.jsx)(G.animated.div,{style:e,children:Object(k.jsx)(X,{})})})),!t&&Object(k.jsx)(D,{}),Object(k.jsx)(q,{children:Object(k.jsxs)(B.a,{onFinishedTyping:function(){return i(!0)},speed:50,children:[Object(k.jsxs)("div",{children:["Hello! My name is ",Object(k.jsx)(A,{children:"Esdras Xavier."})]}),Object(k.jsx)("div",{children:"I'm a full-stack developer."})]})})]})},N=function(){return Object(k.jsxs)(S.a,{children:[Object(k.jsx)(K,{}),Object(k.jsx)(_,{}),Object(k.jsx)(H,{})]})};var Q=function(){return Object(k.jsx)(w,{children:Object(k.jsx)(N,{})})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,752)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),i(e),r(e),c(e),o(e)}))};a.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(Q,{})}),document.getElementById("root")),R()}},[[751,1,2]]]);
//# sourceMappingURL=main.21af265a.chunk.js.map