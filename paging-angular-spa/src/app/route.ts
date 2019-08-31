import {Routes} from '@angular/router'
import { UsersComponent } from './users/users/users.component';


//routing 
export const appRoutes:Routes = [
    { path: "users", component: UsersComponent },
    { path: "**", redirectTo: "users", pathMatch: "full" },//default açılan sayfa mailatma
];