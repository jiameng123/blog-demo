<template>
	<div class = 'posts-content'>
			<section class = 'posts-list-wrap'>
				<article v-for = '(item,index) in postsTile' key = 'index'>
					<header class = 'posts-head'>
						<h2 v-if = 'isLink'>
							<a href="'+item.url+'" class="postLink">{{item.title}}</a>
						</h2>
						<h2 v-else >{{item.title}}</h2>
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
						<slot name = 'posts-footer' class="posts-body-footer">
							<div name = 'posts-footer'>
								<div class="posts-body-btnWrap">
									<router-link tag = 'a' :to = '{path:"/posts",query:{postsId:index,current:getCurr}}' href="javascript:;" class="el-button btn">阅读全文 »</router-link>
								</div>
								<div class="posts-footer-wrap">
										<div class="post-eof"></div>
								</div>
							</div>
						</slot>
					</div>
				</article>
			</section>
			<slot name= 'page'></slot>
	</div>
</template>

<script>
export default {

  name: 'Posts',
  props:{
  		postsTile:'',
  		getCurr:''
  },
  data () {
    return {

    };
  },
  computed:{
  		isLink(){
  			if(JSON.stringify(this.$route.query) === '{}')  return true;
  			else return false;
  		}
  },
  created(){

  }
};
</script>

<style lang="css" scoped>
</style>