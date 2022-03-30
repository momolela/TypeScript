// 声明变量
declare let sun_host: string;
// 声明常量
declare const sun_hello: string;
// 声明函数
declare function sun_shop(n: number, m: numbrer): number;
// 声明类
declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number): void;
}
// 声明模块
declare module "lodash" {
    export function join(arr: any[]): void;
}
// 声明图片
declare module '*.png';
declare module '*.jpg';
declare module '.jpeg';
declare module '*.svg';
declare module '*.gif';
// 声明命名空间，定义 jquery 里面的 $ 的声明
declare namespace $ {
    export function get(url: string, fn: (data: object) => void): any
}