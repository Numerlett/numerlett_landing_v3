export enum ContactFormStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

export interface IContactForm {
  id: string;
  email: string;
  name: string;
  mobile: string;
  message: string;
  status: ContactFormStatus;
  adminNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
}
