import { extendTheme } from "@chakra-ui/react";

// KothaBolo Brand Colors
const colors = {
  primary: {
    50: "#F0FDF8",
    100: "#CCFBEA",
    200: "#99F7D8",
    300: "#66F3C6",
    400: "#33EFB4",
    500: "#10A37F", // Main Brand Color
    600: "#0E8A6B",
    700: "#0B7157",
    800: "#085843",
    900: "#063F2F",
  },
  secondary: {
    50: "#FDF2F7",
    100: "#FCE7F3",
    200: "#F8CEED",
    300: "#F472B6",
    400: "#EC4899", // Vibrant Pink
    500: "#EC4899",
    600: "#EC0776",
    700: "#BE123C",
    800: "#9D174D",
    900: "#500724",
  },
  dark: "#0F172A",
  light: "#F8FAFC",
  neutral: "#64748B",
};

const theme = extendTheme({
  colors,
  fonts: {
    body: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: '"Work Sans", sans-serif',
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#0F172A" : "#F8FAFC",
        color: props.colorMode === "dark" ? "#E2E8F0" : "#0F172A",
        fontFamily: "body",
        lineHeight: "1.6",
        transition: "background-color 0.3s ease, color 0.3s ease",
      },
      h1: {
        fontWeight: "bold",
        fontSize: "2.5rem",
        fontFamily: "heading",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "2rem",
        fontFamily: "heading",
      },
      h3: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        fontFamily: "heading",
      },
      "*": {
        boxSizing: "border-box",
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary",
      },
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        transition: "all 0.2s ease",
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: "primary.500",
        size: "md",
      },
      baseStyle: {
        field: {
          borderRadius: "md",
          transition: "all 0.2s ease",
        },
      },
    },
    Box: {
      baseStyle: (props) => ({
        borderRadius: "lg",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }),
    },
    Modal: {
      baseStyle: (props) => ({
        dialogContainer: {
          zIndex: 1000,
        },
      }),
    },
  },
});

export default theme;
