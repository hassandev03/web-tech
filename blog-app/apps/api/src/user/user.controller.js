const userService = require('./user.service');

class UserController {
    create(req, res) {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        const user = userService.createUser(name, email);
        res.status(201).json(user);
    }

    getAll(req, res) {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    }
}

module.exports = new UserController();
