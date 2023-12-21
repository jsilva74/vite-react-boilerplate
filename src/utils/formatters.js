import plural from 'pluralize-ptbr';

export const numberFormat = (value, locale = 'pt-BR') =>
  new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value);
export const decimalFormat = (value, decimalPlaces = 2, locale = 'pt-BR') =>
  new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);
export const normalize2Sort = (item) =>
  (
    (typeof item === 'object' && (item?.title || item?.name || item?.label)) ||
    (typeof item === 'string' && item) ||
    ''
  )
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/gi, ' ')
    .toLowerCase();
export const pluralize = (singular, count) => {
  if (count === 1) return singular;
  return plural(singular);
};
