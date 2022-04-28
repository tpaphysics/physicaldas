import * as yup from "yup";

export const FormsSchema = yup.object().shape({
  name: yup.string().required("Please your name 😵‍💫!"),
  email: yup.string().email().required("Please your e-mail 😵‍💫!"),
  password: yup
    .string()
    .required("Please your password 😵‍💫!")
    .min(8, "Shoud be 8 chars minimun."),

  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// .matches(/[a-zA-z]/, "Password can only letters! 😵‍💫"),
