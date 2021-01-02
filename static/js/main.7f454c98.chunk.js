(this["webpackJsonpcreate-react-app-typescript-redux"]=this["webpackJsonpcreate-react-app-typescript-redux"]||[]).push([[0],{147:function(e,t,r){e.exports=r(253)},253:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"BuildActions",(function(){return A})),r.d(n,"initBuildData",(function(){return _}));var a={};r.r(a),r.d(a,"Actions",(function(){return G})),r.d(a,"initFavourite",(function(){return C})),r.d(a,"toggleFavourite",(function(){return R}));var c={};r.r(c),r.d(c,"Actions",(function(){return ge})),r.d(c,"toggleFilter",(function(){return ye})),r.d(c,"setTerm",(function(){return xe})),r.d(c,"setCategoryFilter",(function(){return Te}));var o={};r.r(o),r.d(o,"MergeupActions",(function(){return yt})),r.d(o,"initMergeupData",(function(){return wt}));var i=r(0),l=r(10),u=r(40),s=r(12),d=r(119),m=r(9),p=r(61),f=r(308),b=r(309),g=r(310),v=r(256),E=r(314),h=r(315),O=r(135),j=r.n(O),y=r(257),x=r(68),T=r(288),I=r(139),D=r(287),w=Object(I.a)({palette:{primary:{light:"#e5e5e5",main:"#727272",dark:"#363839",contrastText:"#fff"},secondary:{light:"#005AE1",main:"#0F3287",dark:"#051E2D",contrastText:"#fff"},type:"dark"}});var A,L=r(140),N=r(17);function k(e,t){var r=Object(s.b)();return Object(i.useMemo)((function(){return Array.isArray(e)?e.map((function(e){return Object(N.bindActionCreators)(e,r)})):Object(N.bindActionCreators)(e,r)}),t?[r].concat(Object(L.a)(t)):t)}function S(e,t,r){return function(){return function(n){n({type:t}),fetch("/travis-dashboard"+"/".concat(e,".json"),{method:"GET"}).then((function(e){return e.json().then((function(t){return{json:t,lastModified:e.headers.has("last-modified")?new Date(e.headers.get("last-modified")):void 0}}))})).then((function(e){return n({type:r,payload:e})}))}}}!function(e){e.LOADING_BUILDS="LOADING_BUILDS",e.BUILD_LOADED="BUILD_LOADED"}(A||(A={}));var G,_=S("buildData",A.LOADING_BUILDS,A.BUILD_LOADED);!function(e){e.INIT_FAV="INIT_FAV"}(G||(G={}));function F(){var e=localStorage.getItem("FAVOURITES");return(null===e||void 0===e?void 0:e.split(","))||[]}function C(){return{type:G.INIT_FAV,payload:F()}}function R(e){var t=F(),r=t.indexOf(e);return-1===r?t.push(e):t.splice(r,1),localStorage.setItem("FAVOURITES",t.join(",")),console.dir(t),{type:G.INIT_FAV,payload:t}}var B=r(15),M=r(293),U=r(294),P=r(255),H=r(291),V=r(292),z=r(295),W=r(123),Y=r.n(W),q=r(125),J=r.n(q),$=r(126),K=r.n($),Q=r(124),X=r.n(Q),Z=r(127),ee=r.n(Z),te=r(290),re=r(120),ne={failed:"#FE6B8B",errored:"#FE6B8B",passed:"#61b047",running:"#fede6b",created:"#fede6b",started:"#fede6b",expired:"#6b8bfe",canceled:"#ad495e"},ae={errored:"contained",failed:"contained",passed:"outlined",created:"contained",started:"contained",running:"contained"};function ce(e){var t=e.module,r=e.branch,n=e.build,a=n.id,c=n.state,o=oe({state:c});return i.createElement(te.a,{href:"https://travis-ci.com/github/".concat(t,"/builds/").concat(a),variant:ae[c],className:o.branchBtn},r)}var oe=Object(re.a)({branchBtn:function(e){var t=function(e,t,r){return r[t[e]]}("state",e,ne);return{margin:"0 8px 8px 0",flexGrow:1,background:t,textDecoration:"none","&:hover":{background:t}}}}),ie=r(43),le=r(50),ue=r.n(le);function se(e){var t=e.Icon,r=e.route,n=e.title,a=de(),c=Object(ie.f)(),o={onClick:function(){return c.push(r)},className:ue()(Object(m.a)({},a.active,c.location.pathname===r))};return i.createElement(P.a,Object.assign({button:!0},o),i.createElement(H.a,null,i.createElement(t,null)),i.createElement(V.a,{primary:n}))}var de=Object(y.a)((function(e){return{active:{background:e.palette.secondary.main,"&:hover":{background:e.palette.secondary.light}}}})),me=["failed","canceled","expired","running","passed"],pe=function(e,t,r){return r[t[e]]},fe=Object(y.a)({legend:function(e){return{background:pe("state",e,ne),width:24,height:24,borderRadius:3}}});function be(e){var t=ve(),r=Object(s.c)((function(e){return e.builds.lastModified})),n=r?"Fetched ".concat(Math.round(((new Date).getTime()-r.getTime())/1e3/60)," min ago"):"";return i.createElement("div",{className:t.root},i.createElement("div",{className:t.drawerHeader}),i.createElement(M.a,null),i.createElement(U.a,null,i.createElement(se,{route:"/",Icon:Y.a,title:"Builds"}),i.createElement(se,{route:"/mergeups",Icon:X.a,title:"Merge ups"}),i.createElement(se,{route:"/stats",Icon:J.a,title:"Stats"}),i.createElement(P.a,{component:"a",button:!0,href:"https://github.com/maxime-rainville/travis-dashboard/"},i.createElement(H.a,null,i.createElement(K.a,null)),i.createElement(V.a,{primary:"View Source"})),i.createElement(P.a,{component:"a",button:!0,href:"https://github.com/maxime-rainville/travis-dashboard/actions?query=workflow%3A%22Build+and+Deploy%22"},i.createElement(H.a,null,i.createElement(ee.a,null)),i.createElement(V.a,{primary:"Refresh data",secondary:n}))),i.createElement("div",{className:t.drawerSpacer}),i.createElement(U.a,null,i.createElement(z.a,null,"Legend"),me.map((function(e){return i.createElement(P.a,{key:e},i.createElement(H.a,null,i.createElement("span",{className:fe({state:e}).legend})),i.createElement(V.a,{primary:e}))}))))}var ge,ve=Object(y.a)((function(e){return{drawerHeader:Object(B.a)({},e.mixins.toolbar),drawerPaper:Object(m.a)({width:250,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:240,position:"relative",height:"100%"}),root:{minHeight:"100%",display:"flex",flexDirection:"column"},drawerSpacer:{flexGrow:1}}})),Ee=r(300),he=r(318),Oe=r(301),je=r(302);function ye(){return{type:ge.TOGGLE_FILTER}}function xe(e){return function(t){var r=setTimeout((function(){t({type:ge.TRIGGER_SEARCH,payload:void 0})}),500);t({type:ge.SET_TERM,payload:{term:e,triggerSearchTimeout:r}})}}function Te(e){return{type:ge.SET_CATEGORY_FILTER,payload:{categoryFilters:e}}}!function(e){e.LOADING_BUILDS="LOADING_BUILDS",e.BUILD_LOADED="BUILD_LOADED",e.TOGGLE_FILTER="TOGGLE_FILTER",e.SET_TERM="SET_TERM",e.TRIGGER_SEARCH="TRIGGER_SEARCH",e.SET_CATEGORY_FILTER="SET_CATEGORY_FILTER"}(ge||(ge={}));var Ie=r(296),De=r(316),we=r(311),Ae=r(297),Le=r(299),Ne=r(313),ke={core:"Core",supported:"Supported",unsupported:"Unsupported",nonmodule:"Non-module"};function Se(e){e.className;var t=k(c).setCategoryFilter,r=Object(s.c)((function(e){return e.filters})).categoryFilters,n=Ge();return r?i.createElement(Ie.a,{className:n.root},i.createElement(De.a,{id:"demo-mutiple-checkbox-label",color:"secondary"},"Category"),i.createElement(we.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:r,onChange:function(e){return t(e.target.value)},input:i.createElement(Ae.a,null),renderValue:function(e){return e.map((function(e){return ke[e]})).join(", ")}},Object.keys(ke).map((function(e){return i.createElement(Le.a,{key:e,value:e},i.createElement(Ne.a,{checked:r.indexOf(e)>-1}),i.createElement(V.a,{primary:ke[e]}))})))):null}var Ge=Object(re.a)((function(e){return{root:{margin:e.spacing(1),width:200}}}));function _e(e){var t=e.className,r=k(c),n=r.toggleFilter,a=r.setTerm,o=Object(s.c)((function(e){return e.filters})),l=o.filter,u=o.partialTerm,d=Fe();return i.createElement(Ee.a,{row:!0,className:"".concat(t," ").concat(d.root)},i.createElement(he.a,{label:"Filter by name",variant:"filled",color:"secondary",onChange:function(e){return a(e.target.value)},className:d.term,value:u}),i.createElement(Se,null),i.createElement(Oe.a,{control:i.createElement(je.a,{checked:"latestStable"===l,onChange:n}),label:"Latest only",color:"secondary"}))}var Fe=Object(re.a)({term:{flexGrow:1},root:{}}),Ce=r(26),Re=r(303),Be=r(319),Me=r(304),Ue=r(305),Pe=r(306);var He=r(130),Ve=r.n(He),ze=r(131),We=r.n(ze);function Ye(e){var t=e.name,r=qe(),n=function(e){var t=Object(s.c)((function(e){return e.favourites})),r=k(a).toggleFavourite;return{toggle:function(){return r(e)},isFavourite:-1!==t.indexOf(e)}}(t),c=n.isFavourite,o=n.toggle,l=c?Ve.a:We.a;return i.createElement(te.a,{className:r.root,onClick:function(e){e.preventDefault(),o()}},i.createElement(l,{fontSize:"small"}))}var qe=Object(re.a)((function(e){return{root:{minWidth:0}}})),Je=r(77);function $e(e){var t=e.name,r=e.children,n=e.url,a=e.className,c=Ke(),o=t.match(/(.+)\/.+/),l=Object(p.a)(o,2)[1],u=Je.a.find((function(e){return e.repo===t})),s=(null===u||void 0===u?void 0:u.name)||t,d=s.match(/(.+)\/(.+)/),m=Object(p.a)(d,3),f=m[1],b=m[2],g={avatar:i.createElement(Be.a,{src:"https://github.com/".concat(l,".png"),alt:s,variant:"rounded",className:c.avatar},s.substring(0,1).toUpperCase()),action:i.createElement(Ye,{name:t}),subheader:f,title:b,className:c.header};return i.createElement(Re.a,{item:!0,xs:6,sm:4,md:3},i.createElement("a",{href:n,style:{textDecoration:"none"}},i.createElement(Me.a,{className:ue()(c.box,a)},i.createElement(Ue.a,g),i.createElement(Pe.a,null,r))))}var Ke=Object(re.a)((function(e){return{header:{textAlign:"left"},box:{borderRadius:8,textDecoration:"none"},text:{color:"white"},modTitle:{display:"flex",alignItems:"flex-start",textAlign:"left","& > :first-child":{flexGrow:1}},avatar:{background:"white"}}}));function Qe(e){var t=e.name,r=e.branches,n=e.state,a=Xe({state:n});return i.createElement($e,{name:t,url:"https://travis-ci.com/github/".concat(t,"/branches"),className:a.box},"passed"!==n&&i.createElement("div",{className:a.cardActions},Object.keys(r).map((function(e){return i.createElement(ce,{module:t,branch:e,key:e,build:r[e]})}))))}var Xe=Object(re.a)((function(e){return{box:function(e){return{background:"passed"===e.state?ne.passed:void 0}},branchBtn:{margin:"0 8px 8px 0",flexGrow:1},cardActions:{flexWrap:"wrap",display:"flex"}}})),Ze=r(307),et=r(133),tt=r.n(et);function rt(){return i.createElement(u.a,{variant:"h1",style:{textAlign:"center"}},i.createElement(tt.a,{style:{fontSize:"6rem"}}),i.createElement("br",null),"Oh no! There's no results.")}function nt(e){var t=e.loading,r=e.children,n=e.results,a=at(),c=Array.isArray(n)?0===n.length:!n;return i.createElement(i.Fragment,null,t||c?i.createElement("div",{className:a.root},t?i.createElement(Ze.a,{size:100}):i.createElement(rt,null)):r)}var at=Object(y.a)({root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}});function ct(e,t){if(4===t.length)return!0;var r=Je.a.find((function(t){return t.repo===e}));return r?t.includes("core")&&r.core||t.includes("supported")&&r.supported||t.includes("unsupported")&&!r.supported:t.includes("nonmodule")}var ot=function(e){return null!=e&&void 0!==e};function it(e,t){var r={};e.includes("master")?r.nextMajor="master":e.includes("main")&&(r.nextMajor="main");var n=e.filter((function(e){return e.match(/^\d+$/)})).map((function(e){return parseInt(e)})).reduce((function(e,t){return Math.max(e,t)}),0);if(n){r.nextMinor=n.toString();var a=e.filter((function(e){return e.match(new RegExp("^".concat(n,"\\.\\d+$")))})).map((function(e){return e.replace("".concat(n,"."),"").trim()})).map((function(e){return parseInt(e)})).sort().slice(-2).map((function(e){return"".concat(n,".").concat(e)}));2===a.length?(r.nextPatch=a[1],r.previousPatch=a[0]):1===a.length&&(r.nextPatch=a[0])}return Object.values(r).filter(ot)}var lt=[["errored","failed"],["canceled"],["expired"],["running","created","started"],["passed"]];function ut(e,t){if(e===t)return 0;var r=!0,n=!1,a=void 0;try{for(var c,o=lt[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var i=c.value;if(i.indexOf(e)>-1)return-1;if(i.indexOf(t)>-1)return 1}}catch(l){n=!0,a=l}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return 0}function st(e,t){return it(Object.keys(e)).reduce((function(t,r){return void 0===r?t:Object(B.a)({},t,Object(m.a)({},r,e[r]))}),{})}function dt(e,t){var r=t.state;return ut(e,r)>0?r:e}function mt(e,t,r,n){return e.filter((function(e){return ct(e.name,r)})).filter((function(e){return-1!==e.name.indexOf(n)})).map((function(e){var r=e.branches,n=Object(Ce.a)(e,["branches"]);return Object(B.a)({branches:"latestStable"===t?st(r,n.name):r},n)})).map((function(e){return Object(B.a)({},e,{state:Object.values(e.branches).reduce(dt,"passed")})})).sort((function(e,t){return function(e,t){if(e===t)return 0;var r=ut(e.state,t.state);return 0!==r?r:e.name.localeCompare(t.name)}(e,t)}))}function pt(){var e=Object(s.c)((function(e){return e})),t=e.filters,r=t.categoryFilters,n=t.filter,a=t.term,c=e.builds;return Object(B.a)({},c,{modules:Object(i.useMemo)((function(){return mt(c.modules,n,r,a)}),[c.modules,r,n,a])})}function ft(){var e=Object(s.c)((function(e){var t=e.filters;return{partialTerm:t.partialTerm,term:t.term}}));return e.partialTerm!==e.term}function bt(){var e=gt(),t=pt(),r=t.modules,n=t.loading,a=ft(),c=Object(s.c)((function(e){return{favourites:e.favourites}})).favourites,o=r.filter((function(e){var t=e.name;return c.includes(t)})),l=r.filter((function(e){var t=e.name;return!c.includes(t)}));return i.createElement(nt,{loading:n||a,results:r},i.createElement("div",{className:e.root},o.length>0&&i.createElement(Re.a,{className:e.centerContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:3},o.map((function(e){var t=e.name,r=Object(Ce.a)(e,["name"]);return i.createElement(Qe,Object.assign({key:t,name:t},r))}))),l.length>0&&i.createElement(Re.a,{className:e.centerContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:3},l.map((function(e){var t=e.name,r=Object(Ce.a)(e,["name"]);return i.createElement(Qe,Object.assign({key:t,name:t},r))})))))}var gt=Object(y.a)({root:{textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},centerContainer:{justifyContent:"flex-start",marginBottom:60},button:{marginTop:20}}),vt=r(134);var Et=["failed","canceled","expired","running","passed"],ht=Et.map((function(e){return ne[e]}));function Ot(e){return{labels:Et,datasets:[{data:Et.map((function(t){return e[t]})),backgroundColor:ht}]}}function jt(){var e=xt(),t=function(){var e=pt(),t=e.loading;return{stats:e.modules.reduce((function(e,t){return Object.values(t.branches).forEach((function(t){return e[t.state]++})),e}),{passed:0,errored:0,failed:0,running:0,expired:0,canceled:0,created:0,started:0}),loading:t}}(),r=t.stats,n=t.loading,a=void 0!==Object.values(r).find((function(e){return e>0}));return i.createElement(nt,{loading:n,results:a},i.createElement("div",{className:e.root},i.createElement(vt.Doughnut,{data:Ot(r),legend:!1})))}var yt,xt=Object(y.a)({root:{textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},centerContainer:{},button:{marginTop:20}});function Tt(e,t){var r=it(e.map((function(e){return e.base})));return e.filter((function(e){var t=e.base;return r.includes(t)}))}function It(e,t){if(0!==e.compares.length&&0===t.compares.length)return-1;if(0===e.compares.length&&0!==t.compares.length)return 1;var r=void 0===e.compares.find((function(e){return e.ahead_by>0})),n=void 0===t.compares.find((function(e){return e.ahead_by>0}));return r&&!n?1:!r&&n?-1:e.repo.localeCompare(t.repo)}function Dt(){var e=Object(s.c)((function(e){return e})),t=e.filters,r=t.categoryFilters,n=t.filter,a=t.term,c=e.mergeups,o=c.mergeups;return{loading:c.loading,mergeups:Object(i.useMemo)((function(){return function(e,t,r,n){return e.filter((function(e){return ct(e.repo,r)})).filter((function(e){return e.repo.includes(n)})).map((function(e){var r=e.compares,n=e.repo;return{compares:"latestStable"===t?Tt(r):r,repo:n}})).sort(It)}(o,n,r,a)}),[o,r,n,a])}}!function(e){e.LOADING="LOADING_MERGEUP",e.LOADED="MERGEUP_LOADED"}(yt||(yt={}));var wt=S("mergeup",yt.LOADING,yt.LOADED);function At(e){var t=e.repo,r=e.head,n=e.base,a=e.ahead_by,c=Lt(),o=0===a,l=o?"up-to-date":"ahead by ".concat(a," commit").concat(a>1?"s":"");return i.createElement(te.a,{href:"https://github.com/".concat(t,"/compare/").concat(n,"...").concat(r),className:ue()(c.root,Object(m.a)({},c.expired,!o)),variant:o?"outlined":void 0},i.createElement("span",{className:c.range},n,"...",r),i.createElement("span",null,l))}var Lt=Object(re.a)({root:{margin:"0 8px 8px 0",flexGrow:1,textDecoration:"none",width:"100%"},expired:{background:ne.expired,"&:hover":{background:ne.expired}},range:{flexGrow:1,textAlign:"left"}});function Nt(e){var t=e.repo,r=e.compares,n=kt({});return i.createElement($e,{name:t,url:"https://github.com/".concat(t),className:n.box},i.createElement("div",{className:n.cardActions},r.map((function(e){return i.createElement(At,Object.assign({key:e.base,repo:t},e))}))))}var kt=Object(re.a)((function(e){return{box:function(e){return{}},branchBtn:{margin:"0 8px 8px 0",flexGrow:1},cardActions:{flexWrap:"wrap",display:"flex"}}}));function St(){var e=k(o).initMergeupData;i.useEffect(e,[]);var t=Gt(),r=ft(),n=Dt(),a=n.loading,c=n.mergeups,l=Object(s.c)((function(e){return{favourites:e.favourites}})).favourites,u=c.filter((function(e){var t=e.repo;return l.includes(t)})),d=c.filter((function(e){var t=e.repo;return!l.includes(t)}));return i.createElement(nt,{loading:a||r,results:c},i.createElement("div",{className:t.root},u.length>0&&i.createElement(Re.a,{className:t.centerContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:3},u.map((function(e){var t=e.repo,r=Object(Ce.a)(e,["repo"]);return i.createElement(Nt,Object.assign({key:"repo",repo:t},r))}))),d.length>0&&i.createElement(Re.a,{className:t.centerContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch",spacing:3},d.map((function(e){var t=e.repo,r=Object(Ce.a)(e,["repo"]);return i.createElement(Nt,Object.assign({key:"repo",repo:t},r))})))))}var Gt=Object(y.a)({root:{textAlign:"center",paddingTop:20,paddingLeft:15,paddingRight:15},centerContainer:{justifyContent:"flex-start",marginBottom:60},button:{marginTop:20}});function _t(){var e=Ft();return i.createElement("div",{className:e.root},i.createElement(ie.c,null,i.createElement(ie.a,{exact:!0,path:"/",component:bt}),i.createElement(ie.a,{path:"/home",component:bt}),i.createElement(ie.a,{path:"/mergeups",component:St}),i.createElement(ie.a,{path:"/stats",component:jt})))}var Ft=Object(y.a)((function(e){return{root:Object(m.a)({backgroundColor:e.palette.background.default,overflow:"auto",width:"100%",height:"calc(100% - 56px)",marginTop:56},e.breakpoints.up("sm"),{height:"calc(100% - 64px)",marginTop:64})}}));var Ct,Rt=Object(y.a)((function(e){return{root:{width:"100%",height:"100%",zIndex:1,overflow:"hidden"},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:{zIndex:e.zIndex.drawer+1,position:"absolute"},appTitle:{flexGrow:.7},appForm:{flexGrow:.3},navIconHide:Object(m.a)({},e.breakpoints.up("md"),{display:"none"}),drawerPaper:Object(m.a)({width:250,backgroundColor:e.palette.background.default},e.breakpoints.up("md"),{width:240,position:"relative",height:"100%"})}})),Bt=(Ct=function(){var e=k(n),t=k(a).initFavourite;i.useEffect((function(){e.initBuildData(),t()}),[]);var r=Rt(),c=i.useState(!0),o=Object(p.a)(c,2),l=o[0],s=o[1],d=Object(f.a)((function(e){return e.breakpoints.down("sm")})),m=function(){s(!l)};return i.createElement(x.a,{basename:"/travis-dashboard"},i.createElement("div",{className:r.root},i.createElement("div",{className:r.appFrame},i.createElement(b.a,{className:r.appBar},i.createElement(g.a,null,i.createElement(v.a,{color:"inherit","aria-label":"open drawer",onClick:m,className:r.navIconHide},i.createElement(j.a,null)),i.createElement(u.a,{variant:"h6",color:"inherit",noWrap:d,className:r.appTitle},"Silverstripe CMS Squad Dashboard"),i.createElement(_e,{className:r.appForm}))),i.createElement(E.a,{mdUp:!0},i.createElement(h.a,{variant:"temporary",anchor:"left",open:l,classes:{paper:r.drawerPaper},onClose:m,ModalProps:{keepMounted:!0}},i.createElement(be,null))),i.createElement(E.a,{smDown:!0},i.createElement(h.a,{variant:"permanent",open:!0,classes:{paper:r.drawerPaper}},i.createElement(be,null))),i.createElement(_t,null))))},function(e){return i.createElement(D.a,{theme:w},i.createElement(T.a,null),i.createElement(Ct,e))}),Mt=r(22),Ut=r(136),Pt=(r(137),r(138)),Ht=r(93),Vt=r(92);function zt(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(n.type)?t[n.type](r,n):r}}var Wt,Yt={modules:[],loading:!0};function qt(e){if(!e||"passed"!==e.state)return e;var t=new Date(e.started_at),r=new Date,n=new Date;return n.setDate(r.getDate()-30),t<n?Object(B.a)({},e,{state:"expired"}):e}var Jt,$t,Kt=zt(Yt,(Wt={},Object(m.a)(Wt,A.LOADING_BUILDS,(function(){return Yt})),Object(m.a)(Wt,A.BUILD_LOADED,(function(e,t){var r,n=t.payload,a=n.json,c=n.lastModified;return Object(B.a)({},e,{modules:(r=a,Object.keys(r).map((function(e){return{branches:r[e],name:e}})).map((function(e){var t=e.branches,r=Object(Ce.a)(e,["branches"]);for(var n in t)t[n]=qt(t[n]);return Object(B.a)({branches:t},r)}))),lastModified:c,loading:!1})})),Wt)),Qt=zt({filter:"latestStable",term:"",partialTerm:"",categoryFilters:["core","nonmodule","supported","unsupported"]},(Jt={},Object(m.a)(Jt,ge.TOGGLE_FILTER,(function(e){var t=e.filter,r=Object(Ce.a)(e,["filter"]);return Object(B.a)({},r,{filter:"latestStable"===t?"all":"latestStable"})})),Object(m.a)(Jt,ge.SET_TERM,(function(e,t){e.triggerSearchTimeout&&clearTimeout(e.triggerSearchTimeout);var r=t.payload,n=r.term,a=r.triggerSearchTimeout;return Object(B.a)({},e,{partialTerm:n.toLocaleLowerCase(),triggerSearchTimeout:a})})),Object(m.a)(Jt,ge.TRIGGER_SEARCH,(function(e){return Object(B.a)({},e,{term:e.partialTerm})})),Object(m.a)(Jt,ge.SET_CATEGORY_FILTER,(function(e,t){var r=t.payload.categoryFilters;return Object(B.a)({},e,{categoryFilters:r})})),Jt)),Xt={mergeups:[],loading:!0},Zt=zt(Xt,($t={},Object(m.a)($t,yt.LOADING,(function(){return Xt})),Object(m.a)($t,yt.LOADED,(function(e,t){var r=t.payload,n=r.json,a=r.lastModified;return Object(B.a)({},e,{mergeups:n,lastModified:a,loading:!1})})),$t)),er=zt([],Object(m.a)({},G.INIT_FAV,(function(e,t){return t.payload||[]}))),tr={key:"root",version:1,storage:Ut,blacklist:[]},rr=(Object(Pt.createLogger)(),Object(Mt.a)(),Object(N.applyMiddleware)(Vt.a));var nr=Object(Ht.a)(tr,Object(N.combineReducers)({builds:Kt,filters:Qt,favourites:er,mergeups:Zt})),ar=function(){var e=Object(N.createStore)(nr,{},rr);return{store:e,persistor:Object(Ht.b)(e)}}(),cr=ar.persistor,or=ar.store;var ir=document.getElementById("root");l.render(i.createElement((function(){return i.createElement(s.a,{store:or},i.createElement(d.a,{loading:i.createElement(u.a,null,"Loading..."),persistor:cr},i.createElement(Bt,null)))}),null),ir)}},[[147,1,2]]]);
//# sourceMappingURL=main.7f454c98.chunk.js.map