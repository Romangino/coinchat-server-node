import mongoose from "mongoose";
const { Schema } = mongoose;

const usersWatchlistSchema = Schema({
    // default id is watchlist id
    userID: {type: Schema.Types.ObjectId, ref: 'UsersModel', required: true},  // User ID
    coinIDList:[{type: String}],  // an array of coinID, same as ID return from Coingecko
    },
    {collection: 'user-watchlist-schema'},
    { timestamps: true }
)

export default usersWatchlistSchema