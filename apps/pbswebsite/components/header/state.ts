import { breakpointsTailwind } from "@vueuse/core";
import { defineStore } from "pinia";

export const useStore = defineStore("header", () => {
  const isSubMenuOpen = ref(false);
  const isMobileMenuOpen = ref(false);
  const isSubMenuOpenDebounced = ref(false);
  const headerOverlayHight = ref(0);
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const lgAndLarger = breakpoints.greater("md");
  const router = useRouter();

  router.beforeEach(() => {
    closeMobileMenu();
    isSubMenuOpenDebounced.value = false;
  });

  watch(lgAndLarger, () => {
    isMobileMenuOpen.value = false;
    isSubMenuOpen.value = false;
  });

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

  function setHeaderOverlayHight(height: number) {
    headerOverlayHight.value = height;
  }

  function toggleSubMenuOpen() {
    isSubMenuOpen.value = !isSubMenuOpen.value;
  }

  function toggleMobileMenuOpen() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  function openSubMenu() {
    isSubMenuOpenDebounced.value = true;
  }

  function closeSubMenu() {
    isSubMenuOpen.value = false;
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false;
  }

  return {
    toggleSubMenuOpen,
    toggleMobileMenuOpen,
    isSubMenuOpen: isSubMenuOpenDebounced,
    isMobileMenuOpen,
    closeSubMenu,
    openSubMenu,
    closeMobileMenu,
    setHeaderOverlayHight,
    headerOverlayHight,
  };
});
