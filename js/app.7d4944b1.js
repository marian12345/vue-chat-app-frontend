(function(e){function t(t){for(var s,c,a=t[0],i=t[1],u=t[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},o={app:0},r=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-chat-app-frontend/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12ae":function(e,t,n){e.exports=n.p+"img/loading.32a4b972.gif"},2318:function(e,t,n){"use strict";n("2fde")},"2df2":function(e,t,n){},"2fde":function(e,t,n){},"4ca9":function(e,t,n){"use strict";n("d302")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function o(e,t){var n=Object(s["v"])("router-view");return Object(s["o"])(),Object(s["d"])(n)}n("d4d9");var r=n("d959"),c=n.n(r);const a={},i=c()(a,[["render",o]]);var u=i,d=n("6c02"),l={class:"\n      home\n      grid grid-cols-1\n      lg:grid-cols-3\n      mx-1\n      lg:mx-0\n      justify-center\n      font-mono\n      items-center\n    "};function f(e,t,n,o,r,c){var a=Object(s["v"])("NoConnection"),i=Object(s["v"])("HelloWorld"),u=Object(s["v"])("ChatConsole");return Object(s["o"])(),Object(s["d"])(s["a"],null,[Object(s["f"])(a),Object(s["f"])("div",l,[Object(s["f"])(i),Object(s["f"])(u)])],64)}var m=n("866c"),b=n.n(m),g=Object(s["E"])("data-v-42eef498");Object(s["r"])("data-v-42eef498");var p={key:0,class:"\n      col-span-1\n      lg:col-start-2\n      bg-white\n      shadow-xl\n      rounded\n      px-8\n      pt-6\n      pb-6\n      my-14\n    "},h=Object(s["f"])("div",{class:"w-full flex justify-center mb-8"},[Object(s["f"])("img",{alt:"Vue logo",src:b.a})],-1),j={class:"mb-4"},O=Object(s["f"])("label",{class:"block text-gray-700 text-sm font-bold mb-2 px-1 text-left",for:"username"},"Username",-1),v={class:"flex px-3 py-2 justify-end"};Object(s["p"])();var y=g((function(e,t,n,o,r,c){return!c.isLoggedIn&&c.isConnected?(Object(s["o"])(),Object(s["d"])("form",p,[h,Object(s["f"])("div",j,[O,Object(s["B"])(Object(s["f"])("input",{class:"\n          shadow\n          appearance-none\n          border\n          rounded\n          w-full\n          py-2\n          px-3\n          text-gray-700\n          leading-tight\n          focus:outline-none focus:shadow-outline\n        ",id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.usrname=e}),placeholder:"Username",onKeydown:t[2]||(t[2]=Object(s["C"])((function(){return c.checkUsrname&&c.checkUsrname.apply(c,arguments)}),["enter"]))},null,544),[[s["z"],r.usrname]])]),Object(s["f"])("div",v,[Object(s["f"])("button",{class:"btn btn-blue",onClick:t[3]||(t[3]=function(){return c.checkUsrname&&c.checkUsrname.apply(c,arguments)})},"join chat")])])):Object(s["e"])("",!0)})),x=(n("498a"),{name:"HelloWorld",sockets:{connect:function(){}},data:function(){return{usrname:""}},methods:{checkUsrname:function(){""!==this.usrname.trim()&&(this.$store.commit("changeUsrname",this.usrname),this.$socket.client.emit("add_user",this.usrname),this.$store.commit("login",!0))}},computed:{isLoggedIn:function(){return this.$store.state.loggedIn},isConnected:function(){return this.$store.state.connected}}});n("2318");const w=c()(x,[["render",y],["__scopeId","data-v-42eef498"]]);var C=w,k=Object(s["E"])("data-v-0ae2e462");Object(s["r"])("data-v-0ae2e462");var M={key:0,class:"col-span-full lg:col-span-1 lg:col-start-2 min-h-screen"},_={class:"text-6xl my-14 px-4 py-2 w-full"},$={class:"bg-white shadow-xl overflow-hidden rounded mb-4 mt-4"},S={id:"chatlist",class:"h-96 overflow-y-scroll"},I={class:"w-full"},U={class:"flex items-center border-b border-t border-teal-700 py-2"},P={class:"flex justify-start px-3 py-2"};Object(s["p"])();var H=k((function(e,t,n,o,r,c){return c.getStateData.isLoggedIn&&c.getStateData.connected?(Object(s["o"])(),Object(s["d"])("div",M,[Object(s["f"])("div",_,[Object(s["f"])("h1",null,"Hi "+Object(s["x"])(c.getStateData.usrname),1)]),Object(s["f"])("div",$,[Object(s["f"])("ul",S,[(Object(s["o"])(!0),Object(s["d"])(s["a"],null,Object(s["u"])(r.messages,(function(e){return Object(s["o"])(),Object(s["d"])("li",{key:e,class:["px-4 py-2 break-words","Me"==e.user?"text-right":"text-left"]},Object(s["x"])(e.user)+": "+Object(s["x"])(e.text),3)})),128))]),Object(s["f"])("form",I,[Object(s["f"])("div",U,[Object(s["B"])(Object(s["f"])("input",{type:"text",class:"\n              appearance-none\n              bg-transparent\n              border-none\n              w-full\n              text-gray-700\n              mr-3\n              py-1\n              px-2\n              leading-tight\n              focus:outline-none\n            ",placeholder:"Message","aria-label":"Your Message",onKeydown:t[1]||(t[1]=Object(s["C"])(Object(s["D"])((function(){return c.sendMsg&&c.sendMsg.apply(c,arguments)}),["prevent"]),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.msg=e})},null,544),[[s["z"],r.msg]]),Object(s["f"])("button",{class:"\n              flex-shrink-0\n              btn btn-blue\n              border-none\n              text-sm\n              py-1\n              px-2\n              mx-2\n            ",type:"button",onClick:t[3]||(t[3]=function(){return c.sendMsg&&c.sendMsg.apply(c,arguments)})}," send ")])])]),Object(s["f"])("div",P,[Object(s["f"])("button",{class:"btn btn-blue",onClick:t[4]||(t[4]=function(){return c.logout&&c.logout.apply(c,arguments)})},"back")])])):Object(s["e"])("",!0)})),D=(n("d3b7"),n("25f0"),{name:"ChatConsole",data:function(){return{msg:"",messages:[],servername:"Server"}},sockets:{connect:function(){},add_user:function(){console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')},login:function(){this.addChatMessage({msg:"Willkomen beim Chat!",usrname:this.servername})},user_joined:function(e){this.addChatMessage({msg:e+" joined",usrname:this.servername})},user_left:function(e){this.addChatMessage({msg:e+" left",usrname:this.servername})},new_message:function(e){this.addChatMessage({msg:e.message,usrname:e.username})}},methods:{sendMsg:function(){var e=this.msg.toString().trim();e&&this.$store.state.loggedIn&&(this.addChatMessage({msg:this.msg.toString(),usrname:this.$store.state.usrname}),this.$socket.client.emit("new_message",this.msg.toString()),this.msg="")},addChatMessage:function(e){e.usrname==this.$store.state.usrname&&(e.usrname="Me"),this.messages.push({text:e.msg.toString(),user:e.usrname})},logout:function(){this.$store.commit("changeUsrname","unregistered"),this.$store.commit("login",!1)}},computed:{getStateData:function(){return{isLoggedIn:this.$store.state.loggedIn,usrname:this.$store.state.usrname,connected:this.$store.state.connected}}}});n("4ca9");const E=c()(D,[["render",H],["__scopeId","data-v-0ae2e462"]]);var T=E,L=n("12ae"),W=n.n(L),K=Object(s["E"])("data-v-89339d32");Object(s["r"])("data-v-89339d32");var N={key:0,class:"bg-color h-screen grid grid-rows-2 font-mono"},V=Object(s["f"])("div",{class:"row-span-1 grid items-end justify-items-center p-2 pt-8"},[Object(s["f"])("img",{src:W.a,alt:"drinking gif",width:"480",height:"270"})],-1),z=Object(s["f"])("div",{class:"row-span-1 row-start-2 p-2 grid items-center"},[Object(s["f"])("p",{class:"fg-color font-medium text-4xl pb-28"}," Connecting to server ... ")],-1);Object(s["p"])();var B=K((function(e,t,n,o,r,c){return c.isConnected?Object(s["e"])("",!0):(Object(s["o"])(),Object(s["d"])("div",N,[V,z]))})),J={name:"NoConnection",sockets:{connect:function(){this.$store.commit("isConnected",!0)}},computed:{isConnected:function(){return this.$store.state.connected}}};n("cc94");const A=c()(J,[["render",B],["__scopeId","data-v-89339d32"]]);var Y=A,q={name:"Home",components:{HelloWorld:C,ChatConsole:T,NoConnection:Y}};const F=c()(q,[["render",f]]);var G=F,Q=[{path:"/",name:"Home",component:G}],R=Object(d["a"])({history:Object(d["b"])(),routes:Q}),X=R,Z=n("5502"),ee=Object(Z["a"])({state:{loggedIn:!1,usrname:"utypednothing",connected:!1},mutations:{login:function(e,t){e.loggedIn=t},changeUsrname:function(e,t){e.usrname=t},isConnected:function(e,t){e.connected=t}},actions:{},modules:{}}),te=n("f87c"),ne=n("8e27"),se=(n("a766"),Object(ne["io"])("https://desolate-depths-24287.herokuapp.com/"));Object(s["c"])(u).use(te["a"],se,{store:ee,actionPrefix:"SOCKET_",eventToActionTransformer:function(e){return e}}).use(ee).use(X).mount("#app")},6624:function(e,t,n){},"866c":function(e,t,n){e.exports=n.p+"img/chat-app-logo.12b8546e.png"},a766:function(e,t,n){},cc94:function(e,t,n){"use strict";n("6624")},d302:function(e,t,n){},d4d9:function(e,t,n){"use strict";n("2df2")}});
//# sourceMappingURL=app.7d4944b1.js.map