(this.webpackJsonpto_do_react_app=this.webpackJsonpto_do_react_app||[]).push([[0],{13:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c,s=a(1),n=a(3),i=a.n(n),l=a(2),r=(a(13),a(0)),d=function(){return Object(r.jsxs)("section",{id:"Account",className:"Account",children:[Object(r.jsx)("nav",{children:Object(r.jsx)("span",{children:"Account"})}),Object(r.jsx)("div",{className:"warning",children:Object(r.jsx)("h4",{children:"This Feature is not available yet!"})})]})},o="taskAdded",j="taskEdited",b="taskRemoved",u="taskCompleted",O="CompletedTaskRemoved",h="taskFaild",m="FaildTaskRemoved",x=a(8),p=a.n(x),f=function(e,t,a,c){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:p()();return{type:o,payload:{title:e,label:t,deadline:a,startDate:c,id:s}}},g=function(e){return{type:b,payload:{id:e}}},v=function(e,t){return{type:u,payload:{id:e,tasks:t}}},k=function(e,t){return{type:h,payload:{id:e,tasks:t}}},N=a(6),y=function(e,t){switch(t.type){case o:return[].concat(Object(N.a)(e),[{title:t.payload.title,label:t.payload.label,deadline:t.payload.deadline,startDate:t.payload.startDate,id:t.payload.id}]);case j:var a=e.map((function(a,c){return a.id===t.payload.id?e[c]={title:t.payload.title,label:t.payload.label,deadline:t.payload.deadline,startDate:t.payload.startDate,id:t.payload.id}:a}));return e=a;case b:return e.filter((function(e){return e.id!==t.payload.id}));case u:var c=t.payload.tasks.find((function(e){return e.id===t.payload.id}));return[].concat(Object(N.a)(e),[c]);case O:return e.filter((function(e){return e.id!==t.payload.id}));case h:var s=t.payload.tasks.find((function(e){return e.id===t.payload.id}));return[].concat(Object(N.a)(e),[s]);case m:return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},C=Object(s.createContext)();var S=function(e){var t=Object(s.useReducer)(y,[]),a=Object(l.a)(t,2),n=a[0],i=a[1],d=Object(s.useReducer)(y,[]),o=Object(l.a)(d,2),j=o[0],b=o[1],u=Object(s.useReducer)(y,[]),O=Object(l.a)(u,2),h=O[0],m=O[1];Object(s.useEffect)((function(){["Tasks","Completed_tasks","Faild_tasks"].forEach((function(e,t){var a;(a=e,new Promise((function(e,t){var s=indexedDB.open("HAPPY-TODO-App",1);s.onupgradeneeded=function(e){var t=(c=e.target.result).createObjectStore("Tasks",{keyPath:"id"}),a=c.createObjectStore("Completed_tasks",{keyPath:"id"}),s=c.createObjectStore("Faild_tasks",{keyPath:"id"});t.createIndex("id","id",{unique:!0}),t.createIndex("title","title",{unique:!1}),a.createIndex("id","id",{unique:!0}),a.createIndex("title","title",{unique:!1}),s.createIndex("id","id",{unique:!1}),s.createIndex("title","title",{unique:!1})},s.onsuccess=function(){c=s.result,console.log("succes reading",a);var t=c.transaction(a).objectStore(a).getAll();t.onsuccess=function(a){e(t.result)}},s.onerror=function(e){c=e.target.result,t(c)}}))).then((function(e){switch(t){case 0:e.forEach((function(e){i(f(e.title,e.label,e.deadline,e.startDate,e.id))}));break;case 1:e.forEach((function(t){b(v(t.id,e))}));break;case 2:e.forEach((function(t){m(k(t.id,e))}))}})).catch((function(e){return console.error(e)}))}))}),[]);var x=indexedDB.open("HAPPY-TODO-App",1);function p(e,t){var a=c.transaction(e,"readwrite");a.oncomplete=function(e){console.log("tx completed",a)},a.onerror=function(e){console.log("tx on error",a)};var s=a.objectStore(e);t.length>0&&(s.clear().onsuccess=function(){console.log("store cleared")},t.forEach((function(e){s.put(e).onsuccess=function(t){console.log(e.id,"added successfuly")}})))}return x.onerror=function(e){c=e.target.result,console.warn(c)},x.onupgradeneeded=function(e){(c=e.target.result).onerror=function(e){alert("Error loading database: ".concat(e.target.error))};var t=c.createObjectStore("Tasks",{keyPath:"id"}),a=c.createObjectStore("Completed_tasks",{keyPath:"id"}),s=c.createObjectStore("Faild_tasks",{keyPath:"id"});t.createIndex("id","id",{unique:!0}),t.createIndex("title","title",{unique:!1}),a.createIndex("id","id",{unique:!0}),a.createIndex("title","title",{unique:!1}),s.createIndex("id","id",{unique:!1}),s.createIndex("title","title",{unique:!1}),console.log("obJect Store created")},x.onsuccess=function(e){c=x.result,console.log("success",c),p("Tasks",n),p("Completed_tasks",j),p("Faild_tasks",h)},Object(r.jsx)(C.Provider,{value:{tasks:n,completedTasks:j,faildTasks:h,dispatch:i,dispatchCompletion:b,dispatchFailure:m},children:e.children})},D=a.p+"static/media/cancel.ced98c52.svg",_=a.p+"static/media/done_all-black-24dp.dc6fc541.svg",T={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:1e3};function w(e){var t=e.tasks,a=e.modalOpen,c=e.onClose,i=e.removeTask,l=Object(s.useRef)(null);if(!a)return null;var d=function(e){l&&i(function(e){return{type:O,payload:{id:e}}}(e))};return Object(n.createPortal)(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:T,onClick:c}),Object(r.jsxs)("div",{className:"completed-tasks-container",children:[Object(r.jsx)("h3",{className:"completed-task-title",children:"Completed Tasks"}),Object(r.jsx)("ul",{className:"completed-tasks-ul",children:t.length>0&&t.map((function(e){return Object(r.jsxs)("li",{id:e.id,className:"completed-task-list",ref:l,children:[Object(r.jsxs)("div",{className:"task-card",children:[Object(r.jsx)("h4",{className:"task-title",children:e.title}),Object(r.jsx)("p",{className:"task-label",children:e.label}),Object(r.jsxs)("span",{className:"task-date",children:[e.startDate," - ",e.deadline]})]}),Object(r.jsx)("div",{className:"remove-btn",children:Object(r.jsx)("img",{src:D,alt:"remove button",onClick:function(){return d(e.id)}})})]},e.id)}))}),"".concat(t)==="".concat([])&&Object(r.jsxs)("span",{className:"emptyText",children:[" Nothing here. ",Object(r.jsx)("span",{children:"But you can make one!"})]})]})]}),document.getElementById("portal"))}var I=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useContext)(C),i=n.completedTasks,d=n.dispatchCompletion,o=i.length;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"completed-tasks",onClick:function(e){return c(!a)},children:[Object(r.jsx)("img",{src:_,alt:"complete tasks"}),Object(r.jsx)("span",{className:"list-counter",children:o})]}),Object(r.jsx)(w,{tasks:i,removeTask:d,modalOpen:a,onClose:function(e){return c(!a)}})]})},F=a.p+"static/media/assignment_late-black-24dp.9589897b.svg",A={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:1e3},E=function(e){var t=e.tasks,a=e.modalOpen,c=e.removeTask,i=e.onClose,l=Object(s.useRef)(null);if(!a)return null;var d=function(e){l&&c(function(e){return{type:m,payload:{id:e}}}(e))};return Object(n.createPortal)(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:A,onClick:i}),Object(r.jsxs)("div",{className:"completed-tasks-container",children:[Object(r.jsx)("h3",{className:"faild-task-title",children:"Faild Tasks"}),Object(r.jsx)("ul",{className:"completed-tasks-ul",children:t&&t.map((function(e){return Object(r.jsxs)("li",{id:e.id,className:"completed-task-list faild-task-list",ref:l,children:[Object(r.jsxs)("div",{className:"task-card",children:[Object(r.jsx)("h3",{className:"task-title",children:e.title}),Object(r.jsx)("p",{className:"task-label",children:e.label}),Object(r.jsxs)("span",{className:"task-date",children:[e.startDate," - ",e.deadline]})]}),Object(r.jsx)("div",{className:"remove-btn",children:Object(r.jsx)("img",{src:D,alt:"remove button",onClick:function(){return d(e.id)}})})]},e.id)}))}),"".concat(t)==="".concat([])&&Object(r.jsxs)("span",{className:"emptyText",children:[" Nothing here. ",Object(r.jsx)("span",{children:"Good Job!"})]})]})]}),document.getElementById("portal"))},P=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useContext)(C),i=n.faildTasks,d=n.dispatchFailure,o=i.length;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"faild-tasks",onClick:function(e){return c(!a)},children:[Object(r.jsx)("img",{src:F,alt:"faild tasks"}),Object(r.jsx)("span",{className:"list-counter",children:o})]}),Object(r.jsx)(E,{tasks:i,removeTask:d,modalOpen:a,onClose:function(e){return c(!a)}})]})},q=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(l.a)(n,2),d=i[0],o=i[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),u=b[0],O=b[1],h=Object(s.useState)(""),m=Object(l.a)(h,2),x=m[0],p=m[1],g=Object(s.useContext)(C).dispatch,v=function(){c(""),o(""),O(""),p("")};return Object(r.jsx)("div",{className:"form-container",children:Object(r.jsxs)("form",{className:"form-card",onSubmit:function(e){return function(e){e.preventDefault(),g(f(a,d,x,u)),v()}(e)},children:[Object(r.jsx)("h3",{children:"Add"}),Object(r.jsx)("input",{type:"text",placeholder:"",className:"title-input",value:a,onChange:function(e){return c(e.target.value)},required:!0}),Object(r.jsx)("span",{children:"Add a task"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",placeholder:"",className:"label-input",value:d,onChange:function(e){return o(e.target.value)},required:!0}),Object(r.jsx)("span",{children:"label"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"start-date",children:"Start Date: "}),Object(r.jsx)("input",{type:"date",id:"start-date",className:"start-date",value:u,onChange:function(e){return O(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"dead-line",children:"Dead Line: "}),Object(r.jsx)("input",{type:"date",id:"dead-line",className:"dead-line",value:x,onChange:function(e){return p(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",value:"Add",className:"add-form success-btn"})]})})},L=a.p+"static/media/add_task-black-24dp.f32aa408.svg",B=a.p+"static/media/delete-black-24dp.6d6a8639.svg",R=a.p+"static/media/mode_edit-black-24dp.50c765ab.svg",z={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"50px",zIndex:1e3},J={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:1e3},H=function(e){var t=e.modalOpen,a=e.onClose,c=e.title,n=e.label,d=e.id,o=e.sDate,b=e.dLine,u=Object(s.useContext)(C).dispatch,O=Object(s.useState)(c),h=Object(l.a)(O,2),m=h[0],x=h[1],p=Object(s.useState)(n),f=Object(l.a)(p,2),g=f[0],v=f[1],k=Object(s.useState)(o),N=Object(l.a)(k,2),y=N[0],S=N[1],D=Object(s.useState)(b),_=Object(l.a)(D,2),T=_[0],w=_[1],I=function(e){e.preventDefault(),u(function(e,t,a,c,s){return{type:j,payload:{title:t,label:a,deadline:c,startDate:s,id:e}}}(d,m,g,T,y)),a()};return t?i.a.createPortal(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:J,onClick:a}),Object(r.jsx)("div",{style:z,children:Object(r.jsxs)("form",{className:"form-card",onSubmit:function(e){return I(e)},children:[Object(r.jsx)("h3",{children:"Edit"}),Object(r.jsx)("input",{type:"text",placeholder:"",className:"title-input",value:m,onChange:function(e){return x(e.target.value)}}),Object(r.jsx)("span",{children:"Edit a task"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",placeholder:"",className:"label-input",value:g,onChange:function(e){return v(e.target.value)}}),Object(r.jsx)("span",{children:"label"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"start-date",children:"Start-Date: "}),Object(r.jsx)("input",{type:"date",id:"start-date",className:"start-date",value:y,onChange:function(e){return S(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"dead-line",children:"Dead-line: "}),Object(r.jsx)("input",{type:"date",id:"dead-line",className:"dead-line",value:T,onChange:function(e){return w(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit",className:"add-form success-btn",value:"Done"})]})})]}),document.getElementById("portal")):null};var M=function(e,t){var a=864e5;e+=a,t+=a;var c=(new Date).setHours(0,0,0,0,0);if(console.log(e,t),c>e)return-1;var s=e-t;return c>=t+a&&(console.log(c,t),s=e-c),Math.floor(s/a)},G=function(e){var t=Object(s.useContext)(C),a=t.tasks,c=t.dispatch,n=t.dispatchCompletion,i=t.dispatchFailure,d=e.title,o=e.label,j=e.sDate,b=e.dLine,u=e.id,O=Object(s.useState)(""),h=Object(l.a)(O,2),m=h[0],x=h[1],p=Object(s.useState)(!1),f=Object(l.a)(p,2),N=f[0],y=f[1],S=Object(s.useCallback)((function(e){return e<0?(i(k(u,a)),c(g(u)),console.log(e),x("Expired")):(console.log(e),x("".concat(0!==e?e+" day left":"less than a day")))}),[c,i,u,a]);Object(s.useEffect)((function(){var e=new Date(j),t=new Date(b);e=e.setHours(0,0,0,0,0),t=t.setHours(0,0,0,0,0);var a=M(t,e),c=setInterval((function(){var a=M(t,e);return S(a)}),3e5);return S(a),function(){return clearInterval(c)}}),[j,b,S]);return Object(r.jsxs)("li",{className:"list-card",children:[Object(r.jsx)("h3",{className:"title",children:d}),Object(r.jsx)("div",{className:"description",children:Object(r.jsx)("p",{children:o})}),Object(r.jsx)("div",{className:"counter",children:Object(r.jsx)("i",{children:Object(r.jsx)("span",{className:"counter-time",children:m})})}),Object(r.jsxs)("div",{className:"list-card-footer",children:[Object(r.jsx)("div",{className:"show-date",children:Object(r.jsxs)("p",{children:[" ",Object(r.jsx)("span",{className:"start-date",children:j}),"->"," ",Object(r.jsx)("span",{className:"dead-date",children:b})," "]})}),Object(r.jsxs)("div",{className:"btns",children:[Object(r.jsx)("div",{className:"edit-btn warning-btn",onClick:function(e){y(!0)},children:Object(r.jsx)("img",{src:R,alt:"edit button"})}),Object(r.jsx)("div",{className:"remove-btn danger-btn",onClick:function(e){c(g(u))},children:Object(r.jsx)("img",{src:B,alt:"remove button"})}),Object(r.jsx)("div",{className:"done-btn success-btn",onClick:function(e){console.log("completed"),n(v(u,a)),c(g(u))},children:Object(r.jsx)("img",{src:L,alt:"complete button"})})]})]}),Object(r.jsx)(H,{modalOpen:N,onClose:function(){return y(!1)},sDate:j,dLine:b,title:d,label:o,id:u})]})},Y=a.p+"static/media/First_Add_tasks.375f9510.svg",K=function(e){var t=e.handleClick;return Object(r.jsx)("div",{className:"msg-holder",children:Object(r.jsxs)("div",{className:"msg-holder-card",children:[Object(r.jsx)("div",{className:"msg-illustration",children:Object(r.jsx)("img",{src:Y,alt:"add task illustration",width:"200",height:"200"})}),Object(r.jsxs)("div",{className:"msg-text",children:[Object(r.jsx)("h3",{children:"Focus on your goal"}),Object(r.jsx)("p",{children:"Get things done as you planned, boost your productivity."}),Object(r.jsx)("button",{className:"success-btn add-custom-btn",onClick:t,children:"* Get Started *"})]})]})})};var Q=function(){var e=Object(s.useContext)(C).tasks,t=Object(s.useState)(e.length>0),a=Object(l.a)(t,2),c=a[0],n=a[1];return Object(r.jsxs)("section",{id:"Dashboard",className:"Dashboard",children:[Object(r.jsxs)("nav",{children:[Object(r.jsx)("span",{children:"DashBoard"}),Object(r.jsxs)("div",{className:"nav-btn-wraper",children:[Object(r.jsx)(I,{}),Object(r.jsx)(P,{})]})]}),c?Object(r.jsx)(q,{}):Object(r.jsx)(K,{handleClick:function(){n(!0)}}),Object(r.jsx)("ul",{className:"listCard-continer",children:e.length>0&&e.map((function(e){return Object(r.jsx)(G,{title:e.title,label:e.label,sDate:e.startDate,dLine:e.deadline,id:e.id},e.id)}))})]})},U=a.p+"static/media/dashboard_black_24dp.f6a65e15.svg",V=a.p+"static/media/menu_open_black_24dp.e289d488.svg",W=a.p+"static/media/notifications_black_24dp.86d26440.svg",X=a.p+"static/media/person_black_24dp.eba1f953.svg",Z=a.p+"static/media/settings_black_24dp.9764146e.svg",$=a.p+"static/media/todo-app-logo.9a5e5469.svg",ee=a.p+"static/media/trending_up_black_24dp.10b48d06.svg";var te=function(e){var t=e.changeTab,a=Object(s.useRef)(null);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar",ref:a,children:Object(r.jsxs)("ul",{className:"nav-list",children:[Object(r.jsx)("li",{className:"nav-list-item",children:Object(r.jsxs)("a",{href:"#home",children:[Object(r.jsx)("img",{src:$,alt:"dashboard-icon"}),Object(r.jsx)("span",{className:"logo-text",children:"todo"})]})}),Object(r.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(r.jsxs)("a",{href:"#Dashboard",children:[Object(r.jsx)("img",{src:U,alt:"dashboard-icon"}),Object(r.jsx)("span",{className:"list-name",children:"Dashboard"})]})}),Object(r.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(r.jsxs)("a",{href:"#Statics",children:[Object(r.jsx)("img",{src:ee,alt:"statics-icon"}),Object(r.jsx)("span",{className:"list-name",children:"Statics"})]})}),Object(r.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(r.jsxs)("a",{href:"#Notification",children:[Object(r.jsx)("img",{src:W,alt:"Notification-icon"}),Object(r.jsx)("span",{className:"list-name",children:"Notification"})]})}),Object(r.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(r.jsxs)("a",{href:"#Setting",children:[Object(r.jsx)("img",{src:Z,alt:"setting-icon"}),Object(r.jsx)("span",{className:"list-name",children:"Setting"})]})}),Object(r.jsx)("li",{className:"nav-list-item",onClick:t,children:Object(r.jsxs)("a",{href:"#Account",children:[Object(r.jsx)("img",{src:X,alt:"user Account-icon"}),Object(r.jsx)("span",{className:"list-name",children:"account"})]})})]})}),Object(r.jsx)("button",{className:"show-more-btn",onClick:function(e){return function(e){e.currentTarget.classList.toggle("show-more-btn-rotate"),a.current.classList.toggle("navbar-show")}(e)},onBlurCapture:function(e){a.current.classList.remove("navbar-show"),e.currentTarget.classList.toggle("show-more-btn-rotate")},style:{background:"none",border:"none"},children:Object(r.jsx)("img",{src:V,alt:"show more"})})]})},ae=function(){return Object(r.jsxs)("div",{className:"Bar",children:[Object(r.jsxs)("div",{className:"content-text content",children:[Object(r.jsx)("span",{children:"Task Title added"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"label"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"1/2/2000"}),"  ->  ",Object(r.jsx)("span",{children:"1/4/2000"})]}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("button",{className:"danger-btn",children:Object(r.jsx)("img",{width:"10",height:"10",src:D,alt:"remove button"})})})]})};var ce=function(){return Object(r.jsxs)("section",{id:"Notification",className:"Notification",children:[Object(r.jsx)("nav",{children:Object(r.jsx)("span",{children:"Notification"})}),Object(r.jsx)(ae,{}),Object(r.jsx)(ae,{}),Object(r.jsx)(ae,{})]})},se={position:"fixed",bottom:"3%",right:"0",padding:"10px",margin:"10px",zIndex:1e3},ne=function(e){var t=e.isPoped,a=e.onClose;return t?i.a.createPortal(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{style:se,children:Object(r.jsxs)("div",{className:"msg-holder-card",children:[Object(r.jsx)("h3",{className:"completed-task-title",children:"Alert Title"}),Object(r.jsxs)("span",{className:"emptyText",children:["Body ",Object(r.jsx)("span",{children:"Description, id, label, task title"})]}),Object(r.jsx)("button",{onClick:a,style:{position:"absolute",top:"0",right:"0",padding:".5rem",background:"none"},children:Object(r.jsx)("img",{width:"10",height:"10",src:D,alt:"remove button"})})]})})}),document.getElementById("portal_msg")):null};var ie=function(){var e=Object(s.useState)(JSON.parse(localStorage.getItem("darkMode"))),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useRef)(null);return Object(s.useEffect)((function(){n&&"false"!==JSON.stringify(a)?n.current.classList.add("switch-slide"):n.current.classList.remove("switch-slide")}),[a]),Object(r.jsxs)("section",{id:"Setting",className:"Setting",children:[Object(r.jsx)("nav",{children:Object(r.jsx)("span",{children:"Setting"})}),Object(r.jsx)("div",{className:"setting-content",children:Object(r.jsxs)("div",{className:"theme",children:[Object(r.jsx)("h1",{children:"Theme"}),Object(r.jsx)("p",{children:"Dark mode"}),Object(r.jsx)("button",{className:"switch-btn",onClick:function(e){n.current.classList.toggle("switch-slide"),n.current.classList.contains("switch-slide")?(c(!0),localStorage.setItem("darkMode",!0)):(c(!1),localStorage.setItem("darkMode",!1))},children:Object(r.jsx)("span",{className:"switch",ref:n})}),a?Object(r.jsx)("span",{children:"on"}):Object(r.jsx)("span",{children:"off"})]})})]})},le=function(){return Object(r.jsx)("div",{className:"chart-container",children:Object(r.jsx)("h1",{children:"Data visualization section"})})};var re=function(){return Object(r.jsxs)("section",{id:"Statics",className:"Statics",children:[Object(r.jsx)("nav",{children:Object(r.jsx)("span",{children:"Statics"})}),Object(r.jsx)("div",{className:"select-date",children:Object(r.jsxs)("select",{id:"date-select",children:[Object(r.jsx)("option",{value:"30 days",children:"30 days"}),Object(r.jsx)("option",{value:"7 days",children:"7 days"})]})}),Object(r.jsx)(le,{})]})};var de=function(){var e,t=Object(s.useState)("Dashboard"),a=Object(l.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(!1),o=Object(l.a)(i,2),j=o[0],b=o[1];switch(c){case"Dashboard":console.log(c),e=Object(r.jsx)(Q,{});break;case"Statics":console.log(c),e=Object(r.jsx)(re,{});break;case"Notification":console.log(c),e=Object(r.jsx)(ce,{});break;case"Account":console.log(c),e=Object(r.jsx)(d,{});break;case"Setting":console.log(c),e=Object(r.jsx)(ie,{});break;default:e=Object(r.jsx)(Q,{})}return Object(r.jsxs)(S,{children:[e,Object(r.jsx)(te,{changeTab:function(e){var t=e.currentTarget.children[0].getAttribute("href");t=t.slice(1),n(t)}}),Object(r.jsx)(ne,{data:"...",isPoped:j,onClose:function(){return b(!1)}})]})};i.a.render(Object(r.jsx)(de,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.703967e3.chunk.js.map