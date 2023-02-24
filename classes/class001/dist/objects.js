"use strict";
const user = {
    firstName: "Danilo",
    age: 18,
    email: "danilovicentindasilva@gmail.com",
    password: "12345",
    orders: [{ productId: "1", price: 200 }],
    register() {
        return "registrado!";
    },
};
user.password;
const printLog = (message) => { };
printLog(user.password);
const author = {
    age: 2,
    books: ["os pilares"],
    firstName: "Danilo",
    orders: [],
    email: "teste",
    register() {
        return "Registrado!";
    },
};
const emailUser = {
    email: "Dandjsakbdn",
    firstName: "Alex",
    login() {
        return "logado!";
    },
};
const newAuthor = {
    email: "author@",
    firstName: "author",
    books: [],
    login() {
        return "logado!";
    },
};
const grade = 1;
