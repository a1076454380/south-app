webpackJsonp([43],{MtDv:function(t,i){},awUf:function(t,i,s){"use strict";(function(t){var a=s("7QTg");s.n(a);i.a={name:"can",data:function(){return{swiperOption:{},swiperindex:0,starttime:"",endtime:"",startshow:!1,timety:0,alertboo:!1,uploadtarget:"",navboo:!1,navtext:"选择分类",navindex:-1,community:"选择社区",communityid:"",grid:"选择网格",gridid:"",texttype:"0",bottomdata:[],mydata:[],files:[],cfileDealAfterImg1:""}},components:{swiper:a.swiper,swiperSlide:a.swiperSlide},mounted:function(){this.myajax(),this.server=this.service+"/uploadworkImage"},computed:{swiper:function(){return this.$refs.mySwiper.swiper},service:function(){return this.$store.state.service},bottomtwoid:function(){return this.$store.state.bottomtwoid}},methods:{workphotod:function(i){var s=this;plus.nativeUI.actionSheet({title:"请选择",cancel:"取消",buttons:[{title:"删除"}]},function(a){switch(a.index){case 1:t.ajax({type:"post",url:s.service+"/deleteCorkByCfileId",dataType:"json",data:{cfileId:i},success:function(t){if(200==t.status){var i=function(){plus.nativeUI.toast("删除完成！"),s.myajax()};window.plus?i():document.addEventListener("plusready",i,!1)}else{var a=function(){plus.nativeUI.toast("删除失败!")};window.plus?a():document.addEventListener("plusready",a,!1)}}})}})},myajax:function(){plus.nativeUI.showWaiting("数据加载中,请稍后...");var i=this,s={createTime1:i.starttime,handingTime1:i.endtime,ctypeId:i.navid,cgridId:i.gridid,cmultipleCommunitiesId:i.communityid};""==i.starttime&&delete s.createTime1,""==i.endtime&&delete s.handingTime1,""==i.navid&&delete s.ctypeId,""==i.gridid&&delete s.cgridId,""==i.communityid&&delete s.cmultipleCommunitiesId,t.ajax({type:"post",url:i.service+"/queryReturnFile",dataType:"json",data:s,success:function(t){i.mydata=t.data,plus.nativeUI.closeWaiting()}})},back:function(){this.$router.back()},navchange:function(t,i){this.navindex=i,0==this.texttype?(this.community=t,this.communityid=i):1==this.texttype?(this.grid=t,this.gridid=i):(this.navtext=t,this.navid=i),this.navboo=!this.navboo},opennew:function(t,i){this.$store.state.windexid=i,this.$router.push({name:t})},navshow:function(i){var s=this;if(2==i)t.ajax({type:"post",url:s.service+"/queryCtypeOne",dataType:"json",success:function(t){s.bottomdata=t.data,s.navboo=!s.navboo,s.texttype=i}});else if(0==i)t.ajax({type:"post",url:s.service+"/queryCmultipleCommunities",dataType:"json",success:function(t){s.bottomdata=t.data,s.navboo=!s.navboo,s.texttype=i}});else if(1==i){if(""==s.communityid)return plus.nativeUI.toast("请先选择社区!"),!1;t.ajax({type:"post",url:s.service+"/queryByCmultipleCommunitiesId",dataType:"json",data:{cmultipleCommunitiesId:s.communityid},success:function(t){s.bottomdata=t.data,s.navboo=!s.navboo,s.texttype=i}})}},toswiper:function(t){this.swiperindex=t,this.swiper.slideTo(t,1e3,!1)},timeshow:function(t){var i=this;plus.nativeUI.pickDate(function(s){var a=s.date;0==t?i.starttime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate():i.endtime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()},function(t){console.log("未选择日期："+t.message)})},alerttab:function(){this.alertboo=!this.alertboo}}}}).call(i,s("7t+N"))},yf4G:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("awUf"),e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"tselect",attrs:{id:"wrapper"}},[a("transition",{attrs:{name:"alert"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertboo,expression:"alertboo"}],staticClass:"alert",on:{click:t.alerttab}},[a("div",{staticClass:"alert-inner"},[a("div",{staticClass:"alert-text"},[t._v("\n\t\t\t\t\t日期填写不完整\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"alert-setting"},[a("div",{staticClass:"setting-group"},[t._v("\n\t\t\t\t\t\t确定\n\t\t\t\t\t")])])])])]),t._v(" "),a("div",{attrs:{id:"head"}},[a("span",{on:{click:t.back}},[a("img",{attrs:{src:s("FnU6")}})]),t._v(" "),a("div",[t._v("美丽南钢")]),t._v(" "),a("span")]),t._v(" "),a("div",{attrs:{id:"main"}},[a("div",{staticClass:"tselect-top"},[a("div",{staticClass:"top-nav",class:0==t.swiperindex?"active":"",on:{click:function(i){t.toswiper(0)}}},[t._v("\n\t\t\t\t未受理案卷\n\t\t\t")]),t._v(" "),a("div",{staticClass:"top-nav",class:1==t.swiperindex?"active":"",on:{click:function(i){t.toswiper(1)}}},[t._v("\n\t\t\t\t未整改案卷\n\t\t\t")]),t._v(" "),a("div",{staticClass:"top-nav",class:2==t.swiperindex?"active":"",on:{click:function(i){t.toswiper(2)}}},[t._v("\n\t\t\t\t已整改案卷\n\t\t\t")])]),t._v(" "),a("div",{staticClass:"time-box"},[a("div",{staticClass:"time-left"},[a("div",{staticClass:"left-box"},[a("div",{staticClass:"box",on:{click:function(i){t.navshow("0")}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.community)+"\n\t\t\t\t\t\t"),a("img",{attrs:{src:s("9YEA")}})]),t._v(" "),a("span",{staticClass:"hr"}),t._v(" "),a("div",{staticClass:"box",on:{click:function(i){t.navshow("1")}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.grid)+"\n\t\t\t\t\t\t"),a("img",{attrs:{src:s("9YEA")}})]),t._v(" "),a("div",{staticClass:"box-go",on:{click:function(i){t.navshow("2")}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.navtext)+"\n\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"left-box"},[a("div",{staticClass:"box",on:{click:function(i){t.timeshow(0)}}},[t._v("\n\t\t\t\t\t\t"+t._s(""==t.starttime?"开始时间":t.starttime)+"\n\t\t\t\t\t\t"),a("img",{attrs:{src:s("9YEA")}})]),t._v(" "),a("span",{staticClass:"hr"}),t._v(" "),a("div",{staticClass:"box",on:{click:function(i){t.timeshow(1)}}},[t._v("\n\t\t\t\t\t\t"+t._s(""==t.endtime?"结束时间":t.endtime)+"\n\t\t\t\t\t\t"),a("img",{attrs:{src:s("9YEA")}})]),t._v(" "),a("div",{staticClass:"box-go",on:{click:t.myajax}},[t._v("\n\t\t\t\t\t\t搜索\n\t\t\t\t\t")])])])]),t._v(" "),a("swiper",{ref:"mySwiper",staticClass:"swiper-no-swiping",attrs:{options:t.swiperOption}},[a("swiper-slide",t._l(t.mydata,function(i){return 0==i.cfileResult?a("div",{staticClass:"box-group",on:{click:function(s){t.opennew("ydetail",i.cfileId)}}},[a("div",{staticClass:"group"},[a("div",{staticClass:"riqi"},[a("div",{staticClass:"circle width12"}),t._v(" "),a("span",[t._v(t._s(i.createTime1))])]),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(i.cmultipleCommunitiesName)+t._s(i.cgridName))]),t._v(" "),a("img",{attrs:{src:s("SQk+")},on:{click:function(s){s.stopPropagation(),t.workphotod(i.cfileId)}}})])]):t._e()})),t._v(" "),a("swiper-slide",t._l(t.mydata,function(i,e){return 1==i.cfileResult?a("div",{staticClass:"select-group",on:{click:function(s){t.opennew("changedetail",i.cfileId)}}},[a("div",{staticClass:"group-inner"},[a("div",{staticClass:"group-title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(i.createTime1)+"案卷-"+t._s(i.cmultipleCommunitiesName)+t._s(i.cgridName)+"\n\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"img-box"},[a("div",{staticClass:"img-group"},[a("div",{staticClass:"myimg-box"},[a("img",{attrs:{src:t._f("myimg")(i.cfileDealPrevImg1)}})]),t._v(" "),a("div",{staticClass:"state wwang"},[a("span",[t._v("整改前")])])]),t._v(" "),a("div",{staticClass:"img-group"},[a("div",{staticClass:"myimg-box"},[a("img",{attrs:{src:s("KXKX")}})]),t._v(" "),a("div",{staticClass:"state"},[t._v("\n\t\t\t\t\t\t\t\t\t上传图片\n\t\t\t\t\t\t\t\t")])])])])]):t._e()})),t._v(" "),a("swiper-slide",t._l(t.mydata,function(i){return 2==i.cfileResult?a("div",{staticClass:"select-group",on:{click:function(s){t.opennew("changedetail",i.cfileId)}}},[a("div",{staticClass:"group-inner"},[a("div",{staticClass:"group-title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(i.createTime1)+"案卷-"+t._s(i.cmultipleCommunitiesName)+t._s(i.cgridName)+"\n\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"img-box"},[a("div",{staticClass:"img-group"},[a("div",{staticClass:"myimg-box"},[a("img",{attrs:{src:t._f("myimg")(i.cfileDealPrevImg1)}})]),t._v(" "),a("div",{staticClass:"state wwang"},[a("span",[t._v("整改前")])])]),t._v(" "),a("div",{staticClass:"img-group"},[a("div",{staticClass:"myimg-box"},[a("img",{attrs:{src:t._f("myimg")(i.cfileDealAfterImg1)}})]),t._v(" "),a("div",{staticClass:"state wwang"},[a("span",[t._v("整改后")])])])])])]):t._e()})),t._v(" "),a("swiper-slide",[a("div",{staticClass:"box-group"},t._l(t.mydata,function(i){return 3==i.cfileResult?a("div",{staticClass:"group",on:{click:function(s){t.opennew("cbackdetail",i.cfileId)}}},[a("div",{staticClass:"riqi"},[a("div",{staticClass:"circle width12"}),t._v(" "),a("span",[t._v(t._s(i.createTime1))])]),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(i.cmultipleCommunitiesName)+t._s(i.cgridName))]),t._v(" "),a("img",{attrs:{src:s("SQk+")},on:{click:function(s){s.stopPropagation(),t.workphotod(i.cfileId)}}})]):t._e()}))])],1)],1),t._v(" "),a("transition",{attrs:{name:"nav"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.navboo,expression:"navboo"}],staticClass:"bottom-nav",on:{click:function(i){t.navshow(0)}}},[2==t.texttype?a("div",{staticClass:"nav-group"},[t._l(t.bottomdata,function(i,s){return a("div",{staticClass:"sub-nav",class:t.navindex==s?"active":"",on:{click:function(s){s.stopPropagation(),t.navchange(i.ctypeTitle,i.ctypeId)}}},[t._v("\n\t\t\t\t\t"+t._s(i.ctypeTitle)+"\n\t\t\t\t")])}),t._v(" "),a("div",{staticClass:"sub-nav clear",on:{click:function(i){i.stopPropagation(),t.navshow()}}},[t._v("\n\t\t\t\t\t取消\n\t\t\t\t")])],2):t._e(),t._v(" "),0==t.texttype?a("div",{staticClass:"nav-group"},[t._l(t.bottomdata,function(i,s){return a("div",{staticClass:"sub-nav",class:t.navindex==s?"active":"",on:{click:function(s){s.stopPropagation(),t.navchange(i.cmultipleCommunitiesName,i.cmultipleCommunitiesId)}}},[t._v("\n\t\t\t\t\t"+t._s(i.cmultipleCommunitiesName)+"\n\t\t\t\t")])}),t._v(" "),a("div",{staticClass:"sub-nav clear",on:{click:function(i){i.stopPropagation(),t.navshow()}}},[t._v("\n\t\t\t\t\t取消\n\t\t\t\t")])],2):t._e(),t._v(" "),1==t.texttype?a("div",{staticClass:"nav-group"},[t._l(t.bottomdata,function(i,s){return a("div",{staticClass:"sub-nav",class:t.navindex==s?"active":"",on:{click:function(s){s.stopPropagation(),t.navchange(i.cgridName,i.cgridId)}}},[t._v("\n\t\t\t\t\t"+t._s(i.cgridName)+"\n\t\t\t\t")])}),t._v(" "),a("div",{staticClass:"sub-nav clear",on:{click:function(i){i.stopPropagation(),t.navshow()}}},[t._v("\n\t\t\t\t\t取消\n\t\t\t\t")])],2):t._e()])])],1)},staticRenderFns:[]};var n=function(t){s("MtDv")},o=s("VU/8")(a.a,e,!1,n,null,null);i.default=o.exports}});
//# sourceMappingURL=43.3e5bb5206466a83ccbb5.js.map