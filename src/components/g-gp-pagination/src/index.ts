import GpPagination from './gp-pagination.vue';

/* istanbul ignore next */
GpPagination.install = function(Vue: any) {
  Vue.component(GpPagination.name, GpPagination);
};

export default GpPagination;
export const GGpPagination = GpPagination;