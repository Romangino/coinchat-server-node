import mongoose from "mongoose";
const { Schema } = mongoose;

const usersWatchlistSchema = Schema({
    // default id is watchlist id
    userID: {type: Schema.Types.ObjectId, ref: 'UsersModel', required: true},  // User ID
    coinIDList:[{type: String}],  // an array of coinID, same as ID return from Coingecko
    },
    { timestamps: true },{collection: 'user-watchlist-schema'}
)

export default usersWatchlistSchema