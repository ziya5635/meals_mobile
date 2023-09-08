
import { Text, View } from "react-native";
import { useContextSelector } from "use-context-selector";
import { Context } from "../store/context/context";

function FavoriteScreen() {
    const favorites = useContextSelector(Context, ({state}) => state.favoriteMeals);
    
    return (
        <View>
            {favorites.map((item: string) => <Text style={{color: 'white'}} key={item}>{item}</Text>)}
        </View>
    )
}

export default FavoriteScreen;