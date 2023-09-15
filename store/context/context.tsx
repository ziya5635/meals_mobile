import { createContext } from "use-context-selector";
import React, { ReactNode } from "react";
import { useReducer } from "react";

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
            favoriteMeals: state.favoriteMeals.filter((item) => item !== payload),
          };
        case ActionKind.TOGGLE:
            if (state.favoriteMeals.some((id) => id === payload)) {
                const favoriteMeals = state.favoriteMeals.filter((id) => id !== payload);
                return {...state, favoriteMeals};                
            } 
            return {
                ...state,
                favoriteMeals: [...state.favoriteMeals, payload]
            }
        default:
          return state;
      }
}

interface InitialStateType{
    favoriteMeals: Array<string>
}
const initialState = {
    favoriteMeals: new Array<string>()
}

export const Context = createContext<{state: InitialStateType, dispatch: React.Dispatch<any>}>({state: initialState, dispatch: () => null});

function ContextProvider({children}:ProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{state, dispatch}}>
                {children}
        </Context.Provider >
    )
}

export default ContextProvider;