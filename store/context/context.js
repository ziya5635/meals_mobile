import {createContext} from 'use-context-selector';
import useReduction from "use-reduction";

const initialState = {
    favoriteMeals: [],
}

export const Context = createContext();

const reducer = {
    addToFavorites: (state, {payload}) => {
        return {...state, favoriteMeals: [...state.favoriteMeals, payload]};
    },
    removeFromFavorites: (state, {payload}) => {
        const favoriteMeals = state.favoriteMeals.filter((item) => item.id !== payload.id);
        return {...state, favoriteMeals};
    },
    toggle: (state, {payload}) => {
        if (state.favoriteMeals.some((id) => id === payload)) {
            const favoriteMeals = state.favoriteMeals.filter((item) => item.id !== payload.id);
            return {...state, favoriteMeals};                
        }
        return {...state, favoriteMeals: [...state.favoriteMeals, payload]};
    }
}

function ContextProvider({children}) {
    const [state, actions] = useReduction(initialState, reducer);
    return (
        <Context.Provider value={{state, actions}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;