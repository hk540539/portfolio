(this.webpackJsonpresume_website_workshop=this.webpackJsonpresume_website_workshop||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/HEMANTH.f73cc5dc.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/Ecom.1fd7e829.PNG"},25:function(e,t,a){e.exports=a.p+"static/media/Invite.383474bd.PNG"},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),i=(a(31),a(32),a(13)),s=a(10),o=a(2),m=a(3),u=a(5),p=a(4),h=a(6),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("li",{id:this.props.item},c.a.createElement(i.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item)},this.props.item))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).activeitem=function(e){a.state.NavItemActive.length>0&&document.getElementById(a.state.NavItemActive).classList.remove("active"),a.setState({NavItemActive:e},(function(){document.getElementById(a.state.NavItemActive).classList.add("active")}))},a.state={NavItemActive:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(E,{item:"Home",tolink:"/",activec:this.activeitem}),c.a.createElement(E,{item:"About",tolink:"/about",activec:this.activeitem}),c.a.createElement(E,{item:"Education",tolink:"/education",activec:this.activeitem}),c.a.createElement(E,{item:"Projects",tolink:"/projects",activec:this.activeitem}),c.a.createElement(E,{item:"Skills",tolink:"/skills",activec:this.activeitem}),c.a.createElement(E,{item:"Contact",tolink:"/contact",activec:this.activeitem})))}}]),t}(n.Component),b=a(22),v=a.n(b),f=a(23),j=a.n(f),O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"social"},c.a.createElement("a",{href:"https://github.com/hk540539/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{class:"fab fa-github"})))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv home"},c.a.createElement("img",{src:j.a,className:"profilepic"}),c.a.createElement(v.a,{className:"typingeffect",text:["I am Hemanth Kumar","I am a QA/Web developer"],speed:100,eraseDelay:700}),c.a.createElement(O,null))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"About Me"),c.a.createElement("h1",null,"I'm Hemanth Kumar"),c.a.createElement("h3",null,"Full Stack React Web ",c.a.createElement("u",null,"Developer")," | QA ",c.a.createElement("u",null,"Engineer")),c.a.createElement("br",null),c.a.createElement("p",null,"I started my journey as QA Enginner where I explored manual testing for all leading Virtual Reality,Augumented Reality and Mixed Reality devices for a collabration platform. Implemented Automation for web dashboard using ",c.a.createElement("b",null,"WebDriverIO")," and ",c.a.createElement("b",null,"MochaJs"),". Web development is my center of interest, i always love the idea of cross-platform development, 1-n one code base deploy into almost any platform, which web technology like Javascript enables me to do. I also like creating Interactive UI components for better UX using ",c.a.createElement("b",null,"ReactJS"),"."))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"widecard"},c.a.createElement("div",{class:"compdet"},c.a.createElement("h3",null,this.props.title),c.a.createElement("h4",{class:"secondtext"},this.props.where),c.a.createElement("h4",{class:"secondtext"},this.props.from," - ",this.props.to)))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"My Education"),c.a.createElement(N,{title:"B.Tech Electronics and Communication Engineering",where:"Sree Rama Engineering College",from:"August 2013",to:"April 2017"}),c.a.createElement(N,{title:"Schooling",where:"Kendriya Vidyalaya",from:"2001",to:"2011"}))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={myskills:["HTML","CSS","JS","NodeJS","REACT JS","FIREBASE","Expressjs","MongoDB","MochaJS","WebDriverIO"]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv skills"},c.a.createElement("h1",{className:"subtopic"},"My Skills"),c.a.createElement("ul",null,this.state.myskills.map((function(e){return c.a.createElement("li",null,e)}))))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"condiv"},c.a.createElement("h1",{className:"subtopic"},"Contact Me"),c.a.createElement("h3",null,"Email : hemanthkumar.btech@gmail.com"),c.a.createElement("h3",null,"Mob: +91 7013752181"),c.a.createElement(O,null))}}]),t}(n.Component),C=a(24),w=a.n(C),A=a(25),x=a.n(A),J=["ReactJS","Redux Sagas","Firebase","ExpressJs","Nodejs","Heroku"],M=["ReactJS","ContextAPI","MongoDB","ExpressJs","Nodejs","Heroku"],R=function(){return c.a.createElement("div",{className:"proj"},c.a.createElement("h1",{className:"projectHeading"},"Projects"),c.a.createElement("div",{className:" projectContainer"},c.a.createElement("div",{className:"item1"},c.a.createElement("div",{className:"imageContainer"},c.a.createElement("img",{src:w.a,className:"background-image",alt:"No pic"})),c.a.createElement("div",{className:"contentContainer"},c.a.createElement("h1",{className:"subtopics"},"Ecommerce Site"),c.a.createElement("ul",{className:"listStyle"},J.map((function(e){return c.a.createElement("li",{className:"listItem"},e)}))),c.a.createElement("a",{className:"nones",href:"https://ecom-live.herokuapp.com/",target:"_blank"},"Visit Site"))),c.a.createElement("div",{className:"item1"},c.a.createElement("div",{className:"imageContainer"},c.a.createElement("img",{src:x.a,className:"background-image",alt:"No pic"})),c.a.createElement("div",{className:"contentContainer"},c.a.createElement("h1",{className:"subtopics"},"Party Invite Site"),c.a.createElement("ul",{className:"listStyle"},M.map((function(e){return c.a.createElement("li",{className:"listItem"},e)}))),c.a.createElement("a",{className:"nones",href:"https://shielded-reaches-07712.herokuapp.com/",target:"_blank"},"Visit Site")))))};var H=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(s.a,{exact:!0,path:"/"},c.a.createElement(g,null)),c.a.createElement(s.a,{path:"/about"},c.a.createElement(k,null)),c.a.createElement(s.a,{path:"/education"},c.a.createElement(y,null)),c.a.createElement(s.a,{path:"/skills"},c.a.createElement(I,null)),c.a.createElement(s.a,{path:"/projects"},c.a.createElement(R,null)),c.a.createElement(s.a,{path:"/contact"},c.a.createElement(S,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e263c4c8.chunk.js.map