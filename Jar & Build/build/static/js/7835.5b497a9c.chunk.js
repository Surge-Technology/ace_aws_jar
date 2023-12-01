"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7835],{59508:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var n=t(4942),i=t(1413),l=t(29439),s=t(72791),m=t(22976),c=t(18491),r=t(24021),o=t(57689),d=t(84951),u=(t(88293),t(77710)),p=t(9085),h=(t(5462),t(63263)),j=t(21830),f=t.n(j),y=t.p+"static/media/emailtemplate.aa214d87c17ea4c66ba1.jpg",x=t(80184),g={templateName:"",templateSubject:"",emailBody:"",emailType:"",emailTypeOptions:"",attachmentName:""},b=function(){var e=(0,s.useState)(g),a=(0,l.Z)(e,2),t=a[0],j=a[1],b=(t.templateName,t.templateSubject,t.emailBody,t.emailType,t.emailTypeOptions),N=t.attachmentName,T=(0,o.UO)(),v=(0,o.s0)();(0,s.useEffect)((function(){"new"!==T.id&&u.Z.get("email-template/".concat(T.id)).then((function(e){j((function(a){return(0,i.Z)((0,i.Z)({},a),{},{templateName:e.data.name,templateSubject:e.data.subject,emailBody:e.data.emailBody,emailType:{value:e.data.emailType.id,label:e.data.emailType.name},attachmentName:e.data.attachment})}))})).catch((function(e){f().fire(e.response.data.message,"Please try again ")})),S()}),[]);var S=function(){u.Z.get("email-types").then((function(e){var a=[];e.data.map((function(e,t){a.push({value:e.id,label:e.name})})),j((function(e){return(0,i.Z)((0,i.Z)({},e),{},{emailTypeOptions:a})}))})).catch((function(e){f().fire(e.response.data.message,"Please try again ")}))},B=function(e){URL.createObjectURL(e.target.files[0]);var a=new FormData;a.append("image",e.target.files[0]),h.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),h.Z.post("".concat("http://3.144.153.218:8080/api/v1/api","/email-template/image/upload"),a).then((function(e){j((function(a){return(0,i.Z)((0,i.Z)({},a),{},{attachmentName:e.data.imageName})}))})).catch((function(e){f().fire(e.response.data.message,"Please try again ")}))},Z=function(e){j((function(a){return(0,i.Z)((0,i.Z)({},a),{},(0,n.Z)({},e.target.name,e.target.value))}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Ix,{}),(0,x.jsx)(d.Zb,{children:(0,x.jsxs)(d.eW,{className:"cardbg",children:[(0,x.jsx)("h5",{children:(0,x.jsxs)("strong",{children:["new"===T.id?"Create":"Update"," Email Template"]})}),(0,x.jsx)(d.Zb,{children:(0,x.jsxs)(d.X2,{children:[(0,x.jsx)(d.JX,{md:6,children:(0,x.jsx)(d.Zb,{className:"cardbgw",children:(0,x.jsx)(c.J9,{enableReinitialize:"true",initialValues:t,validationSchema:function(){return r.object().shape({templateName:r.string().min(2,"Too Short!").required("Template name Required"),templateSubject:r.string().min(2,"Too Short!").required("Template subject Required"),emailBody:r.string().min(2,"Too Short!").required("Email body Required"),emailType:r.object().required("Email type Required")})},onSubmit:function(e){var a={name:e.templateName,subject:e.templateSubject,emailBody:e.emailBody,attachment:N};"new"!==T.id?u.Z.put("email-type/".concat(e.emailType.value,"/email-template/").concat(T.id),a).then((function(e){200===e.status&&(p.Am.info("Email-Template updated successfully",{theme:"colored"}),setTimeout((function(){v("/settings/allemailtemplates")}),2e3))})).catch((function(e){f().fire(e.response.data.message,"Please try again ")})):(h.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),h.Z.post("".concat("http://3.144.153.218:8080/api/v1/api","/email-type/").concat(e.emailType.value,"/email-template"),a).then((function(e){201===e.status&&(p.Am.success("Email-Template created successfully",{theme:"colored"}),setTimeout((function(){v("/settings/allemailtemplates")}),2e3))})).catch((function(e){401===e.response.status?f().fire("401 session expired..!","Please re-login"):f().fire(e.response.data.message,"Please try again later")})))},children:function(e){var a=e.values,t=(e.handleChange,e.handleSubmit),l=e.errors,s=e.touched,r=e.handleBlur,o=(e.isValid,e.dirty,e.setFieldValue);return(0,x.jsxs)(c.l0,{className:"add-edit-user-form",onSubmit:t,children:[(0,x.jsxs)(d.eW,{className:"cardbgw",children:[(0,x.jsxs)(d.X2,{children:[(0,x.jsxs)(d.JX,{md:6,children:[(0,x.jsxs)(d.__,{for:"templateName",children:["Name ",(0,x.jsx)("span",{className:"required",children:"*"})]}),(0,x.jsx)(d.II,{type:"text",name:"templateName",value:a.templateName,id:"templateName",placeholder:"Template name ",onChange:Z,onBlur:r,className:l.templateName&&s.templateName?"input-error":null,bsSize:"lg"}),(0,x.jsx)(c.Bc,{name:"templateName",component:"div",className:"errmsg"})]}),(0,x.jsxs)(d.JX,{md:6,children:[(0,x.jsxs)(d.__,{for:"emailType",children:["Email Type ",(0,x.jsx)("span",{className:"required",children:"*"})]}),(0,x.jsx)(m.ZP,{name:"emailType",value:a.emailType,options:b,onChange:function(e){o("emailType",e),function(e,a){j((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,n.Z)({},e,a))}))}("emailType",e)}}),(0,x.jsx)(c.Bc,{name:"emailType",component:"div",className:"errmsg"})]})]}),(0,x.jsx)(d.X2,{children:(0,x.jsxs)(d.cw,{children:[(0,x.jsxs)(d.__,{for:"templateSubject",children:["Subject",(0,x.jsx)("span",{className:"required",children:"*"})]}),(0,x.jsx)(d.II,{type:"text",name:"templateSubject",value:a.templateSubject,id:"templateSubject",placeholder:"Subject",onChange:Z,onBlur:r,bsSize:"lg"}),(0,x.jsx)(c.Bc,{name:"templateSubject",component:"div",className:"errmsg"})]})}),(0,x.jsx)(d.X2,{children:(0,x.jsxs)(d.cw,{children:[(0,x.jsxs)(d.__,{for:"emailBody",children:["Body",(0,x.jsx)("span",{className:"required",children:"*"})]}),(0,x.jsx)(d.II,{type:"textarea",name:"emailBody",value:a.emailBody,id:"emailBody",placeholder:"Body content here...",onChange:Z,onBlur:r,rows:"6"}),(0,x.jsx)(c.Bc,{name:"emailBody",component:"div",className:"errmsg"})]})}),(0,x.jsx)(d.X2,{children:(0,x.jsxs)(d.cw,{children:[(0,x.jsx)(d.__,{for:"templateFile",children:"Attachment"}),(0,x.jsx)(d.II,{type:"file",name:"templateFile",value:a.templateFile,onChange:B,id:"templateFile"})]})})]}),(0,x.jsxs)(d.iR,{id:"cardfootercolor",children:[(0,x.jsx)(d.zx,{size:"md",color:"secondary",type:"button",className:"btncncl",id:"cancelbutton",onClick:function(){return v(-1)},children:"Cancel"})," ",(0,x.jsx)(d.zx,{color:"primary",size:"md",id:"savebutton",className:"btnsave",type:"submit",children:"new"===T.id?"Save":"Update"})," "]})]})}})})}),(0,x.jsx)(d.JX,{md:6,children:(0,x.jsx)(d.Mo,{alt:"Card image cap",src:y,bottom:!0})})]})})]})})]})}},88293:function(){}}]);
//# sourceMappingURL=7835.5b497a9c.chunk.js.map