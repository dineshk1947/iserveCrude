import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Config } from './app.config';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  api_url = Config.api_url;
  base_url = Config.base_url;
  constructor(public http : Http) { }
  getData(url){
    console.log("check for url in service", url);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let token = localStorage.getItem('token');
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', token);
      this.http.get(this.api_url + url, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
   }
   postData(url,dataObj){
     console.log("check for the url in services",url);
     
    console.log("service datat fech---", dataObj);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.base_url + url, dataObj,{headers:headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
   }
   editData(url,body){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let token = localStorage.getItem('token');
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', token);
      this.http.put(this.api_url + url, body, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
   }
   deleteData(url){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let token = localStorage.getItem('token');
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', token);
      this.http.delete(this.api_url + url, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
   }
}
