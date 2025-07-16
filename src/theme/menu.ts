import { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyleList: SystemStyleObject = {
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  minW: "12rem",
  py: 2,
  borderRadius: "xl",
  border: "1px solid",
  borderColor: "gray.100",
  bg: "white",
  backdropFilter: "blur(10px)",
  position: "relative",
  overflow: "hidden",
  _before: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
  },
  _after: {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)",
  },
  animation: "slideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
};

const baseStyleItem: SystemStyleObject = {
  color: "gray.700",
  py: "0.75rem",
  px: "1rem",
  mx: "0.5rem",
  fontSize: "sm",
  fontWeight: 500,
  borderRadius: "lg",
  position: "relative",
  transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  _before: {
    content: '""',
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "3px",
    height: "0",
    bg: "primary.500",
    borderRadius: "full",
    transition: "height 0.2s ease",
  },
  _hover: {
    bg: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
    color: "primary.700",
    transform: "translateX(4px)",
    _before: {
      height: "60%",
    },
  },
  _focus: {
    bg: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
    color: "primary.600",
    outline: "none",
    boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)",
    transform: "translateX(4px)",
    _before: {
      height: "80%",
    },
  },
  _active: {
    bg: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))",
    color: "primary.800",
    transform: "translateX(2px)",
  },
  _disabled: {
    color: "gray.400",
    cursor: "not-allowed",
    opacity: 0.6,
    _hover: {
      bg: "transparent",
      transform: "none",
      _before: {
        height: "0",
      },
    },
  },
};

const baseStyleDivider: SystemStyleObject = {
  my: 2,
  mx: 3,
  borderColor: "gray.100",
  opacity: 0.8,
};

const baseStyleGroup: SystemStyleObject = {
  _notFirst: {
    borderTop: "1px solid",
    borderColor: "gray.100",
    pt: 2,
    mt: 2,
  },
};

const baseStyleGroupTitle: SystemStyleObject = {
  color: "gray.500",
  fontSize: "xs",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  px: 4,
  py: 2,
  mb: 1,
};

const baseStyleCommand: SystemStyleObject = {
  color: "gray.400",
  fontSize: "xs",
  fontWeight: 400,
  ml: "auto",
  pl: 4,
};

const baseStyleIcon: SystemStyleObject = {
  mr: 3,
  color: "gray.500",
  fontSize: "md",
  transition: "color 0.15s ease",
  _groupHover: {
    color: "primary.500",
  },
};

const baseStyle = {
  list: baseStyleList,
  item: baseStyleItem,
  divider: baseStyleDivider,
  group: baseStyleGroup,
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  icon: baseStyleIcon,
};

// Add keyframes for animations
const keyframes = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
  }
`;

const styles = {
  baseStyle,
  // Add global styles for animations
  global: {
    "@keyframes slideIn": {
      "from": {
        opacity: 0,
        transform: "translateY(-10px) scale(0.95)"
      },
      "to": {
        opacity: 1,
        transform: "translateY(0) scale(1)"
      },
    },
    "@keyframes slideOut": {
      "from": {
        opacity: 1,
        transform: "translateY(0) scale(1)"
      },
      "to": {
        opacity: 0,
        transform: "translateY(-10px) scale(0.95)"
      },
    },
  },
};

export default styles;