import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-garden-services',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './garden-services.component.html',
  styleUrl: './garden-services.component.css'
})
export class GardenServicesComponent {
  Active: boolean[]=[true];
}
