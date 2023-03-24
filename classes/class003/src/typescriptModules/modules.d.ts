// Module padrao
export function sayHello() {
	console.log("Hello!")
}

// Ambient modules
declare module "Module" {
	function sayHello2() {
		console.log("Hello2!")
	}
}

// Namespaces
namespace Namespace {
	function sayHello3() {
		console.log("Hello3!")
	}
}

