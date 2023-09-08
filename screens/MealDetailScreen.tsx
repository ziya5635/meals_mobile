import { Text, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "../types";
import type { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import ListItems from "../components/ListItems";
import IconButton from "../components/IconButton";
import { useContextSelector } from "use-context-selector";
import { Context  } from "../store/context/context";

type MealDetailsProp = RouteProp<RootStackParamList, 'MealDetails'>;

function MealDetails() {
    const route = useRoute<MealDetailsProp>();
    const {title, duration, complexity, id,
         affordability, imageUrl, ingredients,
        isGlutenFree, isLactoseFree, isVegetarian,
        steps} = route.params;
    const isFavoriteMeal = useContextSelector(Context, ({state}) => state.favoriteMeals.some((item:string) => item === id));
    const toggle = useContextSelector(Context, ({actions}) => actions.toggle);
    const {width} = useWindowDimensions();
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        toggle(id)
    }, []);

    useEffect(() => {
        navigation.setOptions({title, headerRight: () => <IconButton color={isFavoriteMeal ? "white":"black"} name="star" onPress={onPress}/>})
    }, [title, onPress, isFavoriteMeal])

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: imageUrl}} style={[styles.image, {width: width, height: width}]}  />
            <Text style={styles.title}>{title}</Text>
            <Text style={{textAlign: 'center', color: 'white'}}>{`${duration}m  ${complexity.toUpperCase()}  ${affordability.toUpperCase()}`}</Text>
            <ListItems title="Ingredients" textitems={ingredients} />
            <ListItems title="Steps" textitems={steps} />
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