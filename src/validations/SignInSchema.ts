import * as yup from "yup";

export const SigInSchema = yup.object().shape({
  name: yup.string().required("Please your name 😵‍💫!"),
  password: yup
    .string()
    .required("Please your password 😵‍💫!")
    .min(8, "Shoud be 8 chars minimun.")
    .matches(/[a-zA-z]/, "Password can only letters! 😵‍💫"),
});
