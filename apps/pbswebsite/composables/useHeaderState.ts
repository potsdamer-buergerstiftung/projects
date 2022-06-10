import { defineStore } from "pinia";

export default defineStore("header", {
  state: () => {
    return {
      isMobileMenuOpen: false,
    };
  },
  actions: {
    setMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
});
