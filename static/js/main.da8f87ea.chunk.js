(this.webpackJsonpfollowed=this.webpackJsonpfollowed||[]).push([[0],{16:function(n,t,e){n.exports={root:"Cell_root__2ti8K",empty:"Cell_empty__1ByI9",seen:"Cell_seen__2qSTX",visible:"Cell_visible__2bnT3",unknown:"Cell_unknown__2tYkG"}},24:function(n,t,e){n.exports={root:"Grid_root__xSU_B",row:"Grid_row__1rWaL"}},28:function(n,t){},29:function(n,t,e){n.exports={app:"index_app__2lpzC"}},30:function(n,t,e){n.exports={root:"App_root__ZxxJN"}},33:function(n,t,e){n.exports={root:"Entity_root__MaGTf"}},40:function(n,t,e){n.exports=e(53)},53:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"maze",(function(){return U}));var i={};e.r(i),e.d(i,"nOf",(function(){return H})),e.d(i,"sorted",(function(){return C})),e.d(i,"nonNull",(function(){return z})),e.d(i,"randomItem",(function(){return G}));var a={};e.r(a),e.d(a,"randomInRange",(function(){return Y}));var o={};e.r(o),e.d(o,"centerOnPoint",(function(){return B}));var c={};e.r(c),e.d(c,"create",(function(){return Q})),e.d(c,"area",(function(){return V})),e.d(c,"randomPoint",(function(){return F})),e.d(c,"pointAlongEdge",(function(){return K})),e.d(c,"inBounds",(function(){return q}));var u={};e.r(u),e.d(u,"fromApi",(function(){return J}));var d={};e.r(d),e.d(d,"fromMazeData",(function(){return Z})),e.d(d,"canWalk",(function(){return $})),e.d(d,"canTravel",(function(){return nn})),e.d(d,"lookInDirection",(function(){return tn})),e.d(d,"peekableCorners",(function(){return en})),e.d(d,"seenFromPoint",(function(){return rn}));var s={};e.r(s),e.d(s,"isLoading",(function(){return an})),e.d(s,"isLoaded",(function(){return on})),e.d(s,"isErrored",(function(){return cn})),e.d(s,"loading",(function(){return un})),e.d(s,"loaded",(function(){return dn})),e.d(s,"errored",(function(){return sn})),e.d(s,"map",(function(){return fn}));var f={};e.r(f),e.d(f,"create",(function(){return pn}));var l={};e.r(l),e.d(l,"create",(function(){return mn})),e.d(l,"randomDisplayName",(function(){return yn}));var p={};e.r(p),e.d(p,"EntityClass",(function(){return A}));var m={};e.r(m),e.d(m,"getColor",(function(){return En})),e.d(m,"getDisplayName",(function(){return bn})),e.d(m,"getDescription",(function(){return hn})),e.d(m,"generateAiInstructions",(function(){return On})),e.d(m,"getKillMessage",(function(){return gn}));var y={};e.r(y),e.d(y,"create",(function(){return Tn})),e.d(y,"next",(function(){return xn})),e.d(y,"DISPLAY",(function(){return kn}));var v={};e.r(v),e.d(v,"fromEntities",(function(){return Sn})),e.d(v,"entitiesAtPoint",(function(){return Mn})),e.d(v,"getPlayer",(function(){return _n})),e.d(v,"moveEntity",(function(){return Dn})),e.d(v,"updateEntity",(function(){return jn})),e.d(v,"entitiesCrossed",(function(){return In})),e.d(v,"neighborsCrossedByEntity",(function(){return Nn}));var E={};e.r(E),e.d(E,"create",(function(){return Pn})),e.d(E,"displayGrid",(function(){return Rn})),e.d(E,"generateAllAIInstructions",(function(){return Ln}));var b={};e.r(b),e.d(b,"create",(function(){return Un})),e.d(b,"next",(function(){return Wn})),e.d(b,"wander",(function(){return Hn})),e.d(b,"lookForPlayerInDirection",(function(){return Cn})),e.d(b,"DISPLAY",(function(){return zn}));var h={};e.r(h),e.d(h,"create",(function(){return Gn})),e.d(h,"DISPLAY",(function(){return Yn}));var O={};e.r(O),e.d(O,"create",(function(){return Bn})),e.d(O,"toIndex",(function(){return Qn})),e.d(O,"fromIndex",(function(){return Vn})),e.d(O,"neighbor",(function(){return Fn})),e.d(O,"neighbors",(function(){return Kn})),e.d(O,"diagonalNeighbors",(function(){return qn})),e.d(O,"equals",(function(){return Jn}));var g={};e.r(g),e.d(g,"create",(function(){return Xn}));var w={};e.r(w),e.d(w,"move",(function(){return $n})),e.d(w,"update",(function(){return tt})),e.d(w,"wait",(function(){return et})),e.d(w,"validate",(function(){return rt})),e.d(w,"validateAll",(function(){return it})),e.d(w,"apply",(function(){return at})),e.d(w,"applyAll",(function(){return ot}));var T={};e.r(T),e.d(T,"Direction",(function(){return Zn})),e.d(T,"all",(function(){return ut})),e.d(T,"inverse",(function(){return dt})),e.d(T,"random",(function(){return st}));var x={};e.r(x),e.d(x,"ok",(function(){return ft})),e.d(x,"err",(function(){return lt})),e.d(x,"isErr",(function(){return pt})),e.d(x,"isOk",(function(){return mt})),e.d(x,"map",(function(){return yt}));var k={};e.r(k),e.d(k,"of",(function(){return vt})),e.d(k,"none",(function(){return Et})),e.d(k,"withDefault",(function(){return bt})),e.d(k,"map",(function(){return ht})),e.d(k,"ifPresent",(function(){return Ot}));var A,S=e(1),M=e.n(S),_=e(18),D=e.n(_),j=e(29),I=e.n(j),N=e(30),P=e.n(N),R=e(20),L="https://fv9o21r19a.execute-api.us-east-1.amazonaws.com/dev",U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.dimension,e=void 0===t?c.create(10,10):t,r=n.algorithm,i=void 0===r?"aldous-broder":r,a=fetch("".concat(L),{method:"post",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({dimensions:e,algorithm:i})});return a.then((function(n){return n.text()})).then((function(n){return u.fromApi(e,n)}))},W=e(6),H=function(n,t){return new Array(n).fill(t)},C=function(n,t){var e=Object(W.a)(n);return e.sort(t),e},z=function(n){return n.filter((function(n){return null!=n}))},G=function(n){return n[Math.floor(Math.random()*n.length)]},Y=function(n,t){return n+Math.floor(Math.random()*(t-n-1))},B=function(n,t,e){for(var r=t.x-e,i=t.x+e+1,a=t.y-e,o=t.y+e+1,c=[],u=a;u<o;u++){for(var d=[],s=function(t){d.push(k.map((function(n){return n[t]}),n[u]))},f=r;f<i;f++)s(f);c.push(d)}return c},Q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{width:n,height:t}},V=function(n){return n.width*n.height},F=function(n){return O.fromIndex(Math.floor(Math.random()*V(n)),n)},K=function(n){var t=Math.random()>.5;return O.create(t?a.randomInRange(0,n.width):Math.random()>.5?0:n.width-1,t?Math.random()>.5?0:n.height-1:a.randomInRange(0,n.height))},q=function(n,t){return t.x>0&&t.y>0&&t.x<n.width&&t.y<n.height},J=function(n,t){return{bytes:Uint8Array.from(atob(t),(function(n){return n.charCodeAt(0)})),dimension:n}},X=function(n){return{walls:(t={n:!((8&n)>0),s:!((4&n)>0),e:!((2&n)>0),w:!((1&n)>0)},{n:t.n||!1,e:t.e||!1,s:t.s||!1,w:t.w||!1})};var t},Z=function(n){for(var t=n.dimension,e=n.bytes,r=[],i=0;i<t.height;i++){for(var a=[],o=0;o<t.width;o++)a.push(X(e[i*t.width+o]));r.push(a)}return{grid:r,dimension:t}},$=function(n,t,e){var r=t.x,i=t.y;return!function(n,t){var e=n.walls;switch(t){case T.Direction.NORTH:return e.n;case T.Direction.EAST:return e.e;case T.Direction.SOUTH:return e.s;case T.Direction.WEST:return e.w}}(n.grid[i][r],e)},nn=function(n,t){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];return!!r.reduce((function(t,e){return t&&$(n,t,e)?O.neighbor(t,e):void 0}),t)},tn=function n(t,e,r,i){if($(t,r,e)&&i>0){var a=O.neighbor(r,e);return[a].concat(Object(W.a)(n(t,e,a,i-1)))}return[]},en=function(n,t){var e=[];return(nn(n,t,T.Direction.NORTH,T.Direction.EAST)||nn(n,t,T.Direction.EAST,T.Direction.NORTH))&&e.push(O.create(t.x+1,t.y-1)),(nn(n,t,T.Direction.NORTH,T.Direction.WEST)||nn(n,t,T.Direction.WEST,T.Direction.NORTH))&&e.push(O.create(t.x-1,t.y-1)),(nn(n,t,T.Direction.SOUTH,T.Direction.EAST)||nn(n,t,T.Direction.EAST,T.Direction.SOUTH))&&e.push(O.create(t.x+1,t.y+1)),(nn(n,t,T.Direction.SOUTH,T.Direction.WEST)||nn(n,t,T.Direction.WEST,T.Direction.SOUTH))&&e.push(O.create(t.x-1,t.y+1)),e},rn=function(n,t,e){return T.all().reduce((function(r,i){return r.concat(tn(n,i,t,e))}),[]).concat(en(n,t)).concat(t)},an=function(n){return"Loading"===n.state},on=function(n){return"Loaded"===n.state},cn=function(n){return"Errored"===n.state},un=function(){return{state:"Loading"}},dn=function(n){return{state:"Loaded",data:n}},sn=function(n){return{state:"Errored",e:n}},fn=function(n,t){return on(t)?dn(n(t.data)):t},ln=e(32),pn=function(){return Object(ln.v4)()},mn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.create(),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:yn();return{id:f.create(),name:n,position:t,type:"player",visionRadius:e,displayName:r||n,cls:p.EntityClass.PLAYER}},yn=function(){return i.randomItem(["\ud83d\udc15","\ud83d\udc26","\ud83d\udc08","\ud83d\udc0e","\ud83d\udc16","\ud83d\udc01","\ud83d\udc00","\ud83d\udc22"])};!function(n){n.PLAYER="PLAYER",n.INANIMATE="INANIMATE",n.HOSTILE="HOSTILE"}(A||(A={}));var vn,En=function(n){return n.type,"transparent"},bn=function(n){switch(n.type){case"player":return n.displayName;case"blind-guardian":return y.DISPLAY;case"exit":return h.DISPLAY;case"wandering-husk":return b.DISPLAY}},hn=function(n){switch(n.type){case"player":return n.name;case"blind-guardian":return"a blind guardian";case"exit":return"an exit";case"wandering-husk":return"a wandering husk"}},On=function(n,t){switch(n.type){case"blind-guardian":return y.next(n,t);case"wandering-husk":return b.next(n,t);default:return[]}},gn=function(n,t){switch(t.type){case"blind-guardian":return"".concat(n.name," has been annihilated by ").concat(hn(t),". Nothing is left.");case"wandering-husk":return"Blood and sinew cling to the maw of the wandering husk. ".concat(n.name," has been consumed.")}},wn=e(4),Tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.create();return{type:"blind-guardian",position:n,id:f.create(),heading:T.Direction.NORTH,cls:p.EntityClass.HOSTILE}},xn=function(n,t){var e,r=T.all().filter((function(e){return d.canWalk(t.maze,n.position,e)})),a=r.filter((function(t){return t!==T.inverse(n.heading)}));return e=r.includes(n.heading)&&Math.random()<.75?n.heading:Math.random()<.75&&a.length>0?i.randomItem(a):r[0],[w.update(Object(wn.a)({},n,{heading:e})),w.move(n.id,e)]},kn="\ud83d\uddff",An=e(10),Sn=function(n,t){return{entityMap:n.reduce((function(n,t){return n[t.id]=t,n}),{}),positionMap:n.reduce((function(n,e){var r=O.toIndex(e.position,t);return n[r]=n[r]?[].concat(Object(W.a)(n[r]),[e.id]):[e.id],n}),{}),playerEntityId:k.map((function(n){return n.id}),n.find((function(n){return"player"===n.type}))),typeMap:n.reduce((function(n,t){return Object(wn.a)({},n,Object(An.a)({},t.type,n[t.id]?[].concat(Object(W.a)(n[t.id]),[t.id]):[t.id]))}),{})}},Mn=function(n,t,e){var r=O.toIndex(t,e);return(n.positionMap[r]||[]).map((function(t){return n.entityMap[t]}))},_n=function(n){return k.map((function(t){return n.entityMap[t]}),n.playerEntityId)},Dn=function(n,t,e,r){var i=t.entityMap[n];if(null!=i){var a,o=O.toIndex(i.position,r),c=O.toIndex(e,r),u=Object(wn.a)({},i,{position:e});return Object(wn.a)({},t,{entityMap:Object(wn.a)({},t.entityMap,Object(An.a)({},n,u)),positionMap:Object(wn.a)({},t.positionMap,(a={},Object(An.a)(a,o,Object(W.a)((t.positionMap[o]||[]).filter((function(t){return t!==n})))),Object(An.a)(a,c,[].concat(Object(W.a)(t.positionMap[c]||[]),[n])),a))})}return t},jn=function(n,t){return Object(wn.a)({},t,{entityMap:Object(wn.a)({},t.entityMap,Object(An.a)({},n.id,n))})},In=function(n,t,e,r){var i=n.entityMap[e],a=n.entityMap[r],o=t.entityMap[e],c=t.entityMap[r];return O.equals(o.position,a.position)&&O.equals(c.position,i.position)},Nn=function(n,t,e,r){return O.neighbors(t.entityMap[e].position,r).map((function(n){return O.toIndex(n,r)})).reduce((function(n,e){return n.concat(t.positionMap[e]||[])}),[]).filter((function(r){return In(n,t,e,r)})).map((function(n){return t.entityMap[n]}))},Pn=function(n,t){var e=v.getPlayer(t),r=new Set(e?d.seenFromPoint(n,e.position,e.visionRadius).map((function(t){return O.toIndex(t,n.dimension)})):[]);return{maze:n,entityData:t,seen:new Set,sees:r}},Rn=function(n){var t=n.maze,e=n.entityData,r=n.seen,i=n.sees;return t.grid.reduce((function(n,a,o){return[].concat(Object(W.a)(n),[a.reduce((function(n,a,c){var u=O.create(c,o),d=r.has(O.toIndex(u,t.dimension)),s=i.has(O.toIndex(u,t.dimension));return n.concat({cell:a,meta:{occupants:v.entitiesAtPoint(e,O.create(c,o),t.dimension),visible:s,seen:d,unknown:!s&&!d}})}),[])])}),[])},Ln=function(n){return Object.keys(n.entityData.entityMap).map((function(t){return n.entityData.entityMap[t]})).filter((function(n){return"player"!==n.type})).reduce((function(t,e){return t.concat(m.generateAiInstructions(e,n))}),[])},Un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.create();return{type:"wandering-husk",position:n,id:f.create(),heading:T.random(),cls:p.EntityClass.HOSTILE}},Wn=function(n,t){var e=T.all().reduce((function(e,r){return e||(Cn(r,n.position,t)?r:void 0)}),void 0),r=null!=e?e:Hn(n,t);return[w.update(Object(wn.a)({},n,{heading:r})),w.move(n.id,r)]},Hn=function(n,t){var e=T.all().filter((function(e){return d.canWalk(t.maze,n.position,e)})),r=e.filter((function(t){return t!==T.inverse(n.heading)}));return e.includes(n.heading)&&Math.random()<.75?n.heading:Math.random()<.75&&r.length>0?i.randomItem(r):e[0]},Cn=function(n,t,e){return d.lookInDirection(e.maze,n,t,5).reduce((function(n,t){return n||null!=v.entitiesAtPoint(e.entityData,t,e.maze.dimension).find((function(n){return"player"===n.type}))}),!1)},zn="\ud83e\udddf",Gn=function(n){return{position:n,id:f.create(),type:"exit",cls:p.EntityClass.INANIMATE}},Yn="\ud83d\udeaa",Bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{x:n,y:t}},Qn=function(n,t){var e=n.x;return n.y*t.width+e},Vn=function(n,t){var e=t.width;return Bn(Math.floor(n/e),n%e)},Fn=function(n,t){switch(t){case"NORTH":return O.create(n.x,n.y-1);case"SOUTH":return O.create(n.x,n.y+1);case"EAST":return O.create(n.x+1,n.y);case"WEST":default:return O.create(n.x-1,n.y)}},Kn=function(n,t){return T.all().map((function(t){return Fn(n,t)})).filter((function(n){return c.inBounds(t,n)}))},qn=function(n,t){return[Bn(n.x-1,n.y-1),Bn(n.x+1,n.y-1),Bn(n.x+1,n.y+1),Bn(n.x-1,n.y+1)].filter((function(n){return c.inBounds(t,n)}))},Jn=function(n,t){return n.x===t.x&&n.y===t.y},Xn=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return{instructions:t,id:f.create()}};!function(n){n.MOVE="MOVE",n.UPDATE="UPDATE",n.WAIT="WAIT"}(vn||(vn={}));var Zn,$n=function(n,t){return{type:vn.MOVE,entityId:n,payload:{direction:t}}},nt=function(n,t,e){var r=new Set(d.seenFromPoint(e,t.position,t.visionRadius).map((function(n){return O.toIndex(n,e.dimension)})));return{sees:r,seen:new Set([].concat(Object(W.a)(n),Object(W.a)(r)))}},tt=function(n){return{type:vn.UPDATE,entityId:n.id,payload:{updated:n}}},et=function(n){return{type:vn.WAIT,entityId:n}},rt=function(n,t){switch(n.type){case vn.MOVE:return function(n,t){return d.canWalk(t.maze,t.entityData.entityMap[n.entityId].position,n.payload.direction)?x.ok(void 0):x.err("way is blocked")}(n,t);case vn.WAIT:return x.ok(void 0);default:return x.err("Unkown instruction of type ".concat(n.type))}},it=function(n,t){return n.reduce((function(n,e){return x.isOk(n)?rt(e,t):n}),x.ok(void 0))},at=function(n,t){try{switch(n.type){case vn.MOVE:return x.ok(function(n,t){var e=v.moveEntity(n.entityId,t.entityData,O.neighbor(t.entityData.entityMap[n.entityId].position,n.payload.direction),t.maze.dimension),r=v.getPlayer(e),i=r&&n.entityId===r.id?nt(t.seen,r,t.maze):t,a=i.seen,o=i.sees;return Object(wn.a)({},t,{seen:a,sees:o,entityData:e})}(n,t));case vn.UPDATE:return x.ok(function(n,t){return Object(wn.a)({},t,{entityData:v.updateEntity(n.payload.updated,t.entityData)})}(n,t));case vn.WAIT:return x.ok(function(n,t){return Object(wn.a)({},t)}(0,t))}}catch(e){return console.warn("Error applying instruction",n),console.error(e),x.err("Error applying instructions")}},ot=function(n,t){return n.reduce((function(n,t){return x.isOk(n)?at(t,n.data):n}),x.ok(t))};!function(n){n.NORTH="NORTH",n.SOUTH="SOUTH",n.EAST="EAST",n.WEST="WEST"}(Zn||(Zn={}));var ct,ut=function(){return[Zn.NORTH,Zn.SOUTH,Zn.EAST,Zn.WEST]},dt=function(n){switch(n){case Zn.NORTH:return Zn.SOUTH;case Zn.SOUTH:return Zn.NORTH;case Zn.EAST:return Zn.WEST;case Zn.WEST:return Zn.EAST}},st=function(){return i.randomItem(ut())},ft=function(n){return{type:"Ok",data:n}},lt=function(n){return{type:"Error",msg:n}},pt=function(n){return"Error"===n.type},mt=function(n){return"Ok"===n.type},yt=function(n,t){return mt(t)?ft(n(t.data)):t},vt=(e(28),function(n){return n}),Et=function(){},bt=function(n,t){return null!=n?n:"function"===typeof t?t():t},ht=function(n,t){return null!=t?n(t):void 0},Ot=function(n,t){t&&n(t)},gt=e(17),wt=function(n){return n},Tt=Object(gt.a)(wt,(function(n){return n.game})),xt=Object(gt.a)(Tt,(function(n){return s.map(E.displayGrid,n)})),kt=Object(gt.a)(wt,(function(n){return null!=n.stepId})),At=Object(gt.a)(Tt,(function(n){return s.isLoaded(n)?k.map((function(t){return n.data.entityData.entityMap[t]}),n.data.entityData.playerEntityId):void 0})),St=Object(gt.a)(xt,At,(function(n,t){return s.map((function(n){return null!=t?o.centerOnPoint(n,t.position,3):[]}),n)})),Mt=e(16),_t=e.n(Mt),Dt=e(13),jt=e.n(Dt),It=e(33),Nt=e.n(It),Pt=function(n){return M.a.createElement("div",{className:Nt.a.root},m.getDisplayName(n))},Rt=function(n){return n?"0.5px solid black":"0.5px transparent"},Lt=function(n){var t,e=n.cell,r=n.meta,i=e.walls;return M.a.createElement("div",{className:jt()(_t.a.root,(t={},Object(An.a)(t,_t.a.seen,r.seen),Object(An.a)(t,_t.a.visible,r.visible),Object(An.a)(t,_t.a.unknown,!r.seen&&!r.visible),t)),style:r.unknown?void 0:{borderTop:Rt(i.n),borderRight:Rt(i.e),borderBottom:Rt(i.s),borderLeft:Rt(i.w)}},k.map((function(n){return M.a.createElement(Pt,n)}),function(n){var t=n.visible,e=n.seen,r=n.occupants;return t?k.withDefault(r.find((function(n){return"player"!==n.type&&"exit"!==n.type})),r[0]):e?r.find((function(n){return"exit"===n.type})):void 0}(r)))},Ut=function(){return M.a.createElement("div",{className:jt()(_t.a.empty,_t.a.root)})},Wt=e(24),Ht=e.n(Wt),Ct=function(n){var t=n.grid;return M.a.createElement("div",{className:Ht.a.root},t.map((function(n,t){return M.a.createElement("div",{key:t,className:Ht.a.row},n.map((function(n,t){return k.withDefault(k.map((function(n){return M.a.createElement(Lt,{key:t,cell:n.cell,meta:n.meta})}),n),M.a.createElement(Ut,{key:t}))})))})))},zt=e(7),Gt=e.n(zt),Yt=function(n){var t=n.onMove;return M.a.createElement("div",{className:Gt.a.root},M.a.createElement("div",{className:Gt.a.row},M.a.createElement("div",{className:Gt.a.block}),M.a.createElement("button",{className:jt()(Gt.a.block,Gt.a.button),onClick:function(){return t(T.Direction.NORTH)}}),M.a.createElement("div",{className:Gt.a.block})),M.a.createElement("div",{className:Gt.a.row},M.a.createElement("button",{className:jt()(Gt.a.block,Gt.a.button),onClick:function(){return t(T.Direction.WEST)}}),M.a.createElement("button",{className:jt()(Gt.a.block,Gt.a.button,Gt.a.wait),onClick:function(){return t(void 0)}}),M.a.createElement("button",{className:jt()(Gt.a.block,Gt.a.button),onClick:function(){return t(T.Direction.EAST)}})),M.a.createElement("div",{className:Gt.a.row},M.a.createElement("div",{className:Gt.a.block}),M.a.createElement("button",{className:jt()(Gt.a.block,Gt.a.button),onClick:function(){return t(T.Direction.SOUTH)}}),M.a.createElement("div",{className:Gt.a.block})))},Bt=e(34),Qt=e(35),Vt=e(38),Ft=e(36),Kt=e(39),qt=function(n){function t(){var n,e;Object(Bt.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=Object(Vt.a)(this,(n=Object(Ft.a)(t)).call.apply(n,[this].concat(i)))).handleKeyDown=function(n){e.props.disabled||("ArrowUp"===n.key||"w"===n.key?e.props.onMove(T.Direction.NORTH):"ArrowRight"===n.key||"d"===n.key?e.props.onMove(T.Direction.EAST):"ArrowDown"===n.key||"d"===n.key?e.props.onMove(T.Direction.SOUTH):"ArrowLeft"===n.key||"a"===n.key?e.props.onMove(T.Direction.WEST):" "===n.key&&e.props.onMove(void 0))},e}return Object(Kt.a)(t,n),Object(Qt.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return S.createElement(S.Fragment,null)}}]),t}(S.PureComponent),Jt=function(n){var t=n.grid,e=n.onMove,r=n.processingUpdates;return S.createElement(S.Fragment,null,S.createElement(Ct,{grid:t}),S.createElement(Yt,{onMove:e}),S.createElement(qt,{onMove:e,disabled:r}))};!function(n){n.REQUEST_NEW_GAME="REQUEST_NEW_GAME",n.START_NEW_GAME="START_NEW_GAME",n.REQUEST_STEP="REQUEST_STEP",n.COMPLETE_STEP="COMPLETE_STEP",n.ABORT_STEP="ABORT_STEP",n.MOVE_PLAYER="MOVE_PLAYER"}(ct||(ct={}));var Xt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:ct.REQUEST_NEW_GAME,options:n}},Zt=function(n,t){return{type:ct.START_NEW_GAME,maze:n,entities:t}},$t=function(n){return{type:ct.ABORT_STEP,stepId:n}},ne=function(n,t){return{type:ct.COMPLETE_STEP,stepId:n,gameData:t}},te=Object(R.b)((function(n){return{grid:St(n),processingUpdates:kt(n)}}),(function(n){return{onMove:function(t){return n((e=t,{type:ct.MOVE_PLAYER,direction:e}));var e}}}))((function(n){var t=n.grid,e=n.processingUpdates,r=n.onMove;return M.a.createElement("div",{className:P.a.root},s.isLoading(t)&&M.a.createElement("span",null,"Loading . . . "),s.isLoaded(t)&&t.data&&M.a.createElement(Jt,{processingUpdates:e,grid:t.data,onMove:r}))})),ee=e(14),re=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(wn.a)({game:s.loading()},n)},ie=function(n){return Object(wn.a)({},n,{game:s.loading()})},ae=function(n,t,e){return Object(wn.a)({},n,{game:s.loaded(E.create(t,v.fromEntities(e,t.dimension)))})},oe=function(n,t){return Object(wn.a)({},n,{stepId:t})},ce=function(n,t,e){return function(n,t){return s.isLoaded(t.game)?n():t}((function(){return n.stepId===t?Object(wn.a)({},n,{stepId:void 0,game:s.loaded(e)}):n}),n)},ue=function(n,t){return n.stepId===t?Object(wn.a)({},n,{stepId:void 0}):n},de=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct.REQUEST_STEP:return oe(n,t.step.id);case ct.COMPLETE_STEP:return ce(n,t.stepId,t.gameData);case ct.ABORT_STEP:return ue(n,t.stepId);case ct.START_NEW_GAME:return ae(n,t.maze,t.entities);case ct.REQUEST_NEW_GAME:return ie(n);default:return n}},se=e(37),fe=e(8),le=e.n(fe),pe=e(5),me=le.a.mark(ve),ye=le.a.mark(Ee);function ve(){var n,t,e,r,i,a,o,c;return le.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=1,u.next=4,Object(pe.f)(ct.REQUEST_STEP);case 4:return n=u.sent,t=n.step,u.next=8,Object(pe.d)(Tt);case 8:if(e=u.sent,!s.isLoaded(e)){u.next=31;break}return r=e.data,u.next=13,Object(pe.b)(w.validateAll,t.instructions,r);case 13:if(i=u.sent,!x.isErr(i)){u.next=18;break}return u.next=17,Object(pe.c)($t(t.id));case 17:return u.abrupt("continue",0);case 18:return a=E.generateAllAIInstructions(r),o=[].concat(Object(W.a)(a),Object(W.a)(t.instructions)),u.next=22,Object(pe.b)(w.applyAll,o,r);case 22:if(c=u.sent,!x.isErr(c)){u.next=27;break}return u.next=26,Object(pe.c)($t(t.id));case 26:return u.abrupt("continue",0);case 27:return u.next=29,Object(pe.c)(ne(t.id,c.data));case 29:return u.next=31,Object(pe.b)(Ee,r,c.data);case 31:u.next=37;break;case 33:u.prev=33,u.t0=u.catch(1),console.warn("Error processing step"),console.error(u.t0);case 37:u.next=0;break;case 39:case"end":return u.stop()}}),me,null,[[1,33]])}function Ee(n,t){var e,r,i;return le.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=v.getPlayer(t.entityData),r=v.entitiesAtPoint(t.entityData,e.position,t.maze.dimension).filter((function(n){return n.id!==e.id})).concat(v.neighborsCrossedByEntity(n.entityData,t.entityData,e.id,t.maze.dimension)),i=r.find((function(n){return n.cls===A.HOSTILE})),0!==r.length){a.next=7;break}return a.abrupt("return");case 7:if(!i){a.next=13;break}return a.next=10,Object(pe.b)(window.confirm,"".concat(e.name," has been annihilated by ").concat(m.getDescription(i),"."));case 10:window.location.reload(),a.next=17;break;case 13:if(!r.find((function(n){return"exit"===n.type}))){a.next=17;break}return a.next=16,Object(pe.b)(window.confirm,"".concat(e.name," escaped. . . this time."));case 16:window.location.reload();case 17:case"end":return a.stop()}}),ye)}var be=le.a.mark(he);function he(){return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(pe.g)(ct.MOVE_PLAYER,le.a.mark((function n(t){var e;return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(pe.d)(At);case 2:return e=n.sent,n.next=5,Object(pe.d)(kt);case 5:if(n.sent||!e){n.next=9;break}return n.next=9,Object(pe.c)((r=g.create(t.direction?w.move(e.id,t.direction):w.wait(e.id)),{type:ct.REQUEST_STEP,step:r}));case 9:case"end":return n.stop()}var r}),n)})));case 2:case"end":return n.stop()}}),be)}var Oe=le.a.mark(we),ge=k.withDefault(k.of(localStorage.getItem("name")),(function(){var n=window.prompt("What is your name?")||"";return""!==n&&localStorage.setItem("name",n),""!==n?n:"?"}));function we(){var n,t,e,i;return le.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=1,a.next=4,Object(pe.f)(ct.REQUEST_NEW_GAME);case 4:return n=a.sent,t=n.options,a.next=8,Object(pe.b)(r.maze,t.mazeOptions||{});case 8:return e=a.sent,i=d.fromMazeData(e),a.next=12,Object(pe.c)(Zt(i,Te(i)));case 12:a.next=18;break;case 14:a.prev=14,a.t0=a.catch(1),console.warn("Error initializing new game"),console.error(a.t0);case 18:a.next=0;break;case 20:case"end":return a.stop()}}),Oe,null,[[1,14]])}var Te=function(n){var t=n.dimension,e=l.create(ge,c.pointAlongEdge(t)),r=h.create(c.randomPoint(t)),o=new Array(a.randomInRange(1,5)).fill(void 0).map((function(n){return y.create(c.randomPoint(t))})),u=new Array(i.randomItem([1,1,2,2,3])).fill(void 0).map((function(n){return b.create(c.randomPoint(t))})),d=[].concat(Object(W.a)(o),Object(W.a)(u));return console.log(d),[e,r].concat(Object(W.a)(d))},xe=le.a.mark(Ae),ke=[we,ve,he];function Ae(){return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(pe.a)(ke.map((function(n){return Object(pe.e)(n)})));case 2:return n.next=4,Object(pe.c)(Xt({mazeOptions:{dimension:c.create(15,15),algorithm:"aldous-broder"}}));case 4:case"end":return n.stop()}}),xe)}D.a.render(M.a.createElement(R.a,{store:function(){var n=Object(se.a)(),t=Object(ee.d)(de,Object(ee.a)(n));return n.run(Ae),t}()},M.a.createElement("div",{className:I.a.app},M.a.createElement(te,null))),document.getElementById("root"))},7:function(n,t,e){n.exports={root:"GamePad_root__Lay6t",row:"GamePad_row__164Sm",block:"GamePad_block__l2_xd",button:"GamePad_button__3kDFo",wait:"GamePad_wait__5DVYu"}}},[[40,1,2]]]);
//# sourceMappingURL=main.da8f87ea.chunk.js.map