module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    container: {},
    extend: {
      colors: {
        green: {
          50: "#f3f7f4",
          100: "#dff0ec",
          200: "#b7e5d3",
          300: "#7fc9a8",
          400: "#3ca879",
          500: "#2a8c51",
          600: "#24743b",
          700: "#205830",
          800: "#173c25",
          900: "#10251c",
        },
        teal: {
          50: "#f3f7f8",
          100: "#dbf0f7",
          200: "#b1e2ee",
          300: "#7bc4d8",
          400: "#42a2bb",
          500: "#30829d",
          600: "#296982",
          700: "#234f65",
          800: "#193648",
          900: "#102131",
        },
        navy: {
          50: "#f4f8fa",
          100: "#def0fb",
          200: "#b8dff6",
          300: "#87bfe8",
          400: "#549ad7",
          500: "#4078c5",
          600: "#355daf",
          700: "#2b468c",
          800: "#1f2f64",
          900: "#121d41",
        },
        cyan: {
          50: "#f6f9fb",
          100: "#e2f0fc",
          200: "#c3dbf8",
          300: "#98b9ee",
          400: "#6e92e1",
          500: "#566ed6",
          600: "#4752c4",
          700: "#373ea1",
          800: "#272a75",
          900: "#161a49",
        },
        blue: {
          50: "#f7fafb",
          100: "#e8f0fc",
          200: "#ced8f9",
          300: "#a9b4ef",
          400: "#888ce4",
          500: "#6f67da",
          600: "#5b4bc9",
          700: "#4538a6",
          800: "#302678",
          900: "#1b184a",
        },
        purple: {
          50: "#fbfbfb",
          100: "#f5f0f8",
          200: "#ecd2f1",
          300: "#d8a9df",
          400: "#cc7cc9",
          500: "#b757b6",
          600: "#9c3c99",
          700: "#762d75",
          800: "#521f4e",
          900: "#2f142b",
        },
        cerise: {
          50: "#fcfcfb",
          100: "#faf0f0",
          200: "#f6cee2",
          300: "#eba2c2",
          400: "#e7729e",
          500: "#da4e7f",
          600: "#c2355f",
          700: "#9a2845",
          800: "#6f1c2d",
          900: "#431218",
        },
        coral: {
          50: "#fcfbf9",
          100: "#fbf0e5",
          200: "#f6d3c9",
          300: "#eaa89d",
          400: "#e2796f",
          500: "#d2564c",
          600: "#b73b33",
          700: "#902d27",
          800: "#651f1b",
          900: "#3f1310",
        },
        ochre: {
          50: "#fbfaf6",
          100: "#f9f0ce",
          200: "#f2da9d",
          300: "#e0b468",
          400: "#c9883d",
          500: "#ae6722",
          600: "#904d16",
          700: "#6e3a13",
          800: "#4b280f",
          900: "#30180a",
        },
        lemon: {
          50: "#fbfaf4",
          100: "#f8f0c4",
          200: "#efde8c",
          300: "#d6ba58",
          400: "#b39030",
          500: "#937119",
          600: "#765710",
          700: "#5a410e",
          800: "#3e2d0c",
          900: "#291b09",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
