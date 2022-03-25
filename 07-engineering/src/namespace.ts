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