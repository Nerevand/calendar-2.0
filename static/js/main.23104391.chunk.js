(this["webpackJsonpjpr-calendar"]=this["webpackJsonpjpr-calendar"]||[]).push([[0],{107:function(e,t,a){},110:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),o=a(12),l=a.n(o),i=a(49),s=a(13),d=a(167),u=a(21),j=a(4),h=a(166),b=a(63),O=a.n(b),f=a(5),m=a.n(f),v=a(171),p=a(64),x=a(11),g=a(46),y=a(120),k=function(e){var t=e.children,a=Object(g.a)(e,["children"]);return Object(n.jsx)(y.a,Object(x.a)(Object(x.a)({},a),{},{children:t}))},M=a(170),C=function(e){return Object(n.jsx)(M.a,Object(x.a)({},e))},Y=a(160),D=r.a.forwardRef((function(e,t){return Object(n.jsx)(Y.a,Object(x.a)(Object(x.a)({},e),{},{ref:t}))}));D.muiName="DialogActions",D.defaultProps={disableSpacing:!0};var N=D,S=a(161),w=c.forwardRef((function(e,t){return Object(n.jsx)(S.a,Object(x.a)({ref:t},e))})),P=a(162),E=a(121),T=r.a.forwardRef((function(e,t){e.semiBold,e.className,e.underline;var a=Object(g.a)(e,["semiBold","className","underline"]);return Object(n.jsx)(E.a,Object(x.a)(Object(x.a)({},a),{},{ref:t}))}));T.defaultProps={variant:"body1"};var J,W=T,A=r.a.forwardRef((function(e,t){var a=e.children,c=e.disableTypography,r=(e.disableTextTransform,e.TypographyProps),o=Object(g.a)(e,["children","disableTypography","disableTextTransform","TypographyProps"]);return Object(n.jsx)(P.a,Object(x.a)(Object(x.a)({ref:t,disableTypography:!0},o),{},{children:c?a:Object(n.jsx)(W,Object(x.a)(Object(x.a)({semiBold:!0,variant:"h2"},r),{},{children:a}))}))})),F=a(168),L=function(e){return Object(n.jsx)(F.a,Object(x.a)({},e))};!function(e){e.month="month",e.week="week"}(J||(J={}));var I=["en","ua"],z=[J.month,J.week],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],R=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],q=a(73),G=a(164),K=a(173),Q=a(163),U=function(e){return Object(n.jsx)(Q.a,Object(x.a)({},e))},V=Object(G.a)((function(e){return Object(K.a)({formControl:{display:"flex",alignItems:"center",flexDirection:"row",margin:e.spacing(1),minWidth:120},select:{marginLeft:e.spacing(2)}})}));function X(e){var t=V(),a=Object(v.a)().t,c=e.data,r=e.handleChange,o=e.value,l=e.title;return Object(n.jsx)("div",{children:Object(n.jsxs)(U,{className:t.formControl,children:[Object(n.jsx)(W,{color:"textSecondary",children:a(l)}),Object(n.jsx)(q.a,{className:t.select,value:o,onChange:r,inputProps:{name:"name",id:"custom-dropdown"},children:c.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},"".concat(e,"-").concat(t))}))})]})})}function Z(e){var t=e.open,a=e.date,r=e.event,o=e.isEditMode,l=e.typeOfPicker,i=e.handleClose,s=e.handleAddEvent,d=Object(c.useState)(a),j=Object(u.a)(d,2),h=j[0],b=j[1],O=Object(c.useState)(null),f=Object(u.a)(O,2),v=f[0],x=f[1],g=Object(c.useState)(""),y=Object(u.a)(g,2),M=y[0],Y=y[1],D=Object(c.useCallback)((function(){try{s({id:(null===r||void 0===r?void 0:r.id)||m()().valueOf(),dateStart:h,dateEnd:v,task:M}),i()}catch(e){console.error(e)}}),[s,i,h,v,M,r]),S=Object(c.useCallback)((function(){var e="".concat(m()(h).startOf("hour").format("HH"),":00"),t=R.findIndex((function(t){return t===e}));return[].concat(Object(p.a)(R.slice(t+1)),["00:00"])}),[h]);return Object(c.useEffect)((function(){o?(b((null===r||void 0===r?void 0:r.dateStart)||m()()),x((null===r||void 0===r?void 0:r.dateEnd)||null),Y((null===r||void 0===r?void 0:r.task)||"")):(b(a),x(null),Y(""))}),[o,r,a]),Object(n.jsxs)(C,{open:t,keepMounted:!0,onClose:i,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(n.jsx)(A,{id:"alert-dialog-slide-title",TypographyProps:{variant:"h5"},children:o?"Edit your task on this day":"Create your task on this day"}),Object(n.jsx)(w,{children:Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[l===J.month?Object(n.jsx)(L,{id:"date",label:"Date picker",type:"date",value:m()(h).format("YYYY-MM-DD"),onChange:function(e){return b(m()(e.target.value))},InputLabelProps:{shrink:!0}}):Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)(X,{title:"from",data:R,value:"".concat(m()(h).startOf("hour").format("HH"),":00"),handleChange:function(e){var t=m()(h).format("YYYY-MM-DD");b(m()("".concat(t," ").concat(e.target.value)))}}),Object(n.jsx)(X,{title:"to",data:S(),value:"".concat(m()(v).startOf("hour").format("HH"),":00"),handleChange:function(e){var t=m()(h).format("YYYY-MM-DD");x(m()("".concat(t," ").concat(e.target.value)))}})]}),Object(n.jsx)(L,{label:"label",value:M,onChange:function(e){return Y(e.target.value)},type:"text"})]})}),Object(n.jsxs)(N,{children:[Object(n.jsx)(k,{onClick:i,color:"primary",children:"Close"}),Object(n.jsx)(k,{onClick:D,color:"primary",children:o?"Save":"Create"})]})]})}var $=a(172),_=r.a.createContext(null),ee=function(e){var t=e.children,a=Object(v.a)().i18n,r=Object(c.useState)([]),o=Object(u.a)(r,2),l=o[0],i=o[1],s=Object(c.useState)(!1),d=Object(u.a)(s,2),j=d[0],h=d[1],b=Object(c.useState)(m()()),O=Object(u.a)(b,2),f=O[0],x=O[1],g=Object(c.useState)(m()().month()),y=Object(u.a)(g,2),k=y[0],M=y[1],C=Object(c.useState)((new Date).getFullYear()),Y=Object(u.a)(C,2),D=Y[0],N=Y[1],S=Object(c.useCallback)((function(e){localStorage.setItem("language",e),a.changeLanguage(e)}),[a]),w=Object(c.useCallback)((function(){h(!0)}),[h]),P=Object(c.useCallback)((function(){h(!1)}),[h]),E=Object(c.useCallback)((function(){var e=m()();x(e),M(e.month()),N(e.year())}),[x,M,N]),T=Object(c.useCallback)((function(){var e=m()(f).subtract(1,"months");x(e),M(e.month()),N(e.year())}),[f,x,M,N]),J=Object(c.useCallback)((function(){var e=m()(f).add(1,"months");x(e),M(e.month()),N(e.year())}),[f,x,M,N]),W=Object(c.useCallback)((function(){var e=m()(f).subtract(1,"weeks");x(e),M(e.month()),N(e.year())}),[f,x,M,N]),A=Object(c.useCallback)((function(){var e=m()(f).add(1,"weeks");x(e),M(e.month()),N(e.year())}),[f,x,M,N]),F=Object(c.useCallback)((function(e){x(m()(e))}),[x]),L=Object(c.useCallback)((function(e){M(e)}),[M]),I=Object(c.useCallback)((function(e){N(e)}),[N]),z=Object(c.useCallback)((function(e){var t=[].concat(Object(p.a)(l),[e]);i(t),console.log({newEvent:e}),localStorage.setItem("events",JSON.stringify(t))}),[l,i]),H=Object(c.useCallback)((function(e){var t=l.map((function(t){return t.id===e.id?e:t}));i(t),localStorage.setItem("events",JSON.stringify(t))}),[l,i]),B=Object(c.useCallback)((function(e){var t=l.filter((function(t){return t.id!==e}));i(t),localStorage.setItem("events",JSON.stringify(t))}),[l,i]),R=Object(c.useMemo)((function(){return{eventList:l,activeLang:a.language,selectedDate:f,selectedMonth:k,selectedYear:D,openDialog:j,handleOpenDialog:w,handleCloseDialog:P,changeMonth:L,changeYear:I,handleToday:E,handleChangeDay:F,handlePrevMonth:T,handlePrevWeek:W,handleNextWeek:A,handleNextMonth:J,handleAddEvent:z,handleEditEvent:H,handledeleteEvent:B,setLanguage:S}}),[l,a.language,f,k,D,j,w,P,L,I,E,F,T,J,W,A,z,H,B,S]);return Object($.a)((function(){var e=localStorage.getItem("events")||JSON.stringify([]);i(JSON.parse(e))})),Object(n.jsx)(_.Provider,{value:R,children:t})},te=_,ae=a(165),ne=function(e){return Object(n.jsx)(ae.a,Object(x.a)({},e))},ce=Object(G.a)((function(e){return Object(K.a)({formControl:{display:"flex",alignItems:"center",flexDirection:"row",margin:e.spacing(1),minWidth:120},select:{marginLeft:e.spacing(2)}})}));function re(e){var t=ce(),a=Object(v.a)().t,c=e.data,r=e.handleChange,o=e.value;return Object(n.jsx)("div",{children:Object(n.jsxs)(Q.a,{className:t.formControl,children:[Object(n.jsx)(W,{color:"textSecondary",children:a("period")}),Object(n.jsx)(q.a,{className:t.select,value:o,onChange:r,inputProps:{name:"name",id:"custom-dropdown"},children:c.map((function(e){return Object(n.jsx)("option",{value:e,children:a("select.".concat(e))},e)}))})]})})}a(107);var oe=function(e){var t=Object(c.useContext)(te),a=t.activeLang,r=t.selectedMonth,o=t.selectedYear,l=t.setLanguage,i=t.handleToday,d=e.handlePrev,u=e.handleNext,j=e.titlePrev,h=e.titleNext,b=Object(s.f)(),O=Object(s.g)().pathname,f=Object(v.a)().t;return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)(k,{variant:"outlined",size:"small",style:{marginRight:"20px"},onClick:i,children:f("today")}),Object(n.jsxs)(ne,{variant:"outlined",size:"small",style:{marginRight:"20px"},"aria-label":"outlined primary button group",children:[Object(n.jsx)(k,{onClick:d,size:"small",title:j,children:"<"}),Object(n.jsxs)(k,{onClick:u,size:"small",title:h,children:[" ",">"]})]}),Object(n.jsxs)(W,{children:[f("month.".concat(H[r]))," - ".concat(o)]}),Object(n.jsx)("div",{className:"language-wrapper",style:{marginLeft:"20px"},children:Object(n.jsx)(ne,{variant:"outlined",size:"small","aria-label":"outlined primary button group",children:I.map((function(e){var t=a===e;return Object(n.jsx)(k,{variant:t?"contained":"outlined",color:t?"primary":"default",onClick:function(){return l(e)},children:e},e)}))})}),Object(n.jsx)(re,{data:z,value:O.replace("/",""),handleChange:function(e){return b.push("/".concat(e.target.value))}})]})};var le=function(){var e=Object(c.useContext)(te),t=e.handlePrevWeek,a=e.handleNextWeek,r=Object(v.a)().t;return Object(n.jsx)(oe,{handlePrev:t,handleNext:a,titlePrev:r("titles.prevWeek"),titleNext:r("titles.nextWeek")})};a(110);function ie(){return Object(n.jsxs)("section",{style:{width:"64px"},children:[Object(n.jsx)("div",{style:{width:"100%",height:"49px"}}),R.map((function(e,t){return Object(n.jsx)("div",{className:"time-zone",children:e},"".concat(t," + ").concat(e))}))]})}var se=function(){var e=Object(c.useContext)(te),t=e.eventList,a=e.selectedDate,r=e.openDialog,o=e.handleOpenDialog,l=e.handleCloseDialog,i=e.handleChangeDay,d=e.changeMonth,b=e.changeYear,f=e.handleAddEvent,p=e.handleEditEvent,x=e.handledeleteEvent,g=Object(v.a)().t,y=Object(s.g)().pathname,k=Object(c.useMemo)((function(){return y.replace("/","")}),[y]),M=Object(c.useState)(null),C=Object(u.a)(M,2),Y=C[0],D=C[1],N=function(e){for(var a=t.filter((function(t){return m()(e).format("YYYY-MM-DD")===m()(t.dateStart).format("YYYY-MM-DD")})),c=[],r=m()(e).startOf("day"),l=m()(e).endOf("day").diff(r,"hours"),s=0;s<=l;s++){var d=m()(e).startOf("day");c.push(d.add(s,"hours"))}return Object(n.jsxs)("section",{className:"calendar-week-grid",children:[c.map((function(e,t){return function(e,t){return Object(n.jsx)("div",{className:"daily-time",onClick:function(){i(e),o()}},t)}(e,t)})),Object(n.jsx)("div",{className:"testClass",children:a.map((function(e,t){return function(e,t,a){var c=Number(m()(e.dateStart).format("H")),r=Number(m()(e.dateEnd).format("H")),l=r-c,i=100/t;return Object(n.jsxs)("div",{className:"daily-task",style:{width:"".concat(i,"%"),height:r?"".concat(25*l,"px"):"100%",top:"".concat(25*c,"px"),left:"".concat(i*(a+1),"%"),backgroundColor:a%2===0?"#7986cb":"#a1b2c3"},onClick:function(t){t.stopPropagation(),D(e),o()},children:[Object(n.jsx)("p",{children:e.task}),Object(n.jsx)("div",{className:"remove-event",children:Object(n.jsx)(h.a,{edge:"end",size:"small","aria-label":"delete",onClick:function(t){t.stopPropagation(),x(e.id)},children:Object(n.jsx)(O.a,{})})})]},a)}(e,a.length,t)}))})]})};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(le,{}),Object(n.jsxs)("main",{className:"board",children:[Object(n.jsx)(ie,{}),Object(n.jsx)("article",{className:"calendar",children:function(){for(var e=m()(a).startOf("week"),t=m()(a).endOf("week").diff(e,"days"),c=[],r=0;r<=t;r++){var o=m()(a).startOf("week");c.push(o.add(r,"days"))}var l=c.map((function(e,t){var a=e.format("DD/MM");return{dayName:"".concat(g("days.".concat(B[t]))," (").concat(a,")"),date:e}}));return Object(n.jsx)("div",{className:"calendar-days",children:l.map((function(e,t){return function(e,t){var c=e.dayName,r=e.date,o=Object(j.a)("calendar-day",{highlight:m()(r).format("DD-MM-YYYY")===m()(a).format("DD-MM-YYYY")});return Object(n.jsxs)("div",{className:"weekly-day-wrapper",children:[Object(n.jsx)("div",{className:o,onClick:function(){i(r),b(m()(r).year()),d(m()(r).month())},children:c}),N(r)]},c)}(e)}))})}()}),Object(n.jsx)(Z,{open:r,handleClose:function(){D(null),l()},date:a,handleAddEvent:Y?p:f,isEditMode:!!Y,event:Y,typeOfPicker:k})]})]})};var de=function(){var e=Object(c.useContext)(te),t=e.handlePrevMonth,a=e.handleNextMonth,r=Object(v.a)().t;return Object(n.jsx)(oe,{handlePrev:t,handleNext:a,titlePrev:r("titles.prevMonth"),titleNext:r("titles.nextMonth")})},ue=(a(115),function(){var e=Object(c.useContext)(te),t=e.eventList,a=e.selectedDate,r=e.selectedMonth,o=e.selectedYear,l=e.changeMonth,i=e.changeYear,d=e.openDialog,b=e.handleOpenDialog,f=e.handleCloseDialog,p=e.handleChangeDay,x=e.handleAddEvent,g=e.handleEditEvent,y=e.handledeleteEvent,k=Object(v.a)().t,M=Object(s.g)().pathname,C=Object(c.useMemo)((function(){return M.replace("/","")}),[M]),Y=Object(c.useState)([]),D=Object(u.a)(Y,2),N=D[0],S=D[1],w=Object(c.useState)(null),P=Object(u.a)(w,2),E=P[0],T=P[1],J=4;N.length>0&&(J=m()(N[N.length-1].date).diff(N[0].date,"week"));var W=Object(j.a)("calendar","calendar-".concat(J,"-weeks"));Object(c.useEffect)((function(){for(var e=m()().month(r).year(o).format(),t=[],a=[],n=[],c=m()(e).subtract(1,"months").endOf("month"),l=c.day();l>=0&&l<7;)t.push({inMonth:!1,date:new Date("".concat(m()(c).year(),"-").concat(m()(c).month()+1,"-").concat(m()(c).date()-l))}),l--;for(var i=m()(e).daysInMonth(),s=1;s<=i;s++)a.push({inMonth:!0,date:new Date("".concat(o,"-").concat(r+1,"-").concat(s))});for(var d=m()(e).add(1,"months").startOf("month").format("YYYY-MM-DD"),u=7-m()(d).day(),j=m()(e).add(1,"M").startOf("month").format("YYYY-MM-DD hh:mm:ss"),h=0;h<u;h++)n.push({inMonth:!1,date:new Date("".concat(m()(j).year(),"-").concat(m()(j).month()+1,"-").concat(m()(j).date()+h))});S([].concat(t,a,n))}),[r,o]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(de,{}),Object(n.jsxs)("article",{className:W,children:[function(){var e=B.map((function(e){return"".concat(k("days.".concat(e)))}));return Object(n.jsx)("header",{className:"calendar-grid",children:e.map((function(e){return function(e){return Object(n.jsx)("div",{className:"calendar-day",children:e},e)}(e)}))})}(),Object(n.jsx)("section",{className:"calendar-grid",children:N.map((function(e,c){return function(e,c){var r=e.date,o=e.inMonth,s=Object(j.a)("calendar-date",{"in-month":o,highlight:m()(r).format("DD-MM-YYYY")===m()(a).format("DD-MM-YYYY")}),d=t.filter((function(e){return m()(r).format("YYYY-MM-DD")===m()(e.dateStart).format("YYYY-MM-DD")}));return Object(n.jsxs)("div",{className:s,style:{overflowY:d.length?"auto":"hidden"},onClick:function(){p(r),i(m()(r).year()),l(m()(r).month()),b()},children:[m()(r).format("DD"),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(n.Fragment,{children:d.map((function(e){return Object(n.jsxs)("div",{className:"month-event",onClick:function(t){t.stopPropagation(),T(e),b()},style:{marginBottom:"5px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#cdcdcd"},children:[e.task,Object(n.jsx)("div",{className:"delete-event",children:Object(n.jsx)(h.a,{edge:"end",size:"small","aria-label":"delete",onClick:function(t){t.stopPropagation(),y(e.id)},children:Object(n.jsx)(O.a,{})})})]},e.id)}))})]},c)}(e,c)}))}),Object(n.jsx)(Z,{open:d,handleClose:function(){T(null),f()},date:a,handleAddEvent:E?g:x,isEditMode:!!E,event:E,typeOfPicker:C})]})]})}),je=a(68),he=a(40),be=a(77),Oe=a(78),fe=function(){switch(localStorage.getItem("language")){case"en":return"en";case"ua":return"ua";default:return"en"}}(),me={en:{translation:be},ua:{translation:Oe}};je.a.use(he.e).init({lng:fe,fallbackLng:fe,resources:me});var ve=je.a;a(116);var pe=function(){return Object(n.jsx)(d.a,{i18n:ve,children:Object(n.jsx)(ee,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)(i.a,{children:[Object(n.jsx)(s.b,{exact:!0,path:"/month",component:ue}),Object(n.jsx)(s.b,{exact:!0,path:"/week",component:se}),Object(n.jsx)(s.a,{from:"/",to:"/month"})]})})})})})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};a(117);l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(pe,{})}),document.getElementById("root")),xe()},77:function(e){e.exports=JSON.parse('{"text":"Aplication","period":"Period","today":"Today","days":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat"},"month":{"Jan":"January","Feb":"February","Mar":"March","Apr":"April","May":"May","Jun":"June","Jul":"July","Aug":"August","Sep":"September","Oct":"October","Nov":"November","Dec":"December"},"select":{"month":"Month","week":"Week"},"titles":{"prevWeek":"Previous Week","nextWeek":"Next Week","prevMonth":"Previous Month","nextMonth":"Next Month"}}')},78:function(e){e.exports=JSON.parse('{"text":"\u0410\u043f\u043b\u0456\u043a\u0430\u0446\u0456\u044f","period":"\u041f\u0435\u0440\u0456\u043e\u0434","today":"\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456","days":{"Sun":"\u041d\u0434","Mon":"\u041f\u043d","Tue":"\u0412\u0442","Wed":"\u0421\u0440","Thu":"\u0427\u0442","Fri":"\u041f\u0442","Sat":"\u0421\u0431"},"month":{"Jan":"\u0421\u0456\u0447\u0435\u043d\u044c","Feb":"\u041b\u044e\u0442\u0438\u0439","Mar":"\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c","Apr":"\u041a\u0432\u0456\u0442\u0435\u043d\u044c","May":"\u0422\u0440\u0430\u0432\u0435\u043d\u044c","Jun":"\u0427\u0435\u0440\u0432\u0435\u043d\u044c","Jul":"\u041b\u0438\u043f\u0435\u043d\u044c","Aug":"\u0421\u0435\u0440\u043f\u0435\u043d\u044c","Sep":"\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c","Oct":"\u0416\u043e\u0432\u0442\u0435\u043d\u044c","Nov":"\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434","Dec":"\u0413\u0440\u0443\u0434\u0435\u043d\u044c"},"select":{"month":"\u041c\u0456\u0441\u044f\u0446\u044c","week":"\u0422\u0438\u0436\u0434\u0435\u043d\u044c"},"titles":{"prevWeek":"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c","nextWeek":"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c","prevMonth":"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043c\u0456\u0441\u044f\u0446\u044c","nextMonth":"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043c\u0456\u0441\u044f\u0446\u044c"}}')}},[[118,1,2]]]);
//# sourceMappingURL=main.23104391.chunk.js.map