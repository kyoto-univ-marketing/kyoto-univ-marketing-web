/*! For license information please see about-AboutPage-AboutPage-stories.dea38077.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkkyoto_univ_marketing_web=self.webpackChunkkyoto_univ_marketing_web||[]).push([[2702],{"./src/components/about/AboutPage/AboutPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AboutPage_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),BreadCrumb=__webpack_require__("./src/components/common/BreadCrumb/BreadCrumb.tsx"),PageTitle=__webpack_require__("./src/components/common/PageTitle/PageTitle.tsx"),pageLinks=__webpack_require__("./src/constants/pageLinks.ts"),AboutAccordion=__webpack_require__("./src/components/about/AboutAccordion/AboutAccordion.tsx");const AboutPage=param=>{let{...props}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BreadCrumb.Y,{items:[{href:pageLinks.F.TOP.href,label:pageLinks.F.TOP.textEng},{href:pageLinks.F.ABOUT.href,label:pageLinks.F.ABOUT.text}]}),(0,jsx_runtime.jsx)(PageTitle.s,{children:"京大マーケティング研究所について"}),(0,jsx_runtime.jsx)("div",{className:"mb-12 px-6",children:(0,jsx_runtime.jsx)(AboutAccordion.y,{})})]})};var _Default_parameters,_Default_parameters_docs,_Default_parameters1;AboutPage.__docgenInfo={description:"",methods:[],displayName:"AboutPage"};const AboutPage_stories={component:AboutPage,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{}},Default={};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/components/common/BreadCrumb/BreadCrumb.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>BreadCrumb});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),slash=__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/slash.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),profile=__webpack_require__("./src/constants/profile.ts"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs"),chevron_right=__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js"),ellipsis=__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/ellipsis.js"),utils=__webpack_require__("./src/lib/utils.ts");const Breadcrumb=(0,react.forwardRef)(((param,ref)=>{let{...props}=param;return(0,jsx_runtime.jsx)("nav",{"aria-label":"breadcrumb",ref,...props})}));Breadcrumb.displayName="Breadcrumb";const BreadcrumbList=(0,react.forwardRef)(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)("ol",{className:(0,utils.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",className),ref,...props})}));BreadcrumbList.displayName="BreadcrumbList";const BreadcrumbItem=(0,react.forwardRef)(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)("li",{className:(0,utils.cn)("inline-flex items-center gap-1.5",className),ref,...props})}));BreadcrumbItem.displayName="BreadcrumbItem";const BreadcrumbLink=(0,react.forwardRef)(((param,ref)=>{let{asChild,className,...props}=param;const Comp=asChild?dist.DX:"a";return(0,jsx_runtime.jsx)(Comp,{className:(0,utils.cn)("transition-colors hover:text-foreground",className),ref,...props})}));BreadcrumbLink.displayName="BreadcrumbLink";const BreadcrumbPage=(0,react.forwardRef)(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)("span",{"aria-current":"page","aria-disabled":"true",className:(0,utils.cn)("font-normal text-foreground",className),ref,role:"link",...props})}));BreadcrumbPage.displayName="BreadcrumbPage";const BreadcrumbSeparator=param=>{let{children,className,...props}=param;return(0,jsx_runtime.jsx)("li",{"aria-hidden":"true",className:(0,utils.cn)("[&>svg]:size-3.5",className),role:"presentation",...props,children:null!=children?children:(0,jsx_runtime.jsx)(chevron_right.A,{})})};BreadcrumbSeparator.displayName="BreadcrumbSeparator";const BreadcrumbEllipsis=param=>{let{className,...props}=param;return(0,jsx_runtime.jsxs)("span",{"aria-hidden":"true",className:(0,utils.cn)("flex h-9 w-9 items-center justify-center",className),role:"presentation",...props,children:[(0,jsx_runtime.jsx)(ellipsis.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"More"})]})};BreadcrumbEllipsis.displayName="BreadcrumbElipssis",Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"},BreadcrumbEllipsis.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbElipssis"},BreadcrumbItem.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"},BreadcrumbLink.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"},BreadcrumbList.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"},BreadcrumbPage.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"},BreadcrumbSeparator.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};var script=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/script.js"),script_default=__webpack_require__.n(script);const JsonLD=param=>{let{id,json,...props}=param;return(0,jsx_runtime.jsx)(script_default(),{dangerouslySetInnerHTML:{__html:JSON.stringify(json)},id,type:"application/ld+json"})};JsonLD.__docgenInfo={description:"",methods:[],displayName:"JsonLD",props:{id:{required:!0,tsType:{name:"string"},description:""},json:{required:!0,tsType:{name:"WithContext",elements:[{name:"T"}],raw:"WithContext<T>"},description:""}}};var NextLink=__webpack_require__("./src/components/common/NextLink/NextLink.tsx");const BreadCrumb=param=>{let{items,...props}=param;const json=(items=>({"@context":"https://schema.org","@type":"BreadcrumbList",name:"パンくずリスト",itemListElement:items.map((item=>({"@type":"ListItem",position:items.indexOf(item)+1,name:item.label,item:"".concat(profile.A.homepageUrl).concat(item.href)})))}))(items);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Breadcrumb,{className:"bg-backgroundSecondary px-6 py-2",children:(0,jsx_runtime.jsx)(BreadcrumbList,{children:items.map(((item,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:index<items.length-1?(0,jsx_runtime.jsx)(BreadcrumbLink,{asChild:!0,children:(0,jsx_runtime.jsx)(NextLink.S,{href:item.href,children:item.label})}):(0,jsx_runtime.jsx)(BreadcrumbPage,{children:item.label})}),index<items.length-1&&(0,jsx_runtime.jsx)(BreadcrumbSeparator,{children:(0,jsx_runtime.jsx)(slash.A,{})})]},index)))})}),(0,jsx_runtime.jsx)(JsonLD,{id:"breadcrumb-json-ld",json})]})};BreadCrumb.__docgenInfo={description:"パンくずリスト",methods:[],displayName:"BreadCrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadCrumbItem"}],raw:"BreadCrumbItem[]"},description:"リンクとラベルのリスト"}}}},"./src/components/common/NextLink/NextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>NextLink});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const NextLink=param=>{let{...props}=param;const isExternal=(()=>{let href="";return href="string"!=typeof props.href?props.href.href||"":props.href,!href.startsWith("/")&&!href.match("https?://".concat("kyodaimarketing.com"))})();return(0,jsx_runtime.jsx)(link_default(),{rel:isExternal?"noopener noreferrer":void 0,target:isExternal?"_blank":void 0,...props})};NextLink.__docgenInfo={description:"",methods:[],displayName:"NextLink",composes:["ComponentProps"]}},"./src/components/common/PageTitle/PageTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>PageTitle});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs");const PageTitle=param=>{let{asChild,children,...props}=param;const Component=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_1__.DX:"h1";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"my-12 w-full px-12 text-title",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{className:"mx-auto w-fit",children})})};PageTitle.__docgenInfo={description:"各ページのタイトル",methods:[],displayName:"PageTitle"}},"./src/constants/pageLinks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,F:()=>pageLinkObject});const pageLinks=[{href:"/",text:"トップページ",textEng:"TOP"},{href:"/about",text:"サークルについて",textEng:"ABOUT"},{href:"/articles",text:"活動記録",textEng:"ARCHIVE"},{href:"/projects",text:"プロジェクト",textEng:"PROJECT"},{href:"/links",text:"リンク集",textEng:"LINKS"},{href:"/contact",text:"お問い合わせ",textEng:"CONTACT"}],__WEBPACK_DEFAULT_EXPORT__=pageLinks,pageLinkObject=pageLinks.reduce(((acc,pageLink)=>({...acc,[pageLink.textEng]:pageLink})),{})},"./src/constants/profile.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={xUrl:"https://twitter.com/ku__marketing/",instagramUrl:"https://www.instagram.com/kyotouniv_marketing/",mailAddress:"kyoto.univ.marketing@gmail.com",homepageUrl:"https://kyodaimarketing.com"}},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ChevronRight});const ChevronRight=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/ellipsis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Ellipsis});const Ellipsis=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/slash.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Slash});const Slash=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]])},"./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/script.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/script.js")}}]);