import * as yup from "yup";

export const SigInSchema = yup.object().shape({
  email: yup.string().email().required("Please your email 😵‍💫!"),
  password: yup
    .string()
    .required("Please your password 😵‍💫!")
    .min(6, "Shoud be 6 chars minimun."),
  // .matches(/[a-zA-z]/, "Password can only letters! 😵‍💫"),
});
