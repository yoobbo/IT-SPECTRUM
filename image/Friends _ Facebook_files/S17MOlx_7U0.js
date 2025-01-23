;/*FB_PKG_DELIM*/

__d("CometHovercard_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"context"}],kind:"Fragment",metadata:null,name:"CometHovercard_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:"1qvCzF"}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGamingStreamerRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardGamingStreamerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupContextualProfileRenderer_profile",fragmentPropName:"profile",kind:"ModuleImport"}],type:"CometHovercardGroupContextualProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGameRenderer_game",fragmentPropName:"game",kind:"ModuleImport"}],type:"CometHovercardGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardApplicationInstantGameRenderer_application",fragmentPropName:"application",kind:"ModuleImport"}],type:"CometHovercardApplicationInstantGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardRemovedCommentRenderer_comment",fragmentPropName:"comment",kind:"ModuleImport"}],type:"CometHovercardRemovedCommentRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WorkCometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WorkCometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRP4SMBRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRP4SMBRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardWorkroomsUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardWorkroomsUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserWorkPlatformRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserWorkPlatformRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardTownsquareUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardTownsquareUserRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometHovercard.react",["CometHovercardLinkContext","CometHovercard_entity.graphql","CometRelay","CometTrackingNodeProvider.react","react","react-compiler-runtime","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));i.useMemo;function a(a){var e=d("react-compiler-runtime").c(9),f=a.entity,g=a.id;a=a.visualStyle;a=a===void 0?"default":a;f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometHovercard_entity.graphql"),f);var i;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(i={isRenderedInHovercard:!0},e[0]=i):i=e[0];i=i;i=i;var k=f==null?void 0:f.comet_hovercard_renderer;if(k==null){f="Unhandled entity for Hovercard "+f.__typename;var l;e[1]!==f?(l=c("recoverableViolation")(f,"comet_ui"),e[1]=f,e[2]=l):l=e[2];return l}e[3]!==g||e[4]!==a?(f={id:g,visualStyle:a},e[3]=g,e[4]=a,e[5]=f):f=e[5];e[6]!==k||e[7]!==f?(l=j.jsx(c("CometHovercardLinkContext").Provider,{value:i,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:250,children:j.jsx(d("CometRelay").MatchContainer,{fallback:null,match:k,props:f})})}),e[6]=k,e[7]=f,e[8]=l):l=e[8];return l}g["default"]=a}),98);
__d("CometHovercardQueryRendererQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:"WWW_COMET_HOVERCARD",kind:"LocalArgument",name:"actionBarRenderLocation"},b={defaultValue:"DEFAULT",kind:"LocalArgument",name:"context"},c={defaultValue:null,kind:"LocalArgument",name:"entityID"},d={defaultValue:null,kind:"LocalArgument",name:"groupID"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f=[{kind:"Variable",name:"id",variableName:"entityID"}],g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,b,c,d,e],kind:"Fragment",metadata:null,name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometHovercard_entity"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e,c,b,d],kind:"Operation",name:"CometHovercardQueryRendererQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"context",variableName:"context"},{kind:"Literal",name:"supported",value:"1qvCzF"}],concreteType:null,kind:"LinkedField",name:"comet_hovercard_renderer",plural:!1,selections:[g,{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardMarketplaceUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardMarketplaceUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardProfilePlusUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardProfilePlusUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGamingStreamerRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"CometHovercardGamingStreamerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"CometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupContextualProfileRenderer_profile",fragmentPropName:"profile",kind:"ModuleImport"}],type:"CometHovercardGroupContextualProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"CometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupAnonProfileRenderer_anon",fragmentPropName:"anon",kind:"ModuleImport"}],type:"CometHovercardGroupAnonProfileRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGroupMemberRenderer_actor",fragmentPropName:"actor",kind:"ModuleImport"}],type:"CometHovercardGroupMemberRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardGameRenderer_game",fragmentPropName:"game",kind:"ModuleImport"}],type:"CometHovercardGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardApplicationInstantGameRenderer_application",fragmentPropName:"application",kind:"ModuleImport"}],type:"CometHovercardApplicationInstantGameRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardRemovedCommentRenderer_comment",fragmentPropName:"comment",kind:"ModuleImport"}],type:"CometHovercardRemovedCommentRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardAdminUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardAdminUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardEventRenderer_event",fragmentPropName:"event",kind:"ModuleImport"}],type:"WorkCometHovercardEventRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupPrivacyInfoRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupPrivacyInfoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardGroupRenderer_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"WorkCometHovercardGroupRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardPageRenderer_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"WorkCometHovercardPageRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRP4SMBRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRP4SMBRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardWorkroomsUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardWorkroomsUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"WorkCometHovercardUserWorkPlatformRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"WorkCometHovercardUserWorkPlatformRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometHovercard_entity",fragmentName:"CometHovercardTownsquareUserRenderer_user",fragmentPropName:"user",kind:"ModuleImport"}],type:"CometHovercardTownsquareUserRenderer",abstractKey:null}],storageKey:null}],type:"CometHovercard",abstractKey:"__isCometHovercard"}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null}]},params:{id:"27838033792508877",metadata:{},name:"CometHovercardQueryRendererQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometHovercardQueryRenderer.react",["CometHovercard.react","CometHovercardQueryRendererQuery.graphql","CometRelay","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=d("react-compiler-runtime").c(4),f=a.props;a=a.queries;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometHovercardQueryRendererQuery.graphql"),a.hovercardQueryReference);a=a==null?void 0:a.node;if(a==null)return null;var g=f.id;f=f.visualStyle;var i;e[0]!==g||e[1]!==a||e[2]!==f?(i=j.jsx(c("CometHovercard.react"),{entity:a,id:g,visualStyle:f}),e[0]=g,e[1]=a,e[2]=f,e[3]=i):i=e[3];return i}g["default"]=a}),98);