import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("purple.900", "white")(props),
      background: mode("white", "purple.900")(props),
    },
    ".leaflet-container": {
      width: "100%",
      height: "100vh",
    },
  }),
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: "bold",
      lineHeight: "0.3em",
      letterSpacing: "-0.03em",
    },
    variants: {
      subtitle: {
        textTransform: "uppercase",
        fontSize: "sm",
        fontFamily: "body",
        fontWeight: "600",
        color: "gray.600",
      },
    },
  },
  Button: {
    baseStyle: {
      fontWeight: "600",
      fontFamily: "heading",
    },
    sizes: {
      md: {
        py: "0.1rem",
        height: "2.2rem",
      },
    },
  },
  Text: {
    baseStyle: {
      lineHeight: 1.75,
      color: "gray.700",
    },
    variants: {
      light: (props) => ({
        color: mode("gray.600", "gray.400")(props),
      }),
    },
  },
  Link: {
    baseStyle: {
      color: "#38A169",
      fontWeight: "bold",
    },
    variants: {
      light: (props) => ({
        color: mode("gray.600", "gray.400")(props),
      }),
    },
  },
};

const colors = {
  brand: "#3baa6f",
  secondary: "#031D44",
  background: "#E9FAE3",
  accent: "#D5C7BC",
};

const radii = {};

const shadows = {
  outline: "0 0 0 3px rgba(47, 133, 90, 0.6)",
};

const fonts = {
  heading: "'Space Grotesk', sans-serif",
};

const sizes = {
  container: {
    xl: "1220px",
  },
};

const overrides = {
  colors,
  fonts,
  radii,
  shadows,
  components,
  styles,
  sizes,
};

const theme: any = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  ...overrides,
});

export default theme;
