"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2714],{10003:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(29439),r=n(72791),i=n(70697),l=(n(87092),n(66293)),c=n(80184);function o(e){var t=(0,r.useState)({totalDocs:e.totalPages,currentPage:e.currentPage}),n=(0,a.Z)(t,2),o=n[0];n[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{showTotal:function(e,t){return"".concat(t[0]," - ").concat(t[1]," of ").concat(e," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:e.defaultPageSize,defaultCurrent:o.currentPage,onShowSizeChange:function(e){console.log("onShowSizeChange",e)},onChange:function(t){e.callbackfunc(t)},total:o.totalDocs,locale:l.Z})})}},52714:function(e,t,n){n.r(t);var a=n(1413),r=n(29439),i=n(72791),l=n(57689),c=n(84951),o=n(30212),s=n(21830),d=n.n(s),u=n(77710),h=n(10003),g=n(63263),f=n(80184);t.default=function(){var e=(0,i.useState)({eventList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}}),t=(0,r.Z)(e,2),n=t[0],s=t[1],m=n.eventList,x=n.totalPages,j=n.currentPage,p=n.loader,v=n.permissions,F=(0,l.s0)(),Z=function(e){s((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loader:!0})})),u.Z.get("event?page=".concat(e-1,"&size=10&sort=id,desc")).then((function(e){s((function(t){return(0,a.Z)((0,a.Z)({},t),{},{eventList:e.data.content,totalPages:e.data.totalElements,currentPage:e.data.pageNumber+1,loader:!1})})),401==e.status&&(d().fire({title:"error",icon:"error",text:"Session Expired"}),F("/login"))})).catch((function(e){d().fire(e.response.data.message,"Please try again "),s((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loader:!1,eventList:[]})}))}))};(0,i.useEffect)((function(){var e=localStorage.getItem("userid");g.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),g.Z.get("".concat("http://localhost:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].events:null;s((function(e){return(0,a.Z)((0,a.Z)({},e),{},{permissions:t})}))})).catch((function(e){})),Z("1")}),[]);var b=function(e,t){return(0,f.jsx)(f.Fragment,{children:!0===e?"Yes":"No"})};return(0,f.jsxs)(f.Fragment,{children:[p?(0,f.jsx)(c.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,f.jsx)(c.Zb,{children:(0,f.jsxs)(c.eW,{className:"cardbg",children:[(0,f.jsxs)(c.X2,{children:[(0,f.jsx)(c.JX,{children:(0,f.jsx)("h4",{children:(0,f.jsx)("strong",{children:"Events "})})}),(0,f.jsx)(c.JX,{children:v.canCreate?(0,f.jsx)(c.zx,{color:"primary",size:"sm",className:"buttonfloat",onClick:function(){return F("/events/addevent/new")},children:"Add Event "}):null})]}),(0,f.jsx)(c.X2,{children:(0,f.jsx)(c.JX,{children:(0,f.jsxs)(c.Zb,{children:[(0,f.jsxs)(o.c8,{data:m,keyField:"name",search:!0,striped:!0,hover:!0,multiColumnSearch:!0,version:"4",children:[(0,f.jsx)(o.bY,{width:"120",dataAlign:"left",dataField:"sno",dataFormat:function(e,t,n,a){return(0,f.jsx)(f.Fragment,{children:a+1})},dataSort:!0,children:"S No"}),(0,f.jsx)(o.bY,{width:"130",dataAlign:"left",dataField:"name",children:"Title"}),(0,f.jsx)(o.bY,{width:"130",dataAlign:"left",dataField:"eventType",dataFormat:function(e,t){return(0,f.jsx)(f.Fragment,{children:e.name})},children:"Event Type"}),(0,f.jsx)(o.bY,{width:"130",dataAlign:"left",dataField:"registrationFee",children:"Registration Fee $"}),(0,f.jsx)(o.bY,{width:"130",dataAlign:"left",dataField:"perDay",children:"Event Fee $"}),(0,f.jsx)(o.bY,{width:"130",dataAlign:"left",dataField:"isAllDay",dataFormat:b,children:"All Day"}),(0,f.jsx)(o.bY,{width:"140",dataAlign:"left",dataField:"isCustomRange",dataFormat:b,children:"Custom Range"}),(0,f.jsx)(o.bY,{width:"130",dataAlign:"left",dataField:"id",dataFormat:function(e){return function(e){return(0,f.jsx)("span",{children:v.canUpdate?(0,f.jsx)(c.zx,{color:"primary",onClick:function(){return F("/events/eventregister/".concat(e))},children:"Register"}):null})}(e)},children:"Action"})]}),(0,f.jsx)(c.iR,{children:m.length>=1?(0,f.jsx)(h.Z,{totalPages:x,currentPage:j,callbackfunc:function(e){Z(e)},defaultPageSize:"10"}):null})]})})}),(0,f.jsx)(c.X2,{})]})})]})}}}]);
//# sourceMappingURL=2714.0508c1b1.chunk.js.map