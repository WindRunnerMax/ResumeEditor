(this["webpackJsonpresume-editor"]=this["webpackJsonpresume-editor"]||[]).push([[4],{498:function(e,t,r){e.exports={editorContainer:"json-editor_editorContainer__9yFya",saveIcon:"json-editor_saveIcon__3MoQu"}},503:function(e,t,r){"use strict";r.r(t),r.d(t,"JSONEditor",(function(){return v}));var n=r(501),c=(r(286),r(161)),o=r(498),s=r.n(o),a=r(0),i=(o=r(499),r.n(o)),u=(r(500),r(215)),d=r(139),f=r(49),j=r(1),v=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(e.current){var r=t.current||new i.a(e.current,{mode:"code",modes:["code","tree","form","text","view"]});return(t.current=r).set(Object(u.a)("l").get(d.a)),function(){r.destroy()}}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:s.a.editorContainer,ref:e}),Object(j.jsx)("div",{className:s.a.saveIcon,onClick:function(){var e=null===(e=t.current)||void 0===e?void 0:e.getText();if(!Object(f.a)(e))try{if(""===e)return Object(u.a)("l").remove(d.a),void c.a.success("\u7f13\u5b58\u6e05\u7406\u6210\u529f");var r=JSON.parse(e);Object(u.a)("l").set(d.a,r),c.a.success("\u4fdd\u5b58\u6210\u529f")}catch(e){c.a.error("\u4fdd\u5b58\u5931\u8d25")}},children:Object(j.jsx)(n.a,{})})]})};t.default=v}}]);