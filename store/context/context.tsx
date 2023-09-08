import { createContext } from "use-context-selector";
import useReduction from "use-reduction";
import { ReactNode, Reducer } from "react";

interface StateProps {
    favoriteMeals: Array<string>,
}

interface ActionProps {
    addToFavorites: (id: string) => void,
    removeFromFavorites: (id: string) => void,
    toggle: (id:string) => void
}

interface Payload {
    payload: string
}

interface Props {
    children: ReactNode
}

const initialState = {
    favoriteMeals: [],
}

const initialAction = {
    addToFavorites: (id: string) => {},
    removeFromFavorites: (id: string) => {},
    toggle: (id: string) => {}
}

const reducer = {
    addToFavorites: ({favoriteMeals}:StateProps, {payload}: Payload) => {
        return {favoriteMeals: [payload, ...favoriteMeals]};
    },
    removeFromFavorites: ({favoriteMeals}:StateProps, {payload}: Payload) => {
        const filteredMeals = favoriteMeals.filter((item) => item !== payload);
        return {favoriteMeals: filteredMeals};
    },
    toggle: ({favoriteMeals}:StateProps, {payload}: Payload) => {
        return {favoriteMeals: favoriteMeals.filter((item) => item !== payload)};
    }
}

const stateContext = createContext<StateProps>(initialState);
const actionContext = createContext<ActionProps>(initialAction);

//not fixed yet
function ContextProvider({children}:Props) {
    const [state, actions] = useReduction(initialState, reducer);
    return (
        <stateContext.Provider value={state}>
            <actionContext.Provider value={actions}>
                {children}
            </actionContext.Provider>
        </stateContext.Provider >
    )
}

export default ContextProvider;