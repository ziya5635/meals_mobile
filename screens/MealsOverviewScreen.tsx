import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, FlatList } from "react-native";
import type { RootStackParamList } from "../types";
import type { RouteProp } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

type MealsOverviewProp = RouteProp<RootStackParamList, 'MealsOverview'>;

function MealsOverviewScreen() {
    const route = useRoute<MealsOverviewProp>();
    const meals_selected = MEALS.filter(meal => {
        return meal.categoryIds.includes(route.params.mealId)
    })
    return (
        <View>
            <FlatList data={meals_selected} keyExtractor={(item) => item.id} renderItem={({item}) => <MealItem {...item}/>} />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})