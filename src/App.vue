<template>
  <div id="app">
  	<el-row type = "flex" justify = 'center' class = 'wrap' >
        <el-col :span = '16'>
          <Slider></Slider>
          <el-col :span = '17'>
                <div class="grid-content">
                	<div class = 'posts-content-wrap'>
                    	<transition name= 'postsAnimation' mode= 'out-in'>
                      		<router-view ></router-view>
                    	</transition>
                	</div>
                </div>
                <Foot></Foot>
          </el-col>
        </el-col>
      </el-row>

    <!-- 	<router-view></router-view> -->
  </div>
</template>

<script>
import Slider  from "@/components/Slider.vue";
import Foot  from "@/components/Footer.vue";
export default {
  name: 'APP',
  components:{
      Slider,
      Foot
  }
}
</script>

<style lang="scss" scoped="" type="text/css">

</style>
