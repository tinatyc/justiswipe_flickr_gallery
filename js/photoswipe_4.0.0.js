/*! PhotoSwipe - v4.0.0 - 2014-12-14
* http://photoswipe.com
* Copyright (c) 2014 Dmitry Semenov; */
(function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.PhotoSwipe=t()})(this,function(){"use strict";var e=function(e,t,n,i){var o={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;t.length>a;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){o.bind(e,t,n,!0)},removeClass:function(e,t){var n=RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){o.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(o.features)return o.features;var e=o.createEl(),t=e.style,n="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var a=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var r=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);r&&r.length>0&&(r=parseInt(r[1],10),r>=1&&8>r&&(i.isOldIOSPhone=!0))}var l=a.match(/Android\s([0-9\.]*)/),s=l?l[1]:0;s=parseFloat(s),s>=1&&(4.4>s&&(i.isOldAndroid=!0),i.androidVersion=s),i.isMobileOpera=/opera mini|opera mobi/i.test(a)}for(var u,c,d=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],p=0;4>p;p++){n=m[p];for(var f=0;3>f;f++)u=d[f],c=n+(n?u.charAt(0).toUpperCase()+u.slice(1):u),!i[u]&&c in t&&(i[u]=c);n&&!i.raf&&(n=n.toLowerCase(),i.raf=window[n+"RequestAnimationFrame"],i.raf&&(i.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!i.raf){var h=0;i.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-h)),i=window.setTimeout(function(){e(t+n)},n);return h=t+n,i},i.caf=function(e){clearTimeout(e)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=i,i}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;t.length>l;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var a=this,r=25,l=3,s={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,scaleMode:"fit",modal:!0,alwaysFadeIn:!1};o.extend(s,i);var u,c,d,m,p,f,h,y,v,x,g,w,b,I,D,C,T,M,Z,S,A,k,O,E,R,F,P,L,z,N,_,U,H,Y,B,V,W,G,X,K,q,$,j,J,Q,et,tt,nt,it,ot,at,rt,lt,st,ut,ct,dt,mt,pt,ft,ht,yt,vt,xt,gt=function(){return{x:0,y:0}},wt=0,bt=gt(),It=gt(),Dt=gt(),Ct=gt(),Tt={},Mt=0,Zt=0,St=gt(),At=0,kt=!0,Ot=[],Et={},Rt=function(e,t){o.extend(a,t.publicMethods),Ot.push(e)},Ft=function(e){var t=vt();return e>t-1?e-t:0>e?t+e:e},Pt={},Lt=function(e,t){return Pt[e]||(Pt[e]=[]),Pt[e].push(t)},zt=function(e){var t=Pt[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;t.length>i;i++)t[i].apply(a,n)}},Nt=function(){return(new Date).getTime()},_t=function(e){ct=e,a.bg.style.opacity=e*s.bgOpacity},Ut=function(e,t,n,i){e[k]=w+t+"px, "+n+"px"+b+" scale("+i+")"},Ht=function(){ot&&Ut(ot,Dt.x,Dt.y,x)},Yt=function(e){Ut(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel)},Bt=function(e,t){t[k]=w+e+"px, 0px"+b},Vt=function(e,t){if(!s.loop&&t){var n=m+(St.x*Mt-e)/St.x,i=Math.round(e-In.x);(0>n&&i>0||n>=vt()-1&&0>i)&&(e=In.x+i*s.mainScrollEndFriction)}In.x=e,Bt(e,p)},Wt=function(e){return 1/nt*e*g},Gt=function(e,t){var n=Dn[e]-lt[e];return It[e]+bt[e]+n-n*(t/g)},Xt=function(e,t){return e.x===t.x&&e.y===t.y},Kt=function(e,t){return r>Math.abs(e.x-t.x)&&r>Math.abs(e.y-t.y)},qt=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},$t=function(){o.bind(document,"keydown",a),s.mouseUsed||o.bind(document,"mousemove",Qt),o.bind(window,"resize scroll",a),zt("bindEvents")},jt=function(){o.unbind(window,"resize",a),o.unbind(window,"scroll",v.scroll),o.unbind(document,"keydown",a),o.unbind(document,"mousemove",Qt),X&&o.unbind(window,h,a),zt("unbindEvents")},Jt=null,Qt=function(){Jt&&(o.unbind(document,"mousemove",Qt),o.addClass(e,"pswp--has_mouse"),s.mouseUsed=!0,zt("mouseUsed")),Jt=setTimeout(function(){Jt=null},100)},en=function(e,t){var n=Jn(a.currItem,Tt,e);return t&&(it=n),n},tn=function(e,t,n,i){return i===a.currItem.initialZoomLevel?(n[e]=a.currItem.initialPosition[e],!0):(n[e]=Gt(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]?(n[e]=t.max[e],!0):!1)},nn={},on=0,an=function(e){nn[e]&&(nn[e].raf&&F(nn[e].raf),on--,delete nn[e])},rn=function(e){nn[e]&&an(e),nn[e]||(on++,nn[e]={})},ln=function(){for(var e in nn)nn.hasOwnProperty(e)&&an(e)},sn=function(e,t,n,i,o,a,r){var l,s=Nt();rn(e);var u=function(){if(nn[e]){if(l=Nt()-s,l>=i)return an(e),a(n),r&&r(),void 0;a((n-t)*o(l/i)+t),nn[e].raf=R(u)}};u()},un=function(t,n,i,a){U&&clearTimeout(U),ht=!0,ft=!0;var r;t.initialLayout?(r=t.initialLayout,t.initialLayout=null):r=s.getThumbBoundsFn&&s.getThumbBoundsFn(m);var l=function(){an("initialZoom"),i||(_t(1),n&&(n.style.display="block"),o.addClass(e,"pswp--animated-in"),zt("initialZoom"+(i?"OutEnd":"InEnd"))),a&&a(),ht=!1},u=i?s.hideAnimationDuration:s.showAnimationDuration;return r&&void 0!==r.x&&u?(t.miniImg&&(t.miniImg.style.webkitBackfaceVisibility="hidden"),i||(x=r.w/t.w,Dt.x=r.x,Dt.y=r.y-L,s.showHideOpacity&&(e.style.opacity=.001,e.style.webkitBackfaceVisibility="hidden"),Ht()),rn("initialZoom"),i&&!d&&o.removeClass(e,"pswp--animated-in"),U=setTimeout(function(){if(zt("initialZoom"+(i?"Out":"In")),i){var n=r.w/t.w,a={x:Dt.x,y:Dt.y},c=x,m=L,p=ct,f=function(t){D&&(m=o.getScrollY(),D=!1),1===t?(x=n,Dt.x=r.x,Dt.y=r.y-m,d&&l()):(x=(n-c)*t+c,Dt.x=(r.x-a.x)*t+a.x,Dt.y=(r.y-m-a.y)*t+a.y),Ht(),s.showHideOpacity?e.style.opacity=1-t:_t(p-t*p)};d?sn("initialZoom",0,1,u,o.easing.cubic.out,f):(f(1),U=setTimeout(l,u+20))}else x=t.initialZoomLevel,qt(Dt,t.initialPosition),Ht(),_t(1),s.showHideOpacity?e.style.opacity=1:_t(1),U=setTimeout(l,u+20)},i?25:90),!0):(zt("initialZoom"+(i?"Out":"In")),x=t.initialZoomLevel,qt(Dt,t.initialPosition),Ht(),e.style.opacity=i?0:1,_t(1),l(),!1)},cn={shout:zt,listen:Lt,viewportSize:Tt,options:s,isMainScrollAnimating:function(){return at},getZoomLevel:function(){return x},getCurrentIndex:function(){return m},isDragging:function(){return X},isZooming:function(){return et},applyZoomPan:function(e,t,n){Dt.x=t,Dt.y=n,x=e,Ht()},init:function(){if(!u&&!c){var n;if(a.framework=o,a.template=e,a.bg=e.children[0],P=e.className,u=!0,_=o.detectFeatures(),R=_.raf,F=_.caf,k=_.transform,z=_.oldIE,a.scrollWrap=e.children[1],a.container=a.scrollWrap.children[0],p=a.container.style,k){var i=_.perspective&&!E;w="translate"+(i?"3d(":"("),b=_.perspective?", 0px)":")"}else k="left",o.addClass(e,"pswp--ie"),Bt=function(e,t){t.left=e+"px"},Yt=function(e){var t=e.container.style,n=e.fitRatio*e.w,i=e.fitRatio*e.h;t.width=n+"px",t.height=i+"px",t.left=e.initialPosition.x+"px",t.top=e.initialPosition.y+"px"},Ht=function(){if(ot){var e=ot,t=a.currItem,n=t.fitRatio*t.w,i=t.fitRatio*t.h;e.width=n+"px",e.height=i+"px",e.left=Dt.x+"px",e.top=Dt.y+"px"}};var r=function(e,t,n,i,o){M=e+t,Z=e+n,S=e+i,A=o?e+o:""};for(a.itemHolders=C=[{el:a.container.children[0],wrap:0,index:-1},{el:a.container.children[1],wrap:0,index:-1},{el:a.container.children[2],wrap:0,index:-1}],C[0].el.style.display=C[2].el.style.display="none",O=_.pointerEvent,O&&_.touch&&(_.touch=!1),O?navigator.pointerEnabled?r("pointer","down","move","up","cancel"):r("MSPointer","Down","Move","Up","Cancel"):_.touch?(r("touch","start","move","end","cancel"),E=!0):r("mouse","down","move","up"),h=Z+" "+S+" "+A,y=M,O&&!E&&(E=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),a.likelyTouchDevice=E,(!_.animationName||!_.transform||_.isOldIOSPhone||_.isOldAndroid||_.isMobileOpera)&&(s.showAnimationDuration=s.hideAnimationDuration=0),n=0;Ot.length>n;n++)a["init"+Ot[n]]();if(t){var g=a.ui=new t(a,o);g.init()}E||(s.allowPanToNext=!1);var T;v={resize:a.updateSize,scroll:function(){D=!0,s.closeOnScroll&&u&&(!a.likelyTouchDevice||s.mouseUsed)&&Math.abs(o.getScrollY()-L)>2&&(d=!0,a.close())},keydown:function(e){T="",s.escKey&&27===e.keyCode?T="close":s.arrowKeys&&(37===e.keyCode?T="prev":39===e.keyCode&&(T="next")),T&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,a[T]()))}},v[M]=Un,v[Z]=Hn,v[S]=Bn,A&&(v[A]=v[S]),_.touch&&(y+=" mousedown",h+=" mousemove mouseup",v.mousedown=v[M],v.mousemove=v[Z],v.mouseup=v[S]),zt("firstUpdate"),m=m||s.index||0,(isNaN(m)||0>m||m>=vt())&&(m=0),a.currItem=yt(m),(_.isOldIOSPhone||_.isOldAndroid)&&(kt=!1),s.modal&&(e.setAttribute("aria-hidden","false"),kt?e.style.position="fixed":(e.style.position="absolute",e.style.top=o.getScrollY()+"px")),void 0===N&&(zt("initialLayout"),N=L=o.getScrollY());var U="pswp--open ";for(s.mainClass&&(U+=s.mainClass+" "),s.showHideOpacity&&(U+="pswp--animate_opacity "),U+=E?"pswp--touch":"pswp--notouch",U+=_.animationName?" pswp--css_animation":"",U+=_.svg?" pswp--svg":"",o.addClass(e,U),a.updateSize(),f=-1,At=null,n=0;l>n;n++)Bt((n+f)*St.x,C[n].el.style);z||o.bind(a.scrollWrap,y,a),Lt("initialZoomInEnd",function(){a.setContent(C[0],m-1),a.setContent(C[2],m+1),C[0].el.style.display=C[2].el.style.display="block",s.focus&&e.focus(),$t()}),a.setContent(C[1],m),a.updateCurrItem(),zt("afterInit"),kt||(I=setInterval(function(){on||X||et||x!==a.currItem.initialZoomLevel||a.updateSize()},1e3)),o.addClass(e,"pswp--visible")}},close:function(){u&&(u=!1,c=!0,zt("close"),jt(),un(a.currItem,null,!0,a.destroy))},destroy:function(){zt("destroy"),U&&clearTimeout(U),s.modal&&(e.setAttribute("aria-hidden","true"),e.className=P),I&&clearInterval(I),o.unbind(a.scrollWrap,y,a),o.unbind(window,"scroll",a),Mn(),ln(),Pt=null},panTo:function(e,t,n){n||(e>it.min.x?e=it.min.x:it.max.x>e&&(e=it.max.x),t>it.min.y?t=it.min.y:it.max.y>t&&(t=it.max.y)),Dt.x=e,Dt.y=t,Ht()},handleEvent:function(e){e=e||window.event,v[e.type]&&v[e.type](e)},goTo:function(e){e=Ft(e);var t=e-m;At=t,m=e,a.currItem=yt(m),Mt-=t,Vt(St.x*Mt),ln(),at=!1,a.updateCurrItem()},next:function(){a.goTo(m+1)},prev:function(){a.goTo(m-1)},updateCurrZoomItem:function(e){if(e&&zt("beforeChange",0),C[1].el.children.length){var t=C[1].el.children[0];ot=o.hasClass(t,"pswp__zoom-wrap")?t.style:null}else ot=null;it=a.currItem.bounds,g=x=a.currItem.initialZoomLevel,Dt.x=it.center.x,Dt.y=it.center.y,e&&zt("afterChange")},invalidateCurrItems:function(){for(var e=0;l>e;e++)C[e].item&&(C[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==At){var t,n=Math.abs(At);if(!(e&&2>n)){a.currItem=yt(m),zt("beforeChange",At),n>=l&&(f+=At+(At>0?-l:l),n=l);for(var i=0;n>i;i++)At>0?(t=C.shift(),C[l-1]=t,f++,Bt((f+2)*St.x,t.el.style),a.setContent(t,m-n+i+1+1)):(t=C.pop(),C.unshift(t),f--,Bt(f*St.x,t.el.style),a.setContent(t,m+n-i-1-1));if(ot&&1===Math.abs(At)){var o=yt(T);o.initialZoomLevel!==x&&(Jn(o,Tt),Yt(o))}At=0,a.updateCurrZoomItem(),T=m,zt("afterChange")}}},updateSize:function(t){if(!kt){var n=o.getScrollY();if(N!==n&&(e.style.top=n+"px",N=n),!t&&Et.x===window.innerWidth&&Et.y===window.innerHeight)return;Et.x=window.innerWidth,Et.y=window.innerHeight,e.style.height=Et.y+"px"}if(Tt.x=a.scrollWrap.clientWidth,Tt.y=a.scrollWrap.clientHeight,lt={x:0,y:N},St.x=Tt.x+Math.round(Tt.x*s.spacing),St.y=Tt.y,Vt(St.x*Mt),zt("beforeResize"),void 0!==f)for(var i,r,u=0;l>u;u++)i=C[u],Bt((u+f)*St.x,i.el.style),r=yt(i.index),r.needsUpdate&&(a.cleanSlide(r),a.setContent(i,i.index),1===u&&a.updateCurrZoomItem(!0),r.needsUpdate=!1),r&&r.container&&(Jn(r,Tt),Yt(r));g=x=a.currItem.initialZoomLevel,it=a.currItem.bounds,it&&(Dt.x=it.center.x,Dt.y=it.center.y,Ht()),zt("resize")},zoomTo:function(e,t,n,i,a){t&&(g=x,Dn.x=Math.abs(t.x)-Dt.x,Dn.y=Math.abs(t.y)-Dt.y,qt(It,Dt));var r=en(e,!1),l={};tn("x",r,l,e),tn("y",r,l,e);var s=x,u={x:Dt.x,y:Dt.y},c=function(t){1===t?(x=e,Dt.x=l.x,Dt.y=l.y):(x=(e-s)*t+s,Dt.x=(l.x-u.x)*t+u.x,Dt.y=(l.y-u.y)*t+u.y),a&&a(t),Ht()};n?sn("customZoomTo",0,1,n,i||o.easing.sine.inOut,c):c(1)}},dn=30,mn=10,pn={},fn={},hn={},yn={},vn={},xn=[],gn={},wn=[],bn={},In=gt(),Dn=gt(),Cn=gt(),Tn=function(e,t){return bn.x=Math.abs(e.x-t.x),bn.y=Math.abs(e.y-t.y),Math.sqrt(bn.x*bn.x+bn.y*bn.y)},Mn=function(){j&&(F(j),j=null)},Zn=function(){X&&(j=R(Zn),Yn())},Sn=function(){return!("fit"===s.scaleMode&&x===a.currItem.initialZoomLevel)},An={},kn=function(e,t){return An.prevent="A"!==e.target.tagName,zt("preventDragEvent",e,t,An),An.prevent},On=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},En=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Rn=function(e,t,n){if(e-Y>50){var i=wn.length>2?wn.shift():{};i.x=t,i.y=n,wn.push(i),Y=e}},Fn=function(){var e=Dt.y-a.currItem.initialPosition.y;return 1-Math.abs(e/(Tt.y/2))},Pn={},Ln={},zn=[],Nn=function(e){for(;zn.length>0;)zn.pop();return O?(mt=0,xn.forEach(function(e){0===mt?zn[0]=e:1===mt&&(zn[1]=e),mt++})):e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(zn[0]=On(e.touches[0],Pn),e.touches.length>1&&(zn[1]=On(e.touches[1],Ln))):(Pn.x=e.pageX,Pn.y=e.pageY,Pn.id="",zn[0]=Pn),zn},_n=function(e,t){var n,i,o=0,r=Dt[e]+t[e],l=t[e]>0,u=In.x+t.x,c=In.x-gn.x;n=r>it.min[e]||it.max[e]>r?s.panEndFriction:1,r=Dt[e]+t[e]*n;var d,m;return!s.allowPanToNext&&x!==a.currItem.initialZoomLevel||(ot?"h"!==rt||"x"!==e||q||(l?(r>it.min[e]&&(n=s.panEndFriction,o=it.min[e]-r,i=it.min[e]-It[e]),(0>=i||0>c)&&vt()>1?(m=u,0>c&&u>gn.x&&(m=gn.x)):it.min.x!==it.max.x&&(d=r)):(it.max[e]>r&&(n=s.panEndFriction,o=r-it.max[e],i=It[e]-it.max[e]),(0>=i||c>0)&&vt()>1?(m=u,c>0&&gn.x>u&&(m=gn.x)):it.min.x!==it.max.x&&(d=r))):m=u,"x"!==e)?(at||J||x>a.currItem.fitRatio&&(Dt[e]+=t[e]*n),void 0):(void 0!==m&&(Vt(m,!0),J=m===gn.x?!1:!0),it.min.x!==it.max.x&&(void 0!==d?Dt.x=d:J||(Dt.x+=t.x*n)),void 0!==m)},Un=function(e){if(ht)return e.preventDefault(),void 0;if(!G||"mousedown"!==e.type){if(kn(e,!0)&&e.preventDefault(),zt("pointerDown"),O){var t=o.arraySearch(xn,e.pointerId,"id");0>t&&(t=xn.length),xn[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=Nn(e),i=n.length;Q=null,ln(),X&&1!==i||(X=st=!0,o.bind(window,h,a),V=dt=ut=W=J=$=K=q=!1,rt=null,zt("firstTouchStart",n),qt(It,Dt),bt.x=bt.y=0,qt(yn,n[0]),qt(vn,yn),gn.x=St.x*Mt,wn=[{x:yn.x,y:yn.y}],Y=H=Nt(),en(x,!0),Mn(),Zn()),!et&&i>1&&!at&&!J&&(g=x,q=!1,et=K=!0,bt.y=bt.x=0,qt(It,Dt),qt(pn,n[0]),qt(fn,n[1]),En(pn,fn,Cn),Dn.x=Math.abs(Cn.x)-Dt.x,Dn.y=Math.abs(Cn.y)-Dt.y,tt=nt=Tn(pn,fn))}},Hn=function(e){if(e.preventDefault(),O){var t=o.arraySearch(xn,e.pointerId,"id");if(t>-1){var n=xn[t];n.x=e.pageX,n.y=e.pageY}}if(X){var i=Nn(e);if(rt||$||et)Q=i;else{var a=Math.abs(i[0].x-yn.x)-Math.abs(i[0].y-yn.y);Math.abs(a)>=mn&&(rt=a>0?"h":"v",Q=i)}}},Yn=function(){if(Q){var e=Q.length;if(0!==e)if(qt(pn,Q[0]),hn.x=pn.x-yn.x,hn.y=pn.y-yn.y,et&&e>1){if(yn.x=pn.x,yn.y=pn.y,!hn.x&&!hn.y&&Xt(Q[1],fn))return;qt(fn,Q[1]),q||(q=!0,zt("zoomGestureStarted"));var t=Tn(pn,fn),n=Wt(t);n>a.currItem.initialZoomLevel+a.currItem.initialZoomLevel/15&&(dt=!0);var i=1;if(a.currItem.minZoom>n)if(s.pinchToClose&&!dt&&a.currItem.initialZoomLevel>=g){var o=a.currItem.minZoom-n,r=1-o/(a.currItem.minZoom/1.2);_t(r),zt("onPinchClose",r),ut=!0}else i=(a.currItem.minZoom-n)/a.currItem.minZoom,i>1&&(i=1),n=a.currItem.minZoom-i*(a.currItem.minZoom/3);else n>a.currItem.maxZoom&&(i=(n-a.currItem.maxZoom)/(6*a.currItem.minZoom),i>1&&(i=1),n=a.currItem.maxZoom+i*a.currItem.minZoom);1!==i&&0>i&&(i=0),tt=t,En(pn,fn,Ct),bt.x+=Ct.x-Cn.x,bt.y+=Ct.y-Cn.y,qt(Cn,Ct),Dt.x=Gt("x",n),Dt.y=Gt("y",n),V=n>x,x=n,Ht()}else{if(!rt)return;if(st&&(st=!1,Math.abs(hn.x)>=mn&&(hn.x-=Q[0].x-vn.x),Math.abs(hn.y)>=mn&&(hn.y-=Q[0].y-vn.y)),yn.x=pn.x,yn.y=pn.y,0===hn.x&&0===hn.y)return;if("v"===rt&&s.closeOnVerticalDrag&&!Sn()){bt.y+=hn.y,Dt.y+=hn.y;var l=Fn();return W=!0,zt("onVerticalDrag",l),_t(l),Ht(),void 0}Rn(Nt(),pn.x,pn.y),$=!0,it=a.currItem.bounds;var u=_n("x",hn);u||_n("y",hn),Ht()}}},Bn=function(e){if(_.isOldAndroid){if(G&&"mouseup"===e.type)return;e.type.indexOf("touch")>-1&&(clearTimeout(G),G=setTimeout(function(){G=0},600))}zt("pointerUp"),kn(e,!1)&&e.preventDefault();var t;if(O){var n=o.arraySearch(xn,e.pointerId,"id");if(n>-1)if(t=xn.splice(n,1)[0],navigator.pointerEnabled)t.type=e.pointerType||"mouse";else{var i={4:"mouse",2:"touch",3:"pen"};t.type=i[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}}var r,l=Nn(e),s=l.length;if("mouseup"===e.type&&(s=0),2===s)return Q=null,!0;1===s&&qt(vn,l[0]),0!==s||rt||at||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),zt("touchRelease",e,t));var u=-1;if(0===s&&(X=!1,o.unbind(window,h,a),Mn(),et?u=0:-1!==wt&&(u=Nt()-wt)),wt=1===s?Nt():-1,r=-1!==u&&150>u?"zoom":"swipe",et&&2>s&&(et=!1,1===s&&(r="zoomPointerUp"),zt("zoomGestureEnded")),Q=null,$||q||at||W)if(ln(),B||(B=Vn()),B.calculateSwipeSpeed("x"),W){var c=Fn();if(.6>c)a.close();else{var d=Dt.y,m=ct;sn("verticalDrag",0,1,300,o.easing.cubic.out,function(e){Dt.y=(a.currItem.initialPosition.y-d)*e+d,_t((1-m)*e+m),Ht()}),zt("onVerticalDrag",1)}}else{if((J||at)&&0===s){var p=Gn(r,B);if(p)return;r="zoomPointerUp"}if(!at)return"swipe"!==r?(Xn(),void 0):(!J&&x>a.currItem.fitRatio&&Wn(B),void 0)}},Vn=function(){var e,t,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(i){wn.length>1?(e=Nt()-Y+50,t=wn[wn.length-2][i]):(e=Nt()-H,t=vn[i]),n.lastFlickOffset[i]=yn[i]-t,n.lastFlickDist[i]=Math.abs(n.lastFlickOffset[i]),n.lastFlickSpeed[i]=n.lastFlickDist[i]>20?n.lastFlickOffset[i]/e:0,.1>Math.abs(n.lastFlickSpeed[i])&&(n.lastFlickSpeed[i]=0),n.slowDownRatio[i]=.95,n.slowDownRatioReverse[i]=1-n.slowDownRatio[i],n.speedDecelerationRatio[i]=1},calculateOverBoundsAnimOffset:function(e,t){n.backAnimStarted[e]||(Dt[e]>it.min[e]?n.backAnimDestination[e]=it.min[e]:Dt[e]<it.max[e]&&(n.backAnimDestination[e]=it.max[e]),void 0!==n.backAnimDestination[e]&&(n.slowDownRatio[e]=.7,n.slowDownRatioReverse[e]=1-n.slowDownRatio[e],.05>n.speedDecelerationRatioAbs[e]&&(n.lastFlickSpeed[e]=0,n.backAnimStarted[e]=!0,sn("bounceZoomPan"+e,Dt[e],n.backAnimDestination[e],t||300,o.easing.sine.out,function(t){Dt[e]=t,Ht()}))))},calculateAnimOffset:function(e){n.backAnimStarted[e]||(n.speedDecelerationRatio[e]=n.speedDecelerationRatio[e]*(n.slowDownRatio[e]+n.slowDownRatioReverse[e]-n.slowDownRatioReverse[e]*n.timeDiff/10),n.speedDecelerationRatioAbs[e]=Math.abs(n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]),n.distanceOffset[e]=n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]*n.timeDiff,Dt[e]+=n.distanceOffset[e])},panAnimLoop:function(){return nn.zoomPan&&(nn.zoomPan.raf=R(n.panAnimLoop),n.now=Nt(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),Ht(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),.05>n.speedDecelerationRatioAbs.x&&.05>n.speedDecelerationRatioAbs.y)?(an("zoomPan"),void 0):void 0}};return n},Wn=function(e){return e.calculateSwipeSpeed("y"),it=a.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},.05>=Math.abs(e.lastFlickSpeed.x)&&.05>=Math.abs(e.lastFlickSpeed.y)?(e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0):(rn("zoomPan"),e.lastNow=Nt(),e.panAnimLoop(),void 0)},Gn=function(e,t){var n;at||(Zt=m);var i;if("swipe"===e){var r=yn.x-vn.x;r>dn&&(10>t.lastFlickDist.x||t.lastFlickOffset.x>20)?i=-1:-dn>r&&(10>t.lastFlickDist.x||-20>t.lastFlickOffset.x)&&(i=1)}var l;i&&(m+=i,0>m?(m=s.loop?vt()-1:0,l=!0):m>=vt()&&(m=s.loop?0:vt()-1,l=!0),(!l||s.loop)&&(At+=i,Mt-=i,n=!0));var u,c=St.x*Mt,d=Math.abs(c-In.x);return n||c>In.x==t.lastFlickSpeed.x>0?(u=Math.abs(t.lastFlickSpeed.x)>0?d/Math.abs(t.lastFlickSpeed.x):333,u=Math.min(u,400),u=Math.max(u,250)):u=333,Zt===m&&(n=!1),at=!0,sn("mainScroll",In.x,c,u,o.easing.cubic.out,Vt,function(){ln(),at=!1,Zt=-1,(n||Zt!==m)&&a.updateCurrItem(),zt("mainScrollAnimComplete")}),n&&a.updateCurrItem(!0),n},Xn=function(){var e=x;a.currItem.minZoom>x?e=a.currItem.minZoom:x>a.currItem.maxZoom&&(e=a.currItem.maxZoom);var t,n=1,i=ct;return ut&&!V&&!dt&&a.currItem.minZoom>x?(d=!0,a.close(),!0):(ut&&(t=function(e){_t((n-i)*e+i)}),a.zoomTo(e,0,300,o.easing.cubic.out,t),!0)},Kn={},qn={},$n=[],jn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return pt.length}},Jn=function(e,t,n){if(e.src){var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),zt("parseVerticalMargin",e)),Kn.x=t.x,Kn.y=t.y-e.vGap.top-e.vGap.bottom,i){var o=Kn.x/e.w,a=Kn.y/e.h;e.fitRatio=a>o?o:a,e.fillRatio=o>a?o:a;var r=s.scaleMode;"orig"===r?n=1:"fit"===r?n=e.fitRatio:"fill"===r&&(n=e.fillRatio),n>1&&(n=1),e.initialZoomLevel=n,e.maxZoom=2,e.doubleTapZoom=2*n>1?2*n:1,e.minZoom=n,e.bounds||(e.bounds={center:{},max:{},min:{}})}if(!n)return;qn.x=e.w*n,qn.y=e.h*n;var l=e.bounds;return l.center.x=Math.round((Kn.x-qn.x)/2),l.center.y=Math.round((Kn.y-qn.y)/2)+e.vGap.top,l.max.x=qn.x>Kn.x?Math.round(Kn.x-qn.x):l.center.x,l.max.y=qn.y>Kn.y?Math.round(Kn.y-qn.y)+e.vGap.top:l.center.y,l.min.x=qn.x>Kn.x?0:l.center.x,l.min.y=qn.y>Kn.y?e.vGap.top:l.center.y,i&&n===e.initialZoomLevel&&(e.initialPosition=l.center),l}return!1},Qn=function(e,t,n,i,o,r){var l;!o&&(E||s.alwaysFadeIn)&&(e===m||a.isMainScrollAnimating()||a.isDragging()&&!a.isZooming())&&(l=!0),i&&(l&&(i.style.opacity=0),t.imageAppended=!0,n.appendChild(i),l&&setTimeout(function(){i.style.opacity=1,r&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500)},50))},ei=function(e){e.loading=!0,e.loaded=!1;var t=e.img=o.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},ti=function(e,t){return e.loadError?(t.el.innerHTML=s.errorMsg.replace("%url%",e.src),!0):void 0},ni=function(){if($n.length){for(var e,t=0;$n.length>t;t++)e=$n[t],e.holder.index===e.index&&Qn(e.index,e.item,e.baseDiv,e.img);$n=[]}};Rt("Controller",{publicMethods:{lazyLoadItem:function(e){e=Ft(e);var t=yt(e);!t||t.loaded||t.loading||(zt("gettingData",e,t),ei(t))},initController:function(){o.extend(s,jn,!0),a.items=pt=n,yt=a.getItemAt,vt=s.getNumItemsFn,xt=s.loop,3>vt()&&(s.loop=!1),Lt("beforeChange",function(e){var t,n=s.preload,i=null===e?!0:e>0,o=Math.min(n[0],vt()),r=Math.min(n[1],vt());for(t=1;(i?r:o)>=t;t++)a.lazyLoadItem(m+t);for(t=1;(i?o:r)>=t;t++)a.lazyLoadItem(m-t)}),Lt("initialLayout",function(){a.currItem.initialLayout=s.getThumbBoundsFn&&s.getThumbBoundsFn(m)}),Lt("mainScrollAnimComplete",ni),Lt("initialZoomInEnd",ni),Lt("destroy",function(){for(var e,t=0;pt.length>t;t++)e=pt[t],e.container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);$n=null})},getItemAt:function(e){return e>=0?void 0!==pt[e]?pt[e]:!1:!1},allowProgressiveImg:function(){return s.forceProgressiveLoading||!E||s.mouseUsed||screen.width>1200},setContent:function(e,t){s.loop&&(t=Ft(t));var n=a.getItemAt(e.index);n&&(n.container=null);var i,r=a.getItemAt(t);if(r){if(zt("gettingData",t,r),e.index=t,e.item=r,ti(r,e))return r.initialPosition.x=r.initialPosition.y=0,r.initialZoomLevel=r.maxZoom=r.minZoom=1,ot=null,r.w=50,r.h=50,Yt(r),void 0;var l=r.container=o.createEl("pswp__zoom-wrap");if(r.loaded)i=o.createEl("pswp__img","img"),i.style.webkitBackfaceVisibility="hidden",i.style.opacity=1,i.src=r.src,Qn(t,r,l,i,!0);else{if(r.loadComplete=function(n){if(u){if(n.img.style.webkitBackfaceVisibility="hidden",e.index===t){if(ti(n,e))return n.img=null,void 0;n.imageAppended?!ht&&n.placeholder&&(n.placeholder.style.display="none",n.placeholder=null):at||ht?$n.push({item:n,baseDiv:l,img:n.img,index:t,holder:e}):Qn(t,n,l,n.img,at||ht)}n.loadComplete=null,n.img=null,zt("imageLoadComplete",t,n)}},o.features.transform){var c=o.createEl("pswp__img pswp__img--placeholder"+(r.msrc?"":" pswp__img--placeholder--blank"),r.msrc?"img":"");r.msrc&&(c.src=r.msrc),c.style.width=r.w+"px",c.style.height=r.h+"px",l.appendChild(c),r.placeholder=c}r.loading||ei(r),a.allowProgressiveImg()&&(ft?Qn(t,r,l,r.img,!0,!0):$n.push({item:r,baseDiv:l,img:r.img,index:t,holder:e}))}Jn(r,Tt),ft||t!==m?Yt(r):(ot=l.style,un(r,i||r.img)),e.el.innerHTML="",e.el.appendChild(l)}else e.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var ii,oi={},ai=function(e,t,n){var i=document.createEvent("CustomEvent");i.initCustomEvent("pswpTap",!0,!0,{origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"}),e.target.dispatchEvent(i)};Rt("Tap",{publicMethods:{initTap:function(){Lt("firstTouchStart",a.onTapStart),Lt("touchRelease",a.onTapRelease),Lt("destroy",function(){oi={},ii=null})},onTapStart:function(e){e.length>1&&(clearTimeout(ii),ii=null)},onTapRelease:function(e,t){if(t&&!$&&!K&&!on){var n=t;if(ii&&(clearTimeout(ii),ii=null,Kt(n,oi)))return zt("doubleTap",n),void 0;var i=e.target.tagName.toLowerCase();if("mouse"===t.type)return ai(e,t,"mouse"),void 0;if("button"===i||o.hasClass(e.target,"pswp__single-tap"))return ai(e,t),void 0;qt(oi,n),ii=setTimeout(function(){ai(e,t),ii=null},300)}}}});var ri;Rt("DesktopZoom",{publicMethods:{handleMouseWheel:function(e){if(a.currItem.fitRatio>=x)return!0;if(e.preventDefault(),e.stopPropagation(),ri.x=0,"deltaX"in e)ri.x=e.deltaX,ri.y=e.deltaY;else if("wheelDelta"in e)e.wheelDeltaX&&(ri.x=-.16*e.wheelDeltaX),ri.y=e.wheelDeltaY?-.16*e.wheelDeltaY:-.16*e.wheelDelta;else{if(!("detail"in e))return;ri.y=e.detail}en(x,!0),a.panTo(Dt.x-ri.x,Dt.y-ri.y)},toggleDesktopZoom:function(t){t=t||{x:Tt.x/2,y:Tt.y/2+L};var n=1===x;a.mouseZoomedIn=!n,a.zoomTo(n?a.currItem.initialZoomLevel:1,t,333),o[(n?"remove":"add")+"Class"](e,"pswp--zoomed-in")},setupDesktopZoom:function(t){ri={};var n="wheel mousewheel DOMMouseScroll";Lt("bindEvents",function(){o.bind(e,n,a.handleMouseWheel)}),Lt("unbindEvents",function(){ri&&o.unbind(e,n,a.handleMouseWheel)}),a.mouseZoomedIn=!1;var i,r=function(){a.mouseZoomedIn&&(o.removeClass(e,"pswp--zoomed-in"),a.mouseZoomedIn=!1),1>x?o.addClass(e,"pswp--zoom-allowed"):o.removeClass(e,"pswp--zoom-allowed"),l()},l=function(){i&&(o.removeClass(e,"pswp--dragging"),i=!1)};Lt("resize",r),Lt("afterChange",r),Lt("pointerDown",function(){a.mouseZoomedIn&&(i=!0,o.addClass(e,"pswp--dragging"))}),Lt("pointerUp",l),t||r()},initDesktopZoom:function(){z||(E?Lt("mouseUsed",function(){a.setupDesktopZoom()}):a.setupDesktopZoom(!0))}}});var li,si,ui,ci,di,mi,pi,fi,hi,yi,vi,xi={history:!0,galleryUID:1},gi=function(){return vi.hash.substring(1)},wi=function(){li&&clearTimeout(li),ui&&clearTimeout(ui)},bi=function(){var e=gi(),t={};if(5>e.length)return t;for(var n=e.split("&"),i=0;n.length>i;i++)if(n[i]){var o=n[i].split("=");2>o.length||(t[o[0]]=o[1])}return t.pid=parseInt(t.pid,10)-1,0>t.pid&&(t.pid=0),t},Ii=function(){if(ui&&clearTimeout(ui),on||X)return ui=setTimeout(Ii,500),void 0;ci?clearTimeout(si):ci=!0;var e=pi+"&"+"gid="+s.galleryUID+"&"+"pid="+(m+1);if(fi){var t=vi.href.split("#")[0]+"#"+e;vi.replace(t)}else-1===vi.hash.indexOf(e)&&(yi=!0),vi.hash=e;fi=!0,si=setTimeout(function(){ci=!1},60)};Rt("History",{publicMethods:{initHistory:function(){if(o.extend(s,xi,!0),s.history){vi=window.location,yi=!1,hi=!1,fi=!1,pi=gi(),pi.indexOf("gid=")>-1&&(pi=pi.split("&gid=")[0],pi=pi.split("?gid=")[0]),Lt("afterChange",a.updateURL),Lt("unbindEvents",function(){o.unbind(window,"hashchange",a.onHashChange)});var e=function(){mi=!0,hi||(yi?history.back():pi?vi.hash=pi:"pushState"in history?history.pushState("",document.title,vi.pathname+vi.search):vi.hash=""),wi()};Lt("unbindEvents",function(){d&&e()}),Lt("destroy",function(){mi||e()}),Lt("firstUpdate",function(){m=bi().pid});var t=pi.indexOf("pid=");t>-1&&(pi=pi.substring(0,t),"&"===pi.slice(-1)&&(pi=pi.slice(0,-1))),setTimeout(function(){u&&o.bind(window,"hashchange",a.onHashChange)},40)}},onHashChange:function(){return gi()===pi?(hi=!0,a.close(),void 0):(ci||(di=!0,a.goTo(bi().pid),di=!1),void 0)},updateURL:function(){wi(),di||(fi?li=setTimeout(Ii,800):Ii())}}}),o.extend(a,cn)};return e});