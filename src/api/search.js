/**
 * Created by huangyuening on 2018/11/15.
 */
import jsonp from '../js/jsonp'
import {commonParams,options} from  './config'

export  function getSearch() {
  const url='https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data= Object.assign({},commonParams,{
    notice:0,
    platform:'h5',
    needNewCode:1
  })
  return jsonp(url,data,options)
}
