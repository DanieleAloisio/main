import { Component, OnInit } from '@angular/core';
import { QuestionsFilter } from 'src/app/filters/question-filter';
import { Answer } from 'src/app/models/answer.model';
import { Category } from 'src/app/models/category.model';
import { Question } from 'src/app/models/question.model';
import { CategoryService } from 'src/app/service/data/category.service';
import { LoaderService } from 'src/app/service/data/loader.service';
import { NavigationService } from 'src/app/service/data/navigation.service';
import { QuestionService } from 'src/app/service/data/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
    filter!: QuestionsFilter;

  categoryList!: Array<Category>;
  questionList!: Array<Question>;

  showSubmit: boolean = false;

  constructor(
    private catService: CategoryService,
    private questionService: QuestionService,
    private loadService: LoaderService,
    private navService: NavigationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadCategories();
    this.initializeFilter();
  }

  loadCategories(): void {

    this.categoryList = new Array<Category>();

    let defaultCategory: Category = new Category();

    defaultCategory.id = this.constants.defValues.defaultCategory;;
    defaultCategory.name = this.constants.placeholders.selectCategory;

    this.categoryList.push(defaultCategory);

    let catSubscr = this.catService.getCategories().subscribe((result) => {
      if (result) {
        this.categoryList = this.categoryList.concat(result.trivia_categories);
      }
      this.loadService.stopLoad();
      catSubscr.unsubscribe();
    });
  }

  initializeFilter(): void {
    this.filter = new QuestionsFilter();
  }

  createQuiz(): void {
    let questSubscr = this.questionService
      .getQuestions(this.filter)
      .subscribe((result) => {
        if (result && result.response_code === 0) {
          this.questionList = result.results;
          this.mapAnswers();
        }
        this.loadService.stopLoad();
        questSubscr.unsubscribe();
      });
  }

  mapAnswers(): void {
    this.questionList.forEach((question) => {
      let id: number = 0;
      question.all_answers = question.incorrect_answers.map(
        (answer: string) => {
          return new Answer(id++, answer, false, false);
        }
      );
      question.all_answers.push(
        new Answer(id++, question.correct_answer, false, true)
      );

      question.all_answers = this.shuffleAnswers(question.all_answers);
    });
  }

  shuffleAnswers(unshuffledAnswers: Array<Answer>): Array<Answer> {
    return unshuffledAnswers
      .map((answer: Answer) => ({ answer, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ answer }) => answer);
  }

  toggleAnswer(question: Question, answerId: number): void {
    question.all_answers?.forEach((answer: Answer) => {
      if (answer.id === answerId) {
        answer.checked = !answer.checked;
      } else {
        answer.checked = false;
      }
    });

    this.checkSubmission();
  }

  checkSubmission(): void {

    let unasweredQuestions: Array<Question> = this.getUnasweredQuestions(this.questionList);

    this.showSubmit = unasweredQuestions.length === 0;
  }

  getUnasweredQuestions(questionList: Array<Question>): Array<Question> {

    return questionList.filter((question: Question) => {
      let checkedAnswers: Array<Answer> | undefined = this.getCheckedAnswers(question.all_answers);

      return checkedAnswers?.length === 0;
    });

  }

  getCheckedAnswers(answers?: Array<Answer>): Array<Answer> | undefined {
    return answers?.filter((answer: Answer) => answer.checked);
  }

  submitAnswers(): void {

    let questionString: string = JSON.stringify(this.questionList);

    this.navService.navigate([this.endpoints.local.results], new SessionData(this.constants.dataKeys.question, questionString))

  }

}