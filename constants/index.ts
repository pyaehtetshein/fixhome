export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryContractor: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  languagePreferances: "",
  typeofProperty: "",
  ageofProperty: "",
  ownOrRent: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/contractor.jpg",
    name: "KONCISE COMPANY LIMITED",
  },
  {
    image: "/assets/images/contractor.jpg",
    name: "THE ENTERPRISE RESOURCES TRAINING COMPANY LIMITED",
  },
  {
    image: "/assets/images/contractor.jpg",
    name: "PRIME SOLUTION AND SERVICES COMPANY LIMITED",
  },
  {
    image: "/assets/images/contractor.jpg",
    name: "NETAFIM (THAILAND) COMPANY LIMITED",
  },
  {
    image: "/assets/images/contractor.jpg",
    name: "LANDY HOME (THAILAND) COMPANY LIMITED",
  },
  {
    image: "/assets/images/contractor.jpg",
    name: "ADVANCE CIVIL GROUP COMPANY LIMITED",
  },
  {
    image: "/assets/images/contractor.jpg",
    name: "GUARDFIRE LIMITED",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  completed: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
