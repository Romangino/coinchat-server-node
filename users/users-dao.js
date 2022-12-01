import usersModel from "./users-model.js";

export const createUser = async user => await usersModel.create(user);
export const findAllUsers = async () => await usersModel.find();
export const findUserById = async uid => await usersModel.findById(uid);
export const findUserByUsername = async email => await usersModel.findOne({email: email});
export const findByCredentials = async ({email, password}) => await usersModel
    .findOne({email, password});
export const deleteUser = async uid => await usersModel.deleteOne({_id: uid});
export const updateUser = async (uid, userUpdates) => await usersModel
    .updateOne({_id: uid}, {$set: userUpdates});