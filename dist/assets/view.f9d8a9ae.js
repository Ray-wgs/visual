import{_ as v,d as l,aH as _,aI as m,r as p,aC as b,aJ as y,b as g,o as t,h as r,F as h,i as f,aL as s,c as n,aM as x,aQ as d,aN as k}from"./index.cb861482.js";const w=l({name:"vsBoardView"}),B=l({...w,setup(C){const i=_(),{boardOpt:e}=m(i),o=p();return b(()=>{e.value.common.threeBg||(o.value.style.backgroundImage=`url(${e.value.common.bg})`),y(()=>{o.value.style.width=e.value.common.width+"px",o.value.style.height=e.value.common.height+"px"})}),(I,V)=>{const c=g("vs-three");return t(),r("div",{class:"board-container",ref_key:"boardContainer",ref:o},[(t(!0),r(h,null,f(s(e).comps,(a,u)=>(t(),r("div",d({key:a.id,style:{zIndex:u+1,...a.style}},a.style,{class:"view-box"}),[(t(),n(k(a.tag),d(a.propValue,{style:a.style}),null,16,["style"]))],16))),128)),s(e).common.threeBg?(t(),n(c,{key:0,class:"board-three-bg"})):x("",!0)],512)}}});var F=v(B,[["__scopeId","data-v-7dd7935e"]]);export{F as default};