"use strict";(self.webpackChunktechdocs=self.webpackChunktechdocs||[]).push([[5661],{4287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"outlines/devtools/dataformats/json/json-overview/json-schema","title":"Json: Schema","description":"What is JSON Schema?","source":"@site/docs/outlines/015-devtools/02-dataformats/001-json/json-overview/02-json-schema.md","sourceDirName":"outlines/015-devtools/02-dataformats/001-json/json-overview","slug":"/json-schema","permalink":"/docs/json-schema","draft":false,"unlisted":false,"editUrl":"https://github.com/AliSafari-IT/asafarim/edit/main/techdocs/docs/outlines/015-devtools/02-dataformats/001-json/json-overview/02-json-schema.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Json: Schema","slug":"/json-schema"},"sidebar":"tutorialSidebar","previous":{"title":"Json: Intro","permalink":"/docs/json-overview"},"next":{"title":"Schema-Driven Development","permalink":"/docs/outlines/devtools/dataformats/json/json-overview/sch-dev"}}');var s=t(6870),r=t(5569);const i={sidebar_position:2,title:"Json: Schema",slug:"/json-schema"},a=void 0,c={},d=[{value:"What is JSON Schema?",id:"what-is-json-schema",level:2},{value:"Why JSON Schema?",id:"why-json-schema",level:2},{value:"Specify required properties",id:"specify-required-properties",level:2},{value:"Pros of JSON Schema",id:"pros-of-json-schema",level:2},{value:"Root schema, subschema",id:"root-schema-subschema",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"what-is-json-schema",children:"What is JSON Schema?"}),"\n",(0,s.jsx)(n.p,{children:"Json is the most popular format for exchanging data on the web.\r\nThe main use of JSON schema is to describe the structure and validation constraints of your JSON documents."}),"\n",(0,s.jsx)(n.h2,{id:"why-json-schema",children:"Why JSON Schema?"}),"\n",(0,s.jsx)(n.p,{children:"It helps you specify the objects and what values are valid inside the object\u2019s properties. JSON schema is useful in offering clear, human-readable, and machine-readable documentation."}),"\n",(0,s.jsx)(n.h2,{id:"specify-required-properties",children:"Specify required properties"}),"\n",(0,s.jsx)(n.p,{children:"To set an object to be required we can do like this:\r\nFor example in products, we want the property items to be required in our data."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We go to ",(0,s.jsx)(n.code,{children:"schema.js"})," file, then add the required in the form of array as follows in this position:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title=" JSON containing schema for product data with required properties"',children:'var productSchema = {\r\n  "$schema": "http://json-schema.org/draft-04/schema#",\r\n  "id": "http://example.com/schemas/products.json",\r\n  "title": "h+ sport products",\r\n  "description": "schema for h+ sport product data",\r\n  "type": "object",\r\n  "properties": {\r\n    "products": {\r\n      "type": "array",\r\n      "items": {\r\n        "type": "object",\r\n        "properties": {\r\n          "name": {\r\n            "type": "string"\r\n          },\r\n          "image": {\r\n            "type": "string"\r\n          },\r\n          "alt": {\r\n            "type": "string"\r\n          }\r\n        },\r\n        "required": [\r\n          "image",\r\n          "alt",\r\n          "name"\r\n        ]\r\n      }\r\n    }\r\n  },\r\n  "required": [\r\n    "products"\r\n  ]\r\n};\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Focusing the required properties",type:"tip",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"required": [\r\n          "image",\r\n          "alt",\r\n          "name"\r\n        ]\n'})})}),"\n",(0,s.jsx)(n.h2,{id:"pros-of-json-schema",children:"Pros of JSON Schema"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"generating clear, human/machine readable documentation,"}),"\n",(0,s.jsx)(n.li,{children:"describing the structure of data in order to ease the data structure validation"}),"\n",(0,s.jsx)(n.li,{children:"applications made with the coding of JSON are browser compatible"}),"\n",(0,s.jsx)(n.li,{children:"parsing functions: functions are not allowed in JSON. So, when needed to include a function, it can be written as a string. Then later, it can be converted back into a function:"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Converting a string into a function in json",type:"tip",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const text = \'{"name":"John", "age":"function () {return 30;}", "city":"New York"}\';\r\nconst obj = JSON.parse(text);\r\nobj.age = eval("(" + obj.age + ")");\r\n\r\ndocument.getElementById("demo").innerHTML = obj.name + ", " + obj.age(); \n'})})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["You should avoid using functions in JSON, the functions will lose their scope, and you would have to use ",(0,s.jsx)(n.code,{children:"eval()"})," to convert them back into functions."]})}),"\n",(0,s.jsx)(n.h2,{id:"root-schema-subschema",children:"Root schema, subschema"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5569:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6326);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);