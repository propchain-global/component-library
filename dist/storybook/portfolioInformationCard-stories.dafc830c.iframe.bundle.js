/*! For license information please see portfolioInformationCard-stories.dafc830c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwelf_global_toolkit=self.webpackChunkwelf_global_toolkit||[]).push([[967],{"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function setRef(ref,value){if("function"==typeof ref)return ref(value);null!=ref&&(ref.current=value)}function composeRefs(...refs){return node=>{let hasCleanup=!1;const cleanups=refs.map((ref=>{const cleanup=setRef(ref,node);return hasCleanup||"function"!=typeof cleanup||(hasCleanup=!0),cleanup}));if(hasCleanup)return()=>{for(let i=0;i<cleanups.length;i++){const cleanup=cleanups[i];"function"==typeof cleanup?cleanup():setRef(refs[i],null)}}}}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children),props2=function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}(slotProps,children.props);return children.type!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&(props2.ref=forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,props2)}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}},"./stories/portfolioInformationCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>portfolioInformationCard_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./lib/utils.ts"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),arrow_up_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/arrow-up-right.js"),lock=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/lock.js"),gift=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/gift.js");const AlarmClock=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);var badge=__webpack_require__("./components/ui/badge.tsx"),ui_button=__webpack_require__("./components/ui/button.tsx");(0,dist.F)("flex items-center rounded-Button-xl border-Button-xl ",{variants:{size:{l:"flex h-Button-l-height  px-3x gap-Button-xl-label-horizontal min-w-Button-l",xl:"flex h-Button-xl-height  px-3x gap-Button-xl-label-horizontal border-Button-xl rounded-Button-xl min-w-Button-xl  "}}});const PortfolioInformationWrapper=react.forwardRef((({className,welfTokenAmount,...props},ref)=>(0,jsx_runtime.jsxs)("div",{ref,className:(0,utils.cn)(className,"relative w-full shrink-0 min-w-[312px] md:w-[680px] flex flex-col gap-4x"),...props,children:[(0,jsx_runtime.jsxs)("div",{className:"md:p-6x p-4x md:bg-[url('/banner-bg.png')] bg-[url('/banner-bg-mobile.png')] bg-cover bg-right rounded-xl",children:[(0,jsx_runtime.jsx)("div",{className:"text-body-m-medium md:text-body-m-strong text-foreground-weakest md:mb-16x mb-4x",children:"My WELF"}),(0,jsx_runtime.jsxs)("div",{className:"text-number-s md:text-number-xm text-foreground-weak mb-3x",children:[welfTokenAmount," ",(0,jsx_runtime.jsx)("span",{className:"text-body-xl-medium text-foreground-weakest",children:"WELF"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1.5x",children:[(0,jsx_runtime.jsx)("div",{className:"text-body-m-medium text-foreground-weak",children:"$125.2k"}),(0,jsx_runtime.jsxs)(badge.E,{variant:"secondary-info",children:[(0,jsx_runtime.jsx)(arrow_up_right.A,{className:"w-3x"}),"2.45%"]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"relative flex md:flex-row flex-col gap-3x",children:[(0,jsx_runtime.jsxs)("div",{className:"md:p-6x p-4x bg-weaker md:h-[324px] w-[332px] border border-default rounded-xl backdrop-blur-md flex flex-col justify-between",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center gap-2x mb-3x",children:[(0,jsx_runtime.jsx)("div",{className:"text-body-m-medium text-foreground-weakest",children:"Total Staked WELF"}),(0,jsx_runtime.jsx)("div",{className:"h-8x w-8x bg-gradinet-surface-linear rounded-full flex justify-center items-center text-foreground-weaker",children:(0,jsx_runtime.jsx)(lock.A,{className:"h-4x w-4x"})})]}),(0,jsx_runtime.jsxs)("div",{className:"text-number-s text-foreground-weak mb-2x",children:["16,313",(0,jsx_runtime.jsx)("span",{className:"text-body-l-strong text-foreground-weakest",children:" WELF"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1.5x",children:[(0,jsx_runtime.jsx)("div",{className:"text-body-s-medium text-foreground-weak",children:"$56,606"}),(0,jsx_runtime.jsxs)(badge.E,{variant:"secondary-info",children:[(0,jsx_runtime.jsx)(arrow_up_right.A,{className:"w-3x"}),"2.45%"]})]})]}),(0,jsx_runtime.jsx)(ui_button.$,{variant:"primary",size:"xl",className:"mt-12x md:mt-0",children:"Explore staking"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-4x grow w-[332px] relative overflow-hidden",children:[(0,jsx_runtime.jsxs)("div",{className:"md:h-[154px] gap-5px p-5x flex justify-between border border-default rounded-xl bg-weaker backdrop-filter-m border flex flex-col justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center gap-2x mb-3x",children:[(0,jsx_runtime.jsx)("div",{className:"text-body-m-medium text-foreground-weakest",children:"Staking Reward"}),(0,jsx_runtime.jsx)("div",{className:"h-8x w-8x bg-gradinet-surface-linear rounded-full flex justify-center items-center text-foreground-weaker",children:(0,jsx_runtime.jsx)(gift.A,{className:"h-4x w-4x"})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"text-body-3xl-strong text-foreground-weak",children:"4,350"}),(0,jsx_runtime.jsx)("div",{className:"text-body-s-medium text-foreground-weakest mt-1x",children:"WELF"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"md:h-[154px] gap-5px p-5x flex justify-between border border-default rounded-xl bg-weaker backdrop-filter-m border flex flex-col justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center gap-2x mb-3x",children:[(0,jsx_runtime.jsx)("div",{className:"text-body-m-medium text-foreground-weakest",children:"Next Claim"}),(0,jsx_runtime.jsx)("div",{className:"h-8x w-8x bg-gradinet-surface-linear rounded-full flex justify-center items-center text-foreground-weaker",children:(0,jsx_runtime.jsx)(AlarmClock,{className:"h-4x w-4x"})})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"text-body-3xl-strong text-foreground-weak",children:"142 : 32 : 03"}),(0,jsx_runtime.jsx)("div",{className:"text-body-s-medium text-foreground-weakest mt-1x",children:"31 Days"})]})]})]})]})]})));PortfolioInformationWrapper.displayName="PortfolioInformationWrapper",PortfolioInformationWrapper.__docgenInfo={description:"",methods:[],displayName:"PortfolioInformationWrapper",props:{welfTokenAmount:{required:!0,tsType:{name:"number"},description:""}},composes:["VariantProps"]};const portfolioInformationCard_stories={title:"Global Design Toolkit/view/Portfolio information card",component:PortfolioInformationWrapper,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:(0,__webpack_require__("./node_modules/@storybook/test/dist/index.mjs").fn)()}},Primary={args:{welfTokenAmount:54300}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    welfTokenAmount: 54300\n  }\n}",...Primary.parameters?.docs?.source}}}},"./components/ui/badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs")),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils.ts");const badgeVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)("inline-flex items-center rounded-Pills transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",{variants:{variant:{"primary-info":" bg-pills-primary-information text-pills-primary-information","primary-warning":" bg-pills-primary-warning text-pills-primary-warning","primary-success":" bg-pills-primary-success text-pills-primary-success","primary-error":" bg-pills-primary-error text-pills-primary-error","primary-neutral":" bg-pills-primary-neutral text-pills-primary-neutral","secondary-info":" bg-pills-secondary-information text-pills-secondary-information","secondary-warning":" bg-pills-secondary-warning text-pills-secondary-warning","secondary-success":" bg-pills-secondary-success text-pills-secondary-success","secondary-error":" bg-pills-secondary-error text-pills-secondary-error","secondary-neutral":" bg-pills-secondary-neutral text-pills-secondary-neutral"},size:{s:"h-Pills-s px-1x gap-0.5x text-description-s-medium",l:"h-Pills-l px-1.5x gap-1x text-description-l-medium"}},defaultVariants:{variant:"primary-info",size:"s"}});function Badge({className,variant,size,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(badgeVariants({variant,size}),className),...props})}Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]}},"./components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils.ts"),_barrel_optimize_names_LoaderCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/loader-circle.js");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)("inline-flex items-center justify-center gap-2x whitespace-nowrap rounded-Button-xl ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{primary:"bg-button-accent-default hover:bg-button-accent-hover disabled:bg-button-accent-disabled text-button-accent-default hover:text-button-accent-hover disabled:text-button-accent-disabled",default:"bg-button-accent-default hover:bg-button-accent-hover disabled:bg-button-accent-disabled text-button-accent-default hover:text-button-accent-hover disabled:text-button-accent-disabled",alert:"bg-button-tertiary-alert-default hover:bg-button-tertiary-alert-hover disabled:bg-button-tertiary-alert-disabled text-button-tertiary-alert-default hover:text-button-tertiary-alert-hover disabled:text-button-tertiary-alert-disabled",outline:"border border-button-outline-neutral-default hover:border-button-outline-neutral-hover disabled:bg-button-outline-neutral-disabled text-button-outline-neutral-default text-button-outline-neutral-default hover:text-button-outline-neutral-hover disabled:text-button-outline-neutral-disabled bg-button-outline-neutral-default hover:bg-button-outline-neutral-hover",link:"text-button-link-neutral-default hover:text-button-link-neutral-hover disabled:text-button-link-neutral-disabled"},size:{xl:"text-body-m-strong px-4x py-3x",l:"text-body-m-strong px-4x py-2x",m:"text-body-s-strong px-3x py-1.5x",s:"text-body-s-strong py-1x px-2x"}},defaultVariants:{variant:"primary",size:"xl"}}),iconSizeMap={xl:"h-[20px] w-[20px]",l:"h-[20px] w-[20px]",m:"h-[16px] w-[16px]",s:"h-[16px] w-[16px]"},Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,variant="primary",size="xl",asChild=!1,IconLeft,IconRight,disabled=!1,is_loading,children,...props},ref)=>{const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX:"button",iconSizeClass=iconSizeMap[size]||"h-5x";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({variant,size,className}))+""+("link"===variant?" px-none py-none":""),ref,...props,disabled,children:is_loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_LoaderCircle_lucide_react__WEBPACK_IMPORTED_MODULE_5__.A,{className:`animate-spin ${iconSizeClass}`})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[IconLeft&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconLeft,{className:`${iconSizeClass}`}),children,IconRight&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconRight,{className:`${iconSizeClass}`})]})})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},IconLeft:{required:!1,tsType:{name:"ReactJSXElementConstructor",raw:"React.JSXElementConstructor<{className?: string}>",elements:[{name:"signature",type:"object",raw:"{className?: string}",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}]},description:""},IconRight:{required:!1,tsType:{name:"ReactJSXElementConstructor",raw:"React.JSXElementConstructor<{className?: string}>",elements:[{name:"signature",type:"object",raw:"{className?: string}",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}]},description:""},is_loading:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xl" | "l" | "m" | "s"',elements:[{name:"literal",value:'"xl"'},{name:"literal",value:'"l"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:"",defaultValue:{value:"'xl'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "alert" | "outline" | "link"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"alert"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"link"'}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const customTWMerge=(0,__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs").zu)({extend:{classGroups:{"font-size":["text-description-s-medium","text-description-l-medium","text-description-s","text-description-l","text-number-s","text-body-s","text-body-s-medium","text-body-s-strong","text-body-l-medium","text-body-l-strong","text-body-m-medium","text-body-m-strong","text-description-l-strong","text-body-3xl-strong","text-body-2xl-strong"],"border-color":["border-CurrencyField-primary-default","border-CurrencyField-primary-active","border-CurrencyField-primary-disabled","border-surface-overlay","border-button-outline-neutral-default","border-default"],"border-w":["border-Button-xl"],rounded:["rounded-l"]}}});function cn(...inputs){return customTWMerge((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.$,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/arrow-up-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ArrowUpRight});const ArrowUpRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]])},"./node_modules/lucide-react/dist/esm/icons/gift.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Gift});const Gift=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]])},"./node_modules/lucide-react/dist/esm/icons/loader-circle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LoaderCircle});const LoaderCircle=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},"./node_modules/lucide-react/dist/esm/icons/lock.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Lock});const Lock=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])}}]);