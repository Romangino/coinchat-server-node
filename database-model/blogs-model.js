import mongoose from "mongoose";
import blogSchema from "../schemas/blogs-schema.js";

const blogsModel = mongoose.model(
    'BlogModel',
    blogSchema
)

export default blogsModel