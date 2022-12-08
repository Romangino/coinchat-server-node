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

async function findUserByObjectID(req, res) {
    const objID = req.query.objID;
    const objType = req.query.objType;


    await dao.findUserByObjectID(objID, objType).then(
        (thisRes) => {
            res.json(thisRes)
        }
    )
}

async function findUserByAuthorID(req, res) {
    const authorID = req.query.authorID;
    await dao.findUserByAuthorID(authorID).then(
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

function updateComment() {

}

const CommentsController = app => {
    app.post("/api/comment", createNewComment)
    app.get("/api/comment/all", findAllComment)
    app.get("/api/comment/object", findUserByObjectID)
    app.get("/api/comment/author", findUserByAuthorID)
    app.delete("/api/comment", deleteComment)
    app.put("/api/comment", updateComment)

}

export default CommentsController;