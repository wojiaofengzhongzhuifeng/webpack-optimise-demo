// index 的css
import  './css/public.css'
import  './css/index.css'

// 可以随便变更引入顺序
import 'jquery'
import './js/public'
import './js/nav'
import 'flexslider'

import {aa} from './js/helper.js' // 使用自己写的函数
import {cloneDeep} from 'lodash'
import {cloneDeep as cloneDeepEs} from 'lodash-es'
aa()

let test = {a: 1231111111233}
let test111 = cloneDeep(test)
let test112 = cloneDeepEs(test)
console.log(test111);
console.log(test112);
