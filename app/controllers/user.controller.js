const User = require("../models/user.model");
const responseCode = require("../utils/response-codes");
const db = require("../../config/sequelize");
const Role = require("../models/role.model");
const Permission = require("../models/permission");
const RolePermissions = require("../models/roles_permissions");
const { Op } = require("sequelize");

exports.findAll = async (req, res) => {
    const users = await User.findAll({ include: Role });
    res.send(users);
};

exports.create = async (req, res) => {
    try {
        await db.transaction(async function (transaction) {
            const user = await User.create(req.body, { transaction });
            res.send(user);
        })
    } catch (error) {
        res.status(responseCode.BadRequest).send({ error: (error.errors.map((e) => e.message)).toString() });
    }
};

exports.deleteById = async (req, res) => {
    try {
        db.transaction(async function (transaction) {
            await User.destroy({ where: { id: req.params.id } }, { transaction });
            res.status(responseCode.OK).send({ message: "User Delete Sucessfully.." });
        })
    } catch (error) {
        res.status(responseCode.BadRequest).send(error);
    }
}

exports.updateById = async (req, res) => {
    console.log(req.params.id, req.body);
    try {
        await db.transaction(async function (transaction) {
            await User.update(req.body, { where: { id: req.params.id } }, { transaction });
            res.send({ message: "Updated Succefully.." });
        })
    } catch (error) {
        res.status(responseCode.BadRequest).send((error.errors.map((e) => e.message)).toString());
    }
}

exports.seed = async (req, res) => {

    await Role.sync({ force: true });
    await Permission.sync({ force: true });
    await RolePermissions.sync({ force: true });
    await User.sync({ force: true });

    const ROLES_TO_SEED = [
        { role: "super_admin", },
        { role: "admin", },
        { role: "viewer" }
    ];

    const PERMISSONS_TO_SEED = [
        { name: "userUpateAndCreate" },
        { name: "viewUsers" },
        { name: "updateOwnDetailAndUser" }
    ];

    const ROLES_PERMISSONS = [
        {
            role_id: 1,
            permisson_id: 3
        },
        {
            role_id: 3,
            permisson_id: 2
        },
        {
            role_id: 2,
            permisson_id: 1
        }
    ];

    const SUPER_ADMIN = {
        first_name: "Ateet",
        last_name: "Prajapati",
        email: "ateetprajapati2425@gmail.com",
        password: "test123",
        dob: "2002-06-07",
        mobile_number: "9328409012",
        token: "",
        role_id: 1
    }

    try {
        await db.transaction(async function (transaction) {
            const roles = await Role.bulkCreate(ROLES_TO_SEED, { transaction });
            const permissions = await Permission.bulkCreate(PERMISSONS_TO_SEED, { transaction });
            const roles_permissons = await RolePermissions.bulkCreate(ROLES_PERMISSONS, { transaction })
            const SuperAdmin = await User.create(SUPER_ADMIN, { transaction });
            res.send({ roles, permissions, roles_permissons, SuperAdmin });
        })
    } catch (error) {
        res.status(responseCode.BadRequest).send(error);
    }
}