export const ACTION_CLICKED_FAVORITE = "ACTION_CLICKED_FAVORITE" as const;

export const onClickFavorite = (clickedItem: string) => {
    return {
        type: ACTION_CLICKED_FAVORITE,
        payload: clickedItem,
    };
};

export type FavoriteAction = ReturnType<typeof onClickFavorite>;
