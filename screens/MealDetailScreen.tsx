import { Text, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "../types";
import type { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import IconButton from "../components/IconButton";
import { useContextSelector } from "use-context-selector";
import { Context } from "../store/context/context";
import MealRecipe from "../components/MealRecipe";

type MealDetailsProp = RouteProp<RootStackParamList, 'MealDetails'>;

function MealDetails() {
    const route = useRoute<MealDetailsProp>();
    const {title, duration, complexity, id,
         affordability, imageUrl, ingredients,
        isGlutenFree, isLactoseFree, isVegetarian,
        steps} = route.params;
    const isFavoriteMeal = useContextSelector(Context, ({state}) => state.favoriteMeals.some((item:string) => item === id));
    const dispatch = useContextSelector(Context, ({dispatch}) => dispatch);
    const {width} = useWindowDimensions();
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        dispatch({payload:id, type:'TOGGLE'})
    }, []);

    useEffect(() => {
        navigation.setOptions({title, headerRight: () => <IconButton color="white" name={isFavoriteMeal ? 'star' : 'star-outline'} onPress={onPress}/>})
    }, [title, onPress, isFavoriteMeal])

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: imageUrl}} style={[styles.image, {width: width, height: width}]}  />
            <Text style={styles.title}>{title}</Text>
            <Text style={{textAlign: 'center', color: 'white'}}>{`${duration}m  ${complexity.toUpperCase()}  ${affordability.toUpperCase()}`}</Text>
            <MealRecipe title="Ingredients" textitems={ingredients} />
            <MealRecipe title="Steps" textitems={steps} />
        </ScrollView>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        padding: 10,
    },
    text: {color: 'white'},
    image: {
        resizeMode: 'cover',
    }
})