import { StyleSheet, Text, View, Image } from 'react-native';
import icon from '../../assets/icon.png'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Home() {
  const insets = useSafeAreaInsets();    

  return (
    <View style={{ paddingTop:insets.top}}>
        <View style={styles.container}>
            <Image source={icon} style={{
                width: 100,
                height: 100
                }} />
            <Text style={{ color: '#000', fontSize:24}}>ESTE ES EL HOME SCREEN</Text>
            <View style={{flex:1, color: '#000'}}>
              <Text>
                asdasd
              </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00343F',
  },
});
