;/*FB_PKG_DELIM*/

__d("BirthdayCometFriendingRoot.entrypoint",["BirthdayCometContentQuery$Parameters","EventCometBirthdayMegaphoneRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){var a=d("WebPixelRatio").get();return{queries:{birthdays$key:{parameters:b("BirthdayCometContentQuery$Parameters"),variables:{offset_month:0,scale:a,stream_birthday_months:!1}},megaphone$key:{parameters:b("EventCometBirthdayMegaphoneRootQuery$Parameters"),variables:{scale:a,surface_nux_id:c("gkx")("22940")?"11533":"2646"}}}}},root:c("JSResourceForInteraction")("BirthdayCometFriendingRoot.react").__setRef("BirthdayCometFriendingRoot.entrypoint")};g["default"]=a}),98);
__d("FriendListCometRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4993159444104251"}),null);
__d("FriendListCometRootQuery$Parameters",["FriendListCometRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendListCometRootQuery_facebookRelayOperation"),metadata:{},name:"FriendListCometRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendListCometRoot.entrypoint",["FriendListCometRootQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){var a={};return{queries:{friendListCometRootQueryReference:{parameters:b("FriendListCometRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("FriendListCometRoot.react").__setRef("FriendListCometRoot.entrypoint")};g["default"]=a}),98);
__d("FriendingCometAllFriendsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="28740082968923890"}),null);
__d("FriendingCometAllFriendsRootQuery$Parameters",["FriendingCometAllFriendsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometAllFriendsRootQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometAllFriendsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendingCometAllFriendsRoot.entrypoint",["FriendingCometAllFriendsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a={scale:d("WebPixelRatio").get()};return{queries:{friendingCometAllFriendsRootQueryReference:{parameters:b("FriendingCometAllFriendsRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("FriendingCometAllFriendsRoot.react").__setRef("FriendingCometAllFriendsRoot.entrypoint")};g["default"]=a}),98);
__d("FriendingCometBirthdayRootContentQuery$Parameters",["FriendingCometBirthdayRootContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometBirthdayRootContentQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometBirthdayRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendingCometBirthdayRoot.entrypoint",["BirthdayCometFriendingRoot.entrypoint","FriendingCometBirthdayRootContentQuery$Parameters","JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){var a=d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:c("BirthdayCometFriendingRoot.entrypoint"),entryPointParams:{}});return{entryPoints:{birthdaysEntryPoint:a},queries:{friendingCometBirthdayRootContentQueryReference:{parameters:b("FriendingCometBirthdayRootContentQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("FriendingCometBirthdayRoot.react").__setRef("FriendingCometBirthdayRoot.entrypoint")};g["default"]=a}),98);