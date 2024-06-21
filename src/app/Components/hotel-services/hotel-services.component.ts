import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-hotel-services',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './hotel-services.component.html',
  styleUrl: './hotel-services.component.css'
})
export class HotelServicesComponent {
  Active: boolean[]=[true];
}
