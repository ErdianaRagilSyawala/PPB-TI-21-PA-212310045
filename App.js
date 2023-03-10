import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/flower.png')} 
      style={{width: 75, height: 75}}
      />

      <Text>Nama : Erdiana Ragil Syawala</Text>
      <Text>Kelas : TI-21-PA</Text>
      <Text>NPM : 212310045</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
