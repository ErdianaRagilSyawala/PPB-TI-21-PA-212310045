// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import Motorcycle from './src/components/Motorcycle';
import { SafeAreaView, ImageBackground, View } from 'react-native';
import Car from './src/components/Car';

//  import Bicycle from "./src/components/Bicycle";

export default function App() {
  return (
    <View>
     <ImageBackground 
        source={{ 
          uri= "https://kis.ibik.ac.id/environment/ibik/images/background.jpg"
       </View>
       }}
       resizeMode="cover"
       style={{ flex: 1 }}
     >
       <SafeAreaView>
          <Car/>
       </SafeAreaView>
     </ImageBackground>
  );
}
   
      
      {/* <Motorcycle/>
      <Bicycle/>
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </View> */}