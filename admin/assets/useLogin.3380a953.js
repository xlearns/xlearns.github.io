import{o as _,g as m,f,d as g,u as x,L as k,r as i,a as n,w as c,b as h,E as v,j as d,A as V,D as C,U as L,V as z,m as A}from"./index.2579fc99.js";import{u as B,b as D}from"./useMenuSetting.4f577881.js";const S={viewBox:"0 0 512 512"},$=f("path",{d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"},null,-1),E=[$];function H(r,o){return _(),m("svg",S,E)}var M={render:H};const N={class:"cursor-pointer flex items-center px-2 h-full"},T={class:"cursor-pointer"},P=v("\u7B80\u4F53\u4E2D\u6587"),U=v("English"),b=g({setup(r){let{locale:o}=x();const s=k("locale",{locale:"zh"});function t(e){o.value=e,s.value={locale:e}}return(e,a)=>{const l=i("el-dropdown-item"),p=i("el-dropdown-menu"),u=i("el-dropdown");return _(),m("div",N,[n(u,{trigger:"click"},{dropdown:c(()=>[n(p,null,{default:c(()=>[n(l,{onClick:a[0]||(a[0]=w=>t("zh"))},{default:c(()=>[P]),_:1}),n(l,{onClick:a[1]||(a[1]=w=>t("en"))},{default:c(()=>[U]),_:1})]),_:1})]),default:c(()=>[f("div",T,[n(h(M),{class:"w-[16px] h-[16px]"})])]),_:1})])}}}),F=g({setup(r){const{initTheme:o}=B();let{isDark:s,change:t}=D(),e=d(s.value);return V(()=>e.value,()=>{t(),o()}),(a,l)=>{const p=i("el-switch");return _(),m("div",null,[n(p,{class:"icon-svg",modelValue:h(e),"onUpdate:modelValue":l[0]||(l[0]=u=>C(e)?e.value=u:e=u),"inline-prompt":"","active-text":"Y","inactive-text":"N"},null,8,["modelValue"])])}}}),J=b,K=F,{changeRole:R}=L(),j=z(),I=d({username:"admin",password:"admin"}),Y=d(!1),q=d(1),O=()=>{function r(){j.setToken("test"),R("test"),A.push("/")}function o(){localStorage.clear(),location.reload()}function s(t){console.log(t)}return{logout:o,onHandle:s,onLogin:r,passkeep:Y,ruleForm:I,currentPage:q}};export{K as A,J as a,O as u};
