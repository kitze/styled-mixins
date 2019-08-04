import { darken } from 'polished';

export const marginVertical = (marginTop, marginBottom = marginTop) => ({
  marginTop,
  marginBottom,
});

export const marginHorizontal = (marginLeft, marginRight = marginLeft) => ({
  marginLeft,
  marginRight,
});

export const paddingVertical = (paddingTop, paddingBottom = paddingTop) => ({
  paddingTop,
  paddingBottom,
});

export const paddingHorizontal = (paddingLeft, paddingRight = paddingLeft) => ({
  paddingLeft,
  paddingRight,
});

export const screenSize = {
  width: '100vw',
  height: '100vh',
};

export const absolute = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export const ellipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const fixedHeight = height => ({
  height,
  maxHeight: height,
  minHeight: height,
});

export const fixedWidth = width => ({
  width,
  maxWidth: width,
  minWidth: width,
});

export const whiteish = (opacity = 1) => `rgba(255,255,255, ${opacity})`;

export const hoverAndFocus = style => ({
  '&:hover': style,
  '&:focus': style,
});

export const hoverAndActiveBackgroundColor = color => ({
  backgroundColor: color,
  '&:hover': {
    backgroundColor: darken(0.03, color),
  },
  '&:active': {
    backgroundColor: darken(0.04, color),
  },
});
