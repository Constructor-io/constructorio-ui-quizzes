import { useMemo } from 'react';
import { rgbToHsl } from '../utils';

type UsePrimaryColorStyles = (primaryColor?: string) => any;

const usePrimaryColorStyles: UsePrimaryColorStyles = (primaryColor) => {
  const memoizedPrimaryColorStyles = useMemo(() => {
    let primaryColorStyles = {};

    if (primaryColor) {
      // Extract r, g, b values from the string. (r), (g), (b)
      const rgbRegex = /^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/;
      const rgbMatch = primaryColor.trim().match(rgbRegex)?.slice(1);

      if (rgbMatch && rgbMatch.length === 3) {
        const [r, g, b] = rgbMatch;
        const [h, s, l] = rgbToHsl(Number(r), Number(g), Number(b));

        primaryColorStyles = {
          '--primary-color-h': `${h}`,
          '--primary-color-s': `${s}%`,
          '--primary-color-l': `${l}%`,
        };
      }
    }

    return primaryColorStyles;
  }, [primaryColor]);

  return memoizedPrimaryColorStyles!;
};

export default usePrimaryColorStyles;
