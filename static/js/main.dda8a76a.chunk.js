(this["webpackJsonpresume-editor"]=this["webpackJsonpresume-editor"]||[]).push([[0],{141:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},152:function(e,t,n){},202:function(e,t,n){e.exports={fullPage:"empty_fullPage__pYRH7"}},224:function(e,t,n){},229:function(e,t,n){},330:function(e,t,n){},343:function(e,t,n){},345:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){},377:function(e,t,n){"use strict";function c(e,t){var n=Object(o.useRef)(!1);Object(o.useEffect)((function(){return n.current?e():void(n.current=!0)}),t)}n.r(t);var a=n(12),i=n.n(a),r=n(3),o=(n(152),n(0)),s="INIT_STATE",l="ADD_SECTION",d="ADD_CHILD_SECTION",u="DELETE_SECTION",j="DELETE_ONE_BY_UUID",b="UPDATE_ONE",f="SELECT_NODE",p="UPDATE_ALL",m=Object.prototype.toString,O=function(e){return null==e};function h(e){return"[object Object]"===m.call(e)}function g(e,t){if(!t)return null;var n=[];for(n.push(e);n.length;){var c,a=n.pop(),i=Object(v.a)(a);try{for(i.s();!(c=i.n()).done;){var r=c.value;if(r.id===t)return r;n.push(r.children)}}catch(e){i.e(e)}finally{i.f()}}return null}var x=n(21),v=n(11),y=function(e,t){switch(t.type){case s:e.cld=t.payload;break;case l:var n=(c=t.payload).config,c=c.index;O(c)?e.cld.children.push(n):e.cld.children.splice(c+1,0,n);break;case d:n=(a=t.payload).uuid;var a=a.config;(n=g(e.cld.children,n))&&n.children.push(a);break;case u:var i=t.payload;e.cld.children.splice(i,1);break;case j:var r=t.payload;!function(e,t){if(t){var n=[];for(n.push(e);n.length;)for(var c=n.pop(),a=c.length,i=0;i<a;++i){var r=c[i];if(r.id===t)return c.splice(i,1);n.push(r.children)}}}(e.cld.children,r);break;case b:a=(o=t.payload).id,i=o.key,r=o.data;var o=o.merge;!function(e,t,n,c,a){if(t=g(e,t)){for(var i=t,r=n.split("."),o=(t=r[r.length-1],0),s=r.length-1;o<s;++o){if(!h(i))return;i=i[r[o]]}h(i)&&(h(n=i[t])&&h(c)?i[t]=a?Object(x.a)(Object(x.a)({},n),c):Object(x.a)({},c):i[t]=c)}}(e.cld.children,a,i,r,void 0===o||o);break;case p:o=t.payload.data,e.cld.children=o;break;case f:if(e.selectedNode.id===t.payload.id)break;e.selectedNode=t.payload}},w=n(190),N=n(4),E="editor",k={state:{cld:{user:"",date:new Date,children:[]},selectedNode:{id:"",name:""}},mode:E,dispatch:function(){}},C=Object(o.createContext)(k),D=function(e){var t=void 0===(c=e.mode)?E:c,n=e.children,c=Object(w.a)(y,k.state);c=(e=Object(r.a)(c,2))[0],e=e[1];return Object(N.jsx)(C.Provider,{value:{state:c,mode:t,dispatch:e},children:n})};function S(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"local",t="local"===e||"l"===e?window.localStorage:window.sessionStorage;return{has:function(e){return e=P(e),!!t.getItem(e)},get:function(e){var n=P(e);return null===(e=t.getItem(n))?null:(null===(e=z(e))&&this.remove(n),e)},set:function(e,n){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;e=P(e),c=H(n,c);return t.setItem(e,c)},remove:function(e){return e=P(e),t.removeItem(e)},clear:function(){return t.clear()}}}function R(){var e=Object(o.useContext)(C),t=e.state,n=e.dispatch;return Object(o.useEffect)((function(){var e=S("l").get("cld");e&&n({type:s,payload:e})}),[n]),c((function(){I((function(){S("l").set("cld",t.cld)}))}),[t.cld]),Object(o.useEffect)((function(){}),[t.selectedNode]),Object(N.jsx)(N.Fragment,{})}var P=function(e){return String(e).replace(/-storage$/g,"")+"-storage"},z=function(e){try{var t=JSON.parse(e);return Number.isNaN(t.expire)||t.expire&&function(e,t,n,c,a,i,r){if(void 0===e)return new Date;if(e instanceof Date||"number"==typeof e&&void 0===t)return new Date(e);if("number"==typeof e&&"number"==typeof t)return new Date(e,t,n||1,c||0,a||0,i||0,r||0);if("string"==typeof e)return new Date(e.replace(/-/g,"/"));throw new Error("No suitable parameters")}().getTime()>t.expire?null:t.origin}catch(e){return null}},H=function(e,t){return e={origin:e,expire:null},t&&(e.expire=t.getTime()),JSON.stringify(e)},F=n(42),I=Object(F.debounce)((function(e){return e()}),500),_=n(192),L=n(19),M=n.n(L),T=(n(153),n(69)),A=n(191),B=(n(221),n(206)),U=(n(224),[]);function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((function(e){e.name,window.store[e.name]=e}))}function J(e,t){return e.module,e=Object(X.a)(e,ee),$()(Object(x.a)(Object(x.a)({id:Object(Z.a)(),config:{},style:{},props:{},children:[]},e),t))}window.store=window.store||{};var V=n(386),Y=[{label:(t="./templates/")+"social-simple.jpg",name:"\u7b80\u6d01\u6a21\u7248",template:t+"social-simple.json"},{label:t+"social.jpg",name:"\u5355\u5217\u6a21\u7248",template:t+"social.json"},{label:t+"campus.jpg",name:"\u53cc\u5217\u6a21\u7248",template:t+"campus.json"}],G=function(e){return window.fetch(e).then((function(e){return e.json()})).catch((function(){return null}))},K=function(e){var t=Object(o.useState)(!1),n=(b=Object(r.a)(t,2))[0],c=b[1],a=(t=Object(o.useContext)(C)).state,i=t.dispatch,d=U.map((function(e){return e.module.control})),u=Object(V.a)((function(e){var t;a.selectedNode.id?(t=function(e,t){if(!t)return null;for(var n=0,c=e.length;n<c;++n)if(e[n].id===t)return n;return null}(a.cld.children,a.selectedNode.id),O(t)||i({type:l,payload:{config:e,index:t}})):i({type:l,payload:{config:e}}),i({type:f,payload:{id:e.id,name:e.name}})})),j=Object(V.a)((function(e){var t;B.a.confirm({title:"\u8b66\u544a",content:"\u786e\u5b9a\u8981\u52a0\u8f7d\u6a21\u7248\u5417\uff0c\u5f53\u524d\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u8986\u76d6\u3002",confirmLoading:n,onConfirm:(t=Object(A.a)(M.a.mark((function t(){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.next=3,G(e);case 3:if(n=t.sent,c(!1),n){t.next=7;break}return t.abrupt("return",T.a.error("\u6a21\u7248\u52a0\u8f7d\u5931\u8d25"));case 7:n.user="Czy",n.date=new Date,i({type:s,payload:n});case 10:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})})),b=Object(o.useMemo)((function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"view-container-title a-y-center",children:[Object(N.jsx)(_.a,{style:{fontSize:18}}),Object(N.jsx)("span",{className:"a-ml",children:"\u9884\u8bbe"})]}),Object(N.jsx)("div",{className:"sub-title",children:"\u7ec4\u4ef6"}),Object(N.jsx)("div",{className:"view-container-body pedestal-control-container",children:d.map((function(e,t){return Object(N.jsx)("div",{className:"control-button-container",children:Object(N.jsxs)("div",{className:"a-x-center a-y-center a-flex-column a-pointer control-button",onClick:function(){return u(e.getConfig())},children:[e.icon,Object(N.jsx)("div",{children:e.name})]})},t)}))})]})}),[u,d]);t=Object(o.useMemo)((function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"sub-title",children:"\u6a21\u7248"}),Object(N.jsx)("div",{className:"template-container",children:Y.map((function(e,t){return Object(N.jsxs)("div",{onClick:function(){return j(e.template)},className:"template-item",children:[Object(N.jsx)("div",{className:"img-container",children:Object(N.jsx)("img",{src:e.label})}),Object(N.jsx)("div",{children:e.name})]},t)}))})]})}),[j]);return Object(N.jsx)("div",{className:e.className,children:Object(N.jsxs)("div",{className:"view-control-panel",children:[b,t]})})},Q=(n(227),n(88)),q=n(197),X=(n(229),n(209)),$=(a=n(193),n.n(a)),Z=n(387),ee=["module"];function te(e){if(window.store[e])return window.store[e].module}function ne(e){var t=(c=Object(o.useContext)(C)).state,n=c.dispatch,c=Object(o.useMemo)((function(){var e=t.selectedNode.name.split(".");return(e=Object(r.a)(e,1)[0])&&(e=te(e))&&e.main?(e=e.editor,Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(e,{state:t,dispatch:n}),Object(N.jsx)(se,{state:t,dispatch:n})]})):null}),[t.selectedNode.id]);return Object(N.jsx)("div",{className:e.className,children:Object(N.jsxs)("div",{className:"view-editor-panel",children:[Object(N.jsx)("div",{className:"view-container-title",children:Object(N.jsxs)("div",{children:[Object(N.jsx)(q.a,{style:{fontSize:18}}),Object(N.jsx)("span",{className:"a-ml",children:"\u7f16\u8f91"})]})}),Object(N.jsx)("div",{className:"view-container-body",children:c||Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(Q.a,{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor",children:"Github"}),Object(N.jsx)(Q.a,{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor#%E5%AF%BC%E5%87%BApdf",children:"\u4f7f\u7528\u5fc5\u8bfb"})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(Q.a,{href:"?preview",target:"_blank",children:"\u5b9e\u65f6\u9884\u89c8"}),Object(N.jsx)(Q.a,{onClick:e.exportPDF,children:"\u5bfc\u51faPDF"})]})]})})]})})}function ce(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return"[object String]"===m.call(e)})).join(" ")}function ae(e){var t=Object(o.useState)(0),n=Object(r.a)(t,2),c=(t=n[0],n[1]),a=Object(o.useRef)(null),i=Object(V.a)((function(){var t;a.current&&(t=a.current.getBoundingClientRect().width-2,c(t/e.cols))}));return Object(o.useEffect)((function(){return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[i,e.cols]),Object(N.jsx)("div",{className:ce("pedestal-main-reference-line",e.className,e.display&&"enable"),style:Object(x.a)({backgroundSize:"".concat(t,"px ").concat(e.rows,"px"),backgroundPositionX:t/2,backgroundPositionY:-e.rows/2},e.style),ref:a,children:e.children})}n(145);var ie=n(77),re=(n(98),n(76)),oe=(L=n(194),n.n(L)),se=function(e){var t=Object(o.useRef)(null),n=e.state,c=e.dispatch,a=n.selectedNode.id,i=g(n.cld.children,a).style;n=Object(V.a)(Object(F.debounce)((function(e,t){if(t.style){var n={};try{if(!(n=oe()(t.style)[""]))return;n=Object.keys(n).map((function(e){return[e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()})),n[e]]})).reduce((function(e,t){t=(n=Object(r.a)(t,2))[0];var n=n[1];return e[t]=n,e}),{})}catch(e){}0<Object.keys.length&&c({type:b,payload:{id:a,key:"style",data:n,merge:!1}})}}),300));return Object(o.useEffect)((function(){var e=Object.entries(i).map((function(e){e=(t=Object(r.a)(e,2))[0];var t=t[1];return"    ".concat(e,": ").concat(t,";")}));t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue({style:"{\n".concat(e.join("\n"),"\n}")})}),[i]),Object(N.jsx)(ie.a,{ref:t,layout:"vertical",size:"mini",onChange:n,children:Object(N.jsx)(ie.a.Item,{label:"\u6837\u5f0f",field:"style",children:Object(N.jsx)(re.a.TextArea,{autoSize:!0})})})},le=n(114),de=(n(330),{x:0,y:0,w:10,h:30,isDraggable:!0,isResizable:!0,minW:1,minH:1}),ue=(t=n(147),a=n.n(t),n(28),ce);function je(e){var t=e.selectedId,n=e.dispatch,c=e.config,a=e.cols,i=Object(N.jsxs)("div",{className:"pedestal-main-item-toolbar",children:[Object(N.jsx)(Ne.a,{icon:Object(N.jsx)(Ee.a,{}),onClick:function(){var e=Object(Z.a)(),t={config:Object(x.a)(Object(x.a)({},Object(F.cloneDeep)(c)),{},{id:e})};h(t.config.config.layout)&&(t.config.config.layout.i=e),n({type:l,payload:t})},type:"text"}),Object(N.jsx)(Ne.a,{icon:Object(N.jsx)(we.a,{}),onClick:function(){c.config.layout&&n({type:b,payload:{id:c.id,key:"config.layout.w",data:a}})},type:"text"}),Object(N.jsx)(Ne.a,{icon:Object(N.jsx)(ye.a,{}),onClick:function(){var e;c.config.layout&&(e=c.config.layout,n({type:b,payload:{id:c.id,key:"config.layout.x",data:a/2-e.w/2}}))},type:"text"}),Object(N.jsx)(Ne.a,{icon:Object(N.jsx)(ve.a,{}),onClick:function(){n({type:j,payload:c.id}),n({type:f,payload:{id:"",name:""}})},type:"text"})]});return Object(N.jsx)(xe.b,{popupVisible:t===c.id,popup:function(){return i},position:"top",trigger:"contextMenu",children:e.children})}function be(e){var t=Object(o.useMemo)((function(){return Object(ke.withSize)({monitorHeight:!0,monitorWidth:!1,refreshRate:50})(e.component)}),[e.component]);return Object(N.jsx)(t,{onSize:function(t){var n;t.height&&e.instance.config.layout&&(n=e.instance.config.layout,t=Math.ceil(t.height/e.rowHeight),n.h!==t&&e.dispatch({type:b,payload:{id:e.instance.id,key:"config.layout.h",data:t}}))},dispatch:e.dispatch,instance:e.instance,isRender:e.isRender})}function fe(){return Object(N.jsx)("div",{className:De.a.fullPage,children:Object(N.jsx)(Ce.a,{description:"\u7a7a\u7a7a\u5982\u4e5f"})})}function pe(e){function t(e,t){u||(t?(t.id!==i.selectedNode.id&&l({type:f,payload:{id:t.id,name:t.name}}),e.stopPropagation()):l({type:f,payload:{id:"",name:""}}))}function n(){g(!1)}var c,a,i=(h=Object(o.useContext)(C)).state,s=h.mode,l=h.dispatch,d=i.cld,u="render"===s,j=e.rowHeight,b=e.cols,m=e.minHeight,O=e.allowOverlap,h=Object(o.useState)(!1),g=(h=(s=Object(r.a)(h,2))[0],s[1]);s=d.children,c=b,a=u,s=s.map((function(e){var t=Object(x.a)({i:e.id},de);if(e.config.layout){var n=e.config.layout,i=Object(x.a)(Object(x.a)({},t),n);i.isDraggable=!a,i.isResizable=!a;var r=i.x;return 0<(n=r+(e=i.w)-c)&&(n<=r?i.x=r-n:0<e-c&&(i.x=0,i.w=c)),i}return t}));return Object(N.jsx)("div",{className:e.className,onClick:function(e){return t(e)},children:Object(N.jsx)("div",{className:ue("pedestal-main-container",u&&"render-mode"),children:d.children.length?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(ge,{style:{minHeight:m},display:!u&&h,rows:j,cols:b,children:Object(N.jsx)(Se,{className:"pedestal-responsive-grid-layout",style:{minHeight:m},layout:s,autoSize:!0,draggableHandle:".pedestal-drag-dot",margin:[0,0],onLayoutChange:function(e){var t,n,c=(t=d.children,"id",n={},t.forEach((function(e){var t=e.id;"string"==typeof t&&(n[t]=e)})),n);e=e.map((function(e){var t=c[e.i];return Object(x.a)(Object(x.a)({},t),{},{config:Object(x.a)(Object(x.a)({},t.config),{},{layout:Object(x.a)({},e)})})}));l({type:p,payload:{data:e}})},cols:b,rowHeight:j,measureBeforeMount:!0,onDragStart:function(){g(!0)},onDragStop:n,onResizeStart:function(){g(!0)},onResizeStop:function(){g(!1)},allowOverlap:O,compactType:null,preventCollision:!0,useCSSTransforms:!1,children:d.children.map((function(e){var c=te(e.name);return c?(c=c.main,Object(N.jsxs)("div",{id:e.id,className:ue("pedestal-item",!u&&i.selectedNode.id===e.id&&"pedestal-item-focus"),onClick:function(n){return t(n,e)},children:[Object(N.jsx)(je,{selectedId:i.selectedNode.id,dispatch:l,config:e,cols:b,children:e.config.observeResize?Object(N.jsx)(be,{dispatch:l,instance:e,isRender:u,component:c,rowHeight:j}):Object(N.jsx)(c,{dispatch:l,instance:e,isRender:u})}),Object(N.jsx)("div",{className:"pedestal-drag-dot",onMouseUp:n,children:Object(N.jsx)(le.a,{})})]},e.id)):null}))})})}):Object(N.jsx)(fe,{})})})}function me(){return Object(o.useEffect)((function(){T.a.info("\u79fb\u52a8\u7aef\u4ec5\u63d0\u4f9b\u6a21\u7248\u9884\u89c8\u529f\u80fd\uff0c\u4e0d\u652f\u6301\u7f16\u8f91")}),[]),Object(N.jsx)("div",{className:"mobile-resume-editor",children:Object(N.jsxs)(D,{mode:"render",children:[Object(N.jsx)(K,{className:"mobile-control-panel"}),Object(N.jsx)(Re,{className:"mobile-main-panel",rowHeight:8,cols:60,minHeight:"296mm",allowOverlap:!1})]})})}function Oe(){return Object(N.jsx)("div",{className:"resume-editor",children:Object(N.jsxs)(D,{mode:"render",children:[Object(N.jsx)(Pe,{}),Object(N.jsx)(Re,{className:"main-panel",rowHeight:8,cols:60,minHeight:"296mm",allowOverlap:!1})]})})}function he(e){return Object(N.jsx)("div",{className:ce("pedestal-image",e.className),children:Object(N.jsx)(Ie.a,Object(x.a)(Object(x.a)({className:"pedestal-image"},e.instance.props),{},{style:e.instance.style}))})}n(343),ae.defaultProps={className:""};var ge=ae,xe=(n(103),n(44)),ve=n(73),ye=n(200),we=n(113),Ne=(n(80),n(27)),Ee=n(199),ke=(n(345),n(201)),Ce=(n(360),n(117)),De=(L=n(202),n.n(L)),Se=Object(t.WidthProvider)(a.a),Re=pe,Pe=(n(362),n(363),function(){var e=Object(o.useContext)(C).dispatch,t=Object(V.a)((function(){var t=S("l").get("cld");t&&e({type:s,payload:t})}));return Object(o.useEffect)((function(){window.addEventListener("storage",t),t()}),[e,t]),Object(N.jsx)(N.Fragment,{})}),ze=null!==new URL(location.href).searchParams.get("preview"),He=(a=n(203),a=(n(141),{icon:Object(N.jsx)(a.a,{}),name:"\u56fe\u7247",getConfig:function(){return J(Le)}}),n(379),n(207)),Fe=n(204),Ie=(n(189),n(208));function _e(e){var t=Object(o.useMemo)((function(){return Object(Me.b)(Object(Te.g)(Object(Ae.j)()))}),[]),n=e.instance.props.text||[{children:[{text:""}]}],c=Object(V.a)(Object(F.debounce)((function(t){e.dispatch({type:b,payload:{id:e.instance.id,key:"props",data:{text:t}}})}),500)),a=(d=Object(o.useMemo)((function(){var n=new Be.o(Object(Be.l)(),Object(Be.e)(t),Object(Be.b)(),Object(Be.m)(t),Object(Be.f)(t,e.isRender),Object(Be.q)(),Object(Be.p)(),Object(Be.h)(),Object(Be.g)(),Object(Be.k)(t),Object(Be.r)(t),Object(Be.c)(),Object(Be.a)(),Object(Be.d)(),Object(Be.i)()),c=n.getCommands();return n.add(Object(Be.n)(t,c)),n.apply()}),[t,e.isRender])).renderElement,i=d.renderLeaf,r=d.onKeyDown,s=d.withVoidElements,l=d.commands,d=Object(o.useMemo)((function(){return s(t)}),[t,s]);return Object(N.jsx)("div",{className:ce("pedestal-text",e.className),style:e.instance.style,children:Object(N.jsxs)(Te.c,{editor:d,value:n,onChange:c,children:[Object(N.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:Object(N.jsx)(Be.j,{isRender:e.isRender,commands:l})}),Object(N.jsx)(Te.a,{renderElement:a,renderLeaf:i,readOnly:e.isRender,placeholder:"Enter text ...",onKeyDown:r})]})})}he.defaultProps={className:""};var Le={name:"image",props:{src:"./favicon.ico"},config:{layout:{x:0,y:0,w:20,h:20,isDraggable:!0,isResizable:!0,minW:2,minH:2}},module:{control:a,main:he,editor:function(e){var t=Object(o.useRef)(null),n=e.state,c=e.dispatch,a=n.selectedNode.id,i=g(n.cld.children,a).props,r=Object(V.a)(Object(F.debounce)((function(e){c({type:b,payload:{id:a,key:"props",data:e}})}),300));return Object(o.useEffect)((function(){t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue(i)}),[i]),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"a-capitalize pedestal-editor-title",children:[e.name,"\u7ec4\u4ef6"]}),Object(N.jsx)(ie.a,{ref:t,layout:"vertical",size:"mini",onChange:function(e,t){r(t)},children:Object(N.jsx)(ie.a.Item,{label:"src",field:"src",children:Object(N.jsx)(re.a,{addAfter:Object(N.jsx)(He.a,{className:"image-editor-upload",accept:"image/*",action:"xxx/url",beforeUpload:function(e){return new Promise((function(n){var c=new FileReader;c.readAsDataURL(e),n(!(c.onload=function(){r({src:c.result}),t.current&&t.current.setFieldsValue({src:c.result})}))}))},onChange:function(){},showUploadList:!1,withCredentials:!0,children:Object(N.jsx)(Fe.a,{})})})})})]})}}},Me=(a=n(116),a=(n(143),{icon:Object(N.jsx)(a.a,{}),name:"\u6587\u5b57",getConfig:function(){return J(Ue)}}),n(378),n(75)),Te=n(17),Ae=n(1),Be=n(24);_e.defaultProps={className:""};var Ue={name:"rich-text",config:{layout:{x:0,y:0,w:20,h:10,isDraggable:!0,isResizable:!0,minW:4,minH:2},observeResize:!0},module:{control:a,main:_e,editor:function(){return Object(N.jsx)(N.Fragment,{})}}},We=(a=n(205),n(144),{name:"blank",config:{layout:{x:0,y:0,w:10,h:3,isDraggable:!0,isResizable:!0,minW:1,minH:1}},module:{control:{icon:Object(N.jsx)(a.a,{}),name:"\u7a7a\u767d",getConfig:function(){return J(We)}},main:function(e){return Object(N.jsx)("div",{className:ce("pedestal-main-image",e.className),style:e.instance.style})},editor:function(){return Object(N.jsx)(N.Fragment,{})}}});!function(){U.push.apply(U,arguments),W.apply(void 0,arguments)}(Le,Ue,We),i.a.render(Object(N.jsx)((function(){var e=Object(o.useState)(!1),t=(e=Object(r.a)(e,2))[0],n=e[1];return c((function(){t&&(window.print(),n(!1))}),[t]),navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||document.body.clientWidth<800?Object(N.jsx)(me,{}):ze?Object(N.jsx)(Oe,{}):Object(N.jsx)("div",{className:"resume-editor",children:Object(N.jsxs)(D,{mode:t?"render":"editor",children:[Object(N.jsx)(R,{}),Object(N.jsx)(K,{className:"control-panel"}),Object(N.jsx)(pe,{className:"main-panel",rowHeight:8,cols:60,minHeight:"296mm",allowOverlap:!1}),Object(N.jsx)(ne,{className:"editor-panel",exportPDF:function(){n(!0)}})]})})}),{}),document.getElementById("root"))}},[[377,1,2]]]);