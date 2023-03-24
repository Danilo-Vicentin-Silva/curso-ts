// Semelhantes aos do JS, temos os imports, exports e namespaces em TS
// Module padrão
import { sayHello } from "./modules";
sayHello();
// Ambient module
import * as Module from './modules';
// Namespaces
Module.Namespace;
{
    function newFunction() {
        console.log('New function');
    }
}
