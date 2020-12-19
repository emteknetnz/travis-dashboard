(this["webpackJsonpcreate-react-app-typescript-redux"]=this["webpackJsonpcreate-react-app-typescript-redux"]||[]).push([[0],{143:function(e,t,r){e.exports=r(249)},249:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"BuildActions",(function(){return D})),r.d(n,"initBuildData",(function(){return I}));var a={};r.r(a),r.d(a,"Actions",(function(){return ne})),r.d(a,"toggleFilter",(function(){return ue})),r.d(a,"setTerm",(function(){return se})),r.d(a,"setCategoryFilter",(function(){return de}));var c=r(0),o=r(9),i=r(59),l=r(24),u=r(115),s=r(12),d=r(133),m=r(303),p=r(304),f=r(305),b=r(252),E=r(309),h=r(310),g=r(128),v=r.n(g),O=r(253),j=r(66),y=r(284),x=r(132),T=r(283),w=Object(x.a)({palette:{primary:{light:"#e5e5e5",main:"#727272",dark:"#363839",contrastText:"#fff"},secondary:{light:"#005AE1",main:"#0F3287",dark:"#051E2D",contrastText:"#fff"},type:"dark"}});var D,L=r(134),S=r(15);function k(e,t){var r=Object(l.b)();return Object(c.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(S.bindActionCreators)(e,r)})):Object(S.bindActionCreators)(e,r)}),t?[r].concat(Object(L.a)(t)):t)}function I(){return function(e){e({type:D.LOADING_BUILDS}),fetch("/travis-dashboard/buildData.json",{method:"GET"}).then((function(e){return e.json().then((function(t){return{json:t,lastModified:e.headers.has("last-modified")?new Date(e.headers.get("last-modified")):void 0}}))})).then((function(t){return e({type:D.BUILD_LOADED,payload:t})}))}}!function(e){e.LOADING_BUILDS="LOADING_BUILDS",e.BUILD_LOADED="BUILD_LOADED"}(D||(D={}));var A=r(16),R=r(287),G=r(288),_=r(251),C=r(289),N=r(290),B=r(291),F=r(119),M=r.n(F),U=r(120),H=r.n(U),P=r(121),z=r.n(P),Y=r(122),q=r.n(Y),J=r(286),V=r(116),W={failed:"#FE6B8B",errored:"#FE6B8B",passed:"#61b047",running:"#fede6b",created:"#fede6b",started:"#fede6b",expired:"#6b8bfe",canceled:"#ad495e"},$={errored:"contained",failed:"contained",passed:"outlined",created:"contained",started:"contained",running:"contained"};function K(e){var t=e.module,r=e.branch,n=e.build,a=n.id,o=n.state,i=Q({state:o});return c.createElement(J.a,{href:"https://travis-ci.com/github/".concat(t,"/builds/").concat(a),variant:$[o],className:i.branchBtn},r)}var Q=Object(V.a)({branchBtn:function(e){var t=function(e,t,r){return r[t[e]]}("state",e,W);return{margin:"0 8px 8px 0",flexGrow:1,background:t,textDecoration:"none","&:hover":{background:t}}}}),X=r(40),Z=["failed","canceled","expired","running","passed"],ee=function(e,t,r){return r[t[e]]},te=Object(O.a)({legend:function(e){return{background:ee("state",e,W),width:24,height:24,borderRadius:3}}});function re(e){var t=ae(),r=Object(l.c)((function(e){return e.builds.lastModified})),n=r?"Fetched ".concat(Math.round(((new Date).getTime()-r.getTime())/1e3/60)," min ago"):"",a=Object(X.f)();return c.createElement("div",{className:t.root},c.createElement("div",{className:t.drawerHeader}),c.createElement(R.a,null),c.createElement(G.a,null,c.createElement(_.a,{button:!0,onClick:function(){return a.push("/")}},c.createElement(C.a,null,c.createElement(M.a,null)),c.createElement(N.a,{primary:"Builds"})),c.createElement(_.a,{button:!0,onClick:function(){return a.push("/stats")}},c.createElement(C.a,null,c.createElement(H.a,null)),c.createElement(N.a,{primary:"Stats"})),c.createElement(_.a,{component:"a",button:!0,href:"https://github.com/maxime-rainville/travis-dashboard/"},c.createElement(C.a,null,c.createElement(z.a,null)),c.createElement(N.a,{primary:"View Source"})),c.createElement(_.a,{component:"a",button:!0,href:"https://github.com/maxime-rainville/travis-dashboard/actions?query=workflow%3A%22Build+and+Deploy%22"},c.createElement(C.a,null,c.createElement(q.a,null)),c.createElement(N.a,{primary:"Refresh data",secondary:n}))),c.createElement("div",{className:t.drawerSpacer}),c.createElement(G.a,null,c.createElement(B.a,null,"Legend"),Z.map((function(e){return c.createElement(_.a,{key:e},c.createElement(C.a,null,c.createElement("span",{className:te({state:e}).legend})),c.createElement(N.a,{primary:e}))}))))}var ne,ae=Object(O.a)((function(e){return{drawerHeader:Object(A.a)({},e.mixins.toolbar),drawerPaper:Object(s.a)({width:250,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:240,position:"relative",height:"100%"}),root:{minHeight:"100%",display:"flex",flexDirection:"column"},drawerSpacer:{flexGrow:1}}})),ce=r(296),oe=r(313),ie=r(297),le=r(298);function ue(){return{type:ne.TOGGLE_FILTER}}function se(e){return function(t){var r=setTimeout((function(){t({type:ne.TRIGGER_SEARCH,payload:void 0})}),500);t({type:ne.SET_TERM,payload:{term:e,triggerSearchTimeout:r}})}}function de(e){return{type:ne.SET_CATEGORY_FILTER,payload:{categoryFilters:e}}}!function(e){e.LOADING_BUILDS="LOADING_BUILDS",e.BUILD_LOADED="BUILD_LOADED",e.TOGGLE_FILTER="TOGGLE_FILTER",e.SET_TERM="SET_TERM",e.TRIGGER_SEARCH="TRIGGER_SEARCH",e.SET_CATEGORY_FILTER="SET_CATEGORY_FILTER"}(ne||(ne={}));var me=r(292),pe=r(311),fe=r(306),be=r(293),Ee=r(295),he=r(308),ge={core:"Core",supported:"Supported",unsupported:"Unsupported",nonmodule:"Non-module"};function ve(e){e.className;var t=k(a).setCategoryFilter,r=Object(l.c)((function(e){return e.filters})).categoryFilters,n=Oe();return r?c.createElement(me.a,{className:n.root},c.createElement(pe.a,{id:"demo-mutiple-checkbox-label",color:"secondary"},"Category"),c.createElement(fe.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:r,onChange:function(e){return t(e.target.value)},input:c.createElement(be.a,null),renderValue:function(e){return e.map((function(e){return ge[e]})).join(", ")}},Object.keys(ge).map((function(e){return c.createElement(Ee.a,{key:e,value:e},c.createElement(he.a,{checked:r.indexOf(e)>-1}),c.createElement(N.a,{primary:ge[e]}))})))):null}var Oe=Object(V.a)((function(e){return{root:{margin:e.spacing(1),width:200}}}));function je(e){var t=e.className,r=k(a),n=r.toggleFilter,o=r.setTerm,i=Object(l.c)((function(e){return e.filters})),u=i.filter,s=i.partialTerm,d=ye();return c.createElement(ce.a,{row:!0,className:"".concat(t," ").concat(d.root)},c.createElement(oe.a,{label:"Filter by name",variant:"filled",color:"secondary",onChange:function(e){return o(e.target.value)},className:d.term,value:s}),c.createElement(ve,null),c.createElement(ie.a,{control:c.createElement(le.a,{checked:"latestStable"===u,onChange:n}),label:"Latest only",color:"secondary"}))}var ye=Object(V.a)({term:{flexGrow:1},root:{}}),xe=r(38),Te=r(299),we=r(300),De=r(301);function Le(e){var t=e.name,r=e.branches,n=e.state,a=Se({state:n});return c.createElement(Te.a,{item:!0,xs:6,sm:4,md:3},c.createElement("a",{href:"https://travis-ci.com/github/".concat(t,"/branches"),style:{textDecoration:"none"}},c.createElement(we.a,{className:a.box},c.createElement(De.a,null,c.createElement(i.a,{gutterBottom:!0,variant:"h6",component:"h2"},t),c.createElement(i.a,{variant:"body2",color:"textSecondary",component:"p"}),"passed"!==n&&c.createElement("div",{className:a.cardActions},Object.keys(r).map((function(e){return c.createElement(K,{module:t,branch:e,key:e,build:r[e]})})))))))}var Se=Object(V.a)((function(e){return{box:function(e){return{borderRadius:8,textDecoration:"none",background:"passed"===e.state?"linear-gradient(45deg, #61b047 30%, #00ca99 90%)":void 0}},text:{color:"white"},branchBtn:{margin:"0 8px 8px 0",flexGrow:1},cardActions:{flexWrap:"wrap",display:"flex"}}})),ke=r(302),Ie=r(125),Ae=r.n(Ie);function Re(){return c.createElement(i.a,{variant:"h1",style:{textAlign:"center"}},c.createElement(Ae.a,{style:{fontSize:"6rem"}}),c.createElement("br",null),"Oh no! There's no results.")}function Ge(e){var t=e.loading,r=e.children,n=e.results,a=_e(),o=Array.isArray(n)?0===n.length:!n;return c.createElement(c.Fragment,null,t||o?c.createElement("div",{className:a.root},t?c.createElement(ke.a,{size:100}):c.createElement(Re,null)):r)}var _e=Object(O.a)({root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}),Ce=r(135),Ne=[["errored","failed"],["canceled"],["expired"],["running","created","started"],["passed"]];function Be(e,t){if(e===t)return 0;var r=!0,n=!1,a=void 0;try{for(var c,o=Ne[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var i=c.value;if(i.indexOf(e)>-1)return-1;if(i.indexOf(t)>-1)return 1}}catch(l){n=!0,a=l}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return 0}function Fe(e,t){var r={},n=Object.keys(e);n.indexOf("master")>-1?r.nextMajor="master":n.indexOf("main")>-1&&(r.nextMajor="main");var a=n.filter((function(e){return e.match(/^\d+$/)})).map((function(e){return parseInt(e)})).reduce((function(e,t){return Math.max(e,t)}),0);if(a){r.nextMinor=a.toString();var c=n.filter((function(e){return e.match(new RegExp("^".concat(a,"\\.\\d+$")))})).map((function(e){return e.replace("".concat(a,"."),"").trim()})).map((function(e){return parseInt(e)})).sort().slice(-2).map((function(e){return"".concat(a,".").concat(e)}));2===c.length?(r.nextPatch=c[1],r.previousPatch=c[0]):1===c.length&&(r.nextPatch=c[0])}return Object.values(r).reduce((function(t,r){return void 0===r?t:Object(A.a)({},t,Object(s.a)({},r,e[r]))}),{})}function Me(e,t){var r=t.state;return Be(e,r)>0?r:e}function Ue(e,t,r,n){return e.filter((function(e){return function(e,t){if(4===t.length)return!0;var r=Ce.a.find((function(t){return t.repo===e}));return r?t.indexOf("core")>-1&&r.core||t.indexOf("supported")>-1&&r.supported||t.indexOf("unsupported")>-1&&!r.supported:t.indexOf("nonmodule")>-1}(e.name,r)})).filter((function(e){return-1!==e.name.indexOf(n)})).map((function(e){var r=e.branches,n=Object(xe.a)(e,["branches"]);return Object(A.a)({branches:"latestStable"===t?Fe(r,n.name):r},n)})).map((function(e){return Object(A.a)({},e,{state:Object.values(e.branches).reduce(Me,"passed")})})).sort((function(e,t){return function(e,t){if(e===t)return 0;var r=Be(e.state,t.state);return 0!==r?r:e.name.localeCompare(t.name)}(e,t)}))}function He(){var e=Object(l.c)((function(e){return e})),t=e.filters,r=t.categoryFilters,n=t.filter,a=t.term,o=e.builds;return Object(A.a)({},o,{modules:Object(c.useMemo)((function(){return Ue(o.modules,n,r,a)}),[o.modules,r,n,a])})}function Pe(){var e=ze(),t=He(),r=t.modules,n=t.loading;return c.createElement(Ge,{loading:n,results:r},c.createElement("div",{className:e.root},c.createElement(Te.a,{className:e.centerContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:3},r.map((function(e){var t=e.name,r=Object(xe.a)(e,["name"]);return c.createElement(Le,Object.assign({key:t,name:t},r))})))))}var ze=Object(O.a)({root:{textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},centerContainer:{},button:{marginTop:20}}),Ye=r(127);var qe=["failed","canceled","expired","running","passed"],Je=qe.map((function(e){return W[e]}));function Ve(e){return{labels:qe,datasets:[{data:qe.map((function(t){return e[t]})),backgroundColor:Je}]}}function We(){var e=$e(),t=function(){var e=He(),t=e.loading;return{stats:e.modules.reduce((function(e,t){return Object.values(t.branches).forEach((function(t){return e[t.state]++})),e}),{passed:0,errored:0,failed:0,running:0,expired:0,canceled:0,created:0,started:0}),loading:t}}(),r=t.stats,n=t.loading,a=void 0!==Object.values(r).find((function(e){return e>0}));return c.createElement(Ge,{loading:n,results:a},c.createElement("div",{className:e.root},c.createElement(Ye.Doughnut,{data:Ve(r),legend:!1})))}var $e=Object(O.a)({root:{textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},centerContainer:{},button:{marginTop:20}});function Ke(){var e=Qe();return c.createElement("div",{className:e.root},c.createElement(X.c,null,c.createElement(X.a,{exact:!0,path:"/",component:Pe}),c.createElement(X.a,{path:"/home",component:Pe}),c.createElement(X.a,{path:"/stats",component:We})))}var Qe=Object(O.a)((function(e){return{root:Object(s.a)({backgroundColor:e.palette.background.default,overflow:"auto",width:"100%",height:"calc(100% - 56px)",marginTop:56},e.breakpoints.up("sm"),{height:"calc(100% - 64px)",marginTop:64})}}));var Xe,Ze=Object(O.a)((function(e){return{root:{width:"100%",height:"100%",zIndex:1,overflow:"hidden"},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:{zIndex:e.zIndex.drawer+1,position:"absolute"},appTitle:{flexGrow:.7},appForm:{flexGrow:.3},navIconHide:Object(s.a)({},e.breakpoints.up("md"),{display:"none"}),drawerPaper:Object(s.a)({width:250,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:240,position:"relative",height:"100%"})}})),et=(Xe=function(){var e=k(n);c.useEffect((function(){e.initBuildData()}),[]);var t=Ze(),r=c.useState(!0),a=Object(d.a)(r,2),o=a[0],l=a[1],u=Object(m.a)((function(e){return e.breakpoints.down("sm")})),s=function(){l(!o)};return c.createElement(j.a,{basename:"/travis-dashboard"},c.createElement("div",{className:t.root},c.createElement("div",{className:t.appFrame},c.createElement(p.a,{className:t.appBar},c.createElement(f.a,null,c.createElement(b.a,{color:"inherit","aria-label":"open drawer",onClick:s,className:t.navIconHide},c.createElement(v.a,null)),c.createElement(i.a,{variant:"h6",color:"inherit",noWrap:u,className:t.appTitle},"Silverstripe CMS Squad Dashboard"),c.createElement(je,{className:t.appForm}))),c.createElement(E.a,{mdUp:!0},c.createElement(h.a,{variant:"temporary",anchor:"left",open:o,classes:{paper:t.drawerPaper},onClose:s,ModalProps:{keepMounted:!0}},c.createElement(re,null))),c.createElement(E.a,{smDown:!0},c.createElement(h.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},c.createElement(re,null))),c.createElement(Ke,null))))},function(e){return c.createElement(T.a,{theme:w},c.createElement(y.a,null),c.createElement(Xe,e))}),tt=r(19),rt=r(129),nt=(r(130),r(131)),at=r(90),ct=r(89);function ot(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(n.type)?t[n.type](r,n):r}}var it,lt={modules:[],loading:!0,stats:{passed:0,errored:0,failed:0,running:0,expired:0,canceled:0,created:0,started:0}};function ut(e){if(!e||"passed"!==e.state)return e;var t=new Date(e.started_at),r=new Date,n=new Date;return n.setDate(r.getDate()-30),t<n?Object(A.a)({},e,{state:"expired"}):e}var st,dt=ot(lt,(it={},Object(s.a)(it,D.LOADING_BUILDS,(function(){return lt})),Object(s.a)(it,D.BUILD_LOADED,(function(e,t){var r,n=t.payload,a=n.json,c=n.lastModified;return Object(A.a)({},e,{modules:(r=a,Object.keys(r).map((function(e){return{branches:r[e],name:e}})).map((function(e){var t=e.branches,r=Object(xe.a)(e,["branches"]);for(var n in t)t[n]=ut(t[n]);return Object(A.a)({branches:t},r)}))),lastModified:c,loading:!1,raw:a})})),it)),mt=ot({filter:"latestStable",term:"",partialTerm:"",categoryFilters:["core","nonmodule","supported","unsupported"]},(st={},Object(s.a)(st,ne.TOGGLE_FILTER,(function(e){var t=e.filter,r=Object(xe.a)(e,["filter"]);return Object(A.a)({},r,{filter:"latestStable"===t?"all":"latestStable"})})),Object(s.a)(st,ne.SET_TERM,(function(e,t){e.triggerSearchTimeout&&clearTimeout(e.triggerSearchTimeout);var r=t.payload,n=r.term,a=r.triggerSearchTimeout;return Object(A.a)({},e,{partialTerm:n.toLocaleLowerCase(),triggerSearchTimeout:a})})),Object(s.a)(st,ne.TRIGGER_SEARCH,(function(e){return Object(A.a)({},e,{term:e.partialTerm})})),Object(s.a)(st,ne.SET_CATEGORY_FILTER,(function(e,t){var r=t.payload.categoryFilters;return Object(A.a)({},e,{categoryFilters:r})})),st)),pt={key:"root",version:1,storage:rt,blacklist:[]},ft=(Object(nt.createLogger)(),Object(tt.a)(),Object(S.applyMiddleware)(ct.a));var bt=Object(at.a)(pt,Object(S.combineReducers)({builds:dt,filters:mt})),Et=function(){var e=Object(S.createStore)(bt,{},ft);return{store:e,persistor:Object(at.b)(e)}}(),ht=Et.persistor,gt=Et.store;var vt=document.getElementById("root");o.render(c.createElement((function(){return c.createElement(l.a,{store:gt},c.createElement(u.a,{loading:c.createElement(i.a,null,"Loading..."),persistor:ht},c.createElement(et,null)))}),null),vt)}},[[143,1,2]]]);
//# sourceMappingURL=main.d079881f.chunk.js.map