"use strict";(self.webpackChunkkyoto_univ_marketing_web=self.webpackChunkkyoto_univ_marketing_web||[]).push([[3236],{"./src/components/top/ImageSwitch/ImageSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_ImageSwitch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/top/ImageSwitch/ImageSwitch.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_ImageSwitch__WEBPACK_IMPORTED_MODULE_1__._,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{imageList:["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kyoto_University_Clock_Tower.jpg/1200px-Kyoto_University_Clock_Tower.jpg","https://www.keihanhotels-resorts.co.jp/the-thousand-kyoto/sight/asset/b5bcabab0fcde4e3b4969d388a4923f30fc7e549.png","https://www.shokoku-ji.jp/wp-content/themes/shokokuji/assets/img/kinkakuji/about/imgSlide01@2x.jpg"].map((src=>({src}))),interval:7500,transitionDuration:2e3}},Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageSwitch__WEBPACK_IMPORTED_MODULE_1__._,{...args})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  render: args => <ImageSwitch {...args} />\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/components/top/ImageSwitch/ImageSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>ImageSwitch});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.1.11_esbuild@0.20.2_next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react_y4m3wlwirokx2hom7p2z5s3tjm/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const ImageSwitch=param=>{let{imageList,interval,transitionDuration,className,...props}=param;const[current,setCurrent]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),imageLen=imageList.length;return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{const intervalId=setInterval((()=>{setCurrent((prev=>(prev+1)%imageLen))}),interval);return()=>clearInterval(intervalId)}),[imageLen,interval]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("h-svh w-full",className),children:imageList.map(((param,index)=>{let{src,alt}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Img,{alt:null!=alt?alt:"",isShow:current===index,loading:0===index?"eager":"lazy",priority:0===index,src,transitionDuration},index)}))})},Img=param=>{let{src,alt,isShow,transitionDuration,style,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{...props,alt,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("h-full w-full object-cover transition-opacity ease-in-out",isShow?"opacity-100":"opacity-0"),fill:!0,src,style:{transitionDuration:"".concat(transitionDuration,"ms"),...style}})};ImageSwitch.__docgenInfo={description:"",methods:[],displayName:"ImageSwitch",props:{imageList:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ src: string; alt?: string }",signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}}]}}],raw:"{ src: string; alt?: string }[]"},description:"画像データのリスト"},interval:{required:!0,tsType:{name:"number"},description:"画像切替の間隔（ms）"},transitionDuration:{required:!0,tsType:{name:"number"},description:"切り替えアニメーションの長さ（ms）"},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);