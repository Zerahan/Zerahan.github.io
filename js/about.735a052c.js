(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0bf1":function(t,e,a){"use strict";var s=a("d818"),n=a.n(s);n.a},"1ba2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Resume")]),a("div",{staticClass:"paragraph"},[t._v(" I'm "),a("strong",[t._v("Name")]),t._v(", career description, specifiers. "),a("br"),t._v("Summary l1 "),a("br"),t._v("Summary l2 "),a("br"),t._v("Summary l3 "),a("br"),a("br"),t._v("Summary l4 "),a("router-link",{attrs:{to:"/contact"}},[t._v("contact me")]),t._v(". "),a("br"),a("br"),t._v("Summary l5 "),t._m(0)],1),t._m(1),a("div",{staticStyle:{clear:"both"}}),a("div",{staticClass:"full-content"},[a("h2",[t._v("Work experience")]),a("h3",[t._v("Job")]),a("h4",[t._v("Years")]),a("div",[t._v("Description")]),a("div",{staticClass:"tech-stack"},[t._v("skills used")]),a("h3",[t._v("Job")]),a("h4",[t._v("Years")]),a("div",[t._v("Description")]),a("div",{staticClass:"tech-stack"},[t._v("Skills used")]),a("h3",[t._v("Job")]),a("h4",[t._v("Years")]),a("div",[t._v("Description")]),a("div",{staticClass:"tech-stack"},[t._v("Skills used")]),a("h2",[t._v("Skills")]),a("div",{staticClass:"skill-set"},[a("h3",[t._v("Category")]),a("SkillRate",{attrs:{name:"Example skill",rate:5}})],1),a("div",{staticClass:"skill-set"},[a("h3",[t._v("Another category")]),a("SkillRate",{attrs:{name:"example",rate:1}})],1),a("div",{staticStyle:{clear:"both"}}),a("h2",[t._v("Education")]),a("h3",[t._v("School")]),a("h4",[t._v("Degree")]),a("div",[t._v("focus")]),a("h2",[t._v("Languages")]),a("h3",[t._v("American")]),a("div",[t._v("Basic knowledge but I know lots of one-liners")]),a("h3",[t._v("That's it")]),a("div",[t._v("Who needs another language when you speak American?")]),a("h2",[t._v("Besides...")]),t._m(2)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"d/resume-en.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),t._v(" Download as PDF 🇬🇧")]),a("a",{staticClass:"download-link",attrs:{href:"d/cv-fr.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),t._v(" Télécharger en PDF 🇫🇷")]),a("div",{staticStyle:{clear:"both"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/resume-photo.png",alt:"Photo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("❤️")]),a("div",[t._v("thing")]),a("h3",[t._v("🧡")]),a("div",[t._v("other thing")]),a("h3",[t._v("💛")]),a("div",[t._v("yet another thing")]),a("h3",[t._v("💚")]),a("div",[t._v("more thing")])])}],i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"skill-name"},[t._v(t._s(t.name))]),a("div",{staticClass:"skill-rate"},[t._l(5,(function(e){return[e<=t.rate?a("div",{key:t.name+"-"+e,staticClass:"circle circle-full"}):t._e(),e>t.rate?a("div",{key:t.name+"-"+e,staticClass:"circle circle-empty"}):t._e()]}))],2),a("div",{staticClass:"clear"})])},o=[],l=i["a"].extend({name:"SkillRate",props:{name:String,rate:Number}}),c=l,p=(a("bd5f"),a("2877")),h=Object(p["a"])(c,r,o,!1,null,"c97307b4",null),d=h.exports,u=i["a"].extend({name:"Resume",components:{SkillRate:d}}),v=u,m=(a("0bf1"),Object(p["a"])(v,s,n,!1,null,"4019bd3a",null));e["default"]=m.exports},"1e66":function(t,e,a){"use strict";var s=a("dec8"),n=a.n(s);n.a},"27bb":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"projects-list"},[t._l(t.projects,(function(e){return[a("div",{key:e.id,staticClass:"project-item",class:{wide:e.isWide,high:e.isHigh},on:{click:function(a){return t.showDetails(e)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+e.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":e.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[t._v(" "+t._s(e.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:t.showPopup,title:t.popupTitle,htmlContent:t.popupContent,color:t.popupColor},on:{close:function(e){t.showPopup=!1}}})],1)},n=[],i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":t.color}},[a("h1",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"dialog-close",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])])])]):t._e()])},o=[],l=i["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(t){console.log("fetching image "+t)}}}),c=l,p=(a("1e66"),a("2877")),h=Object(p["a"])(c,r,o,!1,null,"e66acff8",null),d=h.exports,u=i["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:d},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(t){this.popupTitle=t.name,this.popupColor=t.accentColor,this.popupContent=t.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),v=u,m=(a("5935"),Object(p["a"])(v,s,n,!1,null,"190958aa",null));e["a"]=m.exports},"3e9b":function(t,e,a){},"416f":function(t,e,a){},"4d97":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" The following are some stuff I've made or heavily contributed to. ")]),a("ProjectsList",{attrs:{projects:t.projects}}),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px"}},[t._v(" There is more to see on "),a("a",{attrs:{target:"_blank",href:"https://someexternalwebsite.com"}},[t._v("some external website")])])}],i=a("2b0e"),r=a("27bb"),o=a("983d"),l=[new o["a"]("project-1","Raising Hell","img/projects/raisinghelllogo.png",'\n    <div class="paragraph">\n     <strong>Raising Hell</strong> was created in Unity for android, iOS, and windows devices in the six months leading up to PAX South 2015 where it was showcased as part of Microsoft\'s indie booth.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/uiRI75yEaPs" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Touch-screen compatible</li>\n        <li>Saved progress and high scores</li>\n        <li>Boss fights</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />\n        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />\n    </div>\n    ',"#23bd69",!0),new o["a"]("project-2","Heist Game","img/projects/HeistGame_Icon.jpg",'\n    <div class="paragraph">\n        <strong>Heist Game</strong> is a work in progress multiplayer stealth game where you and three other players attempt to steal as much as you can without being detected.\n        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Disable cameras and guards to open new paths.</li>\n        <li>Pick up loot and throw it into the truck.</li>\n        <li>And get out before the alarm.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/HeistGame_Start.jpg" alt="Initial" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_Blocked.jpg" alt="Blocked out" />\n        <img class="phone-screenshot" src="img/projects/HeistGame_FirstPassA.jpg" alt="First Pass" />\n    </div>\n\n    <div class="paragraph">\n    <div class="notice">\n        Source code is available on <a href="https://github.com/zerahan" target="_blank">GitHub</a>.\n    </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#5a78af"),new o["a"]("project-3","RTS Clone","img/projects/RTS_Clone.jpg",'\n    <div class="paragraph">\n        <strong>RTS Clone</strong> is a work-in-progress real-time strategy game.\n    </div>\n\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        Source code is available on <a href="https://github.com/zerahan" target="_blank">GitHub</a>.\n        </div>\n    </div>\n\n    <div class="paragraph center">\n    </div>\n    ',"#383838"),new o["a"]("project-4","Jumping Jack Clone","img/projects/project-4-icon.png",'\n    <div class="paragraph">\n    <strong>Jumping Jack Clone</strong> is a clone of Jumping Jack by Imagine from 1983 that I\'ve remade with the Unreal Engine.\n    </div>\n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Roving holes were made using hierarchical instanced static meshes and are fully customizable.</li>\n        <li>Modular enemies and hazards.</li>\n        <li>Perpetual gameplay that ratchets up the danger every time a level is completed.</li>\n        <li>High score system.</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n        <div class="notice">\n        </div>\n    </div>\n\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />\n        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />\n    </div>\n    ',"#e80fb7")],c=i["a"].extend({name:"GameProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:l}}}),p=c,h=a("2877"),d=Object(h["a"])(p,s,n,!1,null,null,null);e["default"]=d.exports},5935:function(t,e,a){"use strict";var s=a("416f"),n=a.n(s);n.a},6015:function(t,e,a){"use strict";var s=a("3e9b"),n=a.n(s);n.a},"67f3":function(t,e,a){"use strict";var s=a("ee3f"),n=a.n(s);n.a},"6d3c":function(t,e,a){},7800:function(t,e,a){"use strict";var s=a("6d3c"),n=a.n(s);n.a},"7c58":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Other stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" And here are some other stuff I've made or heavily contributed to, which are totally different than the stuff from earlier. ")]),a("ProjectsList",{attrs:{projects:t.projects}})],1)},n=[],i=a("2b0e"),r=a("27bb"),o=a("983d"),l=[new o["a"]("project-6","Sultans Of Sing","img/projects/project-6-icon.png",'\n    <div class="paragraph">\n      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It\'s available on Windows Store because why not.\n      <br/>Image by <a href="https://www.pexels.com/fr-fr/@aldoalz" target="blank">Aldo Picaso</a>.\n            </div>\n            <div class="paragraph center">\n              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>\n          </div>\n\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Some stuff</li>\n            <li>Some great stuff</li>\n            <li>More awesome stuff</li>\n            <li>And then some</li>\n            </ul>\n        </div>\n\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> \n        </div>\n    ',"#c10606",!1,!0),new o["a"]("project-7","Drew Blood","img/projects/project-7-icon.png",'\n    <div class="paragraph">\n                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.\n            </div>\n\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Some stuff</li>\n              <li>Some great stuff</li>\n              <li>More awesome stuff</li>\n              <li>And then some</li>\n              </ul>\n          </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> \n            </div>',"#1ca1e2"),new o["a"]("project-8","The Art of Walking","img/projects/project-8-icon.png",'\n    <div class="paragraph">\n                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n            <div class="paragraph center">\n              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n          </div>\n\n          <div class="paragraph">\n          Main features :\n          <ul>\n          <li>Some stuff</li>\n          <li>Some great stuff</li>\n          <li>More awesome stuff</li>\n          <li>And then some</li>\n          </ul>\n      </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n            </div>'),new o["a"]("project-9","Nikolable","img/projects/project-9-icon.png",'\n     <div class="paragraph">\n                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.\n            </div>\n\n            <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>')],c=i["a"].extend({name:"OtherProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:l}}}),p=c,h=a("2877"),d=Object(h["a"])(p,s,n,!1,null,null,null);e["default"]=d.exports},"8cdb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"http-404"},[t._v("404 🙈")])},n=[],i=(a("67f3"),a("2877")),r={},o=Object(i["a"])(r,s,n,!1,null,"c64612d2",null);e["default"]=o.exports},"983d":function(t,e,a){"use strict";var s=function(){function t(t,e,a,s,n,i,r){void 0===n&&(n="#000000"),void 0===i&&(i=!1),void 0===r&&(r=!1),this.id=t,this.name=e,this.htmlDescription=s,this.iconUrl=a,this.isHigh=i,this.isWide=r,this.accentColor=n}return t}();e["a"]=s},b8fa:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[t._v("I'm looking for a job !"),a("br"),t._v("Feel free to contact me about any opportunity.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:jisbell01@gmail.com",target:"_blank"}},[t._v("jisbell01@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/james-isbell/",target:"_blank"}},[t._v("linkedin.com/in/james-isbell/")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/Zerahan",target:"_blank"}},[t._v("github.com/Zerahan")])])])])}],i=(a("7800"),a("2877")),r={},o=Object(i["a"])(r,s,n,!1,null,"975b724a",null);e["default"]=o.exports},bd5f:function(t,e,a){"use strict";var s=a("eebd"),n=a.n(s);n.a},d818:function(t,e,a){},dec8:function(t,e,a){},ee3f:function(t,e,a){},eebd:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[t._v("Hello!")]),a("div",{staticClass:"paragraph"},[t._m(0),a("div",{staticStyle:{"margin-top":"20px"}},[t._v("I've worked on "),a("router-link",{attrs:{to:"/game-projects"}},[t._v("stuff")]),t._v(", on "),a("router-link",{attrs:{to:"/other-projects"}},[t._v("other stuff")]),t._v(", and took part in "),a("router-link",{attrs:{to:"/resume"}},[t._v("a few things")]),t._v(" as well.")],1),a("div",{staticStyle:{"margin-top":"40px"}},[t._v("I'm "),a("strong",[t._v("currently looking for a job")]),t._v(" as a game developer. You can reach me at "),a("a",{attrs:{href:"mailto:jisbell01@gmail.com"}},[t._v("jisbell01@gmail.com")]),t._v(" or "),a("router-link",{attrs:{to:"/contact"}},[t._v("through here")]),t._v(".")],1)]),t._m(1),a("div",{staticStyle:{clear:"both"}})])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" I'm "),a("strong",[t._v("James")]),t._v(", game developer."),a("br"),t._v(" I enjoy programming, level design, UI design, UX, and 3D modeling. I'm most familiar with Unreal Engine's C++ and Unity's C#. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Avatar"}})])}],i=(a("6015"),a("2877")),r={},o=Object(i["a"])(r,s,n,!1,null,"ea82084a",null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.735a052c.js.map