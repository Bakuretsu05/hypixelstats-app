(this["webpackJsonphypixelstats-app"]=this["webpackJsonphypixelstats-app"]||[]).push([[0],[,,,,,,,,,,,function(e,s,t){},,,,,,function(e,s,t){},function(e,s,t){},,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),l=t(12),r=t.n(l),n=(t(17),t(6)),i=t(2),j=(t(18),t(5)),d=t.n(j),b=t(10),x=t(7),u=t(4),h=t(0),_="2f9bdbf2-9099-4281-8898-3ab625237d5f",o=c.a.createContext();function O(e){var s=e.children,t=Object(a.useState)(""),c=Object(u.a)(t,2),l=c[0],r=c[1],n=Object(a.useState)(),i=Object(u.a)(n,2),j=i[0],O=i[1],m=Object(a.useState)(!1),p=Object(u.a)(m,2),y=p[0],N=p[1],S=Object(a.useCallback)(Object(x.a)(d.a.mark((function e(){var s,t,a,c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,fetch("https://api.hypixel.net/player?key=".concat(_,"&name=").concat(l));case 4:return s=e.sent,e.next=7,s.json();case 7:if(!(t=e.sent).success){e.next=19;break}if(null!==t.player){e.next=11;break}return e.abrupt("return",'Player by the username "'.concat(l,'" was not found.'));case 11:return e.next=13,Promise.all([fetch("https://crafatar.com/avatars/"+t.player.uuid),fetch("https://api.hypixel.net/friends?key=".concat(_,"&uuid=").concat(t.player.uuid)).then((function(e){return e.json()}))]);case 13:return a=e.sent,c=Object(u.a)(a,2),r=c[0],n=c[1],O(Object(b.a)(Object(b.a)({},t.player),{},{friends:n.records,playerHead:r.url})),e.abrupt("return",!0);case 19:return e.abrupt("return",t.cause);case 22:return e.prev=22,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 25:return e.prev=25,N(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[1,22,25,28]])}))),[l]);return Object(h.jsx)(o.Provider,{value:{setSearchTerm:r,playerData:j,fetchPlayerData:S,isLoading:y},children:s})}function m(){return Object(a.useContext)(o)}t(11);function p(e){var s=489e3,t=100,a=e/s;if(e%=s,a>5){var c=a%5;e+=c*s,a-=c}return e<500?0+a*t:e<1500?1+a*t:e<3500?2+a*t:e<5500?3+a*t:e<9e3?4+a*t:(e-=9e3,Math.floor(e/5e3+4+a*t))}function y(){var e=m().playerData.stats.Bedwars;return Object(h.jsxs)("div",{className:"BedwarsCard --stats-card",children:[Object(h.jsx)("h3",{className:"PlayerStats__title",children:"Bedwars Card"}),Object(h.jsxs)("ul",{className:"PlayerStats__stats-list",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Star: "}),Object(h.jsxs)("span",{className:"PlayerStats__stats-value",children:[p(e.Experience),"*"]})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Winstreak: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.winstreak})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Wins: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.wins_bedwars})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Losses: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.losses_bedwars})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"WLR: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(e.wins_bedwars/e.losses_bedwars).toFixed(2)})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Final Kills: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.final_kills_bedwars})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Final Deaths: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.final_deaths_bedwars})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"FKDR: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(e.final_kills_bedwars/e.final_deaths_bedwars).toFixed(2)})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Beds Broken: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.beds_broken_bedwars})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Beds Lost: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.beds_lost_bedwars})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"BBLR: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(e.beds_broken_bedwars/e.beds_lost_bedwars).toFixed(2)})]})]})]})}function N(){var e=m().playerData.stats.SkyWars;return Object(h.jsxs)("div",{className:"SkywarsCard --stats-card",children:[Object(h.jsx)("h3",{className:"PlayerStats__title",children:"SkywarsCard"}),Object(h.jsxs)("ul",{className:"PlayerStats__stats-list",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Star: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.levelFormatted.slice(2)})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Matches: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.games_played_skywars})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Wins: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.wins})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Losses: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.losses})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"WLR: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(e.wins/e.losses).toFixed(2)})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Time Played: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:new Date(1e3*e.time_played).toISOString().substr(11,8)})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Kills: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.kills})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Kills: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.deaths})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"KDR: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(e.kills/e.deaths).toFixed(2)})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Assists: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:e.assists})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Kills/Game: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(e.kills/e.games_played_skywars).toFixed(2)})]})]})]})}t(21);var S=t.p+"static/media/logo.1f82137d.png";function P(){var e=Object(i.g)();return Object(h.jsxs)("div",{className:"Nav",children:[Object(h.jsx)("img",{className:"Nav__logo",src:S,alt:"logo of PixieStats",onClick:function(){return e("/")}}),Object(h.jsx)("h3",{className:"Nav__about",onClick:function(){return e("about")},children:"About"})]})}function v(){return Object(h.jsx)("div",{className:"About",children:Object(h.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium et dolorum impedit ad, nesciunt accusantium suscipit ducimus molestiae cum quidem velit iure tempore ex, voluptatibus numquam vero consequuntur, odio dolor illum eligendi deleniti? Distinctio qui odit dicta aperiam nam, cumque, culpa ipsam natus perferendis dolores delectus nobis, animi incidunt voluptate?"})})}function f(){var e,s,t,a=m().playerData,c=Object(i.g)();return a&&Object(h.jsxs)("div",{className:"PlayerStats",children:[Object(h.jsxs)("div",{className:"PlayerStats__player",children:[Object(h.jsx)("img",{className:"PlayerStats__player-head",src:a.playerHead,alt:"player head avatar"}),Object(h.jsx)("h3",{className:"PlayerStats__title",children:"[".concat(a.newPackageRank,"] ").concat(a.displayname)})]}),Object(h.jsx)("div",{className:"PlayerStats__general-stats",children:Object(h.jsxs)("ul",{className:"PlayerStats__stats-list",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Level: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(t=a.networkExp,Math.floor(Math.sqrt(2*t+30625)/50-2.5))})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"AP: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:a.achievementPoints})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Karma: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:a.karma})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Quests: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(s=a.quests,Object.entries(s).reduce((function(e,s){return s[1].completions?e+s[1].completions.length:e}),0))})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Challenges: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:(e=a.challenges,Object.entries(e.all_time).reduce((function(e,s){return e+s[1]}),0))})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{className:"PlayerStats__stats-text",children:"Friends: "}),Object(h.jsx)("span",{className:"PlayerStats__stats-value",children:a.friends.length})]})]})}),Object(h.jsxs)("div",{className:"PlayerStats__stats",children:[Object(h.jsxs)("select",{children:[Object(h.jsx)("option",{children:" -- Choose a gamemode -- "}),Object(h.jsx)("option",{value:"bedwars",onClick:function(e){return c(e.target.value)},children:"Bedwars"}),Object(h.jsx)("option",{value:"skywars",onClick:function(e){return c(e.target.value)},children:"Skywars"})]}),Object(h.jsx)(i.a,{})]})]})}function w(){var e=Object(i.g)();return Object(a.useEffect)((function(){e("/")})),null}t(22);function g(e){return Object(h.jsxs)("div",{className:"Modal",children:[Object(h.jsx)("div",{className:"Modal__error-title-container",children:Object(h.jsx)("h4",{className:"Modal__error-title",children:"Error:"})}),Object(h.jsx)("h4",{className:"Modal__text",children:e.text})]})}t(23);var k=t.p+"static/media/elainaflower.9261c6a8.png";function L(){return Object(h.jsxs)("div",{className:"Loading",children:[Object(h.jsx)("img",{className:"Loading__elaina-loading --floatingAnimation",id:"Loading__elaina-loading",src:k,alt:"Elaina sitting on top of flowers"}),Object(h.jsx)("h3",{className:"Loading__loading-text",children:"Loading..."})]})}t(24);function C(){var e=m(),s=e.setSearchTerm,t=e.fetchPlayerData,c=e.isLoading,l=Object(a.useState)({show:!1,text:""}),r=Object(u.a)(l,2),n=r[0],j=r[1],b=Object(i.g)(),_=function(){var e=Object(x.a)(d.a.mark((function e(s){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,t();case 3:!0===(a=e.sent)?b("stats/".concat(s.target.playerName.value)):(j({show:!0,text:a}),console.log(a));case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return c?Object(h.jsx)(L,{}):Object(h.jsxs)("div",{className:"SearchPlayer",children:[Object(h.jsx)("h3",{className:"SearchPlayer__title",htmlFor:"playerName",children:"Search Player"}),Object(h.jsxs)("form",{className:"SearchPlayer__form",onSubmit:_,children:[Object(h.jsx)("input",{className:"SearchPlayer__input",type:"text",placeholder:"Enter a username",name:"playerName",id:"playerName",onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("button",{className:"SearchPlayer__button",type:"submit",children:"Show Player"}),n.show&&Object(h.jsx)(g,{text:n.text})]})]})}function D(){return Object(h.jsx)("div",{className:"fullscreen-container",children:Object(h.jsxs)(n.a,{children:[Object(h.jsx)(P,{}),Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/",element:Object(h.jsx)(C,{})}),Object(h.jsx)(i.b,{path:"about",element:Object(h.jsx)(v,{})}),Object(h.jsxs)(i.b,{path:"stats/:playerName",element:Object(h.jsx)(f,{}),children:[Object(h.jsx)(i.b,{path:"bedwars",element:Object(h.jsx)(y,{})}),Object(h.jsx)(i.b,{path:"skywars",element:Object(h.jsx)(N,{})})]}),Object(h.jsx)(i.b,{path:"*",element:Object(h.jsx)(w,{})})]})]})})}r.a.render(Object(h.jsx)(O,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.d11a2e30.chunk.js.map