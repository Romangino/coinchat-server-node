import * as dao from '../users/users-dao.js';

let currentUser = null;

const UsersController = app => {
    app.post('/api/users', createUser);
    app.post('/api/users/register', register)
    app.get('/api/users', findAllUsers);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
    app.get('/api/users/loginEmail', loginEmail)
    app.post('/api/users/login', login);
    app.post('/api/users/profile', profile);
    app.post('/api/users/logout', logout);
};
const createUser = async (req, res) => {
    const user = req.body
    const actualUser = await dao.createUser(user)
    res.json(actualUser)
};
const register = async (req, res) => {
    const user = req.body;
    const existingUser = await dao.findUserByUsername(user.email);
    if (existingUser) {  // email not unique -> already existing
        res.sendStatus(403);  // TODO: handle 403 in client!
        return;
    } else {
        const currentUser = await dao.createUser(user);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
    }
};
const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
};
const deleteUser = async (req, res) => {
    const uid = req.params.uid;
    const status = await dao.deleteUser(uid);
    res.json(status);
};
const updateUser = async (req, res) => {
    const uid = req.params.uid;
    const updates = req.body;
    const status = await dao.updateUser(uid, updates);
    res.json(status);
};
const loginEmail = async (req, res) => {
    const user = req.body;
    const existingUser = await dao.findUserByUsername(user.email);
    if (existingUser) {
        res.sendStatus(200);
        return;
    } else {  // TODO: handle 403 in client!
        res.sendStatus(404);
    }
};
const login = async (req, res) => {
    const credentials = req.body;
    const existingUser = await dao.findByCredentials(credentials);
    if (existingUser) {
        req.session['currentUser'] = existingUser;
        res.json(existingUser);
        return;
    } else {  // TODO: handle 403 in client!
        res.sendStatus(403);
    }
};
const profile = async (req, res) => {
    if (currentUser) {
        res.json(currentUser);
        return;
    } else {
        res.sendStatus(403);
    }
};
const logout = (req, res) => {
    currentUser = null;
    res.sendStatus(200);
};
export default UsersController;