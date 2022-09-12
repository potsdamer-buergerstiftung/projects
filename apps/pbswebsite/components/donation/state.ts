import { defineStore } from "pinia";

type Progress =
  | "AMOUNT_SELECTION"
  | "PAYMENT_SELECTION"
  | "CONTACT_DETAILS"
  | "PAYMENT";

type PlanDuration = "ONE_TIME" | "MONTHLY";

type PaymentProvider = "PAYPAL" | "GOOGLE_PAY" | "APPLE_PAY";

export default defineStore("donationForm", () => {
  const progress = ref<Progress>("AMOUNT_SELECTION");
  const planDuration = ref<PlanDuration>("MONTHLY");
  const paymentProvider = ref(null);
  const amount = ref(10);

  const getActiveProgressTitle = () => {
    switch (progress.value) {
      case "CONTACT_DETAILS":
        return "Kontaktdaten angeben";
      case "PAYMENT":
        return "Zahlung";
      case "PAYMENT_SELECTION":
        "Zahlungsmethode wählen";
      default:
        return "Betrag wählen";
    }
  };

  function setProgress(p: Progress) {
    progress.value = p;
  }

  function setAmount(n: number) {
    amount.value = n;
  }

  function setPlanDuration(d: PlanDuration) {
    planDuration.value = d;
  }

  function setPaymentProvider(p: PaymentProvider) {
    paymentProvider.value = p;
  }

  return {
    planDuration,
    progress,
    amount,
    getActiveProgressTitle,
    setAmount,
    setProgress,
    setPlanDuration,
    setPaymentProvider,
    paymentProvider,
  };
});
