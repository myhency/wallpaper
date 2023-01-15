import { FavoriteAction } from "../actions/favorite";

export const initialState: FavoriteState = {
    favoriteList: [],
};

export const favoriteListReducer = (
    state: FavoriteState = initialState,
    action: FavoriteAction
) => {
    if (action.type === "ACTION_CLICKED_FAVORITE") {
        const hasItem =
            state.favoriteList.filter((item) => item === action.payload)
                .length > 0;
        if (hasItem) {
            return {
                ...state,
                favoriteList: state.favoriteList.filter(
                    (item) => item !== action.payload
                ),
            };
        }
        return {
            ...state,
            favoriteList: [...state.favoriteList, action.payload],
        }
    }

    return { ...state };
};

type FavoriteState = {
    favoriteList: string[];
};
