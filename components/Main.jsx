import { StyleSheet, Text, View, Image } from 'react-native';
import icon from '../assets/icon.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Main() {
  const insets = useSafeAreaInsets();    

  return (
    <View style={{ paddingTop:insets.top, padding:12}}>
        <View style={styles.container}>
            <Image source={icon} style={{
                width: 100,
                height: 100
                }} />
            <Text style={{ color: 'white'}}>Probando la App 2</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:12,
  },
});
