import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import Hook from "../pages/hook/index.vue";
import Directive from "../pages/directive/index.vue";
import Utils from "../pages/directive/index.vue";

import docRouter from '../pages/doc/doc-router';
import hookRouter from '../pages/hook/hook-router';
import directiveRouter from '../pages/directive/directive-router';
import utilsRouter from '../pages/utils/utils-router';

var routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    name: 'name',
    component: Home
  },
  {
    path: "/doc",
    name: 'doc',
    redirect: '/doc/introduce',
    component: Doc,
    children: docRouter
  },
  {
    path: "/hook",
    name: 'hook',
    redirect: '/hook/introduce',
    component: Hook,
    children: hookRouter
  },
  {
    path: "/directive",
    name: 'directive',
    redirect: '/directive/introduce',
    component: Directive,
    children: directiveRouter
  },
  {
    path: "/utils",
    name: 'utils',
    redirect: '/utils/introduce',
    component: Utils,
    children: utilsRouter
  }
]

export default routes;