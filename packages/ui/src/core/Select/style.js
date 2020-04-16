import { useThemeUI } from 'theme-ui';

const getBorderColor = (hasError, state, colors) => {
  if (hasError) {
    return colors.error;
  }
  if (state.isDisabled) return colors.muted;
  if (state.isFocused) return colors.primary;
  return colors.border;
};

const getHoverBorderColor = (hasError, state, colors) => {
  if (hasError) {
    return colors.error;
  }
  return state.isFocused ? colors.primary : colors.border;
};

export const getStyle = (props) => {
  const { size, hasError = false } = props;
  const context = useThemeUI();
  const { fontSizes, fonts, colors } = context.theme;

  return {
    control: (provided, state) => {
      const currentBorderColor = getBorderColor(hasError, state, colors);
      return {
        ...provided,
        '&:hover': {
          borderColor: getHoverBorderColor(hasError, state, colors),
        },
        borderColor: currentBorderColor,
        boxShadow: '0',
        fontFamily: fonts.body,
        fontSize: fontSizes[1],
        minHeight: size === 'small' ? '44px' : '54px',
        padding: '0 2px',
      };
    },
  };
};