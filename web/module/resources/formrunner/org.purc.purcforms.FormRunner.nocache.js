function org_purc_purcforms_FormRunner(){var l='',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',n='"><\/script>',p='#',r='/',ub='2F2BBAE6ABEB508B26EA4F17FC10372C.cache.html',sb='32CF44C1E12D560ED74DDC8D045BE657.cache.html',tb='78FC28E2B46D482598D4B96778B5286C.cache.html',bc='<script defer="defer">org_purc_purcforms_FormRunner.onInjectionDone(\'org.purc.purcforms.FormRunner\')<\/script>',fc='<script id="',A='=',q='?',vb='BF8A991AEB7D923958B8164BC4C3FA3D.cache.html',C='Bad handler "',wb='DE9E6F6386147F7F03D19566DE2D8F69.cache.html',ac='DOMContentLoaded',Eb='DatePickerStyle.css',Fb='FormRunner.css',o='SCRIPT',ec='__gwt_marker_org.purc.purcforms.FormRunner',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',z='content',dc='end',lb='gecko',mb='gecko1_8',yb='gwt.hybrid',xb='gwt/standard/standard.css',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',Db='head',rb='hosted.html?org_purc_purcforms_FormRunner',Cb='href',kb='ie6',ab='iframe',t='img',bb="javascript:''",zb='link',pb='loadExternalRefs',v='meta',eb='moduleRequested',cc='moduleStartup',jb='msie',w='name',gb='opera',m='org.purc.purcforms.FormRunner',db='position:absolute;width:0;height:0;border:none',Ab='rel',ib='safari',qb='selectingPermutation',x='startup',Bb='stylesheet',ob='unknown',fb='user.agent',hb='webkit';var hc=window,k=document,gc=hc.__gwtStatsEvent?function(a){return hc.__gwtStatsEvent(a)}:null,Bc,rc,mc,lc=l,uc={},Ec=[],Ac=[],kc=[],xc,zc;gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!hc.__gwt_stylesLoaded){hc.__gwt_stylesLoaded={}}if(!hc.__gwt_scriptsLoaded){hc.__gwt_scriptsLoaded={}}function qc(){try{return hc.external&&(hc.external.gwtOnLoad&&hc.location.search.indexOf(yb)==-1)}catch(a){return false}}
function tc(){if(Bc&&rc){var c=k.getElementById(m);var b=c.contentWindow;b.__gwt_initHandlers=org_purc_purcforms_FormRunner.__gwt_initHandlers;if(qc()){b.__gwt_getProperty=function(a){return nc(a)}}org_purc_purcforms_FormRunner=null;b.gwtOnLoad(xc,m,lc);gc&&gc({moduleName:m,subSystem:x,evtGroup:cc,millis:(new Date()).getTime(),type:dc})}}
function oc(){var j,h=ec,i;k.write(fc+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){lc=f(j.src)}if(lc==l){var e=k.getElementsByTagName(s);if(e.length>0){lc=e[e.length-1].href}else{lc=f(k.location.href)}}else if(lc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=lc+u;lc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function yc(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}uc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{zc=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{xc=eval(b)}catch(a){alert(C+b+F)}}}}}}
function Dc(d,e){var a=kc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function nc(d){var e=Ac[d](),b=Ec[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(zc){zc(d,a,e)}throw null}
var pc;function sc(){if(!pc){pc=true;var a=k.createElement(ab);a.src=bb;a.id=m;a.style.cssText=db;a.tabIndex=-1;k.body.appendChild(a);gc&&gc({moduleName:m,subSystem:x,evtGroup:cc,millis:(new Date()).getTime(),type:eb});a.contentWindow.location.replace(lc+Cc)}}
Ac[fb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(gb)!=-1){return gb}else if(d.indexOf(hb)!=-1){return ib}else if(d.indexOf(jb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return kb}}}else if(d.indexOf(lb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return mb}return lb}return ob};Ec[fb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};org_purc_purcforms_FormRunner.onScriptLoad=function(){if(pc){rc=true;tc()}};org_purc_purcforms_FormRunner.onInjectionDone=function(){Bc=true;gc&&gc({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:dc});tc()};oc();yc();gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:qb});var Cc;if(qc()){Cc=rb}else{try{Dc([ib],sb);Dc([lb],tb);Dc([gb],ub);Dc([mb],vb);Dc([kb],wb);Cc=kc[nc(fb)]}catch(a){return}}var wc;function vc(){if(!mc){mc=true;if(!__gwt_stylesLoaded[xb]){var a=k.createElement(zb);__gwt_stylesLoaded[xb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,lc+xb);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[Eb]){var a=k.createElement(zb);__gwt_stylesLoaded[Eb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,lc+Eb);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[Fb]){var a=k.createElement(zb);__gwt_stylesLoaded[Fb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,lc+Fb);k.getElementsByTagName(Db)[0].appendChild(a)}tc();if(k.removeEventListener){k.removeEventListener(ac,vc,false)}if(wc){clearInterval(wc)}}}
if(k.addEventListener){k.addEventListener(ac,function(){sc();vc()},false)}var wc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){sc();vc()}},50);gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:dc});gc&&gc({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:nb});k.write(bc)}
org_purc_purcforms_FormRunner.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i()}finally{g&&g(a)}};d.onbeforeunload=function(a){var c,b;try{c=e()}finally{b=f&&f(a)}if(c!=null){return c}if(b!=null){return b}};d.onunload=function(a){try{j()}finally{h&&h(a);d.onresize=null;d.onbeforeunload=null;d.onunload=null}}};org_purc_purcforms_FormRunner();