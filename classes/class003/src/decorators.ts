/*
Sendo uma tecnologia experimental do TS (2023), é muito útil
para o conceito de 'reutilização' de um código que é bastante
repetido 
*/

function log(target: any) {
	console.log(target)
}

@log
class Foo {}
