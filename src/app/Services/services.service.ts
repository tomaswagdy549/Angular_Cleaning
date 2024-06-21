import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  addService(insertedService: {
    serviceName: string;
    serviceDescription: string;
    serviceImage: File | null;
    categoryId:number
  }) {
    const formData = new FormData();
    formData.append('serviceName', insertedService.serviceName);
    formData.append('serviceDescription', insertedService.serviceDescription);
    formData.append('serviceImage', insertedService.serviceImage!);
    formData.append('categoryId', insertedService.categoryId.toString());
    return this.http.post(
      `${environment.baseUrl}/api/Service/addService`,
      formData
    );
  }
  getServiceById(id:number):Observable<{name:string,description:string,catId:number,id:number}> {
    return this.http.get<{name:string,description:string,catId:number,id:number}>(
      `${environment.baseUrl}/api/Service/GetByID/${id}`,
    );
  }
  editService(editedService: {
    name: string;
    description: string;
    catId: number;
    id: number;
  }):Observable<any> {
    const formData = new FormData();
    formData.append('serviceName', editedService.name);
    formData.append('serviceDescription', editedService.description);
    formData.append('categoryId', editedService.catId.toString());
    return this.http.put(
      `${environment.baseUrl}/api/Service/edit/${editedService.id}`,
      formData
    );
  }
  getCategory():Observable<{name:string,description:string,id:number}[]> {
    return this.http.get<{name:string,description:string,id:number}[]>(
      `${environment.baseUrl}/api/Category/GetAllCategories`,
    );
  }
  addCategory(insertedCategory : {Name:string,Description:string}):Observable<{name:string,description:string}> {
    return this.http.post<{name:string,description:string}>(
      `${environment.baseUrl}/api/Category/AddCategory`,
      insertedCategory
    );
  }
}
