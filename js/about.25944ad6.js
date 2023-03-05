(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1ba2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Resume")]),a("div",{staticClass:"paragraph"},[t._v(" Coming soon "),a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"d/resume-en.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),t._v(" Download as PDF 🇬🇧")]),a("div",{staticStyle:{clear:"both"}})])]),a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/resume-photo.png",alt:"Photo"}})])])}],s=(a("3c43"),a("2877")),o={},r=Object(s["a"])(o,n,i,!1,null,"42fbc1ee",null);e["default"]=r.exports},"1e66":function(t,e,a){"use strict";var n=a("dec8"),i=a.n(n);i.a},"27bb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"projects-list"},[t._l(t.projects,(function(e){return[a("div",{key:e.id,staticClass:"project-item",class:{wide:e.isWide,high:e.isHigh},on:{click:function(a){return t.showDetails(e)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+e.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":e.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[t._v(" "+t._s(e.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:t.showPopup,title:t.popupTitle,htmlContent:t.popupContent,color:t.popupColor},on:{close:function(e){t.showPopup=!1}}})],1)},i=[],s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":t.color}},[a("h1",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"dialog-close",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])])])]):t._e()])},r=[],l=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(t){console.log("fetching image "+t)}}}),c=l,d=(a("1e66"),a("2877")),p=Object(d["a"])(c,o,r,!1,null,"e66acff8",null),u=p.exports,m=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:u},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(t){this.popupTitle=t.name,this.popupColor=t.accentColor,this.popupContent=t.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),h=m,g=(a("5935"),Object(d["a"])(h,n,i,!1,null,"190958aa",null));e["a"]=g.exports},"304a":function(t,e,a){"use strict";var n=a("8fe5"),i=a.n(n);i.a},"3c43":function(t,e,a){"use strict";var n=a("7ec5"),i=a.n(n);i.a},"416f":function(t,e,a){},"4d97":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" The following are some stuff I've made or heavily contributed to. ")]),a("ProjectsList",{attrs:{projects:t.projects}}),a("div",{staticStyle:{"margin-top":"20px"}})],1)},i=[],s=a("2b0e"),o=a("27bb"),r=function(){function t(t,e,a,n,i,s,o){void 0===i&&(i="#000000"),void 0===s&&(s=!1),void 0===o&&(o=!1),this.id=t,this.name=e,this.htmlDescription=n,this.iconUrl=a,this.isHigh=s,this.isWide=o,this.accentColor=i}return t}(),l=r,c=[new l("project-1","Raising Hell","img/projects/raisinghelllogo.png",'\n    <div class="notice">\n        This page is incomplete, see Heist Game or Jumping Jack for better demonstrations.\n    </div>\n    <div class="paragraph">\n     <strong>Raising Hell</strong> was released to iOS, android, and windows stores. It was created in Unity\'s C# under Mish Mash Machine, where I was the lead programmer.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/uiRI75yEaPs" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Touch-screen compatible</li>\n        <li>Saved progress and high scores</li>\n        <li>Boss fights</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n\t\n    </div>\n    ',"#23bd69",!0),new l("project-2","Heist Game","img/projects/HeistGame_MainEntrance_2ndPass.jpg",'\n    <div class="paragraph">\n        <strong>Heist Game</strong> is a work in progress multiplayer stealth game where you and three other players attempt to steal as much as you can without being detected. It is built in Unreal Engine 4, mostly with Unreal\'s Blueprint system.\n    </div>\n\n    <div class="paragraph">\n        Gameplay :\n        <ul>\n        <li>Disable cameras and guards to make paths safer.</li>\n        <li>Elimite the camera guard to shut down all cameras.</li>\n        <li>Unlock doors to open new paths for both you and the guards</li>\n        <li>Pick up loot and throw it into the truck.</li>\n        <li>And get out before the alarm.</li>\n        </ul>\n\t\t\n\t\tTechnical Features:\n        <ul>\n        <li>Guards use a simple Behavior Tree to path between patrol nodes, and to wait at nodes that were marked for it.</li>\n        <li>Guards and civilians use the same class; a single bool determines their apperance, detection rate, and if they count against the guards killed limit.</li>\n        <li>Player and "suspicious activity" detection is done with the AI Perception Component. Cameras required a C++ function override for the component to be able to pitch up/down within blueprint.</li>\n        <li>Can pick up loot or bodies, lockpick doors and safes, and access camera systems with the [E] key.</li>\n        <li>When a level is finished, the player is returned to the main menu where they can select their next mission.</li>\n\t\t<li>Blocked out the devWarehouse level with a combination of BSP, custom models made with BSP->Static Mesh conversion, and some meshes from the Starter Content pack.</li>\n\t\t<li>Some custom models created with BSP to Static Mesh conversion.</li>\n        </ul>\n\t\t\n\t\tMarketplace Assets used:\n        <ul>\n        <li>Assetsville Town, created by Assetsville</li>\n        <li>POLYGON - City Pack, created by Synty Studios</li>\n        <li>POLYGON - Town Pack, created by Synty Studios</li>\n        <li>Modern City Downtown with Interiors Megapack (Modular Urban Buildings), created by Leartes Studios</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/HeistGame_Start.jpg" alt="Initial" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_LoadingBay_Blocking.jpg" alt="Loading bay, Gameplay Test" />\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/HeistGame_LoadingBay_2ndPass.jpg" alt="Loading Bay, 2nd mesh pass" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_Breakroom_2ndPass.jpg" alt="Breakroom, 2nd mesh pass" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_MainEntrance_2ndPass.jpg" alt="Main Entrance" />\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        Source code is available on <a href="https://github.com/zerahan/HeistClone" target="_blank">GitHub</a>.\n    </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#5a78af"),new l("project-3","RTS Clone","img/projects/RTS_Clone.jpg",'\n    <div class="notice">\n        This page is incomplete, see Heist Game or Jumping Jack for better demonstrations.\n    </div>\n    <div class="paragraph">\n        <strong>RTS Clone</strong> is a work-in-progress real-time strategy game.\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Source code is available on <a href="https://github.com/Zerahan/RTSClone" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#383838"),new l("project-4","Jumping Jack Clone","img/projects/jumpingjack_icon.jpg",'\n    <div class="paragraph">\n    <strong>Jumping Jack Clone</strong> is a clone of Jumping Jack by Imagine from 1983 that I\'ve remade with the Unreal Engine.\n    </div>\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Roving holes were made using hierarchical instanced static meshes and are fully customizable.</li>\n        <li>Modular enemies and hazards.</li>\n        <li>Perpetual gameplay that ratchets up the danger every time a level is completed.</li>\n        <li>High score system.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n\t\t\tSource code is available on <a href="https://github.com/Zerahan/JumpingJackClone" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />\n        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />\n    </div>\n    ',"#e80fb7")],d=s["a"].extend({name:"GameProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:c}}}),p=d,u=a("2877"),m=Object(u["a"])(p,n,i,!1,null,null,null);e["default"]=m.exports},5935:function(t,e,a){"use strict";var n=a("416f"),i=a.n(n);i.a},"67f3":function(t,e,a){"use strict";var n=a("ee3f"),i=a.n(n);i.a},"6d3c":function(t,e,a){},7800:function(t,e,a){"use strict";var n=a("6d3c"),i=a.n(n);i.a},"7c58":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Other stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" Coming Soon ")]),a("ProjectsList",{attrs:{projects:t.projects}})],1)},i=[],s=a("2b0e"),o=a("27bb"),r=[],l=s["a"].extend({name:"OtherProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:r}}}),c=l,d=a("2877"),p=Object(d["a"])(c,n,i,!1,null,null,null);e["default"]=p.exports},"7ec5":function(t,e,a){},"8cdb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"http-404"},[t._v("404 🙈")])},i=[],s=(a("67f3"),a("2877")),o={},r=Object(s["a"])(o,n,i,!1,null,"c64612d2",null);e["default"]=r.exports},"8fe5":function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[t._v("I'm looking for a job !"),a("br"),t._v("Feel free to contact me about any opportunity.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:jisbell01@gmail.com",target:"_blank"}},[t._v("jisbell01@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/james-isbell/",target:"_blank"}},[t._v("linkedin.com/in/james-isbell/")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/Zerahan",target:"_blank"}},[t._v("github.com/Zerahan")])])])])}],s=(a("7800"),a("2877")),o={},r=Object(s["a"])(o,n,i,!1,null,"975b724a",null);e["default"]=r.exports},dec8:function(t,e,a){},ee3f:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[t._v("Hello!")]),a("div",{staticClass:"paragraph"},[t._m(0),a("div",{staticStyle:{"margin-top":"20px"}},[t._v("I've worked on "),a("router-link",{attrs:{to:"/game-projects"}},[t._v("these projects")]),t._v(".")],1),a("div",{staticStyle:{"margin-top":"40px"}},[t._v("I'm "),a("strong",[t._v("currently looking for a job")]),t._v(" as a game developer. You can reach me at "),a("a",{attrs:{href:"mailto:jisbell01@gmail.com"}},[t._v("jisbell01@gmail.com")]),t._v(" or "),a("router-link",{attrs:{to:"/contact"}},[t._v("through here")]),t._v(".")],1)]),t._m(1),a("div",{staticStyle:{clear:"both"}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" I'm "),a("strong",[t._v("James")]),t._v(", game developer."),a("br"),t._v(" Welcome to my work-in-progress website. I enjoy programming, level design, UI design, UX, and 3D modeling. I'm most familiar with Unreal Engine's C++ and Unity's C#. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Avatar"}})])}],s=(a("304a"),a("2877")),o={},r=Object(s["a"])(o,n,i,!1,null,"499e7360",null);e["default"]=r.exports}}]);
//# sourceMappingURL=about.25944ad6.js.map