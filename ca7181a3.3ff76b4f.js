(window.webpackJsonp=window.webpackJsonp||[]).push([[1397],{1465:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(1802)),l=n(1806),o=n(1807),i=(n(1809),["components"]),b={title:"\u5165\u53e3\u7ec4\u4ef6"},p={unversionedId:"react-entry",id:"react-entry",isDocsHomePage:!1,title:"\u5165\u53e3\u7ec4\u4ef6",description:"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u9700\u8981\u4e00\u4e2a\u5165\u53e3\u7ec4\u4ef6\uff08React \u7ec4\u4ef6\uff09\u7528\u6765\u6ce8\u518c\u5e94\u7528\u3002\u5165\u53e3\u6587\u4ef6\u9ed8\u8ba4\u662f src \u76ee\u5f55\u4e0b\u7684 app.js\u3002",source:"@site/docs/react-entry.mdx",slug:"/react-entry",permalink:"/taro/docs/next/react-entry",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/react-entry.mdx",version:"current",sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/taro/docs/next/react-overall"},next:{title:"\u9875\u9762\u7ec4\u4ef6",permalink:"/taro/docs/next/react-page"}},u=[{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",children:[]},{value:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e",id:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e",children:[]},{value:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5",children:[{value:"onLaunch (options)",id:"onlaunch-options",children:[]},{value:"componentDidShow (options)",id:"componentdidshow-options",children:[]},{value:"componentDidHide ()",id:"componentdidhide-",children:[]},{value:"onPageNotFound (Object)",id:"onpagenotfound-object",children:[]}]}],s={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,i);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6bcf\u4e00\u4e2a Taro \u5e94\u7528\u90fd\u9700\u8981\u4e00\u4e2a\u5165\u53e3\u7ec4\u4ef6\uff08React \u7ec4\u4ef6\uff09\u7528\u6765\u6ce8\u518c\u5e94\u7528\u3002\u5165\u53e3\u6587\u4ef6\u9ed8\u8ba4\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"app.js"),"\u3002"),Object(c.b)("p",null,"\u5728\u5165\u53e3\u7ec4\u4ef6\u4e2d\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u72b6\u6001\u6216\u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u5165\u53e3\u5b9e\u4f8b\u7684\u751f\u547d\u5468\u671f\u3002"),Object(c.b)("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),Object(c.b)(l.a,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"class",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'},"import React, { Component } from 'react'\n\n// \u5047\u8bbe\u6211\u4eec\u8981\u4f7f\u7528 Redux\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// \u5168\u5c40\u6837\u5f0f\nimport './app.css'\n\nconst store = configStore()\n\nclass App extends Component {\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 React \u751f\u547d\u5468\u671f\u65b9\u6cd5\n  componentDidMount () {}\n\n  // \u5bf9\u5e94 onLaunch\n  onLaunch () {}\n\n  // \u5bf9\u5e94 onShow\n  componentDidShow () {}\n\n  // \u5bf9\u5e94 onHide\n  componentDidHide () {}\n\n  render () {\n    // \u5728\u5165\u53e3\u7ec4\u4ef6\u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55\u5185\u5bb9\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u7c7b\u4f3c\u4e8e\u72b6\u6001\u7ba1\u7406\u7684\u4e8b\u60c5\n    return (\n      <Provider store={store}>\n        {/* this.props.children \u662f\u5c06\u8981\u88ab\u6e32\u67d3\u7684\u9875\u9762 */}\n        {this.props.children}\n      </Provider>\n    )\n  }\n}\n\nexport default App\n"))),Object(c.b)(o.a,{value:"functional",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'},"import React, { useEffect } from 'react'\n\n// Taro \u989d\u5916\u6dfb\u52a0\u7684 hooks \u8981\u4ece '@tarojs/taro' \u4e2d\u5f15\u5165\nimport { useDidShow, useDidHide } from '@tarojs/taro'\n\n// \u5047\u8bbe\u6211\u4eec\u8981\u4f7f\u7528 Redux\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// \u5168\u5c40\u6837\u5f0f\nimport './app.css'\n\nconst store = configStore()\n\nfunction App (props) {\n  // \u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684 React Hooks\n  useEffect(() => {})\n\n  // \u5bf9\u5e94 onShow\n  useDidShow(() => {})\n\n  // \u5bf9\u5e94 onHide\n  useDidHide(() => {})\n\n  return (\n    // \u5728\u5165\u53e3\u7ec4\u4ef6\u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55\u5185\u5bb9\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u7c7b\u4f3c\u4e8e\u72b6\u6001\u7ba1\u7406\u7684\u4e8b\u60c5\n    <Provider store={store}>\n      {/* props.children \u662f\u5c06\u8981\u88ab\u6e32\u67d3\u7684\u9875\u9762 */}\n      {props.children}\n    </Provider>\n  )\n}\n\nexport default App\n")))),Object(c.b)("h2",{id:"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e"},"\u5165\u53e3\u7ec4\u4ef6\u914d\u7f6e"),Object(c.b)("p",null,"\u8bf7\u53c2\u8003 ",Object(c.b)("a",{parentName:"p",href:"./app-config"},"\u5168\u5c40\u914d\u7f6e")),Object(c.b)("h2",{id:"\u751f\u547d\u5468\u671f\u65b9\u6cd5"},"\u751f\u547d\u5468\u671f\u65b9\u6cd5"),Object(c.b)("p",null,"\u5165\u53e3\u7ec4\u4ef6\u9664\u4e86\u652f\u6301 React \u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5916\uff0c\u8fd8\u6839\u636e\u5c0f\u7a0b\u5e8f\u7684\u6807\u51c6\uff0c\u989d\u5916\u652f\u6301\u4ee5\u4e0b\u751f\u547d\u5468\u671f\uff1a"),Object(c.b)("h3",{id:"onlaunch-options"},"onLaunch (options)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94 app \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"onLaunch"),"\u3002")),Object(c.b)("p",null,"\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee ",Object(c.b)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u6216\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u7a0b\u5e8f\u521d\u59cb\u5316\u53c2\u6570\u3002"),Object(c.b)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h5",{id:"options"},"options"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),Object(c.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(c.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"path"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u8def\u5f84")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"scene"),Object(c.b)("td",{parentName:"tr",align:null},"number"),Object(c.b)("td",{parentName:"tr",align:null},"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684\u573a\u666f\u503c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"query"),Object(c.b)("td",{parentName:"tr",align:null},"Object"),Object(c.b)("td",{parentName:"tr",align:null},"\u542f\u52a8\u5c0f\u7a0b\u5e8f\u7684 query \u53c2\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"shareTicket"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"shareTicket\uff0c\u8be6\u89c1\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"referrerInfo"),Object(c.b)("td",{parentName:"tr",align:null},"Object"),Object(c.b)("td",{parentName:"tr",align:null},"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de {}")))),Object(c.b)("h5",{id:"optionsreferrerinfo"},"options.referrerInfo"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),Object(c.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(c.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"appId"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"\u6765\u6e90\u5c0f\u7a0b\u5e8f\uff0c\u6216\u8005\u516c\u4f17\u53f7\uff08\u5fae\u4fe1\u4e2d\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"extraData"),Object(c.b)("td",{parentName:"tr",align:null},"Object"),Object(c.b)("td",{parentName:"tr",align:null},"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0c\u5fae\u4fe1\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u5728scene=1037\u62161038\u65f6\u652f\u6301")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"sourceServiceId"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"\u6765\u6e90\u63d2\u4ef6\uff0c\u5f53\u5904\u4e8e\u63d2\u4ef6\u8fd0\u884c\u6a21\u5f0f\u65f6\u53ef\u89c1")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"options \u53c2\u6570\u7684\u5b57\u6bb5\u5728\u4e0d\u540c\u5c0f\u7a0b\u5e8f\u4e2d\u53ef\u80fd\u5b58\u5728\u5dee\u5f02\uff0c\u5982\uff1a"),Object(c.b)("p",{parentName:"blockquote"},"\u573a\u666f\u503c scene\uff0c\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4e2d\u5b58\u5728\u533a\u522b\uff0c\u8bf7\u5206\u522b\u53c2\u8003 ",Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6587\u6863")," \u548c ",Object(c.b)("a",{parentName:"p",href:"https://smartprogram.baidu.com/docs/data/scene/"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u6587\u6863"))),Object(c.b)("h3",{id:"componentdidshow-options"},"componentDidShow (options)"),Object(c.b)("p",null,"\u7a0b\u5e8f\u542f\u52a8\uff0c\u6216\u5207\u524d\u53f0\u65f6\u89e6\u53d1\u3002"),Object(c.b)("p",null,"\u548c ",Object(c.b)("inlineCode",{parentName:"p"},"onLaunch")," \u751f\u547d\u5468\u671f\u4e00\u6837\uff0c\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee ",Object(c.b)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u6216\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u7a0b\u5e8f\u521d\u59cb\u5316\u53c2\u6570\u3002"),Object(c.b)("p",null,"\u53c2\u6570\u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"onLaunch")," \u4e2d\u83b7\u53d6\u7684\u57fa\u672c\u4e00\u81f4\uff0c\u4f46",Object(c.b)("strong",{parentName:"p"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),"\u4e2d\u8865\u5145\u4e24\u4e2a\u53c2\u6570\u5982\u4e0b\uff1a"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),Object(c.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(c.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"entryType"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"\u5c55\u73b0\u7684\u6765\u6e90\u6807\u8bc6\uff0c\u53d6\u503c\u4e3a user/ schema /sys :",Object(c.b)("br",null),"user\uff1a\u8868\u793a\u901a\u8fc7home\u524d\u540e",Object(c.b)("br",null),"\u5207\u6362\u6216\u89e3\u9501\u5c4f\u5e55\u7b49\u65b9\u5f0f\u8c03\u8d77\uff1b",Object(c.b)("br",null),"schema\uff1a\u8868\u793a\u901a\u8fc7\u534f\u8bae\u8c03\u8d77;",Object(c.b)("br",null),"sys\uff1a\u5176\u5b83")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"appURL"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"\u5c55\u73b0\u65f6\u7684\u8c03\u8d77\u534f\u8bae\uff0c\u4ec5\u5f53entryType\u503c\u4e3a schema \u65f6\u5b58\u5728")))),Object(c.b)("h3",{id:"componentdidhide-"},"componentDidHide ()"),Object(c.b)("p",null,"\u7a0b\u5e8f\u5207\u540e\u53f0\u65f6\u89e6\u53d1\u3002"),Object(c.b)("h3",{id:"onpagenotfound-object"},"onPageNotFound (Object)"),Object(c.b)("p",null,"\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u65f6\u89e6\u53d1\u3002"),Object(c.b)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),Object(c.b)("h5",{id:"object"},"Object"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),Object(c.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(c.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"path"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"\u4e0d\u5b58\u5728\u9875\u9762\u7684\u8def\u5f84")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"query"),Object(c.b)("td",{parentName:"tr",align:null},"Object"),Object(c.b)("td",{parentName:"tr",align:null},"\u6253\u5f00\u4e0d\u5b58\u5728\u9875\u9762\u7684 query \u53c2\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"isEntryPage"),Object(c.b)("td",{parentName:"tr",align:null},"boolean"),Object(c.b)("td",{parentName:"tr",align:null},"\u662f\u5426\u672c\u6b21\u542f\u52a8\u7684\u9996\u4e2a\u9875\u9762\uff08\u4f8b\u5982\u4ece\u5206\u4eab\u7b49\u5165\u53e3\u8fdb\u6765\uff0c\u9996\u4e2a\u9875\u9762\u662f\u5f00\u53d1\u8005\u914d\u7f6e\u7684\u5206\u4eab\u9875\u9762\uff09")))))}d.isMDXComponent=!0},1802:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||c;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1803:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1804:function(e,t,n){"use strict";var a=n(0),r=n(1805);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1805:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1806:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1804),l=n(1803),o=n(53),i=n.n(o),b=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.children,u=e.defaultValue,s=e.values,d=e.groupId,m=e.className,h=Object(c.a)(),j=h.tabGroupChoices,O=h.setTabGroupChoices,v=Object(a.useState)(u),f=v[0],g=v[1];if(null!=d){var N=j[d];null!=N&&N!==f&&s.some((function(e){return e.value===N}))&&g(N)}var y=function(e){g(e),null!=d&&O(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(o.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},1807:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1809:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),c=function(){return r.a.createElement("span",{className:"footer_link_connect_wrap"},r.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.a.createElement("span",{className:"wechat_qrcode_icon"},r.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},r.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),r.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),r.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),r.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),r.a.createElement("span",{className:"footer_link_wechat_img inline"},r.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))};function l(){return r.a.createElement("span",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.a.createElement("defs",null,r.a.createElement("style",null)),r.a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.a.createElement("span",{style:{color:o}},"Vue"))}var o="#4fc08d";function i(){return r.a.createElement("span",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.a.createElement("defs",null,r.a.createElement("style",null)),r.a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.a.createElement("span",{style:{color:"#61dafb"}},"React"))}}}]);