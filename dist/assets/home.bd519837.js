import{_ as S,d as z,u as L,r as l,a as E,b as a,o as c,c as g,w as n,e as U,f as A,g as o,h as N,i as P,F as T,j as u,k as $}from"./index.cb861482.js";const j=u("Default"),I=u("Primary"),M=u("three"),R=u("\u914D\u7F6E\u770B\u677F"),W=u("\u4E2D\u6587"),q=z({__name:"home",setup(G){const r=L();console.log(r);const x=l(r.theme),i=l(x.value=="dark"),d=()=>{let f=i.value?"dark":"light";r.setTheme(f)},p=l(""),_=l(""),m=l("");l("");const y=l([{value:1,label:1}]),h=$(),v=l(!0),b=()=>{h.push({path:"/three"})},w=()=>{h.push({path:"/container"})};return E({title:{show:!0,text:"\u6807\u9898\u540D\u79F0\u6D4B\u8BD5",textStyle:{color:"rgba(119, 255, 0, 1)"}},xAxis:{show:!0,type:"category",axisLabel:{show:!1},splitLine:{show:!0},axisPointer:{type:"shadow"}},yAxis:{show:!0,type:"value",axisLine:{show:!0},axisLabel:{show:!0,color:"rgba(199, 42, 42, 1)",fontSize:15,fontStyle:"italic"}},legend:{icon:"rect",left:"right",show:!0,type:"scroll",orient:"horizontal"},series:[{data:[964,959,46,451],name:"1234561",type:"line"},{data:[839,419,354,364],name:"\u7535\u8D3911`",type:"line"},{data:[839,19,150,254],name:"\u7528\u7535\u91CF",type:"bar",label:{show:!0,color:"rgba(9, 51, 135, 1)",position:"top"},barWidth:22}],tooltip:{trigger:"axis",formatter:"{b}:{c}",axisPointer:{type:"cross",crossStyle:{color:"#999"}}}}),(f,t)=>{const k=a("el-switch"),s=a("el-button"),V=a("el-color-picker"),C=a("el-option"),D=a("el-select"),F=a("el-slider"),B=a("el-card");return c(),g(B,null,{default:n(()=>[U("span",{onClick:t[0]||(t[0]=A(e=>d(),["stop"]))},"\u6697\u9ED1\u6A21\u5F0F"),o(k,{size:"small",modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),onChange:d},null,8,["modelValue"]),o(s,{onClick:b},{default:n(()=>[j]),_:1}),o(s,{type:"primary",onClick:t[2]||(t[2]=e=>v.value=!v.value)},{default:n(()=>[I]),_:1}),o(s,{type:"success",onClick:b},{default:n(()=>[M]),_:1}),o(s,{type:"info",onClick:w},{default:n(()=>[R]),_:1}),o(s,null,{default:n(()=>[W]),_:1}),o(V,{modelValue:m.value,"onUpdate:modelValue":t[3]||(t[3]=e=>m.value=e)},null,8,["modelValue"]),o(D,{modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=e=>_.value=e),class:"m-2",placeholder:"Select",size:"small"},{default:n(()=>[(c(!0),N(T,null,P(y.value,e=>(c(),g(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(F,{modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=e=>p.value=e)},null,8,["modelValue"])]),_:1})}}});var J=S(q,[["__scopeId","data-v-26b6b912"]]);export{J as default};