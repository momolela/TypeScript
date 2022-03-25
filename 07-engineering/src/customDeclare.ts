function fun(n: number, m: number): number {
    return n + m;
}
fun(1, 1); // 调用的时候有类型提示

// 调用的时候有类型调用
const box: HTMLDivElement = document.querySelector('.box') as HTMLDivElement;


export function useDeclare() {
    // 引入自定义的 js 文件，这里直接访问 js 中定义的变量
    console.log(sun_host);
    console.log(sun_hello);
    console.log(sun_shop(1, 1));

    const p = new Person('sun', 5);
    console.log(p.name);
}
