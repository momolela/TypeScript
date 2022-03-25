declare let sun_host: string;
declare const sun_hello: string;
declare function sun_shop(n: number, m: numbrer): number;
declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number): void;
}


// 声明命名空间
declare namespace space {
    function func(str: string): string; let num: number;
}
// 声明模块
declare module "modelname" {
    export let a: number
    export function b(): number
    export namespace c {
        let cd: string
    }
}
