"use strict";(self.webpackChunktechdocs=self.webpackChunktechdocs||[]).push([[9147],{3651:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"learn/cicd-pipelines/azure-devops/yamlscripts/reuse-template","title":"Re-use YAML templates","description":"How to reuse a YAML template in Azure DevOps","source":"@site/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/04-reuse-template.md","sourceDirName":"020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts","slug":"/learn/cicd-pipelines/azure-devops/yamlscripts/reuse-template","permalink":"/docs/learn/cicd-pipelines/azure-devops/yamlscripts/reuse-template","draft":false,"unlisted":false,"editUrl":"https://github.com/AliSafari-IT/asafarim/edit/main/techdocs/docs/020-learn/0204-cicd-pipelines/azure-devops/0100-yamlscripts/04-reuse-template.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Re-use YAML templates"},"sidebar":"tutorialSidebar","previous":{"title":"YAML templates","permalink":"/docs/learn/cicd-pipelines/azure-devops/yamlscripts/Yaml-templates"},"next":{"title":"Agent in YAML pipeline","permalink":"/docs/learn/cicd-pipelines/azure-devops/yamlscripts/agent"}}');var n=s(6870),r=s(5569);const a={sidebar_position:4,title:"Re-use YAML templates"},o=void 0,l={},p=[{value:"How to reuse a YAML template in Azure DevOps",id:"how-to-reuse-a-yaml-template-in-azure-devops",level:2},{value:"1.  Create a YAML template file",id:"1--create-a-yaml-template-file",level:3},{value:"2.  Use the YAML template in a pipeline",id:"2--use-the-yaml-template-in-a-pipeline",level:3},{value:"YAML templates across Azure DevOps projects",id:"yaml-templates-across-azure-devops-projects",level:2},{value:"1. Create a YAML template in a Git repository",id:"1-create-a-yaml-template-in-a-git-repository",level:3},{value:"2. Reference the YAML template in pipelines",id:"2-reference-the-yaml-template-in-pipelines",level:3},{value:"3. Grant permission to access the Git repository",id:"3-grant-permission-to-access-the-git-repository",level:3}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"how-to-reuse-a-yaml-template-in-azure-devops",children:"How to reuse a YAML template in Azure DevOps"}),"\n",(0,n.jsx)(t.p,{children:"Follow the example below:"}),"\n",(0,n.jsx)(t.h3,{id:"1--create-a-yaml-template-file",children:"1.  Create a YAML template file"}),"\n",(0,n.jsx)(t.p,{children:"Let's say you want to create a reusable template for building and testing a Node.js application. You can create a YAML file called nodejs-build-test.yml with the following contents:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# nodejs-build-test.yml\r\n\r\nparameters:\r\n  nodeVersion: string\r\n\r\njobs:\r\n  - job: BuildAndTest\r\n    pool:\r\n      vmImage: 'ubuntu-latest'\r\n    steps:\r\n    - task: NodeTool@0\r\n      inputs:\r\n        versionSpec: ${{ parameters.nodeVersion }}\r\n      displayName: 'Install Node.js'\r\n    - script: npm install\r\n      displayName: 'Install dependencies'\r\n    - script: npm run build\r\n      displayName: 'Build project'\r\n    - script: npm run test\r\n      displayName: 'Run tests'\n"})}),"\n",(0,n.jsx)(t.p,{children:"This YAML template defines a parameter called nodeVersion, which specifies the version of Node.js to use for building and testing the application. The template then defines a job called BuildAndTest, which installs Node.js, installs dependencies, builds the project, and runs tests."}),"\n",(0,n.jsx)(t.h3,{id:"2--use-the-yaml-template-in-a-pipeline",children:"2.  Use the YAML template in a pipeline"}),"\n",(0,n.jsx)(t.p,{children:"You can use the template keyword to include the nodejs-build-test.yml template in a pipeline. Here's an example of a pipeline that uses the template:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# azure-pipelines.yml\r\n\r\ntrigger:\r\n  - main\r\n\r\njobs:\r\n  - job: BuildAndTestNodeApp\r\n    displayName: 'Build and test Node.js app'\r\n    pool:\r\n      vmImage: 'ubuntu-latest'\r\n    steps:\r\n    - template: nodejs-build-test.yml\r\n      parameters:\r\n        nodeVersion: '14.x'\n"})}),"\n",(0,n.jsx)(t.p,{children:"This pipeline triggers on the main branch, and defines a job called BuildAndTestNodeApp. The job uses the nodejs-build-test.yml template by including it with the template keyword. The nodeVersion parameter is set to 14.x, which specifies that the latest version of Node.js 14 should be used for building and testing the application."}),"\n",(0,n.jsx)(t.p,{children:"When this pipeline runs, the steps defined in the template will be executed as part of the pipeline, with the specified Node.js version and any other parameter values that are passed in. You can reuse this pipeline with different parameter values or on different branches, without having to copy and paste the steps each time."}),"\n",(0,n.jsx)(t.h2,{id:"yaml-templates-across-azure-devops-projects",children:"YAML templates across Azure DevOps projects"}),"\n",(0,n.jsx)(t.p,{children:"To reuse YAML templates across Azure DevOps projects, you can use the following steps:"}),"\n",(0,n.jsx)(t.h3,{id:"1-create-a-yaml-template-in-a-git-repository",children:"1. Create a YAML template in a Git repository"}),"\n",(0,n.jsx)(t.p,{children:"Create a YAML template file in a Git repository that is accessible to all the Azure DevOps projects that you want to reuse the template in. You can create a new Git repository in Azure DevOps or use an existing repository."}),"\n",(0,n.jsx)(t.h3,{id:"2-reference-the-yaml-template-in-pipelines",children:"2. Reference the YAML template in pipelines"}),"\n",(0,n.jsx)(t.p,{children:"In each Azure DevOps project where you want to reuse the template, reference the YAML template in your pipeline YAML files using the template keyword and the Git repository URL and path to the template file."}),"\n",(0,n.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# azure-pipelines.yml\r\n\r\ntrigger:\r\n  - main\r\n\r\njobs:\r\n  - job: BuildAndTestNodeApp\r\n    displayName: 'Build and test Node.js app'\r\n    pool:\r\n      vmImage: 'ubuntu-latest'\r\n    steps:\r\n    - template: https://github.com/MyOrganization/MyRepo/nodejs-build-test.yml@main\r\n      parameters:\r\n        nodeVersion: '14.x'\r\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"In this example, the template keyword is used to reference the nodejs-build-test.yml template file in the MyRepo repository in the MyOrganization organization. The @main suffix indicates that the pipeline should use the main branch of the Git repository."}),"\n",(0,n.jsx)(t.h3,{id:"3-grant-permission-to-access-the-git-repository",children:"3. Grant permission to access the Git repository"}),"\n",(0,n.jsx)(t.p,{children:"Make sure that all the Azure DevOps projects that need to access the Git repository where the YAML template is stored have permission to access the repository. You can manage repository permissions in the Azure DevOps project settings."}),"\n",(0,n.jsx)(t.p,{children:"By following these steps, you can reuse the same YAML template across multiple Azure DevOps projects, which can save time and reduce duplication of effort. Any changes to the YAML template in the Git repository will be automatically reflected in all the pipelines that reference the template."}),"\n",(0,n.jsx)(t.admonition,{title:"1",type:"note",children:(0,n.jsx)(t.p,{children:"In Azure DevOps, permissions are inherited from the project level down to the repository level. This means that if you grant a user or group permission to the project, they will automatically have permission to all the repositories in the project. If you want to restrict access to a specific repository, you will need to remove the user or group from the project-level permissions and grant them permissions at the repository level instead."})}),"\n",(0,n.jsx)(t.admonition,{title:"2",type:"note",children:(0,n.jsx)(t.p,{children:"Similarly, permissions are inherited from the repository level down to the branch level. This means that if you grant a user or group permission to a repository, they will automatically have permission to all the branches in the repository. If you want to restrict access to a specific branch, you will need to remove the user or group from the repository-level permissions and grant them permissions at the branch level instead."})}),"\n",(0,n.jsx)(t.admonition,{title:"3",type:"note",children:(0,n.jsx)(t.p,{children:"To avoid accidentally granting unnecessary permissions to users or groups, it's important to carefully manage permissions at each level of the hierarchy and only grant the permissions that are required for each user or group to do their job."})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5569:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(6326);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);