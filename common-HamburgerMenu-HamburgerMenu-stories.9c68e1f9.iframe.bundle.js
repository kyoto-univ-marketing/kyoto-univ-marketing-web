"use strict";(self.webpackChunkkyoto_univ_marketing_web=self.webpackChunkkyoto_univ_marketing_web||[]).push([[168],{"./src/components/common/HamburgerMenu/HamburgerMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/common/HamburgerMenu/HamburgerMenu.tsx").R,tags:["autodocs"]},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./public/logo.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/logo.006ef11a.png",height:740,width:740,blurDataURL:"static/media/logo.006ef11a.png"}},"./src/components/common/HamburgerMenu/HamburgerMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>HamburgerMenu});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),menu=__webpack_require__("./node_modules/.pnpm/lucide-react@0.468.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/menu.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),pageLinks=__webpack_require__("./src/constants/pageLinks.ts"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-dialog@1.1.2_@types+react-dom@19.0.2_@types+react@19.0.1__@types+react@19.0.1_ppnjjcypvwff6lzrvv4nbfslli/node_modules/@radix-ui/react-dialog/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs"),x=__webpack_require__("./node_modules/.pnpm/lucide-react@0.468.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/x.js"),utils=__webpack_require__("./src/lib/utils.ts");const Sheet=dist.bL,SheetTrigger=dist.l9,SheetPortal=(dist.bm,dist.ZL),SheetOverlay=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.hJ,{className:(0,utils.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",className),...props,ref})));SheetOverlay.displayName=dist.hJ.displayName;const sheetVariants=(0,class_variance_authority_dist.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),SheetContent=(0,react.forwardRef)((({side="right",className,children,...props},ref)=>(0,jsx_runtime.jsxs)(SheetPortal,{children:[(0,jsx_runtime.jsx)(SheetOverlay,{}),(0,jsx_runtime.jsxs)(dist.UC,{className:(0,utils.cn)(sheetVariants({side}),className),ref,...props,children:[children,(0,jsx_runtime.jsxs)(dist.bm,{className:"absolute right-4 top-4 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,jsx_runtime.jsx)(x.A,{className:"size-8"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})));SheetContent.displayName=dist.UC.displayName;const SheetHeader=({className,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("flex flex-col space-y-2 text-center sm:text-left",className),...props});SheetHeader.displayName="SheetHeader";const SheetFooter=({className,...props})=>(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",className),...props});SheetFooter.displayName="SheetFooter";const SheetTitle=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.hE,{className:(0,utils.cn)("text-lg font-semibold text-foreground",className),ref,...props})));SheetTitle.displayName=dist.hE.displayName;const SheetDescription=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.VY,{className:(0,utils.cn)("text-sm text-muted-foreground",className),ref,...props})));SheetDescription.displayName=dist.VY.displayName,SheetContent.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:"'right'",computed:!1},required:!1}},composes:["ComponentPropsWithoutRef","VariantProps"]},SheetDescription.__docgenInfo={description:"",methods:[]},SheetFooter.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"},SheetHeader.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"},SheetOverlay.__docgenInfo={description:"",methods:[]},SheetTitle.__docgenInfo={description:"",methods:[]};var Logo=__webpack_require__("./src/components/common/Logo/Logo.tsx"),MailAndSNS=__webpack_require__("./src/components/common/MailAndSNS/MailAndSNS.tsx"),NextLink=__webpack_require__("./src/components/common/NextLink/NextLink.tsx");const HamburgerMenu=({...props})=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(Sheet,{onOpenChange:setOpen,open,children:[(0,jsx_runtime.jsx)(SheetTrigger,{children:(0,jsx_runtime.jsx)(menu.A,{})}),(0,jsx_runtime.jsxs)(SheetContent,{className:"flex flex-col gap-0 border-primary bg-primary text-primary-foreground",children:[(0,jsx_runtime.jsxs)(SheetHeader,{className:"mt-8",children:[(0,jsx_runtime.jsx)(Logo.g,{className:"mx-auto",reverse:!0,size:"xl"}),(0,jsx_runtime.jsx)(SheetTitle,{className:"mx-auto font-title text-heading text-primary-foreground",children:"京大マーケティング研究所"})]}),(0,jsx_runtime.jsx)("ul",{className:"mt-12 space-y-4 px-6",children:pageLinks.A.map((link=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)(NextLink.S,{className:"underline-offset-2 hover:underline",href:link.href,onClick:()=>setOpen(!1),children:[(0,jsx_runtime.jsx)("p",{className:"text-lg",children:link.textEng}),(0,jsx_runtime.jsx)("p",{className:"text-xs",children:link.text})]})},link.href)))}),(0,jsx_runtime.jsx)(MailAndSNS.P,{className:"mt-auto justify-self-end",mailIconSize:16,mailTextClassName:"text-xs",snsIconSize:24})]})]})};HamburgerMenu.__docgenInfo={description:"",methods:[],displayName:"HamburgerMenu"}},"./src/components/common/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Logo});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.4.7_esbuild@0.24.0_next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@_5xpttqrxhue7gcg5cr27lsvorq/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),logo=__webpack_require__("./public/logo.png");const logo_rev={src:"static/media/logo_rev.5c0a9d08.png",height:740,width:740,blurDataURL:"static/media/logo_rev.5c0a9d08.png"};var dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-avatar@1.1.1_@types+react-dom@19.0.2_@types+react@19.0.1__@types+react@19.0.1_rg4tsgua6fh35f3ra55e7phc54/node_modules/@radix-ui/react-avatar/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./src/lib/utils.ts");const avatarVariants=(0,class_variance_authority_dist.F)("relative flex shrink-0 overflow-hidden rounded-full",{variants:{size:{sm:"size-8",md:"size-10",lg:"size-12",xl:"size-14","2xl":"size-16","3xl":"size-20"}},defaultVariants:{size:"md"}}),Avatar=(0,react.forwardRef)((({className,size,...props},ref)=>(0,jsx_runtime.jsx)(dist.bL,{className:(0,utils.cn)(avatarVariants({size,className})),ref,...props})));Avatar.displayName=dist.bL.displayName;const AvatarImage=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist._V,{className:(0,utils.cn)("aspect-square h-full w-full",className),ref,...props})));AvatarImage.displayName=dist._V.displayName;const AvatarFallback=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.H4,{className:(0,utils.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",className),ref,...props})));AvatarFallback.displayName=dist.H4.displayName,Avatar.__docgenInfo={description:"",methods:[],composes:["ComponentPropsWithoutRef","VariantProps"]},AvatarFallback.__docgenInfo={description:"",methods:[]},AvatarImage.__docgenInfo={description:"",methods:[]};const Logo=({reverse,...props})=>{const lg=reverse?logo_rev:logo.A;return(0,jsx_runtime.jsxs)(Avatar,{...props,children:[(0,jsx_runtime.jsx)(AvatarImage,{asChild:!0,src:lg.src,children:(0,jsx_runtime.jsx)(next_image.A,{alt:"logo",fill:!0,src:lg})}),(0,jsx_runtime.jsx)(AvatarFallback,{children:"logo"})]})};Logo.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{reverse:{required:!1,tsType:{name:"boolean"},description:"色反転"}},composes:["ComponentPropsWithoutRef","VariantProps"]}},"./src/components/common/MailAndSNS/MailAndSNS.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>MailAndSNS});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_MailIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/lucide-react@0.468.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/mail.js"),_barrel_optimize_names_FaInstagram_FaXTwitter_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("__barrel_optimize__?names=FaSpinner!=!./node_modules/.pnpm/react-icons@5.4.0_react@19.0.0/node_modules/react-icons/fa6/index.mjs"),_constants_profile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/profile.ts"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts"),_NextLink_NextLink__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/NextLink/NextLink.tsx");const MailAndSNS=({snsIconSize=32,mailIconSize=24,mailTextClassName,className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{...props,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex w-full flex-col items-center",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_MailIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,{size:mailIconSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NextLink_NextLink__WEBPACK_IMPORTED_MODULE_2__.S,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-accent-sm",mailTextClassName),href:`mailto:${_constants_profile__WEBPACK_IMPORTED_MODULE_1__.A.mailAddress}`,children:_constants_profile__WEBPACK_IMPORTED_MODULE_1__.A.mailAddress})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-4 grid w-full grid-flow-col justify-evenly",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NextLink_NextLink__WEBPACK_IMPORTED_MODULE_2__.S,{href:_constants_profile__WEBPACK_IMPORTED_MODULE_1__.A.xUrl,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FaInstagram_FaXTwitter_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.TCj,{size:snsIconSize})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NextLink_NextLink__WEBPACK_IMPORTED_MODULE_2__.S,{href:_constants_profile__WEBPACK_IMPORTED_MODULE_1__.A.instagramUrl,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_FaInstagram_FaXTwitter_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.ao$,{size:snsIconSize})})]})]});MailAndSNS.__docgenInfo={description:"",methods:[],displayName:"MailAndSNS",props:{snsIconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},mailIconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},mailTextClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentProps"]}},"./src/components/common/NextLink/NextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>NextLink});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const NextLink=({...props})=>{const isExternal=(()=>{let href="";return href="string"!=typeof props.href?props.href.href||"":props.href,!href.startsWith("/")&&!href.match("https?://kyodaimarketing.com")})();return(0,jsx_runtime.jsx)(link_default(),{rel:isExternal?"noopener noreferrer":void 0,target:isExternal?"_blank":void 0,...props})};NextLink.__docgenInfo={description:"",methods:[],displayName:"NextLink",composes:["ComponentProps"]}},"./src/constants/pageLinks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,F:()=>pageLinkObject});const pageLinks=[{href:"/",text:"トップページ",textEng:"TOP"},{href:"/about",text:"サークルについて",textEng:"ABOUT"},{href:"/articles",text:"活動記録",textEng:"ARCHIVE"},{href:"/projects",text:"プロジェクト",textEng:"PROJECT"},{href:"/links",text:"リンク集",textEng:"LINKS"},{href:"/contact",text:"お問い合わせ",textEng:"CONTACT"}],__WEBPACK_DEFAULT_EXPORT__=pageLinks,pageLinkObject=pageLinks.reduce(((acc,pageLink)=>({...acc,[pageLink.textEng]:pageLink})),{})},"./src/constants/profile.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={xUrl:"https://twitter.com/ku__marketing/",instagramUrl:"https://www.instagram.com/kyotouniv_marketing/",mailAddress:"kyoto.univ.marketing@gmail.com",homepageUrl:"https://kyodaimarketing.com"}}}]);