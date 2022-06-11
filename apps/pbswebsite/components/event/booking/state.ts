import { defineStore } from "pinia";

type FormProgress =
  | "TICKET_SELECTION"
  | "CONTACT_INFO"
  | "PAYMENT"
  | "DONATE"
  | "FINISHED";

type SelectedTickets = Map<number, number>;

interface Event {
  id: number;
  name: string;
  description: string;
  start: string;
  end: string;
  tickets: any[];
  image: string;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export const useStore = defineStore("eventBookingForm", () => {
  const event = ref<Event | null>(null);
  const formProgress = ref<FormProgress>("TICKET_SELECTION");
  const selectedTickets = ref<SelectedTickets>(new Map());
  const contactInfo = ref<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const hasTickets = computed(() => {
    const arr = event.value?.tickets;
    return typeof arr !== undefined && arr.length > 0;
  });

  const getSelectedTickets = computed(() => {
    if (event === null) return [];
    return Array.from(selectedTickets.value).map((ticket) => {
      return {
        ticket: event.value.tickets.find((el: any) => el.id === ticket[0]),
        quantity: ticket[1],
      };
    });
  });

  const getSelectedQuantity = (ticketId: number) => {
    return selectedTickets.value.get(ticketId) ?? 0;
  };

  const checkFormProgress = (fp: FormProgress) => {
    return formProgress.value === fp;
  };

  const getTotalPrice = computed(() => {
    return getSelectedTickets.value
      .filter((el) => el.ticket.pricing === "paid")
      .map((el) => el.ticket.price * el.quantity)
      .reduce((x, y) => {
        return x + y;
      }, 0);
  });

  const hasSelectedTickets = computed(() => {
    return selectedTickets.value.size !== 0;
  });

  function goToContactInfo() {
    formProgress.value = "CONTACT_INFO";
  }

  function goToTicketSelection() {
    formProgress.value = "TICKET_SELECTION";
  }

  function goToCheckout() {
    if (getSelectedTickets.value.some((el) => el.ticket.pricing === "paid")) {
      this.formProgress = "PAYMENT";
    } else if (
      getSelectedTickets.value.some((el) => el.ticket.pricing === "donation")
    ) {
      formProgress.value = "DONATE";
    } else {
      formProgress.value = "FINISHED";
    }
  }

  function selectTicket(ticketId: number, quantity: number) {
    if (quantity === 0) {
      selectedTickets.value.delete(ticketId);
    } else {
      selectedTickets.value.set(ticketId, quantity);
    }
  }

  function selectDefaultTicket() {
    if (event === null) return;
    if (!hasTickets.value) return;
    selectedTickets.value = new Map().set(
      event.value.tickets[0].id,
      event.value.tickets[0].minimum_quantity
    );
  }

  function resetSelectedTickets() {
    selectedTickets.value = new Map();
    selectDefaultTicket();
  }

  return {
    event,
    formProgress,
    selectedTickets,
    contactInfo,
    hasTickets,
    getSelectedTickets,
    getSelectedQuantity,
    checkFormProgress,
    getTotalPrice,
    hasSelectedTickets,
    goToContactInfo,
    goToTicketSelection,
    goToCheckout,
    selectTicket,
    selectDefaultTicket,
    resetSelectedTickets,
  };
});
