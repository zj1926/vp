(self.webpackChunkvp=self.webpackChunkvp||[]).push([[203],{5929:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var e=r(52246),i=r(37703),o=r(85893),u=r(67294),a=r(45697),l=r.n(a),c="_2xt9n",s=r(13586),d=r(96299);function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var r=[],e=!0,i=!1,o=void 0;try{for(var u,a=n[Symbol.iterator]();!(e=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);e=!0);}catch(n){i=!0,o=n}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}return r}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return v(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var h=function(n){var t=n.loading,r=n.list,e=n.onAdjudicate,i=n.onInitList,a=f((0,d.Z)(),1)[0],l=r.toJS();(0,u.useEffect)((function(){0===l.length&&i()}),[]);var v=function(n,t){return function(){return e(n,t)}};return(0,o.jsxs)("div",{className:c,children:[!t&&0===l.length&&(0,o.jsx)("h1",{children:"No colors to decide."}),l.map((function(n){return(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{value:n.color,id:n.id,vertical:a,likeNum:n.like,liked:!1,onClickLike:v(n.id,!0)}),(0,o.jsx)("br",{}),"  ",(0,o.jsxs)("button",{className:"button is-danger is-small",onClick:v(n.id,!1),children:["Delete ",n.id]})]},n.id)}))]})};h.propTypes={list:l().object.isRequired,loading:l().bool,onInitList:l().func.isRequired,onAdjudicate:l().func.isRequired};var m=h,y=(0,i.$j)((function(n){var t=n.admin;return{list:t.get("list"),loading:t.get("loading")}}),(function(n){return{onInitList:function(){var t=(0,e.Z)("admin/getList");n(t())},onAdjudicate:function(t,r){var i=(0,e.Z)("admin/decideColor");n(i({id:t,willLike:r}))}}}))(m)}}]);