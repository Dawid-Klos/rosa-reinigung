import * as Yup from "yup";

export const stepOneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name zu kurz eingegeben")
    .max(50, "Name zu lang eingegeben")
    .required("Dieses Feld ist erforderlich"),
  email: Yup.string()
    .email("Es wurde eine ungültige E-Mail-Adresse eingegeben")
    .required("Dieses Feld ist erforderlich"),
  phone: Yup.string()
    .min(9, "Rufnummer zu kurz eingegeben")
    .max(13, "Zu lange eingegebene Rufnummer")
    .required("Dieses Feld ist erforderlich"),
  street: Yup.string().min(5, "Adresse zu kurz eingegeben").required("Dieses Feld ist erforderlich"),
  city: Yup.string().min(3, "Adresse zu kurz eingegeben").required("Dieses Feld ist erforderlich"),
  termsOfService: Yup.bool().oneOf([true], "Sie müssen die Datenschutzbestimmungen akzeptieren."),
});

export const stepTwoSchema = Yup.object().shape({
  picked: Yup.string()
    .min(0, "Sie müssen einen der Dienste auswählen, um fortzufahren")
    .required("Sie müssen einen der Dienste auswählen, um fortzufahren"),
});

export const stepThreeSchema = Yup.object().shape({});
