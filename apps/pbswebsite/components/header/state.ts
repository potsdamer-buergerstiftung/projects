import { defineStore } from "pinia";

export const useStore = defineStore("eventBookingForm", () => {
  const isSubMenuOpen = ref(false);
  const isMobileMenuOpen = ref(false);
  const isSubMenuOpenDebounced = ref(false);

  watch(isSubMenuOpen, (newVal) => {
    if (newVal === true) isSubMenuOpenDebounced.value = true;
  });

  watchDebounced(
    isSubMenuOpen,
    (newVal) => {
      if (newVal === false) isSubMenuOpenDebounced.value = false;
    },
    { debounce: 50, maxWait: 5000 }
  );

  function toggleSubMenuOpen() {
    isSubMenuOpen.value = !isSubMenuOpen.value;
  }

  function toggleMobileMenuOpen() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  function openSubMenu() {
    isSubMenuOpen.value = true;
  }

  function closeSubMenu() {
    isSubMenuOpen.value = false;
  }

  return {
    toggleSubMenuOpen,
    toggleMobileMenuOpen,
    isSubMenuOpen: isSubMenuOpenDebounced,
    isMobileMenuOpen,
    closeSubMenu,
    openSubMenu,
  };
});
