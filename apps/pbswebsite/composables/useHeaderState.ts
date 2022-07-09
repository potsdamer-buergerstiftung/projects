import { defineStore } from "pinia";

export default defineStore("header", {
  state: () => {
    return {
      isMobileMenuOpen: false,
      isSubMenuOpen: false,
    };
  },
  actions: {
    setMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleSubMenuOpen() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
    }
  },
});
