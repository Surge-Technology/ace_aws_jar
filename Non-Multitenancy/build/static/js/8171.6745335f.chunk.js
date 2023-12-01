"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8171],{78171:function(e,a,t){t.r(a);var s=t(1413),n=t(29439),r=t(72791),c=t(57689),i=t(84951),l=t(30212),o=t(18491),d=t(24021),m=t(77710),u=t(9085),h=(t(5462),t(63263)),p=t(72426),f=t.n(p),g=t(22976),x=(t(99506),t(21830)),j=t.n(x),b=t(10303),v=t(80184);a.default=function(){var e=(0,r.useState)({startDate:new Date,master:null,program:null,class:null,loader:!1}),a=(0,n.Z)(e,2),t=a[0],p=a[1],x=(0,r.useState)([]),Z=(0,n.Z)(x,2),N=Z[0],S=Z[1],w=(0,r.useState)([]),_=(0,n.Z)(w,2),A=_[0],y=_[1],D=(0,r.useState)([]),k=(0,n.Z)(D,2),C=k[0],F=k[1],P=(0,r.useState)(""),X=(0,n.Z)(P,2),Y=(X[0],X[1]),B=(0,r.useState)(""),J=(0,n.Z)(B,2),M=J[0],T=J[1],q=(0,r.useState)([]),z=(0,n.Z)(q,2),H=z[0],R=z[1],I=(0,r.useState)([]),V=(0,n.Z)(I,2),O=V[0],U=V[1],E=(0,r.useState)(!1),G=(0,n.Z)(E,2),L=(G[0],G[1]),W=(0,r.useState)(!1),$=(0,n.Z)(W,2),K=($[0],$[1]),Q=(0,c.s0)();(0,r.useEffect)((function(){h.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),h.Z.get("".concat("http://localhost:8080/api/v1/","api/program-names")).then((function(e){var a=[];e.data.map((function(e,t){a.push({value:e.id,label:e.name})})),S(a)})).catch((function(e){401===e.response.status?j().fire("401 session expired..!","Please re-login"):j().fire("Oops, something went wrong. Please try again later")}))}),[]);var ee={startDate:t.startDate,master:t.master,class:t.class,program:t.program},ae=function(e){m.Z.get("user/".concat(e,"/batch")).then((function(e){var a=[];e.data.map((function(e,t){a.push({value:e.id,label:e.name})})),F(a),Y("")})).catch((function(e){j().fire(e.response.data.message,"Please try again later")}))},te=function(e){t.loader=!0,p((0,s.Z)({},t)),m.Z.get("batch/".concat(e,"/student")).then((function(e){t.loader=!1,p((0,s.Z)({},t)),T(e.data[0].batch.startTime),Y("".concat(f()(e.data[0].batch.startTime,["HH:mm"]).format("hh:mm a")," - ").concat(f()(e.data[0].batch.endTime,["HH:mm"]).format("hh:mm a"))),R(e.data)})).catch((function(e){j().fire(e.response.data.message,"Please try again later"),t.loader=!1,p((0,s.Z)({},t))}))},se={mode:"checkbox",showOnlySelected:!0,onSelect:function(e,a,t,s){L(a);var n=O;if(!0===a){n.push(e);var r=[];n.map((function(e,a){r.push({id:e.id,firstName:e.firstName,lastName:e.lastName,dob:e.dob,gender:e.gender,photo:e.photo,phone:e.phone,email:e.email,studentAttendance:e.studentAttendance})})),U(r)}else n.map((function(a,t){e.id==a.id&&n.splice(t,1)}))},onSelectAll:function(e,a,t){if(K(e),e){var s=[];a.map((function(e,a){s.push({id:e.id,firstName:e.firstName,lastName:e.lastName,dob:e.dob,gender:e.gender,photo:e.photo,phone:e.phone,email:e.email,studentAttendance:e.studentAttendance})})),U(s)}else U([])}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Ix,{}),t.loader?(0,v.jsx)(i.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,v.jsx)(i.Zb,{children:(0,v.jsxs)(i.eW,{className:"cardbg",children:[(0,v.jsx)("h4",{children:(0,v.jsx)("strong",{children:"Attendence"})}),(0,v.jsx)(i.Zb,{className:"attendencecard",children:(0,v.jsx)(o.J9,{enableReinitialize:"true",initialValues:ee,validationSchema:function(){return d.object().shape({master:d.object().required("Master is Required"),class:d.object().required("Class is Required")})},onSubmit:function(e){var a={studentAttendanceDate:e.startDate?f()(e.startDate).format("YYYY-MM-DD"):e.startDate,studentAttendanceTime:M,student:O};h.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),h.Z.post("".concat("http://localhost:8080/api/v1/api","/user/").concat(e.master.value,"/batch/").concat(e.class.value,"/studentAttendance"),a).then((function(e){201===e.status&&(u.Am.success("Attendence done successfully",{theme:"colored"}),setTimeout((function(){p({startDate:new Date,master:{},program:{},class:{},loader:!1}),R([]),U([]),y([]),F([]),Q("/attendence/createstaffattendence/new")}),1e3))})).catch((function(e){401===e.response.status?j().fire("401 session expired..!","Please re-login"):j().fire(e.response.data.message,"Please try again later")}))},children:function(e){var a=e.values,n=(e.handleChange,e.handleSubmit),r=e.errors,c=e.touched,l=(e.handleBlur,e.isValid,e.dirty,e.setFieldValue);return(0,v.jsx)(o.l0,{className:"add-edit-user-form",onSubmit:n,children:(0,v.jsxs)(i.X2,{children:[(0,v.jsx)(i.JX,{md:3,children:(0,v.jsxs)(i.cw,{children:[(0,v.jsx)(i.__,{for:"program",children:"Program"}),console.log("values",a),(0,v.jsx)(g.ZP,{name:"program",value:a.program,options:N,onChange:function(e){var a;l("program",e),a=e,m.Z.get("program-names/".concat(a.value,"/users")).then((function(e){if(200===e.status){var a=[];e.data.map((function(e,t){a.push({value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)})})),p((0,s.Z)({},t)),y(a),F([]),R([]),L(!1),K(!1)}})).catch((function(e){})),l("master",{}),l("class",{})},invalid:c.program&&!!r.program}),(0,v.jsx)(o.Bc,{name:"program",component:"div",className:"errmsg"})]})}),(0,v.jsx)(i.JX,{md:3,children:(0,v.jsxs)(i.cw,{children:[(0,v.jsx)(i.__,{for:"master",children:"Master"}),(0,v.jsx)(g.ZP,{name:"master",value:a.master,options:A,onChange:function(e){l("master",e),ae(e.value),l("class",{})},invalid:c.master&&!!r.master}),(0,v.jsx)(o.Bc,{name:"master",component:"div",className:"errmsg"})]})}),(0,v.jsx)(i.JX,{md:3,children:(0,v.jsxs)(i.cw,{children:[(0,v.jsx)(i.__,{for:"class",children:"Class"}),(0,v.jsx)(g.ZP,{name:"class",value:a.class,options:C,onChange:function(e){l("class",e),te(e.value)},invalid:c.class&&!!r.class}),(0,v.jsx)(o.Bc,{name:"class",component:"div",className:"errmsg"})]})}),(0,v.jsx)(i.JX,{md:2,children:(0,v.jsx)(i.zx,{className:"markasbutton",type:"submit",disabled:O.length<=0,children:"Mark as Attend"})})]})})}})}),(0,v.jsx)("hr",{}),(0,v.jsx)(i.X2,{children:(0,v.jsx)(i.JX,{children:(0,v.jsx)("h4",{children:(0,v.jsx)("strong",{children:"Mark as Attendence "})})})}),(0,v.jsx)(i.X2,{className:"rowborder",children:(0,v.jsx)(i.Zb,{className:"marginStyleForTablee",children:(0,v.jsxs)(l.c8,{data:H,selectRow:se,keyField:"id",search:!0,tableContainerClass:"studenttablescro",multiColumnSearch:"true",children:[(0,v.jsx)(l.bY,{width:"5",dataField:"id",hidden:!0,children:"unique field"}),(0,v.jsx)(l.bY,{width:"120",dataField:"photo",dataFormat:function(e){var a=null===e?b:"".concat("http://localhost:8080/api/v1/","auth/student/image/").concat(e);return(0,v.jsx)(i.pU,{children:(0,v.jsx)(i.pU,{src:a,id:"mediastyle"})})},children:"Student"}),(0,v.jsx)(l.bY,{width:"150",dataField:"firstName",dataFormat:function(e,a){return(0,v.jsx)("span",{children:a?"".concat(a.firstName," ").concat(a.lastName):null})},children:"Name"}),(0,v.jsx)(l.bY,{width:"120",dataField:"gender",children:"Gender"}),(0,v.jsx)(l.bY,{width:"120",dataField:"phone",children:"Phone"})]})})}),(0,v.jsx)(i.X2,{})]})})]})}},99506:function(){}}]);
//# sourceMappingURL=8171.6745335f.chunk.js.map