import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "10pt",
    _focus: {
      boxShadow: "none",
    },
  },
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
    body : {
    as : "p",
    fontSize: "16px",
    color : "text.100",
    },
    gradient: {
    
    
      bg: 'linear-gradient(126deg, #FCD88E 3.28%, #FDDFA2 14.02%, #FEE6B5 24.77%, #FEEDC9 35.52%, #FFF4DC 46.27%, #FFF4DC 57.01%, #FEEDC9 67.76%, #FEE6B5 78.51%, #FDDFA2 89.25%, #FCD88E 100%)' ,
      bgClip : 'text'
    },
 
  },
};
