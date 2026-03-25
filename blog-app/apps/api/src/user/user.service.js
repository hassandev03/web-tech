const User = require('./user.entity');

// Simulated database
const users = [];

class UserService {
    createUser(name, email) {
        const id = users.length + 1;
        const user = new User(id, name, email);
        users.push(user);
        return user;
    }

    getAllUsers() {
        return users;
    }
}

module.exports = new UserService();
