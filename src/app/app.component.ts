import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { LoginComponent } from './Components/login/login.component';
import { GardenServicesComponent } from './Components/garden-services/garden-services.component';
import { HouseServicesComponent } from './Components/house-services/house-services.component';
import { HotelServicesComponent } from './Components/hotel-services/hotel-services.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './Services/auth.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    GardenServicesComponent,
    HouseServicesComponent,
    HotelServicesComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private authService: AuthService,private translate:TranslateService) {
    this.authService.CheckUserIsLoggedBefore()
    this.translate.setDefaultLang(localStorage.getItem('language')==null?'de':localStorage.getItem('language')!);
  }
  title = 'FriendsMGCleaning';
}
