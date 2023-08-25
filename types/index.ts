import type Meal from "../models/meal";

export type RootStackParamList = {
    Categories: undefined;
    MealsOverview: {mealId: string};
    About: undefined;
    //Feed: { sort: 'latest' | 'top' } | undefined;
  };

  //https://reactnavigation.org/docs/typescript/