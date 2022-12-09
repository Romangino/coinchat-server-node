import commentModel from "../database-model/comments-model.js";

export const createNewComment = async newComment => await commentModel.create(newComment);

export const findAllComment = async () => await commentModel.find({});

export const findUserByObjectID = async (objId, objType) =>
    await commentModel.find({objectID: objId, objectType: objType});

export const findCommentsByAuthorID = async uid => await commentModel.find({authorID: uid});

export const deleteComment = async commentID => await commentModel.deleteOne({_id: commentID});

export const updateComment = async (commentID, commentUpdates) => await commentModel
    .updateOne({_id: commentID}, {$set: commentUpdates});