/*! For license information please see 178.e8803021.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkkyoto_univ_marketing_web=self.webpackChunkkyoto_univ_marketing_web||[]).push([[178],{"./node_modules/.pnpm/@radix-ui+primitive@1.1.0/node_modules/@radix-ui/primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function composeEventHandlers(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(originalEventHandler?.(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return ourEventHandler?.(event)}}__webpack_require__.d(__webpack_exports__,{m:()=>composeEventHandlers})},"./node_modules/.pnpm/@radix-ui+react-alert-dialog@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3_mikl45ntzrsvhehjox2r65fjei/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{UC:()=>Content2,VY:()=>Description2,ZD:()=>Cancel,ZL:()=>Portal2,bL:()=>Root2,hE:()=>Title2,hJ:()=>Overlay2,l9:()=>Trigger2,rc:()=>Action});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-dialog@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-dialog/dist/index.mjs"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@radix-ui+primitive@1.1.0/node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js"),[createAlertDialogContext,createAlertDialogScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("AlertDialog",[_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.createDialogScope]),useDialogScope=(0,_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.createDialogScope)(),AlertDialog=props=>{const{__scopeAlertDialog,...alertDialogProps}=props,dialogScope=useDialogScope(__scopeAlertDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Root,{...dialogScope,...alertDialogProps,modal:!0})};AlertDialog.displayName="AlertDialog";var AlertDialogTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAlertDialog,...triggerProps}=props,dialogScope=useDialogScope(__scopeAlertDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Trigger,{...dialogScope,...triggerProps,ref:forwardedRef})}));AlertDialogTrigger.displayName="AlertDialogTrigger";var AlertDialogPortal=props=>{const{__scopeAlertDialog,...portalProps}=props,dialogScope=useDialogScope(__scopeAlertDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Portal,{...dialogScope,...portalProps})};AlertDialogPortal.displayName="AlertDialogPortal";var AlertDialogOverlay=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAlertDialog,...overlayProps}=props,dialogScope=useDialogScope(__scopeAlertDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay,{...dialogScope,...overlayProps,ref:forwardedRef})}));AlertDialogOverlay.displayName="AlertDialogOverlay";var CONTENT_NAME="AlertDialogContent",[AlertDialogContentProvider,useAlertDialogContentContext]=createAlertDialogContext(CONTENT_NAME),AlertDialogContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAlertDialog,children,...contentProps}=props,dialogScope=useDialogScope(__scopeAlertDialog),contentRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(forwardedRef,contentRef),cancelRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.WarningProvider,{contentName:CONTENT_NAME,titleName:TITLE_NAME,docsSlug:"alert-dialog",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AlertDialogContentProvider,{scope:__scopeAlertDialog,cancelRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content,{role:"alertdialog",...dialogScope,...contentProps,ref:composedRefs,onOpenAutoFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.m)(contentProps.onOpenAutoFocus,(event=>{event.preventDefault(),cancelRef.current?.focus({preventScroll:!0})})),onPointerDownOutside:event=>event.preventDefault(),onInteractOutside:event=>event.preventDefault(),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_6__.xV,{children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DescriptionWarning,{contentRef})]})})})}));AlertDialogContent.displayName=CONTENT_NAME;var TITLE_NAME="AlertDialogTitle",AlertDialogTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAlertDialog,...titleProps}=props,dialogScope=useDialogScope(__scopeAlertDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title,{...dialogScope,...titleProps,ref:forwardedRef})}));AlertDialogTitle.displayName=TITLE_NAME;var AlertDialogDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAlertDialog,...descriptionProps}=props,dialogScope=useDialogScope(__scopeAlertDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Description,{...dialogScope,...descriptionProps,ref:forwardedRef})}));AlertDialogDescription.displayName="AlertDialogDescription";var AlertDialogAction=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAlertDialog,...actionProps}=props,dialogScope=useDialogScope(__scopeAlertDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close,{...dialogScope,...actionProps,ref:forwardedRef})}));AlertDialogAction.displayName="AlertDialogAction";var AlertDialogCancel=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAlertDialog,...cancelProps}=props,{cancelRef}=useAlertDialogContentContext("AlertDialogCancel",__scopeAlertDialog),dialogScope=useDialogScope(__scopeAlertDialog),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(forwardedRef,cancelRef);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close,{...dialogScope,...cancelProps,ref})}));AlertDialogCancel.displayName="AlertDialogCancel";var DescriptionWarning=({contentRef})=>{const MESSAGE=`\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the \`${CONTENT_NAME}\` by passing a \`AlertDialogDescription\` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{document.getElementById(contentRef.current?.getAttribute("aria-describedby"))||console.warn(MESSAGE)}),[MESSAGE,contentRef]),null},Root2=AlertDialog,Trigger2=AlertDialogTrigger,Portal2=AlertDialogPortal,Overlay2=AlertDialogOverlay,Content2=AlertDialogContent,Action=AlertDialogAction,Cancel=AlertDialogCancel,Title2=AlertDialogTitle,Description2=AlertDialogDescription},"./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createContextScope,q:()=>createContext2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js");function createContext2(rootComponentName,defaultContext){const Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);function Provider(props){const{children,...context}=props,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}},"./node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{}),count=0;function useId(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>reactId??String(count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/.pnpm/@radix-ui+react-presence@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>Presence});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");var Presence=props=>{const{present,children}=props,presence=function usePresence(present){const[node,setNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(),stylesRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef({}),prevPresentRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(present),prevAnimationNameRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef("none"),initialState=present?"mounted":"unmounted",[state,send]=function useStateMachine(initialState,machine){return react__WEBPACK_IMPORTED_MODULE_0__.useReducer(((state,event)=>machine[state][event]??state),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const currentAnimationName=getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.N)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===styles?.display)send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.N)((()=>{if(node){const handleAnimationEnd=event=>{const isCurrentAnimation=getAnimationName(stylesRef.current).includes(event.animationName);event.target===node&&isCurrentAnimation&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node&&(prevAnimationNameRef.current=getAnimationName(stylesRef.current))};return node.addEventListener("animationstart",handleAnimationStart),node.addEventListener("animationcancel",handleAnimationEnd),node.addEventListener("animationend",handleAnimationEnd),()=>{node.removeEventListener("animationstart",handleAnimationStart),node.removeEventListener("animationcancel",handleAnimationEnd),node.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2=>{node2&&(stylesRef.current=getComputedStyle(node2)),setNode(node2)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(presence.ref,function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(child));return"function"==typeof children||presence.isPresent?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{ref}):null};function getAnimationName(styles){return styles?.animationName||"none"}Presence.displayName="Presence"},"./node_modules/.pnpm/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>useCallbackRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");function useCallbackRef(callback){const callbackRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{callbackRef.current=callback})),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}},"./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>useControllableState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function useControllableState({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function useUncontrolledState({defaultProp,onChange}){const uncontrolledState=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp),[value]=uncontrolledState,prevValueRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return[value,react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextValue=>{if(isControlled){const value2="function"==typeof nextValue?nextValue(prop):nextValue;value2!==prop&&handleChange(value2)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useLayoutEffect2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),useLayoutEffect2=Boolean(globalThis?.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},"./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ChevronRight});const ChevronRight=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/ellipsis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Ellipsis});const Ellipsis=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},"./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/slash.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Slash});const Slash=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.399.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]])},"./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/script.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/script.js")}}]);