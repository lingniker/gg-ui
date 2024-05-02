import  ZoomImage from './index.vue';

/* istanbul ignore next */
ZoomImage.install = function(Vue: any) {
  Vue.component( ZoomImage.name,  ZoomImage);
};

export default  ZoomImage;
export const  GZoomImage =  ZoomImage;