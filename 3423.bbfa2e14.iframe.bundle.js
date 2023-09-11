"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3423],{"./packages/components/src/flex/flex-item/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/flex-item/hook.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedFlexItem(props,forwardedRef){const flexItemProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.i)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{...flexItemProps,ref:forwardedRef})}UnconnectedFlexItem.displayName="UnconnectedFlexItem";const FlexItem=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(UnconnectedFlexItem,"FlexItem"),__WEBPACK_DEFAULT_EXPORT__=FlexItem;try{FlexItem.displayName="FlexItem",FlexItem.__docgenInfo={description:"`FlexItem` is a primitive layout component that aligns content within layout\ncontainers like `Flex`.\n\n```jsx\nimport { Flex, FlexItem } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Flex>\n      <FlexItem>...</FlexItem>\n    </Flex>\n  );\n}\n```",displayName:"FlexItem",props:{display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},isBlock:{defaultValue:{value:"true"},description:"Determines if `FlexItem` should render as an adaptive full-width block.",name:"isBlock",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/flex/flex-item/component.tsx#FlexItem"]={docgenInfo:FlexItem.__docgenInfo,name:"FlexItem",path:"packages/components/src/flex/flex-item/component.tsx#FlexItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/flex/flex-item/hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useFlexItem});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_ui_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/context.ts"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/flex/styles.ts"),_utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useFlexItem(props){const{className,display:displayProp,isBlock=!1,...otherProps}=(0,_ui_context__WEBPACK_IMPORTED_MODULE_0__.y)(props,"FlexItem"),sx={},contextDisplay=(0,_context__WEBPACK_IMPORTED_MODULE_1__.f)().flexItemDisplay;sx.Base=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv)({display:displayProp||contextDisplay},"","");return{...otherProps,className:(0,_utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_3__.I)()(_styles__WEBPACK_IMPORTED_MODULE_4__.ck,sx.Base,isBlock&&_styles__WEBPACK_IMPORTED_MODULE_4__.Ge,className)}}},"./packages/components/src/flex/flex/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ui_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/flex/hook.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/flex/context.ts"),_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/view/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedFlex(props,forwardedRef){const{children,isColumn,...otherProps}=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.k)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.G.Provider,{value:{flexItemDisplay:isColumn?"block":void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_3__.Z,{...otherProps,ref:forwardedRef,children})})}UnconnectedFlex.displayName="UnconnectedFlex";const Flex=(0,_ui_context__WEBPACK_IMPORTED_MODULE_4__.Iq)(UnconnectedFlex,"Flex"),__WEBPACK_DEFAULT_EXPORT__=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"`Flex` is a primitive layout component that adaptively aligns child content\nhorizontally or vertically. `Flex` powers components like `HStack` and\n`VStack`.\n\n`Flex` is used with any of its two sub-components, `FlexItem` and\n`FlexBlock`.\n\n```jsx\nimport { Flex, FlexBlock, FlexItem } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Flex>\n      <FlexItem>\n        <p>Code</p>\n      </FlexItem>\n      <FlexBlock>\n        <p>Poetry</p>\n      </FlexBlock>\n    </Flex>\n  );\n}\n```",displayName:"Flex",props:{align:{defaultValue:{value:"'center'"},description:"Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:"Spacing in between each child can be adjusted by using `gap`.\n\nCan either be a number (which will act as a multiplier to the library's\ngrid system base of 4px), or a literal CSS value string.",name:"gap",required:!1,type:{name:"SpaceInput"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/flex/flex/component.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"packages/components/src/flex/flex/component.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/input-control/input-base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>input_base});var use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react=__webpack_require__("./node_modules/react/index.js"),input_control_styles=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Backdrop({disabled=!1,isFocused=!1}){return(0,jsx_runtime.jsx)(input_control_styles.Kg,{"aria-hidden":"true",className:"components-input-control__backdrop",disabled,isFocused})}Backdrop.displayName="Backdrop";const backdrop=(0,react.memo)(Backdrop);var component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx");function Label({children,hideLabelFromVision,htmlFor,...props}){return children?hideLabelFromVision?(0,jsx_runtime.jsx)(component.Z,{as:"label",htmlFor,children}):(0,jsx_runtime.jsx)(input_control_styles.ub,{children:(0,jsx_runtime.jsx)(input_control_styles.__,{htmlFor,...props,children})}):null}Label.displayName="Label";try{label.displayName="label",label.__docgenInfo={description:"",displayName:"label",props:{hideLabelFromVision:{defaultValue:null,description:"",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"edge"'},{value:'"top"'},{value:'"side"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/label.tsx#label"]={docgenInfo:label.__docgenInfo,name:"label",path:"packages/components/src/input-control/label.tsx#label"})}catch(__react_docgen_typescript_loader_error){}var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js");function getUIFlexProps(labelPosition){const props={};switch(labelPosition){case"top":props.direction="column",props.expanded=!1,props.gap=0;break;case"bottom":props.direction="column-reverse",props.expanded=!1,props.gap=0;break;case"edge":props.justify="space-between"}return props}function InputBase({__next36pxDefaultSize,__unstableInputWidth,children,className,disabled=!1,hideLabelFromVision=!1,labelPosition,id:idProp,isFocused=!1,label,prefix,size="default",suffix,...props},ref){const id=function useUniqueId(idProp){const instanceId=(0,use_instance_id.Z)(InputBase);return idProp||`input-base-control-${instanceId}`}(idProp),hideLabel=hideLabelFromVision||!label,{paddingLeft,paddingRight}=(0,input_control_styles.j7)({inputSize:size,__next36pxDefaultSize}),prefixSuffixContextValue=(0,react.useMemo)((()=>({InputControlPrefixWrapper:{paddingLeft},InputControlSuffixWrapper:{paddingRight}})),[paddingLeft,paddingRight]);return(0,jsx_runtime.jsxs)(input_control_styles.fC,{...props,...getUIFlexProps(labelPosition),className,gap:2,isFocused,labelPosition,ref,children:[(0,jsx_runtime.jsx)(Label,{className:"components-input-control__label",hideLabelFromVision,labelPosition,htmlFor:id,children:label}),(0,jsx_runtime.jsxs)(input_control_styles.W2,{__unstableInputWidth,className:"components-input-control__container",disabled,hideLabel,labelPosition,children:[(0,jsx_runtime.jsxs)(context_system_provider.G8,{value:prefixSuffixContextValue,children:[prefix&&(0,jsx_runtime.jsx)(input_control_styles.oT,{className:"components-input-control__prefix",children:prefix}),children,suffix&&(0,jsx_runtime.jsx)(input_control_styles.CM,{className:"components-input-control__suffix",children:suffix})]}),(0,jsx_runtime.jsx)(backdrop,{disabled,isFocused})]})]})}InputBase.displayName="InputBase";const input_base=(0,react.forwardRef)(InputBase)},"./packages/components/src/input-control/styles/input-control-styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CM:()=>Suffix,II:()=>Input,Kg:()=>BackdropUI,W2:()=>Container,__:()=>Label,fC:()=>Root,j7:()=>getSizeConfig,oT:()=>Prefix,ub:()=>LabelWrapper});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),_flex__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/src/flex/flex-item/component.tsx"),_text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/text/component.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/utils/base-label.ts"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/src/utils/rtl.js"),_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/ui/utils/space.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");var _ref2={name:"1739oy8",styles:"z-index:1"};const rootFocusedStyles=({isFocused})=>isFocused?_ref2:"",Root=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_flex__WEBPACK_IMPORTED_MODULE_2__.Z,{target:"em5sgkm7"})("box-sizing:border-box;position:relative;border-radius:2px;padding-top:0;",rootFocusedStyles,";");var _ref={name:"1d3w5wq",styles:"width:100%"};const Container=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"em5sgkm6"})("align-items:center;box-sizing:border-box;border-radius:inherit;display:flex;flex:1;position:relative;",(({disabled})=>{const backgroundColor=disabled?_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.backgroundDisabled:_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.background;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({backgroundColor},"","")})," ",(({__unstableInputWidth,labelPosition})=>__unstableInputWidth?"side"===labelPosition?"":"edge"===labelPosition?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({flex:`0 0 ${__unstableInputWidth}`},"",""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({width:__unstableInputWidth},"",""):_ref),";"),getSizeConfig=({inputSize:size,__next36pxDefaultSize})=>{const sizes={default:{height:36,lineHeight:1,minHeight:36,paddingLeft:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4),paddingRight:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4)},small:{height:24,lineHeight:1,minHeight:24,paddingLeft:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2),paddingRight:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2)},"__unstable-large":{height:40,lineHeight:1,minHeight:40,paddingLeft:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4),paddingRight:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4)}};return __next36pxDefaultSize||(sizes.default={height:30,lineHeight:1,minHeight:30,paddingLeft:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2),paddingRight:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2)}),sizes[size]||sizes.default},Input=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("input",{target:"em5sgkm5"})("&&&{background-color:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:",_utils__WEBPACK_IMPORTED_MODULE_3__.D.gray[900],";display:block;font-family:inherit;margin:0;outline:none;width:100%;",(({isDragging,dragCursor})=>{let defaultArrowStyles,activeDragCursorStyles;return isDragging&&(defaultArrowStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)("cursor:",dragCursor,";user-select:none;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}","")),isDragging&&dragCursor&&(activeDragCursorStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)("&:active{cursor:",dragCursor,";}","")),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)(defaultArrowStyles," ",activeDragCursorStyles,";","")})," ",(({disabled})=>disabled?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({color:_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.textDisabled},"",""):"")," ",(({inputSize:size})=>{const sizes={default:"13px",small:"11px","__unstable-large":"13px"},fontSize=sizes[size]||sizes.default;return fontSize?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)("font-size:","16px",";@media ( min-width: 600px ){font-size:",fontSize,";}",""):""})," ",(props=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)(getSizeConfig(props),"",""))," ",(({paddingInlineStart,paddingInlineEnd})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({paddingInlineStart,paddingInlineEnd},"",""))," &::-webkit-input-placeholder{line-height:normal;}}"),BaseLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_text__WEBPACK_IMPORTED_MODULE_6__.Z,{target:"em5sgkm4"})("&&&{",_utils__WEBPACK_IMPORTED_MODULE_7__.S,";box-sizing:border-box;display:block;padding-top:0;padding-bottom:0;max-width:100%;z-index:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"),Label=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BaseLabel,{...props,as:"label"});Label.displayName="Label";const LabelWrapper=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_flex__WEBPACK_IMPORTED_MODULE_8__.Z,{target:"em5sgkm3"})({name:"1b6uupn",styles:"max-width:calc( 100% - 10px )"}),BackdropUI=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"em5sgkm2"})("&&&{box-sizing:border-box;border-radius:inherit;bottom:0;left:0;margin:0;padding:0;pointer-events:none;position:absolute;right:0;top:0;",(({disabled,isFocused})=>{let boxShadow,outline,outlineOffset,borderColor=isFocused?_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.borderFocus:_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.border;return isFocused&&(boxShadow=`0 0 0 1px ${_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.borderFocus} inset`,outline="2px solid transparent",outlineOffset="-2px"),disabled&&(borderColor=_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.borderDisabled),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({boxShadow,borderColor,borderStyle:"solid",borderWidth:1,outline,outlineOffset},"","")})," ",(0,_utils__WEBPACK_IMPORTED_MODULE_9__.b)({paddingLeft:2}),";}"),Prefix=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"em5sgkm1"})({name:"pvvbxf",styles:"box-sizing:border-box;display:block"}),Suffix=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"em5sgkm0"})({name:"jgf79h",styles:"align-items:center;align-self:stretch;box-sizing:border-box;display:flex"});try{Root.displayName="Root",Root.__docgenInfo={description:"",displayName:"Root",props:{align:{defaultValue:{value:"'center'"},description:"Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:"Spacing in between each child can be adjusted by using `gap`.\n\nCan either be a number (which will act as a multiplier to the library's\ngrid system base of 4px), or a literal CSS value string.",name:"gap",required:!1,type:{name:"SpaceInput"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},isFocused:{defaultValue:null,description:"",name:"isFocused",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"edge"'},{value:'"top"'},{value:'"side"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#Root"]={docgenInfo:Root.__docgenInfo,name:"Root",path:"packages/components/src/input-control/styles/input-control-styles.tsx#Root"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},__unstableInputWidth:{defaultValue:null,description:"",name:"__unstableInputWidth",required:!1,type:{name:"Width<string | number>"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"edge"'},{value:'"top"'},{value:'"side"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"packages/components/src/input-control/styles/input-control-styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{getSizeConfig.displayName="getSizeConfig",getSizeConfig.__docgenInfo={description:"",displayName:"getSizeConfig",props:{__next36pxDefaultSize:{defaultValue:null,description:"",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},inputSize:{defaultValue:null,description:"",name:"inputSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},isDragging:{defaultValue:null,description:"",name:"isDragging",required:!1,type:{name:"boolean"}},dragCursor:{defaultValue:null,description:"",name:"dragCursor",required:!1,type:{name:"Cursor"}},paddingInlineStart:{defaultValue:null,description:"",name:"paddingInlineStart",required:!1,type:{name:"PaddingInlineStart<string | number>"}},paddingInlineEnd:{defaultValue:null,description:"",name:"paddingInlineEnd",required:!1,type:{name:"PaddingInlineEnd<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#getSizeConfig"]={docgenInfo:getSizeConfig.__docgenInfo,name:"getSizeConfig",path:"packages/components/src/input-control/styles/input-control-styles.tsx#getSizeConfig"})}catch(__react_docgen_typescript_loader_error){}try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},__next36pxDefaultSize:{defaultValue:null,description:"",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},inputSize:{defaultValue:null,description:"",name:"inputSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},isDragging:{defaultValue:null,description:"",name:"isDragging",required:!1,type:{name:"boolean"}},dragCursor:{defaultValue:null,description:"",name:"dragCursor",required:!1,type:{name:"Cursor"}},paddingInlineStart:{defaultValue:null,description:"",name:"paddingInlineStart",required:!1,type:{name:"PaddingInlineStart<string | number>"}},paddingInlineEnd:{defaultValue:null,description:"",name:"paddingInlineEnd",required:!1,type:{name:"PaddingInlineEnd<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"packages/components/src/input-control/styles/input-control-styles.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"edge"'},{value:'"top"'},{value:'"side"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"packages/components/src/input-control/styles/input-control-styles.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}try{LabelWrapper.displayName="LabelWrapper",LabelWrapper.__docgenInfo={description:"",displayName:"LabelWrapper",props:{display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},isBlock:{defaultValue:{value:"true"},description:"Determines if `FlexItem` should render as an adaptive full-width block.",name:"isBlock",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#LabelWrapper"]={docgenInfo:LabelWrapper.__docgenInfo,name:"LabelWrapper",path:"packages/components/src/input-control/styles/input-control-styles.tsx#LabelWrapper"})}catch(__react_docgen_typescript_loader_error){}try{BackdropUI.displayName="BackdropUI",BackdropUI.__docgenInfo={description:"",displayName:"BackdropUI",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isFocused:{defaultValue:null,description:"",name:"isFocused",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#BackdropUI"]={docgenInfo:BackdropUI.__docgenInfo,name:"BackdropUI",path:"packages/components/src/input-control/styles/input-control-styles.tsx#BackdropUI"})}catch(__react_docgen_typescript_loader_error){}try{Prefix.displayName="Prefix",Prefix.__docgenInfo={description:"",displayName:"Prefix",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#Prefix"]={docgenInfo:Prefix.__docgenInfo,name:"Prefix",path:"packages/components/src/input-control/styles/input-control-styles.tsx#Prefix"})}catch(__react_docgen_typescript_loader_error){}try{Suffix.displayName="Suffix",Suffix.__docgenInfo={description:"",displayName:"Suffix",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/styles/input-control-styles.tsx#Suffix"]={docgenInfo:Suffix.__docgenInfo,name:"Suffix",path:"packages/components/src/input-control/styles/input-control-styles.tsx#Suffix"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/text/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/text/hook.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(props,forwardedRef){const textProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.Z)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{as:"span",...textProps,ref:forwardedRef})}Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(Text,"Text");Text.__docgenInfo={description:"@param {import('../ui/context').WordPressComponentProps<import('./types').Props, 'span'>} props\n@param {import('react').ForwardedRef<any>}                                                forwardedRef",methods:[],displayName:"Text"}},"./packages/components/src/utils/rtl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>rtl});var _emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const LOWER_LEFT_REGEXP=new RegExp(/-left/g),LOWER_RIGHT_REGEXP=new RegExp(/-right/g),UPPER_LEFT_REGEXP=new RegExp(/Left/g),UPPER_RIGHT_REGEXP=new RegExp(/Right/g);function getConvertedKey(key){return"left"===key?"right":"right"===key?"left":LOWER_LEFT_REGEXP.test(key)?key.replace(LOWER_LEFT_REGEXP,"-right"):LOWER_RIGHT_REGEXP.test(key)?key.replace(LOWER_RIGHT_REGEXP,"-left"):UPPER_LEFT_REGEXP.test(key)?key.replace(UPPER_LEFT_REGEXP,"Right"):UPPER_RIGHT_REGEXP.test(key)?key.replace(UPPER_RIGHT_REGEXP,"Left"):key}const convertLTRToRTL=(ltrStyles={})=>Object.fromEntries(Object.entries(ltrStyles).map((([key,value])=>[getConvertedKey(key),value])));function rtl(ltrStyles={},rtlStyles){return()=>rtlStyles?(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(rtlStyles,""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(ltrStyles,""):(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(convertLTRToRTL(ltrStyles),""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(ltrStyles,"")}rtl.watch=()=>(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()}}]);