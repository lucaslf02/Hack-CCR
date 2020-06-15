import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSafeArea } from "react-native-safe-area-context";


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    const insets = useSafeArea();
  
    return ( 
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


export default MyTabs
