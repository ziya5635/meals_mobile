import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutView from './screens/AboutView';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import type { RootStackParamList } from './types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import ContextProvider from './store/context/context';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
//add details screen, vid 14th

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Categories' screenOptions={{drawerInactiveTintColor: 'white', drawerActiveTintColor: '#351401', drawerActiveBackgroundColor: '#e4baa1', drawerContentStyle: {backgroundColor: '#351401'}, headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', sceneContainerStyle: {backgroundColor: "#3f2f25"}}}>
      <Drawer.Screen component={CategoriesScreen} name='Categories' options={{drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>}}/>
      <Drawer.Screen component={FavoriteScreen} name='Favorites' options={{drawerIcon: ({color, size}) => <Ionicons name='heart' color={color} size={size} />}}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ContextProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='DrawerNavigator' screenOptions={{headerBackTitle: 'back', contentStyle: {backgroundColor: '#3f2f25'}, headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white'}}>
            <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{headerShown: false}}/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetails' component={MealDetailScreen} />
            <Stack.Screen name='About' component={AboutView}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </View>
      </ContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    //paddingHorizontal: 5,
  },
});
