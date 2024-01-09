"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5890],{55765:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(1413),r=t(29439),c=t(72791),i=t(18491),s=t(24021),o=t(57689),u=t(84951),l=(t(48197),t(22976)),d=t(77710),m=t(63263),p=t(21830),h=t.n(p),f=t(9085),g=(t(5462),t.p+"static/media/contract.78925d07fa73b9992762.jpg"),x=t(80184),j=function(){var e=(0,c.useState)([{programName:"",pricing:"",trailProgram:!0}]),n=(0,r.Z)(e,2),t=n[0],p=n[1],j=(0,c.useState)([{id:"",ifperson:"",frequency:"",then:"",discount:"",amount:""}]),b=(0,r.Z)(j,2),v=b[0],y=b[1],q=(0,c.useState)(""),N=(0,r.Z)(q,2),F=N[0],_=N[1],C=(0,c.useState)(""),Z=(0,r.Z)(C,2),B=Z[0],V=Z[1],w=(0,c.useState)(""),P=(0,r.Z)(w,2),S=P[0],L=P[1],X=(0,c.useState)(!1),I=(0,r.Z)(X,2),J=I[0],z=I[1],k=(0,c.useState)(""),T=(0,r.Z)(k,2),A=T[0],D=T[1],R=(0,c.useState)(""),M=(0,r.Z)(R,2),K=M[0],Y=M[1],$=(0,c.useState)([]),U=(0,r.Z)($,2),W=(U[0],U[1]),E=(0,c.useState)(!1),O=(0,r.Z)(E,2),G=O[0],H=O[1],Q=(0,c.useState)([]),ee=(0,r.Z)(Q,2),ne=(ee[0],ee[1]),te=(0,o.s0)(),ae=(0,o.UO)(),re={programName:t.programName,pricing:t.pricing,lengths:F,contractLoopValues:v};(0,c.useEffect)((function(){ce(),"new"!==ae.id&&d.Z.get("contract-promotion/".concat(ae.id)).then((function(e){p((0,a.Z)((0,a.Z)({},t),{},{programName:e.data.name,pricing:e.data.basePrice})),_({value:e.data.tenure.id,label:e.data.tenure.name});var n=[],r=[];e.data.pricing.map((function(e,t){n.push({id:e.id,ifperson:e.members,frequency:{value:e.subscriptionFrequency.id,label:e.subscriptionFrequency.name},then:e.fee,discount:e.discount,amount:e.total}),r.push({id:e.id})})),ie({value:e.data.tenure.id,label:e.data.tenure.name}),ne(r),y(n);var c=[];e.data.pricing.map((function(e,n){c.push({id:e.id,members:e.members,subscriptionFrequency:{id:e.subscriptionFrequency.id},fee:e.fee,discount:e.discount,total:e.total})})),W(c),Y(e.data.tenure.id),z(e.data.enrolled),D(e.data.pricing.length)})).catch((function(e){h().fire("Please try again ")}))}),[]);var ce=function(){d.Z.get("/all-tenures").then((function(e){var n=[];e.data.map((function(e,t){n.push({value:e.id,label:e.name})})),V(n)})).catch((function(e){h().fire(e.response.data.message,"Please try again ")}))},ie=function(e){d.Z.get("/tenure/".concat(e.value,"/subscription-frequency")).then((function(e){var n=[];e.data.map((function(e,t){n.push({value:e.id,label:e.name})})),L(n)})).catch((function(e){h().fire(e.response.data.message,"Please try again ")}))},se=function(e){"Minus"===e.code&&e.preventDefault()};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f.Ix,{}),(0,x.jsx)(u.Zb,{children:(0,x.jsxs)(u.eW,{className:"cardbg",children:[(0,x.jsx)("h5",{children:(0,x.jsx)("strong",{children:"new"===ae.id?"Create Contract":"Update Contract"})}),(0,x.jsx)(u.Zb,{children:(0,x.jsxs)(u.X2,{children:[(0,x.jsx)(u.JX,{md:8,children:(0,x.jsx)(u.Zb,{className:"cardbgw",children:(0,x.jsx)(i.J9,{enableReinitialize:"true",initialValues:re,validationSchema:function(){return s.object().shape({programName:s.string().matches(/^[a-zA-Z0-9@]/,"Special character are not allowed").min(2,"Too Short!").max(70,"Too Long!").required("Contract name Required"),pricing:s.number().required("Base Price is required"),lengths:s.object().required("Length is Required"),contractLoopValues:s.array().of(s.object().shape({ifperson:s.string().required("Member(s) required"),frequency:s.object().required("Frequency Required")}))})},onSubmit:function(e){var n=[];e.contractLoopValues.map((function(t,a){n.push({members:t.ifperson,fee:t.then,discount:t.discount,subscriptionFrequency:{id:t.frequency.value},total:e.pricing&&(parseFloat(e.pricing?e.pricing:0)+parseFloat(t.then?t.then:0)-t.discount).toFixed(2)})}));var t=[];v.map((function(n,a){void 0===n.id&&t.push({members:n.ifperson,fee:n.then,discount:n.discount,subscriptionFrequency:{id:n.frequency.value},total:e.pricing&&(parseFloat(e.pricing?e.pricing:0)+parseFloat(n.then?n.then:0)-n.discount).toFixed(2)})}));var a=[];e.contractLoopValues.map((function(n,t){a.push({id:n.id,members:n.ifperson,fee:n.then,discount:n.discount,subscriptionFrequency:{id:n.frequency.value},total:e.pricing&&(parseFloat(e.pricing?e.pricing:0)+parseFloat(n.then?n.then:0)-n.discount).toFixed(2)})}));var r={name:e.programName,basePrice:e.pricing,pricing:n},c={name:e.programName,basePrice:e.pricing,pricing:a};"new"===ae.id?(m.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),m.Z.post("".concat("http://3.139.62.119:8080/api/v1/api","/contract-tenure/").concat(e.lengths.value,"/contract-promotion"),r).then((function(e){201===e.status&&(f.Am.success("Contract created successfully",{theme:"colored"}),setTimeout((function(){te("/settings/allcontracts")}),2e3))})).catch((function(e){401===e.response.status?h().fire("401 session expired..!","Please re-login"):h().fire(e.response.data.message,"Please try again later")}))):d.Z.put("contract-tenure/".concat(K,"/contract-promotion/").concat(ae.id),c).then((function(e){200===e.status&&(f.Am.info("Contract updated successfully",{theme:"colored"}),setTimeout((function(){te("/settings/allcontracts")}),2e3))})).catch((function(e){h().fire(e.response.data.message,"Please try again ")}))},children:function(e){var n=e.values,t=e.handleChange,a=e.handleSubmit,r=e.errors,c=e.touched,s=e.handleBlur;e.isValid,e.dirty,e.setFieldValue;return(0,x.jsxs)(i.l0,{onSubmit:a,autoComplete:"off",children:[(0,x.jsxs)(u.eW,{className:"cardbgw",children:[(0,x.jsx)(u.X2,{children:(0,x.jsx)(u.JX,{md:8,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)(u.__,{for:"programName",children:["Name",(0,x.jsx)("span",{className:"required",children:"*"})]}),(0,x.jsx)(u.II,{name:"programName",placeholder:"Contract name",type:"text",value:n.programName,onChange:t,onBlur:s,invalid:c.programName&&!!r.programName}),(0,x.jsx)(i.Bc,{name:"programName",component:"div",className:"errmsg"})]})})}),(0,x.jsxs)(u.X2,{children:[(0,x.jsx)(u.JX,{md:4,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)(u.__,{for:"pricing",children:["Base Price $",(0,x.jsx)("span",{className:"required",children:"*"})]}),(0,x.jsx)(u.BZ,{children:(0,x.jsx)(u.II,{placeholder:"0.00",type:"number",min:"1",onKeyPress:se,name:"pricing",step:"1",onChange:t,onBlur:s,value:n.pricing,invalid:c.pricing&&!!r.pricing})}),(0,x.jsx)(i.Bc,{name:"pricing",component:"div",className:"errmsg"})]})}),(0,x.jsx)(u.JX,{md:4,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)(u.__,{for:"lengths",children:["Duration",(0,x.jsx)("span",{className:"required",children:"*"})]}),(0,x.jsx)(i.gN,{name:"lengths",children:function(e){e.field;var t=e.form;return(0,x.jsx)(l.ZP,{name:"lengths",options:B,value:n.lengths,onChange:function(e){return t.setFieldValue("lengths",e),ie(e)},onBlur:function(){t.setFieldTouched("lengths")}})}}),(0,x.jsx)(i.Bc,{name:"lengths",component:"div",className:"errmsg"})]})})]}),(0,x.jsx)(i.F2,{name:"contractLoopValues",render:function(e){var a=n.contractLoopValues;return(0,x.jsx)("div",{children:a&&a.length>0?a.map((function(a,r){return(0,x.jsx)("div",{children:(0,x.jsxs)(u.X2,{children:[(0,x.jsx)(u.JX,{md:2,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)(u.__,{for:"ifperson",children:[0===r?"Member":"",(0,x.jsx)("span",{className:"required",children:0===r?"*":""})]}),(0,x.jsx)(u.II,{type:"number",name:"contractLoopValues.".concat(r,".ifperson"),onChange:t,onBlur:s,min:"1",step:"1",onKeyPress:se,placeholder:"Member(s)",value:a.ifperson||"",disabled:!!(J&&A>=r+1)}),(0,x.jsx)(i.Bc,{name:"contractLoopValues.".concat(r,".ifperson"),component:"div",className:"errmsg"})]})}),(0,x.jsx)(u.JX,{md:2,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)(u.__,{for:"frequency",children:[0===r?"Frequency":"",(0,x.jsx)("span",{className:"required",children:0===r?"*":""})]}),(0,x.jsx)(i.gN,{children:function(e){e.field;var n=e.form;return(0,x.jsx)(l.ZP,{name:"frequency",options:S,value:a.frequency||"",onChange:function(e){return n.setFieldValue("contractLoopValues.".concat(r,".frequency"),e)},onBlur:function(){n.setFieldTouched("contractLoopValues.".concat(r,".frequency"))},isDisabled:!!(J&&A>=r+1)})}}),(0,x.jsx)(i.Bc,{name:"contractLoopValues.".concat(r,".frequency"),component:"div",className:"errmsg"}),"                                        "]})}),(0,x.jsx)(u.JX,{md:2,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsx)(u.__,{for:"then",children:0===r?"Additional Fee $":""}),(0,x.jsx)(u.II,{type:"number",name:"contractLoopValues.".concat(r,".then"),min:"1",step:"1",onKeyPress:se,onChange:t,onBlur:s,placeholder:"0.00",value:a.then||"",disabled:!!(J&&A>=r+1)}),(0,x.jsx)(i.Bc,{name:"contractLoopValues.".concat(r,".then"),component:"div",className:"errmsg"})]})}),(0,x.jsx)(u.JX,{md:2,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsxs)(u.__,{for:"discount",children:[0===r?"Discount ":""," "]}),(0,x.jsx)(u.II,{type:"number",name:"contractLoopValues.".concat(r,".discount"),min:"0",step:"1",onKeyPress:se,id:"discount",placeholder:"0",onChange:t,onBlur:s,disabled:!!(J&&A>=r+1),value:a.discount||""}),(0,x.jsx)(i.Bc,{name:"contractLoopValues.".concat(r,".discount"),component:"div",className:"errmsg"})]})}),(0,x.jsx)(u.JX,{md:2,children:(0,x.jsxs)(u.cw,{children:[(0,x.jsx)(u.__,{for:"amount",children:0===r?"Total $":""}),(0,x.jsx)(u.II,{type:"number",name:"contractLoopValues.".concat(r,".amount"),disabled:"true",readonly:"readonly",value:n.pricing&&(parseFloat(n.pricing?n.pricing:0)+parseFloat(a.then?a.then:0)-a.discount).toFixed(2)})]})}),(0,x.jsxs)(u.JX,{md:2,children:[(0,x.jsx)(u.zx,{color:"success",disabled:!!(J&&A>r+1),onClick:function(){return e.push({ifperson:"",frequency:"",then:"",discount:"",amount:""})},id:"plusbutton",children:(0,x.jsx)("i",{className:"fa fa-plus","aria-hidden":"true",id:"plusicon"})})," \xa0",r?(0,x.jsx)(u.zx,{color:"danger",disabled:!!(J&&A>=r+1),onClick:function(){var n;e.remove(r),H(!G),n=a.id,"new"!==ae.id&&h().fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed?d.Z.delete("pricing/".concat(n,"/contract-promotion/").concat(ae.id)).then((function(e){200==e.status&&h().fire("Record Deleted!","","success")})).catch((function(e){h().fire("Please try again ")})):h().fire("Your Data safe","")}))},id:"minusbutton",children:(0,x.jsx)("i",{className:"fa fa-minus","aria-hidden":"true",id:"minusicon"})}):null]})]})},r)})):null})}})]}),(0,x.jsxs)(u.iR,{id:"cardfootercolor",children:[(0,x.jsx)(u.zx,{size:"md",color:"secondary",type:"button",className:"btncncl",id:"cancelbutton",onClick:function(){return te(-1)},children:"Cancel"})," ",(0,x.jsx)(u.zx,{color:"primary",size:"md",className:"btnsave",id:"savebutton",type:"submit",children:"Save"})," "]})]})}})})}),(0,x.jsx)(u.JX,{md:4,children:(0,x.jsx)(u.Mo,{alt:"Card image cap",src:g,bottom:!0})})]})})]})})]})}},48197:function(){}}]);
//# sourceMappingURL=5890.aec984aa.chunk.js.map