> ts 的工程化 - webpack 打包 ts

- 以前用以下的命令可以对 ts 进行打包或者配置

```javascript
tsc start.ts // 编译 ts 文件
node start.js // 执行编译后的 js 文件

tsc start.ts -w // 实时监控 ts 文件的修改实时编译

tsc --init // ts 配置文件初始化，执行后会在当前文件夹下生成 tsconfig.json
target：编译成对应的版本
ooutdir：js编译到对应的目录

tsc // 直接编译全部 ts 文件
// vscode 的 ctrl + shift + b 的 tsc build 也可以实现

tsc -w // 实时监控全部 ts 文件的修改实时编译
// vscode 的 ctrl + shift + b 的 tsc watch 也可以实现

ts-node // 该组件可以直接运行 ts 文件，不用先编译，这个用得多
```

- 但是实际在项目开发过程中我们还是用 webpack 进行 ts 打包配置，下面我们介绍这个项目中如何做到使用 webpack 打包 ts 的

1. 创建 package.json 文件
   ```dos
   npm init -y
   ```
2. 安装 webpack
   ```dos
   npm i webpack webpack-cli webpack-dev-server -D
   ```
3. 手动创建 webpack.config.js 文件，加上所有的配置，对应以下的步骤配置

   ```javascript
   // node 提供的 path 模块，不用我们自己去寻地址，直接导入即可
   const path = require("path");
   // 安装的插件
   const htmlWebpackPlugin = require("html-webpack-plugin");

   // webpack 所有的配置文件在这里
   module.exports = {
     // 指定入口文件，可以是字符串，数组（多页面），对象三种格式
     entry: "./src/index.ts",

     // 打包后的输出配置
     output: {
       // path: './build'
       path: path.resolve(__dirname, "build"), // 输出到哪个位置
       filename: "bundle.js", // 输出的文件
     },

     // 指定具体格式文件的处理
     module: {
       // .ts 文件，用 ts-loader 转换，排除 node_modules 里面的 .ts 文件
       rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
     },

     // 插件使用
     plugins: [
       new htmlWebpackPlugin({
         template: "./src/index.html",
       }),
     ],

     // 现在想多个 ts 之间互相引用模块，为了能够 import 其他 ts 的 export 的东西，需要在webpack 配置文件中配置 resolve
     resolve: {
       extensions: [".ts", ".js"],
     },

     // 打包模式
     // 开发模式：打包的结果是我们能看懂的
     // 生产模式：打包的结果会去除 console，注释，空格，空行
     mode: "development",
   };
   ```

4. 在 src 文件夹下创建 入口文件
5. 安装 typescript 和 ts-loader，用来编译和转换 ts 文件
   ```dos
   npm i typescript ts-loader -D
   ```
6. 编写代码
7. 因为我们装了 typescript，所以我们还要创建 tsconfig.json 文件，具体配置可以参照 02-配置
   ```dos
   tsc --init
   ```
8. 打包
   ```dos
   webpack
   ```
9. 可以用 node 直接允许 js 文件
   ```dos
   node ./build/bundle.js
   ```
10. 我们考虑要通过 html 页面的方式访问项目，所以开始安装 html-webpack-plugin
    ```dos
    npm i html-webpack-plugin -D
    ```
11. 在 webpack 配置文件中配置使用 html-webpack-plugin，指定 html 模板文件
12. 不想每次执行 webpack 去打包，现在要用上 webpack-dev-server
    ```dos
    webpack serve
    ```
13. 可以在 package.json 中配置执行脚本
14. 现在想多个 ts 之间互相引用模块，为了能够 import 其他 ts 的 export 的东西，需要在 webpack 配置文件中配置 resolve

> ts 的工程化 - 命名空间

- 以前要防止全局变量污染的方式有：

  - {}
  - (function(){ })() 立即执行函数
  - 闭包
  - global 全局对象命名空间
  - function
  - let
  - 模块化 - 导出、导入

- 现在可以使用 ts 的 namespace

  ```javascript
  // 命名空间可以导出
  export namespace One {

     // 可以定义子命名空间
     export namespace OneChild {
        export function add(n: number): number {
              return ++n;
        }

        export const name: string = 'this is namespace OneChild ----------';
     }

     // 命名空间的方法可以导出
     export function add(n: number, m: number): number {
        return n + m;
     }

     // 命名空间的变量也可以导出
     export const name: string = 'this is namespace One ---------------';
  }

  export namespace Two {
     export function add(n: string, m: string): string {
        return n + m;
     }
     export const name: string = 'this is namespace Two ---------------';
  }
  ```

  ```javascript
  // 命名空间的调用
  console.log(One.name);
  console.log(One.add(1, 1));
  console.log("-------------------------------------");
  console.log(One.OneChild.name);
  console.log(One.OneChild.add(1));
  console.log("-------------------------------------");
  console.log(Two.name);
  console.log(Two.add("1", "1"));
  console.log("-------------------------------------");
  ```

> ts 的工程化 - 描述声明文件

- TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用 TypeScript 诸如类型检查等特性功能。
- 为了解决这个问题，需要将这些库里的函数和方法体去掉后 **只保留导出类型声明**，而产生了一个描述 JavaScript 库和模块信息的声明文件( **.d.ts** )。
- 通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。
- 使用 d.ts 文件[可以自定义]来解决此问题
- [微软提供的 TypeScript 官方的 d.ts](https://github.com/microsoft/TypeScript/tree/main/lib)

- 如下是使用的步骤

1. 自定义一个要使用的 js 文件
   ```javascript
   let sun_host = "sunzj";
   const sun_hello = "HELLO";
   function sun_shop(n, m) {
     return n + m;
   }
   ```
2. 在项目任意位置定义一个 .d.ts 文件

   ```javascript
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
   ```

3. 在 ts 文件中使用声明描述文件中的东西，会有类型提示

   ```javascript
   function fun(n: number, m: number): number {
      return n + m;
   }
   fun(1, 1); // 调用的时候有类型提示

   // 调用的时候有类型调用
   const box: HTMLDivElement = document.querySelector('.box') as HTMLDivElement;


   export function useDeclare() {
      // 引入自定义的 js 文件，这里直接访问 js 中定义的变量也会有类型提示，且能编译通过，因为有 d.ts 文件作为描述文件进行声明
      console.log(sun_host);
      console.log(sun_hello);
      console.log(sun_shop(1, 1));

      const p = new Person('sun', 5);
      console.log(p.name);
   }
   ```

> ts 的工程化 - 使用第三方 JavaScript 库

- 我们引入第三方的 JavaScript 库，要使用他的 api

  - 要么它本身带了 d.ts 描述文件
  - 要么需要我们去给他定义出来我们需要使用的 api 的 d.ts 文件

    ```javascript
    // axios 模块自带 d.ts 文件，所以我们调用它的 get 方法，可以直接调用不会报错
    import axios from "axios";
    axios.get("https: //api.shop.eduwork.cn/api/index").then((res) => {
      console.log(res);
    });
    ```

    ```javascript
    // loadsh 模块没有自带 d.ts 文件，需要我们自己创建描述文件，然后声明使用，调用才不会报错
    import lodash from "lodash";
    console.log(lodash.join(["edu", "work "]));

    // d.ts 文件中的配置
    declare module 'lodash' {
      export function join(any[]):void;
    }
    ```

  - 要么是用大神写好的 d.ts 文件

    - [这是所有提供 d.ts 的链接](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)
    - [这是对提供 d.ts 进行搜索的链接，有 @types 的就是带有 d.ts 文件的](https://www.typescriptlang.org/dt/search?search=)

  - 如：在 ts 中使用 jquery

    ```text
    npm install jquery

    npm install --save-dev @types/jquery

    npm install typings

       -安装typing，用于获取jquery的d.ts文件，这步过后你的根目录会多一个typings.json文件。

    import $ = require("jquery");
    这样$符号就可以想在JavaScript中引入jquery一样作为选择器使用
    ```
