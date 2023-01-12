import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

//pages
import Home from '../Pages/Home';
import Repositories from '../Pages/Repositories';

const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Início",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Repositories"
                component={Repositories}
                options={{
                    headerShown: false,
                    tabBarLabel: "Repositórios",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="folder-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}