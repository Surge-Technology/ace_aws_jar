"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1657],{31657:function(e,t,a){a.r(t);var r=a(1413),n=a(29439),s=a(72791),i=a(57689),o=a(84951),c=a(30212),l=a(63263),d=a(21830),u=a.n(d),h=a(72426),m=a.n(h),f=a(80184);t.default=function(){var e=(0,s.useState)({permissionsList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}}),t=(0,n.Z)(e,2),a=t[0],d=t[1],h=a.permissionsList,j=(a.totalPages,a.currentPage,a.loader),p=a.permissions,x=(0,i.s0)();(0,s.useEffect)((function(){var e=localStorage.getItem("userid");l.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),l.Z.get("".concat("http://3.139.62.119:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].permissions:null;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},{permissions:t})}))})).catch((function(e){})),l.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),l.Z.get("".concat("http://3.139.62.119:8080/api/v1/","auth/roles")).then((function(e){d((function(t){return(0,r.Z)((0,r.Z)({},t),{},{permissionsList:e.data,loader:!1})}))})).catch((function(e){u().fire(e.response?e.response.data.message:null,"Please try again later")}))}),[]);return(0,f.jsxs)(f.Fragment,{children:[" ",j?(0,f.jsx)(o.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,f.jsxs)(o.eW,{className:"cardbg",children:[(0,f.jsxs)(o.X2,{children:[(0,f.jsx)(o.JX,{children:(0,f.jsx)("h4",{children:(0,f.jsx)("strong",{children:"Roles Permissions "})})}),(0,f.jsx)(o.JX,{children:p.canCreate?(0,f.jsx)(o.zx,{outline:!0,color:"info",size:"sm",className:"buttonfloat",onClick:function(){return x("/permissions/create/new")},children:"Add Role "}):null})]}),(0,f.jsx)(o.X2,{children:(0,f.jsx)(o.JX,{children:(0,f.jsxs)(o.Zb,{children:[(0,f.jsxs)(c.c8,{data:h,keyField:"sno",search:!0,striped:!0,hover:!0,multiColumnSearch:!0,version:"4",children:[(0,f.jsx)(c.bY,{width:"100",dataAlign:"left",dataField:"sno",dataFormat:function(e,t,a,r){return(0,f.jsx)(f.Fragment,{children:r+1})},dataSort:!0,children:"S No"}),(0,f.jsx)(c.bY,{width:"160",dataField:"roleName",dataSort:!0,children:"Role Name"}),(0,f.jsx)(c.bY,{width:"100",dataField:"creationDate",dataFormat:function(e){return(0,f.jsx)(f.Fragment,{children:m()(e).format("MM/DD/YYYY")})},children:"Creation Date"}),(0,f.jsx)(c.bY,{width:"160",dataField:"createdBy",dataSort:!0,children:"Created By"})]}),(0,f.jsx)(o.iR,{})]})})}),(0,f.jsx)(o.X2,{})]})]})}}}]);
//# sourceMappingURL=1657.f02545e1.chunk.js.map