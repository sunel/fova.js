import isEmpty from 'validator/lib/isEmpty';

function isRequired(str) {
  return !isEmpty(str);
}

export default isRequired;
