(this["webpackJsonpnew-todo-app"]=this["webpackJsonpnew-todo-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModel_backdrop__3dnQK",modal:"ErrorModel_modal__1n6y2",header:"ErrorModel_header__311OQ",content:"ErrorModel_content__37tvR",actions:"ErrorModel_actions__RW6n4",btn:"ErrorModel_btn__2SG9T"}},,,,function(e,t,n){e.exports={image:"AddUsers_image__3T4J7",form:"AddUsers_form__3S0FH",customButton:"AddUsers_customButton__1an0R"}},function(e,t,n){e.exports={userList:"userList_userList__12t3n",image:"userList_image__3y5cR",btn:"userList_btn__xyeNG"}},,function(e,t,n){e.exports={card:"Card_card__3lCoG"}},function(e,t,n){e.exports={button:"Button_button__bxQHa"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(4),a=n.n(o),i=(n(17),n(12)),s=n(2),l=n(10),d=n.n(l),u=n(0),b=function(e){return Object(u.jsx)("div",{className:"".concat(d.a.card," ").concat(e.class," ").concat(e.background),children:e.children})},j=n(7),m=n.n(j),h=n(11),O=n.n(h),x=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(O.a.button," ").concat(e.class),onClick:e.clickHandler,children:e.children})},g=n(3),f=n.n(g),_=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:f.a.backdrop,onClick:e.onClick})})},p=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b,{class:f.a.modal,children:[Object(u.jsx)("header",{className:f.a.header,children:Object(u.jsx)("h1",{children:e.title})}),Object(u.jsx)("div",{className:f.a.content,children:Object(u.jsx)("p",{children:e.errorType})}),Object(u.jsx)("footer",{className:f.a.actions,children:Object(u.jsx)(x,{class:f.a.btn,clickHandler:e.onClick,children:"Okay"})})]})})},y=function(e){return Object(u.jsxs)(u.Fragment,{children:[a.a.createPortal(Object(u.jsx)(_,{onClick:e.onClick}),document.getElementById("backDrop")),a.a.createPortal(Object(u.jsx)(p,{title:e.title,onClick:e.onClick,errorType:e.errorType}),document.getElementById("model"))]})},k=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(""),c=Object(s.a)(n,2),o=c[0],a=c[1],i=Object(r.useState)(),l=Object(s.a)(i,2),d=l[0],j=l[1],h=Object(r.useState)(),O=Object(s.a)(h,2),g=O[0],f=O[1];Object(r.useEffect)((function(){var e=setTimeout((function(){console.log("enter Date")}),2e3);return function(){o.trim().length>=3&&(console.log("all Clear"),clearTimeout(e))}}),[o,d]);return Object(u.jsxs)("div",{children:[g&&Object(u.jsx)(y,{title:g.title,errorType:g.error,onClick:function(){f(void 0)}}),Object(u.jsx)(b,{class:m.a.form,background:m.a.image,children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==o.trim().length&&0!==d.trim().length?+d<=5?f({title:"Invalid Age",error:"you are not eligible because your age below 6 years"}):o.trim().length<=3?f({title:"Invalid User Name",error:"Enter atleast 4 Character "}):(e.onAddUser(o,d),a(""),j("")):f({title:"Empty Field Error",error:"Plz fill required data"})},children:[Object(u.jsx)("label",{htmlFor:"userName",children:"Username :"}),Object(u.jsx)("input",{id:"userName",value:o,ref:t,style:{border:"".concat(o.trim().length<=3?"2px solid red":"2px solid green")},type:"text",onChange:function(e){a(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"age",children:"Age (years):"}),Object(u.jsx)("input",{id:"age",type:"number",style:{border:"".concat(+d<=5||void 0===d?"2px solid red":"2px solid green")},value:d,min:"0",max:"99",onChange:function(e){j(e.target.value)}}),Object(u.jsx)(x,{type:"submit",class:m.a.customButton,children:"Add List"})]})})]})},v=n(8),C=n.n(v),E=function(e){return Object(u.jsx)(b,{background:C.a.image,children:Object(u.jsx)("ul",{className:C.a.userList,children:e.User.map((function(t){return Object(u.jsxs)("li",{children:["Hello ",t.name," your Age is ",t.age,Object(u.jsx)(x,{class:C.a.btn,clickHandler:e.onDeletehandler(t.id),children:"X"})]},t.id)}))})})};var N=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),a=Object(s.a)(o,2),l=a[0],d=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(k,{onAddUser:function(e,t){return c((function(r){return[].concat(Object(i.a)(r),[{name:e,age:t,id:Number(n.length+1)}])})),d(!0)}}),l&&Object(u.jsx)(E,{User:n,onDeletehandler:function(e){n.filter((function(t){return t.id===e}))}})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),F()}],[[19,1,2]]]);
//# sourceMappingURL=main.1ffa81a3.chunk.js.map