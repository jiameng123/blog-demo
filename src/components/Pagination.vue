<template>
	<nav>
		<ul class = 'page-wrap'>
			<li v-show = 'getCurrent != 1'>
				<a href="javascript:;" @click = 'prev'>
					<i class = "fa fa-angle-left"></i>
				</a>
			</li>
			<li v-for = '(item,index) in getNumber' key = 'index' >
				<a :class = "{'is-current':getCurrent === item }" @click = 'goto(item)'>{{item}}</a>
			</li>
			<li v-show = 'getAllPage != getCurrent &&  getAllPage != 0'>
				<a href="javascript:;" @click = 'next'>
					<i class="fa fa-angle-right"></i>
				</a>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
  props:{},
  name: 'Pagination',
  data () {
    return {
    	current:1
    };
  },
  computed:{
  		getNumber(){
  			let pag = [];
  			let current = this.getCurrent;
  			let allPage = this.$store.state.allPage;
  			let showItem = this.$store.state.showItem;
  			if(current < showItem){
  				 let i = Math.min(allPage,showItem);
  				 while (i) {
  				 	pag.unshift(i--);
  				 }
  			} else {
  				let middle = current - Math.floor(showItem/2);
  				let i = showItem;
  				if(middle > allPage - showItem){
  					 middle = allPage - showItem + 1;
  				}
  				while (i--) {
  					pag.push(middle++);
  				}
  			}
  			return pag;
  		},
  		getCurrent(){
  			return this.$store.state.currentNum;
  		},
  		getAllPage(){
  			return this.$store.state.allPage;
  		}
  },
  created(){

  },
  methods:{
  	 goto(index){
  	 		if(index == this.$store.currentNum) return;
  	 		this.$store.commit('gotoPage',index);
         this.$store.dispatch('getArticle');
  	 },
  	 prev(){
  	 	   this.$store.commit('prev');
          this.$store.dispatch('getArticle');
  	 },
  	 next(){
  	 	   this.$store.commit('next');
         this.$store.dispatch('getArticle');
  	 }
  }
};
</script>

<style lang="css" scoped>
</style>