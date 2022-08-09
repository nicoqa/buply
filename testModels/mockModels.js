/*
{
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string"
}
*/

let firstName = "Juan";
let lastName = "Perez";
let email = "ecloudqa1+" + (Math.floor(Math.random() * 1000) + 1) + "@gmail.com";
let password = "Ecloud123!!" // + (Math.floor(Math.random() * 10000000) + 1);

exports.mockModel = {
    valid: {
        login: {
            "email": "judith.rego@ecloudsolutions.com",
            "password": "12345678"
        },
        register: {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }
    },
    invalid: {
        login: {
            noEmail: {
                "email": "",
                "password": "ecloud123"
            },
            wrongEmail: {
                "email": "judith.reZZZgo@ecloudsolutions.com",
                "password": "ecloud123"
            },
            noPassword: {
                "email": "judith.rego@ecloudsolutions.com",
                "password": ""
            },
            wrongPassword: {
                "email": "judith.rego@ecloudsolutions.com",
                "password": "ecloud123666"
            }
        },
        register: {
            noFirstName: {
                "firstName": "",
                "lastName": lastName,
                "email": email,
                "password": password
            },
            noLastName: {
                "firstName": firstName,
                "lastName": "",
                "email": email,
                "password": password
            },
            noEmail: {
                "firstName": firstName,
                "lastName": lastName,
                "email": "",
                "password": password
            },
            noFormatEmail: {
                noCom: "ecloudqa1@gmail",
                noAt: "ecloudqa1gmail.com"
            },
            noPassword: {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": ""
            }
        }
    }
};