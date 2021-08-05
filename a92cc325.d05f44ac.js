(window.webpackJsonp=window.webpackJsonp||[]).push([[1158],{1225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return j}));var r=n(3),c=n(7),l=(n(0),n(1802)),b=n(1806),a=n(1807),o=["components"],i={title:"Ad",sidebar_label:"Ad"},d={unversionedId:"components/open/ad",id:"version-3.x/components/open/ad",isDocsHomePage:!1,title:"Ad",description:"Banner \u5e7f\u544a",source:"@site/versioned_docs/version-3.x/components/open/ad.md",slug:"/components/open/ad",permalink:"/taro/docs/components/open/ad",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/open/ad.md",version:"3.x",sidebar_label:"Ad",sidebar:"version-3.x/components",previous:{title:"Canvas",permalink:"/taro/docs/components/canvas/canvas"},next:{title:"OfficialAccount",permalink:"/taro/docs/components/open/official-account"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"AdProps",id:"adprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"AdErrCode",id:"aderrcode",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:u};function j(e){var t=e.components,n=Object(c.a)(e,o);return Object(l.b)("wrapper",Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Banner \u5e7f\u544a"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"},"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<AdProps>\n")),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(l.b)(a.a,{value:"React",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <Ad\n        unitId=''\n        adIntervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n"))),Object(l.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ad\n    unit-id=""\n    ad-intervals="60"\n    @load="onLoad"\n    @error="onError"\n    @close="onClose"\n  />\n</template>\n')))),Object(l.b)("h2",{id:"adprops"},"AdProps"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"unitId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u5e7f\u544a\u5355\u5143id\uff0c\u53ef\u5728",Object(l.b)("a",{href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0"),"\u7684\u6d41\u91cf\u4e3b\u6a21\u5757\u65b0\u5efa")),Object(l.b)("tr",null,Object(l.b)("td",null,"adIntervals"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5e7f\u544a\u81ea\u52a8\u5237\u65b0\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u53c2\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e30\uff08\u8be5\u53c2\u6570\u4e0d\u4f20\u5165\u65f6 Banner \u5e7f\u544a\u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"onLoad"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5e7f\u544a\u52a0\u8f7d\u6210\u529f\u7684\u56de\u8c03")),Object(l.b)("tr",null,Object(l.b)("td",null,"onError"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5f53\u5e7f\u544a\u53d1\u751f\u9519\u8bef\u65f6\uff0c\u89e6\u53d1\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u4e8b\u4ef6\u83b7\u53d6\u9519\u8bef\u7801\u53ca\u539f\u56e0\uff0c\u4e8b\u4ef6\u5bf9\u8c61event.detail = ","{errCode: 1002}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onClose"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5e7f\u544a\u5173\u95ed\u7684\u56de\u8c03")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"AdProps.unitId"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"AdProps.adIntervals"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"AdProps.onLoad"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"AdProps.onError"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"AdProps.onClose"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))),Object(l.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errCode"),Object(l.b)("td",null,Object(l.b)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008"))))),Object(l.b)("h3",{id:"aderrcode"},"AdErrCode"),Object(l.b)("p",null,"\u5e7f\u544a\u9519\u8bef\u7801"),Object(l.b)("p",null,"\u9519\u8bef\u7801\u662f\u901a\u8fc7onError\u83b7\u53d6\u5230\u7684\u9519\u8bef\u4fe1\u606f\u3002\u8c03\u8bd5\u671f\u95f4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f02\u5e38\u8fd4\u56de\u6765\u6355\u83b7\u4fe1\u606f\u3002\n\u5728\u5c0f\u7a0b\u5e8f\u53d1\u5e03\u4e0a\u7ebf\u4e4b\u540e\uff0c\u5982\u679c\u9047\u5230\u5f02\u5e38\u95ee\u9898\uff0c\u53ef\u4ee5\u5728",Object(l.b)("a",{parentName:"p",href:"https://mp.weixin.qq.com/"},"\u201c\u8fd0\u7ef4\u4e2d\u5fc3\u201c"),"\u91cc\u9762\u641c\u5bfb\u9519\u8bef\u65e5\u5fd7\uff0c\u8fd8\u53ef\u4ee5\u9488\u5bf9\u5f02\u5e38\u8fd4\u56de\u52a0\u4e0a\u9002\u5f53\u7684\u76d1\u63a7\u4fe1\u606f\u3002"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5f02\u5e38\u60c5\u51b5"),Object(l.b)("th",{style:{textAlign:"center"}},"\u7406\u7531"),Object(l.b)("th",{style:{textAlign:"center"}},"\u89e3\u51b3\u65b9\u6848"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"1000"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u540e\u7aef\u9519\u8bef\u8c03\u7528\u5931\u8d25")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1001"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u53c2\u6570\u9519\u8bef")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u4f7f\u7528\u65b9\u6cd5\u9519\u8bef")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u53ef\u4ee5\u524d\u5f80 developers.weixin.qq.com \u786e\u8ba4\u5177\u4f53\u6559\u7a0b\uff08\u5c0f\u7a0b\u5e8f\u548c\u5c0f\u6e38\u620f\u5206\u522b\u6709\u5404\u81ea\u7684\u6559\u7a0b\uff0c\u53ef\u4ee5\u5728\u9876\u90e8\u9009\u9879\u4e2d\uff0c\u201c\u8bbe\u8ba1\u201d\u4e00\u680f\u7684\u53f3\u4fa7\u8fdb\u884c\u5207\u6362\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1002"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5e7f\u544a\u5355\u5143\u65e0\u6548")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u53ef\u80fd\u662f\u62fc\u5199\u9519\u8bef\u3001\u6216\u8005\u8bef\u7528\u4e86\u5176\u4ed6APP\u7684\u5e7f\u544aID")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8bf7\u91cd\u65b0\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5e7f\u544a\u4f4dID\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1003"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5185\u90e8\u9519\u8bef")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1004"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u65e0\u5408\u9002\u7684\u5e7f\u544a")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5e7f\u544a\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u4f1a\u51fa\u73b0\uff0c\u8fd9\u6b21\u6ca1\u6709\u51fa\u73b0\u53ef\u80fd\u662f\u7531\u4e8e\u8be5\u7528\u6237\u4e0d\u9002\u5408\u6d4f\u89c8\u5e7f\u544a")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5c5e\u4e8e\u6b63\u5e38\u60c5\u51b5\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1005"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u5ba1\u6838\u4e2d")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u6b63\u5728\u88ab\u5ba1\u6838\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1006"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u9a73\u56de")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u5ba1\u6838\u5931\u8d25\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1007"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u5c01\u7981")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5c01\u7981\uff0c\u5c01\u7981\u671f\u95f4\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5c0f\u7a0b\u5e8f\u5e7f\u544a\u5c01\u7981\u72b6\u6001\u3002"))),Object(l.b)("tr",null,Object(l.b)("td",null,"1008"),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u5e7f\u544a\u5355\u5143\u5df2\u5173\u95ed")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8be5\u5e7f\u544a\u4f4d\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5173\u95ed")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u91cd\u65b0\u6253\u5f00\u5bf9\u5e94\u5e7f\u544a\u4f4d\u7684\u5c55\u73b0\u3002"))))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Ad"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))))}j.isMDXComponent=!0},1802:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),d=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(n),j=r,s=u["".concat(b,".").concat(j)]||u[j]||O[j]||l;return n?c.a.createElement(s,a(a({ref:t},i),{},{components:n})):c.a.createElement(s,a({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=j;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,b[1]=a;for(var i=2;i<l;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},1803:function(e,t,n){"use strict";function r(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(c&&(c+=" "),c+=t);return c}},1804:function(e,t,n){"use strict";var r=n(0),c=n(1805);t.a=function(){var e=Object(r.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1805:function(e,t,n){"use strict";var r=n(0),c=Object(r.createContext)(void 0);t.a=c},1806:function(e,t,n){"use strict";var r=n(0),c=n.n(r),l=n(1804),b=n(1803),a=n(53),o=n.n(a),i=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,u=e.defaultValue,O=e.values,j=e.groupId,s=e.className,p=Object(l.a)(),m=p.tabGroupChoices,g=p.setTabGroupChoices,f=Object(r.useState)(u),y=f[0],v=f[1];if(null!=j){var h=m[j];null!=h&&h!==y&&O.some((function(e){return e.value===h}))&&v(h)}var x=function(e){v(e),null!=j&&g(j,e)},N=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},s)},O.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(r.cloneElement)(a.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},1807:function(e,t,n){"use strict";var r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);