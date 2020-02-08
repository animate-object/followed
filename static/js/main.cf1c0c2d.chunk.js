(this.webpackJsonpfollowed=this.webpackJsonpfollowed||[]).push([[0],{23:function(e,n,t){e.exports=t(36)},28:function(e,n,t){},29:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"create",(function(){return p}));var a={};t.r(a),t.d(a,"fromApi",(function(){return h}));var o={};t.r(o),t.d(o,"fromMazeData",(function(){return b}));var i={};t.r(i),t.d(i,"isLoading",(function(){return w})),t.d(i,"isLoaded",(function(){return _})),t.d(i,"isErrored",(function(){return x})),t.d(i,"loading",(function(){return A})),t.d(i,"loaded",(function(){return O})),t.d(i,"errored",(function(){return j}));var c={};t.r(c),t.d(c,"maze",(function(){return H}));var u,d=t(1),s=t.n(d),f=t(11),l=t.n(f),m=(t(28),t(19)),E=t.n(m),v=(t(29),t(13)),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{width:e,height:n}},h=function(e,n){return{bytes:Uint8Array.from(atob(n),(function(e){return e.charCodeAt(0)})),dimension:e}},g=function(e){return{walls:(n={n:!((8&e)>0),s:!((4&e)>0),e:!((2&e)>0),w:!((1&e)>0)},{n:n.n||!1,e:n.e||!1,s:n.s||!1,w:n.w||!1})};var n},b=function(e){for(var n=e.dimension,t=e.bytes,r=[],a=0;a<n.height;a++){for(var o=[],i=0;i<n.width;i++)o.push(g(t[a*n.width+i]));r.push(o)}return{grid:r,dimension:n}},w=function(e){return"Loading"===e.state},_=function(e){return"Loaded"===e.state},x=function(e){return"Errored"===e.state},A=function(){return{state:"Loading"}},O=function(e){return{state:"Loaded",data:e}},j=function(e){return{state:"Errored",e:e}},y=t(21),T=Object(y.a)((function(e){return e}),(function(e){return e.game})),z=function(e){return e?"0.5px solid black":"0.5px transparent"},M=function(e){var n=e.cell.walls;return s.a.createElement("span",{style:{boxSizing:"border-box",borderTop:z(n.n),borderRight:z(n.e),borderBottom:z(n.s),borderLeft:z(n.w),height:"1rem",width:"1rem",display:"inline-block"}})},N=function(e){var n=e.grid;return s.a.createElement("div",{style:{overflow:"auto",width:"max-content"}},n.map((function(e){return s.a.createElement("div",{style:{lineHeight:0}},e.map((function(e){return s.a.createElement(M,{cell:e})})))})))},S=function(e){var n=e.maze;return d.createElement(d.Fragment,null,d.createElement(N,{grid:n.grid}))},L=Object(v.b)((function(e){return{game:T(e)}}))((function(e){var n=e.game;return s.a.createElement("div",{className:E()("root")},i.isLoading(n)&&s.a.createElement("span",null,"Loading . . . "),i.isLoaded(n)&&s.a.createElement(S,n.data))})),R=t(7),G=t(14),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(G.a)({game:i.loading()},e)},k=function(e,n){return Object(G.a)({},e,{game:i.loaded({maze:n})})};!function(e){e.REQUEST_NEW_GAME="REQUEST_NEW_GAME",e.START_NEW_GAME="START_NEW_GAME"}(u||(u={}));var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:u.REQUEST_NEW_GAME,options:e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.START_NEW_GAME:return k(e,n.maze);case u.REQUEST_NEW_GAME:default:return e}},J=t(22),B=t(10),D=t.n(B),C=t(9),F="https://fv9o21r19a.execute-api.us-east-1.amazonaws.com/dev",H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.dimension,t=void 0===n?r.create(10,10):n,o=e.algorithm,i=void 0===o?"aldous-broder":o,c=fetch("".concat(F),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({dimensions:t,algorithm:i})});return c.then((function(e){return e.text()})).then((function(e){return a.fromApi(t,e)}))},I=D.a.mark(K),q=D.a.mark(V);function K(){var e,n,t;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=1,r.next=4,Object(C.e)(u.REQUEST_NEW_GAME);case 4:return e=r.sent,n=e.options,r.next=8,Object(C.b)(c.maze,n.mazeOptions||{});case 8:return t=r.sent,r.next=11,Object(C.c)((a=o.fromMazeData(t),{type:u.START_NEW_GAME,maze:a}));case 11:r.next=17;break;case 13:r.prev=13,r.t0=r.catch(1),console.warn("Error initializing new game"),console.error(r.t0);case 17:r.next=0;break;case 19:case"end":return r.stop()}var a}),I,null,[[1,13]])}var P=[K];function V(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(P.map((function(e){return Object(C.d)(e)})));case 2:return e.next=4,Object(C.c)(U({mazeOptions:{dimension:r.create(20,20),algorithm:"aldous-broder"}}));case 4:case"end":return e.stop()}}),q)}l.a.render(s.a.createElement(v.a,{store:function(){var e=Object(J.a)(),n=Object(R.d)(Q,Object(R.a)(e));return e.run(V),n}()},s.a.createElement(L,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cf1c0c2d.chunk.js.map