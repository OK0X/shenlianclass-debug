(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"4d70":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"mypage"},[e("div",{staticClass:"page-content",staticStyle:{padding:"0px"}},[e("q-tabs",{staticStyle:{"background-color":"#ebecec",color:"black"},attrs:{dense:"","active-color":"primary","indicator-color":"white","active-bg-color":"white",align:"left"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"all",label:"全部问答"}}),e("q-tab",{attrs:{name:"highcoin",label:"悬赏问答"}}),e("q-tab",{attrs:{name:"myask",label:"我的提问"}}),e("q-tab",{attrs:{name:"creatask",label:"新建提问"}})],1),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{staticClass:"flex-col",attrs:{name:"all"}},[e("AskItem",{attrs:{asks:t.asks}}),t.pageMaxAll>1?e("q-pagination",{staticStyle:{"margin-top":"30px","align-self":"center"},attrs:{max:t.pageMaxAll,"direction-links":!0},on:{input:t.paginAllClick},model:{value:t.currentPageAll,callback:function(a){t.currentPageAll=a},expression:"currentPageAll"}}):t._e()],1),e("q-tab-panel",{staticClass:"flex-col",attrs:{name:"highcoin"}},[e("AskItem",{attrs:{asks:t.awardasks}}),t.pageMaxHcoin>1?e("q-pagination",{staticStyle:{"margin-top":"30px","align-self":"center"},attrs:{max:t.pageMaxHcoin,"direction-links":!0},on:{input:t.paginHcoinClick},model:{value:t.currentPageHcoin,callback:function(a){t.currentPageHcoin=a},expression:"currentPageHcoin"}}):t._e()],1),e("q-tab-panel",{staticClass:"flex-col",attrs:{name:"myask"}},[e("AskItem",{attrs:{asks:t.myasks}}),t.pageMaxMy>1?e("q-pagination",{staticStyle:{"margin-top":"30px","align-self":"center"},attrs:{max:t.pageMaxMy,"direction-links":!0},on:{input:t.paginMyClick},model:{value:t.currentPageMy,callback:function(a){t.currentPageMy=a},expression:"currentPageMy"}}):t._e()],1),e("q-tab-panel",{staticClass:"flex-col",attrs:{name:"creatask"}},[e("q-input",{attrs:{dense:!0,counter:"",maxlength:"50",placeholder:"一句话完整描述你的问题"},model:{value:t.asktitle,callback:function(a){t.asktitle=a},expression:"asktitle"}}),e("VueEditor",{staticStyle:{height:"300px",width:"100%",margin:"10px 0 50px 0"},attrs:{placeholder:"详细说明你的问题，以便获得更好的回答（选填）",useCustomImageHandler:""},on:{"image-added":t.handleImageAdded},model:{value:t.askDetail,callback:function(a){t.askDetail=a},expression:"askDetail"}}),e("span",{staticStyle:{"align-self":"flex-end",color:"rgba(0, 0, 0, 0.54)"}},[t._v(t._s(t.detailLength())+" / 1000")]),e("div",{staticStyle:{display:"flex"}},[e("q-checkbox",{attrs:{label:"悬赏"},model:{value:t.reward,callback:function(a){t.reward=a},expression:"reward"}}),e("img",{staticStyle:{width:"13px",height:"12px",margin:"5px","align-self":"center"},attrs:{src:"statics/coin.png"}}),e("q-input",{staticStyle:{width:"50px",height:"20px"},attrs:{type:"number",dense:""},model:{value:t.rewardNum,callback:function(a){t.rewardNum=t._n(a)},expression:"rewardNum"}})],1),e("q-btn",{staticStyle:{width:"100px"},attrs:{unelevated:"",color:"primary",label:"提交"},on:{click:t.createAsk}})],1)],1)],1),e("MyFooter"),e("LoginDialog",{attrs:{dialogData:t.loginDialog}})],1)},i=[],l=(e("7f7f"),e("a481"),e("a3d9")),n=e("5873"),r=e("a002"),o=e.n(r),c=(e("3452"),e("27ae"),e("51ff")),u=e("04a3"),d={components:{MyFooter:l["a"],VueEditor:n["a"],LoginDialog:c["a"],AskItem:u["a"]},data:function(){return{tab:"all",asktitle:"",askDetail:"",reward:!1,rewardNum:10,asks:[],awardasks:[],myasks:[],loginDialog:{show:!1,title:"快捷登陆"},pageMaxAll:1,currentPageAll:1,pageMaxHcoin:1,currentPageHcoin:1,pageMaxMy:1,currentPageMy:1,lastPageAll:1,lastPageHcoin:1,lastPageMy:1,offsetALL:0,offsetHcoin:0,offsetMy:0,limit:20}},computed:{user:{get:function(){return this.$store.state.user.user},set:function(t){this.$store.commit("user/updateUser",t)}}},mounted:function(){this.getAsks(),this.getAwardAsks(),this.getMyAsks()},methods:{paginMyClick:function(t){this.lastPageMy!==t&&(this.offsetMy+=this.limit*(t-this.lastPageMy),this.lastPageMy=t,this.getMyAsks())},paginAllClick:function(t){this.lastPageAll!==t&&(this.offsetALL+=this.limit*(t-this.lastPageAll),this.lastPageAll=t,this.getAsks())},paginHcoinClick:function(t){this.lastPageHcoin!==t&&(this.offsetHcoin+=this.limit*(t-this.lastPageHcoin),this.lastPageHcoin=t,this.getAwardAsks())},getMyAsks:function(){var t=this,a=(new Date).getTime()+this.global.requestExpireT,e={user_id:this.user.uuid,limit:this.limit+"",offset:this.offsetMy+""};this.$axios.get(this.global.api.backurl+"ask/getAsk",{params:e,headers:{"access-token":this.util.generateToken(JSON.stringify(e),a),timestamp2:a}}).then((function(a){if(200===a.status&&0===a.data.code){t.myasks=a.data.data.asks;var e=a.data.data.total[0].total;t.pageMaxMy=Math.ceil(e/t.limit)}})).catch((function(t){}))},getAwardAsks:function(){var t=this,a=(new Date).getTime()+this.global.requestExpireT,e={reward:"1",limit:this.limit+"",offset:this.offsetHcoin+""};this.$axios.get(this.global.api.backurl+"ask/getAsk",{params:e,headers:{"access-token":this.util.generateToken(JSON.stringify(e),a),timestamp2:a}}).then((function(a){if(200===a.status&&0===a.data.code){t.awardasks=a.data.data.asks;var e=a.data.data.total[0].total;t.pageMaxHcoin=Math.ceil(e/t.limit)}})).catch((function(t){}))},getAsks:function(){var t=this,a=(new Date).getTime()+this.global.requestExpireT,e={limit:this.limit+"",offset:this.offsetALL+""};this.$axios.get(this.global.api.backurl+"ask/getAsk",{params:e,headers:{"access-token":this.util.generateToken(JSON.stringify(e),a),timestamp2:a}}).then((function(a){if(200===a.status&&0===a.data.code){t.asks=a.data.data.asks;var e=a.data.data.total[0].total;t.pageMaxAll=Math.ceil(e/t.limit)}})).catch((function(t){}))},createAsk:function(){var t=this;if("undefined"===typeof this.user.uuid)return toast("请先登陆后再提问"),void(this.loginDialog.show=!0);if(""!==this.asktitle)if(this.reward&&this.user.coin-this.rewardNum<0)toast("您的积分余额不足");else{this.util.loadingShow(this);var a={user_id:this.user.uuid,title:this.asktitle,detail:this.askDetail,reward:this.reward,reward_num:this.rewardNum},e=(new Date).getTime()+this.global.requestExpireT;this.$axios.post(this.global.api.backurl+"ask/createAsk",a,{headers:{"access-token":this.util.generateToken(JSON.stringify(a),e),timestamp2:e}}).then((function(e){if(t.util.loadingHide(t),200===e.status&&0===e.data.code&&(toast("发布成功"),t.asks.unshift({answer_num:0,create_at:(new Date).getTime(),detail:t.askDetail,reward:t.reward,reward_num:t.rewardNum,user_id:t.user.uuid,title:t.asktitle,uuid:e.data.data}),t.myasks.unshift({answer_num:0,create_at:(new Date).getTime(),detail:t.askDetail,reward:t.reward,reward_num:t.rewardNum,user_id:t.user.uuid,title:t.asktitle,uuid:e.data.data}),t.reward&&t.awardasks.unshift({answer_num:0,create_at:(new Date).getTime(),detail:t.askDetail,reward:t.reward,reward_num:t.rewardNum,user_id:t.user.uuid,title:t.asktitle,uuid:e.data.data}),t.asktitle="",t.askDetail="",a.reward)){var s=JSON.parse(JSON.stringify(t.user));s.coin-=a.reward_num,t.user=s,o.a.setItem("user",JSON.stringify(t.user))}}))}else toast("请输入你的问题")},detailLength:function(){var t=this.askDetail.replace(/<\/?[^>]+(>|$)/g,""),a=t.length;return a},handleImageAdded:function(t,a,e,s){var i=this,l=(new Date).getTime()+t.name.substring(t.name.length-4);this.util.uploadFile2OSS(this,l,t,!0,null,(function(){a.insertEmbed(e,"image",i.global.api.aliyunosshostpubread+"/"+l),s()}))}}},g=d,h=e("2877"),m=e("eebe"),k=e.n(m),p=e("9989"),f=e("429b"),b=e("7460"),w=e("adad"),x=e("823b"),y=e("3b16"),A=e("27f9"),M=e("8f8e"),v=e("9c40"),P=Object(h["a"])(g,s,i,!1,null,"193dbd56",null);a["default"]=P.exports;k()(P,"components",{QPage:p["a"],QTabs:f["a"],QTab:b["a"],QTabPanels:w["a"],QTabPanel:x["a"],QPagination:y["a"],QInput:A["a"],QCheckbox:M["a"],QBtn:v["a"]})}}]);