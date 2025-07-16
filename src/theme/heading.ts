import { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontWeight: "400",
};

const sizes: Record<string, SystemStyleObject> = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1,
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1,
  },
  "2xl": {
    fontSize: ["2xl", null, "40px"],
    lineHeight: [1.2, null, "56px"],
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2],
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2],
  },
  md: { fontSize: "xl", lineHeight: 1.2 },
  sm: { fontSize: "md", lineHeight: 1.2 },
  xs: { fontSize: "sm", lineHeight: 1.2 },
};

const variants = {
  variants: {
    brand: {
      fontWeight: "400",
      fontSize: "lg",
    },
  },
};

const styles = {
  baseStyle,
  variants,
  sizes,
};

export default styles;




NAYA WALA



import { SystemStyleObject, SystemStyleFunction } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontWeight: "600",
  letterSpacing: "-0.025em",
  lineHeight: "1.2",
  color: "gray.800",
  textRendering: "optimizeLegibility",
  transition: "all 0.2s ease",
  position: "relative",
  _dark: {
    color: "gray.100",
  },
};

const sizes: Record<string, SystemStyleObject> = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: ["0.9", null, "0.85"],
    letterSpacing: "-0.04em",
    fontWeight: "800",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: ["0.9", null, "0.85"],
    letterSpacing: "-0.035em",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
  },
  "2xl": {
    fontSize: ["2xl", null, "40px"],
    lineHeight: [1.2, null, "48px"],
    letterSpacing: "-0.03em",
    fontWeight: "700",
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.06)",
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.25, null, 1.15],
    letterSpacing: "-0.025em",
    fontWeight: "600",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.3, null, 1.2],
    letterSpacing: "-0.02em",
    fontWeight: "600",
  },
  md: { 
    fontSize: "xl", 
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
    fontWeight: "600",
  },
  sm: { 
    fontSize: "md", 
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    fontWeight: "500",
  },
  xs: { 
    fontSize: "sm", 
    lineHeight: 1.35,
    letterSpacing: "0em",
    fontWeight: "500",
  },
};

const variantGradient: SystemStyleFunction = () => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  _hover: {
    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  },
});

const variantBrand: SystemStyleFunction = () => ({
  fontWeight: "600",
  fontSize: "lg",
  color: "primary.600",
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
  fontFamily: "heading",
  _hover: {
    color: "primary.700",
  },
  _dark: {
    color: "primary.300",
    _hover: {
      color: "primary.200",
    },
  },
});

const variantDisplay: SystemStyleFunction = () => ({
  fontWeight: "800",
  letterSpacing: "-0.04em",
  background: "linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  _dark: {
    background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  },
});

const variantOutline: SystemStyleFunction = () => ({
  fontWeight: "700",
  color: "transparent",
  textShadow: "0 0 0 gray.700",
  WebkitTextStroke: "1px",
  WebkitTextStrokeColor: "gray.700",
  _hover: {
    WebkitTextStrokeColor: "primary.500",
    textShadow: "0 0 0 primary.500",
  },
  _dark: {
    WebkitTextStrokeColor: "gray.300",
    textShadow: "0 0 0 gray.300",
    _hover: {
      WebkitTextStrokeColor: "primary.300",
      textShadow: "0 0 0 primary.300",
    },
  },
});

const variantNeon: SystemStyleFunction = () => ({
  fontWeight: "700",
  color: "cyan.400",
  textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff",
  letterSpacing: "0.1em",
  _hover: {
    textShadow: "0 0 15px #00d4ff, 0 0 25px #00d4ff, 0 0 35px #00d4ff, 0 0 45px #00d4ff",
    transform: "scale(1.02)",
  },
  _dark: {
    color: "cyan.300",
  },
});

const variantGlow: SystemStyleFunction = () => ({
  fontWeight: "600",
  color: "white",
  textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
  _hover: {
    textShadow: "0 0 30px rgba(255, 255, 255, 0.7), 0 0 50px rgba(255, 255, 255, 0.4)",
  },
});

const variantElegant: SystemStyleFunction = () => ({
  fontWeight: "300",
  fontStyle: "italic",
  letterSpacing: "0.05em",
  color: "gray.600",
  position: "relative",
  _before: {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: "0",
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, gray.400, transparent)",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
  },
  _hover: {
    color: "gray.800",
    _before: {
      transform: "scaleX(1)",
    },
  },
  _dark: {
    color: "gray.300",
    _hover: {
      color: "gray.100",
    },
  },
});

const variantHero: SystemStyleFunction = () => ({
  fontWeight: "900",
  letterSpacing: "-0.05em",
  background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)",
  backgroundSize: "400% 400%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradient 8s ease infinite",
  textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  _hover: {
    animationDuration: "2s",
  },
});

const variants = {
  gradient: variantGradient,
  brand: variantBrand,
  display: variantDisplay,
  outline: variantOutline,
  neon: variantNeon,
  glow: variantGlow,
  elegant: variantElegant,
  hero: variantHero,
};

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