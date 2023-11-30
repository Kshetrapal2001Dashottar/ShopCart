
import { createContext, useReducer } from "react";
export const cartContext = createContext();
export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const tempState = state.filter((item) => action.payload.id === item.id);
                if (tempState.length > 0) {
                    return state;
                } else {
                    return [...state, action.payload];
                }
            case "INCREASE":
                const incState = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                return incState;
            case "DECREASE":
                const decState = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
                return decState;
            case "REMOVE":
                const remState3 = state.filter(
                    (item) => item.id !== action.payload.id
                );

                return remState3;

            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, []);
    const info = { state, dispatch };
    return (
        <cartContext.Provider value={info}>{props.children}</cartContext.Provider>
    );
};