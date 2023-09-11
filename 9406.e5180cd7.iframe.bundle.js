"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9406],{"./packages/components/build-module/dropdown-menu/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/build-module/library/menu.js"),_ui_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),_ui_context__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/button/index.js"),_dropdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/dropdown/index.js"),_navigable_container__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/navigable-container/menu.js");function mergeProps(defaultProps={},props={}){const mergedProps={...defaultProps,...props};return props.className&&defaultProps.className&&(mergedProps.className=classnames__WEBPACK_IMPORTED_MODULE_0___default()(props.className,defaultProps.className)),mergedProps}function isFunction(maybeFunc){return"function"==typeof maybeFunc}const __WEBPACK_DEFAULT_EXPORT__=(0,_ui_context__WEBPACK_IMPORTED_MODULE_7__.Kc)((function UnconnectedDropdownMenu(dropdownMenuProps){const{children,className,controls,icon=_wordpress_icons__WEBPACK_IMPORTED_MODULE_1__.Z,label,popoverProps,toggleProps,menuProps,disableOpenOnArrowDown=!1,text,noIcons,open,defaultOpen,onToggle:onToggleProp,variant}=(0,_ui_context__WEBPACK_IMPORTED_MODULE_2__.y)(dropdownMenuProps,"DropdownMenu");if(!controls?.length&&!isFunction(children))return null;let controlSets;controls?.length&&(controlSets=controls,Array.isArray(controlSets[0])||(controlSets=[controls]));const mergedPopoverProps=mergeProps({className:"components-dropdown-menu__popover",variant},popoverProps);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_dropdown__WEBPACK_IMPORTED_MODULE_4__.Z,{className,popoverProps:mergedPopoverProps,renderToggle:({isOpen,onToggle})=>{var _toggleProps$showTool;const{as:Toggle=_button__WEBPACK_IMPORTED_MODULE_5__.ZP,...restToggleProps}=null!=toggleProps?toggleProps:{},mergedToggleProps=mergeProps({className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-dropdown-menu__toggle",{"is-opened":isOpen})},restToggleProps);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(Toggle,{...mergedToggleProps,icon,onClick:event=>{onToggle(),mergedToggleProps.onClick&&mergedToggleProps.onClick(event)},onKeyDown:event=>{(event=>{disableOpenOnArrowDown||isOpen||"ArrowDown"!==event.code||(event.preventDefault(),onToggle())})(event),mergedToggleProps.onKeyDown&&mergedToggleProps.onKeyDown(event)},"aria-haspopup":"true","aria-expanded":isOpen,label,text,showTooltip:null===(_toggleProps$showTool=toggleProps?.showTooltip)||void 0===_toggleProps$showTool||_toggleProps$showTool},mergedToggleProps.children)},renderContent:props=>{const mergedMenuProps=mergeProps({"aria-label":label,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-dropdown-menu__menu",{"no-icons":noIcons})},menuProps);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_navigable_container__WEBPACK_IMPORTED_MODULE_6__.ZP,{...mergedMenuProps,role:"menu"},isFunction(children)?children(props):null,controlSets?.flatMap(((controlSet,indexOfSet)=>controlSet.map(((control,indexOfControl)=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_button__WEBPACK_IMPORTED_MODULE_5__.ZP,{key:[indexOfSet,indexOfControl].join(),onClick:event=>{event.stopPropagation(),props.onClose(),control.onClick&&control.onClick()},className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-dropdown-menu__menu-item",{"has-separator":indexOfSet>0&&0===indexOfControl,"is-active":control.isActive,"is-icon-only":!control.title}),icon:control.icon,label:control.label,"aria-checked":"menuitemcheckbox"===control.role||"menuitemradio"===control.role?control.isActive:void 0,role:"menuitemcheckbox"===control.role||"menuitemradio"===control.role?control.role:"menuitem",disabled:control.isDisabled},control.title))))))},open,defaultOpen,onToggle:onToggleProp})}),"DropdownMenu")},"./packages/components/build-module/dropdown/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/deprecated/build-module/index.js"),_ui_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),_ui_context__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),_utils_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/utils/hooks/use-controlled-value.js"),_popover__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/popover/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_ui_context__WEBPACK_IMPORTED_MODULE_7__.Iq)(((props,forwardedRef)=>{const{renderContent,renderToggle,className,contentClassName,expandOnMobile,headerTitle,focusOnMount,popoverProps,onClose,onToggle,style,open,defaultOpen,position,variant}=(0,_ui_context__WEBPACK_IMPORTED_MODULE_1__.y)(props,"Dropdown");void 0!==position&&(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__.Z)("`position` prop in wp.components.Dropdown",{since:"6.2",alternative:"`popoverProps.placement` prop",hint:"Note that the `position` prop will override any values passed through the `popoverProps.placement` prop."});const[fallbackPopoverAnchor,setFallbackPopoverAnchor]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null),containerRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(),[isOpen,setIsOpen]=(0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.O)({defaultValue:defaultOpen,value:open,onChange:onToggle});function close(){onClose?.(),setIsOpen(!1)}const args={isOpen:!!isOpen,onToggle:()=>setIsOpen(!isOpen),onClose:close},popoverPropsHaveAnchor=!!(popoverProps?.anchor||popoverProps?.anchorRef||popoverProps?.getAnchorRect||popoverProps?.anchorRect);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div",{className,ref:(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.Z)([containerRef,forwardedRef,setFallbackPopoverAnchor]),tabIndex:-1,style},renderToggle(args),isOpen&&(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_popover__WEBPACK_IMPORTED_MODULE_6__.ZP,{position,onClose:close,onFocusOutside:function closeIfFocusOutside(){if(!containerRef.current)return;const{ownerDocument}=containerRef.current,dialog=ownerDocument?.activeElement?.closest('[role="dialog"]');containerRef.current.contains(ownerDocument.activeElement)||dialog&&!dialog.contains(containerRef.current)||close()},expandOnMobile,headerTitle,focusOnMount,offset:13,anchor:popoverPropsHaveAnchor?void 0:fallbackPopoverAnchor,variant,...popoverProps,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-dropdown__content",popoverProps?.className,contentClassName)},renderContent(args)))}),"Dropdown")},"./packages/components/build-module/heading/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>heading_component});var react=__webpack_require__("./node_modules/react/index.js"),context_connect=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),use_context_system=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),hook=__webpack_require__("./packages/components/build-module/text/hook.js"),font_size=__webpack_require__("./packages/components/build-module/ui/utils/font-size.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js");const heading_component=(0,context_connect.Iq)((function UnconnectedHeading(props,forwardedRef){const headerProps=function useHeading(props){const{as:asProp,level=2,...otherProps}=(0,use_context_system.y)(props,"Heading"),as=asProp||`h${level}`,a11yProps={};return"string"==typeof as&&"h"!==as[0]&&(a11yProps.role="heading",a11yProps["aria-level"]="string"==typeof level?parseInt(level):level),{...(0,hook.Z)({color:colors_values.D.gray[900],size:(0,font_size.gZ)(level),isBlock:!0,weight:config_values.Z.fontWeightHeading,...otherProps}),...a11yProps,as}}(props);return(0,react.createElement)(component.Z,{...headerProps,ref:forwardedRef})}),"Heading")},"./packages/components/build-module/menu-group/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js");const __WEBPACK_DEFAULT_EXPORT__=function MenuGroup(props){const{children,className="",label,hideSeparator}=props,instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.Z)(MenuGroup);if(!_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Children.count(children))return null;const labelId=`components-menu-group-label-${instanceId}`,classNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"components-menu-group",{"has-hidden-separator":hideSeparator});return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div",{className:classNames},label&&(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div",{className:"components-menu-group__label",id:labelId,"aria-hidden":"true"},label),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div",{role:"group","aria-labelledby":label?labelId:void 0},children))}},"./packages/components/build-module/menu-item/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_shortcut__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/shortcut/index.js"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/button/index.js"),_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/icon/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function UnforwardedMenuItem(props,ref){let{children,info,className,icon,iconPosition="right",shortcut,isSelected,role="menuitem",suffix,...buttonProps}=props;return className=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-menu-item__button",className),info&&(children=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span",{className:"components-menu-item__info-wrapper"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span",{className:"components-menu-item__item"},children),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span",{className:"components-menu-item__info"},info))),icon&&"string"!=typeof icon&&(icon=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(icon,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-menu-items__item-icon",{"has-icon-right":"right"===iconPosition})})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_button__WEBPACK_IMPORTED_MODULE_2__.ZP,{ref,"aria-checked":"menuitemcheckbox"===role||"menuitemradio"===role?isSelected:void 0,role,icon:"left"===iconPosition?icon:void 0,className,...buttonProps},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span",{className:"components-menu-item__item"},children),!suffix&&(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_shortcut__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"components-menu-item__shortcut",shortcut}),!suffix&&icon&&"right"===iconPosition&&(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon}),suffix)}))},"./packages/components/build-module/navigable-container/menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>menu});var react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/dom/build-module/index.js");const noop=()=>{},MENU_ITEM_ROLES=["menuitem","menuitemradio","menuitemcheckbox"];class NavigableContainer extends react.Component{constructor(args){super(args),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container&&this.container.addEventListener("keydown",this.onKeyDown)}componentWillUnmount(){this.container&&this.container.removeEventListener("keydown",this.onKeyDown)}bindContainer(ref){const{forwardedRef}=this.props;this.container=ref,"function"==typeof forwardedRef?forwardedRef(ref):forwardedRef&&"current"in forwardedRef&&(forwardedRef.current=ref)}getFocusableContext(target){if(!this.container)return null;const{onlyBrowserTabstops}=this.props,focusables=(onlyBrowserTabstops?build_module.T_.tabbable:build_module.T_.focusable).find(this.container),index=this.getFocusableIndex(focusables,target);return index>-1&&target?{index,target,focusables}:null}getFocusableIndex(focusables,target){return focusables.indexOf(target)}onKeyDown(event){this.props.onKeyDown&&this.props.onKeyDown(event);const{getFocusableContext}=this,{cycle=!0,eventToOffset,onNavigate=noop,stopNavigationEvents}=this.props,offset=eventToOffset(event);if(void 0!==offset&&stopNavigationEvents){event.stopImmediatePropagation();const targetRole=event.target?.getAttribute("role");!!targetRole&&MENU_ITEM_ROLES.includes(targetRole)&&event.preventDefault()}if(!offset)return;const activeElement=event.target?.ownerDocument?.activeElement;if(!activeElement)return;const context=getFocusableContext(activeElement);if(!context)return;const{index,focusables}=context,nextIndex=cycle?function cycleValue(value,total,offset){const nextValue=value+offset;return nextValue<0?total+nextValue:nextValue>=total?nextValue-total:nextValue}(index,focusables.length,offset):index+offset;nextIndex>=0&&nextIndex<focusables.length&&(focusables[nextIndex].focus(),onNavigate(nextIndex,focusables[nextIndex]),"Tab"===event.code&&event.preventDefault())}render(){const{children,stopNavigationEvents,eventToOffset,onNavigate,onKeyDown,cycle,onlyBrowserTabstops,forwardedRef,...restProps}=this.props;return(0,react.createElement)("div",{ref:this.bindContainer,...restProps},children)}}NavigableContainer.displayName="NavigableContainer";const forwardedNavigableContainer=(props,ref)=>(0,react.createElement)(NavigableContainer,{...props,forwardedRef:ref});forwardedNavigableContainer.displayName="NavigableContainer";const container=(0,react.forwardRef)(forwardedNavigableContainer);const menu=(0,react.forwardRef)((function UnforwardedNavigableMenu({role="menu",orientation="vertical",...rest},ref){return(0,react.createElement)(container,{ref,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role,"aria-orientation":"presentation"===role||"vertical"!==orientation&&"horizontal"!==orientation?void 0:orientation,eventToOffset:evt=>{const{code}=evt;let next=["ArrowDown"],previous=["ArrowUp"];return"horizontal"===orientation&&(next=["ArrowRight"],previous=["ArrowLeft"]),"both"===orientation&&(next=["ArrowRight","ArrowDown"],previous=["ArrowLeft","ArrowUp"]),next.includes(code)?1:previous.includes(code)?-1:["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(code)?0:void 0},...rest})}))},"./packages/components/build-module/utils/hooks/use-controlled-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useControlledValue});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useControlledValue({defaultValue,onChange,value:valueProp}){const hasValue=void 0!==valueProp,initialValue=hasValue?valueProp:defaultValue,[state,setState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);let setValue;return setValue=hasValue&&"function"==typeof onChange?onChange:hasValue||"function"!=typeof onChange?setState:nextValue=>{onChange(nextValue),setState(nextValue)},[hasValue?valueProp:state,setValue]}},"./packages/compose/build-module/hooks/use-previous/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>usePrevious});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value}),[value]),ref.current}},"./packages/icons/build-module/library/menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"}))},"./packages/icons/build-module/library/more-vertical.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"}))},"./packages/icons/build-module/library/plus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}))}}]);