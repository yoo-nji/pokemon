import{_ as p}from"./pokeFooter-CSqPF0-_.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as h,m,_ as f,q as k,a as i,c as d,b as s,g as r,w as u,$ as b,s as x,x as C,e as c}from"./index-bJM7hYyA.js";const S="/assets/game_pokemon-lhewX10W.png",y="/assets/game_card_dark-aEbSi3Wa.png",w="/assets/game_card-Cw65Zfdw.png",l=n=>(x("data-v-2a066815"),n=n(),C(),n),M={class:"gameMainSec"},L=b('<p class="gameTitle" data-v-2a066815>포켓몬 미니게임 <i class="snes-jp-logo" data-v-2a066815></i></p><div class="messageCon" data-v-2a066815><section class="message -right" data-v-2a066815><div class="nes-balloon from-right" data-v-2a066815><p data-v-2a066815>포켓몬 퀴즈에 도전해보자!</p></div></section><i class="nes-charmander" data-v-2a066815></i></div>',2),B={class:"gameBoxSet"},N=l(()=>s("div",{class:"gameCon nes-container is-rounded"},[s("h3",null,[c("내가 "),s("span",null,"누구"),c("게요?")]),s("img",{src:S,alt:"우파이미지"}),s("div",null,"이름 퀴즈!")],-1)),q={class:"gameCon nes-container is-rounded"},E=l(()=>s("h3",null,[c("내 "),s("span",null,"짝"),c("을 찾아줘")],-1)),I={key:0,src:y,alt:"카드이미지"},V={key:1,src:w,alt:"카드이미지"},T=l(()=>s("div",null,"짝맞추기!",-1)),D={__name:"index",setup(n){const o=g(!1),_=()=>{const e=document.querySelector(".nes-balloon"),t=document.querySelectorAll(".gameCon");e&&(o.value?e.classList.add("is-dark"):e.classList.remove("is-dark")),t.length>0&&t.forEach(a=>{o.value?a.classList.add("is-dark"):a.classList.remove("is-dark")})};return h(()=>{o.value=document.body.classList.contains("darkMode"),m(_);const e=new MutationObserver(t=>{t.forEach(a=>{a.attributeName==="class"&&(o.value=document.body.classList.contains("darkMode"),m(_))})});e.observe(document.body,{attributes:!0}),f(()=>{e.disconnect()})}),(e,t)=>{const a=k("router-link");return i(),d("div",null,[s("div",M,[L,s("div",B,[r(a,{to:"/minigame/poke_name_quiz"},{default:u(()=>[N]),_:1}),r(a,{to:"/minigame/poke_card"},{default:u(()=>[s("div",q,[E,o.value?(i(),d("img",I)):(i(),d("img",V)),T])]),_:1})])]),r(p)])}}},A=v(D,[["__scopeId","data-v-2a066815"]]);export{A as default};
