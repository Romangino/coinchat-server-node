import watchlistModel from "./watchlist-model.js";

export const findUserWatchlist = (uid) =>
    watchlistModel.find({uid: uid})

export const addToWatchlist = (item) =>
    watchlistModel.create(item)

export const removeFromWatchlist = (wid) =>
    watchlistModel.deleteOne(
        {_id: wid}
    )