"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2467],{52467:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(1413),s=n(29439),i=n(72791),c=n(57689),r=n(84951),d=n(30212),u=n(77710),o=(n(57043),n(63263)),l=n(9085),m=n(21830),h=n.n(m),f=n(80184),p={studentList:"",selectedStudents:[],name:"",loader:!1};function g(){var e=(0,i.useState)(p),t=(0,s.Z)(e,2),n=t[0],m=t[1],g=n.studentList,x=n.selectedStudents,S=n.name,j=n.loader,v=(0,c.s0)(),N=(0,c.UO)(),Z={mode:"checkbox",showOnlySelected:!0,onSelect:function(e,t,n,s){if(t){var i=x;i.push(e),m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selectedStudents:i})}))}else{var c=[];x.map((function(t,n){t.id!==e.id&&c.push(t)})),setTimeout((function(){m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{selectedStudents:c})}))}),500)}},onSelectAll:function(e,t,n){m(e?function(e){return(0,a.Z)((0,a.Z)({},e),{},{selectedStudents:t})}:function(e){return(0,a.Z)((0,a.Z)({},e),{},{selectedStudents:[]})})}};(0,i.useEffect)((function(){u.Z.get("event/".concat(N.id,"/event-registration")).then((function(e){var t=[];e.data.map((function(e){e.guestStudent?t.push({id:e.id,guestStudent:{id:e.guestStudent.id,firstName:e.guestStudent.firstName,lastName:e.guestStudent.lastName,phone:e.guestStudent.phone,email:e.guestStudent.email},totalFee:e.totalFee}):t.push({id:e.id,student:{id:e.student.id,firstName:e.student.firstName,lastName:e.student.lastName,phone:e.student.phone,email:e.student.email},totalFee:e.totalFee})})),m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{studentList:t})}))})).catch((function(e){h().fire(e?e.response.data.message:null,"Please try again ")}))}),[]);var b=function(e){m((function(t){return(0,a.Z)((0,a.Z)({},t),{},{name:e.target.value})}))},y={showSelectedOnlyBtn:function(e,t){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(r.II,{name:"name",type:"text",value:S,placeholder:"Enter Group Name",onChange:b,invalid:""===S})})}};return(0,f.jsxs)(f.Fragment,{children:[j?(0,f.jsx)(r.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,f.jsx)(l.Ix,{}),(0,f.jsx)(r.Zb,{className:"cardm",children:(0,f.jsxs)(r.eW,{className:"cardbg",children:[(0,f.jsx)("h5",{children:(0,f.jsx)("strong",{children:"New Audience"})}),(0,f.jsxs)(r.Zb,{className:"cardbgw",children:[(0,f.jsxs)(r.eW,{children:[(0,f.jsx)(r.X2,{className:"rowborder1",children:(0,f.jsxs)(d.c8,{data:g,options:y,hover:!0,multiColumnSearch:!1,id:"stickyid",selectRow:Z,tableContainerClass:"my-custom-class1",version:"4",children:[(0,f.jsx)(d.bY,{width:"140",dataField:"firstName",dataSort:!0,dataFormat:function(e,t){return(0,f.jsx)("span",{children:void 0===t.student?"".concat(t.guestStudent.firstName," ").concat(t.guestStudent.lastName):"".concat(t.student.firstName," ").concat(t.student.lastName)})},children:"Student Name"}),(0,f.jsx)(d.bY,{width:"180",dataField:"email",dataSort:!0,dataFormat:function(e,t){return(0,f.jsx)("span",{children:void 0===t.student?"".concat(t.guestStudent.email):"".concat(t.student.email)})},children:"Email"}),(0,f.jsx)(d.bY,{width:"120",dataField:"phone",dataSort:!0,dataFormat:function(e,t){return(0,f.jsx)("span",{children:void 0===t.student?"".concat(t.guestStudent.phone):"".concat(t.student.phone)})},children:"Phone"}),(0,f.jsx)(d.bY,{width:"5",dataField:"id",dataSort:!0,hidden:!0,isKey:!0,children:"unique field"})]})}),(0,f.jsx)("div",{className:"height15"})]}),(0,f.jsxs)(r.iR,{className:"centerTextalign",children:[(0,f.jsx)(r.zx,{type:"button",color:"primary",className:"btnbg",size:"sm",onClick:function(){return v("/events/eventregister/".concat(N.id))},children:"Cancel"}),(0,f.jsx)(r.zx,{type:"button",color:"primary",size:"sm",onClick:function(){!function(){if(""!==S){m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loader:!0})}));var e={name:S,eventRegistration:x};o.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),o.Z.post("".concat("http://3.144.153.218:8080/api/v1/api","/primary-audience"),e).then((function(e){l.Am.success("Created successfully",{theme:"colored"}),m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loader:!1})})),setTimeout((function(){v("/events/createcommunication/".concat(N.id,"/").concat(S,"/").concat(e.data.id))}),1e3)})).catch((function(e){m((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loader:!1})})),h().fire(e.response.data.message,"Please try again ")}))}}()},children:"Save Audience"})]})]})]})})]})}},57043:function(){}}]);
//# sourceMappingURL=2467.c5790240.chunk.js.map