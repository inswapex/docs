"use strict";(self.webpackChunkindexdoc=self.webpackChunkindexdoc||[]).push([[455],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={sidebar_label:"Swap",sidebar_position:1,hide_title:!0},c=void 0,l={unversionedId:"protocol/swap",id:"protocol/swap",isDocsHomePage:!1,title:"swap",description:"Inswap \u4ea4\u6613\u7cfb\u7edf",source:"@site/docs/protocol/1_swap.md",sourceDirName:"protocol",slug:"/protocol/swap",permalink:"/docs/protocol/swap",editUrl:"https://github.com/inswapex/docs/edit/master/docs/protocol/1_swap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Swap",sidebar_position:1,hide_title:!0},sidebar:"someSidebar",previous:{title:"Index Intro",permalink:"/docs/"},next:{title:"IDO",permalink:"/docs/protocol/ido"}},s=[{value:"Inswap \u4ea4\u6613\u7cfb\u7edf",id:"inswap-\u4ea4\u6613\u7cfb\u7edf",children:[]},{value:"\u505a\u5e02\u673a\u5236",id:"\u505a\u5e02\u673a\u5236",children:[]},{value:"Inswap Market",id:"inswap-market",children:[]},{value:"\u5f00\u653e\u5f0f\u7684\u4ea4\u6613\u6316\u77ff",id:"\u5f00\u653e\u5f0f\u7684\u4ea4\u6613\u6316\u77ff",children:[]},{value:"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf",id:"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"inswap-\u4ea4\u6613\u7cfb\u7edf"},"Inswap \u4ea4\u6613\u7cfb\u7edf"),(0,a.kt)("p",null,"Inswap\u662f\u53bb\u4e2d\u5fc3\u5316\u7684\u4ee3\u5e01\u6d41\u52a8\u6027\u4ea4\u6362\u534f\u8bae\uff0c\u652f\u6301ERC20\u3001HRC20\u7b49\u5e73\u53f0\u901a\u8bc1\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u65f6\u65e0\u635f\u5151\u6362"),"\u3002"),(0,a.kt)("h3",{id:"\u505a\u5e02\u673a\u5236"},"\u505a\u5e02\u673a\u5236"),(0,a.kt)("p",null,"Inswap\u7684\u505a\u5e02\u673a\u5236\u5728AMM\u3001PMM\u7b49\u673a\u5236\u4e0a\u7efc\u5408\u6539\u8fdb\uff0c\u521b\u65b0\u5730\u521b\u7acb\u51faIMM(Intelligent Market Maker)\u667a\u80fd\u505a\u5e02\u673a\u5236\uff0c\u5b83\u652f\u6301AMM\u3001PMM\u7b49\u590d\u5408\u505a\u5e02\uff0c\u6700\u5927\u9650\u5ea6\u4e0a\u51cf\u5c0fUNISWAP\u65e0\u5e38\u635f\u5931\u548c\u8d44\u91d1\u655e\u53e3\u98ce\u9669\uff0c\u63d0\u9ad8\u8d44\u91d1\u5229\u7528\u7387\u3002"),(0,a.kt)("p",null,"\u4e3a\u907f\u514dSWAP\u4e0e\u9884\u8a00\u673a\u7684\u6469\u64e6\uff0cIMM\u91c7\u7528\u5206\u6b65\u63a8\u8fdb\u7684\u65b9\u5f0f\uff0c\u5728Inswap\u53d1\u5c55\u65e9\u671f\uff0c\u4ee5AMM\u4e3a\u4e3b\uff0c\u9010\u6e10\u8fc7\u6e21\u81f3IMM\u3002"),(0,a.kt)("h3",{id:"inswap-market"},"Inswap Market"),(0,a.kt)("p",null,"Inswap Market\u63d0\u4f9bSWAP\u76f8\u5173\u7684\u6570\u636e\u805a\u5408\u3001\u900f\u660e\u5206\u6790\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u65b9\u4fbf\u5730\u89c2\u6d4b\u6570\u636e\u548c\u9009\u62e9\u53c2\u4e0e\u6807\u7684\u3002"),(0,a.kt)("h3",{id:"\u5f00\u653e\u5f0f\u7684\u4ea4\u6613\u6316\u77ff"},"\u5f00\u653e\u5f0f\u7684\u4ea4\u6613\u6316\u77ff"),(0,a.kt)("p",null,"Inswap\u652f\u6301\u4efb\u610f\u4ea4\u6613\u5bf9\u7684\u4ea4\u6613\u6316\u77ff\u884c\u4e3a\uff0c\u4efb\u4f55\u533f\u540d\u7528\u6237\u90fd\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u4e3a\u67d0\u4e00\u4ea4\u6613\u5bf9\u63d0\u4f9b\u4ea4\u6613\u6316\u77ff\u8d44\u91d1\uff0c\u65e0\u9700\u4efb\u4f55\u7b2c\u4e09\u65b9\u5ba1\u6838\u548c\u5bf9\u63a5\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u53c2\u4e0e\u5177\u5907\u4ea4\u6613\u6316\u77ff\u8d44\u91d1\u6c60\u7684\u4ea4\u6613\u65f6\uff0c\u5c06\u83b7\u5f97\u4ee5\u624b\u7eed\u8d39\u4e3a\u6838\u7b97\u57fa\u51c6\u7684\u4ea4\u6613\u6316\u77ff\u5956\u52b1\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u4e3a\u66f4\u597d\u7684\u63d0\u9ad8\u7528\u6237\u4ea4\u6613\u6d3b\u8dc3\u5ea6\uff0c\u6fc0\u52b1\u7528\u6237\u6709\u6548SWAP\uff0cINSWAP\u5c06\u9002\u65f6\u5206\u671f\u5f00\u542f\u5e73\u53f0\u5e01\u4ea4\u6613\u6316\u77ff\u6d3b\u52a8\u3002\u7531\u5e73\u53f0\u786e\u5b9a\u6bcf\u671f\u4ea4\u6613\u6316\u77ff\u65f6\u95f4\uff0c\u5956\u52b1\u6570\u91cf\uff0c\u901a\u8fc7\u94fe\u4e0a\u5408\u7ea6\u81ea\u52a8\u53d1\u653e\u5e73\u53f0\u5e01\u7ed9\u76f8\u5e94\u6bd4\u4f8b\u4ea4\u6613\u91cf\u7684\u7528\u6237\u3002\u5956\u52b1\u673a\u5236\u91c7\u7528\u6539\u8fdb\u6743\u76ca\u8bc1\u660e\u673a\u5236\uff08APOS\uff09\u81ea\u52a8\u6838\u7b97\u7528\u6237\u5956\u52b1\u6570\u91cf\uff0c\u7528\u6237\u4ea4\u6613\u91cf\u8d8a\u5927\uff0c\u83b7\u5f97\u7684\u5956\u52b1\u4e5f\u8d8a\u591a\u3002"),(0,a.kt)("h3",{id:"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf"},"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf"),(0,a.kt)("p",null,"INSWAP\u9884\u8a00\u673a\u7cfb\u7edf\u4f5c\u4e3a\u72ec\u7acb\u8fd0\u884c\u7684\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u7ef4\u590d\u5408\u5e02\u573a\u6570\u636e\uff0c\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u5e73\u6ed1\u3001\u5747\u503c\u7684\u5e02\u573a\u4ef7\u683c\u53c2\u8003\u3002"))}d.isMDXComponent=!0}}]);