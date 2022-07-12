import { defineStore } from "pinia";

type ActiveTab =
  | "GETTING_STARTED"
  | "CREATE_ACCOUNT"
  | "INSTALL_APP"
  | "ENGAGE";

export default defineStore("portalInstructions", () => {
  const activeTab = ref<ActiveTab>("GETTING_STARTED");

  function setActiveTab(tab: ActiveTab) {
    activeTab.value = tab;
  }

  return {
    activeTab,
    setActiveTab,
  };
});
