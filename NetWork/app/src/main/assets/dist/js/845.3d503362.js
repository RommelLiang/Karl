"use strict";(self["webpackChunkmanagement"]=self["webpackChunkmanagement"]||[]).push([[845],{1845:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var o=t(6252),s=t(3577),a=t(9963);const i=n=>((0,o.dD)("data-v-01886482"),n=n(),(0,o.Cn)(),n),l={style:{height:"100%",width:"100%",display:"flex","align-items":"center",position:"absolute","justify-content":"center","background-color":"#f1d5af"}},u=i((()=>(0,o._)("br",null,null,-1))),c=i((()=>(0,o._)("br",null,null,-1))),r=i((()=>(0,o._)("br",null,null,-1))),h={style:{display:"flex","align-items":"center","justify-content":"space-around"}};function d(n,e,t,i,d,g){const p=(0,o.up)("h");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",null,[d.notice?((0,o.wg)(),(0,o.j4)(p,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(d.notice),1)])),_:1})):(0,o.kq)("",!0),u,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>d.name=n),placeholder:"请输入邮箱",onChange:e[1]||(e[1]=(...n)=>g.onInputChange&&g.onInputChange(...n))},null,544),[[a.nr,d.name]]),c,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>d.password=n),placeholder:"请输入密码",onChange:e[3]||(e[3]=(...n)=>g.onInputChange&&g.onInputChange(...n))},null,544),[[a.nr,d.password]]),r,(0,o._)("div",h,[(0,o._)("button",{onClick:e[4]||(e[4]=(...n)=>g.onLogin&&g.onLogin(...n))},"登录"),(0,o._)("button",{onClick:e[5]||(e[5]=(...n)=>g.onRegister&&g.onRegister(...n))},"注册")])])])}var g=t(2597),p={name:"LoginAndRegister",data(){return{name:"axiosInstance",password:"axiosInstance",notice:String}},mounted(){this.notice=""},methods:{onInputChange(n){this.notice="",console.log(n)},onLogin(){let n=this.checkInputAndGetRouter();console.log(g.A),console.log(this.$store.state),this.$store.commit("account/ABS","ABS"),n||(this.notice="请输入正确的账户和密码")},onRegister(){let n=this.checkInputAndGetRouter();n?this.axiosInstance.post("/user/register",{username:this.name,password:this.password}).then((function(n){console.log(n.data)})).catch((function(n){console.log(n)})):this.notice="请输入正确的账户和密码"},checkInputAndGetRouter(){return this.name.length<6||this.password.length<6?null:this}}},m=t(3744);const f=(0,m.Z)(p,[["render",d],["__scopeId","data-v-01886482"]]);var w=f}}]);
//# sourceMappingURL=845.3d503362.js.map