import * as dao from '../users/users-dao.js';
import {findByCredentials, findByUsername} from "../users/users-dao.js";

let currentUser = null;
const usersController = app => {
    const createUser = async (req, res) => {
        const user = req.body;
        const actualUser = await dao.createUser(user);
        res.json(actualUser);
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
    const register = async (req, res) => {
        const user = req.body;
        const existingUser = await findByUsername(user.handle);
        if (existingUser) {
            res.sendStatus(403);
            return
        } else {
            const actualUser = await dao.createUser(user);
            currentUser = actualUser;
            res.json(actualUser);
        }
    };
    const login = async (req, res) => {
        const credentials = req.body;
        const existingUser = await findByCredentials(credentials.handle, credentials.password);
        if (!existingUser) {
            res.sendStatus(403);
            return
        } else {
            currentUser = existingUser;
            res.json(existingUser);
        }
    };
    const profile = async (req, res) => {
        if (currentUser) {
            res.json(currentUser);
            return
        } else {
            res.sendStatus(403);
        }
    };
    const logout = (req, res) => {
        currentUser = null;
        res.sendStatus(200);
    };

    app.post('/users', createUser);
    app.get('/users', findAllUsers);
    app.delete('/users/:uid', deleteUser);
    app.put('/users/:uid', updateUser);
    app.post('/register', register);
    app.post('/login', login);
    app.post('/profile', profile);
    app.post('/logout', logout);
};
export default usersController;