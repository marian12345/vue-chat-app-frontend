(function(e){function t(t){for(var o,a,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"91405b30"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(e);var i=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,n[1](i)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/new-vue-project/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b34":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t){var n=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["e"])(n)}n("d4d9");const c={};c.render=r;var a=c,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s=n("cf05"),i=n.n(s),l={class:"home"},d=Object(o["g"])("img",{alt:"Vue logo",src:i.a},null,-1);function f(e,t,n,r,c,a){var u=Object(o["w"])("HelloWorld"),s=Object(o["w"])("ChatConsole");return Object(o["p"])(),Object(o["e"])("div",l,[d,Object(o["g"])(u,{msg:"Welcome to Your Vue.js App"}),Object(o["g"])(s)])}var b=Object(o["E"])("data-v-573741f4");Object(o["s"])("data-v-573741f4");var p={key:0,class:"hello"},m=Object(o["g"])("h2",null,"Wie ist dein Name ?",-1);Object(o["q"])();var g=b((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["e"])(o["b"],{name:"fade"},{default:b((function(){return[a.isLoggedIn?Object(o["f"])("",!0):(Object(o["p"])(),Object(o["e"])("div",p,[Object(o["g"])("h1",null,Object(o["y"])(n.msg),1),m,Object(o["C"])(Object(o["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.usrname=e}),placeholder:"Benutzername",onKeydown:t[2]||(t[2]=Object(o["D"])((function(){return a.checkUsrname&&a.checkUsrname.apply(a,arguments)}),["enter"]))},null,544),[[o["A"],c.usrname]])]))]})),_:1})})),h=(n("498a"),{name:"HelloWorld",props:{msg:String},data:function(){return{usrname:""}},methods:{checkUsrname:function(){""!==this.usrname.trim()&&(this.$store.commit("changeUsrname",this.usrname),this.$store.commit("login",!0))}},computed:{isLoggedIn:function(){return this.$store.state.loggedIn}}});n("6725");h.render=g,h.__scopeId="data-v-573741f4";var j=h,O=Object(o["E"])("data-v-9af196e8");Object(o["s"])("data-v-9af196e8");var v={key:0},y={id:"chatlist"};Object(o["q"])();var w=O((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["e"])(o["b"],{name:"fade"},{default:O((function(){return[a.getStateData.isLoggedIn?(Object(o["p"])(),Object(o["e"])("div",v,[Object(o["g"])("h1",null,"Hello "+Object(o["y"])(a.getStateData.usrname),1),Object(o["g"])("ul",y,[(Object(o["p"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(c.messages,(function(e){return Object(o["p"])(),Object(o["e"])("li",{key:e},Object(o["y"])(e.user)+": "+Object(o["y"])(e.text),1)})),128))]),Object(o["C"])(Object(o["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.msg=e}),placeholder:"Nachricht",onKeydown:t[2]||(t[2]=Object(o["D"])((function(){return a.sendMsg&&a.sendMsg.apply(a,arguments)}),["enter"]))},null,544),[[o["A"],c.msg]]),Object(o["g"])("button",{onClick:t[3]||(t[3]=function(){return a.sendMsg&&a.sendMsg.apply(a,arguments)})},"Abschicken")])):Object(o["f"])("",!0)]})),_:1})})),k=(n("25f0"),{name:"ChatConsole",data:function(){return{msg:"",messages:[]}},sockets:{connect:function(){console.log("socket connected")},customEmit:function(e){console.log(e),console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')}},methods:{sendMsg:function(){this.messages.push({text:this.msg.toString(),user:this.$store.state.usrname}),this.$socket.emit("customEmit","check cehck")}},computed:{getStateData:function(){return{isLoggedIn:this.$store.state.loggedIn,usrname:this.$store.state.usrname}}}});n("94af");k.render=w,k.__scopeId="data-v-9af196e8";var _=k,C={name:"Home",components:{HelloWorld:j,ChatConsole:_},methods:{speak:function(){console.log("I said hi!")}}};C.render=f;var I=C,S=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=Object(u["a"])({history:Object(u["b"])(),routes:S}),M=x,P=n("5502"),E=Object(P["a"])({state:{loggedIn:!1,usrname:"utypednothing"},mutations:{login:function(e,t){e.loggedIn=t},changeUsrname:function(e,t){e.usrname=t}},actions:{},modules:{}}),U=n("f87c"),$=n("8e27"),A=Object($["io"])("http://localhost:3000");Object(o["d"])(a).use(U["a"],A).use(E).use(M).mount("#app")},6657:function(e,t,n){},6725:function(e,t,n){"use strict";n("6657")},"94af":function(e,t,n){"use strict";n("b587")},b587:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d4d9:function(e,t,n){"use strict";n("1b34")}});
//# sourceMappingURL=app.9507e5c2.js.map