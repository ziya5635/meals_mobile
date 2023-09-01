import { Text, View, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "../types";
import type { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import ListItems from "../components/ListItems";
type MealDetailsProp = RouteProp<RootStackParamList, 'MealDetails'>;

function MealDetails() {
    const {width} = useWindowDimensions();
    const route = useRoute<MealDetailsProp>();
    const {title, duration, complexity,
         affordability, imageUrl, ingredients,
        isGlutenFree, isLactoseFree, isVegetarian,
        steps} = route.params;
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({title})
    })
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