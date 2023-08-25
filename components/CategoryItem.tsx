import { StyleSheet, useWindowDimensions, Text, TouchableOpacity } from "react-native";
import Category from "../models/category";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp} from '@react-navigation/native-stack';
import type { RootStackParamList } from "../types";

function CategoryItem({id, color, title}:Category) {
    const { width } = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const onPressHandler = () => {
        navigation.navigate("MealsOverview", {mealId: id});
    }
    return (
        <TouchableOpacity onPress={onPressHandler} style={[{backgroundColor: color, height: (width-5)*0.48}, styles.container]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexBasis: '48%',
        margin: '1%',
        opacity: 1,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    }
})