import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-house-services',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './house-services.component.html',
  styleUrl: './house-services.component.css'
})
export class HouseServicesComponent {
Active: boolean[]=[true];
}
