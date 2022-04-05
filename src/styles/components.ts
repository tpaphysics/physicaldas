import { ChakraTheme, ComponentStyleConfig } from "@chakra-ui/react";

export const TpaInputColors = {
    primary: "yellow.300",
    secondary: "gray.500",
}

export const Button: ComponentStyleConfig = {
    defaultProps: {
        size: 'lg',
        variant: 'solid',
        colorScheme: "yellow",
    },
}

export const Input: ComponentStyleConfig = {
    variants: {
        physicaldash: {
            field: {
                border: 'none',
                borderColor: 'none',
                color: "gray.50",
                bg: 'gray.900',
                _placeholder: {
                    color: 'gray.500'
                },
                _focus: {
                    border: '2px solid',
                    borderColor: 'yellow.300',
                },
                _autofill: {
                    bg: "yellow",
                    textFillSize: "md",
                    textFillColor: "#EEEEF2",
                    boxShadow: "0 0 0px 1000px #181B23 inset",
                    transition: "background-color 5000s ease-in-out 0s",
                }

            },
        },
        searchBox: {
            field: {
                border: 'none',
                borderColor: 'none',
                px: "8",
                color: "gray.50",
                bg: 'gray.800',
                py: '6',
                borderRadius: "full",

                _placeholder: {
                    color: 'gray.400'
                },
                _focus: {
                    //     border: '2px solid',
                    //    borderColor: 'gray.400',
                },
            },
        },
    },



    defaultProps: {
        variant: 'physicaldash',
        size: 'lg'
    }
}

