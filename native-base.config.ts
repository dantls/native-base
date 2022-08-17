import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors:{
    primary:{
      400: "#313144",
      500: "#1f1f2b"
    },
    secondary:{
      500: "#fed95f"
    }
  },
  fontConfig:{
    Inter:{
      400: {
        normal: "Inter_400Regular"
      },
      500: {
        normal: "Inter_500Medium"
      },
      600: {
        normal: "Inter_600SemiBold"
      },
      700: {
        normal: "Inter_700Bold"
      }
    },
    Archivo:{
      400: {
        normal: "Archivo_400Regular"
      },
      500: {
        normal: "Archivo_500Medium"
      },
    }
  },
  fonts:{
    heading: "Inter",
    body: "Archivo"
  },
  config:{
    initialColorMode:"dark"
  }
})