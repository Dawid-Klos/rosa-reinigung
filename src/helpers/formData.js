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
import UserIcon from "../images/icons/icon-user.svg";
import ChoiceIcon from "../images/icons/icon-choice.svg";
import DetailsIcon from "../images/icons/icon-details.svg";
import SuccessIcon from "../images/icons/icon-success.svg";
import TimeIcon from "../images/icons/icon-form-time.svg";
import ProductsIcon from "../images/icons/icon-form-products.svg";
import NumbersIcons from "../images/icons/icon-form-number.svg";
import HouseSizeIcon from "../images/icons/icon-form-house-size.svg";
import HouseAreaIcon from "../images/icons/icon-form-house-area.svg";
import FrequencyIcon from "../images/icons/icon-form-frequency.svg";
import ExtraServiceIcon from "../images/icons/icon-form-extra-services.svg";

export const SERVICES_TYPES = {
  houseCleaning: "Hausreinigung",
  companyCleaning: "Reinigung von Büros, Arztpraxen, Theatern, Schulen usw.",
  windowsCleaning: "Fensterreinigung",
  houseOrganisation: "Entrümpelung (Decluttering) / Haushaltsorganisation",
  movingOutCleaning: "Aufräumen nach dem Auszug",
  movingService: "Umzüge",
};

export const STEP_FIELDS = {
  0: ["name", "email", "phone", "street", "city", "termsOfService"],
  1: ["picked"],
  2: [],
  3: [],
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

export const statusBarSteps = [
  {
    stepNumber: 0,
    icon: UserIcon,
    title: "Unternehmen",
  },
  {
    stepNumber: 1,
    icon: ChoiceIcon,
    title: "Unsere Leistungen",
  },
  {
    stepNumber: 2,
    icon: DetailsIcon,
    title: "Servicedetails",
  },
  {
    stepNumber: 3,
    icon: SuccessIcon,
    title: "Senden",
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
    htmlFor: "street",
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
      icon: FrequencyIcon,
      htmlFor: "frequency",
      placeholder: "z. B. einmaliger, wöchentlicher oder zweiwöchentlicher Dienst",
      type: "text",
    },
    {
      id: 1,
      label: "Größe der Wohnung",
      icon: HouseSizeIcon,
      htmlFor: "houseSize",
      placeholder: "z. B. Anzahl der Bäder, Etagen und Größe der Wohnung in m2",
      type: "text",
    },
    {
      id: 2,
      label: "Haben Sie einen Staubsauger und Ihre eigenen Reinigungsmittel?",
      icon: ProductsIcon,
      htmlFor: "cleaningProducts",
      placeholder: "z.B. angeben, was Sie besitzen",
      type: "text",
    },
    {
      id: 3,
      label: "Welcher Zeitrahmen wäre für Sie günstig?",
      icon: TimeIcon,
      htmlFor: "timeOfService",
      placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
      type: "date",
    },
  ],
  companyCleaning: [
    {
      id: 0,
      label: "Art des Gebäudes",
      icon: HouseAreaIcon,
      htmlFor: "buildingType",
      placeholder: "Einmaliger, wöchentlicher oder vierzehntägiger Dienst",
      type: "text",
    },
    {
      id: 1,
      label: "Häufigkeit der Reinigung",
      icon: FrequencyIcon,
      htmlFor: "frequency",
      placeholder: "Einmaliger, wöchentlicher oder vierzehntägiger Dienst",
      type: "text",
    },
    {
      id: 2,
      label: "Zeitpunkt der Durchführung",
      icon: TimeIcon,
      htmlFor: "timeOfService",
      placeholder: "Welcher Zeitrahmen wäre für Sie günstig?",
      type: "text",
    },
  ],
  windowsCleaning: [
    {
      id: 0,
      label: "Der Ort, an dem Ihre Fenster gereinigt werden sollen",
      icon: HouseAreaIcon,
      htmlFor: "buildingType",
      placeholder: "Zuhause, im Büro, in der Schule?",
      type: "text",
    },
    {
      id: 1,
      label: "Geben Sie die Größe in m2 und die Anzahl der Fenster an",
      icon: NumbersIcons,
      htmlFor: "numberOfWindows",
      placeholder: "z.B. 4 Fenster, 34m2",
      type: "text",
    },
    {
      id: 2,
      label: "Welcher Zeitrahmen wäre für Sie günstig?",
      icon: TimeIcon,
      htmlFor: "timeOfService",
      placeholder: "z. B. 9 Uhr bis 17 Uhr.",
      type: "text",
    },
  ],
  houseOrganisation: [
    {
      id: 0,
      label: "Welchen Bereich in Ihrer Wohnung möchten Sie organisieren?",
      icon: HouseAreaIcon,
      htmlFor: "areaToOrganize",
      placeholder: "ganzes Haus, Garderobe, Küche, usw.",
      type: "text",
    },
  ],
  movingOutCleaning: [
    {
      id: 0,
      label: "Größe der Wohnung",
      icon: HouseSizeIcon,
      htmlFor: "houseSize",
      placeholder: "z. B. Anzahl der Bäder, Etagen und Größe der Wohnung in m2",
      type: "text",
    },
    {
      id: 1,
      label: "Steht die Wohnung komplett leer?",
      icon: HouseAreaIcon,
      htmlFor: "houseStatus",
      placeholder: "z.B. leer bis auf die Schlafzimmermöbel",
      type: "text",
    },
    {
      id: 2,
      label: "Haben Sie einen Staubsauger und Ihre eigenen Reinigungsmittel?",
      icon: ProductsIcon,
      htmlFor: "cleaningProducts",
      placeholder: "z.B. Ich habe nur einen Staubsauger",
      type: "text",
    },
    {
      id: 3,
      label: "Müssen wir auch den Kühlschrank, den Ofen und das Innere der Schränke reinigen?",
      icon: ExtraServiceIcon,
      htmlFor: "additionalServices",
      placeholder: "z.B. Backofen und Kühlschrank",
      type: "text",
    },
  ],
  movingService: [
    {
      id: 0,
      label: "Straße und Hausnummer der Zieladresse",
      icon: HouseAreaIcon,
      htmlFor: "movingStreet",
      placeholder: "z. B. Sankt Jakobikirche, Jakobikirchhof",
      type: "text",
    },
    {
      id: 0,
      label: "Postleitzahl und Ort der Zieladresse",
      icon: HouseAreaIcon,
      htmlFor: "movingCity",
      placeholder: "z. B. 20095, Hamburg",
      type: "text",
    },
  ],
};
