import trim from 'validator/lib/trim';

const rnotwhite = /\S+/g;
const rclass = /[\t\r\n]/g;

export function addClass(elem, value) {
  const element = elem;
  const classes = (value || '').match(rnotwhite) || [];
  let cur = element.nodeType === 1 && (element.className ?
        (` ${element.className} `).replace(rclass, ' ') :
        ' '
    );
  let clazz = null;
  if (cur) {
    let i = 0;
    while ((clazz = classes[i++])) {
      if (cur.indexOf(` ${clazz} `) < 0) {
        cur += `${clazz} `;
      }
    }
    element.className = trim(cur);
  }
}

export function removeClass(elem, value) {
  const element = elem;
  const classes = (value || '').match(rnotwhite) || [];
  let cur = element.nodeType === 1 && (element.className ?
        (` ${element.className} `).replace(rclass, ' ') :
        ' '
    );
  let clazz = null;
  if (cur) {
    let i = 0;
    while ((clazz = classes[i++])) {
      if (cur.indexOf(` ${clazz} `) < 0) {
        cur = cur.replace(` ${clazz} `, ' ');
      }
    }
    element.className = trim(cur);
  }
}

export function hasClass(element, value) {
  const className = ` ${value} `;
  return (element.nodeType === 1 && (` ${element.className} `).replace(rclass, ' ').indexOf(className) >= 0);
}

export function getClass(element) {
  return (element.nodeType === 1) ? (`${element.className}`).replace(rclass, ' ') : '';
}

export function getData(element, value) {
  return element.getAttribute(`data-${value}`);
}

export function insertAfter(newElement, targetElement) {
  const parent = targetElement.parentNode;
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

export function extractParams(funcName) {
  const indexOfParams = funcName.indexOf('(');
  const params = funcName
    .slice(indexOfParams + 1, -1).replace(/\s+/, '');
  return [funcName.slice(0, indexOfParams), params.indexOf(',') !== -1
    ? params.split(',')
    : [params]];
}
