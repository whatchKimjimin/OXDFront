import { Routes } from '@angular/router';
import {LoginComponent} from "./user/login/login.component";
import {JoinComponent} from "./user/join/join.component";
import {MainComponent} from "./main/main.component";
import {ListComponent} from "./boat/list/list.component";
import {RentalComponent} from "./boat/rental/rental.component";
import {ViewComponent} from "./boat/view/view.component";

export const routes: Routes = [
  { path: 'boat/view' , component: ViewComponent},
  { path: 'boat/rental' , component: RentalComponent},
  { path: 'boat' , component: ListComponent},
  { path: 'join' , component: JoinComponent},
  { path: 'login' , component: LoginComponent},
  { path: '**' , component: MainComponent}
];
