"use strict";(self.webpackChunkkyoto_univ_marketing_web=self.webpackChunkkyoto_univ_marketing_web||[]).push([[4265],{"./src/components/contact/ContactForm/ContactForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Failed:()=>Failed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ContactForm_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),ContactForm=__webpack_require__("./src/components/contact/ContactForm/ContactForm.tsx"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-toast@1.2.2_@types+react-dom@19.0.2_@types+react@19.0.1__@types+react@19.0.1__mwnd6wiv2vltaoldcbhfrr2whe/node_modules/@radix-ui/react-toast/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs"),x=__webpack_require__("./node_modules/.pnpm/lucide-react@0.468.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/x.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./src/lib/utils.ts");const ToastProvider=dist.Kq,ToastViewport=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.LM,{className:(0,utils.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",className),ref,...props})));ToastViewport.displayName=dist.LM.displayName;const toastVariants=(0,class_variance_authority_dist.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Toast=(0,react.forwardRef)((({className,variant,...props},ref)=>(0,jsx_runtime.jsx)(dist.bL,{className:(0,utils.cn)(toastVariants({variant}),className),ref,...props})));Toast.displayName=dist.bL.displayName;const ToastAction=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.rc,{className:(0,utils.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",className),ref,...props})));ToastAction.displayName=dist.rc.displayName;const ToastClose=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.bm,{className:(0,utils.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",className),ref,"toast-close":"",...props,children:(0,jsx_runtime.jsx)(x.A,{className:"h-4 w-4"})})));ToastClose.displayName=dist.bm.displayName;const ToastTitle=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.hE,{className:(0,utils.cn)("text-sm font-semibold",className),ref,...props})));ToastTitle.displayName=dist.hE.displayName;const ToastDescription=(0,react.forwardRef)((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.VY,{className:(0,utils.cn)("text-sm opacity-90",className),ref,...props})));ToastDescription.displayName=dist.VY.displayName,Toast.__docgenInfo={description:"",methods:[]},ToastAction.__docgenInfo={description:"",methods:[]},ToastClose.__docgenInfo={description:"",methods:[]},ToastDescription.__docgenInfo={description:"",methods:[]},ToastTitle.__docgenInfo={description:"",methods:[]},ToastViewport.__docgenInfo={description:"",methods:[]};var use_toast=__webpack_require__("./src/components/ui/use-toast.ts");function Toaster(){const{toasts}=(0,use_toast.dj)();return(0,jsx_runtime.jsxs)(ToastProvider,{children:[toasts.map((function({id,title,description,action,...props}){return(0,jsx_runtime.jsxs)(Toast,{...props,children:[(0,jsx_runtime.jsxs)("div",{className:"grid gap-1",children:[title&&(0,jsx_runtime.jsx)(ToastTitle,{children:title}),description&&(0,jsx_runtime.jsx)(ToastDescription,{children:description})]}),action,(0,jsx_runtime.jsx)(ToastClose,{})]},id)})),(0,jsx_runtime.jsx)(ToastViewport,{})]})}Toaster.__docgenInfo={description:"",methods:[],displayName:"Toaster"};const ContactForm_stories={component:ContactForm.D,tags:["autodocs"]},Default={args:{onSubmit:async()=>{await new Promise((resolve=>setTimeout(resolve,1e3)))}}},Failed={args:{onSubmit:async()=>{throw await new Promise((resolve=>setTimeout(resolve,1e3))),new Error("Failed")}},render:args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ContactForm.D,{...args}),(0,jsx_runtime.jsx)(Toaster,{})]})},__namedExportsOrder=["Default","Failed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    onSubmit: async () => {\n      const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));\n      await sleep();\n    }\n  }\n}",...Default.parameters?.docs?.source},description:{story:"フォーム送信に成功した時\n\n本来は別ページに遷移する",...Default.parameters?.docs?.description}}},Failed.parameters={...Failed.parameters,docs:{...Failed.parameters?.docs,source:{originalSource:"{\n  args: {\n    onSubmit: async () => {\n      const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));\n      await sleep();\n      throw new Error('Failed');\n    }\n  },\n  render: args => <>\n            <ContactForm {...args} />\n            <Toaster />\n        </>\n}",...Failed.parameters?.docs?.source},description:{story:"フォーム送信に失敗したとき",...Failed.parameters?.docs?.description}}}}}]);