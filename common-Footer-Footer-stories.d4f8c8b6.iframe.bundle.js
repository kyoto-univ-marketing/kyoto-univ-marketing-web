/*! For license information please see common-Footer-Footer-stories.d4f8c8b6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkkyoto_univ_marketing_web=self.webpackChunkkyoto_univ_marketing_web||[]).push([[876],{"./src/components/common/Footer/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),pageLinks=__webpack_require__("./src/constants/pageLinks.ts"),MailAndSNS=__webpack_require__("./src/components/common/MailAndSNS/MailAndSNS.tsx"),NextLink=__webpack_require__("./src/components/common/NextLink/NextLink.tsx");const Footer=param=>{let{...props}=param;return(0,jsx_runtime.jsxs)("footer",{className:"flex w-full flex-col items-center overflow-x-hidden text-primary-foreground",children:[(0,jsx_runtime.jsx)("div",{className:"h-24 w-[110%] rounded-t-[100%] bg-primary"}),(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col items-center bg-primary px-12 pb-12 pt-4",children:[(0,jsx_runtime.jsx)("ul",{className:"w-full space-y-4",children:pageLinks.A.map((link=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(NextLink.S,{href:link.href,children:link.text})},link.href)))}),(0,jsx_runtime.jsx)(MailAndSNS.P,{className:"mt-12"})]})]})};var _Default_parameters,_Default_parameters_docs,_Default_parameters1;Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};const Footer_stories={component:Footer,parameters:{layout:"fullscreen"},tags:["autodocs"]},Default={};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/components/common/MailAndSNS/MailAndSNS.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>MailAndSNS});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js");const Mail=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);var fa6=__webpack_require__("__barrel_optimize__?names=FaInstagram,FaXTwitter!=!./node_modules/.pnpm/react-icons@5.2.1_react@18.3.1/node_modules/react-icons/fa6/index.mjs"),profile=__webpack_require__("./src/constants/profile.ts"),utils=__webpack_require__("./src/lib/utils.ts"),NextLink=__webpack_require__("./src/components/common/NextLink/NextLink.tsx");const MailAndSNS=param=>{let{snsIconSize=32,mailIconSize=24,mailTextClassName,className,...props}=param;return(0,jsx_runtime.jsxs)("div",{...props,className:(0,utils.cn)("flex w-full flex-col items-center",className),children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(Mail,{size:mailIconSize}),(0,jsx_runtime.jsx)(NextLink.S,{className:(0,utils.cn)("text-accent-sm",mailTextClassName),href:"mailto:".concat(profile.A.mailAddress),children:profile.A.mailAddress})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-4 grid w-full grid-flow-col justify-evenly",children:[(0,jsx_runtime.jsx)(NextLink.S,{href:profile.A.xUrl,children:(0,jsx_runtime.jsx)(fa6.TCj,{size:snsIconSize})}),(0,jsx_runtime.jsx)(NextLink.S,{href:profile.A.instagramUrl,children:(0,jsx_runtime.jsx)(fa6.ao$,{size:snsIconSize})})]})]})};MailAndSNS.__docgenInfo={description:"",methods:[],displayName:"MailAndSNS",props:{snsIconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},mailIconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},mailTextClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentProps"]}},"./src/constants/pageLinks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,F:()=>pageLinkObject});const pageLinks=[{href:"/",text:"トップページ",textEng:"TOP"},{href:"/about",text:"サークルについて",textEng:"ABOUT"},{href:"/articles",text:"活動記録",textEng:"ARCHIVE"},{href:"/projects",text:"プロジェクト",textEng:"PROJECT"},{href:"/links",text:"リンク集",textEng:"LINKS"},{href:"/contact",text:"お問い合わせ",textEng:"CONTACT"}],__WEBPACK_DEFAULT_EXPORT__=pageLinks,pageLinkObject=pageLinks.reduce(((acc,pageLink)=>({...acc,[pageLink.textEng]:pageLink})),{})},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}}}]);