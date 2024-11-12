"use strict";(self.webpackChunktechdocs=self.webpackChunktechdocs||[]).push([[2532],{8211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents","title":"Print directory contents","description":"info","source":"@site/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/01-print-dir-contents.md","sourceDirName":"020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts","slug":"/learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents","permalink":"/docs/learn/cicd-pipelines/azure-devops/yamlscripts/print-dir-contents","draft":false,"unlisted":false,"editUrl":"https://github.com/AliSafari-IT/asafarim/edit/main/techdocs/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/01-print-dir-contents.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Print directory contents"},"sidebar":"tutorialSidebar","previous":{"title":"Azure Pipelines","permalink":"/docs/learn/cicd-pipelines/azure-devops/azure-pipelines"},"next":{"title":"Triggers in YAML pipelines","permalink":"/docs/learn/cicd-pipelines/azure-devops/yamlscripts/triggers"}}');var r=t(6870),s=t(5569);const o={sidebar_position:1,title:"Print directory contents"},c=void 0,a={},p=[{value:"info",id:"info",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"info",children:"info"}),"\n",(0,r.jsx)(n.p,{children:"In this example, the name property is set to 'Print directory contents' for the Bash task. When the pipeline runs, this name will be displayed in the logs and in the pipeline's visual editor."}),"\n",(0,r.jsx)(n.p,{children:"You can modify the name property to set a different name for the task."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-{7}",children:"trigger:\r\n- main\r\n\r\npool:\r\n  vmImage: 'ubuntu-latest'\r\n\r\nsteps:\r\n- name: 'Print directory contents'\r\n  task: Bash@3\r\n  inputs:\r\n    targetType: 'inline'\r\n    script: 'ls ./'\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This will help you locate your files and figure out where you should run your commands."})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5569:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6326);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);