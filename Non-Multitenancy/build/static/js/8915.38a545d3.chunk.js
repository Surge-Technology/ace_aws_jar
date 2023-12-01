"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8915],{67502:function(e,s,n){n.r(s),n.d(s,{default:function(){return P}});var t=n(1413),a=n(29439),r=n(72791),i=n(18491),o=n(24021),c=n(57689),l=(n(90669),n(63263)),d=n(9085),u=(n(5462),n(84951)),m=n(21830),h=n.n(m),p=n(68746),g=n(5500),f=n(33362),w=n(17969),x=n.p+"static/media/pass1.da994f48923be2f12b46.png",v=n(14345),b=n.n(v),j=n(80184);b()(o);var P=function(){var e=(0,r.useState)([{password:"",confirmPassword:"",loader:!1}]),s=(0,a.Z)(e,2),n=s[0],m=s[1],v={password:n.password,confirmPassword:n.confirmPassword},b=(0,c.s0)(),P=(0,c.UO)();return(0,j.jsxs)(j.Fragment,{children:[n.loader?(0,j.jsx)(u.$j,{className:"loaderr",color:"primary",children:"Loading..."}):null,(0,j.jsx)(d.Ix,{}),(0,j.jsxs)("div",{class:"loginBackground",children:[(0,j.jsx)("img",{src:p,alt:"Login Image",className:"curvebackground"}),(0,j.jsx)("div",{class:"loginOuter",children:(0,j.jsxs)("div",{class:"loginInner",children:[(0,j.jsxs)(u.X2,{id:"rowstyle",children:[(0,j.jsx)(u.JX,{md:"6",xs:"12",children:(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"loginHeading",children:[(0,j.jsx)("h5",{children:"RESET PASSWORD"}),(0,j.jsx)("img",{src:f,className:"logostyles"}),(0,j.jsx)("span",{className:"textstyle1",children:"Your new password must be different from previous used passwords"})]}),(0,j.jsx)(i.J9,{initialValues:v,validationSchema:function(){return o.object().shape({password:o.string().required("Password is required").minLowercase(1,"Password must contain at least 1 lower case letter").minUppercase(1,"Password must contain at least 1 upper case letter").minNumbers(1,"Password must contain at least 1 number").minSymbols(1,"Password must contain at least 1 special character"),confirmPassword:o.string().required("Confirm Password is required").oneOf([o.ref("password"),null],"Confirm Password does not match")})},onSubmit:function(e){n.loader=!0,m((0,t.Z)({},n));var s={token:P.id,newPassword:e.password};l.Z.put("".concat("http://localhost:8080/api/v1/","auth/reset-Password"),s).then((function(e){200===e.status&&(d.Am.success("Your password successfully updated.",{theme:"colored"}),n.loader=!1,m((0,t.Z)({},n)),setTimeout((function(){b("/login")}),1e3))})).catch((function(e){n.loader=!1,m((0,t.Z)({},n)),h().fire({position:"center",icon:"warning",title:"Oops, something went wrong. Please try again later",showConfirmButton:!1,timer:500})}))},children:function(e){var s=e.values,n=e.handleChange,t=(e.handleSubmit,e.errors),a=e.touched,r=e.handleBlur;e.isValid,e.dirty;return(0,j.jsxs)(i.l0,{children:[(0,j.jsxs)(u.X2,{children:[(0,j.jsxs)("div",{className:"second-input",children:[(0,j.jsx)("img",{src:w,alt:"pass",className:"loginpass"}),(0,j.jsx)("input",{type:"password",placeholder:"Password",id:"loginname",name:"password",value:s.password,onChange:n,onBlur:r,className:t.password&&a.password?"input-error":null})]}),(0,j.jsx)(i.Bc,{name:"password",render:function(e){return(0,j.jsx)("div",{className:"errmsg",children:e})}}),(0,j.jsxs)("div",{className:"second-input",children:[(0,j.jsx)("img",{src:x,alt:"pass",className:"loginpass1"}),(0,j.jsx)("input",{placeholder:"Confirm Password",type:"password",name:"confirmPassword",id:"loginname",value:s.confirmPassword,onChange:n,onBlur:r,className:t.confirmPassword&&a.confirmPassword?"input-error":null})]}),(0,j.jsx)(i.Bc,{name:"confirmPassword",render:function(e){return(0,j.jsx)("div",{className:"errmsg",children:e})}}),(0,j.jsx)("div",{className:"login-button",children:(0,j.jsx)("button",{className:"button-login",type:"submit",children:"Reset Password"})})]}),(0,j.jsx)("br",{})]})}})]})}),(0,j.jsxs)(u.JX,{md:"6",xs:"12",children:[(0,j.jsx)(u.X2,{className:"textstyle",children:"Streamline your Taekwondo operations with us!"}),(0,j.jsx)("img",{src:g,alt:"Avatar",className:"babiespicstyles"})]})]}),(0,j.jsx)("br",{})," ",(0,j.jsx)("br",{})," ",(0,j.jsx)("br",{})," ",(0,j.jsx)("br",{}),(0,j.jsx)("center",{children:" ACE \xa9 2023 "})]})})]})]})}},14345:function(e){var s=function(e,s){return 1===s?e:"".concat(e,"s")},n=function(e){return null===e||void 0===e};function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,a=t||"${path} must contain at least ${length} lowercase "+s("letter",e);return this.test({name:"minLowercase",exclusive:!0,message:a,params:{length:e},test:function(s){return n(s)||(s.match(/[a-z]/g)||[]).length>=e}})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,a=t||"${path} must contain at least ${length} uppercase "+s("letter",e);return this.test({name:"minUppercase",exclusive:!0,message:a,params:{length:e},test:function(s){return n(s)||(s.match(/[A-Z]/g)||[]).length>=e}})}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,a=t||"${path} must contain at least ${length} "+s("number",e);return this.test({name:"minNumber",exclusive:!0,message:a,params:{length:e},test:function(s){return n(s)||(s.match(/[0-9]/g)||[]).length>=e}})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,a=t||"${path} must contain at least ${length} "+s("symbol",e);return this.test({name:"minSymbol",exclusive:!0,message:a,params:{length:e},test:function(s){return n(s)||(s.match(/[^a-zA-Z0-9\s]/g)||[]).length>=e}})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1?arguments[1]:void 0,a=t||"${path} must not contain sequences of more than ${length} repeated "+s("character",e);return this.test({name:"minRepeating",exclusive:!0,message:a,params:{length:e},test:function(s){return n(s)||!new RegExp("(.)\\1{".concat(e,",}")).test(s)}})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1?arguments[1]:void 0,a=t||"${path} must contain at least ${length} "+s("word",e),r=new RegExp("[a-zA-Z0-9]");return this.test({name:"minWords",exclusive:!0,message:a,params:{length:e},test:function(s){return n(s)||s.split(" ").filter((function(e){return!!e&&r.test(e)})).length>=e}})}function l(){return this.min(8).max(250).minLowercase(1).minUppercase(1).minNumbers(1).minSymbols(1)}e.exports=function(e){e.addMethod(e.string,"minLowercase",t),e.addMethod(e.string,"minUppercase",a),e.addMethod(e.string,"minNumber",r),e.addMethod(e.string,"minNumbers",r),e.addMethod(e.string,"minSymbol",i),e.addMethod(e.string,"minSymbols",i),e.addMethod(e.string,"minRepeating",o),e.addMethod(e.string,"minWords",c),e.addMethod(e.string,"password",l)}},90669:function(){},5500:function(e,s,n){e.exports=n.p+"static/media/babiespic.a2d53a797a7ba76491eb.png"},68746:function(e,s,n){e.exports=n.p+"static/media/loginbackk.f0a247aad410b09cac9d.png"},17969:function(e,s,n){e.exports=n.p+"static/media/pass.943d963297bc7639d8cb.png"},33362:function(e,s,n){e.exports=n.p+"static/media/surgelogo.0cbfd2d5e3e0f11259da.jpg"}}]);
//# sourceMappingURL=8915.38a545d3.chunk.js.map