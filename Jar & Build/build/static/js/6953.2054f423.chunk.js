"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6953,8171,7775],{86953:function(e,t,a){a.r(t);var n=a(1413),s=a(29439),c=a(72791),r=a(84951),i=a(81694),l=a.n(i),o=a(7775),d=a(63263),u=a(78171),h=a(80184),m={studPermissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0},stafPermissions:{canCreate:!0,canView:!0,canUpdate:!0,canDelete:!0}};t.default=function(){var e=(0,c.useState)("1"),t=(0,s.Z)(e,2),a=t[0],i=t[1],f=(0,c.useState)(m),x=(0,s.Z)(f,2),j=x[0],p=x[1],g=j.studPermissions,b=j.stafPermissions,v=function(e){a!==e&&i(e)};return(0,c.useEffect)((function(){var e=localStorage.getItem("userid");d.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),d.Z.get("".concat("http://3.144.153.218:8080/api/v1/","auth/users/").concat(e)).then((function(e){var t=e.data.roles?e.data.roles[0].student_attendences:null,a=e.data.roles?e.data.roles[0].staff_attendence:null;p((function(e){return(0,n.Z)((0,n.Z)({},e),{},{studPermissions:t,stafPermissions:a})}))})).catch((function(e){}))}),[]),(0,h.jsx)("div",{children:(0,h.jsxs)(r.Zb,{children:[(0,h.jsx)(r.eW,{className:"cardbg",children:(0,h.jsxs)(r.JL,{tabs:!0,children:[b.canView?(0,h.jsx)(r.LY,{children:(0,h.jsx)(r.OL,{className:l()({active:"1"===a}),onClick:function(){v("1")},children:(0,h.jsx)("h5",{children:(0,h.jsx)("strong",{children:"Staff Attendance "})})})}):null,g.canView?(0,h.jsx)(r.LY,{children:(0,h.jsx)(r.OL,{className:l()({active:"2"===a}),onClick:function(){v("2")},children:(0,h.jsx)("h5",{children:(0,h.jsx)("strong",{children:" Student Attendance   "})})})}):null]})}),(0,h.jsxs)(r.I5,{activeTab:a,children:[b.canView?(0,h.jsx)(r.Jm,{tabId:"1",children:(0,h.jsx)(r.X2,{children:(0,h.jsx)(r.JX,{sm:"12",children:(0,h.jsx)(o.default,{})})})}):null,g.canView?(0,h.jsx)(r.Jm,{tabId:"2",children:(0,h.jsx)(r.X2,{children:(0,h.jsx)(r.JX,{sm:"12",children:(0,h.jsx)(u.default,{})})})}):null]})]})})}},7775:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(1413),s=a(29439),c=a(72791),r=a(84951),i=a(30212),l=a(18491),o=a(9085),d=(a(5462),a(63263)),u=a(72426),h=a.n(u),m=a(21830),f=a.n(m),x=a(59513),j=a.n(x),p=a(57689),g=a(22976),b=a(80184),v=function(){var e=(0,c.useState)({checkIn:new Date,checkOut:new Date}),t=(0,s.Z)(e,2),a=t[0],u=t[1],m=(0,c.useState)(new Date),x=(0,s.Z)(m,2),v=x[0],Z=x[1],S=(0,c.useState)({}),N=(0,s.Z)(S,2),w=N[0],k=N[1],D=(0,c.useState)(!1),X=(0,s.Z)(D,2),I=X[0],_=X[1],Y=(0,c.useState)(""),y=(0,s.Z)(Y,2),F=y[0],P=y[1],A=(0,c.useState)(""),C=(0,s.Z)(A,2),J=(C[0],C[1]),O=(0,c.useState)(""),z=(0,s.Z)(O,2),M=z[0],B=z[1],V=(0,c.useState)(""),H=(0,s.Z)(V,2),T=H[0],q=H[1],L=(0,c.useState)([]),R=(0,s.Z)(L,2),U=R[0],E=R[1],G=(0,c.useState)([]),W=(0,s.Z)(G,2),$=W[0],K=W[1],Q=(0,c.useState)(""),ee=(0,s.Z)(Q,2),te=ee[0],ae=ee[1];(0,p.s0)();(0,c.useEffect)((function(){se()}),[]);var ne={startDate:v,name:F,checkIn:a.checkIn,checkOut:a.checkOut,pin:M},se=function(e,t){""!==e&&(d.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),d.Z.get("".concat("http://3.144.153.218:8080/api/v1/","/auth/staff")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)})})),K(t)})).catch((function(e){401===e.status?f().fire("401 session expired..!","Please re-login"):f().fire(e.message)})))},ce=function(e){d.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),d.Z.get("".concat("http://3.144.153.218:8080/api/v1/","staff-api/user/").concat(e.value,"/staff-attendances")).then((function(e){console.log("setAttendenceId",e),200!==e.status&&201!==e.status||(q(e.data[0].id),E(e.data))})).catch((function(e){console.log(e.message)}))},re=function(e){d.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),d.Z.get("".concat("http://3.144.153.218:8080/api/v1/","staff-api/user/").concat(e.value,"/staff-attendance/").concat(h()(a.datee).format("YYYY-MM-DD"))).then((function(e){if(console.log("today date",e),""===e.data)_(!0);else{_(!1);var t=new Date,c=e.data.checkOut.split(":"),r=(0,s.Z)(c,2),i=r[0],l=r[1];t.setHours(+i),t.setMinutes(l),u((0,n.Z)((0,n.Z)({},a),{},{checkOut:t.toString()}))}})).catch((function(e){console.log(e),401===e.status&&f().fire("401 session expired..!","Please re-login")}))},ie=function(){_(!1),P(""),J(""),B(""),E([]),B(""),k({})},le=function(e,t){return null!==e&&void 0!==e?h()(e,["HH:mm"]).format("hh:mm a"):""};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Ix,{}),(0,b.jsx)(r.Zb,{children:(0,b.jsxs)(r.eW,{className:"cardbg",children:[(0,b.jsx)(r.Zb,{className:"attendencecard",children:(0,b.jsx)(l.J9,{enableReinitialize:"true",initialValues:ne,onSubmit:function(e){console.log(e);var t={date:h()(e.startDate).format("YYYY-MM-DD"),checkIn:h()(e.checkIn).format("HH:mm"),pin:e.pin},a={checkOut:h()(e.checkOut).format("HH:mm"),pin:e.pin};d.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),1==I?d.Z.post("".concat("http://3.144.153.218:8080/api/v1/","staff-api/user/").concat(te,"/staff-attendance"),t).then((function(e){console.log("post",e),201===e.status&&(f().fire("Good job!","Staff In time entered successfully","success"),ce(e.data),re(e.data),ie())})).catch((function(e){console.log(e),401===e.status?f().fire("401 session expired..!","Please re-login"):f().fire(e.response.data.message)})):d.Z.put("".concat("http://3.144.153.218:8080/api/v1/","staff-api/user/").concat(te,"/staff-attendance/").concat(T),a).then((function(e){console.log("update",e),200===e.status&&(f().fire("Good job!","Staff Out time entered successfully","success"),ie())})).catch((function(e){console.log(e.response),401===e.response.status?f().fire("401 session expired..!","Please re-login"):f().fire(e.response.data.message,"Please try again")}))},children:function(e){var t=e.values,a=e.handleChange,n=e.handleSubmit;e.errors,e.touched,e.handleBlur,e.isValid,e.dirty,e.setFieldValue;return(0,b.jsxs)(l.l0,{className:"add-edit-user-form",onSubmit:n,children:[(0,b.jsxs)(r.X2,{children:[(0,b.jsx)(r.JX,{md:5,children:(0,b.jsxs)(r.cw,{children:[(0,b.jsx)(r.__,{for:"search",children:"Search"}),(0,b.jsx)(g.ZP,{name:"staff",value:w||"Select",onChange:function(e){var t;k(t=e),P(t.label),ae(t.value),ce(t),re(t)},options:$})]})}),(0,b.jsx)(r.JX,{md:5,children:(0,b.jsxs)(r.cw,{children:[(0,b.jsx)(r.__,{for:"name",children:"Staff Name"}),(0,b.jsx)(r.II,{type:"text",name:"name",value:F,disabled:!0})]})}),(0,b.jsx)(r.JX,{md:2})]}),(0,b.jsxs)(r.X2,{children:[(0,b.jsx)(r.JX,{md:3,children:(0,b.jsxs)(r.cw,{children:[(0,b.jsx)(r.__,{for:"startDate",children:"Date"}),(0,b.jsx)(j(),{selected:v,readOnly:!0,className:"disable",onChange:function(e){return Z(e)},minDate:new Date})]})}),(0,b.jsx)(r.JX,{md:3,children:(0,b.jsxs)(r.cw,{children:[(0,b.jsx)(r.__,{for:"pin",children:"Pin"}),(0,b.jsx)(r.II,{type:"number",name:"pin",value:t.pin,onChange:a})]})}),(0,b.jsxs)(r.JX,{md:6,children:[1==I&&(0,b.jsxs)(r.X2,{children:[(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.JX,{md:2,children:(0,b.jsx)(r.zx,{className:"timeTop",type:"submit",children:"In"})})}),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.JX,{md:2,children:(0,b.jsx)(r.zx,{className:"timeTop",type:"submit",disabled:!0,children:"Out"})})})]}),0==I&&(0,b.jsxs)(r.X2,{children:[(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.JX,{md:2,children:(0,b.jsx)(r.zx,{className:"timeTop",type:"submit",disabled:!0,children:"In"})})}),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.JX,{md:2,children:(0,b.jsx)(r.zx,{className:"timeTop",type:"submit",children:"Out"})})})]})]})]})]})}})}),(0,b.jsx)("hr",{}),(0,b.jsx)(r.X2,{children:(0,b.jsx)(r.Zb,{children:(0,b.jsxs)(i.c8,{data:U,keyField:"id",multiColumnSearch:"true",children:[(0,b.jsx)(i.bY,{width:"5",dataField:"id",hidden:!0,children:"unique field"}),(0,b.jsx)(i.bY,{width:"150",dataField:"date",dataSort:!0,dataFormat:function(e,t){return null!==e&&void 0!==e?h()(e).format("MM/DD/YYYY"):""},children:"Date"}),(0,b.jsx)(i.bY,{width:"150",dataField:"checkIn",dataFormat:le,children:"Check-In"}),(0,b.jsx)(i.bY,{width:"150",dataField:"checkOut",dataFormat:le,children:"Check-Out"})]})})}),(0,b.jsx)(r.X2,{})]})})]})}},78171:function(e,t,a){a.r(t);var n=a(1413),s=a(29439),c=a(72791),r=a(57689),i=a(84951),l=a(30212),o=a(18491),d=a(24021),u=a(77710),h=a(9085),m=(a(5462),a(63263)),f=a(72426),x=a.n(f),j=a(22976),p=(a(99506),a(21830)),g=a.n(p),b=a(10303),v=a(80184);t.default=function(){var e=(0,c.useState)({startDate:new Date,master:null,program:null,class:null,loader:!1}),t=(0,s.Z)(e,2),a=t[0],f=t[1],p=(0,c.useState)([]),Z=(0,s.Z)(p,2),S=Z[0],N=Z[1],w=(0,c.useState)([]),k=(0,s.Z)(w,2),D=k[0],X=k[1],I=(0,c.useState)([]),_=(0,s.Z)(I,2),Y=_[0],y=_[1],F=(0,c.useState)(""),P=(0,s.Z)(F,2),A=(P[0],P[1]),C=(0,c.useState)(""),J=(0,s.Z)(C,2),O=J[0],z=J[1],M=(0,c.useState)([]),B=(0,s.Z)(M,2),V=B[0],H=B[1],T=(0,c.useState)([]),q=(0,s.Z)(T,2),L=q[0],R=q[1],U=(0,c.useState)(!1),E=(0,s.Z)(U,2),G=(E[0],E[1]),W=(0,c.useState)(!1),$=(0,s.Z)(W,2),K=($[0],$[1]),Q=(0,r.s0)();(0,c.useEffect)((function(){m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.get("".concat("http://3.144.153.218:8080/api/v1/","api/program-names")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),N(t)})).catch((function(e){401===e.response.status?g().fire("401 session expired..!","Please re-login"):g().fire("Oops, something went wrong. Please try again later")}))}),[]);var ee={startDate:a.startDate,master:a.master,class:a.class,program:a.program},te=function(e){u.Z.get("user/".concat(e,"/batch")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),y(t),A("")})).catch((function(e){g().fire(e.response.data.message,"Please try again later")}))},ae=function(e){a.loader=!0,f((0,n.Z)({},a)),u.Z.get("batch/".concat(e,"/student")).then((function(e){a.loader=!1,f((0,n.Z)({},a)),z(e.data[0].batch.startTime),A("".concat(x()(e.data[0].batch.startTime,["HH:mm"]).format("hh:mm a")," - ").concat(x()(e.data[0].batch.endTime,["HH:mm"]).format("hh:mm a"))),H(e.data)})).catch((function(e){g().fire(e.response.data.message,"Please try again later"),a.loader=!1,f((0,n.Z)({},a))}))},ne={mode:"checkbox",showOnlySelected:!0,onSelect:function(e,t,a,n){G(t);var s=L;if(!0===t){s.push(e);var c=[];s.map((function(e,t){c.push({id:e.id,firstName:e.firstName,lastName:e.lastName,dob:e.dob,gender:e.gender,photo:e.photo,phone:e.phone,email:e.email,studentAttendance:e.studentAttendance})})),R(c)}else s.map((function(t,a){e.id==t.id&&s.splice(a,1)}))},onSelectAll:function(e,t,a){if(K(e),e){var n=[];t.map((function(e,t){n.push({id:e.id,firstName:e.firstName,lastName:e.lastName,dob:e.dob,gender:e.gender,photo:e.photo,phone:e.phone,email:e.email,studentAttendance:e.studentAttendance})})),R(n)}else R([])}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h.Ix,{}),a.loader?(0,v.jsx)(i.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,v.jsx)(i.Zb,{children:(0,v.jsxs)(i.eW,{className:"cardbg",children:[(0,v.jsx)("h4",{children:(0,v.jsx)("strong",{children:"Attendence"})}),(0,v.jsx)(i.Zb,{className:"attendencecard",children:(0,v.jsx)(o.J9,{enableReinitialize:"true",initialValues:ee,validationSchema:function(){return d.object().shape({master:d.object().required("Master is Required"),class:d.object().required("Class is Required")})},onSubmit:function(e){var t={studentAttendanceDate:e.startDate?x()(e.startDate).format("YYYY-MM-DD"):e.startDate,studentAttendanceTime:O,student:L};m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.post("".concat("http://3.144.153.218:8080/api/v1/api","/user/").concat(e.master.value,"/batch/").concat(e.class.value,"/studentAttendance"),t).then((function(e){201===e.status&&(h.Am.success("Attendence done successfully",{theme:"colored"}),setTimeout((function(){f({startDate:new Date,master:{},program:{},class:{},loader:!1}),H([]),R([]),X([]),y([]),Q("/attendence/createstaffattendence/new")}),1e3))})).catch((function(e){401===e.response.status?g().fire("401 session expired..!","Please re-login"):g().fire(e.response.data.message,"Please try again later")}))},children:function(e){var t=e.values,s=(e.handleChange,e.handleSubmit),c=e.errors,r=e.touched,l=(e.handleBlur,e.isValid,e.dirty,e.setFieldValue);return(0,v.jsx)(o.l0,{className:"add-edit-user-form",onSubmit:s,children:(0,v.jsxs)(i.X2,{children:[(0,v.jsx)(i.JX,{md:3,children:(0,v.jsxs)(i.cw,{children:[(0,v.jsx)(i.__,{for:"program",children:"Program"}),console.log("values",t),(0,v.jsx)(j.ZP,{name:"program",value:t.program,options:S,onChange:function(e){var t;l("program",e),t=e,u.Z.get("program-names/".concat(t.value,"/users")).then((function(e){if(200===e.status){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)})})),f((0,n.Z)({},a)),X(t),y([]),H([]),G(!1),K(!1)}})).catch((function(e){})),l("master",{}),l("class",{})},invalid:r.program&&!!c.program}),(0,v.jsx)(o.Bc,{name:"program",component:"div",className:"errmsg"})]})}),(0,v.jsx)(i.JX,{md:3,children:(0,v.jsxs)(i.cw,{children:[(0,v.jsx)(i.__,{for:"master",children:"Master"}),(0,v.jsx)(j.ZP,{name:"master",value:t.master,options:D,onChange:function(e){l("master",e),te(e.value),l("class",{})},invalid:r.master&&!!c.master}),(0,v.jsx)(o.Bc,{name:"master",component:"div",className:"errmsg"})]})}),(0,v.jsx)(i.JX,{md:3,children:(0,v.jsxs)(i.cw,{children:[(0,v.jsx)(i.__,{for:"class",children:"Class"}),(0,v.jsx)(j.ZP,{name:"class",value:t.class,options:Y,onChange:function(e){l("class",e),ae(e.value)},invalid:r.class&&!!c.class}),(0,v.jsx)(o.Bc,{name:"class",component:"div",className:"errmsg"})]})}),(0,v.jsx)(i.JX,{md:2,children:(0,v.jsx)(i.zx,{className:"markasbutton",type:"submit",disabled:L.length<=0,children:"Mark as Attend"})})]})})}})}),(0,v.jsx)("hr",{}),(0,v.jsx)(i.X2,{children:(0,v.jsx)(i.JX,{children:(0,v.jsx)("h4",{children:(0,v.jsx)("strong",{children:"Mark as Attendence "})})})}),(0,v.jsx)(i.X2,{className:"rowborder",children:(0,v.jsx)(i.Zb,{className:"marginStyleForTablee",children:(0,v.jsxs)(l.c8,{data:V,selectRow:ne,keyField:"id",search:!0,tableContainerClass:"studenttablescro",multiColumnSearch:"true",children:[(0,v.jsx)(l.bY,{width:"5",dataField:"id",hidden:!0,children:"unique field"}),(0,v.jsx)(l.bY,{width:"120",dataField:"photo",dataFormat:function(e){var t=null===e?b:"".concat("http://3.144.153.218:8080/api/v1/","auth/student/image/").concat(e);return(0,v.jsx)(i.pU,{children:(0,v.jsx)(i.pU,{src:t,id:"mediastyle"})})},children:"Student"}),(0,v.jsx)(l.bY,{width:"150",dataField:"firstName",dataFormat:function(e,t){return(0,v.jsx)("span",{children:t?"".concat(t.firstName," ").concat(t.lastName):null})},children:"Name"}),(0,v.jsx)(l.bY,{width:"120",dataField:"gender",children:"Gender"}),(0,v.jsx)(l.bY,{width:"120",dataField:"phone",children:"Phone"})]})})}),(0,v.jsx)(i.X2,{})]})})]})}},99506:function(){}}]);
//# sourceMappingURL=6953.2054f423.chunk.js.map