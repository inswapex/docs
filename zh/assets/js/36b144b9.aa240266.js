"use strict";(self.webpackChunkmetabasedoc=self.webpackChunkmetabasedoc||[]).push([[553],{3905:(e,t,r)=>{r.d(t,{kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(1550),o=(r(7294),r(3905));const a={sidebar_label:"\u793e\u533a\u6295\u653e",hide_title:!0,sidebar_position:4,title:"MetaBase\u793e\u533a\u6295\u653e"},i=void 0,c={unversionedId:"protocol/grant",id:"protocol/grant",title:"MetaBase\u793e\u533a\u6295\u653e",description:"\u793e\u533a\u6295\u653e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/protocol/5_grant.md",sourceDirName:"protocol",slug:"/protocol/grant",permalink:"/docs/zh/protocol/grant",draft:!1,editUrl:"https://github.com/metabaseex/docs/edit/master/docs/protocol/5_grant.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"\u793e\u533a\u6295\u653e",hide_title:!0,sidebar_position:4,title:"MetaBase\u793e\u533a\u6295\u653e"},sidebar:"someSidebar",previous:{title:"POS\u6d3b\u671f\u6316\u77ff",permalink:"/docs/zh/protocol/pos"},next:{title:"\u5173\u4e8eMetaBase\u5408\u7ea6",permalink:"/docs/zh/contract/about"}},l={},p=[{value:"\u793e\u533a\u6295\u653e",id:"\u793e\u533a\u6295\u653e",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u793e\u533a\u6295\u653e"},"\u793e\u533a\u6295\u653e"),(0,o.kt)("p",null,"MetaBase Grant\u662f\u4e00\u79cd\u793e\u533a\u5185\u7684\u4e3b\u52a8\u5f0f\u4ee3\u5e01\u6295\u653e\u673a\u5236\u3002"),(0,o.kt)("p",null,"\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u652f\u6301\u5e73\u53f0\u5e01\u540e\uff0c\u521b\u5efaGrant\u6c60\uff0c\u7528\u4e8e\u5411\u7528\u6237\u53d1\u653e\u4ee3\u5e01\u6216\u65e0\u5dee\u522b\u7a7a\u6295\u3002"),(0,o.kt)("p",null,"Grant\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a       "),(0,o.kt)("p",null,"1\u3001\u9879\u76ee\u65b9\u7ed9\u4e88\u7279\u5b9a\u7684\u5bf9\u8c61\u53d1\u653e\u4ee3\u5e01,\u652f\u6301\u4e0d\u9501\u4ed3\u6216\u9501\u4ed3\u7b56\u7565\u3002  "),(0,o.kt)("p",null,"2\u3001\u9879\u76ee\u65b9\u7ed9\u4e88\u7279\u5b9a\u7684\u8303\u56f4(\u516c\u5f00\u3001\u9080\u8bf7\u4eba\u3001\u6307\u5b9a\u793e\u533a\u3001\u767d\u540d\u5355\u7b49)\u53d1\u653e\u7a7a\u6295\u3002       "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Grant\u5bf9\u4e8e\u9879\u76ee\u65b9\u6216\u7528\u6237\u5747\u65e0\u98ce\u9669,\u5c5e\u4e8eDAO\u751f\u6001\u7684\u91cd\u8981\u5de5\u5177\u4e4b\u4e00\u3002")))}u.isMDXComponent=!0}}]);