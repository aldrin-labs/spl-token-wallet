/*! For license information please see 11.67e7ce51.chunk.js.LICENSE.txt */
(this["webpackJsonpspl-token-wallet"]=this["webpackJsonpspl-token-wallet"]||[]).push([[11],{632:function(e,t,n){var r=n(6),a=n(228);function o(){return new DOMException("The request is not allowed","NotAllowedError")}function c(e){return s.apply(this,arguments)}function s(){return(s=a(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=2;break}throw o();case 2:return e.abrupt("return",navigator.clipboard.writeText(t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return u.apply(this,arguments)}function u(){return(u=a(r.mark((function e(t){var n,a,c,s;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.createElement("span")).textContent=t,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n),a=window.getSelection(),c=window.document.createRange(),a.removeAllRanges(),c.selectNode(n),a.addRange(c),s=!1;try{s=window.document.execCommand("copy")}finally{a.removeAllRanges(),window.document.body.removeChild(n)}if(s){e.next=15;break}throw o();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=a(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t);case 3:e.next=15;break;case 5:return e.prev=5,e.t0=e.catch(0),e.prev=7,e.next=10,i(t);case 10:e.next=15;break;case 12:throw e.prev=12,e.t1=e.catch(7),e.t1||e.t0||o();case 15:case"end":return e.stop()}}),e,null,[[0,5],[7,12]])})))).apply(this,arguments)}e.exports=function(e){return l.apply(this,arguments)}},670:function(e,t,n){"use strict";var r=n(3),a=n(9),o=n(0),c=(n(12),n(11)),s=n(16),i=n(13),u=n(108),l=n(26),d=n(227),p=o.forwardRef((function(e,t){var n=e.classes,i=e.className,p=e.color,b=void 0===p?"primary":p,f=e.component,m=void 0===f?"a":f,j=e.onBlur,h=e.onFocus,O=e.TypographyClasses,v=e.underline,g=void 0===v?"hover":v,y=e.variant,x=void 0===y?"inherit":y,w=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),k=Object(u.a)(),A=k.isFocusVisible,E=k.onBlurVisible,T=k.ref,N=o.useState(!1),S=N[0],I=N[1],C=Object(l.a)(t,T);return o.createElement(d.a,Object(r.a)({className:Object(c.a)(n.root,n["underline".concat(Object(s.a)(g))],i,S&&n.focusVisible,"button"===m&&n.button),classes:O,color:b,component:m,onBlur:function(e){S&&(E(),I(!1)),j&&j(e)},onFocus:function(e){A(e)&&I(!0),h&&h(e)},ref:C,variant:x},w))}));t.a=Object(i.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},698:function(e,t,n){"use strict";var r=n(62),a=n(76);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(77)).default)(o.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");t.default=c},870:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return bt}));var r=n(24),a=n(5),o=n(0),c=n(41),s=n(6),i=n.n(s),u=n(14),l=n(82),d=n(46),p=n(19),b=n(22),f=n(23),m=n(55),j=n(42),h=n(3),O=n(9),v=(n(12),n(11)),g=n(557),y=n(13),x=o.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.raised,c=void 0!==a&&a,s=Object(O.a)(e,["classes","className","raised"]);return o.createElement(g.a,Object(h.a)({className:Object(v.a)(n.root,r),elevation:c?8:1,ref:t},s))})),w=Object(y.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(x),k=o.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.component,c=void 0===a?"div":a,s=Object(O.a)(e,["classes","className","component"]);return o.createElement(c,Object(h.a)({className:Object(v.a)(n.root,r),ref:t},s))})),A=Object(y.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(k),E=n.p+"static/media/importExportIcon.49fb9a59.svg",T=n(216),N=n(7),S=n.n(N),I=n(17),C=n.n(I),P=n(39),B=n(695),_=n(631),R=n(15),D=n(230),W=n(36),K=n(227),z=n(612),F=n(561),q=n(91),L=n(158);var U=function(e){var t=function(t){var n=e(t);return t.css?Object(h.a)({},Object(L.a)(n,e(Object(h.a)({theme:t.theme},t.css))),function(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}(t.css,[e.filterProps])):n};return t.propTypes={},t.filterProps=["css"].concat(Object(q.a)(e.filterProps)),t};var M=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=function(e){return t.reduce((function(t,n){var r=n(e);return r?Object(L.a)(t,r):t}),{})};return r.propTypes={},r.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),r},V=n(29),X=n(312);function H(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var Q=function(e){var t=e.prop,n=e.cssProperty,r=void 0===n?e.prop:n,a=e.themeKey,o=e.transform,c=function(e){if(null==e[t])return null;var n=e[t],c=H(e.theme,a)||{};return Object(X.a)(e,n,(function(e){var t;return"function"===typeof c?t=c(e):Array.isArray(c)?t=c[e]||e:(t=H(c,e)||e,o&&(t=o(t))),!1===r?t:Object(V.a)({},r,t)}))};return c.propTypes={},c.filterProps=[t],c};function G(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var J=M(Q({prop:"border",themeKey:"borders",transform:G}),Q({prop:"borderTop",themeKey:"borders",transform:G}),Q({prop:"borderRight",themeKey:"borders",transform:G}),Q({prop:"borderBottom",themeKey:"borders",transform:G}),Q({prop:"borderLeft",themeKey:"borders",transform:G}),Q({prop:"borderColor",themeKey:"palette"}),Q({prop:"borderRadius",themeKey:"shape"})),Z=M(Q({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),Q({prop:"display"}),Q({prop:"overflow"}),Q({prop:"textOverflow"}),Q({prop:"visibility"}),Q({prop:"whiteSpace"})),Y=M(Q({prop:"flexBasis"}),Q({prop:"flexDirection"}),Q({prop:"flexWrap"}),Q({prop:"justifyContent"}),Q({prop:"alignItems"}),Q({prop:"alignContent"}),Q({prop:"order"}),Q({prop:"flex"}),Q({prop:"flexGrow"}),Q({prop:"flexShrink"}),Q({prop:"alignSelf"}),Q({prop:"justifyItems"}),Q({prop:"justifySelf"})),$=M(Q({prop:"gridGap"}),Q({prop:"gridColumnGap"}),Q({prop:"gridRowGap"}),Q({prop:"gridColumn"}),Q({prop:"gridRow"}),Q({prop:"gridAutoFlow"}),Q({prop:"gridAutoColumns"}),Q({prop:"gridAutoRows"}),Q({prop:"gridTemplateColumns"}),Q({prop:"gridTemplateRows"}),Q({prop:"gridTemplateAreas"}),Q({prop:"gridArea"})),ee=M(Q({prop:"position"}),Q({prop:"zIndex",themeKey:"zIndex"}),Q({prop:"top"}),Q({prop:"right"}),Q({prop:"bottom"}),Q({prop:"left"})),te=M(Q({prop:"color",themeKey:"palette"}),Q({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),ne=Q({prop:"boxShadow",themeKey:"shadows"});function re(e){return e<=1?"".concat(100*e,"%"):e}var ae=Q({prop:"width",transform:re}),oe=Q({prop:"maxWidth",transform:re}),ce=Q({prop:"minWidth",transform:re}),se=Q({prop:"height",transform:re}),ie=Q({prop:"maxHeight",transform:re}),ue=Q({prop:"minHeight",transform:re}),le=(Q({prop:"size",cssProperty:"width",transform:re}),Q({prop:"size",cssProperty:"height",transform:re}),M(ae,oe,ce,se,ie,ue,Q({prop:"boxSizing"}))),de=n(622),pe=M(Q({prop:"fontFamily",themeKey:"typography"}),Q({prop:"fontSize",themeKey:"typography"}),Q({prop:"fontStyle",themeKey:"typography"}),Q({prop:"fontWeight",themeKey:"typography"}),Q({prop:"letterSpacing"}),Q({prop:"lineHeight"}),Q({prop:"textAlign"})),be=n(240),fe=U(M(J,Z,Y,$,ee,te,ne,le,de.b,pe)),me=Object(be.a)("div")(fe,{name:"MuiBox"}),je=n(139),he=n(44),Oe=new R.e("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"),ve=new R.e("RVKd61ztZW9GUwhRbbLoYVRE5Xf1B2tVscKqwZqXgEr"),ge={},ye=null,xe=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){var o,c,s,u,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===(o=R.d.from(a))||void 0===o?void 0:o.instructions)&&(null===o||void 0===o?void 0:o.accountKeys)){e.next=3;break}return e.abrupt("return");case 3:c=n.publicKey,s=[],u=0;case 6:if(!(u<o.instructions.length)){e.next=15;break}return l=o.instructions[u],e.next=10,we(t,c,null===o||void 0===o?void 0:o.accountKeys,l,u);case 10:d=e.sent,s.push(Object(r.a)(Object(r.a)({},d),{},{rawData:null===l||void 0===l?void 0:l.data}));case 12:u++,e.next=6;break;case 15:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),we=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a,o){var c,s,u,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===a||void 0===a?void 0:a.data)&&(null===a||void 0===a?void 0:a.accounts)&&(null===a||void 0===a?void 0:a.programIdIndex)){e.next=2;break}return e.abrupt("return");case 2:if(c=C.a.decode(a.data),s=Ke([a.programIdIndex],r,0)){e.next=6;break}return e.abrupt("return",null);case 6:if(e.prev=6,!s.equals(R.h.programId)){e.next=12;break}return console.log("["+o+"] Handled as system instruction"),e.abrupt("return",Ie(n,a,r));case 12:if(!s.equals(he.a)){e.next=18;break}return console.log("["+o+"] Handled as token instruction"),u=Se(c),e.abrupt("return",Ce(n,a.accounts,u,r));case 18:if(!je.MARKETS.some((function(e){return e.programId&&e.programId.equals(s)}))){e.next=26;break}return console.log("["+o+"] Handled as dex instruction"),l=Object(je.decodeInstruction)(c),e.next=23,Ne(t,a,r,l);case 23:return e.abrupt("return",e.sent);case 26:if(!s.equals(Oe)){e.next=34;break}return console.log("["+o+"] Handled as raydium stake instruction"),d=Ee(c),e.next=31,ke(t,a,r,d);case 31:return e.abrupt("return",e.sent);case 34:if(!s.equals(ve)){e.next=40;break}return console.log("["+o+"] Handled as raydium lp instruction"),p=Te(c),e.next=39,Ae(t,a,r,p);case 39:return e.abrupt("return",e.sent);case 40:e.next=44;break;case 42:e.prev=42,e.t0=e.catch(6);case 44:return console.log("["+o+"] Failed, data: "+JSON.stringify(c)),e.abrupt("return");case 46:case"end":return e.stop()}}),e,null,[[6,42]])})));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),ke=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{type:"raydium"});case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(u.a)(i.a.mark((function e(t,n,r,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{type:"raydium"});case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Ee=function(){},Te=function(){},Ne=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,o){var c,s,u,l,d,p,b,f,m,j,h,O,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&!(Object.keys(o).length>1)){e.next=2;break}return e.abrupt("return");case 2:if(c=n.accounts,s=n.programIdIndex,u=a&&je.MARKETS.find((function(e){return a.findIndex((function(t){return t.equals(e.address)}))>-1})),e.prev=4,p=(null===u||void 0===u?void 0:u.address)||Ke(c,a,0),d=(null===u||void 0===u?void 0:u.programId)||Ke([s],a,0),b=p.toBase58(),f=(new Date).getTime(),t===ye&&b in ge&&f-ge[b].ts<15e3){e.next=17;break}return ye=t,console.log("Loading market",b),e.next=14,je.Market.load(t,p,{},d);case 14:e.t0=e.sent,e.t1=f,ge[b]={market:e.t0,ts:e.t1};case 17:l=ge[b].market,e.next=23;break;case 20:e.prev=20,e.t2=e.catch(4),console.log("Error loading market: "+e.t2.message);case 23:if(m=Object.keys(o)[0],j=o[m],"settleFunds"!==m){e.next=34;break}if(h=_e(c,a)){e.next=31;break}return e.abrupt("return");case 31:j=Object(r.a)(Object(r.a)({},j),h);case 32:e.next=35;break;case 34:"newOrder"===m?(O=Pe(c,a),j=Object(r.a)(Object(r.a)({},j),O)):"newOrderV3"===m&&(v=Be(c,a),j=Object(r.a)(Object(r.a)({},j),v));case 35:return e.abrupt("return",{type:m,data:j,market:l,marketInfo:u});case 36:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Se=function(e){if(e)return 1!==e.length?Object(je.decodeTokenInstructionData)(e):1===e[0]?{initializeAccount:{}}:9===e[0]?{closeAccount:{}}:void 0},Ie=function(e,t,n){var r=t.programIdIndex,a=t.accounts,o=t.data;if(r&&a&&o){var c,s={programId:n[r],keys:a.map((function(e){return{pubkey:n[e]}})),data:C.a.decode(o)},i=R.g.decodeInstructionType(s);switch(i){case"Create":c=R.g.decodeCreateAccount(s);break;case"CreateWithSeed":c=R.g.decodeCreateWithSeed(s);break;case"Allocate":c=R.g.decodeAllocate(s);break;case"AllocateWithSeed":c=R.g.decodeAllocateWithSeed(s);break;case"Assign":c=R.g.decodeAssign(s);break;case"AssignWithSeed":c=R.g.decodeAssignWithSeed(s);break;case"Transfer":c=R.g.decodeTransfer(s);break;case"AdvanceNonceAccount":c=R.g.decodeNonceAdvance(s);break;case"WithdrawNonceAccount":c=R.g.decodeNonceWithdraw(s);break;case"InitializeNonceAccount":c=R.g.decodeNonceInitialize(s);break;case"AuthorizeNonceAccount":c=R.g.decodeNonceAuthorize(s);break;default:return}if(c&&(!c.fromPubkey||e.equals(c.fromPubkey)))return{type:"system"+i,data:c}}},Ce=function(e,t,n,a){if(n&&!(Object.keys(n).length>1)){var o=Object.keys(n)[0],c=n[o];if("initializeAccount"===o){var s=De(e,t,a);c=Object(r.a)(Object(r.a)({},c),s)}else if("transfer"===o){var i=Re(e,t,a);c=Object(r.a)(Object(r.a)({},c),i)}else if("closeAccount"===o){var u=We(e,t,a);c=Object(r.a)(Object(r.a)({},c),u)}return{type:o,data:c}}},Pe=function(e,t){return{openOrdersPubkey:Ke(e,t,je.NEW_ORDER_OPEN_ORDERS_INDEX),ownerPubkey:Ke(e,t,je.NEW_ORDER_OWNER_INDEX)}},Be=function(e,t){return{openOrdersPubkey:Ke(e,t,je.NEW_ORDER_V3_OPEN_ORDERS_INDEX),ownerPubkey:Ke(e,t,je.NEW_ORDER_V3_OWNER_INDEX)}},_e=function(e,t){var n=Ke(e,t,je.SETTLE_FUNDS_BASE_WALLET_INDEX),r=Ke(e,t,je.SETTLE_FUNDS_QUOTE_WALLET_INDEX);if(n&&r)return{basePubkey:n,quotePubkey:r}},Re=function(e,t,n){var r=Ke(t,n,je.TokenInstructions.TRANSFER_SOURCE_INDEX),a=Ke(t,n,je.TokenInstructions.TRANSFER_DESTINATION_INDEX),o=Ke(t,n,je.TokenInstructions.TRANSFER_OWNER_INDEX);if(o&&e.equals(o))return{sourcePubkey:r,destinationPubkey:a,ownerPubkey:o}},De=function(e,t,n){var r=Ke(t,n,je.TokenInstructions.INITIALIZE_ACCOUNT_ACCOUNT_INDEX),a=Ke(t,n,je.TokenInstructions.INITIALIZE_ACCOUNT_MINT_INDEX),o=Ke(t,n,je.TokenInstructions.INITIALIZE_ACCOUNT_OWNER_INDEX);if(o&&e.equals(o))return{accountPubkey:r,mintPubkey:a,ownerPubkey:o}},We=function(e,t,n){var r=Ke(t,n,je.TokenInstructions.TRANSFER_SOURCE_INDEX),a=Ke(t,n,je.TokenInstructions.TRANSFER_DESTINATION_INDEX),o=Ke(t,n,je.TokenInstructions.TRANSFER_OWNER_INDEX);if(o&&e.equals(o))return{sourcePubkey:r,destinationPubkey:a,ownerPubkey:o}},Ke=function(e,t,n){var r=e.length>n&&e[n];return(null===t||void 0===t?void 0:t.length)>r&&t[r]},ze=n(37),Fe=n(670);function qe(e){var t=e.label,n=e.value,r=e.link,o=void 0!==r&&r,c=e.onClick,s=Object(j.a)();return Object(a.jsxs)(P.w,{fontSize:"1.6rem",style:{display:"block",textAlign:"left"},children:[t,":"," ",o?Object(a.jsx)(Fe.a,{style:{fontSize:"1.6rem",color:s.customPalette.blue.serum},href:"#",onClick:c,children:n}):Object(a.jsx)(P.w,{style:{color:"#7B7B7B"},children:n})]})}function Le(e){var t,n,r,o=e.instruction,c=e.onOpenAddress,s=e.v3,i=void 0!==s&&s,u=Object(m.d)(),l=o.data,d=o.market,p=o.marketInfo,b=p&&(null===p||void 0===p?void 0:p.name)+((null===p||void 0===p?void 0:p.deprecated)?" (deprecated)":"")||(null===d||void 0===d||null===(t=d._decoded)||void 0===t||null===(n=t.ownAddress)||void 0===n?void 0:n.toBase58())||"Unknown",f=l.side,j=l.limitPrice,h=l.orderType,O=l.ownerPubkey,v=i?l.maxBaseQuantity:l.maxQuantity;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P.w,{variant:"subtitle1",style:{fontWeight:"bold",fontSize:"1.6rem"},gutterBottom:!0,children:"Place an order"}),Object(a.jsx)(qe,{label:"Market",value:b,link:!0,onClick:function(){var e,t;return c(null===(e=(null===p||void 0===p?void 0:p.address)||(null===d||void 0===d||null===(t=d._decoded)||void 0===t?void 0:t.ownAddress))||void 0===e?void 0:e.toBase58())}}),Object(a.jsx)(qe,{label:"Side",value:f.charAt(0).toUpperCase()+f.slice(1)}),Object(a.jsx)(qe,{label:"Price",value:(null===d||void 0===d?void 0:d.priceLotsToNumber(j))||""+j}),Object(a.jsx)(qe,{label:"Quantity",value:(null===d||void 0===d?void 0:d.baseSizeLotsToNumber(v))||""+v}),Object(a.jsx)(qe,{label:"Type",value:h.charAt(0).toUpperCase()+h.slice(1)}),Object(a.jsx)(qe,{label:"Owner",link:O,value:O?(r=O,u.publicKey.equals(r)?"This wallet":(null===r||void 0===r?void 0:r.toBase58())||"Unknown"):O,onOpenAddress:function(){return O&&c(null===O||void 0===O?void 0:O.toBase58())}})]})}function Ue(e){var t,n=e.instruction,r=e.onOpenAddress;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P.w,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0,children:"Unknown instruction:"}),Object(a.jsx)(qe,{label:"Program",value:null===(t=n.programId)||void 0===t?void 0:t.toBase58(),link:!0,gutterBottom:!0,onClick:function(){return r(n.programId.toBase58())}},"Program"),n.accountMetas&&n.accountMetas.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(qe,{label:"Account #"+(t+1),value:e.publicKey.toBase58(),link:!0,onClick:function(){return r(e.publicKey.toBase58())}},t+""),Object(a.jsxs)(P.w,{gutterBottom:!0,children:["Writable: ",e.isWritable.toString()]})]})})),Object(a.jsxs)(P.w,{style:{wordBreak:"break-all"},children:["Data: ",n.rawData]})]})}var Me={systemCreate:"Create account",systemTransfer:"Transfer SOL"},Ve={toPubkey:{label:"To",address:!0},accountPubkey:{label:"Account",address:!0},basePubkey:{label:"Base",address:!0},seed:{label:"Seed",address:!1},noncePubkey:{label:"Nonce",address:!0},authorizedPubkey:{label:"Authorized",address:!0},newAuthorizedPubkey:{label:"New authorized",address:!0},newAccountPubkey:{label:"New account",address:!0},amount:{label:"Amount",address:!1},lamports:{label:"Lamports",address:!1}};function Xe(e){var t=e.instruction,n=e.onOpenAddress,r=t.type,o=t.data;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P.w,{variant:"subtitle1",style:{fontWeight:"bold",fontSize:"1.6rem"},gutterBottom:!0,children:Me[r]}),o&&Object.entries(o).map((function(e){var t=Object(p.a)(e,2),r=t[0],o=t[1],c=Ve[r];if(!c)return null;var s=c.label,i=c.address;return Object(a.jsx)(qe,{label:s+"",value:i?null===o||void 0===o?void 0:o.toBase58():o,link:i,onClick:function(){return i&&n(null===o||void 0===o?void 0:o.toBase58())}},r)}))]})}var He={cancelOrder:"Cancel order",newOrder:"Place order",settleFunds:"Settle funds",matchOrders:"Match orders"},Qe={side:{label:"Side",address:!1},orderId:{label:"Order Id",address:!1},limit:{label:"Limit",address:!1},basePubkey:{label:"Base wallet",address:!0},quotePubkey:{label:"Quote wallet",address:!0}};function Ge(e){var t,n,r=e.instruction,o=e.onOpenAddress,c=Object(m.d)(),s=Object(m.f)(),i=Object(p.a)(s,1)[0],u=r.type,l=r.data,d=r.market,b=r.marketInfo,f=b&&(null===b||void 0===b?void 0:b.name)+((null===b||void 0===b?void 0:b.deprecated)?" (deprecated)":"")||(null===d||void 0===d||null===(t=d._decoded)||void 0===t||null===(n=t.ownAddress)||void 0===n?void 0:n.toBase58())||"Unknown",j=function(e){var t=i.some((function(t){return t.equals(e)}));return c.publicKey.equals(e)?"This wallet":(t?"(Owned) ":"")+(null===e||void 0===e?void 0:e.toBase58())};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P.w,{variant:"subtitle1",style:{fontWeight:"bold",fontSize:"1.6rem"},gutterBottom:!0,children:He[u]}),Object(a.jsx)(qe,{label:"Market",value:f,link:!0,onClick:function(){var e,t;return o(null===(e=(null===b||void 0===b?void 0:b.address)||(null===d||void 0===d||null===(t=d._decoded)||void 0===t?void 0:t.ownAddress))||void 0===e?void 0:e.toBase58())}}),l&&Object.entries(l).map((function(e){var t=Object(p.a)(e,2),n=t[0],r=t[1],c=Qe[n];if(!c)return null;var s=c.label,i=c.address;return Object(a.jsx)(qe,{label:s+"",value:i?j(r):r+"",link:i,onClick:function(){return i&&o(null===r||void 0===r?void 0:r.toBase58())}},n)}))]})}var Je={initializeMint:"Initialize mint",initializeAccount:"Initialize account",transfer:"Transfer",approve:"Approve",mintTo:"Mint to",closeAccount:"Close account"},Ze={amount:{label:"Amount",address:!1},accountPubkey:{label:"Account",address:!0},mintPubkey:{label:"Mint",address:!0},sourcePubkey:{label:"Source",address:!0},destinationPubkey:{label:"Destination",address:!0},ownerPubkey:{label:"Owner",address:!0}};function Ye(e){var t=e.instruction,n=e.onOpenAddress,r=Object(m.d)(),o=Object(m.f)(),c=Object(p.a)(o,1)[0],s=t.type,i=t.data,u=function(e){var t=je.TOKEN_MINTS.find((function(t){return t.address.equals(e)})),n=c.some((function(t){return t.equals(e)})),a=r.publicKey.equals(e);return t?t.name:a?"This wallet":(n?"(Owned) ":"")+(null===e||void 0===e?void 0:e.toBase58())};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P.w,{variant:"subtitle1",style:{fontWeight:"bold",fontSize:"1.6rem"},gutterBottom:!0,children:Je[s]}),i&&Object.entries(i).map((function(e){var t=Object(p.a)(e,2),r=t[0],o=t[1],c=Ze[r];if(!c)return null;var s=c.label,i=c.address;return Object(a.jsx)(qe,{label:s+"",value:i?u(o):o,link:i,onClick:function(){return i&&n(null===o||void 0===o?void 0:o.toBase58())}},r)}))]})}function $e(e,t,n){var r=!1,a={CREATED:0,OWNED:1,CLOSED_TO_OWNED_DESTINATION:2},o={};function c(t){return!!t&&(!!(null===e||void 0===e?void 0:e.some((function(e){return e.equals(t)})))||o[t.toBase58()]===a.OWNED)}return n.forEach((function(e){e.forEach((function(e){if(e)if("raydium"===e.type);else if(["cancelOrder","cancelOrderV2","matchOrders","cancelOrderV3"].includes(e.type));else if("systemCreate"===e.type){var n=e.data.newAccountPubkey;n?o[n.toBase58()]=a.CREATED:r=!0}else if(["newOrder","newOrderV3"].includes(e.type)){var s=e.data,i=s.openOrdersPubkey,u=s.ownerPubkey;u&&t.equals(u)?o[i.toBase58()]=a.OWNED:r=!0}else if("initializeAccount"===e.type){var l=e.data,d=l.ownerPubkey,p=l.accountPubkey;t&&d&&t.equals(d)&&p&&o[p.toBase58()]===a.CREATED?o[p.toBase58()]=a.OWNED:r=!0}else if("settleFunds"===e.type){var b=e.data,f=b.basePubkey,m=b.quotePubkey;c(f)&&c(m)||(r=!0)}else if("closeAccount"===e.type){var j=e.data,h=j.sourcePubkey;c(j.destinationPubkey)?o[h.toBase58()]=a.CLOSED_TO_OWNED_DESTINATION:r=!0}else r=!0;else r=!0}))})),Object.values(o).some((function(e){return![a.CLOSED_TO_OWNED_DESTINATION,a.OWNED].includes(e)}))&&(r=!0),!r}function et(e){var t=e.origin,n=e.messages,r=e.onApprove,c=e.autoApprove,s=e.buttonRef,i=Object(ze.i)(),u=Object(ze.f)(),l=Object(m.d)(),d=Object(m.f)(),b=Object(p.a)(d,1)[0],f=Object(o.useState)(!0),j=Object(p.a)(f,2),h=j[0],O=j[1],v=Object(o.useState)(null),g=Object(p.a)(v,2),y=g[0],x=g[1],w=n.length>1;Object(o.useEffect)((function(){Promise.all(n.map((function(e){return xe(u,l,e)}))).then((function(e){x(e),O(!1)}))}),[n,u,l]);var k=Object(o.useMemo)((function(){return{safe:b&&y&&$e(b,l.publicKey,y)}}),[b,y,l]);Object(o.useEffect)((function(){if(k.safe&&c)console.log("Auto approving safe transaction"),r();else{window.focus();var e=s.current;e&&(e.scrollIntoView({behavior:"smooth"}),setTimeout((function(){return e.focus()}),50))}}),[k,c,s]);var E=function(e){e&&window.open("https://explorer.solana.com/address/"+e+i,"_blank")},T=function(e){switch(null===e||void 0===e?void 0:e.type){case"cancelOrder":case"cancelOrderV2":case"matchOrders":case"settleFunds":return Object(a.jsx)(Ge,{instruction:e,onOpenAddress:E});case"closeAccount":case"initializeAccount":case"transfer":case"approve":case"mintTo":return Object(a.jsx)(Ye,{instruction:e,onOpenAddress:E});case"systemCreateWithSeed":case"systemCreate":case"systemTransfer":return Object(a.jsx)(Xe,{instruction:e,onOpenAddress:E});case"newOrder":return Object(a.jsx)(Le,{instruction:e,onOpenAddress:E});case"newOrderV3":return Object(a.jsx)(Le,{instruction:e,onOpenAddress:E,v3:!0});default:return Object(a.jsx)(Ue,{instruction:e,onOpenAddress:E})}};return Object(a.jsx)(A,{children:h?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",marginBottom:20},children:[Object(a.jsx)(F.a,{style:{marginRight:20}}),Object(a.jsxs)(K.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0,children:["Parsing transaction",w?"s":"",":"]})]}),n.map((function(e,t){return Object(a.jsx)(K.a,{style:{wordBreak:"break-all"},children:C.a.encode(e)},t)}))]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(K.a,{variant:"h6",gutterBottom:!0,children:y?"".concat(t," wants to:"):"Unknown transaction data"}),y?y.map((function(e,t){return function(e,t){var n,r=e.map((function(e,t){return Object(a.jsxs)(me,{style:{marginTop:20},children:[T(e),Object(a.jsx)(z.a,{style:{marginTop:20}})]},t)}));return w?Object(a.jsxs)(me,{style:{marginTop:20},children:[(n=t,Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(K.a,{variant:"h6",gutterBottom:!0,children:["Transaction ",n.toString()]}),Object(a.jsx)(z.a,{style:{marginTop:20}})]})),r]},t):r}(e,t)})):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(K.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0,children:["Unknown transaction",w?"s":"",":"]}),n.map((function(e){return Object(a.jsx)(K.a,{style:{wordBreak:"break-all"},children:C.a.encode(e)})}))]})]})})}var tt=n(698),nt=n.n(tt),rt=n(618);function at(e){var t=e.origin,n=e.message,r=e.messageDisplay,c=e.buttonRef;Object(o.useEffect)((function(){window.focus();var e=c.current;e&&(e.scrollIntoView({behavior:"smooth"}),setTimeout((function(){return e.focus()}),50))}),[c]);var s,i,u=Object(m.d)();switch(r){case"utf8":s=(new TextDecoder).decode(n);break;case"hex":s="0x"+(i=n,Array.prototype.map.call(i,(function(e){return("00"+e.toString(16)).slice(-2)})).join(""));break;default:throw new Error("Unexpected message type: "+r)}return Object(a.jsxs)(A,{children:[Object(a.jsx)(P.w,{variant:"h6",gutterBottom:!0,children:"".concat(t," wants to:")}),Object(a.jsx)(P.w,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0,children:function(){switch(r){case"utf8":return"Sign message with account ".concat(u.publicKey);case"hex":return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(rt.a,{title:"Be especially cautious when signing arbitrary data, you must trust the requester.",arrow:!0,children:Object(a.jsx)(nt.a,{style:{marginBottom:"-7px"}})})," ","Sign data with account ".concat(u.publicKey)]});default:throw new Error("Unexpected message display type: "+r)}}()}),Object(a.jsx)(z.a,{style:{margin:20}}),Object(a.jsx)(P.w,{style:{wordBreak:"break-all"},children:s}),Object(a.jsx)(z.a,{style:{margin:20}})]})}function ot(){var e=Object(b.a)(["\n  background: #17181a;\n  color: #ecf0f3;\n  text-align: center;\n  width: 50rem;\n  padding: 3rem;\n  margin: 0 auto;\n  box-shadow: none;\n"]);return ot=function(){return e},e}var ct=Object(f.a)(w)(ot());function st(e){var t=e.origin,n=window.opener,c=Object(m.d)(),s=Object(m.g)(),b=s.accounts,f=s.setWalletSelector,j=Object(o.useState)(W.d?null:c),h=Object(p.a)(j,2),O=h[0],v=h[1],g=Object(o.useCallback)((function(e){W.d?chrome.runtime.sendMessage({channel:"sollet_extension_background_channel",data:e}):n.postMessage(Object(r.a)({jsonrpc:"2.0"},e),t)}),[n,t]),y=Object(o.useState)(null),x=Object(p.a)(y,2),w=x[0],k=x[1],A=!!w,E=Object(o.useState)(lt),T=Object(p.a)(E,2),N=T[0],I=T[1],B=Object(o.useState)(!1),_=Object(p.a)(B,2),D=_[0],K=_[1];Object(o.useEffect)((function(){W.d&&chrome.storage.local.get("connectedWallets",(function(e){var n=(e.connectedWallets||{})[t];n?(f(n.selector),k(new R.e(n.publicKey)),K(n.autoApprove)):k(c.publicKey)}))}),[t,f,c]),Object(o.useEffect)((function(){W.d&&w&&v(c)}),[w,c]),Object(o.useEffect)((function(){O||g({method:"redirect"})}),[g,O]),Object(o.useEffect)((function(){if(A&&!W.d){var e=function(){g({method:"disconnected"})};return window.addEventListener("beforeunload",e),function(){e(),window.removeEventListener("beforeunload",e)}}}),[A,g,t]),Object(o.useEffect)((function(){O&&w&&!w.equals(O.publicKey)&&k(null)}),[w,O]),Object(o.useEffect)((function(){function e(e){e.origin===t&&e.source===window.opener&&("signTransaction"!==e.data.method&&"signAllTransactions"!==e.data.method&&"sign"!==e.data.method&&g({error:"Unsupported method",id:e.data.id}),I((function(t){return[].concat(Object(d.a)(t),[e.data])})))}return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[t,g]);var z=N[0],F=function(){return I((function(e){return e.slice(1)}))};if(A&&0===N.length)return W.d?window.close():it(),Object(a.jsx)(P.p,{height:"calc(100% - 6rem)",children:Object(a.jsx)(P.w,{style:{fontSize:"2rem"},children:W.d?"Submitting...":"Please keep this window open in the background."})});if(!O)return Object(a.jsx)(P.p,{height:"calc(100% - 6rem)",children:Object(a.jsx)(P.w,{style:{fontSize:"2rem"},children:"Loading wallet..."})});var q,L,U=!w||!w.equals(O.publicKey);if(W.d&&"connect"===z.method||!W.d&&U){return Object(a.jsx)(dt,{origin:t,onApprove:function(e){k(O.publicKey),W.d&&chrome.storage.local.get("connectedWallets",(function(n){var a=b.find((function(e){return e.address.equals(O.publicKey)})),o=Object(r.a)(Object(r.a)({},n.connectedWallets||{}),{},Object(l.a)({},t,{publicKey:O.publicKey.toBase58(),selector:a.selector,autoApprove:e}));chrome.storage.local.set({connectedWallets:o})})),g({method:"connected",params:{publicKey:O.publicKey.toBase58(),autoApprove:e},id:W.d?z.id:void 0}),K(e),W.d?F():it()}})}switch(S()(("signTransaction"===z.method||"signAllTransactions"===z.method||"sign"===z.method)&&O),z.method){case"signTransaction":q=[C.a.decode(z.params.message)],L="tx";break;case"signAllTransactions":q=z.params.messages.map((function(e){return C.a.decode(e)})),L="tx";break;case"sign":if(!(z.params.data instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");q=[z.params.data],L="utf8"===z.params.display?"utf8":"hex";break;default:throw new Error("Unexpected method: "+z.method)}function M(){return(M=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(),e.t0=z.method,e.next="signTransaction"===e.t0||"sign"===e.t0?4:"signAllTransactions"===e.t0?6:8;break;case 4:return V(q[0]),e.abrupt("break",9);case 6:return H(q),e.abrupt("break",9);case 8:throw new Error("Unexpected method: "+z.method);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return X.apply(this,arguments)}function X(){return(X=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g,e.next=3,O.createSignature(t);case 3:e.t1=e.sent,e.t2=O.publicKey.toBase58(),e.t3={signature:e.t1,publicKey:e.t2},e.t4=z.id,e.t5={result:e.t3,id:e.t4},(0,e.t0)(e.t5);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("wallet",O),"ledger"!==O.type){e.next=15;break}n=[],r=0;case 4:if(!(r<t.length)){e.next=13;break}return e.t0=n,e.next=8,O.createSignature(t[r]);case 8:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 10:r+=1,e.next=4;break;case 13:e.next=18;break;case 15:return e.next=17,Promise.all(t.map((function(e){return O.createSignature(e)})));case 17:n=e.sent;case 18:g({result:{signatures:n,publicKey:O.publicKey.toBase58()},id:z.id});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsx)(ct,{style:{textAlign:"left",overflowY:"auto",height:"100%"},children:Object(a.jsx)(pt,{autoApprove:D,origin:t,messages:q,messageDisplay:L,onApprove:function(){return M.apply(this,arguments)},onReject:function(){F(),g({error:"Transaction cancelled",id:z.id})}},z.id)})}function it(){try{window.open("","parent")}catch(e){console.log("err",e)}}var ut=Object(T.a)((function(e){return{connection:{marginTop:e.spacing(3),marginBottom:e.spacing(3),textAlign:"center"},approveButton:{backgroundColor:"#43a047",color:"white"},actions:{justifyContent:"space-between"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}));function lt(){if(!W.d)return[];var e=new URLSearchParams(window.location.hash.slice(1));return[JSON.parse(e.get("request")||"")]}function dt(e){var t,n=e.origin,r=e.onApprove,s=Object(m.d)(),i=ut(),u=Object(m.g)().accounts.find((function(e){return e.address.equals(s.publicKey)})),l=Object(o.useState)(!0),d=Object(p.a)(l,2),b=d[0],f=d[1],h=Object(j.a)();return Object(a.jsxs)(ct,{children:[(!window.opener||!s)&&Object(a.jsx)(c.a,{to:"/"}),Object(a.jsxs)(A,{style:{padding:0},children:[Object(a.jsxs)(P.p,{margin:"0 0 2rem 0",justify:"space-between",children:[Object(a.jsx)(D.a,{width:"50%",height:"auto",margin:"0"}),Object(a.jsx)(B.a,{isFromPopup:!0,accountNameSize:"1.6rem"})]}),Object(a.jsx)(P.w,{fontSize:"2.4rem",fontFamily:"Avenir Next Demi",style:{marginBottom:"3rem"},children:"Allow this site to access your Wallet\u2122?"}),Object(a.jsxs)(P.p,{margin:"0 0 4rem 0",direction:"column",className:i.connection,children:[Object(a.jsx)(P.p,{margin:"6rem 0 0 0",children:Object(a.jsx)(P.w,{children:n})}),Object(a.jsx)("img",{alt:"import export icon",style:{margin:"2rem 0"},src:E}),Object(a.jsx)(P.w,{fontSize:"1.6rem",children:u.name}),Object(a.jsx)(P.w,{fontSize:"1.6rem",children:null===s||void 0===s||null===(t=s.publicKey)||void 0===t?void 0:t.toBase58()})]}),Object(a.jsxs)(P.p,{direction:"row",children:[Object(a.jsx)(P.r,{id:"autoApprove",theme:h,checked:b,onChange:function(){return f(!b)}}),Object(a.jsx)(P.o,{style:{textAlign:"left"},children:Object(a.jsxs)(P.s,{theme:h,htmlFor:"autoApprove",style:{fontSize:"1.6rem"},children:["Automatically approve transactions from"," ",Object(a.jsx)("span",{style:{color:"#ECF0F3"},children:n}),".",Object(a.jsx)("br",{}),"This will allow you to use the auto-settle function."]})})]}),Object(a.jsx)(P.p,{margin:"6rem 0 0 0",children:Object(a.jsx)(_.a,{text:"Only connect with sites you trust. Auto approve allows sending some transactions on your behalf without requesting your permission for the remainder of this session.",textStyle:{fontSize:"1.6rem",textAlign:"left"},iconStyle:{height:"7rem",margin:"0 2rem 0 3rem"}})})]}),Object(a.jsxs)(P.p,{margin:"6rem 0 0 0",justify:"space-between",children:[Object(a.jsx)(P.y,{width:"calc(50% - .5rem)",theme:h,color:"#ECF0F3",onClick:window.close,children:"Cancel"}),Object(a.jsx)(P.x,{theme:h,width:"calc(50% - .5rem)",onClick:function(){return r(b)},children:"Connect"})]})]})}function pt(e){var t=e.origin,n=e.messages,r=e.messageDisplay,c=e.onApprove,s=e.onReject,i=e.autoApprove,u=Object(j.a)(),l=Object(o.useRef)(),d="tx"===r&&n.length>1;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(A,{children:"tx"===r?Object(a.jsx)(et,{autoApprove:i,origin:t,messages:n,onApprove:c,buttonRef:l}):Object(a.jsx)(at,{origin:t,message:n[0],messageDisplay:r,buttonRef:l})}),Object(a.jsxs)(P.p,{children:[Object(a.jsx)(P.y,{theme:u,width:"calc(50% - .5rem)",onClick:s,children:"Cancel"}),Object(a.jsxs)(P.x,{theme:u,width:"calc(50% - .5rem)",onClick:c,children:["Approve",d?" All":""]})]})]})}function bt(e){var t=e.match,n=e.origin;return Object(a.jsx)(c.d,{children:Object(a.jsx)(c.b,{path:t.url,component:function(e){return Object(a.jsx)(st,Object(r.a)({origin:n},e))}})})}}}]);
//# sourceMappingURL=11.67e7ce51.chunk.js.map