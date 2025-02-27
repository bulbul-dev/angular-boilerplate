import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RequestAuthCreateComponent } from './components/requestauth/create/request-auth-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserProfileComponent } from './components/user/profile/user-profile.component';
import { ChangePasswordComponent } from './components/user/passwordchange/change-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { RoleCreateComponent } from './components/role/create/role-create.component';
import { RoleListComponent } from './components/role/list/role-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RoleEditComponent } from './components/role/edit/role-edit.component';
import { UserCreateComponent } from './components/user/create/user-create.component';
import { UserListComponent } from './components/user/list/user-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { UserEditComponent } from './components/user/edit/user-edit.component';


@NgModule({
  declarations: [AuthComponent, RequestAuthCreateComponent, UserProfileComponent, ChangePasswordComponent, RoleCreateComponent, RoleListComponent, RoleEditComponent, UserCreateComponent, UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class AuthModule { }
