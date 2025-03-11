/*! For license information please see Footer-stories.ac31ba7e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwelf_global_toolkit=self.webpackChunkwelf_global_toolkit||[]).push([[654],{"./stories/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),createLucideIcon=__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js");const Facebook=(0,createLucideIcon.A)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),Twitter=(0,createLucideIcon.A)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Instagram=(0,createLucideIcon.A)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),Linkedin=(0,createLucideIcon.A)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const leftItems=[{title:"Terms and conditions",link:"#"},{title:"Privacy policy",link:"#"},{title:"Cookie policy",link:"#"}],socials=[{Icon:Facebook,link:"#"},{Icon:Twitter,link:"#"},{Icon:Instagram,link:"#"},{Icon:Linkedin,link:"#"}],Footer=()=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-center gap-6x md:gap-0 md:justify-between flex-col md:flex-row p-4x lg:px-54 md:h-10x",children:[(0,jsx_runtime.jsx)("div",{className:"flex  gap-4x",children:leftItems.map(((item,index)=>(0,jsx_runtime.jsx)("a",{href:item.link,className:"text-body-s-strong  text-button-link-neutral-default",children:item.title},index)))}),(0,jsx_runtime.jsx)("div",{className:"flex gap-4x md:gap-6x",children:socials.map(((item,index)=>(0,jsx_runtime.jsx)("a",{href:item.link,children:(0,jsx_runtime.jsx)(item.Icon,{className:"w-5x h-5x md:w-6x md:h-6x"})},index)))})]});Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};const Footer_stories={title:"Global Design Toolkit/Controls/Footer",component:Footer,parameters:{layout:"padded"},tags:["autodocs"],args:{isWalletConnected:!1}},Primary={args:{}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}}}]);