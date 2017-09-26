<template>
	<!-- <div class = 'posts-content-wrap'>
		<div class = 'posts-content'>
			<section class = 'posts-list-wrap'>
				<article>
					<header class = 'posts-head'>
						<h2>{{getDetails[0].title}}</h2>
						<div class = 'posts-meta'>
							<span class = 'posts-time'>
								<span class = 'posts-meta-item-icon'>
									<i class="fa fa-calendar-o"></i>
								</span>
								<span>发表于</span>
								<time>{{getDetails[0].time}}</time>
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
						<div>
							<div v-html = 'getDetails[0].content'></div>
						</div>
						<div class="posts-body-footer">
							<ul class = 'posts-author'>
								<li>
									<strong>本文作者：</strong>
									{{getDetails[0].author}}
								</li>
								<li>
									<strong>本文链接：</strong>
									<span v-html = 'getDetails[0].url'></span>
								</li>
								<li>
									<strong>版权声明：</strong>
									<span v-html = 'getDetails[0].statement'></span>
								</li>
							</ul>
						</div>
					</div>
				</article>
			</section>
		</div>
	</div> -->
	<Posts :postsTile = 'getDetails'>
		<div slot = 'posts-footer' class="posts-body-footer">
			<ul class = 'posts-author'>
				<li>
					<strong>本文作者：</strong>
					{{getDetails[0].author}}
				</li>
				<li>
					<strong>本文链接：</strong>
					<span v-html = 'getDetails[0].url'></span>
				</li>
				<li>
					<strong>版权声明：</strong>
					<span v-html = 'getDetails[0].statement'></span>
				</li>
				</ul>
		</div>
	</Posts>
</template>

<script>
import Posts  from "@/components/Posts.vue";
export default {
  name: 'articleDetails',
  data () {
    return {

    };
  },
  components:{
  		Posts
  },
  beforeRouterEneter(to,from,next){
  	console.log('2');
  	next()
  },
  computed:{
  		getDetails(){
  			return this.$store.state.articleDetais
  		}
  },
  created(){
  		this.$store.dispatch('getArticleDetails',this.$route.query);
  }
};
</script>