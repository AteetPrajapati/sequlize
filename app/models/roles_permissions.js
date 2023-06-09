const { DataTypes } = require('sequelize');
const db = require('../../config/sequelize');

const RolePermissions = db.define('roles_permissions', {
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "roles",
            key: 'id'
        }
    },
    permisson_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "permissions",
            key: 'id'
        }
    }
}, {
    timestamps: true,
    freezeTableName: true
})


RolePermissions.sync({
    // force: true
}).then(() => {
    console.log("RolePermissions table Created!!");
})

module.exports = RolePermissions;

// role_id: 0;
// permisson_id: 0