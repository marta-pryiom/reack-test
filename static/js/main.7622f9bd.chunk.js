(this["webpackJsonpreack-test"]=this["webpackJsonpreack-test"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={TodoList:"TodoList_TodoList__FMDXf",TodoListItem:"TodoList_TodoListItem__zUJLt",TodoBtn:"TodoList_TodoBtn__2doxJ"}},,,function(e,t,n){e.exports={ColorPicker:"ColorPicker_ColorPicker__3v_c6",ColorPickerTitle:"ColorPicker_ColorPickerTitle__2X22z",ColorPickerOption:"ColorPicker_ColorPickerOption__1eZwu",ColorPickerOptionActive:"ColorPicker_ColorPickerOptionActive__1FSQX"}},function(e,t,n){},,,,function(e,t,n){e.exports={alert:"Alert_alert__1xcpI",error:"Alert_error__3_QVt Alert_alert__1xcpI",warning:"Alert_warning__1Tbpa Alert_alert__1xcpI",success:"Alert_success__1dwEp Alert_alert__1xcpI"}},function(e,t,n){e.exports={container:"Container_container__2tZr4"}},,,,function(e){e.exports=JSON.parse('[{"id":"01","text":"\u0412\u0438\u0432\u0447\u0438\u0442\u0438 HTML","completed":true},{"id":"02","text":"\u0412\u0438\u0432\u0447\u0438\u0442\u0438 CSS","completed":true},{"id":"03","text":"\u0412\u0438\u0432\u0447\u0438\u0442\u0438 React","completed":false},{"id":"04","text":"\u0412\u0438\u0432\u0447\u0438\u0442\u0438 Redux","completed":false},{"id":"05","text":"\u0412\u0438\u0432\u0447\u0438\u0442\u0438 React","completed":false}]')},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(18),r=n.n(a),i=(n(26),n(14)),l=n(2),s=n(3),d=n(5),u=n(4),p=n(13),j=n(10),h=n.n(j),b=n(19),O=n.n(b),x=n(0),m=O.a.bind(h.a),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={activeOptionIdx:2},e.makeOptionClases=function(t){return m(["ColorPickerOption"],{ColorPickerOptionActive:t===e.state.activeOptionIdx})},e.setActiveIdx=function(t){e.setState({activeOptionIdx:t})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeOptionIdx,n=this.props.options,c=n[t].label;return Object(x.jsxs)("div",{className:h.a.ColorPicker,children:[Object(x.jsx)("h2",{className:h.a.ColorPickerTitle,children:"Color Picker"}),Object(x.jsxs)("p",{children:["Active color: ",c]}),Object(x.jsx)("div",{children:n.map((function(n,c){var o=n.label,a=n.color;return Object(x.jsx)("button",{className:e.makeOptionClases(c),style:{backgroundColor:a,border:c===t&&"5px solid black"},onClick:function(){return e.setActiveIdx(c)}},o)}))})]})}}]),n}(c.Component),v=f,g=n(20),k=n(15),C=n.n(k);console.log(C.a);var y=function(e){var t=e.text,n=e.type;return Object(x.jsx)("p",{role:"alert",className:C.a[n],children:t})},_=n(16),N=n.n(_);console.log(N.a);var T=function(e){var t=e.children;return Object(x.jsx)("div",{className:N.a.container,children:t})},I=n(11),S=n.n(I),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={value:e.props.initialValue},e.handleIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handleDecrement=function(){e.setState((function(e){return{value:e.value-1}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:S.a.Counter,children:[Object(x.jsx)("span",{className:S.a.CounterValue,children:this.state.value}),Object(x.jsxs)("div",{className:S.a.CounterControls,children:[Object(x.jsx)("button",{type:"button",onClick:this.handleIncrement,children:"\u0417\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438"}),Object(x.jsx)("button",{type:"button",onClick:this.handleDecrement,children:"\u0417\u043c\u0435\u043d\u0448\u0438\u0442\u0438"})]})]})}}]),n}(o.a.Component);w.defaultProps={initialValue:0};var A=w,P=n(21),D=n.n(P),F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={visible:!1},e.toggle=function(){e.setState((function(e){return{visible:!e.visible}}))},e.hide=function(){e.setState({visible:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.visible;return Object(x.jsxs)("div",{className:D.a.Dropdown,children:[Object(x.jsx)("button",{type:"button className={s.DropdownToggle}",onClick:this.toggle,children:e?"shut":"open"}),e&&Object(x.jsx)("div",{children:"Dropdown here"})]})}}]),n}(c.Component),L=F,B=n(7),V=n.n(B);console.log(V.a);var E=function(e){var t=e.todos,n=e.deleteTodo,c=e.onToggleCompleted;return Object(x.jsxs)("ul",{className:V.a.TodoList,children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c: ",t.length]}),Object(x.jsxs)("p",{children:["\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e:"," ",t.reduce((function(e,t){return t.completed?e+1:e}),0)]})]}),t.map((function(e){var t=e.id,o=e.text,a=e.completed;return Object(x.jsxs)("li",{className:V.a.TodoListItem,children:[Object(x.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return c(t)}}),Object(x.jsx)("p",{children:o}),Object(x.jsx)("button",{type:"button",className:V.a.TodoBtn,onClick:function(){n(t)},children:"Delete"})]},t)}))]})},R=n(9),H=n(17),J=n.n(H),G=n(22),K=n.n(G);console.log(K.a);var M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={name:"",lastName:"",experience:"senior",licence:!1},e.shortNameId=J.a.generate(),e.lastNameShortId=J.a.generate(),e.handleForm=function(t){var n=t.currentTarget,c=n.name,o=n.value;e.setState(Object(R.a)({},c,o))},e.inputDataGive=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",lastName:""})},e.handleLicenceChange=function(t){e.setState({licence:t.currentTarget.checked}),console.log(t.currentTarget.checked)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.lastName;return Object(x.jsxs)("form",{onSubmit:this.inputDataGive,children:[Object(x.jsxs)("label",{htmlFor:this.shortNameId,children:["Name"," ",Object(x.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleForm,id:this.shortNameId})]}),Object(x.jsxs)("label",{htmlFor:this.lastNameShortId,children:["Last name"," ",Object(x.jsx)("input",{type:"text",name:"lastName",value:n,onChange:this.handleForm,id:this.lastNameShortId})]}),Object(x.jsx)("button",{type:"submit",children:"Sent"}),Object(x.jsx)("p",{children:"Your level"}),Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"radio",name:"experience",value:"junior",onChange:this.handleForm,checked:"junior"===this.state.experience}),"junior"]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"radio",name:"experience",value:"middle",onChange:this.handleForm,checked:"middle"===this.state.experience}),"middle"]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"radio",name:"experience",value:"senior",onChange:this.handleForm,checked:"senior"===this.state.experience}),"senior"]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",name:"licence",checked:this.state.licence,onChange:this.handleLicenceChange}),"\u0417\u0433\u0456\u0434\u043d\u0438\u0439 \u0437 \u0443\u043c\u043e\u0432\u0430\u043c\u0438"]})]})}}]),n}(c.Component),X=M,z=n(6);n(39);function Q(e){var t=e.unitRef,n=e.isOpen,c=e.toggleState,o=e.keydownHandler,a=e.handleClick,r=e.textObj,i=r.title,l=r.content,s=r.backBtn,d=r.deleteBtn;return Object(x.jsx)(z.a,{flipId:"wrapper",children:Object(x.jsxs)("div",{ref:t,tabIndex:n?void 0:0,role:"dialog",className:"dialog animated-in",onClick:c,onKeyDown:o,children:[Object(x.jsx)("p",{className:"title content",children:i}),Object(x.jsx)("p",{className:"content",children:l}),Object(x.jsx)("button",{className:"button secondary content",onClick:a,children:s}),Object(x.jsx)("button",{className:"button primary content",onClick:a,children:d})]})})}Q.defaultProps={textObj:{title:"Delete this item?",content:"This operation will permenantly delete this item and all its dependencies. This actioncannot be undone",backBtn:"Oh no, bring me back",deleteBtn:"I understand, delete it"}};var Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isOpen:e.props.isOpen},e.ref=Object(c.createRef)(),e.toggleState=function(){e.state.isOpen||(e.setState((function(e){return{isOpen:!e.isOpen}})),e.ref.current.focus())},e.keydownHandler=function(t){"Enter"!==t.key&&"Escape"!==t.key||e.toggleState()},e.handleClick=function(){return e.setState({isOpen:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.isOpen,t=this.ref,n=this.keydownHandler,c=this.toggleState,o=this.handleClick;return Object(x.jsx)(z.b,{flipKey:e,spring:"stiff",stagger:!0,children:e?Object(x.jsx)(Q,{unitRef:t,isOpen:e,toggleState:c,keydownHandler:n,handleClick:o,textObj:this.props.text}):Object(x.jsx)(z.a,{flipId:"wrapper",children:Object(x.jsx)("div",{ref:t,tabIndex:0,role:"button",className:"button primary",onClick:c,onKeyDown:n,children:Object(x.jsx)(z.a,{flipId:"action",children:Object(x.jsx)("span",{className:"action",children:"Delete"})})})})})}}]),n}(c.Component),U=(n(40),{title:"title-1",content:"content-1",backBtn:"go back",deleteBtn:"delete"}),Y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={todos:g,isOpen:!1,inputValue:""},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.handleInput=function(t){e.setState({inputValue:t.currentTarget.value})},e.inputDataGet=function(e){console.log(e)},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.todos,t=this.state,n=t.isOpen,c=t.inputValue;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)(T,{children:[Object(x.jsx)("input",{type:"text",value:c,onChange:this.handleInput}),Object(x.jsx)(X,{onSubmit:this.inputDataGet}),Object(x.jsx)(E,{todos:e,deleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted}),Object(x.jsx)(A,{initialValue:50}),Object(x.jsx)(L,{}),Object(x.jsx)(v,{options:W}),Object(x.jsx)(y,{text:"\u0412 \u0442\u0435\u0431\u0435 \u0432\u0441\u0435 \u0432\u0438\u0439\u0434\u0435!!!!",type:"error"}),Object(x.jsx)(y,{text:"\u0412 \u0442\u0435\u0431\u0435 \u0432\u0441\u0435 \u0432\u0438\u0439\u0434\u0435!!!!",type:"success"}),Object(x.jsx)(y,{text:"\u0412 \u0442\u0435\u0431\u0435 \u0432\u0441\u0435 \u0432\u0438\u0439\u0434\u0435!!!!",type:"warning"})]}),Object(x.jsx)(Z,{isOpen:!n,text:U}),Object(x.jsx)(Z,{isOpen:n})]})}}]),n}(p.Component),q=Y,W=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}],$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(q,{})}),document.getElementById("root")),$()}],[[41,1,2]]]);
//# sourceMappingURL=main.7622f9bd.chunk.js.map