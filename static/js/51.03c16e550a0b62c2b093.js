webpackJsonp([51],{cBse:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("lD4V"),o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bottom-nav"},[e("div",{staticClass:"nav-group"},[t._l(t.bottomone,function(n,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.navindex,expression:"navindex==0"}],staticClass:"sub-nav",class:t.myindex==a?"btnactive":"",on:{click:function(e){t.havetwo(n.id,n.name,a)}}},[e("span",[t._v(t._s(n.name))])])}),t._v(" "),t._l(t.bottomtwo,function(n){return e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.navindex,expression:"navindex==1"}],staticClass:"sub-nav",on:{click:function(e){t.navchange(n.name,n.id)}}},[e("span",[t._v(t._s(n.name))])])}),t._v(" "),e("div",{staticClass:"sub-nav clear",on:{click:function(n){t.navchange("选择分类")}}},[t._v("\n  \t\t\t取消\n  \t\t")])],2)])},staticRenderFns:[]};var s=function(t){e("f1Xy")},i=e("VU/8")(a.a,o,!1,s,null,null);n.default=i.exports},f1Xy:function(t,n){},lD4V:function(t,n,e){"use strict";(function(t){n.a={name:"bottomnav",data:function(){return{navindex:0,bottomtwo:[],myindex:-1}},mounted:function(){},methods:{navchange:function(t,n){this.$emit("navshow",t),this.$store.state.bottomtwoid=n,this.navindex=0},havetwo:function(n,e,a){this.myindex=a;var o=this,s=[];this.$store.state.ctypeTitle=e,t.ajax({type:"get",url:o.service+"/queryCtypeTwo",async:!0,dataType:"json",data:{ctypeId:n},success:function(t){for(var n=0;n<t.data.length;n++){var e={name:""+t.data[n].ctypeTwoTitle,id:""+t.data[n].ctypeTwoId};s.push(e)}o.bottomtwo=s,o.navindex=1}})}},computed:{bottomone:function(){return this.$store.state.bottomone},service:function(){return this.$store.state.service},bottomtwoid:function(){return this.$store.state.bottomtwoid}}}}).call(n,e("7t+N"))}});
//# sourceMappingURL=51.03c16e550a0b62c2b093.js.map