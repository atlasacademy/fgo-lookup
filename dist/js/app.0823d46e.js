(function(e){function t(t){for(var i,r,n=t[0],o=t[1],c=t[2],m=0,g=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&g.push(l[r][0]),l[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(g.length)g.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,n=1;n<a.length;n++){var o=a[n];0!==l[o]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},l={app:0},s=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1870:function(e,t,a){"use strict";a("28f9")},"199c":function(e,t){},"23be":function(e,t,a){"use strict";var i=a("199c"),l=a.n(i);t["default"]=l.a},2535:function(e,t,a){"use strict";a("4d10")},"28f9":function(e,t,a){},3111:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}}),t("router-view",{key:e.$route.path})],1)},l=[]},"3dfd":function(e,t,a){"use strict";var i=a("3111"),l=a("23be"),s=(a("b88f"),a("2877")),r=Object(s["a"])(l["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"4d10":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),l=a("3dfd"),s=a("8c4f"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container container--lookup"},[t("h1",[e._v("FGO Dropsheet Lookup Tool")]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-12"},[t("SheetSelector",{attrs:{sheetId:e.sheetId},on:{"handle-sheet-select":e.handleSheetSelect}})],1),t("div",{staticClass:"col-sm-12"},[t("MatSelectorVisual",{attrs:{matRanges:e.matRanges,region:e.region,isClosed:e.isClosed,triggerReset:e.triggerReset},on:{"handle-mat-select":e.handleMatSelect,"handle-mat-toggle":e.handleMatToggle,"handle-trigger-reset":e.handleTriggerReset}})],1),t("div",{staticClass:"col-sm-12"},[t("ErrorMsg",{attrs:{errorMsg:e.errorMsg}})],1),t("div",{staticClass:"col-sm-12 container--button"},[t("button",{staticClass:"button--reset",attrs:{type:"button"},on:{click:function(t){return e.handleReset()}}},[e._v(" reset ")]),t("button",{staticClass:"button--link",attrs:{type:"button"},on:{click:function(t){return e.handleLink()}}},[e._v(" link ")])])]),t("SearchLink",{attrs:{searchLink:e.searchLink}}),e.isLoading?t("div",{staticClass:"overlay--loading"},[t("span",[e._v("loading...")])]):e._e(),t("Results",{attrs:{results:e.results}})],1)},n=[],o=a("bc3a"),c=a.n(o);const d="https://sheets.googleapis.com/v4/spreadsheets/",m="1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA",g="AIzaSyBOU6FQA09_mZnAmZBZ4YRt1NCEb0xTUbg",y=[{title:"Best 5 AP/Drop (JP)",sheetId:"843570146",sheetUrl:"Best%205%20AP%2FDrop%20%28JP%29"},{title:"Best 5 Droprate (JP)",sheetId:"263109949",sheetUrl:"Best%205%20Droprate%20%28JP%29"},{title:"Best 5 AP/Drop (NA)",sheetId:"1676231111",sheetUrl:"Best%205%20AP%2FDrop%20%28NA%29"},{title:"Best 5 Droprate (NA)",sheetId:"1587228013",sheetUrl:"Best%205%20Droprate%20%28NA%29"}],h=[{name:"Proof of Hero",startRange:"D5",endRange:"N9",rarity:"bronze",type:"mat",availability:"ALL",filename:"6503"},{name:"Evil Bone",startRange:"D10",endRange:"N14",rarity:"bronze",type:"mat",availability:"ALL",filename:"6516"},{name:"Dragon Fang",startRange:"D15",endRange:"N19",rarity:"bronze",type:"mat",availability:"ALL",filename:"6512"},{name:"Void's Dust",startRange:"D20",endRange:"N24",rarity:"bronze",type:"mat",availability:"ALL",filename:"6505"},{name:"Fool's Chain",startRange:"D25",endRange:"N29",rarity:"bronze",type:"mat",availability:"ALL",filename:"6522"},{name:"Deadly Poisonous Needle",startRange:"D30",endRange:"N34",rarity:"bronze",type:"mat",availability:"ALL",filename:"6527"},{name:"Mystic Spinal Fluid",startRange:"D35",endRange:"N39",rarity:"bronze",type:"mat",availability:"ALL",filename:"6530"},{name:"Stake of Wailing Night",startRange:"D42",endRange:"N46",rarity:"bronze",type:"mat",availability:"ALL",filename:"6533"},{name:"Mystic Gunpowder",startRange:"D47",endRange:"N51",rarity:"bronze",type:"mat",availability:"ALL",filename:"6534"},{name:"Small Bells of Absolution",startRange:"D52",endRange:"N56",rarity:"bronze",type:"mat",availability:"JP",filename:"6549"},{name:"Twilight Ceremonial Blade",startRange:"D57",endRange:"N61",rarity:"bronze",type:"mat",availability:"JP",filename:"6551"},{name:"Unforgettable Ashes",startRange:"D62",endRange:"N66",rarity:"bronze",type:"mat",availability:"JP",filename:"6552"},{name:"Seed of Yggdrasil",startRange:"D67",endRange:"N71",rarity:"silver",type:"mat",availability:"ALL",filename:"6502"},{name:"Ghost Lantern",startRange:"D72",endRange:"N76",rarity:"silver",type:"mat",availability:"ALL",filename:"6508"},{name:"Octuplet Crystal",startRange:"D79",endRange:"N83",rarity:"silver",type:"mat",availability:"ALL",filename:"6515"},{name:"Serpent Jewel",startRange:"D84",endRange:"N88",rarity:"silver",type:"mat",availability:"ALL",filename:"6509"},{name:"Phoenix Feather",startRange:"D89",endRange:"N93",rarity:"silver",type:"mat",availability:"ALL",filename:"6501"},{name:"Eternal Gear",startRange:"D94",endRange:"N98",rarity:"silver",type:"mat",availability:"ALL",filename:"6510"},{name:"Forbidden Page",startRange:"D99",endRange:"N103",rarity:"silver",type:"mat",availability:"ALL",filename:"6511"},{name:"Homunculus Baby",startRange:"D104",endRange:"N108",rarity:"silver",type:"mat",availability:"ALL",filename:"6514"},{name:"Meteor Horseshoe",startRange:"D109",endRange:"N113",rarity:"silver",type:"mat",availability:"ALL",filename:"6513"},{name:"Great Knight Medal",startRange:"D116",endRange:"N120",rarity:"silver",type:"mat",availability:"ALL",filename:"6524"},{name:"Shell of Reminiscence",startRange:"D121",endRange:"N125",rarity:"silver",type:"mat",availability:"ALL",filename:"6526"},{name:"Refined Magatama",startRange:"D126",endRange:"N130",rarity:"silver",type:"mat",availability:"ALL",filename:"6532"},{name:"Eternal Ice",startRange:"D131",endRange:"N135",rarity:"silver",type:"mat",availability:"ALL",filename:"6535"},{name:"Giant's Ring",startRange:"D136",endRange:"N140",rarity:"silver",type:"mat",availability:"ALL",filename:"6537"},{name:"Aurora Steel",startRange:"D141",endRange:"N145",rarity:"silver",type:"mat",availability:"ALL",filename:"6536"},{name:"Soundless Bell",startRange:"D146",endRange:"N150",rarity:"silver",type:"mat",availability:"ALL",filename:"6538"},{name:"Arrowhead of Malice",startRange:"D153",endRange:"N157",rarity:"silver",type:"mat",availability:"ALL",filename:"6541"},{name:"Crown of Silvery Light",startRange:"D158",endRange:"N162",rarity:"silver",type:"mat",availability:"ALL",filename:"6543"},{name:"Divine Spiritron",startRange:"D163",endRange:"N167",rarity:"silver",type:"mat",availability:"ALL",filename:"6545"},{name:"Rainbow Thread Ball",startRange:"D168",endRange:"N172",rarity:"silver",type:"mat",availability:"JP",filename:"6547"},{name:"Scales of Phantasy",startRange:"D173",endRange:"N177",rarity:"silver",type:"mat",availability:"JP",filename:"6550"},{name:"Claw of Chaos",startRange:"D178",endRange:"N182",rarity:"gold",type:"mat",availability:"ALL",filename:"6507"},{name:"Heart of the Foreign God",startRange:"D183",endRange:"N187",rarity:"gold",type:"mat",availability:"ALL",filename:"6517"},{name:"Dragon's Reverse Scale",startRange:"D190",endRange:"N194",rarity:"gold",type:"mat",availability:"ALL",filename:"6506"},{name:"Spirit Root",startRange:"D195",endRange:"N199",rarity:"gold",type:"mat",availability:"ALL",filename:"6518"},{name:"Warhorse's Young Horn",startRange:"D200",endRange:"N204",rarity:"gold",type:"mat",availability:"ALL",filename:"6519"},{name:"Tearstone of Blood",startRange:"D205",endRange:"N209",rarity:"gold",type:"mat",availability:"ALL",filename:"6520"},{name:"Black Beast Grease",startRange:"D210",endRange:"N214",rarity:"gold",type:"mat",availability:"ALL",filename:"6521"},{name:"Lamp of Evil-Sealing",startRange:"D215",endRange:"N219",rarity:"gold",type:"mat",availability:"ALL",filename:"6523"},{name:"Scarab of Wisdom",startRange:"D220",endRange:"N224",rarity:"gold",type:"mat",availability:"ALL",filename:"6525"},{name:"Fruit of Eternity",startRange:"D227",endRange:"N231",rarity:"gold",type:"mat",availability:"ALL",filename:"6546"},{name:"Demon Flame Lantern",startRange:"D232",endRange:"N236",rarity:"gold",type:"mat",availability:"JP",filename:"6548"},{name:"Secret Gem of Saber",startRange:"T5",endRange:"AD9",rarity:"gold",type:"skill",availability:"ALL",filename:"6201"},{name:"Secret Gem of Archer",startRange:"T10",endRange:"AD14",rarity:"gold",type:"skill",availability:"ALL",filename:"6202"},{name:"Secret Gem of Lancer",startRange:"T15",endRange:"AD19",rarity:"gold",type:"skill",availability:"ALL",filename:"6203"},{name:"Secret Gem of Rider",startRange:"T20",endRange:"AD24",rarity:"gold",type:"skill",availability:"ALL",filename:"6204"},{name:"Secret Gem of Caster",startRange:"T25",endRange:"AD29",rarity:"gold",type:"skill",availability:"ALL",filename:"6205"},{name:"Secret Gem of Assassin",startRange:"T30",endRange:"AD34",rarity:"gold",type:"skill",availability:"ALL",filename:"6206"},{name:"Secret Gem of Berserker",startRange:"T35",endRange:"AD39",rarity:"gold",type:"skill",availability:"ALL",filename:"6207"},{name:"Magic Gem of Saber",startRange:"T42",endRange:"AD46",rarity:"silver",type:"skill",availability:"ALL",filename:"6101"},{name:"Magic Gem of Archer",startRange:"T47",endRange:"AD51",rarity:"silver",type:"skill",availability:"ALL",filename:"6102"},{name:"Magic Gem of Lancer",startRange:"T52",endRange:"AD56",rarity:"silver",type:"skill",availability:"ALL",filename:"6103"},{name:"Magic Gem of Rider",startRange:"T57",endRange:"AD61",rarity:"silver",type:"skill",availability:"ALL",filename:"6104"},{name:"Magic Gem of Caster",startRange:"T62",endRange:"AD66",rarity:"silver",type:"skill",availability:"ALL",filename:"6105"},{name:"Magic Gem of Assassin",startRange:"T67",endRange:"AD71",rarity:"silver",type:"skill",availability:"ALL",filename:"6106"},{name:"Magic Gem of Berserker",startRange:"T72",endRange:"AD76",rarity:"silver",type:"skill",availability:"ALL",filename:"6107"},{name:"Gem of Saber",startRange:"T79",endRange:"AD83",rarity:"bronze",type:"skill",availability:"ALL",filename:"6001"},{name:"Gem of Archer",startRange:"T84",endRange:"AD88",rarity:"bronze",type:"skill",availability:"ALL",filename:"6002"},{name:"Gem of Lancer",startRange:"T89",endRange:"AD93",rarity:"bronze",type:"skill",availability:"ALL",filename:"6003"},{name:"Gem of Rider",startRange:"T94",endRange:"AD98",rarity:"bronze",type:"skill",availability:"ALL",filename:"6004"},{name:"Gem of Caster",startRange:"T99",endRange:"AD103",rarity:"bronze",type:"skill",availability:"ALL",filename:"6005"},{name:"Gem of Assassin",startRange:"T104",endRange:"AD108",rarity:"bronze",type:"skill",availability:"ALL",filename:"6006"},{name:"Gem of Berserker",startRange:"T109",endRange:"AD113",rarity:"bronze",type:"skill",availability:"ALL",filename:"6007"},{name:"Saber Monument",startRange:"T116",endRange:"AD120",rarity:"gold",type:"ascension",availability:"ALL",filename:"7101"},{name:"Archer Monument",startRange:"T121",endRange:"AD125",rarity:"gold",type:"ascension",availability:"ALL",filename:"7102"},{name:"Lancer Monument",startRange:"T126",endRange:"AD130",rarity:"gold",type:"ascension",availability:"ALL",filename:"7103"},{name:"Rider Monument",startRange:"T131",endRange:"AD135",rarity:"gold",type:"ascension",availability:"ALL",filename:"7104"},{name:"Caster Monument",startRange:"T136",endRange:"AD140",rarity:"gold",type:"ascension",availability:"ALL",filename:"7105"},{name:"Assassin Monument",startRange:"T141",endRange:"AD145",rarity:"gold",type:"ascension",availability:"ALL",filename:"7106"},{name:"Berserker Monument",startRange:"T146",endRange:"AD150",rarity:"gold",type:"ascension",availability:"ALL",filename:"7107"},{name:"Saber Piece",startRange:"T153",endRange:"AD157",rarity:"silver",type:"ascension",availability:"ALL",filename:"7001"},{name:"Archer Piece",startRange:"T158",endRange:"AD162",rarity:"silver",type:"ascension",availability:"ALL",filename:"7002"},{name:"Lancer Piece",startRange:"T163",endRange:"AD167",rarity:"silver",type:"ascension",availability:"ALL",filename:"7003"},{name:"Rider Piece",startRange:"T168",endRange:"AD172",rarity:"silver",type:"ascension",availability:"ALL",filename:"7004"},{name:"Caster Piece",startRange:"T173",endRange:"AD177",rarity:"silver",type:"ascension",availability:"ALL",filename:"7005"},{name:"Assassin Piece",startRange:"T178",endRange:"AD182",rarity:"silver",type:"ascension",availability:"ALL",filename:"7006"},{name:"Berserker Piece",startRange:"T183",endRange:"AD187",rarity:"silver",type:"ascension",availability:"ALL",filename:"7007"},{name:"Primordial Lanugo",startRange:"T190",endRange:"AD194",rarity:"gold",type:"mat",availability:"ALL",filename:"6528"},{name:"Cursed Beast Gallstone",startRange:"T195",endRange:"AD199",rarity:"gold",type:"mat",availability:"ALL",filename:"6529"},{name:"Mysterious Divine Wine",startRange:"T200",endRange:"AD204",rarity:"gold",type:"mat",availability:"ALL",filename:"6531"},{name:"Reactor Core of Dawn",startRange:"T205",endRange:"AD209",rarity:"gold",type:"mat",availability:"ALL",filename:"6539"},{name:"Tsukumo Mirror",startRange:"T210",endRange:"AD214",rarity:"gold",type:"mat",availability:"ALL",filename:"6540"},{name:"Egg of Truth",startRange:"T215",endRange:"AD219",rarity:"gold",type:"mat",availability:"ALL",filename:"6542"},{name:"Fragment of a Twinkling Star",startRange:"T220",endRange:"AD224",rarity:"gold",type:"mat",availability:"ALL",filename:"6544"}];var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container--sheet-selector"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.sheetUrl,expression:"sheetUrl"}],ref:"sheetSelector",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sheetUrl=t.target.multiple?a:a[0]},e.handleChange]}},e._l(e.sheetIds,(function(a){return t("option",{key:a.sheetId,attrs:{"data-key":a.sheetId},domProps:{value:a.sheetUrl}},[e._v(e._s(a.title))])})),0)])},u=[],f={name:"SheetSelector",props:{sheetId:String},data(){return{sheetIds:y,sheetUrl:"Best%205%20AP%2FDrop%20%28JP%29"}},methods:{handleChange(e){""!==e.target.value?this.$emit("handle-sheet-select",{key:e.target.querySelector(":checked").getAttribute("data-key"),value:e.target.value}):this.$emit("handle-sheet-select",{key:"",value:""})}},mounted:function(){const e=this.$refs.sheetSelector.querySelector("option"),t=e.getAttribute("data-key"),a=e.value;this.$emit("handle-sheet-select",{key:t,value:a})},watch:{sheetId:{immediate:!1,handler(e){const t=this.$refs.sheetSelector.querySelector('option[data-key="'+e+'"').value;this.sheetUrl=t}}}},p=f,R=(a("78ff"),a("2877")),b=Object(R["a"])(p,v,u,!1,null,"40323432",null),L=b.exports,A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container--mat-selector"},[t("div",{staticClass:"container--mat-filter container-fluid"},[t("div",{staticClass:"row"},[e._m(0),t("div",{staticClass:"col-xs-3 col--filter"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter gold",attrs:{type:"checkbox",id:"gold",value:"gold"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"gold")>-1:e.matRarityFilter},on:{change:[function(t){var a=e.matRarityFilter,i=t.target,l=!!i.checked;if(Array.isArray(a)){var s="gold",r=e._i(a,s);i.checked?r<0&&(e.matRarityFilter=a.concat([s])):r>-1&&(e.matRarityFilter=a.slice(0,r).concat(a.slice(r+1)))}else e.matRarityFilter=l},e.handleFilter]}}),t("label",{attrs:{for:"gold"}},[e._v("gold")])]),t("div",{staticClass:"col-xs-3 col--filter"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter silver",attrs:{type:"checkbox",id:"silver",value:"silver"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"silver")>-1:e.matRarityFilter},on:{change:[function(t){var a=e.matRarityFilter,i=t.target,l=!!i.checked;if(Array.isArray(a)){var s="silver",r=e._i(a,s);i.checked?r<0&&(e.matRarityFilter=a.concat([s])):r>-1&&(e.matRarityFilter=a.slice(0,r).concat(a.slice(r+1)))}else e.matRarityFilter=l},e.handleFilter]}}),t("label",{attrs:{for:"silver"}},[e._v("silver")])]),t("div",{staticClass:"col-xs-3 col--filter"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter bronze",attrs:{type:"checkbox",id:"bronze",value:"bronze"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"bronze")>-1:e.matRarityFilter},on:{change:[function(t){var a=e.matRarityFilter,i=t.target,l=!!i.checked;if(Array.isArray(a)){var s="bronze",r=e._i(a,s);i.checked?r<0&&(e.matRarityFilter=a.concat([s])):r>-1&&(e.matRarityFilter=a.slice(0,r).concat(a.slice(r+1)))}else e.matRarityFilter=l},e.handleFilter]}}),t("label",{attrs:{for:"bronze"}},[e._v("bronze")])])]),t("div",{staticClass:"row"},[e._m(1),t("div",{staticClass:"col-xs-3 col--filter"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter mat",attrs:{type:"checkbox",id:"mat",value:"mat"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"mat")>-1:e.matTypeFilter},on:{change:[function(t){var a=e.matTypeFilter,i=t.target,l=!!i.checked;if(Array.isArray(a)){var s="mat",r=e._i(a,s);i.checked?r<0&&(e.matTypeFilter=a.concat([s])):r>-1&&(e.matTypeFilter=a.slice(0,r).concat(a.slice(r+1)))}else e.matTypeFilter=l},e.handleFilter]}}),t("label",{attrs:{for:"mat"}},[e._v("mat")])]),t("div",{staticClass:"col-xs-3 col--filter"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter skill",attrs:{type:"checkbox",id:"skill",value:"skill"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"skill")>-1:e.matTypeFilter},on:{change:[function(t){var a=e.matTypeFilter,i=t.target,l=!!i.checked;if(Array.isArray(a)){var s="skill",r=e._i(a,s);i.checked?r<0&&(e.matTypeFilter=a.concat([s])):r>-1&&(e.matTypeFilter=a.slice(0,r).concat(a.slice(r+1)))}else e.matTypeFilter=l},e.handleFilter]}}),t("label",{attrs:{for:"skill"}},[e._v("gems")])]),t("div",{staticClass:"col-xs-3 col--filter"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter ascension",attrs:{type:"checkbox",id:"ascension",value:"ascension"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"ascension")>-1:e.matTypeFilter},on:{change:[function(t){var a=e.matTypeFilter,i=t.target,l=!!i.checked;if(Array.isArray(a)){var s="ascension",r=e._i(a,s);i.checked?r<0&&(e.matTypeFilter=a.concat([s])):r>-1&&(e.matTypeFilter=a.slice(0,r).concat(a.slice(r+1)))}else e.matTypeFilter=l},e.handleFilter]}}),t("label",{attrs:{for:"ascension"}},[e._v("pieces/monus")])])]),t("div",{staticClass:"row"},[e.selectedMat?t("div",{staticClass:"col-xs-12 col--selected-mat"},[t("span",{staticClass:"span--label"},[e._v("Selected:")]),t("img",{staticClass:"image--selected-mat",attrs:{src:e.selectedMatPath,title:"Click to select another"},on:{click:e.handleToggle}}),e.isClosed?t("span",{staticClass:"icon--toggle-mat",attrs:{title:"Expand"},on:{click:e.handleToggle}},[e._v("◀")]):t("span",{staticClass:"icon--toggle-mat",attrs:{title:"Collapse"},on:{click:e.handleToggle}},[e._v("▼")])]):t("div",{staticClass:"col-xs-12 col--selected-mat"},[t("span",{staticClass:"span--label"},[e._v("Select a mat from below.")])])])]),t("div",{staticClass:"container--image",class:{closed:e.isClosed}},e._l(e.filteredMats,(function(a){return t("div",{key:a.filename,staticClass:"wrapper--image"},[t("img",{staticClass:"image--mat",class:{selected:e.isSelected==a.startRange+":"+a.endRange},attrs:{src:e.getUrl(a)},on:{click:function(t){return e.handleClick(a)}}})])})),0)])},k=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-xs-3 col--label"},[t("span",{staticClass:"wrapper--filter-label"},[e._v("Rarity")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-xs-3 col--label"},[t("span",{staticClass:"wrapper--filter-label"},[e._v("Type")])])}],_={name:"MatSelectorVisual",props:{matRanges:String,region:String,isClosed:Boolean,triggerReset:Boolean},data(){return{baseUrl:"./assets/",mats:h,filteredMats:h,isSelected:null,selectedMat:null,selectedMatPath:null,matRarityFilter:["gold","silver","bronze"],matTypeFilter:["mat","skill","ascension"]}},methods:{getUrl(e){return`https://static.atlasacademy.io/JP/Items/${e.filename}_bordered.png`},handleToggle(){this.$emit("handle-mat-toggle")},handleClick(e){e&&(this.selectedMat=e,this.selectedMatPath=this.getUrl(e),this.handleToggle(),this.isSelected=e.startRange+":"+e.endRange,this.$emit("handle-mat-select",`${e.startRange}:${e.endRange}`))},handleFilter(){let e=[],t=[],a=[];if(""===this.region||"JP"===this.region)e=h;else{let t=h.filter(e=>e.availability===this.region);e=[...e,...t]}for(let[,i]of Object.entries(this.matRarityFilter)){let a=e.filter(e=>e.rarity===i);t=[...t,...a]}for(let[,i]of Object.entries(this.matTypeFilter)){let e=t.filter(e=>e.type===i);a=[...a,...e]}this.filteredMats=a,a=a.sort((e,t)=>e.filename>t.filename?1:-1),this.filteredMats.filter(e=>`${e.startRange}:${e.endRange}`===this.isSelected).length<=0&&(this.isSelected="",this.$emit("handle-mat-select",""))}},watch:{matRanges:{immediate:!1,handler(){""!==this.matRanges?(this.isSelected=this.matRanges,this.selectedMat=this.filteredMats.filter(e=>`${e.startRange}:${e.endRange}`===this.isSelected),this.selectedMatPath=this.getUrl(this.selectedMat[0])):(this.selectedMat=null,this.selectedMatPath=null,this.isSelected=null)}},region:{immediate:!1,handler(){this.handleFilter()}},triggerReset:{immediate:!1,handler(){this.selectedMat=null,this.selectedMatPath=null,this.isSelected=null,this.matRarityFilter=["gold","silver","bronze"],this.matTypeFilter=["mat","skill","ascension"],this.handleFilter(),this.$emit("handle-trigger-reset")}}},created:function(){this.handleFilter()}},C=_,D=(a("be69"),Object(R["a"])(C,A,k,!1,null,"7222ebef",null)),T=D.exports,S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container--results"},[e.results?0===e.results.length?t("div",{staticClass:"grid grid--no-result"},[t("span",{staticClass:"notification--no-result"},[e._v("No results found.")])]):e.results.length>0?t("div",{staticClass:"grid"},[e._m(0),e._l(e.results,(function(a){return t("div",{key:a[0],staticClass:"row grid--row"},[t("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[t("span",{staticClass:"responsive--header"},[e._v("Area")]),e._v(" "+e._s(a.values[2].formattedValue)+" ")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-3"},[t("span",{staticClass:"responsive--header"},[e._v("Quest")]),t("div",{staticClass:"responsive--link"},[a.values[3].hyperlink?t("a",{staticClass:"link--wiki",attrs:{href:a.values[3].hyperlink,target:"_blank"}},[e._v(e._s(a.values[3].formattedValue))]):t("span",[e._v(e._s(a.values[3].formattedValue))])])]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[t("span",{staticClass:"responsive--header"},[e._v("AP")]),e._v(" "+e._s(a.values[4].formattedValue)+" ")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[t("span",{staticClass:"responsive--header"},[e._v("BP/AP")]),e._v(" "+e._s(a.values[5].formattedValue)+" ")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[t("span",{staticClass:"responsive--header"},[e._v("APD")]),e._v(" "+e._s(a.values[6].formattedValue)+" ")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[a.values[8].formattedValue?t("span",{staticClass:"responsive--header"},[e._v("%")]):e._e(),e._v(" "+e._s(a.values[8].formattedValue)+" "),a.values[8].formattedValue?t("span",[e._v("%")]):e._e()]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[t("span",{staticClass:"responsive--header"},[e._v("Runs")]),e._v(" "+e._s(a.values[10].formattedValue)+" ")])])}))],2):e._e():t("div",{staticClass:"grid--first-load"})])},F=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row grid--row grid--header"},[t("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[e._v("Area")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-3"},[e._v("Quest")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("AP")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("BP/AP")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("AP/Drop")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[e._v("Drop Chance")]),t("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("Runs")])])}],P={name:"Results",props:{results:{type:Array}},methods:{}},M=P,w=(a("1870"),Object(R["a"])(M,S,F,!1,null,"59cafbd2",null)),x=w.exports,N=function(){var e=this,t=e._self._c;return e.searchLink?t("div",{staticClass:"container--searchlink"},[t("input",{staticClass:"input--search-link",attrs:{readonly:"",type:"text"},domProps:{value:e.searchLink},on:{focus:function(e){return e.target.select()}}})]):e._e()},I=[],U={name:"SearchLink",props:{searchLink:String},methods:{}},B=U,$=(a("9511"),Object(R["a"])(B,N,I,!1,null,"d136cffc",null)),z=$.exports,G=function(){var e=this,t=e._self._c;return e.errorMsg?t("div",{staticClass:"container--errorMsg"},[t("span",{staticClass:"span--errorMsg"},[e._v(e._s(e.errorMsg))])]):e._e()},O=[],J={name:"ErrorMsg",props:{errorMsg:String},methods:{}},j=J,V=(a("8f67"),Object(R["a"])(j,G,O,!1,null,"428b9b19",null)),E=V.exports,H={name:"Lookup",components:{SheetSelector:L,MatSelectorVisual:T,Results:x,SearchLink:z,ErrorMsg:E},data(){return{sheetIds:y,mats:h,sheetUrl:"",sheetObj:{},sheetId:"",matRanges:"",isClosed:!0,triggerReset:!1,results:null,region:"",isLoading:!1,searchLink:null,errorMsg:null}},methods:{handleSheetSelect(e){e&&""!==e.key?(this.sheetId=e.key,this.sheetUrl=e.value,window.localStorage.setItem("sheetUrl",e.value),e.value.indexOf("JP")>-1?this.region="JP":this.region="ALL"):(this.sheetId="",this.sheetUrl="",window.localStorage.removeItem("sheetUrl")),""!==this.sheetUrl&&""!==this.matRanges&&this.handleSubmit()},handleMatSelect(e){""!==e?(this.matRanges=e,window.localStorage.setItem("matRanges",e)):(this.matRanges="",window.localStorage.removeItem("matRanges"),this.isClosed=!1,this.results=null),""!==this.sheetUrl&&""!==this.matRanges&&this.handleSubmit()},handleMatToggle(){this.isClosed=!this.isClosed},handleTriggerReset(){this.triggerReset=!1},handleSubmit(){if(this.errorMsg=null,this.results=null,this.sheetUrl)if(this.matRanges.length<5)this.errorMsg="Please select a mat.";else{this.isLoading=!0,this.isClosed=!0;const e=`${d}${m}?ranges=${this.sheetUrl}!${this.matRanges}&fields=sheets&key=${g}`;c.a.get(e).then(e=>{this.isLoading=!1;const{rowData:t}=e.data.sheets[0].data[0];t&&(t[0].values[2].formattedValue?this.results=t:this.results=[])}).catch(e=>{this.isLoading=!1,this.errorMsg="Error loading data.",console.log(e)})}else this.errorMsg="Please select a sheet."},handleReset(){this.results=null,this.searchLink=null,this.sheetId="843570146",this.matRanges="",this.region="JP",this.errorMsg=null,this.isClosed=!1,this.triggerReset=!0,window.localStorage.setItem("sheetUrl","Best%205%20AP%2FDrop%20%28JP%29"),window.localStorage.removeItem("matRanges"),"/"!==this.$route.path&&this.$router.push("/")},handleLink(){this.errorMsg=null,""!==this.sheetId&&""!==this.matRanges?this.searchLink=`${window.location.origin}${window.location.pathname}#${this.sheetId}/${this.matRanges}`:this.errorMsg="Please select a sheet and a mat first."}},mounted:function(){if(null!==window.localStorage.getItem("sheetUrl")&&null!==window.localStorage.getItem("matRanges")?(this.sheetUrl=window.localStorage.getItem("sheetUrl"),this.matRanges=window.localStorage.getItem("matRanges"),this.sheetId=this.sheetIds.find(e=>e.sheetUrl===this.sheetUrl).sheetId,this.sheetUrl.indexOf("JP")>-1?this.region="JP":this.region="ALL"):this.isClosed=!1,this.$route.path.length>1){const e=encodeURI(this.$route.path),t=e.substr(1).split("/");this.sheetId=t[0],this.matRanges=t[1],setTimeout(()=>{this.handleSubmit()},100)}}},q=H,W=(a("2535"),Object(R["a"])(q,r,n,!1,null,"21984c9d",null)),Q=W.exports;i["a"].use(s["a"]);const Y=[{path:"*",name:"Lookup",component:Q}],Z=new s["a"]({routes:Y,mode:"hash"});var K=Z;i["a"].config.productionTip=!1,new i["a"]({router:K,render:e=>e(l["default"])}).$mount("#app")},7693:function(e,t,a){},"78ff":function(e,t,a){"use strict";a("df44")},8273:function(e,t,a){},"8c44":function(e,t,a){},"8f67":function(e,t,a){"use strict";a("8273")},9511:function(e,t,a){"use strict";a("7693")},b88f:function(e,t,a){"use strict";a("e4f6")},be69:function(e,t,a){"use strict";a("8c44")},df44:function(e,t,a){},e4f6:function(e,t,a){}});
//# sourceMappingURL=app.0823d46e.js.map