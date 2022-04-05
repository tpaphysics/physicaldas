import * as yup from 'yup';
export const ProfileSchema = yup.object().shape({
    name: yup.string().required("Type your name!"),
    email: yup.string().email().required("Type your email!"),

})