(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(t,a,e){t.exports={profile:"Profile_profile__3YytS",avatar:"Profile_avatar__H5d5H",description:"Profile_description__DFB4s",stats:"Profile_stats__1mcyF",quantity:"Profile_quantity__1IS8m",tag:"Profile_tag__3bjTT",location:"Profile_location__1z7h7",label:"Profile_label__ZxbIP"}},,function(t,a,e){t.exports={friendList:"FriendList_friendList__2fpIZ",status:"FriendList_status__1jXU3",statusIsActiv:"FriendList_statusIsActiv__c1Hup",item:"FriendList_item__2G6wT",avatar:"FriendList_avatar__1f1vv"}},function(t,a,e){t.exports={statistics:"Statistics_statistics__1tzOZ",title:"Statistics_title__24Wsp",statList:"Statistics_statList__h3H76",item:"Statistics_item__2KzXh"}},function(t){t.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(t,a,e){t.exports={transactionHistory:"TransactionHistory_transactionHistory__20EIA",tdGray:"TransactionHistory_tdGray__3DxCl",tdWhite:"TransactionHistory_tdWhite__3d8lj"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(t){t.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(t){t.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(t,a,e){},function(t,a,e){},function(t,a,e){"use strict";e.r(a);var s=e(0),c=e(2),i=e.n(c),n=e(9),r=e.n(n),d=(e(17),e(5)),l=e(8),o=e(10),b=e(11),j=(e(18),e(1)),u=e.n(j),m=function(t){var a=t.name,e=t.tag,c=t.location,i=t.avatar,n=t.stats;return Object(s.jsxs)("div",{className:u.a.profile,children:[Object(s.jsxs)("div",{className:u.a.description,children:[Object(s.jsx)("img",{src:i,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:u.a.avatar}),Object(s.jsx)("p",{className:u.a.name,children:a}),Object(s.jsxs)("p",{className:u.a.tag,children:["@",e]}),Object(s.jsx)("p",{className:u.a.location,children:c})]}),Object(s.jsxs)("ul",{className:u.a.stats,children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:u.a.label,children:"Followers"}),Object(s.jsx)("span",{className:u.a.quantity,children:n.followers})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:u.a.label,children:"Views"}),Object(s.jsx)("span",{className:u.a.quantity,children:n.views})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:u.a.label,children:"Likes"}),Object(s.jsx)("span",{className:u.a.quantity,children:n.likes})]})]})]})},p=e(4),f=e.n(p);var y=function(t){var a=t.title,e=t.stats;return Object(s.jsxs)("section",{className:f.a.statistics,children:[a&&Object(s.jsx)("h2",{className:f.a.title,children:a}),Object(s.jsx)("ul",{className:f.a.statList,children:e.map((function(t){return Object(s.jsxs)("li",{className:f.a.item,style:{background:"#"+Math.floor(16777215*Math.random()).toString(16)},children:[Object(s.jsx)("span",{className:f.a.label,children:t.label}),Object(s.jsxs)("span",{className:f.a.percentage,children:[t.percentage,"%"]})]},t.id)}))})]})},h=e(3),O=e.n(h),_=function(t){var a=t.friends;return Object(s.jsx)("ul",{className:O.a.friendList,children:a.map((function(t){return Object(s.jsxs)("li",{className:O.a.item,children:[t.isOnline?Object(s.jsx)("span",{className:"".concat(O.a.status,"  ").concat(O.a.statusIsActiv)}):Object(s.jsx)("span",{className:O.a.status}),Object(s.jsx)("img",{className:O.a.avatar,src:t.avatar,alt:"",width:"48"}),Object(s.jsx)("p",{className:O.a.name,children:t.name})]},t.id)}))})},x=e(6),v=e.n(x),w=function(t){var a=t.items;return Object(s.jsxs)("table",{className:v.a.transactionHistory,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Amount"}),Object(s.jsx)("th",{children:"Currency"})]})}),Object(s.jsx)("tbody",{children:a.map((function(t,a){var e=a%2?v.a.tdGray:v.a.tdWhite;return Object(s.jsxs)("tr",{className:e,children:[Object(s.jsx)("td",{children:t.type}),Object(s.jsx)("td",{children:t.amount}),Object(s.jsx)("td",{children:t.currency})]},t.id)}))})]})},g=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m,{name:d.name,tag:d.tag,location:d.location,avatar:d.avatar,stats:d.stats}),Object(s.jsx)(y,{title:"Upload stats",stats:l}),Object(s.jsx)(y,{stats:l}),Object(s.jsx)(_,{friends:o}),Object(s.jsx)(w,{items:b})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.65201e89.chunk.js.map