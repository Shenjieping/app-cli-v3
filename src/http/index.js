/**
* @file index.js
* @author shenjp@founder.com
* @date 2020-06-19 22:17:05
*/
import axios from 'axios';
import urls from '@/assets/js/baseUrl';
import qs from 'qs';

axios.interceptors.request.use(request => {
  if (request.method === 'post') {
    // request.headers['Content-Type'] = 'application/jsoncharset=UTF-8'
    /* let tmpBody = ''
        Object.keys(request.data).map(item => {
            let value = request.data[item]
            tmpBody +=
                `${item}=` +
                encodeURIComponent(
                    typeof value === 'object' ? JSON.stringify(value) : value
                ) +
                (item === 't' ? '' : '&')
        })
        request.data = tmpBody */
  }
  if (request.data && request.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    request.data = qs.stringify(request.data);
  }
  return request;
});

const apis = Object.assign({}, urls);
const apiFactory = api => {
  let { url, method, ...others } = api;
  method = method === 'post' ? 'post' : 'get';
  const timeout = 1000 * 500;

  const isFormData = others &&
    others.headers &&
    others.headers['Content-Type'] === 'multipart/form-data';

  return params => {
    const request = isFormData
      ? axios({
        url: url,
        method,
        ...others,
        data: params,
        timeout
      })
      : axios.request({
        url: url,
        method,
        ...others,
        timeout,
        [method === 'get' ? 'params' : 'data']: {
          ...params,
          t: new Date().getTime()
        }
      });

    return request
      .then(({ data }) => {
        return Promise.reject(data);
      })
      .catch(res => {
        let resString = res.toString();
        if (
          ~resString.indexOf('Network') &&
          !~url.indexOf('getnewquestionnum')
        ) {
          console.error('网络错误');
        }

        return Promise.reject(res);
      });
  };
};

const IO = {};

Object.keys(apis).map(item => {
  IO[item] = apiFactory(apis[item]);
});

export default IO;