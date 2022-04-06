import * as yup from 'yup';
export const SigInSchema = yup.object().shape({
    name: yup.string().required("Please your name 😵‍💫!"),
    email: yup.string().email().required("Please your email 😵‍💫!"),
    password: yup
        .string()
        .required("Please your password 😵‍💫!")
        .min(8, "Shoud be 8 chars minimun.")
        .matches(/[a-zA-z]/, "Password can only letters! 😵‍💫")
})