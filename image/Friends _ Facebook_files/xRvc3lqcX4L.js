;/*FB_PKG_DELIM*/

__d("FriendingCometPYMKListItem_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"FriendingCometPYMKListItem_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"FriendingCometListItemWithButtons_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("FriendingCometPYMKListItem.react",["fbt","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestSendMutation","FriendingCometListItemWithButtons.react","FriendingCometPYMKListItem_user.graphql","FriendingCometTestIDHelper","RegularPymkAddFalcoEvent","RegularPymkImpFalcoEvent","RegularPymkProfileFalcoEvent","react","useMinifiedProductAttribution","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;var l=e.useCallback,m=e.useRef;function a(a){var e=a.onDelete,f=a.reduceEmphasisPrimary,g=a.signature;a=a.user;a=d("CometRelay").useFragment(i!==void 0?i:i=b("FriendingCometPYMKListItem_user.graphql"),a);e=e;var j=a.friendship_status,n=a.id,o=a.name,p=a.profile_picture,q=a.url;p=p==null?void 0:p.uri;var r=g,s=d("CometRelay").useRelayEnvironment(),t=m(!1),u=m(!1),v=d("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:(g=n)!=null?g:"0",friendingChannel:"FRIENDS_HOME_MAIN"}),w=c("useMinifiedProductAttribution")();g=l(function(){n!=null&&(d("FriendingCometFriendRequestSendMutation").commit({environment:s,friendingChannel:"FRIENDS_HOME_MAIN",navigationChain:w,onError:v,pymkLocation:"friends_home_main",receiverID:n}),c("RegularPymkAddFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_home_main",pymk_signature:r}}))},[s,v,n,w,r]);var x=l(function(){n!=null&&(u.current=!0,d("FriendingCometFriendRequestCancelMutation").commit({environment:s,friendingChannel:"FRIENDS_HOME_MAIN",navigationChain:w,onError:v,receiverID:n}))},[s,v,n,w]),y=l(function(){n!=null&&c("RegularPymkProfileFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_home_main",pymk_signature:r}})},[n,r]),z=l(function(){n!=null&&!t.current&&(c("RegularPymkImpFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_home_main",pymk_signature:r}}),t.current=!0)},[n,r]);z=c("useVisibilityObserver")({onVisible:z});if(n==null||q==null||p==null||o==null)return null;var A=null;switch(j){case"CAN_REQUEST":A=u.current?h._(/*BTDS*/"__JHASH__MJNiftGCp6X__JHASH__"):null;u.current=!1;return k.jsx("div",{"data-testid":void 0,ref:z,children:k.jsx(c("FriendingCometListItemWithButtons.react"),{href:q,iconSrc:p,message:A,onAddFriend:g,onClick:y,onDelete:e,reduceEmphasisPrimary:f,routeTarget:"content",title:o,user:a})});case"OUTGOING_REQUEST":A=h._(/*BTDS*/"__JHASH__TEOr0XFFOKy__JHASH__");return k.jsx("div",{"data-testid":void 0,ref:z,children:k.jsx(c("FriendingCometListItemWithButtons.react"),{href:q,iconSrc:p,message:A,onCancelRequest:x,onClick:y,routeTarget:"content",title:o,user:a})});case"INCOMING_REQUEST":case"ARE_FRIENDS":return null}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("FriendingCometPYMKPanelPaginationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7092620694160277"}),null);
__d("FriendingCometPYMKPanelPaginationQuery.graphql",["FriendingCometPYMKPanelPaginationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:"FRIENDS_HOME_MAIN",kind:"LocalArgument",name:"location"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c={kind:"Variable",name:"location",variableName:"location"},d=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},c],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g={kind:"Variable",name:"scale",variableName:"scale"},h=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometPYMKPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"},c],kind:"FragmentSpread",name:"FriendingCometPYMKPanel_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometPYMKPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:d,concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"people_you_may_know",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},g,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:h,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[e,f,{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Literal",name:"height",value:20},g,{kind:"Literal",name:"width",value:20}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:h,storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],type:"FriendNode",abstractKey:"__isFriendNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:d,filters:["location"],handle:"connection",key:"FriendingCometPYMKPanel_people_you_may_know",kind:"LinkedHandle",name:"people_you_may_know"}],storageKey:null}]},params:{id:b("FriendingCometPYMKPanelPaginationQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometPYMKPanelPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("FriendingCometPYMKPanel_viewer.graphql",["FriendingCometPYMKPanelPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["people_you_may_know"];return{argumentDefinitions:[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:"FRIENDS_HOME_MAIN",kind:"LocalArgument",name:"location"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["viewer"],operation:b("FriendingCometPYMKPanelPaginationQuery.graphql")}},name:"FriendingCometPYMKPanel_viewer",selections:[{alias:"people_you_may_know",args:[{kind:"Variable",name:"location",variableName:"location"}],concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"__FriendingCometPYMKPanel_people_you_may_know_connection",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"FriendingCometPYMKListItem_user"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("FriendingCometPYMKPanel.react",["fbt","CometRelay","FDSListCellGlimmer.react","FriendingCometPYMKBlacklistSuggestionMutation","FriendingCometPYMKListItem.react","FriendingCometPYMKPanel_viewer.graphql","FriendingCometPanel.react","FriendingCometTestIDHelper","RegularPymkXoutFalcoEvent","react","react-compiler-runtime","react-relay/relay-hooks/legacy/useBlockingPaginationFragment","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;e.useCallback;var l=e.useTransition,m=30;function a(a){var e=d("react-compiler-runtime").c(27),f=a.reduceEmphasisPrimary;a=a.viewer;var g=l(),j=g[0],n=g[1];e[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=i!==void 0?i:i=b("FriendingCometPYMKPanel_viewer.graphql"),e[0]=g):g=e[0];g=c("react-relay/relay-hooks/legacy/useBlockingPaginationFragment")(g,a);a=g.data;var o=g.hasNext,p=g.loadNext;g=a==null?void 0:(g=a.people_you_may_know)==null?void 0:g.edges;var q=a==null?void 0:(a=a.people_you_may_know)==null?void 0:a.tracking_signature,r=d("CometRelay").useRelayEnvironment();e[1]!==o||e[2]!==j||e[3]!==p?(a=function(){if(!o||j)return;n(function(){p(m)})},e[1]=o,e[2]=j,e[3]=p,e[4]=a):a=e[4];a=a;var s;e[5]!==a?(s={onVisible:a},e[5]=a,e[6]=s):s=e[6];a=c("useVisibilityObserver")(s);s=null;if(g!=null){var t;e[7]!==r||e[8]!==q?(t=function(a){return function(){a!=null&&(d("FriendingCometPYMKBlacklistSuggestionMutation").commit(r,"FriendingCometPYMKPanel_people_you_may_know",d("CometRelay").VIEWER_ID,a,"FRIENDS_HOME_MAIN","FRIENDS_HOME_MAIN"),c("RegularPymkXoutFalcoEvent").log(function(){return{pymk_id:a,pymk_location:"friends_home_main",pymk_signature:q}}))}},e[7]=r,e[8]=q,e[9]=t):t=e[9];var u=t;if(e[10]!==g||e[11]!==o||e[12]!==a||e[13]!==u||e[14]!==f||e[15]!==q){e[17]!==u||e[18]!==f||e[19]!==q?(t=function(a,b){a=a==null?void 0:a.node;return a==null?null:k.jsx(c("FriendingCometPYMKListItem.react"),{onDelete:u(a.id),reduceEmphasisPrimary:f,signature:q,user:a},(a=a==null?void 0:a.id)!=null?a:b)},e[17]=u,e[18]=f,e[19]=q,e[20]=t):t=e[20];s=g.map(t);if(o){t=s;var v;e[21]===Symbol["for"]("react.memo_cache_sentinel")?(v=c("FriendingCometTestIDHelper").getFriendsTabPYMKTestID("glimmer"),e[21]=v):v=e[21];e[22]===Symbol["for"]("react.memo_cache_sentinel")?(v=k.jsx(c("FDSListCellGlimmer.react"),{imageSize:60,imageStyle:"circle",numberOfItems:2}),e[22]=v):v=e[22];e[23]!==a?(v=k.jsx("div",{"data-testid":void 0,ref:a,children:v},"glimmer"),e[23]=a,e[24]=v):v=e[24];t.push(v)}e[10]=g;e[11]=o;e[12]=a;e[13]=u;e[14]=f;e[15]=q;e[16]=s}else s=e[16]}e[25]!==s?(t=s!=null&&s.length!==0?k.jsx(c("FriendingCometPanel.react"),{heading:h._(/*BTDS*/"__JHASH__BU1R5VZ_j1L__JHASH__"),children:s}):null,e[25]=s,e[26]=t):t=e[26];return t}g["default"]=a}),226);
__d("FriendingCometSuggestionsRootQuery.graphql",["FriendingCometSuggestionsRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"}],c={alias:"pymk_suggestions",args:null,concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"people_you_may_know",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},d=[{kind:"Literal",name:"first",value:10},{kind:"Literal",name:"location",value:"FRIENDS_HOME_MAIN"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g={kind:"Variable",name:"scale",variableName:"scale"},h=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometSuggestionsRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"FriendingCometPYMKPanel_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometSuggestionsRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[c,{alias:null,args:d,concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"people_you_may_know",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},g,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:h,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[e,f,{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Literal",name:"height",value:20},g,{kind:"Literal",name:"width",value:20}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:h,storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],type:"FriendNode",abstractKey:"__isFriendNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:'people_you_may_know(first:10,location:"FRIENDS_HOME_MAIN")'},{alias:null,args:d,filters:["location"],handle:"connection",key:"FriendingCometPYMKPanel_people_you_may_know",kind:"LinkedHandle",name:"people_you_may_know"}],storageKey:null}]},params:{id:b("FriendingCometSuggestionsRootQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometSuggestionsRootQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("FriendingCometSuggestionsRoot.react",["fbt","CometContentArea.react","CometErrorBoundary.react","CometLeftRailAndMainContentContainer.react","CometLeftRailBreadcrumbs.react","CometLeftRailComponent.react","CometLeftRailHeader.react","CometPlaceholder.react","CometRelay","FDSListCellGlimmer.react","FriendingCometNullStateView.react","FriendingCometPYMKPanel.react","FriendingCometSectionTabView.react","FriendingCometSuggestionsRootQuery.graphql","FriendsCenterOpenedFalcoEvent","isStringNullOrEmpty","react","react-compiler-runtime","useRoutePassthroughProps","useSimpleImpression"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));j.useCallback;function l(a){var e=d("react-compiler-runtime").c(14),f=a.children,g=a.entryPoints,h=a.friendingCometSuggestionsRootQueryReference,j=a.routeProps;a=a.title;h=d("CometRelay").usePreloadedQuery(i!==void 0?i:i=b("FriendingCometSuggestionsRootQuery.graphql"),h);h=h==null?void 0:h.viewer;var l=c("useRoutePassthroughProps")(),m=(l==null?void 0:l.ref)!=null?String(l==null?void 0:l.ref):null;e[0]!==m?(l=function(){c("FriendsCenterOpenedFalcoEvent").log(function(){return{initial_tab:"suggestions",source_ref:m}})},e[0]=m,e[1]=l):l=e[1];l=l;c("useSimpleImpression")(l);if(h==null)return null;l=(l=h==null?void 0:(l=h.pymk_suggestions)==null?void 0:l.count)!=null?l:0;j=j.profileID;var n;e[2]!==g||e[3]!==j||e[4]!==l?(n=c("isStringNullOrEmpty")(j)?k.jsx(c("FriendingCometNullStateView.react"),{hasRequestsOrSuggestions:l>0}):k.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:g.profileEntryPoint,props:{routeProps:{userID:j,userVanity:null}}}),e[2]=g,e[3]=j,e[4]=l,e[5]=n):n=e[5];g=n;e[6]===Symbol["for"]("react.memo_cache_sentinel")?(j={className:"x135pmgq"},e[6]=j):j=e[6];e[7]!==h?(l=k.jsx("div",babelHelpers["extends"]({},j,{children:k.jsx(c("FriendingCometPYMKPanel.react"),{viewer:h})})),e[7]=h,e[8]=l):l=e[8];e[9]!==f||e[10]!==g||e[11]!==l||e[12]!==a?(n=k.jsx(c("FriendingCometSectionTabView.react"),{children:f,leftRail:l,mainContent:g,title:a}),e[9]=f,e[10]=g,e[11]=l,e[12]=a,e[13]=n):n=e[13];return n}function a(a){var b=d("react-compiler-runtime").c(19),e=a.entryPoints,f=a.props;a=a.queries;var g;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=h._(/*BTDS*/"__JHASH__ljSXcxsf-G8__JHASH__"),b[0]=g):g=b[0];var i=g;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(g=[{label:h._(/*BTDS*/"__JHASH__rPUk5WJxYrb__JHASH__")}],b[1]=g):g=b[1];g=g;var j;b[2]!==f.children?(j=function(){return k.jsx(c("CometLeftRailAndMainContentContainer.react"),{leftRailContent:k.jsx(c("CometLeftRailComponent.react"),{header:k.jsx(c("CometLeftRailHeader.react"),{title:i}),primaryNav:h._(/*BTDS*/"__JHASH__kDqpb8erb2N__JHASH__")}),leftRailHeading:i,leftRailPrimary:f.children==null,mainContent:k.jsx(c("CometContentArea.react"),{children:k.jsx("div",{})}),mainContentHeading:i})},b[2]=f.children,b[3]=j):j=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(g=k.jsx(c("CometLeftRailComponent.react"),{header:k.jsx(c("CometLeftRailHeader.react"),{meta:k.jsx(c("CometLeftRailBreadcrumbs.react"),{breadcrumbs:g}),title:i}),primaryNav:k.jsx(c("FDSListCellGlimmer.react"),{imageSize:60,imageStyle:"circle",numberOfItems:4})}),b[4]=g):g=b[4];var m=f.children==null,n;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(n=k.jsx(c("CometContentArea.react"),{children:k.jsx("div",{})}),b[5]=n):n=b[5];b[6]!==m?(g=k.jsx(c("CometLeftRailAndMainContentContainer.react"),{leftRailContent:g,leftRailHeading:i,leftRailPrimary:m,mainContent:n,mainContentHeading:i}),b[6]=m,b[7]=g):g=b[7];b[8]!==e||b[9]!==f.children||b[10]!==f.routeProps||b[11]!==a.friendingCometSuggestionsRootQueryReference?(n=k.jsx(l,{children:f.children,entryPoints:e,friendingCometSuggestionsRootQueryReference:a.friendingCometSuggestionsRootQueryReference,routeProps:f.routeProps,title:i}),b[8]=e,b[9]=f.children,b[10]=f.routeProps,b[11]=a.friendingCometSuggestionsRootQueryReference,b[12]=n):n=b[12];b[13]!==g||b[14]!==n?(m=k.jsx(c("CometPlaceholder.react"),{fallback:g,children:n}),b[13]=g,b[14]=n,b[15]=m):m=b[15];b[16]!==j||b[17]!==m?(e=k.jsx(c("CometErrorBoundary.react"),{fallback:j,children:m}),b[16]=j,b[17]=m,b[18]=e):e=b[18];return e}g["default"]=a}),226);
__d("IntlCLDRNumberType22",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a%100===1)return c("IntlVariations").NUMBER_ONE;else if(a%100===2)return c("IntlVariations").NUMBER_TWO;else if(a%100>=3&&a%100<=4)return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);