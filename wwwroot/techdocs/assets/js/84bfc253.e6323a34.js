"use strict";(self.webpackChunktechdocs=self.webpackChunktechdocs||[]).push([[3372],{1931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"learn/git/how-to/remove-last-changes","title":"Remove last changes","description":"How to remove changes since last git commit","source":"@site/docs/020-learn/0203-git/how-to/remove-last-changes.md","sourceDirName":"020-learn/0203-git/how-to","slug":"/learn/git/deserialization","permalink":"/docs/learn/git/deserialization","draft":false,"unlisted":false,"editUrl":"https://github.com/AliSafari-IT/asafarim/edit/main/techdocs/docs/020-learn/0203-git/how-to/remove-last-changes.md","tags":[],"version":"current","sidebarPosition":18500,"frontMatter":{"sidebar_position":18500,"title":"Remove last changes","slug":"../deserialization"},"sidebar":"tutorialSidebar","previous":{"title":"Overwriting local with remote repo","permalink":"/docs/learn/git/overwriting-local-repo"},"next":{"title":"Rollback to a previous state","permalink":"/docs/learn/git/rollback-commit"}}');var r=t(6870),o=t(5569);const s={sidebar_position:18500,title:"Remove last changes",slug:"../deserialization"},l=void 0,c={},a=[{value:"How to remove changes since last git commit",id:"how-to-remove-changes-since-last-git-commit",level:2},{value:"Git-Clean interactive mode",id:"git-clean-interactive-mode",level:2},{value:"Dry run",id:"dry-run",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"how-to-remove-changes-since-last-git-commit",children:"How to remove changes since last git commit"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"git clean"})," deletes all your untracked files/directories permanantly. Backup your whole repository folder before taking the actions."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To clean your local working directory by resetting every part of the repository just to the last committed state, try the command below:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git reset --hard\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then for removing untracked files from the working tree, we use ",(0,r.jsx)(n.code,{children:"git clean"})," command as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clean -fd\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"-d"})," is to let git to recurse into untracked directories and ",(0,r.jsx)(n.code,{children:"-f"}),"is the flag ",(0,r.jsx)(n.code,{children:"--force"}),', allowing you to order Git "Just do it anyway"!']}),"\n",(0,r.jsxs)(n.admonition,{title:"git-clean SYNOPSIS:",type:"tip",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"git clean [-d] [-f] [-i] [-n] [-q] [-e <pattern>] [-x | -X] [--] <path>\u2026\u200b"})}),(0,r.jsxs)(n.p,{children:["If any paths are specified, then ",(0,r.jsx)(n.code,{children:"-d"})," is irrelevant. Hence, when any optional ",(0,r.jsx)(n.code,{children:"<path>..."})," arguments are given, only those paths are being affected."]})]}),"\n",(0,r.jsx)(n.h2,{id:"git-clean-interactive-mode",children:"Git-Clean interactive mode"}),"\n",(0,r.jsxs)(n.p,{children:["using the flag ",(0,r.jsx)(n.code,{children:"--interactive"})," or shortly ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"-i"})}),", takes you into its interactive command loop by showing you what would be done/cleaned interactively."]}),"\n",(0,r.jsx)(n.p,{children:"*** Interactive subcommands ***"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1: clean"}),"\n",(0,r.jsx)(n.li,{children:"2: filter by pattern"}),"\n",(0,r.jsx)(n.li,{children:"3: select by numbers"}),"\n",(0,r.jsx)(n.li,{children:"4: ask each"}),"\n",(0,r.jsx)(n.li,{children:"5: quit"}),"\n",(0,r.jsx)(n.li,{children:"6: help"}),"\n",(0,r.jsxs)(n.li,{children:["What now> 1\r\nIn this mode you will be prompte with ",(0,r.jsx)(n.code,{children:'"What now> "'}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dry-run",children:"Dry run"}),"\n",(0,r.jsxs)(n.p,{children:["In order to removed all untracked files/folders from your working tree such as a settings folder of your IDE, 'dry run' can come to the rescue by using the ",(0,r.jsx)(n.code,{children:"--dry-run"})," flag or shortly ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"-n"})}),". This option will check what the git command is about to do, before actually doing so."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Git clean with dry run to remove any changes occured since last commit"',children:"git clean -d -f -n\n"})}),"\n",(0,r.jsx)(n.p,{children:":::"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5569:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6326);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);