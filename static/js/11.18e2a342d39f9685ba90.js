webpackJsonp([11],{"9PnW":function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__=__webpack_require__("bOdI"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);__webpack_exports__.a=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({name:"user",data:function(){return{uploadtarget:"",server:"http://39.107.70.18/Transportation/uploadDriverImage",files:[],cuserHeadImg:localStorage.getItem("cuserHeadImg"),name:localStorage.getItem("username")}},components:{},mounted:function(){this.$store.state.tfoot=3},methods:{clear:function(){localStorage.clear(),this.opennew("home")},opennew:function(t){this.$router.push({name:t})},upload:function(t){var e=this;e.files=[],e.uploadtarget=t;plus.nativeUI.actionSheet({title:"请选择",cancel:"取消",buttons:[{title:"照相机"},{title:"相册"}]},function(t){switch(t.index){case 1:e.camera();break;case 2:e.album()}})},camera:function(){console.log("相机");var t=this;plus.camera.getCamera().captureImage(function(e){plus.io.resolveLocalFileSystemURL(e,function(e){e.name;var a=e.toLocalURL();document.getElementById("img"+t.uploadtarget).setAttribute("src",a),t.upload_img(a)},function(t){alert("读取拍照文件错误："+t.message)})},function(t){alert("失败："+t.message)},{filename:"_doc/camera/",index:1})},album:function(){console.log("相册");var t=this;plus.gallery.pick(function(e){document.getElementById("img"+t.uploadtarget).setAttribute("src",e),t.upload_img(e)},function(t){alert("取消选择图片")},{filter:"image"})},upload_img:function(t){t.substr(t.lastIndexOf("/")+1);this.files.push({name:"uploadkey",path:t}),this.start_upload()},start_upload:function start_upload(){var that=this;if(that.files.length<=0)plus.nativeUI.alert("没有添加上传文件！");else{var wt=plus.nativeUI.showWaiting(),task=plus.uploader.createUpload(that.server,{method:"POST"},function(t,status){if(200==status){var responseText=t.responseText,json=eval("("+responseText+")");that.files=json.data,wt.close()}else alert("上传失败："+status),wt.close()});task.addData("uid",that.getUid());for(var i=0;i<that.files.length;i++){var f=that.files[i];task.addFile(f.path,{key:f.name})}task.start()}},getUid:function(){return Math.floor(1e8*Math.random()+1e7).toString()}},computed:{tfoot:function(){return this.$store.state.tfoot}}},"components",{THead:function(t){return __webpack_require__.e(50).then(function(){var e=[__webpack_require__("AC15")];t.apply(null,e)}.bind(this)).catch(__webpack_require__.oe)},TFoot:function(t){return __webpack_require__.e(56).then(function(){var e=[__webpack_require__("SlDh")];t.apply(null,e)}.bind(this)).catch(__webpack_require__.oe)}})},R4r3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Y1MzMwRTI0RUUzMTFFODg1QjZBMUNDMjg1RjBFRkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Y1MzMwRTM0RUUzMTFFODg1QjZBMUNDMjg1RjBFRkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjUzMzBFMDRFRTMxMUU4ODVCNkExQ0MyODVGMEVGQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjUzMzBFMTRFRTMxMUU4ODVCNkExQ0MyODVGMEVGQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po30PpcAAARwSURBVHja1FppSFVBFL6+LNr3zXYrgjayICqiBQzrR1pqq9aPsiiiLNs3bE9bCEvIrLQoIxLFyhZQKFqgqH5U0p5SURkE9aOEoMW+g+fFaXw+7zyf89478Hnn3jkznm/umZkz576gyspKK5DFYQW4BNe1g57bS+yojQGyuLwfOOqseJs82LcEbAhZeFPcZwJ9gY3Ar0BwoZfAWeXZGn4+3t8JJANNgDhgq1IXClyHC672VwLrgW3AK2A6l8cB9xS9fSCRDnT2JwI9gBQutwdygVSeCyOAbEV/KfACJGL8hUCxi2frmEBbIAFIVOpbAvkgsdjXBE4B/dwsp+8AGul0YBBwS9HJAIlIXxHYBMytRacZjTTvBU+wD4zF9YSik+QLAq2BnRr6C4HHGO3uIDFfIX7eFwSuerjJlYLEfJDIQbk3bXAoHzJN4Bgw0sO2DSnMAIk8XD/D+BTTk3gKsEBDn/aECDJWeR4LzDS6jGLUBun4K/t5Hi+z55S6dIx+lul9IEdDN0Po00oUJeruwfhEozsxRn85LkNsqlPUuUTcp/Fu7ZRJRmMhGD+VjbArEaIcpcyZBIz+V2MEYHwHXAo0muyiqFPsFXLO5MP4bNPR6GUN3QfAZnF/BQjicjkww+h5AKNPW/xwm+rvOfaRe8UoLn/nfv4YIwDjB+JyQKNvijh/cLmP4vergA/GshIwvkkNIbI7NysS9xdE+Y481Jt6A7eBEJu6r4HJ4v4iMJDLn4DRRvNCGH06LQ3T6HOiKC8CIpXltNIYARhPo75Hoz86TZVxeQBwRNStAEosL4vDjfG03N0Hmtrs6wbnfJxySZTvAgfr4+zq7g3QQbyrRl9xSkYiVNxH11fqw1HD6C/DZZpGPxRafOTyBJGRsHhCfzJGAMb3x+WQRh+bxTLZSVlukzR3bq+8gVSN9o841nF1rLyuGfB5jQDlbwpttK0AZov7ecBQcR9vGZBqBBAdPgeieEl0J4XQe8ZlmrAyqozhYK3eJcj5hQa+34qCKxj1TcyHMN5Ju7toW8aJqd+U37GqUuYkWRpn5GiNQ5GUUth5WiUQxj58EJWpggSlAnfzrqqKc5SdYcY1INymEcs0FwtVdsDOZOlCjQHKEKfA6DThUl8AcqdZVvUPEiFKjBShYUBIHb2nG/2RX2ikmywHCYrX42H8GyZyDs8e8Y7bsYbJ/1vDgC1AIyDMExcCNqguRF9N9iqKFM+vhPEZwqXacOM1Qu8MMMeTYazrNzLpQj1c1JNbHYbRx8U//AqsFVHnN0+N9/Yy2sXd6QokSoAhgkgR+3y45UOp7Q1IoSXzIUjQG2nHJIo5YvUtARjUUiPypANKe8tPJFgEYR1tHCspf5nrRqc5p01sn7psfij/b/OlxQV2/JQEegENXCh/5oAsDw1euumUUuRnOZR2eCNdUovXVID4HtiUFiz8W8pTqyoZexJK3210Su4Xa9BzWlhVXzb/ESjnAwnlarJgdKZmh9S2gN+ACfnhPL4GBfrPbf4KMAADcTeNQ1QOQgAAAABJRU5ErkJggg=="},k4yN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9PnW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user",attrs:{id:"wrapper"}},[n("t-head"),t._v(" "),n("div",{attrs:{id:"main"}},["null"!=t.cuserHeadImg?n("img",{staticClass:"avatar",attrs:{src:t._f("myimg")(t.cuserHeadImg),id:"img1"}}):t._e(),t._v(" "),"null"==t.cuserHeadImg?n("img",{staticClass:"avatar",attrs:{src:a("uk3y")}}):t._e(),t._v(" "),n("div",{staticClass:"name"},[t._v("\n\t\t\t\t"+t._s(t.name)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"menu"},[n("div",{staticClass:"submenu",on:{click:function(e){t.opennew("changepwd")}}},[n("img",{attrs:{src:a("1Mki")}}),t._v(" "),n("span",[t._v("\n    \t\t\t\t\t修改密码\n    \t\t\t\t")]),t._v(" "),n("img",{attrs:{src:a("Igx7")}})]),t._v(" "),n("div",{staticClass:"submenu",on:{click:function(e){t.opennew("news")}}},[n("img",{attrs:{src:a("Gvsr")}}),t._v(" "),n("span",[t._v("\n    \t\t\t\t\t消息中心\n    \t\t\t\t")]),t._v(" "),n("img",{attrs:{src:a("Igx7")}})]),t._v(" "),n("div",{staticClass:"submenu",on:{click:function(e){t.opennew("userinform")}}},[n("img",{attrs:{src:a("O6fA")}}),t._v(" "),n("span",[t._v("\n    \t\t\t\t\t修改个人信息\n    \t\t\t\t")]),t._v(" "),n("img",{attrs:{src:a("Igx7")}})]),t._v(" "),n("div",{staticClass:"submenu",on:{click:function(e){t.opennew("allchuli")}}},[n("img",{attrs:{src:a("R4r3")}}),t._v(" "),n("span",[t._v("\n    \t\t\t\t\t处理记录\n    \t\t\t\t")]),t._v(" "),n("img",{attrs:{src:a("Igx7")}})]),t._v(" "),n("div",{staticClass:"submenu",on:{click:function(e){t.opennew("mygrid")}}},[n("img",{attrs:{src:a("dJuI")}}),t._v(" "),n("span",[t._v("\n    \t\t\t\t\t我的网格\n    \t\t\t\t")]),t._v(" "),n("img",{attrs:{src:a("Igx7")}})]),t._v(" "),n("div",{staticClass:"clear",on:{click:t.clear}},[t._v("\n\t\t\t\t\t退出登录\n\t\t\t\t")])])]),t._v(" "),n("t-foot")],1)},staticRenderFns:[]};var s=function(t){a("x3oq")},r=a("VU/8")(n.a,i,!1,s,null,null);e.default=r.exports},x3oq:function(t,e){}});
//# sourceMappingURL=11.18e2a342d39f9685ba90.js.map