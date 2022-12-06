import mongoose from "mongoose";
const { Schema } = mongoose;

const usersFollowUsersSchema = Schema({
    userID: {type: Schema.Types.ObjectId, ref: 'UsersModel', required: true},  // followee ID
    followedUserID: {type: Schema.Types.ObjectId, ref: 'UsersModel', required: true}, //  follower ID
    },
    {collection: 'users-follow-users'},
    { timestamps: true }
)

export default usersFollowUsersSchema