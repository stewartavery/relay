(self.webpackChunk=self.webpackChunk||[]).push([[90262],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,p=m["".concat(o,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(44256),i=n(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var s=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},d=function(){return i.createElement(l,null,i.createElement(o,null),i.createElement(s,null))},c=function(){return i.createElement(l,null,i.createElement(s,null))};const u=function(){return(0,a.fbContent)({internal:i.createElement(d,null),external:i.createElement(c,null)})}},94492:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>u,toc:()=>m,default:()=>f});var a,i=n(22122),r=n(19756),l=(n(67294),n(3905)),s=n(68629),o=(n(44256),["components"]),d={id:"filling-in-missing-data",title:"Filling in Missing Data (Missing Field Handlers)",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",description:"Relay guide to filling in missing data",keywords:["missing field handler","missing data"]},c=void 0,u={unversionedId:"guided-tour/reusing-cached-data/filling-in-missing-data",id:"version-v12.0.0/guided-tour/reusing-cached-data/filling-in-missing-data",isDocsHomePage:!1,title:"Filling in Missing Data (Missing Field Handlers)",description:"Relay guide to filling in missing data",source:"@site/versioned_docs/version-v12.0.0/guided-tour/reusing-cached-data/filling-in-missing-data.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",permalink:"/docs/guided-tour/reusing-cached-data/filling-in-missing-data/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/reusing-cached-data/filling-in-missing-data.md",version:"v12.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1632763431,formattedLastUpdatedAt:"9/27/2021",frontMatter:{id:"filling-in-missing-data",title:"Filling in Missing Data (Missing Field Handlers)",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",description:"Relay guide to filling in missing data",keywords:["missing field handler","missing data"]},sidebar:"version-v12.0.0/docs",previous:{title:"Rendering Partially Cached Data",permalink:"/docs/guided-tour/reusing-cached-data/rendering-partially-cached-data/"},next:{title:"Introduction",permalink:"/docs/guided-tour/refetching/"}},m=[],h=(a="FbMissingFieldHandlers",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),p={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the previous section we covered how to reuse data that is fully or partially cached, however there are cases in which Relay can't automatically tell that it can reuse some of the data it already has from other queries in order to fulfill a specific query. Specifically, Relay knows how to reuse data that is cached for a query that has been fetched before; that is, if you fetch the exact same query twice, Relay will know that it has the data cached for that query the second time it tries to evaluate it."),(0,l.kt)("p",null,"However, when using different queries, there might still be cases where different queries point to the same data, which we'd want to be able to reuse. For example, imagine the following two queries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Query 1\n\nquery UserQuery {\n  user(id: 4) {\n    name\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Query 2\n\nquery NodeQuery {\n  node(id: 4) {\n    ... on User {\n      name\n    }\n  }\n}\n")),(0,l.kt)("p",null,"These two queries are different, but reference the exact same data. Ideally, if one of the queries was already cached in the store, we should be able to reuse that data when rendering the other query. However, Relay doesn't have this knowledge by default, so we need to configure it to encode the knowledge that a ",(0,l.kt)("inlineCode",{parentName:"p"},"node(id: 4)")," ",(0,l.kt)("em",{parentName:"p"},'"is the same as"')," ",(0,l.kt)("inlineCode",{parentName:"p"},"user(id: 4)"),"."),(0,l.kt)("p",null,"To do so, we can provide ",(0,l.kt)("inlineCode",{parentName:"p"},"missingFieldHandlers")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RelayEnvironment")," which specifies this knowledge."),(0,l.kt)(h,{mdxType:"FbMissingFieldHandlers"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const {ROOT_TYPE, Environment} = require('relay-runtime');\n\nconst missingFieldHandlers = [\n  {\n    handle(field, record, argValues): ?string {\n      if (\n        record != null &&\n        record.__typename === ROOT_TYPE &&\n        field.name === 'user' &&\n        argValues.hasOwnProperty('id')\n      ) {\n        // If field is user(id: $id), look up the record by the value of $id\n        return argValues.id;\n      }\n      if (\n        record != null &&\n        record.__typename === ROOT_TYPE &&\n        field.name === 'story' &&\n        argValues.hasOwnProperty('story_id')\n      ) {\n        // If field is story(story_id: $story_id), look up the record by the\n        // value of $story_id.\n        return argValues.story_id;\n      }\n      return null;\n    },\n    kind: 'linked',\n  },\n];\n\nconst environment = new Environment({/*...*/, missingFieldHandlers});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"missingFieldHandlers")," is an array of ",(0,l.kt)("em",{parentName:"li"},"handlers"),". Each handler must specify a ",(0,l.kt)("inlineCode",{parentName:"li"},"handle")," function, and the kind of missing fields it knows how to handle. The 2 main types of fields that you'd want to handle are:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"'scalar'"),": This represents a field that contains a scalar value, for example a number or a string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"'linked'"),": This represents a field that references another object, i.e. not a scalar."))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"handle")," function takes the field that is missing, the record that field belongs to, and any arguments that were passed to the field in the current execution of the query.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When handling a ",(0,l.kt)("em",{parentName:"li"},"'scalar'")," field, the handle function should return a scalar value, in order to use as the value for a missing field"),(0,l.kt)("li",{parentName:"ul"},"When handling a ",(0,l.kt)("em",{parentName:"li"},"'linked'")," field",(0,l.kt)("em",{parentName:"li"},",")," the handle function should return an ",(0,l.kt)("em",{parentName:"li"},"ID"),", referencing another object in the store that should be use in place of the missing field. **"))),(0,l.kt)("li",{parentName:"ul"},"As Relay attempts to fulfill a query from the local cache, whenever it detects any missing data, it will run any of the provided missing field handlers that match the field type before definitively declaring that the data is missing.")),(0,l.kt)(s.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);