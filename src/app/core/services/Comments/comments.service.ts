import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  Create_Comment(data:any):Observable<any>{
    return this.http.post(`${baseUrl}/comments`,data)
  }
  Get_Post_comments(PostId:any):Observable<any>{
    return this.http.get(`${baseUrl}/posts/${PostId}/comments`)
  }
  Update_comments(commId:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/comments/${commId}`,data)
  }
  Delete_comments(commId:any):Observable<any>{
    return this.http.delete(`${baseUrl}/comments/${commId}`)
  }
  
}
