import { defineStore } from "pinia";

export const useHeaderState = defineStore("header", {
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
