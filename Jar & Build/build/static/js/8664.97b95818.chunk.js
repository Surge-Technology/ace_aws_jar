"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8664],{10003:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(29439),r=n(72791),i=n(70697),o=(n(87092),n(66293)),c=n(80184);function s(e){var t=(0,r.useState)({totalDocs:e.totalPages,currentPage:e.currentPage}),n=(0,a.Z)(t,2),s=n[0];n[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{showTotal:function(e,t){return"".concat(t[0]," - ").concat(t[1]," of ").concat(e," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:e.defaultPageSize,defaultCurrent:s.currentPage,onShowSizeChange:function(e){console.log("onShowSizeChange",e)},onChange:function(t){e.callbackfunc(t)},total:s.totalDocs,locale:o.Z})})}},58664:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(1413),r=n(29439),i=n(72791),o=n(57689),c=n(84951),s=n(30212),l=n(77710),u=n(72426),d=n.n(u),h=n(10003),f=n(21830),g=n.n(f),m=n(9085),p=n(63263),x=n(80184),y={inquiryList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0},studPermissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}};function S(e){var t=(0,i.useState)(y),n=(0,r.Z)(t,2),u=n[0],f=n[1],S=u.inquiryList,j=u.totalPages,C=u.currentPage,b=u.loader,q=u.permissions,w=u.studPermissions,P=(0,o.s0)(),Z=function(e){f((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loader:!0})})),l.Z.get("inquiry/inquiries?page=".concat(e-1,"&size=10&sort=id,desc")).then((function(e){f((function(t){return(0,a.Z)((0,a.Z)({},t),{},{inquiryList:e.data.content,totalPages:e.data.totalElements,currentPage:e.data.pageNumber+1,loader:!1})}))})).catch((function(e){g().fire(e.response.data.message,"Please try again later"),f((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loader:!1,inquiryList:[]})}))}))};(0,i.useEffect)((function(){var e=localStorage.getItem("userid");p.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),p.Z.get("".concat("http://3.144.153.218:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].inquiries:null;console.log(e,t);var n=e.data.roles?e.data.roles[0].students:null;f((function(e){return(0,a.Z)((0,a.Z)({},e),{},{permissions:t,studPermissions:n})}))})).catch((function(e){}));var t=document.getElementsByTagName("thead");t[0].style.backgroundColor=localStorage.getItem("tableColor"),t[1]&&(t[1].style.backgroundColor=localStorage.getItem("tableColor")),t[2]&&(t[2].style.backgroundColor=localStorage.getItem("tableColor")),Z("1")}),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.Ix,{}),b?(0,x.jsx)(c.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,x.jsxs)(c.eW,{className:"cardbg",style:{backgroundColor:localStorage.getItem("cardColor")},children:[(0,x.jsxs)(c.X2,{children:[(0,x.jsx)(c.JX,{children:(0,x.jsx)("h4",{children:(0,x.jsx)("strong",{children:"Inquiry List"})})}),(0,x.jsx)(c.JX,{children:q.canCreate?(0,x.jsx)(c.zx,{color:"primary",size:"sm",style:{float:"right",backgroundColor:localStorage.getItem("btColor")},onClick:function(){return P("/studentTabs/CreateInquiry/new")},children:"Add Inquiry"}):null})]}),(0,x.jsx)("div",{className:"height15"}),(0,x.jsx)(c.X2,{children:(0,x.jsx)(c.JX,{children:(0,x.jsxs)(c.Zb,{children:[(0,x.jsxs)(s.c8,{data:S,hover:!0,multiColumnSearch:!0,version:"4",search:!0,children:[(0,x.jsx)(s.bY,{width:"140",dataField:"firstName",dataFormat:function(e,t){return(0,x.jsx)("span",{children:t?"".concat(t.firstName," ").concat(t.lastName):null})},dataSort:!0,children:"Name"}),(0,x.jsx)(s.bY,{width:"160",dataField:"email",dataSort:!0,children:"Email"}),(0,x.jsx)(s.bY,{width:"110",dataField:"phone",dataSort:!0,children:"Phone"}),(0,x.jsx)(s.bY,{width:"110",dataField:"inquiryServices",dataFormat:function(e,t){return(0,x.jsx)("span",{children:t.inquiryServices?t.inquiryServices.name:null})},dataSort:!0,children:" Services"}),(0,x.jsx)(s.bY,{width:"110",dataField:"inquiryStatus",dataFormat:function(e,t){return(0,x.jsx)("span",{children:t.inquiryStatus?t.inquiryStatus.name:null})},dataSort:!0,children:" Status"}),(0,x.jsx)(s.bY,{width:"110",dataField:"inquiryType",dataFormat:function(e,t){return(0,x.jsx)("span",{children:t.inquiryType?t.inquiryType.name:null})},dataSort:!0,children:" Type"}),(0,x.jsx)(s.bY,{width:"120",dataField:"creationDate",dataFormat:function(e){return(0,x.jsx)(x.Fragment,{children:d()(e).format("MM/DD/YYYY")})},dataSort:!0,children:"Created Date"}),(0,x.jsx)(s.bY,{width:"100",dataField:"id",dataAlign:"center",dataFormat:function(e,t){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("span",{children:[q.canUpdate?(0,x.jsx)("i",{className:"fa fa-pencil",title:"Edit",id:"pencilspace","aria-hidden":"true",onClick:function(){return P("/studentTabs/CreateInquiry/".concat(t.id))},style:{cursor:"pointer",fontSize:"15px",color:"green"}}):null,q.canDelete?(0,x.jsx)("i",{className:"fa fa-trash-o",title:"Delete","aria-hidden":"true",id:"trashspace",onClick:function(){var e;e=t.id,g().fire({title:"Are you sure?",text:"Are you sure you want delete?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&l.Z.delete("inquiry/".concat(e)).then((function(e){Z("1"),g().fire({position:"center",icon:"success",title:"Record deleted successfully",showConfirmButton:!1,timer:1500})})).catch((function(e){g().fire(e.response.data.message,"Please try again ")}))}))},style:{cursor:"pointer",fontSize:"15px",padding:"0px 10px 0px 0px",color:"red"}}):null,w.canCreate&&t.inquiryStatus&&"Register"===t.inquiryStatus.name?(0,x.jsx)("i",{className:"fa fa-user",title:"Redirect To Add Student",id:"pencilspace","aria-hidden":"true",onClick:function(){return P("/studentTabs/students/create")},style:{cursor:"pointer",fontSize:"15px",color:"green"}}):null]})})},isKey:!0,children:"Action"})]}),(0,x.jsx)(c.iR,{children:S.length>=1?(0,x.jsx)(h.Z,{totalPages:j,currentPage:C,callbackfunc:function(e){Z(e)},defaultPageSize:"10"}):null})]})})})]})]})}}}]);
//# sourceMappingURL=8664.97b95818.chunk.js.map