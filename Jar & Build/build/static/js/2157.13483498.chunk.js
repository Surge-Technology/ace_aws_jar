"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2157],{72157:function(e,a,n){n.r(a);var r=n(4942),t=n(1413),s=n(29439),i=n(72791),c=n(57689),l=n(84951),o=n(18491),u=n(24021),d=n(22976),m=n(77710),h=n(21830),p=n.n(h),f=n(72426),y=n.n(f),x=n(63263),g=n(9085),j=n(59513),v=n.n(j),q=n(80184),N={firstName:"",lastName:"",phone:"",email:"",MarketingSources:"",marketingSourceOptions:[],referedBy:"",referedEmail:"",Location:"",startDate:new Date,inquiryType:"",inquiryTypeOptions:[],inquiryStatus:"",inquiryStatusOptions:[],services:"",servicesOptions:[],loader:!1,uploadUrlName:"",notes:""};a.default=function(){var e=(0,i.useState)(N),a=(0,s.Z)(e,2),n=a[0],h=a[1],f=(n.firstName,n.lastName,n.phone,n.email,n.MarketingSources),j=n.marketingSourceOptions,Z=n.referedBy,S=n.referedEmail,b=(n.Location,n.startDate,n.inquiryType),_=n.inquiryTypeOptions,B=n.inquiryStatus,k=n.inquiryStatusOptions,I=n.services,T=n.servicesOptions,C=n.loader,X=n.uploadUrlName,E=(n.notes,(0,c.s0)()),P=(0,c.UO)(),J=function(e){var a=e.target,n=a.name,s=a.value;if("phone"===n){var i=s.replace(/[^0-9]/g,"").replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");h((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,r.Z)({},n,i))}))}else h((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,r.Z)({},n,s))}))},M=function(e,a){h((function(n){return(0,t.Z)((0,t.Z)({},n),{},(0,r.Z)({},e,a))}))};(0,i.useEffect)((function(){m.Z.get("inquiry/marketing-source").then((function(e){var a=[];e.data.map((function(e,n){a.push({value:e.id,label:e.name})})),h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{marketingSourceOptions:a,startDate:y()().format("MM/DD/YYYY")})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),m.Z.get("inquiry-type").then((function(e){var a=[];e.data.map((function(e,n){a.push({value:e.id,label:e.name})})),h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{inquiryTypeOptions:a})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),m.Z.get("inquiry-status").then((function(e){var a=[];e.data.map((function(e,n){a.push({value:e.id,label:e.name})})),h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{inquiryStatusOptions:a})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),m.Z.get("inquiry-services").then((function(e){var a=[];e.data.map((function(e,n){a.push({value:e.id,label:e.name})})),h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{servicesOptions:a})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),"new"!==P.id&&m.Z.get("inquiry/".concat(P.id)).then((function(e){console.log("res",e),h((function(a){return(0,t.Z)((0,t.Z)({},a),{},{firstName:e.data.firstName,lastName:e.data.lastName,email:e.data.email,phone:e.data.phone,Location:e.data.academyLocation,datetim:e.data.datetime,notes:e.data.note,referedBy:e.data.referredBy,referedEmail:e.data.referEmail,uploadUrl:e.data.uploadUrlName,MarketingSources:{value:e.data.marketingSource.id,label:e.data.marketingSource.name},inquiryType:{value:e.data.inquiryType.id,label:e.data.inquiryType.name},inquiryStatus:{value:e.data.inquiryStatus.id,label:e.data.inquiryStatus.name},services:{value:e.data.inquiryServices.id,label:e.data.inquiryServices.name}})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))}),[]);var D=function(e,a){if("referedBy"===a){var n=e.target.value.split(" ");m.Z.get("/referral?firstName=".concat(n[0],"&lastName=").concat(n[1])).then((function(e){h((function(a){return(0,t.Z)((0,t.Z)({},a),{},{referedEmail:e.data.length>0?e.data[0].email:""})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))}else h((function(a){return(0,t.Z)((0,t.Z)({},a),{},{MarketingSources:e})}))},L=function(e){var a=new FormData;a.append("image",e.target.files[0]),x.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),x.Z.post("".concat("http://13.59.87.195:8080/api/v1/api","/files/fileimage/upload"),a).then((function(e){h((function(a){return(0,t.Z)((0,t.Z)({},a),{},{uploadUrlName:e.data.imageName})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))};return(0,q.jsxs)(q.Fragment,{children:[C?(0,q.jsx)(l.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,q.jsx)(g.Ix,{}),(0,q.jsx)(l.Zb,{className:"cardm",children:(0,q.jsxs)(l.eW,{className:"cardbg",children:[(0,q.jsx)("h5",{children:(0,q.jsx)("strong",{children:"Create Inquiry"})}),(0,q.jsx)(l.Zb,{className:"cardbgw",children:(0,q.jsx)(o.J9,{enableReinitialize:!0,initialValues:n,validationSchema:function(){return u.object().shape({firstName:u.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed").required("First Name is required"),lastName:u.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed").required("Last Name is required"),email:u.string().required("Email is required").email("Invalid mail address"),phone:u.string().min(10,"Minimum 10 digits!").max(14,"Maximum 14 digits!").required("Phone is required"),inquiryType:u.object().required(" Inquiry Type is required"),inquiryStatus:u.object().required("Inquiry Status is required"),services:u.object().required("Program is required"),Location:u.string().required("Location is required"),MarketingSources:u.object().required("Marketing Sources is required")})},onSubmit:function(e){h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loader:!0})}));var a=y()(e.startDate).format("YYYY-MM-DD")+" "+y()(e.startDate).format("HH:mm:ss"),n={firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,academyLocation:e.Location,datetime:a,note:e.notes,referredBy:e.referedBy,referEmail:e.referedEmail,uploadUrl:e.uploadUrlName};"new"===P.id?(x.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),x.Z.post("".concat("http://13.59.87.195:8080/api/v1/api","/inquiry/marketing-source/").concat(e.MarketingSources.value,"/inquiry-type/").concat(e.inquiryType.value,"/inquiry-status/").concat(e.inquiryStatus.value,"/inquiry-services/").concat(e.services.value),n).then((function(e){g.Am.success("Registered successfully",{theme:"colored"}),h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loader:!1})})),setTimeout((function(){E("/studentTabs/1")}),1e3)})).catch((function(e){h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loader:!1})})),p().fire(e.response.data.message,"Please try again ")}))):(x.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),x.Z.put("".concat("http://13.59.87.195:8080/api/v1/api","/inquiry/marketing-source/").concat(e.MarketingSources.value,"/inquiry-type/").concat(e.inquiryType.value,"/inquiry-status/").concat(e.inquiryStatus.value,"/inquiry-services/").concat(e.services.value,"/inquiry/").concat(P.id),n).then((function(e){g.Am.success("Updated successfully",{theme:"colored"}),h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loader:!1})})),setTimeout((function(){E("/studentTabs/1")}),1e3)})).catch((function(e){h((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loader:!1})})),p().fire(e.response.data.message,"Please try again ")})))},children:function(e){var a=e.values,n=e.setFieldValue,s=(e.handleChange,e.handleSubmit),i=e.handleBlur;e.errors,e.touched;return(0,q.jsxs)(o.l0,{onSubmit:s,children:[(0,q.jsxs)(l.eW,{children:[(0,q.jsxs)(l.X2,{children:[(0,q.jsxs)(l.JX,{md:6,children:[(0,q.jsxs)(l.__,{children:[" First Name ",(0,q.jsx)("span",{className:"colorRed",children:"*"})]}),(0,q.jsx)(l.II,{name:"firstName",type:"text",value:a.firstName,onBlur:i,placeholder:"Enter First Name",onChange:J}),(0,q.jsx)(o.Bc,{name:"firstName",component:"div",className:"errmsg"})]}),(0,q.jsxs)(l.JX,{md:6,children:[(0,q.jsxs)(l.__,{children:[" Last Name ",(0,q.jsx)("span",{className:"colorRed",children:"*"})]}),(0,q.jsx)(l.II,{type:"text",name:"lastName",value:a.lastName,onBlur:i,placeholder:"Enter Last Name",onChange:J}),(0,q.jsx)(o.Bc,{name:"lastName",component:"div",className:"errmsg"})]})]}),(0,q.jsxs)(l.X2,{children:[(0,q.jsxs)(l.JX,{md:6,children:[(0,q.jsxs)(l.__,{children:[" Phone ",(0,q.jsx)("span",{className:"colorRed",children:"*"})," "]}),(0,q.jsx)(l.II,{name:"phone",type:"text",value:a.phone,placeholder:"Enter Phone Number",onChange:J,onBlur:i}),(0,q.jsx)(o.Bc,{name:"phone",component:"div",className:"errmsg"})]}),(0,q.jsxs)(l.JX,{md:6,children:[(0,q.jsxs)(l.__,{children:[" Email  ",(0,q.jsx)("span",{className:"colorRed",children:"*"})," "]}),(0,q.jsx)(l.II,{name:"email",type:"text",value:a.email,placeholder:"Enter Email",onChange:J,onBlur:i}),(0,q.jsx)(o.Bc,{name:"email",component:"div",className:"errmsg"})]})]}),(0,q.jsxs)(l.X2,{children:[(0,q.jsxs)(l.JX,{md:3,children:[(0,q.jsxs)(l.__,{children:[" Inquiry Type  ",(0,q.jsx)("span",{className:"colorRed",children:"*"})," "]}),(0,q.jsx)(d.ZP,{name:"inquiryType",value:b||"Select",onChange:function(e){n("inquiryType",e),M("inquiryType",e)},options:_}),(0,q.jsx)(o.Bc,{name:"inquiryType",component:"div",className:"errmsg"})]}),(0,q.jsxs)(l.JX,{md:3,children:[(0,q.jsxs)(l.__,{children:[" Inquiry Status  ",(0,q.jsx)("span",{className:"colorRed",children:"*"})," "]}),(0,q.jsx)(d.ZP,{name:"inquiryStatus",value:B||"Select",onChange:function(e){n("inquiryStatus",e),M("inquiryStatus",e)},options:k}),(0,q.jsx)(o.Bc,{name:"inquiryStatus",component:"div",className:"errmsg"})]}),(0,q.jsxs)(l.JX,{md:4,children:[(0,q.jsxs)(l.__,{children:[" Programs  ",(0,q.jsx)("span",{className:"colorRed",children:"*"})," "]}),(0,q.jsx)(d.ZP,{name:"services",value:I||"Select",onChange:function(e){n("services",e),M("services",e)},options:T}),(0,q.jsx)(o.Bc,{name:"services",component:"div",className:"errmsg"})]})]}),(0,q.jsxs)(l.X2,{children:[(0,q.jsxs)(l.JX,{md:6,children:[(0,q.jsxs)(l.__,{children:[" Location ",(0,q.jsx)("span",{className:"colorRed",children:"*"})," "]}),(0,q.jsx)(l.II,{name:"Location",type:"text",value:a.Location,onChange:J,placeholder:"Enter Location",onBlur:i}),(0,q.jsx)(o.Bc,{name:"Location",component:"div",className:"errmsg"})]}),(0,q.jsxs)(l.JX,{md:6,children:[(0,q.jsx)(l.__,{children:" Date"}),(0,q.jsx)(v(),{name:"startDate",selected:a.startDate?new Date(a.startDate):null,onChange:function(e){return a="startDate",n=e,void h((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,r.Z)({},a,n))}));var a,n},showTimeSelect:!0,dateFormat:"Pp"})]})]}),(0,q.jsx)(l.X2,{children:(0,q.jsxs)(l.JX,{children:[(0,q.jsxs)(l.__,{children:[(0,q.jsx)("span",{children:"How did you hear about us? "})," ",(0,q.jsx)("span",{className:"colorRed",children:"*"})]}),(0,q.jsx)(d.ZP,{name:"MarketingSources",value:f,onChange:function(e){n("MarketingSources",e),D(e,"MarketingSources")},options:j}),(0,q.jsx)(o.Bc,{name:"MarketingSources",component:"div",className:"errmsg"})]})}),"Refer By Friend"===f.label?(0,q.jsxs)(l.X2,{children:[(0,q.jsxs)(l.JX,{md:5,children:[(0,q.jsx)(l.__,{children:" Refered by  "}),(0,q.jsx)(l.II,{name:"referedBy",type:"text",value:Z,placeholder:"ex: James Smith",onBlur:function(e){return D(e,"referedBy")},onChange:J})]}),(0,q.jsxs)(l.JX,{md:5,children:[(0,q.jsx)(l.__,{children:" Email"}),(0,q.jsx)(l.II,{name:"referedEmail",type:"text",value:S,placeholder:"ex: Jamesmith@gmail.com",onChange:J})]}),B&&"Trial Class"===B.label?(0,q.jsxs)(l.JX,{md:2,children:[(0,q.jsx)(l.__,{children:" Consent Form"}),(0,q.jsxs)("span",{className:"btn btn-primary btn-file",children:["Upload ",(0,q.jsx)("input",{type:"file",onChange:function(e){return L(e)}})]}),(0,q.jsxs)("span",{children:[" ",X?(0,q.jsx)("b",{style:{color:"green"},children:"Successfully Uploaded"}):null]})]}):null]}):(0,q.jsxs)(l.X2,{children:[(0,q.jsxs)(l.JX,{md:10,children:[(0,q.jsx)(l.__,{children:" Notes"}),(0,q.jsx)(l.II,{type:"textarea",name:"notes",value:a.notes,onChange:J,placeholder:"Enter some extra information...",rows:"3"})]}),B&&"Trial Class"===B.label?(0,q.jsxs)(l.JX,{md:2,children:[(0,q.jsx)(l.__,{children:" Consent Form"}),(0,q.jsxs)("span",{className:"btn btn-primary btn-file",children:["Upload ",(0,q.jsx)("input",{type:"file",onChange:function(e){return L(e)}})]}),(0,q.jsxs)("span",{children:[" ",X?(0,q.jsx)("b",{style:{color:"green"},children:"Successfully Uploaded"}):null]})]}):null]})]}),(0,q.jsxs)(l.iR,{className:"centerTextalign",children:[(0,q.jsx)(l.zx,{type:"button",color:"secondary",className:"btnbg btncncl",size:"sm",onClick:function(){return E("/studentTabs/1")},children:"Cancel"}),(0,q.jsx)(l.zx,{type:"submit",color:"primary",className:"btnsave",size:"sm",children:"Save"})]})]})}})})]})})]})}}}]);
//# sourceMappingURL=2157.13483498.chunk.js.map