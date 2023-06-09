const { DataTypes } = require('sequelize');
const db = require('../../config/sequelize');
const User = require('./user.model');
const RolePermissions = require('./roles_permissions');
const Permission = require('./permission');

const Role = db.define('role', {
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
})

Role.belongsToMany(Permission, { through: RolePermissions });

Role.sync({
    // force: true
}).then(() => {
    console.log("Role table Created!!");
})

module.exports = Role;