import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import Meal from "../models/meal";


function ListMeals({meals}:{meals:Array<Meal>}) {
    return (
    <View style={[styles.container]}>
        <FlatList data={meals}
         keyExtractor={(item) => item.id} renderItem={({item}) => <MealItem {...item}/>} />
    </View>
    )
}

export default ListMeals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingVertical: 25,
    },
})