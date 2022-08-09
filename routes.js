exports.routes = {
    test: {
        crudl: "mock-entities",
        auth: {
            signIn: "auth/sign-in/mock",
            signUp: "auth/sign-up/mock"
        }
    },
    admins: {
        create: "admins",
        readOne: "users",
        readAll: "users",
        readMe: "users",
        update: "users",
        updateMe: "users",
        delete: "users"
    },
    users: {
        create: "users",
        readOne: "users",
        readAll: "users",
        readMe: "users",
        update: "users",
        updateMe: "users",
        delete: "users"
    },
    auth: {
        admin: {
            login: "/auth/admins/sign-in",
            register: "/auth/admins/sign-up",
            recoveryPassword: "/auth/admins/forgot-password",
            resetPassword: "/auth/admins/password-reset"
        },
        client: {
            login: "",
            register: "",
            recoveryPassword: "",
            resetPassword: ""
        }
    },
    crudl: {
        create: "",
        read: "",
        update: "",
        delete: "",
        list: ""
    },
    client: {
        create: "",
        readOne: "",
        readAll: "",
        readMe: "",
        update: "",
        updateMe: "",
        delete: ""
    }
};