webpackJsonp([26],{"2znf":function(t,e,a){"use strict";(function(t){e.a={name:"hworkdetail",data:function(){return{mydata:""}},mounted:function(){var e=this;t.ajax({type:"get",url:e.service+"/queryCorkByCworkId",dataType:"json",data:{cworkId:e.windexid},success:function(t){e.mydata=t.data[0],console.log(e.windexid)}})},methods:{opennew:function(t){this.$router.push({name:t})},back:function(){this.$router.back()}},computed:{windexid:function(){return this.$store.state.windexid},service:function(){return this.$store.state.service}}}}).call(e,a("7t+N"))},ZrrJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("2znf"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"warpper hwxq"},[n("div",{staticClass:"main"},[n("header",[n("span",{on:{click:t.back}},[n("img",{attrs:{src:a("FnU6")}})]),t._v(" "),n("span",[t._v("美丽南钢")]),t._v(" "),n("span")]),t._v(" "),n("content",[n("div",{staticClass:"box-group"},[n("div",{staticClass:"group"},[n("span",[t._v(t._s(t.mydata.cworkTitle))]),t._v(" "),n("span",[t._v(t._s(t.mydata.createTime1))])])]),t._v(" "),n("div",{staticClass:"groupimg myimg-box"},[n("img",{attrs:{src:t._f("myimg")(t.mydata.cworkImg)}})])])])])},staticRenderFns:[]};var i=function(t){a("bRIM")},r=a("VU/8")(n.a,s,!1,i,null,null);e.default=r.exports},bRIM:function(t,e){}});
//# sourceMappingURL=26.2c967dbdb691254d2d02.js.map