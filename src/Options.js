import { addClass, removeClass, insertAfter } from './Utils';

export default {
  highlight(element) {
    removeClass(element, 'is-valid');
    addClass(element, 'is-invalid');
  },
  unhighlight(element) {
    addClass(element, 'is-valid');
    removeClass(element, 'is-invalid');
  },
  errorElement: 'span',
  errorClass: 'invalid-feedback',
  errorPlacement(error, element) {
    insertAfter(error, element);
  },
    // This will ignore all hidden elements alongside `contenteditable` elements
    // that have no `name` attribute
  ignore: '[type=hidden]',
};
