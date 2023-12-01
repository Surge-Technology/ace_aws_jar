"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5210],{41620:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var n=a(1413),s=a(29439),r=a(72791),i=a(57689),o=a(22976),c=a(84951),m=a(18491),l=a(24021),d=a(77710),u=a(9085),h=(a(5462),a(63263)),p=a(21830),f=a.n(p),x=a(72426),g=a.n(x),j=a(45987),v=a(15830),b=(a(45852),a(80184)),T=["views"];g().locale("en-GB"),v.Z.momentLocalizer(g());var D="PREV",N="NEXT",w="TODAY",y=function(e){function t(t){e.onNavigate(t)}function a(t){e.onViewChange(t)}return(0,b.jsxs)("div",{className:"rbc-toolbar",children:[(0,b.jsxs)("span",{className:"rbc-btn-group",children:[(0,b.jsx)("button",{type:"button",onClick:t.bind(null,D),children:"Prev"}),(0,b.jsx)("button",{type:"button",onClick:t.bind(null,w),children:"Today"}),(0,b.jsx)("button",{type:"button",onClick:t.bind(null,N),children:"Next"})]}),(0,b.jsx)("span",{className:"rbc-toolbar-label",children:e.label}),(0,b.jsx)("span",{className:"rbc-btn-group",children:function(t){var n=e.views;if(e.view,n.length>1)return n.map((function(e){return(0,b.jsx)("button",{type:"button",onClick:a.bind(null,e),children:t[e]},e)}))}(e.messages)})]})},S=function(e){var t=(0,r.useMemo)((function(){return{views:{week:!0}}}),[]),a=(t.views,(0,j.Z)(t,T),(0,r.useState)([])),n=(0,s.Z)(a,2),i=n[0],o=n[1],c=(0,r.useState)(),m=(0,s.Z)(c,2),l=m[0],d=m[1];return(0,r.useEffect)((function(){e.events&&o(e.events)}),[e.events,o]),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(v.Z,{events:i,views:["week","day"],defaultDate:new Date,defaultView:"week",components:{toolbar:y},selected:l,onSelectEvent:function(e){d(e),f().fire({title:"<strong>".concat(e.title,"</strong>"),html:"<b>Start Date & Time:</b>\n ".concat(g()(e.start.toString()).format("MMMM Do YYYY, h:mm a")," <br/>\n      <b>End Date & Time:</b>\n").concat(g()(e.end.toString()).format("MMMM Do YYYY, h:mm a")),customClass:{title:"title-class",content:"content-class"}})},showMultiDayTimes:!0,min:new Date(0,0,0,6,0,0),max:new Date(0,0,0,23,30,0)})})},Z=a(59513),_=a.n(Z),q=function(){var e=(0,r.useState)({batchName:"",sport:"",coach:"",style:"",program:"",mode:"",description:"",startDateTime:"",endDateTime:"",startTime:"",endTime:"",sportNprogramView:!1}),t=(0,s.Z)(e,2),a=t[0],p=t[1],x=(0,r.useState)([]),j=(0,s.Z)(x,2),v=j[0],T=j[1],D=(0,r.useState)([]),N=(0,s.Z)(D,2),w=N[0],y=N[1],Z=(0,r.useState)([]),q=(0,s.Z)(Z,2),C=q[0],Y=q[1],M=(0,r.useState)([]),B=(0,s.Z)(M,2),X=B[0],P=B[1],H=(0,r.useState)([]),k=(0,s.Z)(H,2),J=k[0],R=k[1],V=(0,r.useState)([]),E=(0,s.Z)(V,2),I=E[0],z=E[1],F=(0,i.UO)(),A=(0,i.s0)(),O={batchName:a.batchName,sport:a.sport,coach:a.coach,style:a.style,program:a.program,mode:a.mode,startDateTime:a.startDateTime,endDateTime:a.endDateTime,startTime:a.startTime,endTime:a.endTime,description:a.description,sportNprogramView:a.sportNprogramView};(0,r.useEffect)((function(){d.Z.get("".concat("http://3.144.153.218:8080/api/v1/api","/sports/all")).then((function(e){p((0,n.Z)((0,n.Z)({},a),{},{sport:{value:e.data[0]?e.data[0].id:null,label:e.data[0]?e.data[0].name:null},program:{value:e.data[0]&&e.data[0].programName[0]?e.data[0].programName[0].id:null,label:e.data[0]&&e.data[0].programName[0]?e.data[0].programName[0].name:null},sportNprogramView:e.data[0]?e.data[0].view:null}))})).catch((function(e){f().fire(e.response.data.message,"Please try again ")})),"new"!==F.id&&d.Z.get("".concat("http://3.144.153.218:8080/api/v1/api","/batches/").concat(F.id)).then((function(e){var t=e.data;p((0,n.Z)((0,n.Z)({},a),{},{batchName:t.name,coach:{value:t.user.id,label:"".concat(t.user.firstName," ").concat(t.user.lastName)},style:{value:t.batchStyle.id,label:t.batchStyle.name},program:{value:t.programName.id,label:t.programName.name},mode:{value:t.mode.id,label:t.mode.name},startDateTime:g()(t.startDate).format("MM/DD/YYYY"),endDateTime:g()(t.endDate).format("MM/DD/YYYY"),startTime:t.startTime?g()(t.startTime,"HH:mm:ss").format("HH:mm"):t.startTime,endTime:t.endTime?g()(t.endTime,"HH:mm:ss").format("HH:mm"):t.endTime,description:t.description}))})).catch((function(e){f().fire(e.response.data.message,"Please try again ")})),U(),W(),G(),K()}),[]);var U=function(){d.Z.get("sports").then((function(e){var t=[];e.data.content.map((function(e,a){t.push({value:e.id,label:e.name})})),T(t)})).catch((function(e){f().fire(e.response.data.message,"Please try again ")}))},L=function(e){d.Z.get("sports/".concat(e,"/program-name")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),P(t)})).catch((function(e){f().fire(e.response.data.message,"Please try again ")}))},W=function(){h.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),h.Z.get("".concat("http://3.144.153.218:8080/api/v1/","auth/roles/Coach/users")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)})})),y(t)})).catch((function(e){401===e.response.status?f().fire("401 session expired..!","Please re-login"):f().fire(e.response.data.message,"Please try again ")}))},G=function(){d.Z.get("batch-style").then((function(e){var t=[];e.data.content.map((function(e,a){t.push({value:e.id,label:e.name})})),Y(t)})).catch((function(e){f().fire(e.response.data.message,"Please try again ")}))},K=function(){d.Z.get("batch-mode").then((function(e){var t=[];e.data.content.map((function(e,a){t.push({value:e.id,label:e.name})})),R(t)})).catch((function(e){f().fire(e.response.data.message,"Please try again ")}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Ix,{}),(0,b.jsxs)(c.Zb,{children:[(0,b.jsx)("h4",{children:(0,b.jsxs)("strong",{children:["new"===F.id?"Create":"Update"," Batch"]})}),(0,b.jsxs)(c.X2,{children:[(0,b.jsx)(c.JX,{md:6,children:(0,b.jsx)(c.Zb,{className:"cardbgw",children:(0,b.jsx)(m.J9,{enableReinitialize:"true",initialValues:O,validationSchema:function(){return l.object().shape({batchName:l.string().min(2,"Too Short!").max(70,"Too Long!").required("Batch name Required"),sport:l.object().required("Sport is Required"),coach:l.object().required("Coach is Required"),style:l.object().required("Style is Required"),program:l.object().required("Program is Required"),mode:l.object().required("Mode is Required"),description:l.string().min(2,"Too Short!").required("Description Required"),startTime:l.string().required("Start time Required"),endTime:l.string().required("End time Required"),startDateTime:l.date().required("Start Date is required").max(g()().add(6,"months"),"Start date should't be more than 6 months"),endDateTime:l.date().required("End date is required")})},onSubmit:function(e){var t={name:e.batchName,startDate:g()(e.startDateTime).format("YYYY-MM-DD"),endDate:g()(e.endDateTime).format("YYYY-MM-DD"),startTime:g()(e.startTime).format("HH:mm:ss"),endTime:g()(e.endTime).format("HH:mm:ss"),description:e.description};h.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),h.Z.post("".concat("http://3.144.153.218:8080/api/v1/api","/sports/").concat(e.sport.value,"/program-name/").concat(e.program.value,"/user/").concat(e.coach.value,"/batch-style/").concat(e.style.value,"/batch-mode/").concat(e.mode.value,"/batch"),t).then((function(e){201===e.status&&(u.Am.success("Batch created successfully",{theme:"colored"}),setTimeout((function(){A("/settings/batches")}),2e3))})).catch((function(e){401===e.response.status?f().fire("401 session expired..!","Please re-login"):f().fire(e.response.data.message,"Please try again later")}))},children:function(e){var t=e.values,a=e.handleChange,s=e.handleSubmit,r=e.errors,i=e.touched,l=e.handleBlur,u=(e.isValid,e.dirty,e.setFieldValue);return(0,b.jsxs)(m.l0,{className:"add-edit-user-form",onSubmit:s,autoComplete:"off",children:[(0,b.jsxs)(c.eW,{className:"cardbgw",children:[(0,b.jsxs)(c.X2,{children:[(0,b.jsxs)(c.JX,{md:6,children:[(0,b.jsxs)(c.__,{for:"batchName",children:["Name",(0,b.jsx)("span",{className:"required",children:"*"})," "]}),(0,b.jsx)(c.II,{type:"text",name:"batchName",placeholder:"Batch name",value:t.batchName,onChange:a,onBlur:l,invalid:i.batchName&&!!r.batchName}),(0,b.jsx)(m.Bc,{name:"batchName",component:"div",className:"errmsg"})]}),(0,b.jsxs)(c.JX,{md:6,children:[(0,b.jsxs)(c.__,{for:"coach",children:["Coach",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(o.ZP,{name:"coach",value:t.coach,options:w,onChange:function(e){var t;u("coach",e),t=e,d.Z.get("/user/".concat(t.value,"/batch")).then((function(e){var t=[];e.data.map((function(e,a){e.startDate.split("-");var n=e.startTime.split(":"),s=new Date(e.startDate),r=new Date(e.startDate);s.setHours(n[0]),s.setMinutes(n[1]),s.setSeconds(n[2]),e.endDate.split("-");var i=e.endTime.split(":"),o=new Date(e.endDate),c=new Date(e.endDate);if(o.setHours(i[0]),o.setMinutes(i[1]),o.setSeconds(i[2]),r<c)for(var m=new Date(s.getFullYear(),s.getMonth(),s.getDate()),l=new Date(o.getFullYear(),o.getMonth(),o.getDate());new Date(m)<new Date(l);){var d=new Date(m);d.setHours(n[0]),d.setMinutes(n[1]),d.setSeconds(n[2]);var u=new Date(m);u.setHours(i[0]),u.setMinutes(i[1]),u.setSeconds(i[2]),m.setDate(m.getDate()+1),t.push({title:e.name,start:d,end:u})}else t.push({title:e.name,start:s,end:o})})),setTimeout((function(){z(t)}),1500)}))},invalid:i.coach&&!!r.coach}),(0,b.jsx)(m.Bc,{name:"coach",component:"div",className:"errmsg"})]})]}),t.sportNprogramView?(0,b.jsxs)(c.X2,{children:[(0,b.jsxs)(c.JX,{md:6,children:[(0,b.jsxs)(c.__,{for:"sport",children:["Sport",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(o.ZP,{name:"sport",value:t.sport,options:v,onChange:function(e){u("sport",e),L(e.value)},invalid:i.sport&&!!r.sport}),(0,b.jsx)(m.Bc,{name:"sport",component:"div",className:"errmsg"})]}),(0,b.jsxs)(c.JX,{md:6,children:[(0,b.jsxs)(c.__,{for:"program",children:["Program",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(o.ZP,{name:"program",value:t.program,options:X,onChange:function(e){return u("program",e)},invalid:i.program&&!!r.program}),(0,b.jsx)(m.Bc,{name:"program",component:"div",className:"errmsg"})]})]}):null,(0,b.jsxs)(c.X2,{children:[(0,b.jsxs)(c.JX,{md:6,children:[(0,b.jsxs)(c.__,{for:"style",children:["Style",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(o.ZP,{name:"style",value:t.style,options:C,onChange:function(e){return u("style",e)},invalid:i.style&&!!r.style}),(0,b.jsx)(m.Bc,{name:"style",component:"div",className:"errmsg"})]}),(0,b.jsxs)(c.JX,{md:6,children:[(0,b.jsxs)(c.__,{for:"mode",children:["Mode",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(o.ZP,{name:"mode",value:t.mode,options:J,onChange:function(e){return u("mode",e)},invalid:i.mode&&!!r.mode}),(0,b.jsx)(m.Bc,{name:"mode",component:"div",className:"errmsg"})]})]}),(0,b.jsxs)(c.X2,{children:[(0,b.jsx)(c.JX,{md:6,children:(0,b.jsxs)(c.cw,{children:[(0,b.jsxs)(c.__,{children:["Start Date",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(_(),{name:"startDateTime",selected:t.startDateTime?new Date(t.startDateTime):null,onChange:function(e){return function(e,t){t.startDateTime=e,p((0,n.Z)({},t))}(e,t)},placeholderText:"mm/dd/yyyy",minDate:new Date,maxDate:t.endDateTime}),(0,b.jsx)(m.Bc,{name:"startDateTime",component:"div",className:"errmsg"})]})}),(0,b.jsx)(c.JX,{md:6,children:(0,b.jsxs)(c.cw,{children:[(0,b.jsxs)(c.__,{children:["End Date",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(_(),{name:"endDateTime",selected:t.endDateTime?new Date(t.endDateTime):null,onChange:function(e){return function(e,t){t.endDateTime=e,p((0,n.Z)({},t))}(e,t)},placeholderText:"mm/dd/yyyy",minDate:t.startDateTime}),(0,b.jsx)(m.Bc,{name:"endDateTime",component:"div",className:"errmsg"})]})})]}),(0,b.jsxs)(c.X2,{children:[(0,b.jsx)(c.JX,{md:6,children:(0,b.jsxs)(c.cw,{children:[(0,b.jsxs)(c.__,{children:[" Start Time",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(_(),{selected:t.startTime?t.startTime:null,onChange:function(e){return function(e,t){t.startTime=e,p((0,n.Z)({},t))}(e,t)},placeholderText:"--:-- --",showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa"}),(0,b.jsx)(m.Bc,{name:"startTime",component:"div",className:"errmsg"})]})}),(0,b.jsx)(c.JX,{md:6,children:(0,b.jsxs)(c.cw,{children:[(0,b.jsxs)(c.__,{children:[" End Time",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(_(),{selected:t.endTime?t.endTime:null,onChange:function(e){return function(e,t){t.endTime=e,p((0,n.Z)({},t))}(e,t)},placeholderText:"--:-- --",showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa",minTime:new Date(new Date(t.startTime).getTime()+3e5),maxTime:(new Date).setHours(23,59,59)}),(0,b.jsx)(m.Bc,{name:"endTime",component:"div",className:"errmsg"})]})})]}),(0,b.jsx)(c.X2,{children:(0,b.jsx)(c.JX,{md:12,children:(0,b.jsxs)(c.cw,{children:[(0,b.jsxs)(c.__,{for:"description",children:["Description",(0,b.jsx)("span",{className:"required",children:"*"})]}),(0,b.jsx)(c.II,{name:"description",value:t.description,type:"textarea",placeholder:"content here...",onChange:a,onBlur:l,rows:"2",invalid:i.description&&!!r.description}),(0,b.jsx)(m.Bc,{name:"description",component:"div",className:"errmsg"})]})})})]}),(0,b.jsxs)(c.iR,{id:"cardfootercolor",children:[(0,b.jsx)(c.zx,{size:"md",color:"secondary",type:"button",id:"cancelbutton",onClick:function(){return A(-1)},children:"Cancel"})," ",(0,b.jsx)(c.zx,{color:"primary",size:"md",id:"savebutton",type:"submit",children:"new"===F.id?"Save":"Update"})," "]})]})}})})}),(0,b.jsx)(c.JX,{md:6,children:(0,b.jsx)(c.Zb,{className:"fullCard",children:(0,b.jsx)(c.eW,{children:(0,b.jsx)(c.Zb,{className:"fullCardBody",children:(0,b.jsx)(S,{events:I})})})})})]})]})]})}}}]);
//# sourceMappingURL=5210.f414f9a4.chunk.js.map