import{o as d,f as k,g as e,B as S,C as D,v as h,d as M,i as B,a as P,D as y,x as p,E as H,_ as z,G as I,H as R,c as C,b as A,I as $,J as E,K as L,L as q,M as F,N as O,O as U,P as W,Q as Z,h as r,m as u,t as j,n as x,R as N,S as V,p as G,T as J,U as w,V as K,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as T,$ as oe,a0 as le,a1 as ae,a2 as ne,k as re,a3 as ie,a4 as ce}from"./index-bdf4c967.js";import{N as ue}from"./NoteDisplay-1961d255.js";import de from"./DrawingControls-046fa0a2.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ve=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[ve];function pe(o,a){return d(),k("svg",_e,me)}const he={name:"carbon-renew",render:pe},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(o,a){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/slidev-resources-template/example-slidev/assets/logo-title-horizontal-96c3c915.png";function be(){const o=S(Date.now()),a=D({interval:1e3}),_=h(()=>{const t=(a.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function v(){o.value=a.value}return{timer:_,resetTimer:v}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const a=o;B(P);const _=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),v=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),p(ue,{class:H(a.class),note:_.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),$e=z(Ce,[["__file","/home/runner/work/slidev-resources-template/slidev-resources-template/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(X("data-v-62249bea"),o=o(),Y(),o),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),ze=f(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=M({__name:"Presenter",setup(o){B(P);const a=S();I(),R(a);const _=C.titleTemplate.replace("%s",C.title||"Slidev");A({title:`Presenter - ${_}`});const{timer:v,resetTimer:t}=be(),l=S([]),s=h(()=>$.value<E.value?{route:y.value,clicks:$.value+1}:L.value?{route:q.value,clicks:0}:null);return F(()=>{const b=a.value.querySelector("#slide-content"),i=O(U()),g=W();Z(()=>{if(!g.value||te.value||!se.value)return;const c=b.getBoundingClientRect(),n=(i.x-c.left)/c.width*100,m=(i.y-c.top)/c.height*100;if(!(n<0||n>100||m<0||m>100))return{x:n,y:m}},c=>{ee.cursor=c})}),(b,i)=>{const g=ye,c=he;return d(),k(Q,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...n)=>r(t)&&r(t)(...n))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,j(r(v)),1)]),e("div",{ref_key:"main",ref:a,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(r(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(r(T))},[s.value?(d(),p(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var n;return[u(r(ae),{is:(n=s.value.route)==null?void 0:n.component,"clicks-elements":l.value,"onUpdate:clicksElements":i[1]||(i[1]=m=>l.value=m),clicks:s.value.clicks,"clicks-disabled":!1,class:H(r(le)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),ze],4),e("div",De,[(d(),p($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(ie,{persist:!0})]),(d(),p(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(r(ne)-1)/(r(re)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:r(w),"onUpdate:modelValue":i[2]||(i[2]=n=>J(w)?w.value=n:null)},null,8,["modelValue"])],64)}}});const Fe=z(Ae,[["__scopeId","data-v-62249bea"],["__file","/home/runner/work/slidev-resources-template/slidev-resources-template/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Fe as default};
