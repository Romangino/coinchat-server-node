import mongoose from "mongoose";
import usersSchema from "../schemas/users-schema.js";

const usersModel = mongoose.model(
    'UsersModel', usersSchema
);
export default usersModel;