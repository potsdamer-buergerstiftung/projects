import { defineStore } from "pinia";

type FormProgress =
  | "TICKET_SELECTION"
  | "CONTACT_INFO"
  | "PAYMENT"
  | "DONATE"
  | "FINISHED";

interface State {
  event?: any;
  formProgress: FormProgress;
  selectedTickets: Map<number, number>;
  contactInfo?: ContactInfo;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export const useStore = defineStore("eventBookingForm", {
  state: () => {
    return {
      event: null,
      formProgress: "TICKET_SELECTION",
      selectedTickets: new Map(),
      contactInfo: {
        firstName: "",
        lastName: "",
        email: "",
      },
    } as State;
  },
  getters: {
    hasTickets: (state) => {
      const arr = state.event?.tickets;
      return typeof arr !== undefined && arr.length > 0;
    },
    getSelectedTickets: (state) => {
      if (state.event === null) return [];
      return Array.from(state.selectedTickets).map((ticket) => {
        return {
          ticket: state.event.tickets.find((el: any) => el.id === ticket[0]),
          quantity: ticket[1],
        };
      });
    },
    getSelectedQuantity: (state) => {
      return (ticketId: number) => state.selectedTickets.get(ticketId) ?? "0";
    },
    checkFormProgress: (state) => {
      return (formProgress: FormProgress) =>
        state.formProgress === formProgress;
    },
    getTotalPrice() {
      return this.getSelectedTickets
        .filter((el) => el.ticket.pricing === "paid")
        .map((el) => el.ticket.price * el.quantity)
        .reduce((x, y) => {
          return x + y;
        }, 0);
    },
    hasSelectedTickets: (state) => {
      return state.selectedTickets.size !== 0;
    },
  },
  actions: {
    goToContactInfo() {
      this.formProgress = "CONTACT_INFO";
    },
    goToTicketSelection() {
      this.formProgress = "TICKET_SELECTION";
    },
    goToCheckout() {
      if (this.getSelectedTickets.some((el) => el.ticket.pricing === "paid")) {
        this.formProgress = "PAYMENT";
      } else if (
        this.getSelectedTickets.some((el) => el.ticket.pricing === "donation")
      ) {
        this.formProgress = "DONATE";
      } else {
        this.formProgress = "FINISHED";
      }
    },
    selectTicket(ticketId: number, quantity: number) {
      if (quantity === 0) {
        this.selectedTickets.delete(ticketId);
      } else {
        this.selectedTickets.set(ticketId, quantity);
      }
    },
    selectDefaultTicket() {
      if (this.event === null) return;
      if (!this.hasTickets) return;
      this.selectedTickets = new Map().set(
        this.event.tickets[0].id,
        this.event.tickets[0].minimum_quantity
      );
    },
    resetSelectedTickets() {
      this.selectedTickets = new Map();
      this.selectDefaultTicket();
    },
  },
});
