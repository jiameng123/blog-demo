<template>
	  <el-col :span="5" class = 'site-wrap' v-once>
	  	<div class=" site-meta ">
	  		<router-link to = '/' exact tag = 'span' class = 'title'>MengGe's Notes</router-link>
	  		<p class="site-subtitle">Quick notes</p>
	  	</div>
	  	<nav>
	  		<el-menu :default-active="activeName" class="menu-wrap" :router = true >
		      	<li>
		      		<router-link to='/' exact tag='a'><i class="fa fa-fw fa-home"></i>首页</router-link>
		      	</li>
		      	<li>
		      		<router-link to='/archives'  tag='a'><i class="fa fa-fw fa-archive"></i>归档</router-link>
		      	</li>
		      	<li>
		      		<router-link to='/tags'  tag='a'><i class="fa fa-fw fa-tags"></i>标签</router-link>
		      	</li>
		      	<li>
		      		<router-link to='3'  tag='a'><i class="fa fa-search fa-fw"></i>搜索</router-link>
		      	</li>
	    	</el-menu>
	  	</nav>
	  	<div>
	  		<aside class="side-bar">
	  			<div class="siderbar-inner">
	  				<section>
	  					<div class = 'site-author'>
	  						<img src="../assets/image/author.png" alt="">
	  						<p class="site-author-name">WuLi MengGe</p>
	  						<p>亲爱精诚，以血洒花</p>
	  					</div>
	  					<el-row type='flex' justify = 'center' class='side-nav-wrap'>
			  				<el-col :span='6' class="">
			  					<router-link to='/archives' tag='a'>
			  						<span class="side-nav-count">183</span>
			  						<span class="side-nav-name">日志</span>
			  					</router-link>
			  				</el-col>
			  				<el-col :span='6'>
			  					<router-link to='/' tag='a'>
			  						<span class="side-nav-count">6</span>
			  						<span class="side-nav-name">分类</span>
			  					</router-link>
			  				</el-col>
			  				<el-col :span='6'>
			  					<router-link to='/' tag='a'>
			  						<span class="side-nav-count">111</span>
			  						<span class="side-nav-name">标签</span>
			  					</router-link>
			  				</el-col>
	  					</el-row>
	  					<div class="side-rss">
	  						<router-link to = '/' tag = 'a'>
	  							<i class="fa fa-rss "></i>
	  							RSS
	  						</router-link>
	  					</div>
	  					<el-row class="side-link-author">
	  						<el-col :span = '12'>
	  							<router-link to = '/' tag = 'a'>
	  								<i class="fa fa-fw fa-github fa-lg"></i>
	  								GitHub
	  							</router-link>
	  						</el-col>
	  						<el-col :span = '12'>
	  							<router-link to = '/' tag = 'a'>
	  								<i class="fa fa-fw fa-twitter fa-lg"></i>
	  								Twitter
	  							</router-link>
	  						</el-col>
	  						<el-col :span = '12'>
	  							<router-link to = '/' tag = 'a'>
	  								<i class="fa fa-fw fa-globe fa-lg"></i>
	  								豆瓣
	  							</router-link>
	  						</el-col>
	  						<el-col :span = '12'>
	  							<router-link to = '/' tag = 'a'>
	  								<i class="fa fa-fw fa-globe fa-lg"></i>
	  								知乎
	  							</router-link>
	  						</el-col>
	  					</el-row>
	  				</section>
	  			</div>
	  		</aside>
	  	</div>
	  </el-col>
</template>

<script>
export default {

  name: 'Slider',

  data () {
    return {
    	activeName:this.$route.path
    };
  }
};
</script>


