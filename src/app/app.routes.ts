import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { LoginComponent } from './Components/login/login.component';
import { GardenServicesComponent } from './Components/garden-services/garden-services.component';
import { HouseServicesComponent } from './Components/house-services/house-services.component';
import { HotelServicesComponent } from './Components/hotel-services/hotel-services.component';
import { EditServiceComponent } from './Components/edit-service/edit-service.component';
import { loginInGuard } from './RouteGuards/is-logged.guard';
import { AddServiceComponent } from './Components/add-service/add-service.component';
import { authorizedToEditOrDeleteGuard } from './RouteGuards/authorized-to-edit-or-delete.guard';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ChangePassword', component: ChangePasswordComponent },
  { path: 'GardenServices', component: GardenServicesComponent },
  { path: 'HouseServices', component: HouseServicesComponent },
  { path: 'HotelServices', component: HotelServicesComponent },
  { path: 'Services', component: ServicesComponent },
  {
    path: 'AddNewService',
    component: AddServiceComponent,
    canActivate: [authorizedToEditOrDeleteGuard],
  },
  {
    path: 'EditService/:id',
    component: EditServiceComponent,
    canActivate: [authorizedToEditOrDeleteGuard],
  },
];
