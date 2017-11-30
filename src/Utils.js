import trim from 'validator/lib/trim';
import sizzle from 'sizzle';

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
  if (indexOfParams === -1) {
    return [funcName];
  }
  const params = funcName
    .slice(indexOfParams + 1, -1).replace(/\s+/, '');
  return [funcName.slice(0, indexOfParams), params.indexOf(',') !== -1
    ? params.split(',')
    : params];
}

export function getValue(element, form) {
  const type = element.type;

  if (type === 'radio' || type === 'checkbox') {
    if (!element.name) {
      return '';
    }
    const inputs = sizzle(`[name=${element.name}]:checked`, form);
    return (inputs.length) ? inputs[0].value : '';
  }

  let val = null;
  let idx = null;
  if (element.hasAttribute('contenteditable')) {
    val = element.textContent;
  } else {
    val = element.value;
  }

  if (type === 'file') {
    // Modern browser (chrome & safari)
    if (val.substr(0, 12) === 'C:\\fakepath\\') {
      return val.substr(12);
    }

    // Legacy browsers
    // Unix-based path
    idx = val.lastIndexOf('/');
    if (idx >= 0) {
      return val.substr(idx + 1);
    }

    // Windows-based path
    idx = val.lastIndexOf('\\');
    if (idx >= 0) {
      return val.substr(idx + 1);
    }

    // Just the file name
    return val;
  }

  if (typeof val === 'string') {
    return val.replace(/\r/g, '');
  }

  return val;
}
