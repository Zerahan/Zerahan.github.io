(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1e66":function(t,e,a){"use strict";var i=a("dec8"),n=a.n(i);n.a},"416f":function(t,e,a){},"4d97":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Projects")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" The following are some stuff I've made or heavily contributed to. ")]),a("ProjectsList",{attrs:{projects:t.projects}}),a("div",{staticStyle:{"margin-top":"20px"}})],1)},n=[],s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"projects-list"},[t._l(t.projects,(function(e){return[a("div",{key:e.id,staticClass:"project-item",class:{wide:e.isWide,high:e.isHigh},on:{click:function(a){return t.showDetails(e)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+e.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":e.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[t._v(" "+t._s(e.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:t.showPopup,title:t.popupTitle,htmlContent:t.popupContent,color:t.popupColor},on:{close:function(e){t.showPopup=!1}}})],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":t.color}},[a("h1",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"dialog-close",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])])])]):t._e()])},c=[],p=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(t){console.log("fetching image "+t)}}}),u=p,d=(a("1e66"),a("2877")),h=Object(d["a"])(u,l,c,!1,null,"e66acff8",null),g=h.exports,m=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:g},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(t){this.popupTitle=t.name,this.popupColor=t.accentColor,this.popupContent=t.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),v=m,f=(a("5935"),Object(d["a"])(v,r,o,!1,null,"190958aa",null)),b=f.exports,_=function(){function t(t,e,a,i,n,s,r){void 0===n&&(n="#000000"),void 0===s&&(s=!1),void 0===r&&(r=!1),this.id=t,this.name=e,this.htmlDescription=i,this.iconUrl=a,this.isHigh=s,this.isWide=r,this.accentColor=n}return t}(),j=_,w=[new j("project-1","Raising Hell","img/projects/raisinghelllogo.png",'\n    <div class="paragraph">\n     <strong>Raising Hell</strong> was created in Unity for android, iOS, and windows devices in the six months leading up to PAX South 2015 where it was showcased as part of Microsoft\'s indie booth.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/uiRI75yEaPs" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Touch-screen compatible</li>\n        <li>Saved progress and high scores</li>\n        <li>Boss fights</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />\n        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />\n    </div>\n    ',"#23bd69",!0),new j("project-2","Heist Game","img/projects/HeistGame_Icon.jpg",'\n    <div class="paragraph">\n        <strong>Heist Game</strong> is a work in progress multiplayer stealth game where you and three other players attempt to steal as much as you can without being detected.\n        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Disable cameras and guards to open new paths.</li>\n        <li>Pick up loot and throw it into the truck.</li>\n        <li>And get out before the alarm.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/HeistGame_Start.jpg" alt="Initial" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_Blocked.jpg" alt="Blocked out" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_FirstPassA.jpg" alt="First Pass" />\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        Source code is available on <a href="https://github.com/zerahan" target="_blank">GitHub</a>.\n    </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#5a78af"),new j("project-3","RTS Clone","img/projects/RTS_Clone.jpg",'\n    <div class="paragraph">\n        <strong>RTS Clone</strong> is a work-in-progress real-time strategy game.\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Source code is available on <a href="https://github.com/zerahan" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#383838"),new j("project-4","Jumping Jack Clone","img/projects/jumpingjack_icon.jpg",'\n    <div class="paragraph">\n    <strong>Jumping Jack Clone</strong> is a clone of Jumping Jack by Imagine from 1983 that I\'ve remade with the Unreal Engine.\n    </div>\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Roving holes were made using hierarchical instanced static meshes and are fully customizable.</li>\n        <li>Modular enemies and hazards.</li>\n        <li>Perpetual gameplay that ratchets up the danger every time a level is completed.</li>\n        <li>High score system.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />\n        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />\n    </div>\n    ',"#e80fb7")],y=s["a"].extend({name:"GameProjects",components:{ProjectsList:b},data:function(){return{projects:w}}}),C=y,k=Object(d["a"])(C,i,n,!1,null,null,null);e["default"]=k.exports},5935:function(t,e,a){"use strict";var i=a("416f"),n=a.n(i);n.a},"67f3":function(t,e,a){"use strict";var i=a("ee3f"),n=a.n(i);n.a},"6d3c":function(t,e,a){},7800:function(t,e,a){"use strict";var i=a("6d3c"),n=a.n(i);n.a},8278:function(t,e,a){},"8cdb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"http-404"},[t._v("404 🙈")])},n=[],s=(a("67f3"),a("2877")),r={},o=Object(s["a"])(r,i,n,!1,null,"c64612d2",null);e["default"]=o.exports},b8fa:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[t._v("I'm looking for a job !"),a("br"),t._v("Feel free to contact me about any opportunity.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:jisbell01@gmail.com",target:"_blank"}},[t._v("jisbell01@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/james-isbell/",target:"_blank"}},[t._v("linkedin.com/in/james-isbell/")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/Zerahan",target:"_blank"}},[t._v("github.com/Zerahan")])])])])}],s=(a("7800"),a("2877")),r={},o=Object(s["a"])(r,i,n,!1,null,"975b724a",null);e["default"]=o.exports},dca3:function(t,e,a){"use strict";var i=a("8278"),n=a.n(i);n.a},dec8:function(t,e,a){},ee3f:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[t._v("Hello!")]),a("div",{staticClass:"paragraph"},[t._m(0),a("div",{staticStyle:{"margin-top":"20px"}},[t._v("I've worked on "),a("router-link",{attrs:{to:"/game-projects"}},[t._v("thes projects.")]),t._v(". "),a("div",{staticStyle:{"margin-top":"40px"}},[t._v("I'm "),a("strong",[t._v("currently looking for a job")]),t._v(" as a game developer. You can reach me at "),a("a",{attrs:{href:"mailto:jisbell01@gmail.com"}},[t._v("jisbell01@gmail.com")]),t._v(" or "),a("router-link",{attrs:{to:"/contact"}},[t._v("through here")]),t._v(".")],1)],1),t._m(1),a("div",{staticStyle:{clear:"both"}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" I'm "),a("strong",[t._v("James")]),t._v(", game developer."),a("br"),t._v(" I enjoy programming, level design, UI design, UX, and 3D modeling. I'm most familiar with Unreal Engine's C++ and Unity's C#. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Avatar"}})])}],s=(a("dca3"),a("2877")),r={},o=Object(s["a"])(r,i,n,!1,null,"0b6c5198",null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.5d189d12.js.map