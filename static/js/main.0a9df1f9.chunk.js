(this["webpackJsonpresume-editor"]=this["webpackJsonpresume-editor"]||[]).push([[0],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var c=[];window.store=window.store||{};var a=function(){c.push.apply(c,arguments),r.apply(void 0,arguments)},r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((function(e){e.name,window.store[e.name]=e}))}},149:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";function c(e,t,n,c,a,r,i){if(void 0===e)return new Date;if(e instanceof Date||"number"==typeof e&&void 0===t)return new Date(e);if("number"==typeof e&&"number"==typeof t)return new Date(e,t,n||1,c||0,a||0,r||0,i||0);if("string"==typeof e)return new Date(e.replace(/-/g,"/"));throw new Error("No suitable parameters")}function a(e){return String(e).replace(/-storage$/g,"")+"-storage"}t.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"local",t="local"===e||"l"===e?window.localStorage:window.sessionStorage;return{has:function(e){return e=a(e),!!t.getItem(e)},get:function(e){var n=a(e);return null===(e=t.getItem(n))?null:(e=function(e){try{var t=JSON.parse(e);return Number.isNaN(t.expire)||t.expire&&c().getTime()>t.expire?null:t.origin}catch(e){return null}}(e),null===e&&this.remove(n),e)},set:function(e,n){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;e=a(e),c=function(e,t){return e={origin:e,expire:null},t&&(e.expire=t.getTime()),JSON.stringify(e)}(n,c);return t.setItem(e,c)},remove:function(e){return e=a(e),t.removeItem(e)},clear:function(){return t.clear()}}}},160:function(e,t,n){"use strict";function c(e){var t=Object(o.useState)(0),n=Object(i.a)(t,2),c=(t=n[0],n[1]),a=Object(o.useRef)(null),s=Object(O.a)((function(){var t;a.current&&(t=a.current.getBoundingClientRect().width-2,c(t/e.cols))}));return Object(o.useEffect)((function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[s,e.cols]),Object(p.jsx)("div",{className:Object(b.b)("pedestal-main-reference-line",e.className,e.display&&"enable"),style:Object(r.a)({backgroundSize:"".concat(t,"px ").concat(e.rows,"px"),backgroundPositionX:t/2,backgroundPositionY:-e.rows/2},e.style),ref:a,children:e.children})}n.d(t,"a",(function(){return L}));var a=n(122),r=n(22),i=n(3),o=(n(345),n(0)),s=n(47),l=n(48),u={x:0,y:0,w:10,h:30,isDraggable:!0,isResizable:!0,minW:1,minH:1},d=n(156),j=n.n(d),b=n(40),f=n(18),O=(n(358),n(396)),p=n(4);function m(e){var t=e.selectedId,n=e.dispatch,c=e.config,a=e.cols,i=Object(p.jsxs)("div",{className:"pedestal-main-item-toolbar",children:[Object(p.jsx)(w.a,{icon:Object(p.jsx)(D.a,{}),onClick:function(){var e=Object(C.a)(),t={config:Object(r.a)(Object(r.a)({},_()(c)),{},{id:e})};Object(S.c)(t.config.config.layout)&&(t.config.config.layout.i=e),n({type:f.a.ADD_SECTION,payload:t})},type:"text"}),Object(p.jsx)(w.a,{icon:Object(p.jsx)(N.a,{}),onClick:function(){c.config.layout&&n({type:f.a.UPDATE_ONE,payload:{id:c.id,key:"config.layout.w",data:a}})},type:"text"}),Object(p.jsx)(w.a,{icon:Object(p.jsx)(E.a,{}),onClick:function(){var e;c.config.layout&&(e=c.config.layout,n({type:f.a.UPDATE_ONE,payload:{id:c.id,key:"config.layout.x",data:a/2-e.w/2}}))},type:"text"}),Object(p.jsx)(w.a,{icon:Object(p.jsx)(y.a,{}),onClick:function(){n({type:f.a.DELETE_ONE_BY_UUID,payload:c.id}),n({type:f.a.SELECT_NODE,payload:{id:"",name:""}})},type:"text"})]});return Object(p.jsx)(v.b,{popupVisible:e.display&&t===c.id,popup:function(){return i},position:"top",trigger:"contextMenu",popupAlign:{top:5},children:e.children})}function h(e){var t=Object(o.useMemo)((function(){return Object(A.withSize)({monitorHeight:!0,monitorWidth:!1,refreshRate:50})(e.component)}),[e.component]);return Object(p.jsx)(t,{onSize:function(t){var n;t.height&&e.instance.config.layout&&(n=e.instance.config.layout,t=Math.ceil(t.height/e.rowHeight),n.h!==t&&e.dispatch({type:f.a.UPDATE_ONE,payload:{id:e.instance.id,key:"config.layout.h",data:t}}))},dispatch:e.dispatch,instance:e.instance,isRender:e.isRender})}function g(){return Object(p.jsx)("div",{className:I.a.fullPage,children:Object(p.jsx)(k.a,{description:"\u7a7a\u7a7a\u5982\u4e5f"})})}c.defaultProps={className:""};var x=c,v=(n(109),n(51)),y=n(79),E=n(210),N=n(121),w=(n(83),n(30)),D=n(209),T=n(115),_=n.n(T),C=(n(360),n(389)),S=n(28),A=n(211),k=(n(375),n(125)),I=(T=n(212),n.n(T)),P=Object(d.WidthProvider)(j.a),L=function(e){function t(e,t){E||(t?(t.id!==j.selectedNode.id&&v({type:f.a.SELECT_NODE,payload:{id:t.id,name:t.name}}),e.stopPropagation()):v({type:f.a.SELECT_NODE,payload:{id:"",name:""}}))}function n(){C(!1)}var c,d,j=(T=Object(o.useContext)(s.a)).state,O=T.mode,v=T.dispatch,y=j.cld,E="render"===O,N=e.rowHeight,w=e.cols,D=e.minHeight,T=e.allowOverlap,_=(O=Object(o.useState)(!1),(O=Object(i.a)(O,2))[0]),C=O[1];O=y.children,c=w,d=E,O=O.map((function(e){var t=Object(r.a)({i:e.id},u);if(e.config.layout){var n=e.config.layout,a=Object(r.a)(Object(r.a)({},t),n);a.isDraggable=!d,a.isResizable=!d;var i=a.x;return 0<(n=i+(e=a.w)-c)&&(n<=i?a.x=i-n:0<e-c&&(a.x=0,a.w=c)),a}return t}));return Object(p.jsx)("div",{className:e.className,onClick:function(e){return t(e)},children:Object(p.jsx)("div",{className:Object(b.c)("pedestal-main-container",E&&"render-mode"),children:y.children.length?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(x,{style:{minHeight:D},display:!E&&_,rows:N,cols:w,children:Object(p.jsx)(P,{className:"pedestal-responsive-grid-layout",style:{minHeight:D},layout:O,autoSize:!0,draggableHandle:".pedestal-drag-dot",margin:[0,0],onLayoutChange:function(e){var t=Object(b.a)(y.children,"id");e=e.map((function(e){var n=t[e.i];return Object(r.a)(Object(r.a)({},n),{},{config:Object(r.a)(Object(r.a)({},n.config),{},{layout:Object(r.a)({},e)})})}));v({type:f.a.UPDATE_ALL,payload:{data:e}})},cols:w,rowHeight:N,measureBeforeMount:!0,onDragStart:function(){C(!0)},onDragStop:n,onResizeStart:function(){C(!0)},onResizeStop:function(){C(!1)},allowOverlap:T,compactType:null,preventCollision:!0,useCSSTransforms:!1,children:y.children.map((function(e){var c=Object(l.a)(e.name);return c?(c=c.main,Object(p.jsxs)("div",{id:e.id,className:Object(b.c)("pedestal-item",!E&&j.selectedNode.id===e.id&&"pedestal-item-focus"),onClick:function(n){return t(n,e)},children:[Object(p.jsx)(m,{selectedId:j.selectedNode.id,dispatch:v,config:e,cols:w,display:!E&&!_,children:e.config.observeResize?Object(p.jsx)(h,{dispatch:v,instance:e,isRender:E,component:c,rowHeight:N}):Object(p.jsx)(c,{dispatch:v,instance:e,isRender:E})}),Object(p.jsx)("div",{className:"pedestal-drag-dot",onMouseUp:n,children:Object(p.jsx)(a.a,{})})]},e.id)):null}))})})}):Object(p.jsx)(g,{})})})};t.b=L},163:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={INIT_STATE:"INIT_STATE",ADD_SECTION:"ADD_SECTION",ADD_CHILD_SECTION:"ADD_CHILD_SECTION",SWAP_SECTION:"SWAP_SECTION",DELETE_SECTION:"DELETE_SECTION",DELETE_ONE_BY_UUID:"DELETE_ONE_BY_UUID",UPDATE_ONE:"UPDATE_ONE",SELECT_NODE:"SELECT_NODE",UPDATE_ALL:"UPDATE_ALL"}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(203),a=(t=n(20),n.n(t)),r=(n(220),n(94)),i=n(202),o=(n(238),n(216)),s=n(3),l=(n(241),n(0)),u=n(18),d=n(47),j=n(110),b=n(50),f=n(28),O=n(396),p=[{label:(t="./templates/")+"social-simple.jpg",name:"\u7b80\u6d01\u6a21\u7248",template:t+"social-simple.json"},{label:t+"social.jpg",name:"\u5355\u5217\u6a21\u7248",template:t+"social.json"},{label:t+"campus.jpg",name:"\u53cc\u5217\u6a21\u7248",template:t+"campus.json"}],m=n(4),h=function(e){var t=Object(l.useState)(!1),n=(N=Object(s.a)(t,2))[0],h=N[1],g=(t=Object(l.useContext)(d.a)).state,x=t.dispatch,v=j.a.map((function(e){return e.module.control})),y=Object(O.a)((function(e){var t;g.selectedNode.id?(t=Object(b.b)(g.cld.children,g.selectedNode.id),Object(f.a)(t)||x({type:u.a.ADD_SECTION,payload:{config:e,index:t}})):x({type:u.a.ADD_SECTION,payload:{config:e}}),x({type:u.a.SELECT_NODE,payload:{id:e.id,name:e.name}})})),E=Object(O.a)((function(e){var t;o.a.confirm({title:"\u8b66\u544a",content:"\u786e\u5b9a\u8981\u52a0\u8f7d\u6a21\u7248\u5417\uff0c\u5f53\u524d\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u8986\u76d6\u3002",confirmLoading:n,onConfirm:(t=Object(i.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.next=3,window.fetch(e).then((function(e){return e.json()})).catch((function(){return null}));case 3:if(n=t.sent,h(!1),n){t.next=7;break}return t.abrupt("return",r.a.error("\u6a21\u7248\u52a0\u8f7d\u5931\u8d25"));case 7:n.user="Czy",n.date=new Date,x({type:u.a.INIT_STATE,payload:n});case 10:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})})),N=Object(l.useMemo)((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"view-container-title a-y-center",children:[Object(m.jsx)(c.a,{style:{fontSize:18}}),Object(m.jsx)("span",{className:"a-ml",children:"\u9884\u8bbe"})]}),Object(m.jsx)("div",{className:"sub-title",children:"\u7ec4\u4ef6"}),Object(m.jsx)("div",{className:"view-container-body pedestal-control-container",children:v.map((function(e,t){return Object(m.jsx)("div",{className:"control-button-container",children:Object(m.jsxs)("div",{className:"a-x-center a-y-center a-flex-column a-pointer control-button",onClick:function(){return y(e.getConfig())},children:[e.icon,Object(m.jsx)("div",{children:e.name})]})},t)}))})]})}),[y,v]);t=Object(l.useMemo)((function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"sub-title",children:"\u6a21\u7248"}),Object(m.jsx)("div",{className:"template-container",children:p.map((function(e,t){return Object(m.jsxs)("div",{onClick:function(){return E(e.template)},className:"template-item",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:e.label})}),Object(m.jsx)("div",{children:e.name})]},t)}))})]})}),[E]);return Object(m.jsx)("div",{className:e.className,children:Object(m.jsxs)("div",{className:"view-control-panel",children:[N,t]})})}},212:function(e,t,n){e.exports={fullPage:"empty_fullPage__pYRH7"}},228:function(e,t,n){},241:function(e,t,n){},246:function(e,t,n){},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return s}));var c=Object.prototype.toString,a=function(e){return null==e};function r(e){return"[object Object]"===c.call(e)}function i(e){return/^(-|\+)?\d+(\.\d+)?$/.test(String(e))}function o(e){return"[object String]"===c.call(e)}function s(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||document.body.clientWidth<800}},345:function(e,t,n){},358:function(e,t,n){},360:function(e,t,n){},386:function(e,t,n){"use strict";function c(e,t){var n=Object(j.useRef)(!1);Object(j.useEffect)((function(){return n.current?e():void(n.current=!0)}),t)}function a(){var e=Object(j.useContext)(f.a),t=e.state,n=e.dispatch;return Object(j.useEffect)((function(){var e=Object(p.a)("l").get(O.a);e&&n({type:b.a.INIT_STATE,payload:e})}),[n]),c((function(){h((function(){Object(p.a)("l").set(O.a,t.cld)}))}),[t.cld]),Object(j.useEffect)((function(){}),[t.selectedNode]),Object(m.jsx)(m.Fragment,{})}function r(e){var t=(c=Object(j.useContext)(f.a)).state,n=c.dispatch,c=Object(j.useMemo)((function(){var e=t.selectedNode.name.split(".");return(e=Object(u.a)(e,1)[0])&&(e=Object(y.a)(e))&&e.main?(e=e.editor,Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(e,{state:t,dispatch:n}),Object(m.jsx)(_,{state:t,dispatch:n})]})):null}),[t.selectedNode.id]);return Object(m.jsx)("div",{className:e.className,children:Object(m.jsxs)("div",{className:"view-editor-panel",children:[Object(m.jsx)("div",{className:"view-container-title",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(v.a,{style:{fontSize:18}}),Object(m.jsx)("span",{className:"a-ml",children:"\u7f16\u8f91"})]})}),Object(m.jsx)("div",{className:"view-container-body",children:c||Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor",children:"Github\u5730\u5740"}),Object(m.jsx)(x.a,{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor#%E5%AF%BC%E5%87%BApdf",children:"\u4f7f\u7528\u5fc5\u8bfb"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{href:"?preview",target:"_blank",children:"\u5b9e\u65f6\u9884\u89c8"}),Object(m.jsx)(x.a,{href:"?json",target:"_blank",children:"JSON\u7f16\u8f91"}),Object(m.jsx)(x.a,{onClick:e.exportPDF,children:"\u5bfc\u51faPDF"})]})]})})]})})}function i(e){return Object(m.jsx)(j.Suspense,{fallback:Object(m.jsx)(m.Fragment,{}),children:e.component})}function o(e){return Object(m.jsx)("div",{className:Object(H.b)("pedestal-image",e.className),children:Object(m.jsx)(F.a,Object(z.a)(Object(z.a)({className:"pedestal-image"},e.instance.props),{},{style:e.instance.style}))})}n.r(t);var s=n(12),l=n.n(s),u=n(3),d=(t=(n(163),n(228),n(36)),n.n(t)),j=n(0),b=n(18),f=n(47),O=n(87),p=n(153),m=n(4),h=d()((function(e){return e()}),500),g=n(200),x=(n(244),n(82)),v=n(207),y=(n(246),n(48)),E=(n(154),n(81)),N=(n(105),n(80)),w=n(50),D=n(396),T=(s=n(204),n.n(s)),_=function(e){var t=Object(j.useRef)(null),n=e.state,c=e.dispatch,a=n.selectedNode.id,r=Object(w.c)(n.cld.children,a).style;n=Object(D.a)(d()((function(e,t){if(t.style){var n={};try{if(!(n=T()(t.style)[""]))return;n=Object.keys(n).map((function(e){return[e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()})),n[e]]})).reduce((function(e,t){t=(n=Object(u.a)(t,2))[0];var n=n[1];return e[t]=n,e}),{})}catch(e){}0<Object.keys.length&&c({type:b.a.UPDATE_ONE,payload:{id:a,key:"style",data:n,merge:!1}})}}),300));return Object(j.useEffect)((function(){var e=Object.entries(r).map((function(e){e=(t=Object(u.a)(e,2))[0];var t=t[1];return"    ".concat(e,": ").concat(t,";")}));t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue({style:"{\n".concat(e.join("\n"),"\n}")})}),[r]),Object(m.jsx)(E.a,{ref:t,layout:"vertical",size:"mini",onChange:n,children:Object(m.jsx)(E.a.Item,{label:"\u6837\u5f0f",field:"style",children:Object(m.jsx)(N.a.TextArea,{autoSize:!0})})})},C=n(160),S=n(28),A=Object(j.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,402))})),k=Object(j.lazy)((function(){return n.e(6).then(n.bind(null,404))})),I=Object(j.lazy)((function(){return n.e(5).then(n.bind(null,403))})),P=null!==(t=new URL(location.href).searchParams).get("preview"),L=null!==t.get("json"),R=(s=n(110),t=n(213),t=(n(149),{icon:Object(m.jsx)(t.a,{}),name:"\u56fe\u7247",getConfig:function(){return Object(y.b)(B)}}),n(388),n(217)),U=n(214),z=n(22),F=(n(199),n(218)),H=n(40);function M(e){var t=Object(j.useMemo)((function(){return Object(W.b)(Object(J.g)(Object(Y.j)()))}),[]),n=e.instance.props.text||[{children:[{text:""}]}],c=Object(D.a)(d()((function(t){e.dispatch({type:b.a.UPDATE_ONE,payload:{id:e.instance.id,key:"props",data:{text:t}}})}),500)),a=(u=Object(j.useMemo)((function(){var n=new V.o(Object(V.l)(),Object(V.e)(t),Object(V.b)(),Object(V.m)(t),Object(V.f)(t,e.isRender),Object(V.q)(),Object(V.p)(),Object(V.h)(),Object(V.g)(),Object(V.k)(t),Object(V.r)(t),Object(V.c)(),Object(V.a)(),Object(V.d)(),Object(V.i)()),c=n.getCommands();return n.add(Object(V.n)(t,c)),n.apply()}),[t,e.isRender])).renderElement,r=u.renderLeaf,i=u.onKeyDown,o=u.withVoidElements,s=u.commands,l=u.onCopy,u=Object(j.useMemo)((function(){return o(t)}),[t,o]);return Object(m.jsx)("div",{className:Object(H.b)("pedestal-text",e.className),style:e.instance.style,children:Object(m.jsxs)(J.c,{editor:u,value:n,onChange:c,children:[Object(m.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:Object(m.jsx)(V.j,{isRender:e.isRender,commands:s})}),Object(m.jsx)(J.a,{renderElement:a,renderLeaf:r,readOnly:e.isRender,placeholder:"Enter text ...",onKeyDown:i,onCopy:function(e){return l(e,t)}})]})})}o.defaultProps={className:""};var B={name:"image",props:{src:"./favicon.ico"},config:{layout:{x:0,y:0,w:20,h:20,isDraggable:!0,isResizable:!0,minW:2,minH:2}},module:{control:t,main:o,editor:function(e){var t=Object(j.useRef)(null),n=e.state,c=e.dispatch,a=n.selectedNode.id,r=Object(w.c)(n.cld.children,a).props,i=Object(D.a)(d()((function(e){c({type:b.a.UPDATE_ONE,payload:{id:a,key:"props",data:e}})}),300));return Object(j.useEffect)((function(){t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue(r)}),[r]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"a-capitalize pedestal-editor-title",children:[e.name,"\u7ec4\u4ef6"]}),Object(m.jsx)(E.a,{ref:t,layout:"vertical",size:"mini",onChange:function(e,t){i(t)},children:Object(m.jsx)(E.a.Item,{label:"src",field:"src",children:Object(m.jsx)(N.a,{addAfter:Object(m.jsx)(R.a,{className:"image-editor-upload",accept:"image/*",action:"xxx/url",beforeUpload:function(e){return new Promise((function(n){var c=new FileReader;c.readAsDataURL(e),n(!(c.onload=function(){i({src:c.result}),t.current&&t.current.setFieldsValue({src:c.result})}))}))},onChange:function(){},showUploadList:!1,withCredentials:!0,children:Object(m.jsx)(U.a,{})})})})})]})}}},W=(t=n(124),t=(n(151),{icon:Object(m.jsx)(t.a,{}),name:"\u6587\u5b57",getConfig:function(){return Object(y.b)(G)}}),n(387),n(66)),J=n(16),Y=n(1),V=n(25);M.defaultProps={className:""};var G={name:"rich-text",config:{layout:{x:0,y:0,w:20,h:3,isDraggable:!0,isResizable:!0,minW:4,minH:2},observeResize:!0},module:{control:t,main:M,editor:function(){return Object(m.jsx)(m.Fragment,{})}}},K=(t=n(215),n(152),{name:"blank",config:{layout:{x:0,y:0,w:10,h:3,isDraggable:!0,isResizable:!0,minW:1,minH:1}},module:{control:{icon:Object(m.jsx)(t.a,{}),name:"\u7a7a\u767d",getConfig:function(){return Object(y.b)(K)}},main:function(e){return Object(m.jsx)("div",{className:Object(H.b)("pedestal-main-image",e.className),style:e.instance.style})},editor:function(){return Object(m.jsx)(m.Fragment,{})}}});Object(s.b)(B,G,K),l.a.render(Object(m.jsx)((function(){var e=Object(j.useState)(!1),t=(e=Object(u.a)(e,2))[0],n=e[1];return c((function(){t&&(window.print(),n(!1))}),[t]),Object(S.b)()?Object(m.jsx)(i,{component:Object(m.jsx)(I,{})}):P?Object(m.jsx)(i,{component:Object(m.jsx)(k,{})}):L?Object(m.jsx)(i,{component:Object(m.jsx)(A,{})}):Object(m.jsx)("div",{className:"resume-editor",children:Object(m.jsxs)(f.b,{mode:t?"render":"editor",children:[Object(m.jsx)(a,{}),Object(m.jsx)(g.a,{className:"control-panel"}),Object(m.jsx)(C.a,{className:"main-panel",rowHeight:8,cols:60,minHeight:"296mm",allowOverlap:!1}),Object(m.jsx)(r,{className:"editor-panel",exportPDF:function(){n(!0)}})]})})}),{}),document.getElementById("root"))},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n(3),n(31);var c=n(28),a=function(e,t){var n={};return e.forEach((function(e){var c=e[t];"string"==typeof c&&(n[c]=e)})),n},r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return Object(c.e)(e)})).join(" ")},i=r},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var c=n(3),a=(t=n(0),n(87)),r=n(201),i=n(4),o="editor",s={state:{cld:{user:"",date:new Date,children:[]},selectedNode:{id:"",name:""}},mode:o,dispatch:function(){}},l=Object(t.createContext)(s),u=function(e){var t=void 0===(u=e.mode)?o:u,n=e.children,u=Object(r.a)(a.b,s.state);u=(e=Object(c.a)(u,2))[0],e=e[1];return Object(i.jsx)(l.Provider,{value:{state:u,mode:t,dispatch:e},children:n})}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var c=n(22),a=n(219),r=(t=n(115),n.n(t)),i=n(389),o=["module"],s=function(e,t){return e.module,e=Object(a.a)(e,o),r()(Object(c.a)(Object(c.a)({id:Object(i.a)(),config:{},style:{},props:{},children:[]},e),t))};function l(e){if(window.store[e])return window.store[e].module}},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l}));var c=n(22),a=n(11),r=n(28),i=function(e,t){if(!t)return null;for(var n=0,c=e.length;n<c;++n)if(e[n].id===t)return n;return null},o=function(e,t){if(!t)return null;var n=[];for(n.push(e);n.length;){var c,r=n.pop(),i=Object(a.a)(r);try{for(i.s();!(c=i.n()).done;){var o=c.value;if(o.id===t)return o;n.push(o.children)}}catch(e){i.e(e)}finally{i.f()}}return null},s=function(e,t){if(!t)return!1;var n=[];for(n.push(e);n.length;)for(var c=n.pop(),a=c.length,r=0;r<a;++r){var i=c[r];if(i.id===t)return c.splice(r,1),!0;n.push(i.children)}return!1},l=function(e,t,n,a,i){if(!(t=o(e,t)))return!1;for(var s=t,l=n.split("."),u=(t=l[l.length-1],0),d=l.length-1;u<d;++u){if(!Object(r.c)(s))return!1;s=s[l[u]]}return!!Object(r.c)(s)&&(n=s[t],Object(r.c)(n)&&Object(r.c)(a)?s[t]=i?Object(c.a)(Object(c.a)({},n),a):Object(c.a)({},a):s[t]=a,!0)}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var c=n(28),a=n(50),r=n(18),i="cld",o=function(e,t){switch(t.type){case r.a.INIT_STATE:e.cld=t.payload;break;case r.a.ADD_SECTION:var n=(i=t.payload).config,i=i.index;Object(c.a)(i)?e.cld.children.push(n):e.cld.children.splice(i+1,0,n);break;case r.a.ADD_CHILD_SECTION:n=(o=t.payload).uuid;var o=o.config;(n=Object(a.c)(e.cld.children,n))&&n.children.push(o);break;case r.a.DELETE_SECTION:var s=t.payload;e.cld.children.splice(s,1);break;case r.a.DELETE_ONE_BY_UUID:var l=t.payload;Object(a.a)(e.cld.children,l);break;case r.a.UPDATE_ONE:o=(u=t.payload).id,s=u.key,l=u.data;var u=void 0===(u=u.merge)||u;Object(a.d)(e.cld.children,o,s,l,u);break;case r.a.UPDATE_ALL:u=t.payload.data,e.cld.children=u;break;case r.a.SELECT_NODE:if(e.selectedNode.id===t.payload.id)break;e.selectedNode=t.payload}}}},[[386,1,2]]]);