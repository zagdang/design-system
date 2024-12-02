import { colors, typography } from './index';

// colors 객체의 중첩 경로를 표현하는 타입
type ColorPath =
  | keyof typeof colors
  | `background.${keyof typeof colors.background}`
  | `gradient.${keyof typeof colors.gradient}`
  | `brand.${keyof typeof colors.brand}`
  | `gray.${keyof typeof colors.gray}`
  | `white.${keyof typeof colors.white}`
  | `button.hover.gray.${keyof typeof colors.button.hover.gray}`
  | `button.hover.darkGray.${keyof typeof colors.button.hover.darkGray}`
  | `button.hover.red.${keyof typeof colors.button.hover.red}`
  | `button.hover.yellow.${keyof typeof colors.button.hover.yellow}`
  | `button.hover.dark.${keyof typeof colors.button.hover.dark}`;

type BoldLevel = keyof typeof typography.bold;
type MediumLevel = keyof typeof typography.medium;
type RegularLevel = keyof typeof typography.regular;
type LightLevel = keyof typeof typography.light;

export const getColor = (path: ColorPath) => {
  return path.split('.').reduce((obj: any, key: string) => {
    return obj[key];
  }, colors);
};

export const getFontSize = (
  weight: keyof typeof typography,
  level: BoldLevel | MediumLevel | RegularLevel | LightLevel,
) => {
  return typography[weight][level as keyof (typeof typography)[typeof weight]];
};

type CSSVariableObject = {
  [key: `--gdgoc-${string}`]: string;
};

export const generateCssVariables = () => {
  const flattenObject = (obj: object, prefix = ''): CSSVariableObject => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === 'object' && value !== null) {
        Object.assign(acc, flattenObject(value, newKey));
      } else {
        acc[`--gdgoc-${newKey}`] = value as string;
      }
      return acc;
    }, {} as CSSVariableObject);
  };

  return {
    colors: flattenObject(colors),
    typography: flattenObject(typography),
  };
};
