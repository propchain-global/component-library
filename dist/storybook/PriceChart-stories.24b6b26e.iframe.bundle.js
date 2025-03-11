"use strict";(self.webpackChunkwelf_global_toolkit=self.webpackChunkwelf_global_toolkit||[]).push([[202],{"./stories/PriceChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PriceChart_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ui_tab=__webpack_require__("./components/ui/tab.tsx"),badge=__webpack_require__("./components/ui/badge.tsx"),arrow_down_left=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/arrow-down-left.js"),AreaChart=__webpack_require__("./node_modules/recharts/es6/chart/AreaChart.js"),XAxis=__webpack_require__("./node_modules/recharts/es6/cartesian/XAxis.js"),Area=__webpack_require__("./node_modules/recharts/es6/cartesian/Area.js"),format=__webpack_require__("./node_modules/date-fns/format.js"),ResponsiveContainer=__webpack_require__("./node_modules/recharts/es6/component/ResponsiveContainer.js"),Tooltip=__webpack_require__("./node_modules/recharts/es6/component/Tooltip.js"),Legend=__webpack_require__("./node_modules/recharts/es6/component/Legend.js"),utils=__webpack_require__("./lib/utils.ts"),arrow_up_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/arrow-up-right.js");const THEMES={light:"",dark:".dark"},ChartContext=react.createContext(null);const ChartContainer=react.forwardRef((({id,className,children,config,...props},ref)=>{const uniqueId=react.useId(),chartId=`chart-${id||uniqueId.replace(/:/g,"")}`;return(0,jsx_runtime.jsx)(ChartContext.Provider,{value:{config},children:(0,jsx_runtime.jsxs)("div",{"data-chart":chartId,ref,className:(0,utils.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",className),...props,children:[(0,jsx_runtime.jsx)(ChartStyle,{id:chartId,config}),(0,jsx_runtime.jsx)(ResponsiveContainer.u,{children})]})})}));ChartContainer.displayName="Chart";const ChartStyle=({id,config})=>{const colorConfig=Object.entries(config).filter((([,config])=>config.theme||config.color));return colorConfig.length?(0,jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(THEMES).map((([theme,prefix])=>`\n${prefix} [data-chart=${id}] {\n${colorConfig.map((([key,itemConfig])=>{var _itemConfig_theme;const color=(null===(_itemConfig_theme=itemConfig.theme)||void 0===_itemConfig_theme?void 0:_itemConfig_theme[theme])||itemConfig.color;return color?`  --color-${key}: ${color};`:null})).join("\n")}\n}\n`)).join("\n")}}):null},ChartTooltip=Tooltip.m,ChartTooltipContent=react.forwardRef((({active,payload,change24Key},ref)=>{var _item_value;const[item]=payload||[],change24=change24Key?item.payload[change24Key]:null;return active&&(null==payload?void 0:payload.length)?(0,jsx_runtime.jsxs)("div",{className:"border border-default rounded-md  backdrop-blur-[16px] bg-[rgba(255, 255, 255, 0.10)] min-w-[188px]",ref,children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-2x py-4x px-3x",children:[(0,jsx_runtime.jsx)("p",{className:"text-number-2xs text-weak",children:null===(_item_value=item.value)||void 0===_item_value?void 0:_item_value.toLocaleString("en-US",{maximumFractionDigits:2,style:"currency",currency:"USD"})}),change24&&(0,jsx_runtime.jsxs)(badge.E,{variant:"secondary-info",size:"s",children:[change24>0?(0,jsx_runtime.jsx)(arrow_up_right.A,{}):(0,jsx_runtime.jsx)(arrow_down_left.A,{}),change24.toFixed(2),"% (1d)"]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between py-2x px-3x border-t border-default",children:[(0,jsx_runtime.jsx)("p",{className:"text-description-s-medium text-weakest",children:(0,format.GP)(item.payload[0],"dd MMM yyyy")}),(0,jsx_runtime.jsx)("p",{className:"text-description-s-medium text-weakest",children:(0,format.GP)(item.payload[0],"KK:mm a")})]})]}):null}));ChartTooltipContent.displayName="ChartTooltip";Legend.s;const ChartLegendContent=react.forwardRef((({className,hideIcon=!1,payload,verticalAlign="bottom",nameKey},ref)=>{const{config}=function useChart(){const context=react.useContext(ChartContext);if(!context)throw new Error("useChart must be used within a <ChartContainer />");return context}();return(null==payload?void 0:payload.length)?(0,jsx_runtime.jsx)("div",{ref,className:(0,utils.cn)("flex items-center justify-center gap-4","top"===verticalAlign?"pb-3":"pt-3",className),children:payload.map((item=>{const key=`${nameKey||item.dataKey||"value"}`,itemConfig=function getPayloadConfigFromPayload(config,payload,key){if("object"!=typeof payload||null===payload)return;const payloadPayload="payload"in payload&&"object"==typeof payload.payload&&null!==payload.payload?payload.payload:void 0;let configLabelKey=key;key in payload&&"string"==typeof payload[key]?configLabelKey=payload[key]:payloadPayload&&key in payloadPayload&&"string"==typeof payloadPayload[key]&&(configLabelKey=payloadPayload[key]);return configLabelKey in config?config[configLabelKey]:config[key]}(config,item,key);return(0,jsx_runtime.jsxs)("div",{className:(0,utils.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-neutral-500 dark:[&>svg]:text-neutral-400"),children:[(null==itemConfig?void 0:itemConfig.icon)&&!hideIcon?(0,jsx_runtime.jsx)(itemConfig.icon,{}):(0,jsx_runtime.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:item.color}}),null==itemConfig?void 0:itemConfig.label]},item.value)}))}):null}));ChartLegendContent.displayName="ChartLegend",ChartContainer.__docgenInfo={description:"",methods:[],displayName:"Chart",props:{config:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  [k in string]: {\n    label?: React.ReactNode\n    icon?: React.ComponentType\n  } & (\n    | { color?: string; theme?: never }\n    | { color?: never; theme: Record<keyof typeof THEMES, string> }\n  )\n}",signature:{properties:[{key:{name:"string",required:!0},value:{name:"intersection",raw:"{\n  label?: React.ReactNode\n  icon?: React.ComponentType\n} & (\n  | { color?: string; theme?: never }\n  | { color?: never; theme: Record<keyof typeof THEMES, string> }\n)",elements:[{name:"signature",type:"object",raw:"{\n  label?: React.ReactNode\n  icon?: React.ComponentType\n}",signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"icon",value:{name:"ReactComponentType",raw:"React.ComponentType",required:!1}}]}},{name:"unknown"}]}}]}},description:""},children:{required:!0,tsType:{name:'ReactComponentProps["children"]',raw:'React.ComponentProps<\n  typeof RechartsPrimitive.ResponsiveContainer\n>["children"]'},description:""}}},ChartTooltipContent.__docgenInfo={description:"",methods:[],displayName:"ChartTooltip",props:{hideLabel:{required:!1,tsType:{name:"boolean"},description:""},hideIndicator:{required:!1,tsType:{name:"boolean"},description:""},indicator:{required:!1,tsType:{name:"union",raw:'"line" | "dot" | "dashed"',elements:[{name:"literal",value:'"line"'},{name:"literal",value:'"dot"'},{name:"literal",value:'"dashed"'}]},description:""},nameKey:{required:!1,tsType:{name:"string"},description:""},labelKey:{required:!1,tsType:{name:"string"},description:""},change24Key:{required:!1,tsType:{name:"string"},description:""},timestampKey:{required:!1,tsType:{name:"string"},description:""}}},ChartLegendContent.__docgenInfo={description:"",methods:[],displayName:"ChartLegend",props:{hideIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},nameKey:{required:!1,tsType:{name:"string"},description:""},verticalAlign:{defaultValue:{value:'"bottom"',computed:!1},required:!1}}},ChartStyle.__docgenInfo={description:"",methods:[],displayName:"ChartStyle",props:{id:{required:!0,tsType:{name:"string"},description:""},config:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  [k in string]: {\n    label?: React.ReactNode\n    icon?: React.ComponentType\n  } & (\n    | { color?: string; theme?: never }\n    | { color?: never; theme: Record<keyof typeof THEMES, string> }\n  )\n}",signature:{properties:[{key:{name:"string",required:!0},value:{name:"intersection",raw:"{\n  label?: React.ReactNode\n  icon?: React.ComponentType\n} & (\n  | { color?: string; theme?: never }\n  | { color?: never; theme: Record<keyof typeof THEMES, string> }\n)",elements:[{name:"signature",type:"object",raw:"{\n  label?: React.ReactNode\n  icon?: React.ComponentType\n}",signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"icon",value:{name:"ReactComponentType",raw:"React.ComponentType",required:!1}}]}},{name:"unknown"}]}}]}},description:""}}};const chartData=[[1736741034624,1.3096860198911147],[1736744672290,1.3100485496932617],[1736748235116,1.308420870960301],[1736752114279,1.3073882078022203],[1736755428735,1.28827756704386],[1736759028277,1.251620935592115],[1736762630614,1.1828048713420114],[1736766502440,1.2049476264531076],[1736769829316,1.188342756983098],[1736773670191,1.1936333615739152],[1736777017066,1.1983231186223449],[1736780634131,1.188731313440647],[1736784212240,1.2286677702780187],[1736787824228,1.221694403408447],[1736791381154,1.2295791986628675],[1736795018679,1.2237779635820258],[1736798618360,1.2231499573683007],[1736802219165,1.2257398302287013],[1736805827225,1.2297591550614282],[1736809365746,1.2313343170311926],[1736812964120,1.2325176820418702],[1736816560826,1.2299825075580246],[1736820154656,1.2327728420158273],[1736823829139,1.234384156103712],[1736827408279,1.238970205812784],[1736831012129,1.235110061895259],[1736834610781,1.247545500833488],[1736838207723,1.256402400840272],[1736841813958,1.2661906720812923],[1736845412439,1.2685686630792363],[1736849026342,1.2729795615207156],[1736852621926,1.2915123675653084],[1736856234091,1.2890017142040193],[1736859833810,1.2949108324766847],[1736863433656,1.3002133946084802],[1736867016941,1.3012358523304364],[1736870438074,1.3070270076162607],[1736874229904,1.30194553800724],[1736877836652,1.2961784882030312],[1736881440346,1.3387617496420414],[1736885027614,1.4620040824810279],[1736888627740,1.5168165516688865],[1736892229429,1.4941626438123872],[1736896120355,1.4934844587871934],[1736899210642,1.4992465578980128],[1736902810796,1.5000259019686843],[1736906618204,1.496585032945596],[1736910232467,1.500173865825462],[1736913844485,1.5025654547207516],[1736917413932,1.5010064445836528],[1736920930996,1.5042894191570324],[1736924638965,1.4956869473140917],[1736928224690,1.4996500901701164],[1736931823773,1.4972153668039607],[1736935427450,1.5008945297567031],[1736938974127,1.5038913571701458],[1736942527073,1.4511019514261672],[1736946134903,1.4474250548147929],[1736949828630,1.480139154753195],[1736953250705,1.5767833457534048],[1736957123696,1.5801034229646345],[1736960840234,1.570685547984811],[1736964242389,1.5701924532939284],[1736967668342,1.5748995433870032],[1736971436154,1.5685720052994265],[1736975019736,1.564080072170965],[1736978619751,1.5648036519778252],[1736982513360,1.561727165481982],[1736985843037,1.5639196898924304],[1736989434854,1.5722086375732913],[1736993039589,1.572449563444143],[1736996624968,1.5758282775785069],[1737000219837,1.5740694313552839],[1737003819655,1.5726200565697823],[1737007419789,1.513505789371206],[1737010842862,1.501861774559994],[1737014622281,1.469307636782342],[1737018228427,1.401115208408227],[1737021757552,1.3673516647732717],[1737025425484,1.352041878207076],[1737029027151,1.3562676502420927],[1737032627198,1.3159698846955912],[1737036240626,1.3611785175680502],[1737039837790,1.3783676043912423],[1737043432776,1.3819227481072014],[1737047214375,1.4591694057148983],[1737050637375,1.4466872644608757],[1737054235656,1.4549473016569374],[1737057832933,1.457909710319256],[1737061434847,1.425890158996324],[1737065033986,1.4290053034762484],[1737068907373,1.4132861266753443],[1737072227118,1.412953054737328],[1737075829714,1.411873445184271],[1737079427243,1.404738484448548],[1737083019602,1.4071491266489715],[1737086611554,1.408493818231346],[1737090214045,1.4092026494691663],[1737093829286,1.4126483315222176],[1737097422646,1.410219081329204],[1737101024998,1.451718974125677],[1737104868598,1.4396999426420853],[1737108215895,1.4881676615894381],[1737111817042,1.395617515338337],[1737115425705,1.4418821893202478],[1737118997884,1.4532343773005965],[1737122588261,1.4491036376543103],[1737126186162,1.4428075108979164],[1737129798770,1.4764996208195214],[1737133434427,1.4617987602535598],[1737137034758,1.4662936241408717],[1737140636251,1.4647797047089548],[1737144220766,1.4334057725817264],[1737147827590,1.4499796504089049],[1737151429497,1.4443019319600536],[1737155033333,1.439314423294995],[1737158637219,1.4416525528802813],[1737162229795,1.4537585121149645],[1737166105522,1.450578413857272],[1737169247175,1.4383581256988485],[1737172847555,1.4377132891594442],[1737176453821,1.4332875159217648],[1737180237590,1.4262521280059],[1737183834435,1.4311376093612858],[1737187434102,1.4119207494807762],[1737191313411,1.405937902658833],[1737194634765,1.4047839262756663],[1737198235597,1.3899588590663863],[1737201836325,1.3815672293736334],[1737205433970,1.3577068662173233],[1737209022434,1.3412555909541797],[1737212651665,1.3411157014422965],[1737216238815,1.340492060319463],[1737219714760,1.3263188198513256],[1737223313863,1.3271307875039353],[1737227029465,1.3299828372598368],[1737230628268,1.33231655853538],[1737234230940,1.3360262171639017],[1737237832713,1.3382858031519826],[1737241340410,1.3378671981523647],[1737244949701,1.33815246224041],[1737248533443,1.3360559972019632],[1737252135239,1.3576032295991087],[1737255739776,1.3586841443769713],[1737259325724,1.3564257689793515],[1737262944917,1.3469580792554543],[1737266535569,1.3237005427529749],[1737270052152,1.3273726657796627],[1737273804167,1.3148076055230218],[1737277430081,1.2919993434174466],[1737281028289,1.2592726234251788],[1737284631791,1.2344195285923951],[1737288235424,1.195459751084897],[1737291826315,1.2045902885422357],[1737295418901,1.2721780583528037],[1737299033777,1.2304152136636675],[1737302632777,1.23414860745118],[1737306232479,1.253655072447473],[1737309600094,1.251527836823332],[1737313200099,1.249787003555205],[1737317022488,1.2836709056714624],[1737320542741,1.2730957421757714],[1737324139239,1.2556085346667247],[1737327834059,1.2355719363093818],[1737331710199,1.236177504970575],[1737335033742,1.1820916813822153],[1737338618901,1.1705627428413632],[1737342217481,1.1645851606544344],[1737345447e3,1.1851718778934852]],chartConfig={desktop:{label:"Desktop",color:"linear-gradient(180deg, rgba(89, 214, 124, 0.25) -29%, rgba(89, 214, 124, 0.00) 99.93%)"}};function AreaChartComponent({data=chartData,xkey="0",ykey=1}){return(0,jsx_runtime.jsx)(ChartContainer,{config:chartConfig,className:"-mx-[28px] md:-mx-[36px] px-0",children:(0,jsx_runtime.jsxs)(AreaChart.Q,{accessibilityLayer:!0,data,margin:{left:12,right:12},children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("linearGradient",{id:"paint0_linear_69_35489",x1:"583.011",y1:"-65.5793",x2:"583.011",y2:"229.84",gradientUnits:"userSpaceOnUse",children:[(0,jsx_runtime.jsx)("stop",{"stop-color":"#59D67C","stop-opacity":"0.25"}),(0,jsx_runtime.jsx)("stop",{offset:"1","stop-color":"#59D67C","stop-opacity":"0"})]})}),(0,jsx_runtime.jsx)(XAxis.W,{dataKey:xkey,tickLine:!1,axisLine:!1,domain:["dataMin","auto"],tickMargin:8,interval:Math.ceil(data.length/6),tickCount:6,tickFormatter:(value,i)=>0==i||i==data.length-1?"":(0,format.GP)(value,"dd MMM").toUpperCase(),tick:{fontSize:12,fontWeight:"500",fill:"#87ACA6"}}),(0,jsx_runtime.jsx)(ChartTooltip,{cursor:!1,content:(0,jsx_runtime.jsx)(ChartTooltipContent,{indicator:"line"})}),(0,jsx_runtime.jsx)(Area.G,{dataKey:ykey,type:"natural",fill:"url(#paint0_linear_69_35489)",fillOpacity:.4,stroke:"var(--accent-strong)"})]})})}AreaChartComponent.__docgenInfo={description:"",methods:[],displayName:"AreaChartComponent",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:"[\n    [1736741034624, 1.3096860198911147],\n    [1736744672290, 1.3100485496932617],\n    [1736748235116, 1.308420870960301],\n    [1736752114279, 1.3073882078022203],\n    [1736755428735, 1.28827756704386],\n    [1736759028277, 1.251620935592115],\n    [1736762630614, 1.1828048713420114],\n    [1736766502440, 1.2049476264531076],\n    [1736769829316, 1.188342756983098],\n    [1736773670191, 1.1936333615739152],\n    [1736777017066, 1.1983231186223449],\n    [1736780634131, 1.188731313440647],\n    [1736784212240, 1.2286677702780187],\n    [1736787824228, 1.221694403408447],\n    [1736791381154, 1.2295791986628675],\n    [1736795018679, 1.2237779635820258],\n    [1736798618360, 1.2231499573683007],\n    [1736802219165, 1.2257398302287013],\n    [1736805827225, 1.2297591550614282],\n    [1736809365746, 1.2313343170311926],\n    [1736812964120, 1.2325176820418702],\n    [1736816560826, 1.2299825075580246],\n    [1736820154656, 1.2327728420158273],\n    [1736823829139, 1.234384156103712],\n    [1736827408279, 1.238970205812784],\n    [1736831012129, 1.235110061895259],\n    [1736834610781, 1.247545500833488],\n    [1736838207723, 1.256402400840272],\n    [1736841813958, 1.2661906720812923],\n    [1736845412439, 1.2685686630792363],\n    [1736849026342, 1.2729795615207156],\n    [1736852621926, 1.2915123675653084],\n    [1736856234091, 1.2890017142040193],\n    [1736859833810, 1.2949108324766847],\n    [1736863433656, 1.3002133946084802],\n    [1736867016941, 1.3012358523304364],\n    [1736870438074, 1.3070270076162607],\n    [1736874229904, 1.30194553800724],\n    [1736877836652, 1.2961784882030312],\n    [1736881440346, 1.3387617496420414],\n    [1736885027614, 1.4620040824810279],\n    [1736888627740, 1.5168165516688865],\n    [1736892229429, 1.4941626438123872],\n    [1736896120355, 1.4934844587871934],\n    [1736899210642, 1.4992465578980128],\n    [1736902810796, 1.5000259019686843],\n    [1736906618204, 1.496585032945596],\n    [1736910232467, 1.500173865825462],\n    [1736913844485, 1.5025654547207516],\n    [1736917413932, 1.5010064445836528],\n    [1736920930996, 1.5042894191570324],\n    [1736924638965, 1.4956869473140917],\n    [1736928224690, 1.4996500901701164],\n    [1736931823773, 1.4972153668039607],\n    [1736935427450, 1.5008945297567031],\n    [1736938974127, 1.5038913571701458],\n    [1736942527073, 1.4511019514261672],\n    [1736946134903, 1.4474250548147929],\n    [1736949828630, 1.480139154753195],\n    [1736953250705, 1.5767833457534048],\n    [1736957123696, 1.5801034229646345],\n    [1736960840234, 1.570685547984811],\n    [1736964242389, 1.5701924532939284],\n    [1736967668342, 1.5748995433870032],\n    [1736971436154, 1.5685720052994265],\n    [1736975019736, 1.564080072170965],\n    [1736978619751, 1.5648036519778252],\n    [1736982513360, 1.561727165481982],\n    [1736985843037, 1.5639196898924304],\n    [1736989434854, 1.5722086375732913],\n    [1736993039589, 1.572449563444143],\n    [1736996624968, 1.5758282775785069],\n    [1737000219837, 1.5740694313552839],\n    [1737003819655, 1.5726200565697823],\n    [1737007419789, 1.513505789371206],\n    [1737010842862, 1.501861774559994],\n    [1737014622281, 1.469307636782342],\n    [1737018228427, 1.401115208408227],\n    [1737021757552, 1.3673516647732717],\n    [1737025425484, 1.352041878207076],\n    [1737029027151, 1.3562676502420927],\n    [1737032627198, 1.3159698846955912],\n    [1737036240626, 1.3611785175680502],\n    [1737039837790, 1.3783676043912423],\n    [1737043432776, 1.3819227481072014],\n    [1737047214375, 1.4591694057148983],\n    [1737050637375, 1.4466872644608757],\n    [1737054235656, 1.4549473016569374],\n    [1737057832933, 1.457909710319256],\n    [1737061434847, 1.425890158996324],\n    [1737065033986, 1.4290053034762484],\n    [1737068907373, 1.4132861266753443],\n    [1737072227118, 1.412953054737328],\n    [1737075829714, 1.411873445184271],\n    [1737079427243, 1.404738484448548],\n    [1737083019602, 1.4071491266489715],\n    [1737086611554, 1.408493818231346],\n    [1737090214045, 1.4092026494691663],\n    [1737093829286, 1.4126483315222176],\n    [1737097422646, 1.410219081329204],\n    [1737101024998, 1.451718974125677],\n    [1737104868598, 1.4396999426420853],\n    [1737108215895, 1.4881676615894381],\n    [1737111817042, 1.395617515338337],\n    [1737115425705, 1.4418821893202478],\n    [1737118997884, 1.4532343773005965],\n    [1737122588261, 1.4491036376543103],\n    [1737126186162, 1.4428075108979164],\n    [1737129798770, 1.4764996208195214],\n    [1737133434427, 1.4617987602535598],\n    [1737137034758, 1.4662936241408717],\n    [1737140636251, 1.4647797047089548],\n    [1737144220766, 1.4334057725817264],\n    [1737147827590, 1.4499796504089049],\n    [1737151429497, 1.4443019319600536],\n    [1737155033333, 1.439314423294995],\n    [1737158637219, 1.4416525528802813],\n    [1737162229795, 1.4537585121149645],\n    [1737166105522, 1.450578413857272],\n    [1737169247175, 1.4383581256988485],\n    [1737172847555, 1.4377132891594442],\n    [1737176453821, 1.4332875159217648],\n    [1737180237590, 1.4262521280059],\n    [1737183834435, 1.4311376093612858],\n    [1737187434102, 1.4119207494807762],\n    [1737191313411, 1.405937902658833],\n    [1737194634765, 1.4047839262756663],\n    [1737198235597, 1.3899588590663863],\n    [1737201836325, 1.3815672293736334],\n    [1737205433970, 1.3577068662173233],\n    [1737209022434, 1.3412555909541797],\n    [1737212651665, 1.3411157014422965],\n    [1737216238815, 1.340492060319463],\n    [1737219714760, 1.3263188198513256],\n    [1737223313863, 1.3271307875039353],\n    [1737227029465, 1.3299828372598368],\n    [1737230628268, 1.33231655853538],\n    [1737234230940, 1.3360262171639017],\n    [1737237832713, 1.3382858031519826],\n    [1737241340410, 1.3378671981523647],\n    [1737244949701, 1.33815246224041],\n    [1737248533443, 1.3360559972019632],\n    [1737252135239, 1.3576032295991087],\n    [1737255739776, 1.3586841443769713],\n    [1737259325724, 1.3564257689793515],\n    [1737262944917, 1.3469580792554543],\n    [1737266535569, 1.3237005427529749],\n    [1737270052152, 1.3273726657796627],\n    [1737273804167, 1.3148076055230218],\n    [1737277430081, 1.2919993434174466],\n    [1737281028289, 1.2592726234251788],\n    [1737284631791, 1.2344195285923951],\n    [1737288235424, 1.195459751084897],\n    [1737291826315, 1.2045902885422357],\n    [1737295418901, 1.2721780583528037],\n    [1737299033777, 1.2304152136636675],\n    [1737302632777, 1.23414860745118],\n    [1737306232479, 1.253655072447473],\n    [1737309600094, 1.251527836823332],\n    [1737313200099, 1.249787003555205],\n    [1737317022488, 1.2836709056714624],\n    [1737320542741, 1.2730957421757714],\n    [1737324139239, 1.2556085346667247],\n    [1737327834059, 1.2355719363093818],\n    [1737331710199, 1.236177504970575],\n    [1737335033742, 1.1820916813822153],\n    [1737338618901, 1.1705627428413632],\n    [1737342217481, 1.1645851606544344],\n    [1737345447000, 1.1851718778934852],\n]",computed:!1}},xkey:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'0'",computed:!1}},ykey:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"1",computed:!1}}}};const tabs=["M","W","D","Y"],PriceChart=({token,activeTab,price,low24,high24,change24,totalSupply,volume,marketCap,circulatingSupply,chartData,xkey,ykey})=>{const cards=(0,react.useMemo)((()=>[{title:"Market Cap",value:marketCap.toLocaleString("en-US",{style:"currency",currency:"USD"})},{title:"Volume (24h)",value:volume.toLocaleString("en-US",{style:"currency",currency:"USD"})},{title:"Total Supply",value:totalSupply.toLocaleString("en-US")},{title:"Circulating Supply",value:circulatingSupply.toLocaleString("en-US")}]),[totalSupply,circulatingSupply,volume,marketCap]);return(0,jsx_runtime.jsxs)("div",{className:"bg-weaker rounded-xl border border-default",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-8x p-4x md:gap-12x md:p-6x rounded-xl   ",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-2x",children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsxs)("p",{className:"text-body-m-medium text-weakest",children:[token," Price"]}),(0,jsx_runtime.jsx)("div",{className:"flex gap-1x",children:tabs.map((tab=>(0,jsx_runtime.jsx)(ui_tab.o,{isActive:activeTab===tab,children:tab},tab)))})]}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsxs)("div",{className:"flex gap-3x items-center",children:[(0,jsx_runtime.jsxs)("p",{className:"font text-number-s text-weak",children:["$",price]}),(0,jsx_runtime.jsx)("div",{className:"py-2x flex flex-col justify-end",children:(0,jsx_runtime.jsxs)(badge.E,{size:"s",variant:"secondary-info",children:[(0,jsx_runtime.jsx)(arrow_down_left.A,{className:"w-3x h-3x"}),change24,"% (1d)"]})})]}),(0,jsx_runtime.jsxs)("div",{className:"flex gap-4x items-center py-1x",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1x",children:[(0,jsx_runtime.jsx)("p",{className:"text-body-m-medium text-weakest",children:"L: "}),(0,jsx_runtime.jsxs)("p",{className:"text-body-m-medium text-weak",children:["$",low24]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1x",children:[(0,jsx_runtime.jsx)("p",{className:"text-body-m-medium text-weakest",children:"H: "}),(0,jsx_runtime.jsxs)("p",{className:"text-body-m-medium text-weak",children:["$",high24]})]})]})]})]}),(0,jsx_runtime.jsx)(AreaChartComponent,{data:chartData,xkey,ykey})]}),(0,jsx_runtime.jsx)("div",{className:"p-4x md:p-6x gap-2x grid grid-cols-2 md:grid-cols-4  border-default border-t ",children:cards.map(((card,index)=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-2x p-4x rounded-md bg-surface-gradient",children:[(0,jsx_runtime.jsx)("p",{className:"text-body-s text-weakest",children:card.title}),(0,jsx_runtime.jsx)("p",{className:"text-body-m-strong text-weak",children:card.value})]},index)))}),(0,jsx_runtime.jsx)("div",{className:"p-4x md:p-6x gap-2x flex flex-col md:hidden",children:cards.map(((card,index)=>(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center gap-2x p-4x rounded-md bg-surface-gradient",children:[(0,jsx_runtime.jsx)("p",{className:"text-body-s text-weakest",children:card.title}),(0,jsx_runtime.jsx)("p",{className:"text-body-s-strong text-weak",children:card.value})]},index)))})]})};PriceChart.__docgenInfo={description:"",methods:[],displayName:"PriceChart",props:{token:{required:!0,tsType:{name:"string"},description:""},activeTab:{required:!0,tsType:{name:"union",raw:"'M' | 'W' | 'D' | 'Y'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'W'"},{name:"literal",value:"'D'"},{name:"literal",value:"'Y'"}]},description:""},price:{required:!0,tsType:{name:"number"},description:""},low24:{required:!0,tsType:{name:"number"},description:""},high24:{required:!0,tsType:{name:"number"},description:""},change24:{required:!0,tsType:{name:"number"},description:""},totalSupply:{required:!0,tsType:{name:"number"},description:""},volume:{required:!0,tsType:{name:"number"},description:""},marketCap:{required:!0,tsType:{name:"number"},description:""},circulatingSupply:{required:!0,tsType:{name:"number"},description:""},chartData:{required:!1,tsType:{name:"Array",elements:[{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}],raw:"[number, number][]"},description:""},xkey:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},ykey:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};const PriceChart_stories={title:"Global Design Toolkit/Controls/PriceChart",component:PriceChart,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{token:{control:{type:"text"}}},args:{token:"WELF"}},Primary={args:{token:"WELF",activeTab:"M",price:100,low24:90,high24:110,change24:1.23,totalSupply:1e6,volume:1e6,marketCap:1e6,circulatingSupply:1e6}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    token: 'WELF',\n    activeTab: 'M',\n    price: 100,\n    low24: 90,\n    high24: 110,\n    change24: 1.23,\n    totalSupply: 1000000,\n    volume: 1000000,\n    marketCap: 1000000,\n    circulatingSupply: 1000000\n  }\n}",...Primary.parameters?.docs?.source}}}},"./components/ui/badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs")),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils.ts");const badgeVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)("inline-flex items-center rounded-Pills transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",{variants:{variant:{"primary-info":" bg-pills-primary-information text-pills-primary-information","primary-warning":" bg-pills-primary-warning text-pills-primary-warning","primary-success":" bg-pills-primary-success text-pills-primary-success","primary-error":" bg-pills-primary-error text-pills-primary-error","primary-neutral":" bg-pills-primary-neutral text-pills-primary-neutral","secondary-info":" bg-pills-secondary-information text-pills-secondary-information","secondary-warning":" bg-pills-secondary-warning text-pills-secondary-warning","secondary-success":" bg-pills-secondary-success text-pills-secondary-success","secondary-error":" bg-pills-secondary-error text-pills-secondary-error","secondary-neutral":" bg-pills-secondary-neutral text-pills-secondary-neutral"},size:{s:"h-Pills-s px-1x gap-0.5x text-description-s-medium",l:"h-Pills-l px-1.5x gap-1x text-description-l-medium"}},defaultVariants:{variant:"primary-info",size:"s"}});function Badge({className,variant,size,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(badgeVariants({variant,size}),className),...props})}Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]}},"./components/ui/tab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Tab});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Tab=({isActive,className,children,...props})=>{const activeClass=isActive?"bg-darks text-weak hover:text-weaker hover:bg-weak":"bg-weak text-weak hover:bg-darks hover:text-weaker",fontClass=isActive?"text-body-s-medium":"text-body-s-strong";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:`w-8x h-8x cursor-pointer flex items-center justify-center p-[10px] rounded-sm ${activeClass} ${className}`,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:fontClass,children})})};Tab.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const customTWMerge=(0,__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs").zu)({extend:{classGroups:{"font-size":["text-description-s-medium","text-description-l-medium","text-description-s","text-description-l","text-number-s","text-body-s","text-body-s-medium","text-body-s-strong","text-body-l-medium","text-body-l-strong","text-body-m-medium","text-body-m-strong","text-description-l-strong","text-body-3xl-strong","text-body-2xl-strong"],"border-color":["border-CurrencyField-primary-default","border-CurrencyField-primary-active","border-CurrencyField-primary-disabled","border-surface-overlay","border-button-outline-neutral-default","border-default"],"border-w":["border-Button-xl"],rounded:["rounded-l"]}}});function cn(...inputs){return customTWMerge((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);