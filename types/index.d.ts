/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "male" | "female" | "other";
declare type Status = "pending" | "scheduled" | "cancelled" | "completed";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
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

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryContractor: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
  location: string;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
};

declare type CreateRepairAppointmentParams = {
  userId: string;
  patient: string;
  primaryContractor: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
  location: string;
};

declare type UpdateRepairAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
};
