/**
 * Created by huangyuening on 2018/11/10.
 */
import  jsonp from '../js/jsonp'
import {commonParams, options} from './config'
/*import axios from 'axios'*//*import axios from 'axios'*/


export  function  getReacommend() {
  const  url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({},commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1

  })
  return jsonp(url,data,options)

}


