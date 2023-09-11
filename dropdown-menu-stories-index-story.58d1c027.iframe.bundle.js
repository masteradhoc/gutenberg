"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2211],{"./packages/components/src/menu-group/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function MenuGroup(props){const{children,className="",label,hideSeparator}=props,instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)(MenuGroup);if(!_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Children.count(children))return null;const labelId=`components-menu-group-label-${instanceId}`,classNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"components-menu-group",{"has-hidden-separator":hideSeparator});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:classNames,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"components-menu-group__label",id:labelId,"aria-hidden":"true",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{role:"group","aria-labelledby":label?labelId:void 0,children})]})}MenuGroup.displayName="MenuGroup";const __WEBPACK_DEFAULT_EXPORT__=MenuGroup;try{MenuGroup.displayName="MenuGroup",MenuGroup.__docgenInfo={description:"`MenuGroup` wraps a series of related `MenuItem` components into a common\nsection.\n\n```jsx\nimport { MenuGroup, MenuItem } from '@wordpress/components';\n\nconst MyMenuGroup = () => (\n  <MenuGroup label=\"Settings\">\n    <MenuItem>Setting 1</MenuItem>\n    <MenuItem>Setting 2</MenuItem>\n  </MenuGroup>\n);\n```",displayName:"MenuGroup",props:{className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},hideSeparator:{defaultValue:null,description:"Hide the top border on the container.",name:"hideSeparator",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Text to be displayed as the menu group header.",name:"label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-group/index.tsx#MenuGroup"]={docgenInfo:MenuGroup.__docgenInfo,name:"MenuGroup",path:"packages/components/src/menu-group/index.tsx#MenuGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/menu-item/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_shortcut__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/shortcut/index.tsx"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/button/index.tsx"),_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedMenuItem(props,ref){let{children,info,className,icon,iconPosition="right",shortcut,isSelected,role="menuitem",suffix,...buttonProps}=props;return className=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-menu-item__button",className),info&&(children=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"components-menu-item__info-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-menu-item__item",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-menu-item__info",children:info})]})),icon&&"string"!=typeof icon&&(icon=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(icon,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-menu-items__item-icon",{"has-icon-right":"right"===iconPosition})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{ref,"aria-checked":"menuitemcheckbox"===role||"menuitemradio"===role?isSelected:void 0,role,icon:"left"===iconPosition?icon:void 0,className,...buttonProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-menu-item__item",children}),!suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"components-menu-item__shortcut",shortcut}),!suffix&&icon&&"right"===iconPosition&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_5__.Z,{icon}),suffix]})}UnforwardedMenuItem.displayName="UnforwardedMenuItem";const MenuItem=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedMenuItem),__WEBPACK_DEFAULT_EXPORT__=MenuItem;try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"MenuItem is a component which renders a button intended to be used in combination with the `DropdownMenu` component.\n\n```jsx\nimport { MenuItem } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItem = () => {\n\tconst [ isActive, setIsActive ] = useState( true );\n\n\treturn (\n\t\t<MenuItem\n\t\t\ticon={ isActive ? 'yes' : 'no' }\n\t\t\tisSelected={ isActive }\n\t\t\trole=\"menuitemcheckbox\"\n\t\t\tonClick={ () => setIsActive( ( state ) => ! state ) }\n\t\t>\n\t\t\tToggle\n\t\t</MenuItem>\n\t);\n};\n```",displayName:"MenuItem",props:{isDestructive:{defaultValue:null,description:"Renders a red text-based button style to indicate destructive behavior.",name:"isDestructive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},info:{defaultValue:null,description:"Text to use as description for button text.",name:"info",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"null"},description:"The icon to render. Supported values are: Dashicons (specified as\nstrings), functions, Component instances and `null`.",name:"icon",required:!1,type:{name:"Element"}},iconPosition:{defaultValue:null,description:"Determines where to display the provided `icon`.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isSelected:{defaultValue:null,description:'Whether or not the menu item is currently selected, `isSelected` is only taken into\naccount when the `role` prop is either `"menuitemcheckbox"` or `"menuitemradio"`.',name:"isSelected",required:!1,type:{name:"boolean"}},shortcut:{defaultValue:null,description:"If shortcut is a string, it is expecting the display text. If shortcut is an object,\nit will accept the properties of `display` (string) and `ariaLabel` (string).",name:"shortcut",required:!1,type:{name:"string | { display: string; ariaLabel: string; }"}},role:{defaultValue:{value:"'menuitem'"},description:"If you need to have selectable menu items use menuitemradio for single select,\nand menuitemcheckbox for multiselect.",name:"role",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"Allows for markup other than icons or shortcuts to be added to the menu item.",name:"suffix",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Human-readable label for item.",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-item/index.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"packages/components/src/menu-item/index.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}try{menuitem.displayName="menuitem",menuitem.__docgenInfo={description:"MenuItem is a component which renders a button intended to be used in combination with the `DropdownMenu` component.\n\n```jsx\nimport { MenuItem } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyMenuItem = () => {\n\tconst [ isActive, setIsActive ] = useState( true );\n\n\treturn (\n\t\t<MenuItem\n\t\t\ticon={ isActive ? 'yes' : 'no' }\n\t\t\tisSelected={ isActive }\n\t\t\trole=\"menuitemcheckbox\"\n\t\t\tonClick={ () => setIsActive( ( state ) => ! state ) }\n\t\t>\n\t\t\tToggle\n\t\t</MenuItem>\n\t);\n};\n```",displayName:"menuitem",props:{isDestructive:{defaultValue:null,description:"Renders a red text-based button style to indicate destructive behavior.",name:"isDestructive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"A CSS `class` to give to the container element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},info:{defaultValue:null,description:"Text to use as description for button text.",name:"info",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"null"},description:"The icon to render. Supported values are: Dashicons (specified as\nstrings), functions, Component instances and `null`.",name:"icon",required:!1,type:{name:"Element"}},iconPosition:{defaultValue:null,description:"Determines where to display the provided `icon`.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isSelected:{defaultValue:null,description:'Whether or not the menu item is currently selected, `isSelected` is only taken into\naccount when the `role` prop is either `"menuitemcheckbox"` or `"menuitemradio"`.',name:"isSelected",required:!1,type:{name:"boolean"}},shortcut:{defaultValue:null,description:"If shortcut is a string, it is expecting the display text. If shortcut is an object,\nit will accept the properties of `display` (string) and `ariaLabel` (string).",name:"shortcut",required:!1,type:{name:"string | { display: string; ariaLabel: string; }"}},role:{defaultValue:{value:"'menuitem'"},description:"If you need to have selectable menu items use menuitemradio for single select,\nand menuitemcheckbox for multiselect.",name:"role",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"Allows for markup other than icons or shortcuts to be added to the menu item.",name:"suffix",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Human-readable label for item.",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/menu-item/index.tsx#menuitem"]={docgenInfo:menuitem.__docgenInfo,name:"menuitem",path:"packages/components/src/menu-item/index.tsx#menuitem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/dropdown-menu/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithChildren:()=>WithChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var dropdown_menu=__webpack_require__("./packages/components/src/dropdown-menu/index.tsx"),menu_item=__webpack_require__("./packages/components/src/menu-item/index.tsx"),menu_group=__webpack_require__("./packages/components/src/menu-group/index.tsx"),menu=__webpack_require__("./packages/icons/build-module/library/menu.js"),chevron_down=__webpack_require__("./packages/icons/build-module/library/chevron-down.js"),more=__webpack_require__("./packages/icons/build-module/library/more.js"),arrow_up=__webpack_require__("./packages/icons/build-module/library/arrow-up.js"),arrow_down=__webpack_require__("./packages/icons/build-module/library/arrow-down.js"),react=__webpack_require__("./node_modules/react/index.js"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js");const library_trash=(0,react.createElement)(svg.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react.createElement)(svg.y$,{d:"M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"}));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const index_story={title:"Components/DropdownMenu",component:dropdown_menu.h,parameters:{sourceLink:"packages/components/src/dropdown-menu",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}},argTypes:{icon:{options:["menu","chevronDown","more"],mapping:{menu:menu.Z,chevronDown:chevron_down.Z,more:more.Z},control:{type:"select"}},open:{control:{type:null}},defaultOpen:{control:{type:null}},onToggle:{control:{type:null}}}},Template=props=>(0,jsx_runtime.jsx)("div",{style:{height:150},children:(0,jsx_runtime.jsx)(dropdown_menu.h,{...props})});Template.displayName="Template";const Default=Template.bind({});Default.args={label:"Select a direction.",icon:menu.Z,controls:[{title:"First Menu Item Label",icon:arrow_up.Z,onClick:()=>console.log("up!")},{title:"Second Menu Item Label",icon:arrow_down.Z,onClick:()=>console.log("down!")}]};const WithChildren=Template.bind({});WithChildren.parameters={docs:{source:{code:'<DropdownMenu label="Select a direction." icon={ more }>\n  <MenuGroup>\n    <MenuItem icon={ arrowUp } onClick={ onClose }>\n      Move Up\n    </MenuItem>\n    <MenuItem icon={ arrowDown } onClick={ onClose }>\n      Move Down\n    </MenuItem>\n  </MenuGroup>\n  <MenuGroup>\n    <MenuItem icon={ trash } onClick={ onClose }>\n      Remove\n    </MenuItem>\n  </MenuGroup>\n</DropdownMenu>',language:"jsx",type:"auto"}}},WithChildren.args={label:"Select a direction.",icon:more.Z,children:({onClose})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(menu_group.Z,{children:[(0,jsx_runtime.jsx)(menu_item.Z,{icon:arrow_up.Z,onClick:onClose,children:"Move Up"}),(0,jsx_runtime.jsx)(menu_item.Z,{icon:arrow_down.Z,onClick:onClose,children:"Move Down"})]}),(0,jsx_runtime.jsx)(menu_group.Z,{children:(0,jsx_runtime.jsx)(menu_item.Z,{icon:library_trash,onClick:onClose,children:"Remove"})})]})},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => <div style={{\n  height: 150\n}}>\n        <DropdownMenu {...props} />\n    </div>",...Default.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"props => <div style={{\n  height: 150\n}}>\n        <DropdownMenu {...props} />\n    </div>",...WithChildren.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithChildren"]}}]);