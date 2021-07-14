(self.webpackChunkindexdoc=self.webpackChunkindexdoc||[]).push([[455],{9278:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(6162);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},592:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(9982),o=r(3076),i=(r(6162),r(9278)),a=["components"],c={sidebar_label:"Swap",sidebar_position:1},l=void 0,p={unversionedId:"protocol/swap",id:"protocol/swap",isDocsHomePage:!1,title:"swap",description:"\u4ec0\u4e48\u662fINSWAP",source:"@site/docs/protocol/1_swap.md",sourceDirName:"protocol",slug:"/protocol/swap",permalink:"/docs/docs/protocol/swap",editUrl:"https://github.com/inswapex/docs/edit/master/docs/protocol/1_swap.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Swap",sidebar_position:1},sidebar:"someSidebar",previous:{title:"Index Intro",permalink:"/docs/docs/"},next:{title:"IDO",permalink:"/docs/docs/protocol/ido"}},u=[{value:"\u4ec0\u4e48\u662fINSWAP",id:"\u4ec0\u4e48\u662finswap",children:[]},{value:"\u505a\u5e02\u673a\u5236",id:"\u505a\u5e02\u673a\u5236",children:[]},{value:"INSWAP Market",id:"inswap-market",children:[]},{value:"\u4ea4\u6613\u6316\u77ff",id:"\u4ea4\u6613\u6316\u77ff",children:[]},{value:"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf",id:"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662finswap"},"\u4ec0\u4e48\u662fINSWAP"),(0,i.kt)("p",null,"INSWAP\u662f\u53bb\u4e2d\u5fc3\u7684\u4ee3\u5e01\u6d41\u52a8\u6027\u4ea4\u6362\u534f\u8bae\uff0c\u652f\u6301ERC20\u3001HRC20\u7b49\u5e73\u53f0\u901a\u8bc1\u7684\u5b9e\u65f6\u65e0\u635f\u5151\u6362\u3002"),(0,i.kt)("h2",{id:"\u505a\u5e02\u673a\u5236"},"\u505a\u5e02\u673a\u5236"),(0,i.kt)("p",null,"INSWAP\u7684\u505a\u5e02\u673a\u5236\u5728AMM\u3001PMM\u7b49\u673a\u5236\u4e0a\u7efc\u5408\u6539\u8fdb\uff0c\u521b\u65b0\u5730\u521b\u7acb\u51faIMM(Intelligent Market Maker)\u667a\u80fd\u505a\u5e02\u673a\u5236\uff0c\u5b83\u652f\u6301AMM\u3001PMM\u7b49\u590d\u5408\u505a\u5e02\uff0c\u6700\u5927\u9650\u5ea6\u4e0a\u51cf\u5c0fUNISWAP\u65e0\u5e38\u635f\u5931\u548c\u8d44\u91d1\u655e\u53e3\u98ce\u9669\uff0c\u63d0\u9ad8\u8d44\u91d1\u5229\u7528\u7387\u3002"),(0,i.kt)("h2",{id:"inswap-market"},"INSWAP Market"),(0,i.kt)("p",null,"INSWAP Market\u63d0\u4f9bSWAP\u76f8\u5173\u7684\u6570\u636e\u805a\u5408\u3001\u900f\u660e\u5206\u6790\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u65b9\u4fbf\u5730\u89c2\u6d4b\u6570\u636e\u548c\u9009\u62e9\u53c2\u4e0e\u6807\u7684\u3002"),(0,i.kt)("h2",{id:"\u4ea4\u6613\u6316\u77ff"},"\u4ea4\u6613\u6316\u77ff"),(0,i.kt)("p",null,"\u4e3a\u66f4\u597d\u7684\u63d0\u9ad8\u7528\u6237\u4ea4\u6613\u6d3b\u8dc3\u5ea6\uff0c\u6fc0\u52b1\u7528\u6237\u6709\u6548SWAP\uff0cINSWAP\u5c06\u5206\u671f\u5f00\u542f\u4ea4\u6613\u6316\u77ff\u6d3b\u52a8\u3002\u7531\u5e73\u53f0\u786e\u5b9a\u6bcf\u671f\u4ea4\u6613\u6316\u77ff\u65f6\u95f4\uff0c\u5956\u52b1\u6570\u91cf\uff0c\u901a\u8fc7\u94fe\u4e0a\u5408\u7ea6\u81ea\u52a8\u53d1\u653e\u5e73\u53f0\u5e01\u7ed9\u76f8\u5e94\u6bd4\u4f8b\u4ea4\u6613\u91cf\u7684\u7528\u6237\u3002\u5956\u52b1\u673a\u5236\u91c7\u7528\u6539\u8fdb\u6743\u76ca\u8bc1\u660e\u673a\u5236\uff08APOS\uff09\u81ea\u52a8\u6838\u7b97\u7528\u6237\u5956\u52b1\u6570\u91cf\uff0c\u7528\u6237\u4ea4\u6613\u91cf\u8d8a\u5927\u3001\u4ea4\u6613\u6b21\u6570\u8d8a\u591a\u3001\u4ea4\u6613\u65f6\u95f4\u8d8a\u4e45\uff0c\u83b7\u5f97\u7684\u5956\u52b1\u4e5f\u8d8a\u591a\u3002"),(0,i.kt)("h2",{id:"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf"},"\u591a\u7ef4\u7acb\u4f53\u9884\u8a00\u673a\u7cfb\u7edf"),(0,i.kt)("p",null,"INSWAP\u9884\u8a00\u673a\u7cfb\u7edf\u4f5c\u4e3a\u72ec\u7acb\u8fd0\u884c\u7684\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u7ef4\u590d\u5408\u5e02\u573a\u6570\u636e\uff0c\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u5e73\u6ed1\u3001\u5747\u503c\u7684\u5e02\u573a\u4ef7\u683c\u53c2\u8003\u3002"))}d.isMDXComponent=!0}}]);