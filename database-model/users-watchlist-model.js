import mongoose from "mongoose";
import usersWatchlistSchema from "../schemas/users-watchlist-schema.js";

const usersWatchlistModel = mongoose.model(
    'UsersWatchlistModel', usersWatchlistSchema
);

export default usersWatchlistModel;