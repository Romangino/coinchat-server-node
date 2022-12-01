import usersModel from "./users-model.js";

export const createUser = async user => await usersModel.create(user);
export const findAllUsers = async () => await usersModel.find();
export const findUserById = async uid => await usersModel.findById(uid);
export const findByUsername = async email => await usersModel.findOne({email});
export const findByCredentials = async (handle, password) => await usersModel
    .findOne({handle, password}, {password: false});
export const deleteUser = async uid => await usersModel.deleteOne({_id: uid});
export const updateUser = async (uid, userUpdates) => await usersModel
    .updateOne({_id: uid}, {$set: userUpdates});