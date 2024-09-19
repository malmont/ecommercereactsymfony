import { makeAutoObservable, runInAction } from "mobx";
import { Achat } from "../../../models/AchatModel";
import { Ticket } from "../../../models/TicketModel";

class DashboardViewModel {
    achats = [];
    tickets = [];
    loading = true;
    user = null;
    fetchUserAchats;
    fetchTicketDetails;

    constructor(user, fetchUserAchats, fetchTicketDetails) {
        makeAutoObservable(this);
        this.user = user;
        this.fetchUserAchats = fetchUserAchats;
        this.fetchTicketDetails = fetchTicketDetails;
        if (this.user) {
            this.loadAchats();
        }
    }

    async loadAchats() {
        if (!this.user) {
            runInAction(() => {
                this.loading = false;
            });
            return;
        }

        try {
            const achatsData = await this.fetchUserAchats(this.user.token);
            if (!achatsData) throw new Error('No achats data');
            const achats = achatsData.map(achat => new Achat(achat));

            const ticketIds = achatsData.map(achat => achat.ticket).join(',');
            const ticketsData = await this.fetchTicketDetails(this.user.token, ticketIds);
            if (!ticketsData) throw new Error('No tickets data');
            const tickets = ticketsData.map(ticket => new Ticket(ticket));

            runInAction(() => {
                this.achats = achats;
                this.tickets = tickets;
                this.loading = false;
            });
        } catch (error) {
            console.error("Failed to load data", error);
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    getTicketDetails(ticketId) {
        return this.tickets.find(ticket => ticket.id === ticketId) || {};
    }
}

export default DashboardViewModel;
