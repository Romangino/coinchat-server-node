import followModel from "./follow-model.js";

export const userFollowsUser = (uid, ouid) =>
    followModel.create({follower: uid, followee: ouid})

export const userUnfollowsUser = (uid, ouid) =>
    followModel.deleteOne({follower: uid, followee: ouid})

export const findUsersFollowingUser = (uid) =>
    followModel.find({followee: uid})
        .populate('follower')
        .exec()

export const findUsersFollowedByUser = (uid) =>
    followModel.find({follower: uid})
        .populate('followee')
        .exec()