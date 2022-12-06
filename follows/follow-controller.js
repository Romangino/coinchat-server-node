import * as dao from './follow-dao.js'

const FollowController = (app) => {
    const userFollowsUser = async (req, res) => {
        const follow = req.body
        const currentUser = req.session['currentUser']
        follow.follower = currentUser._id
        const actualFollow = await dao.userFollowsUser(follow)
        res.json(actualFollow)
    }

    const userUnfollowsUser = async (req, res) =>
        await dao.userUnfollowsUser(req.params.fid)
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

    app.post('/api/follows', userFollowsUser)
    app.delete('/api/follows/:fid', userUnfollowsUser)
    app.get('/api/users/:uid/followers', findUsersFollowingUser)
    app.get('/api/users/:uid/following', findUsersFollowedByUser)
}

export default FollowController