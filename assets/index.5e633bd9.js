import{S as M,P as S,W as L,T as v,M as p,B as j,a as P,b as g,c as w,C as T,O,d as A,A as B,e as C,f as N}from"./vendor.d769c917.js";const R=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function m(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=m(e);fetch(e.href,o)}};R();const t=new M,s=new S(75,window.innerWidth/window.innerHeight,.1,1e3),f=new L({canvas:document.querySelector("#bg")}),i=new v,W=i.load("/portfolio/assets/images/space.jpg");t.background=W;f.setPixelRatio(window.devicePixelRatio);f.setSize(window.innerWidth,window.innerHeight);s.position.setZ(30);s.position.setX(-1);f.render(t,s);const X=i.load("/portfolio/assets/images/avatar.png"),c=new p(new j(3,3,3),new P({map:X}));t.add(c);c.position.setZ(-7);c.position.setX(4);c.position.setY(0);const Z=i.load("/portfolio/assets/images/earthNight.jpg"),q=i.load("/portfolio/assets/images/bump.jpg"),z=i.load("/portfolio/assets/images/specular.jpg"),l=new p(new g(5,32,32),new w({map:Z,bumpMap:q,bumpScale:.5,specularMap:z,specular:new T("#031023")}));t.add(l);l.position.setZ(16);l.position.setX(-15);l.position.setY(1);const F=i.load("/portfolio/assets/images/moon.jpg"),G=i.load("/portfolio/assets/images/moonBump.jpg"),h=new p(new g(1,32,32),new w({map:F,bumpMap:G,bumpScale:.2})),a=new O;t.add(a);a.add(h);a.position.setZ(16);a.position.setX(-15);a.position.setY(1);h.position.x=-17;const y=new A(16777215,.7);y.position.set(7,27,7);const Y=new B(16777215);t.add(y,Y);const E=new g(.15,24,24),H=new C({color:16777215});function k(){const n=new p(E,H),[r,m,d]=Array(3).fill().map(()=>N.randFloatSpread(100));n.position.set(r,m,d),t.add(n)}Array(200).fill().forEach(k);function b(){const n=document.body.getBoundingClientRect().top;c.rotation.y+=.03,s.position.z=n*-.01,s.position.x=n*-2e-4,s.rotation.y=n*-2e-4}document.body.onscroll=b;b();function x(){requestAnimationFrame(x),l.rotation.y+=.001,a.rotation.y+=.005,f.render(t,s)}x();