
import Meal from "../models/meal";

export type RootStackParamList = {
    DrawerNavigator: undefined;
    MealsOverview: {mealId: string};
    MealDetails: Meal
    About: undefined;
    //Feed: { sort: 'latest' | 'top' } | undefined;
  };

  //https://reactnavigation.org/docs/typescript/