import { extendTheme } from "@chakra-ui/react";
import { Button, Input } from "./components";

export const theme = extendTheme({
    components: {
        //Button, Input
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})