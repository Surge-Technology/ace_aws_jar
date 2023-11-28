"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1129],{10003:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(29439),r=a(72791),l=a(70697),o=(a(87092),a(66293)),i=a(80184);function c(e){var t=(0,r.useState)({totalDocs:e.totalPages,currentPage:e.currentPage}),a=(0,n.Z)(t,2),c=a[0];a[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Z,{showTotal:function(e,t){return"".concat(t[0]," - ").concat(t[1]," of ").concat(e," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:e.defaultPageSize,defaultCurrent:c.currentPage,onShowSizeChange:function(e){console.log("onShowSizeChange",e)},onChange:function(t){e.callbackfunc(t)},total:c.totalDocs,locale:o.Z})})}},91129:function(e,t,a){a.r(t);var n=a(1413),r=a(29439),l=a(72791),o=a(57689),i=a(11087),c=a(84951),s=a(30212),d=(a(88293),a(77710)),u=a(10003),f=a(21830),h=a.n(f),m=a(72426),g=a.n(m),p=a(63263),x=a(80184);t.default=function(){var e=(0,l.useState)({allemailtemplatesList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}}),t=(0,r.Z)(e,2),a=t[0],f=t[1],m=a.allemailtemplatesList,j=a.totalPages,b=a.currentPage,C=a.loader,S=a.permissions,Z=(0,o.s0)(),w=function(e){f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!0})})),d.Z.get("email-template?page=".concat(e-1,"&size=10&sort=id,desc")).then((function(e){f((function(t){return(0,n.Z)((0,n.Z)({},t),{},{allemailtemplatesList:e.data.content,totalPages:e.data.totalElements,currentPage:e.data.pageNumber+1,loader:!1})})),401==e.status&&(h().fire({title:"error",icon:"error",text:"Session Expired"}),navigate("/login"))})).catch((function(e){h().fire(e.response.data.message,"Please try again "),f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!1,allemailtemplatesList:[]})}))}))};(0,l.useEffect)((function(){var e=localStorage.getItem("userid");p.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),p.Z.get("".concat("http://18.220.131.212:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].email_templates:null;f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{permissions:t})}))})).catch((function(e){}));var t=document.getElementsByTagName("thead");t[0].style.backgroundColor=localStorage.getItem("tableColor"),t[1]&&(t[1].style.backgroundColor=localStorage.getItem("tableColor")),w("1")}),[]);var P=function(e){h().fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed?d.Z.delete("email-template/".concat(e)).then((function(e){200==e.status&&(w("1"),h().fire("Record Deleted!","","success"))})).catch((function(e){h().fire(e.response,"Please try again ")})):h().fire("Your Data safe","")}))};return(0,x.jsxs)(x.Fragment,{children:[C?(0,x.jsx)(c.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,x.jsx)(c.Zb,{children:(0,x.jsxs)(c.eW,{className:"cardbg",style:{backgroundColor:localStorage.getItem("cardColor")},children:[(0,x.jsxs)(c.X2,{children:[(0,x.jsx)(c.JX,{children:(0,x.jsx)("h4",{children:(0,x.jsx)("strong",{children:"Email Templates "})})}),(0,x.jsx)(c.JX,{children:S.canCreate?(0,x.jsx)(c.zx,{color:"info",style:{float:"right",backgroundColor:localStorage.getItem("btColor")},size:"sm",onClick:function(){return Z("/settings/createemailtemplate/new")},children:"Add Email Template "}):null})]}),(0,x.jsx)(c.X2,{children:(0,x.jsx)(c.JX,{children:(0,x.jsxs)(c.Zb,{children:[(0,x.jsxs)(s.c8,{data:m,keyField:"sno",search:!0,striped:!0,hover:!0,multiColumnSearch:!0,version:"4",children:[(0,x.jsx)(s.bY,{width:"120",dataAlign:"left",dataField:"sno",dataFormat:function(e,t,a,n){return(0,x.jsx)(x.Fragment,{children:n+1})},children:"S No"}),(0,x.jsx)(s.bY,{width:"130",dataAlign:"left",dataField:"name",children:"Name"}),(0,x.jsx)(s.bY,{width:"150",dataAlign:"left",dataField:"subject",children:"Subject"}),(0,x.jsx)(s.bY,{width:"140",dataAlign:"left",dataField:"createdBy",dataSort:!0,children:"Email"}),(0,x.jsx)(s.bY,{width:"140",dataAlign:"left",dataField:"creationDate",dataFormat:function(e,t){return null!==e&&void 0!==e?g()(e).format("MM/DD/YYYY"):""},dataSort:!0,children:"Created Date"}),(0,x.jsx)(s.bY,{width:"130",dataAlign:"left",dataField:"id",dataFormat:function(e){return function(e){return(0,x.jsxs)("span",{children:[S.canUpdate?(0,x.jsx)(i.rU,{id:e,to:"/settings/createemailtemplate/".concat(e),children:(0,x.jsx)("i",{className:"fa fa-pencil",id:"pencilspace","aria-hidden":"true"})}):null,S.canDelete?(0,x.jsx)("i",{className:"fa fa-trash-o","aria-hidden":"true",id:"trashspace",onClick:function(){P(e)}}):null]})}(e)},children:"Action"})]}),(0,x.jsx)(c.iR,{children:m.length>=1?(0,x.jsx)(u.Z,{totalPages:j,currentPage:b,callbackfunc:function(e){w(e)},defaultPageSize:"10"}):null})]})})}),(0,x.jsx)(c.X2,{})]})})]})}},88293:function(){}}]);
//# sourceMappingURL=1129.9ebcb100.chunk.js.map