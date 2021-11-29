export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQAqI7yCmECdEeBwxHc3CRZjv3KWhOVDibF4mY4UzaQF97pCQZJ_WWR4IrCkJewXC5894i_Iu_K5jcMsRTyI3C03EP0BRmn9heOaEIT7Jzm8ZR_mjbyR1lBziRo2JPgRIov-2Um--SAB3TwQkua4gzMZJ07ehizwqy88qwmXoPGKGsOXVa9H",
};

const reducer = (state, action) => {
    console.log("Action >>> ", action);

    // Action --> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };

        default:
            return state;

    }
}

export default reducer;