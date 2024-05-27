import components from './components.js';

import Introduce from './introduce/index.vue';

// import directive from '';
var componentsRouters = []


var douRouter = [
  {
    path: '/hook/introduce',
    name: 'hookIntroduce',
    title: 'introduce 介绍',
    component: Introduce
  }
]

export default douRouter