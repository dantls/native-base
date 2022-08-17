import { StatusBar } from 'expo-status-bar';
import { Archivo_400Regular, 
  Archivo_500Medium, 
  useFonts as useArchivoFonts} from '@expo-google-fonts/archivo';
import { Inter_400Regular, 
  Inter_500Medium, Inter_600SemiBold, 
  Inter_700Bold ,
  useFonts as useInterFonts} from '@expo-google-fonts/inter';
import { NativeBaseProvider,
  Box} from 'native-base';
import { theme } from '../native-base.config';
import { Home } from './pages/Home';

export default function App() {
  const [interFontsLoaded] = useInterFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold ,
  });

  const [archivoFontsLoaded] = useArchivoFonts({
    Archivo_400Regular, 
    Archivo_500Medium, 
  });

  if(!interFontsLoaded && !archivoFontsLoaded){
    return <></>
  }
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="light" />
      

      <Box
        safeArea
        flex="1"
        backgroundColor="primary.500"
      >
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
