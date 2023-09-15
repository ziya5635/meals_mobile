
import { useContextSelector } from "use-context-selector";
import { Context } from "../store/context/context";
import ListMeals from "../components/ListMeals";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {
    const favoriteMealsIds = useContextSelector(Context, ({state}) => state.favoriteMeals);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));
    return <ListMeals meals={favoriteMeals} />
}

export default FavoriteScreen;