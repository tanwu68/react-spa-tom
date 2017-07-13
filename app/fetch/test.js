/**
 * Created by TanWu on 2017/6/19.
 */
import { get } from './get.js';

import { post } from './post.js';

export function testFetch() {
    //return get('/api2/api/product/indexData?type=wap');

    let data = {
        account: '13010001031',
        password: "090c806df9e197602716130172937530"
    };
    let url='/api/signin';
    post(url,data).then(ret => {
        console.log(ret);
    });
}
