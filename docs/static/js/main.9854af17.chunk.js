(this.webpackJsonpalibaba_training=this.webpackJsonpalibaba_training||[]).push([[0],{130:function(e,t,a){e.exports={block:"Panel_block__1n9WU",panel:"Panel_panel__1ETJq",select:"Panel_select__a4ilz",desc:"Panel_desc__1a-si",time:"Panel_time__2ODaL",link:"Panel_link__1YgGu"}},246:function(e,t,a){e.exports={record:"Record_record__3gkTw",btn:"Record_btn__2tv-p"}},343:function(e,t,a){e.exports={block:"Main_block__5jKZM",main:"Main_main__2Dwl5"}},350:function(e,t,a){e.exports={bar:"BarChart_bar__1E7mZ",container:"BarChart_container__1RZ75"}},382:function(e,t,a){},383:function(e,t,a){},485:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(86),i=a.n(c),r=(a(382),a(383),a(343)),s=a.n(r),l=a(28),o=a(102),d=a.n(o),u=a(209),b=a(62),j=a(77),v=a.n(j),h=a(344),p=a.n(h).a.create({baseURL:"https://api.github.com/",timeout:1e4}),O=function(e,t){return new Promise((function(a,n){p.get(e,null!==t&&void 0!==t?t:{}).then((function(e){return a(e)})).catch((function(e){n(e)}))}))},_=["python","java","javascript"],m="desc",x=["asc",m],f=["stars","forks"],g=a(169),y=a(16),k=[{title:"id",dataIndex:"id",key:"id"},{title:"name",dataIndex:"name",key:"name"},{title:"html_url",dataIndex:"html_url",key:"html_url",render:function(e){return Object(y.jsx)("a",{href:e,children:e})}},{title:"created_at",dataIndex:"created_at",key:"created_at"},{title:"updated_at",dataIndex:"updated_at",key:"updated_at"},{title:"pushed_at",dataIndex:"pushed_at",key:"pushed_at"}],N=a(488),w=function(e){var t=e.dataSource,a=e.total,n=e.page,c=e.onChange;return Object(y.jsx)(N.a,{columns:k,dataSource:t,rowKey:function(e){return e.id},pagination:{total:a,current:n,showSizeChanger:!1,onChange:c}})},F=a(350),S=a.n(F),I=a(351),C=function(e){var t=e.containerId,a=e.dataSource,c=e.xField,i=e.yField,r=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new I.Column(t,{data:a,xField:c,yField:i,label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},xAxis:{label:{autoRotate:!1,autoHide:!1}}});e.render(),r.current=e}),[]),Object(n.useEffect)((function(){var e;0!==a.length&&(null===(e=r.current)||void 0===e||e.changeData(a))}),[a]),Object(y.jsx)("div",{className:S.a.bar,id:t})},E=g.a.Option,G=function(){var e=Object(n.useState)("python"),t=Object(b.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(m),r=Object(b.a)(i,2),s=r[0],l=r[1],o=Object(n.useState)("stars"),j=Object(b.a)(o,2),h=j[0],p=j[1],k=Object(n.useState)([]),N=Object(b.a)(k,2),F=N[0],S=N[1],I=Object(n.useState)(0),G=Object(b.a)(I,2),R=G[0],D=G[1],L=Object(n.useState)(1),P=Object(b.a)(L,2),M=P[0],T=P[1],B=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/search/repositories?q=language:".concat(a,"&sort=").concat(h,"&order=").concat(s,"&per_page=10&page=").concat(M));case 2:r=e.sent,S(null!==(t=null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.items)&&void 0!==t?t:[]),D(null!==(c=null===r||void 0===r||null===(i=r.data)||void 0===i?void 0:i.total_count)&&void 0!==c?c:0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){B()}),[a,s,h,M]),Object(y.jsxs)("div",{className:v.a.github,children:[Object(y.jsxs)("div",{className:v.a.header,children:[Object(y.jsxs)("div",{className:v.a.select,children:[Object(y.jsx)("span",{className:v.a.desc,children:"\u8bed\u8a00\uff1a"}),Object(y.jsx)(g.a,{value:a,onChange:function(e){c(e)},children:_.map((function(e){return Object(y.jsx)(E,{value:e,children:e},e)}))})]}),Object(y.jsxs)("div",{className:v.a.select,children:[Object(y.jsx)("span",{className:v.a.desc,children:"\u5347\u5e8f/\u964d\u5e8f\uff1a"}),Object(y.jsx)(g.a,{value:s,onChange:function(e){l(e)},children:x.map((function(e){return Object(y.jsx)(E,{value:e,children:e},e)}))})]}),Object(y.jsxs)("div",{className:v.a.select,children:[Object(y.jsx)("span",{className:v.a.desc,children:"\u6392\u5e8f\u89c4\u5219\uff1a"}),Object(y.jsx)(g.a,{value:h,onChange:function(e){p(e)},children:f.map((function(e){return Object(y.jsx)(E,{value:e,children:e},e)}))})]})]}),Object(y.jsx)("div",{className:v.a.table,children:Object(y.jsx)(w,{dataSource:F,page:M,total:R,onChange:function(e){T(e)}})}),Object(y.jsx)("div",{className:v.a.bar,children:Object(y.jsx)(C,{dataSource:F.map((function(e){var t,a;return{name:null!==(t=null===e||void 0===e?void 0:e.name)&&void 0!==t?t:"",stars:null!==(a=null===e||void 0===e?void 0:e.stargazers_count)&&void 0!==a?a:0}})),xField:"name",yField:"stars",containerId:"starId"})}),Object(y.jsx)("div",{className:v.a.bar,children:Object(y.jsx)(C,{dataSource:F.map((function(e){var t,a;return{name:null!==(t=null===e||void 0===e?void 0:e.name)&&void 0!==t?t:"",forks:null!==(a=null===e||void 0===e?void 0:e.forks)&&void 0!==a?a:0}})),xField:"name",yField:"forks",containerId:"forkId"})}),Object(y.jsx)("div",{className:v.a.bar,children:Object(y.jsx)(C,{dataSource:F.map((function(e){var t,a;return{name:null!==(t=null===e||void 0===e?void 0:e.name)&&void 0!==t?t:"",open_issues:null!==(a=null===e||void 0===e?void 0:e.open_issues)&&void 0!==a?a:0}})),xField:"name",yField:"open_issues",containerId:"issueId"})})]})},R=function(){return Object(y.jsx)("div",{className:s.a.main,children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{path:"/alibaba_training/github",element:Object(y.jsx)(G,{})}),Object(y.jsx)(l.a,{path:"/alibaba_training/",element:Object(y.jsx)(G,{})})]})})},D=a(130),L=a.n(D),P=a(129),M=a(366),T=a(246),B=a.n(T),q=function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getDisplayMedia({video:!0});case 2:t=e.sent,a=MediaRecorder.isTypeSupported("video/webm; codecs=vp9")?"video/webm; codecs=vp9":"video/webm",n=new MediaRecorder(t,{mimeType:a}),c=[],n.addEventListener("dataavailable",(function(e){c.push(e.data)})),n.addEventListener("stop",(function(){var e=new Blob(c,{type:c[0].type}),t=URL.createObjectURL(e);document.querySelector("video").src=t;var a=document.createElement("a");a.href=t,a.download="video.webm",a.click()})),n.start();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:B.a.record,children:[Object(y.jsx)("video",{controls:!0,className:B.a.video}),Object(y.jsx)("button",{className:B.a.btn,onClick:e,children:"\ud83c\udfafrecord"})]})},K=g.a.Option,U=function(){var e=Object(n.useState)("github"),t=Object(b.a)(e,2),a=t[0],c=(t[1],Object(n.useState)(new Date)),i=Object(b.a)(c,2),r=i[0],s=i[1];Object(n.useEffect)((function(){var e=setInterval((function(){return s(new Date)}),1e3);return function(){clearInterval(e)}}),[]);return Object(y.jsxs)("div",{className:L.a.panel,children:[Object(y.jsxs)("div",{className:L.a.select,children:[Object(y.jsx)("span",{className:L.a.desc,children:"\u6570\u636e\u96c6\uff1a"}),Object(y.jsx)(g.a,{value:a,onChange:function(){},children:Object(y.jsx)(K,{value:"github",children:"Github"})})]}),Object(y.jsx)("div",{className:L.a.time,children:Object(y.jsx)(M.a,{value:r})}),Object(y.jsx)("div",{className:L.a.record,children:Object(y.jsx)(q,{})}),Object(y.jsx)("div",{className:L.a.link,children:Object(y.jsx)(P.a,{type:"primary",onClick:function(){window.location.href="https://xutong8.github.io/stock_dashboard/"},children:"\u80a1\u7968\u5206\u6790\u7cfb\u7edf"})})]})};var z=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(U,{}),Object(y.jsx)(R,{})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,489)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},Z=(a(483),a(484),a(253));i.a.render(Object(y.jsx)(Z.a,{children:Object(y.jsx)(z,{})}),document.getElementById("root")),J()},77:function(e,t,a){e.exports={github:"Github_github__3MEdq",header:"Github_header__1EGIs",desc:"Github_desc__3LyVN",select:"Github_select__2tDtv",table:"Github_table__3e4C-",bar:"Github_bar__M5GKK"}}},[[485,1,2]]]);
//# sourceMappingURL=main.9854af17.chunk.js.map