const validate = require('./index');

//const validate = require('lib/validate/src/index');

const dataExample = {
    username: "daiangm",
    email: "daiangm@gmail.com",
    password: "password",
    phone: "(62)99999-9999",
    cpf: "000.000.000-00",
    birthdate: "1990-12-09",
    uf: "GO"
}

const rules = [
    {
        name: "username",
        dataType: "string",
        len: { min: 3, max: 16 },
        required: true
    },
    {
        name: "email",
        custom: "email",
        required: true,
        message: { custom: "'{value}' não é um endereço de e-mail válido" }
    },
    {
        name: "password",
        dataType: "string",
        len: { min: 3, max: 16 },
        required: true,
        message: {required: "É obrigatório o preenchimento do campo '{field}'"}
    },
    {
        name: "phone",
        custom: "phone",
        require: true
    },
    {
        name: "cpf",
        regex: /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/i
    },
    {
        name: "birthdate",
        range: { min: "1900-01-01", max: "2003-01-01"}
    },
    {
        name: "uf",
        list: ["GO", "MT", "MS"],
        message: { list: "O valor do campo '{field}' precisa ser preenchido com um dos valores da lista: {list}" }
    }
]

const allowedFields = ["username", "email", "password", "phone", "cpf", "birthdate", "uf"]

const result = validate(dataExample, rules, allowedFields);

console.log(result);
