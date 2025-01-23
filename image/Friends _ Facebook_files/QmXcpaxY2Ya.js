;/*FB_PKG_DELIM*/

__d("ColorUtils",[],(function(a,b,c,d,e,f){"use strict";var g=new RegExp("^[#]{0,1}([\\w]{1,2})?([\\w]{1,2})([\\w]{1,2})([\\w]{1,2})$"),h=function(a,b){if(a==null)return null;a=a.match(g);if(a==null)return null;a=a.slice(1).map(function(a){return parseInt(a.length==1?a+a:a,16)});if(a.length==4){b==="ARGB"&&a.push(a.shift());return"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]/100+")"}return"rgb("+a[0]+","+a[1]+","+a[2]+")"};function a(a){return h(a,"ARGB")}function b(a){return h(a,"RGBA")}f.hexARGBToCSSRGBA=a;f.hexRGBAToCSSRGBA=b}),66);
__d("FDSEntityHeaderBottomRow.react",["BaseRow.react","BaseRowItem.react","CometEntityHeaderResponsiveRow.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={root:{backgroundColor:"x1ve1bff",boxShadow:"xvo6coq",$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(7),e=a.buttonGroup;a=a.tabs;var f;b[0]!==a?(f=i.jsx(c("BaseRowItem.react"),{expanding:!0,children:a}),b[0]=a,b[1]=f):f=b[1];b[2]!==e?(a=i.jsx(c("BaseRowItem.react"),{children:e}),b[2]=e,b[3]=a):a=b[3];b[4]!==f||b[5]!==a?(e=i.jsx(c("CometEntityHeaderResponsiveRow.react"),{xstyle:j.root,children:i.jsxs(c("BaseRow.react"),{verticalAlign:"center",children:[f,a]})}),b[4]=f,b[5]=a,b[6]=e):e=b[6];return e}g["default"]=a}),98);
__d("useLayoutEffect_SAFE_FOR_SSR",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).useLayoutEffect;b=a;g["default"]=b}),98);
__d("FDSTabs.react",["fbt","CometComponentWithKeyCommands.react","CometFocusGroup.react","CometKeys","CometVisualCompletionAttributes","CurrentLocale","FDSDeferredPopoverTrigger.react","FDSTab.react","Locale","ReactDOM","SVGIcon","TriangleDownFilled20.svg.react","focusScopeQueries","mergeRefs","react","react-compiler-runtime","requireDeferred","stylex","useResizeObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));b=j;b.useCallback;var l=b.useEffect,m=b.useId;b.useMemo;var n=b.useRef,o=b.useState,p=c("requireDeferred")("FDSTabMenu.react").__setRef("FDSTabs.react"),q={invisible:{opacity:"xg01cxk",$$css:!0},moreTab:{height:"x1itg65n",start:"x17qophe",left:null,right:null,position:"x10l6tqk",top:"x13vifvy",$$css:!0},moreTabHidden:{display:"x1s85apg",$$css:!0},moreTabVisible:function(a){return[{start:a==null?null:"x1ilu3uo",left:null,right:null,position:"x10l6tqk",top:"x13vifvy",$$css:!0},{"--insetInlineStart":function(a){return typeof a==="number"?a+"px":a!=null?a:void 0}(a)}]},moreTabVisual:{display:"x3nfvp2",$$css:!0},moreWrapper:{display:"x1rg5ohu",height:"x1itg65n",position:"x1n2onr6",verticalAlign:"x16dsc37",$$css:!0},moreWrapperAdaptive:{height:"x1x4j4od",maxHeight:"xyhpeqk",minHeight:"x2lwn1j",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},root:{height:"x1itg65n",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},tab:{display:"x3nfvp2","float":"xrbpyxo",height:"x1itg65n",verticalAlign:"x16dsc37",$$css:!0},tabsContainer:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",start:"x17qophe",position:"x10l6tqk",top:"x13vifvy",$$css:!0}},r={"default":{width:"x1k51ox",$$css:!0},englishOrShorter:{width:"x192njpj",$$css:!0}},s=["en_US","en_GB","nl_NL","vi_VN","af_ZA","fy_NL","kk_KZ","cs_CZ","sw_KE","it_IT","pt_BR","pt_PT","bg_BG","hr_HR","nn_NO","es_ES","es_LA","fr_FR","ca_ES","fr_CA","si_LK","sr_RS","nb_NO","sv_SE","zh_HK","zh_TW","he_IL","ne_NP","eo_EO"],t=d("Locale").isRTL();function a(a){var b=d("react-compiler-runtime").c(67),e=a["aria-label"],f=a.heightXStyle,g=a.maxHeightXStyle,j=a.maxTabs,y=a.menuSize,z=a.moreTabRef,A=a.moreTabStyles,B=a.moreTabXStyle,C=a.moreWrapperXStyle,D=a.onMoreTabPress,E=a.tabs,F=a.tabsContainerStyle;a=a.truncateMenu;var G=a===void 0?!1:a,H=(a=j)!=null?a:E.length,I=m(),J=m(),ba=n(null);b[0]===Symbol["for"]("react.memo_cache_sentinel")?(j=[],b[0]=j):j=b[0];var K=n(j),ca=n(null),L=n(v);b[1]===Symbol["for"]("react.memo_cache_sentinel")?(a=function(){L.current()},b[1]=a):a=b[1];j=a;var M=c("useResizeObserver")(j);b[2]!==H||b[3]!==E.length?(a=x(E.length,H),b[2]=H,b[3]=E.length,b[4]=a):a=b[4];j=o(a);var N=j[0],O=j[1];a=o(!1);var P=a[0],da=a[1];b[5]!==H||b[6]!==E.length?(j=function(){O(x(E.length,H))},a=[E.length,H],b[5]=H,b[6]=E.length,b[7]=j,b[8]=a):(j=b[7],a=b[8]);l(j,a);b[9]!==H||b[10]!==E?(j=H<E.length?E.slice(0,H):E,b[9]=H,b[10]=E,b[11]=j):j=b[11];var Q=j,R=H>=E.length;if(b[12]!==N||b[13]!==E){b[15]!==E?(a=function(a){return(a=E[a])==null?void 0:a.selected},b[15]=E,b[16]=a):a=b[16];j=N.some(a);b[12]=N;b[13]=E;b[14]=j}else j=b[14];a=j;var S=a;j=o(null);var T=j[0],U=j[1];a=o(!1);var V=a[0],W=a[1],X=n(null);b[17]===Symbol["for"]("react.memo_cache_sentinel")?(j=function(){var a=function(){var a=X.current,b=a==null?void 0:a.parentElement;if(a!=null&&b!=null){a=a.getBoundingClientRect();b=b.getBoundingClientRect();if(a.height<5){U(null);return}t?U(b.right-a.right):U(a.left-b.left)}};a();var b;b=null;var c=function(){b!=null&&window.clearTimeout(b),d("ReactDOM").flushSync(function(){W(!0)}),b=window.setTimeout(function(){a(),W(!1)},300)};L.current=c;return function(){L.current=u,b!=null&&window.clearTimeout(b)}},a=[],b[17]=j,b[18]=a):(j=b[17],a=b[18]);l(j,a);b[19]!==R||b[20]!==f||b[21]!==V||b[22]!==T||b[23]!==C?(j=(i||(i=c("stylex"))).props(q.moreWrapper,r["default"],s.includes(c("CurrentLocale").get())&&r.englishOrShorter,C,f,R&&q.moreWrapperAdaptive,q.moreTabVisual,T!=null&&!V&&q.invisible),b[19]=R,b[20]=f,b[21]=V,b[22]=T,b[23]=C,b[24]=j):j=b[24];b[25]===Symbol["for"]("react.memo_cache_sentinel")?(a=d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react")),b[25]=a):a=b[25];var Y;b[26]===Symbol["for"]("react.memo_cache_sentinel")?(Y=h._(/*BTDS*/"__JHASH__aIpSCYSYAKN__JHASH__"),b[26]=Y):Y=b[26];b[27]!==S||b[28]!==P||b[29]!==I||b[30]!==J||b[31]!==A||b[32]!==B?(a=k.createElement(c("FDSTab.react"),babelHelpers["extends"]({},A,{"aria-controls":I,"aria-expanded":P,"aria-haspopup":"menu",icon:a,iconSize:16,id:J,key:"more-tab-visual",label:Y,role:"tab",selected:S,testid:void 0,xstyle:B})),b[27]=S,b[28]=P,b[29]=I,b[30]=J,b[31]=A,b[32]=B,b[33]=a):a=b[33];b[34]!==j||b[35]!==a?(Y=k.jsx("div",babelHelpers["extends"]({"aria-hidden":!0},j,{ref:X,children:a})),b[34]=j,b[35]=a,b[36]=Y):Y=b[36];var Z=Y;b[37]!==f||b[38]!==S||b[39]!==P||b[40]!==V||b[41]!==g||b[42]!==T||b[43]!==I||b[44]!==J||b[45]!==z||b[46]!==A||b[47]!==B||b[48]!==C||b[49]!==D?(j=function(a,b){a=c("mergeRefs")(a,ca,z);var e=[{command:{key:c("CometKeys").DOWN},description:h._(/*BTDS*/"__JHASH__XKKEZVjEqk8__JHASH__"),handler:b}];return k.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:e,xstyle:[r["default"],s.includes(c("CurrentLocale").get())&&r.englishOrShorter,C,g,T==null?q.moreTabHidden:q.moreTabVisible(T),V&&q.invisible],children:k.jsx(c("FDSTab.react"),babelHelpers["extends"]({},A,{"aria-controls":I,"aria-expanded":P,"aria-haspopup":"menu",icon:d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react")),iconSize:16,id:J,label:h._(/*BTDS*/"__JHASH__aIpSCYSYAKN__JHASH__"),onPress:function(){b(),D==null?void 0:D()},pressableXStyle:[q.moreTab,f],ref:a,role:"tab",selected:S,testid:void 0,xstyle:B}))},"more-tab-functional")},b[37]=f,b[38]=S,b[39]=P,b[40]=V,b[41]=g,b[42]=T,b[43]=I,b[44]=J,b[45]=z,b[46]=A,b[47]=B,b[48]=C,b[49]=D,b[50]=j):j=b[50];var $=j;b[51]!==R||b[52]!==e||b[53]!==f||b[54]!==N||b[55]!==y||b[56]!==T||b[57]!==I||b[58]!==$||b[59]!==J||b[60]!==Z||b[61]!==M||b[62]!==E||b[63]!==F||b[64]!==G||b[65]!==Q?(a=k.jsx(c("CometFocusGroup.react"),{hideArrowSignifiers:!0,orientation:"horizontal",preventScrollOnFocus:!0,role:"tablist",tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:function(a){return k.jsx("div",babelHelpers["extends"]({"aria-label":e,"aria-orientation":"horizontal",className:(i||(i=c("stylex")))(q.root,a,f),role:"tablist"},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{children:k.jsxs("div",babelHelpers["extends"]({className:"x14ju556 x1n2onr6"},{children:[R&&k.jsx("div",babelHelpers["extends"]({className:"x6ikm8r x10wlt62 xlshs6z"},{children:Q.map(function(a,b){a.linkProps;a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["linkProps","onPress"]);return k.createElement(c("FDSTab.react"),babelHelpers["extends"]({},a,{key:b+"tab",ref:function(a){return K.current[b]=a},role:"tab",selected:a.selected,xstyle:[q.tab,a.xstyle]}))})})),k.jsxs("div",babelHelpers["extends"]({},i.props(q.tabsContainer,F),{"data-testid":void 0,ref:M,children:[Z,Q.map(function(a,b){return k.createElement(c("FDSTab.react"),babelHelpers["extends"]({},a,{containerRef:ba,key:b+"tab",onHidden:function(a){O(function(c){return a?w(c,b):aa(c,b)})},pressableXStyle:q.tab,ref:function(a){return K.current[b]=a},role:"tab",selected:a.selected}))}),T!=null&&k.jsx(c("FDSDeferredPopoverTrigger.react"),{onVisibilityChange:da,popoverProps:{ariaLabelledby:J,id:I,menuItems:N.map(function(a){return E[a]}).filter(Boolean),menuSize:y,truncate:G},popoverResource:p,children:$})]}))]}))}))}}),b[51]=R,b[52]=e,b[53]=f,b[54]=N,b[55]=y,b[56]=T,b[57]=I,b[58]=$,b[59]=J,b[60]=Z,b[61]=M,b[62]=E,b[63]=F,b[64]=G,b[65]=Q,b[66]=a):a=b[66];return a}function u(){}function v(){}function w(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function aa(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}function x(a,b){return Array.from({length:a}).map(function(a,b){return b}).filter(function(a){return a>=b})}g["default"]=a}),226);
__d("FDSEntityHeaderTabs.react",["FDSTabs.react","XPlatReactEnvironment","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={entityHeaderTab:{height:"xng8ra",paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",paddingLeft:null,paddingRight:null,$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(8),e=a.maxTabs,f=a.menuSize,g=a.onMoreTabPress;a=a.tabs;var h;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(h={overlayOffset:d("XPlatReactEnvironment").isWeb()?{bottom:-4,left:0,right:0,top:-4}:{bottom:4,left:0,right:0,top:4},overlayRadius:6,underlineColor:"var(--accent)"},b[0]=h):h=b[0];var l;b[1]!==a?(l=a.map(k),b[1]=a,b[2]=l):l=b[2];b[3]!==e||b[4]!==f||b[5]!==g||b[6]!==l?(a=i.jsx(c("FDSTabs.react"),{maxTabs:e,menuSize:f,moreTabStyles:h,moreTabXStyle:j.entityHeaderTab,onMoreTabPress:g,tabs:l,truncateMenu:!0}),b[3]=e,b[4]=f,b[5]=g,b[6]=l,b[7]=a):a=b[7];return a}function k(a){return babelHelpers["extends"]({},a,{overlayOffset:d("XPlatReactEnvironment").isWeb()?{bottom:-4,left:0,right:0,top:-4}:{bottom:4,left:0,right:0,top:4},overlayRadius:6,underlineColor:"var(--accent)",xstyle:j.entityHeaderTab})}g["default"]=a}),98);
__d("FDSEntityHeaderTabBar.react",["FDSEntityHeaderTabs.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(13),e=a.maxTabs,f=a.menuSize,g=a.tabs;a=a.tabsRouteTarget;var h=a===void 0?"self":a;b[0]!==g?(a=g.findIndex(j),b[0]=g,b[1]=a):a=b[1];var k=a;if(b[2]!==k||b[3]!==g||b[4]!==h){b[6]!==k||b[7]!==h?(a=function(a,b){a.isActive;var c=a.linkProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["isActive","linkProps"]);return c?babelHelpers["extends"]({},a,{linkProps:babelHelpers["extends"]({},c,{routeTarget:h}),selected:b===k}):babelHelpers["extends"]({},a,{selected:b===k})},b[6]=k,b[7]=h,b[8]=a):a=b[8];a=g.map(a);b[2]=k;b[3]=g;b[4]=h;b[5]=a}else a=b[5];g=a;b[9]!==g||b[10]!==e||b[11]!==f?(a=i.jsx(c("FDSEntityHeaderTabs.react"),{maxTabs:e,menuSize:f,tabs:g}),b[9]=g,b[10]=e,b[11]=f,b[12]=a):a=b[12];return a}function j(a){return a.isActive()}g["default"]=a}),98);
__d("ProfileCometEntityConvergenceHeaderTopRow.react",["CometEntityHeaderScrollToContext","CometLeftRailLayoutContext","CometRouteRenderType","react","react-compiler-runtime","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useContext,l=b.useEffect,m=b.useRef,n={actionsContainer:{"@media (max-width: 500px)_width":"x1ifrov1","@media (max-width: 899px)_flexDirection":"x1i1uccp","@media (max-width: 899px)_flexGrow":"x1stjdt1","@media (max-width: 899px)_justifyContent":"x1yaem6q","@media (max-width: 899px)_marginTop":"x4ckvhe","@media (min-width: 900px)_alignSelf":"x2k3zez","@media (min-width: 900px)_flexGrow":"xjbssrd","@media (min-width: 900px)_marginBottom":"x1ltux0g","@media (min-width: 900px)_marginStart":"xit7rg8","@media (min-width: 900px)_marginTop":"xc9uqle","@media (min-width: 900px)_maxWidth":"x17quhge",$$css:!0},actorContainer:{"@media (max-width: 899px)_marginBottom":"x15sbx0n","@media (min-width: 900px)_alignSelf":"x1xy773u","@media (min-width: 900px)_bottom":"x390vds","@media (min-width: 900px)_marginEnd":"xb2vh1x","@media (min-width: 900px)_position":"x14xzxk9","@media (min-width: 900px)_start":"x18u1y24",$$css:!0},mainRow:{alignItems:"x6s0dn4",display:"x78zum5","@media (max-width: 899px)_flexDirection":"xvrxa7q","@media (max-width: 899px)_justifyItems":"x9w375v","@media (min-width: 900px)_flexDirection":"xxfedj9","@media (min-width: 900px)_justifyItems":"x1roke11","@media (min-width: 900px)_position":"x1es02x0",$$css:!0},titleContainer:{display:"x78zum5","@media (max-width: 899px)_marginBottom":"x15sbx0n","@media (max-width: 899px)_paddingStart":"x5oxk1f","@media (max-width: 899px)_paddingEnd":"x1jxijyj","@media (min-width: 900px)_alignSelf":"xym1h4x","@media (min-width: 900px)_flexGrow":"xuy2c7u","@media (min-width: 900px)_marginBottom":"x1ltux0g","@media (min-width: 900px)_marginTop":"xc9uqle",$$css:!0}},o={actionsContainer:{"@media (max-width: 1259px)_flexDirection":"x1f96rhh","@media (max-width: 1259px)_flexGrow":"xig2yid","@media (max-width: 1259px)_justifyContent":"x1csz39x","@media (max-width: 1259px)_marginTop":"xs42yjr","@media (max-width: 860px)_width":"x1cdhp0d","@media (min-width: 1260px)_alignSelf":"x1obogrm","@media (min-width: 1260px)_flexGrow":"x1f1051q","@media (min-width: 1260px)_marginBottom":"x1ty54ac","@media (min-width: 1260px)_marginStart":"x1v6bbt2","@media (min-width: 1260px)_marginTop":"xfk785k","@media (min-width: 1260px)_maxWidth":"xsc10am",$$css:!0},actorContainer:{"@media (max-width: 1259px)_marginBottom":"xxi82k7","@media (min-width: 1260px)_alignSelf":"xyihs7y","@media (min-width: 1260px)_bottom":"xq6rjws","@media (min-width: 1260px)_marginEnd":"xs6rc0i","@media (min-width: 1260px)_position":"x17wtha7","@media (min-width: 1260px)_start":"x1u54ilx",$$css:!0},mainRow:{alignItems:"x6s0dn4",display:"x78zum5","@media (max-width: 1259px)_flexDirection":"x9wm9x2","@media (max-width: 1259px)_justifyItems":"xs9i9mj","@media (min-width: 1260px)_flexDirection":"x12k03ys","@media (min-width: 1260px)_justifyItems":"x1fst9g5","@media (min-width: 1260px)_position":"x1wwn1hn",$$css:!0},titleContainer:{display:"x78zum5","@media (max-width: 1259px)_marginBottom":"xxi82k7","@media (max-width: 1259px)_paddingStart":"x63k596","@media (max-width: 1259px)_paddingEnd":"x9a2f9n","@media (min-width: 1260px)_alignSelf":"x1xwl533","@media (min-width: 1260px)_flexGrow":"xq4m25b","@media (min-width: 1260px)_marginBottom":"x1ty54ac","@media (min-width: 1260px)_marginTop":"xfk785k",$$css:!0}},p={bleedHosted:{"@media (min-width: 1260px)_marginTop":"xwvxrgu",$$css:!0},bleedUnhosted:{"@media (min-width: 900px)_marginTop":"x5wy4b0",$$css:!0},large:{marginTop:"xs6kywh",$$css:!0},medium:{marginTop:"x1ix59sy",$$css:!0},small:{marginTop:"xaci4zi",$$css:!0}},q={large:{width:"xe9vn5y",$$css:!0},medium:{width:"xifkd7f",$$css:!0},small:{width:"x1sb9yw4",$$css:!0},spacer:{flexShrink:"x2lah0s",marginEnd:"xktsk01",$$css:!0},spacerHosted:{"@media (max-width: 1259px)_display":"x13ye0ek",$$css:!0},spacerUnhosted:{"@media (max-width: 899px)_display":"x1daaz14",$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(26),e=a.actionsBlock,f=a.actor,g=a.actorPicSize,i=a.banner,r=a.recommendationsUnit,s=a.shouldScrollPastCoverPhoto;a=a.titleBlock;g=g===void 0?"large":g;var t=s===void 0?!0:s,u=k(c("CometEntityHeaderScrollToContext"));s=k(c("CometLeftRailLayoutContext"));var v=d("CometRouteRenderType").useIsHosted();s=s||v;var w=m(null),x;b[0]!==u||b[1]!==t?(v=function(){t&&u.scrollToTop(w,-32)},x=[t,u],b[0]=u,b[1]=t,b[2]=v,b[3]=x):(v=b[2],x=b[3]);l(v,x);b[4]!==s?(v=(h||(h=c("stylex"))).props(s?o.mainRow:n.mainRow),b[4]=s,b[5]=v):v=b[5];x=f==null?w:void 0;var y;b[6]!==f||b[7]!==g||b[8]!==s?(y=f!=null&&j.jsxs(j.Fragment,{children:[j.jsx("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props(s?o.actorContainer:n.actorContainer,p[g],s?p.bleedHosted:p.bleedUnhosted),{ref:w,children:f})),j.jsx("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props(q.spacer,q[g],s?q.spacerHosted:q.spacerUnhosted)))]}),b[6]=f,b[7]=g,b[8]=s,b[9]=y):y=b[9];b[10]!==s||b[11]!==a?(f=a!=null&&j.jsx("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props(s?o.titleContainer:n.titleContainer),{children:a})),b[10]=s,b[11]=a,b[12]=f):f=b[12];b[13]!==e||b[14]!==s?(g=e!=null&&j.jsx("div",babelHelpers["extends"]({},(h||(h=c("stylex"))).props(s?o.actionsContainer:n.actionsContainer),{children:e})),b[13]=e,b[14]=s,b[15]=g):g=b[15];b[16]!==v||b[17]!==x||b[18]!==y||b[19]!==f||b[20]!==g?(a=j.jsxs("div",babelHelpers["extends"]({},v,{ref:x,children:[y,f,g]})),b[16]=v,b[17]=x,b[18]=y,b[19]=f,b[20]=g,b[21]=a):a=b[21];b[22]!==i||b[23]!==r||b[24]!==a?(e=j.jsxs("div",{children:[a,r,i]}),b[22]=i,b[23]=r,b[24]=a,b[25]=e):e=b[25];return e}g["default"]=a}),98);
__d("ProfileCometProfilePictureGlimmer.react",["BaseLoadingStateElement.react","FDSGlimmer.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={glimmer:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x5yr21d",width:"xh8yej3",$$css:!0},root:{backgroundColor:"x1jx94hy",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",paddingTop:"x1iorvi4",paddingEnd:"x150jy0e",paddingBottom:"xjkvuk6",paddingStart:"x1e558r4",$$css:!0},rootSizing:function(a){return[{height:a==null?null:"x1f5funs",width:a==null?null:"x1bl4301",$$css:!0},{"--height":function(a){return typeof a==="number"?a+"px":a!=null?a:void 0}(a),"--width":function(a){return typeof a==="number"?a+"px":a!=null?a:void 0}(a)}]}};function a(a){var b=d("react-compiler-runtime").c(7);a=a.size;var e;b[0]!==a?(e=j.rootSizing(a),b[0]=a,b[1]=e):e=b[1];b[2]!==e?(a=[j.root,e],b[2]=e,b[3]=a):a=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(e=i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.glimmer}),b[4]=e):e=b[4];b[5]!==a?(e=i.jsx(c("BaseLoadingStateElement.react"),{testid:void 0,xstyle:a,children:e}),b[5]=a,b[6]=e):e=b[6];return e}g["default"]=a}),98);
__d("ProfileCometSingleEditDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8383276631770388"}),null);
__d("ProfileCometSingleEditDialogQuery$Parameters",["ProfileCometSingleEditDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometSingleEditDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometSingleEditDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometSingleEditDialog.entrypoint",["JSResourceForInteraction","ProfileCometSingleEditDialogQuery$Parameters","WebPixelRatio","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:c("ProfileCometSingleEditDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),shouldUseFXIMProfilePicEditor:(a=c("qex")._("967"))!=null?a:!1}}}}},root:c("JSResourceForInteraction")("ProfileCometSingleEditDialog.react").__setRef("ProfileCometSingleEditDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometTabsGlimmer.react",["BaseLoadingStateElement.react","FDSGlimmer.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={root:{display:"x78zum5",marginBottom:"xod5an3",marginStart:"x1d52u69",marginTop:"x14vqqas",$$css:!0},tab:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",height:"x1qx5ct2",marginTop:"x1xmf6yo",marginEnd:"xqmgo2j",marginBottom:"x1e56ztr",marginStart:"x1mh8g0r",width:"x1fu8urw",$$css:!0}};function a(){var a=d("react-compiler-runtime").c(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=i.jsxs(c("BaseLoadingStateElement.react"),{testid:void 0,xstyle:j.root,children:[i.jsx(c("FDSGlimmer.react"),{index:1,xstyle:j.tab}),i.jsx(c("FDSGlimmer.react"),{index:2,xstyle:j.tab}),i.jsx(c("FDSGlimmer.react"),{index:3,xstyle:j.tab}),i.jsx(c("FDSGlimmer.react"),{index:4,xstyle:j.tab}),i.jsx(c("FDSGlimmer.react"),{index:5,xstyle:j.tab})]}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("XCometProfileVanityTributesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/tributes/",Object.freeze({should_open_composer:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/{sk}/",Object.freeze({should_open_composer:!1,badge_type:"NEW_MEMBER"}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTimelineControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/timeline/",Object.freeze({should_open_composer:!1}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometURIUtils",["ProfileCometContext","XCometProfileControllerRouteBuilder","XCometProfileVanityControllerRouteBuilder","XCometProfileVanityTributesControllerRouteBuilder","XCometVanityTabControllerRouteBuilder","XCometVanityTimelineControllerRouteBuilder","XCometVanityWoodhengeSupportersURLControllerRouteBuilder","isStringNullOrEmpty","react","react-compiler-runtime","unrecoverableViolation","useCurrentRouteEntityKey"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(a){var b=i(c("ProfileCometContext"));b=b.profileID;var d=c("useCurrentRouteEntityKey")();return d!=null&&d.entity_type==="profile"&&d.entity_id===b&&d.section===a}function b(){var a=d("react-compiler-runtime").c(4),b=i(c("ProfileCometContext")),e=b.profileID;b=b.profileVanity;if(!c("isStringNullOrEmpty")(b)){var f;a[0]!==b?(f=c("XCometProfileVanityControllerRouteBuilder").buildURL({vanity:b}),a[0]=b,a[1]=f):f=a[1];return f}if(e!=null){a[2]!==e?(b=c("XCometProfileControllerRouteBuilder").buildURL({id:e}),a[2]=e,a[3]=b):b=a[3];return b}throw c("unrecoverableViolation")("Cannot generate URI for profile when id and vanity are both null","profile_comet")}function e(a){var b=d("react-compiler-runtime").c(13),e=i(c("ProfileCometContext")),f=e.profileID;e=e.profileVanity;if(a==="supporters"){var g;b[0]!==f||b[1]!==e?(g=c("XCometVanityWoodhengeSupportersURLControllerRouteBuilder").buildURL({entrypoint_surface:"supporter_hub_tab_on_profile_plus_surface",surface:"supporter_hub_tab_on_profile_plus_surface",vanity:c("isStringNullOrEmpty")(e)?f:e}),b[0]=f,b[1]=e,b[2]=g):g=b[2];return g}if(!c("isStringNullOrEmpty")(e)){if(a==="timeline"){b[3]!==e?(g=c("XCometVanityTimelineControllerRouteBuilder").buildURL({vanity:e}),b[3]=e,b[4]=g):g=b[4];return g}if(a==="tributes"){b[5]!==e?(g=c("XCometProfileVanityTributesControllerRouteBuilder").buildURL({vanity:e}),b[5]=e,b[6]=g):g=b[6];return g}b[7]!==e||b[8]!==a?(g=c("XCometVanityTabControllerRouteBuilder").buildURL({sk:a,vanity:e}),b[7]=e,b[8]=a,b[9]=g):g=b[9];return g}if(f!=null){b[10]!==f||b[11]!==a?(e=c("XCometProfileControllerRouteBuilder").buildURL({id:f,sk:a}),b[10]=f,b[11]=a,b[12]=e):e=b[12];return e}throw c("unrecoverableViolation")("Cannot generate URI for profile section when id and vanity are both null","profile_comet")}g.useIsProfileSectionActive=a;g.useURIForProfile=b;g.useURIForProfileSection=e}),98);
__d("ProfileCometUtils",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){return a!=null&&b!=null&&a===b}function a(a,b){return a==null||g(a,b)}f.isViewingSelfProfile=g;f.isViewingFeed=a}),66);