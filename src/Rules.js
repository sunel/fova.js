import toDate from 'validator/lib/toDate';
import toFloat from 'validator/lib/toFloat';
import toInt from 'validator/lib/toInt';
import toBoolean from 'validator/lib/toBoolean';
import equals from 'validator/lib/equals';
import contains from 'validator/lib/contains';
import matches from 'validator/lib/matches';

import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import isMACAddress from 'validator/lib/isMACAddress';
import isIP from 'validator/lib/isIP';
import isFQDN from 'validator/lib/isFQDN';

import isBoolean from 'validator/lib/isBoolean';

import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isNumeric from 'validator/lib/isNumeric';
import isPort from 'validator/lib/isPort';
import isLowercase from 'validator/lib/isLowercase';
import isUppercase from 'validator/lib/isUppercase';

import isAscii from 'validator/lib/isAscii';
import isFullWidth from 'validator/lib/isFullWidth';
import isHalfWidth from 'validator/lib/isHalfWidth';
import isVariableWidth from 'validator/lib/isVariableWidth';
import isMultibyte from 'validator/lib/isMultibyte';
import isSurrogatePair from 'validator/lib/isSurrogatePair';

import isInt from 'validator/lib/isInt';
import isFloat from 'validator/lib/isFloat';
import isDecimal from 'validator/lib/isDecimal';
import isHexadecimal from 'validator/lib/isHexadecimal';
import isDivisibleBy from 'validator/lib/isDivisibleBy';

import isHexColor from 'validator/lib/isHexColor';

import isISRC from 'validator/lib/isISRC';

import isMD5 from 'validator/lib/isMD5';
import isHash from 'validator/lib/isHash';

import isJSON from 'validator/lib/isJSON';
import isEmpty from 'validator/lib/isEmpty';

import isLength from 'validator/lib/isLength';
import isByteLength from 'validator/lib/isByteLength';

import isUUID from 'validator/lib/isUUID';
import isMongoId from 'validator/lib/isMongoId';

import isAfter from 'validator/lib/isAfter';
import isBefore from 'validator/lib/isBefore';

import isIn from 'validator/lib/isIn';

import isCreditCard from 'validator/lib/isCreditCard';

import isISIN from 'validator/lib/isISIN';
import isISBN from 'validator/lib/isISBN';
import isISSN from 'validator/lib/isISSN';

import isMobilePhone from 'validator/lib/isMobilePhone';

import isCurrency from 'validator/lib/isCurrency';

import isISO8601 from 'validator/lib/isISO8601';
import isISO31661Alpha2 from 'validator/lib/isISO31661Alpha2';

import isBase64 from 'validator/lib/isBase64';
import isDataURI from 'validator/lib/isDataURI';

import isLatLong from 'validator/lib/isLatLong';
import isPostalCode from 'validator/lib/isPostalCode';

import ltrim from 'validator/lib/ltrim';
import rtrim from 'validator/lib/rtrim';
import trim from 'validator/lib/trim';
import escape from 'validator/lib/escape';
import unescape from 'validator/lib/unescape';
import stripLow from 'validator/lib/stripLow';
import whitelist from 'validator/lib/whitelist';
import blacklist from 'validator/lib/blacklist';
import isWhitelisted from 'validator/lib/isWhitelisted';

import normalizeEmail from 'validator/lib/normalizeEmail';

import toString from 'validator/lib/util/toString';

const validator = {
  equals,
  contains,
  matches,
  ltrim,
  rtrim,
  trim,
  escape,
  unescape,
  stripLow,
  whitelist,
  blacklist,
  normalizeEmail,
  to: {
    date: toDate,
    float: toFloat,
    int: toInt,
    boolean: toBoolean,
    string: toString,
  },
  is: {
    email: isEmail,
    url: isURL,
    macAddress: isMACAddress,
    ip: isIP,
    fqdn: isFQDN,
    boolean: isBoolean,
    alpha: isAlpha,
    alphanumeric: isAlphanumeric,
    numeric: isNumeric,
    port: isPort,
    lowecase: isLowercase,
    uppercase: isUppercase,
    ascii: isAscii,
    fullWidth: isFullWidth,
    halfWidth: isHalfWidth,
    variableWidth: isVariableWidth,
    multibyte: isMultibyte,
    surrogatePair: isSurrogatePair,
    int: isInt,
    float: isFloat,
    decimal: isDecimal,
    hexadecimal: isHexadecimal,
    divisibleBy: isDivisibleBy,
    hexColor: isHexColor,
    isrc: isISRC,
    md5: isMD5,
    hash: isHash,
    json: isJSON,
    empty: isEmpty,
    length: isLength,
    byteLength: isByteLength,
    uuid: isUUID,
    mongoId: isMongoId,
    after: isAfter,
    before: isBefore,
    in: isIn,
    creditCard: isCreditCard,
    isin: isISIN,
    isbn: isISBN,
    issn: isISSN,
    mobilePhone: isMobilePhone,
    postalCode: isPostalCode,
    currency: isCurrency,
    iso8601: isISO8601,
    iso31661Alpha2: isISO31661Alpha2,
    base64: isBase64,
    dataURI: isDataURI,
    latLong: isLatLong,
    whitelisted: isWhitelisted,
  },
};

export default validator;
