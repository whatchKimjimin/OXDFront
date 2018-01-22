import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    JoinComponent
  ],
  declarations: [
    LoginComponent,
    JoinComponent
  ]
})
export class UserModule { }
