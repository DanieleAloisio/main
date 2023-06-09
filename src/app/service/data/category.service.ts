import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryList } from 'src/app/models/category-list.model';
import { endpoint } from 'src/app/utils/costant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<CategoryList> {
    return this.http.get<CategoryList>(endpoint.external.category);
  }
}