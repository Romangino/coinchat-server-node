import * as dao from './follow-dao.js'

const FollowController = (app) => {
    const userFollowsUser = async (req, res) =>
        await dao.userFollowsUser(req.params.uid, req.params.ouid)
            .then(follows => res.json(follows))

    const userUnfollowsUser = async (req, res) =>
        await dao.userUnfollowsUser(req.params.uid, req.params.ouid)
            .then(status => res.send(status))

    const findUsersFollowingUser = async (req, res) => {
        const followee = req.params.uid
        const followers = await dao.findUsersFollowingUser(followee)
        res.json(followers)
    }

    const findUsersFollowedByUser = async (req, res) => {
        const follower = req.params.uid
        const followed = await dao.findUsersFollowedByUser(follower)
        res.json(followed)
    }

    app.post('/api/users/:uid/follow/:ouid', userFollowsUser)
    app.delete('/api/users/:uid/follow/:ouid', userUnfollowsUser)
    app.get('/api/users/:uid/followers', findUsersFollowingUser)
    app.get('/api/users/:uid/following', findUsersFollowedByUser)
}

export default FollowController