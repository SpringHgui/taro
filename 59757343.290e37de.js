(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{1802:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,s=p["".concat(c,".").concat(O)]||p[O]||d[O]||l;return n?a.a.createElement(s,b(b({ref:t},i),{},{components:n})):a.a.createElement(s,b({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},679:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(1802)),c=["components"],b={title:"Taro.onMemoryWarning(callback)",sidebar_label:"onMemoryWarning"},o={unversionedId:"apis/device/performance/onMemoryWarning",id:"version-3.x/apis/device/performance/onMemoryWarning",isDocsHomePage:!1,title:"Taro.onMemoryWarning(callback)",description:"\u76d1\u542c\u5185\u5b58\u4e0d\u8db3\u544a\u8b66\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-3.x/apis/device/performance/onMemoryWarning.md",slug:"/apis/device/performance/onMemoryWarning",permalink:"/taro/docs/apis/device/performance/onMemoryWarning",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/performance/onMemoryWarning.md",version:"3.x",sidebar_label:"onMemoryWarning",sidebar:"version-3.x/API",previous:{title:"Taro.offGyroscopeChange(callback)",permalink:"/taro/docs/apis/device/gyroscope/offGyroscopeChange"},next:{title:"Taro.scanCode(option)",permalink:"/taro/docs/apis/device/scan/scancode"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]},{value:"level",id:"level",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,c);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u76d1\u542c\u5185\u5b58\u4e0d\u8db3\u544a\u8b66\u4e8b\u4ef6\u3002"),Object(l.b)("p",null,"\u5f53 iOS/Android \u5411\u5c0f\u7a0b\u5e8f\u8fdb\u7a0b\u53d1\u51fa\u5185\u5b58\u8b66\u544a\u65f6\uff0c\u89e6\u53d1\u8be5\u4e8b\u4ef6\u3002\u89e6\u53d1\u8be5\u4e8b\u4ef6\u4e0d\u610f\u5473\u5c0f\u7a0b\u5e8f\u88ab\u6740\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4ec5\u4ec5\u662f\u544a\u8b66\uff0c\u5f00\u53d1\u8005\u53ef\u5728\u6536\u5230\u901a\u77e5\u540e\u56de\u6536\u4e00\u4e9b\u4e0d\u5fc5\u8981\u8d44\u6e90\u907f\u514d\u8fdb\u4e00\u6b65\u52a0\u5267\u5185\u5b58\u7d27\u5f20\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html"},"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"\u5185\u5b58\u4e0d\u8db3\u544a\u8b66\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"result"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"level"),Object(l.b)("td",null,Object(l.b)("code",null,"5 | 10 | 15")),Object(l.b)("td",null,"\u5185\u5b58\u544a\u8b66\u7b49\u7ea7\uff0c\u53ea\u6709 Android \u624d\u6709\uff0c\u5bf9\u5e94\u7cfb\u7edf\u5b8f\u5b9a\u4e49")))),Object(l.b)("h3",{id:"level"},"level"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"5"),Object(l.b)("td",null,"TRIM_MEMORY_RUNNING_MODERATE")),Object(l.b)("tr",null,Object(l.b)("td",null,"10"),Object(l.b)("td",null,"TRIM_MEMORY_RUNNING_LOW")),Object(l.b)("tr",null,Object(l.b)("td",null,"15"),Object(l.b)("td",null,"TRIM_MEMORY_RUNNING_CRITICAL")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.onMemoryWarning(function () {\n  console.log('onMemoryWarningReceive')\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Taro.onMemoryWarning"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);