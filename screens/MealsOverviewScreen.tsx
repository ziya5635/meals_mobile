import { useNavigation, useRoute } from "@react-navigation/native";
import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import type { RootStackParamList } from "../types";
import type { RouteProp } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";
type MealsOverviewProp = RouteProp<RootStackParamList, 'MealsOverview'>;

function MealsOverviewScreen() {
    const navigation = useNavigation();
    const route = useRoute<MealsOverviewProp>();
    const meals_selected = MEALS.filter(meal => {
        return meal.categoryIds.includes(route.params.mealId)
    })
    useEffect(() => {
        //setting custom title to the screen
        const categoryTitle = CATEGORIES.find(item => item.id === route.params.mealId)?.title || 'Meals';
        navigation.setOptions({title: categoryTitle})    
    }, [route.params.mealId])
    return (
        <View style={[styles.container]}>
            <FlatList data={meals_selected}
             keyExtractor={(item) => item.id} renderItem={({item}) => <MealItem {...item}/>} />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingVertical: 25,
    },
})