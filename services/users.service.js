const db = require('../models/users.models');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

async function createUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
    const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        password: hashedPassword,
        email: user.email,
        favoris: user.favoris,
        admin: false,
    };
    console.log(newUser);
    return db.create(newUser);
}

function getAllUsers() {
    return db.findAll();
}

function getUserById(id) {
    return db.findByPk(id)
}

function updateUser(id, user) {
    return db.update(user, { where: { id } });
}

function deleteUser(id) {
    return db.destroy({ where: { id } });
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
