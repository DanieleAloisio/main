import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/ICategory';
import { IQuestion } from '../models/IQuestion';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories = () => {

    return this.http.get<ICategory[]>(`https://opentdb.com/api_category.php`) 
  }

}