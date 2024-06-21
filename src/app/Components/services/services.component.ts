import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpHeaders
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../Enviroment/enviroment';
import { AuthService } from '../../Services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink,TranslateModule], // Include CommonModule here
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  public services: any[] = []; // Array to hold the services
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.loggedUser.subscribe((value) => {
      if (value.email == environment.adminEmail) {
        this.isUserAuthorizeToEditOrDelete = true;
      }
    });
  }
  isUserAuthorizeToEditOrDelete: boolean = false;
  ngOnInit(): void {
    this.getMethod();
  }
  public getMethod() {
    this.http
      .get<any[]>(`${environment.baseUrl}/api/Service/getAllServices`)
      .subscribe((data) => {
        this.services = data; // Assign the fetched data to the services array
      });
  }
  deleteService(service: any) {
    const deleteUrl = `${environment.baseUrl}/api/Service/${service.id}`;
    this.http.delete(deleteUrl).subscribe(
      () => {
        console.log('Service deleted successfully:', service);
        this.services = this.services.filter((s) => s.id !== service.id);
      },
      (error) => {
        console.error('Error deleting service:', error);
      }
    );
  }
  page: string = 'AddService';
}
