"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9417],{10003:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(29439),r=a(72791),o=a(70697),c=(a(87092),a(66293)),l=a(80184);function s(e){var t=(0,r.useState)({totalDocs:e.totalPages,currentPage:e.currentPage}),a=(0,n.Z)(t,2),s=a[0];a[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.Z,{showTotal:function(e,t){return"".concat(t[0]," - ").concat(t[1]," of ").concat(e," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:e.defaultPageSize,defaultCurrent:s.currentPage,onShowSizeChange:function(e){console.log("onShowSizeChange",e)},onChange:function(t){e.callbackfunc(t)},total:s.totalDocs,locale:c.Z})})}},69417:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(1413),r=a(29439),o=a(72791),c=a(57689),l=a(84951),s=a(30212),i=a(77710),d=a(72426),u=a.n(d),g=a(10003),h=a(21830),f=a.n(h),m=a(9085),x=a(63263),j=a(80184),p={studentList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}};function S(e){var t=(0,o.useState)(p),a=(0,r.Z)(t,2),d=a[0],h=a[1],S=d.studentList,b=d.totalPages,C=d.currentPage,Z=d.loader,P=d.permissions,k=(0,c.s0)(),w=function(e){h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!0})})),i.Z.get("students?page=".concat(e-1,"&size=10&sort=id,desc")).then((function(e){var t=e.data.content?e.data.content:[];h((function(a){return(0,n.Z)((0,n.Z)({},a),{},{studentList:t,totalPages:e.data.totalElements,currentPage:e.data.pageNumber+1,loader:!1})}))})).catch((function(e){f().fire(e.response.data.message,"Please try again later"),h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!1,studentList:[]})}))}))};(0,o.useEffect)((function(){var e=localStorage.getItem("userid");x.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),x.Z.get("".concat("http://3.131.55.208:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].students:null;h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{permissions:t})}))})).catch((function(e){}));var t=document.getElementsByTagName("thead");t[0].style.backgroundColor=localStorage.getItem("tableColor"),t[1]&&(t[1].style.backgroundColor=localStorage.getItem("tableColor")),t[2]&&(t[2].style.backgroundColor=localStorage.getItem("tableColor")),w("1")}),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(m.Ix,{}),Z?(0,j.jsx)(l.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,j.jsxs)(l.eW,{className:"cardbg",style:{backgroundColor:localStorage.getItem("cardColor")},children:[(0,j.jsxs)(l.X2,{children:[(0,j.jsx)(l.JX,{children:(0,j.jsx)("h4",{children:(0,j.jsx)("strong",{children:"Students List"})})}),(0,j.jsx)(l.JX,{children:P.canCreate?(0,j.jsx)(l.zx,{color:"primary",size:"sm",style:{float:"right",backgroundColor:localStorage.getItem("btColor")},onClick:function(){return k("/studentTabs/students/create")},children:"Add Student"}):null})]}),(0,j.jsx)("div",{className:"height15"}),(0,j.jsx)(l.X2,{children:(0,j.jsx)(l.JX,{children:(0,j.jsxs)(l.Zb,{children:[(0,j.jsxs)(s.c8,{data:S,hover:!0,multiColumnSearch:!0,version:"4",search:!0,children:[(0,j.jsx)(s.bY,{width:"140",dataField:"firstName",dataFormat:function(e,t){return(0,j.jsx)("span",{children:t?"".concat(t.firstName," ").concat(t.lastName):null})},dataSort:!0,children:"Student Name"}),(0,j.jsx)(s.bY,{width:"180",dataField:"email",dataSort:!0,children:"Email"}),(0,j.jsx)(s.bY,{width:"120",dataField:"phone",dataSort:!0,children:"Phone"}),(0,j.jsx)(s.bY,{width:"100",dataField:"creationDate",dataFormat:function(e){return(0,j.jsx)(j.Fragment,{children:u()(e).format("MM/DD/YYYY")})},dataSort:!0,children:"Registered Date"}),(0,j.jsx)(s.bY,{width:"60",dataField:"id",dataAlign:"center",dataFormat:function(e,t){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("span",{children:P.canUpdate?(0,j.jsx)("i",{className:"fa fa-pencil",id:"pencilspace","aria-hidden":"true",onClick:function(){return k("/studentTabs/students/edit/".concat(t.id))},style:{cursor:"pointer",fontSize:"15px",color:"green"}}):null})})},isKey:!0,children:"Action"})]}),(0,j.jsx)(l.iR,{children:S&&S.length>=1?(0,j.jsx)(g.Z,{totalPages:b,currentPage:C,callbackfunc:function(e){w(e)},defaultPageSize:"10"}):null})]})})})]})]})}}}]);
//# sourceMappingURL=9417.fd16c987.chunk.js.map