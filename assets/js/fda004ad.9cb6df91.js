(self.webpackChunkindexdoc=self.webpackChunkindexdoc||[]).push([[937],{9278:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(6162);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4372:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(9982),o=n(3076),i=(n(6162),n(9278)),a=["components"],c={sidebar_label:"Staking",sidebar_position:3},s=void 0,l={unversionedId:"protocol/staking",id:"protocol/staking",isDocsHomePage:!1,title:"staking",description:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",source:"@site/docs/protocol/3_staking.md",sourceDirName:"protocol",slug:"/protocol/staking",permalink:"/docs/docs/protocol/staking",editUrl:"https://github.com/inswapex/docs/edit/master/docs/protocol/3_staking.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Staking",sidebar_position:3},sidebar:"someSidebar",previous:{title:"IDO",permalink:"/docs/docs/protocol/ido"},next:{title:"POS",permalink:"/docs/docs/protocol/pos"}},p=[{value:"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff",id:"\u5f00\u653e\u5f0fstaking\u8d28\u62bc\u6316\u77ff",children:[]}],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5f00\u653e\u5f0fstaking\u8d28\u62bc\u6316\u77ff"},"\u5f00\u653e\u5f0fStaking\u8d28\u62bc\u6316\u77ff"),(0,i.kt)("p",null,"\u4efb\u610f\u7528\u6237\u53ef\u4ee5\u521b\u5efaStaking\u6316\u77ff\u6c60\uff0cStaking\u6316\u77ff\u6c60\u9700\u652f\u4ed8\u4e00\u5b9a\u5e73\u53f0\u5e01\uff0c\u65b9\u53ef\u521b\u5efa\u3002Staking\u6c60\u53ef\u5206\u4e3a\u5e73\u53f0\u521b\u5efa\u7684Staking\u6c60\uff08XX\u6c60\uff09\u548c\u7528\u6237\u81ea\u884c\u521b\u7acb\u7684Staking\u6c60\uff08XX\u6c60\uff09\u3002XX\u6c60\u901a\u8fc7\u8d28\u62bc\u6307\u5b9a\u4ee3\u5e01\u53ef\u5956\u52b1\u5e73\u53f0\u5e01\u6216\u5176\u4ed6\u5e01\u79cd\u3002\u7528\u6237\u81ea\u884c\u521b\u7acb\u7684Staking\u6c60\uff0c\u53ef\u5956\u52b1\u8be5\u6c60\u7684\u672c\u5e01\u6216\u4e3b\u6d41\u5e01\uff08ETH\u3001USDT\u3001USDC\u3001DAI\u7b49\uff09\uff0c\u521b\u7acb\u8005\u65e0\u6743\u52a8\u7528\u6c60\u5185\u8d44\u91d1\uff0c\u786e\u4fdd\u7528\u6237\u8d44\u91d1\u5b89\u5168\uff0c\u4e14\u4e00\u65e6\u521b\u5efa\uff0c\u53ea\u80fd\u589e\u52a0\u6c60\u5185\u5956\u52b1\u91d1\uff0c\u4e0d\u80fd\u9000\u56de\u3002"))}f.isMDXComponent=!0}}]);