webpackJsonp([25],{aRgP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("zRLZ"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newdetil",attrs:{id:"wrapper"}},[a("div",{attrs:{id:"head"}},[a("span",{on:{click:t.back}},[a("img",{attrs:{src:n("FnU6")}})]),t._v(" "),a("div",[t._v("美丽南钢")]),t._v(" "),a("span")]),t._v(" "),a("div",{attrs:{id:"main"}},[a("div",{staticClass:"group"},[a("div",{staticClass:"title"},[t._v("\n\t\t\t\t"+t._s(t.mydata.cmessageTitle)+"\n\t\t\t")]),t._v(" "),a("div",{staticClass:"text"},[t._v("\n\t\t\t\t"+t._s(t.mydata.cmessageContent)+"\n\t\t\t")]),t._v(" "),a("div",{staticClass:"time"},[t._v("\n\t\t\t\t"+t._s(t.mydata.createTime1)+"\n\t\t\t")])])])])},staticRenderFns:[]};var i=function(t){n("gLuA")},c=n("VU/8")(a.a,s,!1,i,null,null);e.default=c.exports},gLuA:function(t,e){},zRLZ:function(t,e,n){"use strict";(function(t){e.a={name:"newdetail",data:function(){return{mydata:[]}},mounted:function(){this.myajax()},methods:{opennew:function(t){this.$router.push({name:t})},back:function(){this.$router.back()},myajax:function(){plus.nativeUI.showWaiting("数据加载中...");var e=this;t.ajax({type:"post",url:e.service+"/updateCuserCmessageByPrimaryKeySelective",dataType:"json",data:{cmessageId:e.newid,cuserCmessageId:e.newstwoid},success:function(t){e.mydata=t.data,plus.nativeUI.closeWaiting()}})}},computed:{newid:function(){return this.$store.state.newid},newstwoid:function(){return this.$store.state.newstwoid},service:function(){return this.$store.state.service}},components:{THead:function(t){return n.e(50).then(function(){var e=[n("AC15")];t.apply(null,e)}.bind(this)).catch(n.oe)}}}}).call(e,n("7t+N"))}});
//# sourceMappingURL=25.a0d200093cc9f6810696.js.map