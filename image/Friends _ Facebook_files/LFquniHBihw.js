;/*FB_PKG_DELIM*/

__d("CometMarketplaceBanContentContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8212552095515972"}),null);
__d("LSInsertAttachment",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.sequence([function(c){return b.forEach(b.filter(b.db.table(16).fetch([[[a[32],a[37],a[39]]]]),function(c){return b.i64.eq(c.threadKey,a[32])&&b.i64.eq(b.i64.cast([0,0]),a[33])&&c.messageId===a[37]&&c.attachmentFbid===a[39]&&b.i64.lt(c.authorityLevel,a[127])}),function(a){return a["delete"]()})},function(c){return b.db.table(16).add({threadKey:a[32],messageId:a[37],attachmentFbid:a[39],hasMedia:a[3],isSharable:a[4],attachmentType:a[34],timestampMs:a[36],hasXma:a[40],authorityLevel:a[127],filename:a[1],filesize:a[2],playableUrl:a[5],playableUrlFallback:a[6],playableUrlExpirationTimestampMs:a[7],playableUrlMimeType:a[8],dashManifest:a[9],previewUrl:a[10],previewUrlFallback:a[11],previewUrlExpirationTimestampMs:a[12],previewUrlMimeType:a[13],miniPreview:a[15],previewWidth:a[16],previewHeight:a[17],imageUrlMimeType:a[18],attributionAppId:a[19],attributionAppName:a[20],attributionAppIcon:a[21],attributionAppIconFallback:a[22],attributionAppIconUrlExpirationTimestampMs:a[23],localPlayableUrl:a[24],playableDurationMs:a[25],attachmentIndex:a[26],decryptionKey:a[27],accessibilitySummaryText:a[28],isPreviewImage:a[29],originalFileHash:a[30],shouldRespectServerPreviewSize:a[31],offlineAttachmentId:a[38],xmaLayoutType:a[41],xmasTemplateType:a[42],collapsibleId:a[43],defaultCtaId:a[44],defaultCtaTitle:a[45],defaultCtaType:a[46],attachmentCta1Id:a[48],cta1Title:a[49],cta1IconType:a[50],cta1Type:a[51],attachmentCta2Id:a[53],cta2Title:a[54],cta2IconType:a[55],cta2Type:a[56],attachmentCta3Id:a[58],cta3Title:a[59],cta3IconType:a[60],cta3Type:a[61],imageUrl:a[62],imageUrlFallback:a[63],imageUrlExpirationTimestampMs:a[64],actionUrl:a[65],titleText:a[66],subtitleText:a[67],maxTitleNumOfLines:a[68],maxSubtitleNumOfLines:a[69],descriptionText:a[70],sourceText:a[71],faviconUrl:a[72],faviconUrlFallback:a[73],faviconUrlExpirationTimestampMs:a[74],originalPageSenderId:a[75],listItemsId:a[77],listItemsDescriptionText:a[78],listItemsSecondaryDescriptionText:a[79],listItemId1:a[80],listItemTitleText1:a[81],listItemContactUrlList1:a[82],listItemProgressBarFilledPercentage1:a[83],listItemContactUrlExpirationTimestampList1:a[84],listItemContactUrlFallbackList1:a[85],listItemTotalCount1:a[86],listItemId2:a[87],listItemTitleText2:a[88],listItemContactUrlList2:a[89],listItemProgressBarFilledPercentage2:a[90],listItemContactUrlExpirationTimestampList2:a[91],listItemContactUrlFallbackList2:a[92],listItemTotalCount2:a[93],listItemId3:a[94],listItemTitleText3:a[95],listItemContactUrlList3:a[96],listItemProgressBarFilledPercentage3:a[97],listItemContactUrlExpirationTimestampList3:a[98],listItemContactUrlFallbackList3:a[99],listItemTotalCount3:a[100],isBorderless:a[101],headerImageUrlMimeType:a[102],headerTitle:a[103],headerSubtitleText:a[104],headerImageUrl:a[105],headerImageUrlFallback:a[106],headerImageUrlExpirationTimestampMs:a[107],previewImageDecorationType:a[108],shouldHighlightHeaderTitleInTitle:a[109],targetId:a[110],ephemeralMediaState:a[114],ephemeralMediaViewMode:a[115],viewerSeenTimestampMs:a[116],bodyText:a[117],gatingType:a[118],gatingTitle:a[119],targetExpiryTimestampMs:a[120],countdownTimestampMs:a[121],shouldBlurSubattachments:a[122],verifiedType:a[123],igStoryReplyType:a[124],isAttachmentConsumed:a[125],stickerType:a[126]})}])},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxInsertAttachmentStoredProcedure";a.__tables__=["attachments"];e.exports=a}),null);