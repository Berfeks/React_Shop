(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(7),r=n.n(i),s=(n(13),n(0));function o(){return Object(s.jsx)("nav",{className:"purple darken-2",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"#",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",children:"Repo"})})})]})})}function l(){return Object(s.jsx)("footer",{className:"page-footer purple accent-3",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var d=n(8),j=n(1),u=n(3);function b(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function h(e){var t=e.id,n=e.name,c=e.description,a=e.price,i=e.full_background,r=e.addToBasket,o=void 0===r?Function.prototype:r;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:i,alt:n})}),Object(s.jsxs)("div",{className:"cardcontent",children:[Object(s.jsx)("span",{className:"card-title",children:n}),Object(s.jsx)("p",{children:c}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:n,price:a})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.5rem"},children:[a,"\u0433\u0440\u043d."]})]})]})]})}function m(e){var t=e.goods,n=void 0===t?[]:t,c=e.addToBasket,a=void 0===c?Function.prototype:c;return n.length?Object(s.jsx)("div",{className:"goods",children:n.map((function(e){return Object(s.jsx)(h,Object(j.a)(Object(j.a)({},e),{},{addToBasket:a}),e.id)}))}):Object(s.jsx)("h3",{children:"Nothing"})}function O(e){var t=e.quantity,n=void 0===t?0:t,c=e.handleBasketShow,a=void 0===c?Function.prototype:c;return Object(s.jsxs)("div",{className:"cart light-green accent-4 white-text",onClick:a,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(s.jsx)("span",{className:"cart-quantity",children:n}):null]})}function p(e){var t=e.id,n=e.name,c=e.price,a=e.quantity,i=e.removeFromBasket,r=void 0===i?Function.prototype:i,o=e.incQuantity,l=void 0===o?Function.prototype:o,d=e.decQuantity,j=void 0===d?Function.prototype:d;return Object(s.jsxs)("li",{className:"collection-item",children:[n," ",Object(s.jsx)("i",{className:"material-icons basketquantity",onClick:function(){return j(t)},children:"remove"}),"x",a," ",Object(s.jsx)("i",{className:"material-icons basketquantity",onClick:function(){return l(t)},children:"add"})," ","= ",c*a,Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return r(t)},children:Object(s.jsx)("i",{class:"material-icons basketdelete",children:"close"})})]})}function f(e){var t=e.order,n=void 0===t?[]:t,c=e.handleBasketShow,a=void 0===c?Function.prototype:c,i=e.removeFromBasket,r=void 0===i?Function.prototype:i,o=e.incQuantity,l=void 0===o?Function.prototype:o,d=e.decQuantity,u=void 0===d?Function.prototype:d,b=n.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basketlist",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?n.map((function(e){return Object(s.jsx)(p,Object(j.a)({removeFromBasket:r,incQuantity:l,decQuantity:u},e),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",b," \u0433\u0440\u043d.",Object(s.jsx)("button",{className:"secondary-content btnan btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})]}),Object(s.jsx)("i",{className:"material-icons basketclose",onClick:a,children:"close"})]})}function x(e){var t=e.name,n=void 0===t?"":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(c.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[n]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[n," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function v(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!0),r=Object(u.a)(i,2),o=r[0],l=r[1],h=Object(c.useState)([]),p=Object(u.a)(h,2),v=p[0],y=p[1],N=Object(c.useState)(!1),g=Object(u.a)(N,2),k=g[0],F=g[1],q=Object(c.useState)(""),B=Object(u.a)(q,2),S=B[0],w=B[1],Q=function(){F(!k)};return Object(c.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"f9da6dbc-6640033a-c60094af-18e87ba8"}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),l(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(O,{quantity:v.length,handleBasketShow:Q}),o?Object(s.jsx)(b,{}):Object(s.jsx)(m,{goods:n,addToBasket:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var n=Object(j.a)(Object(j.a)({},e),{},{quantity:1});y([].concat(Object(d.a)(v),[n]))}else{var c=v.map((function(e,n){return n===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));y(c)}w(e.name)}}),k&&Object(s.jsx)(f,{order:v,handleBasketShow:Q,removeFromBasket:function(e){var t=v.filter((function(t){return t.id!==e}));y(t)},incQuantity:function(e){var t=v.map((function(t){if(t.id===e){var n=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n})}return t}));y(t)},decQuantity:function(e){var t=v.map((function(t){if(t.id===e){var n=t.quantity-1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n>=0?n:0})}return t}));y(t)}}),S&&Object(s.jsx)(x,{name:S,closeAlert:function(){w("")}})]})}var y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(v,{}),Object(s.jsx)(l,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.03e18b9a.chunk.js.map