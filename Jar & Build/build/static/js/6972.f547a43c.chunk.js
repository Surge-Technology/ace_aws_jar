"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6972],{10003:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(29439),r=a(72791),o=a(70697),i=(a(87092),a(66293)),c=a(80184);function l(t){var e=(0,r.useState)({totalDocs:t.totalPages,currentPage:t.currentPage}),a=(0,n.Z)(e,2),l=a[0];a[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.Z,{showTotal:function(t,e){return"".concat(e[0]," - ").concat(e[1]," of ").concat(t," items")},showQuickJumper:!0,pageSizeOptions:["10","20","50","100"],showSizeChanger:!0,defaultPageSize:t.defaultPageSize,defaultCurrent:l.currentPage,onShowSizeChange:function(t){console.log("onShowSizeChange",t)},onChange:function(e){t.callbackfunc(e)},total:l.totalDocs,locale:i.Z})})}},56972:function(t,e,a){a.r(e);var n=a(1413),r=a(29439),o=a(72791),i=a(57689),c=a(84951),l=a(30212),s=a(77710),d=a(10003),u=a(21830),h=a.n(u),f=a(72426),g=a.n(f),m=a(63263),x=a(80184);e.default=function(){var t=(0,o.useState)({allbatchs:[],totalPages:"",currentPage:"",loader:!1,permissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}}),e=(0,r.Z)(t,2),a=e[0],u=e[1],f=a.allbatchs,j=a.totalPages,p=a.currentPage,b=a.loader,S=a.permissions,Z=(0,i.s0)(),w=function(t){u((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loader:!0})})),s.Z.get("batches?page=".concat(t-1,"&size=10&sort=id,desc")).then((function(t){if(u((function(e){return(0,n.Z)((0,n.Z)({},e),{},{allbatchs:t.data.content,totalPages:t.data.totalElements,currentPage:t.data.pageNumber+1,loader:!1})})),401==t.status){h().fire({title:"error",icon:"error",text:"Session Expired"});var e=localStorage.getItem("accode"),a=e?"/login/".concat(e):"/login";navigate(a)}})).catch((function(t){h().fire(t.response.data.message,"Please try again "),u((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loader:!1,allbatchs:[]})}))}))};(0,o.useEffect)((function(){var t=localStorage.getItem("userid");m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.get("".concat("http://3.139.62.119:8080/api/v1/","auth/users/").concat(t)).then((function(t){var e=t.data.roles?t.data.roles[0].batches:null;u((function(t){return(0,n.Z)((0,n.Z)({},t),{},{permissions:e})}))})).catch((function(t){})),w("1")}),[]);var F=function(t){h().fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed?(m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.delete("".concat("http://3.139.62.119:8080/api/v1/api","/batches/").concat(t)).then((function(t){204==t.status&&(w("1"),h().fire("Record Deleted!","","success"))})).catch((function(t){h().fire(t.response.data.message,"Please try again ")}))):h().fire("Your Data safe","")}))},P=function(t,e){return null!==t&&void 0!==t?g()(t).format("MM/DD/YYYY"):""},v=function(t,e){return null!==t&&void 0!==t?g()(t,["HH:mm"]).format("hh:mm a"):""};return(0,x.jsxs)(x.Fragment,{children:[b?(0,x.jsx)(c.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,x.jsx)(c.Zb,{children:(0,x.jsxs)(c.eW,{className:"cardbg",children:[(0,x.jsxs)(c.X2,{children:[(0,x.jsx)(c.JX,{children:(0,x.jsx)("h4",{children:(0,x.jsx)("strong",{children:"Batches"})})}),(0,x.jsx)(c.JX,{children:S.canCreate?(0,x.jsx)(c.zx,{outline:!0,color:"info",size:"sm",className:"buttonfloat",onClick:function(){return Z("/settings/createbatch/new")},children:"Add Batch"}):null})]}),(0,x.jsx)(c.X2,{children:(0,x.jsx)(c.JX,{children:(0,x.jsxs)(c.Zb,{children:[(0,x.jsxs)(l.c8,{data:f,keyField:"sno",search:!0,striped:!0,hover:!0,multiColumnSearch:!0,version:"4",children:[(0,x.jsx)(l.bY,{width:"120",dataAlign:"left",dataField:"sno",dataFormat:function(t,e,a,n){return(0,x.jsx)(x.Fragment,{children:n+1})},dataSort:!0,children:"S No"}),(0,x.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"name",dataSort:!0,children:"Name"}),(0,x.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"startDate",dataFormat:P,dataSort:!0,children:"Start Date"}),(0,x.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"endDate",dataFormat:P,dataSort:!0,children:"End Date"}),(0,x.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"startTime",dataSort:!0,dataFormat:v,children:"Start Time"}),(0,x.jsx)(l.bY,{width:"130",dataAlign:"left",dataField:"endTime",dataSort:!0,dataFormat:v,children:"End Time"}),(0,x.jsx)(l.bY,{width:"120",dataAlign:"left",dataField:"id",dataFormat:function(t){return function(t){return(0,x.jsx)("span",{children:S.canDelete?(0,x.jsx)("i",{className:"fa fa-trash-o","aria-hidden":"true",id:"trashspace",onClick:function(){F(t)}}):null})}(t)},children:"Action"})]}),(0,x.jsx)(c.iR,{children:f.length>=1?(0,x.jsx)(d.Z,{totalPages:j,currentPage:p,callbackfunc:function(t){w(t)},defaultPageSize:"10"}):null})]})})})]})})]})}}}]);
//# sourceMappingURL=6972.f547a43c.chunk.js.map