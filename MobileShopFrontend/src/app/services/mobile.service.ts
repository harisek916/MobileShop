import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  baseUrl:string="http://127.0.0.1:8000/api/v1/mobiles/"
  emitId=new Subject()

  constructor(private http:HttpClient) { }

  getAllMobiles(){
    return this.http.get(this.baseUrl)
  }

  retrieveMobile(id:number){
    return this.http.get(`${this.baseUrl}${id}/`)
  }

  addMobile(data:any){
    return this.http.post(this.baseUrl,data)
  }

  updateMobile(id:number,data:any){
    return this.http.put(`${this.baseUrl}${id}/`,data)
  }

  deleteMobile(id:number){
    return this.http.delete(`${this.baseUrl}${id}/`)
  }

  dispatchId(id:any){
    return this.emitId.next(id)
  }



}
