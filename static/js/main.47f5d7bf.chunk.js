(this["webpackJsonpvostok-cards"]=this["webpackJsonpvostok-cards"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(7),n=s.n(c),r=(s(12),s(0)),o=function(e){var t=e.children,s=e.href;e.image;return Object(r.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",s);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},href:s,children:t})},l=s.p+"static/media/News.fc0d891c.svg",m=s.p+"static/media/Products.83d9a211.svg",d=s.p+"static/media/About.00395189.svg",u=s.p+"static/media/Contact.9f5634f6.svg",j=s.p+"static/media/Cart.35f19a05.svg",b=s.p+"static/media/Main Logo.f973b90c.svg",g=s.p+"static/media/Back Logo.4307b761.svg",p=function(){return Object(r.jsxs)("div",{className:"Navbar",children:[Object(r.jsx)("div",{className:"left",children:Object(r.jsx)(o,{image:j})}),Object(r.jsxs)("div",{className:"middle",children:[Object(r.jsx)(o,{href:"/news",children:Object(r.jsx)("img",{className:"TabButton",src:l})}),Object(r.jsx)(o,{href:"/products",children:Object(r.jsx)("img",{className:"TabButton",src:m})}),Object(r.jsx)(o,{href:"/",children:Object(r.jsxs)("div",{class:"logo_wrapper",children:[Object(r.jsx)("img",{className:"back_logo",src:g}),Object(r.jsx)("img",{className:"main_logo",src:b})]})}),Object(r.jsx)(o,{href:"/products",children:Object(r.jsx)("img",{className:"TabButton",src:d})}),Object(r.jsx)(o,{href:"/products",children:Object(r.jsx)("img",{className:"TabButton",src:u})})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)(o,{href:"/shop",className:"ShopButton",image:j})})]})},f=s(2),h=function(e){var t=e.items.map((function(e){return Object(r.jsxs)("div",{className:"imageWrap_left",children:[Object(r.jsx)("img",{className:"Image",src:e.image}),Object(r.jsx)("div",{className:"text abs background",children:e.text})]},e.text)}));return Object(r.jsx)(i.a.Fragment,{children:t})},x=s.p+"static/media/Arrow.10a589cf.svg",v=function(e){var t=e.name,s=e.onClick;return Object(r.jsx)("a",{className:"Arrow ".concat(t),onClick:s,children:Object(r.jsx)("img",{src:x})})},O=s(6),N=s.p+"static/media/Diamond.f88ee9ed.svg",_=s.p+"static/media/Diamond Red.ef265c06.svg",w=-1,k=function(e){var t=e.max,s=e.num,i=Object(a.useRef)(),c=Object(a.useState)([]),n=Object(f.a)(c,2),o=n[0],l=n[1],m=Object(a.useState)(s),d=Object(f.a)(m,2),u=d[0],j=d[1],b=function(e){return w++,Object(r.jsx)("a",{className:"diamond",children:Object(r.jsx)("img",{id:"diamond_".concat(w),src:e})})};return Object(a.useEffect)((function(){!function(){for(var e=0;e<t+1;e++)l(0===e?function(e){return[].concat(Object(O.a)(e),[b(_)])}:function(e){return[].concat(Object(O.a)(e),[b(N)])})}()}),[]),Object(a.useEffect)((function(){var e=i.current.children[s],t=i.current.children[u];null!=e&&(t.children[0].src=N,e.children[0].src=_),j(s)}),[s]),Object(r.jsx)("div",{ref:i,id:"dots",className:"dots",children:o})},y=s.p+"static/media/cards 1.e7a98526.jpg",q=s.p+"static/media/cards 2.a8d9a20e.jpg",S=s.p+"static/media/cards 3.d96630e1.jpg",C=s.p+"static/media/cards 4.0a2816f9.jpg",z=s.p+"static/media/Title.0fd51de2.svg",P=[{image:y,text:"King Spades"},{image:q,text:"All Cards"},{image:S,text:"King Hearts"},{image:C,text:"Card Box"}],E=function(){var e=Object(a.useRef)(),t=Object(a.useState)(0),s=Object(f.a)(t,2),i=s[0],c=s[1],n=Object(a.useState)(null),o=Object(f.a)(n,2),l=o[0],m=o[1],d=Object(a.useState)(0),u=Object(f.a)(d,2),j=u[0],b=u[1],g=Object(a.useState)(1),p=Object(f.a)(g,2),x=p[0],O=p[1],N=function(){b(j<l?j+1:0)};Object(a.useEffect)((function(){var t=e.current.children.length;m(t-1)}),[]),Object(a.useEffect)((function(){c(-100*j),O(x);var e=setInterval((function(){N()}),5e3);return function(){clearInterval(e)}}),[j]);var _={transform:"translateX(".concat(i,"%)"),transition:"transform ".concat(x,"s")};return Object(r.jsxs)("div",{className:"new_box",children:[Object(r.jsx)("div",{ref:e,style:_,className:"Pack",children:Object(r.jsx)(h,{items:P})}),Object(r.jsx)(v,{name:"prev",onClick:function(){b(j>0?j-1:l)}}),Object(r.jsx)(v,{name:"next",onClick:function(){return N()}}),Object(r.jsx)("div",{className:"Title",children:Object(r.jsx)("img",{className:"logo_image",src:z})}),l?Object(r.jsx)(k,{max:l,num:j}):null]})},A=function(e){var t=e.path,s=e.children,i=Object(a.useState)(window.location.pathname),c=Object(f.a)(i,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){var e=function(){r(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),n===t?s:null},D=function(e){var t=e.href;return Object(r.jsx)("a",{className:"text name learn",onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",t);var s=new PopStateEvent("popstate");window.dispatchEvent(s)}},href:t,children:"Learn More"})},W=function(e){var t=e.items.map((function(e){return Object(r.jsxs)("div",{className:"Item",children:[Object(r.jsxs)("div",{className:"image_wrapper",children:[Object(r.jsx)("img",{className:"product_image",src:e.image}),Object(r.jsx)("div",{className:"text name toTop ",children:e.name}),Object(r.jsx)(D,{href:e.path})]}),Object(r.jsx)("div",{className:"item_buttons",children:Object(r.jsxs)("div",{className:"text price item_button",children:["$",e.price]})})]},e.name)}));return Object(r.jsx)("div",{className:"ProductGrid",children:t})},F=(s(14),function(e){var t=e.items;return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h1",{className:"page_title",children:"Products"}),Object(r.jsx)("h1",{className:"pageDescription",children:"Amazing decks that push the bounderies of awesomeness"}),Object(r.jsx)(W,{items:t})]})}),I=(s(15),function(e){var t=e.item;return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"new_box product_box",children:Object(r.jsxs)("div",{className:"imageWrap_left",children:[Object(r.jsxs)("div",{className:"left_side ",children:[Object(r.jsx)("div",{className:"left_trapeeze"}),Object(r.jsx)("div",{className:"border_trapeeze_left"}),Object(r.jsxs)("div",{className:"text_holder",children:[t.logo,Object(r.jsx)("p",{className:"description_text text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula suscipit auctor. Suspendisse potenti. Maecenas vestibulum pellentesque metus et aliquam. Sed a malesuada nibh, at congue enim. Donec luctus mauris finibus aliquet euismod. Duis eu tempor felis. Fusce sagittis elit in ante posuere, eget maximus quam tristique. Nunc augue mauris, eleifend vitae molestie id, placerat quis arcu. Proin vitae finibus lorem, vitae aliquam augue. Pellentesque vel posuere urna. Cras molestie nisl vel odio bibendum ullamcorper. Proin varius turpis est, eu egestas ligula tristique ac. Sed vitae velit aliquet, scelerisque orci id, rhoncus enim. Aliquam at fermentum velit, id fringilla mauris. Vestibulum varius commodo quam eget eleifend. Mauris dictum suscipit enim ut dignissim. In ac dictum mi."})]})]}),Object(r.jsx)("img",{className:"Image ",src:t.image})]})}),Object(r.jsx)("div",{className:"new_box product_box",children:Object(r.jsxs)("div",{className:"imageWrap_right",children:[Object(r.jsxs)("div",{className:"right_side ",children:[Object(r.jsx)("div",{className:"right_trapeeze"}),Object(r.jsx)("div",{className:"border_trapeeze_right"}),Object(r.jsxs)("div",{className:"text_holder",children:[t.logo,Object(r.jsx)("p",{className:"description_text text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula suscipit auctor. Suspendisse potenti. Maecenas vestibulum pellentesque metus et aliquam. Sed a malesuada nibh, at congue enim. Donec luctus mauris finibus aliquet euismod. Duis eu tempor felis. Fusce sagittis elit in ante posuere, eget maximus quam tristique. Nunc augue mauris, eleifend vitae molestie id, placerat quis arcu. Proin vitae finibus lorem, vitae aliquam augue. Pellentesque vel posuere urna. Cras molestie nisl vel odio bibendum ullamcorper. Proin varius turpis est, eu egestas ligula tristique ac. Sed vitae velit aliquet, scelerisque orci id, rhoncus enim. Aliquam at fermentum velit, id fringilla mauris. Vestibulum varius commodo quam eget eleifend. Mauris dictum suscipit enim ut dignissim. In ac dictum mi."})]})]}),Object(r.jsx)("img",{className:"Image ",src:t.image})]})})]})}),T=function(e){var t=e.items.map((function(e){return Object(r.jsxs)("div",{className:"center_flex flex_columb story",children:[Object(r.jsxs)("div",{className:"red_back pad_8 w_max",children:[Object(r.jsx)("div",{className:"text pad_8 news_title",children:e.title}),Object(r.jsx)("div",{className:"text  news_date",children:e.date})]}),Object(r.jsx)("div",{className:"text news_text pad_8",children:e.story_1}),Object(r.jsx)("div",{className:"news_image  border",children:Object(r.jsx)("img",{src:e.image})}),Object(r.jsx)("div",{className:" text news_text pad_8",children:e.story_2})]})}));return Object(r.jsx)(i.a.Fragment,{children:t})},B=(s(16),s.p+"static/media/playing_cards.77a4c783.jpg"),L=[{title:"Release date",date:"01/06/2021",story_1:"So the cards are fianlly realseing and we are so hyped it.        Hopeffy all u slavic mafak love this shit and if u aint slavic ul become one. For mother Russia baby.",image:B,story_2:"We gotg some picky blinder looking boiz, we got bikers gangs,       we got some nigga mafakas and finally cool as russian comrads."},{title:"Our first card even nigga",date:"20/04/2021",story_1:"So the cards are fianlly realseing and we are so hyped it.       Hopeffy all u slavic mafak love this shit and if u aint slavic ul become one. For mother Russia baby.      We gotg some picky blinder looking boiz, we got bikers gangs,       we got some nigga mafakas and finally cool as russian comrads.",image:B,story_2:"We gotg some picky blinder looking boiz, we got bikers gangs,       we got some nigga mafakas and finally cool as russian comrads."},{title:"Ur moms release form this bed",date:"01/01/2021",story_1:"So the cards are fianlly realseing and we are so hyped it.       Hopeffy all u slavic mafak love this shit and if u aint slavic ul become one. For mother Russia baby.",image:B,story_2:"We gotg some picky blinder looking boiz, we got bikers gangs,       we got some nigga mafakas and finally cool as russian comrads.       We gotg some picky blinder looking boiz, we got bikers gangs,       we got some nigga mafakas and finally cool as russian comrads.      We gotg some picky blinder looking boiz, we got bikers gangs,       we got some nigga mafakas and finally cool as russian comrads.      We gotg some picky blinder looking boiz, we got bikers gangs,       we got some nigga mafakas and finally cool as russian comrads."}],R=function(){return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h1",{className:"page_title",children:"News"}),Object(r.jsx)("h1",{className:"pageDescription",children:"Find out about past and current info"}),Object(r.jsx)("div",{className:"news_container center_flex flex_columb",children:Object(r.jsx)(T,{items:L})})]})},K=(s(17),s(18),[{name:"Animal Gangdom",price:6.99,image:y,path:"/products/animal_gangdom",logo:Object(r.jsx)("div",{className:"Title",children:Object(r.jsx)("img",{className:"logo_image",src:z})})},{name:"Greek Gods",price:19.99,image:q,path:"/products/greek_gods"},{name:"Anchient Civs",price:8.99,image:S,path:"/products/anchient_civs"},{name:"Anchient Civs 2",price:12.99,image:C,path:"/products/anchient_civs_2"}]),M=function(){var e=K.map((function(e){return Object(r.jsx)(A,{path:e.path,children:Object(r.jsx)(I,{item:e})})}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{}),Object(r.jsx)(A,{path:"/",children:Object(r.jsx)(E,{})}),Object(r.jsx)(A,{path:"/news",children:Object(r.jsx)(R,{})}),Object(r.jsx)(A,{path:"/products",children:Object(r.jsx)(F,{items:K})}),e]})};n.a.render(Object(r.jsx)(M,{}),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.47f5d7bf.chunk.js.map