(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1802:function(e,t,l){"use strict";l.d(t,"a",(function(){return O})),l.d(t,"b",(function(){return s}));var b=l(0),n=l.n(b);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=n.a.createContext({}),o=function(e){var t=n.a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},O=function(e){var t=o(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var l=e.components,b=e.mdxType,c=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),O=o(l),d=b,s=O["".concat(r,".").concat(d)]||O[d]||j[d]||c;return l?n.a.createElement(s,a(a({ref:t},u),{},{components:l})):n.a.createElement(s,a({ref:t},u))}));function s(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=l.length,r=new Array(c);r[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:b,r[1]=a;for(var u=2;u<c;u++)r[u]=l[u];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},321:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return O}));var b=l(3),n=l(7),c=(l(0),l(1802)),r=["components"],a={title:"Taro.chooseImage(option)",sidebar_label:"chooseImage"},i={unversionedId:"apis/media/image/chooseImage",id:"version-2.x/apis/media/image/chooseImage",isDocsHomePage:!1,title:"Taro.chooseImage(option)",description:"\u4ece\u672c\u5730\u76f8\u518c\u9009\u62e9\u56fe\u7247\u6216\u4f7f\u7528\u76f8\u673a\u62cd\u7167\u3002",source:"@site/versioned_docs/version-2.x/apis/media/image/chooseImage.md",slug:"/apis/media/image/chooseImage",permalink:"/taro/docs/2.x/apis/media/image/chooseImage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/image/chooseImage.md",version:"2.x",sidebar_label:"chooseImage",sidebar:"version-2.x/API",previous:{title:"Taro.chooseMessageFile(option)",permalink:"/taro/docs/2.x/apis/media/image/chooseMessageFile"},next:{title:"Taro.saveVideoToPhotosAlbum(option)",permalink:"/taro/docs/2.x/apis/media/video/saveVideoToPhotosAlbum"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"sizeType",id:"sizetype",children:[]},{value:"sourceType",id:"sourcetype",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ImageFile",id:"imagefile",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],o={rightToc:u};function O(e){var t=e.components,l=Object(n.a)(e,r);return Object(c.b)("wrapper",Object(b.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4ece\u672c\u5730\u76f8\u518c\u9009\u62e9\u56fe\u7247\u6216\u4f7f\u7528\u76f8\u673a\u62cd\u7167\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"count"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u56fe\u7247\u5f20\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"sizeType"),Object(c.b)("td",null,Object(c.b)("code",null,'("original" | "compressed")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6240\u9009\u7684\u56fe\u7247\u7684\u5c3a\u5bf8")),Object(c.b)("tr",null,Object(c.b)("td",null,"sourceType"),Object(c.b)("td",null,Object(c.b)("code",null,'("album" | "camera" | "user" | "environment")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9009\u62e9\u56fe\u7247\u7684\u6765\u6e90")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"sizetype"},"sizeType"),Object(c.b)("p",null,"\u56fe\u7247\u7684\u5c3a\u5bf8"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"original"),Object(c.b)("td",null,"\u539f\u56fe")),Object(c.b)("tr",null,Object(c.b)("td",null,"compressed"),Object(c.b)("td",null,"compressed")))),Object(c.b)("h3",{id:"sourcetype"},"sourceType"),Object(c.b)("p",null,"\u56fe\u7247\u7684\u6765\u6e90"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"album"),Object(c.b)("td",null,"\u4ece\u76f8\u518c\u9009\u56fe")),Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,"\u4f7f\u7528\u76f8\u673a")),Object(c.b)("tr",null,Object(c.b)("td",null,"user"),Object(c.b)("td",null,"\u4f7f\u7528\u524d\u7f6e\u6444\u50cf\u5934(\u4ec5H5\u7eaf\u6d4f\u89c8\u5668\u4f7f\u7528)")),Object(c.b)("tr",null,Object(c.b)("td",null,"environment"),Object(c.b)("td",null,"\u4f7f\u7528\u540e\u7f6e\u6444\u50cf\u5934(\u4ec5H5\u7eaf\u6d4f\u89c8\u5668)")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempFilePaths"),Object(c.b)("td",null,Object(c.b)("code",null,"string[]")),Object(c.b)("td",null,"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u5217\u8868")),Object(c.b)("tr",null,Object(c.b)("td",null,"tempFiles"),Object(c.b)("td",null,Object(c.b)("code",null,"ImageFile[]")),Object(c.b)("td",null,"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"imagefile"},"ImageFile"),Object(c.b)("p",null,"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"path"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6587\u4ef6\u7684 MIME \u7c7b\u578b",Object(c.b)("br",null),"API \u652f\u6301\u5ea6: h5")),Object(c.b)("tr",null,Object(c.b)("td",null,"originalFileObj"),Object(c.b)("td",null,Object(c.b)("code",null,"File")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u539f\u59cb\u7684\u6d4f\u89c8\u5668 File \u5bf9\u8c61",Object(c.b)("br",null),"API \u652f\u6301\u5ea6: h5")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ImageFile.type"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ImageFile.originalFileObj"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"})))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseImage({\n  count: 1, // \u9ed8\u8ba49\n  sizeType: ['original', 'compressed'], // \u53ef\u4ee5\u6307\u5b9a\u662f\u539f\u56fe\u8fd8\u662f\u538b\u7f29\u56fe\uff0c\u9ed8\u8ba4\u4e8c\u8005\u90fd\u6709\n  sourceType: ['album', 'camera'], // \u53ef\u4ee5\u6307\u5b9a\u6765\u6e90\u662f\u76f8\u518c\u8fd8\u662f\u76f8\u673a\uff0c\u9ed8\u8ba4\u4e8c\u8005\u90fd\u6709\uff0c\u5728H5\u6d4f\u89c8\u5668\u7aef\u652f\u6301\u4f7f\u7528 `user` \u548c `environment`\u5206\u522b\u6307\u5b9a\u4e3a\u524d\u540e\u6444\u50cf\u5934\n  success: function (res) {\n    // \u8fd4\u56de\u9009\u5b9a\u7167\u7247\u7684\u672c\u5730\u6587\u4ef6\u8def\u5f84\u5217\u8868\uff0ctempFilePath\u53ef\u4ee5\u4f5c\u4e3aimg\u6807\u7b7e\u7684src\u5c5e\u6027\u663e\u793a\u56fe\u7247\n    var tempFilePaths = res.tempFilePaths\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Taro.chooseImage"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);