export type TicketStatus = "WAITING" | "SOLVED" | "CANCELLED";

export type Ticket = {
  id: number;
  userName: string;
  userSurname: string;
  userAge: number;
  userTc: string;
  ticketCode: string;
  reason: string;
  address: string;
  response?: string;
  attachments?: string[];
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
};
