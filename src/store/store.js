import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import vueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(vueAxios,axios)
const store = new Vuex.Store({
	state:{
		articleList:[
			{
				count:'',
				list:''
			}
		],
		currentNum:1,
		showItem:5,
		allPage:0,
		articleDetais:[
				{
					title:'',
					content:'',
					time:'',
					statement:'',
					author:'',
					url:''
				}
		]
	},
	getters:{
		getAllPage(state){
			//return allPage
		}
	},
	mutations:{
		changeArticle(state,payload){
			state.articleList = payload;
			state.allPage = Math.ceil(payload[0].count/state.showItem);
		},
		next(state){
			state.currentNum++;
		},
		prev(state){
			state.currentNum--;
		},
		gotoPage(state,payload){
			state.currentNum = payload;
		},
		changeArticleDetails(state,payload){
			state.articleDetais = payload;
		}
	},
	actions:{
		getArticle(store){
			axios.get('/api/article?item='+store.state.showItem+'&current='+store.state.currentNum)
			.then((res)=>{
				store.commit('changeArticle',res.data);
			})
			.catch((err)=>{
				console.log(err);
			})
		},
		getArticleDetails(store,payload){
			axios.get('./api/articleDetails?postId='+payload.postsId+'&current='+payload.current)
			.then(res=>{
					store.commit('changeArticleDetails',res.data);
			})
			.catch(err=>{
				console.log(err)
			})
		}
	}
});
export default store;