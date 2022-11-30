import mongoose from "mongoose";
const { Schema } = mongoose;

const usersReactCommentSchema = Schema({
    userID: {type: Schema.Types.ObjectId, ref: 'UsersModel', required: true},  // User ID
    commentID: {type: Schema.Types.ObjectId, ref: "CommentsModel", required: true},  // Comment ID
    reactionType: {type: Number, required: true, enum: [1, 0, -1]},  //  1 for like, 0 for neutral, -1 for dislike
    },
    { timestamps: true },{collection: 'user-react-comment'}
)

export default usersReactCommentSchema