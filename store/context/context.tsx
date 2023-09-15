import { createContext } from "use-context-selector";
import { ReactNode } from "react";
import { useReducer } from "react";
//use this module
interface StateProps {
    favoriteMeals: Array<string>,
}

enum ActionKind {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    TOGGLE = 'TOGGLE'
}

interface ActionProps {
    type: ActionKind;
    payload: string;
}

interface ProviderProps {
    children: ReactNode
}

//https://dev.to/craigaholliday/using-the-usereducer-hook-in-react-with-typescript-27m1

function reducer(state: StateProps, action: ActionProps) {
    const {type, payload} = action;
    switch (type) {
        case ActionKind.ADD:
          return {
            ...state,
            favoriteMeals: [...state.favoriteMeals, payload]
          };
        case ActionKind.REMOVE:
          return {
            ...state,
            favoriteMels: state.favoriteMeals.filter((item) => item !== payload),
          };
        case ActionKind.TOGGLE:
            return {
                ...state,
                favoriteMels: [...state.favoriteMeals, payload]
            }
        default:
          return state;
      }
}

const initialState = {
    favoriteMeals: new Array<string>()
}
const stateContext = createContext({});
const actionContext = createContext({});

function ContextProvider({children}:ProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <stateContext.Provider value={state}>
            <actionContext.Provider value={dispatch}>
                {children}
            </actionContext.Provider>
        </stateContext.Provider >
    )
}

export default ContextProvider;