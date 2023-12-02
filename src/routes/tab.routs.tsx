import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Screens/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />}}
      />
    </Tab.Navigator>
  );
}
