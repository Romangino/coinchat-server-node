import * as dao from '../daos/comments-dao.js';

async function createNewComment(req, res) {
    const newComment = req.body
    await dao.createNewComment(newComment).then(
        (thisRes) => {
            res.json(thisRes)
        }
    )
}

async function findAllComment(req, res) {
    await dao.findAllComment().then(

        (thisRes) => {
            res.json(thisRes)
        }
    )
}

async function findCommentByObjectID(req, res) {
    const objID = req.query.objID;
    const objType = req.query.objType;


    await dao.findCommentByObjectID(objID, objType).then(
        (thisRes) => {
            res.json(thisRes)
        }
    )
}

const findCommentsByAuthorID = async (req, res) =>
    await dao.findCommentsByAuthorID(req.params.uid)
        .then(comments => res.json(comments))

async function findCommentByAuthorID(req, res) {
    const authorID = req.query.authorID;
    await dao.findCommentByAuthorID(authorID).then(
        (thisRes) => {
            res.json(thisRes)
        }
    )
}

async function deleteComment(req, res) {
    const commentID = req.query.commentID;
    await dao.deleteComment(commentID).then(
        (thisRes) => {
            res.json(thisRes)
        }
    ).catch(
        (err) => console.log(err)
    )
}

async function updateComment() {
    // get comment current document

}

async function createNewUCRecord(req, res) {
    const newUCRecord = req.body;
    const commentID = req.body.commentID;
    const reaction = req.body.reactionType;
    await dao.createNewUCRecord(newUCRecord).then(
        async (thisRes) => {
            await dao.updateComment(commentID, {$inc: {likes: reaction}})
            res.sendStatus(200);
        }
    )
}

async function findAllUCRecord(req, res) {
    await dao.findAllUCRecord().then(

        (thisRes) => {
            res.json(thisRes)
        }
    )
}

async function findUCRecordByUserID(req, res) {
    const uid = req.query.uid;
    await dao.findUCRecordByUserID(uid).then(
        (thisRes) => {
            res.json(thisRes)
        }
    )
}

const CommentsController = app => {
    app.post("/api/comment", createNewComment)
    app.get("/api/comment/all", findAllComment)
    app.get("/api/comment/object", findCommentByObjectID)
    app.get("/api/comment/author", findCommentByAuthorID)
    app.get("/api/users/:uid/comments", findCommentsByAuthorID)
    app.delete("/api/comment", deleteComment)
    // app.put("/api/comment", updateComment)

    app.post("/api/comment/react", createNewUCRecord)
    app.get("/api/comment/react/all", findAllUCRecord)
    app.get("/api/comment/react/uid", findUCRecordByUserID)

}

export default CommentsController;