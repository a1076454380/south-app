webpackJsonp([12],{"1ceM":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAYAAACmPacqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkM5NTYxOTE0RUUwMTFFODg3RTI5NzQzQjIyNTkxRkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkM5NTYxOTI0RUUwMTFFODg3RTI5NzQzQjIyNTkxRkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQzk1NjE4RjRFRTAxMUU4ODdFMjk3NDNCMjI1OTFGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQzk1NjE5MDRFRTAxMUU4ODdFMjk3NDNCMjI1OTFGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Piu5vX0AAAFNSURBVHjaYvz//z8DGSAEiJOA+AMQ1wLxXQZqAJBjSMTl/1HBSyAWJMMcDEypQ2AglN6OKfuPG+jT0zH4HNJADYcQ65hSPA7popZDiHFMCb0cQsgx+EKkg9oOwecYuoYIPscUD4RDsDmmhN5Rg8sxuELkGxAn0dohIMwCrRVKgLgbR43xBIg/AnEqELMyUBeAzHsFxBuB+Bsj0EVRQMZShoEF94HYBuSY10CGCMPAgylMQIKDYXAALpBjGgaBQ74DcQ8jtHHVD8QFOBReB+IuIFYAYmYqOwKUgd4D8RogvoectfpxZO23QOxOj6yNLtCLp9DLobdjQLgPj4Ny6e0YfFFG0xDCJ9lL7xAipICuUUaMIrpFGbEK8UVZGr0dQyiE1KnhGCYSSstCIJ6IQ85soLq36In6DxDLDkT3FoZBOek0EB8AYmNqpRmAAAMAdeirjlIuEPIAAAAASUVORK5CYII="},"3AY5":function(t,e,s){"use strict";(function(t){e.a={name:"register",data:function(){return{inputdata:{cuserPhone:"",cuserPassword:"",cuserCode:"",cuserRole:0,cuserName:"",cuserIdentityId:"",cuserAddress:"",picPath:s("6aWS")},pwd02:"",fileimg:"请选择您的头像",fot:!0}},mounted:function(){var t=this;function e(){t.inputdata.cuserCode=plus.device.uuid}window.plus?e():document.addEventListener("plusready",e,!1)},methods:{upload:function(){var t=document.getElementById("preview"),e=document.getElementById("file");if(window.FileReader){var s=new FileReader;s.readAsDataURL(e.files[0]),s.onload=function(e){t.src=e.target.result}}else if(document.all){e.select();var a=document.selection.createRange().text;window.ie6?t.src=a:(t.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\""+a+'")',t.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")}else e.files&&e.files.item(0)&&(url=e.files.item(0).getAsDataURL(),t.src=url)},opennew:function(t){this.$router.push({name:t})},submit:function(e){plus.nativeUI.showWaiting("资料提交中...");var s=new FormData(e.target),a=this,i=document.getElementById("file").files[0].size;return this.inputdata.cuserPassword.length>=6?(alert("密码必须为6位数以上!"),!1):parseInt(i)>=1048576?(alert("上传图片过大，请更换图片后重试！"),!1):""==this.inputdata.cuserPassword?(alert("密码不能为空!"),!1):""==this.inputdata.cuserName?(alert("姓名不能为空!"),!1):""==this.inputdata.cuserIdentityId?(alert("身份证号不能为空!"),!1):""==this.inputdata.cuserAddress?(alert("现住址不能为空!"),!1):""==this.inputdata.picPath?(alert("用户头像不能为空!"),!1):""==this.inputdata.cuserPhone?(alert("手机号不能为空!"),!1):/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.inputdata.cuserPhone)?this.inputdata.cuserPassword!=this.pwd02?(alert("两次密码不一致!"),!1):void t.ajax({type:"post",url:a.service+"/register",dataType:"json",contentType:!1,processData:!1,data:s,success:function(t){plus.nativeUI.closeWaiting(),200==t.status?a.opennew("login"):alert(t.msg)}}):(alert("不是完整的11位手机号或者正确的手机号前七位"),!1)},back:function(){this.$router.back()},myfocus:function(){this.fot=!this.fot}},computed:{tfoot:function(){return this.$store.state.tfoot},service:function(){return this.$store.state.service}}}}).call(e,s("7t+N"))},GKZN:function(t,e){},q3Wa:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("3AY5"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warpper register"},[a("div",{attrs:{id:"head"}},[a("span",{on:{click:t.back}},[a("img",{attrs:{src:s("FnU6")}})]),t._v(" "),a("div",[t._v("注册")]),t._v(" "),a("span")]),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"content"},[a("form",{attrs:{name:"yForm"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"box-group"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputdata.cuserName,expression:"inputdata.cuserName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入姓名",name:"cuserName"},domProps:{value:t.inputdata.cuserName},on:{focus:t.myfocus,blur:t.myfocus,input:function(e){e.target.composing||t.$set(t.inputdata,"cuserName",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputdata.cuserIdentityId,expression:"inputdata.cuserIdentityId"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入身份证号",name:"cuserIdentityId"},domProps:{value:t.inputdata.cuserIdentityId},on:{focus:t.myfocus,blur:t.myfocus,input:function(e){e.target.composing||t.$set(t.inputdata,"cuserIdentityId",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("p",{staticClass:"img"},[t._v(t._s(t.fileimg))]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"file",placeholder:"",name:"picPath",id:"file",accept:"image/*"},on:{change:t.upload}}),t._v(" "),a("img",{attrs:{src:t.inputdata.picPath,id:"preview"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputdata.cuserAddress,expression:"inputdata.cuserAddress"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入现住址",name:"cuserAddress"},domProps:{value:t.inputdata.cuserAddress},on:{focus:t.myfocus,blur:t.myfocus,input:function(e){e.target.composing||t.$set(t.inputdata,"cuserAddress",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputdata.cuserPhone,expression:"inputdata.cuserPhone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入手机号码",name:"cuserPhone"},domProps:{value:t.inputdata.cuserPhone},on:{focus:t.myfocus,blur:t.myfocus,input:function(e){e.target.composing||t.$set(t.inputdata,"cuserPhone",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputdata.cuserPassword,expression:"inputdata.cuserPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请设置密码",name:"cuserPassword"},domProps:{value:t.inputdata.cuserPassword},on:{focus:t.myfocus,blur:t.myfocus,input:function(e){e.target.composing||t.$set(t.inputdata,"cuserPassword",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd02,expression:"pwd02"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请再次设置密码"},domProps:{value:t.pwd02},on:{focus:t.myfocus,blur:t.myfocus,input:function(e){e.target.composing||(t.pwd02=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group",staticStyle:{display:"none"}},[a("input",{staticClass:"form-control",attrs:{type:"number",value:"0",name:"cuserRole"},on:{focus:t.myfocus,blur:t.myfocus}})]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"form-group",staticStyle:{display:"none"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputdata.cuserCode,expression:"inputdata.cuserCode"}],staticClass:"form-control",attrs:{type:"text",name:"cuserCode"},domProps:{value:t.inputdata.cuserCode},on:{input:function(e){e.target.composing||t.$set(t.inputdata,"cuserCode",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"denglu"},[a("input",{staticClass:"denglucon",attrs:{type:"submit",value:"立即注册"}}),t._v(" "),a("div",{staticClass:"zhuce",on:{click:function(e){t.opennew("login")}}},[a("img",{staticClass:"jiantou",attrs:{src:s("1ceM")}}),t._v(" "),a("span",[t._v("已经有账号，去登陆")])])])])]),t._v(" "),t.fot?a("div",{staticClass:"footer"},[a("span",[t._v("版权所有：南昌市青山湖区南钢街道办事处")])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[e("input",{attrs:{type:"radio",name:"cuserSex",value:"0",checked:""}}),this._v("女\n\t\t\t\t\t\t\t")]),this._v(" "),e("label",{attrs:{for:""}},[e("input",{attrs:{type:"radio",name:"cuserSex",value:"1"}}),this._v("男\n\t\t\t\t\t\t\t")])])}]};var r=function(t){s("GKZN")},o=s("VU/8")(a.a,i,!1,r,null,null);e.default=o.exports}});
//# sourceMappingURL=12.333ce91da923ac0ffec5.js.map