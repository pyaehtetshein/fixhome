import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryContractor: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  languagePreferances: string | undefined;
  typeofProperty: string | undefined;
  ageofProperty: string | undefined;
  ownOrRent: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryContractor: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
