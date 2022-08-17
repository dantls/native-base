import { ScrollView, Text } from "native-base";
import { Dimensions } from "react-native";

const subtitleMaxWidth = Dimensions.get('window').width / 2;
export function Home (){
  
  return (
    <ScrollView
      flex={1}
      backgroundColor="primary.500"
      contentContainerStyle={{paddingBottom: 32}}
      showsVerticalScrollIndicator={false}
      pt={4}
      pl={4}
      pr={4}
    >
      <Text
        color="secondary.500"
        fontFamily="heading"
        fontSize="2xl"
        fontWeight="bold"
      >
        Hey There
      </Text>
      <Text
        color="secondary.500"
        fontSize="md"
        fontWeight="normal"
        numberOfLines={2}
        isTruncated
        maxW={subtitleMaxWidth}
      >
        Hey There
      </Text>
    </ScrollView>
  )
}