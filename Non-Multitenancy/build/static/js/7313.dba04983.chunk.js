"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7313],{97313:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(1413),r=a(29439),d=a(72791),c=a(84951),i=a(30212),o=a(77710),s=a(21830),l=a.n(s),u=a(59513),h=a.n(u),f=a(72426),m=a.n(f),x=a(57689),D=a(80184),j={StudentAttandList:[],totalPages:"",currentPage:"",loader:!1,startDate:"",endDate:""};function g(){var t=(0,d.useState)(j),e=(0,r.Z)(t,2),a=e[0],s=e[1],u=a.StudentAttandList,f=(a.totalPages,a.currentPage,a.loader),g=a.startDate,Y=a.endDate,p=(0,x.s0)();(0,d.useEffect)((function(){var t=new Date,e=m()(t).format("YYYY-MM-DD"),a=m()(t).format("YYYY-MM-DD");o.Z.get("/dashboard/all-contract?".concat(e,"&endDate=").concat(a)).then((function(e){console.log("res",e),s((function(a){return(0,n.Z)((0,n.Z)({},a),{},{startDate:t,endDate:t,StudentAttandList:e.data.contractDtos,loader:!1})}))})).catch((function(t){l().fire(t.response.data.message,"Please try again "),s((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loader:!1})}))}))}),[]);var S=function(t,e){"startDate"===t&&s((function(t){return(0,n.Z)((0,n.Z)({},t),{},{startDate:e})})),"endDate"===t&&s((function(t){return(0,n.Z)((0,n.Z)({},t),{},{endDate:e})}))};return(0,D.jsxs)(D.Fragment,{children:[f?(0,D.jsx)(c.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,D.jsx)(c.Zb,{children:(0,D.jsxs)(c.eW,{className:"cardbg",children:[(0,D.jsx)("h4",{children:(0,D.jsx)("b",{children:"Contract Details List"})}),(0,D.jsx)("div",{className:"height15"}),(0,D.jsxs)(c.X2,{children:[(0,D.jsxs)(c.JX,{md:3,children:[(0,D.jsx)(c.__,{children:"Start Date"}),(0,D.jsx)(h(),{name:"startDate",selected:g,onChange:function(t){return S("startDate",t)},placeholderText:"mm/dd/yyyy"})]}),(0,D.jsxs)(c.JX,{md:3,children:[(0,D.jsx)(c.__,{children:"End Date"}),(0,D.jsx)(h(),{selected:Y,onChange:function(t){return S("endDate",t)},placeholderText:"mm/dd/yyyy",minDate:g})]}),(0,D.jsx)(c.JX,{md:2,style:{marginTop:"30px"},children:(0,D.jsx)(c.zx,{type:"button",onClick:function(){!function(){if(""!==g&&""!==Y){s((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loader:!0})}));var t=m()(g).format("YYYY-MM-DD"),e=m()(Y).format("YYYY-MM-DD");o.Z.get("/dashboard/all-contract?".concat(t,"&endDate=").concat(e)).then((function(t){s((function(e){return(0,n.Z)((0,n.Z)({},e),{},{StudentAttandList:t.data.contractDtos,loader:!1})}))})).catch((function(t){l().fire(t.response.data.message,"Please try again "),s((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loader:!1})}))}))}else l().fire({position:"center",icon:"warning",title:"Please Enter Some Date",showConfirmButton:!1,timer:1500})}()},children:"Search"})}),(0,D.jsx)(c.JX,{md:2,style:{marginTop:"30px"},children:(0,D.jsx)(c.zx,{type:"button",onClick:function(){return p("/dashboard")},children:"Back"})})]}),(0,D.jsx)("hr",{}),(0,D.jsx)(c.X2,{children:(0,D.jsx)(c.JX,{children:(0,D.jsxs)(i.c8,{data:u,hover:!0,multiColumnSearch:!0,version:"4",search:!0,children:[(0,D.jsx)(i.bY,{width:"140",dataField:"name",dataSort:!0,isKey:!0,dataFormat:function(t,e){return(0,D.jsx)(D.Fragment,{children:e.contractPromotion.name})},children:"Name"}),(0,D.jsx)(i.bY,{width:"120",dataField:"fee",dataFormat:function(t,e){return(0,D.jsx)(D.Fragment,{children:e.pricing.fee?e.pricing.fee:null})},dataSort:!0,children:"fee"}),(0,D.jsx)(i.bY,{width:"120",dataField:"totalFee",dataFormat:function(t,e){return(0,D.jsx)(D.Fragment,{children:e.pricing.total?e.pricing.total:null})},dataSort:!0,children:"Total Fee"}),(0,D.jsx)(i.bY,{width:"100",dataField:"contractStatus",dataSort:!0,children:"Contract Status"}),(0,D.jsx)(i.bY,{width:"100",dataField:"startDate",dataSort:!0,children:"Start Date"}),(0,D.jsx)(i.bY,{width:"100",dataField:"endDate",dataSort:!0,children:"End Date"}),(0,D.jsx)(i.bY,{width:"100",dataField:"creationDate",dataFormat:function(t,e){return(0,D.jsx)(D.Fragment,{children:t?m()(t).format("YYYY-MM-DD"):null})},dataSort:!0,children:"Created Date"})]})})})]})})]})}}}]);
//# sourceMappingURL=7313.dba04983.chunk.js.map