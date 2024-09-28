// src/app/store/reducers/style.reducer.ts
import { createReducer, on } from "@ngrx/store";
import { StyleComponent } from "../models/style-components";
import { changeStyle } from "../action/style-action";

export const initialState: StyleComponent = {
    typeStyled: 'blue' // valor inicial
};

// Reducer
const _styleReducer = createReducer(
    initialState,
    on(changeStyle, (state, { typeStyled }) => (
        {
            ...state,
            typeStyled
        }
       )
    )
);

// Exporta o reducer
export function styleReducer(state: StyleComponent | undefined, action: any) {
    return _styleReducer(state || initialState, action);
}
