import { StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Explore() {
  const insets = useSafeAreaInsets();    

  return (
    <View style={{ paddingTop:insets.top}}>
        <View style={styles.container}>
            <Text style={{ color: '#000', fontSize:24}}>ESTE ES EL EXPLORE SCREEN</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});