export const breakString = (string: string) => {
  return string
    .replace(/([-_\sA-Z])/g, (match) => {
      if (/[-_]/.test(match)) return ' ';
      if (match === ' ') return match;
      return ` ${match}`;
    })
    .toLowerCase()
    .trim()
    .split(' ');
};

export const camelCase = (string: string) => {
  return breakString(string)
    .map((word: string, index) => {
      return index === 0 ? word : ucFirst(word);
    })
    .join('');
};

export const pascalCase = (string: string) => {
  return breakString(string)
    .map((word: string) => {
      return ucFirst(word);
    })
    .join('');
};

export const kebabCase = (string: string) => {
  return breakString(string).join('-');
};

export const snakeCase = (string: string) => {
  return breakString(string).join('_');
};

export const sentenceCase = (string: string) => {
  return breakString(string)
    .map((word: string, index) => {
      return index === 0 ? ucFirst(word) : word;
    })
    .join(' ');
};

export const titleCase = (string: string) => {
  return breakString(string)
    .map((word: string, index) => ucFirst(word))
    .join(' ');
};

export const ucFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};

export const truncate = (
  string: string,
  length = 30,
  after: string = '...'
) => {
  if (string.length <= length) return string;
  return string.slice(0, length) + after;
};

export const reverse = (string: string) => string.split('').reverse().join('');

export const queryToObject = (string: string) => {
  return string
    .trim()
    .replace(/^\?/, '')
    .split('&')
    .reduce((query: Record<string, any>, pair: string) => {
      const [key, value] = pair.split('=');
      query[key] = decodeURIComponent(value);
      return query;
    }, {});
};

export const objectToQuery = (object: Record<string, any>) => {
  return Object.keys(object)
    .map((key) => `${key}=${encodeURIComponent(object[key])}`)
    .join('&');
};
