type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

type ColorMapType = {[key in string]: Color};

export const colorMap = {
  'Black': '#262E33',
  'Blue01': '#65C9FF',
  'Blue02': '#5199E4',
  'Blue03': '#25557C',
  'Gray01': '#E6E6E6',
  'Gray02': '#929598',
  'Heather': '#3C4F5C',
  'PastelBlue': '#B1E2FF',
  'PastelGreen': '#A7FFC4',
  'PastelOrange': '#FFDEB5',
  'PastelRed': '#FFAFB9',
  'PastelYellow': '#FFFFB1',
  'Pink': '#FF488E',
  'Red': '#FF5C5C',
  'White': '#FFFFFF'
} as const;
export const colorStringList = Object.keys(colorMap) as ColorString[];

export const skinColorMap = {
  'Tanned': '#FD9841',
  'Yellow': '#F8D25C',
  'Pale': '#FFDBB4',
  'Light': '#EDB98A',
  'Brown': '#D08B5B',
  'DarkBrown': '#AE5D29',
  'Black': '#614335',
} as const;
export const skinColorStringList = Object.keys(skinColorMap) as SkinColorString[];

export const hairColorMap = {
  'Auburn': '#A55728', 
  'Black': '#2C1B18',
  'Blonde': '#B58143',
  'BlondeGolden': '#D6B370',
  'Brown': '#724133',
  'BrownDark': '#4A312C',
  'PastelPink': '#F59797',
  'Blue': '#000fdb',
  'Platinum': '#ECDCBF',
  'Red': '#C93305',
  'SilverGray': '#E8E1E1'
} as const;
export const hairColorStringList = Object.keys(hairColorMap) as HairColorString[];

export type ColorString = keyof typeof colorMap;
export type SkinColorString = keyof typeof skinColorMap;
export type HairColorString = keyof typeof hairColorMap;
