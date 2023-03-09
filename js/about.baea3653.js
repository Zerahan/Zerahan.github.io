(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1ba2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Resume")]),a("div",{staticClass:"paragraph"},[e._v(" Coming soon "),a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"d/resume-en.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v(" Download as PDF 🇬🇧")]),a("div",{staticStyle:{clear:"both"}})])]),a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/resume-photo.png",alt:"Photo"}})])])}],s=(a("3c43"),a("2877")),r={},o=Object(s["a"])(r,n,i,!1,null,"42fbc1ee",null);t["default"]=o.exports},"1e66":function(e,t,a){"use strict";var n=a("dec8"),i=a.n(n);i.a},"27bb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[a("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(a){return e.showDetails(t)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},i=[],s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":e.color}},[a("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),a("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},o=[],l=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),c=l,u=(a("1e66"),a("2877")),d=Object(u["a"])(c,r,o,!1,null,"e66acff8",null),p=d.exports,m=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:p},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),h=m,g=(a("5935"),Object(u["a"])(h,n,i,!1,null,"190958aa",null));t["a"]=g.exports},"304a":function(e,t,a){"use strict";var n=a("8fe5"),i=a.n(n);i.a},"3c43":function(e,t,a){"use strict";var n=a("7ec5"),i=a.n(n);i.a},"416f":function(e,t,a){},"4d97":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" The following are some stuff I've made or heavily contributed to. ")]),a("ProjectsList",{attrs:{projects:e.projects}}),a("div",{staticStyle:{"margin-top":"20px"}})],1)},i=[],s=a("2b0e"),r=a("27bb"),o=function(){function e(e,t,a,n,i,s,r){void 0===i&&(i="#000000"),void 0===s&&(s=!1),void 0===r&&(r=!1),this.id=e,this.name=t,this.htmlDescription=n,this.iconUrl=a,this.isHigh=s,this.isWide=r,this.accentColor=i}return e}(),l=o,c=[new l("project-1","Raising Hell","img/projects/raisinghelllogo.png",'\n    <div class="notice">\n        This page is incomplete, see Heist Game or Jumping Jack for better demonstrations.\n    </div>\n    <div class="paragraph">\n     <strong>Raising Hell</strong> was released to iOS, android, and windows stores. It was created in Unity\'s C# under Mish Mash Machine, where I was the lead programmer.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/uiRI75yEaPs" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Touch-screen compatible</li>\n        <li>Saved progress and high scores</li>\n        <li>Boss fights</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n\t\n    </div>\n    ',"#23bd69",!0),new l("project-2","Heist Game Clone","img/projects/HeistGame_MainEntrance_2ndPass.jpg",'\n    <div class="paragraph">\n        <strong>Heist Game Clone</strong> is a work in progress multiplayer stealth game that I\'m building in the Unreal Engine for practice/educational purposes.\n\t\tYou and three other players attempt to steal as much as you can without being detected.\n\t\tThis was made primarily in Blueprint for Unreal Engine 4. Some features required exposing native C++ functions to Blueprint.\n    </div>\n\t\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/winb_GRgGbY" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Gameplay :\n        <ul>\n        <li>Disable cameras and guards to make paths safer.</li>\n        <li>Elimite the camera guard to shut down all cameras.</li>\n        <li>Unlock doors to open new paths for both you and the guards</li>\n        <li>Pick up loot and throw it into the truck.</li>\n        <li>And get out before the alarm.</li>\n        </ul>\n\t\t\n\t\tTechnical Features :\n        <ul>\n        <li>Guards use a simple Behavior Tree to path between patrol nodes, and to wait at nodes that were marked for it.</li>\n        <li>Guards and civilians use the same class; a single bool determines their apperance, detection rate, and if they count against the guards killed limit.</li>\n        <li>Player and "suspicious activity" detection is done with the AI Perception Component. Cameras required a C++ function override for the component to be able to pitch up/down within blueprint.</li>\n        <li>Can pick up loot or bodies, lockpick doors and safes, and access camera systems with the [E] key.</li>\n        <li>When a level is finished, the player is returned to the main menu where they can select their next mission.</li>\n\t\t<li>Blocked out the devWarehouse level with a combination of BSP, custom models made with BSP->Static Mesh conversion, and some meshes from the Starter Content pack.</li>\n\t\t<li>Some custom models created with BSP to Static Mesh conversion.</li>\n        </ul>\n\t\t\n\t\tMarketplace Assets used :\n        <ul>\n        <li>Assetsville Town, created by Assetsville</li>\n        <li>POLYGON - City Pack, created by Synty Studios</li>\n        <li>POLYGON - Town Pack, created by Synty Studios</li>\n        <li>Modern City Downtown with Interiors Megapack (Modular Urban Buildings), created by Leartes Studios</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/HeistGame_Start.jpg" alt="Initial" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_LoadingBay_Blocking.jpg" alt="Loading bay, Gameplay Test" />\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/HeistGame_LoadingBay_2ndPass.jpg" alt="Loading Bay, 2nd mesh pass" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_Breakroom_2ndPass.jpg" alt="Breakroom, 2nd mesh pass" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_MainEntrance_2ndPass.jpg" alt="Main Entrance" />\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        Source code is available on <a href="https://github.com/zerahan/HeistClone" target="_blank">GitHub</a>.\n    </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#5a78af"),new l("project-3","RTS Clone","img/projects/RTS_Clone.jpg",'\n    <div class="notice">\n        This page is incomplete, see Heist Game or Jumping Jack for better demonstrations.\n    </div>\n    <div class="paragraph">\n        <strong>RTS Clone</strong> is a work-in-progress real-time strategy game.\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Source code is available on <a href="https://github.com/Zerahan/RTSClone" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#383838"),new l("project-4","Jumping Jack Clone","img/projects/jumpingjack_icon.jpg",'\n    <div class="paragraph">\n    <strong>Jumping Jack Clone</strong> is a clone of Jumping Jack by Imagine from 1983 that I\'ve remade with the Unreal Engine for practice/educational purposes.\n\tIt was made primarily in C++ with Visual Studio, for Unreal Engine 4.\n\tI built it in 29.5 hours as part of a challenge to translate the primary game features of an early game into the Unreal Engine.\n    </div>\n\t\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/IW1ezGDTk5k" frameborder="0" allowfullscreen></iframe>\n    </div>\n\t\n    <div class="paragraph">\n        Gameplay :\n        <ul>\n        <li>Press [spacebar] to jump through the gaps, get to the top to get to the next level.</li>\n        <li>Lose lives when you land back on the bottom.</li>\n        <li>New roaving hazards are added with each level.</li>\n        <li>Get a high score.</li>\n        </ul>\n\t\t\n        Technical Features :\n        <ul>\n        <li>Roving holes were made using hierarchical instanced static meshes and are fully customizable.</li>\n        <li>Modular enemies and hazards.</li>\n        <li>Perpetual gameplay that ratchets up the danger every time a level is completed.</li>\n        <li>High score system that persists through runs.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n\t\t\tSource code is available on <a href="https://github.com/Zerahan/JumpingJackClone" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/jumpingjack_icon.jpg" alt="Basic Screenshot" />\n    </div>\n    ',"#e80fb7")],u=s["a"].extend({name:"GameProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:c}}}),d=u,p=a("2877"),m=Object(p["a"])(d,n,i,!1,null,null,null);t["default"]=m.exports},5935:function(e,t,a){"use strict";var n=a("416f"),i=a.n(n);i.a},"67f3":function(e,t,a){"use strict";var n=a("ee3f"),i=a.n(n);i.a},"6d3c":function(e,t,a){},7800:function(e,t,a){"use strict";var n=a("6d3c"),i=a.n(n);i.a},"7c58":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Other stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" Coming Soon ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},i=[],s=a("2b0e"),r=a("27bb"),o=[],l=s["a"].extend({name:"OtherProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:o}}}),c=l,u=a("2877"),d=Object(u["a"])(c,n,i,!1,null,null,null);t["default"]=d.exports},"7ec5":function(e,t,a){},"8cdb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"http-404"},[e._v("404 🙈")])},i=[],s=(a("67f3"),a("2877")),r={},o=Object(s["a"])(r,n,i,!1,null,"c64612d2",null);t["default"]=o.exports},"8fe5":function(e,t,a){},b8fa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[e._v("I'm looking for a job !"),a("br"),e._v("Feel free to contact me about any opportunity.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:jisbell01@gmail.com",target:"_blank"}},[e._v("jisbell01@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/james-isbell/",target:"_blank"}},[e._v("linkedin.com/in/james-isbell/")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/Zerahan",target:"_blank"}},[e._v("github.com/Zerahan")])])])])}],s=(a("7800"),a("2877")),r={},o=Object(s["a"])(r,n,i,!1,null,"975b724a",null);t["default"]=o.exports},dec8:function(e,t,a){},ee3f:function(e,t,a){},f820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[e._v("Hello!")]),a("div",{staticClass:"paragraph"},[e._m(0),a("div",{staticStyle:{"margin-top":"20px"}},[e._v("I've worked on "),a("router-link",{attrs:{to:"/game-projects"}},[e._v("these projects")]),e._v(".")],1),a("div",{staticStyle:{"margin-top":"40px"}},[e._v("I'm "),a("strong",[e._v("currently looking for a job")]),e._v(" as a game developer. You can reach me at "),a("a",{attrs:{href:"mailto:jisbell01@gmail.com"}},[e._v("jisbell01@gmail.com")]),e._v(" or "),a("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(".")],1)]),e._m(1),a("div",{staticStyle:{clear:"both"}})])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" I'm "),a("strong",[e._v("James")]),e._v(", game developer."),a("br"),e._v(" Welcome to my work-in-progress website. I enjoy programming, level design, UI design, UX, and 3D modeling. I'm most familiar with Unreal Engine's C++ and Unity's C#. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Avatar"}})])}],s=(a("304a"),a("2877")),r={},o=Object(s["a"])(r,n,i,!1,null,"499e7360",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.baea3653.js.map