"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{4756:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,o,i,u,c,a,s=e(168),f=e(6444),d=f.ZP.button(r||(r=(0,s.Z)(["\n  border-radius: 4px;\n  border-color: transparent;\n\n  margin-left: 16px;\n\n  &:hover, :focus {\n    background: #1e90ff;\n  }\n"]))),l=f.ZP.li(o||(o=(0,s.Z)(["\n  margin: 4px 0;\n"]))),x=e(184),p=function(n){var t=n.contact,e=n.onDelete;return(0,x.jsxs)(l,{children:[t.name," : ",t.number,(0,x.jsx)(d,{type:"button",onClick:function(){e(t.id)},children:"Delete"})]})},h=e(9434),m=e(3634),v=e(2946),b=function(){var n=(0,h.v9)(v.Af),t=(0,h.v9)(v.AD),e=(0,h.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,x.jsx)("ul",{children:r.map((function(n){return(0,x.jsx)(p,{contact:n,onDelete:function(){return e((0,m.GK)(n.id))}},n.id)}))})},g=f.ZP.label(i||(i=(0,s.Z)(["\n  display: grid;\n"]))),Z=f.ZP.input(u||(u=(0,s.Z)(["\n  margin: 4px 0 8px 0;\n  width: 120px;\n\n  &:focus {\n    outline: none;\n    border-radius: 4px;\n    box-shadow: 0 0 10px #1e90ff;\n  }\n"]))),j=e(4808),w=function(){var n=(0,h.I0)();return(0,x.jsxs)(g,{children:["Find contacts by name",(0,x.jsx)(Z,{type:"text",name:"name",onChange:function(t){n((0,j.w)(t.target.value.toLowerCase().trim()))}})]})},k=f.ZP.div(c||(c=(0,s.Z)(["\n"]))),C=f.ZP.div(a||(a=(0,s.Z)(["\n  padding: 10px 0px;\n  text-decoration: underline;\n  font-weight: 600;\n  \n"]))),P=e(2791),y=function(){var n=(0,h.I0)(),t=(0,h.v9)(v.Af),e=(0,h.v9)(v.xU),r=(0,h.v9)(v.zh);return(0,P.useEffect)((function(){n((0,m.yF)())}),[n]),(0,x.jsxs)(k,{children:[(0,x.jsxs)(C,{children:["You have ",t.length," contacts"]}),(0,x.jsx)(w,{}),e&&!r&&(0,x.jsx)("b",{children:"Request in progress..."}),t.length>0&&(0,x.jsx)(b,{})]})}},2946:function(n,t,e){e.d(t,{AD:function(){return o},Af:function(){return r},xU:function(){return i},zh:function(){return u}});var r=function(n){return n.contacts.items},o=function(n){return n.filter.filtred},i=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.error}}}]);
//# sourceMappingURL=756.ee50bdee.chunk.js.map