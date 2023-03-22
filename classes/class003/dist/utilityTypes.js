"use strict";
//----------------------------------------------------
// Usados para manipular Types, ou transformá-los
// Partial - transforma todas as props em opcinais
function createUSer(user1) {
    return {
        name: "Danilo",
        age: 18,
        email: "danilovicentindasilva@gmail.com",
    };
}
// Record - constroí novo type onde, nos arguments, 1º são para keys, 2º para valores
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
// Instance Type - instancia um type baseado no param
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
