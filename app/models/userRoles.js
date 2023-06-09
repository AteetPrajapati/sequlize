users: {
    role_id: 0
}

roles: {
    id: 0
}

permissions: {
    id: 0
}

roles_permissons: {
    role_id: 0;
    permisson_id: 0
}

roles: [
    {
        name: "super_admin",
        id: 1
    },
    {
        name: "admin",
        id: 2
    },
    {
        name: "viewer",
        id: 3
    }
];

permissions: [
    {
        name: "userUpateAndCreate",
        id: 1
    },
    {
        name: "viewUsers",
        id: 2
    },
    {
        name: "updateOwnDetailAndUser",
        id: 3
    }
]

roles_permissons: [
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
]
