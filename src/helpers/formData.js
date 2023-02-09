import CompanyCleaningIcon from "../images/icons/icon-form-company.svg";
import EmailIcon from "../images/icons/icon-form-email.svg";
import HouseCleaningIcon from "../images/icons/icon-form-house-cleaning.svg";
import HouseOrganisationIcon from "../images/icons/icon-form-house.svg";
import LocationIcon from "../images/icons/icon-form-location.svg";
import NameIcon from "../images/icons/icon-form-name.svg";
import PhoneIcon from "../images/icons/icon-form-phone.svg";
import MovingOutCleaningIcon from "../images/icons/icon-form-cleaning-after-moving.svg";
import MovingHouseCleaning from "../images/icons/icon-form-moving-house.svg";
import WindowsCleaningIcon from "../images/icons/icon-form-windows.svg";

export const SERVICES_TYPES = {
  houseCleaning: "Hausreinigung",
  companyCleaning: "Reinigung von Büros, Arztpraxen, Theatern, Schulen usw.",
  windowsCleaning: "Fensterreinigung",
  houseOrganisation: "Entrümpelung (Decluttering) / Haushaltsorganisation",
  movingOutCleaning: "Aufräumen nach dem Auszug",
  movingService: "Umzüge",
};

export const cardsData = [
  {
    id: 0,
    title: "Hausreinigung",
    icon: HouseCleaningIcon,
    value: "houseCleaning",
  },
  {
    id: 1,
    title: "Reinigung von Büros, Arztpraxen, Theatern, Schulen usw.",
    icon: CompanyCleaningIcon,
    value: "companyCleaning",
  },
  {
    id: 2,
    title: "Fensterreinigung",
    icon: WindowsCleaningIcon,
    value: "windowsCleaning",
  },
  {
    id: 3,
    title: "Entrümpelung (Decluttering) / Haushaltsorganisation",
    icon: HouseOrganisationIcon,
    value: "houseOrganisation",
  },
  {
    id: 4,
    title: "Aufräumen nach dem Auszug",
    icon: MovingOutCleaningIcon,
    value: "movingOutCleaning",
  },
  {
    id: 5,
    title: "Umzüge",
    icon: MovingHouseCleaning,
    value: "movingService",
  },
];

export const addressFieldsValues = [
  {
    id: 0,
    label: "Name",
    icon: NameIcon,
    htmlFor: "name",
    placeholder: "Matteo Müller",
    type: "text",
  },
  {
    id: 1,
    label: "Email",
    icon: EmailIcon,
    htmlFor: "email",
    placeholder: "mateo@gmail.com",
    type: "email",
  },
  {
    id: 2,
    label: "Rufnummer",
    icon: PhoneIcon,
    htmlFor: "phone",
    placeholder: "0211 5684962",
    type: "tel",
  },
  {
    id: 3,
    label: "Hausnummer und Straße",
    icon: LocationIcon,
    htmlFor: "houseNumber",
    placeholder: "Sankt Jakobikirche, Jakobikirchhof",
    type: "text",
  },
  {
    id: 4,
    label: "Postanschrift und Stadt",
    icon: LocationIcon,
    htmlFor: "city",
    placeholder: "20095, Hamburg",
    type: "text",
  },
];

export const FORM_DETAILS_VARIANTS = {
  houseCleaning: [
    {
      id: 0,
      label: "Häufigkeit der Reinigung",
      icon: NameIcon,
      htmlFor: "frequency",
      placeholder: "z. B. einmaliger, wöchentlicher oder zweiwöchentlicher Dienst",
      type: "text",
    },
    {
      id: 1,
      label: "Größe der Wohnung",
      icon: NameIcon,
      htmlFor: "houseSize",
      placeholder: "z. B. Anzahl der Bäder, Etagen und Größe der Wohnung in m2",
      type: "text",
    },
    {
      id: 2,
      label: "Haben Sie einen Staubsauger und Ihre eigenen Reinigungsmittel?",
      icon: PhoneIcon,
      htmlFor: "cleaningProducts",
      placeholder: "z.B. angeben, was Sie besitzen",
      type: "text",
    },
    {
      id: 3,
      label: "Welcher Zeitrahmen wäre für Sie günstig?",
      icon: PhoneIcon,
      htmlFor: "timeOfService",
      placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
      type: "date",
    },
  ],
  companyCleaning: [
    {
      id: 0,
      label: "Art des Gebäudes",
      icon: NameIcon,
      htmlFor: "buildingType",
      placeholder: "Einmaliger, wöchentlicher oder vierzehntägiger Dienst",
      type: "text",
    },
    {
      id: 0,
      label: "Häufigkeit der Reinigung",
      icon: NameIcon,
      htmlFor: "frequency",
      placeholder: "Einmaliger, wöchentlicher oder vierzehntägiger Dienst",
      type: "text",
    },
    {
      id: 3,
      label: "Zeitpunkt der Durchführung",
      icon: PhoneIcon,
      htmlFor: "timeOfService",
      placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
      type: "text",
    },
  ],
  windowsCleaning: [
    {
      id: 0,
      label: "Art des Gebäudes",
      icon: NameIcon,
      htmlFor: "buildingType",
      placeholder: "Der Ort, an dem Ihre Fenster gereinigt werden sollen: Zuhause, im Büro, in der Schule?",
      type: "text",
    },
    {
      id: 1,
      label: "Anzahl der Fenster",
      icon: NameIcon,
      htmlFor: "numberOfWindows",
      placeholder: "Geben Sie die Größe in m2 und die Anzahl der Fenster an",
      type: "text",
    },
    {
      id: 2,
      label: "Zeitpunkt der Durchführung",
      icon: PhoneIcon,
      htmlFor: "timeOfService",
      placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
      type: "text",
    },
  ],
  houseOrganisation: [
    {
      id: 0,
      label: "Welchen Bereich in Ihrer Wohnung möchten Sie organisieren?",
      icon: NameIcon,
      htmlFor: "areaToOrganize",
      placeholder: "ganzes Haus, Garderobe, Küche, usw.",
      type: "text",
    },
  ],
  movingOutCleaning: [
    {
      id: 0,
      label: "Größe der Wohnung",
      icon: NameIcon,
      htmlFor: "houseSize",
      placeholder: "Geben Sie die Anzahl der Bäder, die Anzahl der Stockwerke und die Größe der Wohnung in m2 an",
      type: "text",
    },
    {
      id: 1,
      label: "Zustand der Wohnung",
      icon: NameIcon,
      htmlFor: "houseStatus",
      placeholder: "Steht die Wohnung komplett leer?",
      type: "text",
    },
    {
      id: 2,
      label: "Reinigungsmittel",
      icon: PhoneIcon,
      htmlFor: "cleaningProducts",
      placeholder: "Haben Sie einen Staubsauger und Ihre eigenen Reinigungsmittel?",
      type: "text",
    },
    {
      id: 3,
      label: "Zusätzliche Anforderungen",
      icon: PhoneIcon,
      htmlFor: "additionalServices",
      placeholder: "Müssen wir auch den Kühlschrank, den Ofen und das Innere der Schränke reinigen?",
      type: "text",
    },
  ],
  movingService: [
    {
      id: 0,
      label: "Zieladresse",
      icon: NameIcon,
      htmlFor: "houseSize",
      placeholder: "Geben Sie die Zieladresse an, an die Sie umziehen möchten",
      type: "text",
    },
  ],
};

// export const FORM_DETAILS_VARIANTS = {
//   houseCleaning: [
//     {
//       id: 0,
//       label: "Häufigkeit der Reinigung",
//       icon: NameIcon,
//       htmlFor: "frequency",
//       placeholder: "Einmaliger, wöchentlicher oder vierzehntägiger Dienst",
//       type: "text",
//     },
//     {
//       id: 1,
//       label: "Größe der Wohnung",
//       icon: NameIcon,
//       htmlFor: "houseSize",
//       placeholder: "z. B. Anzahl der Bäder, Etagen und Größe der Wohnung in m2",
//       type: "text",
//     },
//     {
//       id: 2,
//       label: "Reinigungsmittel",
//       icon: PhoneIcon,
//       htmlFor: "cleaningProducts",
//       placeholder: "Haben Sie einen Staubsauger und Ihre eigenen Reinigungsmittel?",
//       type: "text",
//     },
//     {
//       id: 3,
//       label: "Zeitpunkt der Durchführung",
//       icon: PhoneIcon,
//       htmlFor: "timeOfService",
//       placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
//       type: "text",
//     },
//   ],
//   companyCleaning: [
//     {
//       id: 0,
//       label: "Art des Gebäudes",
//       icon: NameIcon,
//       htmlFor: "buildingType",
//       placeholder: "Einmaliger, wöchentlicher oder vierzehntägiger Dienst",
//       type: "text",
//     },
//     {
//       id: 0,
//       label: "Häufigkeit der Reinigung",
//       icon: NameIcon,
//       htmlFor: "frequency",
//       placeholder: "Einmaliger, wöchentlicher oder vierzehntägiger Dienst",
//       type: "text",
//     },
//     {
//       id: 3,
//       label: "Zeitpunkt der Durchführung",
//       icon: PhoneIcon,
//       htmlFor: "timeOfService",
//       placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
//       type: "text",
//     },
//   ],
//   windowsCleaning: [
//     {
//       id: 0,
//       label: "Art des Gebäudes",
//       icon: NameIcon,
//       htmlFor: "buildingType",
//       placeholder: "Der Ort, an dem Ihre Fenster gereinigt werden sollen: Zuhause, im Büro, in der Schule?",
//       type: "text",
//     },
//     {
//       id: 1,
//       label: "Anzahl der Fenster",
//       icon: NameIcon,
//       htmlFor: "numberOfWindows",
//       placeholder: "Geben Sie die Größe in m2 und die Anzahl der Fenster an",
//       type: "text",
//     },
//     {
//       id: 2,
//       label: "Zeitpunkt der Durchführung",
//       icon: PhoneIcon,
//       htmlFor: "timeOfService",
//       placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
//       type: "text",
//     },
//   ],
//   houseOrganisation: [
//     {
//       id: 0,
//       label: "Welchen Bereich in Ihrer Wohnung möchten Sie organisieren?",
//       icon: NameIcon,
//       htmlFor: "areaToOrganize",
//       placeholder: "ganzes Haus, Garderobe, Küche, usw.",
//       type: "text",
//     },
//   ],
//   movingOutCleaning: [
//     {
//       id: 0,
//       label: "Größe der Wohnung",
//       icon: NameIcon,
//       htmlFor: "houseSize",
//       placeholder: "Geben Sie die Anzahl der Bäder, die Anzahl der Stockwerke und die Größe der Wohnung in m2 an",
//       type: "text",
//     },
//     {
//       id: 1,
//       label: "Zustand der Wohnung",
//       icon: NameIcon,
//       htmlFor: "houseStatus",
//       placeholder: "Steht die Wohnung komplett leer?",
//       type: "text",
//     },
//     {
//       id: 2,
//       label: "Reinigungsmittel",
//       icon: PhoneIcon,
//       htmlFor: "cleaningProducts",
//       placeholder: "Haben Sie einen Staubsauger und Ihre eigenen Reinigungsmittel?",
//       type: "text",
//     },
//     {
//       id: 3,
//       label: "Zusätzliche Anforderungen",
//       icon: PhoneIcon,
//       htmlFor: "additionalServices",
//       placeholder: "Müssen wir auch den Kühlschrank, den Ofen und das Innere der Schränke reinigen?",
//       type: "text",
//     },
//   ],
//   movingService: [
//     {
//       id: 0,
//       label: "Zieladresse",
//       icon: NameIcon,
//       htmlFor: "houseSize",
//       placeholder: "Geben Sie die Zieladresse an, an die Sie umziehen möchten",
//       type: "text",
//     },
//   ],
// };
