;/*FB_PKG_DELIM*/

__d("LSIssueExpireNewFriendBumpTask",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(b){return d[0]=new c.Map(),d[0].set("thread_key",a[0]),d[1]=c.toJSON(d[0]),d[3]=["expire_new_friend_bump",c.i64.to_string(a[0]),c.i64.to_string(a[1])].join(""),c.count(c.db.table(2).fetch([[[d[3]]],"queueNameTaskId"])).then(function(a){return d[2]=a})},function(e){return c.i64.eq(d[2],c.i64.cast([0,0]))?c.storedProcedure(b("LSIssueNewTask"),d[3],c.i64.cast([0,416]),d[1],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,100]),void 0,void 0,a[1],c.i64.cast([0,0])):c.resolve()}])},function(a){return c.resolve(e)}])}a.__sproc_name__="LSMailboxIssueExpireNewFriendBumpTaskStoredProcedure";a.__tables__=["pending_tasks"];e.exports=a}),null);