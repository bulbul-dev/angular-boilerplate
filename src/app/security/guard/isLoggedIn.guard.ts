import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LocalstorageService } from '../service/localstorage.service';


@Injectable({ providedIn: 'root' })
export class IsLoggedInGuard implements CanActivate {

  constructor(private localstorageService: LocalstorageService,private toastrService:ToastrService,protected router: Router,) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      // if user is already logged in then redirect to home page
      if(this.localstorageService.isLoggedIn()){
        return true;
      }
      // if user is not logged in then redirect to login page
      this.router.navigate(['login']);
      return false;

  }
}
