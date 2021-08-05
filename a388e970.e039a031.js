(window.webpackJsonp=window.webpackJsonp||[]).push([[1130],{1198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(1802)),p=["components"],c={title:"Map",sidebar_label:"Map"},i={unversionedId:"components/maps/map",id:"version-1.x/components/maps/map",isDocsHomePage:!1,title:"Map",description:"\u5730\u56fe",source:"@site/versioned_docs/version-1.x/components/maps/map.md",slug:"/components/maps/map",permalink:"/taro/docs/1.x/components/maps/map",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/components/maps/map.md",version:"1.x",sidebar_label:"Map",sidebar:"version-1.x/components",previous:{title:"Camera",permalink:"/taro/docs/1.x/components/media/camera"},next:{title:"Canvas",permalink:"/taro/docs/1.x/components/canvas/canvas"}},s=[],m={rightToc:s};function l(e){var n=e.components,t=Object(o.a)(e,p);return Object(a.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"\u5730\u56fe"},"\u5730\u56fe"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<Map />")," \u7ec4\u4ef6\u7684 H5 \u4e0e RN \u7248\u672c\u5c1a\u672a\u5b9e\u73b0\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5c0f\u7a0b\u5e8f\u7aef\u53c2\u6570\u652f\u6301\u8be6\u89c1\u5404\u5c0f\u7a0b\u5e8f\u5b98\u7f51")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/map.html"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://smartprogram.baidu.com/docs/develop/component/map/#map"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.alipay.com/mini/component/map"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Map"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Component {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")))}l.isMDXComponent=!0},1802:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),m=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=m(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=m(t),b=r,d=l["".concat(p,".").concat(b)]||l[b]||u[b]||a;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<a;s++)p[s]=t[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);