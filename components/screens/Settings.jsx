import { StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Settings() {
  const insets = useSafeAreaInsets();    

  return (
    <View style={{ paddingTop:insets.top, padding:12}}>
        <View style={styles.container}>
            <Text style={{ color: '#000', fontSize:24}}>ESTE ES EL SETTINGS SCREEN</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:12,
  },
});