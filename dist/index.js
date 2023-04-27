/*! For license information please see index.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("effector"),require("antd"),require("@ant-design/icons"),require("react-router-dom"),require("history"));else if("function"==typeof define&&define.amd)define(["react","effector","antd","@ant-design/icons","react-router-dom","history"],t);else{var n="object"==typeof exports?t(require("react"),require("effector"),require("antd"),require("@ant-design/icons"),require("react-router-dom"),require("history")):t(e.react,e.effector,e.antd,e["@ant-design/icons"],e["react-router-dom"],e.history);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(function(e,t,n,r,o,s){return function(){var a={112:function(e,t,n){"use strict";var r=n(81),o=n.n(r),s=n(645),a=n.n(s)()(o());a.push([e.id,'.styles__table-viewer--EXxkN4O td, .styles__table-viewer--EXxkN4O th {\n    font-size: 14px !important;\n  }\n  .styles__table-viewer--EXxkN4O th {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n  }\n  .styles__table-viewer--EXxkN4O .ant-table-header {\n    border-radius: 0 !important;\n  }\n  .styles__table-viewer--EXxkN4O .ant-table-thead .ant-table-cell {\n    background-color: #4c4c5c;\n    color: white;\n    border-start-start-radius: 0 !important;\n    border-start-end-radius: 0 !important;\n    border-radius: 0 !important;\n  }\n  .styles__table-viewer--EXxkN4O .ant-table-thead .ant-table-cell:hover, .styles__table-viewer--EXxkN4O th.ant-table-column-sort {\n    background-color: #6a6a6a !important;\n  }\n  .styles__table-viewer--EXxkN4O .ant-table-column-sorter-down.active, .styles__table-viewer--EXxkN4O .ant-table-column-sorter-up.active {\n    color: #00a85d !important;\n  }\n  .styles__table-viewer--EXxkN4O .ant-table-footer {\n    background-color: #00a85d;\n    color: white;\n  }\n  .styles__table-viewer--EXxkN4O .ant-table-title {\n    background-color: #00a85d;\n    border-radius: 8 8 0 0 !important;\n  }\n\n.styles__table-viewer-row--TFrf3Ha > td {\n    padding: 8px 12px 8px 12px !important;\n  }\n\n.styles__table-viewer-row--TFrf3Ha > td:not(.ant-table-selection-column) ~ td::before {\n      content: "";\n      position: absolute;\n      top: 25%;\n      left: 0;\n      height: 50%;\n      width: 1px;\n      background-color: rgba(0, 0, 0, 0.06);\n      color: rgba(0, 0, 0, 0.06) !important;\n    }\n',""]),a.locals={"table-viewer":"styles__table-viewer--EXxkN4O","table-viewer-row":"styles__table-viewer-row--TFrf3Ha"},t.Z=a},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:function(e){"use strict";e.exports=function(e){return e[1]}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",r="second",o="minute",s="hour",a="day",i="week",c="month",u="quarter",l="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},g={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),s=n-o<0,a=t.clone().add(r+(s?-1:1),c);return+(-(r+(n-o)/(s?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:l,w:i,d:a,D:d,h:s,m:o,s:r,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=m;var E=function(e){return e instanceof w},x=function e(t,n,r){var o;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();b[s]&&(o=s),n&&(b[s]=n,o=s);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var i=t.name;b[i]=t,o=i}return!r&&o&&(y=o),o||!r&&y},S=function(e,t){if(E(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},$=g;$.l=x,$.i=E,$.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return $},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return S(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<S(e)},v.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,u=!!$.u(t)||t,f=$.p(e),p=function(e,t){var r=$.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?r:r.endOf(a)},h=function(e,t){return $.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case l:return u?p(1,0):p(31,11);case c:return u?p(1,v):p(0,v+1);case i:var b=this.$locale().weekStart||0,E=(m<b?m+7:m)-b;return p(u?g-E:g+(6-E),v);case a:case d:return h(y+"Hours",0);case s:return h(y+"Minutes",1);case o:return h(y+"Seconds",2);case r:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var i,u=$.p(e),f="set"+(this.$u?"UTC":""),p=(i={},i[a]=f+"Date",i[d]=f+"Date",i[c]=f+"Month",i[l]=f+"FullYear",i[s]=f+"Hours",i[o]=f+"Minutes",i[r]=f+"Seconds",i[n]=f+"Milliseconds",i)[u],h=u===a?this.$D+(t-this.$W):t;if(u===c||u===l){var m=this.clone().set(d,1);m.$d[p](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[$.p(e)]()},v.add=function(n,u){var d,f=this;n=Number(n);var p=$.p(u),h=function(e){var t=S(f);return $.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===l)return this.set(l,this.$y+n);if(p===a)return h(1);if(p===i)return h(7);var m=(d={},d[o]=e,d[s]=t,d[r]=1e3,d)[p]||1,v=this.$d.getTime()+n*m;return $.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=$.z(this),s=this.$H,a=this.$m,i=this.$M,c=n.weekdays,u=n.months,l=function(e,n,o,s){return e&&(e[n]||e(t,r))||o[n].slice(0,s)},d=function(e){return $.s(s%12||12,e,"0")},p=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:$.s(i+1,2,"0"),MMM:l(n.monthsShort,i,u,3),MMMM:l(u,i),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:$.s(s,2,"0"),h:d(1),hh:d(2),a:p(s,a,!0),A:p(s,a,!1),m:String(a),mm:$.s(a,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:o};return r.replace(h,(function(e,t){return t||m[e]||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var p,h=$.p(d),m=S(n),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,y=$.m(this,m);return y=(p={},p[l]=y/12,p[c]=y,p[u]=y/3,p[i]=(g-v)/6048e5,p[a]=(g-v)/864e5,p[s]=g/t,p[o]=g/e,p[r]=g/1e3,p)[h]||g,f?y:$.a(y)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return b[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return $.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),O=w.prototype;return S.prototype=O,[["$ms",n],["$s",r],["$m",o],["$H",s],["$W",a],["$M",c],["$y",l],["$D",d]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,w,S),e.$i=!0),S},S.locale=x,S.isDayjs=E,S.unix=function(e){return S(1e3*e)},S.en=b[y],S.Ls=b,S.p={},S}()},251:function(e,t,n){"use strict";var r=n(156),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},893:function(e,t,n){"use strict";e.exports=n(251)},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],u=r.base?c[0]+r.base:c[0],l=s[u]||0,d="".concat(u," ").concat(l);s[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var c=r(e,o),u=0;u<s.length;u++){var l=n(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},482:function(e){"use strict";e.exports=r},721:function(e){"use strict";e.exports=n},868:function(e){"use strict";e.exports=t},428:function(e){"use strict";e.exports=s},156:function(t){"use strict";t.exports=e},128:function(e){"use strict";e.exports=o}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,exports:{}};return a[e].call(n.exports,n,n.exports,c),n.exports}c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nc=void 0;var u={};return function(){"use strict";c.r(u),c.d(u,{ETableTypes:function(){return Y},EToolbarActions:function(){return ge},PageContainer:function(){return Ee},TableViewer:function(){return be},getColumns:function(){return H}});var e=c(893),t=c(156),n=c(868);const r=(0,n.createEvent)(),o=(0,n.createEvent)(),s=(0,n.createStore)(null);(0,n.sample)({clock:r,target:s}),s.on(o,(()=>null));const a=(0,n.createStore)(50),i=(0,n.createEvent)();(0,n.sample)({clock:i,target:a});const l=(0,n.createStore)([]),d=(0,n.createStore)(null),f=(0,n.createEvent)(),p=(0,n.createEvent)(),h=(0,n.createEvent)(),m=(0,n.createEvent)(),v=(0,n.createEffect)();(0,n.sample)({clock:p,source:[l,d],fn:([e,t],n)=>e.filter((e=>e[t]!==n)),target:l}),(0,n.sample)({clock:p,target:o}),(0,n.sample)({clock:h,target:d}),(0,n.sample)({clock:[m,f],target:[v]}),(0,n.sample)({source:v.doneData,fn:e=>e,target:l});var g=c(721);const y=()=>({showSizeChanger:!0,pageSizeOptions:["20","50","100","200"],onShowSizeChange:(e,t)=>i(t),showTotal:(e,t)=>`${t[0]}-${t[1]} из ${e} записей`});var b=c(379),E=c.n(b),x=c(795),S=c.n(x),$=c(569),w=c.n($),O=c(565),_=c.n(O),j=c(216),D=c.n(j),k=c(589),T=c.n(k),M=c(112),N={};N.styleTagTransform=T(),N.setAttributes=_(),N.insert=w().bind(null,"head"),N.domAPI=S(),N.insertStyleElement=D(),E()(M.Z,N);var C=M.Z&&M.Z.locals?M.Z.locals:void 0;const L=n=>{const r=(0,t.useStore)(a),o=y();return(0,e.jsx)(g.Table,{bordered:!0,className:C["table-viewer"],columns:n.columns,pagination:Object.assign({pageSize:r},o),size:"small",dataSource:n.items,showSorterTooltip:!1,sticky:!0,locale:{emptyText:"Нет данных"},loading:n.loading})},A=n=>{const o=(0,t.useEvent)(r),s={onChange:(e,t)=>{o(t[0])}},i=(0,t.useStore)(a),c=y();return(0,e.jsx)(g.Table,{bordered:!0,className:C["table-viewer"],columns:n.columns,size:"small",dataSource:n.items,pagination:Object.assign({pageSize:i},c),showSorterTooltip:!1,sticky:!0,locale:{emptyText:"Нет данных"},loading:n.loading,rowSelection:Object.assign({type:"radio"},s)})};var R=c(482);const I=n=>{const o=(0,t.useEvent)(r),s={onChange:(e,t)=>{o(t[0])}},i=(0,t.useStore)(a),c=y();return(0,e.jsx)(g.Table,{bordered:!0,className:C["table-viewer"],columns:n.columns,size:"small",sticky:!0,pagination:Object.assign({pageSize:i},c),dataSource:n.items,locale:{emptyText:"Нет данных"},showSorterTooltip:!1,loading:n.loading,expandable:{childrenColumnName:"childrens",expandIcon:({expanded:t,onExpand:n,record:r})=>r.childrens&&0!==r.childrens.length?t?(0,e.jsx)("div",Object.assign({className:"inline-block mr-4 cursor-pointer",onClick:e=>n(r,e)},{children:(0,e.jsx)(R.MinusCircleOutlined,{})})):(0,e.jsx)("div",Object.assign({className:"inline-block mr-4 cursor-pointer",onClick:e=>n(r,e)},{children:(0,e.jsx)(R.PlusCircleOutlined,{})})):(0,e.jsx)(g.Space,{})},rowSelection:Object.assign({type:"radio"},s)})},H=e=>e;function z(){return`${Date.now().toString(16)}${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}${Math.random().toString(36).substring(2,8)}`}c(484);const F=e=>(e.childrens&&(e.childrens=e.childrens.map((e=>F(Object.assign({key:e.uid||z()},e))))),Object.assign({key:z()},e)),P=(0,n.createStore)(null),q=(0,n.createEvent)();var Y;(0,n.sample)({clock:[l],source:l,fn:e=>e.map((e=>F(e))),target:P}),(0,n.sample)({clock:q,target:P}),function(e){e[e.GENERAL=0]="GENERAL",e[e.SELECTABLE=1]="SELECTABLE",e[e.NESTED=2]="NESTED"}(Y||(Y={}));var U=n=>{const r=(0,t.useStore)(P),o=(0,t.useStore)(v.pending);return(0,e.jsxs)(e.Fragment,{children:[n.type===Y.GENERAL&&(0,e.jsx)(L,{items:r,loading:o,columns:(s=n.columns,s.map((e=>(e.sorter=(t,n)=>{const r=e.dataIndex,o=t[r],s=n[r];return o&&s?"string"==typeof o&&"string"==typeof s?o<s?-1:o>s?1:0:"number"==typeof o&&"number"==typeof s?o-s:void 0:0},e))),s)}),n.type===Y.SELECTABLE&&(0,e.jsx)(A,{items:r,loading:o,columns:n.columns}),n.type===Y.NESTED&&(0,e.jsx)(I,{items:r,loading:o,columns:n.columns})]});var s};const W=t=>(0,e.jsx)("div",Object.assign({className:"w-[calc(100%_-_2px)] rounded-md border-solid border border-green-600 bg-green-50 mb-2"},{children:(0,e.jsx)("div",Object.assign({className:"p-1 flex gap-x-5"},{children:t.children}))}));c(128);const X=(0,n.createEvent)(),B=(0,n.createEvent)(),Z=(0,n.createEvent)(),G=(0,n.createEffect)((e=>{X(e.link)}));(0,n.sample)({clock:B,source:Z,target:G});const V=n=>{const r=(0,t.useEvent)(B),o=(0,t.useEvent)(Z);return(0,t.useEffect)((()=>{o(n.payload)}),[n]),(0,e.jsx)(g.Tooltip,Object.assign({title:"Создать",placement:"bottom"},{children:(0,e.jsx)(g.Button,{icon:(0,e.jsx)(R.PlusOutlined,{}),onClick:r,size:"small",disabled:n.disabled})}))},J={GetDefaultNotify:e=>({message:e,placement:"bottomRight"}),Success:e=>{g.notification.success(J.GetDefaultNotify(e))},Error:e=>{g.notification.error(J.GetDefaultNotify(e))}};var K=J;const Q=(0,n.createEvent)(),ee=(0,n.createEvent)(),te=(0,n.createStore)(null);(0,n.sample)({clock:ee,target:te});const ne=(0,n.createEffect)(),re=(0,n.createEffect)(),oe=(0,n.createEffect)((()=>{K.Success("Успешно удалено!")})),se=(0,n.createEffect)((()=>{K.Error("Ошибка удаления")}));(0,n.sample)({clock:Q,source:te,target:ne}),(0,n.sample)({clock:ne.doneData,source:te,target:[re,oe]}),(0,n.sample)({clock:ne.failData,target:se});const ae=n=>{const r=(0,t.useEvent)(Q),o=(0,t.useEvent)(ee),s=(0,t.useStore)(ne.pending);return(0,t.useEffect)((()=>{ne.use(n.payload.deleteFx),re.use(n.successCallback)}),[n.payload]),(0,t.useEffect)((()=>{o(n.uid)}),[n.uid]),(0,e.jsx)(g.Tooltip,Object.assign({title:"Удалить",placement:"bottom"},{children:(0,e.jsx)(g.Button,{icon:(0,e.jsx)(R.DeleteOutlined,{}),onClick:r,size:"small",disabled:n.disabled||s})}))},ie=(0,n.createEvent)();(0,n.sample)({clock:ie,target:f});const ce=n=>{const r=(0,t.useEvent)(ie),o=(0,t.useStore)(v.pending);return(0,e.jsx)(g.Tooltip,Object.assign({className:n.className,title:"Обновить"},{children:(0,e.jsx)(g.Button,{icon:(0,e.jsx)(R.ReloadOutlined,{}),onClick:r,size:"small",disabled:o})}))},ue=(0,c(428).createBrowserHistory)(),le=(0,n.createEvent)(),de=(0,n.createEvent)(),fe=(0,n.createEffect)((e=>{(null==e?void 0:e.action)?e.action():ue.back()}));(0,n.sample)({clock:le,source:de,target:fe}),(0,n.createEvent)();const pe=(0,n.createEvent)(),he=(0,n.createEffect)(),me=(0,n.createEffect)(),ve=(0,n.createEffect)((e=>{K.Error("uid"in e?"Ошибка редактирования":"Ошибка создания")}));var ge;(0,n.sample)({clock:pe,target:he}),(0,n.sample)({clock:he.doneData,target:me}),(0,n.sample)({clock:he.failData,source:pe,target:ve}),function(e){e[e.EDIT=0]="EDIT",e[e.ADD=1]="ADD",e[e.DELETE=2]="DELETE",e[e.DRAWER=3]="DRAWER",e[e.FILTERS=4]="FILTERS",e[e.RELOAD=5]="RELOAD",e[e.RETURN=6]="RETURN",e[e.SAVE=7]="SAVE"}(ge||(ge={}));var ye=n=>{var r;const o=(0,t.useStore)(s);return(0,e.jsx)(e.Fragment,{children:null===(r=n.actions)||void 0===r?void 0:r.map((t=>{switch(t.type){case ge.ADD:return(0,e.jsx)(V,{payload:t.payload,disabled:t.disabled},"add");case ge.DELETE:return(0,e.jsx)(ae,{successCallback:e=>{p(e)},uid:(n=o,r=t.payload.objectPath,n?n[r]:void 0),payload:t.payload,disabled:!o||t.disabled},"delete");case ge.RELOAD:return(0,e.jsx)(ce,{className:"ml-auto"},"reload");default:return console.warn(`Unknown action type: ${t.type}`),null}var n,r}))})};const be=n=>{const r=(0,t.useRef)(),s=(0,t.useEvent)(q),a=(0,t.useEvent)(o);return(0,t.useEffect)((()=>(h(n.uidKeyPath),v.use(n.loader),m(),()=>{a(),s(null)})),[n.loader]),(0,e.jsx)("div",Object.assign({className:"flex flex-col flex-grow"},{children:(0,e.jsx)("div",Object.assign({className:"relative flex flex-col flex-grow overflow-auto",ref:r},{children:(0,e.jsxs)("div",Object.assign({className:"absolute flex flex-col w-full"},{children:[(0,e.jsx)(W,{children:(0,e.jsx)(ye,{actions:n.toolbarActions})}),(0,e.jsx)(U,{type:n.type,columns:n.columns})]}))}))}))},Ee=({children:t})=>(0,e.jsx)("div",Object.assign({className:"flex flex-col h-full p-2"},{children:t}))}(),u}()}));