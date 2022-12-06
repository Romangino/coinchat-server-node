import mongoose from "mongoose";
import commentSchema from "../schemas/comments-schema.js";

const commentModel = mongoose.model(
    'CommentsModel', commentSchema
);
export default commentModel;