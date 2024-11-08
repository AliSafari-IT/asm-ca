# yarn upgrade:docusaurus
cd ../

yarn upgrade @docusaurus/preset-classic@latest

yarn upgrade @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest

yarn upgrade @docusaurus/core@latest  @docusaurus/plugin-content-blog@latest @docusaurus/remark-plugin-npm2yarn@latest

yarn build