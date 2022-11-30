import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = Schema({
    // default id is the comment ID
    authorID: {type: Schema.Types.ObjectId, ref: 'UsersModel', required: true},  // Same as objectID in user collection
    coinID: {type: String, required: true},    //  Same as coingecko coin ID
    detailContent: {type: String, required: true},    //  content of this comment
    likes: {type: Number, required: true, default: 0},   //  like numbers
    dislikes: {type: Number, required: true, default: 0},   // dislike numbers
    },
    { timestamps: true },{collection: 'comments'}
)

export default commentSchema