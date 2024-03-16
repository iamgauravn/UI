import { Injectable, model } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }
  
  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>("https://localhost:7217/api/categories", model, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  

}
