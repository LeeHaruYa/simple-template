import{d as x,c as R,D as i,E as p,H as a,aJ as e,aI as t,aL as D,aK as E,b5 as z,aF as A,aO as r,b6 as H,f as F,r as J,u as P,aN as v,aX as K,b7 as O,b8 as Q,b9 as T,ba as W,bb as X,aY as Y,bc as j,bd as G,be as Z,bf as ee}from"./arco.26d66b32.js";import{F as oe}from"./index.35a41d12.js";import{u as V,_ as k,a as se,I as ae,b as ne}from"./index.8410d353.js";/* empty css              */import{f as te,g as re}from"./vue.119a0ddd.js";import"./chart.ea984c07.js";const S=""+new URL("login-banner.426fb77f.png",import.meta.url).href,le={class:"banner"},ce={class:"banner-inner"},ie={class:"carousel-title"},de={class:"carousel-sub-title"},_e=["src"],ue=x({__name:"banner",setup(l){const{t:o}=V(),d=R(()=>[{slogan:o("login.banner.slogan1"),subSlogan:o("login.banner.subSlogan1"),image:S},{slogan:o("login.banner.slogan2"),subSlogan:o("login.banner.subSlogan2"),image:S},{slogan:o("login.banner.slogan3"),subSlogan:o("login.banner.subSlogan3"),image:S}]);return(f,_)=>{const b=H,h=z;return i(),p("div",le,[a("div",ce,[e(h,{class:"carousel","animation-name":"fade"},{default:t(()=>[(i(!0),p(D,null,E(d.value,n=>(i(),A(b,{key:n.slogan},{default:t(()=>[(i(),p("div",{key:n.slogan,class:"carousel-item"},[a("div",ie,r(n.slogan),1),a("div",de,r(n.subSlogan),1),a("img",{class:"carousel-image",src:n.image},null,8,_e)]))]),_:2},1024))),128))]),_:1})])])}}});const me=k(ue,[["__scopeId","data-v-2ce84fe6"]]);function ge(l=!1){const o=F(l);return{loading:o,setLoading:_=>{o.value=_},toggle:()=>{o.value=!o.value}}}const pe={class:"login-form-wrapper"},fe={class:"login-form-title"},be={class:"login-form-sub-title"},ve={class:"login-form-error-msg"},he={class:"login-form-password-actions"},we=x({__name:"login-form",setup(l){const o=te(),{t:d}=V(),f=F(""),{loading:_,setLoading:b}=ge(),h=se(),n=re("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),u=J({username:n.value.username,password:n.value.password}),C=async({errors:s,values:c})=>{if(!_.value&&!s){b(!0);try{await h.login(c);const{redirect:m,...w}=o.currentRoute.value.query;o.push({name:m||"Workplace",query:{...w}}),K.success(d("login.form.login.success"));const{rememberPassword:g}=n.value,{username:$,password:y}=c;n.value.username=g?$:"",n.value.password=g?y:""}catch(m){f.value=m.message}finally{b(!1)}}},B=s=>{n.value.rememberPassword=s};return(s,c)=>{const m=ae,w=O,g=Q,$=ne,y=T,N=W,U=X,L=Y,q=j,M=G;return i(),p("div",pe,[a("div",fe,r(s.$t("login.form.title")),1),a("div",be,r(s.$t("login.form.title")),1),a("div",ve,r(f.value),1),e(M,{ref:"loginForm",model:u,class:"login-form",layout:"vertical",onSubmit:C},{default:t(()=>[e(g,{field:"username",rules:[{required:!0,message:s.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(w,{modelValue:u.username,"onUpdate:modelValue":c[0]||(c[0]=I=>u.username=I),placeholder:s.$t("login.form.userName.placeholder")},{prefix:t(()=>[e(m)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(g,{field:"password",rules:[{required:!0,message:s.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(y,{modelValue:u.password,"onUpdate:modelValue":c[1]||(c[1]=I=>u.password=I),placeholder:s.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:t(()=>[e($)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(q,{size:16,direction:"vertical"},{default:t(()=>[a("div",he,[e(N,{checked:"rememberPassword","model-value":P(n).rememberPassword,onChange:B},{default:t(()=>[v(r(s.$t("login.form.rememberPassword")),1)]),_:1},8,["model-value","onChange"]),e(U,null,{default:t(()=>[v(r(s.$t("login.form.forgetPassword")),1)]),_:1})]),e(L,{type:"primary","html-type":"submit",long:"",loading:P(_)},{default:t(()=>[v(r(s.$t("login.form.login")),1)]),_:1},8,["loading"]),e(L,{type:"text",long:"",class:"login-form-register-btn"},{default:t(()=>[v(r(s.$t("login.form.register")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});const $e=k(we,[["__scopeId","data-v-0c627d4f"]]),ye=l=>(Z("data-v-7183afbd"),l=l(),ee(),l),Ie={class:"container"},Se=ye(()=>a("div",{class:"logo"},[a("img",{alt:"logo",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"}),a("div",{class:"logo-text"},"Arco Design Pro")],-1)),xe={class:"content"},ke={class:"content-inner"},Le={class:"footer"},Pe=x({__name:"index",setup(l){return(o,d)=>(i(),p("div",Ie,[Se,e(me),a("div",xe,[a("div",ke,[e($e)]),a("div",Le,[e(oe)])])]))}});const qe=k(Pe,[["__scopeId","data-v-7183afbd"]]);export{qe as default};
