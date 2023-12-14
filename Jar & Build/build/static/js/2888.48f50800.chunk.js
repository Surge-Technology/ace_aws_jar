"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2888],{52888:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var n=a(4942),s=a(1413),r=a(29439),i=a(72791),c=a(57689),d=a(84951),o=a(18491),l=a(24021),u=a(22976),m=a(77710),h=a(21830),p=a.n(h),g=a(72426),x=a.n(g),f=a(63263),j=a(9085),b=a(750),v=a(80184),y={reasonType:"",details:"",reasonTypeOptions:[{value:"Medical",label:"Medical"},{value:"Other",label:"Other"}]};function N(e){var t=(0,i.useState)(y),a=(0,r.Z)(t,2),n=a[0],s=(a[1],n.reasonType),m=(n.details,n.reasonTypeOptions),h=(0,c.s0)();return(0,i.useEffect)((function(){}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j.Ix,{}),(0,v.jsx)(o.J9,{enableReinitialize:!0,initialValues:n,validationSchema:function(){return l.object().shape({details:l.string().min(15,"Too Short!").required("Details is required"),reasonType:l.object().required("Reason is required")})},onSubmit:function(t){var a={reasons:t.reasonType.label,details:t.details};f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.post("".concat("http://18.216.55.32:8080/api/v1/api","/deactivation/student/").concat(e.studentId),a).then((function(e){j.Am.success("Student deactivated successfully",{theme:"colored"}),setTimeout((function(){h("/students")}),1e3)})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))},children:function(t){t.values;var a=t.setFieldValue,n=t.handleChange,r=t.handleBlur;t.handleSubmit,t.errors,t.touched;return(0,v.jsxs)(o.l0,{children:[(0,v.jsxs)(d.fe,{children:[(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:"Reason  "}),(0,v.jsx)(u.ZP,{name:"reasonType",defaultValue:s,onChange:function(e){a("reasonType",e)},options:m,onBlur:r}),(0,v.jsx)(o.Bc,{name:"reasonType",component:"div",className:"errmsg"})]})}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Details  "}),(0,v.jsx)(d.II,{type:"textarea",name:"details",placeholder:"Deactivation reason information...",rows:"4",onChange:n,onBlur:r}),(0,v.jsx)(o.Bc,{name:"details",component:"div",className:"errmsg"})]})})]}),(0,v.jsxs)(d.mz,{children:[(0,v.jsx)(d.zx,{type:"button",color:"secondary",size:"sm",onClick:function(){return e.callBackmodel("deactivation")},children:"Cancel"}),(0,v.jsx)(d.zx,{type:"submit",color:"primary",size:"sm",children:"Save"})]})]})}})]})}var Z={beltLabel:"",subLevel:"",beltLabelOptions:"",anticipated:!1,approved:!1,backendAnticipated:!1,backApproved:!1,subLevelsOptions:""};function S(e){var t=(0,i.useState)(Z),a=(0,r.Z)(t,2),c=a[0],h=a[1],g=c.beltLabel,x=c.subLevel,b=c.beltLabelOptions,y=c.anticipated,N=c.approved,S=c.backendAnticipated,I=c.backApproved,D=c.subLevelsOptions,_=function(e,t){h((function(a){return(0,s.Z)((0,s.Z)({},a),{},(0,n.Z)({},t,e.target.checked))}))};(0,i.useEffect)((function(){m.Z.get("level/student/".concat(e.studentId)).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{beltLabelOptions:t})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),m.Z.get("student/".concat(e.studentId,"/student-status-history")).then((function(e){var t=[];e.data.subLevel.map((function(e,a){t.push({value:e.id,label:e.name})})),m.Z.get("level/".concat(e.data.level.id,"/sub-level")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{subLevelsOptions:t})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),h((function(a){return(0,s.Z)((0,s.Z)({},a),{},{beltLabel:{value:e.data.level.id,label:e.data.level.name},subLevel:t[e.data.subLevel.length-1],anticipated:e.data.testingAnticipated,approved:e.data.testingApproved,backendAnticipated:e.data.testingAnticipated,backApproved:e.data.testingApproved})}))})).catch((function(e){p().fire("","Please try again later")}))}),[]);var X=function(e,t){"beltLabel"===e&&m.Z.get("level/".concat(t.value,"/sub-level")).then((function(e){var a=[];e.data.map((function(e,t){a.push({value:e.id,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{subLevelsOptions:a,beltLabel:t,subLevel:{},anticipated:!1,approved:!1})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),"subLevel"===e&&h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{subLevel:t})}))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j.Ix,{}),(0,v.jsx)(o.J9,{enableReinitialize:!0,initialValues:c,validationSchema:function(){return l.object().shape({subLevel:l.object().required("Sub Level is required"),beltLabel:l.object().required("Reason is required")})},onSubmit:function(t){if(!1===S&&!0===t.anticipated){f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.put("".concat("http://18.216.55.32:8080/api/v1/api","/student/").concat(e.studentId,"/student-status/testing-anticipated"),{}).then((function(t){j.Am.success("Anticipated Successfully",{theme:"colored"}),setTimeout((function(){e.callBackmodel("editStatus")}),1e3)})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))}if(!1===I&&!0===t.approved){f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.put("".concat("http://18.216.55.32:8080/api/v1/api","/student/").concat(e.studentId,"/student-status/testing-approved"),{}).then((function(t){j.Am.success("Approved Successfully",{theme:"colored"}),setTimeout((function(){e.callBackmodel("editStatus")}),1e3)})).catch((function(e){p().fire(e.response.data.message,"Please try again ")}))}if(!y&&!N){var a={testingAnticipated:y,testingApproved:N};f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.post("".concat("http://18.216.55.32:8080/api/v1/api","/level/").concat(t.beltLabel.value,"/sub-level/").concat(t.subLevel.value,"/student/").concat(e.studentId,"/student-status"),a).then((function(t){j.Am.success("Status Updated Successfully",{theme:"colored"}),setTimeout((function(){e.callBackmodel("editStatus")}),1e3)})).catch((function(e){p().fire(e.response.data.message,"Please try again ")}))}},children:function(t){t.values;var a=t.setFieldValue,n=(t.handleChange,t.handleBlur);t.handleSubmit,t.errors,t.touched;return(0,v.jsxs)(o.l0,{children:[(0,v.jsxs)(d.fe,{children:[(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:"Belt Levels  "}),(0,v.jsx)(u.ZP,{name:"beltLabel",value:g,onChange:function(e){a("beltLabel",e),X("beltLabel",e)},options:b,onBlur:n}),(0,v.jsx)(o.Bc,{name:"beltLabel",component:"div",className:"errmsg"})]})}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:"Sub Levels  "}),(0,v.jsx)(u.ZP,{name:"subLevel",value:x,onChange:function(e){a("subLevel",e),X("subLevel",e)},options:D,onBlur:n}),(0,v.jsx)(o.Bc,{name:"subLevel",component:"div",className:"errmsg"})]})}),(0,v.jsx)("hr",{}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{check:!0,children:(0,v.jsx)("span",{children:"Testing Anticipated"})}),(0,v.jsx)(d.II,{type:"checkbox",name:"anticipated",value:y,checked:y,onChange:function(e){return _(e,"anticipated")}})]})}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{check:!0,children:(0,v.jsx)("span",{children:"Testing Approved"})}),(0,v.jsx)(d.II,{type:"checkbox",name:"approved",value:N,checked:N,onChange:function(e){return _(e,"approved")}})]})})]}),(0,v.jsxs)(d.mz,{children:[(0,v.jsx)(d.zx,{type:"button",color:"secondary",size:"sm",onClick:function(){return e.callBackmodel("editStatus")},children:"Cancel"}),(0,v.jsx)(d.zx,{type:"submit",color:"primary",size:"sm",children:"Save"})]})]})}})]})}var I=a(30212),D={historyList:[]};function _(e){var t=(0,i.useState)(D),a=(0,r.Z)(t,2),n=a[0],c=a[1],o=n.historyList;(0,i.useEffect)((function(){m.Z.get("/student/".concat(e.studentId,"/contract")).then((function(e){var t=[];e.data.map((function(e){t.push({name:e.contractPromotion.name,membersAndFrequency:e.pricing.members+" & "+e.pricing.subscriptionFrequency.name,startDate:e.startDate,endDate:e.endDate,totalFee:e.pricing.total,fee:e.pricing.fee,discount:e.pricing.discount,creationDate:e.creationDate})})),t.pop(),c((function(e){return(0,s.Z)((0,s.Z)({},e),{},{historyList:t})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))}),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.fe,{children:(0,v.jsxs)(I.c8,{data:o,hover:!0,multiColumnSearch:!0,version:"4",search:!0,children:[(0,v.jsx)(I.bY,{width:"140",dataField:"name",dataSort:!0,isKey:!0,children:"Name"}),(0,v.jsx)(I.bY,{width:"200",dataField:"membersAndFrequency",dataSort:!0,children:"Members & Frequency"}),(0,v.jsx)(I.bY,{width:"100",dataField:"startDate",dataSort:!0,children:"Start Date"}),(0,v.jsx)(I.bY,{width:"100",dataField:"endDate",dataSort:!0,children:"End Date"}),(0,v.jsx)(I.bY,{width:"100",dataField:"totalFee",dataAlign:"right",dataSort:!0,children:"Total Fee"}),(0,v.jsx)(I.bY,{width:"100",dataField:"fee",dataAlign:"right",dataSort:!0,children:"Fee"}),(0,v.jsx)(I.bY,{width:"100",dataField:"discount",dataAlign:"center",dataSort:!0,children:"Discount"}),(0,v.jsx)(I.bY,{width:"140",dataField:"creationDate",dataFormat:function(e){return(0,v.jsx)(v.Fragment,{children:x()(e).format("MM/DD/YYYY")})},dataSort:!0,children:"Creation Date"})]})}),(0,v.jsx)(d.mz,{children:(0,v.jsx)(d.zx,{type:"button",color:"primary",size:"sm",onClick:function(){return e.callBackmodel("history")},children:" Back"})})]})}var X=a(39565),B=a(59513),C=a.n(B),F=["primary","success","warning","info","primary","success","warning","info"],L={firstName:"",lastName:"",birthDate:"",dateJoined:"",address:"",address2:"",city:"",state:"",zipcode:"",studentImageNameForApi:null,gfirstName:"",glastName:"",gaddress:"",gaddress2:"",gcity:"",gstate:"",gzipcode:"",email:"",phone:"",contractNameSelect:"",memberFrequency:"",fee:"",discount:"",totalFee:"",startDate:"",endDate:"",contractStatus:"",contractStatusOption:"",stateOptions:"",programNameOptions:"",sports:"",programName:"",batch:"",allBatchesOptions:"",sportsOptions:"",deactivationModalToggle:!1,editStatusModalToggle:!1,contractEditButton:!1,historyButtonClick:!1,paymentButtonClick:!1,contractNameOptions:"",contractMemberOptions:"",tenureLength:"",sameAsStudent:"",referBy:"",gender:"",addressId:"",parentId:"",gaddressId:"",loader:!1,studentStatusLevel:[],studentStatusSubLevel:[],contractId:"",chaqueId:"",cardId:"",contractImageName:"",notes:"",member:"",memberOptions:[],sportNprogramView:!1};function J(){var e=(0,i.useState)(L),t=(0,r.Z)(e,2),a=t[0],h=t[1],g=(0,i.useState)(""),y=(0,r.Z)(g,2),Z=y[0],I=y[1],D=(0,i.useState)("2"),B=(0,r.Z)(D,2),J=B[0],q=B[1],z=(a.firstName,a.lastName,a.birthDate,a.dateJoined,a.address,a.address2,a.city,a.state),A=(a.zipcode,a.studentImageNameForApi),k=(a.gfirstName,a.glastName,a.gaddress,a.gaddress2,a.gcity,a.gstate),P=(a.gzipcode,a.email,a.phone,a.contractNameSelect),O=a.memberFrequency,M=a.fee,Y=a.discount,T=a.totalFee,w=a.startDate,E=a.endDate,R=a.contractStatus,V=a.contractStatusOption,$=a.stateOptions,U=a.programNameOptions,H=a.sports,Q=a.programName,W=a.batch,G=a.allBatchesOptions,K=a.sportsOptions,ee=a.deactivationModalToggle,te=a.editStatusModalToggle,ae=a.contractEditButton,ne=a.historyButtonClick,se=a.paymentButtonClick,re=a.contractNameOptions,ie=a.contractMemberOptions,ce=a.tenureLength,de=a.sameAsStudent,oe=a.referBy,le=a.gender,ue=a.addressId,me=a.parentId,he=a.gaddressId,pe=a.loader,ge=a.studentStatusLevel,xe=a.studentStatusSubLevel,fe=a.contractId,je=a.chaqueId,be=a.cardId,ve=a.contractImageName,ye=(a.notes,a.member),Ne=a.memberOptions,Ze=(a.sportNprogramView,b),Se=(0,c.UO)(),Ie=(0,c.s0)(),De=function(e){q(J===e?"":e)},_e=function(e){var t=e.target,a=t.name,r=t.value;if("phone"===a){var i=r.replace(/[^0-9]/g,"").replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");h((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,n.Z)({},a,i))}))}else h((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,n.Z)({},a,r))}))},Xe=function(e,t){"sports"===t&&m.Z.get("sports/".concat(e.value,"/program-name")).then((function(t){var a=[];t.data.map((function(e,t){a.push({value:e.id,label:e.name})})),h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{programNameOptions:a,sports:e,programName:"",batch:""})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),"programName"===t&&m.Z.get("program-name/".concat(e.value,"/batch")).then((function(t){var a=[];t.data.map((function(e,t){a.push({value:e.id,label:e.name})})),h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{allBatchesOptions:a,programName:e})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),"batch"===t&&h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{batch:e})}))},Be=function(){h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{contractEditButton:!ae})}))};(0,i.useEffect)((function(){Ce(),m.Z.get("states").then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{stateOptions:t})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),m.Z.get("contract-promotions/contract").then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{contractNameOptions:t,startDate:x()().format("YYYY-MM-DD")})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),m.Z.get("contract-status/contract").then((function(e){var t=[];console.log("Status",e),e.data.map((function(e,a){t.push({value:e.name,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{contractStatusOption:t})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),m.Z.get("sport").then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{sportsOptions:t})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))}),[]);var Ce=function(){m.Z.get("student/".concat(Se.id)).then((function(e){h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{firstName:e.data.firstName,lastName:e.data.lastName,birthDate:x()(e.data.dob).format("MM/DD/YYYY"),dateJoined:x()(e.data.creationDate).format("MM/DD/YYYY"),address:e.data.address.addressLine1,address2:e.data.address.addressLine2,city:e.data.address.city,state:{value:e.data.address.state.id,label:e.data.address.state.name},zipcode:e.data.address.pinCode,gfirstName:e.data.parent.firstName,glastName:e.data.parent.lastName,gcity:e.data.parent.address.city,gzipcode:e.data.parent.address.pinCode,gaddress:e.data.parent.address.addressLine1,gaddress2:e.data.parent.address.addressLine2,gstate:{value:e.data.parent.address.state.id,label:e.data.parent.address.state.name},email:e.data.email,phone:e.data.phone,sports:{value:e.data.sports.id,label:e.data.sports.name},programName:{value:e.data.program.id,label:e.data.program.name},batch:{value:e.data.batch.id,label:e.data.batch.name},contractNameSelect:{value:e.data.contract.contractPromotion.id,label:e.data.contract.contractPromotion.name},memberFrequency:{value:e.data.contract.pricing.subscriptionFrequency.id,label:e.data.contract.pricing.subscriptionFrequency.name},fee:parseInt(e.data.contract.pricing.fee),discount:e.data.contract.pricing.discount,totalFee:e.data.contract.pricing.total,startDate:e.data.contract.startDate,endDate:e.data.contract.endDate,contractStatus:{value:e.data.contract.contractStatus,label:e.data.contract.contractStatus},tenureLength:e.data.contract.contractPromotion.tenure.name.slice(0,2),sameAsStudent:e.data.sameAsStudent,referBy:e.data.referBy,gender:e.data.gender,studentImageNameForApi:e.data.photo,addressId:e.data.address.id,parentId:e.data.parent.id,gaddressId:e.data.parent.address.id,studentStatusLevel:null===e.data.studentCurrentBeltStatus?[]:e.data.studentCurrentBeltStatus.level,studentStatusSubLevel:null===e.data.studentCurrentBeltStatus?[]:e.data.studentCurrentBeltStatus.subLevel,contractId:e.data.contract.id,contractImageName:e.data.contract.attachment,notes:e.data.notes,member:{value:e.data.contract.pricing.id,label:e.data.contract.pricing.members}})})),Xe({value:e.data.sports.id,label:e.data.sports.name},"sports"),Xe({value:e.data.program.id,label:e.data.program.name},"programName"),m.Z.get("contract-promotions/".concat(e.data.contract.contractPromotion.id,"/members")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.members})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{memberOptions:t})}))})).catch((function(e){})),setTimeout((function(){Xe({value:e.data.batch.id,label:e.data.batch.name},"batch"),m.Z.get("contract-promotion/".concat(e.data.contract.contractPromotion.id,"/members/").concat(e.data.contract.pricing.members,"/subscription-frequency")).then((function(e){var t=[];e.data.map((function(e,a){t.push({value:e.id,label:e.name})})),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{contractMemberOptions:t})}))})).catch((function(e){})),m.Z.get("".concat("http://18.216.55.32:8080/api/v1/api","/sports/all")).then((function(e){h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{sportNprogramView:e.data[0]?e.data[0].view:null})})),Xe({value:e.data[0]&&e.data[0].programName[0]?e.data[0].programName[0].id:null,label:e.data[0]&&e.data[0].programName[0]?e.data[0].programName[0].name:null},"programName")})).catch((function(e){p().fire(e.response.data.message,"Please try again ")}))}),2e3),I(""===e.data.photo?"":"http://18.216.55.32:8080/api/v1/auth/student/image/"+e.data.photo)})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))},Fe=function(e){"deactivation"===e&&h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{deactivationModalToggle:!ee})})),"editStatus"===e&&(h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{editStatusModalToggle:!te})})),Ce()),"history"===e&&h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{historyButtonClick:!ne})})),"payment"===e&&h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{paymentButtonClick:!se})}))},Le=function(e){Fe(e)},Je=function(e,t){"getMembers"===t&&m.Z.get("contract-promotions/".concat(e.value,"/members")).then((function(t){var a=[];t.data.map((function(e,t){a.push({value:e.id,label:e.members})})),h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{memberOptions:a,contractNameSelect:e,memberFrequency:{},fee:"",totalFee:"",discount:""})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),"getFrequency"===t&&m.Z.get("contract-promotion/".concat(P.value,"/members/").concat(e.label,"/subscription-frequency")).then((function(t){var a=[];t.data.map((function(e,t){a.push({value:e.id,label:e.name})})),h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{contractMemberOptions:a,member:e,memberFrequency:{},fee:"",totalFee:"",discount:""})}))})).catch((function(e){})),"getFee"===t&&m.Z.get("contract-promotion/".concat(P.value)).then((function(t){var a=t.data.tenure.name.slice(0,2),n=parseInt(a),r=(new Date).setUTCHours(0,0,0,0),i=new Date(r),c=i.getDate()-1;i.setDate(c);var d=i.setMonth(i.getMonth()+n),o=new Date(d),l=x()(o).format("MM/DD/YYYY");t.data.pricing.map((function(a,r){a.subscriptionFrequency.id===e.value&&h((function(r){return(0,s.Z)((0,s.Z)({},r),{},{fee:t.data.basePrice+a.fee,totalFee:a.total,discount:a.discount,tenureLength:n,endDate:l,memberFrequency:e})}))}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")})),h("contractStatus"===t?function(t){return(0,s.Z)((0,s.Z)({},t),{},{contractStatus:e})}:function(a){return(0,s.Z)((0,s.Z)({},a),{},(0,n.Z)({},t,e))})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j.Ix,{}),pe?(0,v.jsx)(d.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,v.jsxs)(d.u_,{isOpen:ee,toggle:function(){return Fe("deactivation")},centered:!0,children:[(0,v.jsx)(d.xB,{className:"cardbg",toggle:function(){return Fe("deactivation")},children:"Deactivation"}),(0,v.jsx)(N,{studentId:Se.id,callBackmodel:Le})]}),(0,v.jsxs)(d.u_,{isOpen:te,toggle:function(){return Fe("editStatus")},centered:!0,children:[(0,v.jsx)(d.xB,{className:"cardbg",toggle:function(){return Fe("editStatus")},children:"Edit Status"}),(0,v.jsx)(S,{studentId:Se.id,callBackmodel:Le})]}),(0,v.jsxs)(d.u_,{isOpen:ne,toggle:function(){return Fe("history")},size:"lg",centered:!0,children:[(0,v.jsx)(d.xB,{className:"cardbg",toggle:function(){return Fe("history")},children:"History"}),(0,v.jsx)(_,{studentId:Se.id,callBackmodel:Le})]}),(0,v.jsxs)(d.u_,{isOpen:se,toggle:function(){return Fe("payment")},centered:!0,children:[(0,v.jsx)(d.xB,{className:"cardbg",toggle:function(){return Fe("payment")},children:"Payment"}),(0,v.jsx)(X.Z,{sendData:Le,contractFee:T,studentId:Se.id,contractDetails:{contractImageName:ve,contractId:fe,member:ye,cardId:be,chaqueId:je,contractPromotion:P,contractStatus:R,fee:M,discount:Y,totalFee:T,membersAndFrequency:O,startDate:w,endDate:E}})]}),(0,v.jsx)(d.Zb,{children:(0,v.jsxs)(d.eW,{className:"cardbg",children:[(0,v.jsxs)(d.X2,{children:[(0,v.jsx)(d.JX,{children:(0,v.jsx)("h5",{children:(0,v.jsx)("strong",{children:"Edit Student"})})}),(0,v.jsx)(d.JX,{children:(0,v.jsx)(d.zx,{type:"button",color:"primary",size:"sm",className:"floatg",onClick:function(){return Fe("deactivation")},children:" Deactivate Student"})})]}),(0,v.jsx)("div",{className:"height15"}),(0,v.jsx)(o.J9,{enableReinitialize:!0,initialValues:a,validationSchema:function(){return l.object().shape({firstName:l.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed ").required("First Name is required"),lastName:l.string().matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed ").required("Last Name is required"),address:l.string().required("Address is required"),city:l.string().required("City is required"),state:l.object().required("State is required"),gfirstName:l.string().required("First Name is required"),glastName:l.string().required("Last Name is required"),gaddress:l.string().required("Address is required"),gcity:l.string().required("City is required"),gstate:l.object().required("State is required"),gzipcode:l.string().min(5,"Must be exactly 5 digits").max(5,"Must be exactly 5 digits").required("Zipcode is required"),email:l.string().required("Email is required").email("Invalid mail address"),phone:l.string().min(10,"Minimum 10 digits!").max(14,"Maximum 14 digits!").required("Phone is required"),birthDate:l.string().nullable().required("Birth Date is required").test("DOB","Age must be at least 5 years",(function(e){return x()().diff(x()(e),"years")>5})),zipcode:l.string().min(5,"Must be exactly 5 digits").max(5,"Must be exactly 5 digits").required("Zipcode is required")})},onSubmit:function(e){h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loader:!0})}));var t={firstName:e.firstName,lastName:e.lastName,dob:null===e.birthDate?null:x()(e.birthDate).format("YYYY-MM-DD"),gender:le,photo:A,sameAsStudent:de,phone:e.phone,email:e.email,notes:e.notes,referBy:oe,address:{id:ue,addressLine1:e.address,addressLine2:e.address2,pinCode:e.zipcode,city:e.city,state:{id:e.state.value,name:e.state.label}},parent:{id:me,firstName:e.gfirstName,lastName:e.glastName,address:{id:he,addressLine1:e.gaddress,addressLine2:e.gaddress2,pinCode:e.gzipcode,city:e.gcity,state:{id:e.gstate.value,name:e.gstate.label}}}};f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.put("".concat("http://18.216.55.32:8080/api/v1/api","/sports/").concat(e.sports.value,"/program/").concat(e.programName.value,"/batch/").concat(e.batch.value,"/student/").concat(Se.id,"/update-student"),t).then((function(e){j.Am.success("Student updated successfully",{theme:"colored"}),setTimeout((function(){Ie("/studentTabs/2")}),1e3),h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loader:!1})}))})).catch((function(e){h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loader:!1})})),p().fire(e.response.data.message,"Please try again ")}))},children:function(e){var t=e.values,a=e.setFieldValue,n=e.handleChange,r=e.handleSubmit,i=e.handleBlur;e.errors,e.touched;return(0,v.jsx)(o.l0,{onSubmit:r,children:(0,v.jsxs)(d.Zb,{className:"cardbgw",children:[(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{md:6,children:[(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" First Name  "}),(0,v.jsx)(d.II,{name:"firstName",type:"text",value:t.firstName,onBlur:i,onChange:n}),(0,v.jsx)(o.Bc,{name:"firstName",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Last Name  "}),(0,v.jsx)(d.II,{name:"lastName",type:"text",value:t.lastName,onBlur:i,onChange:n}),(0,v.jsx)(o.Bc,{name:"lastName",component:"div",className:"errmsg"})]})]}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Address  "}),(0,v.jsx)(d.II,{name:"address",type:"text",value:t.address,onBlur:i,onChange:n}),(0,v.jsx)(o.Bc,{name:"address",component:"div",className:"errmsg"})]})}),(0,v.jsx)("div",{className:"height15"}),(0,v.jsx)(d.X2,{children:(0,v.jsx)(d.JX,{children:(0,v.jsx)(d.II,{name:"address2",type:"text",value:t.address2,onBlur:i,onChange:n})})}),(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{md:6,children:[(0,v.jsx)(d.__,{children:" City  "}),(0,v.jsx)(d.II,{name:"city",type:"text",value:t.city,onBlur:i,onChange:n}),(0,v.jsx)(o.Bc,{name:"city",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{md:3,children:[(0,v.jsx)(d.__,{children:" State  "}),(0,v.jsx)(u.ZP,{name:"state",value:z||"Select",onChange:function(e){a("state",e),Je(e,"state")},options:$}),(0,v.jsx)(o.Bc,{name:"state",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{md:3,children:[(0,v.jsx)(d.__,{children:" Zipcode  "}),(0,v.jsx)(d.II,{name:"zipcode",type:"number",value:t.zipcode,onBlur:i,onChange:n}),(0,v.jsx)(o.Bc,{name:"zipcode",component:"div",className:"errmsg"})]})]}),(0,v.jsx)("div",{className:"height15"}),(0,v.jsx)(d.X2,{children:(0,v.jsx)(d.JX,{children:(0,v.jsxs)(d.UQ,{open:J,toggle:De,children:[(0,v.jsxs)(d.Qd,{children:[(0,v.jsx)(d._m,{targetId:"1",children:(0,v.jsx)(d.__,{children:"Guardian Information"})}),(0,v.jsxs)(d.X1,{accordionId:"1",children:[(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" First Name  "}),(0,v.jsx)(d.II,{name:"gfirstName",type:"text",value:t.gfirstName,onChange:n}),(0,v.jsx)(o.Bc,{name:"gfirstName",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Last Name  "}),(0,v.jsx)(d.II,{name:"glastName",type:"text",value:t.glastName,onChange:n}),(0,v.jsx)(o.Bc,{name:"glastName",component:"div",className:"errmsg"})]})]}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Address  "}),(0,v.jsx)(d.II,{name:"gaddress",type:"text",value:t.gaddress,onChange:n}),(0,v.jsx)(o.Bc,{name:"gaddress",component:"div",className:"errmsg"})]})}),(0,v.jsx)("div",{className:"height15"}),(0,v.jsx)(d.X2,{children:(0,v.jsx)(d.JX,{children:(0,v.jsx)(d.II,{name:"gaddress2",type:"text",value:t.gaddress2,onChange:n})})}),(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{md:6,children:[(0,v.jsx)(d.__,{children:" City  "}),(0,v.jsx)(d.II,{name:"gcity",type:"text",value:t.gcity,onChange:n}),(0,v.jsx)(o.Bc,{name:"gcity",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{md:3,children:[(0,v.jsx)(d.__,{children:" State  "}),(0,v.jsx)(u.ZP,{name:"gstate",value:k||"Select",onChange:function(e){a("gstate",e),Je(e,"gstate")},options:$}),(0,v.jsx)(o.Bc,{name:"gstate",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{md:3,children:[(0,v.jsx)(d.__,{children:" Zipcode  "}),(0,v.jsx)(d.II,{name:"gzipcode",type:"number",value:t.gzipcode,onChange:n}),(0,v.jsx)(o.Bc,{name:"gzipcode",component:"div",className:"errmsg"})]})]}),(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Email  "}),(0,v.jsx)(d.II,{name:"email",type:"email",value:t.email,onChange:n}),(0,v.jsx)(o.Bc,{name:"email",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Phone  "}),(0,v.jsx)(d.II,{name:"phone",type:"text",value:t.phone,onChange:_e}),(0,v.jsx)(o.Bc,{name:"phone",component:"div",className:"errmsg"})]})]})]})]}),(0,v.jsxs)(d.Qd,{children:[(0,v.jsx)(d._m,{targetId:"2",children:(0,v.jsx)(d.__,{children:"Contract Information"})}),(0,v.jsxs)(d.X1,{accordionId:"2",children:[(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.zx,{type:"button",color:"primary",size:"sm",className:"floatg",onClick:Be,children:"Edit"}),(0,v.jsx)(d.zx,{type:"button",color:"primary",size:"sm",className:"floatgM",onClick:function(){return Fe("history")},children:"History"}),ae?(0,v.jsx)(d.zx,{type:"button",color:"primary",size:"sm",className:"floatgM",onClick:function(){return Fe("payment")},children:"Payment Change"}):null]})}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Name"}),(0,v.jsx)(u.ZP,{name:"contractNameSelect",isDisabled:!ae,value:P||"Select",onChange:function(e){a("contractNameSelect",e),Je(e,"getMembers")},options:re})]})}),(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{md:3,children:[(0,v.jsx)(d.__,{children:" Member "}),(0,v.jsx)(u.ZP,{name:"member",isDisabled:!ae,value:ye,onChange:function(e){a("member",e),Je(e,"getFrequency")},options:Ne}),(0,v.jsx)(o.Bc,{name:"member",component:"div",className:"errmsg"})]}),(0,v.jsxs)(d.JX,{md:5,children:[(0,v.jsx)(d.__,{children:"Frequency"}),(0,v.jsx)(u.ZP,{name:"memberFrequency",isDisabled:!ae,value:O||"Select",onChange:function(e){a("memberFrequency",e),Je(e,"getFee")},options:ie})]}),(0,v.jsxs)(d.JX,{md:4,children:[(0,v.jsx)(d.__,{children:" Base Fee $ "}),(0,v.jsx)(d.II,{name:"fee",type:"number",placeholder:"$",value:t.fee,onChange:n,disabled:!0})]})]}),(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{md:4,children:[(0,v.jsx)(d.__,{children:" Discount % "}),(0,v.jsx)(d.II,{name:"discount",type:"number",value:t.discount,onChange:n,placeholder:"%",disabled:!0})]}),(0,v.jsxs)(d.JX,{md:4,children:[(0,v.jsx)(d.__,{children:" Total Fee $ "}),(0,v.jsx)(d.II,{name:"totalFee",type:"number",value:t.totalFee,onChange:n,placeholder:"$",disabled:!0})]}),(0,v.jsxs)(d.JX,{md:4,children:[(0,v.jsx)(d.__,{children:" Status "}),(0,v.jsx)(u.ZP,{name:"contractStatus",isDisabled:!ae,value:R||"Select",onChange:function(e){a("contractStatus",e),Je(e,"contractStatus")},options:V})]})]}),(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{md:4,children:[(0,v.jsx)(d.__,{children:" Start Date  "}),(0,v.jsx)(C(),{name:"startDate",selected:t.startDate?new Date(t.startDate):null,onChange:function(e){a("startDate",e),function(e){var t=x()(e).format("YYYY-MM-DD"),a=x()(t).add(ce,"months").calendar(),n=x()(a).subtract(1,"day"),r=x()(n).format("MM/DD/YYYY");h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{startDate:t,endDate:r})}))}(e)},onBlur:i,placeholderText:"mm/dd/yyyy",disabled:!ae})]}),(0,v.jsxs)(d.JX,{md:4,children:[(0,v.jsx)(d.__,{children:" End Date  "}),(0,v.jsx)(C(),{name:"endDate",selected:t.endDate?new Date(t.endDate):null,onChange:function(e){a("endDate",e)},onBlur:i,placeholderText:"mm/dd/yyyy",disabled:!0})]}),(0,v.jsxs)(d.JX,{md:4,children:[(0,v.jsxs)("span",{className:"btn btn-primary btn-file",style:{marginTop:"12px"},children:["Contract Upload ",(0,v.jsx)("input",{type:"file",onChange:function(e){return function(e){var t=new FormData;t.append("image",e.target.files[0]),f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.post("".concat("http://18.216.55.32:8080/api/v1/api","/files/fileimage/upload"),t).then((function(t){h((function(a){return(0,s.Z)((0,s.Z)({},a),{},{contractImageName:t.data.imageName,contractData:e})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))}(e)}})]}),(0,v.jsxs)("span",{children:[" ",ve?(0,v.jsx)("b",{style:{color:"green"},children:"Uploaded"}):null]})]})]})]})]})]})})})]}),(0,v.jsxs)(d.JX,{md:3,children:[(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Birth Date  "}),(0,v.jsx)(C(),{name:"birthDate",selected:t.birthDate?new Date(t.birthDate):null,onChange:function(e){a("birthDate",e)},onBlur:i,placeholderText:"mm/dd/yyyy"}),(0,v.jsx)(o.Bc,{name:"birthDate",component:"div",className:"errmsg"})]})}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)("div",{className:"height15"}),(0,v.jsx)(d.Zb,{children:(0,v.jsxs)(d.eW,{children:[(0,v.jsxs)(d.X2,{children:[(0,v.jsxs)(d.JX,{children:[(0,v.jsx)("h5",{children:(0,v.jsx)("strong",{children:"Status"})})," "]}),(0,v.jsx)(d.JX,{children:(0,v.jsx)(d.zx,{type:"button",color:"primary",size:"sm",className:"floatg",onClick:function(){return Fe("editStatus")},children:"Edit"})})]}),xe.map((function(e,t){return(0,v.jsxs)("span",{children:[0===t?(0,v.jsx)(d.Ct,{className:"badgesize",color:F[0],children:ge.name}):null,(0,v.jsx)(d.Ct,{className:"badgesize",color:F[t+1],children:e.name})]},t)}))]})})]})}),(0,v.jsx)(d.X2,{children:(0,v.jsx)(d.JX,{children:(0,v.jsx)(d.Zb,{children:(0,v.jsxs)(d.eW,{children:[t.sportNprogramView?(0,v.jsxs)(v.Fragment,{children:["  ",(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)("h5",{children:(0,v.jsx)("strong",{children:"Sports"})}),(0,v.jsx)(u.ZP,{name:"sports",value:H||"Select",onChange:function(e){a("sports",e),Xe(e,"sports")},options:K})]})}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Program Name"}),(0,v.jsx)(u.ZP,{name:"programName",value:Q||"Select",onChange:function(e){a("programName",e),Xe(e,"programName")},options:U})]})})]}):null,(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Batch "}),(0,v.jsx)(u.ZP,{name:"batch",value:W||"Select",onChange:function(e){a("batch",e),Xe(e,"batch")},options:G})]})})]})})})})]}),(0,v.jsxs)(d.JX,{md:3,children:[(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Date Joined  "}),(0,v.jsx)(C(),{name:"dateJoined",selected:t.dateJoined?new Date(t.dateJoined):null,onChange:function(e){a("dateJoined",e)},onBlur:i,placeholderText:"mm/dd/yyyy",disabled:!0})]})}),(0,v.jsx)(d.X2,{children:(0,v.jsx)(d.JX,{children:(0,v.jsxs)("div",{className:"card",style:{marginTop:"16px"},children:[(0,v.jsx)("img",{src:""!=Z?Z:Ze,style:{width:"100%",height:"250px",objectFit:"cover",margin:"4px 0 2px",borderRadius:"50%"}}),(0,v.jsx)("div",{className:"card-footer cardimgv",children:(0,v.jsxs)(d.X2,{children:[(0,v.jsx)(d.JX,{md:6,children:""!=Z?(0,v.jsx)(d.zx,{type:"button",color:"primary",className:"floatl",onClick:function(e){return I(""),void m.Z.delete("/student/image/".concat(A)).then((function(e){h((function(e){return(0,s.Z)((0,s.Z)({},e),{},{studentImageNameForApi:null})}))})).catch((function(e){p().fire(err.response.data.message,"Please try again later")}))},children:"Remove "}):null}),(0,v.jsx)(d.JX,{md:6,children:""!=Z?null:(0,v.jsxs)("span",{className:"btn btn-primary btn-file",children:["Upload",(0,v.jsx)("input",{type:"file",accept:".jpg, .jpeg, .png",onChange:function(e){return function(e){var t=URL.createObjectURL(e.target.files[0]);I(t);var a=new FormData;a.append("image",e.target.files[0]),f.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),f.Z.post("".concat("http://18.216.55.32:8080/api/v1/api","/student/image/upload"),a).then((function(e){h((function(t){return(0,s.Z)((0,s.Z)({},t),{},{studentImageNameForApi:e.data.imageName})}))})).catch((function(e){p().fire(e.response.data.message,"Please try again later")}))}(e)}})]})})]})})]})})}),(0,v.jsx)(d.X2,{children:(0,v.jsxs)(d.JX,{children:[(0,v.jsx)(d.__,{children:" Notes  "}),(0,v.jsx)(d.II,{type:"textarea",name:"notes",value:t.notes,onBlur:i,onChange:n,placeholder:"Student extra information...",rows:"8"})]})})]})]}),(0,v.jsx)("div",{className:"height15"}),(0,v.jsxs)(d.iR,{children:[(0,v.jsx)(d.zx,{type:"button",color:"secondary",size:"sm",onClick:function(){return Ie("/studentTabs/2")},className:"floatg",children:"Cancel"}),(0,v.jsx)(d.zx,{type:"submit",color:"primary",size:"sm",className:"floatgM",children:"Save"})]})]})})}})]})})]})}},750:function(e,t,a){e.exports=a.p+"static/media/student.b24291d6e5244a79c75d.jpg"}}]);
//# sourceMappingURL=2888.48f50800.chunk.js.map