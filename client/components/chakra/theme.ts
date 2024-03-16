import { extendTheme, Step } from '@chakra-ui/react';
import { Button } from "./button";
import { Input } from "./input";
import { Text } from "./Text";
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#845B25",
      200: "#ac2c85",
      300: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(214,43,126,0.4621498257506127) 0%, rgba(214,43,126,0.4845587893360469) 17%, rgba(214,43,126,1) 69%, rgba(214,43,126,1) 100%)",
      400: "linear-gradient(126deg, #FCD88E 3.28%, #FDDFA2 14.02%, #FEE6B5 24.77%, #FEEDC9 35.52%, #FFF4DC 46.27%, #FFF4DC 57.01%, #FEEDC9 67.76%, #FEE6B5 78.51%, #FDDFA2 89.25%, #FCD88E 100%)",
      500 : "linear-gradient(126deg, #FCD88E 3.28%, #FDDFA2 14.02%, #FEE6B5 24.77%, #FEEDC9 35.52%, #FFF4DC 46.27%, #FFF4DC 57.01%, #FEEDC9 67.76%, #FEE6B5 78.51%, #FDDFA2 89.25%, #FCD88E 100%)"
    },
    text : {
      100 : "#D9D9D9"
    }
  },
  // fonts: {
  //   heading: `'Big Shoulders Display', sans-serif`,
  //   body: `'Big Shoulders Display', sans-serif`,
  // },
  styles: {
    // global: () => ({
    //   body: {
    //     fontSize : "1.125rem",
    //     lineHeight: "1.6",
    //     color: "black",
        
        
        

    //   },
    //   img : {
    //     maxW : "100%",
    //     display: "block",


    //   },
    //   main : {
    //     // w : "min(65ch, 100% )",
    //     marginInline : "auto",
    //     overflowX : "hidden"
    //   }
    // }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});
