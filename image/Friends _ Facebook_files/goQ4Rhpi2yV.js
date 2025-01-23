;/*FB_PKG_DELIM*/

__d("LSShimThreadPinMessage.nop",["FBLogger","I64","Promise","ReQL","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h,i;a=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,f,g,j){if(j==null){c("FBLogger")("messenger_web_pinned_messages").warn("threadKey is null in LSShimThreadPinMessage");return}e=(yield d("ReQL").toArrayAsync(d("ReQL").fromTableDescending(a.client_web_pinned_messages).getKeyRange(j,f)));yield (i||(i=b("Promise"))).all(e.map(function(b){return a.client_web_pinned_messages["delete"](b.threadKey,b.offlineThreadingId,b.pinnedTimestampMs)}));yield a.client_web_pinned_messages.put({offlineThreadingId:f,pinnedTimestampMs:g||(h||(h=d("I64"))).of_float(Date.now()),threadKey:j})});function e(b,c,d,e,f){return a.apply(this,arguments)}return e}();g["default"]=a}),98);
__d("LSShimThreadUnpinMessage.nop",["FBLogger","Promise","ReQL","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,f,g){if(g==null){c("FBLogger")("messenger_web_pinned_messages").warn("threadKey is null in LSShimThreadUnpinMessage");return}e=(yield d("ReQL").toArrayAsync(d("ReQL").fromTableDescending(a.client_web_pinned_messages).getKeyRange(g,f)));yield (h||(h=b("Promise"))).all(e.map(function(b){return a.client_web_pinned_messages["delete"](b.threadKey,b.offlineThreadingId,b.pinnedTimestampMs)}))});function e(b,c,d,e){return a.apply(this,arguments)}return e}();g["default"]=a}),98);
__d("LSOptimisticSetOrUnsetPinnedMessage",["LSIssueNewTask","LSShimThreadPinMessage.nop","LSShimThreadUnpinMessage.nop"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.i64.neq(a[1],void 0)?c.i64.eq(a[3],c.i64.cast([0,1]))||c.i64.eq(a[3],c.i64.cast([0,2]))?c.sequence([function(d){return c.nativeOperation(b("LSShimThreadPinMessage.nop"),a[0],a[2],a[1])},function(b){return c.db.table(9).fetch([[[a[1]]]]).next().then(function(a,b){var e=a.done;a=a.value;return e?d[0]=c.i64.cast([0,1]):(b=a.item,d[6]=b.syncGroup,c.i64.neq(d[6],void 0)?d[5]=d[6]:d[5]=c.i64.cast([0,1]),d[0]=d[5])})},function(e){return d[2]=new c.Map(),d[2].set("armadillo_thread_key",a[1]),d[2].set("offline_threading_id",a[0]),d[2].set("timestamp_ms",a[2]),d[2].set("sync_group",d[0]),d[3]=d[2].get("timestamp_ms"),d[4]=c.toJSON(d[2]),c.storedProcedure(b("LSIssueNewTask"),["e2ee_pin_msg","_",c.i64.to_string(d[3])].join(""),c.i64.cast([0,1010]),d[4],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))}]):c.sequence([function(d){return c.nativeOperation(b("LSShimThreadUnpinMessage.nop"),a[0],a[1])},function(b){return c.db.table(9).fetch([[[a[1]]]]).next().then(function(a,b){var e=a.done;a=a.value;return e?d[0]=c.i64.cast([0,1]):(b=a.item,d[6]=b.syncGroup,c.i64.neq(d[6],void 0)?d[5]=d[6]:d[5]=c.i64.cast([0,1]),d[0]=d[5])})},function(e){return d[2]=new c.Map(),d[2].set("armadillo_thread_key",a[1]),d[2].set("offline_threading_id",a[0]),d[2].set("timestamp_ms",a[2]),d[2].set("sync_group",d[0]),d[3]=d[2].get("timestamp_ms"),d[4]=c.toJSON(d[2]),c.storedProcedure(b("LSIssueNewTask"),["e2ee_unpin_msg","_",c.i64.to_string(d[3])].join(""),c.i64.cast([0,1011]),d[4],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))}]):c.resolve()},function(a){return c.resolve(e)}])}a.__sproc_name__="LSE2EEMessagingMetadataMailboxOptimisticSetOrUnsetPinnedMessageStoredProcedure";a.__tables__=["threads"];e.exports=a}),null);
__d("LSOptimisticSetOrUnsetPinnedMessageStoredProcedure",["LSOptimisticSetOrUnsetPinnedMessage","LSSynchronousPromise","Promise","cr:8709"],(function(a,b,c,d,e,f,g){var h;function a(a,e){a=a.storedProcedure(c("LSOptimisticSetOrUnsetPinnedMessage"),e.offlineThreadingId,e.threadKey,e.timestampMs,e.state);return(h||(h=b("Promise"))).resolve(d("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(a))}g["default"]=a}),98);
__d("LSSetOrUnsetPinnedMessage",["LSShimThreadPinMessage.nop","LSShimThreadUnpinMessage.nop"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[];return c.sequence([function(d){return c.i64.eq(a[2],c.i64.cast([0,1]))||c.i64.eq(a[2],c.i64.cast([0,2]))?c.nativeOperation(b("LSShimThreadPinMessage.nop"),a[0],a[1],a[3]):c.nativeOperation(b("LSShimThreadUnpinMessage.nop"),a[0],a[3])},function(a){return c.resolve(d)}])}a.__sproc_name__="LSE2EEMessagingMetadataMailboxSetOrUnsetPinnedMessageStoredProcedure";a.__tables__=[];e.exports=a}),null);
__d("MWXErrorBlock.react",["MWXButton.react","MWXColumn.react","MWXColumnItem.react","MWXImage.react","MWXTextPairing.react","react","react-compiler-runtime","vulture"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(15),e=a.align,f=a.error,g=a.level;a=a.showImage;e=e===void 0?"center":e;a=a===void 0?!0:a;c("vulture")("4fH3ZmKDkUY");var h=f.action,j=f.body,k=f.headline;f=f.image;var l;b[0]!==f||b[1]!==a?(l=a&&f!=null&&i.jsx(c("MWXColumnItem.react"),{children:i.jsx(c("MWXImage.react"),{src:f})}),b[0]=f,b[1]=a,b[2]=l):l=b[2];f=g?g:2;b[3]!==e||b[4]!==j||b[5]!==k||b[6]!==f?(a=i.jsx(c("MWXColumnItem.react"),{paddingTop:16,children:i.jsx(c("MWXTextPairing.react"),{body:j,bodyColor:"secondary",headline:k,level:f,textAlign:e})}),b[3]=e,b[4]=j,b[5]=k,b[6]=f,b[7]=a):a=b[7];b[8]!==h?(g=h!=null&&i.jsx(c("MWXColumnItem.react"),{align:"stretch",paddingVertical:16,children:i.jsx(c("MWXColumnItem.react"),{paddingVertical:16,children:i.jsx(c("MWXButton.react"),{label:h.label,onPress:h.onPress,padding:"wide",size:36})})}),b[8]=h,b[9]=g):g=b[9];b[10]!==e||b[11]!==l||b[12]!==a||b[13]!==g?(j=i.jsxs(c("MWXColumn.react"),{align:e,spacing:12,children:[l,a,g]}),b[10]=e,b[11]=l,b[12]=a,b[13]=g,b[14]=j):j=b[14];return j}g["default"]=a}),98);
__d("ReStoreDBCorruption",[],(function(a,b,c,d,e,f){"use strict";var g="Got unexpected undefined",h="ReStoreDBCorruption";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c,d=g+", table: "+b;c=a.call(this,d)||this;c.message=d;c.name=h;c.tableName=b;return c}return b}(babelHelpers.wrapNativeSuper(Error));f.ERROR_NAME=h;f.ReStoreDBCorruption=a}),66);
__d("getMWErrorDefinition",["fbt","ix","FBLogger","MAWEncryptedBackupsPersistedDB","MAWEncryptionErrorHandler","MAWLSDBEncryption","MAWSetupWorker","MAWUnrecoverableDbErrors","MWDeleteAllDBs","QPLUserFlow","ReStoreDBCorruption","ReStoreDbVersionChange","ReStoreDecryptionFailure","ReStoreEARSetupFailure","cr:10030","gkx","isArmadillo","promiseDone","qpl"],(function(a,b,c,d,e,f,g,h,i){"use strict";function a(a,e,f){f===void 0&&(f=!0);f=f?2:1;var g={action:{label:h._(/*BTDS*/"__JHASH__DOoRvZWfN9Q__JHASH__"),onPress:function(){window.location.reload(!0)}},autoRefresh:"never",body:h._(/*BTDS*/"__JHASH__iQVounN-Hch__JHASH__"),headline:h._(/*BTDS*/"__JHASH__vJj0Hk9D_-R__JHASH__",[h._plural(f)]),image:c("gkx")("23219")?e==="light"?i("210379"):i("210377"):i("433676")},j=a.messageFormat||"";if(!c("gkx")("8483")&&(a instanceof d("ReStoreDecryptionFailure").ReStoreDecryptionFailure||a instanceof d("ReStoreEARSetupFailure").ReStoreEARSetupFailure)){var k={label:g.action.label,onPress:function(){c("promiseDone")(d("MAWSetupWorker").terminateWorker(a.name),function(){return d("MWDeleteAllDBs").deleteAllDBs_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING("error")["finally"](g.action.onPress)})}};c("FBLogger")("messenger_web_product").info("Error %s: showing recovery UI",a.name);return c("isArmadillo")()?babelHelpers["extends"]({},g,{action:k,body:h._(/*BTDS*/"__JHASH__U5NUnUf9KdD__JHASH__",[h._plural(f)]),headline:h._(/*BTDS*/"__JHASH__ee6MA3uWv7t__JHASH__")}):babelHelpers["extends"]({},g,{action:k})}else if(a instanceof d("ReStoreDBCorruption").ReStoreDBCorruption||a.name===d("ReStoreDBCorruption").ERROR_NAME||j.includes(d("ReStoreDBCorruption").ERROR_NAME))return babelHelpers["extends"]({},g,{action:{label:g.action.label,onPress:b("cr:10030")!=null?function(){b("cr:10030").deleteIndexedDB("error")["finally"](g.action.onPress)}:g.action.onPress}});else if(a instanceof d("MAWLSDBEncryption").EBSMDecryptionFailure)return babelHelpers["extends"]({},g,{action:{label:g.action.label,onPress:function(){d("MWDeleteAllDBs").deleteEBSMDB()["finally"](g.action.onPress)}}});else if(a instanceof d("ReStoreDbVersionChange").ReStoreDbVersionChange||a.name===d("ReStoreDbVersionChange").ERROR_NAME||j.includes(d("ReStoreDbVersionChange").ERROR_NAME))return babelHelpers["extends"]({},g,{autoRefresh:"background",body:h._(/*BTDS*/"__JHASH__plrZEdqhq2n__JHASH__",[h._plural(f)]),headline:h._(/*BTDS*/"__JHASH__0a79Vl-Ytg3__JHASH__",[h._plural(f)]),image:c("gkx")("23219")?e==="light"?i("210437"):i("210435"):i("433676")});else if(d("MAWUnrecoverableDbErrors").isUnrecoverableDbError(a)){var l=a;return babelHelpers["extends"]({},g,{action:babelHelpers["extends"]({},g.action,{label:h._(/*BTDS*/"__JHASH__LiLFo9P7Z2y__JHASH__"),onPress:function(){if(l.name==="ear_init_error"){c("promiseDone")(d("MAWEncryptionErrorHandler").handleEARKeychainError().then(function(){return g.action.onPress()}));return}else if(l.name==="ebsm_hydration_error"){var a=l,b=a.fullDeletion?d("MAWEncryptedBackupsPersistedDB").deleteEBIDB():d("MAWEncryptedBackupsPersistedDB").clearEBSMTable(a.tableName);c("promiseDone")(b.then(function(){c("QPLUserFlow").endSuccess(c("qpl")._(521484724,"141"),{instanceKey:a.qplInstanceKey}),g.action.onPress()}));return}c("promiseDone")(d("MAWSetupWorker").terminateWorker(l.name),function(){return d("MWDeleteAllDBs").deleteAllDBs_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING("error").then(function(){return g.action.onPress()})})}}),body:h._(/*BTDS*/"__JHASH__Hg8XBFMDRr1__JHASH__",[h._plural(f)])})}else return g}g["default"]=a}),226);
__d("MWErrorBlock.react",["FBLogger","LSPlatformLsInitLog","MWXErrorBlock.react","ODS","ReStoreDbVersionChange","getMWErrorDefinition","react","react-compiler-runtime","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||(h=d("react"));b=h;var k=b.useEffect;b.useMemo;function l(a){a instanceof d("ReStoreDbVersionChange").ReStoreDbVersionChange?c("FBLogger")("messenger_web_product").info(a.toString()):c("FBLogger")("messenger_web_product").catching(a).mustfix("Uncaught Error while loading chat: %s",a.toString())}function a(a){var b=d("react-compiler-runtime").c(35),e,f,g,h,m;b[0]!==a?(e=a.canTriggerAutoReload,f=a.error,h=a.plural,m=a.source,g=babelHelpers.objectWithoutPropertiesLoose(a,["canTriggerAutoReload","error","plural","source"]),b[0]=a,b[1]=e,b[2]=f,b[3]=g,b[4]=h,b[5]=m):(e=b[1],f=b[2],g=b[3],h=b[4],m=b[5]);a=c("useCurrentDisplayMode")();var n;b[6]!==f||b[7]!==h||b[8]!==a?(n=c("getMWErrorDefinition")(f,a,h),b[6]=f,b[7]=h,b[8]=a,b[9]=n):n=b[9];h=n;var o,p;if(b[10]!==h){a=h;o=a.autoRefresh;p=babelHelpers.objectWithoutPropertiesLoose(a,["autoRefresh"]);b[10]=h;b[11]=o;b[12]=p}else o=b[11],p=b[12];b[13]!==f?(n=function(){d("LSPlatformLsInitLog").addAnnotations({string:{uncaught_error:f.name}}),d("LSPlatformLsInitLog").fail("uncaught_error"),l(f)},a=[f],b[13]=f,b[14]=n,b[15]=a):(n=b[14],a=b[15]);k(n,a);b[16]!==o||b[17]!==e||b[18]!==f.message?(h=function(){e===!0&&o==="background"&&document.visibilityState==="hidden"&&(c("FBLogger")("messenger_web_product").info("Auto refresh triggered for error: %s",f.message),window.location.reload(!0))},b[16]=o,b[17]=e,b[18]=f.message,b[19]=h):h=b[19];b[20]!==o||b[21]!==e||b[22]!==f?(n=[o,e,f],b[20]=o,b[21]=e,b[22]=f,b[23]=n):n=b[23];k(h,n);b[24]!==f.name||b[25]!==m?(a=function(){(i||(i=d("ODS"))).bumpEntityKey(3303,"mw_error_block",m+"."+f.name)},h=[f.name,m],b[24]=f.name,b[25]=m,b[26]=a,b[27]=h):(a=b[26],h=b[27]);k(a,h);b[28]!==f.name||b[29]!==p||b[30]!==m?(n=p.action!=null?babelHelpers["extends"]({},p,{action:babelHelpers["extends"]({},p.action,{onPress:function(){var a;(i||(i=d("ODS"))).bumpEntityKey(3303,"mw_error_block",m+"."+f.name+".action");(a=p.action)==null?void 0:a.onPress()}})}):p,b[28]=f.name,b[29]=p,b[30]=m,b[31]=n):n=b[31];a=n;h=a;b[32]!==g||b[33]!==h?(n=j.jsx(c("MWXErrorBlock.react"),babelHelpers["extends"]({},g,{error:h})),b[32]=g,b[33]=h,b[34]=n):n=b[34];return n}g["default"]=a}),98);
__d("MWGetLSThreadReportingTokenFromThread",["I64","LSMessagingThreadTypeUtil","LSThreadBitOffset"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b=d("LSThreadBitOffset").has(17,a);if(b)return d("LSMessagingThreadTypeUtil").isArmadilloSecure(a.threadType)?window.btoa("message_thread:encrypted"):window.btoa("message_thread:"+(h||(h=d("I64"))).to_string(a.threadKey))}g["default"]=a}),98);
__d("MWInboxErrorState.react",["CometHeroFailTrigger.react","MWErrorBlock.react","MWXColumn.react","MWXColumnItem.react","gkx","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={mdsRoot:{alignItems:"x6s0dn4",backgroundColor:"x2bj2ny",display:"x78zum5",height:"x1dr59a3",justifyContent:"xl56j7k",width:"xh8yej3",$$css:!0}};function a(a){var b=d("react-compiler-runtime").c(16),e=a.canTriggerAutoReload,f=a.error,g=a.plural,h=a.source;a=a.xstyle;var k;b[0]!==a?(k=[c("gkx")("23219")&&j.mdsRoot,a],b[0]=a,b[1]=k):k=b[1];b[2]!==f?(a=i.jsx(c("CometHeroFailTrigger.react"),{description:"Inbox load failed",error:f,fail:!0}),b[2]=f,b[3]=a):a=b[3];var l;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(l={className:"xxc7z9f"},b[4]=l):l=b[4];b[5]!==e||b[6]!==f||b[7]!==g||b[8]!==h?(l=i.jsx("div",babelHelpers["extends"]({},l,{role:"main",children:i.jsx(c("MWErrorBlock.react"),{canTriggerAutoReload:e,error:f,plural:g,source:h})})),b[5]=e,b[6]=f,b[7]=g,b[8]=h,b[9]=l):l=b[9];b[10]!==a||b[11]!==l?(e=i.jsxs(c("MWXColumnItem.react"),{children:[a,l]}),b[10]=a,b[11]=l,b[12]=e):e=b[12];b[13]!==k||b[14]!==e?(f=i.jsx(c("MWXColumn.react"),{paddingHorizontal:16,verticalAlign:"center",xstyle:k,children:e}),b[13]=k,b[14]=e,b[15]=f):f=b[15];return f}g["default"]=a}),98);
__d("MWInboxSettingsPresenceMainPushPageQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4872251902870773"}),null);
__d("MWSeparatorContainer.react",["react","react-compiler-runtime","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(18),c=a.beforeContent,e=a.children,f=a.separator;a=a.xstyle;var g,h,j,k,l;if(b[0]!==c||b[1]!==e||b[2]!==f||b[3]!==a){l=Symbol["for"]("react.early_return_sentinel");bb0:{var m,n=i.Children.toArray(e).filter(Boolean);if(n.length===0){l=null;break bb0}k=(m=c)!=null?m:null;g=d("react-strict-dom").html.div;h=a;b[9]!==f?(m=function(a,b){return i.jsxs(i.Fragment,{children:[b!==0&&f,a]},"item-"+b)},b[9]=f,b[10]=m):m=b[10];j=n.map(m)}b[0]=c;b[1]=e;b[2]=f;b[3]=a;b[4]=g;b[5]=h;b[6]=j;b[7]=k;b[8]=l}else g=b[4],h=b[5],j=b[6],k=b[7],l=b[8];if(l!==Symbol["for"]("react.early_return_sentinel"))return l;b[11]!==g||b[12]!==h||b[13]!==j?(n=i.jsx(g,{style:h,children:j}),b[11]=g,b[12]=h,b[13]=j,b[14]=n):n=b[14];b[15]!==k||b[16]!==n?(m=i.jsxs(i.Fragment,{children:[k,n]}),b[15]=k,b[16]=n,b[17]=m):m=b[17];return m}g["default"]=a}),98);
__d("MessageRequestsLog",["I64","coerceMessagingThreadTypeToLSThreadType","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i=c("requireDeferred"))("MessageRequestsBulkActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"),k=i("MessageRequestsBulkActionEditFalcoEvent").__setRef("MessageRequestsLog"),l=i("MessageRequestsBulkActionTappedFalcoEvent").__setRef("MessageRequestsLog"),m=i("MessageRequestsInfoBannerShownFalcoEvent").__setRef("MessageRequestsLog"),n=i("MessageRequestsThreadActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"),o=i("MessageRequestsThreadActionTappedFalcoEvent").__setRef("MessageRequestsLog"),p=i("MessageRequestsThreadDenialOptionsTappedFalcoEvent").__setRef("MessageRequestsLog"),q=i("MessageRequestsViewThreadlistFalcoEvent").__setRef("MessageRequestsLog");function r(a){switch(a.folderName){case"pending":return-1;case"other":return-2;case"spam":return-3;case"inbox":return 0}}function a(a,b,e){m.onReady(function(f){f.log(function(){return{action:0,extra_data_map:void 0,group_thread_id:e,other_user_id:b,request_id:void 0,thread_folder:r(a),thread_id:e!=null?e:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function b(a,b){p.onReady(function(e){e.log(function(){return{action:0,extra_data_map:void 0,group_thread_id:void 0,other_user_id:b,request_id:void 0,thread_folder:r(a),thread_id:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function e(a,b,e,f){o.onReady(function(g){g.log(function(){return{action:b,extra_data_map:void 0,group_thread_id:f,other_user_id:e,request_id:void 0,thread_folder:r(a),thread_id:f!=null?f:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function f(a,b,e,f){n.onReady(function(g){g.log(function(){return{action:b,extra_data_map:void 0,group_thread_id:f,other_user_id:e,request_id:void 0,thread_folder:r(a),thread_id:f!=null?f:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function s(a,b){q.onReady(function(c){c.log(function(){return{action:0,actioned_thread_count:"0",actioned_thread_ids:void 0,actioned_unread_thread_count:"0",entry_point:a,folder:b,request_id:void 0}})})}function t(a,b,c,d,e){l.onReady(function(f){f.log(function(){return{action:d,actioned_thread_count:b.toString(),actioned_thread_ids:void 0,actioned_unread_thread_count:c.toString(),entry_point:a,folder:e,request_id:void 0}})})}function u(a,b,c,d,e){j.onReady(function(f){f.log(function(){return{action:d,actioned_thread_count:b.toString(),actioned_thread_ids:void 0,actioned_unread_thread_count:c.toString(),entry_point:a,folder:e,request_id:void 0}})})}function v(a,b,c){k.onReady(function(d){d.log(function(){return{action:b,actioned_thread_count:"0",actioned_thread_ids:void 0,actioned_unread_thread_count:"0",entry_point:a,folder:c,request_id:void 0}})})}g.logMessageRequestInfoShown=a;g.logDenialOptionsTapped=b;g.logActionTapped=e;g.logActionConfirmed=f;g.logMessageRequestsView=s;g.logMessageRequestsBulkActionTapped=t;g.logMessageRequestsBulkActionConfirmed=u;g.logMessageRequestsBulkActionEdit=v}),98);
__d("XMessengerHelpCenterContentControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/help/messenger-app/{cms_id}/{?cms_title}/",Object.freeze({region_hint:[],expand_folders:[]}),void 0);b=a;g["default"]=b}),98);
__d("getE2EEPreviewsHelpCenterArticleLink",["XFacebookHelpCenterContentControllerRouteBuilder","XMessengerHelpCenterContentControllerRouteBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";b="820841429347610";d=c("gkx")("23433");e=d?c("XMessengerHelpCenterContentControllerRouteBuilder"):c("XFacebookHelpCenterContentControllerRouteBuilder");var h=e.buildUri({cms_id:b,ref:"nux"}).toString();function a(){return h}g["default"]=a}),98);
__d("useMAWToggleSecurePinMessage",["I64","LSFactory","LSOptimisticSetOrUnsetPinnedMessageStoredProcedure","LSPinnedMessageState","MWPBumpEntityKey","MessengerWebUXLogger","ReQL","ServerTime","asyncToGeneratorRuntime","react","useAsyncReStore","useMWPIsMessagePinned"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(h||d("react")).useCallback;function a(a,e){var g=c("useAsyncReStore")(),h=c("useMWPIsMessagePinned")(a),k=a.offlineThreadingId,l=a.threadKey,m=d("ServerTime").getMillis(),n=c("MessengerWebUXLogger").useInteractionLogger();a=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){var a=(yield g),b=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.tables.threads,["threadType"]).getKeyRange(l)));yield a.runInTransaction(function(a){var f=h?c("LSPinnedMessageState").NOT_PINNED:c("LSPinnedMessageState").PINNED,g=h?"unpin_message":"pin_message",j=h?"unpin":"pin";e==="message_dot_menu"?n==null?void 0:n({eventName:g,threadKey:l,threadType:b==null?void 0:b.threadType}):j==="unpin"&&e==="pinned_message_list_dot_menu"&&d("MWPBumpEntityKey").bumpEntityKeyWithAppId("mw_pinned_messages","unpin");return c("LSOptimisticSetOrUnsetPinnedMessageStoredProcedure")(c("LSFactory")(a),{offlineThreadingId:k,state:(i||(i=d("I64"))).of_int32(f),threadKey:l,timestampMs:i.of_int32(m)})},"readwrite",void 0,void 0,f.id+":51")});return function(){return a.apply(this,arguments)}}();return j(a,[g,h,l,m,k,e,n])}g["default"]=a}),98);
__d("useXMAPreviewsDisabledSetting",["MWPActor.react","MessengerWebPrivacySettings","ReQL","ReQLSuspense","react-compiler-runtime","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){var a=d("react-compiler-runtime").c(6),b=(h||(h=c("useReStore")))(),e=d("MWPActor.react").useActor(),g;a[0]!==e||a[1]!==b.tables.messaging_privacy_settings?(g=function(){return d("ReQL").fromTableAscending(b.tables.messaging_privacy_settings).getKeyRange(e)},a[0]=e,a[1]=b.tables.messaging_privacy_settings,a[2]=g):g=a[2];var i;a[3]!==e||a[4]!==b?(i=[b,e],a[3]=e,a[4]=b,a[5]=i):i=a[5];a=d("ReQLSuspense").useFirst(g,i,f.id+":26");return a==null?c("MessengerWebPrivacySettings").e2ee_xma_previews_disabled:(g=a==null?void 0:a.e2eeXmaPreviewsDisabled)!=null?g:!1}g["default"]=a}),98);