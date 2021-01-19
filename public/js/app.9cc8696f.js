(function(t){function e(e){for(var a,r,n=e[0],l=e[1],c=e[2],u=0,d=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],a=!0,n=1;n<o.length;n++){var l=o[n];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var m=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"page-wrapper"}},[o("header",{staticClass:"alt",attrs:{id:"header"}},[t._m(0),o("nav",{attrs:{id:"nav"}},[o("ul",[t._m(1),t.isLoggedIn()?t._e():o("li",{staticClass:"current"},[o("a",{attrs:{href:"../login"}},[t._v("Login")])]),t.isLoggedIn()?o("li",{staticClass:"current"},[o("a",{attrs:{href:"../logout"}},[t._v("Logout")])]):t._e(),t.isLoggedIn()?o("li",{staticClass:"current"},[o("a",{attrs:{href:"../events"}},[t._v("Upcoming Events")])]):t._e(),t.isLoggedIn()?o("li",{staticClass:"current"},[o("a",{attrs:{href:"../events/new"}},[t._v("Start a Discussion")])]):t._e(),t.isLoggedIn()?t._e():o("li",[o("a",{staticClass:"button primary",attrs:{href:"../signup"}},[t._v("Sign Up")])])])])]),o("router-view")],1)])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",{attrs:{id:"logo"}},[o("a",{attrs:{href:"/"}},[t._v("ReadBetween")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"current"},[o("a",{attrs:{href:"/"}},[t._v("Welcome")])])}],r={methods:{isLoggedIn:function(){return!!localStorage.getItem("user_id")},getUserId:function(){return console.log("getting user id..."),localStorage.getItem("user_id")}}},n=r,l=o("2877"),c=Object(l["a"])(n,s,i,!1,null,null,null),m=c.exports,u=o("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("section",{attrs:{id:"banner"}},[o("div",{staticClass:"inner"},[o("p",[t._v("Stories are better when they're shared.")]),o("br"),o("header",[o("h2",[t._v("ReadBetween")])]),o("p",[t._v("An app that connects a community of book lovers "),o("br"),t._v(" through virtual discussions about their favorite reads.")])])])])}],p=o("bc3a"),_=o.n(p),g=(o("1157"),{data:function(){return{message:"Welcome to ReadBetween!"}},created:function(){console.log("in created"),this.eventsIndex()},methods:{eventsIndex:function(){var t=this;console.log("events index.."),_.a.get("/api/events").then((function(e){console.log(e.data),t.events=e.data}))}}}),f=g,b=Object(l["a"])(f,d,v,!1,null,null,null),h=b.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"events-new"},[o("div",{attrs:{id:"page-wrapper"}},[o("article",{attrs:{id:"main"}},[t._m(0),o("section",{staticClass:"wrapper style3 special container medium"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[o("ul",t._l(t.errors,(function(e){return o("li",{staticClass:"text-danger"},[t._v(t._s(e))])})),0),t._m(1),o("div",{staticClass:"form-group"},[o("label",[t._v("Name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-6 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Date: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),o("div",{staticClass:"col-6 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Time: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})])])]),o("div",{staticClass:"form-group"},[o("label",[t._v("Meeting Link: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.meeting_link,expression:"meeting_link"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.meeting_link},on:{input:function(e){e.target.composing||(t.meeting_link=e.target.value)}}})]),o("br"),t._m(2),o("div",{staticClass:"form-group"},[o("label",[t._v("ISBN13: ")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_id,expression:"book_id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_id},on:{input:function(e){e.target.composing||(t.book_id=e.target.value)}}}),o("h7",[o("strong",[t._v("**Please note to auto-populate book's title, author and description you must enter correct ISBN13.")])])],1),o("br"),o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-4 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Title: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_title,expression:"book_title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_title},on:{input:function(e){e.target.composing||(t.book_title=e.target.value)}}})])]),o("div",{staticClass:"col-4 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Subtitle: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_subtitle,expression:"book_subtitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_subtitle},on:{input:function(e){e.target.composing||(t.book_subtitle=e.target.value)}}})])]),o("div",{staticClass:"col-4 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Author: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_author,expression:"book_author"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_author},on:{input:function(e){e.target.composing||(t.book_author=e.target.value)}}})])])]),o("div",{staticClass:"form-group"},[o("label",[t._v("Description: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_description,expression:"book_description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_description},on:{input:function(e){e.target.composing||(t.book_description=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Book Cover Image Link: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.image},on:{input:function(e){e.target.composing||(t.image=e.target.value)}}}),o("h7",[o("strong",[t._v("**Book cover images from "),o("a",{attrs:{href:"https://www.goodreads.com/search"}},[t._v("GoodReads.com")]),t._v(" recommended.")])])],1),o("br"),o("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])])])},k=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"special container"},[o("span",{staticClass:"icon solid fa-book"}),o("h2",[t._v("Start a Discussion")]),o("p",[t._v("Use the form below to schedule your upcoming book discussion event!"),o("br")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",[o("strong",[t._v("Event Information")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",[o("strong",[t._v("Book Information")])])}],w=(o("b0c0"),{data:function(){return{name:"",date:"",time:"",meeting_link:"",image:"",book_id:"",book_title:"",book_author:"",book_subtitle:"",book_description:"",errors:[]}},methods:{submit:function(){var t=this,e={name:this.name,date:this.date,time:this.time,meeting_link:this.meeting_link,image:this.image,book_id:this.book_id,book_title:this.book_title,book_author:this.book_author,book_subtitle:this.book_subtitle,book_description:this.book_description};_.a.post("/api/events",e).then((function(e){t.$router.push("/events")})).catch((function(e){t.error=e.response.data.errors}))}}}),x=w,y=Object(l["a"])(x,C,k,!1,null,null,null),E=y.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("body",{staticClass:"no-sidebar is-preload"},[o("article",{attrs:{id:"main"}},[t._m(0),o("section",{staticClass:"wrapper style1 container special"},[o("div",{staticClass:"content"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-4 col-12-narrower"},[o("p",[t._v("Search Events: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{type:"text",placeholder:"Author or Title"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})])]),o("div",{staticClass:"col-4 col-12-narrower"}),o("div",{staticClass:"col-4 col-12-narrower"})])])]),o("article",{staticClass:"wrapper style3 container special"},[o("div",{staticClass:"content"},[o("div",{staticClass:"row"},t._l(t.orderBy(t.filterBy(t.events,t.searchTerm,"book_title","book_author"),"book_title","book_author"),(function(e){return o("div",{staticClass:"col-6 col-12-narrower"},[o("br"),o("p",[t._v(t._s(e.name)),o("br"),t._v(" "+t._s(e.date))]),o("router-link",{attrs:{to:"/events/"+e.id}},[o("img",{attrs:{src:e.image}}),o("p",[t._v(t._s(e.book_title)+" "+t._s(e.book_subtitle)),o("br"),t._v(" By: "+t._s(e.book_author))])])],1)})),0)])])])])},N=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"special container"},[o("span",{staticClass:"icon solid fa-book"}),o("h2",[t._v("Upcoming Book Discussions!")])])}],$=o("a7c6"),I=o.n($),S={mixins:[I.a.mixin],data:function(){return{message:"Upcoming Events!",events:[],searchTerm:""}},created:function(){console.log("in created"),this.eventsIndex()},methods:{eventsIndex:function(){var t=this;console.log("events index.."),_.a.get("/api/events").then((function(e){console.log(e.data),t.events=e.data}))}}},j=S,B=Object(l["a"])(j,P,N,!1,null,null,null),L=B.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"events-show"},[o("body",{staticClass:"right-sidebar is-preload"},[o("div",{attrs:{id:"page-wrapper"}},[o("article",{attrs:{id:"main"}},[o("header",{staticClass:"special container"},[o("span",{staticClass:"icon solid fa-book"}),o("h2",[t._v(t._s(t.event.name))]),o("p",[t._v("Hosted by: "+t._s(t.event.first_name)+" "+t._s(t.event.last_name))]),o("br")]),o("section",{staticClass:"wrapper style4 container"},[o("div",{staticClass:"row gtr-150"},[o("div",{staticClass:"col-6 col-12-narrower"},[o("div",{staticClass:"content"},[o("section",[o("a",{staticClass:"image featured",attrs:{href:"#"}},[o("img",{attrs:{src:t.event.image,alt:""}})])])])]),o("div",{staticClass:"col-6 col-12-narrower"},[o("div",{staticClass:"sidebar"},[o("section",[t._m(0),o("p",[o("strong",[t._v("Host Email:")]),o("a",{attrs:{href:"mailto:"+t.event.email}},[t._v(" "+t._s(t.event.email))]),o("br"),o("strong",[t._v("Event Date:")]),t._v(" "+t._s(t.event.date)),o("br"),o("strong",[t._v("Event Time:")]),t._v(" "+t._s(t.event.time)),o("br"),o("strong",[t._v("Meeting Link:")]),t._v(" "+t._s(t.event.meeting_link)+" "),o("br"),o("br"),t.$parent.getUserId()==t.event.user_id?o("router-link",{attrs:{to:"/events/"+t.event.id+"/edit"}},[o("strong",[t._v("Update Event Information")])]):t._e()],1)]),o("button",{on:{click:function(e){return t.submit()}}},[t._v("Register for Event")]),o("section",[t._m(1),t._m(2),o("p",[o("strong",[t._v("Title:")]),t._v(" "+t._s(t.event.book_title)+t._s(t.event.book_subtitle)+" "),o("br"),o("strong",[t._v("Author:")]),t._v(" "+t._s(t.event.book_author)),o("br"),o("strong",[t._v("ISBN13:")]),t._v(" "+t._s(t.event.book_id)),o("br")])])])])]),o("div",{staticClass:"row gtr-150"},[o("div",{staticClass:"col-12 col-12-narrower"},[o("div",{staticClass:"content"},[o("section",[o("strong",[t._v("Summary:")]),o("br"),o("p",[t._v(t._s(t.event.book_description))])])])])]),o("div",{staticClass:"row gtr-150"},[o("div",{staticClass:"col-12 col-12-narrower"},[o("div",{staticClass:"content"},[o("section",[o("strong",[t._v("Event Participants:")]),o("br"),t._l(t.event.registered_users,(function(e){return o("div",[o("strong",[t._v("- Name:")]),t._v(" "+t._s(e.first_name)+" "+t._s(e.last_name)+" "),o("br"),o("strong",[t._v("Email:")]),t._v(" "+t._s(e.email)+" ")])}))],2)])])]),o("br"),t._m(3)])])])])])},T=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h3",[t._v("Event Information:")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"image featured",attrs:{href:"#"}},[o("img",{attrs:{src:"images/pic04.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h3",[t._v("Book Information")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"HCB_comment_box"}},[o("a",{attrs:{href:"http://www.htmlcommentbox.com"}},[t._v("Comment Box")]),t._v(" is loading comments...")])}],D={data:function(){return{event:{},registered_users:[]}},created:function(){this.eventsShow()},methods:{eventsShow:function(){var t=this;console.log("events show.."),console.log(this.$route.params.id),_.a.get("/api/events/"+this.$route.params.id).then((function(e){console.log(e.data),t.event=e.data}))},submit:function(){var t=this;console.log("submitting..");var e={event_id:this.event.id};_.a.post("/api/eventregistrations",e).then((function(t){window.location.reload()})).catch((function(e){t.error=e.response.data.errors}))}}},U=D,R=Object(l["a"])(U,O,T,!1,null,null,null),A=R.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("body",{staticClass:"contact is-preload"},[o("div",{staticClass:"signup"},[o("div",{attrs:{id:"page-wrapper"}},[o("article",{attrs:{id:"main"}},[t._m(0),o("section",{staticClass:"wrapper style4 special container medium"},[o("div",{staticClass:"content"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[o("ul",t._l(t.errors,(function(e){return o("li",{staticClass:"text-danger"},[t._v(t._s(e))])})),0),o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-4 col-12-mobile"},[o("label",[t._v("First Name:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})]),o("div",{staticClass:"col-4 col-12-mobile"},[o("label",[t._v("Last Name:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}})]),o("div",{staticClass:"col-4 col-12-mobile"},[o("label",[t._v("Email:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"col-6 col-12-mobile"},[o("label",[t._v("Password:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("div",{staticClass:"col-6 col-12-mobile"},[o("label",[t._v("Confirm Password:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],attrs:{type:"password",placeholder:"Password Confirmation"},domProps:{value:t.passwordConfirmation},on:{input:function(e){e.target.composing||(t.passwordConfirmation=e.target.value)}}})]),o("div",{staticClass:"col-4 col-12-mobile"}),t._m(1),o("div",{staticClass:"col-4 col-12-mobile"})])])])])])])])])},H=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"special container"},[o("span",{staticClass:"icon solid fa-book"}),o("h2",[t._v("Create an Account")]),o("p",[t._v("Use the form to signup for a ReadBetween account.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-4 col-12-mobile"},[o("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])}],z={data:function(){return{first_name:"",last_name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var t=this,e={first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};_.a.post("/api/users",e).then((function(e){t.$router.push("/login")})).catch((function(e){t.errors=e.response.data.errors}))}}},W=z,q=Object(l["a"])(W,M,H,!1,null,null,null),F=q.exports,G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("div",{attrs:{id:"page-wrapper"}},[o("article",{attrs:{id:"main"}},[t._m(0),o("section",{staticClass:"wrapper style4 special container medium"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[o("ul",t._l(t.errors,(function(e){return o("li",{staticClass:"text-danger"},[t._v(t._s(e))])})),0),o("div",{staticClass:"form-group"},[o("label",[t._v("Email:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",[t._v("Password:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("br"),t._m(1)])])])])])},J=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"special container"},[o("span",{staticClass:"icon solid fa-book"}),o("h2",[t._v("Login")]),o("p",[t._v("Use the form to login into your ReadBetween Account.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-4 col-12-mobile"}),o("div",{staticClass:"col-4 col-12-mobile"},[o("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})]),o("div",{staticClass:"col-4 col-12-mobile"})])}],X={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var t=this,e={email:this.email,password:this.password};_.a.post("/api/sessions",e).then((function(e){_.a.defaults.headers.common["Authorization"]="Bearer "+e.data.jwt,localStorage.setItem("user_id",e.data.user_id),localStorage.setItem("jwt",e.data.jwt),t.$router.push("/events")})).catch((function(e){t.errors=["Invalid email or password."],t.email="",t.password=""}))}}},Y=X,K=Object(l["a"])(Y,G,J,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logout"})},Z=[],tt={created:function(){delete _.a.defaults.headers.common["Authorization"],localStorage.removeItem("user_id"),localStorage.removeItem("jwt"),this.$router.push("/")}},et=tt,ot=Object(l["a"])(et,V,Z,!1,null,null,null),at=ot.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"events-edit"},[o("div",{attrs:{id:"page-wrapper"}},[o("article",{attrs:{id:"main"}},[t._m(0),o("section",{staticClass:"wrapper style3 special container medium"},[o("div",{staticClass:"events-new"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[o("ul",t._l(t.errors,(function(e){return o("li",{staticClass:"text-danger"},[t._v(t._s(e))])})),0),t._m(1),o("div",{staticClass:"form-group"},[o("label",[t._v("Name: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-6 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Date: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),o("div",{staticClass:"col-6 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Time: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})])])]),o("div",{staticClass:"form-group"},[o("label",[t._v("Meeting Link: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.meeting_link,expression:"meeting_link"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.meeting_link},on:{input:function(e){e.target.composing||(t.meeting_link=e.target.value)}}})]),o("br"),t._m(2),o("div",{staticClass:"form-group"},[o("label",[t._v("ISBN13: ")]),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_id,expression:"book_id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_id},on:{input:function(e){e.target.composing||(t.book_id=e.target.value)}}})]),o("div",{staticClass:"row gtr-50"},[o("div",{staticClass:"col-4 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Title: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_title,expression:"book_title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_title},on:{input:function(e){e.target.composing||(t.book_title=e.target.value)}}})])]),o("div",{staticClass:"col-4 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Subtitle: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_subtitle,expression:"book_subtitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_subtitle},on:{input:function(e){e.target.composing||(t.book_subtitle=e.target.value)}}})])]),o("div",{staticClass:"col-4 col-12-mobile"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Author: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_author,expression:"book_author"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_author},on:{input:function(e){e.target.composing||(t.book_author=e.target.value)}}})])])]),o("div",{staticClass:"form-group"},[o("label",[t._v("Description: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_description,expression:"book_description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.book_description},on:{input:function(e){e.target.composing||(t.book_description=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Book Cover Image Link: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.image},on:{input:function(e){e.target.composing||(t.image=e.target.value)}}}),o("h7",[o("strong",[t._v("**Goodreads Book Cover Images Recommended")])])],1),o("br"),o("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])])])])},it=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"special container"},[o("span",{staticClass:"icon solid fa-book"}),o("h2",[t._v("Update Your Event")]),o("p",[t._v("Use the form below to make any changes to your upcoming book discussion event."),o("br")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",[o("strong",[t._v("Event Information")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",[o("strong",[t._v("Book Information")])])}],rt={data:function(){return{name:"",date:"",time:"",meeting_link:"",image:"",book_id:"",book_title:"",book_author:"",book_subtitle:"",book_description:"",errors:[]}},created:function(){console.log("in create..."),this.getEventData()},methods:{submit:function(){var t=this,e={name:this.name,date:this.date,time:this.time,meeting_link:this.meeting_link,image:this.image,book_id:this.book_id,book_title:this.book_title,book_author:this.book_author,book_subtitle:this.book_subtitle,book_description:this.book_description};_.a.patch("/api/events/"+this.$route.params.id,e).then((function(e){t.$router.push("/events/"+t.$route.params.id)})).catch((function(e){t.error=e.response.data.errors}))},getEventData:function(){var t=this;_.a.get("/api/events/"+this.$route.params.id).then((function(e){console.log(e.data),t.name=e.data.name,t.date=e.data.date,t.time=e.data.time,t.meeting_link=e.data.meeting_link,t.image=e.data.image,t.book_id=e.data.book_id,t.book_title=e.data.book_title,t.book_author=e.data.book_author,t.book_subtitle=e.data.book_subtitle,t.book_description=e.data.book_description}))}}},nt=rt,lt=Object(l["a"])(nt,st,it,!1,null,null,null),ct=lt.exports;a["a"].use(u["a"]);var mt=[{path:"/",name:"Home",component:h},{path:"/events/new",name:"events-new",component:E},{path:"/events",name:"events-index",component:L},{path:"/events/:id/edit",name:"events-edit",component:ct},{path:"/events/:id",name:"events-show",component:A},{path:"/signup",name:"signup",component:F},{path:"/Login",name:"login",component:Q},{path:"/Logout",name:"logout",component:at}],ut=new u["a"]({mode:"history",base:"/",routes:mt}),dt=ut;_.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",_.a.defaults.baseURL="/";var vt=localStorage.getItem("jwt");vt&&(_.a.defaults.headers.common["Authorization"]="Bearer "+vt),a["a"].config.productionTip=!1,new a["a"]({router:dt,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.9cc8696f.js.map