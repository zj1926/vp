!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=21)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("lodash.get")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("cookie-session")},function(e,t){e.exports=require("csurf")},function(e,t){e.exports=require("express-graphql")},function(e,t){e.exports=require("mysql")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=process.env.PWD,i=["/robots.txt","/sitemap.xml","/favicon.ico"].reduce((function(e,t){return e[t]=!0,e}),{});t.default=function(e,t,n){var r=e.url;if(Object.prototype.hasOwnProperty.call(i,r)){var s=a.a.resolve(o,"./dist".concat(r));t.sendFile(s)}else n(404)}},function(e,t,n){"use strict";n.r(t);n(17);var r=n(9),a=n.n(r),o=n(10),i=n.n(o),s=n(6),c=n.n(s),l=n(11),u=n.n(l),p=n(12),m=n.n(p);var d=process.env,f=d.SERVER_PORT,h=d.SESSION_SECRET,g=d.CSRF_EXCEPTION,E=d.FB_APP_KEY,b=d.FB_APP_SECRET,v=d.FB_REDIRECT_URL,k="https://graph.facebook.com/v3.3",y="//dkny.oss-cn-hangzhou.aliyuncs.com/2/";g||console.log("No CSRF exception defined");var w=n(1),C=n.n(w),L=n(7),R=n.n(L),O=function(e){return"https://www.facebook.com/v3.3/dialog/oauth?client_id=".concat(E,"&response_type=code&state=").concat(e,"&redirect_uri=").concat(v)},S=function(e,t){return Boolean(C()(e,"session.app.isAuth",!1)&&(t||C()(e,"session.app.dbInfo.id",null)))},x=function(e){var t=C()(e,"session.app.tokenInfo.access_token",null);return"string"==typeof t&&t.length>0?t:null},_=function(e){return S(e)&&C()(e,"session.app.dbInfo.isAdmin",!1)};function N(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var T=function(e,t){var n=t.code;return{client_id:E,client_secret:b,code:n,redirect_uri:v}},I=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r,a,o,i,s,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=C()(t,"query.code",null),a=C()(t,"query.state",null),o=C()(t,"params.oauth",null),i=C()(t,"session.app.oauthState",null),!r||!a||a!==i){e.next=14;break}return console.log("redirected by ".concat(o," auth...")),s=T(0,t.query),e.next=9,u=s,R()({baseURL:k,method:"get",url:"/oauth/access_token",params:u});case 9:c=e.sent,(l=c.data).access_token?t.session.app={oauth:o,isAuth:!0,tokenInfo:l}:t.session.app={isAuth:!1,authError:"get token failed."},e.next=16;break;case 14:console.log("inconsistant session, error msg in session"),t.session.app={isAuth:!1,authError:"Sorry, something error, please try again."};case 16:n.redirect("/");case 17:case"end":return e.stop()}var u}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){N(o,r,a,i,s,"next",e)}function s(e){N(o,r,a,i,s,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),P=function(e,t,n){S(e)?n():n(401)},M=n(5),A=n.n(M),q=process.env.PWD,F=A.a.resolve(q,"./dist/error.html"),j=n(13),D=n.n(j)()(),B=n(14),U=n.n(B),H=n(4),W=n.n(H),Q=n(3),K=n(15),G=n.n(K),z=process.env,V=z.SQL_HOST,Y=z.SQL_PORT,X=z.SQL_USERNAME,J=z.SQL_PASSWORD,Z=z.SQL_DATABASE,$=G.a.createPool({connectionLimit:4,multipleStatements:!1,host:V,port:Y,user:X,password:J,database:Z}),ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Promise((function(n,r){$.query(e,t,(function(e,t){e?(console.error(e),r(e)):n(t)}))}))};function te(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){te(o,r,a,i,s,"next",e)}function s(e){te(o,r,a,i,s,"throw",e)}i(void 0)}))}}var re,ae,oe,ie,se,ce={auth:(se=ne(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,s,c,l,u,p,m,d,f,h,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=x(n),!S(n,!0)||!r){e.next=33;break}return a={access_token:r,fields:"id,name,picture"},e.prev=3,e.next=6,t=a,R()({baseURL:k,method:"get",url:"/me",params:t});case 6:return o=e.sent,i=o.data,s=i.name,c=i.id,e.next=11,ee("SELECT * FROM colorpk_user WHERE oauth = 'fb' AND oauthid = ?",[c]);case 11:if(1!==(l=e.sent).length){e.next=20;break}return u=l[0],p=u.isadmin,m=u.id,n.session.app.dbInfo={id:m,name:s,isAdmin:p||!1},e.next=17,ee("SELECT color_id FROM colorpk_userlike WHERE user_id= ?",[m]);case 17:return d=e.sent,ee("UPDATE colorpk_user SET lastlogin=NOW() WHERE id=?",[m]),e.abrupt("return",{__typename:"User",id:m,name:s,isadmin:p,img:C()(i,"picture.data.url",null),likes:d.map((function(e){return e.color_id}))});case 20:return e.next=22,ee("INSERT INTO colorpk_user (oauth, name, oauthid, lastlogin) VALUES ('fb', ?, ?, NOW())",[s,c]);case 22:return f=e.sent,h=f.insertId,n.session.app.dbInfo={id:h,name:s,isAdmin:!1},e.abrupt("return",{__typename:"User",id:h,name:s,isadmin:!1,img:C()(i,"picture.data.url",null),likes:[]});case 28:return e.prev=28,e.t0=e.catch(3),e.abrupt("return",new Q.GraphQLError(e.t0.toString()));case 31:e.next=36;break;case 33:return g=W.a.v1(),n.session.app={oauthState:g},e.abrupt("return",{__typename:"AuthFailResponse",url:O(g),error:C()(n,"session.app.authError",null),status:0});case 36:case"end":return e.stop()}var t}),e,null,[[3,28]])}))),function(e,t){return se.apply(this,arguments)}),color:(ie=ne(regeneratorRuntime.mark((function e(t,n){var r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.category,S(n)||!(["LIKES","PROFILE"].indexOf(r)>-1)){e.next=3;break}return e.abrupt("return",new Q.GraphQLError("color error: no user defined"));case 3:if(_(n)||"ANONYMOUS"!==r){e.next=5;break}return e.abrupt("return",new Q.GraphQLError("color error: no admin access"));case 5:a=C()(n,"session.app.dbInfo.id",null),o=null,e.t0=r,e.next="PUBLIC"===e.t0?10:"LIKES"===e.t0?14:"PROFILE"===e.t0?18:"ANONYMOUS"===e.t0?22:26;break;case 10:return e.next=12,ee("SELECT a.* FROM colorpk_color a WHERE a.display=0 ORDER BY `id` DESC");case 12:return o=e.sent,e.abrupt("break",27);case 14:return e.next=16,ee("SELECT a.* FROM colorpk_color a\n          INNER JOIN \n          (SELECT color_id FROM colorpk_userlike WHERE user_id = ?) b\n          ON id = b.color_id",[a]);case 16:return o=e.sent,e.abrupt("break",27);case 18:return e.next=20,ee("SELECT a.*, false as `liked` FROM colorpk_color a WHERE userid = ?",[a]);case 20:return o=e.sent,e.abrupt("break",27);case 22:return e.next=24,ee("SELECT * FROM colorpk_color a WHERE a.display = 1");case 24:return o=e.sent,e.abrupt("break",27);case 26:return e.abrupt("break",27);case 27:return e.prev=27,e.abrupt("return",o.map((function(e){return{id:e.id,like:e.like,color:e.color,userid:e.userid,username:e.username,createdate:e.createdate}})));case 31:return e.prev=31,e.t1=e.catch(27),e.abrupt("return",new Q.GraphQLError(e.t1.toString()));case 34:case"end":return e.stop()}}),e,null,[[27,31]])}))),function(e,t){return ie.apply(this,arguments)}),likeColor:(oe=ne(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.input,a=r.id,o=r.willLike,e.prev=1,S(n)&&(i=C()(n,"session.app.dbInfo.id",null),ee(o?"INSERT INTO colorpk_userlike (user_id, color_id) VALUES (?, ?)":"DELETE FROM colorpk_userlike WHERE user_id= ? AND color_id = ?",[i,a])),e.next=5,ee("UPDATE colorpk_color SET `like` = `like` ".concat(o?"+":"-","  1 WHERE id = ?"),[a]);case 5:return s=e.sent,e.abrupt("return",{status:1===s.affectedRows?0:1});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",new Q.GraphQLError(e.t0.toString()));case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),function(e,t){return oe.apply(this,arguments)}),createColor:(ae=ne(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,s,c,l,u,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.input.color,a=S(n),o=C()(n,"session.app.dbInfo.name",null),i=C()(n,"session.app.dbInfo.id",null),c=(s=a&&o)?o:null,l=s?i:null,u=(10*Math.random()).toFixed(),27!==r.length){e.next=21;break}return e.prev=9,e.next=12,ee("INSERT INTO colorpk_color (`like`, color, userid, username, colortype, display, createdate) VALUES (?, ?, ?, ?, NULL, ?, NOW())",[u,r,l,c,s?0:1]);case 12:return p=e.sent,e.abrupt("return",{status:0,data:p.insertId});case 16:return e.prev=16,e.t0=e.catch(9),e.abrupt("return",new Q.GraphQLError(e.t0.toString()));case 19:e.next=22;break;case 21:return e.abrupt("return",new Q.GraphQLError("create error: invalid color input"));case 22:case"end":return e.stop()}}),e,null,[[9,16]])}))),function(e,t){return ae.apply(this,arguments)}),adjudicateColor:(re=ne(regeneratorRuntime.mark((function e(t,n){var r,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(n)){e.next=2;break}return e.abrupt("return",new Q.GraphQLError("adjudicate error: no admin access"));case 2:return r=t.input,a=r.id,o=r.willLike,e.prev=3,e.next=6,ee(o?"UPDATE colorpk_color SET `display` = 0 WHERE id = ?":"DELETE FROM colorpk_color WHERE id = ?",[a]);case 6:return i=e.sent,e.abrupt("return",{status:1===i.affectedRows?0:1});case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",new Q.GraphQLError(e.t0.toString()));case 13:case"end":return e.stop()}}),e,null,[[3,10]])}))),function(e,t){return re.apply(this,arguments)}),logoff:function(e,t){var n=C()(t,"session.app.dbInfo.name","(unknown)");console.log("logoff ".concat(n,", delete session")),delete t.session.app;var r=W.a.v1();return t.session.app={oauthState:r},{url:O(r)}}},le=Object(Q.buildSchema)("\n  enum ColorCategory {\n    PUBLIC\n    LIKES\n    PROFILE\n    ANONYMOUS\n  }\n\n  interface MutationResponse {\n    status: Int!\n  }\n\n  type Color {\n    id: ID!\n    like: Int!\n    color: String!\n    userid: Int\n    username: String\n    createdate: String\n  }\n\n  type User {\n    id: ID!\n    img: String\n    isadmin: Boolean\n    name: String\n    likes: [Int!]\n  }\n\n  input LikeColorInputType {\n    id: ID!\n    willLike: Boolean!\n  }\n  \n  input CreateColorInputType {\n    color: String!\n  }\n\n  type LikeColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type AdjudicateColorOutputType implements MutationResponse {\n    status: Int!\n  }\n\n  type CreateColorOutputType implements MutationResponse {\n    status: Int!\n    data: ID!\n  }\n\n  type AuthFailResponse implements MutationResponse {\n    status: Int!\n    url: String!\n    error: String\n  }\n\n  union AuthOutputType = User | AuthFailResponse\n\n  type Mutation {\n    likeColor(input: LikeColorInputType!): LikeColorOutputType\n    createColor(input: CreateColorInputType!): CreateColorOutputType\n    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType\n    logoff: AuthFailResponse\n  }\n  \n  type Query {\n    color(category: ColorCategory!): [Color]\n    auth: AuthOutputType\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  } \n"),ue=U()({schema:le,rootValue:ce,graphiql:!1,pretty:!1}),pe=n(0),me=n.n(pe),de=n(8),fe=n(2),he=n.n(fe),ge=function(){return me.a.createElement(pe.Fragment,null,me.a.createElement("meta",{property:"og:url",content:"https://react.colorpk.com"}),me.a.createElement("meta",{property:"og:site_name",content:"ColorPK v1"}),me.a.createElement("meta",{property:"og:title",content:"Your Best Color Picker"}),me.a.createElement("meta",{property:"og:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),me.a.createElement("meta",{property:"og:image",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),me.a.createElement("meta",{property:"og:image:type",content:"image/png"}),me.a.createElement("meta",{property:"og:image:width",content:"1200"}),me.a.createElement("meta",{property:"og:image:height",content:"620"}),me.a.createElement("meta",{property:"twitter:site",content:"colorpk"}),me.a.createElement("meta",{property:"twitter:creator",content:"colorpk"}),me.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),me.a.createElement("meta",{property:"twitter:title",content:"ColorPK"}),me.a.createElement("meta",{property:"twitter:description",content:"ColorPK - Faster lighter and nicer color palette | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),me.a.createElement("meta",{property:"twitter:image:src",content:"http://dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png"}),me.a.createElement("meta",{property:"twitter:image:width",content:"1200"}),me.a.createElement("meta",{property:"twitter:image:height",content:"1200"}))},Ee=function(e){var t=e.title,n=e.style,r=e.script,a=e.children,o=e.version,i=e.csrfToken,s=e.lastBuildDate;return me.a.createElement("html",{lang:"en"},me.a.createElement("head",null,me.a.createElement("meta",{charSet:"utf-8"}),me.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),me.a.createElement(ge,null),me.a.createElement("title",null,t),me.a.createElement("meta",{name:"description",content:"ColorPK | Faster lighter and nicer than colorhunt | 全球最大色彩搭配网站 | 颜色搭配 | 艺术设计"}),me.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),me.a.createElement("meta",{name:"robots",content:"INDEX,FOLLOW"}),me.a.createElement("meta",{name:"keywords",content:"colorpk, colorpicker, color picker, palette, color combination"}),me.a.createElement("link",{rel:"shortcut icon",href:"//dkny.oss-cn-hangzhou.aliyuncs.com/3/fav.ico"}),me.a.createElement("link",{href:"".concat(n,"?").concat(o),rel:"stylesheet"}),me.a.createElement("script",{dangerouslySetInnerHTML:{__html:"if(window.location.hostname.indexOf('colorpk.com') > -1){\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-5LX6LV3');\n\n            var initLoadTime = Date.now();\n            window.addEventListener('_COLORPK_SCRIPT_READY', function(){\n              window.dataLayer.push({\n                'scriptLoadingTime': Date.now() - initLoadTime\n              });\n              console.log('server last build: ".concat(s,"');\n            });\n          }")}})),me.a.createElement("body",null,me.a.createElement("noscript",null,me.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5LX6LV3",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})),me.a.createElement("div",{id:"app",dangerouslySetInnerHTML:{__html:a}}),me.a.createElement("div",{id:"csrf","data-token":i}),me.a.createElement("script",{src:"".concat(r,"?").concat(o),type:"text/javascript"})))};Ee.propTypes={title:he.a.string.isRequired,lastBuildDate:he.a.string.isRequired,version:he.a.string.isRequired,style:he.a.string.isRequired,script:he.a.string.isRequired,children:he.a.string.isRequired,csrfToken:he.a.string.isRequired};var be=Ee,ve=function(){},ke=(n(18),me.a.memo((function(){return me.a.createElement("div",{className:"spinContainer"},me.a.createElement("div",{className:"spinLoader"}))}))),ye=n(16),we=(n(19),function(){return me.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},me.a.createElement("title",null,"translation"),me.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),me.a.createElement("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "}))}),Ce=[{code:"en",name:"English",data:{language:"Language",popular:"Popular",latest:"Latest",more:"More",about:"About",newColor:"New Color",fbLogin:"Facebook Login",reportIssue:"Report an issue",download:"Download",submit:"Submit",reset:"Reset",return:"Return",profile:"Profile",like:"Like",admin:"Admin",logOut:"Log Out",facebook:"FaceBook",twitter:"Twitter",email:"E-Mail"}},{code:"zh",name:"简体中文",data:{language:"多语言",popular:"最热",latest:"最新",more:"更多",about:"关于",newColor:"创建新颜色",fbLogin:"脸书账号登陆",reportIssue:"报告错误",download:"下载",submit:"添加",reset:"重置",return:"返回",profile:"我的颜色",like:"我的收藏",admin:"管理员",logOut:"注销",facebook:"脸书",twitter:"推特",email:"电邮"}},{code:"ja",name:"日本語",data:{language:"言語",popular:"人気のある",latest:"最新",more:"もっと",about:"約",newColor:"色をつくる",fbLogin:"Facebookでログイン",reportIssue:"問題を報告する",download:"ダウンロード",submit:"提出する",reset:"リセット",return:"戻る",profile:"プロフィール",like:"好む",admin:"管理者",logOut:"サインアウト",facebook:"FaceBook",twitter:"さえずり",email:"Eメール"}},{code:"ko",name:"한국어",data:{language:"언어",popular:"인기 있는",latest:"최근",more:"더",about:"약",newColor:"몹시 떠들어 대다",fbLogin:"페이스 북 로그인",reportIssue:"보고 문제",download:"다운로드",submit:"제출하다",reset:"다시 놓기",return:"반환",profile:"윤곽",like:"인기 있는 말",admin:"관리자",logOut:"로그 아웃하다",facebook:"페이스 북",twitter:"지저귀다",email:"이메일"}},{code:"es",name:"Español",data:{language:"idioma",popular:"popular",latest:"más reciente",more:"Más",about:"acerca de",newColor:"crear nuevo",fbLogin:"cuenta de Facebook",reportIssue:"informe de problema",download:"descargar",submit:"enviar",reset:"Reiniciar",return:"regreso",profile:"perfil",like:"favorita",admin:"administración",logOut:"cerrar sesión",facebook:"Facebook",twitter:"gorjeo",email:"correo electrónico"}},{code:"ru",name:"Русский",data:{language:"Переводы",popular:"популярный",latest:"недавно",more:"Больше",about:"около",newColor:"Создайте",fbLogin:"Логин в фейсбук",reportIssue:"сообщить о проблемах",download:"скачать",submit:"Отправить",reset:"сброс",return:"вернуть",profile:"профиль",like:"любимый",admin:"админ",logOut:"выйти",facebook:"Facebook",twitter:"щебет",email:"Эл. адрес"}}],Le=Ce.map((function(e){return{code:e.code,name:e.name}})),Re=Ce.reduce((function(e,t){return e[t.code]=t.data,e}),{}),Oe=function(e){var t=e.onChange;return me.a.createElement("div",{className:"navbar-dropdown"},Le.map((function(e){return me.a.createElement("a",{className:"navbar-item",key:e.code,onClick:function(){t(e.code)}},e.name)})))};Oe.propTypes={onChange:he.a.func.isRequired};var Se=Oe,xe=me.a.createContext(),_e=function(e){var t=e.lang,n=e.children,r=Re[t]||Re.en;return me.a.createElement(xe.Provider,{value:r},n)};function Ne(e){return(Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var qe=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=Pe(t).call(this,e))||"object"!==Ne(a)&&"function"!=typeof a?Me(r):a).state={showMenu:!1},n.onFBClick=n.onFBClick.bind(Me(n)),n.onLogout=n.onLogout.bind(Me(n)),n.toggleMobileMenu=n.toggleMobileMenu.bind(Me(n)),n.onClickNav=n.onClickNav.bind(Me(n)),n.linkElem=n.props.ssr?"a":ye.Link,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,e),n=t,(r=[{key:"hrefAttr",value:function(e){return this.props.ssr?{href:e}:{to:e}}},{key:"toggleMobileMenu",value:function(){this.setState({showMenu:!this.state.showMenu})}},{key:"onClickNav",value:function(){this.state.showMenu&&this.setState({showMenu:!1})}},{key:"onFBClick",value:function(e){e.preventDefault(),this.props.onOAuth(this.props.facebookUrl)}},{key:"onLogout",value:function(){this.props.onLogout()}},{key:"render",value:function(){var e=this,t=this.props,n=t.url,r=t.detail,a=t.facebookUrl,o=Boolean(r),i=this.context,s=this.linkElem,c="/popular"===n,l=n in{"/latest":!0,"/":!0},u=o?r.get("img"):"//dkny.oss-cn-hangzhou.aliyuncs.com/2/icon.png";return me.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},me.a.createElement("div",{className:"navbar-brand"},me.a.createElement(s,Te({className:"navbar-item"},this.hrefAttr("/"),{onClick:this.onClickNav}),me.a.createElement("img",{src:u,height:"32",width:"32",alt:"colorpk icon"})),me.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false",onClick:this.toggleMobileMenu},me.a.createElement("span",{"aria-hidden":"true"}),me.a.createElement("span",{"aria-hidden":"true"}),me.a.createElement("span",{"aria-hidden":"true"}))),me.a.createElement("div",{className:"navbar-menu ".concat(this.state.showMenu?"is-active":"")},me.a.createElement("div",{className:"navbar-start"},o&&me.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},me.a.createElement("a",{className:"navbar-link ".concat(["/like","/portfolio"].includes(n)?"cpk-hs5eq":"")},r.get("name")),me.a.createElement("div",{className:"navbar-dropdown"},me.a.createElement(s,Te({className:"navbar-item"},this.hrefAttr("/portfolio"),{onClick:function(){e.props.onEnterProfile("myPortfolio"),e.onClickNav()}}),i.profile),me.a.createElement(s,Te({className:"navbar-item"},this.hrefAttr("/like"),{onClick:function(){e.props.onEnterProfile("myLiked"),e.onClickNav()}}),i.like),r.get("isadmin")&&me.a.createElement(s,Te({className:"navbar-item"},this.hrefAttr("/adminpanel"),{onClick:this.onClickNav}),i.admin),me.a.createElement("hr",{className:"navbar-divider"}),me.a.createElement("a",{className:"navbar-item",onClick:function(t){t.preventDefault(),e.onLogout()}},i.logOut))),me.a.createElement(s,Te({},this.hrefAttr("/popular"),{className:"navbar-item ".concat(c?"cpk-hs5eq":""),onClick:this.onClickNav}),i.popular),me.a.createElement(s,Te({},this.hrefAttr("/latest"),{className:"navbar-item ".concat(l?"cpk-hs5eq":""),onClick:this.onClickNav}),i.latest),me.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},me.a.createElement("a",{className:"navbar-link"},i.more),me.a.createElement("div",{className:"navbar-dropdown"},me.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com"},"ColorPK v2.0"),me.a.createElement("a",{className:"navbar-item",href:"//www.colorpk.com/about"},i.about),me.a.createElement("hr",{className:"navbar-divider"}),me.a.createElement("a",{className:"navbar-item",href:"//github.com/im6/vp/issues"},i.reportIssue))),me.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},me.a.createElement("a",{className:"navbar-link"},me.a.createElement(we,null),me.a.createElement("span",{className:"cpk-dc2am"},i.language)),me.a.createElement(Se,{onChange:this.props.onChangeLang}))),me.a.createElement("div",{className:"navbar-end"},me.a.createElement("div",{className:"navbar-item"},me.a.createElement("div",{className:"buttons"},me.a.createElement(s,Te({},this.hrefAttr("/new"),{className:"button is-primary",onClick:this.onClickNav}),i.newColor),"  ",!o&&a&&me.a.createElement("a",{className:"button is-info",onClick:this.onFBClick},i.fbLogin))))))}}])&&Ie(n.prototype,r),a&&Ie(n,a),t}(me.a.Component);qe.propTypes={ssr:he.a.bool,url:he.a.string,detail:he.a.object,facebookUrl:he.a.string,onLogout:he.a.func.isRequired,onOAuth:he.a.func.isRequired,onChangeLang:he.a.func.isRequired,onEnterProfile:he.a.func.isRequired},qe.contextType=xe;var Fe=qe,je=function(e){var t=e.url;return me.a.createElement("div",{className:"cpk-i3de6"},me.a.createElement(Fe,{ssr:!0,url:t,onChange:ve,onLogout:ve,onOAuth:ve,onEnterProfile:ve,onChangeLang:ve}),me.a.createElement(ke,null))};je.propTypes={url:he.a.string.isRequired},je.contextType=xe;var De=je,Be=W.a.v1().substring(0,8),Ue=function(e,t){var n=me.a.createElement(_e,{lang:e.cookies.lang},me.a.createElement(De,{url:e.path})),r=Object(de.renderToString)(n),a=me.a.createElement(be,{title:"".concat("ColorPK | Your Best Color Picker"),version:Be,style:"".concat(y,"main.css"),script:"".concat(y,"main.js"),csrfToken:e.csrfToken(),lastBuildDate:"1/26/2020, 2:55:59 PM EST"},r),o=Object(de.renderToStaticMarkup)(a);t.status(200),t.send("<!DOCTYPE html>".concat(o))},He=i()();He.set("trust proxy",!0),He.use(a()()),He.use(c.a.json()),He.use(c.a.urlencoded({extended:!1})),He.use(u()()),He.use(m()({name:"session",keys:[h],domain:"react.colorpk.com",maxAge:2592e5,httpOnly:!0}));var We=n(20).default;He.get("/robots.txt",We),He.get("/favicon.ico",We),He.get("/sitemap.xml",We),He.use((function(){for(var e=void 0,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];C()(n[0],"body._csrf",null)===g?(console.log("csrf exception"),n[2]()):D.apply(e,n)})),He.post("/graphql",ue),He.get("/auth/:oauth",I),["/","/latest","/popular","/color/:colorId","/new"].forEach((function(e){He.get(e,Ue)})),He.get("/like",P,Ue),He.get("/portfolio",P,Ue),He.get("/adminpanel",(function(e,t,n){_(e)?n():n(403)}),Ue),He.use((function(e,t){console.error("Error: 404, ".concat(e.url," not found")),t.status(400).sendFile(F)})),He.use((function(e,t,n,r){console.error("Error: ".concat(e.toString(),", ").concat(t.url)),"POST"===t.method?n.status(400).json({errors:!0}):n.status(400).sendFile(F)})),He.listen(f,"localhost",(function(){console.log("app(mode: ".concat("production",") is running: http://").concat("localhost",":").concat(f))})).timeout=5e3}]);