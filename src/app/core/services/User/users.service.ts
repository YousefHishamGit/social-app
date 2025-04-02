import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  signUp(data:object):Observable<any>{
    return this.http.post(`${baseUrl}/users/signup`,data)
  }
  signIn(data:object):Observable<any>{
    return this.http.post(`${baseUrl}/users/signin`,data)
  }
  changePassword(data:object):Observable<any>{
    return this.http.patch(`${baseUrl}/users/change-password`,data)
  }
  upload_profile_photo(data:object):Observable<any>{
    return this.http.put(`${baseUrl}/users/upload-photo`,data)
  }
  Get_logged_User_Data():Observable<any>{
    return this.http.get(`${baseUrl}/users/profile-data`)
  }

  logOut():void{
    localStorage.removeItem('token');
  }
}
