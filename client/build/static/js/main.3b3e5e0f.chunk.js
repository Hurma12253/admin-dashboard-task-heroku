(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a.n(n),s=a(13),i=a.n(s),o=(a(136),a(15)),l=a(22),u=a(18),d=a(205),j=a(11),b=a(47),p=a(203),O=a(206),m=a(228),x=a(109),g=a(207),h=a(72),f=a(233),v=a(106),y=a(211),S=a(231),E=a(208),C=a(164),w=a(210),N=a(209),_=a(201),k=a(24),I=a.n(k),U=a(35),F="USER_LOGIN_FETCHING",R="USER_LOGIN_SUCCESS",L="USER_LOGIN_FAILURE",A="LOGOUT",T="USER_REGISTER_FETCHING",M="USER_REGISTER_SUCCESS",D="USER_REGISTER_FAILURE",W="USER_ADDMEMBER_FETCHING",G="USER_ADDMEMBER_SUCCESS",P="USER_ADDMEMBER_FAILURE",H="USER_GETMEMBERS_FETCHING",B="USER_GETMEMBERS_SUCCESS",J="USER_GETMEMBERS_FAILURE",q="USER_LOGINMEMBER_FETCHING",Y="USER_LOGINMEMBER_SUCCESS",z="USER_LOGINMEMBER_FAILURE",X="USER_EDITMEMBER_FETCHING",V="USER_EDITMEMBER_SUCCESS",K="USER_EDITMEMBER_FAILURE",Q="USER_DELETE_FETCHING",Z="USER_DELETE_SUCCESS",$="USER_DELETE_FAILURE",ee="APIS_GET_FETCHING",te="APIS_GET_SUCCESS",ae="APIS_GET_FAILURE",re="APIS_CLEAR",ne=function(e){return e.response&&e.response.data.message?e.response.data.message:e.message},ce=a(98),se=a(99),ie=a(100),oe=a.n(ie),le=a(40),ue=a(101),de=a(102),je=a(7),be=JSON.parse(localStorage.getItem("UserInfo")||"null"),pe=JSON.parse(localStorage.getItem("Users")||"null"),Oe={logged:!!be,user:be,users:pe?pe.filter((function(e){return e._id!==be._id})):null,loading:!1,error:null,addUserLoading:!1,addUserError:null,userLoginLoading:!1,updatedPatch:Math.random()},me={loading:!1,apis:JSON.parse(localStorage.getItem("Apis")||"[]"),error:null},xe=Object(le.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(je.a)(Object(je.a)({},e),{},{loading:!0,error:null});case R:return localStorage.setItem("UserInfo",JSON.stringify(Object(je.a)({},t.payload.user))),localStorage.setItem("Users",JSON.stringify(t.payload.user.users)),Object(je.a)(Object(je.a)({},e),{},{loading:!1,logged:!0,user:t.payload.user,users:t.payload.user.users.filter((function(e){return e._id!==t.payload.user._id})),error:null});case L:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,error:t.payload.error});case A:return localStorage.clear(),Object(je.a)(Object(je.a)({},e),{},{loading:!1,logged:!1,error:null,user:null,users:[]});case T:return Object(je.a)(Object(je.a)({},e),{},{loading:!0,error:null});case M:return localStorage.setItem("UserInfo",JSON.stringify(Object(je.a)({},t.payload.user))),localStorage.setItem("Users",JSON.stringify(t.payload.user.users)),Object(je.a)(Object(je.a)({},e),{},{loading:!1,logged:!0,user:t.payload.user,users:t.payload.user.users.filter((function(e){return e._id!==t.payload.user._id})),error:null});case D:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,error:t.payload.error});case W:return Object(je.a)(Object(je.a)({},e),{},{addUserLoading:!0,addUserError:null});case G:return localStorage.setItem("Users",JSON.stringify(t.payload.users)),Object(je.a)(Object(je.a)({},e),{},{addUserLoading:!1,users:t.payload.users.filter((function(t){var a;return t._id!==(null===(a=e.user)||void 0===a?void 0:a._id)})),addUserError:null});case P:return Object(je.a)(Object(je.a)({},e),{},{addUserLoading:!1,addUserError:t.payload.error});case H:return Object(je.a)(Object(je.a)({},e),{},{loading:!0,error:null});case B:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,users:t.payload.users.filter((function(t){var a;return t._id!==(null===(a=e.user)||void 0===a?void 0:a._id)})),error:null});case J:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,error:t.payload.error});case q:return Object(je.a)(Object(je.a)({},e),{},{userLoginLoading:!0,error:null});case Y:return localStorage.setItem("UserInfo",JSON.stringify(Object(je.a)({},t.payload.user))),localStorage.setItem("Users",JSON.stringify(t.payload.user.users)),Object(je.a)(Object(je.a)({},e),{},{userLoginLoading:!1,user:t.payload.user,users:t.payload.user.users.filter((function(e){return e._id!==t.payload.user._id})),error:null,updatedPatch:Math.random()});case z:return Object(je.a)(Object(je.a)({},e),{},{userLoginLoading:!1,error:t.payload.error});case X:return Object(je.a)(Object(je.a)({},e),{},{loading:!0,error:null});case V:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,users:t.payload.users.filter((function(t){var a;return t._id!==(null===(a=e.user)||void 0===a?void 0:a._id)})),error:null});case K:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,error:t.payload.error});case Q:return Object(je.a)(Object(je.a)({},e),{},{loading:!0,error:null});case Z:return localStorage.setItem("Users",JSON.stringify(t.payload.users)),Object(je.a)(Object(je.a)({},e),{},{loading:!1,error:null,users:t.payload.users.filter((function(t){var a;return t._id!==(null===(a=e.user)||void 0===a?void 0:a._id)}))});case $:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,error:t.payload.error});default:return Object(je.a)({},e)}},api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(je.a)(Object(je.a)({},e),{},{loading:!0});case te:return localStorage.setItem("Apis",JSON.stringify(t.payload.apis)),Object(je.a)(Object(je.a)({},e),{},{loading:!1,apis:t.payload.apis});case ae:return Object(je.a)(Object(je.a)({},e),{},{loading:!1,error:t.payload.error});case re:return Object(je.a)(Object(je.a)({},e),{},{apis:[],loading:!1,error:null});default:return Object(je.a)({},e)}}}),ge=Object(le.createStore)(xe,Object(de.composeWithDevTools)(Object(le.applyMiddleware)(ue.a))),he={baseURL:"https://dashboardtesttask.herokuapp.com"},fe=new(function(){function e(){Object(ce.a)(this,e),this.axios=void 0,this.axios=oe.a.create(he),this.axios.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("UserInfo")||"null");return t&&(e.headers.Token=t.token),e})),this.axios.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&ge.dispatch({type:"LOGOUT"}),Promise.reject(e)}))}return Object(se.a)(e,[{key:"userSignup",value:function(e){return this.axios.post("/user/signup",e)}},{key:"userSignin",value:function(e){return this.axios.post("/user/signin",e)}},{key:"editUser",value:function(e){return this.axios.put("/user/edituser",e)}},{key:"getMembers",value:function(){return this.axios.get("/user/getmembers")}},{key:"addMember",value:function(e){return this.axios.post("/user/addmember",e)}},{key:"loginMember",value:function(e){return this.axios.post("/user/loginmember",e)}},{key:"deleteUser",value:function(e){return this.axios.post("/user/delete",e)}},{key:"getRandomApiList",value:function(){return this.axios.get("/randomApiList")}}]),e}()),ve=function(){return{type:F}},ye=function(e){return{type:R,payload:{user:e}}},Se=function(e){return{type:L,payload:{error:ne(e)}}},Ee=function(){return{type:A}},Ce=function(){return{type:T}},we=function(e){return{type:M,payload:{user:e}}},Ne=function(e){return{type:D,payload:{error:ne(e)}}},_e=function(){return{type:W}},ke=function(e){return{type:G,payload:e}},Ie=function(e){return{type:P,payload:{error:e}}},Ue=function(){return{type:H}},Fe=function(e){return{type:B,payload:e}},Re=function(e){return{type:"USER_GETMEMBERS_FAILURE",payload:{error:e}}},Le=function(){return{type:q}},Ae=function(e){return{type:Y,payload:{user:e}}},Te=function(e){return{type:z,payload:{error:e}}},Me=function(){return{type:X}},De=function(e){return{type:V,payload:e}},We=function(e){return{type:K,payload:{error:e}}},Ge=function(){return{type:Q}},Pe=function(e){return{type:Z,payload:e}},He=function(e){return{type:$,payload:{error:e}}},Be=Object(_.a)((function(e){return{root:{background:"#2B3245"},toolbar:{display:"flex",justifyContent:"space-between"},logo:{textDecoration:"none",color:"#FFFFFF",transition:".2s","&:hover":{transform:"scale(1.1)"}},signin:{color:"#FFFFFF",textDecoration:"none"},nav:{display:"flex",alignItems:"center",height:"100%","&>*":{marginLeft:"10px"}},user:Object(b.a)({display:"flex",alignItems:"center",cursor:"pointer",minHeight:"100%",padding:"8px 12px","&:hover":{background:"rgba(255,255,255,.1)"},"&>div":{marginLeft:"10px"}},e.breakpoints.down("xs"),{display:"none"}),users:Object(b.a)({minHeight:"100%",padding:"12px 12px","&:hover":{background:"rgba(255,255,255,.1)"}},e.breakpoints.down("xs"),{display:"none"}),burger:Object(b.a)({minHeight:"100%","&>img":{width:"30px"},"&:hover":{background:"rgba(255,255,255,.1)"}},e.breakpoints.up("sm"),{display:"none"}),drawer:Object(b.a)({},e.breakpoints.up("sm"),{display:"none"}),drawerList:{width:"200px"},nested:{paddingLeft:"30px"},drawerAvatar:{marginRight:"8px"}}})),Je=function(){var e=Be(),t=Object(u.g)(),a=Object(o.b)(),s=Object(o.c)((function(e){return e.user})),i=s.logged,b=s.user,_=s.users,k=Object(n.useState)(!1),F=Object(j.a)(k,2),R=F[0],L=F[1],A=Object(n.useState)(!1),T=Object(j.a)(A,2),M=T[0],D=T[1],W=function(e){L(e)},G=Object(n.useState)(null),P=Object(j.a)(G,2),H=P[0],B=P[1],J=function(){B(null)},q=c.a.useState(null),Y=Object(j.a)(q,2),z=Y[0],X=Y[1],V=function(){X(null),W(!1),D(!1)},K=function(){J(),W(!1),t.push("/dashboard")},Q=function(e){var t,r;a((t={_id:e},r=V,function(){var e=Object(U.a)(I.a.mark((function e(a){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(Le()),e.next=4,fe.loginMember(t);case 4:n=e.sent,(c=n.data)&&(r&&r(),a(Ae(c))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a(Te(ne(e.t0)));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))};return Object(r.jsx)(p.a,{className:e.root,position:"static",children:Object(r.jsx)(d.a,{maxWidth:"lg",children:Object(r.jsxs)(O.a,{className:e.toolbar,children:[Object(r.jsx)(l.b,{to:"/",className:e.logo,children:Object(r.jsx)(x.a,{variant:"h4",children:"HurmaRC"})}),i?Object(r.jsxs)(m.a,{className:e.nav,children:[Object(r.jsx)(h.a,{onClick:function(){return W(!0)},className:e.burger,children:Object(r.jsx)("img",{src:"/assets/svg/burger.svg",alt:"burger"})}),Object(r.jsx)(S.a,{className:e.drawer,onClose:function(){return W(!1)},onOpen:function(){return W(!0)},open:R,anchor:"right",children:Object(r.jsxs)(E.a,{className:e.drawerList,children:[Object(r.jsxs)(C.a,{children:[Object(r.jsx)(f.a,{className:e.drawerAvatar,children:null===b||void 0===b?void 0:b.firstname.charAt(0)}),Object(r.jsx)(x.a,{children:null===b||void 0===b?void 0:b.firstname})]}),Object(r.jsx)(N.a,{}),Object(r.jsx)(C.a,{children:"Profile"}),Object(r.jsx)(C.a,{onClick:K,children:"Dashboard"}),Object(r.jsx)(C.a,{onClick:function(){return D((function(e){return!e}))},children:"Users"}),Object(r.jsx)(w.a,{in:M,timeout:"auto",unmountOnExit:!0,children:_.map((function(t){return Object(r.jsx)(C.a,{className:e.nested,onClick:function(){return Q(t._id)},children:t.email},"header ".concat(t._id))}))})]})}),_.length>0?Object(r.jsx)(h.a,{onClick:function(e){X(e.currentTarget)},className:e.users,children:Object(r.jsx)("img",{style:{width:"30px"},src:"/assets/svg/users.svg",alt:"users"})}):null,Object(r.jsx)(v.a,{anchorEl:z,keepMounted:!0,open:!!z,onClose:V,children:_.map((function(e){return Object(r.jsx)(y.a,{onClick:function(){return Q(e._id)},children:e.email},"header ".concat(e._id))}))}),Object(r.jsxs)(h.a,{className:e.user,onClick:function(e){B(e.currentTarget.children[1])},children:[Object(r.jsx)(x.a,{children:null===b||void 0===b?void 0:b.firstname}),Object(r.jsx)(f.a,{children:null===b||void 0===b?void 0:b.firstname.charAt(0)})]}),Object(r.jsxs)(v.a,{anchorEl:H,keepMounted:!0,open:!!H,onClose:J,children:[Object(r.jsx)(y.a,{onClick:J,children:"Profile"}),Object(r.jsx)(y.a,{onClick:K,children:"Dashboard"}),Object(r.jsx)(y.a,{onClick:function(){J(),a(Ee())},children:"Logout"})]})]}):Object(r.jsx)(l.b,{style:{textDecoration:"none"},to:"/signin",children:Object(r.jsx)(g.a,{className:e.signin,children:"sign in"})})]})})})},qe=Object(_.a)((function(e){return{text:{position:"absolute",left:"50%",top:"20%",transform:"translate(-50%,-50%)"},img:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:"calc(310px + 10vw)"}}})),Ye=function(){var e=qe(),t=Object(o.c)((function(e){return e.user})).logged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:e.text,children:t?"You are authorized":"You are not authorized!"}),Object(r.jsx)("img",{className:e.img,src:"/assets/img/manekineko.png",alt:""})]})},ze=a(229),Xe=a(217),Ve=a(212),Ke=a(227),Qe=a(215),Ze=a(232),$e=a(216),et=a(230),tt=a(213),at=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},progress:{position:"absolute",width:"100%"}}}));function rt(){return Object(r.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(r.jsx)(l.b,{to:"/",children:"HurmaRC"})," ",(new Date).getFullYear(),"."]})}var nt=function(){var e=at(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.user})),c=a.loading,s=a.error,i=Object(n.useState)(""),u=Object(j.a)(i,2),d=u[0],b=u[1],p=Object(n.useState)(""),O=Object(j.a)(p,2),h=O[0],v=O[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ve.a,{}),Object(r.jsxs)("div",{className:e.paper,children:[c&&Object(r.jsx)(tt.a,{className:e.progress}),s&&Object(r.jsx)(et.a,{style:{width:"100%"},severity:"error",children:s}),Object(r.jsx)(f.a,{className:e.avatar}),Object(r.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(r.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:d,onChange:function(e){b(e.target.value)}}),Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:h,onChange:function(e){v(e.target.value)}}),Object(r.jsx)(Qe.a,{control:Object(r.jsx)(Ze.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(r.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){if(e.preventDefault(),!d||!h)return t(Se({message:"Invalid data!"}));var a;t((a={email:d,password:h},function(){var e=Object(U.a)(I.a.mark((function e(t){var r,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(ve()),e.next=4,fe.userSignin(a);case 4:r=e.sent,(n=r.data)&&(t(Ee()),t(ye(n))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t(Se(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},disabled:c,children:"Sign In"}),Object(r.jsxs)($e.a,{container:!0,children:[Object(r.jsx)($e.a,{item:!0,xs:!0,children:Object(r.jsx)(l.b,{to:"signin",children:"Forgot password?"})}),Object(r.jsx)($e.a,{item:!0,children:Object(r.jsx)(l.b,{to:"/signup",children:"Don't have an account? Sign Up"})})]})]})]}),Object(r.jsx)(m.a,{mt:8,children:Object(r.jsx)(rt,{})})]})},ct=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},progress:{position:"absolute",width:"100%"}}}));function st(){return Object(r.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(r.jsx)(l.b,{to:"/",children:"HurmaRC"})," ",(new Date).getFullYear(),"."]})}var it=function(){var e=ct(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.user})),c=a.loading,s=a.error,i=Object(n.useState)(""),u=Object(j.a)(i,2),d=u[0],b=u[1],p=Object(n.useState)(""),O=Object(j.a)(p,2),h=O[0],v=O[1],y=Object(n.useState)(""),S=Object(j.a)(y,2),E=S[0],C=S[1],w=Object(n.useState)(""),N=Object(j.a)(w,2),_=N[0],k=N[1],F=Object(n.useState)(""),R=Object(j.a)(F,2),L=R[0],A=R[1],T=Object(n.useState)(""),M=Object(j.a)(T,2),D=M[0],W=M[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ve.a,{}),Object(r.jsxs)("div",{className:e.paper,children:[c&&Object(r.jsx)(tt.a,{className:e.progress}),s&&Object(r.jsx)(et.a,{style:{width:"100%"},severity:"error",children:s}),Object(r.jsx)(f.a,{className:e.avatar}),Object(r.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(r.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:d,onChange:function(e){return b(e.target.value)}}),Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:h,onChange:function(e){return v(e.target.value)}}),Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"reppassword",label:"Repeat password",type:"password",id:"reppassword",autoComplete:"current-password",value:E,onChange:function(e){return C(e.target.value)}}),Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstname",label:"firstname",name:"firstname",autoComplete:"firstname",value:_,onChange:function(e){return k(e.target.value)}}),Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastname",label:"lastname",name:"lastname",autoComplete:"lastname",value:L,onChange:function(e){return A(e.target.value)}}),Object(r.jsx)(Ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"patronymic",label:"patronymic",name:"patronymic",autoComplete:"patronymic",value:D,onChange:function(e){return W(e.target.value)}}),Object(r.jsx)(Qe.a,{control:Object(r.jsx)(Ze.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(r.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){if(e.preventDefault(),!d||!h||!E||!_||!L||!D)return t(Ne({message:"Invalid data!"}));var a;t((a={email:d,password:h,firstname:_,lastname:L,patronymic:D},function(){var e=Object(U.a)(I.a.mark((function e(t){var r,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Ce()),e.next=4,fe.userSignup(a);case 4:r=e.sent,(n=r.data)&&(t(Ee()),t(we(n))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Ne(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},disabled:c,children:"Sign In"}),Object(r.jsxs)($e.a,{container:!0,children:[Object(r.jsx)($e.a,{item:!0,xs:!0,children:Object(r.jsx)(l.b,{to:"signin",children:"Forgot password?"})}),Object(r.jsx)($e.a,{item:!0,children:Object(r.jsx)(l.b,{to:"/signup",children:"Don't have an account? Sign Up"})})]})]})]}),Object(r.jsx)(m.a,{mt:8,children:Object(r.jsx)(st,{})})]})},ot=Object(_.a)((function(e){return{link:{textDecoration:"none",color:"#000000"},root:{},tabs:{display:"flex",justifyContent:"center"}}})),lt=function(){var e=ot(),t=Object(u.g)(),a=Object(u.h)(),c=Object(n.useState)("/signin"===a.pathname?0:1),s=Object(j.a)(c,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){o("/signin"===a.pathname?0:1)}),[a]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{maxWidth:"xs",className:e.root,children:[Object(r.jsx)(m.a,{className:e.tabs,children:Object(r.jsxs)(ze.a,{value:i,onChange:function(e,a){t.push(0===a?"/signin":"/signup")},children:[Object(r.jsx)(Xe.a,{label:"Signin"}),Object(r.jsx)(Xe.a,{label:"Signup"})]})}),0===i?Object(r.jsx)(nt,{}):Object(r.jsx)(it,{})]})})},ut=a(234),dt=a(111),jt=a(5),bt=a(108),pt=a(224),Ot=a(226),mt=a(221),xt=a(223),gt=a(225),ht=a(222),ft=a(214),vt=Object(_.a)((function(e){return{img:{width:"20px"}}})),yt=function(e){var t=vt();return Object(r.jsx)(g.a,Object(je.a)(Object(je.a)({},e),{},{variant:"contained",color:"secondary",startIcon:Object(r.jsx)("img",{className:t.img,src:"/assets/svg/plus.svg",alt:"plus"}),children:"Add"}))},St=a(218),Et=Object(_.a)((function(e){return{root:{display:"flex",padding:"10px 10px",borderRadius:"22px",position:"relative"},img:{width:"20px",transform:"translateY(1px)"},button:{marginRight:"8px",outline:"none",border:"none",background:"transparent",cursor:"pointer"},input:{outline:"none",border:"none",background:"transparent",fontSize:"16px"},ripple:{position:"absolute",left:0,right:0,top:0,bottom:0,cursor:"pointer",borderRadius:"22px",background:"rgba(0,0,0,.02)",zIndex:1,transition:".2s","&:hover":{background:"rgba(0,0,0,.08)"}}}})),Ct=function(){var e=Et(),t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],s=a[1],i=Object(n.createRef)();return Object(r.jsx)(St.a,{onClickAway:function(){s(!1)},children:Object(r.jsxs)(m.a,{className:e.root,children:[!c&&Object(r.jsx)("div",{onClick:function(){var e;s(!0),null===(e=i.current)||void 0===e||e.focus()},className:e.ripple}),Object(r.jsx)("button",{className:e.button,children:Object(r.jsx)("img",{className:e.img,src:"/assets/svg/search.svg",alt:"search"})}),Object(r.jsx)("input",{ref:i,className:e.input,placeholder:"search",type:"text"})]})})},wt=a(220),Nt=a(219),_t=Object(_.a)((function(e){return{progress:{position:"absolute",width:"100%"}}})),kt=function(e){var t=e.open,a=e.onApply,c=e.onClose,s=_t(),i=Object(o.c)((function(e){return e.user})),l=i.addUserLoading,u=i.addUserError,d=Object(n.useState)(""),b=Object(j.a)(d,2),p=b[0],O=b[1],m=Object(n.useState)(""),x=Object(j.a)(m,2),h=x[0],f=x[1],v=Object(n.useState)(""),y=Object(j.a)(v,2),S=y[0],w=y[1],N=Object(n.useState)(""),_=Object(j.a)(N,2),k=_[0],I=_[1],U=Object(n.useState)(""),F=Object(j.a)(U,2),R=F[0],L=F[1];return Object(r.jsxs)(Nt.a,{onClose:c,open:t,children:[l&&Object(r.jsx)(tt.a,{className:s.progress}),Object(r.jsx)(wt.a,{children:"Add user"}),u&&Object(r.jsx)(et.a,{severity:"error",children:u}),Object(r.jsxs)(E.a,{children:[Object(r.jsx)(C.a,{children:Object(r.jsx)(Ke.a,{value:p,onChange:function(e){return O(e.target.value)},variant:"outlined",label:"email",type:"email",autoComplete:"email"})}),Object(r.jsx)(C.a,{children:Object(r.jsx)(Ke.a,{value:h,onChange:function(e){return f(e.target.value)},variant:"outlined",label:"password",type:"password"})}),Object(r.jsx)(C.a,{children:Object(r.jsx)(Ke.a,{value:S,onChange:function(e){return w(e.target.value)},variant:"outlined",label:"firstname"})}),Object(r.jsx)(C.a,{children:Object(r.jsx)(Ke.a,{value:k,onChange:function(e){return I(e.target.value)},variant:"outlined",label:"lastname"})}),Object(r.jsx)(C.a,{children:Object(r.jsx)(Ke.a,{value:R,onChange:function(e){return L(e.target.value)},variant:"outlined",label:"patronymic"})}),Object(r.jsxs)(C.a,{children:[Object(r.jsx)(g.a,{onClick:function(){return a({email:p,password:h,firstname:S,lastname:k,patronymic:R})},disabled:l,children:"apply"}),Object(r.jsx)(g.a,{onClick:c,children:"cancel"})]})]})]})},It=Object(_.a)((function(e){return{root:{minHeight:"100px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 60px",flexWrap:"wrap"}}})),Ut=function(){var e=It(),t=Object(o.b)(),a=Object(n.useState)(!1),c=Object(j.a)(a,2),s=c[0],i=c[1],l=function(){i(!1)};return Object(r.jsxs)(d.a,{className:e.root,maxWidth:"lg",children:[Object(r.jsx)(Ct,{}),Object(r.jsx)(yt,{onClick:function(){return i(!0)}}),Object(r.jsx)(kt,{open:s,onApply:function(e){var a,r;t((a=e,r=l,function(){var e=Object(U.a)(I.a.mark((function e(t){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(_e()),e.next=4,fe.addMember(a);case 4:n=e.sent,(c=n.data)&&(r&&r(),t(ke(c))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t(Ie(ne(e.t0)));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},onClose:l})]})},Ft=Object(jt.a)((function(e){return{head:{backgroundColor:"#FFFFFF",borderBottom:"none",fontWeight:600},body:{borderBottom:"none",position:"relative",maxWidth:"165px",wordWrap:"break-word"}}}))(mt.a),Rt=Object(jt.a)((function(e){return{root:{cursor:"pointer","&:nth-of-type(even)":{backgroundColor:"#F5F8FD"},opacity:1,transform:"translateX(-1000px)"}}}))(ht.a),Lt=Object(_.a)((function(e){return{paper:{flex:"1 1"},table:{},tableHeader:{background:"#FFFFFF",boxShadow:"0px 1px 8px -3px rgba(0,0,0,.25)"},actionIcon:{width:"20px"},progress:{position:"absolute",width:"100%"},entering:{opacity:1,transform:"translateX(0px)",transition:".4s"},entered:{opacity:1,transform:"translateX(0px)",transition:".4s"},exiting:{opacity:0,transform:"translateX(1000px)",transition:".4s"},exited:{opacity:0,transition:".4s"},unmounted:{}}})),At=function(){var e=Lt(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.user})),c=a.loading,s=a.error,i=a.users,l=a.updatedPatch,u=Object(n.useState)(""),b=Object(j.a)(u,2),p=b[0],O=b[1],m=Object(n.useState)(""),x=Object(j.a)(m,2),g=x[0],h=x[1],f=Object(n.useState)(""),v=Object(j.a)(f,2),y=v[0],S=v[1],E=Object(n.useState)(""),C=Object(j.a)(E,2),w=C[0],N=C[1],_=Object(n.useState)(""),k=Object(j.a)(_,2),F=k[0],R=k[1],L=function(e){return h(e.target.value)},A=function(e){return S(e.target.value)},T=function(e){return N(e.target.value)},M=function(e){return R(e.target.value)},D=function(e){var a;if(p&&!window.confirm("Your changes will not save, do you agree?"))return;window.confirm("Do you realy want to delete this user?")&&t((a={_id:e._id},function(){var e=Object(U.a)(I.a.mark((function e(t){var r,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Ge()),e.next=4,fe.deleteUser(a);case 4:r=e.sent,(n=r.data)&&t(Pe(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(He(ne(e.t0)));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},W=function(){var e;window.confirm("Are you realy to accept?")&&(t((e={_id:p,email:g,firstname:y,lastname:w,patronymic:F},function(){var t=Object(U.a)(I.a.mark((function t(a){var r,n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(Me()),t.next=4,fe.editUser(e);case 4:r=t.sent,(n=r.data)&&a(De(n)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(We(ne(t.t0)));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),O(""))},G=function(){O("")};return Object(n.useEffect)((function(){t(function(){var e=Object(U.a)(I.a.mark((function e(t){var a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Ue()),e.next=4,fe.getMembers();case 4:a=e.sent,(r=a.data)&&t(Fe(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Re(ne(e.t0)));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t,l]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ut,{}),Object(r.jsxs)(bt.a,{className:e.paper,children:[c&&Object(r.jsx)(tt.a,{className:e.progress}),Object(r.jsxs)(d.a,{maxWidth:"lg",children:[s&&Object(r.jsx)(et.a,{severity:"error",children:s}),Object(r.jsx)(xt.a,{className:e.table,children:Object(r.jsxs)(pt.a,{children:[Object(r.jsx)(gt.a,{children:Object(r.jsxs)(ht.a,{className:e.tableHeader,children:[Object(r.jsx)(Ft,{children:"Email"}),Object(r.jsx)(Ft,{children:"Firstname"}),Object(r.jsx)(Ft,{children:"Lastname"}),Object(r.jsx)(Ft,{children:"Patronymic"}),Object(r.jsx)(Ft,{children:"Actions"})]})}),Object(r.jsx)(ut.a,{component:Ot.a,children:i.map((function(t){return Object(r.jsx)(dt.a,{timeout:400,unmountOnExit:!0,children:function(a){return Object(r.jsxs)(Rt,{className:e[a],children:[Object(r.jsx)(Ft,{children:t._id===p?Object(r.jsx)(Ke.a,{label:"Email",value:g,onChange:L,multiline:!0}):t.email}),Object(r.jsx)(Ft,{children:t._id===p?Object(r.jsx)(Ke.a,{label:"Firstname",value:y,onChange:A,multiline:!0}):t.firstname}),Object(r.jsx)(Ft,{children:t._id===p?Object(r.jsx)(Ke.a,{label:"Lastname",value:w,onChange:T,multiline:!0}):t.lastname}),Object(r.jsx)(Ft,{children:t._id===p?Object(r.jsx)(Ke.a,{label:"Patronymic",value:F,onChange:M,multiline:!0}):t.patronymic}),Object(r.jsx)(Ft,{children:t._id===p?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ft.a,{onClick:W,children:Object(r.jsx)("img",{src:"/assets/svg/accept.svg",alt:"accept",className:e.actionIcon})}),Object(r.jsx)(ft.a,{onClick:G,children:Object(r.jsx)("img",{src:"/assets/svg/cancel.svg",alt:"cancel",className:e.actionIcon})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ft.a,{onClick:function(){return function(e){if(p&&!window.confirm("Your changes will not save, do you agree?"))return;O(e._id),h(e.email),S(e.firstname),N(e.lastname),R(e.patronymic)}(t)},children:Object(r.jsx)("img",{className:e.actionIcon,src:"/assets/svg/edit.svg",alt:"edit"})}),Object(r.jsx)(ft.a,{onClick:function(){return D(t)},children:Object(r.jsx)("img",{src:"/assets/svg/delete.svg",alt:"delete",className:e.actionIcon})})]})})]},t._id)}},t._id)}))})]})})]})]})]})},Tt=Object(_.a)((function(e){return{root:{minHeight:"100px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 60px",flexWrap:"wrap"}}})),Mt=function(){var e=Tt();return Object(r.jsxs)(d.a,{className:e.root,maxWidth:"lg",children:[Object(r.jsx)(Ct,{}),Object(r.jsx)(yt,{})]})},Dt=Object(_.a)((function(e){return{root:{maxWidth:"350px",width:"100%",minHeight:"350px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"30px 30px",cursor:"pointer",transition:".1s","&:hover":{boxShadow:"0px 0px 16px 0px rgba(0,0,0,.1)"}},img:{marginBottom:"38px"},title:{marginBottom:"20px"},description:{}}})),Wt=function(e){var t=e.api,a=Dt(),n=Object(u.g)();return Object(r.jsxs)(m.a,{onClick:function(){n.push("/dashboard/apicards/".concat(t.API))},className:a.root,component:bt.a,children:[Object(r.jsx)("img",{className:a.img,src:"/assets/svg/fire.svg",alt:"fire"}),Object(r.jsx)(x.a,{className:a.title,variant:"h4",children:t.API}),Object(r.jsx)(x.a,{className:a.description,children:t.Description})]})},Gt=function(){return{type:ee}},Pt=function(e){return{type:te,payload:e}},Ht=function(e){return{type:ae,payload:{error:ne(e)}}},Bt=Object(_.a)((function(e){return{root:{position:"relative",alignItems:"center"},progress:{position:"absolute",width:"100%"}}})),Jt=function(){var e=Bt(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.api})),c=a.apis,s=a.loading,i=a.error,l=Object(o.c)((function(e){return e.user})).updatedPatch;return Object(n.useEffect)((function(){t(function(){var e=Object(U.a)(I.a.mark((function e(t){var a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Gt()),e.next=4,fe.getRandomApiList();case 4:a=e.sent,(r=a.data)&&t(Pt(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Ht(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t,l]),Object(r.jsxs)(d.a,{className:e.root,maxWidth:"lg",children:[Object(r.jsx)(Mt,{}),s&&Object(r.jsx)(tt.a,{className:e.progress}),i&&Object(r.jsx)(et.a,{severity:"error",children:i}),Object(r.jsx)($e.a,{container:!0,spacing:6,children:c.map((function(e){return Object(r.jsx)($e.a,{item:!0,lg:4,md:4,sm:6,xs:12,children:Object(r.jsx)(Wt,{api:e})},e.API)}))})]})},qt=Object(_.a)((function(e){return{appbar:{background:"#FFFFFF",justifyContent:"center"},tabs:{"&>*":{color:"#576D77"}},progress:{position:"absolute",width:"100%"}}})),Yt=function(){var e=qt(),t=Object(u.g)(),a=Object(u.i)().page,c={0:"apicards",1:"users",2:"some2",3:"some3",4:"some4"},s={apicards:0,users:1,some2:2,some3:3,some4:4},i=Object(n.useState)(s[a]?s[a]:s.apicards),o=Object(j.a)(i,2),l=o[0],b=o[1],O=function(e,a){t.push("/dashboard/".concat(c[a])),b(a)};return Object(n.useEffect)((function(){s[a]||O(0,0)}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.a,{className:e.appbar,position:"static",component:"div",children:Object(r.jsx)(d.a,{maxWidth:"lg",children:Object(r.jsxs)(ze.a,{className:e.tabs,onChange:O,value:l,children:[Object(r.jsx)(Xe.a,{label:"Api cards",value:0}),Object(r.jsx)(Xe.a,{label:"Users",value:1}),Object(r.jsx)(Xe.a,{label:"some2",value:2}),Object(r.jsx)(Xe.a,{label:"some3",value:3}),Object(r.jsx)(Xe.a,{label:"some4",value:4})]})})}),0===l&&Object(r.jsx)(Jt,{}),1===l&&Object(r.jsx)(At,{})]})},zt=Object(_.a)((function(e){return{root:{},head:{fontWeight:"bold"}}})),Xt=function(){var e=zt(),t=Object(u.g)(),a=Object(u.i)(),n=Object(o.c)((function(e){return e.api})).apis.find((function(e){return e.API===a.name}));n||t.push("/dashboard/apicards");return Object(r.jsxs)(d.a,{maxWidth:"lg",className:e.root,children:[Object(r.jsx)(g.a,{onClick:function(){t.goBack()},children:"back"}),Object(r.jsx)(xt.a,{children:Object(r.jsx)(pt.a,{children:Object(r.jsxs)(Ot.a,{children:[Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(mt.a,{children:"Name"}),Object(r.jsx)(mt.a,{children:null===n||void 0===n?void 0:n.API})]}),Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(mt.a,{children:"Description"}),Object(r.jsx)(mt.a,{children:null===n||void 0===n?void 0:n.Description})]}),Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(mt.a,{children:"Auth"}),Object(r.jsx)(mt.a,{children:(null===n||void 0===n?void 0:n.Auth)?null===n||void 0===n?void 0:n.Auth:"No"})]}),Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(mt.a,{children:"Category"}),Object(r.jsx)(mt.a,{children:null===n||void 0===n?void 0:n.Category})]}),Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(mt.a,{children:"Cors"}),Object(r.jsx)(mt.a,{children:null===n||void 0===n?void 0:n.Cors})]}),Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(mt.a,{children:"HTTPS"}),Object(r.jsx)(mt.a,{children:String(null===n||void 0===n?void 0:n.HTTPS)})]}),Object(r.jsxs)(ht.a,{children:[Object(r.jsx)(mt.a,{children:"Link"}),Object(r.jsx)(mt.a,{children:null===n||void 0===n?void 0:n.Link})]})]})})})]})},Vt=function(e,t){return e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Je,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.a,{exact:!0,from:"/dashboard",to:"/dashboard/apicards"}),Object(r.jsx)(u.b,{exact:!0,path:"/",component:Ye}),Object(r.jsx)(u.b,{exact:!0,path:"/dashboard/:page",component:Yt}),Object(r.jsx)(u.b,{exact:!0,path:"/dashboard/apicards/:name",component:Xt}),Object(r.jsx)(u.a,{to:"/"})]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Je,{}),Object(r.jsx)(d.a,{maxWidth:"lg",children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/",component:Ye}),Object(r.jsx)(u.b,{exact:!0,path:"/signin",component:lt}),Object(r.jsx)(u.b,{exact:!0,path:"/signup",component:lt}),Object(r.jsx)(u.a,{to:"/"})]})})]})};var Kt=function(){var e=Object(o.c)((function(e){return e.user})).logged;return Object(r.jsxs)("div",{className:"App",style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:" #ecf1f5"},children:[Object(r.jsx)(Ve.a,{}),Object(r.jsx)(l.a,{children:Vt(e)})]})},Qt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,236)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(o.a,{store:ge,children:Object(r.jsx)(Kt,{})}),document.getElementById("root")),Qt()}},[[161,1,2]]]);
//# sourceMappingURL=main.3b3e5e0f.chunk.js.map