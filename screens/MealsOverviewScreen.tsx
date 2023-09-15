import { useNavigation, useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "../types";
import type { RouteProp } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect } from "react";
import ListMeals from "../components/ListMeals";

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

    return <ListMeals meals={meals_selected} />
}

export default MealsOverviewScreen;

