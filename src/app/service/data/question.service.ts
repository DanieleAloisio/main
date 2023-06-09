import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionsFilter } from 'src/app/filters/question-filter';
import { IQuestion } from 'src/app/models/IQuestion';

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  getQuestions = (filter: QuestionsFilter) => {
    return this.http.get<IQuestion[]>(`https://opentdb.com/api_category.php`, {
      params: this.getQueryParams(filter)
    });
  }

  getQueryParams(data: QuestionsFilter): HttpParams {
    var params: HttpParams = new HttpParams()
    .set('amount', data.amount)
    .set('category', data.category)
    .set('difficulty', data.difficulty)
    .set('type', data.type);

    return params;
  }
}