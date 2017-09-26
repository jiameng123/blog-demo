<template>
	<!-- <div class = 'posts-content-wrap'>
		<div class = 'posts-content'>
			<section class = 'posts-list-wrap'>
				<article v-for = '(item,index) in potstList[0].list' key = 'index'>
					<header class = 'posts-head'>
						<h2>{{item.title}}</h2>
						<div class = 'posts-meta'>
							<span class = 'posts-time'>
								<span class = 'posts-meta-item-icon'>
									<i class="fa fa-calendar-o"></i>
								</span>
								<span>发表于</span>
								<time>{{item.time}}</time>
								<span class = 'posts-meta-divider'>|</span>
							</span>
							<span class = 'post-category'>
								<span class = 'posts-meta-item-icon'>
									<i class="fa fa-folder-o"></i>
								</span>
								<span>分类于</span>
								<time>技术水波文</time>
							</span>
							<span class = 'post-comments-count'>
								<span class = 'posts-meta-divider'>|</span>
								<span>
									<i class = 'fa fa-comment-o'></i>
								</span>
								<span  class = 'posts-meta-divider'>|</span>
								<span class = 'posts-meta-item-icon'>
									<i class="fa fa-eye"></i>
								</span>
								<span>阅读次数</span>
								<time>0</time>
							</span>
						</div>
					</header>
					<div class = 'posts-body'>
						<div v-html = 'item.content'></div>
						<div class="posts-body-btnWrap">
							<router-link tag = 'a' :to = '{path:"/posts",query:{postsId:index,current:getCurr}}' href="javascript:;" class="el-button btn">阅读全文 »</router-link>
						</div>
						<div class="posts-footer-wrap">
								<div class="post-eof"></div>
						</div>
					</div>
				</article>
			</section>
			<el-row type = 'flex' justify = 'center'>
				<el-col :span = "14">
					<page></page>
				</el-col>
			</el-row>
		</div>
	</div> -->
	<Posts :postsTile = 'potstList[0].list' :getCurr = 'getCurr'>
		<el-row slot = 'page' type = 'flex' justify = 'center'>
				<el-col :span = "14">
					<page></page>
				</el-col>
		</el-row>
	</Posts>
</template>

<script>
import Posts  from "@/components/Posts.vue";
import page  from "@/components/Pagination.vue";
export default {
  name: 'index',
  data () {
    return {

    };
  },
beforeRouteEnter(to,from,next){
	 console.log('2') 
      next(vm =>{
         //通过VM来访问组件
      })
  },
  beforeRouteUpdate(to,from,next){
      //数据更新用
      console.log(to.path)
  },
  beforeRouteLeave(to,from,next){
      //next(false)阻止离开导航
      next();
  },
  components:{
  		page,
  		Posts
  },
  computed:{
  		potstList(){
  			return this.$store.state.articleList;
  		},
  		getCurr(){
  			return this.$store.state.currentNum;
  		}
  },
  created(){
	  /*this.$http.get('/api/article')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (response) {
	    console.log(response);
	  });*/
	  this.$store.dispatch('getArticle');
  }
};
</script>

<style lang="css" scoped>
</style>
