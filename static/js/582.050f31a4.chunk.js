"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[582],{6582:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r=t(9439),o=t(5777),i=t(1413),c=t(896);function a(n){return Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)]}var s,l,u,d,f,h,x,m,p,v,g,b,j,Z,y=t(184),k=function(){return(0,y.jsx)("div",{style:{width:"50px"},children:(0,y.jsx)(c.nQ,(0,i.Z)({},{skinTone:a(c.rS.colors.skin),eyes:a(c.AS),eyebrows:a(c.o0),mouth:a(c.zx),hair:a(c.B0),facialHair:a(c.HC),clothing:a(c.Rs),accessory:a(c.cn),graphic:a(c.o2),hat:a(c.zq),body:a(c.a2),hairColor:a(c.rS.colors.hair),clothingColor:a(c.rS.colors.clothing),circleColor:a(c.rS.colors.bgColors),lipColor:a(c.rS.colors.lipColors),hatColor:a(c.rS.colors.clothing),faceMaskColor:a(c.rS.colors.clothing),mask:!0,faceMask:!1,lashes:Math.random()>.5}))})},w=t(168),C=t(7691),P=C.ZP.div(s||(s=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),S=C.ZP.div(l||(l=(0,w.Z)(["\n  max-width: calc(70vw - 48px);\n  max-height: calc(1000vh - 24px);\n"]))),I=C.ZP.form(u||(u=(0,w.Z)(["\n  padding: 50px;\n  background: white;\n  display: block;\n"]))),z=(C.ZP.input(d||(d=(0,w.Z)([""]))),C.ZP.button(f||(f=(0,w.Z)(["\n  color: red;\n"]))),t(2791)),D=t(3169),A=t(9434),E=t(3634),L=function(n){var e=n.onClick,t=n.contact;(0,z.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);var r=function(n){n.preventDefault(),"modal"===n.target&&e()},i=(0,A.I0)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(P,{children:(0,y.jsx)(S,{children:(0,y.jsxs)(I,{onClick:function(){return r},onSubmit:function(n){n.preventDefault(),i((0,E.uK)({name:n.currentTarget.elements.name.value,number:n.currentTarget.elements.number.value}))},children:[(0,y.jsx)(D.II,{type:"text",name:"name",defaultValue:t.name}),(0,y.jsx)(D.II,{type:"tel",name:"number",defaultValue:t.number}),(0,y.jsx)(o.zx,{type:"submit",children:"Submit"}),(0,y.jsx)(o.zx,{id:"modal",type:"submit",children:"Close"})]})})})})},M=(C.ZP.button(h||(h=(0,w.Z)(["\n  border-radius: 4px;\n  border-color: transparent;\n\n  margin-left: 16px;\n\n  &:hover, :focus {\n    background: #1e90ff;\n  }\n"]))),C.ZP.li(x||(x=(0,w.Z)(["\ndisplay: flex;\njustify-content: space-between;\n  margin: 4px 0;\n"])))),_=C.ZP.div(m||(m=(0,w.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"]))),F=C.ZP.div(p||(p=(0,w.Z)(["\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-left: 8px;\n"]))),R=function(n){var e=n.contact,t=n.onDelete,i=(0,z.useState)(!1),c=(0,r.Z)(i,2),a=c[0],s=c[1];return(0,y.jsxs)(M,{onClick:function(n){s(!0)},children:[(0,y.jsxs)(_,{children:[(0,y.jsx)(k,{}),(0,y.jsxs)(F,{children:[e.name," : ",e.number]})]}),(0,y.jsx)(o.zx,{size:"sm",border:"1px solid",borderRadius:"100%",type:"button",onClick:function(){t(e.id)},children:"Delete"}),a&&(0,y.jsx)(L,{onClick:function(n){s(!1)},contact:e})]})},T=t(2946),q=C.ZP.ul(v||(v=(0,w.Z)(["\n  overflow: auto;\n  height: 220px;\n"]))),H=function(){var n=(0,A.v9)(T.Af),e=(0,A.v9)(T.AD),t=(0,A.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,y.jsx)(q,{children:r.map((function(n){return(0,y.jsx)(R,{contact:n,onDelete:function(){return t((0,E.GK)(n.id))}},n.id)}))})},K=C.ZP.label(g||(g=(0,w.Z)(["\n  display: grid;\n"]))),O=t(4808),U=function(){var n=(0,A.I0)();return(0,y.jsxs)(K,{children:["Find contacts by name",(0,y.jsx)(D.II,{type:"text",name:"name",onChange:function(e){n((0,O.w)(e.target.value.toLowerCase().trim()))}})]})},V=C.ZP.div(b||(b=(0,w.Z)(["\n"]))),B=C.ZP.div(j||(j=(0,w.Z)(["\n  position: absolute;\n  top:0;\n  right:34%;\n  text-decoration: underline;\n  font-weight: 600;\n  \n"]))),G=C.ZP.span(Z||(Z=(0,w.Z)(["\ncolor: red;\n"]))),Q=function(){var n=(0,A.I0)(),e=(0,A.v9)(T.Af),t=(0,A.v9)(T.xU),r=(0,A.v9)(T.zh);return(0,z.useEffect)((function(){n((0,E.yF)())}),[n]),(0,y.jsxs)(V,{children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)(B,{children:["You have ",(0,y.jsx)(G,{children:e.length})," contacts"]}),(0,y.jsx)(U,{})]}),t&&!r&&(0,y.jsx)("b",{children:"Request in progress..."}),e.length>0&&(0,y.jsx)(H,{})]})}},2946:function(n,e,t){t.d(e,{AD:function(){return o},Af:function(){return r},xU:function(){return i},zh:function(){return c}});var r=function(n){return n.contacts.items},o=function(n){return n.filter.filtred},i=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.error}}}]);
//# sourceMappingURL=582.050f31a4.chunk.js.map