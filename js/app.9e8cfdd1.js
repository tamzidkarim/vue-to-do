(function(t){function e(e){for(var n,r,c=e[0],u=e[1],d=e[2],l=0,s=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&s.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(s.length)s.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"38042dc2"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o={about:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"a327971e"}[t]+".css",a=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var d=i[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===a))return e()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],l=d.getAttribute("data-href");if(l===n||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],p.parentNode.removeChild(p),o(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var s=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(p);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,o[1](s)}a[t]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-to-do/",u.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var p=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"2c36":function(t,e,o){},"3d5d":function(t,e,o){},"4c98":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("ToDoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},c=[],u={name:"Header"},d=u,l=(o("70d0"),o("2877")),s=Object(l["a"])(d,i,c,!1,null,"51ef1c8e",null),p=s.exports,f={name:"App",components:{Header:p}},m=f,h=(o("034f"),Object(l["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=(o("d3b7"),o("8c4f")),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},y=[],_=(o("99af"),o("4de4"),o("2909")),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},j=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},w=[],x={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},k=x,E=(o("e5bd"),Object(l["a"])(k,O,w,!1,null,"38cd0836",null)),A=E.exports,C={name:"Todos",components:{TodoItem:A},props:["todos"]},P=C,$=Object(l["a"])(P,T,j,!1,null,"3b7f90f4",null),S=$.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo.."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"submit"}})])])},L=[],N=o("ec26"),D={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={id:Object(N["a"])(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},I=D,M=(o("793a"),Object(l["a"])(I,H,L,!1,null,"52226ac1",null)),B=M.exports,q=o("bc3a"),J=o.n(q),F={name:"Home",components:{Todos:S,AddTodo:B},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;J.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(){return e.todos=e.todos.filter((function(e){return e.id!==t}))}))},addTodo:function(t){var e=this,o=t.title,n=t.completed;J.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then((function(t){e.todos=[].concat(Object(_["a"])(e.todos),[t.data])})).catch((function(t){console.log(t)}))}},created:function(){var t=this;J.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){t.todos=e.data})).catch((function(t){console.log(t)}))}},K=F,U=Object(l["a"])(K,g,y,!1,null,null,null),z=U.exports;n["a"].use(b["a"]);var G=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Q=new b["a"]({routes:G}),R=Q;n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(t){return t(v)}}).$mount("#app")},"70d0":function(t,e,o){"use strict";var n=o("4c98"),r=o.n(n);r.a},"793a":function(t,e,o){"use strict";var n=o("2c36"),r=o.n(n);r.a},"85ec":function(t,e,o){},e5bd:function(t,e,o){"use strict";var n=o("3d5d"),r=o.n(n);r.a}});
//# sourceMappingURL=app.9e8cfdd1.js.map