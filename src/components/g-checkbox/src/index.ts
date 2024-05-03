import Checkbox from './g-checkbox.vue';

/* istanbul ignore next */
Checkbox.install = function(Vue: any) {
  Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;
export const GCheckbox = Checkbox;