import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faHouse,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {Home} from '../Screens/Home';
import {Report} from '../Screens/Report';
import {Profile} from '../Screens/Profile';
import {Calendar} from '../Screens/calendar';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />}}
      />
      <Tab.Screen
        name="Reportar"
        component={Report}
        options={{tabBarIcon: () => <FontAwesomeIcon icon={faPlus} />}}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{tabBarIcon: () => <FontAwesomeIcon icon={faCalendar} />}}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{tabBarIcon: () => <FontAwesomeIcon icon={faUser} />}}
      />
    </Tab.Navigator>
  );
}
