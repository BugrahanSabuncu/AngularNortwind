
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/loginModel';
import { SingleResponceModel } from '../Models/SingleResponceModel';
import { TokenModel } from '../Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44357/api"

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleResponceModel<TokenModel>>{
    let newPath=this.apiUrl+"/Auth/login"
    return this.httpClient.post<SingleResponceModel<TokenModel>>(newPath,loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
