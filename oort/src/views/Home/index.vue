<template>
  <div class="main">
    <Header title="问题反馈">
        <img slot="back" src="@/assets/back.png"/>
        <div slot="right_info">
          <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                  <i class="el-icon-more el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="charger">责任人</el-dropdown-item>
                <el-dropdown-item command="help">帮助</el-dropdown-item>
                <el-dropdown-item command="about">关于</el-dropdown-item>
              </el-dropdown-menu>
           </el-dropdown>
        </div>
    </header>
    <div class="content">
        <Search :searchProblem="searchProblem" />
        <div class="nav">
            <router-link tag="div" to="/otherProblem" class="other_problem">大家都在提问</router-link>
            <router-link tag="div" to="/myProblem" class="my_problem">我的提问</router-link>
            <router-link tag="div" to="/myAttention" class="my_attention">我的关注</router-link>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <router-view name="feedback" />
    <router-view name="about" />
    <router-view name="version" />
    <router-view name="contact" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Search from "@/components/Search";
export default {
  name: "Home",
  data() {
    return {
      msg: "aaaaa"
    };
  },
  components: {
    Header,
    Search
  },
  methods:{
     handleCommand(command) {
       if(command == 'about'){
          this.$router.push('/about')
       }

      },
      searchProblem(message){
          console.log(message)
      }
  },
  mounted(){
           this.axios.get('/api/movieOnInfoList?cityId=12').then((res)=>{
                    
                });
            }
}
</script>
<style  scoped>
.nav {
  display: flex;
  padding: 0.24rem 0.18rem;
  align-items: center;
  justify-content: space-around;
  color: #999999;
  border-bottom: 1px solid #d8d8d8;
}
.nav div.router-link-active {
  color: #3f70ff;
  border-bottom: 2px #3f70ff solid;
}
.slide-enter-active {
  animation: 13s feedback;
}
@keyframes feedback {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.about_show{
  position: fixed;
  right: .1rem;
  top: .1rem;
  width: 1.6rem;
  height: .56rem;
}
</style>