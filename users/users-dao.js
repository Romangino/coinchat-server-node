import usersModel from "./users-model.js";

export const createUser = user => usersModel.create(user);
export const register = async user => {
    const existingUser = await findByUsername(user.handle);
    if (existingUser) {

    }
};
export const findAllUsers = () => usersModel.find();
export const findUserById = uid => usersModel.findById(uid);
export const findByUsername = handle => usersModel.findOne({handle});
export const findByCredentials = (handle, password) => usersModel
    .findOne({handle, password}, {password: false});
export const deleteUser = uid => usersModel.deleteOne({_id: uid});
export const updateUser = (uid, userUpdates) => usersModel
    .updateOne({_id: uid}, {$set: userUpdates});