(self["webpackChunkshiyi"]=self["webpackChunkshiyi"]||[]).push([[446],{5446:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"title_top_title",attrs:{"data-text":t.title}},[t._v(" "+t._s(t.title)+" ")]),e("span",{staticClass:"title_top_title_label",staticStyle:{"font-size":"40px"}},[t._v(" 《"+t._s(t.text_title)+"》 ")]),t._v(" "),e("br"),t._v(" "),e("br"),e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(t.text)+" ")]),e("span",{staticClass:"blink",attrs:{"aria-hidden":"true"}},[t._v("|")])])},p=[],n=s(4460),r={name:"Home",data(){return{title:"水木加贝",text_title:"",text_all:"",text:"",text_count:-2,text_k:1,text_step:0,set_text:null}},created(){this.getData()},mounted(){let t=Math.floor(30*Math.random())+1;t=t<10?"00"+t:t<100?"0"+t:t;let e=s(4635)("./"+t+".jpg");document.body.style.backgroundImage="url("+e+")",n.Z.state.navigation_bar_time_color="#ffffff",this.set_text=setTimeout(this.set_title_top,this.text_step)},methods:{getData(){let t=this.$store.state.text.tongue_twister_text.split("{}{}{}"),e=Math.floor(Math.random()*t.length),s=t[e].substring(t[e].indexOf("\n")+1);this.text_title=s.substring(0,s.indexOf("\n")),this.text_all=s.substring(s.indexOf("\n")+1)},set_title_top(){this.text===this.text_all?this.text_k=-1:0==this.text.length&&(this.text_k=1),this.text_step=200+100*this.text_k,this.text_count=(this.text_count+this.text_k)%this.text_all.length,this.text=this.text_all.substring(0,this.text_count+1),this.set_text=setTimeout(this.set_title_top,this.text_step)}},destroyed(){document.body.style.backgroundImage="",clearTimeout(this.set_text),this.set_text=null},beforeDestroy(){}},o=r,g=s(1001),c=(0,g.Z)(o,i,p,!1,null,"25921fc5",null),u=c.exports},4635:function(t,e,s){var i={"./000.jpg":5350,"./001.jpg":3882,"./002.jpg":4271,"./003.jpg":6272,"./004.jpg":2539,"./005.jpg":1366,"./006.jpg":1516,"./007.jpg":742,"./008.jpg":5359,"./009.jpg":9886,"./010.jpg":1486,"./011.jpg":1924,"./012.jpg":5348,"./013.jpg":1889,"./014.jpg":4176,"./015.jpg":465,"./016.jpg":3034,"./017.jpg":2386,"./018.jpg":4934,"./019.jpg":2599,"./020.jpg":6460,"./021.jpg":5426,"./022.jpg":8862,"./023.jpg":4830,"./024.jpg":5671,"./025.jpg":7853,"./026.jpg":2797,"./027.jpg":3940,"./028.jpg":8121,"./029.jpg":497,"./030.jpg":4440};function p(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}p.keys=function(){return Object.keys(i)},p.resolve=n,t.exports=p,p.id=4635},5350:function(t,e,s){"use strict";t.exports=s.p+"img/000.1c00bf95.jpg"},3882:function(t,e,s){"use strict";t.exports=s.p+"img/001.5ed378ad.jpg"},4271:function(t,e,s){"use strict";t.exports=s.p+"img/002.3ec3f261.jpg"},6272:function(t,e,s){"use strict";t.exports=s.p+"img/003.cbf1b424.jpg"},2539:function(t,e,s){"use strict";t.exports=s.p+"img/004.6c930ed5.jpg"},1366:function(t,e,s){"use strict";t.exports=s.p+"img/005.9aa429aa.jpg"},1516:function(t,e,s){"use strict";t.exports=s.p+"img/006.2aba4936.jpg"},742:function(t,e,s){"use strict";t.exports=s.p+"img/007.e14f6311.jpg"},5359:function(t,e,s){"use strict";t.exports=s.p+"img/008.c384dba0.jpg"},9886:function(t,e,s){"use strict";t.exports=s.p+"img/009.f467711a.jpg"},1486:function(t,e,s){"use strict";t.exports=s.p+"img/010.3175a922.jpg"},1924:function(t,e,s){"use strict";t.exports=s.p+"img/011.aea9316f.jpg"},5348:function(t,e,s){"use strict";t.exports=s.p+"img/012.5d435b50.jpg"},1889:function(t,e,s){"use strict";t.exports=s.p+"img/013.c477b102.jpg"},4176:function(t,e,s){"use strict";t.exports=s.p+"img/014.10e853d6.jpg"},465:function(t,e,s){"use strict";t.exports=s.p+"img/015.fc71862a.jpg"},3034:function(t,e,s){"use strict";t.exports=s.p+"img/016.ac9a9d39.jpg"},2386:function(t,e,s){"use strict";t.exports=s.p+"img/017.2b164f01.jpg"},4934:function(t,e,s){"use strict";t.exports=s.p+"img/018.2e08f030.jpg"},2599:function(t,e,s){"use strict";t.exports=s.p+"img/019.592a78f5.jpg"},6460:function(t,e,s){"use strict";t.exports=s.p+"img/020.770f8104.jpg"},5426:function(t,e,s){"use strict";t.exports=s.p+"img/021.a0f4c305.jpg"},8862:function(t,e,s){"use strict";t.exports=s.p+"img/022.f7f83295.jpg"},4830:function(t,e,s){"use strict";t.exports=s.p+"img/023.af1fe10c.jpg"},5671:function(t,e,s){"use strict";t.exports=s.p+"img/024.1849be3b.jpg"},7853:function(t,e,s){"use strict";t.exports=s.p+"img/025.7f5b1455.jpg"},2797:function(t,e,s){"use strict";t.exports=s.p+"img/026.56856a0d.jpg"},3940:function(t,e,s){"use strict";t.exports=s.p+"img/027.85a3b172.jpg"},8121:function(t,e,s){"use strict";t.exports=s.p+"img/028.2f1cc919.jpg"},497:function(t,e,s){"use strict";t.exports=s.p+"img/029.6fb43479.jpg"},4440:function(t,e,s){"use strict";t.exports=s.p+"img/030.2439656f.jpg"}}]);
//# sourceMappingURL=446.1c6f8832.js.map