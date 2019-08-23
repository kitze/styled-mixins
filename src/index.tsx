import { darken } from 'polished';
import { CSSObject } from 'styled-components';

export const marginVertical = (
  marginTop,
  marginBottom = marginTop
): CSSObject => ({
  marginTop,
  marginBottom,
});

export const marginHorizontal = (
  marginLeft,
  marginRight = marginLeft
): CSSObject => ({
  marginLeft,
  marginRight,
});

export const paddingVertical = (
  paddingTop,
  paddingBottom = paddingTop
): CSSObject => ({
  paddingTop,
  paddingBottom,
});

export const paddingHorizontal = (
  paddingLeft,
  paddingRight = paddingLeft
): CSSObject => ({
  paddingLeft,
  paddingRight,
});

export const margin = (
  marginTop,
  marginRight = marginTop,
  marginBottom = marginTop,
  marginLeft = marginRight
): CSSObject => ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
});

export const padding = (
  paddingTop,
  paddingRight = paddingTop,
  paddingBottom = paddingTop,
  paddingLeft = paddingRight
): CSSObject => ({
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
});

export const screenSize: CSSObject = {
  width: '100vw',
  height: '100vh',
};

export const absolute: CSSObject = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export const diagonalGradient = (from, to): CSSObject => ({
  background: `linear-gradient(to bottom right, ${from}, ${to})`,
});

export const topBottomGradient = (from, to): CSSObject => ({
  background: `linear-gradient(${from}, ${to})`,
});

export const size = (w, h = w, important): CSSObject => ({
  width: `${w}px ${important ? '!important' : ''}`,
  height: `${h}px ${important ? '!important' : ''}`,
});

export const iconSize = (w, h = w): CSSObject => size(w, h, true);

export const noSelect: CSSObject = {
  userSelect: 'none',
  cursor: 'default',
};

export const getActionColors = (color, activeProp = 'active') => (
  props
): CSSObject => {
  const { disabled } = props;
  const active = props[activeProp];

  return {
    backgroundColor: color,
    ...(!disabled &&
      !active && {
        '&:hover': {
          backgroundColor: darken(0.1, color),
        },
        '&:active': {
          backgroundColor: darken(0.2, color),
        },
      }),
    ...(active && {
      backgroundColor: darken(0.3, color),
    }),
  };
};

export const ellipsis: CSSObject = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const fixedHeight = (height): CSSObject => ({
  height,
  maxHeight: height,
  minHeight: height,
});

export const fixedWidth = (width): CSSObject => ({
  width,
  maxWidth: width,
  minWidth: width,
});

export const fixedSize = (width, height = width): CSSObject => ({
  ...fixedHeight(height),
  ...fixedWidth(width),
});

export const whiteish = (opacity = 1): CSSObject =>
  `rgba(255,255,255, ${opacity})`;
export const blackish = (opacity = 1): CSSObject => `rgba(0,0,0, ${opacity})`;

export const hoverAndFocus = (style): CSSObject => ({
  '&:hover': style,
  '&:focus': style,
});

export const hoverAndActiveBackgroundColor = (color): CSSObject => ({
  backgroundColor: color,
  '&:hover': {
    backgroundColor: darken(0.03, color),
  },
  '&:active': {
    backgroundColor: darken(0.04, color),
  },
});

export const targetChild = (component, styles): CSSObject => ({
  [`& .${component.className}`]: styles,
});

export const hoverChild = (component, styles): CSSObject => ({
  '&:hover': {
    [`& .${component.className}`]: styles,
  },
});

export const fromTheme = key => (property): CSSObject =>
  property.theme[key](property);

export const autoGrid = (
  minColumnWidth = 250,
  gridGap = 0,
  mode = 'fill',
  maxColumnWidth = '1fr'
): CSSObject => ({
  gridTemplateColumns: `repeat(auto-${mode}, minmax(${minColumnWidth}px, ${maxColumnWidth}))`,
  display: 'grid',
  gridGap,
});

export type gridProps = {
  columnGap?: number;
  cols?: number;
  rowGap?: number;
  gap?: number;
};

export const grid = ({
  cols = 1,
  columnGap = 0,
  rowGap = columnGap,
  gap = 0,
}: gridProps): CSSObject => {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    rowGap: rowGap || gap,
    columnGap: columnGap || gap,
  };
};

export const absoluteCorner = (corner = 1, offset = 0): CSSObject => {
  return {
    position: 'absolute',
    ...(corner === 2 && {
      top: offset,
      right: offset,
    }),
    ...(corner === 1 && {
      left: offset,
      top: offset,
    }),
    ...(corner === 3 && {
      right: offset,
      bottom: offset,
    }),
    ...(corner === 4 && {
      left: offset,
      bottom: offset,
    }),
  };
};

export const unstyleButton: CSSObject = {
  background: 'none',
  outline: 'none',
  border: 'none',
};

export const hoverable = ({
  color = 'white',
  background = false,
  initial = true,
}): CSSObject => ({ disabled }) => {
  const styleKey = background ? 'backgroundColor' : 'color';

  return {
    ...(!disabled && {
      cursor: 'pointer',
      ...(initial && { [styleKey]: color }),
      transition: 'all 150ms linear',
      '&:hover': {
        [styleKey]: initial ? darken(0.2, color) : color,
      },
    }),
  };
};

export const exceptLast = (styles): CSSObject => ({
  '&:not(:last-of-type)': styles,
});

export const exceptFirst = (styles): CSSObject => ({
  '&:not(:last-of-type)': styles,
});

export const spaceAll = (
  marginDirection,
  size,
  spaceBottom?: boolean
): CSSObject => ({
  '& > *': {
    [marginDirection]: size,
    ...(spaceBottom && { marginBottom: size }),
  },
  '& > *:last-child': {
    [marginDirection]: 0,
    ...(spaceBottom && { marginBottom: 0 }),
  },
});
