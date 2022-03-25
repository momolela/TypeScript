import { sub } from './global'
import { One, Two } from './namespace'
import { useDeclare } from './customDeclare'

function add(n: number, m: number): number {
    return n + m;
}

console.log(add(1, 2));
console.log(sub(2, 1));

// 命名空间的调用
console.log(One.name);
console.log(One.add(1, 1));
console.log('-------------------------------------');
console.log(One.OneChild.name);
console.log(One.OneChild.add(1));
console.log('-------------------------------------');
console.log(Two.name);
console.log(Two.add('1', '1'));
console.log('-------------------------------------');


// 自定义声明调用
useDeclare();