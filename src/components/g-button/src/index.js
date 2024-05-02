import Button from './g-button.vue';

/* istanbul ignore next */
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
export const GButton = Button;

