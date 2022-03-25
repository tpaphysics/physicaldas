import { ChakraTheme, ComponentStyleConfig } from "@chakra-ui/react";

const a = {} as ChakraTheme;


export const Button: ComponentStyleConfig = {


    defaultProps: {
        size: 'md',
        variant: 'solid',
        colorScheme: "yellow",

    },
}

export const Input: ComponentStyleConfig = {

    baseStyle: {
        field: {
            fontWeight: 400,
        },
    },

    sizes: {
        sm: {
            field: {
                height: 8,
                borderRadius: '4px',

            },
        },

        md: {
            field: {
                borderRadius: '4px',
                height: 10,
                fontSize: 'md',

            },
        },

        lg: {
            field: {
                height: 12,
                borderRadius: '6px',
                fontSize: 'lg',

            },
        },

        xl: {
            field: {
                height: { base: 16, lg: 20 },
                borderRadius: '6px',
                fontSize: { base: 'lg', lg: 'xl' },
                px: { base: 3, lg: 5 },

            },
        },

        '2xl': {
            field: {
                height: 24,
                borderRadius: 'none',
                fontSize: '2xl',
                px: 5,

            },
        },
    },

    variants: {
        outline: {
            field: {
                border: '2px solid',
                _focus: {
                    borderColor: '#9280FF',
                },
            },
        },

        yourVariant: {
            field: {
                border: 'none',
                borderColor: 'none',
                bg: 'gray.700',
                _focus: {
                    border: '2px solid',
                    borderColor: 'yellow.400',

                },
            },
        },
    },
    defaultProps: {
        variant: 'yourVariant',
        size: 'md'


    }
}