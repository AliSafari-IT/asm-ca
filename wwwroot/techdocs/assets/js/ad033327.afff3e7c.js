"use strict";(self.webpackChunktechdocs=self.webpackChunktechdocs||[]).push([[9888],{2638:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"learn/git/overview/fetch-pull","title":"Git Fetch vs Git Pull","description":"git fetch vs git pull","source":"@site/docs/020-learn/0203-git/overview/fetch-pull.md","sourceDirName":"020-learn/0203-git/overview","slug":"/learn/git/fetchpull","permalink":"/docs/learn/git/fetchpull","draft":false,"unlisted":false,"editUrl":"https://github.com/AliSafari-IT/asafarim/edit/main/techdocs/docs/020-learn/0203-git/overview/fetch-pull.md","tags":[],"version":"current","sidebarPosition":6500,"frontMatter":{"sidebar_position":6500,"title":"Git Fetch vs Git Pull","slug":"../fetchpull"},"sidebar":"tutorialSidebar","previous":{"title":"What is GIT","permalink":"/docs/learn/git"},"next":{"title":"Overwriting local with remote repo","permalink":"/docs/learn/git/overwriting-local-repo"}}');var n=i(6870),r=i(5569);const l={sidebar_position:6500,title:"Git Fetch vs Git Pull",slug:"../fetchpull"},s=void 0,c={},a=[{value:"<code>git fetch</code> vs <code>git pull</code>",id:"git-fetch-vs-git-pull",level:2}];function h(e){const t={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h2,{id:"git-fetch-vs-git-pull",children:[(0,n.jsx)(t.code,{children:"git fetch"})," vs ",(0,n.jsx)(t.code,{children:"git pull"})]}),"\n",(0,n.jsx)(t.p,{children:"From the Git documentation:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["In its default mode, git pull is shorthand for ",(0,n.jsx)(t.em,{children:"git fetch"})," followed by ",(0,n.jsx)(t.em,{children:"git merge FETCH_HEAD"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When using ",(0,n.jsx)(t.code,{children:"pull"}),", git aims at ",(0,n.jsx)(t.strong,{children:"merging"}),". Thus Git will merge any pulled commits into the involved branch. This operation is performed without giving you the chance to review the changes initially."]}),"\n",(0,n.jsxs)(t.p,{children:["But when you ",(0,n.jsx)(t.code,{children:"fetch"}),", git saves every commit from the remote branch that are not yet in your local repo. Nonetheless, ",(0,n.jsx)(t.code,{children:"fetch"})," operation does not merge them with your active branch \u2192 it separates them from your local development. This is mainly useful if you need to update your repository without updating your files. Hence, to incorporate the commits by updating your local files within your current branch, you are required to use ",(0,n.jsx)(t.code,{children:"merge"})," after that ",(0,n.jsx)(t.em,{children:"git fetch"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5569:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>s});var o=i(6326);const n={},r=o.createContext(n);function l(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);