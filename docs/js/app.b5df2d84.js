(function(t){function e(e){for(var n,o,i=e[0],l=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0670":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("ce5b"));a("bf40"),r.default.use(s.default),e.default=new s.default({icons:{iconfont:"mdi"}})},"08b2":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-2"},[a("v-card-title",[t.admin?a("v-btn",{staticClass:"mr-1",attrs:{color:"red",small:"",icon:"",loading:t.loading},on:{click:function(e){return t.deleteLocalization(t.localization.key)}}},[a("v-icon",{attrs:{small:""}},[t._v("delete")])],1):t._e(),t.edit?a("v-btn",{staticClass:"mr-1",attrs:{small:"",icon:"",color:"red"},on:{click:function(e){t.edit=!1}}},[a("v-icon",{attrs:{small:""}},[t._v("clear")])],1):a("v-btn",{staticClass:"mr-1",attrs:{small:"",icon:""},on:{click:function(e){t.edit=!0}}},[a("v-icon",{attrs:{small:""}},[t._v("add")])],1),a("span",{staticClass:"mx-1"},[t._v(t._s(t.localization.key))]),t._l(t.localization.tags,(function(e){return a("v-chip",{key:e,staticClass:"mx-1",attrs:{small:""}},[t._v(t._s(e))])}))],2),a("v-card-text",[t.edit?a("div",[a("v-select",{staticClass:"mb-1 mt-0 pt-0",attrs:{label:t.$t("add.language"),items:t.languages,rules:t.languageRules},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}}),a("div",{staticClass:"d-flex"},[a("v-textarea",{staticClass:"mb-1 mt-0 pt-0",attrs:{label:t.$t("add.text"),clearable:"",rows:"1",rules:t.textRules,"auto-grow":"","no-resize":"",compact:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("v-btn",{staticClass:"ml-2",attrs:{color:"primary",disabled:!t.text||!t.language,loading:t.loading},on:{click:function(e){return t.save(t.localization.key)}}},[t._v(t._s(t.$t("add.save")))])],1)],1):t._e(),t._l(t.localization.variants,(function(e){return a("div",{staticClass:"div"},[a("div",{staticClass:"my-1"},[a("div",{staticClass:"mr-2"},[t.admin?a("v-chip",{staticClass:"px-1",attrs:{"x-small":"",color:"red",loading:t.loading},on:{click:function(a){return t.deleteVariant(e,t.localization.key)}}},[a("v-icon",{attrs:{"x-small":"",color:"white"}},[t._v("delete")])],1):t._e(),t.admin?a("v-chip",{staticClass:"px-1 mr-2",attrs:{"x-small":"",color:"green",loading:t.loading},on:{click:function(a){return t.selectVariant(e,t.localization.key)}}},[a("v-icon",{attrs:{"x-small":"",color:"white"}},[t._v("done")])],1):t._e(),a("v-chip",{staticClass:"px-1",attrs:{"x-small":""}},[t._v(t._s(e.language))]),e.username?a("v-chip",{staticClass:"px-1",attrs:{"x-small":""}},[t._v(t._s(e.username.substr(0,25)))]):t._e(),e.selected?a("v-chip",{staticClass:"green px-1",attrs:{"x-small":""}},[a("v-icon",{attrs:{small:"",color:"white"}},[t._v("done")])],1):t._e()],1),a("p",{staticClass:"mb-0 align-self-center"},[t._v(t._s(e.text))])]),a("v-divider")],1)}))],2)],1)},r=[]},"18f6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=n.__importStar(a("874e")),i=n.__importStar(a("97e5")),l=n.__importDefault(a("19cb")),u=n.__importDefault(a("35ce"));let c=(()=>{let t=class extends r.default{constructor(){super(...arguments),this.data=[],this.languages=[],this.tags=[],this.tagFilter=[],this.languageFilter=[]}get filteredData(){return this.data.filter(t=>{for(const e of t.tags)if(this.tagFilter.includes(e))return!0;return!1}).map(t=>{const e=Object.assign({},t);return e.variants=e.variants.filter(t=>this.languageFilter.includes(t.language)),e})}setTagFilter(t){this.tagFilter=t}setLanguageFilter(t){this.languageFilter=t}mounted(){this.loadData()}async loadData(){try{const t=await i.getLocalizations();this.data=t,this.data.forEach(t=>{t.variants=t.variants.sort((t,e)=>t.selected&&!e.selected?-1:!t.selected&&e.selected?1:0)});const e=new Set,a=new Set;for(const n of t){for(const t of n.variants.map(t=>t.language))e.add(t);for(const t of n.tags)a.add(t)}this.languages=Array.from(e),this.tags=Array.from(a)}catch(t){o.setSnackbarError(t.response.data)}}};return t=n.__decorate([s.default({components:{LocalizationCard:l.default,Filters:u.default},props:{admin:Boolean}})],t),t})();e.default=c},"19cb":function(t,e,a){"use strict";a.r(e);var n=a("08b2"),r=a("23bc");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"1a12":function(t,e,a){},"1fbb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{flat:"",app:""}},[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("a",{on:{click:t.goHome}},[t._v(t._s(t.$t("title")))])]),a("v-spacer"),a("v-btn",{attrs:{text:"",icon:"",color:"grey"},on:{click:t.toggleMode}},[a("v-icon",{attrs:{small:""}},[t._v("brightness_2")])],1),a("v-btn",{attrs:{text:"",icon:"",color:"grey"},on:{click:t.goToAdmin}},[a("v-icon",{attrs:{small:""}},[t._v("vpn_key")])],1),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{text:"",icon:"",color:"grey"}},n),[t._v(t._s(t.currentLocale.icon))])]}}])},[a("v-list",t._l(t.locales,(function(e){return a("v-list-item",{key:e.code,on:{click:function(a){return t.changeLanguage(e.code)}}},[a("v-list-item-title",[t._v(t._s(e.icon))])],1)})),1)],1)],1)],1)},r=[]},"22b2":function(t,e,a){"use strict";a.r(e);var n=a("d7aa"),r=a("6a01");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"23bc":function(t,e,a){"use strict";a.r(e);var n=a("d11d"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"286c":function(t,e,a){"use strict";a.r(e);var n=a("f4d4"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"30f3":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Filters",{attrs:{languages:t.languages,tags:t.tags,setTagFilter:t.setTagFilter,setLanguageFilter:t.setLanguageFilter}}),t._l(t.filteredData,(function(e){return a("LocalizationCard",{key:e.key,attrs:{languages:t.languages,localization:e,loadData:t.loadData,admin:t.admin}})}))],2)},r=[]},3308:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-container pa-4"},[a("div",{staticClass:"d-flex justify-center"},[a("div",{staticClass:"headline pb-4"},[t._v(t._s(t.$t("notFound")))])])])},r=[]},3530:function(t,e,a){"use strict";a.r(e);var n=a("a985"),r=a("3e58");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"35ce":function(t,e,a){"use strict";a.r(e);var n=a("fd43"),r=a("9962");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"3d48":function(t,e,a){"use strict";a.r(e);var n=a("7402"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"3dfd":function(t,e,a){"use strict";a.r(e);var n=a("8c8d"),r=a("6f68");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"3e58":function(t,e,a){"use strict";a.r(e);var n=a("8602"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"46cd":function(t,e,a){"use strict";a.r(e);var n=a("e5f4"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},4720:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1"));let o=(()=>{let t=class extends r.default{};return t=n.__decorate([s.default],t),t})();e.default=o},"579d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=n.__importStar(a("874e"));let i=(()=>{let t=class extends r.default{constructor(){super(...arguments),this.show=!1}get password(){return o.password()}set password(t){o.setPassword(t)}};return t=n.__decorate([s.default],t),t})();e.default=i},"5b65":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("d178")),s=n.__importDefault(a("22b2")),o=n.__importStar(a("874e")),i=n.__importDefault(a("d2d0")),l=a("fe0b");e.default={components:{Navbar:r.default,Snackbar:s.default,CookieLaw:i.default},created(){this.$vuetify.theme.dark=o.dark(),document.title=l.i18n.t("title")}}},"5dfc":function(t,e,a){"use strict";var n=a("1a12"),r=a.n(n);r.a},6591:function(t,e,a){"use strict";a.r(e);var n=a("579d"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"6a01":function(t,e,a){"use strict";a.r(e);var n=a("cd00"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"6f39":function(t,e,a){"use strict";a.r(e);var n=a("18f6"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"6f68":function(t,e,a){"use strict";a.r(e);var n=a("5b65"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"72aa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.messages=void 0,e.messages={ru:{title:"Локалайзер",notFound:"Страница не найдена",cookie:{button:"Чудно!",message:"Мы за вами не следим. Кукисы используются лишь для сохранения настроек типа юзернейма, цветовой темы и языка у вас локально."},admin:{title:"Админка",description:"Введите пароль, который задан на сервере, и вы сможете выбирать и модерировать переводы. Загружайте и качайте существующие переводы по API.",password:"Пароль"},username:"Юзернейм",description:"Привет! Используйте этот сайт, если хотите помочь разработчикам и добавить, либо поправить перевод строк продукта. По желанию можете указать свой юзернейм. Спасибо!",errors:{textLength:"Текст не может быть пустым",language:"Нужно указать язык"},add:{text:"Текст",save:"Сохранить",language:"Язык"},close:"Закрыть"},en:{title:"Localizer",notFound:"Page not found",cookie:{button:"Nice!",message:"We don't track you. Cookies are used only to save data locally like username, dark mode and language setting."},admin:{title:"Admin panel",description:"Provide the password here set on the backend and feel free to moderate and pick translations. You can upload and download translations through API.",password:"Password"},username:"Username",description:"Hi there! Use this website to help developers add new or correct existing localizations in the product. You can set your username if you want. Thank you!",errors:{textLength:"Text cannot be empty",language:"You need to select language"},add:{text:"Text",save:"Save",language:"Language"},close:"Close"}}},7402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=n.__importDefault(a("aa92")),i=n.__importDefault(a("d5f8"));let l=(()=>{let t=class extends r.default{};return t=n.__decorate([s.default({components:{UsernameInput:o.default,LocalizationCards:i.default}})],t),t})();e.default=l},"83fa":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{attrs:{label:t.$t("username")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})},r=[]},8602:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=n.__importDefault(a("874b")),i=n.__importDefault(a("d5f8"));let l=(()=>{let t=class extends r.default{};return t=n.__decorate([s.default({components:{PasswordInput:o.default,LocalizationCards:i.default}})],t),t})();e.default=l},"874b":function(t,e,a){"use strict";a.r(e);var n=a("8b08"),r=a("6591");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"874e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setPassword=e.setUsername=e.setDark=e.setLanguage=e.hideSnackbar=e.setSnackbarError=e.setSnackbar=e.password=e.username=e.dark=e.language=e.snackbar=e.store=void 0;const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2f62")),o=n.__importDefault(a("0e44"));r.default.use(s.default);const i={state:{snackbar:{message:"",active:!1,color:"success"},language:void 0,dark:!1,username:void 0,password:void 0},mutations:{setSnackbar(t,e){t.snackbar=e},setLanguage(t,e){t.language=e},setDark(t,e){t.dark=e},setUsername(t,e){t.username=e},setPassword(t,e){t.password=e}},getters:{snackbar:t=>t.snackbar,language:t=>t.language,dark:t=>t.dark,username:t=>t.username,password:t=>t.password},plugins:[o.default({paths:["username","language","dark","password"]})]};e.store=new s.default.Store(i);const l=e.store.getters;e.snackbar=()=>l.snackbar,e.language=()=>l.language,e.dark=()=>l.dark,e.username=()=>l.username,e.password=()=>l.password,e.setSnackbar=t=>{e.store.commit("setSnackbar",t)},e.setSnackbarError=t=>{e.setSnackbar({message:t,color:"error",active:!0})},e.hideSnackbar=()=>{e.store.commit("setSnackbar",Object.assign(Object.assign({},e.store.state.snackbar),{active:!1}))},e.setLanguage=t=>{e.store.commit("setLanguage",t)},e.setDark=t=>{e.store.commit("setDark",t)},e.setUsername=t=>{e.store.commit("setUsername",t)},e.setPassword=t=>{e.store.commit("setPassword",t)}},"8b08":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",label:t.$t("admin.password"),type:t.show?"text":"password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})},r=[]},"8c8d":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:t.$store.state.dark}},[a("cookie-law",{attrs:{theme:"blood-orange",buttonText:t.$t("cookie.button"),message:t.$t("cookie.message")}}),a("Navbar"),a("Snackbar"),a("v-content",[a("router-view")],1)],1)},r=[]},9703:function(t,e,a){"use strict";a.r(e);var n=a("3308"),r=a("ed6f");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"97e5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deleteLocalization=e.deleteVariant=e.selectVariant=e.postVariant=e.getLocalizations=void 0;const n=a("9ab4"),r=n.__importDefault(a("bc3a")),s="https://localizer.todorant.com";async function o(){return(await r.default.get(s+"/localizations")).data}async function i(t,e,a,n){return(await r.default.post(s+"/localizations/localization",{key:t,text:e,language:a,username:n})).data}async function l(t,e,a){return(await r.default.post(s+"/localizations/select",{key:t,id:e,password:a})).data}async function u(t,e,a){return(await r.default.post(s+"/localizations/delete",{key:t,id:e,password:a})).data}async function c(t,e){return(await r.default.post(s+"/localizations/localization/delete",{key:t,password:e})).data}e.getLocalizations=o,e.postVariant=i,e.selectVariant=l,e.deleteVariant=u,e.deleteLocalization=c},9962:function(t,e,a){"use strict";a.r(e);var n=a("dd59"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},a985:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-container pa-4"},[a("div",{staticClass:"headline"},[t._v(t._s(t.$t("admin.title")))]),a("div",{staticClass:"body-1"},[t._v(t._s(t.$t("admin.description")))]),a("PasswordInput"),a("LocalizationCards",{attrs:{admin:""}})],1)},r=[]},aa92:function(t,e,a){"use strict";a.r(e);var n=a("83fa"),r=a("286c");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},b2e0:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-container pa-4"},[a("div",{staticClass:"body-1"},[t._v(t._s(t.$t("description")))]),a("UsernameInput"),a("LocalizationCards")],1)},r=[]},b909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("8c4f")),o=n.__importDefault(a("bb51")),i=n.__importDefault(a("3530")),l=n.__importDefault(a("9703"));r.default.use(s.default);const u=new s.default({mode:"history",routes:[{path:"/",name:"home",component:o.default},{path:"/admin",name:"admin",component:i.default},{path:"*",name:"notFound",component:l.default}]});e.default=u},bb51:function(t,e,a){"use strict";a.r(e);var n=a("b2e0"),r=a("3d48");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},cd00:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=a("fe0b"),i=n.__importStar(a("874e"));let l=(()=>{let t=class extends r.default{get active(){return i.snackbar().active}set active(t){i.hideSnackbar()}get color(){return i.snackbar().color}get text(){const t=i.snackbar().message;return"string"===typeof t?"Internal Server Error"===t?o.i18n.t("errors.internal"):o.i18n.t(i.snackbar().message.toString()):t[o.i18n.locale]}};return t=n.__decorate([s.default],t),t})();e.default=l},cd49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("3dfd")),o=n.__importDefault(a("b909")),i=a("874e"),l=a("fe0b"),u=n.__importDefault(a("0670"));r.default.config.productionTip=!0,new r.default({router:o.default,store:i.store,i18n:l.i18n,vuetify:u.default,render:t=>t(s.default)}).$mount("#app")},d11d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=n.__importStar(a("874e")),i=a("fe0b"),l=n.__importStar(a("97e5"));let u=(()=>{let t=class extends r.default{constructor(){super(...arguments),this.text="",this.language="",this.edit=!1,this.textRules=[t=>!!(t||"").trim()||i.i18n.t("errors.textLength")],this.languageRules=[t=>!!(t||"").trim()||i.i18n.t("errors.language")],this.loading=!1}async save(t){this.loading=!0;try{await l.postVariant(t,this.text,this.language,o.username()),this.$props.loadData()}catch(e){o.setSnackbarError(e.response.data)}finally{this.loading=!1}}async selectVariant(t,e){this.loading=!0;try{await l.selectVariant(e,t._id,o.password()),this.$props.loadData()}catch(a){o.setSnackbarError(a.response.data)}finally{this.loading=!1}}async deleteVariant(t,e){this.loading=!0;try{await l.deleteVariant(e,t._id,o.password()),this.$props.loadData()}catch(a){o.setSnackbarError(a.response.data)}finally{this.loading=!1}}async deleteLocalization(t){this.loading=!0;try{await l.deleteLocalization(t,o.password()),this.$props.loadData()}catch(e){o.setSnackbarError(e.response.data)}finally{this.loading=!1}}};return t=n.__decorate([s.default({props:{localization:Object,languages:Array,loadData:Function,admin:Boolean}})],t),t})();e.default=u},d178:function(t,e,a){"use strict";a.r(e);var n=a("1fbb"),r=a("46cd");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);a("5dfc");var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},d5f8:function(t,e,a){"use strict";a.r(e);var n=a("30f3"),r=a("6f39");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},d7aa:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{app:"",timeout:4e3,top:"",color:t.color,flat:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("span",[t._v(t._s(t.text))]),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.active=!1}}},[t._v(t._s(t.$t("close")))])],1)},r=[]},dd59:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=a("60a3");let i=(()=>{let t=class extends r.default{constructor(){super(...arguments),this.tagsSelected=[],this.languagesSelected=[]}tagsSelectedChanged(t){this.$props.setTagFilter(t)}languagesSelectedChanged(t){this.$props.setLanguageFilter(t)}mounted(){this.tagsSelected=this.$props.tags,this.languagesSelected=this.$props.languages}toggleTag(t){this.tagsSelected.indexOf(t)>-1?this.tagsSelected=this.tagsSelected.filter(e=>e!==t):this.tagsSelected.push(t)}toggleLanguage(t){this.languagesSelected.indexOf(t)>-1?this.languagesSelected=this.languagesSelected.filter(e=>e!==t):this.languagesSelected.push(t)}};return n.__decorate([o.Watch("tagsSelected"),n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[Object]),n.__metadata("design:returntype",void 0)],t.prototype,"tagsSelectedChanged",null),n.__decorate([o.Watch("languagesSelected"),n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[Object]),n.__metadata("design:returntype",void 0)],t.prototype,"languagesSelectedChanged",null),t=n.__decorate([s.default({props:{languages:Array,tags:Array,setTagFilter:Function,setLanguageFilter:Function}})],t),t})();e.default=i},e5f4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=n.__importStar(a("874e")),i=a("fe0b");let l=(()=>{let t=class extends r.default{get locales(){return[{icon:"🇺🇸",code:"en"},{icon:"🇷🇺",code:"ru"}]}get currentLocale(){for(const t of this.locales)if(t.code===i.i18n.locale)return t}toggleMode(){o.setDark(!o.dark()),this.$vuetify.theme.dark=o.dark()}changeLanguage(t){i.i18n.locale=t,o.setLanguage(t),document.title=i.i18n.t("title")}goHome(){this.$router.replace("/")}goToAdmin(){this.$router.replace("/admin")}};return t=n.__decorate([s.default],t),t})();e.default=l},ed6f:function(t,e,a){"use strict";a.r(e);var n=a("4720"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},f4d4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2fe1")),o=n.__importStar(a("874e"));let i=(()=>{let t=class extends r.default{get username(){return o.username()}set username(t){o.setUsername(t)}};return t=n.__decorate([s.default],t),t})();e.default=i},fd43:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-2"},[t._l(t.tags,(function(e){return a("v-chip",{key:e,staticClass:"mx-1",attrs:{color:t.tagsSelected.indexOf(e)>-1?"primary":""},on:{click:function(a){return t.toggleTag(e)}}},[t._v(t._s(e))])})),t._l(t.languages,(function(e){return a("v-chip",{key:e,staticClass:"mx-1",attrs:{color:t.languagesSelected.indexOf(e)>-1?"primary":""},on:{click:function(a){return t.toggleLanguage(e)}}},[t._v(t._s(e))])}))],2)},r=[]},fe0b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.i18n=void 0;const n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("a925")),o=a("72aa"),i=n.__importStar(a("874e"));function l(){if(i.language())return i.language();{const t=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en").substr(0,2),e=["en","ru"];return e.indexOf(t)>-1?t:"en"}}r.default.use(s.default),e.i18n=new s.default({locale:l(),messages:o.messages})}});
//# sourceMappingURL=app.b5df2d84.js.map