<template>
  <div class = "doc div page-container">
    <div class = "doc-left lx-scroll-doc" >
      <div class = "logo" >
      </div> 
      <ul>
        <li class="doc-li" v-for="(item, index) in directiveRouter" :key="index">
          <router-link :to="item.path" activeClass='active-menu'>{{ item.title }}</router-link>
        </li>
      </ul> 
    </div> 
    <div class = "doc-right div content lx-scroll-doc">
      <router-view></router-view>
    </div> 
  </div>

</template>

<script>
import "./index.scss";
import directiveRouter from './directive-router';

export default {
  name: 'directiveDov',
  data: () => {
    // console.log("directiveRouter ------------------------> ", directiveRouter);
    return {
      directiveRouter
    }
  }
}
</script>