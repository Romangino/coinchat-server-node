import mongoose from "mongoose";
import usersFollowUsersSchema from "../schemas/users-follow-users-schema.js";

const usersFollowUsersModel = mongoose.model(
    'UsersFollowUsersModel', usersFollowUsersSchema
);
export default usersFollowUsersModel;