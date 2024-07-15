import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';

//Screens
import {Home} from "../screens/Home";
import {Explore} from "../screens/Explore";
import {Stadistics} from "../screens/Stadistics";
import {Settings} from "../screens/Settings";

import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Bottomnav () {

const insets = useSafeAreaInsets();

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    paddingTop:insets.top,
    tabBarStyle:{
        height:60,
    }
}

return(
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name = "Home" component={Home}/>
        <Tab.Screen name = "Explore" component={Explore}/>
        <Tab.Screen name = "Stadistics" component={Stadistics}/>
        <Tab.Screen name = "Settings" component={Settings}/>
    </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Bottomnav/>
        </NavigationContainer>
    )
};