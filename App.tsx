import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import CategoriesView from './screens/CategoriesView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutView from './screens/AboutView';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
//add details screen, vid 14th
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Categories' screenOptions={{headerBackTitle: 'back', contentStyle: {backgroundColor: '#3f2f25'}, headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white'}}>
            <Stack.Screen name='Categories' component={CategoriesView}
             options={{title: 'All Categories'}}/>
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetails' component={MealDetails} />
            <Stack.Screen name='About' component={AboutView}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </View>
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
