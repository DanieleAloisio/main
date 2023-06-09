import { Component, OnInit } from '@angular/core';
import { QuestionsFilter } from 'src/app/filters/question-filter';
import { ICategory } from 'src/app/models/ICategory';
import { IQuestion } from 'src/app/models/IQuestion';
import { CategoryService } from 'src/app/service/data/category.service';
import { LoaderService } from 'src/app/service/data/loader.service';
import { QuestionService } from 'src/app/service/data/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filter!: QuestionsFilter;

  categoryList!: Array<ICategory>;
  questionList!: Array<IQuestion>;
  trivia_categories!: Array<ICategory>;

  showSubmit: boolean = false;

  constructor(
    private catService: CategoryService,
    private questionService: QuestionService,
    private loadService: LoaderService
  ) {
  }


  ngOnInit() {
  }

  loadCategories(): void {

    this.categoryList = new Array<ICategory>();

    let defaultCategory!: ICategory;

    defaultCategory.id = -9999;
    defaultCategory.name = "Select a category";

    this.categoryList.push(defaultCategory);

    let catSubscr = this.catService.getCategories().subscribe((result) => {
      if (result) {
        this.categoryList = this.categoryList.concat(this.trivia_categories);
      }
      this.loadService.stopLoad();
      catSubscr.unsubscribe();
    });
  }

}