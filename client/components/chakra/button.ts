import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    // solid: {
    //   color: "white",
    //   bg: "brand.100",
    //   _hover: {
    //     bg: "brand.200",
    //   },
    // },
    // solid: {
    //   color: "black",
    //   border: "1px solid",

    // },
    ghost : {
      p : "0",
      bg : "transparent",
      border : "none",
      _hover: {
            bg: "transparent",
          },
    },
    outline: {
      // color: "brand.100",
      // border: "1px solid",
      // borderColor: "brand.100",
      
      bg : "white"
    },
    gradient : {
      
      bg: 'brand.500' ,
      color: "brand.100",
      fontSize: "20px",
      py: "10px",
      fontWeight: 500,
      _hover: {
            bg: "brand.500",
          },
      _focus: {
        bg: 'brand.500'
      },
      _loading: {
        bg: "brand.500"
      }
    }
 
  },
};
