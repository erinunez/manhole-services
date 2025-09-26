import{$ as J,$a as kt,$b as pt,A as ao,Ab as k,Ac as To,Bb as We,Cb as Ke,Cc as di,D as lo,Db as nt,Dc as Io,Eb as ai,Ec as Te,Fb as li,Fc as Ce,G as uo,Gb as ui,Gc as Bt,Hb as _n,Ib as Cn,Jb as it,Jc as H,Kb as Eo,Kc as hi,L as co,Lb as wo,Mb as se,Nb as j,Nc as bt,Ob as Pe,Oc as Mo,Pc as Oo,Qb as U,R as ho,Rb as ke,Rc as E,Sb as Ve,Sc as ot,Ta as B,Tb as be,U as L,Ua as yo,V as mn,Vb as ye,W as xe,Wa as ct,Wb as ve,X as v,Xb as ci,Y as V,Ya as Le,Yb as So,Za as S,_ as P,_b as Ao,a as C,aa as m,b as de,ba as bn,bc as W,cc as ft,da as po,db as Y,dc as gt,ea as fo,eb as $,f as gn,fa as go,fb as A,ga as mo,gb as Vt,ha as yn,hb as F,i as ii,ib as vo,ja as vn,jb as he,ka as Q,l as re,la as ri,lb as pe,lc as N,mb as Dn,nc as mt,oa as ee,oc as Fo,p as so,pb as si,q as oi,qb as Do,ra as bo,sa as Ge,ta as _,u as tt,ub as te,va as _e,vb as dt,wb as ht,yb as _o,za as ut,zb as Co}from"./chunk-VKSTKE36.js";var xo=null;function rt(){return xo}function pa(t){xo??=t}var pi=class{},$t=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>m(Lo),providedIn:"platform"})}return t})(),fa=new P(""),Lo=(()=>{class t extends $t{_location;_history;_doc=m(Q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return rt().getBaseHref(this._doc)}onPopState(e){let n=rt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=rt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function En(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Ro(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Ee(t){return t&&t[0]!=="?"?`?${t}`:t}var yt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>m(Po),providedIn:"root"})}return t})(),wn=new P(""),Po=(()=>{class t extends yt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??m(Q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return En(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Ee(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Ee(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Ee(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(J($t),J(wn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ko=(()=>{class t{_subject=new re;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ba(Ro(No(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Ee(n))}normalize(e){return t.stripTrailingSlash(ma(this._basePath,No(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ee(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ee(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=Ee;static joinWithSlash=En;static stripTrailingSlash=Ro;static \u0275fac=function(n){return new(n||t)(J(yt))};static \u0275prov=v({token:t,factory:()=>ga(),providedIn:"root"})}return t})();function ga(){return new ko(J(yt))}function ma(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function No(t){return t.replace(/\/index.html$/,"")}function ba(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ya=(()=>{class t extends yt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=En(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Ee(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Ee(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(J($t),J(wn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),zo={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},_i=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(_i||{});var ne=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(ne||{}),I=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(I||{}),ae=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(ae||{}),le={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Go(t){return se(t)[j.LocaleId]}function Wo(t,i,e){let n=se(t),o=[n[j.DayPeriodsFormat],n[j.DayPeriodsStandalone]],r=De(o,i);return De(r,e)}function Ko(t,i,e){let n=se(t),o=[n[j.DaysFormat],n[j.DaysStandalone]],r=De(o,i);return De(r,e)}function qo(t,i,e){let n=se(t),o=[n[j.MonthsFormat],n[j.MonthsStandalone]],r=De(o,i);return De(r,e)}function Yo(t,i){let n=se(t)[j.Eras];return De(n,i)}function jt(t,i){let e=se(t);return De(e[j.DateFormat],i)}function Ut(t,i){let e=se(t);return De(e[j.TimeFormat],i)}function Ht(t,i){let n=se(t)[j.DateTimeFormat];return De(n,i)}function Ie(t,i){let e=se(t),n=e[j.NumberSymbols][i];if(typeof n>"u"){if(i===le.CurrencyDecimal)return e[j.NumberSymbols][le.Decimal];if(i===le.CurrencyGroup)return e[j.NumberSymbols][le.Group]}return n}function Zo(t,i){return se(t)[j.NumberFormats][i]}function va(t){return se(t)[j.Currencies]}function Xo(t){if(!t[j.ExtraData])throw new L(2303,!1)}function Jo(t){let i=se(t);return Xo(i),(i[j.ExtraData][2]||[]).map(n=>typeof n=="string"?fi(n):[fi(n[0]),fi(n[1])])}function Qo(t,i,e){let n=se(t);Xo(n);let o=[n[j.ExtraData][0],n[j.ExtraData][1]],r=De(o,i)||[];return De(r,e)||[]}function De(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new L(2304,!1)}function fi(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}function er(t,i,e="en"){let n=va(e)[t]||zo[t]||[],o=n[1];return i==="narrow"&&typeof o=="string"?o:n[0]||t}var Da=2;function tr(t){let i,e=zo[t];return e&&(i=e[2]),typeof i=="number"?i:Da}var _a=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Sn={},Ca=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function nr(t,i,e,n){let o=Oa(t);i=Be(e,i)||i;let s=[],a;for(;i;)if(a=Ca.exec(i),a){s=s.concat(a.slice(1));let c=s.pop();if(!c)break;i=c}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=or(n,l),o=Ma(o,n));let u="";return s.forEach(c=>{let d=Ta(c);u+=d?d(o,e,l):c==="''"?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function Mn(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Be(t,i){let e=Go(t);if(Sn[e]??={},Sn[e][i])return Sn[e][i];let n="";switch(i){case"shortDate":n=jt(t,ae.Short);break;case"mediumDate":n=jt(t,ae.Medium);break;case"longDate":n=jt(t,ae.Long);break;case"fullDate":n=jt(t,ae.Full);break;case"shortTime":n=Ut(t,ae.Short);break;case"mediumTime":n=Ut(t,ae.Medium);break;case"longTime":n=Ut(t,ae.Long);break;case"fullTime":n=Ut(t,ae.Full);break;case"short":let o=Be(t,"shortTime"),r=Be(t,"shortDate");n=An(Ht(t,ae.Short),[o,r]);break;case"medium":let s=Be(t,"mediumTime"),a=Be(t,"mediumDate");n=An(Ht(t,ae.Medium),[s,a]);break;case"long":let l=Be(t,"longTime"),u=Be(t,"longDate");n=An(Ht(t,ae.Long),[l,u]);break;case"full":let c=Be(t,"fullTime"),d=Be(t,"fullDate");n=An(Ht(t,ae.Full),[c,d]);break}return n&&(Sn[e][i]=n),n}function An(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function we(t,i,e="-",n,o){let r="";(t<0||o&&t<=0)&&(o?t=-t+1:(t=-t,r=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function Ea(t,i){return we(t,3).substring(0,i)}function z(t,i,e=0,n=!1,o=!1){return function(r,s){let a=wa(t,r);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return Ea(a,i);let l=Ie(s,le.MinusSign);return we(a,i,l,n,o)}}function wa(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new L(2301,!1)}}function R(t,i,e=ne.Format,n=!1){return function(o,r){return Sa(o,r,t,i,e,n)}}function Sa(t,i,e,n,o,r){switch(e){case 2:return qo(i,o,n)[t.getMonth()];case 1:return Ko(i,o,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(r){let u=Jo(i),c=Qo(i,o,n),d=u.findIndex(h=>{if(Array.isArray(h)){let[p,f]=h,y=s>=p.hours&&a>=p.minutes,g=s<f.hours||s===f.hours&&a<f.minutes;if(p.hours<f.hours){if(y&&g)return!0}else if(y||g)return!0}else if(h.hours===s&&h.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return Wo(i,o,n)[s<12?0:1];case 3:return Yo(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new L(2302,!1)}}function Fn(t){return function(i,e,n){let o=-1*n,r=Ie(e,le.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case 0:return(o>=0?"+":"")+we(s,2,r)+we(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+we(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+we(s,2,r)+":"+we(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+we(s,2,r)+":"+we(Math.abs(o%60),2,r);default:throw new L(2310,!1)}}}var Aa=0,In=4;function Fa(t){let i=Mn(t,Aa,1).getDay();return Mn(t,0,1+(i<=In?In:In+7)-i)}function ir(t){let i=t.getDay(),e=i===0?-3:In-i;return Mn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function gi(t,i=!1){return function(e,n){let o;if(i){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();o=1+Math.floor((s+r)/7)}else{let r=ir(e),s=Fa(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return we(o,t,Ie(n,le.MinusSign))}}function Tn(t,i=!1){return function(e,n){let r=ir(e).getFullYear();return we(r,t,Ie(n,le.MinusSign),i)}}var mi={};function Ta(t){if(mi[t])return mi[t];let i;switch(t){case"G":case"GG":case"GGG":i=R(3,I.Abbreviated);break;case"GGGG":i=R(3,I.Wide);break;case"GGGGG":i=R(3,I.Narrow);break;case"y":i=z(0,1,0,!1,!0);break;case"yy":i=z(0,2,0,!0,!0);break;case"yyy":i=z(0,3,0,!1,!0);break;case"yyyy":i=z(0,4,0,!1,!0);break;case"Y":i=Tn(1);break;case"YY":i=Tn(2,!0);break;case"YYY":i=Tn(3);break;case"YYYY":i=Tn(4);break;case"M":case"L":i=z(1,1,1);break;case"MM":case"LL":i=z(1,2,1);break;case"MMM":i=R(2,I.Abbreviated);break;case"MMMM":i=R(2,I.Wide);break;case"MMMMM":i=R(2,I.Narrow);break;case"LLL":i=R(2,I.Abbreviated,ne.Standalone);break;case"LLLL":i=R(2,I.Wide,ne.Standalone);break;case"LLLLL":i=R(2,I.Narrow,ne.Standalone);break;case"w":i=gi(1);break;case"ww":i=gi(2);break;case"W":i=gi(1,!0);break;case"d":i=z(2,1);break;case"dd":i=z(2,2);break;case"c":case"cc":i=z(7,1);break;case"ccc":i=R(1,I.Abbreviated,ne.Standalone);break;case"cccc":i=R(1,I.Wide,ne.Standalone);break;case"ccccc":i=R(1,I.Narrow,ne.Standalone);break;case"cccccc":i=R(1,I.Short,ne.Standalone);break;case"E":case"EE":case"EEE":i=R(1,I.Abbreviated);break;case"EEEE":i=R(1,I.Wide);break;case"EEEEE":i=R(1,I.Narrow);break;case"EEEEEE":i=R(1,I.Short);break;case"a":case"aa":case"aaa":i=R(0,I.Abbreviated);break;case"aaaa":i=R(0,I.Wide);break;case"aaaaa":i=R(0,I.Narrow);break;case"b":case"bb":case"bbb":i=R(0,I.Abbreviated,ne.Standalone,!0);break;case"bbbb":i=R(0,I.Wide,ne.Standalone,!0);break;case"bbbbb":i=R(0,I.Narrow,ne.Standalone,!0);break;case"B":case"BB":case"BBB":i=R(0,I.Abbreviated,ne.Format,!0);break;case"BBBB":i=R(0,I.Wide,ne.Format,!0);break;case"BBBBB":i=R(0,I.Narrow,ne.Format,!0);break;case"h":i=z(3,1,-12);break;case"hh":i=z(3,2,-12);break;case"H":i=z(3,1);break;case"HH":i=z(3,2);break;case"m":i=z(4,1);break;case"mm":i=z(4,2);break;case"s":i=z(5,1);break;case"ss":i=z(5,2);break;case"S":i=z(6,1);break;case"SS":i=z(6,2);break;case"SSS":i=z(6,3);break;case"Z":case"ZZ":case"ZZZ":i=Fn(0);break;case"ZZZZZ":i=Fn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=Fn(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=Fn(2);break;default:return null}return mi[t]=i,i}function or(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function Ia(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function Ma(t,i,e){let o=t.getTimezoneOffset(),r=or(i,o);return Ia(t,-1*(r-o))}function Oa(t){if(Vo(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[o,r=1,s=1]=t.split("-").map(a=>+a);return Mn(o,r-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(_a))return Ra(n)}let i=new Date(t);if(!Vo(i))throw new L(2311,!1);return i}function Ra(t){let i=new Date(0),e=0,n=0,o=t[8]?i.setUTCFullYear:i.setFullYear,r=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),o.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(i,s,a,l,u),i}function Vo(t){return t instanceof Date&&!isNaN(t.valueOf())}var Na=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Bo=22,On=".",zt="0",xa=";",La=",",bi="#",$o="\xA4";function Pa(t,i,e,n,o,r,s=!1){let a="",l=!1;if(!isFinite(t))a=Ie(e,le.Infinity);else{let u=Ba(t);s&&(u=Va(u));let c=i.minInt,d=i.minFrac,h=i.maxFrac;if(r){let D=r.match(Na);if(D===null)throw new L(2306,!1);let O=D[1],T=D[3],q=D[5];O!=null&&(c=yi(O)),T!=null&&(d=yi(T)),q!=null?h=yi(q):T!=null&&d>h&&(h=d)}$a(u,d,h);let p=u.digits,f=u.integerLen,y=u.exponent,g=[];for(l=p.every(D=>!D);f<c;f++)p.unshift(0);for(;f<0;f++)p.unshift(0);f>0?g=p.splice(f,p.length):(g=p,p=[0]);let b=[];for(p.length>=i.lgSize&&b.unshift(p.splice(-i.lgSize,p.length).join(""));p.length>i.gSize;)b.unshift(p.splice(-i.gSize,p.length).join(""));p.length&&b.unshift(p.join("")),a=b.join(Ie(e,n)),g.length&&(a+=Ie(e,o)+g.join("")),y&&(a+=Ie(e,le.Exponential)+"+"+y)}return t<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function rr(t,i,e,n,o){let r=Zo(i,_i.Currency),s=ka(r,Ie(i,le.MinusSign));return s.minFrac=tr(n),s.maxFrac=s.minFrac,Pa(t,s,i,le.CurrencyGroup,le.CurrencyDecimal,o).replace($o,e).replace($o,"").trim()}function ka(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(xa),o=n[0],r=n[1],s=o.indexOf(On)!==-1?o.split(On):[o.substring(0,o.lastIndexOf(zt)+1),o.substring(o.lastIndexOf(zt)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(bi));for(let c=0;c<l.length;c++){let d=l.charAt(c);d===zt?e.minFrac=e.maxFrac=c+1:d===bi?e.maxFrac=c+1:e.posSuf+=d}let u=a.split(La);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let c=o.length-e.posPre.length-e.posSuf.length,d=r.indexOf(bi);e.negPre=r.substring(0,d).replace(/'/g,""),e.negSuf=r.slice(d+c).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Va(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function Ba(t){let i=Math.abs(t)+"",e=0,n,o,r,s,a;for((o=i.indexOf(On))>-1&&(i=i.replace(On,"")),(r=i.search(/e/i))>0?(o<0&&(o=r),o+=+i.slice(r+1),i=i.substring(0,r)):o<0&&(o=i.length),r=0;i.charAt(r)===zt;r++);if(r===(a=i.length))n=[0],o=1;else{for(a--;i.charAt(a)===zt;)a--;for(o-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(i.charAt(r))}return o>Bo&&(n=n.splice(0,Bo-1),e=o-1,o=1),{digits:n,exponent:e,integerLen:o}}function $a(t,i,e){if(i>e)throw new L(2307,!1);let n=t.digits,o=n.length-t.integerLen,r=Math.min(Math.max(i,o),e),s=r+t.integerLen,a=n[s];if(s>0){n.splice(Math.max(t.integerLen,s));for(let d=s;d<n.length;d++)n[d]=0}else{o=Math.max(0,o),t.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let d=1;d<s;d++)n[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[s-1]++;for(;o<Math.max(0,r);o++)n.push(0);let l=r!==0,u=i+t.integerLen,c=n.reduceRight(function(d,h,p,f){return h=h+d,f[p]=h<10?h:h-10,l&&(f[p]===0&&p>=u?f.pop():l=!1),h>=10?1:0},0);c&&(n.unshift(c),t.integerLen++)}function yi(t){let i=parseInt(t);if(isNaN(i))throw new L(2305,!1);return i}var vi=/\s+/,jo=[],ja=(()=>{class t{_ngEl;_renderer;initialClasses=jo;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(vi):jo}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(vi):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(vi).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(S(_e),S(Le))};static \u0275dir=A({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Rn=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},sr=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new Rn(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),Uo(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);Uo(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(S(kt),S(ct),S(Mo))};static \u0275dir=A({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Uo(t,i){t.context.$implicit=i.item}var Ci=(()=>{class t{_viewContainer;_context=new Nn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ho(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ho(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(S(kt),S(ct))};static \u0275dir=A({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Nn=class{$implicit=null;ngIf=null};function Ho(t,i){if(t&&!t.createEmbeddedView)throw new L(2020,!1)}var Di=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,e){this._viewContainerRef=i,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},ar=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),Ua=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,o){this.ngSwitch=o,o._addCase(),this._view=new Di(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)(S(kt),S(ct),S(ar,9))};static \u0275dir=A({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})();var Ei=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:yo.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(S(_e),S(Oo),S(Le))};static \u0275dir=A({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),st=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(S(kt))};static \u0275dir=A({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ge]})}return t})();function xn(t,i){return new L(2100,!1)}var Ha=(()=>{class t{transform(e){if(e==null)return null;if(typeof e!="string")throw xn(t,e);return e.toUpperCase()}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=Vt({name:"uppercase",type:t,pure:!0})}return t})(),za="mediumDate",lr=new P(""),ur=new P(""),Ga=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,o){this.locale=e,this.defaultTimezone=n,this.defaultOptions=o}transform(e,n,o,r){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??za,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return nr(e,s,r||this.locale,a)}catch(s){throw xn(t,s.message)}}static \u0275fac=function(n){return new(n||t)(S(di,16),S(lr,24),S(ur,24))};static \u0275pipe=Vt({name:"date",type:t,pure:!0})}return t})();var Wa=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,o="symbol",r,s){if(!Ka(e))return null;s||=this._locale,typeof o=="boolean"&&(o=o?"symbol":"code");let a=n||this._defaultCurrencyCode;o!=="code"&&(o==="symbol"||o==="symbol-narrow"?a=er(a,o==="symbol"?"wide":"narrow",s):a=o);try{let l=qa(e);return rr(l,s,a,n,r)}catch(l){throw xn(t,l.message)}}static \u0275fac=function(n){return new(n||t)(S(di,16),S(Io,16))};static \u0275pipe=Vt({name:"currency",type:t,pure:!0})}return t})();function Ka(t){return!(t==null||t===""||t!==t)}function qa(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new L(2309,!1);return t}var Ya=(()=>{class t{transform(e,n,o){if(e==null)return null;if(!(typeof e=="string"||Array.isArray(e)))throw xn(t,e);return e.slice(n,o)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=Vt({name:"slice",type:t,pure:!1})}return t})();var ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({})}return t})();function wi(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Gt=class{};var Ja="browser",Qa="server";function Ln(t){return t===Ja}function cr(t){return t===Qa}var Ud=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new Si(m(Q),window)})}return t})(),Si=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(de(C({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=el(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(mn(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(de(C({},e),{left:o-s[0],top:r-s[1]}))}};function el(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}var Dt=class{},_t=class{},Oe=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Vn=class{encodeKey(i){return dr(i)}encodeValue(i){return dr(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function tl(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var nl=/%(\d[a-f0-9])/gi,il={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function dr(t){return encodeURIComponent(t).replace(nl,(i,e)=>il[e]??i)}function Pn(t){return`${t}`}var $e=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Vn,i.fromString){if(i.fromObject)throw new L(2805,!1);this.map=tl(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(Pn):[Pn(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Pn(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(Pn(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Bn=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function ol(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function hr(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function pr(t){return typeof Blob<"u"&&t instanceof Blob}function fr(t){return typeof FormData<"u"&&t instanceof FormData}function rl(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Wt="Content-Type",$n="Accept",Oi="X-Request-URL",mr="text/plain",br="application/json",yr=`${br}, ${mr}, */*`,vt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let r;if(ol(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new L(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer&&(this.referrer=r.referrer),this.transferCache=r.transferCache}if(this.headers??=new Oe,this.context??=new Bn,!this.params)this.params=new $e,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||hr(this.body)||pr(this.body)||fr(this.body)||rl(this.body)?this.body:this.body instanceof $e?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||fr(this.body)?null:pr(this.body)?this.body.type||null:hr(this.body)?null:typeof this.body=="string"?mr:this.body instanceof $e?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?br:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.keepalive??this.keepalive,s=i.priority||this.priority,a=i.cache||this.cache,l=i.mode||this.mode,u=i.redirect||this.redirect,c=i.credentials||this.credentials,d=i.referrer||this.referrer,h=i.integrity||this.integrity,p=i.transferCache??this.transferCache,f=i.timeout??this.timeout,y=i.body!==void 0?i.body:this.body,g=i.withCredentials??this.withCredentials,b=i.reportProgress??this.reportProgress,D=i.headers||this.headers,O=i.params||this.params,T=i.context??this.context;return i.setHeaders!==void 0&&(D=Object.keys(i.setHeaders).reduce((q,oe)=>q.set(oe,i.setHeaders[oe]),D)),i.setParams&&(O=Object.keys(i.setParams).reduce((q,oe)=>q.set(oe,i.setParams[oe]),O)),new t(e,n,y,{params:O,headers:D,context:T,reportProgress:b,responseType:o,withCredentials:g,transferCache:p,keepalive:r,cache:a,priority:s,timeout:f,mode:l,redirect:u,credentials:c,referrer:d,integrity:h})}},je=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(je||{}),Ct=class{headers;status;statusText;url;ok;type;redirected;constructor(i,e=200,n="OK"){this.headers=i.headers||new Oe,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.ok=this.status>=200&&this.status<300}},Kt=class t extends Ct{constructor(i={}){super(i)}type=je.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Et=class t extends Ct{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=je.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected})}},Me=class extends Ct{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},vr=200,sl=204;function Fi(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer}}var Dr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof vt)r=e;else{let l;o.headers instanceof Oe?l=o.headers:l=new Oe(o.headers);let u;o.params&&(o.params instanceof $e?u=o.params:u=new $e({fromObject:o.params})),r=new vt(e,n,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,integrity:o.integrity,timeout:o.timeout})}let s=oi(r).pipe(uo(l=>this.handler.handle(l)));if(e instanceof vt||o.observe==="events")return s;let a=s.pipe(lo(l=>l instanceof Et));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(tt(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new L(2806,!1);return l.body}));case"blob":return a.pipe(tt(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new L(2807,!1);return l.body}));case"text":return a.pipe(tt(l=>{if(l.body!==null&&typeof l.body!="string")throw new L(2808,!1);return l.body}));case"json":default:return a.pipe(tt(l=>l.body))}case"response":return a;default:throw new L(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new $e().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,Fi(o,n))}post(e,n,o={}){return this.request("POST",e,Fi(o,n))}put(e,n,o={}){return this.request("PUT",e,Fi(o,n))}static \u0275fac=function(n){return new(n||t)(J(Dt))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),al=/^\)\]\}',?\n/;function gr(t){if(t.url)return t.url;let i=Oi.toLocaleLowerCase();return t.headers.get(i)}var _r=new P(""),kn=(()=>{class t{fetchImpl=m(Ti,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=m(Dn);destroyRef=m(ri);destroyed=!1;constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0})}handle(e){return new ii(n=>{let o=new AbortController;this.doRequest(e,o.signal,n).then(Ii,s=>n.error(new Me({error:s})));let r;return e.timeout&&(r=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{r!==void 0&&clearTimeout(r),o.abort()}})}doRequest(e,n,o){return gn(this,null,function*(){let r=this.createRequestInit(e),s;try{let f=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,C({signal:n},r)));ll(f),o.next({type:je.Sent}),s=yield f}catch(f){o.error(new Me({error:f,status:f.status??0,statusText:f.statusText,url:e.urlWithParams,headers:f.headers}));return}let a=new Oe(s.headers),l=s.statusText,u=gr(s)??e.urlWithParams,c=s.status,d=null;if(e.reportProgress&&o.next(new Kt({headers:a,status:c,statusText:l,url:u})),s.body){let f=s.headers.get("content-length"),y=[],g=s.body.getReader(),b=0,D,O,T=typeof Zone<"u"&&Zone.current,q=!1;if(yield this.ngZone.runOutsideAngular(()=>gn(this,null,function*(){for(;;){if(this.destroyed){yield g.cancel(),q=!0;break}let{done:me,value:Ne}=yield g.read();if(me)break;if(y.push(Ne),b+=Ne.length,e.reportProgress){O=e.responseType==="text"?(O??"")+(D??=new TextDecoder).decode(Ne,{stream:!0}):void 0;let et=()=>o.next({type:je.DownloadProgress,total:f?+f:void 0,loaded:b,partialText:O});T?T.run(et):et()}}})),q){o.complete();return}let oe=this.concatChunks(y,b);try{let me=s.headers.get(Wt)??"";d=this.parseBody(e,oe,me,c)}catch(me){o.error(new Me({error:me,headers:new Oe(s.headers),status:s.status,statusText:s.statusText,url:gr(s)??e.urlWithParams}));return}}c===0&&(c=d?vr:0);let h=c>=200&&c<300,p=s.redirected;h?(o.next(new Et({body:d,headers:a,status:c,statusText:l,url:u,redirected:p})),o.complete()):o.error(new Me({error:d,headers:a,status:c,statusText:l,url:u,redirected:p}))})}parseBody(e,n,o,r){switch(e.responseType){case"json":let s=new TextDecoder().decode(n).replace(al,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(r<200||r>=300)return s;throw a}case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:o});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},o;if(o=e.credentials,e.withCredentials&&(o="include"),e.headers.forEach((r,s)=>n[r]=s.join(",")),e.headers.has($n)||(n[$n]=yr),!e.headers.has(Wt)){let r=e.detectContentTypeHeader();r!==null&&(n[Wt]=r)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:o,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity}}concatChunks(e,n){let o=new Uint8Array(n),r=0;for(let s of e)o.set(s,r),r+=s.length;return o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Ti=class{};function Ii(){}function ll(t){t.then(Ii,Ii)}function ul(t,i){return i(t)}function cl(t,i,e){return(n,o)=>fo(e,()=>i(n,r=>t(r,o)))}var Cr=new P(""),Er=new P(""),wr=new P("",{providedIn:"root",factory:()=>!0});var jn=(()=>{class t extends Dt{backend;injector;chain=null;pendingTasks=m(bo);contributeToStability=m(wr);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Cr),...this.injector.get(Er,[])]));this.chain=n.reduceRight((o,r)=>cl(o,r,this.injector),ul)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(co(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(J(_t),J(po))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var dl=/^\)\]\}',?\n/,hl=RegExp(`^${Oi}:`,"m");function pl(t){return"responseURL"in t&&t.responseURL?t.responseURL:hl.test(t.getAllResponseHeaders())?t.getResponseHeader(Oi):null}var Mi=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new L(-2800,!1);let n=this.xhrFactory;return oi(null).pipe(ho(()=>new ii(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,b)=>s.setRequestHeader(g,b.join(","))),e.headers.has($n)||s.setRequestHeader($n,yr),!e.headers.has(Wt)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(Wt,g)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let a=e.serializeBody(),l=null,u=()=>{if(l!==null)return l;let g=s.statusText||"OK",b=new Oe(s.getAllResponseHeaders()),D=pl(s)||e.url;return l=new Kt({headers:b,status:s.status,statusText:g,url:D}),l},c=()=>{let{headers:g,status:b,statusText:D,url:O}=u(),T=null;b!==sl&&(T=typeof s.response>"u"?s.responseText:s.response),b===0&&(b=T?vr:0);let q=b>=200&&b<300;if(e.responseType==="json"&&typeof T=="string"){let oe=T;T=T.replace(dl,"");try{T=T!==""?JSON.parse(T):null}catch(me){T=oe,q&&(q=!1,T={error:me,text:T})}}q?(r.next(new Et({body:T,headers:g,status:b,statusText:D,url:O||void 0})),r.complete()):r.error(new Me({error:T,headers:g,status:b,statusText:D,url:O||void 0}))},d=g=>{let{url:b}=u(),D=new Me({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:b||void 0});r.error(D)},h=d;e.timeout&&(h=g=>{let{url:b}=u(),D=new Me({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:b||void 0});r.error(D)});let p=!1,f=g=>{p||(r.next(u()),p=!0);let b={type:je.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),e.responseType==="text"&&s.responseText&&(b.partialText=s.responseText),r.next(b)},y=g=>{let b={type:je.UploadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),r.next(b)};return s.addEventListener("load",c),s.addEventListener("error",d),s.addEventListener("timeout",h),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",f),a!==null&&s.upload&&s.upload.addEventListener("progress",y)),s.send(a),r.next({type:je.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",c),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",f),a!==null&&s.upload&&s.upload.removeEventListener("progress",y)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(J(Gt))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Sr=new P(""),fl="XSRF-TOKEN",gl=new P("",{providedIn:"root",factory:()=>fl}),ml="X-XSRF-TOKEN",bl=new P("",{providedIn:"root",factory:()=>ml}),qt=class{},yl=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=wi(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(J(Q),J(gl))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function vl(t,i){let e=t.url.toLowerCase();if(!m(Sr)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=m(qt).getToken(),o=m(bl);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}var Ri=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(Ri||{});function Dl(t,i){return{\u0275kind:t,\u0275providers:i}}function _l(...t){let i=[Dr,Mi,jn,{provide:Dt,useExisting:jn},{provide:_t,useFactory:()=>m(_r,{optional:!0})??m(Mi)},{provide:Cr,useValue:vl,multi:!0},{provide:Sr,useValue:!0},{provide:qt,useClass:yl}];for(let e of t)i.push(...e.\u0275providers);return bn(i)}function Cl(){return Dl(Ri.Fetch,[kn,{provide:_r,useExisting:kn},{provide:_t,useExisting:kn}])}function wt(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[wt(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Fr(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Ue(t,i){if(t&&i){let e=n=>{Fr(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function El(){return window.innerWidth-document.documentElement.offsetWidth}function Tr(t){typeof t=="string"?Ue(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,El()+"px"),Ue(document.body,t?.className||"p-overflow-hidden"))}function qe(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Ir(t){typeof t=="string"?qe(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),qe(document.body,t?.className||"p-overflow-hidden"))}function Yt(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Mr(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function Pi(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function Li(t){return t?Math.abs(t.scrollLeft):0}function wl(){let t=document.documentElement;return(window.pageXOffset||Li(t))-(t.clientLeft||0)}function Sl(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Al(t){return t?getComputedStyle(t).direction==="rtl":!1}function Sh(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Mr(t),l=a.height,u=a.width,c=i.offsetHeight,d=i.offsetWidth,h=i.getBoundingClientRect(),p=Sl(),f=wl(),y=Pi(),g,b,D="top";h.top+c+l>y.height?(g=h.top+p-l,D="bottom",g<0&&(g=p)):g=c+h.top+p,h.left+u>y.width?b=Math.max(0,h.left+f+d-u):b=h.left+f,Al(t)?t.style.insetInlineEnd=b+"px":t.style.insetInlineStart=b+"px",t.style.top=g+"px",t.style.transformOrigin=D,e&&(t.style.marginTop=D==="bottom"?`calc(${(o=(n=Yt(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=Yt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Or(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function ki(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Ah(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Mr(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=Pi(),u,c,d=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,d="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?c=a.left*-1:a.left+r.width>l.width?c=(a.left+r.width-l.width)*-1:c=0,t.style.top=u+"px",t.style.insetInlineStart=c+"px",t.style.transformOrigin=d,e){let h=(o=Yt(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=d==="bottom"?`calc(${h??"2px"} * -1)`:h??""}}}function Rr(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Fl(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Rr(t))}function St(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Nr(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),St(i)?i:void 0}function Tl(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=Nr(r);return Fl(s)?s:r?.nodeType===9?r:void 0}}}function Fh(t,i){let e=Tl(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}var Ni;function Th(t){if(t){let i=getComputedStyle(t);return t.offsetHeight-t.clientHeight-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)}else{if(Ni!=null)return Ni;let i=document.createElement("div");Or(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetHeight-i.clientHeight;return document.body.removeChild(i),Ni=e,e}}var xi;function Ar(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(xi!=null)return xi;let i=document.createElement("div");Or(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),xi=e,e}}function Ih(){if(window.getSelection){let t=window.getSelection()||{};t.empty?t.empty():t.removeAllRanges&&t.rangeCount>0&&t.getRangeAt(0).getClientRects().length>0&&t.removeAllRanges()}}function Un(t,i={}){if(St(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?e(n,u):Object.entries(u).map(([h,p])=>n==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?Un(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function Mh(t,i={},...e){if(t){let n=document.createElement(t);return Un(n,i),n.append(...e),n}}function Oh(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function Il(t,i){return St(t)?Array.from(t.querySelectorAll(i)):[]}function At(t,i){return St(t)?t.matches(i)?t:t.querySelector(i):null}function Rh(t,i){t&&document.activeElement!==t&&t.focus(i)}function Nh(t,i){if(St(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function xr(t,i=""){let e=Il(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function xh(t,i){let e=xr(t,i);return e.length>0?e[0]:null}function Vi(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Ml(t){if(t){let[i,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display=e,t.style.visibility=i,n}return 0}function Ol(t){if(t){let[i,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display=e,t.style.visibility=i,n}return 0}function Lh(t){var i;if(t){let e=(i=Rr(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function Ph(t,i){let e=xr(t,i);return e.length>0?e[e.length-1]:null}function Bi(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||Li(document.documentElement)||Li(document.body)||0)}}return{top:"auto",left:"auto"}}function Hn(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function kh(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function $i(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Vh(){return/(android)/i.test(navigator.userAgent)}function Bh(t){return!!(t&&t.offsetParent!=null)}function $h(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}function jh(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Uh(t,i){var e,n;if(t){let o=t.parentElement,r=Bi(o),s=Pi(),a=t.offsetParent?t.offsetWidth:Ol(t),l=t.offsetParent?t.offsetHeight:Ml(t),u=ki((e=o?.children)==null?void 0:e[0]),c=Hn((n=o?.children)==null?void 0:n[0]),d="",h="";r.left+u+a>s.width-Ar()?r.left<a?i%2===1?d=r.left?"-"+r.left+"px":"100%":i%2===0&&(d=s.width-a-Ar()+"px"):d="-100%":d="100%",t.getBoundingClientRect().top+c+l>s.height?h=`-${l-c}px`:h="0px",t.style.top=h,t.style.insetInlineStart=d}}function Lr(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Hh(t,i){let e=Nr(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function zh(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,c=Hn(i);a<0?t.scrollTop=l+a:a+c>u&&(t.scrollTop=l+a-u+c)}function Pr(t,i="",e){St(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function kr(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var Rl=Object.defineProperty,Vr=Object.getOwnPropertySymbols,Nl=Object.prototype.hasOwnProperty,xl=Object.prototype.propertyIsEnumerable,Br=(t,i,e)=>i in t?Rl(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Ll=(t,i)=>{for(var e in i||(i={}))Nl.call(i,e)&&Br(t,e,i[e]);if(Vr)for(var e of Vr(i))xl.call(i,e)&&Br(t,e,i[e]);return t};function Re(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function ji(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!ji(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let c=t instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==i.toString();let h=Object.keys(t);if(s=h.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,h[r]))return!1;for(r=s;r--!==0;)if(a=h[r],!ji(t[a],i[a],e))return!1;return!0}function Pl(t,i){return ji(t,i)}function jr(t){return typeof t=="function"&&"call"in t&&"apply"in t}function M(t){return!Re(t)}function Ye(t,i){if(!t||!i)return null;try{let e=t[i];if(M(e))return e}catch{}if(Object.keys(t).length){if(jr(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Ze(t,i,e){return e?Ye(t,e)===Ye(i,e):Pl(t,i)}function Kh(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Ze(t,e))return!0}return!1}function Se(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Ur(t={},i={}){let e=Ll({},t);return Object.keys(i).forEach(n=>{let o=n;Se(i[o])&&o in t&&Se(t[o])?e[o]=Ur(t[o],i[o]):e[o]=i[o]}),e}function Ui(...t){return t.reduce((i,e,n)=>n===0?e:Ur(i,e),{})}function qh(t,i){let e=-1;if(i){for(let n=0;n<i.length;n++)if(i[n]===t){e=n;break}}return e}function Yh(t,i){let e;if(M(t))try{e=t.findLast(i)}catch{e=[...t].reverse().find(i)}return e}function Zh(t,i){let e=-1;if(M(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function ce(t,...i){return jr(t)?t(...i):t}function Xe(t,i=!0){return typeof t=="string"&&(i||t!=="")}function $r(t){return Xe(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function zn(t,i="",e={}){let n=$r(i).split("."),o=n.shift();if(o){if(Se(t)){let r=Object.keys(t).find(s=>$r(s)===o)||"";return zn(ce(t[r],e),n.join("."),e)}return}return ce(t,e)}function kl(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Xh(t){return t instanceof Date}function Hr(t){return M(t)&&!isNaN(t)}function Jh(t=""){return M(t)&&t.length===1&&!!t.match(/\S| /)}function Ae(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Hi(...t){return Ui(...t)}function at(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function fe(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function Qh(t,i,e){t&&i!==e&&(e>=t.length&&(e%=t.length,i%=t.length),t.splice(e,0,t.splice(i,1)[0]))}function Gn(t){return Xe(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}var Wn={};function Zt(t="pui_id_"){return Object.hasOwn(Wn,t)||(Wn[t]=0),Wn[t]++,`${t}${Wn[t]}`}var zr=["*"],Vl=(function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t})(Vl||{}),rp=(()=>{class t{requireConfirmationSource=new re;acceptConfirmationSource=new re;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Z=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),sp=(()=>{class t{static AND="and";static OR="or"}return t})(),ap=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let u of n){let c=Ye(l,u);if(this.filters[r](c,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=fe(n.toString()).toLocaleLowerCase(o);return fe(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=fe(n.toString()).toLocaleLowerCase(o);return fe(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=fe(n.toString()).toLocaleLowerCase(o);return fe(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=fe(n.toString()).toLocaleLowerCase(o),s=fe(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:fe(e.toString()).toLocaleLowerCase(o)==fe(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:fe(e.toString()).toLocaleLowerCase(o)!=fe(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(Ze(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lp=(()=>{class t{messageSource=new re;clearSource=new re;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),up=(()=>{class t{clickSource=new re;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Y({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:zr,decls:1,vars:0,template:function(n,o){n&1&&(ke(),Ve(0))},encapsulation:2})}return t})(),dp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Y({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:zr,decls:1,vars:0,template:function(n,o){n&1&&(ke(),Ve(0))},encapsulation:2})}return t})(),Ft=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(S(ct))};static \u0275dir=A({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ie=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({imports:[ue]})}return t})(),hp=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})(),pp=(()=>{class t{dragStartSource=new re;dragStopSource=new re;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(e){this.dragStartSource.next(e)}stopDrag(e){this.dragStopSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Bl=Object.defineProperty,$l=Object.defineProperties,jl=Object.getOwnPropertyDescriptors,Kn=Object.getOwnPropertySymbols,Kr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable,Gr=(t,i,e)=>i in t?Bl(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,x=(t,i)=>{for(var e in i||(i={}))Kr.call(i,e)&&Gr(t,e,i[e]);if(Kn)for(var e of Kn(i))qr.call(i,e)&&Gr(t,e,i[e]);return t},It=(t,i)=>$l(t,jl(i)),He=(t,i)=>{var e={};for(var n in t)Kr.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Kn)for(var n of Kn(t))i.indexOf(n)<0&&qr.call(t,n)&&(e[n]=t[n]);return e};var Ul=kr(),ge=Ul,Xt=/{([^}]*)}/g,Yr=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Zr=/var\([^)]+\)/g;function Wr(t){return Xe(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function Hl(t){return Se(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function zl(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function zi(t="",i=""){return zl(`${Xe(t,!1)&&Xe(i,!1)?`${t}-`:t}${i}`)}function Xr(t="",i=""){return`--${zi(t,i)}`}function Gl(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Jr(t,i="",e="",n=[],o){if(Xe(t)){let r=t.trim();if(Gl(r))return;if(Ae(r,Xt)){let s=r.replaceAll(Xt,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>Ae(u,c)));return`var(${Xr(e,Gn(l.join("-")))}${M(o)?`, ${o}`:""})`});return Ae(s.replace(Zr,"0"),Yr)?`calc(${s})`:s}return r}else if(Hr(t))return t}function Wl(t,i,e){Xe(i,!1)&&t.push(`${i}:${e};`)}function Tt(t,i){return t?`${t}{${i}}`:""}function Qr(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",d=null,h=0;for(;u<=s.length;){let p=s[u];if((p==='"'||p==="'"||p==="`")&&s[u-1]!=="\\"&&(d=d===p?null:p),!d&&(p==="("&&h++,p===")"&&h--,(p===","||u===s.length)&&h===0)){let f=c.trim();f.startsWith("dt(")?l.push(Qr(f,a)):l.push(n(f)),c="",u++;continue}p!==void 0&&(c+=p),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=t.slice(a+3,l),c=e(u,i),d=i(...c);t=t.slice(0,a)+d+t.slice(l+1)}return t}var Wi=t=>{var i;let e=w.getTheme(),n=Gi(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=Gi(e,t,void 0,"value");return{name:o,variable:n,value:r}},ze=(...t)=>Gi(w.getTheme(),...t),Gi=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=w.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=Ae(i,Xt)?i:`{${i}}`;return n==="value"||Re(n)&&a==="strict"?w.getTokenValue(i):Jr(l,void 0,s,[o.excludedKeyRegex],e)}return""};function Mt(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=ce(i[r],{dt:ze}))!=null?s:"")},"");return Qr(e,ze)}return ce(t,{dt:ze})}var Kl=(t={})=>{let{preset:i,options:e}=t;return{preset(n){return i=i?Hi(i,n):n,this},options(n){return e=e?x(x({},e),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=It(x({},i),{semantic:It(x({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n&&Object.hasOwn(n,"light")?n.light:n,l=n&&Object.hasOwn(n,"dark")?n.dark:n,u={colorScheme:{light:x(x({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:x(x({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=It(x({},i),{semantic:x(x({},s),u)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?w.getPreset():i,options:o?w.getOptions():e}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?Hi(w.getPreset(),i):i,options:o?x(x({},w.getOptions()),e):e};return w.setTheme(r),r},use(n){let o=this.define(n);return w.setTheme(o),o}}};function ql(t,i={}){let e=w.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:d}=l.pop();for(let h in c){let p=c[h],f=Hl(p),y=Ae(h,r)?zi(d):zi(d,Gn(h));if(Se(f))l.push({node:f,path:y});else{let g=Xr(y),b=Jr(f,y,n,[r]);Wl(a,g,b);let D=y;n&&D.startsWith(n+"-")&&(D=D.slice(n.length+1)),s.push(D.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Tt(o,u)}}var Fe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return ql(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,u,c,d;let{preset:h,options:p}=i,f,y,g,b,D,O,T;if(M(h)&&p.transform!=="strict"){let{primitive:q,semantic:oe,extend:me}=h,Ne=oe||{},{colorScheme:et}=Ne,on=He(Ne,["colorScheme"]),rn=me||{},{colorScheme:sn}=rn,Lt=He(rn,["colorScheme"]),Pt=et||{},{dark:an}=Pt,ln=He(Pt,["dark"]),un=sn||{},{dark:cn}=un,dn=He(un,["dark"]),hn=M(q)?this._toVariables({primitive:q},p):{},pn=M(on)?this._toVariables({semantic:on},p):{},fn=M(ln)?this._toVariables({light:ln},p):{},no=M(an)?this._toVariables({dark:an},p):{},io=M(Lt)?this._toVariables({semantic:Lt},p):{},oo=M(dn)?this._toVariables({light:dn},p):{},ro=M(cn)?this._toVariables({dark:cn},p):{},[Ys,Zs]=[(r=hn.declarations)!=null?r:"",hn.tokens],[Xs,Js]=[(s=pn.declarations)!=null?s:"",pn.tokens||[]],[Qs,ea]=[(a=fn.declarations)!=null?a:"",fn.tokens||[]],[ta,na]=[(l=no.declarations)!=null?l:"",no.tokens||[]],[ia,oa]=[(u=io.declarations)!=null?u:"",io.tokens||[]],[ra,sa]=[(c=oo.declarations)!=null?c:"",oo.tokens||[]],[aa,la]=[(d=ro.declarations)!=null?d:"",ro.tokens||[]];f=this.transformCSS(t,Ys,"light","variable",p,n,o),y=Zs;let ua=this.transformCSS(t,`${Xs}${Qs}`,"light","variable",p,n,o),ca=this.transformCSS(t,`${ta}`,"dark","variable",p,n,o);g=`${ua}${ca}`,b=[...new Set([...Js,...ea,...na])];let da=this.transformCSS(t,`${ia}${ra}color-scheme:light`,"light","variable",p,n,o),ha=this.transformCSS(t,`${aa}color-scheme:dark`,"dark","variable",p,n,o);D=`${da}${ha}`,O=[...new Set([...oa,...sa,...la])],T=ce(h.css,{dt:ze})}return{primitive:{css:f,tokens:y},semantic:{css:g,tokens:b},global:{css:D,tokens:O},style:T}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,u;let c,d,h;if(M(i)&&e.transform!=="strict"){let p=t.replace("-directive",""),f=i,{colorScheme:y,extend:g,css:b}=f,D=He(f,["colorScheme","extend","css"]),O=g||{},{colorScheme:T}=O,q=He(O,["colorScheme"]),oe=y||{},{dark:me}=oe,Ne=He(oe,["dark"]),et=T||{},{dark:on}=et,rn=He(et,["dark"]),sn=M(D)?this._toVariables({[p]:x(x({},D),q)},e):{},Lt=M(Ne)?this._toVariables({[p]:x(x({},Ne),rn)},e):{},Pt=M(me)?this._toVariables({[p]:x(x({},me),on)},e):{},[an,ln]=[(a=sn.declarations)!=null?a:"",sn.tokens||[]],[un,cn]=[(l=Lt.declarations)!=null?l:"",Lt.tokens||[]],[dn,hn]=[(u=Pt.declarations)!=null?u:"",Pt.tokens||[]],pn=this.transformCSS(p,`${an}${un}`,"light","variable",e,o,r,s),fn=this.transformCSS(p,dn,"dark","variable",e,o,r,s);c=`${pn}${fn}`,d=[...new Set([...ln,...cn,...hn])],h=ce(b,{dt:ze})}return{css:c,tokens:d,style:h}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,c=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${ce(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(Se(c)&&Object.hasOwn(c,"css")){let d=at(c.css),h=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,h])=>c.push(`${d}="${h}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${at(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&Xt.test(this.value)){let d=this.value.trim().replace(Xt,h=>{var p;let f=h.slice(1,-1),y=this.tokens[f];if(!y)return console.warn(`Token not found for path: ${f}`),"__UNRESOLVED__";let g=y.computed(a,l,u);return Array.isArray(g)&&g.length===2?`light-dark(${g[0].value},${g[1].value})`:(p=g?.value)!=null?p:"__UNRESOLVED__"});c=Yr.test(d.replace(Zr,"0"))?`calc(${d})`:d}return Re(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let h=Ae(c,i.variable.excludedKeyRegex)?l:l?`${l}.${Wr(c)}`:Wr(c),p=u?`${u}.${c}`:c;Se(d)?s(d,h,p):(o[h]||(o[h]={paths:[],computed:(f,y={},g=[])=>{if(o[h].paths.length===1)return o[h].paths[0].computed(o[h].paths[0].scheme,y.binding,g);if(f&&f!=="none")for(let b=0;b<o[h].paths.length;b++){let D=o[h].paths[b];if(D.scheme===f)return D.computed(f,y.binding,g)}return o[h].paths.map(b=>b.computed(b.scheme,y[b.scheme],g))}}),o[h].paths.push({path:p,value:d,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!Ae(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=He(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Tt(M(i)?`${t}${i},${t} ${i}`:t,n):Tt(t,Tt(i??":root",n))},transformCSS(t,i,e,n,o={},r,s,a){if(M(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=e==="dark"?u.reduce((c,{type:d,selector:h})=>(M(h)&&(c+=h.includes("[CSS]")?h.replace("[CSS]",i):this.getSelectorRule(h,a,d,i)),c),""):Tt(a??":root",i)}if(l){let u={name:"primeui",order:"primeui"};Se(l)&&(u.name=ce(l.name,{name:t,type:n})),M(u.name)&&(i=Tt(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},w={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=It(x({},i),{options:x(x({},this.defaults.options),i.options)}),this._tokens=Fe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ge.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=It(x({},this.theme),{preset:t}),this._tokens=Fe.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ge.emit("preset:change",t),ge.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=It(x({},this.theme),{options:t}),this.clearLoadedStyleNames(),ge.emit("options:change",t),ge.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Fe.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return Fe.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Fe.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Fe.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Fe.getPreset(o)},getLayerOrderCSS(t=""){return Fe.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return Fe.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return Fe.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return Fe.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),ge.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&ge.emit("theme:load"))}};function Ep(...t){let i=Ui(w.getPreset(),...t);return w.setPreset(i),i}function wp(t){return Kl().surfacePalette(t).update().preset}var es=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var Yl=0,ts=(()=>{class t{document=m(Q);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++Yl}`,id:c=void 0,media:d=void 0,nonce:h=void 0,first:p=!1,props:f={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=e;let y=this.document.head;Pr(s,"nonce",h),p&&y.firstChild?y.insertBefore(s,y.firstChild):y.appendChild(s),Un(s,{type:"text/css",media:d,nonce:h,"data-primeng-style-id":u})}return s.textContent!==r&&(s.textContent=r),{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ot={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Zl=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,G=(()=>{class t{name="base";useStyle=m(ts);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(Mt`${ce(e,{dt:ze})}`);return r?this.useStyle.use(at(r),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>w.transformCSS(e.name||this.name,`${o}${Mt`${n}`}`));loadGlobalCSS=(e={})=>this.load(Zl,e);loadGlobalTheme=(e={},n="")=>this.load(es,e,(o="")=>w.transformCSS(e.name||this.name,`${o}${Mt`${n}`}`));getCommonTheme=e=>w.getCommon(this.name,e);getComponentTheme=e=>w.getComponent(this.name,e);getDirectiveTheme=e=>w.getDirective(this.name,e);getPresetTheme=(e,n,o)=>w.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>w.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=ce(this.css,{dt:ze}),r=at(Mt`${o}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>w.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[w.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Mt`${ce(this.theme,{dt:ze})}`,a=at(w.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xl=(()=>{class t{theme=ee(void 0);csp=ee({nonce:void 0});isThemeChanged=!1;document=m(Q);baseStyle=m(G);constructor(){Bt(()=>{ge.on("theme:change",e=>{Te(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Bt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){w.clearLoadedStyleNames(),ge.clear()}onThemeChange(e){w.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,C({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},s),r),w.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ki=(()=>{class t extends Xl{ripple=ee(!1);platformId=m(ut);inputStyle=ee(null);inputVariant=ee(null);overlayAppendTo=ee("self");overlayOptions={};csp=ee({nonce:void 0});filterMatchModeOptions={text:[Z.STARTS_WITH,Z.CONTAINS,Z.NOT_CONTAINS,Z.ENDS_WITH,Z.EQUALS,Z.NOT_EQUALS],numeric:[Z.EQUALS,Z.NOT_EQUALS,Z.LESS_THAN,Z.LESS_THAN_OR_EQUAL_TO,Z.GREATER_THAN,Z.GREATER_THAN_OR_EQUAL_TO],date:[Z.DATE_IS,Z.DATE_IS_NOT,Z.DATE_BEFORE,Z.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new re;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:d,zIndex:h}=e||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),h&&(this.zIndex=h),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jl=new P("PRIME_NG_CONFIG");function Kp(...t){let i=t?.map(n=>({provide:Jl,useValue:n,multi:!1})),e=Do(()=>{let n=m(Ki);t?.forEach(o=>n.setConfig(o))});return bn([...i,e])}var cs=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(S(Le),S(_e))};static \u0275dir=A({type:t})}return t})(),ds=(()=>{class t extends cs{static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,features:[F]})}return t})(),lt=new P("");var Ql={provide:lt,useExisting:xe(()=>hs),multi:!0};function eu(){let t=rt()?rt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var tu=new P(""),hs=(()=>{class t extends cs{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!eu())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(S(Le),S(_e),S(tu,8))};static \u0275dir=A({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&Pe("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[N([Ql]),F]})}return t})();function nu(t){return t==null||iu(t)===0}function iu(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var ps=new P(""),ou=new P("");function ru(t){return nu(t.value)?{required:!0}:null}function ns(t){return null}function fs(t){return t!=null}function gs(t){return si(t)?so(t):t}function ms(t){let i={};return t.forEach(e=>{i=e!=null?C(C({},i),e):i}),Object.keys(i).length===0?null:i}function bs(t,i){return i.map(e=>e(t))}function su(t){return!t.validate}function ys(t){return t.map(i=>su(i)?i:e=>i.validate(e))}function au(t){if(!t)return null;let i=t.filter(fs);return i.length==0?null:function(e){return ms(bs(e,i))}}function vs(t){return t!=null?au(ys(t)):null}function lu(t){if(!t)return null;let i=t.filter(fs);return i.length==0?null:function(e){let n=bs(e,i).map(gs);return ao(n).pipe(tt(ms))}}function Ds(t){return t!=null?lu(ys(t)):null}function is(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function uu(t){return t._rawValidators}function cu(t){return t._rawAsyncValidators}function qi(t){return t?Array.isArray(t)?t:[t]:[]}function Yn(t,i){return Array.isArray(t)?t.includes(i):t===i}function os(t,i){let e=qi(i);return qi(t).forEach(o=>{Yn(e,o)||e.push(o)}),e}function rs(t,i){return qi(i).filter(e=>!Yn(t,e))}var Zn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=vs(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ds(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Yi=class extends Zn{name;get formDirective(){return null}get path(){return null}},nn=class extends Zn{_parent=null;name=null;valueAccessor=null},Zi=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},du={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ff=de(C({},du),{"[class.ng-submitted]":"isSubmitted"}),_s=(()=>{class t extends Zi{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(S(nn,2))};static \u0275dir=A({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&pt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[F]})}return t})();var Jt="VALID",qn="INVALID",Rt="PENDING",Qt="DISABLED",xt=class{},Xn=class extends xt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},en=class extends xt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},tn=class extends xt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Nt=class extends xt{status;source;constructor(i,e){super(),this.status=i,this.source=e}};function hu(t){return(Jn(t)?t.validators:t)||null}function pu(t){return Array.isArray(t)?vs(t):t||null}function fu(t,i){return(Jn(i)?i.asyncValidators:t)||null}function gu(t){return Array.isArray(t)?Ds(t):t||null}function Jn(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Xi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Te(this.statusReactive)}set status(i){Te(()=>this.statusReactive.set(i))}_status=Ce(()=>this.statusReactive());statusReactive=ee(void 0);get valid(){return this.status===Jt}get invalid(){return this.status===qn}get pending(){return this.status==Rt}get disabled(){return this.status===Qt}get enabled(){return this.status!==Qt}errors;get pristine(){return Te(this.pristineReactive)}set pristine(i){Te(()=>this.pristineReactive.set(i))}_pristine=Ce(()=>this.pristineReactive());pristineReactive=ee(!0);get dirty(){return!this.pristine}get touched(){return Te(this.touchedReactive)}set touched(i){Te(()=>this.touchedReactive.set(i))}_touched=Ce(()=>this.touchedReactive());touchedReactive=ee(!1);get untouched(){return!this.touched}_events=new re;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(os(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(os(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(rs(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(rs(i,this._rawAsyncValidators))}hasValidator(i){return Yn(this._rawValidators,i)}hasAsyncValidator(i){return Yn(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(de(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new tn(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new tn(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(de(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new en(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new en(!0,n))}markAsPending(i={}){this.status=Rt;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Nt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(de(C({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Qt,this.errors=null,this._forEachChild(o=>{o.disable(de(C({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Xn(this.value,n)),this._events.next(new Nt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(de(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Jt,this._forEachChild(n=>{n.enable(de(C({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(de(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Jt||this.status===Rt)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Xn(this.value,e)),this._events.next(new Nt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(de(C({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Qt:Jt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Rt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=gs(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Nt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new pe,this.statusChanges=new pe}_calculateStatus(){return this._allControlsDisabled()?Qt:this.errors?qn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Rt)?Rt:this._anyControlsHaveStatus(qn)?qn:Jt}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new en(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new tn(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Jn(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=pu(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=gu(this._rawAsyncValidators)}};var Cs=new P("",{providedIn:"root",factory:()=>Ji}),Ji="always";function mu(t,i){return[...i.path,t]}function bu(t,i,e=Ji){vu(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Du(t,i),Cu(t,i),_u(t,i),yu(t,i)}function ss(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function yu(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function vu(t,i){let e=uu(t);i.validator!==null?t.setValidators(is(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=cu(t);i.asyncValidator!==null?t.setAsyncValidators(is(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();ss(i._rawValidators,o),ss(i._rawAsyncValidators,o)}function Du(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Es(t,i)})}function _u(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Es(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Es(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Cu(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Eu(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function wu(t){return Object.getPrototypeOf(t.constructor)===ds}function Su(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===hs?e=r:wu(r)?n=r:o=r}),o||n||e||null}function as(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function ls(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Au=class extends Xi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(hu(e),fu(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Jn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ls(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){as(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){as(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){ls(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Fu={provide:nn,useExisting:xe(()=>Qi)},us=Promise.resolve(),Qi=(()=>{class t extends nn{_changeDetectorRef;callSetDisabledState;control=new Au;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new pe;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Su(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Eu(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){bu(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){us.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&E(n);us.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?mu(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(S(Yi,9),S(ps,10),S(ou,10),S(lt,10),S(bt,8),S(Cs,8))};static \u0275dir=A({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[N([Fu]),F,Ge]})}return t})();var Tu={provide:lt,useExisting:xe(()=>Iu),multi:!0},Iu=(()=>{class t extends ds{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&Pe("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[N([Tu]),F]})}return t})();var Mu=(()=>{class t{_validator=ns;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ns,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,features:[Ge]})}return t})();var Ou={provide:ps,useExisting:xe(()=>Ru),multi:!0};var Ru=(()=>{class t extends Mu{required;inputName="required";normalizeInput=E;createValidator=e=>ru;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&te("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[N([Ou]),F]})}return t})();var Nu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({})}return t})();var ws=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Cs,useValue:e.callSetDisabledState??Ji}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({imports:[Nu]})}return t})();var Ss=(()=>{class t extends G{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),X=(()=>{class t{document=m(Q);platformId=m(ut);el=m(_e);injector=m(vn);cd=m(bt);renderer=m(Le);config=m(Ki);baseComponentStyle=m(Ss);baseStyle=m(G);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Zt("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return zn(e,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!cr(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>ge.off("theme:change",e))}_loadStyles(){let e=()=>{Ot.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Ot.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Ot.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ot.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,C({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,C({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},this.styleOptions),r),w.setLoadedStyleName("common")}if(!w.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,C({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(C({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),w.setLoadedStyleName(this.componentStyle?.name)}if(!w.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,C({name:"layer-order",first:!0},this.styleOptions)),w.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,C({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Ot.clearLoadedStyleNames(),ge.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return wt(this._getOptionValue(this.$style?.classes,e,C({instance:this},n)))}sx(e="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,C({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=wt;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,inputs:{dt:"dt"},features:[N([Ss,G]),Ge]})}return t})();var As=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Lu=`
    ${As}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Pu={root:"p-ink"},Fs=(()=>{class t extends G{name="ripple";theme=Lu;classes=Pu;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Qn=(()=>{class t extends X{zone=m(Dn);_componentStyle=m(Fs);animationListener;mouseDownListener;timeout;constructor(){super(),Bt(()=>{Ln(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(qe(n,"p-ink-active"),!Vi(n)&&!$i(n)){let a=Math.max(ki(this.el.nativeElement),Hn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=Bi(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-$i(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Vi(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Ue(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&qe(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&qe(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),qe(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Lr(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[N([Fs]),F]})}return t})(),Vf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({})}return t})();var Ts=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var Is=(()=>{class t extends X{modelValue=ee(void 0);$filled=Ce(()=>M(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,features:[F]})}return t})();var ei=(()=>{class t extends Is{required=H(void 0,{transform:E});invalid=H(void 0,{transform:E});disabled=H(void 0,{transform:E});name=H();_disabled=ee(!1);$disabled=Ce(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[F]})}return t})();var Vu=["icon"],Bu=["content"],Os=t=>({$implicit:t});function $u(t,i){t&1&&it(0)}function ju(t,i){if(t&1&&nt(0,"span"),t&2){let e=U(3);W(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),te("data-pc-section","icon")}}function Uu(t,i){if(t&1&&dt(0,ju,1,3,"span",1),t&2){let e=U(2);ht(e.onIcon||e.offIcon?0:-1)}}function Hu(t,i){t&1&&it(0)}function zu(t,i){if(t&1&&he(0,Hu,1,0,"ng-container",0),t&2){let e=U(2);k("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",mt(2,Os,e.checked))}}function Gu(t,i){if(t&1&&(dt(0,Uu,1,1)(1,zu,1,4,"ng-container"),We(2,"span"),ft(3),Ke()),t&2){let e=U();ht(e.iconTemplate?1:0),B(2),W(e.cx("label")),te("data-pc-section","label"),B(),gt(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Wu=`
    ${Ts}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Ku={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Ms=(()=>{class t extends G{name="togglebutton";theme=Wu;classes=Ku;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var qu={provide:lt,useExisting:xe(()=>ti),multi:!0},ti=(()=>{class t extends ei{onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=H(void 0,{transform:E});onChange=new pe;iconTemplate;contentTemplate;templates;checked=!1;_componentStyle=m(Ms);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(be(r,Vu,4),be(r,Bu,4),be(r,Ft,4)),n&2){let s;ye(s=ve())&&(o.iconTemplate=s.first),ye(s=ve())&&(o.contentTemplate=s.first),ye(s=ve())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&1&&Pe("keydown",function(s){return o.onKeyDown(s)})("click",function(s){return o.toggle(s)}),n&2&&(te("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("role","button")("tabindex",o.$disabled()?-1:0),W(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",ot],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",E],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[N([qu,Ms]),vo([Qn]),F],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(n,o){n&1&&(We(0,"span"),he(1,$u,1,0,"ng-container",0),dt(2,Gu,4,5),Ke()),n&2&&(W(o.cx("content")),B(),k("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",mt(5,Os,o.checked)),B(),ht(o.contentTemplate?-1:2))},dependencies:[ue,st,ie],encapsulation:2,changeDetection:0})}return t})(),dg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({imports:[ti,ie,ie]})}return t})();var Rs=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Yu=["item"],Zu=(t,i)=>({$implicit:t,index:i});function Xu(t,i){return this.getOptionLabel(i)}function Ju(t,i){t&1&&it(0)}function Qu(t,i){if(t&1&&he(0,Ju,1,0,"ng-container",3),t&2){let e=U(2),n=e.$implicit,o=e.$index,r=U();k("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Fo(2,Zu,n,o))}}function ec(t,i){t&1&&he(0,Qu,1,5,"ng-template",null,0,To)}function tc(t,i){if(t&1){let e=Eo();We(0,"p-togglebutton",2),Pe("onChange",function(o){let r=go(e),s=r.$implicit,a=r.$index,l=U();return mo(l.onOptionSelect(o,s,a))}),dt(1,ec,2,0),Ke()}if(t&2){let e=i.$implicit,n=U();k("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid()),B(),ht(n.itemTemplate||n._itemTemplate?1:-1)}}var nc=`
    ${Rs}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,ic={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},Ns=(()=>{class t extends G{name="selectbutton";theme=nc;classes=ic;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var oc={provide:lt,useExisting:xe(()=>xs),multi:!0},xs=(()=>{class t extends ei{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=H();fluid=H(void 0,{transform:E});onOptionClick=new pe;onChange=new pe;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=m(Ns);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?Ye(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Ye(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?Ye(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!Ze(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:o})}changeTabIndexes(e,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!Ze(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Ze(r,o,this.dataKey)){n=!0;break}}}else n=Ze(this.getOptionValue(e),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(be(r,Yu,4),be(r,Ft,4)),n&2){let s;ye(s=ve())&&(o.itemTemplate=s.first),ye(s=ve())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&2&&(te("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),W(o.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",E],tabindex:[2,"tabindex","tabindex",ot],multiple:[2,"multiple","multiple",E],allowEmpty:[2,"allowEmpty","allowEmpty",E],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",E],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[N([oc,Ns]),F],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&_o(0,tc,2,10,"p-togglebutton",1,Xu,!0),n&2&&Co(o.options)},dependencies:[ti,ws,_s,Qi,ue,st,ie],encapsulation:2,changeDetection:0})}return t})(),Rg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({imports:[xs,ie,ie]})}return t})();var Ls=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var rc=`
    ${Ls}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,sc={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":M(t.value())&&String(t.value()).length===1,"p-badge-dot":Re(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},Ps=(()=>{class t extends G{name="badge";theme=rc;classes=sc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var eo=(()=>{class t extends X{styleClass=H();badgeSize=H();size=H();severity=H();value=H();badgeDisabled=H(!1,{transform:E});_componentStyle=m(Ps);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(W(o.cn(o.cx("root"),o.styleClass())),Ao("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[N([Ps]),F],decls:1,vars:1,template:function(n,o){n&1&&ft(0),n&2&&gt(o.value())},dependencies:[ue,ie],encapsulation:2,changeDetection:0})}return t})(),ks=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({imports:[eo,ie,ie]})}return t})();var Vs=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var lc=["*"],uc={root:"p-fluid"},Bs=(()=>{class t extends G{name="fluid";classes=uc;theme=Vs;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ni=(()=>{class t extends X{_componentStyle=m(Bs);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&W(o.cx("root"))},features:[N([Bs]),F],ngContentSelectors:lc,decls:1,vars:0,template:function(n,o){n&1&&(ke(),Ve(0))},dependencies:[ue],encapsulation:2,changeDetection:0})}return t})(),sm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({imports:[ni]})}return t})();var to=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=O=>{if(O)return getComputedStyle(O).getPropertyValue("position")==="relative"?O:r(O.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},f,y,g="top";l.top+a+s.height>d.height?(f=l.top-p.top-s.height,g="bottom",l.top+f<0&&(f=-1*l.top)):(f=a+l.top-p.top,g="top");let b=l.left+s.width-d.width,D=l.left-p.left;if(s.width>d.width?y=(l.left-p.left)*-1:b>0?y=D-b:y=l.left-p.left,e.style.top=f+"px",e.style.left=y+"px",e.style.transformOrigin=g,o){let O=Yt(/-anchor-gutter$/)?.value;e.style.marginTop=g==="bottom"?`calc(${O??"2px"} * -1)`:O??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),f,y;c.top+l+s>p.height?(f=c.top+d-s,e.style.transformOrigin="bottom",f<0&&(f=d)):(f=l+c.top+d,e.style.transformOrigin="top"),c.left+a>p.width?y=Math.max(0,c.left+h+u-a):y=c.left+h,e.style.top=f+"px",e.style.left=y+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(n);c<0?e.scrollTop=d+c:c+p>h&&(e.scrollTop=d+c-h+p)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?o(r,u):Object.entries(u).map(([h,p])=>r==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function dm(){Tr({variableName:Wi("scrollbar.width").name})}function hm(){Ir({variableName:Wi("scrollbar.width").name})}var $s=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=to.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var js=(()=>{class t extends X{autofocus=!1;focused=!1;platformId=m(ut);document=m(Q);host=m(_e);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ln(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=to.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[F]})}return t})(),_m=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({})}return t})();var cc=["*"],dc=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Us=(()=>{class t extends G{name="baseicon";css=dc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hs=(()=>{class t extends X{spin=!1;_componentStyle=m(Us);getClassNames(){return wt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=Y({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&W(o.getClassNames())},inputs:{spin:[2,"spin","spin",E]},features:[N([Us]),F],ngContentSelectors:cc,decls:1,vars:0,template:function(n,o){n&1&&(ke(),Ve(0))},encapsulation:2,changeDetection:0})}return t})();var hc=["data-p-icon","spinner"],zs=(()=>{class t extends Hs{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Zt()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=Y({type:t,selectors:[["","data-p-icon","spinner"]],features:[F],attrs:hc,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(yn(),ai(0,"g"),ui(1,"path",0),li(),ai(2,"defs")(3,"clipPath",1),ui(4,"rect",2),li()()),n&2&&(te("clip-path",o.pathId),B(3),wo("id",o.pathId))},encapsulation:2})}return t})();var Gs=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var pc=["content"],fc=["loadingicon"],gc=["icon"],mc=["*"],qs=t=>({class:t});function bc(t,i){t&1&&it(0)}function yc(t,i){if(t&1&&nt(0,"span"),t&2){let e=U(3);W(e.cx("loadingIcon")),te("aria-hidden",!0)("data-pc-section","loadingicon")}}function vc(t,i){if(t&1&&(yn(),nt(0,"svg",7)),t&2){let e=U(3);W(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),k("spin",!0),te("aria-hidden",!0)("data-pc-section","loadingicon")}}function Dc(t,i){if(t&1&&(_n(0),he(1,yc,1,4,"span",3)(2,vc,1,5,"svg",6),Cn()),t&2){let e=U(2);B(),k("ngIf",e.loadingIcon),B(),k("ngIf",!e.loadingIcon)}}function _c(t,i){}function Cc(t,i){if(t&1&&he(0,_c,0,0,"ng-template",8),t&2){let e=U(2);k("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Ec(t,i){if(t&1&&(_n(0),he(1,Dc,3,2,"ng-container",2)(2,Cc,1,1,null,5),Cn()),t&2){let e=U();B(),k("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),B(),k("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",mt(3,qs,e.cx("loadingIcon")))}}function wc(t,i){if(t&1&&nt(0,"span"),t&2){let e=U(2);W(e.cx("icon")),te("data-pc-section","icon")}}function Sc(t,i){}function Ac(t,i){if(t&1&&he(0,Sc,0,0,"ng-template",8),t&2){let e=U(2);k("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Fc(t,i){if(t&1&&(_n(0),he(1,wc,1,3,"span",3)(2,Ac,1,1,null,5),Cn()),t&2){let e=U();B(),k("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),B(),k("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",mt(3,qs,e.cx("icon")))}}function Tc(t,i){if(t&1&&(We(0,"span"),ft(1),Ke()),t&2){let e=U();W(e.cx("label")),te("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),B(),gt(e.label)}}function Ic(t,i){if(t&1&&nt(0,"p-badge",9),t&2){let e=U();k("value",e.badge)("severity",e.badgeSeverity)}}var Mc={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Qe=(()=>{class t extends G{name="button";theme=Gs;classes=Mc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Je={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Ws=(()=>{class t extends X{_componentStyle=m(Qe);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&pt("p-button-label",!0)},features:[N([Qe]),F]})}return t})(),Ks=(()=>{class t extends X{_componentStyle=m(Qe);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&pt("p-button-icon",!0)},features:[N([Qe]),F]})}return t})(),rb=(()=>{class t extends X{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=hi(Ks);labelSignal=hi(Ws);isIconOnly=Ce(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=H(void 0,{transform:E});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Je);pcFluid=m(ni,{optional:!0,host:!0,skipSelf:!0});isTextButton=Ce(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=m(Qe);ngAfterViewInit(){super.ngAfterViewInit(),Ue(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let e=[Je.button,Je.component];return this.icon&&!this.label&&Re(this.htmlElement.textContent)&&e.push(Je.iconOnly),this.loading&&(e.push(Je.disabled,Je.loading),!this.icon&&this.label&&e.push(Je.labelOnly),this.icon&&!this.label&&!Re(this.htmlElement.textContent)&&e.push(Je.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!At(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!At(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Ue(n,o);let r=this.getIconClass();r&&Ue(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=At(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=At(this.htmlElement,".p-button-icon"),n=At(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(ci(r,o.iconSignal,Ks,5),ci(r,o.labelSignal,Ws,5)),n&2&&So(2)},hostVars:4,hostBindings:function(n,o){n&2&&pt("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",E],rounded:[2,"rounded","rounded",E],text:[2,"text","text",E],outlined:[2,"outlined","outlined",E],size:"size",plain:[2,"plain","plain",E],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[N([Qe]),F]})}return t})(),Oc=(()=>{class t extends X{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=H(void 0,{transform:E});onClick=new pe;onFocus=new pe;onBlur=new pe;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=m(ni,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=m(Qe);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(be(r,pc,5),be(r,fc,5),be(r,gc,5),be(r,Ft,4)),n&2){let s;ye(s=ve())&&(o.contentTemplate=s.first),ye(s=ve())&&(o.loadingIconTemplate=s.first),ye(s=ve())&&(o.iconTemplate=s.first),ye(s=ve())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",E],loading:[2,"loading","loading",E],loadingIcon:"loadingIcon",raised:[2,"raised","raised",E],rounded:[2,"rounded","rounded",E],text:[2,"text","text",E],plain:[2,"plain","plain",E],severity:"severity",outlined:[2,"outlined","outlined",E],link:[2,"link","link",E],tabindex:[2,"tabindex","tabindex",ot],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",E],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[N([Qe]),F],ngContentSelectors:mc,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(ke(),We(0,"button",0),Pe("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Ve(1),he(2,bc,1,0,"ng-container",1)(3,Ec,3,5,"ng-container",2)(4,Fc,3,5,"ng-container",2)(5,Tc,2,5,"span",3)(6,Ic,1,2,"p-badge",4),Ke()),n&2&&(W(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),k("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),te("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),B(2),k("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),B(),k("ngIf",o.loading),B(),k("ngIf",!o.loading),B(),k("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),B(),k("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ue,Ci,st,Ei,Qn,js,zs,ks,eo,ie],encapsulation:2,changeDetection:0})}return t})(),sb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=V({imports:[ue,Oc,ie,ie]})}return t})();export{rt as a,pa as b,pi as c,fa as d,yt as e,Po as f,ko as g,ya as h,ja as i,sr as j,Ci as k,ar as l,Ua as m,Ei as n,st as o,Ha as p,Ga as q,Wa as r,Ya as s,ue as t,wi as u,Gt as v,Ja as w,Ln as x,Ud as y,je as z,Dr as A,_l as B,Cl as C,wt as D,Fr as E,Ue as F,qe as G,Pi as H,wl as I,Sl as J,Al as K,Sh as L,Or as M,ki as N,Ah as O,St as P,Tl as Q,Fh as R,Th as S,Ar as T,Ih as U,Mh as V,Oh as W,Il as X,At as Y,Rh as Z,Nh as _,xr as $,xh as aa,Vi as ba,Ml as ca,Ol as da,Lh as ea,Ph as fa,Bi as ga,Hn as ha,kh as ia,$i as ja,Vh as ka,Bh as la,$h as ma,jh as na,Uh as oa,Hh as pa,zh as qa,Pr as ra,Re as sa,Pl as ta,jr as ua,M as va,Ye as wa,Ze as xa,Kh as ya,qh as za,Yh as Aa,Zh as Ba,ce as Ca,kl as Da,Xh as Ea,Jh as Fa,fe as Ga,Qh as Ha,Zt as Ia,Vl as Ja,rp as Ka,Z as La,sp as Ma,ap as Na,lp as Oa,up as Pa,cp as Qa,dp as Ra,Ft as Sa,ie as Ta,hp as Ua,pp as Va,Wi as Wa,Kl as Xa,Ep as Ya,wp as Za,G as _a,Ki as $a,Kp as ab,lt as bb,hs as cb,nn as db,_s as eb,Qi as fb,Iu as gb,Ru as hb,ws as ib,X as jb,Is as kb,ei as lb,Qn as mb,Vf as nb,ti as ob,dg as pb,xs as qb,Rg as rb,to as sb,dm as tb,hm as ub,$s as vb,js as wb,_m as xb,eo as yb,ks as zb,Vs as Ab,ni as Bb,sm as Cb,Hs as Db,zs as Eb,Ks as Fb,rb as Gb,Oc as Hb,sb as Ib};
