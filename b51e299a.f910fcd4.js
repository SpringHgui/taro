(window.webpackJsonp=window.webpackJsonp||[]).push([[1248],{1315:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),i=(n(0),n(1802)),l=["components"],b={title:"Taro.connectWifi(option)",sidebar_label:"connectWifi"},o={unversionedId:"apis/device/wifi/connectWifi",id:"apis/device/wifi/connectWifi",isDocsHomePage:!1,title:"Taro.connectWifi(option)",description:"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002",source:"@site/docs/apis/device/wifi/connectWifi.md",slug:"/apis/device/wifi/connectWifi",permalink:"/taro/docs/next/apis/device/wifi/connectWifi",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/wifi/connectWifi.md",version:"current",sidebar_label:"connectWifi",sidebar:"API",previous:{title:"Taro.getConnectedWifi(option)",permalink:"/taro/docs/next/apis/device/wifi/getConnectedWifi"},next:{title:"WifiInfo",permalink:"/taro/docs/next/apis/device/wifi/WifiInfo"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={rightToc:a};function u(e){var t=e.components,n=Object(c.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u8fde\u63a5 Wi-Fi\u3002\u82e5\u5df2\u77e5 Wi-Fi \u4fe1\u606f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5229\u7528\u8be5\u63a5\u53e3\u8fde\u63a5\u3002\u4ec5 Android \u4e0e iOS 11 \u4ee5\u4e0a\u7248\u672c\u652f\u6301\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html"},"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<WifiError>\n")),Object(i.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.b)("h3",{id:"option"},"Option"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"\u53c2\u6570"),Object(i.b)("th",null,"\u7c7b\u578b"),Object(i.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(i.b)("th",null,"\u8bf4\u660e"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"SSID"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(i.b)("td",null,"Wi-Fi \u8bbe\u5907 SSID")),Object(i.b)("tr",null,Object(i.b)("td",null,"password"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(i.b)("td",null,"Wi-Fi \u8bbe\u5907\u5bc6\u7801")),Object(i.b)("tr",null,Object(i.b)("td",null,"BSSID"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"Wi-Fi \u8bbe\u5907 BSSID")),Object(i.b)("tr",null,Object(i.b)("td",null,"complete"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: WifiError) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(i.b)("tr",null,Object(i.b)("td",null,"fail"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: WifiError) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(i.b)("tr",null,Object(i.b)("td",null,"success"),Object(i.b)("td",null,Object(i.b)("code",null,"(res: WifiError) => void")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.connectWifi({\n  SSID: '',\n  BSSID: '',\n  success: function (res) {\n    console.log(res.errMsg)\n  }\n})\n")),Object(i.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"API"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Taro.connectWifi"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0},1802:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=c.a.createContext({}),d=function(e){var t=c.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=d(e.components);return c.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),u=d(n),O=r,s=u["".concat(l,".").concat(O)]||u[O]||p[O]||i;return n?c.a.createElement(s,b(b({ref:t},a),{},{components:n})):c.a.createElement(s,b({ref:t},a))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var a=2;a<i;a++)l[a]=n[a];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);