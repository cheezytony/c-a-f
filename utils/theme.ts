export const colorsSchemes = {
  black: 'bg-black text-white',
  'black:ghost': 'bg-transparent text-black',
  'black:soft': 'bg-gray-200 text-black',
  blue: 'bg-blue-500 text-white',
  'blue:outline': 'bg-white border border-blue-500 text-blue-500',
  gray: 'bg-gray-500 text-white',
  green: 'bg-green-500 text-white',
  'green:soft': 'bg-green-200 text-green-500',
  red: 'bg-red-500 text-white',
  'red:soft': 'bg-red-200 text-red-500',
  white: 'bg-white border border-gray-300 text-black',
};

export const controlColorsSchemes = {
  black: 'hover:bg-gray-700 focus:bg-gray-500',
  'black:ghost': 'hover:bg-gray-100 focus:bg-gray-200',
  'black:soft': 'hover:bg-gray-300 focus:bg-black',
  blue: 'hover:bg-blue-600 focus:bg-blue-700',
  'blue:outline': 'hover:bg-blue-50 focus:bg-blue-100',
  gray: 'hover:bg-gray-400 focus:bg-gray-600',
  green: 'hover:bg-green-600 focus:bg-green-700',
  'green:soft': 'hover:bg-green-100 focus:bg-green-200',
  red: 'hover:bg-red-400 focus:bg-red-600',
  'red:soft':
    'hover:bg-red-400 hover:text-white focus:bg-red-600 focus:text-white',
  white: 'hover:bg-gray-100 focus:bg-gray-200',
};

export const getColorScheme = (
  colorScheme: keyof typeof colorsSchemes = 'black',
  useControlColors = false
) => {
  return (
    colorsSchemes[colorScheme] +
    (useControlColors ? ' ' + controlColorsSchemes[colorScheme] : ' ')
  );
};
