import { defineStore } from "pinia";

export default defineStore("portalInstructions", () => {
  const activeTab = ref<"GETTING_STARTED" | "EXPLORE" | "ENGAGE">(
    "GETTING_STARTED"
  );

  return {
    activeTab,
  };
});
