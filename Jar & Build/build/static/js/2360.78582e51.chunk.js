"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2360],{2360:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=n(1413),r=n(29439),i=n(72791),d=n(84951),s=n(30212),c=(n(77710),n(21830)),o=n.n(c),l=n(59513),u=n.n(l),h=n(72426),m=n.n(h),x=n(57689),f=n(63263),j=n(80184),y={inquiryList:[],totalPages:"",currentPage:"",loader:!1,startDate:"",endDate:""};function p(){var t=(0,i.useState)(y),e=(0,r.Z)(t,2),n=e[0],c=e[1],l=n.inquiryList,h=(n.totalPages,n.currentPage,n.loader),p=n.startDate,D=n.endDate,S=(0,x.s0)(),Y=function(t,e){"startDate"===t&&c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{startDate:e})})),"endDate"===t&&c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{endDate:e})}))};return(0,j.jsxs)(j.Fragment,{children:[h?(0,j.jsx)(d.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,j.jsx)(d.Zb,{children:(0,j.jsxs)(d.eW,{className:"cardbg",children:[(0,j.jsx)("h4",{children:(0,j.jsx)("b",{children:"Inquiry Details List"})}),(0,j.jsx)("div",{className:"height15"}),(0,j.jsxs)(d.X2,{children:[(0,j.jsxs)(d.JX,{md:3,children:[(0,j.jsx)(d.__,{children:"Start Date"}),(0,j.jsx)(u(),{name:"startDate",selected:p,onChange:function(t){return Y("startDate",t)},placeholderText:"mm/dd/yyyy"})]}),(0,j.jsxs)(d.JX,{md:3,children:[(0,j.jsx)(d.__,{children:"End Date"}),(0,j.jsx)(u(),{selected:D,onChange:function(t){return Y("endDate",t)},placeholderText:"mm/dd/yyyy",minDate:p})]}),(0,j.jsx)(d.JX,{md:2,style:{marginTop:"30px"},children:(0,j.jsx)(d.zx,{type:"button",onClick:function(){!function(){if(""!==p&&""!==D){c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!0})}));var t=m()(p).format("YYYY-MM-DD"),e=m()(D).format("YYYY-MM-DD");f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.get("".concat("http://localhost:8080/api/v1/api","/dashboard/inquiry?startDate=").concat(t,"&endDate=").concat(e)).then((function(t){console.log("res",t),200===t.status||201===t.status?c((function(e){return(0,a.Z)((0,a.Z)({},e),{},{inquiryList:t.data.inquiryDtos,loader:!1})})):c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!1})}))})).catch((function(t){c((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!1})}))}))}else o().fire({position:"center",icon:"warning",title:"Please Enter Some Date",showConfirmButton:!1,timer:1500})}()},children:"Search"})}),(0,j.jsx)(d.JX,{md:2,style:{marginTop:"30px"},children:(0,j.jsx)(d.zx,{type:"button",onClick:function(){return S("/dashboard")},children:"Back"})})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(d.X2,{children:(0,j.jsx)(d.JX,{children:(0,j.jsxs)(s.c8,{data:l,hover:!0,multiColumnSearch:!0,version:"4",search:!0,children:[(0,j.jsx)(s.bY,{width:"140",dataField:"firstName",dataFormat:function(t,e){return(0,j.jsx)("span",{children:e?"".concat(e.firstName," ").concat(e.lastName):null})},dataSort:!0,isKey:!0,children:"Name"}),(0,j.jsx)(s.bY,{width:"160",dataField:"email",dataSort:!0,children:"Email"}),(0,j.jsx)(s.bY,{width:"110",dataField:"phone",dataSort:!0,children:"Phone"}),(0,j.jsx)(s.bY,{width:"110",dataField:"inquiryServices",dataFormat:function(t,e){return(0,j.jsx)("span",{children:e.inquiryServices?e.inquiryServices.name:null})},dataSort:!0,children:" Services"}),(0,j.jsx)(s.bY,{width:"110",dataField:"inquiryStatus",dataFormat:function(t,e){return(0,j.jsx)("span",{children:e.inquiryStatus?e.inquiryStatus.name:null})},dataSort:!0,children:" Status"}),(0,j.jsx)(s.bY,{width:"110",dataField:"inquiryType",dataFormat:function(t,e){return(0,j.jsx)("span",{children:e.inquiryType?e.inquiryType.name:null})},dataSort:!0,children:" Type"}),(0,j.jsx)(s.bY,{width:"120",dataField:"creationDate",dataFormat:function(t){return(0,j.jsx)(j.Fragment,{children:m()(t).format("MM/DD/YYYY")})},dataSort:!0,children:"Created Date"})]})})})]})})]})}}}]);
//# sourceMappingURL=2360.78582e51.chunk.js.map