(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{757:function(n,e,t){var o=t(758);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(21)(o,i);o.locals&&(n.exports=o.locals)},758:function(n,e,t){(e=n.exports=t(20)(!0)).push([n.i,".buttonDiv___2RpvP {\n  display: flex;\n}\n.buttonDiv___2RpvP button {\n  height: 2.25rem;\n  justify-content: center;\n  width: 7.5rem;\n}\n.forgotButtonDiv___sOYry {\n  flex-direction: column;\n}\n.forgotButtonDiv___sOYry .ant-form-item {\n  margin-bottom: 0;\n}\n.forgotDiv___3Rq2g {\n  height: 0.5rem;\n}\n.loginDiv___34mt0 {\n  justify-content: space-between;\n}\n.rememberForgotDiv___5d6PS {\n  display: flex;\n  justify-content: space-between;\n}\n.signUpDiv___1_F4e {\n  justify-content: end;\n}\n","",{version:3,sources:["/Users/jemery/dev/mybord/src/spa/landing/layout/loginPage/loginForm/loginFormContent/loginFormButtons/loginFormButtons.module.less"],names:[],mappings:"AAAA;EACE,cAAc;CACf;AACD;EACE,gBAAgB;EAChB,wBAAwB;EACxB,cAAc;CACf;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,+BAA+B;CAChC;AACD;EACE,cAAc;EACd,+BAA+B;CAChC;AACD;EACE,qBAAqB;CACtB",file:"loginFormButtons.module.less",sourcesContent:[".buttonDiv {\n  display: flex;\n}\n.buttonDiv button {\n  height: 2.25rem;\n  justify-content: center;\n  width: 7.5rem;\n}\n.forgotButtonDiv {\n  flex-direction: column;\n}\n.forgotButtonDiv :global .ant-form-item {\n  margin-bottom: 0;\n}\n.forgotDiv {\n  height: 0.5rem;\n}\n.loginDiv {\n  justify-content: space-between;\n}\n.rememberForgotDiv {\n  display: flex;\n  justify-content: space-between;\n}\n.signUpDiv {\n  justify-content: end;\n}\n"],sourceRoot:""}]),e.locals={buttonDiv:"buttonDiv___2RpvP",forgotButtonDiv:"forgotButtonDiv___sOYry",forgotDiv:"forgotDiv___3Rq2g",loginDiv:"loginDiv___34mt0",rememberForgotDiv:"rememberForgotDiv___5d6PS",signUpDiv:"signUpDiv___1_F4e"}},773:function(n,e,t){"use strict";var o=t(0),i=t(1014);t(774);e.a=function(n){var e=n.checked,t=n.label,r=void 0===t?null:t,l=n.onChange;return r?o.createElement(i.a,{checked:e,onChange:l},r):o.createElement(i.a,{checked:e,onChange:l})}},774:function(n,e,t){n.exports={black:"#565E5F",blue:"#00A6ED",green:"#7DCC93",lightGrey:"#A4AAAF",orange:"#F17D00",purple:"#31355A",red:"#E41245",transparentBlack:"#565E5fA6",transparentWhite:"#FFFFFFBF",white:"#FFF",yellow:"#FCC900"}},993:function(n,e,t){"use strict";t.r(e);var o=t(0),i=t(753),r=t(773),l=t(236),a=t(56),s=t(757);e.default=function(n){var e=n.form,t=Object(a.b)(),m=t.isAuthenticationWaiting,c=t.setFormStatus;return o.createElement(o.Fragment,null,o.createElement("div",{className:s.rememberForgotDiv},o.createElement(l.a,{fieldName:"remember-me",form:e},o.createElement(r.a,{label:"Remember Me"}))),o.createElement("div",{className:[s.buttonDiv,s.loginDiv].join(" ")},o.createElement(l.a,{fieldName:"login",form:e},o.createElement(i.a,{htmlType:"submit",isWaiting:m,label:"Login",onClick:function(){return c("login")}})),o.createElement(l.a,{fieldName:"sign-up",form:e},o.createElement(i.a,{htmlType:"button",label:"Sign Up",onClick:function(){return c("signUp")},type:"secondary"}))))}}}]);
//# sourceMappingURL=19.bundle.js.map