(this["webpackJsonploan-prediction"]=this["webpackJsonploan-prediction"]||[]).push([[0],{175:function(e,t,a){},176:function(e,t,a){},326:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),s=a.n(r),c=a(6),i=a.n(c),l=(a(175),a(24)),o=a(25),j=a(27),d=a(26),b=a(59),u=a(19),h=a(343),p=(a(176),a(328)),O=p.a.Header,x=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:e.props.collapsed},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(O,{style:{background:"#fff",padding:0,height:100}})}}]),a}(s.a.Component),f=a(12),m=a.n(f),g=p.a.Footer,y=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(g,{style:{textAlign:"center"},children:["\xa9",m()().year()," Adalabs Africa"]})}}]),a}(s.a.Component),v=a(341),k=a(11),D=p.a.Sider,w=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:e.props.collapsed},e.handleClick=function(t){var a=t.key;"1"===a?(e.setState(),e.props.history.push("/")):"2"===a?e.props.history.push("/About"):e.props.history.push("/predictmyloan")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(D,{breakpoint:"md",collapsedWidth:"0",onCollapse:function(e,t){console.log(e,t)},children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsxs)(v.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],selectedKeys:this.props.selectedKeys,onClick:function(t){return e.handleClick(t)},children:[Object(n.jsxs)(v.a.Item,{children:[Object(n.jsx)(k.a,{type:"credit-card"}),Object(n.jsx)("span",{className:"nav-text",children:"Home"})]},"1"),Object(n.jsxs)(v.a.Item,{children:[Object(n.jsx)(k.a,{type:"profile"}),Object(n.jsx)("span",{className:"nav-text",children:"About"})]},"2"),Object(n.jsxs)(v.a.Item,{children:[Object(n.jsx)(k.a,{type:"dollar"}),Object(n.jsx)("span",{className:"nav-text",children:"Predict Loan"})]},"3")]})]})}}]),a}(s.a.Component),C=Object(u.f)(w),A=p.a.Content,L=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={confirmDirty:!1,autoCompleteResult:[],collapsed:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(C,{selectedKeys:["1"]}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(A,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280,paddingTop:40},children:Object(n.jsx)("div",{style:{padding:24,background:"#fff",minHeight:360},children:Object(n.jsx)("p",{children:"You are in Home"})})}),Object(n.jsx)(y,{})]})]})}}]),a}(s.a.Component),S=Object(u.f)(L),F=p.a.Content,T=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={confirmDirty:!1,autoCompleteResult:[],collapsed:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(C,{selectedKeys:["2"]}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(F,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280,paddingTop:40},children:Object(n.jsx)("div",{style:{padding:24,background:"#fff",minHeight:360},children:Object(n.jsx)("p",{children:"You are in about"})})}),Object(n.jsx)(y,{})]})]})}}]),a}(s.a.Component),I=Object(u.f)(T),E=a(82),P=a.n(E),R=a(108),H=a(135),N=a(336),Y=a(337),M=a(339),q=a(342),z=a(344),W=a(53),K=a(329),B=a(330),G=a(165),V=a(338),J=a(335),_=a(340),U=a(334),$=a(331),Q=a(332),X=a(333),Z={url:{API_URL:"https://cors-anywhere.herokuapp.com/https://loan-pred-back.herokuapp.com"}},ee=N.a.Item,te=p.a.Content,ae=Y.a.Option,ne=Object(n.jsx)(k.a,{type:"loading",style:{fontSize:24},spin:!0});console.log(Z);var re=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={confirmDirty:!1,autoCompleteResult:[],collapsed:!1,loading:!1,modalVisible:!1,serverError:!1,loanData:{}},e.handleSubmit=function(){var t=Object(H.a)(P.a.mark((function t(a){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.props.form.validateFieldsAndScroll(function(){var t=Object(H.a)(P.a.mark((function t(a,n){var r,s,c,i,l,o,j,d,b,u;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=28;break}return r=m()().endOf("day").diff(n.DateOfBirth,"years"),s=Object(R.a)(Object(R.a)({},n),{},{Age:r}),e.setState({loading:!0}),t.prev=4,t.next=7,fetch("".concat(Z.url.API_URL,"/api/predictCreditAmount/CreditLoanStatus"),{method:"POST",headers:{Authorization:e.props.token,"Content-Type":"application/json"},body:JSON.stringify(Object(R.a)({},s))});case 7:if(c=t.sent,console.log(c),!c.ok){t.next=22;break}return t.next=12,c.json();case 12:i=t.sent,l=i.awardedLoan,o=i.LoanAmount,j=i.maxLoanAmountEligible,d=i.loanInterest,b=i.totalLoanToBeRepaid,u={awardedLoan:l,LoanAmount:o,maxLoanAmountEligible:j,loanInterest:d,totalLoanToBeRepaid:b},e.setState({loanData:u,loading:!1,modalVisible:!0,serverError:!1}),t.next=23;break;case 22:e.setState({loading:!1,modalVisible:!0,serverError:!0});case 23:t.next=28;break;case 25:t.prev=25,t.t0=t.catch(4),e.setState({loading:!1,modalVisible:!0,serverError:!0});case 28:case"end":return t.stop()}}),t,null,[[4,25]])})));return function(e,a){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onOk=function(){e.setState({modalVisible:!1})},e.onCancel=function(){e.onOk()},e.handleConfirmBlur=function(t){var a=t.target.value;e.setState({confirmDirty:e.state.confirmDirty||!!a})},e.disabledDate=function(e){return e&&e>m()().endOf("day").subtract(18,"years")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.form,a=this.state;return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(C,{selectedKeys:["3"]}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(te,{style:{margin:"24px 16px 0",padding:24,background:"#fff",minHeight:280,paddingTop:40},children:Object(n.jsxs)("div",{style:{background:"#fff",minHeight:360},children:[Object(n.jsxs)("div",{type:"flex",align:"middle",justify:"center",children:[Object(n.jsx)("h1",{children:"Loan Eligibility Prediction"}),Object(n.jsx)("p",{className:"text-muted",children:"Kindly Fill all the fields below and submit to get the loan amount you are eligile to be awarded."})]}),Object(n.jsx)(M.a,{centered:!0,style:{top:20},visible:this.state.modalVisible,onOk:function(){return e.onOk(!1)},onCancel:function(){return e.onCancel(!1)},children:a.serverError?Object(n.jsx)(q.a,{status:"500",subTitle:"Sorry, try again later."}):Object(n.jsx)(n.Fragment,{children:a.loanData.awardedLoan?Object(n.jsx)(q.a,{status:"success",title:"Loan application accepted",subTitle:"",extra:[Object(n.jsxs)(z.a,{title:"Loan Details",children:[Object(n.jsxs)(z.a.Item,{label:"Loan Awarded",children:[Object(n.jsx)("i",{children:"Ksh"})," ",Object(n.jsx)("strong",{children:a.loanData.LoanAmount})]}),Object(n.jsxs)(z.a.Item,{label:"Interest",children:[Object(n.jsx)("i",{children:"Ksh"})," ",Object(n.jsx)("strong",{children:a.loanData.loanInterest})]}),Object(n.jsxs)(z.a.Item,{label:"Total Repayable",children:[Object(n.jsx)("i",{children:"Ksh"})," ",Object(n.jsxs)("strong",{children:[" ",a.loanData.totalLoanToBeRepaid]})]})]})]}):Object(n.jsx)(n.Fragment,{children:a.loanData.maxLoanAmountEligible>0?Object(n.jsx)(q.a,{status:"warning",title:"Loan application denied",subTitle:"The amount you applied was more than your limit",extra:[Object(n.jsx)(z.a,{children:Object(n.jsxs)(z.a.Item,{label:"Your loan limit is",children:[Object(n.jsx)("i",{children:"Ksh"})," ",Object(n.jsx)("strong",{children:a.loanData.maxLoanAmountEligible})]})}),Object(n.jsx)(W.a,{type:"primary",onClick:function(){return e.onOk(!1)},children:"Apply Again"},"console")]}):Object(n.jsx)(q.a,{status:"error",title:"Loan application rejected",subTitle:"Your loan  limit is Ksh 0.00"})})})}),Object(n.jsxs)(N.a,{layout:"vertical",onSubmit:this.handleSubmit,children:[Object(n.jsxs)(K.a,{gutter:[48,24],children:[Object(n.jsxs)(B.a,{xs:{span:23,offset:1},md:{span:7,offset:1},lg:{span:6,offset:2},children:[Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Name\xa0",Object(n.jsx)(G.a,{title:"What do  others to call you?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("ApplicantName",{rules:[{required:!0,message:"Please enter valid name!"}]})(Object(n.jsx)(V.a,{prefix:Object(n.jsx)(Q.a,{size:16,strokeWidth:1,style:{color:"rgba(0,0,0,.25)"}}),placeholder:"John Doe"}))}),Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Marital status\xa0",Object(n.jsx)(G.a,{title:"Are you married or not?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("Married",{rules:[{required:!0,message:"Choose one status"}]})(Object(n.jsxs)(Y.a,{placeholder:"Please choose Marital status",children:[Object(n.jsx)(ae,{value:"Married",children:"Married"}),Object(n.jsx)(ae,{value:"Single",children:"Single"})]}))}),Object(n.jsx)(ee,{label:Object(n.jsx)("span",{children:"Gender\xa0"}),children:t.getFieldDecorator("Gender",{rules:[{required:!0,message:"Select your gender",whitespace:!1}]})(Object(n.jsxs)(Y.a,{placeholder:"Gender",children:[Object(n.jsx)(ae,{value:"Male",children:"Male"}),Object(n.jsx)(ae,{value:"Female",children:"Female"})]}))}),Object(n.jsx)(ee,{label:Object(n.jsx)("span",{children:"Current Income\xa0"}),children:t.getFieldDecorator("ApplicantIncome",{rules:[{pattern:new RegExp(/^-?[0-9]*(\.[0-9]*)?$/),required:!0,message:"Please input your income"}]})(Object(n.jsx)(V.a,{prefix:Object(n.jsx)(X.a,{size:16,strokeWidth:1,style:{color:"rgba(0,0,0,.25)"}}),type:"Number",placeholder:"10000"}))})]}),Object(n.jsxs)(B.a,{xs:{span:23,offset:1},md:{span:7,offset:1},lg:{span:6,offset:2},children:[Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Dateof Birth\xa0",Object(n.jsx)(G.a,{title:"You should be 18rs old or more to apply.",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("DateOfBirth",{rules:[{type:"object",required:!0,message:"Please select date of birth!"}]})(Object(n.jsx)(J.a,{format:"YYYY-MM-DD",disabledDate:this.disabledDate}))}),Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Highest Level of Education\xa0",Object(n.jsx)(G.a,{title:"Your highest level of education?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("Education",{rules:[{required:!0,message:"Select the highest level of education achieved",whitespace:!1}]})(Object(n.jsxs)(Y.a,{placeholder:"Education status",children:[Object(n.jsx)(ae,{value:"postGraduate",children:"Post Graduate"}),Object(n.jsx)(ae,{value:"undergraduate",children:"Degree"}),Object(n.jsx)(ae,{value:"diploma",children:"Diploma"}),Object(n.jsx)(ae,{value:"certificate",children:"certificate"}),Object(n.jsx)(ae,{value:"noschool",children:"Not attended school"})]}))}),Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Home ownership \xa0",Object(n.jsx)(G.a,{title:"Do you rent , own house or morgage?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("home",{rules:[{required:!0,message:"Choose home ownership"}]})(Object(n.jsxs)(_.a.Group,{children:[Object(n.jsx)(_.a,{value:"own",children:"Own"}),Object(n.jsx)(_.a,{value:"morgage",children:"Morgage"}),Object(n.jsx)(_.a,{value:"rent",children:"Rent"})]}))}),Object(n.jsx)(ee,{label:"Residential Location",children:t.getFieldDecorator("Property_Area",{rules:[{required:!0,message:"Please choose where you stay"}]})(Object(n.jsxs)(_.a.Group,{children:[Object(n.jsx)(_.a,{value:"rural",children:"Rural"}),Object(n.jsx)(_.a,{value:"urban",children:"Urban"})]}))})]}),Object(n.jsxs)(B.a,{xs:{span:23,offset:1},md:{span:7,offset:1},lg:{span:6,offset:2},children:[Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Existing Loan\xa0",Object(n.jsx)(G.a,{title:"Do you have any existing loan that you have borrowed?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("Credit_History",{rules:[{required:!0,message:"Fill the field correctly"}]})(Object(n.jsxs)(_.a.Group,{children:[Object(n.jsx)(_.a,{value:"yes",children:"Yes"}),Object(n.jsx)(_.a,{value:"no",children:"No"})]}))}),Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Dependents\xa0",Object(n.jsx)(G.a,{title:"Do you have any dependents?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("Dependents",{rules:[{required:!0,message:"No of Dependents should be filled"}]})(Object(n.jsx)(V.a,{type:"Number"}))}),Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Loan amount\xa0",Object(n.jsx)(G.a,{title:"Amount you are borrowing?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("LoanAmount",{rules:[{required:!0,message:"The amount borrowed is required"}]})(Object(n.jsx)(V.a,{type:"Number"}))}),Object(n.jsx)(ee,{label:Object(n.jsxs)("span",{children:["Repayment Period\xa0",Object(n.jsx)(G.a,{title:"How long will you taketo repay?",children:Object(n.jsx)($.a,{size:16,strokeWidth:1})})]}),children:t.getFieldDecorator("RepaymentPeriod",{rules:[{required:!0,message:"Select the period to repay",whitespace:!1}]})(Object(n.jsxs)(Y.a,{placeholder:"Education status",children:[Object(n.jsx)(ae,{value:"3",children:"3 Months"}),Object(n.jsx)(ae,{value:"8",children:"8 Months"}),Object(n.jsx)(ae,{value:"12",children:"1 year"}),Object(n.jsx)(ae,{value:"24",children:"2 years"})]}))})]})]}),Object(n.jsx)(K.a,{children:Object(n.jsx)("div",{type:"flex",align:"middle",justify:"center",children:this.state.loading?Object(n.jsx)(U.a,{indicator:ne}):Object(n.jsx)(N.a.Item,{children:Object(n.jsx)(W.a,{type:"primary",htmlType:"submit",children:"Submit"})})})})]})]})}),Object(n.jsx)(y,{})]})]})}}]),a}(s.a.Component),se=Object(u.f)(N.a.create()(re)),ce=p.a.Content,ie=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={confirmDirty:!1,autoCompleteResult:[],collapsed:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(C,{}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(ce,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280,paddingTop:40},children:Object(n.jsx)("div",{style:{padding:24,background:"#fff",minHeight:360},children:Object(n.jsx)(q.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist."})})}),Object(n.jsx)(y,{})]})]})}}]),a}(s.a.Component),le=Object(u.f)(ie);console.log=function(){};var oe=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={date:null},e.handleChange=function(t){h.a.info("Selected Date: ".concat(t?t.format("YYYY-MM-DD"):"None")),e.setState({date:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{path:"/predictmyloan",component:se}),Object(n.jsx)(u.a,{path:"/About",component:I}),Object(n.jsx)(u.a,{exact:!0,path:"/",component:S}),Object(n.jsx)(u.a,{component:le})]})})})})}}]),a}(s.a.Component),je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,345)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(oe,{}),document.getElementById("root")),je()}},[[326,1,2]]]);
//# sourceMappingURL=main.37596f91.chunk.js.map