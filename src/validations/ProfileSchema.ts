import * as yup from 'yup';
export const ProfileSchema = yup.object().shape({
    image: yup.mixed()
        .test("fileType", "Unsupported file format", (value: any) => {
            console.log(value.length)
            return value[0] && ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
        })
        .test("fileSize", "The file is too large!", (value: any) => {
            return value[0] && value[0].size <= 2 * 10 ** 6
        }),
    name: yup.string().required("Please your name 😵‍💫!"),
    password: yup
        .string()
        .required("Please your password 😵‍💫!")
        .min(8, "Shoud be 8 chars minimun.")
        .matches(/[a-zA-z]/, "Password can only letters! 😵‍💫")
})