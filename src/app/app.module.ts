// app.module.ts
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { LoginComponent } from './Components/login/login.component';
import { GardenServicesComponent } from './Components/garden-services/garden-services.component';
import { HouseServicesComponent } from './Components/house-services/house-services.component';
import { HotelServicesComponent } from './Components/hotel-services/hotel-services.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    FooterComponent,
    HouseServicesComponent,
    GardenServicesComponent,
    HotelServicesComponent,
    NavbarComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TranslateService,TranslateStore,TranslateLoader],
})
export class AppModule {}
