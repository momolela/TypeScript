// axios 模块自带 d.ts 文件，所以我们调用它的 get 方法，可以直接调用不会报错
import axios from 'axios';
// loadsh 模块没有自带 d.ts 文件，需要我们自己创建描述文件，然后声明使用，调用才不会报错
import lodash from 'lodash';
// 引入图片模块
import logoImg from './src/img/logo.png';
// cdn 引入 jquery，然后配置描述文件中的作用域定义了 $

export function useOtherCore() {
    axios.get('https://api.shop.eduwork.cn/api/index').then(res => {
        console.log(res.data, 'axios 获取的数据');
    });

    console.log(lodash.join(['edu', 'work ']));

    $.get('https://api.shop.eduwork.cn/api/index', (data) => {
        console.log(data, 'jquery 的 ajax 获取的数据');
    })
}
