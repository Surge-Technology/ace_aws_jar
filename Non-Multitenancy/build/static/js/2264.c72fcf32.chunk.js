"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2264,5839,1657],{10003:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(29439),r=a(72791),s=a(70697),i=(a(87092),a(66293)),l=a(80184);function c(e){var t=(0,r.useState)({totalDocs:e.totalPages,currentPage:e.currentPage}),a=(0,n.Z)(t,2),c=a[0];a[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.Z,{showTotal:function(e,t){return"".concat(t[0]," - ").concat(t[1]," of ").concat(e," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:e.defaultPageSize,defaultCurrent:c.currentPage,onShowSizeChange:function(e){console.log("onShowSizeChange",e)},onChange:function(t){e.callbackfunc(t)},total:c.totalDocs,locale:i.Z})})}},31657:function(e,t,a){a.r(t);var n=a(1413),r=a(29439),s=a(72791),i=a(57689),l=a(84951),c=a(30212),o=a(63263),d=a(21830),u=a.n(d),h=a(72426),m=a.n(h),f=a(80184);t.default=function(){var e=(0,s.useState)({permissionsList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}}),t=(0,r.Z)(e,2),a=t[0],d=t[1],h=a.permissionsList,g=(a.totalPages,a.currentPage,a.loader),x=a.permissions,j=(0,i.s0)();(0,s.useEffect)((function(){var e=localStorage.getItem("userid");o.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),o.Z.get("".concat("http://localhost:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].permissions:null;d((function(e){return(0,n.Z)((0,n.Z)({},e),{},{permissions:t})}))})).catch((function(e){})),o.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),o.Z.get("".concat("http://localhost:8080/api/v1/","auth/roles")).then((function(e){d((function(t){return(0,n.Z)((0,n.Z)({},t),{},{permissionsList:e.data,loader:!1})}))})).catch((function(e){u().fire(e.response?e.response.data.message:null,"Please try again later")}))}),[]);return(0,f.jsxs)(f.Fragment,{children:[" ",g?(0,f.jsx)(l.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,f.jsxs)(l.eW,{className:"cardbg",children:[(0,f.jsxs)(l.X2,{children:[(0,f.jsx)(l.JX,{children:(0,f.jsx)("h4",{children:(0,f.jsx)("strong",{children:"Roles Permissions "})})}),(0,f.jsx)(l.JX,{children:x.canCreate?(0,f.jsx)(l.zx,{outline:!0,color:"info",size:"sm",className:"buttonfloat",onClick:function(){return j("/permissions/create/new")},children:"Add Role "}):null})]}),(0,f.jsx)(l.X2,{children:(0,f.jsx)(l.JX,{children:(0,f.jsxs)(l.Zb,{children:[(0,f.jsxs)(c.c8,{data:h,keyField:"sno",search:!0,striped:!0,hover:!0,multiColumnSearch:!0,version:"4",children:[(0,f.jsx)(c.bY,{width:"100",dataAlign:"left",dataField:"sno",dataFormat:function(e,t,a,n){return(0,f.jsx)(f.Fragment,{children:n+1})},dataSort:!0,children:"S No"}),(0,f.jsx)(c.bY,{width:"160",dataField:"roleName",dataSort:!0,children:"Role Name"}),(0,f.jsx)(c.bY,{width:"100",dataField:"creationDate",dataFormat:function(e){return(0,f.jsx)(f.Fragment,{children:m()(e).format("MM/DD/YYYY")})},children:"Creation Date"}),(0,f.jsx)(c.bY,{width:"160",dataField:"createdBy",dataSort:!0,children:"Created By"})]}),(0,f.jsx)(l.iR,{})]})})}),(0,f.jsx)(l.X2,{})]})]})}},25839:function(e,t,a){a.r(t);var n=a(1413),r=a(29439),s=a(72791),i=a(57689),l=a(11087),c=a(84951),o=a(30212),d=a(63263),u=a(10003),h=a(21830),m=a.n(h),f=a(80184);t.default=function(){var e=(0,s.useState)({allusersList:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}}),t=(0,r.Z)(e,2),a=t[0],h=t[1],g=a.allusersList,x=a.totalPages,j=a.currentPage,p=a.loader,Z=a.permissions,S=(0,i.s0)(),P=function(e){h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!0})})),d.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),d.Z.get("".concat("http://localhost:8080/api/v1/","users/pagination?page=").concat(e-1,"&size=10&sort=id,desc")).then((function(e){console.log("res",e),h((function(t){return(0,n.Z)((0,n.Z)({},t),{},{allusersList:e.data.content,totalPages:e.data.totalElements,currentPage:e.data.pageNumber+1,loader:!1})})),401==e.status&&(m().fire({title:"error",icon:"error",text:"Session Expired"}),navigate("/login"))})).catch((function(e){m().fire(e.response.data.message,"Please try again "),h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!1,studentList:[]})}))}))};(0,s.useEffect)((function(){var e=localStorage.getItem("userid");d.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),d.Z.get("".concat("http://localhost:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].users:null;h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{permissions:t})}))})).catch((function(e){})),P("1")}),[]);return(0,f.jsxs)(f.Fragment,{children:[p?(0,f.jsx)(c.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,f.jsxs)(c.eW,{className:"cardbg",children:[(0,f.jsxs)(c.X2,{children:[(0,f.jsx)(c.JX,{children:(0,f.jsx)("h4",{children:(0,f.jsx)("strong",{children:"Users List "})})}),(0,f.jsx)(c.JX,{children:Z.canCreate?(0,f.jsx)(c.zx,{outline:!0,color:"info",size:"sm",className:"buttonfloat",onClick:function(){return S("/staff/createstaff/new")},children:"Add User "}):null})]}),(0,f.jsx)(c.X2,{children:(0,f.jsx)(c.JX,{children:(0,f.jsxs)(c.Zb,{children:[(0,f.jsxs)(o.c8,{data:g,keyField:"sno",search:!0,striped:!0,hover:!0,multiColumnSearch:!0,version:"4",children:[(0,f.jsx)(o.bY,{width:"00",dataAlign:"left",dataField:"sno",dataFormat:function(e,t,a,n){return(0,f.jsx)(f.Fragment,{children:n+1})},dataSort:!0,children:"S No"}),(0,f.jsx)(o.bY,{width:"160",dataAlign:"left",dataField:"name",dataFormat:function(e,t){return(0,f.jsx)("span",{children:t?"".concat(t.firstName," ").concat(t.lastName):null})},children:"Name"}),(0,f.jsx)(o.bY,{width:"160",dataAlign:"left",dataField:"email",dataSort:!0,children:"Email"}),(0,f.jsx)(o.bY,{width:"100",dataAlign:"left",dataField:"phone",children:"Phone"}),(0,f.jsx)(o.bY,{width:"100",dataAlign:"left",dataField:"user",dataSort:!0,dataFormat:function(e,t){return(0,f.jsx)(f.Fragment,{children:t.roles?t.roles[0].roleName:null})},children:"User Type"}),(0,f.jsx)(o.bY,{width:"100",dataAlign:"left",dataField:"employment",dataSort:!0,dataFormat:function(e,t){return(0,f.jsx)(f.Fragment,{children:t.employmentType?t.employmentType.name:null})},children:"Employment Type"}),(0,f.jsx)(o.bY,{width:"80",dataAlign:"left",dataField:"pin",dataSort:!0,children:"Pin"}),(0,f.jsx)(o.bY,{width:"80",dataAlign:"left",dataField:"id",dataFormat:function(e){return function(e){return(0,f.jsx)("span",{children:Z.canUpdate?(0,f.jsx)(l.rU,{id:e,to:"/staff/createstaff/".concat(e),children:(0,f.jsx)("i",{className:"fa fa-pencil",id:"pencilspace","aria-hidden":"true"})}):null})}(e)},children:"Action"})]}),(0,f.jsx)(c.iR,{children:g.length>=1?(0,f.jsx)(u.Z,{totalPages:x,currentPage:j,callbackfunc:function(e){P(e)},defaultPageSize:"10"}):null})]})})}),(0,f.jsx)(c.X2,{})]})]})}},12264:function(e,t,a){a.r(t);var n=a(1413),r=a(29439),s=a(72791),i=a(84951),l=a(81694),c=a.n(l),o=a(31657),d=a(25839),u=a(57689),h=a(63263),m=a(80184),f={usersPermissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0},permPermissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}};t.default=function(){var e=(0,s.useState)("1"),t=(0,r.Z)(e,2),a=t[0],l=t[1],g=(0,s.useState)(f),x=(0,r.Z)(g,2),j=x[0],p=x[1],Z=j.usersPermissions,S=j.permPermissions,P=(0,u.UO)(),b=function(e){a!==e&&l(e)};return(0,s.useEffect)((function(){b(P.id);var e=localStorage.getItem("userid");h.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),h.Z.get("".concat("http://localhost:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].users:null,a=e.data.roles?e.data.roles[0].permissions:null;p((function(e){return(0,n.Z)((0,n.Z)({},e),{},{usersPermissions:t,permPermissions:a})}))})).catch((function(e){}))}),[]),(0,m.jsx)("div",{children:(0,m.jsxs)(i.Zb,{children:[(0,m.jsx)(i.eW,{className:"cardbg",children:(0,m.jsxs)(i.JL,{tabs:!0,children:[S.canView?(0,m.jsx)(i.LY,{children:(0,m.jsx)(i.OL,{className:c()({active:"1"===a}),onClick:function(){b("1")},children:(0,m.jsx)("h5",{children:(0,m.jsx)("strong",{children:"Permissions "})})})}):null,Z.canView?(0,m.jsx)(i.LY,{children:(0,m.jsx)(i.OL,{className:c()({active:"2"===a}),onClick:function(){b("2")},children:(0,m.jsx)("h5",{children:(0,m.jsx)("strong",{children:"Users "})})})}):null]})}),(0,m.jsxs)(i.I5,{activeTab:a,children:[S.canView?(0,m.jsx)(i.Jm,{tabId:"1",children:(0,m.jsx)(i.X2,{children:(0,m.jsx)(i.JX,{sm:"12",children:(0,m.jsx)(o.default,{})})})}):null,Z.canView?(0,m.jsx)(i.Jm,{tabId:"2",children:(0,m.jsx)(i.X2,{children:(0,m.jsx)(i.JX,{sm:"12",children:(0,m.jsx)(d.default,{})})})}):null]})]})})}}}]);
//# sourceMappingURL=2264.c72fcf32.chunk.js.map