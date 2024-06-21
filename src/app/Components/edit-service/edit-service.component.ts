import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [CommonModule, FormsModule,TranslateModule],
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.css',
})
export class EditServiceComponent implements OnInit {
  editedService!: {
    name: string;
    description: string;
    catId: number;
    id: number;
  };
  categoriesOptions: { name: string; id: number; description: string }[] = [];
  id: number = 0;
  constructor(
    private service: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.editedService = { name: '', description: '', catId: 0, id: 0 };
    this.route.paramMap.subscribe((params) => {
      this.id = JSON.parse(params.get('id')!);
      this.service.getServiceById(this.id).subscribe({
        next: (response) => {
          this.editedService = response;
        },
        error: (error) => {
          this.errors = error.error.errors;
        },
      });
      this.service.getCategory().subscribe({
        next: (response) => {
          this.categoriesOptions = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
  editService() {
    this.service.editService(this.editedService).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Done',
          text: 'Service Updated Successfuly',
          showCancelButton: true,
        });
        this.router.navigateByUrl('/Services');
      },
      error: (error) => {
        this.errors = error.error.errors;
      },
    });
  }
  errors = {}
  objectvalues = Object.values;
}
