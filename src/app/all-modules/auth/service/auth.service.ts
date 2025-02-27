import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Role } from '../model/role';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //base url for the api
  public baseUrl = environment.baseUrl + '/api/auth';

  // for requestAuth adding /requestAuth adding
  public requestAuthApiEndPoint = this.baseUrl+'/requestAuth';
  public userApiEndPoint = this.baseUrl+'/user';
  public roleApiEndpont = this.baseUrl+'/role';




  constructor(private httpClient: HttpClient) { }

  // create request auth
  createRequestAuth(payload: any) {
    return this.httpClient.post(this.requestAuthApiEndPoint+'/create', payload);
  }

  updateRequestAuth(payload: any) {
    return this.httpClient.put(this.requestAuthApiEndPoint+'/update', payload);
  }


  getUserProfile(id: number) {
    return this.httpClient.get(this.userApiEndPoint+'/get/'+id);
  }

  //create role
  createRole(payload: any) {
    return this.httpClient.post<Role>(this.roleApiEndpont+'/create', payload);
  }

  //get role
  getRoleList(queryParams) {
    return this.httpClient.get<Role>(this.roleApiEndpont+'/getAll', {params: queryParams});
  }
  //get role by id
  getRoleById(id: number) {
    return this.httpClient.get<Role>(this.roleApiEndpont+'/get/'+id);
  }

  //update role
  updateRole(payload: any) {
    return this.httpClient.put<Role>(this.roleApiEndpont+'/update', payload);
  }

  //delete role
  deleteRole(id: number) {
    return this.httpClient.delete(this.roleApiEndpont+'/delete/'+id);
  }

  // get users
  getUsers(queryParams){
    return this.httpClient.get<User>(this.userApiEndPoint+'/getAll', {params: queryParams});
  }

  //create user
  createUser(payload: any) {
    return this.httpClient.post<User>(this.userApiEndPoint+'/create', payload);
  }

  //delete user
  deleteUser(id: number) {
    return this.httpClient.delete(this.userApiEndPoint+'/delete/'+id);
  }

  // get user by id
  getUserById(id: number) {
    return this.httpClient.get<User>(this.userApiEndPoint+'/get/'+id);
  }

  //update user
  updateUser(payload: any) {
    return this.httpClient.put<User>(this.userApiEndPoint+'/update', payload);
  }

}
