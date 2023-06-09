const { DataTypes } = require('sequelize');
const db = require('../../config/sequelize');
const Role = require('./role.model');

const User = db.define('User', {

    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    mobile_number: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "roles",
            key: 'id'
        }
    }
}, {
    timestamps: true
});

User.hasOne(Role);
Role.belongsToMany(User);

User.sync({
    // force: true
}).then(() => {
    console.log("User Table Created!!");
})

module.exports = User;