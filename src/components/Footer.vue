<template>
	 <el-row class="posts-footer-wrap">
                    <el-col :span = '24' class="blog-time">
                        © 1991 - 2017
                        <span class="love">
                            <i class="fa fa-heart"></i>
                        </span>
                        WuLi MengGe
                    </el-col>
                    <el-col :span = '24' class = 'blog-explain'>
                      <span class="blog-first-statement">不忘初心</span>
                      <span>方得始终</span>
                    </el-col>
                      <div :class="{'back-to-top':true,'back-to-top-on':isScroll}" @click = 'backTop'>
                    <i class="fa fa-arrow-up"></i>
                    <span>{{scrollPercent}}%</span>
                </div>
      </el-row>
</template>

<script>
export default {

  	name: 'Footer',
	data () {
	    return {
	      scrollPos:'',
	      isScroll:false,
	      scrollPercent:'',
	      transitionName:''
	    }
	  },
	  beforeRouterEnter(to,from,next){
	     console.log('3');
	      next(vm=>{
	      })
	  },
	  created(){
	      //监听滚动事件
	      window.addEventListener('scroll',this.handleScroll);
	  },
	  mounted(){
	        this.transitionName = 'fade';
	  },
	  methods:{
	    handleScroll(){
	       //获取滚动条高度
	        this.scrollPos = document.body.scrollTop;
	        this.scrollPercent =  (document.body.scrollTop/(document.body.clientHeight- document.documentElement.clientHeight)*100).toFixed();
	        if(this.scrollPos > 0) return this.isScroll = true;
	        else return this.isScroll = false;
	    },
	    backTop(){
	       //点击回到顶部;
	       let timer;
	       let _this = this;
	       cancelAnimationFrame(timer);
	       timer = requestAnimationFrame(function fn(){
	             if(_this.scrollPercent > 0){
	                document.body.scrollTop -= 60;
	                window.onmousewheel = document.onmousewheel = ()=>{return false;}
	                timer = requestAnimationFrame(fn);
	             } else{
	                  cancelAnimationFrame(timer);
	                  window.onmousewheel=document.onmousewheel= ()=>{return true;}
	             }
	       })
	    }
	  }
};
</script>

<style lang="css" scoped>
</style>