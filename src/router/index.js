import Vue from 'vue'
import Router from 'vue-router'


import postsList from '@/views/postsList.vue'
import Archives from '@/views/archives.vue'
import Tags from '@/views/Tags.vue'

import articleDetails from '@/views/articleDetails.vue'
Vue.use(Router)

export default new Router({
	mode:'history',
	linkActiveClass:'isActive',
  routes: [
        		{
        			path:'/',
        			name:'postsList',
        			component:postsList
        		},
        		{
        			path:'/archives',
        			name:'archives',
        			component:Archives
        		},
      		{
      			path:'/tags',
      			component:Tags,
      			name:'tags'
      		},
          {
            path:'/posts/:articleId?',
            component:articleDetails
          }
      ]
})
