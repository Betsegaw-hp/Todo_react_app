(this.webpackJsonpto_do_react_app=this.webpackJsonpto_do_react_app||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a(3),i=a.n(n),l=a(2),r=(a(14),function(){return Object(c.jsxs)("section",{id:"Account",className:"Account",children:[Object(c.jsx)("nav",{children:Object(c.jsx)("span",{children:"Account"})}),Object(c.jsx)("div",{className:"warning",children:Object(c.jsx)("h4",{children:"This Feature is not available yet!"})})]})}),d=a(6),o=a(8),j=a.n(o),b="taskAdded",u="taskEdited",O="taskRemoved",m="taskCompleted",h="CompletedTaskRemoved",x="taskFaild",p="FaildTaskRemoved",f=function(e,t){switch(t.type){case b:return[].concat(Object(d.a)(e),[{title:t.payload.title,label:t.payload.label,deadline:t.payload.deadline,startDate:t.payload.startDate,id:j()()}]);case u:var a=e.map((function(a,c){return a.id===t.payload.id?e[c]={title:t.payload.title,label:t.payload.label,deadline:t.payload.deadline,startDate:t.payload.startDate,id:j()()}:a}));return e=a;case O:return e.filter((function(e){return e.id!==t.payload.id}));case m:var c=t.payload.tasks.find((function(e){return e.id===t.payload.id}));return[].concat(Object(d.a)(e),[c]);case h:return e.filter((function(e){return e.id!==t.payload.id}));case x:var s=t.payload.tasks.find((function(e){return e.id===t.payload.id}));return[].concat(Object(d.a)(e),[s]);case p:return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},v=Object(s.createContext)(),g=function(e){var t=Object(s.useReducer)(f,[]),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(s.useReducer)(f,[]),d=Object(l.a)(r,2),o=d[0],j=d[1],b=Object(s.useReducer)(f,[]),u=Object(l.a)(b,2),O=u[0],m=u[1];Object(s.useEffect)((function(){}),[n,o,O]);var h,x=indexedDB.open("HAPPY-TODO-App",1);function p(e,t){var a=h.transaction(e,"readwrite");a.oncomplete=function(e){console.log("tx completed",a)},a.onerror=function(e){console.log("tx on error",a)};var c=a.objectStore(e);t.length>0&&(c.clear().onsuccess=function(){console.log("store cleared")},t.forEach((function(e){c.put(e).onsuccess=function(t){console.log(e.id,"added successfuly")}})))}return x.onerror=function(e){h=e.target.result,console.warn(h)},x.onupgradeneeded=function(e){(h=e.target.result).onerror=function(e){alert("Error loading database: ".concat(e.target.error))};var t=h.createObjectStore("Tasks",{keyPath:"id"}),a=h.createObjectStore("Completed_tasks",{keyPath:"id"}),c=h.createObjectStore("Faild_tasks",{keyPath:"id"});t.createIndex("id","id",{unique:!0}),t.createIndex("title","title",{unique:!1}),a.createIndex("id","id",{unique:!0}),a.createIndex("title","title",{unique:!1}),c.createIndex("id","id",{unique:!1}),c.createIndex("title","title",{unique:!1}),console.log("obJect Store created")},x.onsuccess=function(e){h=x.result,console.log("success",h),p("Tasks",n),p("Completed_tasks",o),p("Faild_tasks",O)},Object(c.jsx)(v.Provider,{value:{tasks:n,completedTasks:o,faildTasks:O,dispatch:i,dispatchCompletion:j,dispatchFailure:m},children:e.children})},k=a.p+"static/media/cancel.ced98c52.svg",N=a.p+"static/media/done_all-black-24dp.dc6fc541.svg",y=function(e){return{type:O,payload:{id:e}}},C={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:1e3};function S(e){var t=e.tasks,a=e.modalOpen,i=e.onClose,l=e.removeTask,r=Object(s.useRef)(null);if(!a)return null;var d=function(e){r&&l(function(e){return{type:h,payload:{id:e}}}(e))};return Object(n.createPortal)(Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:C,onClick:i}),Object(c.jsxs)("div",{className:"completed-tasks-container",children:[Object(c.jsx)("h3",{className:"completed-task-title",children:"Completed Tasks"}),Object(c.jsx)("ul",{className:"completed-tasks-ul",children:t.length>0&&t.map((function(e){return Object(c.jsxs)("li",{id:e.id,className:"completed-task-list",ref:r,children:[Object(c.jsxs)("div",{className:"task-card",children:[Object(c.jsx)("h4",{className:"task-title",children:e.title}),Object(c.jsx)("p",{className:"task-label",children:e.label}),Object(c.jsxs)("span",{className:"task-date",children:[e.startDate," - ",e.deadline]})]}),Object(c.jsx)("div",{className:"remove-btn",children:Object(c.jsx)("img",{src:k,alt:"remove button",onClick:function(){return d(e.id)}})})]},e.id)}))}),"".concat(t)==="".concat([])&&Object(c.jsxs)("span",{className:"emptyText",children:[" Nothing here. ",Object(c.jsx)("span",{children:"But you can make one!"})]})]})]}),document.getElementById("portal"))}var D=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useContext)(v),r=i.completedTasks,d=i.dispatchCompletion,o=r.length;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"completed-tasks",onClick:function(e){return n(!a)},children:[Object(c.jsx)("img",{src:N,alt:"complete tasks"}),Object(c.jsx)("span",{className:"list-counter",children:o})]}),Object(c.jsx)(S,{tasks:r,removeTask:d,modalOpen:a,onClose:function(e){return n(!a)}})]})},_=a.p+"static/media/assignment_late-black-24dp.9589897b.svg",T={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:1e3},w=function(e){var t=e.tasks,a=e.modalOpen,i=e.removeTask,l=e.onClose,r=Object(s.useRef)(null);if(!a)return null;var d=function(e){r&&i(function(e){return{type:p,payload:{id:e}}}(e))};return Object(n.createPortal)(Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:T,onClick:l}),Object(c.jsxs)("div",{className:"completed-tasks-container",children:[Object(c.jsx)("h3",{className:"faild-task-title",children:"Faild Tasks"}),Object(c.jsx)("ul",{className:"completed-tasks-ul",children:t&&t.map((function(e){return Object(c.jsxs)("li",{id:e.id,className:"completed-task-list faild-task-list",ref:r,children:[Object(c.jsxs)("div",{className:"task-card",children:[Object(c.jsx)("h3",{className:"task-title",children:e.title}),Object(c.jsx)("p",{className:"task-label",children:e.label}),Object(c.jsxs)("span",{className:"task-date",children:[e.startDate," - ",e.deadline]})]}),Object(c.jsx)("div",{className:"remove-btn",children:Object(c.jsx)("img",{src:k,alt:"remove button",onClick:function(){return d(e.id)}})})]},e.id)}))}),"".concat(t)==="".concat([])&&Object(c.jsxs)("span",{className:"emptyText",children:[" Nothing here. ",Object(c.jsx)("span",{children:"Good Job!"})]})]})]}),document.getElementById("portal"))},I=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useContext)(v),r=i.faildTasks,d=i.dispatchFailure,o=r.length;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"faild-tasks",onClick:function(e){return n(!a)},children:[Object(c.jsx)("img",{src:_,alt:"faild tasks"}),Object(c.jsx)("span",{className:"list-counter",children:o})]}),Object(c.jsx)(w,{tasks:r,removeTask:d,modalOpen:a,onClose:function(e){return n(!a)}})]})},F=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),r=Object(l.a)(i,2),d=r[0],o=r[1],j=Object(s.useState)(""),u=Object(l.a)(j,2),O=u[0],m=u[1],h=Object(s.useState)(""),x=Object(l.a)(h,2),p=x[0],f=x[1],g=Object(s.useContext)(v).dispatch,k=function(e){e.preventDefault(),g(function(e,t,a,c,s){return{type:b,payload:{title:e,label:t,deadline:a,startDate:c,id:s}}}(a,d,p,O)),N()},N=function(){n(""),o(""),m(""),f("")};return Object(c.jsx)("div",{className:"form-container",children:Object(c.jsxs)("form",{className:"form-card",onSubmit:function(e){return k(e)},children:[Object(c.jsx)("h3",{children:"Add"}),Object(c.jsx)("input",{type:"text",placeholder:"",className:"title-input",value:a,onChange:function(e){return n(e.target.value)},required:!0}),Object(c.jsx)("span",{children:"Add a task"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",placeholder:"",className:"label-input",value:d,onChange:function(e){return o(e.target.value)},required:!0}),Object(c.jsx)("span",{children:"label"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"start-date",children:"Start-Date: "}),Object(c.jsx)("input",{type:"date",id:"start-date",className:"start-date",value:O,onChange:function(e){return m(e.target.value)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"dead-line",children:"Dead-line: "}),Object(c.jsx)("input",{type:"date",id:"dead-line",className:"dead-line",value:p,onChange:function(e){return f(e.target.value)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Add",className:"add-form success-btn"})]})})},L=a.p+"static/media/add_task-black-24dp.f32aa408.svg",A=a.p+"static/media/delete-black-24dp.6d6a8639.svg",E=a.p+"static/media/mode_edit-black-24dp.50c765ab.svg",P={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"50px",zIndex:1e3},q={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:1e3},B=function(e){var t=e.modalOpen,a=e.onClose,n=e.title,r=e.label,d=e.id,o=e.sDate,j=e.dLine,b=Object(s.useContext)(v).dispatch,O=Object(s.useState)(n),m=Object(l.a)(O,2),h=m[0],x=m[1],p=Object(s.useState)(r),f=Object(l.a)(p,2),g=f[0],k=f[1],N=Object(s.useState)(o),y=Object(l.a)(N,2),C=y[0],S=y[1],D=Object(s.useState)(j),_=Object(l.a)(D,2),T=_[0],w=_[1],I=function(e){e.preventDefault(),b(function(e,t,a,c,s){return{type:u,payload:{title:t,label:a,deadline:c,startDate:s,id:e}}}(d,h,g,T,C)),a()};return t?i.a.createPortal(Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:q,onClick:a}),Object(c.jsx)("div",{style:P,children:Object(c.jsxs)("form",{className:"form-card",onSubmit:function(e){return I(e)},children:[Object(c.jsx)("h3",{children:"Edit"}),Object(c.jsx)("input",{type:"text",placeholder:"",className:"title-input",value:h,onChange:function(e){return x(e.target.value)}}),Object(c.jsx)("span",{children:"Edit a task"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",placeholder:"",className:"label-input",value:g,onChange:function(e){return k(e.target.value)}}),Object(c.jsx)("span",{children:"label"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"start-date",children:"Start-Date: "}),Object(c.jsx)("input",{type:"date",id:"start-date",className:"start-date",value:C,onChange:function(e){return S(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"dead-line",children:"Dead-line: "}),Object(c.jsx)("input",{type:"date",id:"dead-line",className:"dead-line",value:T,onChange:function(e){return w(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",className:"add-form success-btn",value:"Done"})]})})]}),document.getElementById("portal")):null};var R=function(e,t){var a=864e5;e+=a,t+=a;var c=(new Date).setHours(0,0,0,0,0);if(console.log(e,t),c>e)return-1;var s=e-t;return c>=t+a&&(console.log(c,t),s=e-c),Math.floor(s/a)},z=function(e){var t=Object(s.useContext)(v),a=t.tasks,n=t.dispatch,i=t.dispatchCompletion,r=t.dispatchFailure,d=e.title,o=e.label,j=e.sDate,b=e.dLine,u=e.id,O=Object(s.useState)(""),h=Object(l.a)(O,2),p=h[0],f=h[1],g=Object(s.useState)(!1),k=Object(l.a)(g,2),N=k[0],C=k[1],S=Object(s.useCallback)((function(e){return e<0?(r(function(e,t){return{type:x,payload:{id:e,tasks:t}}}(u,a)),n(y(u)),console.log(e),f("Expired")):(console.log(e),f("".concat(0!==e?e+" day left":"less than a day")))}),[n,r,u,a]);Object(s.useEffect)((function(){var e=new Date(j),t=new Date(b);e=e.setHours(0,0,0,0,0),t=t.setHours(0,0,0,0,0);var a=R(t,e),c=setInterval((function(){var a=R(t,e);return S(a)}),3e5);return S(a),function(){return clearInterval(c)}}),[j,b,S]);return Object(c.jsxs)("li",{className:"list-card",children:[Object(c.jsx)("h3",{className:"title",children:d}),Object(c.jsx)("div",{className:"description",children:Object(c.jsx)("p",{children:o})}),Object(c.jsx)("div",{className:"counter",children:Object(c.jsx)("i",{children:Object(c.jsx)("span",{className:"counter-time",children:p})})}),Object(c.jsxs)("div",{className:"list-card-footer",children:[Object(c.jsx)("div",{className:"show-date",children:Object(c.jsxs)("p",{children:[" ",Object(c.jsx)("span",{className:"start-date",children:j}),"->"," ",Object(c.jsx)("span",{className:"dead-date",children:b})," "]})}),Object(c.jsxs)("div",{className:"btns",children:[Object(c.jsx)("div",{className:"edit-btn warning-btn",onClick:function(e){C(!0)},children:Object(c.jsx)("img",{src:E,alt:"edit button"})}),Object(c.jsx)("div",{className:"remove-btn danger-btn",onClick:function(e){n(y(u))},children:Object(c.jsx)("img",{src:A,alt:"remove button"})}),Object(c.jsx)("div",{className:"done-btn success-btn",onClick:function(e){console.log("completed"),i(function(e,t){return{type:m,payload:{id:e,tasks:t}}}(u,a)),n(y(u))},children:Object(c.jsx)("img",{src:L,alt:"complete button"})})]})]}),Object(c.jsx)(B,{modalOpen:N,onClose:function(){return C(!1)},sDate:j,dLine:b,title:d,label:o,id:u})]})},H=function(){return Object(c.jsxs)("div",{className:"msg-holder",children:[Object(c.jsx)("h4",{children:"You don't have any task on progress."}),Object(c.jsx)("p",{children:"What do you want to do today?"})]})};var J=function(){var e=Object(s.useContext)(v).tasks;return Object(c.jsxs)("section",{id:"Dashboard",className:"Dashboard",children:[Object(c.jsxs)("nav",{children:[Object(c.jsx)("span",{children:"DashBoard"}),Object(c.jsxs)("div",{className:"nav-btn-wraper",children:[Object(c.jsx)(D,{}),Object(c.jsx)(I,{})]})]}),Object(c.jsx)(F,{}),Object(c.jsx)("ul",{className:"listCard-continer",children:e.length>0?e.map((function(e){return Object(c.jsx)(z,{title:e.title,label:e.label,sDate:e.startDate,dLine:e.deadline,id:e.id},e.id)})):Object(c.jsx)(H,{})})]})},M=a.p+"static/media/dashboard_black_24dp.f6a65e15.svg",Y=a.p+"static/media/more_horiz-black-24dp.d9c313b0.svg",G=a.p+"static/media/notifications_black_24dp.86d26440.svg",W=a.p+"static/media/person_black_24dp.eba1f953.svg",X=a.p+"static/media/settings_black_24dp.9764146e.svg",K=a.p+"static/media/todo-app-logo.9a5e5469.svg",Q=a.p+"static/media/trending_up_black_24dp.10b48d06.svg";var U=function(e){var t=e.changeTab,a=Object(s.useRef)(null);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("nav",{className:"navbar",ref:a,children:Object(c.jsxs)("ul",{className:"nav-list",children:[Object(c.jsx)("li",{className:"nav-list-item",children:Object(c.jsxs)("a",{href:"#home",children:[Object(c.jsx)("img",{src:K,alt:"dashboard-icon"}),Object(c.jsx)("span",{className:"logo-text",children:"todo"})]})}),Object(c.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(c.jsxs)("a",{href:"#Dashboard",children:[Object(c.jsx)("img",{src:M,alt:"dashboard-icon"}),Object(c.jsx)("span",{className:"list-name",children:"Dashboard"})]})}),Object(c.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(c.jsxs)("a",{href:"#Statics",children:[Object(c.jsx)("img",{src:Q,alt:"statics-icon"}),Object(c.jsx)("span",{className:"list-name",children:"Statics"})]})}),Object(c.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(c.jsxs)("a",{href:"#Notification",children:[Object(c.jsx)("img",{src:G,alt:"Notification-icon"}),Object(c.jsx)("span",{className:"list-name",children:"Notification"})]})}),Object(c.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(c.jsxs)("a",{href:"#Setting",children:[Object(c.jsx)("img",{src:X,alt:"setting-icon"}),Object(c.jsx)("span",{className:"list-name",children:"Setting"})]})}),Object(c.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(c.jsxs)("a",{href:"#Account",children:[Object(c.jsx)("img",{src:W,alt:"user Account-icon"}),Object(c.jsx)("span",{className:"list-name",children:"account"})]})})]})}),Object(c.jsx)("div",{className:"show-more-btn",onClick:function(e){return function(e){e.currentTarget.classList.toggle("show-more-btn-rotate"),a.current.classList.toggle("navbar-show")}(e)},children:Object(c.jsx)("img",{src:Y,alt:"show more"})})]})},V=function(){return Object(c.jsxs)("div",{className:"Bar",children:[Object(c.jsxs)("div",{className:"content-text content",children:[Object(c.jsx)("span",{children:"Lorem Lorem Lorem Lorem Lorem Lorem"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Lorem Lorem Lorem Lorem Lorem Lorem"})]}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("button",{className:"danger-btn",children:"remove"})})]})};var Z=function(){return Object(c.jsxs)("section",{id:"Notification",className:"Notification",children:[Object(c.jsx)("nav",{children:Object(c.jsx)("span",{children:"Notification"})}),Object(c.jsx)(V,{}),Object(c.jsx)(V,{}),Object(c.jsx)(V,{})]})},$={position:"fixed",bottom:"10%",right:"0",backgroundColor:"red",padding:"10px",margin:"10px",zIndex:1e3},ee=function(e){var t=e.isPoped,a=(e.data,e.onClose);return t?i.a.createPortal(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{style:$,children:Object(c.jsxs)("div",{className:"completed-tasks-container",children:[Object(c.jsx)("h3",{className:"completed-task-title",children:"Alert Title"}),Object(c.jsxs)("span",{className:"emptyText",children:["Body ",Object(c.jsx)("span",{children:"Description, id, label, task title"})]}),Object(c.jsx)("button",{onClick:a,style:{position:"absolute",top:"0",right:"0"},children:"X"})]})})}),document.getElementById("portal_msg")):null};var te=function(){var e=Object(s.useState)(localStorage.getItem("darkMode")),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useRef)(null);return Object(c.jsxs)("section",{id:"Setting",className:"Setting",children:[Object(c.jsx)("nav",{children:Object(c.jsx)("span",{children:"Setting"})}),Object(c.jsx)("div",{className:"setting-content",children:Object(c.jsxs)("div",{className:"theme",children:[Object(c.jsx)("h1",{children:"Theme"}),Object(c.jsx)("p",{children:"Dark mode"}),Object(c.jsx)("button",{className:"switch-btn",onClick:function(e){i.current.classList.toggle("switch-slide"),i.current.classList.contains("switch-slide")?(n(!0),localStorage.setItem("darkMode",!0)):(n(!1),localStorage.setItem("darkMode",!1))},children:Object(c.jsx)("span",{className:"switch",ref:i})}),a?Object(c.jsx)("span",{children:"on"}):Object(c.jsx)("span",{children:"off"})]})})]})},ae=function(){return Object(c.jsx)("div",{className:"chart-container",children:Object(c.jsx)("h1",{children:"I am the chart"})})};var ce=function(){return Object(c.jsxs)("section",{id:"Statics",className:"Statics",children:[Object(c.jsx)("nav",{children:Object(c.jsx)("span",{children:"Statics"})}),Object(c.jsx)("div",{className:"select-date",children:Object(c.jsxs)("select",{id:"date-select",children:[Object(c.jsx)("option",{value:"30 days",children:"30 days"}),Object(c.jsx)("option",{value:"7 days",children:"7 days"})]})}),Object(c.jsx)(ae,{})]})};var se=function(){var e,t=Object(s.useState)("Dashboard"),a=Object(l.a)(t,2),n=a[0],i=a[1],d=Object(s.useState)(!1),o=Object(l.a)(d,2),j=o[0],b=o[1];switch(n){case"Dashboard":console.log(n),e=Object(c.jsx)(J,{});break;case"Statics":console.log(n),e=Object(c.jsx)(ce,{});break;case"Notification":console.log(n),e=Object(c.jsx)(Z,{});break;case"Account":console.log(n),e=Object(c.jsx)(r,{});break;case"Setting":console.log(n),e=Object(c.jsx)(te,{});break;default:e=Object(c.jsx)(J,{})}return Object(c.jsxs)(g,{children:[e,Object(c.jsx)(U,{changeTab:function(e){var t=e.currentTarget.children[0].getAttribute("href");t=t.slice(1),i(t)}}),Object(c.jsx)(ee,{data:"...",isPoped:j,onClose:function(){return b(!1)}})]})};i.a.render(Object(c.jsx)(se,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8018f482.chunk.js.map