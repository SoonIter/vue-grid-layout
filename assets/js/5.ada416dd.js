(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{378:function(t,a,e){},401:function(t,a,e){},402:function(t,a,e){},425:function(t,a,e){"use strict";e(378)},452:function(t,a,e){"use strict";e(401)},453:function(t,a,e){"use strict";e(402)},476:function(t,a,e){"use strict";var n={name:"Home",components:{NavLink:e(376).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(e(425),e(34)),o=Object(s.a)(n,(function(){var t=this,a=t._self._c;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),a("div",[null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n              "+t._s(t.data.heroText||t.$title||"Hello")+"\n          ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description",domProps:{innerHTML:t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")}}):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),a("ClientOnly",[a("HomepageGrid")],1),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"})],1)}),[],!1,null,null,null);a.a=o.exports},479:function(t,a,e){"use strict";e.r(a);var n=e(475),s={name:"CarbonAds",watch:{$route:function(t,a){t.path!==a.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},mounted:function(){this.load()},methods:{load:function(){var t=document.createElement("script");t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CEBITKQJ&placement=jbaysolutionsgithubio",this.$el.appendChild(t)}},render:function(t){return t("div",{class:"carbon-ads"})}},o=(e(452),e(34)),i=Object(o.a)(s,void 0,void 0,!1,null,null,null).exports,r={name:"Layout",components:{ParentLayout:n.a,CarbonAds:i}},c=(e(453),Object(o.a)(r,(function(){var t=this,a=t._self._c;return a("ParentLayout",{scopedSlots:t._u([{key:"sidebar-top",fn:function(){return[a("CarbonAds")]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[a("footer",{staticClass:"footer"},[t._v("\n            A product by:\n            "),a("a",{staticClass:"footer-card",attrs:{href:"https://www.jbaysolutions.com/",target:"_blank",rel:"noopener"}},[a("img",{attrs:{src:t.$withBase("/assets/img/logo-jbay.png"),alt:"JBay Solutions"}})])])]},proxy:!0}])})}),[],!1,null,"6394a605",null));a.default=c.exports}}]);