import Meal from "../models/meal";
import { Text } from "react-native";
//continue with using other Meal props to style this component(like images)
function MealItem({title, imageUrl}: Meal) {
    return <Text>{title}</Text>
}

export default MealItem;