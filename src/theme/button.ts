import {
  SystemStyleObject,
  SystemStyleFunction,
  getColor,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontWeight: 600,
  borderRadius: "xl",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  _before: {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    transition: "left 0.5s ease-in-out",
  },
  _hover: {
    transform: "translateY(-1px)",
    _before: {
      left: "100%",
    },
  },
  _active: {
    transform: "translateY(0)",
  },
  _disabled: {
    cursor: "not-allowed",
    boxShadow: "none",
    opacity: 0.6,
    transform: "none",
    _before: {
      display: "none",
    },
  },
  _focus: {
    outline: "none",
  },
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    border: "2px solid",
    borderColor: `${c}.300`,
    bg: "transparent",
    color: `${c}.600`,
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.05)`,
    _hover: {
      bg: `${c}.50`,
      borderColor: `${c}.400`,
      boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 3px ${getColor(theme, `${c}.100`)}`,
      _disabled: {
        bg: "transparent",
        borderColor: `${c}.200`,
        boxShadow: "none",
      },
    },
    _active: {
      bg: `${c}.100`,
      borderColor: `${c}.500`,
      boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.1)`,
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}, 0 4px 12px rgba(0, 0, 0, 0.1)`,
    },
  };
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: `linear-gradient(135deg, ${getColor(theme, `${c}.500`)}, ${getColor(theme, `${c}.600`)})`,
    color: "white",
    boxShadow: `0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)`,
    _hover: {
      bg: `linear-gradient(135deg, ${getColor(theme, `${c}.600`)}, ${getColor(theme, `${c}.700`)})`,
      boxShadow: `0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15)`,
      _disabled: {
        bg: `${c}.300`,
        boxShadow: "none",
      },
    },
    _active: {
      bg: `linear-gradient(135deg, ${getColor(theme, `${c}.700`)}, ${getColor(theme, `${c}.800`)})`,
      boxShadow: `0 2px 8px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.2)`,
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}, 0 6px 20px rgba(0, 0, 0, 0.2)`,
    },
  };
};

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: "transparent",
    color: `${c}.600`,
    _hover: {
      bg: `${c}.50`,
      color: `${c}.700`,
      boxShadow: `0 2px 8px rgba(0, 0, 0, 0.05)`,
      _disabled: {
        bg: "transparent",
        color: `${c}.300`,
      },
    },
    _active: {
      bg: `${c}.100`,
      color: `${c}.800`,
    },
    _focus: {
      bg: `${c}.50`,
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}`,
    },
  };
};

const variantGradient: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: `linear-gradient(45deg, ${getColor(theme, `${c}.400`)}, ${getColor(theme, `${c}.600`)}, ${getColor(theme, `${c}.500`)})`,
    backgroundSize: "200% 200%",
    animation: "gradient 3s ease infinite",
    color: "white",
    boxShadow: `0 4px 15px rgba(0, 0, 0, 0.2)`,
    _hover: {
      boxShadow: `0 6px 20px rgba(0, 0, 0, 0.3)`,
      animationDuration: "1s",
    },
    _active: {
      boxShadow: `0 2px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.2)`,
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}, 0 6px 20px rgba(0, 0, 0, 0.3)`,
    },
  };
};

const variantNeon: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: "transparent",
    border: "2px solid",
    borderColor: `${c}.400`,
    color: `${c}.400`,
    boxShadow: `0 0 10px ${getColor(theme, `${c}.200`)}, inset 0 0 20px rgba(0, 0, 0, 0.1)`,
    _hover: {
      color: `${c}.300`,
      borderColor: `${c}.300`,
      boxShadow: `0 0 20px ${getColor(theme, `${c}.300`)}, 0 0 40px ${getColor(theme, `${c}.200`)}, inset 0 0 20px rgba(0, 0, 0, 0.1)`,
      textShadow: `0 0 10px ${getColor(theme, `${c}.300`)}`,
    },
    _active: {
      color: `${c}.500`,
      borderColor: `${c}.500`,
      boxShadow: `0 0 15px ${getColor(theme, `${c}.400`)}, inset 0 0 20px rgba(0, 0, 0, 0.2)`,
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.100`)}, 0 0 20px ${getColor(theme, `${c}.300`)}`,
    },
  };
};

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  ghost: variantGhost,
  gradient: variantGradient,
  neon: variantNeon,
};

const sizes: Record<string, SystemStyleObject> = {
  xs: {
    h: "24px",
    minW: "24px",
    fontSize: "xs",
    px: 2,
    py: 1,
  },
  sm: {
    h: "32px",
    minW: "32px",
    fontSize: "sm",
    px: 3,
    py: 1,
  },
  md: {
    h: "40px",
    minW: "40px",
    fontSize: "sm",
    px: 4,
    py: 2,
  },
  lg: {
    h: "48px",
    minW: "48px",
    fontSize: "md",
    px: 6,
    py: 3,
  },
  xl: {
    h: "56px",
    minW: "56px",
    fontSize: "lg",
    px: 8,
    py: 4,
  },
  "2xl": {
    h: "64px",
    minW: "64px",
    fontSize: "xl",
    px: 10,
    py: 5,
  },
};

// Add keyframes for gradient animation
const keyframes = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const styles = {
  baseStyle,
  variants,
  sizes,
  // Add global styles for animations
  global: {
    "@keyframes gradient": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  },
};

export default styles;