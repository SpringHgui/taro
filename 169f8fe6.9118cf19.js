(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1802:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(1802)),c=["components"],l={title:"Label",sidebar_label:"Label"},b={unversionedId:"components/forms/label",id:"version-2.x/components/forms/label",isDocsHomePage:!1,title:"Label",description:"\u7528\u6765\u6539\u8fdb\u8868\u5355\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\u3002",source:"@site/versioned_docs/version-2.x/components/forms/label.md",slug:"/components/forms/label",permalink:"/taro/docs/2.x/components/forms/label",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/forms/label.md",version:"2.x",sidebar_label:"Label",sidebar:"version-2.x/components",previous:{title:"Input",permalink:"/taro/docs/2.x/components/forms/input"},next:{title:"Picker",permalink:"/taro/docs/2.x/components/forms/picker"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"LabelProps",id:"labelprops",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u7528\u6765\u6539\u8fdb\u8868\u5355\u7ec4\u4ef6\u7684\u53ef\u7528\u6027\u3002"),Object(o.b)("p",null,"\u4f7f\u7528for\u5c5e\u6027\u627e\u5230\u5bf9\u5e94\u7684id\uff0c\u6216\u8005\u5c06\u63a7\u4ef6\u653e\u5728\u8be5\u6807\u7b7e\u4e0b\uff0c\u5f53\u70b9\u51fb\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684\u63a7\u4ef6\u3002 for\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5185\u90e8\u63a7\u4ef6\uff0c\u5185\u90e8\u6709\u591a\u4e2a\u63a7\u4ef6\u7684\u65f6\u5019\u9ed8\u8ba4\u89e6\u53d1\u7b2c\u4e00\u4e2a\u63a7\u4ef6\u3002 \u76ee\u524d\u53ef\u4ee5\u7ed1\u5b9a\u7684\u63a7\u4ef6\u6709\uff1abutton, checkbox, radio, switch\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/label.html"},"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<LabelProps>\n")),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n\n  render () {\n    return (\n      <RadioGroup>\n        <Label className='example-body__label' for='1' key='1'>\n          <Radio value='USA'>USA</Radio>\n        </Label>\n        <Label className='example-body__label' for='2' key='2'>\n          <Radio value='CHN' checked>\n          CHN\n          </Radio>\n        </Label>\n      </RadioGroup>\n    )\n  }\n}\n")),Object(o.b)("h2",{id:"labelprops"},"LabelProps"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"for"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u7ed1\u5b9a\u63a7\u4ef6\u7684 id")))),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Label"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);