import Meal from "../models/meal";
import { Text, Image, View, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp} from '@react-navigation/native-stack';
import type { RootStackParamList } from "../types";

function MealItem( props: Meal) {
    const {width} = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {title, imageUrl, affordability, complexity, duration } = props;
    const onPress = () => {
        console.log(imageUrl);
        navigation.navigate('MealDetails', {...props});    
    }
    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            <View style={styles.innerContainer}>
                <Image style={[styles.image, {height: width*.8, width: width*.8}]} source={{uri: imageUrl}} />
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={{textAlign: 'center'}}>{`${duration}m  ${complexity.toUpperCase()}  ${affordability.toUpperCase()}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flex: 1,
        alignItems: 'stretch',
    },
    innerContainer: {
        elevation: 4,
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 10
    },
    textContainer: {
        backgroundColor: 'white',
        width: '80%',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 10,
        gap: 5
    },
    textTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
})