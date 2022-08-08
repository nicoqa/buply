exports.routes = {
    test: {
        crudl: "mock-entities",
        auth: {
            signIn: "auth/sign-in/mock",
            signUp: "auth/sign-up/mock"
        }
    },
    admin: {
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
            login: "users/login",
            register: "auth/register/",
            recoveryPassword: "auth/reset-password/",
            resetPassword: "auth/reset-password/"
        },
        client: {
            login: "",
            register: "",
            recoveryPassword: "",
            resetPassword: ""
        }
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