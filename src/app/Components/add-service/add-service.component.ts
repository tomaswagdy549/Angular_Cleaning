import { Component } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',

  standalone: true,
  styleUrls: ['./add-service.component.css'],
  imports: [FormsModule, CommonModule, TranslateModule],
})
export class AddServiceComponent {
  insertedService: {
    serviceName: string;
    serviceDescription: string;
    serviceImage: File | null;
    categoryId: number;
  } = {
    serviceName: '',
    serviceDescription: '',
    serviceImage: null,
    categoryId: 0,
  };
  insertedCategory: {
    CategoryName: string;
    CategoryDescription: string;
  } = {
    CategoryName: '',
    CategoryDescription: '',
  };
  categoriesOptions: { name: string; id: number; description: string }[] = [];
  displayCategoryForm: boolean = false;
  constructor(private service: ServicesService, private router: Router) {
    this.getCategory();
  }
  getCategory() {
    this.service.getCategory().subscribe({
      next: (res: any) => {
        this.categoriesOptions = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  addService() {
    this.service.addService(this.insertedService).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: 'Done',
          text: 'Service Added Successfuly',
          showCancelButton: true,
        });
        this.router.navigateByUrl('/Services');
      },
      error: (error: any) => {
        this.serviceErrors = error.error.errors;
      },
    });
  }
  handleImageInput(img: any) {
    const file = img.target.files[0] as File;
    this.insertedService.serviceImage = file;
  }
  addCategory() {
    this.service
      .addCategory({
        Name: this.insertedCategory.CategoryName,
        Description: this.insertedCategory.CategoryDescription,
      })
      .subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Done',
            text: 'Category Added Successfuly',
            showCancelButton: true,
          });
          this.getCategory();
        },
        error: (error) => {
          this.categoryErrors = error.error.errors;
        },
      });
  }
  serviceErrors = {};
  categoryErrors = {};
  objectvalues = Object.values;
}
