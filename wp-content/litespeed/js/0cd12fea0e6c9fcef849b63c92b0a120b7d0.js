/*! This file is auto-generated */
window.wpCookies={each:function(e,t,n){var i,s;if(!e)return 0;if(n=n||e,void 0!==e.length){for(i=0,s=e.length;i<s;i++)if(!1===t.call(n,e[i],i,e))return 0}else for(i in e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))return 0;return 1},getHash:function(e){var t,e=this.get(e);return e&&this.each(e.split("&"),function(e){e=e.split("="),(t=t||{})[e[0]]=e[1]}),t},setHash:function(e,t,n,i,s,r){var o="";this.each(t,function(e,t){o+=(o?"&":"")+t+"="+e}),this.set(e,o,n,i,s,r)},get:function(e){var t,n,i=document.cookie,e=e+"=";if(i){if(-1===(n=i.indexOf("; "+e))){if(0!==(n=i.indexOf(e)))return null}else n+=2;return-1===(t=i.indexOf(";",n))&&(t=i.length),decodeURIComponent(i.substring(n+e.length,t))}},set:function(e,t,n,i,s,r){var o=new Date;n="object"==typeof n&&n.toGMTString?n.toGMTString():parseInt(n,10)?(o.setTime(o.getTime()+1e3*parseInt(n,10)),o.toGMTString()):"",document.cookie=e+"="+encodeURIComponent(t)+(n?"; expires="+n:"")+(i?"; path="+i:"")+(s?"; domain="+s:"")+(r?"; secure":"")},remove:function(e,t,n,i){this.set(e,"",-1e3,t,n,i)}},window.getUserSetting=function(e,t){var n=getAllUserSettings();return n.hasOwnProperty(e)?n[e]:void 0!==t?t:""},window.setUserSetting=function(e,t,n){var i,s,r,o;return"object"==typeof userSettings&&(i=userSettings.uid,s=wpCookies.getHash("wp-settings-"+i),r=userSettings.url,o=!!userSettings.secure,e=e.toString().replace(/[^A-Za-z0-9_-]/g,""),t="number"==typeof t?parseInt(t,10):t.toString().replace(/[^A-Za-z0-9_-]/g,""),s=s||{},n?delete s[e]:s[e]=t,wpCookies.setHash("wp-settings-"+i,s,31536e3,r,"",o),wpCookies.set("wp-settings-time-"+i,userSettings.time,31536e3,r,"",o),e)},window.deleteUserSetting=function(e){return setUserSetting(e,"",1)},window.getAllUserSettings=function(){return"object"==typeof userSettings&&wpCookies.getHash("wp-settings-"+userSettings.uid)||{}}
;