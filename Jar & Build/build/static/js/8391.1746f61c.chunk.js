"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8391],{46727:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var r=a(4942),s=a(1413),c=a(29439),t=a(72791),i=a(18491),o=a(24021),d=a(57689),l=a(84951),u=a(9085),m=(a(5462),a(63263)),h=a(21830),j=a.n(h),p=a.p+"static/media/communication.5af801463916a1f2eba6.webp",g=a(80184),x={subject:"",primaryAudience:"",seconderyAudience:"",message:"",file:"",loader:!1,attachmentName:null},f=function(){var e=(0,t.useState)(x),n=(0,c.Z)(e,2),a=n[0],h=n[1],f=(a.subject,a.primaryAudience,a.seconderyAudience,a.message,a.file,a.loader),b=a.attachmentName,y=(0,t.useState)(""),v=(0,c.Z)(y,2),A=(v[0],v[1],(0,d.UO)()),Z=(0,d.s0)();(0,t.useEffect)((function(){h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{primaryAudience:A.name})}))}),[]);var _=function(e){URL.createObjectURL(e.target.files[0]);var n=new FormData;n.append("image",e.target.files[0]),m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.post("".concat("http://18.216.55.32:8080/api/v1/api","/group-message/image/upload"),n).then((function(e){h((function(n){return(0,s.Z)((0,s.Z)({},n),{},{attachmentName:e.data.imageName})}))})).catch((function(e){j().fire(e.response.data.message,"Please try again ")}))},N=function(e){h((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,r.Z)({},e.target.name,e.target.value))}))};return(0,g.jsxs)(g.Fragment,{children:[f?(0,g.jsx)(l.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,g.jsx)(u.Ix,{}),(0,g.jsx)(l.Zb,{children:(0,g.jsxs)(l.eW,{className:"cardbg",children:[(0,g.jsx)("h2",{children:(0,g.jsx)("strong",{children:"New Group Message"})}),(0,g.jsx)(l.Zb,{children:(0,g.jsxs)(l.X2,{children:[(0,g.jsx)(l.JX,{md:6,children:(0,g.jsx)(l.Zb,{className:"cardbgw",children:(0,g.jsx)(i.J9,{enableReinitialize:"true",initialValues:a,validationSchema:function(){return o.object().shape({subject:o.string().min(2,"Too Short!").max(70,"Too Long!").required("Subject Required"),message:o.string().min(2,"Too Short!").required("Message Required")})},onSubmit:function(e){h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loader:!0})}));var n={subject:e.subject,message:e.message,secondaryAudience:e.seconderyAudience,attachment:b};m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.post("".concat("http://18.216.55.32:8080/api/v1/api","/event/").concat(A.id,"/primary-audience/").concat(A.primaryAudienceId,"/group-message"),n).then((function(e){u.Am.success("Created successfully",{theme:"colored"}),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loader:!1})})),setTimeout((function(){Z("/events/eventregister/".concat(A.id))}),1e3)})).catch((function(e){h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loader:!1})})),j().fire(e.response.data.message,"Please try again ")}))},children:function(e){var n=e.values,a=(e.handleChange,e.handleSubmit),r=e.errors,s=e.touched,c=e.handleBlur;e.isValid,e.dirty,e.setFieldValue;return(0,g.jsxs)(i.l0,{className:"add-edit-user-form",onSubmit:a,children:[(0,g.jsxs)(l.eW,{className:"cardbgw",children:[(0,g.jsx)(l.X2,{children:(0,g.jsxs)(l.JX,{md:12,children:[(0,g.jsxs)(l.__,{for:"templateName",children:["Subject ",(0,g.jsx)("span",{className:"required",children:"*"})]}),(0,g.jsx)(l.II,{type:"text",name:"subject",value:n.subject,placeholder:"subject ",onChange:N,onBlur:c,className:r.subject&&s.subject?"input-error":null,bsSize:"lg"}),(0,g.jsx)(i.Bc,{name:"subject",component:"div",className:"errmsg"})]})}),(0,g.jsxs)(l.X2,{children:[(0,g.jsxs)(l.JX,{md:6,children:[(0,g.jsxs)(l.__,{for:"primaryAudience",children:["Primary Audience ",(0,g.jsx)("span",{className:"required",children:"*"})]}),(0,g.jsx)(l.II,{type:"text",name:"primaryAudience",value:n.primaryAudience,placeholder:"primaryAudience ",onChange:N,onBlur:c,readOnly:!0,bsSize:"lg"}),(0,g.jsx)(i.Bc,{name:"primaryAudience",component:"div",className:"errmsg"})]}),(0,g.jsxs)(l.JX,{md:6,children:[(0,g.jsx)(l.__,{for:"seconderyAudience",children:"Secondary Audience"}),(0,g.jsx)(l.II,{type:"text",name:"seconderyAudience",value:n.seconderyAudience,placeholder:"seconderyAudience ",onChange:N,onBlur:c,className:r.seconderyAudience&&s.seconderyAudience?"input-error":null,bsSize:"lg"})]})]}),(0,g.jsx)(l.X2,{children:(0,g.jsxs)(l.cw,{children:[(0,g.jsxs)(l.__,{for:"message",children:["Message",(0,g.jsx)("span",{className:"required",children:"*"})]}),(0,g.jsx)(l.II,{type:"textarea",name:"message",value:n.message,placeholder:"Message content here...",onChange:N,onBlur:c,rows:"3"}),(0,g.jsx)(i.Bc,{name:"message",component:"div",className:"errmsg"})]})}),(0,g.jsx)(l.X2,{children:(0,g.jsxs)(l.cw,{children:[(0,g.jsx)(l.__,{for:"file",children:"Attachment"}),(0,g.jsx)(l.II,{type:"file",name:"file",value:n.file,onChange:_})]})})]}),(0,g.jsxs)(l.iR,{id:"cardfootercolor",children:[(0,g.jsx)(l.zx,{size:"md",color:"secondary",type:"button",id:"cancelbutton",onClick:function(){return Z("/events/eventregister/".concat(A.id))},children:"Cancel"})," ",(0,g.jsx)(l.zx,{color:"primary",size:"md",id:"savebutton",type:"submit",children:"new"===A.id?"Send":"send"})," "]})]})}})})}),(0,g.jsx)(l.JX,{md:6,children:(0,g.jsx)(l.Mo,{alt:"Card image cap",src:p,bottom:!0})})]})})]})})]})}}}]);
//# sourceMappingURL=8391.1746f61c.chunk.js.map