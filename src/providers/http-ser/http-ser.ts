import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/*
  Generated class for the HttpSerProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpSerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpSerProvider Provider');
  }

  // apiUrl = 'http://139.199.62.61';
  apiUrl = 'http://localhost:8080';

  public post(url: string, params: any = null, successCallback, errorCallback): any {
    url = this.getUrl(url);
    return this.http.post(url, params).subscribe((res: any) => {
      this.responseSuccess(res, function (msg) {
        if (successCallback) {
          successCallback(res, msg);
        }
      });
    }, err => {
      if (errorCallback) {
        errorCallback(err);
      }
    });
  }

  // get数据
  public get(url: string, params?: any): any {
    // url = this.getUrl(url);
    return this.http.get(url, params);
  }

  // 删除相关请求
  public delete(url: string, params?: any): any {
    // url = this.getUrl(url);
    return this.http.delete(url, params);
  }

  /**
   * 头部信息获取，主要用于处理token
   */
  // private getHeaders() {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  //   };
  //   return new HttpHeaders(headers);
  // }

  /**
   * 处理正式发布环境导致的路径问题，请求出错
   * @param url
   * @returns {any}
   */
  getUrl(url) {
    // TODO 开发环境这段可以先注释掉
    let realUrl;
    if (url.startsWith('api')) {
      realUrl = this.apiUrl + '/' + url;
    } else {
      realUrl = this.apiUrl + url
    }
    url = realUrl;
    return url;
  }

  /**
   * 处理响应的事件
   * @param res
   * @param {Function} error
   */
  private responseSuccess(res: any, callback) {
    if (res.code !== '0') { // 失败
      if (res.msg) {
        callback({code: res.code, msg: res.msg});
      } else {
        const data = res.data;
        let errorMsg = '操作失败！';
        data.map(i => {
          errorMsg = i.errorMsg + '\n';
        });
        callback({code: res.code, msg: errorMsg});
      }
    } else {
      callback(res);
    }
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param err
   */
  // private requestFailed(url: string, err) {
  //   let msg = '请求发生异常';
  //   const status = err.status;
  //   if (status === 0) {
  //     msg = '请求失败，请求响应出错';
  //   } else if (status === 404) {
  //     msg = '请求失败，未找到请求地址';
  //   } else if (status === 500) {
  //     msg = '请求失败，服务器出错，请稍后再试';
  //   } else {
  //     msg = '未知错误，请检查网络';
  //   }
  //   return msg;
  //
  // }
}
