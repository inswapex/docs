"use strict";(self.webpackChunkmetabasedoc=self.webpackChunkmetabasedoc||[]).push([[923],{3905:(t,e,n)=>{n.d(e,{kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5878:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(1550),o=(n(7294),n(3905));const a={sidebar_label:"Staking\u8d28\u62bc\u6316\u77ff",hide_title:!0,sidebar_position:3,title:"MetaBase Staking\u8d28\u62bc\u6316\u77ff"},i=void 0,c={unversionedId:"protocol/staking",id:"protocol/staking",title:"MetaBase Staking\u8d28\u62bc\u6316\u77ff",description:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/protocol/3_staking.md",sourceDirName:"protocol",slug:"/protocol/staking",permalink:"/docs/zh/protocol/staking",draft:!1,editUrl:"https://github.com/metabaseex/docs/edit/master/docs/protocol/3_staking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Staking\u8d28\u62bc\u6316\u77ff",hide_title:!0,sidebar_position:3,title:"MetaBase Staking\u8d28\u62bc\u6316\u77ff"},sidebar:"someSidebar",previous:{title:"IDO\u4f17\u7b79\u53d1\u884c",permalink:"/docs/zh/protocol/ido"},next:{title:"POS\u6d3b\u671f\u6316\u77ff",permalink:"/docs/zh/protocol/pos"}},l={},p=[{value:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",id:"\u5f00\u653e\u5f0fstaking\u8d28\u62bc\u6316\u77ff",level:3}],s={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5f00\u653e\u5f0fstaking\u8d28\u62bc\u6316\u77ff"},"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff"),(0,o.kt)("p",null,"\u4efb\u610f\u7528\u6237\u53ef\u4ee5\u521b\u5efaStaking\u6316\u77ff\u6c60\uff0cStaking\u6316\u77ff\u6c60\u9700\u652f\u4ed8\u4e00\u5b9a\u5e73\u53f0\u5e01\uff0c\u65b9\u53ef\u521b\u5efa\u3002"),(0,o.kt)("p",null,"Staking\u6c60\u53ef\u5206\u4e3aLP\u6c60\u3001\u666e\u901a\u6c60\u3002LP\u6c60\u901a\u8fc7\u8d28\u62bc\u6307\u5b9a\u4ee3\u5e01\u53ef\u5956\u52b1\u5e73\u53f0\u5e01\u6216\u5176\u4ed6\u5e01\u79cd\u3002\u7528\u6237\u81ea\u884c\u521b\u7acb\u7684Staking\u6c60\uff0c\u53ef\u5956\u52b1\u8be5\u6c60\u7684\u672c\u5e01\u6216\u4e3b\u6d41\u5e01\uff08ETH\u3001USDT\u3001USDC\u3001DAI\u7b49\uff09\uff0c\u521b\u7acb\u8005\u65e0\u6743\u52a8\u7528\u6c60\u5185\u8d44\u91d1\uff0c\u786e\u4fdd\u7528\u6237\u8d44\u91d1\u5b89\u5168\u3002    "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Staking\u5956\u52b1\u8d44\u91d1\u4e00\u65e6\u521b\u5efa\uff0c\u53ea\u80fd\u589e\u52a0\u6c60\u5185\u5956\u52b1\u91d1\uff0c\u4e0d\u80fd\u9000\u56de\uff0c\u786e\u4fdd\u7528\u6237\u6536\u76ca"),"\u3002"),(0,o.kt)("p",null,"\u521b\u5efaStaking\u6c60\u7684\u89c4\u5219,\u53ef\u5728\u521b\u5efaStaking\u6c60\u9875\u9762\u67e5\u770b\u8be6\u7ec6\u89c4\u5219\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Staking\u5bf9\u4e8e\u9879\u76ee\u65b9\u548c\u7528\u6237\u90fd\u662f\u65e0\u98ce\u9669\u7684,\u5c5e\u4e8e\u4fdd\u672c\u56fa\u5b9a\u6536\u76ca\u3002")))}u.isMDXComponent=!0}}]);