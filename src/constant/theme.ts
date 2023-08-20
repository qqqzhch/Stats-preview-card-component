const themeConfig = {};

export default themeConfig;

const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
};

export const ColorPrimarVerydarkblue = 'hsl(233, 47%, 7%)';
export const ColorPrimarDarkdesaturatedblue = 'hsl(244, 38%, 16%)';
export const ColorPrimarSoftviolet = 'hsl(277, 64%, 61%)';

export const ColorNeutralWhite = 'hsl(0, 0%, 100%)';
export const ColorNeutralSlightlytransparentwhite = 'hsla(0, 0%, 100%, 0.75)';
export const ColorNeutralSlightlytransparentwhite2 = 'hsla(0, 0%, 100%, 0.6)';
/*
## Colors

### Primary

- Very dark blue (main background): hsl(233, 47%, 7%)
- Dark desaturated blue (card background): hsl(244, 38%, 16%)
- Soft violet (accent): hsl(277, 64%, 61%)

### Neutral

- White (main heading, stats): hsl(0, 0%, 100%)
- Slightly transparent white (main paragraph): hsla(0, 0%, 100%, 0.75)
- Slightly transparent white (stat headings): hsla(0, 0%, 100%, 0.6)


*/
