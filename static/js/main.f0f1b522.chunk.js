(this.webpackJsonpdishy=this.webpackJsonpdishy||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a,r,s,i,c,o,u=n(0),d=n.n(u),l=n(8),j=n(18),b=n.n(j),h=(n(52),n(5)),p=n(7),m=(n(53),n(13)),f=n(14),g=function(e,t){Object(u.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])},O=n(1),x=f.a.button(a||(a=Object(m.a)(["\n  padding: 0;\n  margin: 0;\n  width: 55px;\n  height: 50px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-evenly;\n  align-items: center;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    margin: 0;\n    padding: 0;\n    width: 45px;\n    height: 8px;\n    background: white;\n    border-radius: 5px;\n    transition: all 0.3s linear;\n    transform-origin: 2.25px;\n\n    :first-child {\n      background: ",";\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      background: ",";\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      background: ",";\n      transform: ",";\n    }\n  }\n"])),(function(e){return e.open?"linear-gradient(130deg, #fcb0ff 0%, #fcb0ff 20%, #FA50FF 100%)":"linear-gradient(130deg, #61FFE3 0%, #61FFE3 20%, #00A2F4 100%)"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"linear-gradient(130deg, #fcb0ff 0%, #fcb0ff 20%, #FA50FF 100%)":"linear-gradient(130deg, #61FFE3 0%, #61FFE3 20%, #00A2F4 100%)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"linear-gradient(130deg, #fcb0ff 0%, #fcb0ff 20%, #FA50FF 100%)":"linear-gradient(130deg, #61FFE3 0%, #61FFE3 20%, #00A2F4 100%)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),v=function(e){var t=e.open,n=e.setOpen;return Object(O.jsxs)(x,{open:t,onClick:function(){return n(!t)},children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},w=n.p+"static/media/menu-image-home.84ee7eaf.png",y=n.p+"static/media/menu-image-ratedish.d89e22a2.png",N=n.p+"static/media/menu-image-finddish.62d35d65.png",S=n.p+"static/media/menu-image-login-peach.e3ddea9c.png",F=n.p+"static/media/menu-image-logout.e27f0bcb.png",k=n.p+"static/media/menu-image-signup.1e4611ea.png",R=f.a.nav(r||(r=Object(m.a)(["\n  position: absolute;\n  z-index: 2;\n  top: 80px;\n  right: 0;\n  height: calc(100vh - 80px - 40px);\n  width: 260px;\n  padding: 20px 0;\n  background: linear-gradient(\n    rgba(50, 50, 50, 1) 0%,\n    rgba(40, 30, 50, 1) 93%,\n    #f63ed4 96%,\n    #33f2ff 98%\n  );\n  text-align: center;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-end;\n  transform: ",";\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: ",") {\n    width: 100%;\n  }\n"])),(function(e){return e.open?"translateX(0)":"translateX(100%)"}),(function(e){return e.theme.mobile})),P=Object(f.a)(l.b)(s||(s=Object(m.a)(['\n  width: 100%;\n  height: 70px;\n  padding: 0 0px 0 0;\n  font-family: "Contrail One", Helvetica, sans-serif;\n  font-size: 1.8em;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n\n  @media (max-width: ',") {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryHover})),C=f.a.button(i||(i=Object(m.a)(['\n  width: 100%;\n  height: 70px;\n  background: none;\n  border: none;\n  padding: 0 0px 0 0;\n  font-family: "Contrail One", Helvetica, sans-serif;\n  font-size: 1.8em;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n\n  @media (max-width: ',") {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryHover})),D=f.a.img(c||(c=Object(m.a)(["\n  height: 60px;\n"]))),L=function(e){var t=e.open,n=e.isLoggedIn,a=e.handleLogout;return Object(O.jsx)(R,{open:t,children:n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{to:"/",children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-home",src:w,alt:"Home"})}),Object(O.jsx)(P,{to:"/find",children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-finddish",src:N,alt:"Find Dish"})}),Object(O.jsx)(P,{to:"/review",children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-ratedish",src:y,alt:"Rate Dish"})}),Object(O.jsx)(C,{type:"button",onClick:a,children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-logout",src:F,alt:"Log Out"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{to:"/signin",children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-login-pink",src:S,alt:"Login"})}),Object(O.jsx)(P,{to:"/signup",children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-signup",src:k,alt:"Sign Up"})}),Object(O.jsx)(P,{to:"/",children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-home",src:w,alt:"Home"})}),Object(O.jsx)(P,{to:"/find",children:Object(O.jsx)(D,{className:"Menu-image",id:"Menu-image-finddish",src:N,alt:"Find Dish"})})]})})},M=f.a.div(o||(o=Object(m.a)(["\n  height: 50px;\n  width: 56px;\n"]))),H=function(e){var t=e.isLoggedIn,n=e.handleLogout,a=Object(u.useState)(!1),r=Object(h.a)(a,2),s=r[0],i=r[1],c=Object(u.useRef)();return g(c,(function(){return i(!1)})),Object(O.jsxs)(M,{ref:c,children:[Object(O.jsx)(v,{open:s,setOpen:i}),Object(O.jsx)(L,{open:s,isLoggedIn:t,handleLogout:n})]})},B=(n(60),n.p+"static/media/dishy-logo-1.17f392e8.png"),I=function(e){var t=e.user,n=e.setUser;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"Navbar",id:"Navbar",children:[Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("img",{className:"Navbar-image",id:"Navbar-home-image",src:B,alt:"Home"})}),Object(O.jsxs)("div",{id:"Navbar-right-links-container",children:[t.username?Object(O.jsxs)("div",{className:"Navbar-text-container",id:"Navbar-username-container",children:[Object(O.jsx)("p",{children:"Hi"}),Object(O.jsxs)("p",{children:[t.username,"!"]})]}):null,Object(O.jsx)(H,{isLoggedIn:t.username,handleLogout:function(e){e.preventDefault(),n({username:"",accessToken:"",id:""}),localStorage.clear()}})]})]})})};I.defaultProps={user:{id:0,accessToken:"",username:""}};var A=I,E=(n(61),function(e){var t=e.user;return Object(O.jsxs)("div",{className:"HomePage",children:[Object(O.jsx)("h1",{className:"HomePage-header",id:"HomePage-header",children:Object(O.jsx)("img",{src:B,alt:"DISHY"})}),Object(O.jsx)("p",{className:"HomePage-text",children:"Dishy finds all the top-rated dishes in your location."}),Object(O.jsx)("p",{className:"HomePage-text",children:"Find the very best food near you!"}),Object(O.jsxs)("div",{className:"HomePage-buttons-container",children:[Object(O.jsx)(l.b,{to:"/find",className:"HomePage-link-button",id:"HomePage-link-button-find",children:"Find a Dish"}),t.username&&Object(O.jsx)(l.b,{to:"/review",className:"HomePage-link-button",id:"HomePage-link-button-review",type:"button",children:"Rate a Dish"}),!t.username&&Object(O.jsx)(l.b,{to:"/signin",className:"HomePage-link-button",id:"HomePage-link-button-login",type:"button",children:"Log In"})]}),!t.username&&Object(O.jsx)(l.b,{to:"/signup",className:"HomePage-link-button",id:"HomePage-link-button-signup",type:"button",children:"Create an account"})]})}),T=n(17),U=n(3),z=n.n(U),q=n(4),G=n(6),J=(n(63),n(32),n(64),n(33)),X=function(){var e=Object(G.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.post("http://localhost:4002/rating/search",{query:t}).then((function(e){return console.log(e.data),{status:e.status,ratings:e.data}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(G.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.get("http://localhost:4002/dish/").then((function(e){return{status:e.status,dishes:e.data}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(G.a)(z.a.mark((function e(t,n){var a,r,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.coordinates,r=n.name,s=n.location,e.abrupt("return",J.post("http://localhost:4002/restaurant",{yelp_id:t.restaurant,longitude:a.longitude,latitude:a.latitude,name:r,address1:s.address1,address2:s.address2,city:s.city,zip_code:s.zip_code}).then((function(e){return{status:e.status,restaurant:e.data}})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(G.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.post("http://localhost:4002/dish",{name:t.dish}).then((function(e){return{status:e.status,dish:e.data}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(G.a)(z.a.mark((function e(t,n,a,r){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.post("http://localhost:4002/rating",{rating:t.rating,comment:"placeholder comment",RestaurantId:n,DishId:a,UserId:r}).then((function(e){return{status:e.status,rating:e.data}})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Q=function(e){return J.get("http://localhost:4002/restaurants/search/".concat(e)).then((function(e){return{status:e.status,restaurants:e.data.businesses}}))},V=function(e){var t=e.renderComponent,n=e.handleGetRestaurantsByGeolocation,a=e.setRenderSearchForRestaurant,r=e.setRenderReviewForm,s=e.setReview,i=e.initialReviewState,c=Object(u.useState)({yesButton:!1,noButton:!1}),o=Object(h.a)(c,2),d=o[0],l=o[1],j=function(){var e=Object(G.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(i);case 2:return e.next=4,n();case 4:return e.next=6,a(!1);case 6:return e.next=8,r(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(G.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(i);case 2:return e.next=4,a(!0);case 4:return e.next=6,r(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?Object(O.jsxs)("div",{className:"form-field",id:"StillAtRestaurantSelector",children:[Object(O.jsx)("p",{className:"ReviewDishPage-text",children:"Are you at the restaurant?"}),Object(O.jsxs)("div",{id:"stillAtRestaurantButtonsContainer",children:[Object(O.jsx)("button",{type:"submit",className:"pink-button stillAtRestaurantButton ".concat(d.yesButton&&"disabled-pink-button"),onClick:function(){return!d.yesButton&&(l({yesButton:!0,noButton:!1}),void j())},children:"Yes"}),Object(O.jsx)("button",{type:"submit",className:"pink-button stillAtRestaurantButton ".concat(d.noButton&&"disabled-pink-button"),onClick:function(){return!d.noButton&&(l({yeButton:!1,noButton:!0}),void b())},children:"No"})]})]}):null},Z=function(e){var t=e.renderComponent,n=e.setRestaurantsList,a=e.review,r=e.setReview,s=e.setRenderReviewForm,i=Object(u.useState)(""),c=Object(h.a)(i,2),o=c[0],d=c[1],l=function(){var e=Object(G.a)(z.a.mark((function e(t){var i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Q(o);case 3:return i=e.sent,e.next=6,n(i.restaurants);case 6:return e.next=8,r(Object(q.a)(Object(q.a)({},a),{},{restaurant:i.restaurants[0].id}));case 8:s(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(O.jsxs)("div",{className:"form-field",children:[Object(O.jsxs)("label",{htmlFor:"set-location",children:["Enter the restaurant's address:",Object(O.jsx)("input",{id:"set-location",className:"form-input",name:"set-location",placeholder:"7 Main Street, Manchester",onChange:function(e){d(e.target.value)},value:o})]}),Object(O.jsx)("button",{id:"find-restaurant-submit-button",className:"pink-button",type:"submit",onClick:l,children:"Search"})]}):null},$=n(22),ee=n(47),te=(n(101),function(e){var t=e.renderComponent,n=e.restaurantsList,a=e.dishesList,r=e.setDishesList,s=e.handleFieldChange,i=e.currentRating,c=e.handleSubmitReviewForm,o=e.review,u=e.setReview,d=a.map((function(e){return{label:e,value:e}}));return t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"form-field",children:Object(O.jsxs)("label",{htmlFor:"restaurant",children:["Choose your restaurant:",Object(O.jsxs)("select",{id:"restaurant",className:"form-input",name:"restaurant",onChange:s,required:!0,children:[n.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)})),";"]})]})}),Object(O.jsxs)("form",{onSubmit:c,children:[Object(O.jsxs)("div",{className:"form-field",children:[Object(O.jsx)("p",{className:"select-food-header",children:"What did you eat?"}),Object(O.jsx)("p",{className:"select-food-text",children:"If it isn't in the list you can type it in!"}),Object(O.jsx)(ee.a,{options:d,name:"dish",onChange:function(e,t){"create-option"===t.action&&(r([].concat(Object($.a)(a),[e.value])),u(Object(q.a)(Object(q.a)({},o),{},{dish:e.value}))),"select-option"===t.action&&u(Object(q.a)(Object(q.a)({},o),{},{dish:e.value}))},id:"creatable",required:!0,components:{IndicatorSeparator:function(){return null}},styles:{control:function(e,t){return Object(q.a)(Object(q.a)({},e),{},{boxShadow:"none",border:t.isFocused&&"none"})},menu:function(e){return Object(q.a)(Object(q.a)({},e),{},{border:"none",boxShadow:"none"})},option:function(e,t){return Object(q.a)(Object(q.a)({},e),{},{backgroundColor:t.isFocused&&"lightgray",color:t.isFocused&&"red"})}}})]}),Object(O.jsxs)("div",{className:"form-field",id:"rating-form",children:[Object(O.jsxs)("label",{htmlFor:"rating",children:[Object(O.jsx)("p",{children:"Rate it!"}),Object(O.jsx)("input",{type:"range",id:"rating-slider",name:"rating",min:"1",max:"10",step:"1",onChange:s})]}),Object(O.jsxs)("div",{id:"rating-value-display",children:[Object(O.jsx)("p",{children:"Your rating:"}),Object(O.jsx)("p",{id:"rating-value-number",children:i})]})]}),Object(O.jsx)("div",{id:"review-submit-button",className:"form-field",children:Object(O.jsx)("button",{type:"submit",className:"pink-button",children:"Rate it!"})})]})]}):null}),ne=(n(102),function(e){var t=e.messageType,n=e.messageText;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("p",{className:"message ".concat(t),children:n})})});ne.defaultProps={messageType:""};var ae=ne,re=n.p+"static/media/review-image-1.47e0b1ab.png",se=function(e){var t=e.user,n={renderStillAtRestaurant:!1,renderSearchForRestaurant:!1,renderReviewForm:!1,submitStatus:"",geolocation:{latitude:"",longitude:""},locationSearch:"",restaurantsList:[],review:{restaurant:"",dish:"",rating:10}},a=Object(u.useState)(n.geolocation),r=Object(h.a)(a,2),s=r[0],i=r[1],c=Object(u.useState)(n.restaurantsList),o=Object(h.a)(c,2),d=o[0],l=o[1],j=Object(u.useState)([]),b=Object(h.a)(j,2),p=b[0],m=b[1],f=Object(u.useState)(n.review),g=Object(h.a)(f,2),x=g[0],v=g[1],w=Object(u.useState)(n.renderStillAtRestaurant),y=Object(h.a)(w,2),N=y[0],S=y[1],F=Object(u.useState)(n.renderSearchForRestaurant),k=Object(h.a)(F,2),R=k[0],P=k[1],C=Object(u.useState)(n.renderReviewForm),D=Object(h.a)(C,2),L=D[0],M=D[1],H=Object(u.useState)(n.submitStatus),B=Object(h.a)(H,2),I=B[0],A=B[1],E=function(){var e=Object(G.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return t=e.sent,m(t.dishes.map((function(e){return e.name}))),e.next=6,v(Object(q.a)(Object(q.a)({},x),{},{dish:p[0]}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(G.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=s.latitude,a=s.longitude,J.get("http://localhost:4002/restaurants/geolocation/".concat(n,"/").concat(a)).then((function(e){return{status:e.status,restaurants:e.data.businesses}}));case 2:return t=e.sent,e.next=5,l(t.restaurants);case 5:return e.next=7,v(Object(q.a)(Object(q.a)({},x),{},{restaurant:t.restaurants[0].id}));case 7:case"end":return e.stop()}var n,a}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(G.a)(z.a.mark((function e(n){var a,r,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=d.find((function(e){return e.id===x.restaurant})),e.next=4,W(x);case 4:return r=e.sent,e.next=7,Y(x,a);case 7:return s=e.sent,e.next=10,K(x,s.restaurant[0].id,r.dish[0].id,t.id);case 10:e.sent.status=A("success"),console.log("Loop Check");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){"geolocation"in navigator?S(!0):P(!0),function(){var e=function(){var e=Object(G.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({latitude:t.coords.latitude.toString(),longitude:t.coords.longitude.toString()});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();window.navigator.geolocation.getCurrentPosition(e)}(),E()}),[]),Object(O.jsxs)("div",{className:"ReviewDishPage",children:[Object(O.jsx)("h2",{className:"ReviewPage-header",id:"ReviewPage-header",children:Object(O.jsx)("img",{src:re,alt:"Rate a Dish"})}),Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsx)(V,{renderComponent:N,handleGetRestaurantsByGeolocation:U,setRenderSearchForRestaurant:P,setRenderReviewForm:M,setReview:v,initialReviewState:n.review}),Object(O.jsx)(Z,{renderComponent:R,setRestaurantsList:l,review:x,setReview:v,setRenderReviewForm:M}),Object(O.jsx)(te,{renderComponent:L,restaurantsList:d,dishesList:p,currentRating:x.rating,handleFieldChange:function(e){v(Object(q.a)(Object(q.a)({},x),{},Object(T.a)({},e.target.name,e.target.value)))},handleSubmitReviewForm:X,review:x,setReview:v,setDishesList:m})]}),"success"===I?Object(O.jsx)(ae,{messageType:"banner",messageText:"Rating submitted!"}):null,"fail"===I?Object(O.jsx)(ae,{messageType:"banner error",messageText:"Oops, something went wrong! Please try again later."}):null]})},ie=(n(103),n(104),function(e){var t=e.availableDishes,n=e.handleFilterByDish;return Object(O.jsx)("div",{className:"form-field",children:Object(O.jsxs)("label",{htmlFor:"set-dish",children:["Choose a dish:",Object(O.jsxs)("select",{id:"set-dish",className:"form-input",name:"set-dish",onChange:n,children:[Object(O.jsx)("option",{selected:!0,disabled:!0,hidden:!0,style:{display:"none"},value:"","aria-label":"Please select one of the following options"}),t.map((function(e){return Object(O.jsx)("option",{value:e.name,children:e.name},e.id)})),";"]})]})})});n(105);function ce(e){return e*(Math.PI/180)}var oe=function(e,t,n,a){var r=ce(n-e),s=ce(a-t),i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(ce(e))*Math.cos(ce(n))*Math.sin(s/2)*Math.sin(s/2);return 6371e3*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))};n(106);var ue=function(e){var t=e.rating,n=e.user,a=Object(u.useState)(!1),r=Object(h.a)(a,2),s=r[0],i=r[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("button",{type:"submit",className:"RatingCard",onClick:function(e){e.preventDefault(),"deleteRating"!==e.target.className&&i(!s)},children:[Object(O.jsxs)("div",{className:"RatingCard-top-container",children:[Object(O.jsxs)("div",{className:"RatingCard-left-container",children:[Object(O.jsx)("p",{children:t.name}),Object(O.jsxs)("p",{children:["Distance: ",t.distance,"m"]}),Object(O.jsx)("div",{})]}),Object(O.jsx)("div",{id:"RatingCard-right-container",children:Object(O.jsx)("div",{className:"rating-circle",children:Object(O.jsx)("p",{children:t.averageScore})})})]}),s&&Object(O.jsxs)("div",{className:"RatingCard-address",children:[Object(O.jsx)("p",{children:"Address:"}),Object(O.jsx)("p",{children:t.address.address1}),Object(O.jsx)("p",{children:t.address.address2}),Object(O.jsx)("p",{children:t.address.city}),Object(O.jsx)("p",{children:t.address.zip_code}),t.users.includes(n.id)&&Object(O.jsx)("button",{type:"submit",className:"deleteRating",onClick:function(e){e.preventDefault(),console.log(t)},children:"delete"})]})]})})};function de(e){var t=e.filteredRatings,n=e.coordinates,a=e.user,r=Object(u.useState)([]),s=Object(h.a)(r,2),i=s[0],c=s[1];Object(u.useEffect)((function(){var e=[];t.forEach((function(t){var a=Object(q.a)(Object(q.a)({},t),{},{distance:Math.round(oe(n.latitude,n.longitude,t.coordinates.latitude,t.coordinates.longitude)),averageScore:t.scores.reduce((function(e,t){return e+t}),0)/t.scores.length});e.push(a)})),c(e)}),[t]);return t[0]?Object(O.jsxs)("div",{id:"DishRatings",children:[Object(O.jsxs)("div",{id:"sort-buttons-container",children:[Object(O.jsx)("button",{className:"sort-button pink-button",type:"submit",onClick:function(e){e.preventDefault();var t=Object($.a)(i);t.sort((function(e,t){return e.averageScore>t.averageScore?-1:t.averageScore>e.averageScore?1:0})),c(t)},children:"Sort by Rating"}),Object(O.jsx)("button",{className:"sort-button pink-button",type:"submit",onClick:function(e){e.preventDefault();var t=Object($.a)(i);t.sort((function(e,t){return e.distance>t.distance?1:t.distance>e.distance?-1:0})),c(t)},children:"Sort by Distance"})]}),Object(O.jsx)("div",{id:"rating-cards",children:i.map((function(e){return Object(O.jsx)(ue,{rating:e,user:a},e.name)}))})]}):null}de.defaultProps={coordinates:{longitude:0,latitude:0},filteredRatings:[]};var le=de,je=n.p+"static/media/search-image-1.3e918d1e.png",be=function(e){var t=e.user,n=[],a={longitude:0,latitude:0},r=[],s=Object(u.useState)(n),i=Object(h.a)(s,2),c=i[0],o=i[1],d=Object(u.useState)(a),l=Object(h.a)(d,2),j=l[0],b=l[1],p=Object(u.useState)(r),m=Object(h.a)(p,2),f=m[0],g=m[1];Object(u.useEffect)((function(){function e(){return(e=Object(G.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,o(t.dishes);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){b({longitude:e.coords.longitude,latitude:e.coords.latitude})}))}),[]);var x=function(){var e=Object(G.a)(z.a.mark((function e(t){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,X(t.target.value);case 3:n=e.sent,g(n.ratings);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"FindDishPage",children:[Object(O.jsx)("h2",{className:"FindPage-header",id:"FindPage-header",children:Object(O.jsx)("img",{src:je,alt:"Find a Dish"})}),Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsx)(ie,{availableDishes:c,handleFilterByDish:x}),Object(O.jsx)("div",{children:Object(O.jsx)(le,{filteredRatings:f,coordinates:j,user:t})})]})]})};be.defaultProps={user:{id:0,accessToken:"",username:""}};var he=be,pe=n(33),me=function(){var e=Object(G.a)(z.a.mark((function e(t){var n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,console.log(n),e.abrupt("return",pe.post("http://localhost:4002/auth/signin",{username:n,password:a}).then((function(e){return{status:e.status,data:e.data}})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(G.a)(z.a.mark((function e(t){var n,a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=t.email,e.abrupt("return",pe.post("http://localhost:4002/auth/signup",{username:n,password:a,email:r}).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=n.p+"static/media/login-image-2.f1b7d5f7.png";n(107);var Oe=function(e){var t=e.setUser,n=Object(u.useState)({username:"",password:""}),a=Object(h.a)(n,2),r=a[0],s=a[1],i=Object(p.e)(),c=function(){var e=Object(G.a)(z.a.mark((function e(n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,me(r).then((function(e){if(e.data.accessToken){var n={username:e.data.username,accessToken:e.data.accessToken,id:e.data.id};t(n),localStorage.setItem("loggedInUser",JSON.stringify(n)),i.push("/")}})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"LoginPage",children:[Object(O.jsx)("h2",{className:"LoginPage-header",id:"LoginPage-header",children:Object(O.jsx)("img",{src:ge,alt:"Log In"})}),Object(O.jsxs)("form",{className:"LoginPage-form",onChange:function(e){e.preventDefault(),s(Object(q.a)(Object(q.a)({},r),{},Object(T.a)({},e.target.name,e.target.value)))},children:[Object(O.jsxs)("label",{className:"LoginPage-form-field",htmlFor:"username",children:[Object(O.jsx)("p",{children:"username:"}),Object(O.jsx)("input",{type:"text",name:"username"})]}),Object(O.jsxs)("label",{className:"LoginPage-form-field",htmlFor:"password",children:[Object(O.jsx)("p",{children:"password:"}),Object(O.jsx)("input",{type:"password",name:"password"})]}),Object(O.jsx)("button",{className:"LoginPage-login-button",type:"submit",onClick:c,children:"login"})]}),Object(O.jsx)(l.b,{className:"LoginPage-signup-button",to:"/signup",children:"Not a member? Sign up!"})]})},xe=n.p+"static/media/signup-image-1.a01a6aa7.png";n(108);var ve=function(){var e=Object(u.useState)({username:"",password:""}),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(p.e)(),s=function(){var e=Object(G.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fe(n).then((function(){console.log("successfully signed up!"),r.push("/")})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"SignupPage",children:[Object(O.jsx)("h2",{className:"SignupPage-header",id:"SignupPage-header",children:Object(O.jsx)("img",{src:xe,alt:"Sign Up"})}),Object(O.jsxs)("form",{className:"SignupPage-form",onChange:function(e){e.preventDefault(),a(Object(q.a)(Object(q.a)({},n),{},Object(T.a)({},e.target.name,e.target.value)))},children:[Object(O.jsxs)("label",{className:"SignupPage-form-field",htmlFor:"username",children:[Object(O.jsx)("p",{children:"username:"}),Object(O.jsx)("input",{type:"text",name:"username"})]}),Object(O.jsxs)("label",{className:"SignupPage-form-field",htmlFor:"email",children:[Object(O.jsx)("p",{children:"email:"}),Object(O.jsx)("input",{type:"text",name:"email"})]}),Object(O.jsxs)("label",{className:"SignupPage-form-field",htmlFor:"password",children:[Object(O.jsx)("p",{children:"password:"}),Object(O.jsx)("input",{type:"password",name:"password"})]}),Object(O.jsx)("button",{className:"SignupPage-signup-button",type:"submit",onClick:s,children:"Create Account"})]})]})},we=function(){var e=Object(u.useState)({username:"",accessToken:"",id:0}),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(u.useEffect)((function(){localStorage.loggedInUser&&a(JSON.parse(localStorage.loggedInUser))}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(A,{user:n,setUser:a}),Object(O.jsxs)(l.a,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",component:function(){return Object(O.jsx)(E,{user:n,setUser:a})}}),Object(O.jsx)(p.a,{exact:!0,path:"/review",component:function(){return Object(O.jsx)(se,{user:n})}}),Object(O.jsx)(p.a,{exact:!0,path:"/find",component:function(){return Object(O.jsx)(he,{user:n})}}),Object(O.jsx)(p.a,{exact:!0,path:"/signin",component:function(){return Object(O.jsx)(Oe,{user:n,setUser:a})}}),Object(O.jsx)(p.a,{exact:!0,path:"/Signup",component:function(){return Object(O.jsx)(ve,{})}})]})]})};b.a.render(Object(O.jsx)(d.a.StrictMode,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(we,{})})}),document.getElementById("root"))},32:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.f0f1b522.chunk.js.map