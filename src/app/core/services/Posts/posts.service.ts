import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  Create_Post(data:any):Observable<any>{
    return this.http.post(`${baseUrl}/posts`,data)
  }

  Get_All_Posts():Observable<any>{
    return this.http.get(`${baseUrl}/posts`)
  }
  Get_friends():Observable<any>{
    return this.http.get(`${baseUrl}/posts?limit=10`)
  }
Get_My_Posts(myToken:any):Observable<any>{
    return this.http.get(`${baseUrl}/users/${myToken}/posts`)
  }
  Get_single_Post(postId:any):Observable<any>{
    return this.http.get(`${baseUrl}/posts/${postId}`)
  }
  Update_Post(postId:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/posts/${postId}`,data)
  }
  Delete_Post(postId:any):Observable<any>{
    return this.http.delete(`${baseUrl}/posts/${postId}`)
  }

}
