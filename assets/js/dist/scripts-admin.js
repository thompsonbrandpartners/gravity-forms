!function(){var e,t,r,o={3992:function(e,t,r){var o={".":[3434],"./":[3434],"./index":[3434],"./index.js":[3434],"./setup-wizard":[4498,194,215],"./setup-wizard/":[4498,194,215],"./setup-wizard/index":[4498,194,215],"./setup-wizard/index.js":[4498,194,215],"./template-library":[1786,194,236],"./template-library/":[1786,194,236],"./template-library/index":[1786,194,236],"./template-library/index.js":[1786,194,236]};function n(e){if(!r.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(o)},n.id=3992,e.exports=n},3434:function(e,t,r){"use strict";r.r(t);var o=r(7329),n=r.n(o),a=r(5518),l=(null===n()||void 0===n()?void 0:n().apps)||{};t.default=function(){var e=function(e){var t=l[e];if(!t.should_display)return 1;r(3992)("".concat(t.chunk_path)).then((function(r){(0,a.trigger)({event:"gform/apps/before_load/".concat(e),el:document,data:{app:t},native:!1}),r.default(),(0,a.trigger)({event:"gform/apps/after_load/".concat(e),el:document,data:{app:t},native:!1})}))};for(var t in l)e(t);(0,a.consoleInfo)("Gravity Forms Admin: Initialized all apps.")}},2373:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var o,n=r(7329),a=r.n(n),l=r(6796),s=r(7063),i=r(5210),c=r(5518),m=wp.blockEditor,u=wp.components,d=wp.serverSideRender,f=r.n(d),p=r(8349),g=r(1747),b=r(9662),v=r(1519),_=r.n(v),y=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 508.3 559.5",width:"100%",height:"100%",focusable:"false","aria-hidden":"true",className:"dashicon dashicon-gravityforms"},React.createElement("g",null,React.createElement("path",{className:"st0",d:"M468,109.8L294.4,9.6c-22.1-12.8-58.4-12.8-80.5,0L40.3,109.8C18.2,122.6,0,154,0,179.5V380\tc0,25.6,18.1,56.9,40.3,69.7l173.6,100.2c22.1,12.8,58.4,12.8,80.5,0L468,449.8c22.2-12.8,40.3-44.2,40.3-69.7V179.6\tC508.3,154,490.2,122.6,468,109.8z M399.3,244.4l-195.1,0c-11,0-19.2,3.2-25.6,10c-14.2,15.1-18.2,44.4-19.3,60.7H348v-26.4h49.9\tv76.3H111.3l-1.8-23c-0.3-3.3-5.9-80.7,32.8-121.9c16.1-17.1,37.1-25.8,62.4-25.8h194.7V244.4z"}))),h=r(5689),k=["label","colors","color","controlled","defaultColor","onChange"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var C=(null===(o=window)||void 0===o?void 0:o.wp)||{},x=C.components,R=x.__experimentalHStack,w=x.__experimentalItemGroup,O=x.Button,P=x.ColorPalette,N=x.ColorIndicator,S=x.FlexItem,T=x.Dropdown,B=(Object.prototype.hasOwnProperty.call(C,"blockEditor")?C.blockEditor:C.editor).useSetting,j=C.element,L=j.useState,I=j.useEffect,F=w,D=R,z=function(e){var t=L(e),r=(0,i.Z)(t,2),o=r[0],n=r[1];return I((function(){n(e)}),[e]),[o,n]};function A(e){var t,r=e.label,o=e.colors,n=void 0===o?[]:o,a=e.color,l=e.controlled,c=void 0!==l&&l,m=e.defaultColor,u=e.onChange,d=(0,h.Z)(e,k),f=(c?z:L)(a),g=(0,i.Z)(f,2),b=g[0],v=g[1],_=B("color.palette.theme"),y=B("color.palette.custom"),C=B("color.palette.default"),x=B("color.defaultPalette"),R=function(){var e=[];return n.length&&e.push({name:"Orbital",colors:n}),y&&y.length&&e.push({name:"Custom Colors",colors:y}),_&&_.length&&e.push({name:"Theme Colors",colors:_}),x&&C&&C.length&&e.push({name:"Default Colors",colors:C}),e}(),w={colorValue:b,toggleLabel:r},j={className:(0,p.classnames)({"block-editor-panel-color-gradient-settings__item-group":!0}),isBordered:!0,isSeparated:!0},I=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({popoverProps:{placement:"left-end",position:"bottom left",className:(0,p.classnames)({"block-editor-panel-color-gradient-settings__dropdown-content":!0})},className:(0,p.classnames)({"block-editor-panel-color-gradient-settings__dropdown":!0}),renderToggle:(t=w,function(e){var r=e.onToggle,o=e.isOpen,n=t.colorValue,a=t.toggleLabel,l={onClick:r,className:(0,p.classnames)("block-editor-panel-color-gradient-settings__dropdown",{"is-open":o}),"aria-expanded":o};return React.createElement(O,l,function(e){var t=e.colorValue,r=e.indicatorLabel,o={justify:"flex-start"},n={className:(0,p.classnames)({"block-editor-panel-color-gradient-settings__color-indicator":!0}),colorValue:t},a={className:(0,p.classnames)({"block-editor-panel-color-gradient-settings__color-name":!0,title:r})};return React.createElement(D,o,React.createElement(N,n),React.createElement(S,a,r))}({colorValue:n,indicatorLabel:a}))}),renderContent:function(){var e={className:(0,p.classnames)({"block-editor-panel-color-gradient-settings__dropdown-content":!0})},t={colors:R,value:b,onChange:function(e){var t=!e&&m?m:e;v(t),u(t)},__experimentalHasMultipleOrigins:!0};return React.createElement("div",e,React.createElement(P,t))}},d);return React.createElement(F,j,React.createElement(T,I))}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=wp.url.addQueryArgs,V=u.__experimentalHeading,H=u.__experimentalText,U=u.__experimentalSpacer,$=(null===a()||void 0===a()?void 0:a()["gravityforms/form"])||{},q=function(e){var t=e.attributes,r=e.setAttributes,o=(0,g.useState)(t.formId),n=(0,i.Z)(o,2),a=n[0],d=n[1],v=(0,g.useState)(!1),h=(0,i.Z)(v,2),k=h[0],E=h[1],C=(0,g.useState)(t.formPreview),x=(0,i.Z)(C,2),R=x[0],w=x[1],O=(0,g.useState)(t.title),P=(0,i.Z)(O,2),N=P[0],S=P[1],T=(0,g.useState)(t.description),B=(0,i.Z)(T,2),j=B[0],L=B[1],I=(0,g.useState)(t.ajax),F=(0,i.Z)(I,2),D=F[0],z=F[1],M=(0,g.useState)(t.defaults),q=(0,i.Z)(M,2),J=q[0];q[1],(0,g.useLayoutEffect)((function(){if(!a&&(0,c.queryToJson)().gfAddBlock){var e=(0,c.queryToJson)().gfAddBlock;r({formId:e}),d(e)}}),[]),(0,g.useLayoutEffect)((function(){if(a){if(!Q(a))return r({formId:""}),void E(!0);r({formId:a}),w(!0)}else r({formId:""})}),[a]),(0,g.useLayoutEffect)((function(){ce||r({inputPrimaryColor:pe})}),[]),(0,g.useEffect)((function(){return document.addEventListener("gform/dialog/confirm",K),function(){document.removeEventListener("gform/dialog/confirm",K)}}),[]),(0,g.useEffect)((function(){r({formPreview:R}),r({title:N}),r({description:j}),r({ajax:D}),r({defaults:J})}),[R,N,j,D,J]);var Q=function(e){return $.data.forms.find((function(t){return t.id==e}))},X=function(){for(var e=[{label:(0,b.__)("Select a Form","gravityforms"),value:""}],t=0;t<$.data.forms.length;t++){var r=$.data.forms[t];e.push({label:r.title,value:r.id})}return e},Y=function(e,t){e.preventDefault();var r=G($.data.adminURL,t);window.open(r,"_blank","noopener")},K=function(e){var t;if("gform/dialog/confirm"===e.type&&(null==e||null===(t=e.detail)||void 0===t||null===(t=t.instance)||void 0===t||null===(t=t.options)||void 0===t?void 0:t.id)==="restore-default-settings-dialog-"+a){var o=Z(Z({},$.data.styles.defaults),{},{theme:"orbital"});$.data.styles.defaults.inputPrimaryColor||(o.inputPrimaryColor=o.buttonPrimaryBackgroundColor),r(o)}},W=function(){if(!a)return null;var e={page:"gf_edit_forms",id:a},t={page:"gf_edit_forms",id:a,view:"settings"},r={key:"gform-block-custom-controls"},o={key:"gform-block-edit-form-buttton",onClick:function(t){Y(t,e)},className:(0,p.classnames)({"gform-block__toolbar-button":!0})},n={text:(0,b.__)("Edit Form","gravityforms")},l={className:(0,p.classnames)({"gform-icon":!0,"gform-icon--create":!0})},s={key:"gform-block-form-settings-button",onClick:function(e){Y(e,t)},className:(0,p.classnames)({"gform-block__toolbar-button":!0})},i={text:(0,b.__)("Form Settings","gravityforms")},c={className:(0,p.classnames)({"gform-icon":!0,"gform-icon--cog":!0})};return React.createElement(m.BlockControls,r,React.createElement(u.ToolbarButton,o,React.createElement(u.Tooltip,n,React.createElement("i",l))),React.createElement(u.ToolbarButton,s,React.createElement(u.Tooltip,i,React.createElement("i",c))))},ee=function(){if(document.addEventListener("gform/dialog/confirm",K),!$.data.forms||$.data.forms.length<=0)return null;var e=$.data.styles.defaults,t=($.data.orbitalDefault,{key:"inspector"}),o={title:(0,b.__)("Form Settings","gravityforms")},n={label:(0,b.__)("Form","gravityforms"),value:a,options:X(),onChange:function(e){return d(e)}},l={label:(0,b.__)("Form Title","gravityforms"),checked:N,onChange:function(){return S(!N)}},s={label:(0,b.__)("Form Description","gravityforms"),checked:j,onChange:function(){return L(!j)}},i={title:(0,b.__)("Form Styles","gravityforms"),initialOpen:!0,className:(0,p.classnames)({"gform-block__panel":!0,"gform-block__form-styles":!0})},f=$.data.styles.defaults.theme.replace("-theme","");"Gravity"===(f=f.charAt(0).toUpperCase()+f.slice(1))&&(f="Gravity Forms 2.5");var v={label:(0,b.__)("Form Theme","gravityforms"),value:oe,options:[{label:(0,c.sprintf)((0,b.__)("Inherit from default (%s)","gravityforms"),f),value:""},{label:(0,b.__)("Gravity Forms 2.5 Theme","gravityforms"),value:"gravity-theme"},{label:(0,b.__)("Orbital Theme","gravityforms"),value:"orbital"}],className:(0,p.classnames)({"gform-block__theme-selector":!0}),onChange:function(e){return r({theme:e})}},y={variant:"primary",text:(0,b.__)("Reset Defaults","gravityforms"),size:"full-width",className:(0,p.classnames)({"gform-block__theme-reset-defaults":!0}),onClick:function(e){!function(e,t){var r="restore-default-settings-dialog-"+t;new(_())({confirmButtonText:(0,b.__)("Restore Defaults","gravityforms"),content:(0,b.__)("This will restore your form styles back to their default values and cannot be undone. Are you sure you want to continue?","gravityforms"),cancelButtonText:(0,b.__)("Cancel","gravityforms"),closeButtonTitle:(0,b.__)("Close","gravityforms"),id:r,maskBlur:!1,maskTheme:"none",mode:"dialog",onClose:function(){!function(e){var t=document.getElementById(e);if(t){var r=t.closest(".gform-dialog__mask");r&&r.remove()}}(r)},title:(0,b.__)("Restore Default Styles","gravityforms"),titleIconColor:"#DD301D",zIndex:100055}).showDialog()}(0,a)}},h={className:(0,p.classnames)({"gform-alert":!0,"gform-alert--notice":!0,"gform-alert--theme-primary":!0,"gform-alert--inline":!0})},k={ariaHidden:!0,className:(0,p.classnames)({"gform-alert__icon":!0,"gform-icon":!0,"gform-icon--circle-notice-fine":!0})},E={className:(0,p.classnames)({"gform-alert__message-wrap":!0})},C={className:(0,p.classnames)({"gform-alert__message":!0}),dangerouslySetInnerHTML:{__html:(0,c.sprintf)((0,b.__)("Form style options are not available for forms that use %1$slegacy mode%2$s.","gravityforms"),'<a target="_blank" href="'.concat($.data.adminURL,"?page=gf_edit_forms&view=settings&subview=settings&id=").concat(a,'">'),"</a>")}},x={title:(0,b.__)("Input Styles","gravityforms"),initialOpen:!0,className:(0,p.classnames)({"gform-block__panel":!0})},O={align:"flex-start",className:(0,p.classnames)({"gform-block__components-flex--adjust-gap":!0}),gap:0},P={className:(0,p.classnames)({"gform-block__components-base-control--adjust-label-line-height":!0}),label:(0,b.__)("Size","gravityforms"),value:ne,options:[{label:(0,b.__)("Small","gravityforms"),value:"sm"},{label:(0,b.__)("Medium","gravityforms"),value:"md"},{label:(0,b.__)("Large","gravityforms"),value:"lg"}],onChange:function(e){return r({inputSize:e})}},T={className:(0,p.classnames)({"gform-block__components-base-control--adjust-label-line-height":!0}),label:(0,b.__)("Border Radius","gravityforms"),help:(0,b.__)("In pixels.","gravityforms"),value:ae,type:"number",onChange:function(e){return r({inputBorderRadius:e})}},B={level:3},I={label:(0,b.__)("Background","gravityforms"),color:se,controlled:!0,defaultColor:e.inputBackgroundColor,onChange:function(e){return r({inputBackgroundColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__first-child-palette":!0})},F={label:(0,b.__)("Border","gravityforms"),color:le,controlled:!0,defaultColor:e.inputBorderColor,onChange:function(e){return r({inputBorderColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__middle-child-palette":!0})},M={label:(0,b.__)("Text","gravityforms"),color:ie,controlled:!0,defaultColor:e.inputColor,onChange:function(e){return r({inputColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__middle-child-palette":!0})},Z={label:(0,b.__)("Accent","gravityforms"),color:ce,controlled:!0,defaultColor:e.inputPrimaryColor,onChange:function(e){return r({inputPrimaryColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__last-child-palette":!0})},G={marginTop:2},q={variant:"muted",size:"subheadline"},J={backgroundColor:se,textColor:ie},Y={backgroundColor:se,textColor:ce},W={title:(0,b.__)("Label Styles","gravityforms"),initialOpen:!0,className:(0,p.classnames)({"gform-block__panel":!0})},ee={label:(0,b.__)("Font Size","gravityforms"),help:(0,b.__)("In pixels.","gravityforms"),value:me,type:"number",onChange:function(e){return r({labelFontSize:e})}},be={level:3},ve={label:(0,b.__)("Text","gravityforms"),color:ue,controlled:!0,defaultColor:e.labelColor,onChange:function(e){return r({labelColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__first-child-palette":!0,"gform-block-editor-panel__last-child-palette":!0})},_e={title:(0,b.__)("Description Styles","gravityforms"),initialOpen:!0,className:(0,p.classnames)({"gform-block__panel":!0})},ye={label:(0,b.__)("Font Size","gravityforms"),help:(0,b.__)("In pixels.","gravityforms"),value:de,type:"number",onChange:function(e){return r({descriptionFontSize:e})}},he={level:3},Ee={label:(0,b.__)("Text","gravityforms"),color:fe,controlled:!0,defaultColor:e.descriptionColor,onChange:function(e){return r({descriptionColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__first-child-palette":!0,"gform-block-editor-panel__last-child-palette":!0})},Ce={title:(0,b.__)("Button Styles","gravityforms"),initialOpen:!0,className:(0,p.classnames)({"gform-block__panel":!0})},xe={level:3},Re={label:(0,b.__)("Background","gravityforms"),color:pe,controlled:!0,defaultColor:e.buttonPrimaryBackgroundColor,onChange:function(e){return r({buttonPrimaryBackgroundColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__first-child-palette":!0})},we={label:(0,b.__)("Text","gravityforms"),color:ge,controlled:!0,defaultColor:e.buttonPrimaryColor,onChange:function(e){return r({buttonPrimaryColor:e})},className:(0,p.classnames)({"gform-block-editor-panel__last-child-palette":!0})},Oe={marginTop:2},Pe={variant:"muted",size:"subheadline"},Ne={backgroundColor:pe,textColor:ge},Se={title:(0,b.__)("Advanced","gravityforms"),initialOpen:!0,className:(0,p.classnames)({"gform-block__panel":!0})},Te={label:(0,b.__)("Preview","gravityforms"),checked:R,onChange:function(){return w(!R)}},Be={label:(0,b.__)("AJAX","gravityforms"),checked:D,onChange:function(){return z(!D)}},je={label:(0,b.__)("Field Values","gravityforms"),value:re,onChange:function(e){return r({fieldValues:e})}},Le={className:(0,p.classnames)({"gform-block__tabindex":!0}),label:(0,b.__)("Tabindex","gravityforms"),type:"number",value:te,onChange:function(e){return r({tabindex:e})},placeholder:"-1"};return React.createElement(m.InspectorControls,t,React.createElement(u.PanelBody,o,React.createElement(u.SelectControl,n),Q(a)&&React.createElement(g.Fragment,null,React.createElement(u.ToggleControl,l),React.createElement(u.ToggleControl,s))),React.createElement(u.PanelBody,i,Q(a)&&!Q(a).isLegacyMarkup&&React.createElement(u.SelectControl,v),Q(a)&&!Q(a).isLegacyMarkup&&ke&&React.createElement(u.Button,y),Q(a)&&!Q(a).isLegacyMarkup&&ke&&React.createElement(U,G,React.createElement(H,q,React.createElement(u.ExternalLink,{href:"https://docs.gravityforms.com/block-themes-and-style-settings/"},(0,b.__)("Learn more about configuring your form to use Orbital.","gravityforms")))),Q(a)&&Q(a).isLegacyMarkup&&React.createElement("div",h,React.createElement("span",k),React.createElement("div",E,React.createElement("p",C)))),ke&&Q(a)&&!Q(a).isLegacyMarkup&&React.createElement(u.PanelBody,x,React.createElement(u.Flex,O,React.createElement(u.FlexBlock,null,React.createElement(u.SelectControl,P)),React.createElement(u.FlexBlock,null,React.createElement(u.TextControl,T))),React.createElement(V,B,(0,b.__)("Colors","gravityforms")),React.createElement(A,I),React.createElement(A,F),React.createElement(A,M),React.createElement(A,Z),React.createElement(U,G,React.createElement(H,q,(0,b.__)("The accent color is used for aspects such as checkmarks and dropdown choices.","gravityforms"))),React.createElement(U,G,React.createElement(m.ContrastChecker,J)),React.createElement(U,G,React.createElement(m.ContrastChecker,Y))),ke&&Q(a)&&!Q(a).isLegacyMarkup&&React.createElement(u.PanelBody,W,React.createElement(u.TextControl,ee),React.createElement(V,be,(0,b.__)("Colors","gravityforms")),React.createElement(A,ve)),ke&&Q(a)&&!Q(a).isLegacyMarkup&&React.createElement(u.PanelBody,_e,React.createElement(u.TextControl,ye),React.createElement(V,he,(0,b.__)("Colors","gravityforms")),React.createElement(A,Ee)),ke&&Q(a)&&!Q(a).isLegacyMarkup&&React.createElement(u.PanelBody,Ce,React.createElement(V,xe,(0,b.__)("Colors","gravityforms")),React.createElement(A,Re),React.createElement(A,we),React.createElement(U,Oe,React.createElement(H,Pe,(0,b.__)("The background color is used for various form elements, such as buttons and progress bars.","gravityforms"))),React.createElement(U,Oe,React.createElement(m.ContrastChecker,Ne))),a&&React.createElement(u.PanelBody,Se,Q(a)&&React.createElement(u.ToggleControl,Te),React.createElement(u.ToggleControl,Be),React.createElement(u.TextareaControl,je),React.createElement(u.TextControl,Le),React.createElement(g.Fragment,null,(0,c.sprintf)((0,b.__)("Form ID: %s","gravityforms"),a))))},te=t.tabindex,re=t.fieldValues,oe=(t.imgPreview,t.theme),ne=t.inputSize,ae=t.inputBorderRadius,le=t.inputBorderColor,se=t.inputBackgroundColor,ie=t.inputColor,ce=t.inputPrimaryColor,me=t.labelFontSize,ue=t.labelColor,de=t.descriptionFontSize,fe=t.descriptionColor,pe=t.buttonPrimaryBackgroundColor,ge=t.buttonPrimaryColor,be={className:(0,p.classnames)({"gform-block__alert":!0,"gform-block__alert-error":!0})},ve={key:"placeholder",className:(0,p.classnames)({"wp-block-embed":!0,"gform-block__placeholder":!0})},_e={className:(0,p.classnames)({"gform-block__placeholder-brand":!0})},ye={className:(0,p.classnames)({"gform-icon":!0})},he={value:a,onChange:function(e){return d(e.target.value)}},ke="orbital"===oe||$.data.orbitalDefault&&""===oe;if(!t.formId||!R)return React.createElement("div",(0,m.useBlockProps)(),W(),ee(),k&&React.createElement("div",be,React.createElement("p",null,(0,b.__)("The selected form has been deleted or trashed. Please select a new form.","gravityforms"))),React.createElement(u.Placeholder,ve,React.createElement("div",_e,React.createElement("div",ye,y),React.createElement("p",null,React.createElement("strong",null,(0,b.__)("Gravity Forms","gravityforms")))),$.data.forms&&$.data.forms.length>0&&React.createElement("form",null,React.createElement("select",he,X().map((function(e){return React.createElement("option",{key:e.value,value:e.value},e.label)})))),(!$.data.forms||$.data.forms&&0===$.data.forms.length)&&React.createElement("form",null,React.createElement("p",null,(0,b.__)("You must have at least one form to use the block.","gravityforms")))));var Ee=Object.keys(t).filter((function(e){return!$.data.styles.defaults[e]||t[e]!=$.data.styles.defaults[e]})).reduce((function(e,r){return(0,l.Z)(e,(0,s.Z)({},r,t[r]))}),{}),Ce={key:"form_preview",block:"gravityforms/form",attributes:Z(Z({},(0,l.Z)({},$.data.styles.globals,Ee)),{},{theme:t.theme||$.data.styles.defaults.theme})};return React.createElement("div",(0,m.useBlockProps)(),W(),ee(),u.ServerSideRender?React.createElement(u.ServerSideRender,Ce):React.createElement(f(),Ce))},J=wp.i18n.__,Q=wp.blocks.registerBlockType,X=(null===a()||void 0===a()?void 0:a()["gravityforms/form"])||{},Y=function(){var e;(0,c.consoleInfo)("Gravity Forms Admin: Initialized form block."),Q("gravityforms/form",{title:J("Form","gravityforms"),description:J("Select and display one of your forms.","gravityforms"),category:"embed",supports:{customClassName:!1,className:!1,html:!1},keywords:["gravity forms","form","newsletter","contact"],example:{attributes:{imgPreview:!0}},attributes:(null==X||null===(e=X.data)||void 0===e?void 0:e.attributes)||{},icon:y,transforms:{from:[{type:"shortcode",tag:["gravityform","gravityforms"],attributes:{formId:{type:"string",shortcode:function(e){var t=e.named.id;return parseInt(t).toString()}},title:{type:"boolean",shortcode:function(e){return"true"===e.named.title}},description:{type:"boolean",shortcode:function(e){return"true"===e.named.description}},ajax:{type:"boolean",shortcode:function(e){return"true"===e.named.ajax}},tabindex:{type:"string",shortcode:function(e){var t=e.named.tabindex;return isNaN(t)?null:parseInt(t).toString()}}}}]},edit:q,save:function(){return null}})}},271:function(e,t,r){"use strict";var o,n=r(5518),a=function(){(0,n.consoleInfo)("Gravity Forms Common: Initialized all javascript that targeted document ready.")},l=function(){(0,n.ready)(a)},s=r(5311),i=r.n(s),c=r(2340),m=r.n(c),u=r(7329),d=r.n(u),f=r(4023),p=r.n(f),g={containers:(0,n.getNodes)("page-loader",!0)},b={rendered:!1},v=(null===d()||void 0===d()||null===(o=d().form_settings)||void 0===o?void 0:o.loader)||{},_=function(){m().instances.loaders.pageLoader.hideLoader()},y=function(){b.rendered?m().instances.loaders.pageLoader.showLoader():(m().instances.loaders.pageLoader.init(),b.rendered=!0)},h=r(3795),k=function(e){(0,h.ZP)(e.detail)},E={editorButton:(0,n.getNode)("editor-flyout-trigger"),embedForm:(0,n.getNode)("embed-flyout-trigger"),taggable:(0,n.getNode)(".merge-tag-support",document,!0),postSelect:(0,n.getNodes)("gform-settings-field-select",!0)},C=function(){var e;m().instances=m().instances||{},m().instances.loaders=m().instances.loaders||{},e=v.i18n.loaderText,m().instances.loaders.pageLoader=new(p())({id:"gform-page-loader",position:"sticky",renderOnInit:!1,target:"#wpbody-content",text:(0,n.escapeHtml)(e)}),g.containers.forEach((function(e){"form"===e.tagName.toLowerCase()&&i()(e).on("submit",y)})),document.addEventListener("gform/page_loader/show",y),document.addEventListener("gform/page_loader/hide",_),(0,n.consoleInfo)("Gravity Forms Admin: Initialized page loader."),document.addEventListener("gform/snackbar/render",k),(0,n.consoleInfo)("Gravity Forms Admin: Initialized snackbar component."),E.editorButton&&Promise.all([r.e(194),r.e(528)]).then(r.bind(r,2389)).then((function(e){e.default()})),E.embedForm&&Promise.all([r.e(194),r.e(848)]).then(r.bind(r,2671)).then((function(e){e.default()})),E.taggable&&Promise.all([r.e(194),r.e(514)]).then(r.bind(r,1589)).then((function(e){e.default()})),E.postSelect.length&&r.e(376).then(r.bind(r,3205)).then((function(e){e.default(E.postSelect)})),(0,n.consoleInfo)("Gravity Forms Admin: Initialized all admin components.")},x=r(3434),R=(null===d()||void 0===d()?void 0:d().block_editor)||{},w={formEditor:(0,n.getNodes)("form-editor-wrapper")[0],formSettings:(0,n.getNodes)("form-settings")[0],splashPageModal:(0,n.getNodes)("gf-splash-template")[0],systemReportButton:(0,n.getNodes)("gf-copy-system-report")[0]},O=function(){l(),C(),(0,x.default)(),R.data.is_block_editor&&r.e(319).then(r.bind(r,8284)).then((function(e){e.default()})),w.formEditor&&Promise.all([r.e(194),r.e(192),r.e(42)]).then(r.bind(r,205)).then((function(e){e.default(w.formEditor)})),!w.formEditor&&(0,n.shouldLoadChunk)("form-saver")&&Promise.all([r.e(194),r.e(192),r.e(646)]).then(r.bind(r,1141)).then((function(e){e.default()})),w.splashPageModal&&r.e(993).then(r.bind(r,9565)).then((function(e){e.default(w.splashPageModal)})),w.systemReportButton&&r.e(736).then(r.bind(r,5067)).then((function(e){e.default(w.systemReportButton)})),(0,n.consoleInfo)("Gravity Forms Admin: Initialized all javascript that targeted document ready.")},P=(null===d()||void 0===d()?void 0:d().block_editor)||{};d().hmr_dev||(r.p=d().public_path),P.data.is_block_editor&&r(2373).default(),(0,n.ready)(O)},9608:function(e){"use strict";e.exports=ajaxurl},7536:function(e){"use strict";e.exports=gf_vars},2340:function(e){"use strict";e.exports=gform},3068:function(e){"use strict";e.exports=gform.components.admin.html.elements.Button},191:function(e){"use strict";e.exports=gform.components.admin.html.elements.Dropdown},797:function(e){"use strict";e.exports=gform.components.admin.html.elements.Input},4023:function(e){"use strict";e.exports=gform.components.admin.html.elements.Loader},4536:function(e){"use strict";e.exports=gform.components.admin.html.elements.StatusIndicator},1024:function(e){"use strict";e.exports=gform.components.admin.html.elements.Toggle},1519:function(e){"use strict";e.exports=gform.components.admin.html.modules.Dialog},5862:function(e){"use strict";e.exports=gform.components.admin.html.modules.Flyout},5872:function(e){"use strict";e.exports=gform.components.admin.react.elements.Box},564:function(e){"use strict";e.exports=gform.components.admin.react.elements.Button},4065:function(e){"use strict";e.exports=gform.components.admin.react.elements.Checkbox},351:function(e){"use strict";e.exports=gform.components.admin.react.elements.Grid},4216:function(e){"use strict";e.exports=gform.components.admin.react.elements.Heading},5718:function(e){"use strict";e.exports=gform.components.admin.react.elements.Icon},4824:function(e){"use strict";e.exports=gform.components.admin.react.elements.Input},5211:function(e){"use strict";e.exports=gform.components.admin.react.elements.Label},9645:function(e){"use strict";e.exports=gform.components.admin.react.elements.Select},405:function(e){"use strict";e.exports=gform.components.admin.react.elements.Tag},6172:function(e){"use strict";e.exports=gform.components.admin.react.elements.Text},5235:function(e){"use strict";e.exports=gform.components.admin.react.elements.Textarea},5595:function(e){"use strict";e.exports=gform.components.admin.react.elements.Toggle},7941:function(e){"use strict";e.exports=gform.components.admin.react.modules.Cards.FormTemplateCard},9843:function(e){"use strict";e.exports=gform.components.admin.react.modules.Dialog},89:function(e){"use strict";e.exports=gform.components.admin.react.modules.Flyout},8309:function(e){"use strict";e.exports=gform.components.admin.react.modules.InputGroup},8472:function(e){"use strict";e.exports=gform.components.admin.react.modules.List},4318:function(e){"use strict";e.exports=gform.components.admin.react.modules.NavBar},5196:function(e){"use strict";e.exports=gform.components.admin.react.modules.Steps},9495:function(e){"use strict";e.exports=gform.components.admin.react.modules.Video.VidyardVideo},8349:function(e){"use strict";e.exports=gform.libraries},5518:function(e){"use strict";e.exports=gform.utils},6134:function(e){"use strict";e.exports=gform.utils.react},7329:function(e){"use strict";e.exports=gform_admin_config},5311:function(e){"use strict";e.exports=jQuery},5998:function(e){"use strict";e.exports=wp},4489:function(e){"use strict";e.exports=wp.data},6132:function(e){"use strict";e.exports=wp.editPost},1747:function(e){"use strict";e.exports=wp.element},9662:function(e){"use strict";e.exports=wp.i18n},9841:function(e){"use strict";e.exports=wp.plugins}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,a),r.exports}a.m=o,e=[],a.O=function(t,r,o,n){if(!r){var l=1/0;for(m=0;m<e.length;m++){r=e[m][0],o=e[m][1],n=e[m][2];for(var s=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(s=!1,n<l&&(l=n));if(s){e.splice(m--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[r,o,n]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))},a.u=function(e){return({42:"scripts-admin.form-editor",215:"scripts-admin.setup-wizard",236:"scripts-admin.template-library",319:"scripts-admin.block-editor",376:"scripts-admin.post-select",514:"scripts-admin.merge-tags",528:"scripts-admin.editor-button",646:"scripts-admin.form-ajax-save",736:"scripts-admin.system-report",848:"scripts-admin.embed-form",993:"scripts-admin.splash-page"}[e]||e)+"."+{42:"8f292e8800ea3887f9f1",192:"1302cbb2a309c436a0f2",215:"befb60008e8e2e558f2b",236:"7e8ecd7dce8d6eae810a",319:"0ea0cf2d2d8efd4bea3b",376:"2ebd8f4b6bf9269a8e8f",514:"1b9ad8f3117affff7b37",528:"5de4f68e846e9b660e29",646:"ce4ab844e8c68a2c4cbb",736:"732370d2f7b50c03c8d0",848:"debfef6ade4b40fd5e51",993:"c0727e8721f5396c8b48"}[e]+".js"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},r="gravityforms:",a.l=function(e,o,n,l){if(t[e])t[e].push(o);else{var s,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var u=c[m];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){s=u;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+n),s.src=e),t[e]=[o];var d=function(r,o){s.onerror=s.onload=null,clearTimeout(f);var n=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(o)})),r)return r(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),i&&document.head.appendChild(s)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={223:0};a.f.j=function(t,r){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise((function(r,n){o=e[t]=[r,n]}));r.push(o[2]=n);var l=a.p+a.u(t),s=new Error;a.l(l,(function(r){if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",s.name="ChunkLoadError",s.type=n,s.request=l,o[1](s)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,l=r[0],s=r[1],i=r[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var m=i(a)}for(t&&t(r);c<l.length;c++)n=l[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},r=self.webpackChunkgravityforms=self.webpackChunkgravityforms||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),a.O(void 0,[194],(function(){return a(4051)}));var l=a.O(void 0,[194],(function(){return a(271)}));l=a.O(l)}();
//# sourceMappingURL=scripts-admin.js.map