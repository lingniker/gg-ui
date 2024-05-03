<template>
  <div class="gp-pagination">
    <el-pagination background
      layout="prev, pager, next"
      :pager-count="5"
      :current-page="+page"
      :page-size="+pageSize"
      :total="+total"
      @current-change="currentChange">
    </el-pagination>
  </div>
</template>

<script>
  import { ElPagination } from 'element-plus';
  export default {
    name: 'g-gp-pagination',
    components: {
      ElPagination: ElPagination
    },
    props: {
      layout: {
        type: String,
        default: () => { return 'prev, pager, next';}
      },
      pagerCount: {
        type: [Number,String],
        default: () => { return 5;}
      },
      page: {
        type: [Number,String],
        default: () => { return 1;}
      },
      pageSize: {
        type: [Number,String],
        default: () => { return 10;}
      },
      total: {
        type: [Number,String],
        default: () => { return 0;}
      },
    },
    methods: {
      currentChange(val) {
        this.$emit('currentChange', val);
      }
    }
  };
</script>
