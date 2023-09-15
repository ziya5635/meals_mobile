
import { useContextSelector } from "use-context-selector";
import { Context } from "../store/context/context";
import ListMeals from "../components/ListMeals";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavoriteScreen() {
    const favoriteMealsIds = useContextSelector(Context, ({state}) => state.favoriteMeals);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));
    if (!favoriteMeals.length) {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>No favoirte meals yet</Text>
                </View>
            </View>
        )
    }
    return <ListMeals meals={favoriteMeals} />
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    innerContainer: {
        width: '80%',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'orange',
        padding: 4
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'   
    }
})