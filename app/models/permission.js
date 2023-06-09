const { DataTypes } = require('sequelize');
const db = require('../../config/sequelize');
const RolePermissions = require('./roles_permissions');
const Role = require('./role.model');

const Permission = db.define('permission', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
})


Permission.belongsToMany(Role, { through: RolePermissions });

Permission.sync({
    // force: true
}).then(() => {
    console.log("Permission table Created!!");
})

module.exports = Permission;